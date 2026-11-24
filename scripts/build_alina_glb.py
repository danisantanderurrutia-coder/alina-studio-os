import os
import re
import bpy
import mathutils

TEXTURE_DIR = "/Users/danielsantander/Desktop/alina-studio-os/scripts/extracted_textures"
EVE_FBX = "/Users/danielsantander/Documents/UnityMovement/My project/Assets/Characters/Eve_J_Gonzales.fbx"
ANIM_DIR = "/Users/danielsantander/Documents/UnityMovement/My project/Assets/Animations"
OUT_GLB = "/Users/danielsantander/Desktop/alina-studio-os/public/models/alina.glb"

ANIMS = [
    ("Idle", "Idle.fbx"),
    ("Walk", "Walk.fbx"),
    ("Rumba", "Rumba Dancing.fbx"),
    ("Laying", "Female Laying Pose.fbx"),
    ("HipHop", "Hip Hop Dancing.fbx"),
]


def iter_fcurves(action):
    """Yield (channelbag_or_action, fcurve) supporting Blender 5.x layered actions and legacy actions."""
    if hasattr(action, "layers"):
        for layer in action.layers:
            for strip in layer.strips:
                for cb in strip.channelbags:
                    for fc in list(cb.fcurves):
                        yield cb.fcurves, fc
    elif hasattr(action, "fcurves"):
        for fc in list(action.fcurves):
            yield action.fcurves, fc


def clean_action_for_armature(action, valid_bones):
    """Strip mixamorig: prefix and drop fcurves targeting bones absent on Eve."""
    to_remove = []
    for owner_fcurves, fc in iter_fcurves(action):
        dp = fc.data_path
        if "mixamorig:" in dp:
            dp = dp.replace("mixamorig:", "")
            fc.data_path = dp
        m = re.search(r'pose\.bones\["([^"]+)"\]', dp)
        if m:
            bname = m.group(1)
            if bname not in valid_bones:
                to_remove.append((owner_fcurves, fc))
    for owner_fcurves, fc in to_remove:
        owner_fcurves.remove(fc)


