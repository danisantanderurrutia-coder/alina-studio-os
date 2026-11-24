import os
import numpy as np
from PIL import Image

SRC_DIR = "/Users/danielsantander/Desktop/alina-studio-os/scripts/extracted_textures"
DIFF_IN = os.path.join(SRC_DIR, "SpacePirate_diffuse.png")
NORM_IN = os.path.join(SRC_DIR, "SpacePirate_normal.png")
SPEC_IN = os.path.join(SRC_DIR, "SpacePirate_specular.png")

DIFF_OUT = os.path.join(SRC_DIR, "alina_diffuse.png")
NORM_OUT = os.path.join(SRC_DIR, "alina_normal.png")
SPEC_OUT = os.path.join(SRC_DIR, "alina_specular.png")


def customize_textures():
    img = Image.open(DIFF_IN).convert("RGB")
    arr = np.array(img, dtype=np.float32)
    h, w, _ = arr.shape

    yy, xx = np.mgrid[0:h, 0:w]
    r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]
    lum = 0.299 * r + 0.587 * g + 0.114 * b

    # 1. Exact Face / Neck / Ears / Eyeball regions (2048x2048)
    is_skin_tone = (r > 120) & (g > 70) & (b > 50) & ((r - b) > 16) & (r > g)
    # Protect face inner features (eyes, brows, nose, mouth, chin shadow)
    in_face_inner = (xx >= 290) & (xx <= 570) & (yy >= 170) & (yy <= 430)
    in_ears = ((xx < 120) & (yy < 155)) | ((xx > 730) & (xx < 880) & (yy < 155))
    in_eyeball = (xx >= 565) & (xx <= 755) & (yy >= 660) & (yy <= 785)

    # Neck/chest skin island extends down to y~860 around x~300..540
    in_skin_island = (xx < 880) & (yy < 875) & is_skin_tone

    # 2. Hair mask: crown + ponytail (x < 945, y < 445) + top bun ONLY (x: 945..1165, y < 175)
    in_bun = (xx >= 945) & (xx <= 1165) & (yy < 175) & (lum > 6)
    in_crown_zone = (xx < 945) & (yy < 445) & (~in_face_inner) & (~in_ears) & (~is_skin_tone) & (lum > 14)
    in_hair = in_crown_zone | in_bun

    hair_luma = np.clip(lum / 90.0, 0.28, 1.45)
    hair_luma = np.where(in_bun & (lum < 25), 0.35 + (lum / 40.0) * 0.25, hair_luma)
    arr[in_hair, 0] = np.clip(184.0 * hair_luma[in_hair], 45, 228)
    arr[in_hair, 1] = np.clip(72.0 * hair_luma[in_hair], 16, 102)
    arr[in_hair, 2] = np.clip(34.0 * hair_luma[in_hair], 8, 52)

    near_forehead = (xx >= 300) & (xx <= 560) & (yy >= 145) & (yy <= 178) & (lum < 65)
    arr[near_forehead, 0] = np.clip(135.0 * hair_luma[near_forehead], 35, 165)
    arr[near_forehead, 1] = np.clip(52.0 * hair_luma[near_forehead], 14, 72)
    arr[near_forehead, 2] = np.clip(26.0 * hair_luma[near_forehead], 8, 38)

    # 3. Vivid Emerald Eyes in eyeball iris (center 663.8, 725.1)
    dist_iris = np.sqrt((xx - 663.8) ** 2 + (yy - 725.1) ** 2)
    iris_ring = (dist_iris >= 6.5) & (dist_iris <= 17.5) & in_eyeball
    pupil_core = (dist_iris < 6.5) & in_eyeball
    sclera_zone = in_eyeball & (dist_iris > 17.5) & (lum > 150)

    arr[sclera_zone, 0] = np.clip(arr[sclera_zone, 0] * 0.96 + 8, 0, 250)
    arr[sclera_zone, 1] = np.clip(arr[sclera_zone, 1] * 1.05 + 16, 0, 245)
    arr[sclera_zone, 2] = np.clip(arr[sclera_zone, 2] * 1.10 + 22, 0, 242)

    iris_grad = 1.0 - np.clip((dist_iris - 6.5) / 11.0, 0.0, 1.0) * 0.35
    arr[iris_ring, 0] = 20.0 * iris_grad[iris_ring]
    arr[iris_ring, 1] = 192.0 * iris_grad[iris_ring]
    arr[iris_ring, 2] = 128.0 * iris_grad[iris_ring]
    arr[pupil_core, :] = 10.0

    # 4. Natural soft crimson lips (elliptical blend around lip center ~430, 358)
    lip_dist = np.sqrt(((xx - 430.0) / 28.0) ** 2 + ((yy - 357.0) / 10.0) ** 2)
    lip_weight = np.clip(1.0 - lip_dist, 0.0, 1.0) ** 1.4
    lip_mask = (lip_weight > 0.05) & ((r - g) > 42)
    w_lip = lip_weight[lip_mask]
    arr[lip_mask, 0] = arr[lip_mask, 0] * (1.0 - w_lip * 0.4) + 175.0 * (w_lip * 0.4)
    arr[lip_mask, 1] = arr[lip_mask, 1] * (1.0 - w_lip * 0.55)
    arr[lip_mask, 2] = arr[lip_mask, 2] * (1.0 - w_lip * 0.52)

    # Light natural freckles dusting nose bridge & upper cheeks
    rng = np.random.default_rng(42)
    for _ in range(48):
        fx = int(rng.integers(365, 495))
        fy = int(rng.integers(265, 322))
        if arr[fy, fx, 0] > 145 and (arr[fy, fx, 0] - arr[fy, fx, 2]) > 20:
            arr[fy - 1 : fy + 1, fx - 1 : fx + 1, 0] *= 0.90
            arr[fy - 1 : fy + 1, fx - 1 : fx + 1, 1] *= 0.80
            arr[fy - 1 : fy + 1, fx - 1 : fx + 1, 2] *= 0.74

    # 5. Outfit Mask: everything EXCEPT skin island, hair, ears, face inner, and eyeball
    protected = in_skin_island | in_hair | in_ears | in_face_inner | in_eyeball
    in_outfit = ~protected

    max_c = np.maximum(np.maximum(r, g), b)
    min_c = np.minimum(np.minimum(r, g), b)
    sat = (max_c - min_c) / np.maximum(max_c, 1.0)

    is_gold_yellow = in_outfit & (r > 110) & (g > 80) & (b < 85) & (sat > 0.35)
    is_badge = in_outfit & (xx > 960) & (xx < 1400) & (yy < 400) & (lum > 10)

    dark_factor = np.clip(lum / 120.0, 0.12, 1.0)
    has_paint = lum > 6
    arr[in_outfit & has_paint, 0] = 22.0 + 34.0 * dark_factor[in_outfit & has_paint]
    arr[in_outfit & has_paint, 1] = 23.0 + 35.0 * dark_factor[in_outfit & has_paint]
    arr[in_outfit & has_paint, 2] = 28.0 + 40.0 * dark_factor[in_outfit & has_paint]

    arr[is_gold_yellow, 0] = 108.0 * dark_factor[is_gold_yellow] + 22.0
    arr[is_gold_yellow, 1] = 52.0 * dark_factor[is_gold_yellow] + 10.0
    arr[is_gold_yellow, 2] = 34.0 * dark_factor[is_gold_yellow] + 6.0

    arr[is_badge, 0] = 28.0
    arr[is_badge, 1] = 30.0
    arr[is_badge, 2] = 36.0

    out_img = Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8)).resize((1024, 1024), Image.LANCZOS)
    out_img.save(DIFF_OUT, optimize=True)

    Image.open(NORM_IN).convert("RGB").resize((1024, 1024), Image.LANCZOS).save(NORM_OUT, optimize=True)
    Image.open(SPEC_IN).convert("RGB").resize((1024, 1024), Image.LANCZOS).save(SPEC_OUT, optimize=True)
    print("Saved refined textures:", DIFF_OUT)


if __name__ == "__main__":
    customize_textures()