def main():
    bpy.ops.wm.read_factory_settings(use_empty=True)
    bpy.ops.import_scene.fbx(filepath=EVE_FBX)

    eve_arm = next(o for o in bpy.data.objects if o.type == "ARMATURE")
    eve_mesh = next(o for o in bpy.data.objects if o.type == "MESH")
    valid_bones = set(eve_arm.data.bones.keys())

    # Remove initial tiny T-pose action from Eve import
    if eve_arm.animation_data:
        eve_arm.animation_data.action = None
    for act in list(bpy.data.actions):
        bpy.data.actions.remove(act)

    # Normalize character height to ~1.72m and rest feet on Z=0
    # Eve's imported armature scale is 0.01 -> height 1.3907m; 1.72 / 1.3907 = 1.2368
    scale_factor = 1.72 / 1.3907
    eve_arm.scale = (
        eve_arm.scale[0] * scale_factor,
        eve_arm.scale[1] * scale_factor,
        eve_arm.scale[2] * scale_factor,
    )
    bpy.context.view_layer.update()

    # Replace material with customized Alina PBR textures
    mat = eve_mesh.data.materials[0]
    mat.name = "Alina_Custom_PBR"
    mat.use_nodes = True
    nt = mat.node_tree
    nt.nodes.clear()

    out_node = nt.nodes.new("ShaderNodeOutputMaterial")
    bsdf = nt.nodes.new("ShaderNodeBsdfPrincipled")
    bsdf.inputs["Roughness"].default_value = 0.58
    if "Specular IOR Level" in bsdf.inputs:
        bsdf.inputs["Specular IOR Level"].default_value = 0.35
    if "Metallic" in bsdf.inputs:
        bsdf.inputs["Metallic"].default_value = 0.04

    tex_diff = nt.nodes.new("ShaderNodeTexImage")
    tex_diff.image = bpy.data.images.load(os.path.join(TEXTURE_DIR, "alina_diffuse.png"))

    tex_norm = nt.nodes.new("ShaderNodeTexImage")
    tex_norm.image = bpy.data.images.load(os.path.join(TEXTURE_DIR, "alina_normal.png"))
    tex_norm.image.colorspace_settings.name = "Non-Color"

    norm_map = nt.nodes.new("ShaderNodeNormalMap")
    norm_map.inputs["Strength"].default_value = 0.65

    nt.links.new(tex_diff.outputs["Color"], bsdf.inputs["Base Color"])
    nt.links.new(tex_norm.outputs["Color"], norm_map.inputs["Color"])
    nt.links.new(norm_map.outputs["Normal"], bsdf.inputs["Normal"])
    nt.links.new(bsdf.outputs["BSDF"], out_node.inputs["Surface"])

    # Import animations one by one cleanly
    if not eve_arm.animation_data:
        eve_arm.animation_data_create()

    imported_actions = []
    for anim_name, fname in ANIMS:
        existing_objs = set(bpy.data.objects)
        existing_acts = set(bpy.data.actions)

        bpy.ops.import_scene.fbx(filepath=os.path.join(ANIM_DIR, fname))

        new_objs = [o for o in bpy.data.objects if o not in existing_objs]
        new_acts = [a for a in bpy.data.actions if a not in existing_acts]

        # Keep only the first imported action, rename it, clean bone prefixes
        kept_act = None
        for act in new_acts:
            if kept_act is None:
                act.name = anim_name
                clean_action_for_armature(act, valid_bones)
                act.use_fake_user = True
                kept_act = act
                imported_actions.append(act)
            else:
                bpy.data.actions.remove(act)

        # Delete temporary imported objects/meshes/armatures
        for o in new_objs:
            bpy.data.objects.remove(o, do_unlink=True)

    # Clear unused orphan data
    bpy.ops.outliner.orphans_purge(do_recursive=True)

    # Push each action onto its own NLA track on eve_arm so glTF exports all named animations
    for track in list(eve_arm.animation_data.nla_tracks):
        eve_arm.animation_data.nla_tracks.remove(track)

    for act in imported_actions:
        track = eve_arm.animation_data.nla_tracks.new()
        track.name = act.name
        start_f = int(act.frame_range[0])
        strip = track.strips.new(act.name, start_f, act)
        if hasattr(strip, "action_slot") and hasattr(act, "slots") and len(act.slots) > 0:
            strip.action_slot = act.slots[0]
        track.mute = False

    # Also test-evaluate Idle frame 1 to align feet exactly at Z=0
    eve_arm.animation_data.action = imported_actions[0]
    if hasattr(eve_arm.animation_data, "action_slot") and hasattr(imported_actions[0], "slots") and len(imported_actions[0].slots) > 0:
        eve_arm.animation_data.action_slot = imported_actions[0].slots[0]
    bpy.context.scene.frame_set(1)
    bpy.context.view_layer.update()

    deps = bpy.context.evaluated_depsgraph_get()
    me = eve_mesh.evaluated_get(deps)
    pts = [eve_mesh.matrix_world @ mathutils.Vector(c) for c in me.bound_box]
    min_z = min(p.z for p in pts)
    max_z = max(p.z for p in pts)
    print(f"Pre-shift Idle height={max_z - min_z:.4f}, min_z={min_z:.4f}, max_z={max_z:.4f}")
    eve_arm.location.z -= min_z
    eve_arm.animation_data.action = None
    bpy.context.view_layer.update()

    # Export GLB
    bpy.ops.object.select_all(action="DESELECT")
    eve_arm.select_set(True)
    eve_mesh.select_set(True)
    bpy.context.view_layer.objects.active = eve_arm

    os.makedirs(os.path.dirname(OUT_GLB), exist_ok=True)
    bpy.ops.export_scene.gltf(
        filepath=OUT_GLB,
        export_format="GLB",
        use_selection=True,
        export_animations=True,
        export_nla_strips=True,
        export_nla_strips_merged_animation_name="Alina_Idle",
        export_animation_mode="NLA_TRACKS",
        export_image_format="JPEG",
        export_jpeg_quality=85,
    )
    print("Exported GLB:", OUT_GLB, "bytes:", os.path.getsize(OUT_GLB))


if __name__ == "__main__":
    main()
