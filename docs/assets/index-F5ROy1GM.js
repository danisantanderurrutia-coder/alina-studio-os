(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fl="174",Ir={ROTATE:0,DOLLY:1,PAN:2},Tr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},eh=0,fc=1,th=2,Yd=1,Kd=2,ci=3,_i=0,Qt=1,Rn=2,Di=0,Pr=1,pc=2,mc=3,gc=4,nh=5,Yi=100,ih=101,rh=102,sh=103,oh=104,ah=200,lh=201,ch=202,dh=203,Va=204,Ga=205,uh=206,hh=207,fh=208,ph=209,mh=210,gh=211,_h=212,xh=213,vh=214,Wa=0,ja=1,$a=2,kr=3,Xa=4,qa=5,Ya=6,Ka=7,Zd=0,bh=1,yh=2,pi=0,Mh=1,Sh=2,wh=3,Jd=4,Eh=5,Th=6,Ah=7,_c="attached",Rh="detached",Qd=300,Ur=301,Or=302,xs=303,Za=304,Uo=306,In=1e3,$n=1001,vo=1002,jt=1003,eu=1004,us=1005,Lt=1006,uo=1007,Xn=1008,Zn=1009,tu=1010,nu=1011,vs=1012,Nl=1013,er=1014,un=1015,qn=1016,kl=1017,Ul=1018,Br=1020,iu=35902,ru=1021,su=1022,Cn=1023,ou=1024,au=1025,Dr=1026,zr=1027,Ol=1028,Bl=1029,lu=1030,zl=1031,Hl=1033,ho=33776,fo=33777,po=33778,mo=33779,Ja=35840,Qa=35841,el=35842,tl=35843,nl=36196,il=37492,rl=37496,sl=37808,ol=37809,al=37810,ll=37811,cl=37812,dl=37813,ul=37814,hl=37815,fl=37816,pl=37817,ml=37818,gl=37819,_l=37820,xl=37821,go=36492,vl=36494,bl=36495,cu=36283,yl=36284,Ml=36285,Sl=36286,du=2200,uu=2201,Ch=2202,bs=2300,ys=2301,$o=2302,Ar=2400,Rr=2401,bo=2402,Vl=2500,Ih=2501,Ph=0,hu=1,wl=2,Dh=3200,Lh=3201,fu=0,Fh=1,On="",At="srgb",$t="srgb-linear",yo="linear",mt="srgb",or=7680,xc=519,Nh=512,kh=513,Uh=514,pu=515,Oh=516,Bh=517,zh=518,Hh=519,El=35044,vc="300 es",fi=2e3,Mo=2001;class Ni{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bc=1234567;const ms=Math.PI/180,Hr=180/Math.PI;function Hn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]).toLowerCase()}function Ke(i,e,t){return Math.max(e,Math.min(t,i))}function Gl(i,e){return(i%e+e)%e}function Vh(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Gh(i,e,t){return i!==e?(t-i)/(e-i):0}function gs(i,e,t){return(1-t)*i+t*e}function Wh(i,e,t,n){return gs(i,e,1-Math.exp(-t*n))}function jh(i,e=1){return e-Math.abs(Gl(i,e*2)-e)}function $h(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Xh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function qh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Yh(i,e){return i+Math.random()*(e-i)}function Kh(i){return i*(.5-Math.random())}function Zh(i){i!==void 0&&(bc=i);let e=bc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Jh(i){return i*ms}function Qh(i){return i*Hr}function ef(i){return(i&i-1)===0&&i!==0}function tf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function nf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function rf(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),d=o((e+n)/2),u=s((e-n)/2),f=o((e-n)/2),m=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*d,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*d,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*d,a*c);break;case"XZX":i.set(a*d,l*g,l*m,a*c);break;case"YXY":i.set(l*m,a*d,l*g,a*c);break;case"ZYZ":i.set(l*g,l*m,a*d,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Bn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ft(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const So={DEG2RAD:ms,RAD2DEG:Hr,generateUUID:Hn,clamp:Ke,euclideanModulo:Gl,mapLinear:Vh,inverseLerp:Gh,lerp:gs,damp:Wh,pingpong:jh,smoothstep:$h,smootherstep:Xh,randInt:qh,randFloat:Yh,randFloatSpread:Kh,seededRandom:Zh,degToRad:Jh,radToDeg:Qh,isPowerOfTwo:ef,ceilPowerOfTwo:tf,floorPowerOfTwo:nf,setQuaternionFromProperEuler:rf,normalize:ft,denormalize:Bn};class Ce{constructor(e=0,t=0){Ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,t,n,r,s,o,a,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=t,d[4]=s,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],u=n[7],f=n[2],m=n[5],g=n[8],_=r[0],h=r[3],p=r[6],M=r[1],T=r[4],S=r[7],C=r[2],I=r[5],x=r[8];return s[0]=o*_+a*M+l*C,s[3]=o*h+a*T+l*I,s[6]=o*p+a*S+l*x,s[1]=c*_+d*M+u*C,s[4]=c*h+d*T+u*I,s[7]=c*p+d*S+u*x,s[2]=f*_+m*M+g*C,s[5]=f*h+m*T+g*I,s[8]=f*p+m*S+g*x,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-n*s*d+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=d*o-a*c,f=a*l-d*s,m=c*s-o*l,g=t*u+n*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(r*c-d*n)*_,e[2]=(a*n-r*o)*_,e[3]=f*_,e[4]=(d*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Xo.makeScale(e,t)),this}rotate(e){return this.premultiply(Xo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xo=new qe;function mu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ms(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function sf(){const i=Ms("canvas");return i.style.display="block",i}const yc={};function Xi(i){i in yc||(yc[i]=!0,console.warn(i))}function of(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function af(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function lf(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Mc=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sc=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cf(){const i={enabled:!0,workingColorSpace:$t,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===mt&&(r.r=mi(r.r),r.g=mi(r.g),r.b=mi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===mt&&(r.r=Lr(r.r),r.g=Lr(r.g),r.b=Lr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===On?yo:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[$t]:{primaries:e,whitePoint:n,transfer:yo,toXYZ:Mc,fromXYZ:Sc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:At},outputColorSpaceConfig:{drawingBufferColorSpace:At}},[At]:{primaries:e,whitePoint:n,transfer:mt,toXYZ:Mc,fromXYZ:Sc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:At}}}),i}const it=cf();function mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Lr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ar;class df{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ar===void 0&&(ar=Ms("canvas")),ar.width=e.width,ar.height=e.height;const n=ar.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ar}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ms("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=mi(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mi(t[n]/255)*255):t[n]=mi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let uf=0;class Wl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=Hn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(qo(r[o].image)):s.push(qo(r[o]))}else s=qo(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function qo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?df.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hf=0;class Ot extends Ni{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,n=$n,r=$n,s=Lt,o=Xn,a=Cn,l=Zn,c=Ot.DEFAULT_ANISOTROPY,d=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=Hn(),this.name="",this.source=new Wl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case In:e.x=e.x-Math.floor(e.x);break;case $n:e.x=e.x<0?0:1;break;case vo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case In:e.y=e.y-Math.floor(e.y);break;case $n:e.y=e.y<0?0:1;break;case vo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=Qd;Ot.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,n=0,r=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],d=l[4],u=l[8],f=l[1],m=l[5],g=l[9],_=l[2],h=l[6],p=l[10];if(Math.abs(d-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-h)<.01){if(Math.abs(d+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+h)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,S=(m+1)/2,C=(p+1)/2,I=(d+f)/4,x=(u+_)/4,y=(g+h)/4;return T>S&&T>C?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=I/n,s=x/n):S>C?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=I/r,s=y/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=x/s,r=y/s),this.set(n,r,s,t),this}let M=Math.sqrt((h-g)*(h-g)+(u-_)*(u-_)+(f-d)*(f-d));return Math.abs(M)<.001&&(M=1),this.x=(h-g)/M,this.y=(u-_)/M,this.z=(f-d)/M,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ff extends Ni{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Ot(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Wl(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xi extends ff{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class gu extends Ot{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pf extends Ot{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],d=n[r+2],u=n[r+3];const f=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==f||c!==m||d!==g){let h=1-a;const p=l*f+c*m+d*g+u*_,M=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){const C=Math.sqrt(T),I=Math.atan2(C,p*M);h=Math.sin(h*I)/C,a=Math.sin(a*I)/C}const S=a*M;if(l=l*h+f*S,c=c*h+m*S,d=d*h+g*S,u=u*h+_*S,h===1-a){const C=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=C,c*=C,d*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],d=n[r+3],u=s[o],f=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+d*u+l*m-c*f,e[t+1]=l*g+d*f+c*u-a*m,e[t+2]=c*g+d*m+a*f-l*u,e[t+3]=d*g-a*u-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(r/2),u=a(s/2),f=l(n/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*d*u+c*m*g,this._y=c*m*u-f*d*g,this._z=c*d*g+f*m*u,this._w=c*d*u-f*m*g;break;case"YXZ":this._x=f*d*u+c*m*g,this._y=c*m*u-f*d*g,this._z=c*d*g-f*m*u,this._w=c*d*u+f*m*g;break;case"ZXY":this._x=f*d*u-c*m*g,this._y=c*m*u+f*d*g,this._z=c*d*g+f*m*u,this._w=c*d*u-f*m*g;break;case"ZYX":this._x=f*d*u-c*m*g,this._y=c*m*u+f*d*g,this._z=c*d*g-f*m*u,this._w=c*d*u+f*m*g;break;case"YZX":this._x=f*d*u+c*m*g,this._y=c*m*u+f*d*g,this._z=c*d*g-f*m*u,this._w=c*d*u-f*m*g;break;case"XZY":this._x=f*d*u-c*m*g,this._y=c*m*u-f*d*g,this._z=c*d*g+f*m*u,this._w=c*d*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],u=t[10],f=n+a+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(d-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-n*c,this._z=s*d+o*c+n*l-r*a,this._w=o*d-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),u=Math.sin((1-t)*d)/c,f=Math.sin(t*d)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),d=2*(a*t-s*r),u=2*(s*n-o*t);return this.x=t+l*c+o*u-a*d,this.y=n+l*d+a*c-s*u,this.z=r+l*u+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Yo.copy(this).projectOnVector(e),this.sub(Yo)}reflect(e){return this.sub(Yo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yo=new D,wc=new xn;class Vn{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Fn):Fn.fromBufferAttribute(s,o),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Is.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Is.copy(n.boundingBox)),Is.applyMatrix4(e.matrixWorld),this.union(Is)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qr),Ps.subVectors(this.max,Qr),lr.subVectors(e.a,Qr),cr.subVectors(e.b,Qr),dr.subVectors(e.c,Qr),bi.subVectors(cr,lr),yi.subVectors(dr,cr),Bi.subVectors(lr,dr);let t=[0,-bi.z,bi.y,0,-yi.z,yi.y,0,-Bi.z,Bi.y,bi.z,0,-bi.x,yi.z,0,-yi.x,Bi.z,0,-Bi.x,-bi.y,bi.x,0,-yi.y,yi.x,0,-Bi.y,Bi.x,0];return!Ko(t,lr,cr,dr,Ps)||(t=[1,0,0,0,1,0,0,0,1],!Ko(t,lr,cr,dr,Ps))?!1:(Ds.crossVectors(bi,yi),t=[Ds.x,Ds.y,Ds.z],Ko(t,lr,cr,dr,Ps))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ii=[new D,new D,new D,new D,new D,new D,new D,new D],Fn=new D,Is=new Vn,lr=new D,cr=new D,dr=new D,bi=new D,yi=new D,Bi=new D,Qr=new D,Ps=new D,Ds=new D,zi=new D;function Ko(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){zi.fromArray(i,s);const a=r.x*Math.abs(zi.x)+r.y*Math.abs(zi.y)+r.z*Math.abs(zi.z),l=e.dot(zi),c=t.dot(zi),d=n.dot(zi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const mf=new Vn,es=new D,Zo=new D;class ei{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):mf.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;es.subVectors(e,this.center);const t=es.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(es,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(es.copy(e.center).add(Zo)),this.expandByPoint(es.copy(e.center).sub(Zo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ri=new D,Jo=new D,Ls=new D,Mi=new D,Qo=new D,Fs=new D,ea=new D;class ws{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,t),ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Jo.copy(e).add(t).multiplyScalar(.5),Ls.copy(t).sub(e).normalize(),Mi.copy(this.origin).sub(Jo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ls),a=Mi.dot(this.direction),l=-Mi.dot(Ls),c=Mi.lengthSq(),d=Math.abs(1-o*o);let u,f,m,g;if(d>0)if(u=o*l-a,f=o*a-l,g=s*d,u>=0)if(f>=-g)if(f<=g){const _=1/d;u*=_,f*=_,m=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),m=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),m=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Jo).addScaledVector(Ls,f),m}intersectSphere(e,t){ri.subVectors(e.center,this.origin);const n=ri.dot(this.direction),r=ri.dot(ri)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,t,n,r,s){Qo.subVectors(t,e),Fs.subVectors(n,e),ea.crossVectors(Qo,Fs);let o=this.direction.dot(ea),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mi.subVectors(this.origin,e);const l=a*this.direction.dot(Fs.crossVectors(Mi,Fs));if(l<0)return null;const c=a*this.direction.dot(Qo.cross(Mi));if(c<0||l+c>o)return null;const d=-a*Mi.dot(ea);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(e,t,n,r,s,o,a,l,c,d,u,f,m,g,_,h){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,d,u,f,m,g,_,h)}set(e,t,n,r,s,o,a,l,c,d,u,f,m,g,_,h){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=d,p[10]=u,p[14]=f,p[3]=m,p[7]=g,p[11]=_,p[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/ur.setFromMatrixColumn(e,0).length(),s=1/ur.setFromMatrixColumn(e,1).length(),o=1/ur.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=o*d,m=o*u,g=a*d,_=a*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=m+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*d,m=l*u,g=c*d,_=c*u;t[0]=f+_*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*u,t[5]=o*d,t[9]=-a,t[2]=m*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*d,m=l*u,g=c*d,_=c*u;t[0]=f-_*a,t[4]=-o*u,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*d,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*d,m=o*u,g=a*d,_=a*u;t[0]=l*d,t[4]=g*c-m,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*d,t[4]=_-f*u,t[8]=g*u+m,t[1]=u,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=m*u+g,t[10]=f-_*u}else if(e.order==="XZY"){const f=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=f*u+_,t[5]=o*d,t[9]=m*u-g,t[2]=g*u-m,t[6]=a*d,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gf,e,_f)}lookAt(e,t,n){const r=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Si.crossVectors(n,mn),Si.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Si.crossVectors(n,mn)),Si.normalize(),Ns.crossVectors(mn,Si),r[0]=Si.x,r[4]=Ns.x,r[8]=mn.x,r[1]=Si.y,r[5]=Ns.y,r[9]=mn.y,r[2]=Si.z,r[6]=Ns.z,r[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],u=n[5],f=n[9],m=n[13],g=n[2],_=n[6],h=n[10],p=n[14],M=n[3],T=n[7],S=n[11],C=n[15],I=r[0],x=r[4],y=r[8],b=r[12],v=r[1],A=r[5],P=r[9],F=r[13],N=r[2],z=r[6],O=r[10],Z=r[14],X=r[3],se=r[7],le=r[11],ve=r[15];return s[0]=o*I+a*v+l*N+c*X,s[4]=o*x+a*A+l*z+c*se,s[8]=o*y+a*P+l*O+c*le,s[12]=o*b+a*F+l*Z+c*ve,s[1]=d*I+u*v+f*N+m*X,s[5]=d*x+u*A+f*z+m*se,s[9]=d*y+u*P+f*O+m*le,s[13]=d*b+u*F+f*Z+m*ve,s[2]=g*I+_*v+h*N+p*X,s[6]=g*x+_*A+h*z+p*se,s[10]=g*y+_*P+h*O+p*le,s[14]=g*b+_*F+h*Z+p*ve,s[3]=M*I+T*v+S*N+C*X,s[7]=M*x+T*A+S*z+C*se,s[11]=M*y+T*P+S*O+C*le,s[15]=M*b+T*F+S*Z+C*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],u=e[6],f=e[10],m=e[14],g=e[3],_=e[7],h=e[11],p=e[15];return g*(+s*l*u-r*c*u-s*a*f+n*c*f+r*a*m-n*l*m)+_*(+t*l*m-t*c*f+s*o*f-r*o*m+r*c*d-s*l*d)+h*(+t*c*u-t*a*m-s*o*u+n*o*m+s*a*d-n*c*d)+p*(-r*a*d-t*l*u+t*a*f+r*o*u-n*o*f+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=e[9],f=e[10],m=e[11],g=e[12],_=e[13],h=e[14],p=e[15],M=u*h*c-_*f*c+_*l*m-a*h*m-u*l*p+a*f*p,T=g*f*c-d*h*c-g*l*m+o*h*m+d*l*p-o*f*p,S=d*_*c-g*u*c+g*a*m-o*_*m-d*a*p+o*u*p,C=g*u*l-d*_*l-g*a*f+o*_*f+d*a*h-o*u*h,I=t*M+n*T+r*S+s*C;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const x=1/I;return e[0]=M*x,e[1]=(_*f*s-u*h*s-_*r*m+n*h*m+u*r*p-n*f*p)*x,e[2]=(a*h*s-_*l*s+_*r*c-n*h*c-a*r*p+n*l*p)*x,e[3]=(u*l*s-a*f*s-u*r*c+n*f*c+a*r*m-n*l*m)*x,e[4]=T*x,e[5]=(d*h*s-g*f*s+g*r*m-t*h*m-d*r*p+t*f*p)*x,e[6]=(g*l*s-o*h*s-g*r*c+t*h*c+o*r*p-t*l*p)*x,e[7]=(o*f*s-d*l*s+d*r*c-t*f*c-o*r*m+t*l*m)*x,e[8]=S*x,e[9]=(g*u*s-d*_*s-g*n*m+t*_*m+d*n*p-t*u*p)*x,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*p+t*a*p)*x,e[11]=(d*a*s-o*u*s-d*n*c+t*u*c+o*n*m-t*a*m)*x,e[12]=C*x,e[13]=(d*_*r-g*u*r+g*n*f-t*_*f-d*n*h+t*u*h)*x,e[14]=(g*a*r-o*_*r-g*n*l+t*_*l+o*n*h-t*a*h)*x,e[15]=(o*u*r-d*a*r+d*n*l-t*u*l-o*n*f+t*a*f)*x,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+n,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,d=o+o,u=a+a,f=s*c,m=s*d,g=s*u,_=o*d,h=o*u,p=a*u,M=l*c,T=l*d,S=l*u,C=n.x,I=n.y,x=n.z;return r[0]=(1-(_+p))*C,r[1]=(m+S)*C,r[2]=(g-T)*C,r[3]=0,r[4]=(m-S)*I,r[5]=(1-(f+p))*I,r[6]=(h+M)*I,r[7]=0,r[8]=(g+T)*x,r[9]=(h-M)*x,r[10]=(1-(f+_))*x,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=ur.set(r[0],r[1],r[2]).length();const o=ur.set(r[4],r[5],r[6]).length(),a=ur.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Nn.copy(this);const c=1/s,d=1/o,u=1/a;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=d,Nn.elements[5]*=d,Nn.elements[6]*=d,Nn.elements[8]*=u,Nn.elements[9]*=u,Nn.elements[10]*=u,t.setFromRotationMatrix(Nn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=fi){const l=this.elements,c=2*s/(t-e),d=2*s/(n-r),u=(t+e)/(t-e),f=(n+r)/(n-r);let m,g;if(a===fi)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Mo)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=fi){const l=this.elements,c=1/(t-e),d=1/(n-r),u=1/(o-s),f=(t+e)*c,m=(n+r)*d;let g,_;if(a===fi)g=(o+s)*u,_=-2*u;else if(a===Mo)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ur=new D,Nn=new $e,gf=new D(0,0,0),_f=new D(1,1,1),Si=new D,Ns=new D,mn=new D,Ec=new $e,Tc=new xn;class Jn{constructor(e=0,t=0,n=0,r=Jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],u=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ec.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ec,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tc.setFromEuler(this),this.setFromQuaternion(Tc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jn.DEFAULT_ORDER="XYZ";class _u{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xf=0;const Ac=new D,hr=new xn,si=new $e,ks=new D,ts=new D,vf=new D,bf=new xn,Rc=new D(1,0,0),Cc=new D(0,1,0),Ic=new D(0,0,1),Pc={type:"added"},yf={type:"removed"},fr={type:"childadded",child:null},ta={type:"childremoved",child:null};class Mt extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=Hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new D,t=new Jn,n=new xn,r=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new $e},normalMatrix:{value:new qe}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _u,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.multiply(hr),this}rotateOnWorldAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.premultiply(hr),this}rotateX(e){return this.rotateOnAxis(Rc,e)}rotateY(e){return this.rotateOnAxis(Cc,e)}rotateZ(e){return this.rotateOnAxis(Ic,e)}translateOnAxis(e,t){return Ac.copy(e).applyQuaternion(this.quaternion),this.position.add(Ac.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rc,e)}translateY(e){return this.translateOnAxis(Cc,e)}translateZ(e){return this.translateOnAxis(Ic,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ks.copy(e):ks.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(ts,ks,this.up):si.lookAt(ks,ts,this.up),this.quaternion.setFromRotationMatrix(si),r&&(si.extractRotation(r.matrixWorld),hr.setFromRotationMatrix(si),this.quaternion.premultiply(hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pc),fr.child=e,this.dispatchEvent(fr),fr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yf),ta.child=e,this.dispatchEvent(ta),ta.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),si.multiply(e.parent.matrixWorld)),e.applyMatrix4(si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pc),fr.child=e,this.dispatchEvent(fr),fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,e,vf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,bf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),u=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Mt.DEFAULT_UP=new D(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kn=new D,oi=new D,na=new D,ai=new D,pr=new D,mr=new D,Dc=new D,ia=new D,ra=new D,sa=new D,oa=new at,aa=new at,la=new at;class zn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),kn.subVectors(e,t),r.cross(kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){kn.subVectors(r,t),oi.subVectors(n,t),na.subVectors(e,t);const o=kn.dot(kn),a=kn.dot(oi),l=kn.dot(na),c=oi.dot(oi),d=oi.dot(na),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const f=1/u,m=(c*l-a*d)*f,g=(o*d-a*l)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ai.x),l.addScaledVector(o,ai.y),l.addScaledVector(a,ai.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return oa.setScalar(0),aa.setScalar(0),la.setScalar(0),oa.fromBufferAttribute(e,t),aa.fromBufferAttribute(e,n),la.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(oa,s.x),o.addScaledVector(aa,s.y),o.addScaledVector(la,s.z),o}static isFrontFacing(e,t,n,r){return kn.subVectors(n,t),oi.subVectors(e,t),kn.cross(oi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),kn.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return zn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;pr.subVectors(r,n),mr.subVectors(s,n),ia.subVectors(e,n);const l=pr.dot(ia),c=mr.dot(ia);if(l<=0&&c<=0)return t.copy(n);ra.subVectors(e,r);const d=pr.dot(ra),u=mr.dot(ra);if(d>=0&&u<=d)return t.copy(r);const f=l*u-d*c;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(n).addScaledVector(pr,o);sa.subVectors(e,s);const m=pr.dot(sa),g=mr.dot(sa);if(g>=0&&m<=g)return t.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(mr,a);const h=d*g-m*u;if(h<=0&&u-d>=0&&m-g>=0)return Dc.subVectors(s,r),a=(u-d)/(u-d+(m-g)),t.copy(r).addScaledVector(Dc,a);const p=1/(h+_+f);return o=_*p,a=f*p,t.copy(n).addScaledVector(pr,o).addScaledVector(mr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},Us={h:0,s:0,l:0};function ca(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Pe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=it.workingColorSpace){if(e=Gl(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ca(o,s,e+1/3),this.g=ca(o,s,e),this.b=ca(o,s,e-1/3)}return it.toWorkingColorSpace(this,r),this}setStyle(e,t=At){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){const n=xu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=Lr(e.r),this.g=Lr(e.g),this.b=Lr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return it.fromWorkingColorSpace(qt.copy(this),e),Math.round(Ke(qt.r*255,0,255))*65536+Math.round(Ke(qt.g*255,0,255))*256+Math.round(Ke(qt.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.fromWorkingColorSpace(qt.copy(this),t);const n=qt.r,r=qt.g,s=qt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=d<=.5?u/(o+a):u/(2-o-a),o){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=it.workingColorSpace){return it.fromWorkingColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=At){it.fromWorkingColorSpace(qt.copy(this),e);const t=qt.r,n=qt.g,r=qt.b;return e!==At?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(wi),this.setHSL(wi.h+e,wi.s+t,wi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wi),e.getHSL(Us);const n=gs(wi.h,Us.h,t),r=gs(wi.s,Us.s,t),s=gs(wi.l,Us.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new Pe;Pe.NAMES=xu;let Mf=0;class Kn extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=Hn(),this.name="",this.type="Material",this.blending=Pr,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Va,this.blendDst=Ga,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=or,this.stencilZFail=or,this.stencilZPass=or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Pr&&(n.blending=this.blending),this.side!==_i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Va&&(n.blendSrc=this.blendSrc),this.blendDst!==Ga&&(n.blendDst=this.blendDst),this.blendEquation!==Yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==kr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==or&&(n.stencilFail=this.stencilFail),this.stencilZFail!==or&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==or&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Yn extends Kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=Zd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hi=Sf();function Sf(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,d=0;for(;(c&8388608)===0;)c<<=1,d-=8388608;c&=-8388609,d+=947912704,s[l]=c|d}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:a}}function wf(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Ke(i,-65504,65504),hi.floatView[0]=i;const e=hi.uint32View[0],t=e>>23&511;return hi.baseTable[t]+((e&8388607)>>hi.shiftTable[t])}function Ef(i){const e=i>>10;return hi.uint32View[0]=hi.mantissaTable[hi.offsetTable[e]+(i&1023)]+hi.exponentTable[e],hi.floatView[0]}class Os{static toHalfFloat(e){return wf(e)}static fromHalfFloat(e){return Ef(e)}}const Dt=new D,Bs=new Ce;let Tf=0;class an{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=El,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Bs.fromBufferAttribute(this,t),Bs.applyMatrix3(e),this.setXY(t,Bs.x,Bs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),r=ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),r=ft(r,this.array),s=ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==El&&(e.usage=this.usage),e}}class vu extends an{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class bu extends an{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Rt extends an{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Af=0;const Mn=new $e,da=new Mt,gr=new D,gn=new Vn,ns=new Vn,Ht=new D;class hn extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=Hn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mu(e)?bu:vu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,t,n){return Mn.makeTranslation(e,t,n),this.applyMatrix4(Mn),this}scale(e,t,n){return Mn.makeScale(e,t,n),this.applyMatrix4(Mn),this}lookAt(e){return da.lookAt(e),da.updateMatrix(),this.applyMatrix4(da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Rt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ns.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(gn.min,ns.min),gn.expandByPoint(Ht),Ht.addVectors(gn.max,ns.max),gn.expandByPoint(Ht)):(gn.expandByPoint(ns.min),gn.expandByPoint(ns.max))}gn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Ht.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ht));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Ht.fromBufferAttribute(a,c),l&&(gr.fromBufferAttribute(e,c),Ht.add(gr)),r=Math.max(r,n.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let y=0;y<n.count;y++)a[y]=new D,l[y]=new D;const c=new D,d=new D,u=new D,f=new Ce,m=new Ce,g=new Ce,_=new D,h=new D;function p(y,b,v){c.fromBufferAttribute(n,y),d.fromBufferAttribute(n,b),u.fromBufferAttribute(n,v),f.fromBufferAttribute(s,y),m.fromBufferAttribute(s,b),g.fromBufferAttribute(s,v),d.sub(c),u.sub(c),m.sub(f),g.sub(f);const A=1/(m.x*g.y-g.x*m.y);isFinite(A)&&(_.copy(d).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(A),h.copy(u).multiplyScalar(m.x).addScaledVector(d,-g.x).multiplyScalar(A),a[y].add(_),a[b].add(_),a[v].add(_),l[y].add(h),l[b].add(h),l[v].add(h))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let y=0,b=M.length;y<b;++y){const v=M[y],A=v.start,P=v.count;for(let F=A,N=A+P;F<N;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const T=new D,S=new D,C=new D,I=new D;function x(y){C.fromBufferAttribute(r,y),I.copy(C);const b=a[y];T.copy(b),T.sub(C.multiplyScalar(C.dot(b))).normalize(),S.crossVectors(I,b);const A=S.dot(l[y])<0?-1:1;o.setXYZW(y,T.x,T.y,T.z,A)}for(let y=0,b=M.length;y<b;++y){const v=M[y],A=v.start,P=v.count;for(let F=A,N=A+P;F<N;F+=3)x(e.getX(F+0)),x(e.getX(F+1)),x(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,d=new D,u=new D;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),_=e.getX(f+1),h=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,h),d.subVectors(o,s),u.subVectors(r,s),d.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,h),a.add(d),l.add(d),c.add(d),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(h,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),d.subVectors(o,s),u.subVectors(r,s),d.cross(u),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,u=a.normalized,f=new c.constructor(l.length*d);let m=0,g=0;for(let _=0,h=l.length;_<h;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*d;for(let p=0;p<d;p++)f[g++]=c[m++]}return new an(f,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hn,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,u=c.length;d<u;d++){const f=c[d],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,f=c.length;u<f;u++){const m=c[u];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],u=s[c];for(let f=0,m=u.length;f<m;f++)d.push(u[f].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lc=new $e,Hi=new ws,zs=new ei,Fc=new D,Hs=new D,Vs=new D,Gs=new D,ua=new D,Ws=new D,Nc=new D,js=new D;class Ue extends Mt{constructor(e=new hn,t=new Yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ws.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],u=s[l];d!==0&&(ua.fromBufferAttribute(u,e),o?Ws.addScaledVector(ua,d):Ws.addScaledVector(ua.sub(t),d))}t.add(Ws)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zs.copy(n.boundingSphere),zs.applyMatrix4(s),Hi.copy(e.ray).recast(e.near),!(zs.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(zs,Fc)===null||Hi.origin.distanceToSquared(Fc)>(e.far-e.near)**2))&&(Lc.copy(s).invert(),Hi.copy(e.ray).applyMatrix4(Lc),!(n.boundingBox!==null&&Hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Hi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,u=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const h=f[g],p=o[h.materialIndex],M=Math.max(h.start,m.start),T=Math.min(a.count,Math.min(h.start+h.count,m.start+m.count));for(let S=M,C=T;S<C;S+=3){const I=a.getX(S),x=a.getX(S+1),y=a.getX(S+2);r=$s(this,p,e,n,c,d,u,I,x,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=h.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let h=g,p=_;h<p;h+=3){const M=a.getX(h),T=a.getX(h+1),S=a.getX(h+2);r=$s(this,o,e,n,c,d,u,M,T,S),r&&(r.faceIndex=Math.floor(h/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const h=f[g],p=o[h.materialIndex],M=Math.max(h.start,m.start),T=Math.min(l.count,Math.min(h.start+h.count,m.start+m.count));for(let S=M,C=T;S<C;S+=3){const I=S,x=S+1,y=S+2;r=$s(this,p,e,n,c,d,u,I,x,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=h.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let h=g,p=_;h<p;h+=3){const M=h,T=h+1,S=h+2;r=$s(this,o,e,n,c,d,u,M,T,S),r&&(r.faceIndex=Math.floor(h/3),t.push(r))}}}}function Rf(i,e,t,n,r,s,o,a){let l;if(e.side===Qt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===_i,a),l===null)return null;js.copy(a),js.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(js);return c<t.near||c>t.far?null:{distance:c,point:js.clone(),object:i}}function $s(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Hs),i.getVertexPosition(l,Vs),i.getVertexPosition(c,Gs);const d=Rf(i,e,t,n,Hs,Vs,Gs,Nc);if(d){const u=new D;zn.getBarycoord(Nc,Hs,Vs,Gs,u),r&&(d.uv=zn.getInterpolatedAttribute(r,a,l,c,u,new Ce)),s&&(d.uv1=zn.getInterpolatedAttribute(s,a,l,c,u,new Ce)),o&&(d.normal=zn.getInterpolatedAttribute(o,a,l,c,u,new D),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new D,materialIndex:0};zn.getNormal(Hs,Vs,Gs,f.normal),d.face=f,d.barycoord=u}return d}class ki extends hn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],u=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Rt(c,3)),this.setAttribute("normal",new Rt(d,3)),this.setAttribute("uv",new Rt(u,2));function g(_,h,p,M,T,S,C,I,x,y,b){const v=S/x,A=C/y,P=S/2,F=C/2,N=I/2,z=x+1,O=y+1;let Z=0,X=0;const se=new D;for(let le=0;le<O;le++){const ve=le*A-F;for(let Ne=0;Ne<z;Ne++){const Ve=Ne*v-P;se[_]=Ve*M,se[h]=ve*T,se[p]=N,c.push(se.x,se.y,se.z),se[_]=0,se[h]=0,se[p]=I>0?1:-1,d.push(se.x,se.y,se.z),u.push(Ne/x),u.push(1-le/y),Z+=1}}for(let le=0;le<y;le++)for(let ve=0;ve<x;ve++){const Ne=f+ve+z*le,Ve=f+ve+z*(le+1),J=f+(ve+1)+z*(le+1),oe=f+(ve+1)+z*le;l.push(Ne,Ve,oe),l.push(Ve,J,oe),X+=6}a.addGroup(m,X,b),m+=X,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ki(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function rn(i){const e={};for(let t=0;t<i.length;t++){const n=Vr(i[t]);for(const r in n)e[r]=n[r]}return e}function Cf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function yu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const Mu={clone:Vr,merge:rn};var If=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zt extends Kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=If,this.fragmentShader=Pf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vr(e.uniforms),this.uniformsGroups=Cf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Su extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=fi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ei=new D,kc=new Ce,Uc=new Ce;class Jt extends Su{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ms*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hr*2*Math.atan(Math.tan(ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z)}getViewSize(e,t){return this.getViewBounds(e,kc,Uc),t.subVectors(Uc,kc)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ms*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _r=-90,xr=1;class Df extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Jt(_r,xr,e,t);r.layers=this.layers,this.add(r);const s=new Jt(_r,xr,e,t);s.layers=this.layers,this.add(s);const o=new Jt(_r,xr,e,t);o.layers=this.layers,this.add(o);const a=new Jt(_r,xr,e,t);a.layers=this.layers,this.add(a);const l=new Jt(_r,xr,e,t);l.layers=this.layers,this.add(l);const c=new Jt(_r,xr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===fi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Mo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,d),e.setRenderTarget(u,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class wu extends Ot{constructor(e,t,n,r,s,o,a,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:Ur,super(e,t,n,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lf extends xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new wu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Lt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ki(5,5,5),s=new Zt({name:"CubemapFromEquirect",uniforms:Vr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:Di});s.uniforms.tEquirect.value=t;const o=new Ue(r,s),a=t.minFilter;return t.minFilter===Xn&&(t.minFilter=Lt),new Df(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}class Wt extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ff={type:"move"};class ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const h=t.getJointPose(_,n),p=this._getHandJoint(c,_);h!==null&&(p.matrix.fromArray(h.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=h.radius),p.visible=h!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=d.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ff)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Wt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class wo{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Pe(e),this.density=t}clone(){return new wo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class jl extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Nf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=El,this.updateRanges=[],this.version=0,this.uuid=Hn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const nn=new D;class $l{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Bn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Bn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Bn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Bn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),r=ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),r=ft(r,this.array),s=ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new an(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new $l(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Oc=new D,Bc=new at,zc=new at,kf=new D,Hc=new $e,Xs=new D,fa=new ei,Vc=new $e,pa=new ws;class Uf extends Ue{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=_c,this.bindMatrix=new $e,this.bindMatrixInverse=new $e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Vn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Xs),this.boundingBox.expandByPoint(Xs)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ei),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Xs),this.boundingSphere.expandByPoint(Xs)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fa.copy(this.boundingSphere),fa.applyMatrix4(r),e.ray.intersectsSphere(fa)!==!1&&(Vc.copy(r).invert(),pa.copy(e.ray).applyMatrix4(Vc),!(this.boundingBox!==null&&pa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,pa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new at,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===_c?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Rh?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;Bc.fromBufferAttribute(r.attributes.skinIndex,e),zc.fromBufferAttribute(r.attributes.skinWeight,e),Oc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=zc.getComponent(s);if(o!==0){const a=Bc.getComponent(s);Hc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(kf.copy(Oc).applyMatrix4(Hc),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Eu extends Mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Xl extends Ot{constructor(e=null,t=1,n=1,r,s,o,a,l,c=jt,d=jt,u,f){super(null,o,a,l,c,d,r,s,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Gc=new $e,Of=new $e;class ql{constructor(e=[],t=[]){this.uuid=Hn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new $e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new $e;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Of;Gc.multiplyMatrices(a,t[s]),Gc.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new ql(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Xl(t,e,e,Cn,un);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Eu),this.bones.push(o),this.boneInverses.push(new $e().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=n[r];e.boneInverses.push(a.toArray())}return e}}class Tl extends an{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const vr=new $e,Wc=new $e,qs=[],jc=new Vn,Bf=new $e,is=new Ue,rs=new ei;class zf extends Ue{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Tl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Bf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vr),jc.copy(e.boundingBox).applyMatrix4(vr),this.boundingBox.union(jc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ei),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vr),rs.copy(e.boundingSphere).applyMatrix4(vr),this.boundingSphere.union(rs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(is.geometry=this.geometry,is.material=this.material,is.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rs.copy(this.boundingSphere),rs.applyMatrix4(n),e.ray.intersectsSphere(rs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,vr),Wc.multiplyMatrices(n,vr),is.matrixWorld=Wc,is.raycast(e,qs);for(let o=0,a=qs.length;o<a;o++){const l=qs[o];l.instanceId=s,l.object=this,t.push(l)}qs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Tl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Xl(new Float32Array(r*this.count),r,this.count,Ol,un));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ma=new D,Hf=new D,Vf=new qe;class ui{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ma.subVectors(n,t).cross(Hf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ma),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Vf.getNormalMatrix(e),r=this.coplanarPoint(ma).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vi=new ei,Ys=new D;class Yl{constructor(e=new ui,t=new ui,n=new ui,r=new ui,s=new ui,o=new ui){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=fi){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],u=r[6],f=r[7],m=r[8],g=r[9],_=r[10],h=r[11],p=r[12],M=r[13],T=r[14],S=r[15];if(n[0].setComponents(l-s,f-c,h-m,S-p).normalize(),n[1].setComponents(l+s,f+c,h+m,S+p).normalize(),n[2].setComponents(l+o,f+d,h+g,S+M).normalize(),n[3].setComponents(l-o,f-d,h-g,S-M).normalize(),n[4].setComponents(l-a,f-u,h-_,S-T).normalize(),t===fi)n[5].setComponents(l+a,f+u,h+_,S+T).normalize();else if(t===Mo)n[5].setComponents(a,u,_,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(e){return Vi.center.set(0,0,0),Vi.radius=.7071067811865476,Vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ys.x=r.normal.x>0?e.max.x:e.min.x,Ys.y=r.normal.y>0?e.max.y:e.min.y,Ys.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ys)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Tu extends Kn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Eo=new D,To=new D,$c=new $e,ss=new ws,Ks=new ei,ga=new D,Xc=new D;class Kl extends Mt{constructor(e=new hn,t=new Tu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Eo.fromBufferAttribute(t,r-1),To.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Eo.distanceTo(To);e.setAttribute("lineDistance",new Rt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(r),Ks.radius+=s,e.ray.intersectsSphere(Ks)===!1)return;$c.copy(r).invert(),ss.copy(e.ray).applyMatrix4($c);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=n.index,f=n.attributes.position;if(d!==null){const m=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=m,h=g-1;_<h;_+=c){const p=d.getX(_),M=d.getX(_+1),T=Zs(this,e,ss,l,p,M,_);T&&t.push(T)}if(this.isLineLoop){const _=d.getX(g-1),h=d.getX(m),p=Zs(this,e,ss,l,_,h,g-1);p&&t.push(p)}}else{const m=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=m,h=g-1;_<h;_+=c){const p=Zs(this,e,ss,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Zs(this,e,ss,l,g-1,m,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Zs(i,e,t,n,r,s,o){const a=i.geometry.attributes.position;if(Eo.fromBufferAttribute(a,r),To.fromBufferAttribute(a,s),t.distanceSqToSegment(Eo,To,ga,Xc)>n)return;ga.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ga);if(!(c<e.near||c>e.far))return{distance:c,point:Xc.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const qc=new D,Yc=new D;class Gf extends Kl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)qc.fromBufferAttribute(t,r),Yc.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+qc.distanceTo(Yc);e.setAttribute("lineDistance",new Rt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Wf extends Kl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Au extends Kn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Kc=new $e,Al=new ws,Js=new ei,Qs=new D;class jf extends Mt{constructor(e=new hn,t=new Au){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(r),Js.radius+=s,e.ray.intersectsSphere(Js)===!1)return;Kc.copy(r).invert(),Al.copy(e.ray).applyMatrix4(Kc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=f,_=m;g<_;g++){const h=c.getX(g);Qs.fromBufferAttribute(u,h),Zc(Qs,h,l,r,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=f,_=m;g<_;g++)Qs.fromBufferAttribute(u,g),Zc(Qs,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Zc(i,e,t,n,r,s,o){const a=Al.distanceSqToPoint(i);if(a<t){const l=new D;Al.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Zl extends Ot{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ru extends Ot{constructor(e,t,n,r,s,o,a,l,c,d=Dr){if(d!==Dr&&d!==zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Dr&&(n=er),n===void 0&&d===zr&&(n=Br),super(null,r,s,o,a,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:jt,this.minFilter=l!==void 0?l:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Oo extends hn{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new D,d=new Ce;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const m=n+u/t*r;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(o[f]/e+1)/2,d.y=(o[f+1]/e+1)/2,l.push(d.x,d.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Rt(o,3)),this.setAttribute("normal",new Rt(a,3)),this.setAttribute("uv",new Rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class sn extends hn{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],u=[],f=[],m=[];let g=0;const _=[],h=n/2;let p=0;M(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(d),this.setAttribute("position",new Rt(u,3)),this.setAttribute("normal",new Rt(f,3)),this.setAttribute("uv",new Rt(m,2));function M(){const S=new D,C=new D;let I=0;const x=(t-e)/n;for(let y=0;y<=s;y++){const b=[],v=y/s,A=v*(t-e)+e;for(let P=0;P<=r;P++){const F=P/r,N=F*l+a,z=Math.sin(N),O=Math.cos(N);C.x=A*z,C.y=-v*n+h,C.z=A*O,u.push(C.x,C.y,C.z),S.set(z,x,O).normalize(),f.push(S.x,S.y,S.z),m.push(F,1-v),b.push(g++)}_.push(b)}for(let y=0;y<r;y++)for(let b=0;b<s;b++){const v=_[b][y],A=_[b+1][y],P=_[b+1][y+1],F=_[b][y+1];(e>0||b!==0)&&(d.push(v,A,F),I+=3),(t>0||b!==s-1)&&(d.push(A,P,F),I+=3)}c.addGroup(p,I,0),p+=I}function T(S){const C=g,I=new Ce,x=new D;let y=0;const b=S===!0?e:t,v=S===!0?1:-1;for(let P=1;P<=r;P++)u.push(0,h*v,0),f.push(0,v,0),m.push(.5,.5),g++;const A=g;for(let P=0;P<=r;P++){const N=P/r*l+a,z=Math.cos(N),O=Math.sin(N);x.x=b*O,x.y=h*v,x.z=b*z,u.push(x.x,x.y,x.z),f.push(0,v,0),I.x=z*.5+.5,I.y=O*.5*v+.5,m.push(I.x,I.y),g++}for(let P=0;P<r;P++){const F=C+P,N=A+P;S===!0?d.push(N,N+1,F):d.push(N+1,N,F),y+=3}c.addGroup(p,y,S===!0?1:2),p+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Fi extends hn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,d=l+1,u=e/a,f=t/l,m=[],g=[],_=[],h=[];for(let p=0;p<d;p++){const M=p*f-o;for(let T=0;T<c;T++){const S=T*u-s;g.push(S,-M,0),_.push(0,0,1),h.push(T/a),h.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const T=M+c*p,S=M+c*(p+1),C=M+1+c*(p+1),I=M+1+c*p;m.push(T,S,I),m.push(S,C,I)}this.setIndex(m),this.setAttribute("position",new Rt(g,3)),this.setAttribute("normal",new Rt(_,3)),this.setAttribute("uv",new Rt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Zi extends hn{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const d=[],u=new D,f=new D,m=[],g=[],_=[],h=[];for(let p=0;p<=n;p++){const M=[],T=p/n;let S=0;p===0&&o===0?S=.5/t:p===n&&l===Math.PI&&(S=-.5/t);for(let C=0;C<=t;C++){const I=C/t;u.x=-e*Math.cos(r+I*s)*Math.sin(o+T*a),u.y=e*Math.cos(o+T*a),u.z=e*Math.sin(r+I*s)*Math.sin(o+T*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),h.push(I+S,1-T),M.push(c++)}d.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){const T=d[p][M+1],S=d[p][M],C=d[p+1][M],I=d[p+1][M+1];(p!==0||o>0)&&m.push(T,S,I),(p!==n-1||l<Math.PI)&&m.push(S,C,I)}this.setIndex(m),this.setAttribute("position",new Rt(g,3)),this.setAttribute("normal",new Rt(_,3)),this.setAttribute("uv",new Rt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ao extends hn{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],l=[],c=[],d=new D,u=new D,f=new D;for(let m=0;m<=n;m++)for(let g=0;g<=r;g++){const _=g/r*s,h=m/n*Math.PI*2;u.x=(e+t*Math.cos(h))*Math.cos(_),u.y=(e+t*Math.cos(h))*Math.sin(_),u.z=t*Math.sin(h),a.push(u.x,u.y,u.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),f.subVectors(u,d).normalize(),l.push(f.x,f.y,f.z),c.push(g/r),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=r;g++){const _=(r+1)*m+g-1,h=(r+1)*(m-1)+g-1,p=(r+1)*(m-1)+g,M=(r+1)*m+g;o.push(_,h,M),o.push(h,p,M)}this.setIndex(o),this.setAttribute("position",new Rt(a,3)),this.setAttribute("normal",new Rt(l,3)),this.setAttribute("uv",new Rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ao(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ke extends Kn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fu,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class on extends ke{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class $f extends Kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xf extends Kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function eo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function qf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Yf(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Jc(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=i[a+l]}return r}function Cu(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)}class Es{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Kf extends Es{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ar,endingEnd:Ar}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Rr:s=e,a=2*t-n;break;case bo:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Rr:o=e,l=2*n-t;break;case bo:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}const c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*d,this._offsetNext=o*d}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,m=this._weightNext,g=(n-t)/(r-t),_=g*g,h=_*g,p=-f*h+2*f*_-f*g,M=(1+f)*h+(-1.5-2*f)*_+(-.5+f)*g+1,T=(-1-m)*h+(1.5+m)*_+.5*g,S=m*h-m*_;for(let C=0;C!==a;++C)s[C]=p*o[d+C]+M*o[c+C]+T*o[l+C]+S*o[u+C];return s}}class Iu extends Es{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=(n-t)/(r-t),u=1-d;for(let f=0;f!==a;++f)s[f]=o[c+f]*u+o[l+f]*d;return s}}class Zf extends Es{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class ti{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=eo(t,this.TimeBufferType),this.values=eo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:eo(e.times,Array),values:eo(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Zf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Iu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Kf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case bs:t=this.InterpolantFactoryMethodDiscrete;break;case ys:t=this.InterpolantFactoryMethodLinear;break;case $o:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return bs;case this.InterpolantFactoryMethodLinear:return ys;case this.InterpolantFactoryMethodSmooth:return $o}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&qf(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===$o,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],d=e[a+1];if(c!==d&&(a!==1||c!==e[0]))if(r)l=!0;else{const u=a*n,f=u-n,m=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[f+g]||_!==t[m+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,f=o*n;for(let m=0;m!==n;++m)t[f+m]=t[u+m]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}ti.prototype.TimeBufferType=Float32Array;ti.prototype.ValueBufferType=Float32Array;ti.prototype.DefaultInterpolation=ys;class Yr extends ti{constructor(e,t,n){super(e,t,n)}}Yr.prototype.ValueTypeName="bool";Yr.prototype.ValueBufferType=Array;Yr.prototype.DefaultInterpolation=bs;Yr.prototype.InterpolantFactoryMethodLinear=void 0;Yr.prototype.InterpolantFactoryMethodSmooth=void 0;class Pu extends ti{}Pu.prototype.ValueTypeName="color";class Gr extends ti{}Gr.prototype.ValueTypeName="number";class Jf extends Es{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t);let c=e*a;for(let d=c+a;c!==d;c+=4)xn.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Wr extends ti{InterpolantFactoryMethodLinear(e){return new Jf(this.times,this.values,this.getValueSize(),e)}}Wr.prototype.ValueTypeName="quaternion";Wr.prototype.InterpolantFactoryMethodSmooth=void 0;class Kr extends ti{constructor(e,t,n){super(e,t,n)}}Kr.prototype.ValueTypeName="string";Kr.prototype.ValueBufferType=Array;Kr.prototype.DefaultInterpolation=bs;Kr.prototype.InterpolantFactoryMethodLinear=void 0;Kr.prototype.InterpolantFactoryMethodSmooth=void 0;class jr extends ti{}jr.prototype.ValueTypeName="vector";class Rl{constructor(e="",t=-1,n=[],r=Vl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Hn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(ep(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(ti.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const d=Yf(l);l=Jc(l,1,d),c=Jc(c,1,d),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Gr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],d=c.name.match(s);if(d&&d.length>1){const u=d[1];let f=r[u];f||(r[u]=f=[]),f.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,m,g,_){if(m.length!==0){const h=[],p=[];Cu(m,h,p,g),h.length!==0&&_.push(new u(f,h,p))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const m={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)m[f[g].morphTargets[_]]=-1;for(const _ in m){const h=[],p=[];for(let M=0;M!==f[g].morphTargets.length;++M){const T=f[g];h.push(T.time),p.push(T.morphTarget===_?1:0)}r.push(new Gr(".morphTargetInfluence["+_+"]",h,p))}l=m.length*o}else{const m=".bones["+t[u].name+"]";n(jr,m+".position",f,"pos",r),n(Wr,m+".quaternion",f,"rot",r),n(jr,m+".scale",f,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Qf(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Gr;case"vector":case"vector2":case"vector3":case"vector4":return jr;case"color":return Pu;case"quaternion":return Wr;case"bool":case"boolean":return Yr;case"string":return Kr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function ep(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Qf(i.type);if(i.times===void 0){const t=[],n=[];Cu(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Pi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class tp{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){a++,s===!1&&r.onStart!==void 0&&r.onStart(d,o,a),s=!0},this.itemEnd=function(d){o++,r.onProgress!==void 0&&r.onProgress(d,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){const u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,f=c.length;u<f;u+=2){const m=c[u],g=c[u+1];if(m.global&&(m.lastIndex=0),m.test(d))return g}return null}}}const np=new tp;class tr{constructor(e){this.manager=e!==void 0?e:np,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}tr.DEFAULT_MATERIAL_NAME="__DEFAULT";const li={};class ip extends Error{constructor(e,t){super(e),this.response=t}}class Jl extends tr{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Pi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(li[e]!==void 0){li[e].push({onLoad:t,onProgress:n,onError:r});return}li[e]=[],li[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const d=li[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=f?parseInt(f):0,g=m!==0;let _=0;const h=new ReadableStream({start(p){M();function M(){u.read().then(({done:T,value:S})=>{if(T)p.close();else{_+=S.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:m});for(let I=0,x=d.length;I<x;I++){const y=d[I];y.onProgress&&y.onProgress(C)}p.enqueue(S),M()}},T=>{p.error(T)})}}});return new Response(h)}else throw new ip(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{Pi.add(e,c);const d=li[e];delete li[e];for(let u=0,f=d.length;u<f;u++){const m=d[u];m.onLoad&&m.onLoad(c)}}).catch(c=>{const d=li[e];if(d===void 0)throw this.manager.itemError(e),c;delete li[e];for(let u=0,f=d.length;u<f;u++){const m=d[u];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class rp extends tr{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Pi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ms("img");function l(){d(),Pi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){d(),r&&r(u),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class sp extends tr{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new Xl,a=new Jl(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(d){if(r!==void 0)r(d);else{console.error(d);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:$n,o.wrapT=c.wrapT!==void 0?c.wrapT:$n,o.magFilter=c.magFilter!==void 0?c.magFilter:Lt,o.minFilter=c.minFilter!==void 0?c.minFilter:Lt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Xn),c.mipmapCount===1&&(o.minFilter=Lt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,r),o}}class Du extends tr{constructor(e){super(e)}load(e,t,n,r){const s=new Ot,o=new rp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Bo extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class op extends Bo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const _a=new $e,Qc=new D,ed=new D;class Ql{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yl,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Qc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qc),ed.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ed),t.updateMatrixWorld(),_a.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_a),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_a)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ap extends Ql{constructor(){super(new Jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Hr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Lu extends Bo{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new ap}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const td=new $e,os=new D,xa=new D;class lp extends Ql{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ce(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),os.setFromMatrixPosition(e.matrixWorld),n.position.copy(os),xa.copy(n.position),xa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(xa),n.updateMatrixWorld(),r.makeTranslation(-os.x,-os.y,-os.z),td.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(td)}}class _n extends Bo{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new lp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class zo extends Su{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class cp extends Ql{constructor(){super(new zo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fu extends Bo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new cp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class _s{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class dp extends tr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Pi.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Pi.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),Pi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Pi.add(e,l),s.manager.itemStart(e)}}class up extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class hp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=nd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=nd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function nd(){return performance.now()}class fp{constructor(e,t,n){this.binding=e,this.valueSize=n;let r,s,o;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:r=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,r=this.valueSize,s=e*r+r;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==r;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,r)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,r=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,r,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,r);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,r=n*this._origIndex;e.getValue(t,r);for(let s=n,o=r;s!==o;++s)t[s]=t[r+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,r,s){if(r>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,r){xn.slerpFlat(e,t,e,t,e,n,r)}_slerpAdditive(e,t,n,r,s){const o=this._workIndex*s;xn.multiplyQuaternionsFlat(e,o,e,t,e,n),xn.slerpFlat(e,t,e,t,e,o,r)}_lerp(e,t,n,r,s){const o=1-r;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*r}}_lerpAdditive(e,t,n,r,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*r}}}const ec="\\[\\]\\.:\\/",pp=new RegExp("["+ec+"]","g"),tc="[^"+ec+"]",mp="[^"+ec.replace("\\.","")+"]",gp=/((?:WC+[\/:])*)/.source.replace("WC",tc),_p=/(WCOD+)?/.source.replace("WCOD",mp),xp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",tc),vp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",tc),bp=new RegExp("^"+gp+_p+xp+vp+"$"),yp=["material","materials","bones","map"];class Mp{constructor(e,t,n){const r=n||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ut{constructor(e,t,n){this.path=t,this.parsedPath=n||ut.parseTrackName(t),this.node=ut.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ut.Composite(e,t,n):new ut(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(pp,"")}static parseTrackName(e){const t=bp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);yp.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=ut.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ut.Composite=Mp;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Sp{constructor(e,t,n=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=r;const s=t.tracks,o=s.length,a=new Array(o),l={endingStart:Ar,endingEnd:Ar};for(let c=0;c!==o;++c){const d=s[c].createInterpolant(null);a[c]=d,d.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=uu,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const r=this._clip.duration,s=e._clip.duration,o=s/r,a=r/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const r=this._mixer,s=r.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=r._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,r){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Ih:for(let d=0,u=l.length;d!==u;++d)l[d].evaluate(o),c[d].accumulateAdditive(a);break;case Vl:default:for(let d=0,u=l.length;d!==u;++d)l[d].evaluate(o),c[d].accumulate(r,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let r=this.time+e,s=this._loopCount;const o=n===Ch;if(e===0)return s===-1?r:o&&(s&1)===1?t-r:r;if(n===du){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),r>=t||r<0){const a=Math.floor(r/t);r-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=r;if(o&&(s&1)===1)return t-r}return r}_setEndings(e,t,n){const r=this._interpolantSettings;n?(r.endingStart=Rr,r.endingEnd=Rr):(e?r.endingStart=this.zeroSlopeAtStart?Rr:Ar:r.endingStart=bo,t?r.endingEnd=this.zeroSlopeAtEnd?Rr:Ar:r.endingEnd=bo)}_scheduleFading(e,t,n){const r=this._mixer,s=r.time;let o=this._weightInterpolant;o===null&&(o=r._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}}const wp=new Float32Array(1);class Ep extends Ni{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,r=e._clip.tracks,s=r.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let d=c[l];d===void 0&&(d={},c[l]=d);for(let u=0;u!==s;++u){const f=r[u],m=f.name;let g=d[m];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,m));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;g=new fp(ut.create(n,m,_),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,m),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,n)}const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const r=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=r.length,r.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],r=e._cacheIndex;n._cacheIndex=r,t[r]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],d=e._byClipCacheIndex;c._byClipCacheIndex=d,l[d]=c,l.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete u[f],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const r=this._bindingsByRootAndName,s=this._bindings;let o=r[t];o===void 0&&(o={},r[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,r=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[r],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[r]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Iu(new Float32Array(2),new Float32Array(2),1,wp),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const r=t||this._root,s=r.uuid;let o=typeof e=="string"?Rl.findByName(r,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Vl),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const d=new Sp(this,o,t,n);return this._bindAction(d,c),this._addInactiveAction(d,a,s),d}existingAction(e,t){const n=t||this._root,r=n.uuid,s=typeof e=="string"?Rl.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[r]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,r=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(r,e,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,r=this._actionsByClip,s=r[n];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const d=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=d,t[d]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete r[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class id{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ke(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Tp extends Ni{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function rd(i,e,t,n){const r=Ap(n);switch(t){case ru:return i*e;case ou:return i*e;case au:return i*e*2;case Ol:return i*e/r.components*r.byteLength;case Bl:return i*e/r.components*r.byteLength;case lu:return i*e*2/r.components*r.byteLength;case zl:return i*e*2/r.components*r.byteLength;case su:return i*e*3/r.components*r.byteLength;case Cn:return i*e*4/r.components*r.byteLength;case Hl:return i*e*4/r.components*r.byteLength;case ho:case fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case po:case mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qa:case tl:return Math.max(i,16)*Math.max(e,8)/4;case Ja:case el:return Math.max(i,8)*Math.max(e,8)/2;case nl:case il:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case rl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ol:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case al:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ll:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case cl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case dl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ul:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case hl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case fl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case pl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ml:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case gl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case _l:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case xl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case go:case vl:case bl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case cu:case yl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ml:case Sl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ap(i){switch(i){case Zn:case tu:return{byteLength:1,components:1};case vs:case nu:case qn:return{byteLength:2,components:1};case kl:case Ul:return{byteLength:2,components:4};case er:case Nl:case un:return{byteLength:4,components:1};case iu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Nu(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Rp(i){const e=new WeakMap;function t(a,l){const c=a.array,d=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,d),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const d=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,d);else{u.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<u.length;m++){const g=u[f],_=u[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let m=0,g=u.length;m<g;m++){const _=u[m];i.bufferSubData(c,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Cp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ip=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Pp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Np=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Up=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Op=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Vp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Gp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Jp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Qp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,em=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,tm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,im=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sm="gl_FragColor = linearToOutputTexel( gl_FragColor );",om=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,am=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,lm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,um=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_m=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ym=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Mm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Em=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Am=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Rm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Im=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,km=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Um=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Om=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,jm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$m=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Xm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Km=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Jm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ng=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ig=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,og=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ag=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ug=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_g=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,xg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ag=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ng=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,kg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ug=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Gg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$g=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Xg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Yg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Kg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Qg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,i0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,o0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,a0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:Cp,alphahash_pars_fragment:Ip,alphamap_fragment:Pp,alphamap_pars_fragment:Dp,alphatest_fragment:Lp,alphatest_pars_fragment:Fp,aomap_fragment:Np,aomap_pars_fragment:kp,batching_pars_vertex:Up,batching_vertex:Op,begin_vertex:Bp,beginnormal_vertex:zp,bsdfs:Hp,iridescence_fragment:Vp,bumpmap_pars_fragment:Gp,clipping_planes_fragment:Wp,clipping_planes_pars_fragment:jp,clipping_planes_pars_vertex:$p,clipping_planes_vertex:Xp,color_fragment:qp,color_pars_fragment:Yp,color_pars_vertex:Kp,color_vertex:Zp,common:Jp,cube_uv_reflection_fragment:Qp,defaultnormal_vertex:em,displacementmap_pars_vertex:tm,displacementmap_vertex:nm,emissivemap_fragment:im,emissivemap_pars_fragment:rm,colorspace_fragment:sm,colorspace_pars_fragment:om,envmap_fragment:am,envmap_common_pars_fragment:lm,envmap_pars_fragment:cm,envmap_pars_vertex:dm,envmap_physical_pars_fragment:ym,envmap_vertex:um,fog_vertex:hm,fog_pars_vertex:fm,fog_fragment:pm,fog_pars_fragment:mm,gradientmap_pars_fragment:gm,lightmap_pars_fragment:_m,lights_lambert_fragment:xm,lights_lambert_pars_fragment:vm,lights_pars_begin:bm,lights_toon_fragment:Mm,lights_toon_pars_fragment:Sm,lights_phong_fragment:wm,lights_phong_pars_fragment:Em,lights_physical_fragment:Tm,lights_physical_pars_fragment:Am,lights_fragment_begin:Rm,lights_fragment_maps:Cm,lights_fragment_end:Im,logdepthbuf_fragment:Pm,logdepthbuf_pars_fragment:Dm,logdepthbuf_pars_vertex:Lm,logdepthbuf_vertex:Fm,map_fragment:Nm,map_pars_fragment:km,map_particle_fragment:Um,map_particle_pars_fragment:Om,metalnessmap_fragment:Bm,metalnessmap_pars_fragment:zm,morphinstance_vertex:Hm,morphcolor_vertex:Vm,morphnormal_vertex:Gm,morphtarget_pars_vertex:Wm,morphtarget_vertex:jm,normal_fragment_begin:$m,normal_fragment_maps:Xm,normal_pars_fragment:qm,normal_pars_vertex:Ym,normal_vertex:Km,normalmap_pars_fragment:Zm,clearcoat_normal_fragment_begin:Jm,clearcoat_normal_fragment_maps:Qm,clearcoat_pars_fragment:eg,iridescence_pars_fragment:tg,opaque_fragment:ng,packing:ig,premultiplied_alpha_fragment:rg,project_vertex:sg,dithering_fragment:og,dithering_pars_fragment:ag,roughnessmap_fragment:lg,roughnessmap_pars_fragment:cg,shadowmap_pars_fragment:dg,shadowmap_pars_vertex:ug,shadowmap_vertex:hg,shadowmask_pars_fragment:fg,skinbase_vertex:pg,skinning_pars_vertex:mg,skinning_vertex:gg,skinnormal_vertex:_g,specularmap_fragment:xg,specularmap_pars_fragment:vg,tonemapping_fragment:bg,tonemapping_pars_fragment:yg,transmission_fragment:Mg,transmission_pars_fragment:Sg,uv_pars_fragment:wg,uv_pars_vertex:Eg,uv_vertex:Tg,worldpos_vertex:Ag,background_vert:Rg,background_frag:Cg,backgroundCube_vert:Ig,backgroundCube_frag:Pg,cube_vert:Dg,cube_frag:Lg,depth_vert:Fg,depth_frag:Ng,distanceRGBA_vert:kg,distanceRGBA_frag:Ug,equirect_vert:Og,equirect_frag:Bg,linedashed_vert:zg,linedashed_frag:Hg,meshbasic_vert:Vg,meshbasic_frag:Gg,meshlambert_vert:Wg,meshlambert_frag:jg,meshmatcap_vert:$g,meshmatcap_frag:Xg,meshnormal_vert:qg,meshnormal_frag:Yg,meshphong_vert:Kg,meshphong_frag:Zg,meshphysical_vert:Jg,meshphysical_frag:Qg,meshtoon_vert:e0,meshtoon_frag:t0,points_vert:n0,points_frag:i0,shadow_vert:r0,shadow_frag:s0,sprite_vert:o0,sprite_frag:a0},ge={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},jn={basic:{uniforms:rn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:rn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:rn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:rn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:rn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:rn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:rn([ge.points,ge.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:rn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:rn([ge.common,ge.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:rn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:rn([ge.sprite,ge.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:rn([ge.common,ge.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:rn([ge.lights,ge.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};jn.physical={uniforms:rn([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const to={r:0,b:0,g:0},Gi=new Jn,l0=new $e;function c0(i,e,t,n,r,s,o){const a=new Pe(0);let l=s===!0?0:1,c,d,u=null,f=0,m=null;function g(T){let S=T.isScene===!0?T.background:null;return S&&S.isTexture&&(S=(T.backgroundBlurriness>0?t:e).get(S)),S}function _(T){let S=!1;const C=g(T);C===null?p(a,l):C&&C.isColor&&(p(C,1),S=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function h(T,S){const C=g(S);C&&(C.isCubeTexture||C.mapping===Uo)?(d===void 0&&(d=new Ue(new ki(1,1,1),new Zt({name:"BackgroundCubeMaterial",uniforms:Vr(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(I,x,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Gi.copy(S.backgroundRotation),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),d.material.uniforms.envMap.value=C,d.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(l0.makeRotationFromEuler(Gi)),d.material.toneMapped=it.getTransfer(C.colorSpace)!==mt,(u!==C||f!==C.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,u=C,f=C.version,m=i.toneMapping),d.layers.enableAll(),T.unshift(d,d.geometry,d.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Ue(new Fi(2,2),new Zt({name:"BackgroundMaterial",uniforms:Vr(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=it.getTransfer(C.colorSpace)!==mt,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||f!==C.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=C,f=C.version,m=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,S){T.getRGB(to,yu(i)),n.buffers.color.setClear(to.r,to.g,to.b,S,o)}function M(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,S=1){a.set(T),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(a,l)},render:_,addToRenderList:h,dispose:M}}function d0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,o=!1;function a(v,A,P,F,N){let z=!1;const O=u(F,P,A);s!==O&&(s=O,c(s.object)),z=m(v,F,P,N),z&&g(v,F,P,N),N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,S(v,A,P,F),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function d(v){return i.deleteVertexArray(v)}function u(v,A,P){const F=P.wireframe===!0;let N=n[v.id];N===void 0&&(N={},n[v.id]=N);let z=N[A.id];z===void 0&&(z={},N[A.id]=z);let O=z[F];return O===void 0&&(O=f(l()),z[F]=O),O}function f(v){const A=[],P=[],F=[];for(let N=0;N<t;N++)A[N]=0,P[N]=0,F[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:P,attributeDivisors:F,object:v,attributes:{},index:null}}function m(v,A,P,F){const N=s.attributes,z=A.attributes;let O=0;const Z=P.getAttributes();for(const X in Z)if(Z[X].location>=0){const le=N[X];let ve=z[X];if(ve===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(ve=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(ve=v.instanceColor)),le===void 0||le.attribute!==ve||ve&&le.data!==ve.data)return!0;O++}return s.attributesNum!==O||s.index!==F}function g(v,A,P,F){const N={},z=A.attributes;let O=0;const Z=P.getAttributes();for(const X in Z)if(Z[X].location>=0){let le=z[X];le===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(le=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(le=v.instanceColor));const ve={};ve.attribute=le,le&&le.data&&(ve.data=le.data),N[X]=ve,O++}s.attributes=N,s.attributesNum=O,s.index=F}function _(){const v=s.newAttributes;for(let A=0,P=v.length;A<P;A++)v[A]=0}function h(v){p(v,0)}function p(v,A){const P=s.newAttributes,F=s.enabledAttributes,N=s.attributeDivisors;P[v]=1,F[v]===0&&(i.enableVertexAttribArray(v),F[v]=1),N[v]!==A&&(i.vertexAttribDivisor(v,A),N[v]=A)}function M(){const v=s.newAttributes,A=s.enabledAttributes;for(let P=0,F=A.length;P<F;P++)A[P]!==v[P]&&(i.disableVertexAttribArray(P),A[P]=0)}function T(v,A,P,F,N,z,O){O===!0?i.vertexAttribIPointer(v,A,P,N,z):i.vertexAttribPointer(v,A,P,F,N,z)}function S(v,A,P,F){_();const N=F.attributes,z=P.getAttributes(),O=A.defaultAttributeValues;for(const Z in z){const X=z[Z];if(X.location>=0){let se=N[Z];if(se===void 0&&(Z==="instanceMatrix"&&v.instanceMatrix&&(se=v.instanceMatrix),Z==="instanceColor"&&v.instanceColor&&(se=v.instanceColor)),se!==void 0){const le=se.normalized,ve=se.itemSize,Ne=e.get(se);if(Ne===void 0)continue;const Ve=Ne.buffer,J=Ne.type,oe=Ne.bytesPerElement,Te=J===i.INT||J===i.UNSIGNED_INT||se.gpuType===Nl;if(se.isInterleavedBufferAttribute){const he=se.data,Fe=he.stride,Xe=se.offset;if(he.isInstancedInterleavedBuffer){for(let De=0;De<X.locationSize;De++)p(X.location+De,he.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let De=0;De<X.locationSize;De++)h(X.location+De);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let De=0;De<X.locationSize;De++)T(X.location+De,ve/X.locationSize,J,le,Fe*oe,(Xe+ve/X.locationSize*De)*oe,Te)}else{if(se.isInstancedBufferAttribute){for(let he=0;he<X.locationSize;he++)p(X.location+he,se.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let he=0;he<X.locationSize;he++)h(X.location+he);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let he=0;he<X.locationSize;he++)T(X.location+he,ve/X.locationSize,J,le,ve*oe,ve/X.locationSize*he*oe,Te)}}else if(O!==void 0){const le=O[Z];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(X.location,le);break;case 3:i.vertexAttrib3fv(X.location,le);break;case 4:i.vertexAttrib4fv(X.location,le);break;default:i.vertexAttrib1fv(X.location,le)}}}}M()}function C(){y();for(const v in n){const A=n[v];for(const P in A){const F=A[P];for(const N in F)d(F[N].object),delete F[N];delete A[P]}delete n[v]}}function I(v){if(n[v.id]===void 0)return;const A=n[v.id];for(const P in A){const F=A[P];for(const N in F)d(F[N].object),delete F[N];delete A[P]}delete n[v.id]}function x(v){for(const A in n){const P=n[A];if(P[v.id]===void 0)continue;const F=P[v.id];for(const N in F)d(F[N].object),delete F[N];delete P[v.id]}}function y(){b(),o=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:y,resetDefaultState:b,dispose:C,releaseStatesOfGeometry:I,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:h,disableUnusedAttributes:M}}function u0(i,e,t){let n;function r(c){n=c}function s(c,d){i.drawArrays(n,c,d),t.update(d,n,1)}function o(c,d,u){u!==0&&(i.drawArraysInstanced(n,c,d,u),t.update(d,n,u))}function a(c,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,u);let m=0;for(let g=0;g<u;g++)m+=d[g];t.update(m,n,1)}function l(c,d,u,f){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],d[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,d,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=d[_]*f[_];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function h0(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(x){return!(x!==Cn&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){const y=x===qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Zn&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&x!==un&&!y)}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),h=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,I=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:h,maxAttributes:p,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:S,vertexTextures:C,maxSamples:I}}function f0(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new ui,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||n!==0||r;return r=f,n=u.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=d(u,f,0)},this.setState=function(u,f,m){const g=u.clippingPlanes,_=u.clipIntersection,h=u.clipShadows,p=i.get(u);if(!r||g===null||g.length===0||s&&!h)s?d(null):c();else{const M=s?0:n,T=M*4;let S=p.clippingState||null;l.value=S,S=d(g,f,T,m);for(let C=0;C!==T;++C)S[C]=t[C];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,f,m,g){const _=u!==null?u.length:0;let h=null;if(_!==0){if(h=l.value,g!==!0||h===null){const p=m+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(h===null||h.length<p)&&(h=new Float32Array(p));for(let T=0,S=m;T!==_;++T,S+=4)o.copy(u[T]).applyMatrix4(M,a),o.normal.toArray(h,S),h[S+3]=o.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,h}}function p0(i){let e=new WeakMap;function t(o,a){return a===xs?o.mapping=Ur:a===Za&&(o.mapping=Or),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===xs||a===Za)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Lf(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Cr=4,sd=[.125,.215,.35,.446,.526,.582],Ki=20,va=new zo,od=new Pe;let ba=null,ya=0,Ma=0,Sa=!1;const qi=(1+Math.sqrt(5))/2,br=1/qi,ad=[new D(-qi,br,0),new D(qi,br,0),new D(-br,0,qi),new D(br,0,qi),new D(0,qi,-br),new D(0,qi,br),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],m0=new D;class Ro{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=m0}=s;ba=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),Sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ba,ya,Ma),this._renderer.xr.enabled=Sa,e.scissorTest=!1,no(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ur||e.mapping===Or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ba=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),Sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:qn,format:Cn,colorSpace:$t,depthBuffer:!1},r=ld(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ld(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=g0(s)),this._blurMaterial=_0(s,e,t)}return r}_compileMaterial(e){const t=new Ue(this._lodPlanes[0],e);this._renderer.compile(t,va)}_sceneToCubeUV(e,t,n,r,s){const l=new Jt(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,m=u.toneMapping;u.getClearColor(od),u.toneMapping=pi,u.autoClear=!1;const g=new Yn({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),_=new Ue(new ki,g);let h=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,h=!0):(g.color.copy(od),h=!0);for(let M=0;M<6;M++){const T=M%3;T===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[M],s.y,s.z)):T===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[M]));const S=this._cubeSize;no(r,T*S,M>2?S:0,S,S),u.setRenderTarget(r),h&&u.render(_,l),u.render(e,l)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=m,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Ur||e.mapping===Or;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=dd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cd());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ue(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;no(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,va)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ad[(r-s-1)%ad.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new Ue(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ki-1),_=s/g,h=isFinite(s)?1+Math.floor(d*_):Ki;h>Ki&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Ki}`);const p=[];let M=0;for(let x=0;x<Ki;++x){const y=x/_,b=Math.exp(-y*y/2);p.push(b),x===0?M+=b:x<h&&(M+=2*b)}for(let x=0;x<p.length;x++)p[x]=p[x]/M;f.envMap.value=e.texture,f.samples.value=h,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:T}=this;f.dTheta.value=g,f.mipInt.value=T-n;const S=this._sizeLods[r],C=3*S*(r>T-Cr?r-T+Cr:0),I=4*(this._cubeSize-S);no(t,C,I,3*S,2*S),l.setRenderTarget(t),l.render(u,va)}}function g0(i){const e=[],t=[],n=[];let r=i;const s=i-Cr+1+sd.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Cr?l=sd[o-i+Cr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),d=-c,u=1+c,f=[d,d,u,d,u,u,d,d,u,u,d,u],m=6,g=6,_=3,h=2,p=1,M=new Float32Array(_*g*m),T=new Float32Array(h*g*m),S=new Float32Array(p*g*m);for(let I=0;I<m;I++){const x=I%3*2/3-1,y=I>2?0:-1,b=[x,y,0,x+2/3,y,0,x+2/3,y+1,0,x,y,0,x+2/3,y+1,0,x,y+1,0];M.set(b,_*g*I),T.set(f,h*g*I);const v=[I,I,I,I,I,I];S.set(v,p*g*I)}const C=new hn;C.setAttribute("position",new an(M,_)),C.setAttribute("uv",new an(T,h)),C.setAttribute("faceIndex",new an(S,p)),e.push(C),r>Cr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ld(i,e,t){const n=new xi(i,e,t);return n.texture.mapping=Uo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function no(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function _0(i,e,t){const n=new Float32Array(Ki),r=new D(0,1,0);return new Zt({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function cd(){return new Zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function dd(){return new Zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function nc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function x0(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===xs||l===Za,d=l===Ur||l===Or;if(c||d){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Ro(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const m=a.image;return c&&m&&m.height>0||d&&m&&r(m)?(t===null&&(t=new Ro(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function v0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Xi("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function b0(i,e,t,n){const r={},s=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const m in f)e.update(f[m],i.ARRAY_BUFFER)}function c(u){const f=[],m=u.index,g=u.attributes.position;let _=0;if(m!==null){const M=m.array;_=m.version;for(let T=0,S=M.length;T<S;T+=3){const C=M[T+0],I=M[T+1],x=M[T+2];f.push(C,I,I,x,x,C)}}else if(g!==void 0){const M=g.array;_=g.version;for(let T=0,S=M.length/3-1;T<S;T+=3){const C=T+0,I=T+1,x=T+2;f.push(C,I,I,x,x,C)}}else return;const h=new(mu(f)?bu:vu)(f,1);h.version=_;const p=s.get(u);p&&e.remove(p),s.set(u,h)}function d(u){const f=s.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:d}}function y0(i,e,t){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,m){i.drawElements(n,m,s,f*o),t.update(m,n,1)}function c(f,m,g){g!==0&&(i.drawElementsInstanced(n,m,s,f*o,g),t.update(m,n,g))}function d(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,f,0,g);let h=0;for(let p=0;p<g;p++)h+=m[p];t.update(h,n,1)}function u(f,m,g,_){if(g===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let p=0;p<f.length;p++)c(f[p]/o,m[p],_[p]);else{h.multiDrawElementsInstancedWEBGL(n,m,0,s,f,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=m[M]*_[M];t.update(p,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function M0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function S0(i,e,t){const n=new WeakMap,r=new at;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let v=function(){y.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var m=v;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,h=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),h===!0&&(S=3);let C=a.attributes.position.count*S,I=1;C>e.maxTextureSize&&(I=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const x=new Float32Array(C*I*4*u),y=new gu(x,C,I,u);y.type=un,y.needsUpdate=!0;const b=S*4;for(let A=0;A<u;A++){const P=p[A],F=M[A],N=T[A],z=C*I*4*A;for(let O=0;O<P.count;O++){const Z=O*b;g===!0&&(r.fromBufferAttribute(P,O),x[z+Z+0]=r.x,x[z+Z+1]=r.y,x[z+Z+2]=r.z,x[z+Z+3]=0),_===!0&&(r.fromBufferAttribute(F,O),x[z+Z+4]=r.x,x[z+Z+5]=r.y,x[z+Z+6]=r.z,x[z+Z+7]=0),h===!0&&(r.fromBufferAttribute(N,O),x[z+Z+8]=r.x,x[z+Z+9]=r.y,x[z+Z+10]=r.z,x[z+Z+11]=N.itemSize===4?r.w:1)}}f={count:u,texture:y,size:new Ce(C,I)},n.set(a,f),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let h=0;h<c.length;h++)g+=c[h];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function w0(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,d=l.geometry,u=e.get(l,d);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return u}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const ku=new Ot,ud=new Ru(1,1),Uu=new gu,Ou=new pf,Bu=new wu,hd=[],fd=[],pd=new Float32Array(16),md=new Float32Array(9),gd=new Float32Array(4);function Zr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=hd[r];if(s===void 0&&(s=new Float32Array(r),hd[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ho(i,e){let t=fd[e];t===void 0&&(t=new Int32Array(e),fd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function E0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function T0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2fv(this.addr,e),zt(t,e)}}function A0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;i.uniform3fv(this.addr,e),zt(t,e)}}function R0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4fv(this.addr,e),zt(t,e)}}function C0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;gd.set(n),i.uniformMatrix2fv(this.addr,!1,gd),zt(t,n)}}function I0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;md.set(n),i.uniformMatrix3fv(this.addr,!1,md),zt(t,n)}}function P0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;pd.set(n),i.uniformMatrix4fv(this.addr,!1,pd),zt(t,n)}}function D0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function L0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2iv(this.addr,e),zt(t,e)}}function F0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3iv(this.addr,e),zt(t,e)}}function N0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4iv(this.addr,e),zt(t,e)}}function k0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function U0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2uiv(this.addr,e),zt(t,e)}}function O0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3uiv(this.addr,e),zt(t,e)}}function B0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4uiv(this.addr,e),zt(t,e)}}function z0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(ud.compareFunction=pu,s=ud):s=ku,t.setTexture2D(e||s,r)}function H0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Ou,r)}function V0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Bu,r)}function G0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Uu,r)}function W0(i){switch(i){case 5126:return E0;case 35664:return T0;case 35665:return A0;case 35666:return R0;case 35674:return C0;case 35675:return I0;case 35676:return P0;case 5124:case 35670:return D0;case 35667:case 35671:return L0;case 35668:case 35672:return F0;case 35669:case 35673:return N0;case 5125:return k0;case 36294:return U0;case 36295:return O0;case 36296:return B0;case 35678:case 36198:case 36298:case 36306:case 35682:return z0;case 35679:case 36299:case 36307:return H0;case 35680:case 36300:case 36308:case 36293:return V0;case 36289:case 36303:case 36311:case 36292:return G0}}function j0(i,e){i.uniform1fv(this.addr,e)}function $0(i,e){const t=Zr(e,this.size,2);i.uniform2fv(this.addr,t)}function X0(i,e){const t=Zr(e,this.size,3);i.uniform3fv(this.addr,t)}function q0(i,e){const t=Zr(e,this.size,4);i.uniform4fv(this.addr,t)}function Y0(i,e){const t=Zr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function K0(i,e){const t=Zr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Z0(i,e){const t=Zr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function J0(i,e){i.uniform1iv(this.addr,e)}function Q0(i,e){i.uniform2iv(this.addr,e)}function e_(i,e){i.uniform3iv(this.addr,e)}function t_(i,e){i.uniform4iv(this.addr,e)}function n_(i,e){i.uniform1uiv(this.addr,e)}function i_(i,e){i.uniform2uiv(this.addr,e)}function r_(i,e){i.uniform3uiv(this.addr,e)}function s_(i,e){i.uniform4uiv(this.addr,e)}function o_(i,e,t){const n=this.cache,r=e.length,s=Ho(t,r);Bt(n,s)||(i.uniform1iv(this.addr,s),zt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||ku,s[o])}function a_(i,e,t){const n=this.cache,r=e.length,s=Ho(t,r);Bt(n,s)||(i.uniform1iv(this.addr,s),zt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Ou,s[o])}function l_(i,e,t){const n=this.cache,r=e.length,s=Ho(t,r);Bt(n,s)||(i.uniform1iv(this.addr,s),zt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Bu,s[o])}function c_(i,e,t){const n=this.cache,r=e.length,s=Ho(t,r);Bt(n,s)||(i.uniform1iv(this.addr,s),zt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Uu,s[o])}function d_(i){switch(i){case 5126:return j0;case 35664:return $0;case 35665:return X0;case 35666:return q0;case 35674:return Y0;case 35675:return K0;case 35676:return Z0;case 5124:case 35670:return J0;case 35667:case 35671:return Q0;case 35668:case 35672:return e_;case 35669:case 35673:return t_;case 5125:return n_;case 36294:return i_;case 36295:return r_;case 36296:return s_;case 35678:case 36198:case 36298:case 36306:case 35682:return o_;case 35679:case 36299:case 36307:return a_;case 35680:case 36300:case 36308:case 36293:return l_;case 36289:case 36303:case 36311:case 36292:return c_}}class u_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=W0(t.type)}}class h_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=d_(t.type)}}class f_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const wa=/(\w+)(\])?(\[|\.)?/g;function _d(i,e){i.seq.push(e),i.map[e.id]=e}function p_(i,e,t){const n=i.name,r=n.length;for(wa.lastIndex=0;;){const s=wa.exec(n),o=wa.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){_d(t,c===void 0?new u_(a,i,e):new h_(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new f_(a),_d(t,u)),t=u}}}class _o{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);p_(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function xd(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const m_=37297;let g_=0;function __(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const vd=new qe;function x_(i){it._getMatrix(vd,it.workingColorSpace,i);const e=`mat3( ${vd.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(i)){case yo:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function bd(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+__(i.getShaderSource(e),o)}else return r}function v_(i,e){const t=x_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function b_(i,e){let t;switch(e){case Mh:t="Linear";break;case Sh:t="Reinhard";break;case wh:t="Cineon";break;case Jd:t="ACESFilmic";break;case Th:t="AgX";break;case Ah:t="Neutral";break;case Eh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const io=new D;function y_(){it.getLuminanceCoefficients(io);const i=io.x.toFixed(4),e=io.y.toFixed(4),t=io.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function M_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hs).join(`
`)}function S_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function w_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function hs(i){return i!==""}function yd(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Md(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const E_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cl(i){return i.replace(E_,A_)}const T_=new Map;function A_(i,e){let t=Ye[e];if(t===void 0){const n=T_.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Cl(t)}const R_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sd(i){return i.replace(R_,C_)}function C_(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function wd(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function I_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Yd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Kd?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ci&&(e="SHADOWMAP_TYPE_VSM"),e}function P_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ur:case Or:e="ENVMAP_TYPE_CUBE";break;case Uo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function D_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Or:e="ENVMAP_MODE_REFRACTION";break}return e}function L_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Zd:e="ENVMAP_BLENDING_MULTIPLY";break;case bh:e="ENVMAP_BLENDING_MIX";break;case yh:e="ENVMAP_BLENDING_ADD";break}return e}function F_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function N_(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=I_(t),c=P_(t),d=D_(t),u=L_(t),f=F_(t),m=M_(t),g=S_(s),_=r.createProgram();let h,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(hs).join(`
`),h.length>0&&(h+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(hs).join(`
`),p.length>0&&(p+=`
`)):(h=[wd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),p=[wd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pi?"#define TONE_MAPPING":"",t.toneMapping!==pi?Ye.tonemapping_pars_fragment:"",t.toneMapping!==pi?b_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,v_("linearToOutputTexel",t.outputColorSpace),y_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hs).join(`
`)),o=Cl(o),o=yd(o,t),o=Md(o,t),a=Cl(a),a=yd(a,t),a=Md(a,t),o=Sd(o),a=Sd(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,h=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,p=["#define varying in",t.glslVersion===vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=M+h+o,S=M+p+a,C=xd(r,r.VERTEX_SHADER,T),I=xd(r,r.FRAGMENT_SHADER,S);r.attachShader(_,C),r.attachShader(_,I),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function x(A){if(i.debug.checkShaderErrors){const P=r.getProgramInfoLog(_).trim(),F=r.getShaderInfoLog(C).trim(),N=r.getShaderInfoLog(I).trim();let z=!0,O=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,C,I);else{const Z=bd(r,C,"vertex"),X=bd(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+P+`
`+Z+`
`+X)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(F===""||N==="")&&(O=!1);O&&(A.diagnostics={runnable:z,programLog:P,vertexShader:{log:F,prefix:h},fragmentShader:{log:N,prefix:p}})}r.deleteShader(C),r.deleteShader(I),y=new _o(r,_),b=w_(r,_)}let y;this.getUniforms=function(){return y===void 0&&x(this),y};let b;this.getAttributes=function(){return b===void 0&&x(this),b};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(_,m_)),v},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=g_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=I,this}let k_=0;class U_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new O_(e),t.set(e,n)),n}}class O_{constructor(e){this.id=k_++,this.code=e,this.usedTimes=0}}function B_(i,e,t,n,r,s,o){const a=new _u,l=new U_,c=new Set,d=[],u=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function h(b,v,A,P,F){const N=P.fog,z=F.geometry,O=b.isMeshStandardMaterial?P.environment:null,Z=(b.isMeshStandardMaterial?t:e).get(b.envMap||O),X=Z&&Z.mapping===Uo?Z.image.height:null,se=g[b.type];b.precision!==null&&(m=r.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const le=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ve=le!==void 0?le.length:0;let Ne=0;z.morphAttributes.position!==void 0&&(Ne=1),z.morphAttributes.normal!==void 0&&(Ne=2),z.morphAttributes.color!==void 0&&(Ne=3);let Ve,J,oe,Te;if(se){const Ae=jn[se];Ve=Ae.vertexShader,J=Ae.fragmentShader}else Ve=b.vertexShader,J=b.fragmentShader,l.update(b),oe=l.getVertexShaderID(b),Te=l.getFragmentShaderID(b);const he=i.getRenderTarget(),Fe=i.state.buffers.depth.getReversed(),Xe=F.isInstancedMesh===!0,De=F.isBatchedMesh===!0,vt=!!b.map,ht=!!b.matcap,He=!!Z,L=!!b.aoMap,St=!!b.lightMap,$=!!b.bumpMap,be=!!b.normalMap,Ie=!!b.displacementMap,Re=!!b.emissiveMap,Y=!!b.metalnessMap,R=!!b.roughnessMap,w=b.anisotropy>0,G=b.clearcoat>0,V=b.dispersion>0,ie=b.iridescence>0,Q=b.sheen>0,Le=b.transmission>0,_e=w&&!!b.anisotropyMap,fe=G&&!!b.clearcoatMap,Ze=G&&!!b.clearcoatNormalMap,ae=G&&!!b.clearcoatRoughnessMap,Se=ie&&!!b.iridescenceMap,de=ie&&!!b.iridescenceThicknessMap,Ge=Q&&!!b.sheenColorMap,we=Q&&!!b.sheenRoughnessMap,Je=!!b.specularMap,ne=!!b.specularColorMap,ct=!!b.specularIntensityMap,k=Le&&!!b.transmissionMap,pe=Le&&!!b.thicknessMap,K=!!b.gradientMap,te=!!b.alphaMap,xe=b.alphaTest>0,me=!!b.alphaHash,je=!!b.extensions;let _t=pi;b.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(_t=i.toneMapping);const Ct={shaderID:se,shaderType:b.type,shaderName:b.name,vertexShader:Ve,fragmentShader:J,defines:b.defines,customVertexShaderID:oe,customFragmentShaderID:Te,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:De,batchingColor:De&&F._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&F.instanceColor!==null,instancingMorph:Xe&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:he===null?i.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:$t,alphaToCoverage:!!b.alphaToCoverage,map:vt,matcap:ht,envMap:He,envMapMode:He&&Z.mapping,envMapCubeUVHeight:X,aoMap:L,lightMap:St,bumpMap:$,normalMap:be,displacementMap:f&&Ie,emissiveMap:Re,normalMapObjectSpace:be&&b.normalMapType===Fh,normalMapTangentSpace:be&&b.normalMapType===fu,metalnessMap:Y,roughnessMap:R,anisotropy:w,anisotropyMap:_e,clearcoat:G,clearcoatMap:fe,clearcoatNormalMap:Ze,clearcoatRoughnessMap:ae,dispersion:V,iridescence:ie,iridescenceMap:Se,iridescenceThicknessMap:de,sheen:Q,sheenColorMap:Ge,sheenRoughnessMap:we,specularMap:Je,specularColorMap:ne,specularIntensityMap:ct,transmission:Le,transmissionMap:k,thicknessMap:pe,gradientMap:K,opaque:b.transparent===!1&&b.blending===Pr&&b.alphaToCoverage===!1,alphaMap:te,alphaTest:xe,alphaHash:me,combine:b.combine,mapUv:vt&&_(b.map.channel),aoMapUv:L&&_(b.aoMap.channel),lightMapUv:St&&_(b.lightMap.channel),bumpMapUv:$&&_(b.bumpMap.channel),normalMapUv:be&&_(b.normalMap.channel),displacementMapUv:Ie&&_(b.displacementMap.channel),emissiveMapUv:Re&&_(b.emissiveMap.channel),metalnessMapUv:Y&&_(b.metalnessMap.channel),roughnessMapUv:R&&_(b.roughnessMap.channel),anisotropyMapUv:_e&&_(b.anisotropyMap.channel),clearcoatMapUv:fe&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Ze&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:de&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:we&&_(b.sheenRoughnessMap.channel),specularMapUv:Je&&_(b.specularMap.channel),specularColorMapUv:ne&&_(b.specularColorMap.channel),specularIntensityMapUv:ct&&_(b.specularIntensityMap.channel),transmissionMapUv:k&&_(b.transmissionMap.channel),thicknessMapUv:pe&&_(b.thicknessMap.channel),alphaMapUv:te&&_(b.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(be||w),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!z.attributes.uv&&(vt||te),fog:!!N,useFog:b.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Fe,skinning:F.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Ne,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:_t,decodeVideoTexture:vt&&b.map.isVideoTexture===!0&&it.getTransfer(b.map.colorSpace)===mt,decodeVideoTextureEmissive:Re&&b.emissiveMap.isVideoTexture===!0&&it.getTransfer(b.emissiveMap.colorSpace)===mt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Rn,flipSided:b.side===Qt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:je&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&b.extensions.multiDraw===!0||De)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ct.vertexUv1s=c.has(1),Ct.vertexUv2s=c.has(2),Ct.vertexUv3s=c.has(3),c.clear(),Ct}function p(b){const v=[];if(b.shaderID?v.push(b.shaderID):(v.push(b.customVertexShaderID),v.push(b.customFragmentShaderID)),b.defines!==void 0)for(const A in b.defines)v.push(A),v.push(b.defines[A]);return b.isRawShaderMaterial===!1&&(M(v,b),T(v,b),v.push(i.outputColorSpace)),v.push(b.customProgramCacheKey),v.join()}function M(b,v){b.push(v.precision),b.push(v.outputColorSpace),b.push(v.envMapMode),b.push(v.envMapCubeUVHeight),b.push(v.mapUv),b.push(v.alphaMapUv),b.push(v.lightMapUv),b.push(v.aoMapUv),b.push(v.bumpMapUv),b.push(v.normalMapUv),b.push(v.displacementMapUv),b.push(v.emissiveMapUv),b.push(v.metalnessMapUv),b.push(v.roughnessMapUv),b.push(v.anisotropyMapUv),b.push(v.clearcoatMapUv),b.push(v.clearcoatNormalMapUv),b.push(v.clearcoatRoughnessMapUv),b.push(v.iridescenceMapUv),b.push(v.iridescenceThicknessMapUv),b.push(v.sheenColorMapUv),b.push(v.sheenRoughnessMapUv),b.push(v.specularMapUv),b.push(v.specularColorMapUv),b.push(v.specularIntensityMapUv),b.push(v.transmissionMapUv),b.push(v.thicknessMapUv),b.push(v.combine),b.push(v.fogExp2),b.push(v.sizeAttenuation),b.push(v.morphTargetsCount),b.push(v.morphAttributeCount),b.push(v.numDirLights),b.push(v.numPointLights),b.push(v.numSpotLights),b.push(v.numSpotLightMaps),b.push(v.numHemiLights),b.push(v.numRectAreaLights),b.push(v.numDirLightShadows),b.push(v.numPointLightShadows),b.push(v.numSpotLightShadows),b.push(v.numSpotLightShadowsWithMaps),b.push(v.numLightProbes),b.push(v.shadowMapType),b.push(v.toneMapping),b.push(v.numClippingPlanes),b.push(v.numClipIntersection),b.push(v.depthPacking)}function T(b,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),b.push(a.mask)}function S(b){const v=g[b.type];let A;if(v){const P=jn[v];A=Mu.clone(P.uniforms)}else A=b.uniforms;return A}function C(b,v){let A;for(let P=0,F=d.length;P<F;P++){const N=d[P];if(N.cacheKey===v){A=N,++A.usedTimes;break}}return A===void 0&&(A=new N_(i,v,b,s),d.push(A)),A}function I(b){if(--b.usedTimes===0){const v=d.indexOf(b);d[v]=d[d.length-1],d.pop(),b.destroy()}}function x(b){l.remove(b)}function y(){l.dispose()}return{getParameters:h,getProgramCacheKey:p,getUniforms:S,acquireProgram:C,releaseProgram:I,releaseShaderCache:x,programs:d,dispose:y}}function z_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function H_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ed(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Td(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(u,f,m,g,_,h){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:h},i[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=m,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=h),e++,p}function a(u,f,m,g,_,h){const p=o(u,f,m,g,_,h);m.transmission>0?n.push(p):m.transparent===!0?r.push(p):t.push(p)}function l(u,f,m,g,_,h){const p=o(u,f,m,g,_,h);m.transmission>0?n.unshift(p):m.transparent===!0?r.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||H_),n.length>1&&n.sort(f||Ed),r.length>1&&r.sort(f||Ed)}function d(){for(let u=e,f=i.length;u<f;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function V_(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Td,i.set(n,[o])):r>=s.length?(o=new Td,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function G_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Pe};break;case"SpotLight":t={position:new D,direction:new D,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function W_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let j_=0;function $_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function X_(i){const e=new G_,t=W_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const r=new D,s=new $e,o=new $e;function a(c){let d=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let m=0,g=0,_=0,h=0,p=0,M=0,T=0,S=0,C=0,I=0,x=0;c.sort($_);for(let b=0,v=c.length;b<v;b++){const A=c[b],P=A.color,F=A.intensity,N=A.distance,z=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)d+=P.r*F,u+=P.g*F,f+=P.b*F;else if(A.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(A.sh.coefficients[O],F);x++}else if(A.isDirectionalLight){const O=e.get(A);if(O.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const Z=A.shadow,X=t.get(A);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,n.directionalShadow[m]=X,n.directionalShadowMap[m]=z,n.directionalShadowMatrix[m]=A.shadow.matrix,M++}n.directional[m]=O,m++}else if(A.isSpotLight){const O=e.get(A);O.position.setFromMatrixPosition(A.matrixWorld),O.color.copy(P).multiplyScalar(F),O.distance=N,O.coneCos=Math.cos(A.angle),O.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),O.decay=A.decay,n.spot[_]=O;const Z=A.shadow;if(A.map&&(n.spotLightMap[C]=A.map,C++,Z.updateMatrices(A),A.castShadow&&I++),n.spotLightMatrix[_]=Z.matrix,A.castShadow){const X=t.get(A);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=z,S++}_++}else if(A.isRectAreaLight){const O=e.get(A);O.color.copy(P).multiplyScalar(F),O.halfWidth.set(A.width*.5,0,0),O.halfHeight.set(0,A.height*.5,0),n.rectArea[h]=O,h++}else if(A.isPointLight){const O=e.get(A);if(O.color.copy(A.color).multiplyScalar(A.intensity),O.distance=A.distance,O.decay=A.decay,A.castShadow){const Z=A.shadow,X=t.get(A);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,X.shadowCameraNear=Z.camera.near,X.shadowCameraFar=Z.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=A.shadow.matrix,T++}n.point[g]=O,g++}else if(A.isHemisphereLight){const O=e.get(A);O.skyColor.copy(A.color).multiplyScalar(F),O.groundColor.copy(A.groundColor).multiplyScalar(F),n.hemi[p]=O,p++}}h>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=f;const y=n.hash;(y.directionalLength!==m||y.pointLength!==g||y.spotLength!==_||y.rectAreaLength!==h||y.hemiLength!==p||y.numDirectionalShadows!==M||y.numPointShadows!==T||y.numSpotShadows!==S||y.numSpotMaps!==C||y.numLightProbes!==x)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=h,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=S+C-I,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=x,y.directionalLength=m,y.pointLength=g,y.spotLength=_,y.rectAreaLength=h,y.hemiLength=p,y.numDirectionalShadows=M,y.numPointShadows=T,y.numSpotShadows=S,y.numSpotMaps=C,y.numLightProbes=x,n.version=j_++)}function l(c,d){let u=0,f=0,m=0,g=0,_=0;const h=d.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const T=c[p];if(T.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(h),u++}else if(T.isSpotLight){const S=n.spot[m];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(h),S.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(h),m++}else if(T.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(h),o.identity(),s.copy(T.matrixWorld),s.premultiply(h),o.extractRotation(s),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(h),f++}else if(T.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(h),_++}}}return{setup:a,setupView:l,state:n}}function Ad(i){const e=new X_(i),t=[],n=[];function r(d){c.camera=d,t.length=0,n.length=0}function s(d){t.push(d)}function o(d){n.push(d)}function a(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function q_(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Ad(i),e.set(r,[a])):s>=o.length?(a=new Ad(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Y_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,K_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Z_(i,e,t){let n=new Yl;const r=new Ce,s=new Ce,o=new at,a=new $f({depthPacking:Lh}),l=new Xf,c={},d=t.maxTextureSize,u={[_i]:Qt,[Qt]:_i,[Rn]:Rn},f=new Zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:Y_,fragmentShader:K_}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new hn;g.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ue(g,f),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yd;let p=this.type;this.render=function(I,x,y){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||I.length===0)return;const b=i.getRenderTarget(),v=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),P=i.state;P.setBlending(Di),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const F=p!==ci&&this.type===ci,N=p===ci&&this.type!==ci;for(let z=0,O=I.length;z<O;z++){const Z=I[z],X=Z.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const se=X.getFrameExtents();if(r.multiply(se),s.copy(X.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/se.x),r.x=s.x*se.x,X.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/se.y),r.y=s.y*se.y,X.mapSize.y=s.y)),X.map===null||F===!0||N===!0){const ve=this.type!==ci?{minFilter:jt,magFilter:jt}:{};X.map!==null&&X.map.dispose(),X.map=new xi(r.x,r.y,ve),X.map.texture.name=Z.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const le=X.getViewportCount();for(let ve=0;ve<le;ve++){const Ne=X.getViewport(ve);o.set(s.x*Ne.x,s.y*Ne.y,s.x*Ne.z,s.y*Ne.w),P.viewport(o),X.updateMatrices(Z,ve),n=X.getFrustum(),S(x,y,X.camera,Z,this.type)}X.isPointLightShadow!==!0&&this.type===ci&&M(X,y),X.needsUpdate=!1}p=this.type,h.needsUpdate=!1,i.setRenderTarget(b,v,A)};function M(I,x){const y=e.update(_);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,m.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new xi(r.x,r.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(x,null,y,f,_,null),m.uniforms.shadow_pass.value=I.mapPass.texture,m.uniforms.resolution.value=I.mapSize,m.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(x,null,y,m,_,null)}function T(I,x,y,b){let v=null;const A=y.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(A!==void 0)v=A;else if(v=y.isPointLight===!0?l:a,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0){const P=v.uuid,F=x.uuid;let N=c[P];N===void 0&&(N={},c[P]=N);let z=N[F];z===void 0&&(z=v.clone(),N[F]=z,x.addEventListener("dispose",C)),v=z}if(v.visible=x.visible,v.wireframe=x.wireframe,b===ci?v.side=x.shadowSide!==null?x.shadowSide:x.side:v.side=x.shadowSide!==null?x.shadowSide:u[x.side],v.alphaMap=x.alphaMap,v.alphaTest=x.alphaTest,v.map=x.map,v.clipShadows=x.clipShadows,v.clippingPlanes=x.clippingPlanes,v.clipIntersection=x.clipIntersection,v.displacementMap=x.displacementMap,v.displacementScale=x.displacementScale,v.displacementBias=x.displacementBias,v.wireframeLinewidth=x.wireframeLinewidth,v.linewidth=x.linewidth,y.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const P=i.properties.get(v);P.light=y}return v}function S(I,x,y,b,v){if(I.visible===!1)return;if(I.layers.test(x.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&v===ci)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,I.matrixWorld);const F=e.update(I),N=I.material;if(Array.isArray(N)){const z=F.groups;for(let O=0,Z=z.length;O<Z;O++){const X=z[O],se=N[X.materialIndex];if(se&&se.visible){const le=T(I,se,b,v);I.onBeforeShadow(i,I,x,y,F,le,X),i.renderBufferDirect(y,null,F,le,I,X),I.onAfterShadow(i,I,x,y,F,le,X)}}}else if(N.visible){const z=T(I,N,b,v);I.onBeforeShadow(i,I,x,y,F,z,null),i.renderBufferDirect(y,null,F,z,I,null),I.onAfterShadow(i,I,x,y,F,z,null)}}const P=I.children;for(let F=0,N=P.length;F<N;F++)S(P[F],x,y,b,v)}function C(I){I.target.removeEventListener("dispose",C);for(const y in c){const b=c[y],v=I.target.uuid;v in b&&(b[v].dispose(),delete b[v])}}}const J_={[Wa]:ja,[$a]:Ya,[Xa]:Ka,[kr]:qa,[ja]:Wa,[Ya]:$a,[Ka]:Xa,[qa]:kr};function Q_(i,e){function t(){let k=!1;const pe=new at;let K=null;const te=new at(0,0,0,0);return{setMask:function(xe){K!==xe&&!k&&(i.colorMask(xe,xe,xe,xe),K=xe)},setLocked:function(xe){k=xe},setClear:function(xe,me,je,_t,Ct){Ct===!0&&(xe*=_t,me*=_t,je*=_t),pe.set(xe,me,je,_t),te.equals(pe)===!1&&(i.clearColor(xe,me,je,_t),te.copy(pe))},reset:function(){k=!1,K=null,te.set(-1,0,0,0)}}}function n(){let k=!1,pe=!1,K=null,te=null,xe=null;return{setReversed:function(me){if(pe!==me){const je=e.get("EXT_clip_control");pe?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT);const _t=xe;xe=null,this.setClear(_t)}pe=me},getReversed:function(){return pe},setTest:function(me){me?he(i.DEPTH_TEST):Fe(i.DEPTH_TEST)},setMask:function(me){K!==me&&!k&&(i.depthMask(me),K=me)},setFunc:function(me){if(pe&&(me=J_[me]),te!==me){switch(me){case Wa:i.depthFunc(i.NEVER);break;case ja:i.depthFunc(i.ALWAYS);break;case $a:i.depthFunc(i.LESS);break;case kr:i.depthFunc(i.LEQUAL);break;case Xa:i.depthFunc(i.EQUAL);break;case qa:i.depthFunc(i.GEQUAL);break;case Ya:i.depthFunc(i.GREATER);break;case Ka:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}te=me}},setLocked:function(me){k=me},setClear:function(me){xe!==me&&(pe&&(me=1-me),i.clearDepth(me),xe=me)},reset:function(){k=!1,K=null,te=null,xe=null,pe=!1}}}function r(){let k=!1,pe=null,K=null,te=null,xe=null,me=null,je=null,_t=null,Ct=null;return{setTest:function(Ae){k||(Ae?he(i.STENCIL_TEST):Fe(i.STENCIL_TEST))},setMask:function(Ae){pe!==Ae&&!k&&(i.stencilMask(Ae),pe=Ae)},setFunc:function(Ae,en,fn){(K!==Ae||te!==en||xe!==fn)&&(i.stencilFunc(Ae,en,fn),K=Ae,te=en,xe=fn)},setOp:function(Ae,en,fn){(me!==Ae||je!==en||_t!==fn)&&(i.stencilOp(Ae,en,fn),me=Ae,je=en,_t=fn)},setLocked:function(Ae){k=Ae},setClear:function(Ae){Ct!==Ae&&(i.clearStencil(Ae),Ct=Ae)},reset:function(){k=!1,pe=null,K=null,te=null,xe=null,me=null,je=null,_t=null,Ct=null}}}const s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let d={},u={},f=new WeakMap,m=[],g=null,_=!1,h=null,p=null,M=null,T=null,S=null,C=null,I=null,x=new Pe(0,0,0),y=0,b=!1,v=null,A=null,P=null,F=null,N=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,Z=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(X)[1]),O=Z>=1):X.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),O=Z>=2);let se=null,le={};const ve=i.getParameter(i.SCISSOR_BOX),Ne=i.getParameter(i.VIEWPORT),Ve=new at().fromArray(ve),J=new at().fromArray(Ne);function oe(k,pe,K,te){const xe=new Uint8Array(4),me=i.createTexture();i.bindTexture(k,me),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let je=0;je<K;je++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,te,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D(pe+je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return me}const Te={};Te[i.TEXTURE_2D]=oe(i.TEXTURE_2D,i.TEXTURE_2D,1),Te[i.TEXTURE_CUBE_MAP]=oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[i.TEXTURE_2D_ARRAY]=oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Te[i.TEXTURE_3D]=oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),he(i.DEPTH_TEST),o.setFunc(kr),$(!1),be(fc),he(i.CULL_FACE),L(Di);function he(k){d[k]!==!0&&(i.enable(k),d[k]=!0)}function Fe(k){d[k]!==!1&&(i.disable(k),d[k]=!1)}function Xe(k,pe){return u[k]!==pe?(i.bindFramebuffer(k,pe),u[k]=pe,k===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=pe),k===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function De(k,pe){let K=m,te=!1;if(k){K=f.get(pe),K===void 0&&(K=[],f.set(pe,K));const xe=k.textures;if(K.length!==xe.length||K[0]!==i.COLOR_ATTACHMENT0){for(let me=0,je=xe.length;me<je;me++)K[me]=i.COLOR_ATTACHMENT0+me;K.length=xe.length,te=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,te=!0);te&&i.drawBuffers(K)}function vt(k){return g!==k?(i.useProgram(k),g=k,!0):!1}const ht={[Yi]:i.FUNC_ADD,[ih]:i.FUNC_SUBTRACT,[rh]:i.FUNC_REVERSE_SUBTRACT};ht[sh]=i.MIN,ht[oh]=i.MAX;const He={[ah]:i.ZERO,[lh]:i.ONE,[ch]:i.SRC_COLOR,[Va]:i.SRC_ALPHA,[mh]:i.SRC_ALPHA_SATURATE,[fh]:i.DST_COLOR,[uh]:i.DST_ALPHA,[dh]:i.ONE_MINUS_SRC_COLOR,[Ga]:i.ONE_MINUS_SRC_ALPHA,[ph]:i.ONE_MINUS_DST_COLOR,[hh]:i.ONE_MINUS_DST_ALPHA,[gh]:i.CONSTANT_COLOR,[_h]:i.ONE_MINUS_CONSTANT_COLOR,[xh]:i.CONSTANT_ALPHA,[vh]:i.ONE_MINUS_CONSTANT_ALPHA};function L(k,pe,K,te,xe,me,je,_t,Ct,Ae){if(k===Di){_===!0&&(Fe(i.BLEND),_=!1);return}if(_===!1&&(he(i.BLEND),_=!0),k!==nh){if(k!==h||Ae!==b){if((p!==Yi||S!==Yi)&&(i.blendEquation(i.FUNC_ADD),p=Yi,S=Yi),Ae)switch(k){case Pr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pc:i.blendFunc(i.ONE,i.ONE);break;case mc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Pr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case mc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}M=null,T=null,C=null,I=null,x.set(0,0,0),y=0,h=k,b=Ae}return}xe=xe||pe,me=me||K,je=je||te,(pe!==p||xe!==S)&&(i.blendEquationSeparate(ht[pe],ht[xe]),p=pe,S=xe),(K!==M||te!==T||me!==C||je!==I)&&(i.blendFuncSeparate(He[K],He[te],He[me],He[je]),M=K,T=te,C=me,I=je),(_t.equals(x)===!1||Ct!==y)&&(i.blendColor(_t.r,_t.g,_t.b,Ct),x.copy(_t),y=Ct),h=k,b=!1}function St(k,pe){k.side===Rn?Fe(i.CULL_FACE):he(i.CULL_FACE);let K=k.side===Qt;pe&&(K=!K),$(K),k.blending===Pr&&k.transparent===!1?L(Di):L(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),s.setMask(k.colorWrite);const te=k.stencilWrite;a.setTest(te),te&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Re(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?he(i.SAMPLE_ALPHA_TO_COVERAGE):Fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function $(k){v!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),v=k)}function be(k){k!==eh?(he(i.CULL_FACE),k!==A&&(k===fc?i.cullFace(i.BACK):k===th?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Fe(i.CULL_FACE),A=k}function Ie(k){k!==P&&(O&&i.lineWidth(k),P=k)}function Re(k,pe,K){k?(he(i.POLYGON_OFFSET_FILL),(F!==pe||N!==K)&&(i.polygonOffset(pe,K),F=pe,N=K)):Fe(i.POLYGON_OFFSET_FILL)}function Y(k){k?he(i.SCISSOR_TEST):Fe(i.SCISSOR_TEST)}function R(k){k===void 0&&(k=i.TEXTURE0+z-1),se!==k&&(i.activeTexture(k),se=k)}function w(k,pe,K){K===void 0&&(se===null?K=i.TEXTURE0+z-1:K=se);let te=le[K];te===void 0&&(te={type:void 0,texture:void 0},le[K]=te),(te.type!==k||te.texture!==pe)&&(se!==K&&(i.activeTexture(K),se=K),i.bindTexture(k,pe||Te[k]),te.type=k,te.texture=pe)}function G(){const k=le[se];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function V(){try{i.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ie(){try{i.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Q(){try{i.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Le(){try{i.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _e(){try{i.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function fe(){try{i.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ze(){try{i.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ae(){try{i.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Se(){try{i.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function de(){try{i.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ge(k){Ve.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Ve.copy(k))}function we(k){J.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),J.copy(k))}function Je(k,pe){let K=c.get(pe);K===void 0&&(K=new WeakMap,c.set(pe,K));let te=K.get(k);te===void 0&&(te=i.getUniformBlockIndex(pe,k.name),K.set(k,te))}function ne(k,pe){const te=c.get(pe).get(k);l.get(pe)!==te&&(i.uniformBlockBinding(pe,te,k.__bindingPointIndex),l.set(pe,te))}function ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},se=null,le={},u={},f=new WeakMap,m=[],g=null,_=!1,h=null,p=null,M=null,T=null,S=null,C=null,I=null,x=new Pe(0,0,0),y=0,b=!1,v=null,A=null,P=null,F=null,N=null,Ve.set(0,0,i.canvas.width,i.canvas.height),J.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:he,disable:Fe,bindFramebuffer:Xe,drawBuffers:De,useProgram:vt,setBlending:L,setMaterial:St,setFlipSided:$,setCullFace:be,setLineWidth:Ie,setPolygonOffset:Re,setScissorTest:Y,activeTexture:R,bindTexture:w,unbindTexture:G,compressedTexImage2D:V,compressedTexImage3D:ie,texImage2D:Se,texImage3D:de,updateUBOMapping:Je,uniformBlockBinding:ne,texStorage2D:Ze,texStorage3D:ae,texSubImage2D:Q,texSubImage3D:Le,compressedTexSubImage2D:_e,compressedTexSubImage3D:fe,scissor:Ge,viewport:we,reset:ct}}function ex(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ce,d=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,w){return m?new OffscreenCanvas(R,w):Ms("canvas")}function _(R,w,G){let V=1;const ie=Y(R);if((ie.width>G||ie.height>G)&&(V=G/Math.max(ie.width,ie.height)),V<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Q=Math.floor(V*ie.width),Le=Math.floor(V*ie.height);u===void 0&&(u=g(Q,Le));const _e=w?g(Q,Le):u;return _e.width=Q,_e.height=Le,_e.getContext("2d").drawImage(R,0,0,Q,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Q+"x"+Le+")."),_e}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),R;return R}function h(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(R,w,G,V,ie=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Q=w;if(w===i.RED&&(G===i.FLOAT&&(Q=i.R32F),G===i.HALF_FLOAT&&(Q=i.R16F),G===i.UNSIGNED_BYTE&&(Q=i.R8)),w===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.R8UI),G===i.UNSIGNED_SHORT&&(Q=i.R16UI),G===i.UNSIGNED_INT&&(Q=i.R32UI),G===i.BYTE&&(Q=i.R8I),G===i.SHORT&&(Q=i.R16I),G===i.INT&&(Q=i.R32I)),w===i.RG&&(G===i.FLOAT&&(Q=i.RG32F),G===i.HALF_FLOAT&&(Q=i.RG16F),G===i.UNSIGNED_BYTE&&(Q=i.RG8)),w===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RG8UI),G===i.UNSIGNED_SHORT&&(Q=i.RG16UI),G===i.UNSIGNED_INT&&(Q=i.RG32UI),G===i.BYTE&&(Q=i.RG8I),G===i.SHORT&&(Q=i.RG16I),G===i.INT&&(Q=i.RG32I)),w===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),G===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),G===i.UNSIGNED_INT&&(Q=i.RGB32UI),G===i.BYTE&&(Q=i.RGB8I),G===i.SHORT&&(Q=i.RGB16I),G===i.INT&&(Q=i.RGB32I)),w===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),G===i.UNSIGNED_INT&&(Q=i.RGBA32UI),G===i.BYTE&&(Q=i.RGBA8I),G===i.SHORT&&(Q=i.RGBA16I),G===i.INT&&(Q=i.RGBA32I)),w===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),w===i.RGBA){const Le=ie?yo:it.getTransfer(V);G===i.FLOAT&&(Q=i.RGBA32F),G===i.HALF_FLOAT&&(Q=i.RGBA16F),G===i.UNSIGNED_BYTE&&(Q=Le===mt?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function S(R,w){let G;return R?w===null||w===er||w===Br?G=i.DEPTH24_STENCIL8:w===un?G=i.DEPTH32F_STENCIL8:w===vs&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===er||w===Br?G=i.DEPTH_COMPONENT24:w===un?G=i.DEPTH_COMPONENT32F:w===vs&&(G=i.DEPTH_COMPONENT16),G}function C(R,w){return h(R)===!0||R.isFramebufferTexture&&R.minFilter!==jt&&R.minFilter!==Lt?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function I(R){const w=R.target;w.removeEventListener("dispose",I),y(w),w.isVideoTexture&&d.delete(w)}function x(R){const w=R.target;w.removeEventListener("dispose",x),v(w)}function y(R){const w=n.get(R);if(w.__webglInit===void 0)return;const G=R.source,V=f.get(G);if(V){const ie=V[w.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&b(R),Object.keys(V).length===0&&f.delete(G)}n.remove(R)}function b(R){const w=n.get(R);i.deleteTexture(w.__webglTexture);const G=R.source,V=f.get(G);delete V[w.__cacheKey],o.memory.textures--}function v(R){const w=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(w.__webglFramebuffer[V]))for(let ie=0;ie<w.__webglFramebuffer[V].length;ie++)i.deleteFramebuffer(w.__webglFramebuffer[V][ie]);else i.deleteFramebuffer(w.__webglFramebuffer[V]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[V])}else{if(Array.isArray(w.__webglFramebuffer))for(let V=0;V<w.__webglFramebuffer.length;V++)i.deleteFramebuffer(w.__webglFramebuffer[V]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let V=0;V<w.__webglColorRenderbuffer.length;V++)w.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[V]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const G=R.textures;for(let V=0,ie=G.length;V<ie;V++){const Q=n.get(G[V]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(G[V])}n.remove(R)}let A=0;function P(){A=0}function F(){const R=A;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),A+=1,R}function N(R){const w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function z(R,w){const G=n.get(R);if(R.isVideoTexture&&Ie(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){const V=R.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(G,R,w);return}}t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+w)}function O(R,w){const G=n.get(R);if(R.version>0&&G.__version!==R.version){J(G,R,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+w)}function Z(R,w){const G=n.get(R);if(R.version>0&&G.__version!==R.version){J(G,R,w);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+w)}function X(R,w){const G=n.get(R);if(R.version>0&&G.__version!==R.version){oe(G,R,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+w)}const se={[In]:i.REPEAT,[$n]:i.CLAMP_TO_EDGE,[vo]:i.MIRRORED_REPEAT},le={[jt]:i.NEAREST,[eu]:i.NEAREST_MIPMAP_NEAREST,[us]:i.NEAREST_MIPMAP_LINEAR,[Lt]:i.LINEAR,[uo]:i.LINEAR_MIPMAP_NEAREST,[Xn]:i.LINEAR_MIPMAP_LINEAR},ve={[Nh]:i.NEVER,[Hh]:i.ALWAYS,[kh]:i.LESS,[pu]:i.LEQUAL,[Uh]:i.EQUAL,[zh]:i.GEQUAL,[Oh]:i.GREATER,[Bh]:i.NOTEQUAL};function Ne(R,w){if(w.type===un&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Lt||w.magFilter===uo||w.magFilter===us||w.magFilter===Xn||w.minFilter===Lt||w.minFilter===uo||w.minFilter===us||w.minFilter===Xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,se[w.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,se[w.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,se[w.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,le[w.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,le[w.minFilter]),w.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,ve[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===jt||w.minFilter!==us&&w.minFilter!==Xn||w.type===un&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Ve(R,w){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",I));const V=w.source;let ie=f.get(V);ie===void 0&&(ie={},f.set(V,ie));const Q=N(w);if(Q!==R.__cacheKey){ie[Q]===void 0&&(ie[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ie[Q].usedTimes++;const Le=ie[R.__cacheKey];Le!==void 0&&(ie[R.__cacheKey].usedTimes--,Le.usedTimes===0&&b(w)),R.__cacheKey=Q,R.__webglTexture=ie[Q].texture}return G}function J(R,w,G){let V=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(V=i.TEXTURE_3D);const ie=Ve(R,w),Q=w.source;t.bindTexture(V,R.__webglTexture,i.TEXTURE0+G);const Le=n.get(Q);if(Q.version!==Le.__version||ie===!0){t.activeTexture(i.TEXTURE0+G);const _e=it.getPrimaries(it.workingColorSpace),fe=w.colorSpace===On?null:it.getPrimaries(w.colorSpace),Ze=w.colorSpace===On||_e===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let ae=_(w.image,!1,r.maxTextureSize);ae=Re(w,ae);const Se=s.convert(w.format,w.colorSpace),de=s.convert(w.type);let Ge=T(w.internalFormat,Se,de,w.colorSpace,w.isVideoTexture);Ne(V,w);let we;const Je=w.mipmaps,ne=w.isVideoTexture!==!0,ct=Le.__version===void 0||ie===!0,k=Q.dataReady,pe=C(w,ae);if(w.isDepthTexture)Ge=S(w.format===zr,w.type),ct&&(ne?t.texStorage2D(i.TEXTURE_2D,1,Ge,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,Ge,ae.width,ae.height,0,Se,de,null));else if(w.isDataTexture)if(Je.length>0){ne&&ct&&t.texStorage2D(i.TEXTURE_2D,pe,Ge,Je[0].width,Je[0].height);for(let K=0,te=Je.length;K<te;K++)we=Je[K],ne?k&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,we.width,we.height,Se,de,we.data):t.texImage2D(i.TEXTURE_2D,K,Ge,we.width,we.height,0,Se,de,we.data);w.generateMipmaps=!1}else ne?(ct&&t.texStorage2D(i.TEXTURE_2D,pe,Ge,ae.width,ae.height),k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae.width,ae.height,Se,de,ae.data)):t.texImage2D(i.TEXTURE_2D,0,Ge,ae.width,ae.height,0,Se,de,ae.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ne&&ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,Ge,Je[0].width,Je[0].height,ae.depth);for(let K=0,te=Je.length;K<te;K++)if(we=Je[K],w.format!==Cn)if(Se!==null)if(ne){if(k)if(w.layerUpdates.size>0){const xe=rd(we.width,we.height,w.format,w.type);for(const me of w.layerUpdates){const je=we.data.subarray(me*xe/we.data.BYTES_PER_ELEMENT,(me+1)*xe/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,me,we.width,we.height,1,Se,je)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,we.width,we.height,ae.depth,Se,we.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,Ge,we.width,we.height,ae.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,we.width,we.height,ae.depth,Se,de,we.data):t.texImage3D(i.TEXTURE_2D_ARRAY,K,Ge,we.width,we.height,ae.depth,0,Se,de,we.data)}else{ne&&ct&&t.texStorage2D(i.TEXTURE_2D,pe,Ge,Je[0].width,Je[0].height);for(let K=0,te=Je.length;K<te;K++)we=Je[K],w.format!==Cn?Se!==null?ne?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,we.width,we.height,Se,we.data):t.compressedTexImage2D(i.TEXTURE_2D,K,Ge,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?k&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,we.width,we.height,Se,de,we.data):t.texImage2D(i.TEXTURE_2D,K,Ge,we.width,we.height,0,Se,de,we.data)}else if(w.isDataArrayTexture)if(ne){if(ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,Ge,ae.width,ae.height,ae.depth),k)if(w.layerUpdates.size>0){const K=rd(ae.width,ae.height,w.format,w.type);for(const te of w.layerUpdates){const xe=ae.data.subarray(te*K/ae.data.BYTES_PER_ELEMENT,(te+1)*K/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,te,ae.width,ae.height,1,Se,de,xe)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Se,de,ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ge,ae.width,ae.height,ae.depth,0,Se,de,ae.data);else if(w.isData3DTexture)ne?(ct&&t.texStorage3D(i.TEXTURE_3D,pe,Ge,ae.width,ae.height,ae.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Se,de,ae.data)):t.texImage3D(i.TEXTURE_3D,0,Ge,ae.width,ae.height,ae.depth,0,Se,de,ae.data);else if(w.isFramebufferTexture){if(ct)if(ne)t.texStorage2D(i.TEXTURE_2D,pe,Ge,ae.width,ae.height);else{let K=ae.width,te=ae.height;for(let xe=0;xe<pe;xe++)t.texImage2D(i.TEXTURE_2D,xe,Ge,K,te,0,Se,de,null),K>>=1,te>>=1}}else if(Je.length>0){if(ne&&ct){const K=Y(Je[0]);t.texStorage2D(i.TEXTURE_2D,pe,Ge,K.width,K.height)}for(let K=0,te=Je.length;K<te;K++)we=Je[K],ne?k&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,Se,de,we):t.texImage2D(i.TEXTURE_2D,K,Ge,Se,de,we);w.generateMipmaps=!1}else if(ne){if(ct){const K=Y(ae);t.texStorage2D(i.TEXTURE_2D,pe,Ge,K.width,K.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Se,de,ae)}else t.texImage2D(i.TEXTURE_2D,0,Ge,Se,de,ae);h(w)&&p(V),Le.__version=Q.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function oe(R,w,G){if(w.image.length!==6)return;const V=Ve(R,w),ie=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+G);const Q=n.get(ie);if(ie.version!==Q.__version||V===!0){t.activeTexture(i.TEXTURE0+G);const Le=it.getPrimaries(it.workingColorSpace),_e=w.colorSpace===On?null:it.getPrimaries(w.colorSpace),fe=w.colorSpace===On||Le===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Ze=w.isCompressedTexture||w.image[0].isCompressedTexture,ae=w.image[0]&&w.image[0].isDataTexture,Se=[];for(let te=0;te<6;te++)!Ze&&!ae?Se[te]=_(w.image[te],!0,r.maxCubemapSize):Se[te]=ae?w.image[te].image:w.image[te],Se[te]=Re(w,Se[te]);const de=Se[0],Ge=s.convert(w.format,w.colorSpace),we=s.convert(w.type),Je=T(w.internalFormat,Ge,we,w.colorSpace),ne=w.isVideoTexture!==!0,ct=Q.__version===void 0||V===!0,k=ie.dataReady;let pe=C(w,de);Ne(i.TEXTURE_CUBE_MAP,w);let K;if(Ze){ne&&ct&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Je,de.width,de.height);for(let te=0;te<6;te++){K=Se[te].mipmaps;for(let xe=0;xe<K.length;xe++){const me=K[xe];w.format!==Cn?Ge!==null?ne?k&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe,0,0,me.width,me.height,Ge,me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe,Je,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe,0,0,me.width,me.height,Ge,we,me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe,Je,me.width,me.height,0,Ge,we,me.data)}}}else{if(K=w.mipmaps,ne&&ct){K.length>0&&pe++;const te=Y(Se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,Je,te.width,te.height)}for(let te=0;te<6;te++)if(ae){ne?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Se[te].width,Se[te].height,Ge,we,Se[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Je,Se[te].width,Se[te].height,0,Ge,we,Se[te].data);for(let xe=0;xe<K.length;xe++){const je=K[xe].image[te].image;ne?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe+1,0,0,je.width,je.height,Ge,we,je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe+1,Je,je.width,je.height,0,Ge,we,je.data)}}else{ne?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ge,we,Se[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Je,Ge,we,Se[te]);for(let xe=0;xe<K.length;xe++){const me=K[xe];ne?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe+1,0,0,Ge,we,me.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,xe+1,Je,Ge,we,me.image[te])}}}h(w)&&p(i.TEXTURE_CUBE_MAP),Q.__version=ie.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function Te(R,w,G,V,ie,Q){const Le=s.convert(G.format,G.colorSpace),_e=s.convert(G.type),fe=T(G.internalFormat,Le,_e,G.colorSpace),Ze=n.get(w),ae=n.get(G);if(ae.__renderTarget=w,!Ze.__hasExternalTextures){const Se=Math.max(1,w.width>>Q),de=Math.max(1,w.height>>Q);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,Q,fe,Se,de,w.depth,0,Le,_e,null):t.texImage2D(ie,Q,fe,Se,de,0,Le,_e,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),be(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,ie,ae.__webglTexture,0,$(w)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,ie,ae.__webglTexture,Q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function he(R,w,G){if(i.bindRenderbuffer(i.RENDERBUFFER,R),w.depthBuffer){const V=w.depthTexture,ie=V&&V.isDepthTexture?V.type:null,Q=S(w.stencilBuffer,ie),Le=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=$(w);be(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,Q,w.width,w.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,Q,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Q,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Le,i.RENDERBUFFER,R)}else{const V=w.textures;for(let ie=0;ie<V.length;ie++){const Q=V[ie],Le=s.convert(Q.format,Q.colorSpace),_e=s.convert(Q.type),fe=T(Q.internalFormat,Le,_e,Q.colorSpace),Ze=$(w);G&&be(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ze,fe,w.width,w.height):be(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ze,fe,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,fe,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Fe(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=n.get(w.depthTexture);V.__renderTarget=w,(!V.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),z(w.depthTexture,0);const ie=V.__webglTexture,Q=$(w);if(w.depthTexture.format===Dr)be(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(w.depthTexture.format===zr)be(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Xe(R){const w=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){const V=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),V){const ie=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,V.removeEventListener("dispose",ie)};V.addEventListener("dispose",ie),w.__depthDisposeCallback=ie}w.__boundDepthTexture=V}if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Fe(w.__webglFramebuffer,R)}else if(G){w.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[V]),w.__webglDepthbuffer[V]===void 0)w.__webglDepthbuffer[V]=i.createRenderbuffer(),he(w.__webglDepthbuffer[V],R,!1);else{const ie=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=w.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,Q)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),he(w.__webglDepthbuffer,R,!1);else{const V=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,V,i.RENDERBUFFER,ie)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(R,w,G){const V=n.get(R);w!==void 0&&Te(V.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Xe(R)}function vt(R){const w=R.texture,G=n.get(R),V=n.get(w);R.addEventListener("dispose",x);const ie=R.textures,Q=R.isWebGLCubeRenderTarget===!0,Le=ie.length>1;if(Le||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=w.version,o.memory.textures++),Q){G.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer[_e]=[];for(let fe=0;fe<w.mipmaps.length;fe++)G.__webglFramebuffer[_e][fe]=i.createFramebuffer()}else G.__webglFramebuffer[_e]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer=[];for(let _e=0;_e<w.mipmaps.length;_e++)G.__webglFramebuffer[_e]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Le)for(let _e=0,fe=ie.length;_e<fe;_e++){const Ze=n.get(ie[_e]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&be(R)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let _e=0;_e<ie.length;_e++){const fe=ie[_e];G.__webglColorRenderbuffer[_e]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[_e]);const Ze=s.convert(fe.format,fe.colorSpace),ae=s.convert(fe.type),Se=T(fe.internalFormat,Ze,ae,fe.colorSpace,R.isXRRenderTarget===!0),de=$(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,de,Se,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,G.__webglColorRenderbuffer[_e])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),he(G.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),Ne(i.TEXTURE_CUBE_MAP,w);for(let _e=0;_e<6;_e++)if(w.mipmaps&&w.mipmaps.length>0)for(let fe=0;fe<w.mipmaps.length;fe++)Te(G.__webglFramebuffer[_e][fe],R,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,fe);else Te(G.__webglFramebuffer[_e],R,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);h(w)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let _e=0,fe=ie.length;_e<fe;_e++){const Ze=ie[_e],ae=n.get(Ze);t.bindTexture(i.TEXTURE_2D,ae.__webglTexture),Ne(i.TEXTURE_2D,Ze),Te(G.__webglFramebuffer,R,Ze,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,0),h(Ze)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let _e=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(_e=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,V.__webglTexture),Ne(_e,w),w.mipmaps&&w.mipmaps.length>0)for(let fe=0;fe<w.mipmaps.length;fe++)Te(G.__webglFramebuffer[fe],R,w,i.COLOR_ATTACHMENT0,_e,fe);else Te(G.__webglFramebuffer,R,w,i.COLOR_ATTACHMENT0,_e,0);h(w)&&p(_e),t.unbindTexture()}R.depthBuffer&&Xe(R)}function ht(R){const w=R.textures;for(let G=0,V=w.length;G<V;G++){const ie=w[G];if(h(ie)){const Q=M(R),Le=n.get(ie).__webglTexture;t.bindTexture(Q,Le),p(Q),t.unbindTexture()}}}const He=[],L=[];function St(R){if(R.samples>0){if(be(R)===!1){const w=R.textures,G=R.width,V=R.height;let ie=i.COLOR_BUFFER_BIT;const Q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=n.get(R),_e=w.length>1;if(_e)for(let fe=0;fe<w.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let fe=0;fe<w.length;fe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),_e){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Le.__webglColorRenderbuffer[fe]);const Ze=n.get(w[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ze,0)}i.blitFramebuffer(0,0,G,V,0,0,G,V,ie,i.NEAREST),l===!0&&(He.length=0,L.length=0,He.push(i.COLOR_ATTACHMENT0+fe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(He.push(Q),L.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,He))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_e)for(let fe=0;fe<w.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,Le.__webglColorRenderbuffer[fe]);const Ze=n.get(w[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,Ze,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const w=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function $(R){return Math.min(r.maxSamples,R.samples)}function be(R){const w=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ie(R){const w=o.render.frame;d.get(R)!==w&&(d.set(R,w),R.update())}function Re(R,w){const G=R.colorSpace,V=R.format,ie=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==$t&&G!==On&&(it.getTransfer(G)===mt?(V!==Cn||ie!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),w}function Y(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=P,this.setTexture2D=z,this.setTexture2DArray=O,this.setTexture3D=Z,this.setTextureCube=X,this.rebindTextures=De,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=be}function tx(i,e){function t(n,r=On){let s;const o=it.getTransfer(r);if(n===Zn)return i.UNSIGNED_BYTE;if(n===kl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ul)return i.UNSIGNED_SHORT_5_5_5_1;if(n===iu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===tu)return i.BYTE;if(n===nu)return i.SHORT;if(n===vs)return i.UNSIGNED_SHORT;if(n===Nl)return i.INT;if(n===er)return i.UNSIGNED_INT;if(n===un)return i.FLOAT;if(n===qn)return i.HALF_FLOAT;if(n===ru)return i.ALPHA;if(n===su)return i.RGB;if(n===Cn)return i.RGBA;if(n===ou)return i.LUMINANCE;if(n===au)return i.LUMINANCE_ALPHA;if(n===Dr)return i.DEPTH_COMPONENT;if(n===zr)return i.DEPTH_STENCIL;if(n===Ol)return i.RED;if(n===Bl)return i.RED_INTEGER;if(n===lu)return i.RG;if(n===zl)return i.RG_INTEGER;if(n===Hl)return i.RGBA_INTEGER;if(n===ho||n===fo||n===po||n===mo)if(o===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ho)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===po)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ho)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===po)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ja||n===Qa||n===el||n===tl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ja)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===el)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===tl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===nl||n===il||n===rl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===nl||n===il)return o===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===rl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===sl||n===ol||n===al||n===ll||n===cl||n===dl||n===ul||n===hl||n===fl||n===pl||n===ml||n===gl||n===_l||n===xl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===sl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ol)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===al)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ll)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===cl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===dl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ul)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===hl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ml)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===gl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_l)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xl)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===go||n===vl||n===bl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===go)return o===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cu||n===yl||n===Ml||n===Sl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===go)return s.COMPRESSED_RED_RGTC1_EXT;if(n===yl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ml)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Br?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const nx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ix=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class rx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Ot,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Zt({vertexShader:nx,fragmentShader:ix,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ue(new Fi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sx extends Ni{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,u=null,f=null,m=null,g=null;const _=new rx,h=t.getContextAttributes();let p=null,M=null;const T=[],S=[],C=new Ce;let I=null;const x=new Jt;x.viewport=new at;const y=new Jt;y.viewport=new at;const b=[x,y],v=new up;let A=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let oe=T[J];return oe===void 0&&(oe=new ha,T[J]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(J){let oe=T[J];return oe===void 0&&(oe=new ha,T[J]=oe),oe.getGripSpace()},this.getHand=function(J){let oe=T[J];return oe===void 0&&(oe=new ha,T[J]=oe),oe.getHandSpace()};function F(J){const oe=S.indexOf(J.inputSource);if(oe===-1)return;const Te=T[oe];Te!==void 0&&(Te.update(J.inputSource,J.frame,c||o),Te.dispatchEvent({type:J.type,data:J.inputSource}))}function N(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",z);for(let J=0;J<T.length;J++){const oe=S[J];oe!==null&&(S[J]=null,T[J].disconnect(oe))}A=null,P=null,_.reset(),e.setRenderTarget(p),m=null,f=null,u=null,r=null,M=null,Ve.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",N),r.addEventListener("inputsourceschange",z),h.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(C),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,he=null,Fe=null;h.depth&&(Fe=h.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=h.stencil?zr:Dr,he=h.stencil?Br:er);const Xe={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:s};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(Xe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new xi(f.textureWidth,f.textureHeight,{format:Cn,type:Zn,depthTexture:new Ru(f.textureWidth,f.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:h.stencil,colorSpace:e.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Te={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,Te),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new xi(m.framebufferWidth,m.framebufferHeight,{format:Cn,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:h.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ve.setContext(r),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function z(J){for(let oe=0;oe<J.removed.length;oe++){const Te=J.removed[oe],he=S.indexOf(Te);he>=0&&(S[he]=null,T[he].disconnect(Te))}for(let oe=0;oe<J.added.length;oe++){const Te=J.added[oe];let he=S.indexOf(Te);if(he===-1){for(let Xe=0;Xe<T.length;Xe++)if(Xe>=S.length){S.push(Te),he=Xe;break}else if(S[Xe]===null){S[Xe]=Te,he=Xe;break}if(he===-1)break}const Fe=T[he];Fe&&Fe.connect(Te)}}const O=new D,Z=new D;function X(J,oe,Te){O.setFromMatrixPosition(oe.matrixWorld),Z.setFromMatrixPosition(Te.matrixWorld);const he=O.distanceTo(Z),Fe=oe.projectionMatrix.elements,Xe=Te.projectionMatrix.elements,De=Fe[14]/(Fe[10]-1),vt=Fe[14]/(Fe[10]+1),ht=(Fe[9]+1)/Fe[5],He=(Fe[9]-1)/Fe[5],L=(Fe[8]-1)/Fe[0],St=(Xe[8]+1)/Xe[0],$=De*L,be=De*St,Ie=he/(-L+St),Re=Ie*-L;if(oe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Re),J.translateZ(Ie),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Fe[10]===-1)J.projectionMatrix.copy(oe.projectionMatrix),J.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const Y=De+Ie,R=vt+Ie,w=$-Re,G=be+(he-Re),V=ht*vt/R*Y,ie=He*vt/R*Y;J.projectionMatrix.makePerspective(w,G,V,ie,Y,R),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function se(J,oe){oe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(oe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let oe=J.near,Te=J.far;_.texture!==null&&(_.depthNear>0&&(oe=_.depthNear),_.depthFar>0&&(Te=_.depthFar)),v.near=y.near=x.near=oe,v.far=y.far=x.far=Te,(A!==v.near||P!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),A=v.near,P=v.far),x.layers.mask=J.layers.mask|2,y.layers.mask=J.layers.mask|4,v.layers.mask=x.layers.mask|y.layers.mask;const he=J.parent,Fe=v.cameras;se(v,he);for(let Xe=0;Xe<Fe.length;Xe++)se(Fe[Xe],he);Fe.length===2?X(v,x,y):v.projectionMatrix.copy(x.projectionMatrix),le(J,v,he)};function le(J,oe,Te){Te===null?J.matrix.copy(oe.matrixWorld):(J.matrix.copy(Te.matrixWorld),J.matrix.invert(),J.matrix.multiply(oe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(oe.projectionMatrix),J.projectionMatrixInverse.copy(oe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Hr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let ve=null;function Ne(J,oe){if(d=oe.getViewerPose(c||o),g=oe,d!==null){const Te=d.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let he=!1;Te.length!==v.cameras.length&&(v.cameras.length=0,he=!0);for(let De=0;De<Te.length;De++){const vt=Te[De];let ht=null;if(m!==null)ht=m.getViewport(vt);else{const L=u.getViewSubImage(f,vt);ht=L.viewport,De===0&&(e.setRenderTargetTextures(M,L.colorTexture,f.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(M))}let He=b[De];He===void 0&&(He=new Jt,He.layers.enable(De),He.viewport=new at,b[De]=He),He.matrix.fromArray(vt.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(vt.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(ht.x,ht.y,ht.width,ht.height),De===0&&(v.matrix.copy(He.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),he===!0&&v.cameras.push(He)}const Fe=r.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&u){const De=u.getDepthInformation(Te[0]);De&&De.isValid&&De.texture&&_.init(e,De,r.renderState)}}for(let Te=0;Te<T.length;Te++){const he=S[Te],Fe=T[Te];he!==null&&Fe!==void 0&&Fe.update(he,oe,c||o)}ve&&ve(J,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),g=null}const Ve=new Nu;Ve.setAnimationLoop(Ne),this.setAnimationLoop=function(J){ve=J},this.dispose=function(){}}}const Wi=new Jn,ox=new $e;function ax(i,e){function t(h,p){h.matrixAutoUpdate===!0&&h.updateMatrix(),p.value.copy(h.matrix)}function n(h,p){p.color.getRGB(h.fogColor.value,yu(i)),p.isFog?(h.fogNear.value=p.near,h.fogFar.value=p.far):p.isFogExp2&&(h.fogDensity.value=p.density)}function r(h,p,M,T,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(h,p):p.isMeshToonMaterial?(s(h,p),u(h,p)):p.isMeshPhongMaterial?(s(h,p),d(h,p)):p.isMeshStandardMaterial?(s(h,p),f(h,p),p.isMeshPhysicalMaterial&&m(h,p,S)):p.isMeshMatcapMaterial?(s(h,p),g(h,p)):p.isMeshDepthMaterial?s(h,p):p.isMeshDistanceMaterial?(s(h,p),_(h,p)):p.isMeshNormalMaterial?s(h,p):p.isLineBasicMaterial?(o(h,p),p.isLineDashedMaterial&&a(h,p)):p.isPointsMaterial?l(h,p,M,T):p.isSpriteMaterial?c(h,p):p.isShadowMaterial?(h.color.value.copy(p.color),h.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(h,p){h.opacity.value=p.opacity,p.color&&h.diffuse.value.copy(p.color),p.emissive&&h.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(h.map.value=p.map,t(p.map,h.mapTransform)),p.alphaMap&&(h.alphaMap.value=p.alphaMap,t(p.alphaMap,h.alphaMapTransform)),p.bumpMap&&(h.bumpMap.value=p.bumpMap,t(p.bumpMap,h.bumpMapTransform),h.bumpScale.value=p.bumpScale,p.side===Qt&&(h.bumpScale.value*=-1)),p.normalMap&&(h.normalMap.value=p.normalMap,t(p.normalMap,h.normalMapTransform),h.normalScale.value.copy(p.normalScale),p.side===Qt&&h.normalScale.value.negate()),p.displacementMap&&(h.displacementMap.value=p.displacementMap,t(p.displacementMap,h.displacementMapTransform),h.displacementScale.value=p.displacementScale,h.displacementBias.value=p.displacementBias),p.emissiveMap&&(h.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,h.emissiveMapTransform)),p.specularMap&&(h.specularMap.value=p.specularMap,t(p.specularMap,h.specularMapTransform)),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);const M=e.get(p),T=M.envMap,S=M.envMapRotation;T&&(h.envMap.value=T,Wi.copy(S),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),h.envMapRotation.value.setFromMatrix4(ox.makeRotationFromEuler(Wi)),h.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=p.reflectivity,h.ior.value=p.ior,h.refractionRatio.value=p.refractionRatio),p.lightMap&&(h.lightMap.value=p.lightMap,h.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,h.lightMapTransform)),p.aoMap&&(h.aoMap.value=p.aoMap,h.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,h.aoMapTransform))}function o(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,p.map&&(h.map.value=p.map,t(p.map,h.mapTransform))}function a(h,p){h.dashSize.value=p.dashSize,h.totalSize.value=p.dashSize+p.gapSize,h.scale.value=p.scale}function l(h,p,M,T){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.size.value=p.size*M,h.scale.value=T*.5,p.map&&(h.map.value=p.map,t(p.map,h.uvTransform)),p.alphaMap&&(h.alphaMap.value=p.alphaMap,t(p.alphaMap,h.alphaMapTransform)),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest)}function c(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.rotation.value=p.rotation,p.map&&(h.map.value=p.map,t(p.map,h.mapTransform)),p.alphaMap&&(h.alphaMap.value=p.alphaMap,t(p.alphaMap,h.alphaMapTransform)),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest)}function d(h,p){h.specular.value.copy(p.specular),h.shininess.value=Math.max(p.shininess,1e-4)}function u(h,p){p.gradientMap&&(h.gradientMap.value=p.gradientMap)}function f(h,p){h.metalness.value=p.metalness,p.metalnessMap&&(h.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,h.metalnessMapTransform)),h.roughness.value=p.roughness,p.roughnessMap&&(h.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,h.roughnessMapTransform)),p.envMap&&(h.envMapIntensity.value=p.envMapIntensity)}function m(h,p,M){h.ior.value=p.ior,p.sheen>0&&(h.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),h.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(h.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,h.sheenColorMapTransform)),p.sheenRoughnessMap&&(h.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,h.sheenRoughnessMapTransform))),p.clearcoat>0&&(h.clearcoat.value=p.clearcoat,h.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(h.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,h.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(h.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qt&&h.clearcoatNormalScale.value.negate())),p.dispersion>0&&(h.dispersion.value=p.dispersion),p.iridescence>0&&(h.iridescence.value=p.iridescence,h.iridescenceIOR.value=p.iridescenceIOR,h.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(h.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,h.iridescenceMapTransform)),p.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),p.transmission>0&&(h.transmission.value=p.transmission,h.transmissionSamplerMap.value=M.texture,h.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(h.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,h.transmissionMapTransform)),h.thickness.value=p.thickness,p.thicknessMap&&(h.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=p.attenuationDistance,h.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(h.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(h.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=p.specularIntensity,h.specularColor.value.copy(p.specularColor),p.specularColorMap&&(h.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,h.specularColorMapTransform)),p.specularIntensityMap&&(h.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,h.specularIntensityMapTransform))}function g(h,p){p.matcap&&(h.matcap.value=p.matcap)}function _(h,p){const M=e.get(p).light;h.referencePosition.value.setFromMatrixPosition(M.matrixWorld),h.nearDistance.value=M.shadow.camera.near,h.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function lx(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,T){const S=T.program;n.uniformBlockBinding(M,S)}function c(M,T){let S=r[M.id];S===void 0&&(g(M),S=d(M),r[M.id]=S,M.addEventListener("dispose",h));const C=T.program;n.updateUBOMapping(M,C);const I=e.render.frame;s[M.id]!==I&&(f(M),s[M.id]=I)}function d(M){const T=u();M.__bindingPointIndex=T;const S=i.createBuffer(),C=M.__size,I=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,C,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,S),S}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const T=r[M.id],S=M.uniforms,C=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let I=0,x=S.length;I<x;I++){const y=Array.isArray(S[I])?S[I]:[S[I]];for(let b=0,v=y.length;b<v;b++){const A=y[b];if(m(A,I,b,C)===!0){const P=A.__offset,F=Array.isArray(A.value)?A.value:[A.value];let N=0;for(let z=0;z<F.length;z++){const O=F[z],Z=_(O);typeof O=="number"||typeof O=="boolean"?(A.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,P+N,A.__data)):O.isMatrix3?(A.__data[0]=O.elements[0],A.__data[1]=O.elements[1],A.__data[2]=O.elements[2],A.__data[3]=0,A.__data[4]=O.elements[3],A.__data[5]=O.elements[4],A.__data[6]=O.elements[5],A.__data[7]=0,A.__data[8]=O.elements[6],A.__data[9]=O.elements[7],A.__data[10]=O.elements[8],A.__data[11]=0):(O.toArray(A.__data,N),N+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,P,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(M,T,S,C){const I=M.value,x=T+"_"+S;if(C[x]===void 0)return typeof I=="number"||typeof I=="boolean"?C[x]=I:C[x]=I.clone(),!0;{const y=C[x];if(typeof I=="number"||typeof I=="boolean"){if(y!==I)return C[x]=I,!0}else if(y.equals(I)===!1)return y.copy(I),!0}return!1}function g(M){const T=M.uniforms;let S=0;const C=16;for(let x=0,y=T.length;x<y;x++){const b=Array.isArray(T[x])?T[x]:[T[x]];for(let v=0,A=b.length;v<A;v++){const P=b[v],F=Array.isArray(P.value)?P.value:[P.value];for(let N=0,z=F.length;N<z;N++){const O=F[N],Z=_(O),X=S%C,se=X%Z.boundary,le=X+se;S+=se,le!==0&&C-le<Z.storage&&(S+=C-le),P.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=S,S+=Z.storage}}}const I=S%C;return I>0&&(S+=C-I),M.__size=S,M.__cache={},this}function _(M){const T={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(T.boundary=4,T.storage=4):M.isVector2?(T.boundary=8,T.storage=8):M.isVector3||M.isColor?(T.boundary=16,T.storage=12):M.isVector4?(T.boundary=16,T.storage=16):M.isMatrix3?(T.boundary=48,T.storage=48):M.isMatrix4?(T.boundary=64,T.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),T}function h(M){const T=M.target;T.removeEventListener("dispose",h);const S=o.indexOf(T.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function p(){for(const M in r)i.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class cx{constructor(e={}){const{canvas:t=sf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const g=new Uint32Array(4),_=new Int32Array(4);let h=null,p=null;const M=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=At,this.toneMapping=pi,this.toneMappingExposure=1;const S=this;let C=!1,I=0,x=0,y=null,b=-1,v=null;const A=new at,P=new at;let F=null;const N=new Pe(0);let z=0,O=t.width,Z=t.height,X=1,se=null,le=null;const ve=new at(0,0,O,Z),Ne=new at(0,0,O,Z);let Ve=!1;const J=new Yl;let oe=!1,Te=!1;this.transmissionResolutionScale=1;const he=new $e,Fe=new $e,Xe=new D,De=new at,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function He(){return y===null?X:1}let L=n;function St(E,U){return t.getContext(E,U)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fl}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",me,!1),L===null){const U="webgl2";if(L=St(U,E),L===null)throw St(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let $,be,Ie,Re,Y,R,w,G,V,ie,Q,Le,_e,fe,Ze,ae,Se,de,Ge,we,Je,ne,ct,k;function pe(){$=new v0(L),$.init(),ne=new tx(L,$),be=new h0(L,$,e,ne),Ie=new Q_(L,$),be.reverseDepthBuffer&&f&&Ie.buffers.depth.setReversed(!0),Re=new M0(L),Y=new z_,R=new ex(L,$,Ie,Y,be,ne,Re),w=new p0(S),G=new x0(S),V=new Rp(L),ct=new d0(L,V),ie=new b0(L,V,Re,ct),Q=new w0(L,ie,V,Re),Ge=new S0(L,be,R),ae=new f0(Y),Le=new B_(S,w,G,$,be,ct,ae),_e=new ax(S,Y),fe=new V_,Ze=new q_($),de=new c0(S,w,G,Ie,Q,m,l),Se=new Z_(S,Q,be),k=new lx(L,Re,be,Ie),we=new u0(L,$,Re),Je=new y0(L,$,Re),Re.programs=Le.programs,S.capabilities=be,S.extensions=$,S.properties=Y,S.renderLists=fe,S.shadowMap=Se,S.state=Ie,S.info=Re}pe();const K=new sx(S,L);this.xr=K,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=$.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=$.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(E){E!==void 0&&(X=E,this.setSize(O,Z,!1))},this.getSize=function(E){return E.set(O,Z)},this.setSize=function(E,U,j=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=E,Z=U,t.width=Math.floor(E*X),t.height=Math.floor(U*X),j===!0&&(t.style.width=E+"px",t.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(O*X,Z*X).floor()},this.setDrawingBufferSize=function(E,U,j){O=E,Z=U,X=j,t.width=Math.floor(E*j),t.height=Math.floor(U*j),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(ve)},this.setViewport=function(E,U,j,q){E.isVector4?ve.set(E.x,E.y,E.z,E.w):ve.set(E,U,j,q),Ie.viewport(A.copy(ve).multiplyScalar(X).round())},this.getScissor=function(E){return E.copy(Ne)},this.setScissor=function(E,U,j,q){E.isVector4?Ne.set(E.x,E.y,E.z,E.w):Ne.set(E,U,j,q),Ie.scissor(P.copy(Ne).multiplyScalar(X).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(E){Ie.setScissorTest(Ve=E)},this.setOpaqueSort=function(E){se=E},this.setTransparentSort=function(E){le=E},this.getClearColor=function(E){return E.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor(...arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,j=!0){let q=0;if(E){let B=!1;if(y!==null){const re=y.texture.format;B=re===Hl||re===zl||re===Bl}if(B){const re=y.texture.type,ue=re===Zn||re===er||re===vs||re===Br||re===kl||re===Ul,Me=de.getClearColor(),ce=de.getClearAlpha(),Be=Me.r,We=Me.g,Ee=Me.b;ue?(g[0]=Be,g[1]=We,g[2]=Ee,g[3]=ce,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Be,_[1]=We,_[2]=Ee,_[3]=ce,L.clearBufferiv(L.COLOR,0,_))}else q|=L.COLOR_BUFFER_BIT}U&&(q|=L.DEPTH_BUFFER_BIT),j&&(q|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",me,!1),de.dispose(),fe.dispose(),Ze.dispose(),Y.dispose(),w.dispose(),G.dispose(),Q.dispose(),ct.dispose(),k.dispose(),Le.dispose(),K.dispose(),K.removeEventListener("sessionstart",Cs),K.removeEventListener("sessionend",et),ni.stop()};function te(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const E=Re.autoReset,U=Se.enabled,j=Se.autoUpdate,q=Se.needsUpdate,B=Se.type;pe(),Re.autoReset=E,Se.enabled=U,Se.autoUpdate=j,Se.needsUpdate=q,Se.type=B}function me(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function je(E){const U=E.target;U.removeEventListener("dispose",je),_t(U)}function _t(E){Ct(E),Y.remove(E)}function Ct(E){const U=Y.get(E).programs;U!==void 0&&(U.forEach(function(j){Le.releaseProgram(j)}),E.isShaderMaterial&&Le.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,j,q,B,re){U===null&&(U=vt);const ue=B.isMesh&&B.matrixWorld.determinant()<0,Me=st(E,U,j,q,B);Ie.setMaterial(q,ue);let ce=j.index,Be=1;if(q.wireframe===!0){if(ce=ie.getWireframeAttribute(j),ce===void 0)return;Be=2}const We=j.drawRange,Ee=j.attributes.position;let tt=We.start*Be,ot=(We.start+We.count)*Be;re!==null&&(tt=Math.max(tt,re.start*Be),ot=Math.min(ot,(re.start+re.count)*Be)),ce!==null?(tt=Math.max(tt,0),ot=Math.min(ot,ce.count)):Ee!=null&&(tt=Math.max(tt,0),ot=Math.min(ot,Ee.count));const Pt=ot-tt;if(Pt<0||Pt===1/0)return;ct.setup(B,q,Me,j,ce);let Tt,lt=we;if(ce!==null&&(Tt=V.get(ce),lt=Je,lt.setIndex(Tt)),B.isMesh)q.wireframe===!0?(Ie.setLineWidth(q.wireframeLinewidth*He()),lt.setMode(L.LINES)):lt.setMode(L.TRIANGLES);else if(B.isLine){let ze=q.linewidth;ze===void 0&&(ze=1),Ie.setLineWidth(ze*He()),B.isLineSegments?lt.setMode(L.LINES):B.isLineLoop?lt.setMode(L.LINE_LOOP):lt.setMode(L.LINE_STRIP)}else B.isPoints?lt.setMode(L.POINTS):B.isSprite&&lt.setMode(L.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Xi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if($.get("WEBGL_multi_draw"))lt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const ze=B._multiDrawStarts,Vt=B._multiDrawCounts,dt=B._multiDrawCount,Ln=ce?V.get(ce).bytesPerElement:1,sr=Y.get(q).currentProgram.getUniforms();for(let pn=0;pn<dt;pn++)sr.setValue(L,"_gl_DrawID",pn),lt.render(ze[pn]/Ln,Vt[pn])}else if(B.isInstancedMesh)lt.renderInstances(tt,Pt,B.count);else if(j.isInstancedBufferGeometry){const ze=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Vt=Math.min(j.instanceCount,ze);lt.renderInstances(tt,Pt,Vt)}else lt.render(tt,Pt)};function Ae(E,U,j){E.transparent===!0&&E.side===Rn&&E.forceSinglePass===!1?(E.side=Qt,E.needsUpdate=!0,rt(E,U,j),E.side=_i,E.needsUpdate=!0,rt(E,U,j),E.side=Rn):rt(E,U,j)}this.compile=function(E,U,j=null){j===null&&(j=E),p=Ze.get(j),p.init(U),T.push(p),j.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),E!==j&&E.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const q=new Set;return E.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const re=B.material;if(re)if(Array.isArray(re))for(let ue=0;ue<re.length;ue++){const Me=re[ue];Ae(Me,j,B),q.add(Me)}else Ae(re,j,B),q.add(re)}),p=T.pop(),q},this.compileAsync=function(E,U,j=null){const q=this.compile(E,U,j);return new Promise(B=>{function re(){if(q.forEach(function(ue){Y.get(ue).currentProgram.isReady()&&q.delete(ue)}),q.size===0){B(E);return}setTimeout(re,10)}$.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let en=null;function fn(E){en&&en(E)}function Cs(){ni.stop()}function et(){ni.start()}const ni=new Nu;ni.setAnimationLoop(fn),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(E){en=E,K.setAnimationLoop(E),E===null?ni.stop():ni.start()},K.addEventListener("sessionstart",Cs),K.addEventListener("sessionend",et),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(U),U=K.getCamera()),E.isScene===!0&&E.onBeforeRender(S,E,U,y),p=Ze.get(E,T.length),p.init(U),T.push(p),Fe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),J.setFromProjectionMatrix(Fe),Te=this.localClippingEnabled,oe=ae.init(this.clippingPlanes,Te),h=fe.get(E,M.length),h.init(),M.push(h),K.enabled===!0&&K.isPresenting===!0){const re=S.xr.getDepthSensingMesh();re!==null&&Ui(re,U,-1/0,S.sortObjects)}Ui(E,U,0,S.sortObjects),h.finish(),S.sortObjects===!0&&h.sort(se,le),ht=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,ht&&de.addToRenderList(h,E),this.info.render.frame++,oe===!0&&ae.beginShadows();const j=p.state.shadowsArray;Se.render(j,E,U),oe===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=h.opaque,B=h.transmissive;if(p.setupLights(),U.isArrayCamera){const re=U.cameras;if(B.length>0)for(let ue=0,Me=re.length;ue<Me;ue++){const ce=re[ue];rr(q,B,E,ce)}ht&&de.render(E);for(let ue=0,Me=re.length;ue<Me;ue++){const ce=re[ue];ir(h,E,ce,ce.viewport)}}else B.length>0&&rr(q,B,E,U),ht&&de.render(E),ir(h,E,U);y!==null&&x===0&&(R.updateMultisampleRenderTarget(y),R.updateRenderTargetMipmap(y)),E.isScene===!0&&E.onAfterRender(S,E,U),ct.resetDefaultState(),b=-1,v=null,T.pop(),T.length>0?(p=T[T.length-1],oe===!0&&ae.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?h=M[M.length-1]:h=null};function Ui(E,U,j,q){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||J.intersectsSprite(E)){q&&De.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Fe);const ue=Q.update(E),Me=E.material;Me.visible&&h.push(E,ue,Me,j,De.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||J.intersectsObject(E))){const ue=Q.update(E),Me=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),De.copy(E.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),De.copy(ue.boundingSphere.center)),De.applyMatrix4(E.matrixWorld).applyMatrix4(Fe)),Array.isArray(Me)){const ce=ue.groups;for(let Be=0,We=ce.length;Be<We;Be++){const Ee=ce[Be],tt=Me[Ee.materialIndex];tt&&tt.visible&&h.push(E,ue,tt,j,De.z,Ee)}}else Me.visible&&h.push(E,ue,Me,j,De.z,null)}}const re=E.children;for(let ue=0,Me=re.length;ue<Me;ue++)Ui(re[ue],U,j,q)}function ir(E,U,j,q){const B=E.opaque,re=E.transmissive,ue=E.transparent;p.setupLightsView(j),oe===!0&&ae.setGlobalState(S.clippingPlanes,j),q&&Ie.viewport(A.copy(q)),B.length>0&&W(B,U,j),re.length>0&&W(re,U,j),ue.length>0&&W(ue,U,j),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function rr(E,U,j,q){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new xi(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?qn:Zn,minFilter:Xn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const re=p.state.transmissionRenderTarget[q.id],ue=q.viewport||A;re.setSize(ue.z*S.transmissionResolutionScale,ue.w*S.transmissionResolutionScale);const Me=S.getRenderTarget();S.setRenderTarget(re),S.getClearColor(N),z=S.getClearAlpha(),z<1&&S.setClearColor(16777215,.5),S.clear(),ht&&de.render(j);const ce=S.toneMapping;S.toneMapping=pi;const Be=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),oe===!0&&ae.setGlobalState(S.clippingPlanes,q),W(E,j,q),R.updateMultisampleRenderTarget(re),R.updateRenderTargetMipmap(re),$.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let Ee=0,tt=U.length;Ee<tt;Ee++){const ot=U[Ee],Pt=ot.object,Tt=ot.geometry,lt=ot.material,ze=ot.group;if(lt.side===Rn&&Pt.layers.test(q.layers)){const Vt=lt.side;lt.side=Qt,lt.needsUpdate=!0,ye(Pt,j,q,Tt,lt,ze),lt.side=Vt,lt.needsUpdate=!0,We=!0}}We===!0&&(R.updateMultisampleRenderTarget(re),R.updateRenderTargetMipmap(re))}S.setRenderTarget(Me),S.setClearColor(N,z),Be!==void 0&&(q.viewport=Be),S.toneMapping=ce}function W(E,U,j){const q=U.isScene===!0?U.overrideMaterial:null;for(let B=0,re=E.length;B<re;B++){const ue=E[B],Me=ue.object,ce=ue.geometry,Be=q===null?ue.material:q,We=ue.group;Me.layers.test(j.layers)&&ye(Me,U,j,ce,Be,We)}}function ye(E,U,j,q,B,re){E.onBeforeRender(S,U,j,q,B,re),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(S,U,j,q,E,re),B.transparent===!0&&B.side===Rn&&B.forceSinglePass===!1?(B.side=Qt,B.needsUpdate=!0,S.renderBufferDirect(j,U,q,B,E,re),B.side=_i,B.needsUpdate=!0,S.renderBufferDirect(j,U,q,B,E,re),B.side=Rn):S.renderBufferDirect(j,U,q,B,E,re),E.onAfterRender(S,U,j,q,B,re)}function rt(E,U,j){U.isScene!==!0&&(U=vt);const q=Y.get(E),B=p.state.lights,re=p.state.shadowsArray,ue=B.state.version,Me=Le.getParameters(E,B.state,re,U,j),ce=Le.getProgramCacheKey(Me);let Be=q.programs;q.environment=E.isMeshStandardMaterial?U.environment:null,q.fog=U.fog,q.envMap=(E.isMeshStandardMaterial?G:w).get(E.envMap||q.environment),q.envMapRotation=q.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Be===void 0&&(E.addEventListener("dispose",je),Be=new Map,q.programs=Be);let We=Be.get(ce);if(We!==void 0){if(q.currentProgram===We&&q.lightsStateVersion===ue)return xt(E,Me),We}else Me.uniforms=Le.getUniforms(E),E.onBeforeCompile(Me,S),We=Le.acquireProgram(Me,ce),Be.set(ce,We),q.uniforms=Me.uniforms;const Ee=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ee.clippingPlanes=ae.uniform),xt(E,Me),q.needsLights=Pn(E),q.lightsStateVersion=ue,q.needsLights&&(Ee.ambientLightColor.value=B.state.ambient,Ee.lightProbe.value=B.state.probe,Ee.directionalLights.value=B.state.directional,Ee.directionalLightShadows.value=B.state.directionalShadow,Ee.spotLights.value=B.state.spot,Ee.spotLightShadows.value=B.state.spotShadow,Ee.rectAreaLights.value=B.state.rectArea,Ee.ltc_1.value=B.state.rectAreaLTC1,Ee.ltc_2.value=B.state.rectAreaLTC2,Ee.pointLights.value=B.state.point,Ee.pointLightShadows.value=B.state.pointShadow,Ee.hemisphereLights.value=B.state.hemi,Ee.directionalShadowMap.value=B.state.directionalShadowMap,Ee.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ee.spotShadowMap.value=B.state.spotShadowMap,Ee.spotLightMatrix.value=B.state.spotLightMatrix,Ee.spotLightMap.value=B.state.spotLightMap,Ee.pointShadowMap.value=B.state.pointShadowMap,Ee.pointShadowMatrix.value=B.state.pointShadowMatrix),q.currentProgram=We,q.uniformsList=null,We}function Et(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=_o.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function xt(E,U){const j=Y.get(E);j.outputColorSpace=U.outputColorSpace,j.batching=U.batching,j.batchingColor=U.batchingColor,j.instancing=U.instancing,j.instancingColor=U.instancingColor,j.instancingMorph=U.instancingMorph,j.skinning=U.skinning,j.morphTargets=U.morphTargets,j.morphNormals=U.morphNormals,j.morphColors=U.morphColors,j.morphTargetsCount=U.morphTargetsCount,j.numClippingPlanes=U.numClippingPlanes,j.numIntersection=U.numClipIntersection,j.vertexAlphas=U.vertexAlphas,j.vertexTangents=U.vertexTangents,j.toneMapping=U.toneMapping}function st(E,U,j,q,B){U.isScene!==!0&&(U=vt),R.resetTextureUnits();const re=U.fog,ue=q.isMeshStandardMaterial?U.environment:null,Me=y===null?S.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:$t,ce=(q.isMeshStandardMaterial?G:w).get(q.envMap||ue),Be=q.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,We=!!j.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ee=!!j.morphAttributes.position,tt=!!j.morphAttributes.normal,ot=!!j.morphAttributes.color;let Pt=pi;q.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(Pt=S.toneMapping);const Tt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,lt=Tt!==void 0?Tt.length:0,ze=Y.get(q),Vt=p.state.lights;if(oe===!0&&(Te===!0||E!==v)){const tn=E===v&&q.id===b;ae.setState(q,E,tn)}let dt=!1;q.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Vt.state.version||ze.outputColorSpace!==Me||B.isBatchedMesh&&ze.batching===!1||!B.isBatchedMesh&&ze.batching===!0||B.isBatchedMesh&&ze.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&ze.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&ze.instancing===!1||!B.isInstancedMesh&&ze.instancing===!0||B.isSkinnedMesh&&ze.skinning===!1||!B.isSkinnedMesh&&ze.skinning===!0||B.isInstancedMesh&&ze.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&ze.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&ze.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&ze.instancingMorph===!1&&B.morphTexture!==null||ze.envMap!==ce||q.fog===!0&&ze.fog!==re||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==ae.numPlanes||ze.numIntersection!==ae.numIntersection)||ze.vertexAlphas!==Be||ze.vertexTangents!==We||ze.morphTargets!==Ee||ze.morphNormals!==tt||ze.morphColors!==ot||ze.toneMapping!==Pt||ze.morphTargetsCount!==lt)&&(dt=!0):(dt=!0,ze.__version=q.version);let Ln=ze.currentProgram;dt===!0&&(Ln=rt(q,U,B));let sr=!1,pn=!1,Jr=!1;const yt=Ln.getUniforms(),bn=ze.uniforms;if(Ie.useProgram(Ln.program)&&(sr=!0,pn=!0,Jr=!0),q.id!==b&&(b=q.id,pn=!0),sr||v!==E){Ie.buffers.depth.getReversed()?(he.copy(E.projectionMatrix),af(he),lf(he),yt.setValue(L,"projectionMatrix",he)):yt.setValue(L,"projectionMatrix",E.projectionMatrix),yt.setValue(L,"viewMatrix",E.matrixWorldInverse);const ln=yt.map.cameraPosition;ln!==void 0&&ln.setValue(L,Xe.setFromMatrixPosition(E.matrixWorld)),be.logarithmicDepthBuffer&&yt.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&yt.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),v!==E&&(v=E,pn=!0,Jr=!0)}if(B.isSkinnedMesh){yt.setOptional(L,B,"bindMatrix"),yt.setOptional(L,B,"bindMatrixInverse");const tn=B.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),yt.setValue(L,"boneTexture",tn.boneTexture,R))}B.isBatchedMesh&&(yt.setOptional(L,B,"batchingTexture"),yt.setValue(L,"batchingTexture",B._matricesTexture,R),yt.setOptional(L,B,"batchingIdTexture"),yt.setValue(L,"batchingIdTexture",B._indirectTexture,R),yt.setOptional(L,B,"batchingColorTexture"),B._colorsTexture!==null&&yt.setValue(L,"batchingColorTexture",B._colorsTexture,R));const yn=j.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&Ge.update(B,j,Ln),(pn||ze.receiveShadow!==B.receiveShadow)&&(ze.receiveShadow=B.receiveShadow,yt.setValue(L,"receiveShadow",B.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(bn.envMap.value=ce,bn.flipEnvMap.value=ce.isCubeTexture&&ce.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&U.environment!==null&&(bn.envMapIntensity.value=U.environmentIntensity),pn&&(yt.setValue(L,"toneMappingExposure",S.toneMappingExposure),ze.needsLights&&bt(bn,Jr),re&&q.fog===!0&&_e.refreshFogUniforms(bn,re),_e.refreshMaterialUniforms(bn,q,X,Z,p.state.transmissionRenderTarget[E.id]),_o.upload(L,Et(ze),bn,R)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(_o.upload(L,Et(ze),bn,R),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&yt.setValue(L,"center",B.center),yt.setValue(L,"modelViewMatrix",B.modelViewMatrix),yt.setValue(L,"normalMatrix",B.normalMatrix),yt.setValue(L,"modelMatrix",B.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const tn=q.uniformsGroups;for(let ln=0,jo=tn.length;ln<jo;ln++){const Oi=tn[ln];k.update(Oi,Ln),k.bind(Oi,Ln)}}return Ln}function bt(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Pn(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(E,U,j){Y.get(E.texture).__webglTexture=U,Y.get(E.depthTexture).__webglTexture=j;const q=Y.get(E);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=j===void 0,q.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){const j=Y.get(E);j.__webglFramebuffer=U,j.__useDefaultFramebuffer=U===void 0};const Dn=L.createFramebuffer();this.setRenderTarget=function(E,U=0,j=0){y=E,I=U,x=j;let q=!0,B=null,re=!1,ue=!1;if(E){const ce=Y.get(E);if(ce.__useDefaultFramebuffer!==void 0)Ie.bindFramebuffer(L.FRAMEBUFFER,null),q=!1;else if(ce.__webglFramebuffer===void 0)R.setupRenderTarget(E);else if(ce.__hasExternalTextures)R.rebindTextures(E,Y.get(E.texture).__webglTexture,Y.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ee=E.depthTexture;if(ce.__boundDepthTexture!==Ee){if(Ee!==null&&Y.has(Ee)&&(E.width!==Ee.image.width||E.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(E)}}const Be=E.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(ue=!0);const We=Y.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(We[U])?B=We[U][j]:B=We[U],re=!0):E.samples>0&&R.useMultisampledRTT(E)===!1?B=Y.get(E).__webglMultisampledFramebuffer:Array.isArray(We)?B=We[j]:B=We,A.copy(E.viewport),P.copy(E.scissor),F=E.scissorTest}else A.copy(ve).multiplyScalar(X).floor(),P.copy(Ne).multiplyScalar(X).floor(),F=Ve;if(j!==0&&(B=Dn),Ie.bindFramebuffer(L.FRAMEBUFFER,B)&&q&&Ie.drawBuffers(E,B),Ie.viewport(A),Ie.scissor(P),Ie.setScissorTest(F),re){const ce=Y.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,ce.__webglTexture,j)}else if(ue){const ce=Y.get(E.texture),Be=U;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,ce.__webglTexture,j,Be)}else if(E!==null&&j!==0){const ce=Y.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ce.__webglTexture,j)}b=-1},this.readRenderTargetPixels=function(E,U,j,q,B,re,ue){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Y.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ue!==void 0&&(Me=Me[ue]),Me){Ie.bindFramebuffer(L.FRAMEBUFFER,Me);try{const ce=E.texture,Be=ce.format,We=ce.type;if(!be.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!be.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-q&&j>=0&&j<=E.height-B&&L.readPixels(U,j,q,B,ne.convert(Be),ne.convert(We),re)}finally{const ce=y!==null?Y.get(y).__webglFramebuffer:null;Ie.bindFramebuffer(L.FRAMEBUFFER,ce)}}},this.readRenderTargetPixelsAsync=async function(E,U,j,q,B,re,ue){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Y.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ue!==void 0&&(Me=Me[ue]),Me){const ce=E.texture,Be=ce.format,We=ce.type;if(!be.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!be.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-q&&j>=0&&j<=E.height-B){Ie.bindFramebuffer(L.FRAMEBUFFER,Me);const Ee=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ee),L.bufferData(L.PIXEL_PACK_BUFFER,re.byteLength,L.STREAM_READ),L.readPixels(U,j,q,B,ne.convert(Be),ne.convert(We),0);const tt=y!==null?Y.get(y).__webglFramebuffer:null;Ie.bindFramebuffer(L.FRAMEBUFFER,tt);const ot=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await of(L,ot,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ee),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,re),L.deleteBuffer(Ee),L.deleteSync(ot),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,U=null,j=0){E.isTexture!==!0&&(Xi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);const q=Math.pow(2,-j),B=Math.floor(E.image.width*q),re=Math.floor(E.image.height*q),ue=U!==null?U.x:0,Me=U!==null?U.y:0;R.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,j,0,0,ue,Me,B,re),Ie.unbindTexture()};const vn=L.createFramebuffer(),It=L.createFramebuffer();this.copyTextureToTexture=function(E,U,j=null,q=null,B=0,re=null){E.isTexture!==!0&&(Xi("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,E=arguments[1],U=arguments[2],re=arguments[3]||0,j=null),re===null&&(B!==0?(Xi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),re=B,B=0):re=0);let ue,Me,ce,Be,We,Ee,tt,ot,Pt;const Tt=E.isCompressedTexture?E.mipmaps[re]:E.image;if(j!==null)ue=j.max.x-j.min.x,Me=j.max.y-j.min.y,ce=j.isBox3?j.max.z-j.min.z:1,Be=j.min.x,We=j.min.y,Ee=j.isBox3?j.min.z:0;else{const yn=Math.pow(2,-B);ue=Math.floor(Tt.width*yn),Me=Math.floor(Tt.height*yn),E.isDataArrayTexture?ce=Tt.depth:E.isData3DTexture?ce=Math.floor(Tt.depth*yn):ce=1,Be=0,We=0,Ee=0}q!==null?(tt=q.x,ot=q.y,Pt=q.z):(tt=0,ot=0,Pt=0);const lt=ne.convert(U.format),ze=ne.convert(U.type);let Vt;U.isData3DTexture?(R.setTexture3D(U,0),Vt=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(R.setTexture2DArray(U,0),Vt=L.TEXTURE_2D_ARRAY):(R.setTexture2D(U,0),Vt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const dt=L.getParameter(L.UNPACK_ROW_LENGTH),Ln=L.getParameter(L.UNPACK_IMAGE_HEIGHT),sr=L.getParameter(L.UNPACK_SKIP_PIXELS),pn=L.getParameter(L.UNPACK_SKIP_ROWS),Jr=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Tt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Tt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Be),L.pixelStorei(L.UNPACK_SKIP_ROWS,We),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ee);const yt=E.isDataArrayTexture||E.isData3DTexture,bn=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){const yn=Y.get(E),tn=Y.get(U),ln=Y.get(yn.__renderTarget),jo=Y.get(tn.__renderTarget);Ie.bindFramebuffer(L.READ_FRAMEBUFFER,ln.__webglFramebuffer),Ie.bindFramebuffer(L.DRAW_FRAMEBUFFER,jo.__webglFramebuffer);for(let Oi=0;Oi<ce;Oi++)yt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Y.get(E).__webglTexture,B,Ee+Oi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Y.get(U).__webglTexture,re,Pt+Oi)),L.blitFramebuffer(Be,We,ue,Me,tt,ot,ue,Me,L.DEPTH_BUFFER_BIT,L.NEAREST);Ie.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(B!==0||E.isRenderTargetTexture||Y.has(E)){const yn=Y.get(E),tn=Y.get(U);Ie.bindFramebuffer(L.READ_FRAMEBUFFER,vn),Ie.bindFramebuffer(L.DRAW_FRAMEBUFFER,It);for(let ln=0;ln<ce;ln++)yt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,yn.__webglTexture,B,Ee+ln):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,yn.__webglTexture,B),bn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,tn.__webglTexture,re,Pt+ln):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,tn.__webglTexture,re),B!==0?L.blitFramebuffer(Be,We,ue,Me,tt,ot,ue,Me,L.COLOR_BUFFER_BIT,L.NEAREST):bn?L.copyTexSubImage3D(Vt,re,tt,ot,Pt+ln,Be,We,ue,Me):L.copyTexSubImage2D(Vt,re,tt,ot,Be,We,ue,Me);Ie.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else bn?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(Vt,re,tt,ot,Pt,ue,Me,ce,lt,ze,Tt.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(Vt,re,tt,ot,Pt,ue,Me,ce,lt,Tt.data):L.texSubImage3D(Vt,re,tt,ot,Pt,ue,Me,ce,lt,ze,Tt):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,re,tt,ot,ue,Me,lt,ze,Tt.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,re,tt,ot,Tt.width,Tt.height,lt,Tt.data):L.texSubImage2D(L.TEXTURE_2D,re,tt,ot,ue,Me,lt,ze,Tt);L.pixelStorei(L.UNPACK_ROW_LENGTH,dt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ln),L.pixelStorei(L.UNPACK_SKIP_PIXELS,sr),L.pixelStorei(L.UNPACK_SKIP_ROWS,pn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Jr),re===0&&U.generateMipmaps&&L.generateMipmap(Vt),Ie.unbindTexture()},this.copyTextureToTexture3D=function(E,U,j=null,q=null,B=0){return E.isTexture!==!0&&(Xi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,q=arguments[1]||null,E=arguments[2],U=arguments[3],B=arguments[4]||0),Xi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,U,j,q,B)},this.initRenderTarget=function(E){Y.get(E).__webglFramebuffer===void 0&&R.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),Ie.unbindTexture()},this.resetState=function(){I=0,x=0,y=null,Ie.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}const ee=4.9,pt=26,kt=16,Ut=-6.5,Gn={4:{floorNumber:4,floorName:"PISO 4 • ROOFTOP & PENTHOUSE",subtitle:"«The Inner Circle» Terrace",badge:"Penthouse VIP",badgeColor:"amber",description:"Plunge pool basáltica, tumbonas de teca, barra en cobre martillado, pérgola bioclimática y vistas skyline.",floorY:4*ee,funnelStage:"High-Ticket / Membresía Anual",spots:[{id:"pool",name:"Plunge Pool Basáltica",icon:"🏊‍♀️",floor:4,alinaPose:"De pie al borde de la piscina infinita",alinaPos:{x:-2.5,y:4*ee+.06,z:-2.8},alinaRotY:.25,defaultAnim:"Idle",camPos:{x:-1.4,y:4*ee+1.55,z:.4},camTarget:{x:-2.5,y:4*ee+1.38,z:-2.8},macroPos:{x:-.5,y:4*ee+1.1,z:-4.2},macroTarget:{x:-2.2,y:4*ee+.45,z:-6.2},prompt:"Cinematic 85mm medium shot of 28yo Dutch-Latin woman Alina Van Dijk standing beside volcanic stone plunge pool on luxury rooftop deck at sunset, vivid copper red hair with natural soft waves, vivid emerald green eyes, light freckles, crimson lips, black silk resort wrap, turquoise water reflections, golden hour rim light --ar 9:16",script:"Cuando estás arriba, el ruido de abajo se disuelve. Aquí solo entra quien comprende que liderar también exige saber rendirse. [pausa de 2.0s] Bienvenido al círculo íntimo.",brolls:["B-Roll 1: Reflejos dorados sobre el agua turquesa de la plunge pool basáltica.","B-Roll 2: Tumbona de teca con copa de cristal tallado al atardecer."]},{id:"bar",name:"Barra de Cócteles Botánicos",icon:"🍸",floor:4,alinaPose:"Junto a la barra de cobre martillado",alinaPos:{x:4.5,y:4*ee+.06,z:-7.8},alinaRotY:-.35,defaultAnim:"Idle",camPos:{x:3.1,y:4*ee+1.55,z:-4.6},camTarget:{x:4.5,y:4*ee+1.38,z:-7.8},macroPos:{x:4.6,y:4*ee+1.45,z:-7.5},macroTarget:{x:5.5,y:4*ee+1.18,z:-9.5},prompt:"28yo Dutch-Latin woman Alina Van Dijk standing by polished hammered copper rooftop cocktail bar, vivid copper red hair, emerald green eyes, holding crystal martini glass, moody skyline bokeh, warm backlighting, 85mm f/1.4 --ar 9:16",script:"La mente necesita un antídoto contra el exceso de control. Este es el mío. [pausa de 1.5s] Salud por los que no le temen a su propia vulnerabilidad.",brolls:["B-Roll 1: Botellas ámbar retroiluminadas sobre estantería de latón.","B-Roll 2: Macro de copa de martini sobre barra de cobre martillado."]}]},3:{floorNumber:3,floorName:"PISO 3 • THE MIND SANCTUARY",subtitle:"Estudio Clínico & Boudoir",badge:"Trabajo & Terapia",badgeColor:"purple",description:"Estudio de podcast con Shure SM7B, biblioteca clínica, diván de cuero negro y laboratorio sensorial SSC.",floorY:3*ee,funnelStage:"Conversión Fanvue & Telegram VIP",spots:[{id:"podcast",name:"The Mind Sanctuary (Podcast)",icon:"🎙️",floor:3,alinaPose:"Frente al escritorio clínico y Shure SM7B",alinaPos:{x:-4.8,y:3*ee,z:-8.8},alinaRotY:.15,defaultAnim:"Idle",camPos:{x:-4.1,y:3*ee+1.52,z:-5.4},camTarget:{x:-4.8,y:3*ee+1.42,z:-8.8},macroPos:{x:-3.5,y:3*ee+1.35,z:-6.8},macroTarget:{x:-4.5,y:3*ee+1.05,z:-8.2},prompt:"Cinematic medium close-up of 28yo Dutch-Latin woman Alina Van Dijk in dark loft podcast studio SET-01, vivid copper red hair, vivid emerald green eyes, light freckles, Shure SM7B microphone on boom arm, exposed dark brick wall, warm Edison bulb, bookshelf with psychoanalysis books, 85mm f/1.8 --ar 9:16",script:"Llevas diez horas resolviendo problemas de otros... ¿cuándo fue la última vez que alguien tomó el mando por ti? [pausa de 2.0s] Entra. Cierra la puerta. Esta noche decido yo.",brolls:["B-Roll 1: Vapor de café espresso sobre cuaderno de notas clínicas en nogal.","B-Roll 2: Rack focus por lomos antiguos de Bataille y Foucault junto a vaso ámbar."]},{id:"boudoir",name:"Boudoir Velvet & Terapia SSC",icon:"🗝️",floor:3,alinaPose:"En el laboratorio sensorial junto al micrófono 3Dio",alinaPos:{x:4.5,y:3*ee,z:-7.5},alinaRotY:-.25,defaultAnim:"Idle",camPos:{x:3.4,y:3*ee+1.5,z:-4},camTarget:{x:4.5,y:3*ee+1.35,z:-7.5},macroPos:{x:3.6,y:3*ee+1.15,z:-6.2},macroTarget:{x:4.8,y:3*ee+.9,z:-7.9},prompt:"28yo Dutch-Latin woman Alina Van Dijk in luxury chiaroscuro boudoir SET-04, emerald velvet tufted headboard behind her, warm candlelight shadows, silk shibari rope rack in soft bokeh, hypnotic emerald gaze, 85mm prime lens --ar 9:16",script:"El poder real nunca se impone a la fuerza. Se entrega voluntariamente a quien sabe sostenerlo sin juicio. [pausa de 2.0s] ¿Estás listo?",brolls:["B-Roll 1: Paneo macro por madejas de cuerda shibari lila y negra sobre satén.","B-Roll 2: Micrófono binaural 3Dio y antifaz de cuero pulido bajo luz de vela."]}]},2:{floorNumber:2,floorName:"PISO 2 • RESIDENCIA PRIVADA",subtitle:"Hogar Privado («Donde Nace Todo»)",badge:"Residencia Alina",badgeColor:"copper",description:"4 estancias divididas con tabiques reales: tocador vanity con 12 bombillas, baño spa con tina basáltica, cocina de autor y suite principal.",floorY:2*ee,funnelStage:"Top-Funnel / Intimidad Cotidiana",spots:[{id:"vanity",name:"El Tocador Vanity & Vestidor",icon:"💄",floor:2,alinaPose:"Frente al tocador iluminado y espejo vanity",alinaPos:{x:-.4,y:2*ee,z:-10.8},alinaRotY:.12,defaultAnim:"Idle",camPos:{x:.25,y:2*ee+1.5,z:-8.1},camTarget:{x:-.4,y:2*ee+1.38,z:-10.8},macroPos:{x:.45,y:2*ee+1.15,z:-11.6},macroTarget:{x:-.35,y:2*ee+.85,z:-13.1},prompt:"Intimate cinematic shot of 28yo Dutch-Latin woman Alina Van Dijk by luxury dark walnut vanity table in Piso 2 suite, vivid copper red hair with soft waves, vivid emerald green eyes, light natural freckles, crimson lips, glowing round vanity bulbs in mirror behind her, black silk outfit, 85mm f/1.4 --ar 9:16",script:"Te pasas el día sosteniendo el personaje... fingiendo que no pesa. [pausa de 2.0s] Frente a este espejo solo existe la verdad. Déjame ver quién eres cuando nadie te está evaluando.",brolls:["B-Roll 1: Macro slider sobre labial carmesí dorado y frascos ámbar de perfume.","B-Roll 2: Aro de bombillas cálidas reflejado en el espejo biselado."]},{id:"bath",name:"Baño Spa & Tina Monolítica",icon:"🛁",floor:2,alinaPose:"Recostada en tina basáltica entre velas",alinaPos:{x:-9,y:2*ee+.68,z:-7.8},alinaRotY:.35,defaultAnim:"Laying",camPos:{x:-6.8,y:2*ee+1.65,z:-4.6},camTarget:{x:-9,y:2*ee+.72,z:-7.8},macroPos:{x:-7.4,y:2*ee+1.1,z:-6.2},macroTarget:{x:-8.8,y:2*ee+.55,z:-7.5},prompt:"28yo Dutch-Latin woman Alina Van Dijk reclining in freestanding black basalt stone bathtub filled with warm water, copper hair pinned up loosely, emerald green eyes, surrounded by flickering scented candles and frosted glass partition, chiaroscuro luxury spa, 85mm f/1.8 --ar 9:16",script:"El cuerpo guarda todo lo que la mente reprime. Cierra los ojos... siente el peso soltarse en el agua. [pausa de 2.0s] Yo me encargo del resto.",brolls:["B-Roll 1: Llamas de velas aromáticas reflejadas sobre piedra basáltica negra.","B-Roll 2: Bandeja de teca con sales minerales y toallas de algodón enrolladas."]},{id:"kitchen",name:"Cocina de Autor & Isla Mármol",icon:"☕",floor:2,alinaPose:"Junto a la isla de mármol Nero Marquina",alinaPos:{x:6,y:2*ee,z:-7.6},alinaRotY:-.45,defaultAnim:"Idle",camPos:{x:4.5,y:2*ee+1.5,z:-4.2},camTarget:{x:6.2,y:2*ee+1.35,z:-7.6},macroPos:{x:5.5,y:2*ee+1.25,z:-6.6},macroTarget:{x:7.2,y:2*ee+.98,z:-8.2},prompt:"28yo Dutch-Latin woman Alina Van Dijk standing beside black Nero Marquina marble kitchen island, copper red waves, emerald eyes, brass pendant lights overhead, morning espresso cup on marble counter, 85mm f/1.8 --ar 9:16",script:"Antes de que empiece el caos de tu agenda... regálate tres minutos de silencio absoluto. [pausa de 1.5s] Respira conmigo.",brolls:["B-Roll 1: Vapor ascendiendo desde taza de espresso sobre mármol Nero Marquina.","B-Roll 2: Lámparas colgantes de latón sobre copas de cristal suspendidas."]},{id:"suite",name:"Suite Principal & Balcón",icon:"🛏️",floor:2,alinaPose:"En la cama King de lino carbón",alinaPos:{x:-.5,y:2*ee+.92,z:-3.2},alinaRotY:0,defaultAnim:"Laying",camPos:{x:1.4,y:2*ee+1.68,z:.1},camTarget:{x:-.5,y:2*ee+.95,z:-3.2},macroPos:{x:-2.2,y:2*ee+1.25,z:-1.6},macroTarget:{x:-2.2,y:2*ee+.85,z:-4.2},prompt:"28yo Dutch-Latin woman Alina Van Dijk resting on king bed dressed in charcoal linen sheets, emerald velvet headboard, warm bedside table lamps, Eixample balcony doors behind, 85mm f/1.4 --ar 9:16",script:"Apaga la pantalla. Deja de repasar mentalmente tus pendientes de mañana. [pausa de 2.0s] Tu mente necesita rendirse para poder renacer.",brolls:["B-Roll 1: Lámpara de mesilla proyectando luz ámbar sobre lino carbón.","B-Roll 2: Copa de vino tinto en mesa del balcón modernista al atardecer."]}]},1:{floorNumber:1,floorName:"PISO 1 • LE VELVET CAFÉ",subtitle:"Cafetería Especialidad & Balcón",badge:"Lifestyle Diurno",badgeColor:"emerald",description:"Barra de roble con cafetera La Marzocco en cobre, vitrina de repostería, 4 mesas Carrara con sillas Thonet y balcón.",floorY:1*ee,funnelStage:"Descubrimiento & Street Lifestyle",spots:[{id:"cafe",name:"Barra La Marzocco & Mesas Carrara",icon:"🥐",floor:1,alinaPose:"De pie junto a las mesas de mármol Carrara",alinaPos:{x:-2,y:1*ee,z:-3.5},alinaRotY:.2,defaultAnim:"Idle",camPos:{x:-.9,y:1*ee+1.5,z:-.3},camTarget:{x:-2,y:1*ee+1.35,z:-3.5},macroPos:{x:-1.4,y:1*ee+1.45,z:-6.5},macroTarget:{x:0,y:1*ee+1.25,z:-9.5},prompt:"28yo Dutch-Latin woman Alina Van Dijk inside boutique Barcelona specialty coffee lounge, Carrara marble bistro tables, oak bar with copper La Marzocco espresso machine behind, soft morning sunlight, 85mm f/2.0 --ar 9:16",script:"La productividad sin introspección es solo ansiedad disfrazada de éxito. [pausa de 1.5s] ¿Tú qué buscas hoy?",brolls:["B-Roll 1: Cafetera La Marzocco en cobre pulido extrayendo espresso.","B-Roll 2: Mesa bistró de mármol blanco junto al ventanal del Eixample."]},{id:"walk_cafe",name:"Pasarela Interior Café (Walking)",icon:"🚶‍♀️",floor:1,alinaPose:"Caminando entre mesas hacia el balcón",alinaPos:{x:2.8,y:1*ee,z:-3},alinaRotY:-.15,defaultAnim:"Walk",camPos:{x:2.2,y:1*ee+1.48,z:.4},camTarget:{x:2.8,y:1*ee+1.25,z:-3},macroPos:{x:4.5,y:1*ee+1.1,z:-2.2},macroTarget:{x:3.5,y:1*ee+.78,z:-3.2},prompt:"Walking selfie style shot of 28yo Dutch-Latin woman Alina Van Dijk walking gracefully across specialty coffee lounge toward wrought-iron balcony, natural copper hair movement, warm daylight --ar 9:16",script:"Tres minutos para ordenar la cabeza antes de entrar en sesión.",brolls:["B-Roll 1: Hojas de monstera y luz natural atravesando el balcón.","B-Roll 2: Vitrina iluminada con repostería artesanal."]}]},0:{floorNumber:0,floorName:"PLANTA BAJA • CABARET & PARKING",subtitle:"Nocturne Speakeasy & Exterior",badge:"Portado de Unity",badgeColor:"rose",description:"Parking exterior 28m×18m con 8 líneas amarillas, 4 coches, 3 farolas, marquesina VIP con alfombra roja, pista neón, barra y piano de cola.",floorY:0,funnelStage:"Mundo Exterior / Viral Dance & Reels",spots:[{id:"cabaret",name:"Pista Neón & Piano de Cola",icon:"🎷",floor:0,alinaPose:"Bailando en el escenario junto al piano",alinaPos:{x:0,y:.45,z:-10.5},alinaRotY:0,defaultAnim:"Rumba",camPos:{x:1.5,y:1.85,z:-6.8},camTarget:{x:0,y:1.45,z:-10.5},macroPos:{x:-3.5,y:1.55,z:-7},macroTarget:{x:-5.8,y:.95,z:-9.5},prompt:"28yo Dutch-Latin woman Alina Van Dijk on elevated wood stage inside Nocturne speakeasy club, crimson velvet curtains, glowing cyan floor rim, grand black lacquered piano nearby, dramatic chiaroscuro spotlights, 85mm f/1.4 --ar 9:16",script:"Las mejores conversaciones ocurren cuando la ciudad se va a dormir y caen todas las máscaras. [pausa de 2.0s] ¿Entras?",brolls:["B-Roll 1: Teclas blancas y negras del piano de cola bajo foco cálido.","B-Roll 2: Copa iluminada sobre mesa de cóctel con vela parpadeante."]},{id:"parking",name:"Parking Exterior & Alfombra VIP",icon:"🚗",floor:0,alinaPose:"Llegando por la alfombra roja bajo el neón NOCTURNE",alinaPos:{x:0,y:.16,z:3.4},alinaRotY:0,defaultAnim:"Walk",camPos:{x:1.8,y:1.55,z:7.4},camTarget:{x:0,y:1.25,z:3.4},macroPos:{x:-3.2,y:1.35,z:9.2},macroTarget:{x:-3.8,y:.7,z:12.5},prompt:"Full body evening street shot of 28yo Dutch-Latin woman Alina Van Dijk walking on red carpet under glowing magenta NOCTURNE marquee sign, parked luxury cars and glowing streetlamps on wet asphalt behind, 85mm f/1.8 --ar 9:16",script:"Deja el ruido afuera. Aquí dentro las reglas las pongo yo.",brolls:["B-Roll 1: Reflejo de farola cálida y neón magenta sobre capó negro brillante.","B-Roll 2: Postes dorados y cordón de terciopelo en la entrada del club."]}]}};class dx extends jl{constructor(){super();const e=new ki;e.deleteAttribute("uv");const t=new ke({side:Qt}),n=new ke,r=new _n(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new Ue(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new Ue(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new Ue(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new Ue(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new Ue(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const d=new Ue(e,n);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);const u=new Ue(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const f=new Ue(e,yr(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const m=new Ue(e,yr(50));m.position.set(-16.109,18.021,-8.207),m.scale.set(.1,2.425,2.751),this.add(m);const g=new Ue(e,yr(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new Ue(e,yr(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const h=new Ue(e,yr(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);const p=new Ue(e,yr(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function yr(i){const e=new Yn;return e.color.setScalar(i),e}class ux extends sp{constructor(e){super(e),this.type=qn}parse(e){const o=function(y,b){switch(y){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(b||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(b||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(b||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(b||""))}},u=function(y,b,v){b=b||1024;let P=y.pos,F=-1,N=0,z="",O=String.fromCharCode.apply(null,new Uint16Array(y.subarray(P,P+128)));for(;0>(F=O.indexOf(`
`))&&N<b&&P<y.byteLength;)z+=O,N+=O.length,P+=128,O+=String.fromCharCode.apply(null,new Uint16Array(y.subarray(P,P+128)));return-1<F?(y.pos+=N+F+1,z+O.slice(0,F)):!1},f=function(y){const b=/^#\?(\S+)/,v=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,A=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,P=/^\s*FORMAT=(\S+)\s*$/,F=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,N={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let z,O;for((y.pos>=y.byteLength||!(z=u(y)))&&o(1,"no header found"),(O=z.match(b))||o(3,"bad initial token"),N.valid|=1,N.programtype=O[1],N.string+=z+`
`;z=u(y),z!==!1;){if(N.string+=z+`
`,z.charAt(0)==="#"){N.comments+=z+`
`;continue}if((O=z.match(v))&&(N.gamma=parseFloat(O[1])),(O=z.match(A))&&(N.exposure=parseFloat(O[1])),(O=z.match(P))&&(N.valid|=2,N.format=O[1]),(O=z.match(F))&&(N.valid|=4,N.height=parseInt(O[1],10),N.width=parseInt(O[2],10)),N.valid&2&&N.valid&4)break}return N.valid&2||o(3,"missing format specifier"),N.valid&4||o(3,"missing image size specifier"),N},m=function(y,b,v){const A=b;if(A<8||A>32767||y[0]!==2||y[1]!==2||y[2]&128)return new Uint8Array(y);A!==(y[2]<<8|y[3])&&o(3,"wrong scanline width");const P=new Uint8Array(4*b*v);P.length||o(4,"unable to allocate buffer space");let F=0,N=0;const z=4*A,O=new Uint8Array(4),Z=new Uint8Array(z);let X=v;for(;X>0&&N<y.byteLength;){N+4>y.byteLength&&o(1),O[0]=y[N++],O[1]=y[N++],O[2]=y[N++],O[3]=y[N++],(O[0]!=2||O[1]!=2||(O[2]<<8|O[3])!=A)&&o(3,"bad rgbe scanline format");let se=0,le;for(;se<z&&N<y.byteLength;){le=y[N++];const Ne=le>128;if(Ne&&(le-=128),(le===0||se+le>z)&&o(3,"bad scanline data"),Ne){const Ve=y[N++];for(let J=0;J<le;J++)Z[se++]=Ve}else Z.set(y.subarray(N,N+le),se),se+=le,N+=le}const ve=A;for(let Ne=0;Ne<ve;Ne++){let Ve=0;P[F]=Z[Ne+Ve],Ve+=A,P[F+1]=Z[Ne+Ve],Ve+=A,P[F+2]=Z[Ne+Ve],Ve+=A,P[F+3]=Z[Ne+Ve],F+=4}X--}return P},g=function(y,b,v,A){const P=y[b+3],F=Math.pow(2,P-128)/255;v[A+0]=y[b+0]*F,v[A+1]=y[b+1]*F,v[A+2]=y[b+2]*F,v[A+3]=1},_=function(y,b,v,A){const P=y[b+3],F=Math.pow(2,P-128)/255;v[A+0]=Os.toHalfFloat(Math.min(y[b+0]*F,65504)),v[A+1]=Os.toHalfFloat(Math.min(y[b+1]*F,65504)),v[A+2]=Os.toHalfFloat(Math.min(y[b+2]*F,65504)),v[A+3]=Os.toHalfFloat(1)},h=new Uint8Array(e);h.pos=0;const p=f(h),M=p.width,T=p.height,S=m(h.subarray(h.pos),M,T);let C,I,x;switch(this.type){case un:x=S.length/4;const y=new Float32Array(x*4);for(let v=0;v<x;v++)g(S,v*4,y,v*4);C=y,I=un;break;case qn:x=S.length/4;const b=new Uint16Array(x*4);for(let v=0;v<x;v++)_(S,v*4,b,v*4);C=b,I=qn;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:M,height:T,data:C,header:p.string,gamma:p.gamma,exposure:p.exposure,type:I}}setDataType(e){return this.type=e,this}load(e,t,n,r){function s(o,a){switch(o.type){case un:case qn:o.colorSpace=$t,o.minFilter=Lt,o.magFilter=Lt,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,s,n,r)}}class hx{constructor(e,t){this.scene=e,this.renderer=t,this.lights=[],this.flickerCandles=[],this.emissiveRefs=[],this.mode="night",this.hdrDayRT=null,this.hdrNightRT=null,this.depthFogDisabled=!1,this._setupEnvironment(),this._setupSkyDome(),this._setupSkylineSilhouettes(),this._setupGlobalLights(),this._loadPhotographicHDRIs()}_loadPhotographicHDRIs(){const e=new Ro(this.renderer);e.compileEquirectangularShader();const t=new ux;t.load("./polyhaven/hdri/hdri_night.hdr",n=>{n.mapping=xs,this.hdrNightRT=e.fromEquirectangular(n),n.dispose(),this.mode==="night"&&!this.depthFogDisabled&&this._applyHDRI("night")},void 0,n=>console.warn("[HDRI Night]",n)),t.load("./polyhaven/hdri/hdri_day.hdr",n=>{n.mapping=xs,this.hdrDayRT=e.fromEquirectangular(n),n.dispose(),this.mode==="day"&&!this.depthFogDisabled&&this._applyHDRI("day")},void 0,n=>console.warn("[HDRI Day]",n))}_applyHDRI(e){const t=e==="day"?this.hdrDayRT:this.hdrNightRT;t&&(this.scene.environment=t.texture,this.scene.background=t.texture,this.scene.backgroundBlurriness=.04,this.scene.backgroundIntensity=e==="day"?1.05:.85,this.scene.environmentIntensity=e==="day"?1:.72,this.skyDome&&(this.skyDome.visible=!1))}_setupEnvironment(){this.renderer.toneMapping=Jd,this.renderer.toneMappingExposure=1.18,this.renderer.outputColorSpace=At;const e=new Ro(this.renderer);e.compileEquirectangularShader();const t=new dx;this.envRT=e.fromScene(t,.04),this.scene.environment=this.envRT.texture,this.scene.environmentIntensity=.55,t.dispose(),e.dispose()}_setupSkyDome(){const e=new Zi(140,32,24);this.skyUniforms={topColor:{value:new Pe(395539)},midColor:{value:new Pe(1317677)},horizonColor:{value:new Pe(2628646)},sunDir:{value:new D(.55,.35,-.75).normalize()},sunStrength:{value:0},starOpacity:{value:1}};const t=new Zt({side:Qt,depthWrite:!1,uniforms:this.skyUniforms,vertexShader:`
        varying vec3 vWorldDir;
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorldDir = normalize(position);
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,fragmentShader:`
        uniform vec3 topColor;
        uniform vec3 midColor;
        uniform vec3 horizonColor;
        uniform vec3 sunDir;
        uniform float sunStrength;
        uniform float starOpacity;
        varying vec3 vWorldDir;

        float hash(vec3 p) {
          p = fract(p * 0.3183099 + 0.1);
          p *= 17.0;
          return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
        }

        void main() {
          float h = clamp(vWorldDir.y, 0.0, 1.0);
          vec3 col = mix(horizonColor, midColor, smoothstep(0.0, 0.28, h));
          col = mix(col, topColor, smoothstep(0.28, 0.85, h));

          float sunDot = max(dot(normalize(vWorldDir), sunDir), 0.0);
          col += vec3(1.0, 0.65, 0.35) * pow(sunDot, 16.0) * 0.55 * sunStrength;
          col += vec3(1.0, 0.92, 0.78) * pow(sunDot, 220.0) * 1.4 * sunStrength;

          if (starOpacity > 0.01 && h > 0.08) {
            vec3 grid = floor(vWorldDir * 220.0);
            float n = hash(grid);
            if (n > 0.9945) {
              float tw = (n - 0.9945) / 0.0055;
              col += vec3(0.85, 0.90, 1.0) * tw * starOpacity * smoothstep(0.08, 0.3, h);
            }
          }

          gl_FragColor = vec4(col, 1.0);
        }
      `});this.skyDome=new Ue(e,t),this.scene.add(this.skyDome)}_setupSkylineSilhouettes(){this.skylineGroup=new Wt;const e=new ke({color:1053466,roughness:.9,metalness:.1}),t=document.createElement("canvas");t.width=128,t.height=256;const n=t.getContext("2d");n.fillStyle="#0c0e14",n.fillRect(0,0,128,256);for(let l=8;l<248;l+=16)for(let c=8;c<120;c+=16)(c*7+l*13)%5===0&&(n.fillStyle=(c+l)%3===0?"#fbbf24":"#7dd3fc",n.fillRect(c,l,8,8));const r=new Zl(t);r.colorSpace=At,r.wrapS=In,r.wrapT=In,r.repeat.set(2,4),this.skylineMat=new ke({color:1185054,emissiveMap:r,emissive:new Pe(16766888),emissiveIntensity:.9,roughness:.85});const s=26;for(let l=0;l<s;l++){const c=l/s*Math.PI*2,d=52+l%3*10,u=6+l%4*2.5,f=14+l%5*6.5,m=6+(l+1)%3*2.2,g=new Ue(new ki(u,f,m),l%2===0?this.skylineMat:e);g.position.set(Math.cos(c)*d,f/2-1,Math.sin(c)*d),g.rotation.y=-c,this.skylineGroup.add(g)}const o=new ke({color:1184793,roughness:.95,metalness:.05}),a=new Ue(new Oo(110,48),o);a.rotation.x=-Math.PI/2,a.position.y=-.32,a.receiveShadow=!0,this.skylineGroup.add(a),this.scene.add(this.skylineGroup)}_setupGlobalLights(){this.hemiLight=new op(9414870,2497815,.75),this.scene.add(this.hemiLight),this.dirLight=new Fu(16764825,1.2),this.dirLight.position.set(22,26,20),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.set(2048,2048),this.dirLight.shadow.camera.near=2,this.dirLight.shadow.camera.far=95,this.dirLight.shadow.camera.left=-28,this.dirLight.shadow.camera.right=28,this.dirLight.shadow.camera.top=28,this.dirLight.shadow.camera.bottom=-28,this.dirLight.shadow.bias=-5e-4,this.scene.add(this.dirLight)}registerLight(e,{dayIntensity:t=.8,nightIntensity:n=2,flicker:r=!1}={}){this.lights.push({light:e,dayIntensity:t,nightIntensity:n,baseNight:n}),r&&this.flickerCandles.push({light:e,dayIntensity:t,nightIntensity:n,phase:Math.random()*10}),e.intensity=this.mode==="day"?t:n}registerEmissive(e,{dayIntensity:t=.2,nightIntensity:n=1.6}={}){this.emissiveRefs.push({material:e,dayIntensity:t,nightIntensity:n}),e.emissiveIntensity=this.mode==="day"?t:n}setMode(e){this.mode=e,e==="day"?(this.skyUniforms.topColor.value.setHex(2644124),this.skyUniforms.midColor.value.setHex(8168143),this.skyUniforms.horizonColor.value.setHex(15969910),this.skyUniforms.sunStrength.value=1,this.skyUniforms.starOpacity.value=0,this.scene.fog=new wo(14333854,.0055),this.scene.environmentIntensity=.95,this.hemiLight.color.setHex(16770764),this.hemiLight.groundColor.setHex(4930352),this.hemiLight.intensity=1.05,this.dirLight.color.setHex(16765593),this.dirLight.position.set(24,17,22),this.dirLight.intensity=2.8,this.skylineMat.emissiveIntensity=.08,this.renderer.toneMappingExposure=1.15):(this.skyUniforms.topColor.value.setHex(329489),this.skyUniforms.midColor.value.setHex(1120041),this.skyUniforms.horizonColor.value.setHex(2562339),this.skyUniforms.sunStrength.value=0,this.skyUniforms.starOpacity.value=1,this.scene.fog=new wo(658710,.009),this.scene.environmentIntensity=.48,this.hemiLight.color.setHex(3821434),this.hemiLight.groundColor.setHex(1971472),this.hemiLight.intensity=.65,this.dirLight.color.setHex(8037608),this.dirLight.position.set(-18,28,22),this.dirLight.intensity=.65,this.skylineMat.emissiveIntensity=1.1,this.renderer.toneMappingExposure=1.25);for(const t of this.lights)t.light.intensity=e==="day"?t.dayIntensity:t.nightIntensity;for(const t of this.emissiveRefs)t.material.emissiveIntensity=e==="day"?t.dayIntensity:t.nightIntensity;this.depthFogDisabled||(e==="day"&&this.hdrDayRT||e==="night"&&this.hdrNightRT?this._applyHDRI(e):(this.envRT&&(this.scene.environment=this.envRT.texture),this.scene.background=null,this.skyDome&&(this.skyDome.visible=!0)))}update(e){for(const t of this.flickerCandles){const n=this.mode==="day"?t.dayIntensity:t.nightIntensity;t.light.intensity=n*(.85+Math.sin(e*9.5+t.phase)*.1+Math.sin(e*17+t.phase)*.05)}}setDepthFogDisabled(e){this.depthFogDisabled=e,e?(this.scene.fog=null,this.scene.background=null,this.skyDome&&(this.skyDome.visible=!1)):this.setMode(this.mode)}}function Rd(i,e){if(e===Ph)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===wl||e===hu){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===wl)for(let o=1;o<=n;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class zu extends tr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new _x(t)}),this.register(function(t){return new xx(t)}),this.register(function(t){return new Ax(t)}),this.register(function(t){return new Rx(t)}),this.register(function(t){return new Cx(t)}),this.register(function(t){return new bx(t)}),this.register(function(t){return new yx(t)}),this.register(function(t){return new Mx(t)}),this.register(function(t){return new Sx(t)}),this.register(function(t){return new gx(t)}),this.register(function(t){return new wx(t)}),this.register(function(t){return new vx(t)}),this.register(function(t){return new Tx(t)}),this.register(function(t){return new Ex(t)}),this.register(function(t){return new px(t)}),this.register(function(t){return new Ix(t)}),this.register(function(t){return new Px(t)})}load(e,t,n,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=_s.extractUrlBase(e);o=_s.resolveURL(c,this.path)}else o=_s.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Jl(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(d){t(d),s.manager.itemEnd(e)},a)}catch(d){a(d)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Hu){try{o[Qe.KHR_BINARY_GLTF]=new Dx(e)}catch(u){r&&r(u);return}s=JSON.parse(o[Qe.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new jx(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const u=this.pluginCallbacks[d](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let d=0;d<s.extensionsUsed.length;++d){const u=s.extensionsUsed[d],f=s.extensionsRequired||[];switch(u){case Qe.KHR_MATERIALS_UNLIT:o[u]=new mx;break;case Qe.KHR_DRACO_MESH_COMPRESSION:o[u]=new Lx(s,this.dracoLoader);break;case Qe.KHR_TEXTURE_TRANSFORM:o[u]=new Fx;break;case Qe.KHR_MESH_QUANTIZATION:o[u]=new Nx;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function fx(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class px{constructor(e){this.parser=e,this.name=Qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const d=new Pe(16777215);l.color!==void 0&&d.setRGB(l.color[0],l.color[1],l.color[2],$t);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Fu(d),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new _n(d),c.distance=u;break;case"spot":c=new Lu(d),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),di(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class mx{constructor(){this.name=Qe.KHR_MATERIALS_UNLIT}getMaterialType(){return Yn}extendParams(e,t,n){const r=[];e.color=new Pe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],$t),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,At))}return Promise.all(r)}}class gx{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class _x{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ce(a,a)}return Promise.all(s)}}class xx{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class vx{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class bx{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Pe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],$t)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,At)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class yx{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class Mx{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Pe().setRGB(a[0],a[1],a[2],$t),Promise.all(s)}}class Sx{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class wx{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Pe().setRGB(a[0],a[1],a[2],$t),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,At)),Promise.all(s)}}class Ex{constructor(e){this.parser=e,this.name=Qe.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class Tx{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class Ax{constructor(e){this.parser=e,this.name=Qe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class Rx{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Cx{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Ix{constructor(e){this.name=Qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,d=r.count,u=r.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(d,u,f,r.mode,r.filter).then(function(m){return m.buffer}):o.ready.then(function(){const m=new ArrayBuffer(d*u);return o.decodeGltfBuffer(new Uint8Array(m),d,u,f,r.mode,r.filter),m})})}else return null}}class Px{constructor(e){this.name=Qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const c of r.primitives)if(c.mode!==Tn.TRIANGLES&&c.mode!==Tn.TRIANGLE_STRIP&&c.mode!==Tn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(d=>(l[c]=d,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const d=c.pop(),u=d.isGroup?d.children:[d],f=c[0].count,m=[];for(const g of u){const _=new $e,h=new D,p=new xn,M=new D(1,1,1),T=new zf(g.geometry,g.material,f);for(let S=0;S<f;S++)l.TRANSLATION&&h.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,S),l.SCALE&&M.fromBufferAttribute(l.SCALE,S),T.setMatrixAt(S,_.compose(h,p,M));for(const S in l)if(S==="_COLOR_0"){const C=l[S];T.instanceColor=new Tl(C.array,C.itemSize,C.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&g.geometry.setAttribute(S,l[S]);Mt.prototype.copy.call(T,g),this.parser.assignFinalMaterial(T),m.push(T)}return d.isGroup?(d.clear(),d.add(...m),d):m[0]}))}}const Hu="glTF",as=12,Cd={JSON:1313821514,BIN:5130562};class Dx{constructor(e){this.name=Qe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,as),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Hu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-as,s=new DataView(e,as);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Cd.JSON){const c=new Uint8Array(e,as+o,a);this.content=n.decode(c)}else if(l===Cd.BIN){const c=as+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Lx{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const d in o){const u=Il[d]||d.toLowerCase();a[u]=o[d]}for(const d in e.attributes){const u=Il[d]||d.toLowerCase();if(o[d]!==void 0){const f=n.accessors[e.attributes[d]],m=Fr[f.componentType];c[u]=m.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(d){return new Promise(function(u,f){r.decodeDracoFile(d,function(m){for(const g in m.attributes){const _=m.attributes[g],h=l[g];h!==void 0&&(_.normalized=h)}u(m)},a,c,$t,f)})})}}class Fx{constructor(){this.name=Qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Nx{constructor(){this.name=Qe.KHR_MESH_QUANTIZATION}}class Vu extends Es{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,d=r-t,u=(n-t)/d,f=u*u,m=f*u,g=e*c,_=g-c,h=-2*m+3*f,p=m-f,M=1-h,T=p-f+u;for(let S=0;S!==a;S++){const C=o[_+S+a],I=o[_+S+l]*d,x=o[g+S+a],y=o[g+S]*d;s[S]=M*C+T*I+h*x+p*y}return s}}const kx=new xn;class Ux extends Vu{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return kx.fromArray(s).normalize().toArray(s),s}}const Tn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Fr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Id={9728:jt,9729:Lt,9984:eu,9985:uo,9986:us,9987:Xn},Pd={33071:$n,33648:vo,10497:In},Ea={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Il={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ti={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ox={CUBICSPLINE:void 0,LINEAR:ys,STEP:bs},Ta={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Bx(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ke({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:_i})),i.DefaultMaterial}function ji(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function di(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function zx(i,e,t){let n=!1,r=!1,s=!1;for(let c=0,d=e.length;c<d;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(r=!0),u.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,d=e.length;c<d;c++){const u=e[c];if(n){const f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(f)}if(r){const f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(f)}if(s){const f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const d=c[0],u=c[1],f=c[2];return n&&(i.morphAttributes.position=d),r&&(i.morphAttributes.normal=u),s&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function Hx(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Vx(i){let e;const t=i.extensions&&i.extensions[Qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Aa(t.attributes):e=i.indices+":"+Aa(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+Aa(i.targets[n]);return e}function Aa(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Pl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Gx(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Wx=new $e;class jx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new fx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);r=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||s&&o<98?this.textureLoader=new Du(this.options.manager):this.textureLoader=new dp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Jl(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:n,userData:{}};return ji(s,a,r),di(a,r),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,d]of o.children.entries())s(d,a.children[c])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Qe.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){n.load(_s.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=Ea[r.type],a=Fr[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new an(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Ea[r.type],c=Fr[r.componentType],d=c.BYTES_PER_ELEMENT,u=d*l,f=r.byteOffset||0,m=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let _,h;if(m&&m!==u){const p=Math.floor(f/m),M="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let T=t.cache.get(M);T||(_=new c(a,p*m,r.count*m/d),T=new Nf(_,m/d),t.cache.add(M,T)),h=new $l(T,l,f%m/d,g)}else a===null?_=new c(r.count*l):_=new c(a,f,r.count*l),h=new an(_,l,g);if(r.sparse!==void 0){const p=Ea.SCALAR,M=Fr[r.sparse.indices.componentType],T=r.sparse.indices.byteOffset||0,S=r.sparse.values.byteOffset||0,C=new M(o[1],T,r.sparse.count*p),I=new c(o[2],S,r.sparse.count*l);a!==null&&(h=new an(h.array.slice(),h.itemSize,h.normalized)),h.normalized=!1;for(let x=0,y=C.length;x<y;x++){const b=C[x];if(h.setX(b,I[x*l]),l>=2&&h.setY(b,I[x*l+1]),l>=3&&h.setZ(b,I[x*l+2]),l>=4&&h.setW(b,I[x*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}h.normalized=g}return h})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(d){d.flipY=!1,d.name=o.name||a.name||"",d.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(d.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return d.magFilter=Id[f.magFilter]||Lt,d.minFilter=Id[f.minFilter]||Xn,d.wrapS=Pd[f.wrapS]||In,d.wrapT=Pd[f.wrapT]||In,d.generateMipmaps=!d.isCompressedTexture&&d.minFilter!==jt&&d.minFilter!==Lt,r.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const f=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(l).then(function(u){return new Promise(function(f,m){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const h=new Ot(_);h.needsUpdate=!0,f(h)}),t.load(_s.resolveURL(u,s.path),g,void 0,m)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),di(u,o),u.userData.mimeType=o.mimeType||Gx(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=d,d}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[Qe.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Qe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[Qe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Au,Kn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Tu,Kn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(r||s||o){let a="ClonedMaterial:"+n.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ke}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[Qe.KHR_MATERIALS_UNLIT]){const u=r[Qe.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new Pe(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],$t),a.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,At)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Rn);const d=s.alphaMode||Ta.OPAQUE;if(d===Ta.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,d===Ta.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Yn&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ce(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==Yn&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Yn){const u=s.emissiveFactor;a.emissive=new Pe().setRGB(u[0],u[1],u[2],$t)}return s.emissiveTexture!==void 0&&o!==Yn&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,At)),Promise.all(c).then(function(){const u=new o(a);return s.name&&(u.name=s.name),di(u,s),t.associations.set(u,{materials:e}),s.extensions&&ji(r,u,s),u})}createUniqueName(e){const t=ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(a){return n[Qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Dd(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],d=Vx(c),u=r[d];if(u)o.push(u.promise);else{let f;c.extensions&&c.extensions[Qe.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=Dd(new hn,c,t),r[d]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const d=o[l].material===void 0?Bx(this.cache):this.getDependency("material",o[l].material);a.push(d)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),d=l[l.length-1],u=[];for(let m=0,g=d.length;m<g;m++){const _=d[m],h=o[m];let p;const M=c[m];if(h.mode===Tn.TRIANGLES||h.mode===Tn.TRIANGLE_STRIP||h.mode===Tn.TRIANGLE_FAN||h.mode===void 0)p=s.isSkinnedMesh===!0?new Uf(_,M):new Ue(_,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),h.mode===Tn.TRIANGLE_STRIP?p.geometry=Rd(p.geometry,hu):h.mode===Tn.TRIANGLE_FAN&&(p.geometry=Rd(p.geometry,wl));else if(h.mode===Tn.LINES)p=new Gf(_,M);else if(h.mode===Tn.LINE_STRIP)p=new Kl(_,M);else if(h.mode===Tn.LINE_LOOP)p=new Wf(_,M);else if(h.mode===Tn.POINTS)p=new jf(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+h.mode);Object.keys(p.geometry.morphAttributes).length>0&&Hx(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),di(p,s),h.extensions&&ji(r,p,h),t.assignFinalMaterial(p),u.push(p)}for(let m=0,g=u.length;m<g;m++)t.associations.set(u[m],{meshes:e,primitives:m});if(u.length===1)return s.extensions&&ji(r,u[0],s),u[0];const f=new Wt;s.extensions&&ji(r,f,s),t.associations.set(f,{meshes:e});for(let m=0,g=u.length;m<g;m++)f.add(u[m]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Jt(So.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new zo(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),di(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,d=o.length;c<d;c++){const u=o[c];if(u){a.push(u);const f=new $e;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ql(a,l)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],d=[];for(let u=0,f=r.channels.length;u<f;u++){const m=r.channels[u],g=r.samplers[m.sampler],_=m.target,h=_.node,p=r.parameters!==void 0?r.parameters[g.input]:g.input,M=r.parameters!==void 0?r.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",h)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",M)),c.push(g),d.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(d)]).then(function(u){const f=u[0],m=u[1],g=u[2],_=u[3],h=u[4],p=[];for(let M=0,T=f.length;M<T;M++){const S=f[M],C=m[M],I=g[M],x=_[M],y=h[M];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const b=n._createAnimationTracks(S,C,I,x,y);if(b)for(let v=0;v<b.length;v++)p.push(b[v])}return new Rl(s,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,d=a.length;c<d;c++)o.push(n.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const d=c[0],u=c[1],f=c[2];f!==null&&d.traverse(function(m){m.isSkinnedMesh&&m.bind(f,Wx)});for(let m=0,g=u.length;m<g;m++)d.add(u[m]);return d})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let d;if(s.isBone===!0?d=new Eu:c.length>1?d=new Wt:c.length===1?d=c[0]:d=new Mt,d!==c[0])for(let u=0,f=c.length;u<f;u++)d.add(c[u]);if(s.name&&(d.userData.name=s.name,d.name=o),di(d,s),s.extensions&&ji(n,d,s),s.matrix!==void 0){const u=new $e;u.fromArray(s.matrix),d.applyMatrix4(u)}else s.translation!==void 0&&d.position.fromArray(s.translation),s.rotation!==void 0&&d.quaternion.fromArray(s.rotation),s.scale!==void 0&&d.scale.fromArray(s.scale);return r.associations.has(d)||r.associations.set(d,{}),r.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,s=new Wt;n.name&&(s.name=r.createUniqueName(n.name)),di(s,n),n.extensions&&ji(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let d=0,u=l.length;d<u;d++)s.add(l[d]);const c=d=>{const u=new Map;for(const[f,m]of r.associations)(f instanceof Kn||f instanceof Ot)&&u.set(f,m);return d.traverse(f=>{const m=r.associations.get(f);m!=null&&u.set(f,m)}),u};return r.associations=c(s),s})}_createAnimationTracks(e,t,n,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];Ti[s.path]===Ti.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Ti[s.path]){case Ti.weights:c=Gr;break;case Ti.rotation:c=Wr;break;case Ti.position:case Ti.scale:c=jr;break;default:switch(n.itemSize){case 1:c=Gr;break;case 2:case 3:default:c=jr;break}break}const d=r.interpolation!==void 0?Ox[r.interpolation]:ys,u=this._getArrayFromAccessor(n);for(let f=0,m=l.length;f<m;f++){const g=new c(l[f]+"."+Ti[s.path],t.array,u,d);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Pl(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const r=this instanceof Wr?Ux:Vu;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function $x(i,e,t){const n=e.attributes,r=new Vn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),a.normalized){const d=Pl(Fr[a.componentType]);r.min.multiplyScalar(d),r.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new D,l=new D;for(let c=0,d=s.length;c<d;c++){const u=s[c];if(u.POSITION!==void 0){const f=t.json.accessors[u.POSITION],m=f.min,g=f.max;if(m!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(g[2]))),f.normalized){const _=Pl(Fr[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}i.boundingBox=r;const o=new ei;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=o}function Dd(i,e,t){const n=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=Il[o]||o.toLowerCase();a in i.attributes||r.push(s(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});r.push(o)}return it.workingColorSpace!==$t&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${it.workingColorSpace}" not supported.`),di(i,e),$x(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?zx(i,e.targets,t):i})}class Vo extends Ue{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new Jt;const n=this,r=t.color!==void 0?new Pe(t.color):new Pe(8355711),s=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||Vo.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,d=new ui,u=new D,f=new D,m=new D,g=new $e,_=new D(0,0,-1),h=new at,p=new D,M=new D,T=new at,S=new $e,C=this.camera,I=new xi(s,o,{samples:c,type:qn}),x=new Zt({name:l.name!==void 0?l.name:"unspecified",uniforms:Mu.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});x.uniforms.tDiffuse.value=I.texture,x.uniforms.color.value=r,x.uniforms.textureMatrix.value=S,this.material=x,this.onBeforeRender=function(y,b,v){if(f.setFromMatrixPosition(n.matrixWorld),m.setFromMatrixPosition(v.matrixWorld),g.extractRotation(n.matrixWorld),u.set(0,0,1),u.applyMatrix4(g),p.subVectors(f,m),p.dot(u)>0===!0&&this.forceUpdate===!1)return;p.reflect(u).negate(),p.add(f),g.extractRotation(v.matrixWorld),_.set(0,0,-1),_.applyMatrix4(g),_.add(m),M.subVectors(f,_),M.reflect(u).negate(),M.add(f),C.position.copy(p),C.up.set(0,1,0),C.up.applyMatrix4(g),C.up.reflect(u),C.lookAt(M),C.far=v.far,C.updateMatrixWorld(),C.projectionMatrix.copy(v.projectionMatrix),S.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),S.multiply(C.projectionMatrix),S.multiply(C.matrixWorldInverse),S.multiply(n.matrixWorld),d.setFromNormalAndCoplanarPoint(u,f),d.applyMatrix4(C.matrixWorldInverse),h.set(d.normal.x,d.normal.y,d.normal.z,d.constant);const P=C.projectionMatrix;T.x=(Math.sign(h.x)+P.elements[8])/P.elements[0],T.y=(Math.sign(h.y)+P.elements[9])/P.elements[5],T.z=-1,T.w=(1+P.elements[10])/P.elements[14],h.multiplyScalar(2/h.dot(T)),P.elements[2]=h.x,P.elements[6]=h.y,P.elements[10]=h.z+1-a,P.elements[14]=h.w,n.visible=!1;const F=y.getRenderTarget(),N=y.xr.enabled,z=y.shadowMap.autoUpdate;y.xr.enabled=!1,y.shadowMap.autoUpdate=!1,y.setRenderTarget(I),y.state.buffers.depth.setMask(!0),y.autoClear===!1&&y.clear(),y.render(b,C),y.xr.enabled=N,y.shadowMap.autoUpdate=z,y.setRenderTarget(F);const O=v.viewport;O!==void 0&&y.state.viewport(O),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return I},this.dispose=function(){I.dispose(),n.material.dispose()}}}Vo.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};function ic(i=512){const e=document.createElement("canvas");return e.width=i,e.height=i,[e,e.getContext("2d")]}function Ts(i,{colorSpace:e=At,repeatX:t=1,repeatY:n=1}={}){const r=new Zl(i);return r.wrapS=In,r.wrapT=In,r.repeat.set(t,n),r.anisotropy=8,r.colorSpace=e,r}function Ld(i,e="#140812",t="#ff2a85",n=""){const r=document.createElement("canvas");r.width=1024,r.height=256;const s=r.getContext("2d");return s.fillStyle=e,s.fillRect(0,0,r.width,r.height),s.strokeStyle=t,s.lineWidth=8,s.strokeRect(12,12,r.width-24,r.height-24),s.textAlign="center",s.textBaseline="middle",s.shadowColor=t,s.shadowBlur=24,s.fillStyle="#fff5fa",s.font="bold 96px Georgia, serif",s.fillText(i,r.width/2,n?r.height/2-22:r.height/2),n&&(s.shadowBlur=8,s.fillStyle=t,s.font="600 28px monospace",s.fillText(n,r.width/2,r.height/2+54)),Ts(r,{repeatX:1,repeatY:1})}function Xx(i=12,e=9,t=1.5){const[n,r]=ic(512);r.fillStyle="#0d0e14",r.fillRect(0,0,512,512);const s=128;for(let o=0;o<512;o+=s)for(let a=0;a<512;a+=s)r.fillStyle=(a+o)/s%2===0?"#141722":"#0f111a",r.fillRect(a+3,o+3,s-6,s-6),r.strokeStyle="rgba(16, 185, 129, 0.25)",r.lineWidth=2,r.strokeRect(a+3,o+3,s-6,s-6);return Ts(n,{repeatX:i/t,repeatY:e/t})}function qx(){const i=document.createElement("canvas");i.width=256,i.height=512;const e=i.getContext("2d"),t=e.createLinearGradient(0,0,0,512);return t.addColorStop(0,"#ffd8a8"),t.addColorStop(.55,"#c86446"),t.addColorStop(1,"#1e293b"),e.fillStyle=t,e.fillRect(0,0,256,512),e.fillStyle="#111319",e.fillRect(0,0,256,16),e.fillRect(0,496,256,16),e.fillRect(0,0,14,512),e.fillRect(242,0,14,512),e.fillRect(122,0,12,512),e.fillRect(0,170,256,10),e.fillRect(0,340,256,10),Ts(i,{repeatX:1,repeatY:1})}const Yx=new Du;function Sn(i,{repeatX:e=1,repeatY:t=1,includeAO:n=!0}={}){const r=`./polyhaven/textures/${i}`,s=(o,a)=>{const l=Yx.load(o);return l.wrapS=In,l.wrapT=In,l.repeat.set(e,t),l.anisotropy=8,l.colorSpace=a?At:On,!a&&o.endsWith("ao.jpg")&&(l.channel=0),l};return{map:s(`${r}/diffuse.jpg`,!0),normalMap:s(`${r}/nor_gl.jpg`,!1),roughnessMap:s(`${r}/rough.jpg`,!1),aoMap:n?s(`${r}/ao.jpg`,!1):void 0}}function Gu(){const[i,e]=ic(128),t=e.createRadialGradient(64,64,8,64,64,62);return t.addColorStop(0,"rgba(0, 0, 0, 0.56)"),t.addColorStop(.55,"rgba(0, 0, 0, 0.25)"),t.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=t,e.fillRect(0,0,128,128),Ts(i,{repeatX:1,repeatY:1})}function Fd(i=1){const[e,t]=ic(256);t.fillStyle=i===1?"#12141a":"#181014",t.fillRect(0,0,256,256);const n=t.createRadialGradient(128,120,12,128,128,110);return n.addColorStop(0,i===1?"#d18447":"#bf2e4c"),n.addColorStop(.55,i===1?"#1a735c":"#dbba6b"),n.addColorStop(1,"rgba(18, 20, 26, 0)"),t.fillStyle=n,t.fillRect(16,16,224,224),t.strokeStyle="#e5dfd3",t.lineWidth=10,t.strokeRect(5,5,246,246),Ts(e,{repeatX:1,repeatY:1})}const Kx=new zu,Ra=new Map;function Zx(i){return Ra.has(i)||Ra.set(i,Kx.loadAsync(`./polyhaven/models/${i}/${i}.gltf`)),Ra.get(i)}function Jx(i,e){const t=[],n=[],r=[],s=Sn("asphalt_02",{repeatX:8,repeatY:5.5}),o=new ke({...s,color:10133674,roughness:1,metalness:.03}),a=Sn("brushed_concrete_04",{repeatX:9,repeatY:1.2}),l=new ke({...a,color:13685980,roughness:1,metalness:.04}),c=new ke({color:15381256,roughness:.65}),d=Sn("herringbone_parquet",{repeatX:6.5,repeatY:4}),u=new ke({...d,color:15127490,normalScale:new Ce(.75,.75),roughness:.92,metalness:.04}),f=Sn("marble_01",{repeatX:5.2,repeatY:3.2}),m=new ke({...f,color:2962239,normalScale:new Ce(.5,.5),roughness:.72,metalness:.1}),g=Sn("marble_01",{repeatX:5.2,repeatY:3.2}),_=new ke({...g,color:16118508,normalScale:new Ce(.45,.45),roughness:.76,metalness:.06}),h=Sn("brick_wall_005",{repeatX:8,repeatY:1.8}),p=new ke({...h,color:13285552,normalScale:new Ce(.9,.9),roughness:1,metalness:.02}),M=Sn("beige_wall_001",{repeatX:6,repeatY:1.6}),T=new ke({...M,color:4540759,normalScale:new Ce(.55,.55),roughness:1,metalness:.02}),S=Sn("granite_tile_02",{repeatX:8,repeatY:1.6}),C=new ke({...S,color:10791603,normalScale:new Ce(.7,.7),roughness:1,metalness:.06}),I=qx(),x=new ke({map:I,emissiveMap:I,emissive:new Pe(16764832),emissiveIntensity:1.2,roughness:.25});e.registerEmissive(x,{dayIntensity:.35,nightIntensity:1.25});const y=new ke({...M,color:4935518,normalScale:new Ce(.45,.45),roughness:1,metalness:.02}),b=Sn("brown_planks_03",{repeatX:6,repeatY:4}),v=new ke({...b,color:14205872,normalScale:new Ce(.75,.75),roughness:1,metalness:.04}),A=new ke({color:3875864,roughness:.48,metalness:.08}),P=new ke({...Sn("brown_planks_03",{repeatX:2,repeatY:1}),color:14270367,roughness:.88,metalness:.04}),F=new ke({color:13132870,roughness:.28,metalness:.88}),N=new ke({color:13938487,roughness:.25,metalness:.9}),z=new ke({color:13949151,roughness:.18,metalness:.92}),O=new ke({color:1974827,roughness:.45,metalness:.75}),Z=Sn("velour_velvet",{repeatX:2,repeatY:2}),X=new ke({...Z,color:1079386,normalScale:new Ce(.7,.7),roughness:1,metalness:.02}),se=new ke({...Z,color:10886452,normalScale:new Ce(.7,.7),roughness:1,metalness:.02}),le=new ke({color:2764086,roughness:.92,metalness:.02}),ve=new ke({color:15196630,roughness:.88,metalness:.02}),Ne=Sn("fabric_leather_02",{repeatX:2,repeatY:2});new ke({...Ne,color:10244909,normalScale:new Ce(.65,.65),roughness:.9,metalness:.05});const Ve=new ke({...Ne,color:2500656,normalScale:new Ce(.65,.65),roughness:.85,metalness:.08}),J=new ke({color:16777215,roughness:.04,metalness:.98}),oe=new ke({color:12762542,roughness:.72,metalness:.02}),Te=Gu(),he=new Yn({map:Te,transparent:!0,opacity:.68,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}),Fe=new ke({map:Fd(1),roughness:.35,metalness:.04}),Xe=new ke({map:Fd(2),roughness:.35,metalness:.04}),De=new on({color:10875900,roughness:.08,metalness:.1,transparent:!0,opacity:.28,transmission:.35}),vt=new ke({color:13753570,roughness:.45,metalness:.1,transparent:!0,opacity:.55}),ht=new ke({color:959977,roughness:.08,metalness:.35,transparent:!0,opacity:.78}),He=new ke({color:16774097,emissive:new Pe(16763256),emissiveIntensity:1.8,roughness:.2});e.registerEmissive(He,{dayIntensity:.5,nightIntensity:2.2});const L=new ke({color:16722565,emissive:new Pe(16719480),emissiveIntensity:1.8});e.registerEmissive(L,{dayIntensity:.4,nightIntensity:2.4});const St=new ke({color:58879,emissive:new Pe(55807),emissiveIntensity:1.8});e.registerEmissive(St,{dayIntensity:.3,nightIntensity:2});function $(W,ye,rt,Et,xt,st,bt,Pn,Dn=!0,vn=!0){const It=new Ue(new ki(ye,rt,Et),Pn);return It.position.set(xt,st,bt),It.castShadow=Dn,It.receiveShadow=vn,W.add(It),It}function be(W,ye,rt,Et,xt,st,bt,Pn,Dn,vn=!0){const It=new Ue(new sn(ye,rt,Et,xt),Dn);return It.position.set(st,bt,Pn),It.castShadow=vn,It.receiveShadow=!0,W.add(It),It}function Ie(W,ye,rt){if($(W,pt,.26,kt,0,-.13,Ut,rt,!1,!0),$(W,pt+.5,.34,.38,0,-.13,1.55,O,!0,!0),$(W,pt+.52,.06,.06,0,.01,1.73,N,!1,!1),$(W,pt,ee,.3,0,ee/2,Ut-kt/2,ye===3||ye===0?p:T),$(W,.3,ee,kt,-pt/2,ee/2,Ut,T),$(W,.3,ee,kt,pt/2,ee/2,Ut,T),$(W,pt+.36,ee,.16,0,ee/2,Ut-kt/2-.19,C),$(W,.16,ee,kt+.16,-pt/2-.19,ee/2,Ut,C),$(W,.16,ee,kt+.16,pt/2+.19,ee/2,Ut,C),ye>=1&&ye<=3)for(const xt of[-4.2,-9.8])$(W,.08,3.1,2.5,-pt/2-.28,ee*.52,xt,x,!1,!1),$(W,.08,3.1,2.5,pt/2+.28,ee*.52,xt,x,!1,!1);$(W,pt+.2,.24,.24,0,ee-.12,1.45,O,!1,!1),$(W,pt,.24,.36,0,ee-.12,Ut-kt/2+.18,y,!1,!1);for(const xt of[-12.85,-5.2,4.4,12.85])$(W,.38,ee,.38,xt,ee/2,1.45,O);const Et=$(W,.1,ee,4.2,10.2,ee/2,-12.1,De,!1,!1);if(Et.castShadow=!1,$(W,1.8,.14,1.8,11.4,.08,-12.8,O),$(W,.08,ee,.08,10.6,ee/2,-11.9,St,!1,!1),ye<4)for(let st=0;st<14;st++){const bt=(st+.5)*(ee/14),Pn=-10.5+st*.38;$(W,1.3,.16,.4,11.4,bt,Pn,P)}$(W,pt-.3,.14,.06,0,.07,Ut-kt/2+.16,A,!1,!0),$(W,.06,.14,kt-.3,-pt/2+.16,.07,Ut,A,!1,!0),$(W,.06,.14,kt-.3,pt/2-.16,.07,Ut,A,!1,!0),$(W,pt-.3,.12,.16,0,ee-.09,Ut-kt/2+.2,oe,!1,!1),$(W,.16,.12,kt-.3,-pt/2+.2,ee-.09,Ut,oe,!1,!1),$(W,.16,.12,kt-.3,pt/2-.2,ee-.09,Ut,oe,!1,!1);for(const xt of[-10.5,-5,.2,4.4,9.6])$(W,.28,ee,.12,xt,ee/2,Ut-kt/2+.18,oe,!1,!0)}function Re(W,ye,rt,Et=.75,xt=.75,st=.015){const bt=new Ue(new Fi(Et*2,xt*2),he);return bt.rotation.x=-Math.PI/2,bt.position.set(ye,st,rt),bt.userData.hideOnDepthPass=!0,W.add(bt),bt}function Y(W,ye,rt,Et,xt,st,bt=0,{addShadow:Pn=!0,customArtMat:Dn=null,hangFromCeiling:vn=!1}={}){Zx(ye).then(It=>{const E=It.scene.clone(!0);E.rotation.set(0,bt,0),E.updateMatrixWorld(!0);const U=new Vn().setFromObject(E),j=new D;U.getSize(j);const q=rt/Math.max(.05,j.y);E.scale.multiplyScalar(q),E.updateMatrixWorld(!0);const B=new Vn().setFromObject(E),re=new D,ue=new D;B.getCenter(re),B.getSize(ue);const Me=vn?xt-B.max.y:xt-B.min.y;if(E.position.set(Et-re.x,Me,st-re.z),E.traverse(ce=>{var Be,We;if(ce.isMesh){ce.castShadow=!vn,ce.receiveShadow=!0;const Ee=String(((Be=ce.material)==null?void 0:Be.name)||"").toLowerCase();if(Dn&&ce.material)Ee.includes("artwork")?ce.material=A:Ee.includes("glass")&&(ce.material=new on({color:16777215,roughness:.06,metalness:.05,transparent:!0,opacity:.1,depthWrite:!1}));else if(Ee.includes("flame")||Ee.includes("globe")||Ee.includes("lamps_")||Ee.endsWith("_light")||Ee.includes("bulb")||Ee.includes("lantern"))ce.material=ce.material.clone(),ce.material.emissive=new Pe(16763238),ce.material.emissiveIntensity=1.9,e.registerEmissive(ce.material,{dayIntensity:.35,nightIntensity:2.1});else if(Ee.includes("glass")){const tt=Ee.includes("green"),ot=Ee.includes("orange")||Ee.includes("yellow");ce.material=new on({color:tt?1332013:ot?11817737:14412542,roughness:.08,metalness:.05,transparent:!0,opacity:tt||ot?.78:.32,depthWrite:!1})}(We=ce.material)!=null&&We.aoMap&&(ce.material.aoMap.channel=0)}}),W.add(E),ye==="hanging_picture_frame_01"&&Dn){const ce=new Ue(new Fi(Math.max(.25,ue.x*.8),Math.max(.35,ue.y*.82)),Dn);ce.rotation.y=bt;const Be=new D(0,0,.009).applyAxisAngle(new D(0,1,0),bt);ce.position.set(Et+Be.x,re.y+Me,st+Be.z),W.add(ce)}Pn&&!vn&&Re(W,Et,st,Math.max(.26,ue.x*.58),Math.max(.26,ue.z*.58),xt+.014)}).catch(It=>console.warn("[PolyHaven GLTF]",ye,It))}function R(W,ye,rt,Et,xt=!1){be(W,.045,.045,.16,10,ye,rt+.08,Et,ve);const st=new Ue(new Zi(.025,8,8),He);if(st.scale.set(.8,1.5,.8),st.position.set(ye,rt+.2,Et),W.add(st),xt){const bt=new _n(16755021,5.5,7,1.5);bt.position.set(ye,rt+.32,Et),W.add(bt),e.registerLight(bt,{dayIntensity:.8,nightIntensity:5.5,flicker:!0})}}function w(W,ye,rt,Et,xt=1){Y(W,"potted_plant_04",1.35*xt,ye,rt,Et,ye*.35,{addShadow:!0})}function G(W,ye,rt,Et,xt){const st=new Wt;st.position.set(ye,0,rt),st.rotation.y=Et;const bt=new ke({color:xt,roughness:.2,metalness:.85}),Pn=new ke({color:988970,roughness:.1,metalness:.9}),Dn=new ke({color:1118742,roughness:.88}),vn=new ke({color:15680580,emissive:new Pe(14427686),emissiveIntensity:1.5});$(st,1.92,.58,4.3,0,.56,0,bt),$(st,1.62,.52,2.25,0,1.08,-.25,bt),$(st,1.56,.42,1.85,0,1.08,-.25,Pn);for(const[It,E]of[[-.94,1.32],[.94,1.32],[-.94,-1.32],[.94,-1.32]]){const U=new Ue(new sn(.36,.36,.24,18),Dn);U.rotation.z=Math.PI/2,U.position.set(It,.36,E),U.castShadow=!0,st.add(U);const j=new Ue(new sn(.21,.21,.26,12),z);j.rotation.z=Math.PI/2,j.position.set(It,.36,E),st.add(j)}$(st,.38,.14,.08,-.62,.62,2.16,He,!1),$(st,.38,.14,.08,.62,.62,2.16,He,!1),$(st,.42,.12,.08,-.62,.65,-2.16,vn,!1),$(st,.42,.12,.08,.62,.65,-2.16,vn,!1),W.add(st)}const V=new Wt;V.position.y=0,i.add(V),t[0]=V,$(V,28,.24,18,0,-.12,10.5,o,!1,!0),$(V,28,.16,3.3,0,.08,3.15,l,!1,!0);for(let W=-3;W<=3;W++)$(V,.14,.02,5.4,W*3.4,.015,12.5,c,!1,!0);G(V,-8.5,12.5,0,12131356),G(V,-5.1,12.5,0,1120295),G(V,5.1,12.5,0,14870768),G(V,8.5,12.5,Math.PI,8138002);for(const[W,ye]of[[-11.5,4.9],[11.5,4.9],[-11.5,16.5],[11.5,16.5]]){Y(V,"street_lamp_01",5.4,W,0,ye,W<0?Math.PI/2:-Math.PI/2,{addShadow:!0});const rt=new Ue(new Zi(.14,12,12),He);rt.position.set(W,4.95,ye),V.add(rt)}for(const[W,ye]of[[-14.5,5.2],[14.5,5.2],[-14.5,15.5],[14.5,15.5]]){$(V,1.5,.72,1.5,W,.36,ye,C),Y(V,"potted_plant_02",2.85,W,.72,ye,W*.22,{addShadow:!1});const rt=ye<10?1.25:-1.25;Y(V,"shrub_02",1.1,W,0,ye+rt,W*.35,{addShadow:!0})}const ie=new _n(16764808,22,32,1.3);ie.position.set(0,6.2,8.5),V.add(ie),e.registerLight(ie,{dayIntensity:1,nightIntensity:22}),$(V,6.4,.24,3.4,0,3.45,3.1,O);const Q=Ld("NOCTURNE","#120610","#ff2a85","CABARET  •  SPEAKEASY  •  VIP"),Le=new ke({map:Q,emissiveMap:Q,emissive:new Pe(16777215),emissiveIntensity:1.5,roughness:.2});e.registerEmissive(Le,{dayIntensity:.4,nightIntensity:1.7}),$(V,4.8,.9,.14,0,4,4.78,Le,!1),$(V,2.3,.03,4.2,0,.175,3.4,se,!1,!0);for(const W of[-1.25,1.25]){for(const ye of[1.8,3.3,4.7])be(V,.04,.09,.92,10,W,.62,ye,N);$(V,.05,.05,3,W,.96,3.25,se)}Ie(V,0,m);const _e=new ke({map:Xx(12,9,1.5),roughness:.16,metalness:.45});$(V,12,.04,9,0,.02,-5.2,_e,!1,!0),$(V,12.15,.05,.12,0,.03,-.7,St,!1),$(V,12.15,.05,.12,0,.03,-9.7,St,!1),$(V,.12,.05,9.1,-6,.03,-5.2,St,!1),$(V,.12,.05,9.1,6,.03,-5.2,St,!1),$(V,8.6,.45,3.8,0,.225,-12.1,u);for(const W of[-4.6,-4.1,4.1,4.6])be(V,.26,.28,ee-.1,14,W,ee/2,-13.7,se);$(V,1.6,1.08,7.6,-9.6,.54,-5.6,m),$(V,1.75,.08,7.8,-9.6,1.1,-5.6,F),$(V,.45,2.5,7,-12.5,1.4,-5.6,A);for(let W=-8.4;W<=-2.8;W+=.7)be(V,.055,.055,.28,10,-12.4,1.55,W,W%1.4===0?F:St),be(V,.055,.055,.28,10,-12.4,2.15,W,He);for(let W=-8.2;W<=-3;W+=1.3)Y(V,"bar_chair_round_01",.78,-8.3,0,W,Math.PI/2,{addShadow:!0});Y(V,"wine_bottles_01",.36,-9.6,1.14,-4.4,Math.PI/2,{addShadow:!1}),Y(V,"wine_bottles_01",.36,-9.6,1.14,-6.8,Math.PI/2,{addShadow:!1}),Y(V,"Chandelier_01",1.35,0,ee-.05,-5.2,0,{addShadow:!1,hangFromCeiling:!0});const fe=new Wt;fe.position.set(-5.8,0,-11.2),fe.rotation.y=.45;const Ze=new ke({color:723984,roughness:.08,metalness:.55});$(fe,1.6,.28,2.1,0,.78,0,Ze),$(fe,1.54,.06,.35,0,.72,1.08,ve);const ae=$(fe,1.56,.05,1.85,.25,1.16,-.05,Ze);ae.rotation.z=-.35,be(fe,.02,.02,.55,8,.65,1.05,.2,N);for(const[W,ye]of[[-.65,.85],[.65,.85],[0,-.85]])be(fe,.05,.035,.7,10,W,.35,ye,Ze);$(fe,.9,.08,.4,0,.48,1.65,Ve),$(fe,.82,.44,.34,0,.22,1.65,Ze),V.add(fe),Y(V,"ArmChair_01",.88,7.15,0,-2.5,Math.PI/2,{addShadow:!0}),Y(V,"ArmChair_01",.88,7.15,0,-5.5,Math.PI/2,{addShadow:!0}),Y(V,"coffee_table_round_01",.62,8.2,0,-2.5,0,{addShadow:!0}),Y(V,"coffee_table_round_01",.62,8.2,0,-5.5,.7,{addShadow:!0});for(const W of[-2.5,-5.5,-8.5])W<-6&&(be(V,.55,.55,.04,20,8,.78,W,m),be(V,.06,.14,.75,12,8,.375,W,N),Y(V,"dining_chair_02",.92,7.15,0,W,Math.PI/2,{addShadow:!0})),Y(V,"brass_candleholders",.26,8.2,W<-6?.8:.62,W,0,{addShadow:!1});const Se=new _n(16737970,24,30,1.3);Se.position.set(0,3.85,-6.5),V.add(Se),e.registerLight(Se,{dayIntensity:2,nightIntensity:24});const de=new Wt;de.position.y=ee,i.add(de),t[1]=de,Ie(de,1,_),$(de,pt-2.6,.95,.08,-1.2,.48,1.48,De,!1),$(de,pt-2.6,.06,.14,-1.2,.97,1.48,O),$(de,6.2,1.05,1.35,-.5,.525,-9.8,P),$(de,6.3,.06,1.45,-.5,1.08,-9.8,_),$(de,1.35,.52,.62,-1.2,1.36,-9.8,F),$(de,1.1,.18,.22,-1.2,1.25,-9.45,z),be(de,.1,.14,.48,12,.1,1.35,-9.8,O),$(de,1.6,.65,.72,1.5,1.42,-9.75,De,!1);for(let W=1;W<=2;W+=.35)be(de,.08,.1,.08,10,W,1.15,-9.75,P);const Ge=Ld("LE VELVET CAFÉ","#1c1410","#d99a64","SPECIALTY ESPRESSO  •  EIXAMPLE"),we=new ke({map:Ge,emissiveMap:Ge,emissive:new Pe(16768936),emissiveIntensity:1});e.registerEmissive(we,{dayIntensity:.3,nightIntensity:1.2}),$(de,4.4,.8,.1,-.5,3.1,-14.2,we,!1),Y(de,"hanging_picture_frame_01",1.35,-6.2,1.85,-14.25,0,{addShadow:!1,customArtMat:Fe}),Y(de,"hanging_picture_frame_01",1.35,5.2,1.85,-14.25,0,{addShadow:!1,customArtMat:Xe}),Y(de,"coffee_table_round_01",.72,-5.8,0,-4,.26,{addShadow:!0}),Y(de,"coffee_table_round_01",.72,6,0,-4.2,-.44,{addShadow:!0}),Y(de,"ArmChair_01",.88,-6.9,0,-4,Math.PI/2,{addShadow:!0}),Y(de,"ArmChair_01",.88,7.1,0,-4.2,-Math.PI/2,{addShadow:!0});for(const[W,ye]of[[-2,-3.5],[2.2,-3.8]])be(de,.56,.56,.04,22,W,.76,ye,_),be(de,.05,.18,.74,12,W,.37,ye,O),be(de,.05,.045,.08,10,W+.1,.82,ye,ve),Y(de,"brass_candleholders",.22,W-.15,.78,ye,.35,{addShadow:!1}),Y(de,"dining_chair_02",.9,W-.72,0,ye,Math.PI/2,{addShadow:!0}),Y(de,"dining_chair_02",.9,W+.72,0,ye,-Math.PI/2,{addShadow:!0});Y(de,"wine_bottles_01",.32,1.8,1.11,-9.8,0,{addShadow:!1}),Y(de,"Chandelier_01",1.15,-3.8,ee-.05,-4.5,0,{addShadow:!1,hangFromCeiling:!0}),Y(de,"Chandelier_01",1.15,3.8,ee-.05,-4.5,0,{addShadow:!1,hangFromCeiling:!0}),w(de,-11.5,0,-12.5,1.3),w(de,8.8,0,-12.5,1.2),w(de,-11.2,0,.2,1.1);const Je=new _n(16768944,20,28,1.3);Je.position.set(0,3.85,-5.5),de.add(Je),e.registerLight(Je,{dayIntensity:3,nightIntensity:20});const ne=new Wt;ne.position.y=2*ee,i.add(ne),t[2]=ne,Ie(ne,2,u),$(ne,.16,ee,9.8,-5,ee/2,-9.4,y),$(ne,.16,ee,3.6,-5,ee/2,-.3,y),$(ne,.16,ee-2.4,2,-5,2.4+(ee-2.4)/2,-3.2,y),$(ne,.16,ee,4.8,4.4,ee/2,-12,y),$(ne,.16,ee,3.4,4.4,ee/2,-.2,y);for(const W of[-4.75,4.15,-12.65])be(ne,.22,.22,4.75,12,W,2.38,1.15,se);Y(ne,"hanging_picture_frame_01",1.25,2.4,1.95,-14.25,0,{addShadow:!1,customArtMat:Fe}),Y(ne,"hanging_picture_frame_01",1.25,-2.8,2.25,-14.25,0,{addShadow:!1,customArtMat:Xe}),Y(ne,"ClassicConsole_01",.82,-.4,0,-13.15,0,{addShadow:!0});const ct=new Ue(new sn(.76,.76,.04,36),J);ct.rotation.x=Math.PI/2,ct.position.set(-.4,1.65,-13.58),ct.userData.maskId="mirror",ne.add(ct);const k=new Vo(new Oo(.74,36),{clipBias:.003,textureWidth:1024,textureHeight:1024,color:10134706});k.position.set(-.4,1.65,-13.55),k.userData.hideOnDepthPass=!0,ne.add(k);const pe=new Ue(new Ao(.79,.035,14,48),N);pe.position.set(-.4,1.65,-13.545),ne.add(pe);for(let W=0;W<12;W++){const ye=W/12*Math.PI*2,rt=new Ue(new Zi(.038,10,10),He);rt.position.set(-.4+Math.cos(ye)*.78,1.65+Math.sin(ye)*.78,-13.505),ne.add(rt)}const K=new on({color:14251782,roughness:.1,metalness:.1,transparent:!0,opacity:.85});be(ne,.04,.04,.14,12,.14,.89,-13.12,K),be(ne,.018,.018,.04,10,.14,.98,-13.12,N),be(ne,.03,.03,.11,12,.24,.88,-13.16,K),be(ne,.014,.014,.08,10,.02,.86,-13.06,N),be(ne,.012,.012,.04,10,.02,.91,-13.06,se),be(ne,.04,.038,.12,12,-.68,.88,-13.12,ve),Y(ne,"brass_candleholders",.24,-.92,.82,-13.14,.18,{addShadow:!1}),Y(ne,"Ottoman_01",.48,-.4,0,-12.05,-.26,{addShadow:!0}),$(ne,1.6,.06,.65,-3.5,.03,-13.2,A),be(ne,.02,.02,2,8,-4.2,1,-13.2,N),be(ne,.02,.02,2,8,-2.8,1,-13.2,N);const te=new Ue(new sn(.02,.02,1.45,8),N);te.rotation.z=Math.PI/2,te.position.set(-3.5,1.98,-13.2),ne.add(te);for(let W=-4;W<=-3;W+=.24)$(ne,.14,1.1,.38,W,1.38,-13.2,W%.48===0?X:Ve);const xe=new _n(16766883,10,14,1.4);xe.position.set(-.4,1.85,-11.4),ne.add(xe),e.registerLight(xe,{dayIntensity:2.5,nightIntensity:10});const me=new Ue(new sn(.95,.82,.66,28),m);me.scale.set(1.35,1,.72),me.position.set(-9,.33,-7.8),me.castShadow=!0,ne.add(me);const je=new Ue(new sn(.86,.86,.03,28),ht);je.scale.set(1.3,1,.68),je.position.set(-9,.665,-7.8),ne.add(je),n.push(je),be(ne,.025,.03,.95,10,-10.5,.48,-7.8,N),$(ne,.25,.04,.04,-10.38,.94,-7.8,N),$(ne,.08,2.4,2.8,-6.4,1.2,-10.6,vt,!1),$(ne,1.2,.42,.5,-11.2,.21,-10.8,v);for(let W=-11.55;W<=-10.85;W+=.35){const ye=new Ue(new sn(.11,.11,.34,12),ve);ye.rotation.x=Math.PI/2,ye.position.set(W,.52,-10.8),ne.add(ye)}R(ne,-7.8,.66,-7.1,!0),R(ne,-8.2,0,-6.6,!1),R(ne,-10.1,0,-6.9,!1),$(ne,1.35,.94,3.6,7.3,.47,-8,m),$(ne,1.45,.06,3.7,7.3,.96,-8,m),be(ne,.02,.025,.38,10,7.4,1.16,-7.4,N),be(ne,.055,.045,.09,12,6.8,1.03,-8.3,ve),Y(ne,"wine_bottles_01",.34,7.3,.99,-8.8,Math.PI/2,{addShadow:!1});for(const W of[-9,-8,-7])Y(ne,"modern_ceiling_lamp_01",1.45,7.3,ee-.05,W,0,{addShadow:!1,hangFromCeiling:!0}),Y(ne,"bar_chair_round_01",.72,6.1,0,W,-Math.PI/2,{addShadow:!0});$(ne,1.8,.06,1.1,7.3,.75,-2.5,A);for(const[W,ye]of[[6.5,-2.95],[8.1,-2.95],[6.5,-2.05],[8.1,-2.05]])be(ne,.03,.02,.72,8,W,.36,ye,O);Y(ne,"dining_chair_02",.92,6.8,0,-1.65,Math.PI,{addShadow:!0}),Y(ne,"dining_chair_02",.92,7.8,0,-1.65,Math.PI,{addShadow:!0}),Y(ne,"dining_chair_02",.92,6.8,0,-3.35,0,{addShadow:!0}),Y(ne,"dining_chair_02",.92,7.8,0,-3.35,0,{addShadow:!0});const _t=new _n(16765852,10,14,1.4);_t.position.set(7.1,2.55,-7.8),ne.add(_t),e.registerLight(_t,{dayIntensity:2,nightIntensity:10}),$(ne,3.9,.28,4.1,-.5,.14,-3.2,A),$(ne,3.6,.02,3.8,-.5,.29,-3.1,le,!1,!0),Y(ne,"GothicBed_01",1.52,-.5,.28,-3.35,0,{addShadow:!0});for(const W of[-1.85,.85])Y(ne,"ClassicNightstand_01",.58,W,.28,-4.15,0,{addShadow:!0}),Y(ne,"desk_lamp_arm_01",.44,W,.86,-4.15,W<0?-.44:.44,{addShadow:!1});Y(ne,"Chandelier_01",1.2,-.5,ee-.05,-3.2,0,{addShadow:!1,hangFromCeiling:!0});const Ct=new _n(16758896,9.5,12,1.4);Ct.position.set(-.5,1.85,-3.6),ne.add(Ct),e.registerLight(Ct,{dayIntensity:1.5,nightIntensity:9.5}),$(ne,pt-2.6,.95,.08,-1.2,.48,1.48,De,!1),$(ne,pt-2.6,.06,.14,-1.2,.97,1.48,O),Y(ne,"coffee_table_round_01",.65,2.5,0,.65,0,{addShadow:!0}),Y(ne,"ArmChair_01",.88,-3.3,0,-1.5,-.66,{addShadow:!0});const Ae=new Wt;Ae.position.y=3*ee,i.add(Ae),t[3]=Ae,Ie(Ae,3,u),$(Ae,pt-2.6,.95,.08,-1.2,.48,1.48,De,!1),$(Ae,.18,ee,9,.2,ee/2,-9.8,y);for(const W of[-12.6,-.1,9.6])be(Ae,.22,.22,4.75,12,W,2.38,1.15,X);Y(Ae,"hanging_picture_frame_01",1.35,-4.8,2.25,-14.25,0,{addShadow:!1,customArtMat:Xe}),Y(Ae,"hanging_picture_frame_01",1.35,4.8,2.45,-14.25,0,{addShadow:!1,customArtMat:Fe}),$(Ae,3.2,.08,1.35,-4.8,.8,-10.5,A);for(const W of[-6.2,-3.4])$(Ae,.08,.78,1.1,W,.39,-10.5,O);be(Ae,.02,.025,.65,8,-4.2,1.15,-10.4,O);const en=new Ue(new sn(.055,.055,.22,14),O);en.rotation.x=Math.PI/3,en.position.set(-4.5,1.42,-10.1),Ae.add(en),$(Ae,.32,.08,.2,-5.5,.88,-10.3,O),$(Ae,.05,.03,.02,-5.5,.88,-10.19,St,!1),be(Ae,.02,.06,.32,10,-3.7,1,-10.5,N),Y(Ae,"desk_lamp_arm_01",.48,-6,.84,-10.55,-.78,{addShadow:!1}),$(Ae,.55,3.8,6.4,-12.4,1.9,-7.2,A);for(let W=.42;W<=3.12;W+=.68)for(let ye=-9.6;ye<=-4.8;ye+=1.55)Y(Ae,"book_encyclopedia_set_01",.34,-12.35,W,ye,Math.PI/2,{addShadow:!1});Y(Ae,"Sofa_01",.88,-5.5,0,-4.2,-1.48,{addShadow:!0}),Y(Ae,"modern_ceiling_lamp_01",1.35,-4.8,ee-.05,-8.5,0,{addShadow:!1,hangFromCeiling:!0});const fn=new _n(16758892,15,18,1.3);fn.position.set(-4.8,2.95,-9.2),Ae.add(fn),e.registerLight(fn,{dayIntensity:2,nightIntensity:11}),$(Ae,2.4,1.6,.22,4.8,.8,-12.4,X),$(Ae,2.2,.52,2.2,4.8,.26,-11.2,Ve),$(Ae,2.15,.14,1.8,4.8,.56,-11,le),$(Ae,1.8,1.5,.08,8.2,1.55,-14.2,A);const Cs=new ke({color:8266446,roughness:.5});for(let W=7.6;W<=8.8;W+=.4){const ye=new Ue(new Ao(.14,.03,10,20),W>8.1?Ve:Cs);ye.position.set(W,1.6,-14.12),Ae.add(ye)}be(Ae,.025,.04,1.05,10,4.8,.525,-8.8,O),$(Ae,.28,.14,.12,4.8,1.12,-8.8,ve),Y(Ae,"modern_ceiling_lamp_01",1.35,4.8,ee-.05,-8.5,0,{addShadow:!1,hangFromCeiling:!0}),Y(Ae,"brass_candleholders",.28,6.4,0,-9.5,.44,{addShadow:!1}),R(Ae,6.4,0,-9.5,!0);const et=new Wt;et.position.y=4*ee,i.add(et),t[4]=et,$(et,pt,.24,kt,0,-.12,Ut,v,!1,!0),$(et,pt,1.05,.08,0,.525,1.45,De,!1),$(et,pt,1.05,.08,0,.525,-14.45,De,!1),$(et,.08,1.05,kt,-12.95,.525,Ut,De,!1),$(et,.08,1.05,kt,12.95,.525,Ut,De,!1),$(et,7,.28,4.2,-3,.14,-6.8,m),$(et,7.4,.66,.32,-3,.33,-8.95,m),$(et,7.4,.66,.32,-3,.33,-4.65,m),$(et,.32,.66,4.6,-6.55,.33,-6.8,m),$(et,.32,.66,4.6,.55,.33,-6.8,m),$(et,1.3,.22,.7,-5.65,.34,-5.35,m);const ni=$(et,6.8,.03,4,-3,.59,-6.8,ht,!1,!0);n.push(ni);const Ui=new _n(2282478,18,18,1.35);Ui.position.set(-3,.85,-6.8),et.add(Ui),e.registerLight(Ui,{dayIntensity:2.5,nightIntensity:18});const ir=new _n(16766629,14,16,1.4);ir.position.set(-1.6,2.85,-.9),et.add(ir),e.registerLight(ir,{dayIntensity:2,nightIntensity:14});for(const W of[-8.2,-5.6]){$(et,2.1,.24,.95,-9,.12,W,v),$(et,1.5,.12,.88,-8.75,.28,W,ve);const ye=$(et,.62,.12,.88,-9.75,.44,W,ve);ye.rotation.z=.48}for(const[W,ye]of[[2.2,-11.5],[8.8,-11.5],[2.2,-6.8],[8.8,-6.8]])$(et,.18,3.6,.18,W,1.8,ye,O);for(let W=-11.4;W<=-6.8;W+=.48)$(et,6.8,.08,.18,5.5,3.6,W,O);$(et,4.6,1.08,1.15,5.5,.54,-9.8,F),$(et,4.75,.06,1.25,5.5,1.1,-9.8,m),$(et,4.4,2.1,.45,5.5,1.1,-11.4,A);for(let W=3.6;W<=7.4;W+=.55)be(et,.05,.05,.28,10,W,1.45,-11.35,W%1.1===0?He:F);Y(et,"wine_bottles_01",.34,4.6,1.13,-9.8,0,{addShadow:!1}),Y(et,"brass_candleholders",.26,6.4,1.13,-9.8,.26,{addShadow:!1});for(let W=3.8;W<=7.2;W+=1.1)Y(et,"bar_chair_round_01",.78,W,0,-8.8,Math.PI,{addShadow:!0});const rr=new _n(16758635,11,15,1.4);rr.position.set(5.5,2.85,-9.2),et.add(rr),e.registerLight(rr,{dayIntensity:2,nightIntensity:11});for(const[W,ye]of[[-11.8,-13],[-11.8,-1],[11.5,-13],[11.5,-1]]){const rt=ye<-6;Y(et,rt?"potted_plant_02":"potted_plant_04",rt?2.15:1.65,W,0,ye,W*.35,{addShadow:!0})}return Y(et,"shrub_02",1.05,-7.6,0,-10.4,.44,{addShadow:!0}),Y(et,"shrub_02",1.05,1.4,0,-10.4,-.52,{addShadow:!0}),w(ne,-11.6,0,-5.8,1),{floorGroups:t,waterMeshes:n,frontGlassPanels:r,mirrorReflector:k}}class Qx{constructor(e){this.scene=e,this.root=null,this.mixer=null,this.actions={},this.currentActionName=null,this.loaded=!1}async load(e="./models/alina.glb"){const n=await new zu().loadAsync(e);this.root=n.scene,this.root.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0,a.userData.maskId="alina",a.material&&(a.material.envMapIntensity=.75,a.material.needsUpdate=!0))}),this.mixer=new Ep(this.root);for(const a of n.animations||[]){const l=this.mixer.clipAction(a);a.name==="Laying"?(l.setLoop(du),l.clampWhenFinished=!0):l.setLoop(uu),this.actions[a.name]=l}this.scene.add(this.root);const r=Gu(),s=new Yn({map:r,transparent:!0,opacity:.72,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}),o=new Ue(new Fi(1.15,1.15),s);return o.rotation.x=-Math.PI/2,o.position.y=.015,o.userData.hideOnDepthPass=!0,this.root.add(o),this.loaded=!0,this.playAnimation("Idle"),Object.keys(this.actions)}playAnimation(e,t=.35){if(!this.loaded)return;const n=this.actions[e]||this.actions.Idle||Object.values(this.actions)[0];if(!n)return;const r=this.currentActionName?this.actions[this.currentActionName]:null;r&&r!==n?(n.reset(),n.play(),r.crossFadeTo(n,t,!0)):(n.reset(),n.play()),this.currentActionName=n.getClip().name}placeAtSpot(e){!this.root||!e||(this.root.position.set(e.alinaPos.x,e.alinaPos.y,e.alinaPos.z),this.root.rotation.set(0,e.alinaRotY||0,0),e.defaultAnim&&this.playAnimation(e.defaultAnim,.3))}update(e){this.mixer&&this.mixer.update(e)}}const Nd={type:"change"},rc={type:"start"},Wu={type:"end"},ro=new ws,kd=new ui,ev=Math.cos(70*So.DEG2RAD),Ft=new D,cn=2*Math.PI,gt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ca=1e-6;class tv extends Tp{constructor(e,t=null){super(e,t),this.state=gt.NONE,this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ir.ROTATE,MIDDLE:Ir.DOLLY,RIGHT:Ir.PAN},this.touches={ONE:Tr.ROTATE,TWO:Tr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new xn,this._lastTargetPosition=new D,this._quat=new xn().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new id,this._sphericalDelta=new id,this._scale=1,this._panOffset=new D,this._rotateStart=new Ce,this._rotateEnd=new Ce,this._rotateDelta=new Ce,this._panStart=new Ce,this._panEnd=new Ce,this._panDelta=new Ce,this._dollyStart=new Ce,this._dollyEnd=new Ce,this._dollyDelta=new Ce,this._dollyDirection=new D,this._mouse=new Ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=iv.bind(this),this._onPointerDown=nv.bind(this),this._onPointerUp=rv.bind(this),this._onContextMenu=uv.bind(this),this._onMouseWheel=av.bind(this),this._onKeyDown=lv.bind(this),this._onTouchStart=cv.bind(this),this._onTouchMove=dv.bind(this),this._onMouseDown=sv.bind(this),this._onMouseMove=ov.bind(this),this._interceptControlDown=hv.bind(this),this._interceptControlUp=fv.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Nd),this.update(),this.state=gt.NONE}update(e=null){const t=this.object.position;Ft.copy(t).sub(this.target),Ft.applyQuaternion(this._quat),this._spherical.setFromVector3(Ft),this.autoRotate&&this.state===gt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=cn:n>Math.PI&&(n-=cn),r<-Math.PI?r+=cn:r>Math.PI&&(r-=cn),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Ft.setFromSpherical(this._spherical),Ft.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ft),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ft.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ft.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ro.origin.copy(this.object.position),ro.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ro.direction))<ev?this.object.lookAt(this.target):(kd.setFromNormalAndCoplanarPoint(this.object.up,this.target),ro.intersectPlane(kd,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Ca||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ca||this._lastTargetPosition.distanceToSquared(this.target)>Ca?(this.dispatchEvent(Nd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?cn/60*this.autoRotateSpeed*e:cn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ft.setFromMatrixColumn(t,0),Ft.multiplyScalar(-e),this._panOffset.add(Ft)}_panUp(e,t){this.screenSpacePanning===!0?Ft.setFromMatrixColumn(t,1):(Ft.setFromMatrixColumn(t,0),Ft.crossVectors(this.object.up,Ft)),Ft.multiplyScalar(e),this._panOffset.add(Ft)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Ft.copy(r).sub(this.target);let s=Ft.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,o=n.width,a=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(cn*this._rotateDelta.x/t.clientHeight),this._rotateUp(cn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(cn*this._rotateDelta.x/t.clientHeight),this._rotateUp(cn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ce,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function nv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function iv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function rv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Wu),this.state=gt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function sv(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ir.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=gt.DOLLY;break;case Ir.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=gt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=gt.ROTATE}break;case Ir.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=gt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=gt.PAN}break;default:this.state=gt.NONE}this.state!==gt.NONE&&this.dispatchEvent(rc)}function ov(i){switch(this.state){case gt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case gt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case gt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function av(i){this.enabled===!1||this.enableZoom===!1||this.state!==gt.NONE||(i.preventDefault(),this.dispatchEvent(rc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Wu))}function lv(i){this.enabled!==!1&&this._handleKeyDown(i)}function cv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Tr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=gt.TOUCH_ROTATE;break;case Tr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=gt.TOUCH_PAN;break;default:this.state=gt.NONE}break;case 2:switch(this.touches.TWO){case Tr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=gt.TOUCH_DOLLY_PAN;break;case Tr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=gt.TOUCH_DOLLY_ROTATE;break;default:this.state=gt.NONE}break;default:this.state=gt.NONE}this.state!==gt.NONE&&this.dispatchEvent(rc)}function dv(i){switch(this._trackPointer(i),this.state){case gt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case gt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case gt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case gt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=gt.NONE}}function uv(i){this.enabled!==!1&&i.preventDefault()}function hv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function fv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const so=`
  #include <common>
  #include <skinning_pars_vertex>
  varying vec2 vUv;
  varying float vViewZ;
  void main() {
    vUv = uv;
    #include <skinbase_vertex>
    #include <begin_vertex>
    #include <skinning_vertex>
    vec4 mvPos = modelViewMatrix * vec4(transformed, 1.0);
    vViewZ = -mvPos.z;
    gl_Position = projectionMatrix * mvPos;
  }
`;class pv{constructor(e,t,n,r){this.container=e,this.scene=t,this.renderer=n,this.lighting=r;const s=e.clientWidth||720,o=e.clientHeight||480;this.camera=new Jt(42,s/o,.1,320),this.camera.position.set(.25,11.3,-8.1),this.controls=new tv(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.06,this.controls.maxPolarAngle=Math.PI/2-.01,this.controls.minDistance=.8,this.controls.maxDistance=110,this.controls.target.set(-.4,11.18,-10.8),this.controls.update(),this.isTransitioning=!1,this.targetPos=this.camera.position.clone(),this.targetLook=this.controls.target.clone(),this.controls.addEventListener("start",()=>{this.isTransitioning=!1}),this.activePass="beauty",this.isDepthPass=!1,this.lockedDepthBounds=null,this.depthMaterial=this._createSkinnedLinearDepthMaterial(),this.metricDepthMaterial=this._createMetricDepthMaterial(0),this.metricMirrorDepthMaterial=this._createMetricDepthMaterial(1),this.normalsMaterial=this._createSkinnedNormalsMaterial(),this.maskMaterials=this._createSemanticMaskMaterials(),this._bokeh=this._createOpticalBokehPipeline(),this._activeMaskRestore=null,this._bindResize()}_createSkinnedLinearDepthMaterial(){return new Zt({uniforms:{uNear:{value:.6},uFar:{value:24}},vertexShader:so,fragmentShader:`
        uniform float uNear;
        uniform float uFar;
        varying float vViewZ;
        void main() {
          float d = clamp((vViewZ - uNear) / max(uFar - uNear, 0.001), 0.0, 1.0);
          float val = 1.0 - pow(d, 0.82);
          gl_FragColor = vec4(vec3(val), 1.0);
        }
      `})}_createMetricDepthMaterial(e=0){return new Zt({uniforms:{uIsMirror:{value:e}},vertexShader:so,fragmentShader:`
        uniform float uIsMirror;
        varying float vViewZ;
        void main() {
          float zNorm = clamp(vViewZ / 32.0, 0.0, 1.0);
          float hi = floor(zNorm * 255.0) / 255.0;
          float lo = fract(zNorm * 255.0);
          gl_FragColor = vec4(hi, lo, uIsMirror, 1.0);
        }
      `})}_createSkinnedNormalsMaterial(){return new Zt({vertexShader:`
        #include <common>
        #include <skinning_pars_vertex>
        varying vec3 vNormalVS;
        void main() {
          #include <beginnormal_vertex>
          #include <skinbase_vertex>
          #include <skinnormal_vertex>
          #include <defaultnormal_vertex>
          vNormalVS = normalize(transformedNormal);
          #include <begin_vertex>
          #include <skinning_vertex>
          gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
        }
      `,fragmentShader:`
        varying vec3 vNormalVS;
        void main() {
          vec3 n = normalize(vNormalVS);
          gl_FragColor = vec4(n * 0.5 + 0.5, 1.0);
        }
      `})}_createFlatMaskMat(e){const t=new Pe;return t.setStyle(e,On),new Zt({uniforms:{uColor:{value:new D(t.r,t.g,t.b)}},side:Rn,vertexShader:so,fragmentShader:`
        uniform vec3 uColor;
        void main() {
          gl_FragColor = vec4(uColor, 1.0);
        }
      `})}_createAlinaAtlasMaskMaterial(){return new Zt({uniforms:{uDiffuse:{value:null},uHasMap:{value:0}},vertexShader:so,fragmentShader:`
        uniform sampler2D uDiffuse;
        uniform float uHasMap;
        varying vec2 vUv;
        void main() {
          const vec3 COL_SKIN     = vec3(1.000, 0.231, 0.188); // #FF3B30
          const vec3 COL_EYES     = vec3(0.204, 0.780, 0.349); // #34C759
          const vec3 COL_HAIR     = vec3(1.000, 0.800, 0.000); // #FFCC00
          const vec3 COL_WARDROBE = vec3(0.000, 0.478, 1.000); // #007AFF

          if (uHasMap < 0.5) {
            gl_FragColor = vec4(COL_SKIN, 1.0);
            return;
          }

          float xx = vUv.x * 2048.0;
          float yy = vUv.y * 2048.0;

          // Convertir lectura lineal de textura sRGB a valores aproximados 0..255 del atlas
          vec3 raw = texture2D(uDiffuse, vUv).rgb;
          vec3 srgb = pow(clamp(raw, 0.0, 1.0), vec3(1.0 / 2.2)) * 255.0;
          float r = srgb.r, g = srgb.g, b = srgb.b;
          float lum = 0.299 * r + 0.587 * g + 0.114 * b;

          bool inEyeball = (xx >= 565.0 && xx <= 755.0 && yy >= 660.0 && yy <= 785.0);
          if (inEyeball) {
            gl_FragColor = vec4(COL_EYES, 1.0);
            return;
          }

          bool isSkinTone = (r > 115.0) && (g > 65.0) && (b > 45.0) && ((r - b) > 14.0) && (r > g);
          bool inFaceInner = (xx >= 290.0 && xx <= 570.0 && yy >= 170.0 && yy <= 430.0);
          bool inEars = ((xx < 120.0 && yy < 155.0) || (xx > 730.0 && xx < 880.0 && yy < 155.0));
          bool inSkinIsland = (xx < 880.0 && yy < 875.0 && isSkinTone);

          bool inBun = (xx >= 945.0 && xx <= 1165.0 && yy < 175.0 && lum > 6.0);
          bool inCrown = (xx < 945.0 && yy < 445.0 && !inFaceInner && !inEars && !isSkinTone && lum > 14.0);
          if (inBun || inCrown) {
            gl_FragColor = vec4(COL_HAIR, 1.0);
            return;
          }

          if (inFaceInner || inEars || inSkinIsland) {
            gl_FragColor = vec4(COL_SKIN, 1.0);
            return;
          }

          gl_FragColor = vec4(COL_WARDROBE, 1.0);
        }
      `})}_createSemanticMaskMaterials(){return{environment:this._createFlatMaskMat("#000000"),skin:this._createFlatMaskMat("#FF3B30"),eyes:this._createFlatMaskMat("#34C759"),hair:this._createFlatMaskMat("#FFCC00"),wardrobe:this._createFlatMaskMat("#007AFF"),foreground:this._createFlatMaskMat("#AF52DE"),mirror:this._createFlatMaskMat("#00C7BE"),alinaAtlas:this._createAlinaAtlasMaskMaterial()}}_createOpticalBokehPipeline(){const e=new jl,t=new zo(-1,1,1,-1,0,1),n=new Zt({depthTest:!1,depthWrite:!1,uniforms:{tBeauty:{value:null},tMetricDepth:{value:null},uResolution:{value:new Ce(1080,1920)},uFocalMm:{value:50},uFStop:{value:1.8},uFocusDistM:{value:2.5},uSensorHeightMm:{value:36}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D tBeauty;
        uniform sampler2D tMetricDepth;
        uniform vec2 uResolution;
        uniform float uFocalMm;
        uniform float uFStop;
        uniform float uFocusDistM;
        uniform float uSensorHeightMm;
        varying vec2 vUv;

        float decodeDepthM(vec4 dm) {
          return (dm.r + dm.g / 255.0) * 32.0;
        }

        float computeCoCPx(float zM) {
          float f = uFocalMm;
          float N = max(1.0, uFStop);
          float s1 = max(0.25, uFocusDistM) * 1000.0;
          float z = max(0.2, zM) * 1000.0;
          float cocMm = abs((f * f) / (N * max(s1 - f, 1.0)) * ((z - s1) / z));
          return clamp((cocMm / uSensorHeightMm) * uResolution.y, 0.0, 30.0);
        }

        void main() {
          vec4 baseCol = texture2D(tBeauty, vUv);
          vec4 centerDm = texture2D(tMetricDepth, vUv);

          // Proteger superficie activa del espejo planar en ots_mirror para preservar reflejo nítido
          if (centerDm.b > 0.5) {
            gl_FragColor = baseCol;
            return;
          }

          float centerZ = decodeDepthM(centerDm);
          float centerCoC = computeCoCPx(centerZ);

          vec2 texel = 1.0 / uResolution;
          vec3 acc = baseCol.rgb;
          float totalW = 1.0;

          // Espiral de ángulo áureo de 28 muestras (bokeh circular cinematográfico con highlight boost)
          const int SAMPLES = 28;
          const float GOLDEN_ANGLE = 2.39996323;

          for (int i = 1; i <= SAMPLES; i++) {
            float fi = float(i);
            float rNorm = sqrt(fi / float(SAMPLES));
            float theta = fi * GOLDEN_ANGLE;
            vec2 dir = vec2(cos(theta), sin(theta));

            // Radio máximo combina CoC propio + posible desenfoque de objetos cercanos (foreground bokeh)
            float searchRadiusPx = max(centerCoC, 22.0) * rNorm;
            vec2 sampleUv = clamp(vUv + dir * texel * searchRadiusPx, vec2(0.001), vec2(0.999));

            vec4 sDm = texture2D(tMetricDepth, sampleUv);
            float sZ = decodeDepthM(sDm);
            float sCoC = sDm.b > 0.5 ? 0.0 : computeCoCPx(sZ);

            // Evitar que un objeto nítido en primer plano sangre sobre el fondo desenfocado,
            // pero permitir que un prop desenfocado (sZ < centerZ y sCoC grande) envuelva suavemente el borde.
            float inFront = step(sZ, centerZ + 0.06);
            float allowBg = smoothstep(0.0, 2.5, centerCoC) * smoothstep(0.0, 2.5, sCoC);
            float reach = step(searchRadiusPx, max(sCoC, centerCoC * (1.0 - inFront)) + 0.75);
            float w = reach * max(inFront, allowBg);

            vec3 sCol = texture2D(tBeauty, sampleUv).rgb;
            float luma = dot(sCol, vec3(0.2126, 0.7152, 0.0722));
            float bokehHighlight = 1.0 + smoothstep(0.72, 1.0, luma) * 0.65;
            w *= bokehHighlight;

            acc += sCol * w;
            totalW += w;
          }

          gl_FragColor = vec4(acc / max(totalW, 0.001), 1.0);
        }
      `}),r=new Ue(new Fi(2,2),n);return e.add(r),{postScene:e,postCam:t,mat:n}}_applySemanticMasksToScene(){const e=[];return this.scene.traverse(t=>{var r;if(!t.isMesh)return;e.push([t,t.material]);const n=(r=t.userData)==null?void 0:r.maskId;if(n==="mirror"){t.material=this.maskMaterials.mirror;return}if(n==="foreground"){t.material=this.maskMaterials.foreground;return}if(n==="alina"){const s=Array.isArray(t.material)?t.material[0]:t.material,o=((s==null?void 0:s.name)||"").toLowerCase();o.includes("eye")||o.includes("cornea")||o.includes("iris")?t.material=this.maskMaterials.eyes:o.includes("hair")||o.includes("brow")||o.includes("lash")?t.material=this.maskMaterials.hair:o.includes("cloth")||o.includes("wardrobe")||o.includes("outfit")||o.includes("dress")?t.material=this.maskMaterials.wardrobe:o.includes("skin")||o.includes("head")||o.includes("body")?t.material=this.maskMaterials.skin:(this.maskMaterials.alinaAtlas.uniforms.uDiffuse.value=(s==null?void 0:s.map)||null,this.maskMaterials.alinaAtlas.uniforms.uHasMap.value=s!=null&&s.map?1:0,t.material=this.maskMaterials.alinaAtlas);return}t.material=this.maskMaterials.environment}),e}_restoreSceneMaterials(e){if(e)for(const[t,n]of e)t.material=n}_bindResize(){this.onWindowResize=()=>{if(!this.container||!this.renderer||!this.camera)return;const e=Math.max(1,this.container.clientWidth),t=Math.max(1,this.container.clientHeight);this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1)},window.addEventListener("resize",this.onWindowResize),typeof ResizeObserver<"u"&&(this.resizeObserver=new ResizeObserver(()=>this.onWindowResize()),this.resizeObserver.observe(this.container))}flyTo(e,t){this.targetPos.set(e.x,e.y,e.z),this.targetLook.set(t.x,t.y,t.z),this.isTransitioning=!0}updateDepthRangeForFocus(e,t=null){if(t&&t.uNear!=null&&t.uFar!=null){this.depthMaterial.uniforms.uNear.value=t.uNear,this.depthMaterial.uniforms.uFar.value=t.uFar;return}const n=this.camera.position.distanceTo(e);this.depthMaterial.uniforms.uNear.value=Math.max(.4,n*.28),this.depthMaterial.uniforms.uFar.value=Math.max(n+8,n*2.8)}setRenderPass(e="beauty",t=null,n=null){this._activeMaskRestore&&(this._restoreSceneMaterials(this._activeMaskRestore),this._activeMaskRestore=null),this.scene.overrideMaterial=null,this.activePass=e,this.isDepthPass=e==="depth",this.lockedDepthBounds=n;const r=e!=="beauty";this.scene.traverse(s=>{var o;(o=s.userData)!=null&&o.hideOnDepthPass&&(s.visible=!r)}),e==="depth"?((t||n)&&this.updateDepthRangeForFocus(t||this.controls.target,n),this.scene.overrideMaterial=this.depthMaterial,this.lighting.setDepthFogDisabled(!0),this.renderer.setClearColor(0,1)):e==="normals"?(this.scene.overrideMaterial=this.normalsMaterial,this.lighting.setDepthFogDisabled(!0),this.renderer.setClearColor(8421631,1)):e==="mask"?(this._activeMaskRestore=this._applySemanticMasksToScene(),this.lighting.setDepthFogDisabled(!0),this.renderer.setClearColor(0,1)):this.lighting.setDepthFogDisabled(!1)}setDepthPass(e,t=null){this.setRenderPass(e?"depth":"beauty",t)}update(){this.isTransitioning&&(this.camera.position.lerp(this.targetPos,.09),this.controls.target.lerp(this.targetLook,.09),this.camera.position.distanceTo(this.targetPos)<.03&&this.controls.target.distanceTo(this.targetLook)<.03&&(this.camera.position.copy(this.targetPos),this.controls.target.copy(this.targetLook),this.isTransitioning=!1)),this.controls.update()}render(){this.activePass==="depth"&&this.updateDepthRangeForFocus(this.controls.target,this.lockedDepthBounds),this.renderer.render(this.scene,this.camera)}renderVertical916DataURL(e=1080,t=1920,n=null,r={}){const s=n===!0?"depth":n===!1||n===null?n===!1?"beauty":this.activePass:n,o=this.scene.overrideMaterial,a=this.scene.fog,l=this.scene.background,c=this.lighting.depthFogDisabled,d=this.renderer.getSize(new Ce),u=this.renderer.getPixelRatio();this._activeMaskRestore&&(this._restoreSceneMaterials(this._activeMaskRestore),this._activeMaskRestore=null);const f=s!=="beauty",m=[];this.scene.traverse(p=>{var M;(M=p.userData)!=null&&M.hideOnDepthPass&&(m.push([p,p.visible]),p.visible=!f)});const g=this.camera.clone();g.aspect=e/t,g.updateProjectionMatrix(),this.renderer.setPixelRatio(1),this.renderer.setSize(e,t,!1);let _=null;s==="depth"?(this.updateDepthRangeForFocus(this.controls.target,r.depthBoundsM||null),this.scene.overrideMaterial=this.depthMaterial,this.lighting.setDepthFogDisabled(!0),this.scene.background=null,this.renderer.setClearColor(0,1),this.renderer.render(this.scene,g)):s==="normals"?(this.scene.overrideMaterial=this.normalsMaterial,this.lighting.setDepthFogDisabled(!0),this.scene.background=null,this.renderer.setClearColor(8421631,1),this.renderer.render(this.scene,g)):s==="mask"?(this.scene.overrideMaterial=null,_=this._applySemanticMasksToScene(),this.lighting.setDepthFogDisabled(!0),this.scene.background=null,this.renderer.setClearColor(0,1),this.renderer.render(this.scene,g),this._restoreSceneMaterials(_)):(this.scene.overrideMaterial=null,this.lighting.setDepthFogDisabled(!1),this.renderer.render(this.scene,g),r.dof&&r.dof.enabled&&this._applyOpticalBokehOnCanvas(e,t,g,r.dof));const h=this.renderer.domElement.toDataURL("image/png");for(const[p,M]of m)p.visible=M;return this.renderer.setPixelRatio(u),this.renderer.setSize(d.x,d.y,!1),this.scene.overrideMaterial=o,this.lighting.setDepthFogDisabled(c),this.scene.fog=a,this.scene.background=l,this.activePass==="mask"&&(this._activeMaskRestore=this._applySemanticMasksToScene()),this.renderer.render(this.scene,this.camera),h}_applyOpticalBokehOnCanvas(e,t,n,r){const s=document.createElement("canvas");s.width=e,s.height=t,s.getContext("2d").drawImage(this.renderer.domElement,0,0);const o=new Zl(s);o.minFilter=Lt,o.magFilter=Lt,o.colorSpace=On;const a=new xi(e,t,{minFilter:jt,magFilter:jt,type:Zn,depthBuffer:!0}),l=this.scene.background,c=this.scene.fog,d=[],u=[];this.scene.traverse(_=>{var h,p;(h=_.userData)!=null&&h.hideOnDepthPass?(u.push([_,_.visible]),_.visible=!1):_.isMesh&&(d.push([_,_.material]),_.material=((p=_.userData)==null?void 0:p.maskId)==="mirror"?this.metricMirrorDepthMaterial:this.metricDepthMaterial)}),this.lighting.setDepthFogDisabled(!0),this.scene.background=null,this.renderer.setRenderTarget(a),this.renderer.setClearColor(16777215,1),this.renderer.clear(),this.renderer.render(this.scene,n),this.renderer.setRenderTarget(null);for(const[_,h]of d)_.material=h;for(const[_,h]of u)_.visible=h;this.scene.background=l,this.scene.fog=c,this.lighting.setDepthFogDisabled(!1);const f=this._bokeh.mat.uniforms;f.tBeauty.value=o,f.tMetricDepth.value=a.texture,f.uResolution.value.set(e,t),f.uFocalMm.value=r.focalLengthMm||50,f.uFStop.value=r.apertureFStop||1.8,f.uFocusDistM.value=r.focusDistM||r.startFocusDistM||2.5,f.uSensorHeightMm.value=r.sensorHeightMm||36;const m=this.renderer.outputColorSpace,g=this.renderer.toneMapping;this.renderer.outputColorSpace=$t,this.renderer.toneMapping=pi,this.renderer.render(this._bokeh.postScene,this._bokeh.postCam),this.renderer.outputColorSpace=m,this.renderer.toneMapping=g,o.dispose(),a.dispose()}renderOpenPose916(e=1080,t=1920,n=null){const r=this.camera.clone();r.aspect=e/t,r.updateProjectionMatrix(),r.updateMatrixWorld(!0);const s=document.createElement("canvas");s.width=e,s.height=t;const o=s.getContext("2d");if(o.fillStyle="#000000",o.fillRect(0,0,e,t),!n)return{dataUrl:s.toDataURL("image/png"),keypoints:{}};n.updateMatrixWorld(!0);const a=new Map;n.traverse(m=>{if(m.isBone){const g=m.name.replace(/^mixamorig:?/i,"");a.set(g,m)}});const l=(m,g=null)=>{for(const _ of m){const h=a.get(_);if(h)return g?g.clone().applyMatrix4(h.matrixWorld):new D().setFromMatrixPosition(h.matrixWorld)}return null},c={nose:l(["Head"],new D(0,.08,.11)),leftEye:l(["LeftEye"])||l(["Head"],new D(.032,.105,.095)),rightEye:l(["RightEye"])||l(["Head"],new D(-.032,.105,.095)),leftEar:l(["Head"],new D(.075,.095,.01)),rightEar:l(["Head"],new D(-.075,.095,.01)),neck:l(["Neck","Spine2"]),rShoulder:l(["RightArm","RightShoulder"]),rElbow:l(["RightForeArm"]),rWrist:l(["RightHand"]),lShoulder:l(["LeftArm","LeftShoulder"]),lElbow:l(["LeftForeArm"]),lWrist:l(["LeftHand"]),midHip:l(["Hips"]),rHip:l(["RightUpLeg"]),rKnee:l(["RightLeg"]),rAnkle:l(["RightFoot"]),lHip:l(["LeftUpLeg"]),lKnee:l(["LeftLeg"]),lAnkle:l(["LeftFoot"])},d={};for(const[m,g]of Object.entries(c)){if(!g)continue;const _=g.clone().project(r),h=_.z>=-1&&_.z<=1,p=(_.x*.5+.5)*e,M=(-_.y*.5+.5)*t,T=h&&p>=-120&&p<=e+120&&M>=-120&&M<=t+120;d[m]={x:+p.toFixed(1),y:+M.toFixed(1),normX:+(p/e).toFixed(4),normY:+(M/t).toFixed(4),confidence:T?1:0}}const u=[["neck","rShoulder","#ff0000"],["neck","lShoulder","#ff5500"],["rShoulder","rElbow","#ffaa00"],["rElbow","rWrist","#ffff00"],["lShoulder","lElbow","#aaff00"],["lElbow","lWrist","#55ff00"],["neck","midHip","#00ff00"],["midHip","rHip","#00ff55"],["rHip","rKnee","#00ffaa"],["rKnee","rAnkle","#00ffff"],["midHip","lHip","#00aaff"],["lHip","lKnee","#0055ff"],["lKnee","lAnkle","#0000ff"],["neck","nose","#5500ff"],["nose","rEye","#aa00ff"],["rEye","rEar","#ff00ff"],["nose","lEye","#ff00aa"],["lEye","lEar","#ff0055"]];d.rEye=d.rightEye,d.lEye=d.leftEye,d.rEar=d.rightEar,d.lEar=d.leftEar,o.lineCap="round",o.lineWidth=Math.max(6,Math.round(e*.0075));for(const[m,g,_]of u){const h=d[m],p=d[g];!h||!p||h.confidence<.5||p.confidence<.5||(o.strokeStyle=_,o.beginPath(),o.moveTo(h.x,h.y),o.lineTo(p.x,p.y),o.stroke())}const f=Math.max(5,Math.round(e*.006));for(const[m,g]of Object.entries(d))["rEye","lEye","rEar","lEar"].includes(m)||!g||g.confidence<.5||(o.fillStyle="#ffffff",o.beginPath(),o.arc(g.x,g.y,f,0,Math.PI*2),o.fill());return delete d.rEye,delete d.lEye,delete d.rEar,delete d.lEar,{dataUrl:s.toDataURL("image/png"),keypoints:d}}getCameraTelemetry(){return{position:{x:Number(this.camera.position.x.toFixed(3)),y:Number(this.camera.position.y.toFixed(3)),z:Number(this.camera.position.z.toFixed(3))},target:{x:Number(this.controls.target.x.toFixed(3)),y:Number(this.controls.target.y.toFixed(3)),z:Number(this.controls.target.z.toFixed(3))},fov_deg:this.camera.fov}}}const Er=Math.PI/180,Mr={x:0,y:1,z:0},wn=(i,e)=>({x:i.x+e.x,y:i.y+e.y,z:i.z+e.z}),ju=(i,e)=>({x:i.x-e.x,y:i.y-e.y,z:i.z-e.z}),Gt=(i,e)=>({x:i.x*e,y:i.y*e,z:i.z*e}),$u=i=>Math.hypot(i.x,i.y,i.z),ls=(i,e)=>$u(ju(i,e)),Ai=i=>{const e=$u(i)||1;return Gt(i,1/e)},oo=(i,e)=>({x:i.y*e.z-i.z*e.y,y:i.z*e.x-i.x*e.z,z:i.x*e.y-i.y*e.x}),Dl=(i,e,t)=>({x:i.x+(e.x-i.x)*t,y:i.y+(e.y-i.y)*t,z:i.z+(e.z-i.z)*t}),$i=i=>({x:+i.x.toFixed(3),y:+i.y.toFixed(3),z:+i.z.toFixed(3)});function sc(i,e){return i.sensorGates[e]||i.sensorGates["9:16"]}function mv(i,e,t){const n=sc(t,e);return 2*Math.atan(n.sensorHeightMm/(2*i))/Er}function gv(i,e){const t=Math.min(1,Math.max(0,e));switch(i){case"linear":return t;case"easeOutCubic":return 1-Math.pow(1-t,3);case"easeInOutCubic":return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;case"easeInOutSine":default:return-(Math.cos(Math.PI*t)-1)/2}}function nr(i){return{directors:new Map(i.directorStyles.map(e=>[e.id,e])),shotTypes:new Map(i.shotTypes.map(e=>[e.id,e])),moves:new Map(i.cameraMoves.map(e=>[e.id,e])),lights:new Map(i.lightingSchemes.map(e=>[e.id,e]))}}function Xu(i,e){var o;const t=nr(e),n=t.shotTypes.get(i.shotTypeId),r=t.moves.get(i.cameraMoveId),s=[];return i.durationSec>4&&s.push(`Regla 07: plano de ${i.durationSec}s (> 4.0s)`),i.cameraMoveId==="handheld_walking_lubezki"&&i.durationSec>3&&s.push(`Walking Selfie: ${i.durationSec}s (> 3.0s)`),r&&r.arcDegrees>25&&s.push(`Regla 02: arco ${r.arcDegrees}° (> 25°)`),n&&n.shotRoleDefault==="A-Roll"&&n.id!=="ots_mirror"&&n.maxSafeHeadYawDeg>25&&s.push(`Regla 02: yaw seguro ${n.maxSafeHeadYawDeg}° (> 25°)`),i.shotRole==="A-Roll"&&(i.motionStrength??2)>3.5&&s.push(`Regla 03: motion ${i.motionStrength} (> 3.5)`),i.mirrorShot&&(((o=i.controlNetOverrides)==null?void 0:o.depthWeight)??1)>.4&&s.push("mirrorShot: depthWeight debe ser ≤ 0.40"),{ok:s.length===0,issues:s}}function Ud(i,e){const t=[];let n=0,r=0,s=0;for(const o of i.shots)Xu(o,e).issues.forEach(l=>t.push(`${o.shotId}: ${l}`)),s+=o.durationSec,o.shotRole==="A-Roll"?n++:r++;return r<2&&t.push(`Fórmula 1:2: faltan B-Roll (${r} < 2)`),Math.abs(s-i.audioTrack.durationSec)>.01&&t.push(`Duración: planos ${s}s ≠ audio ${i.audioTrack.durationSec}s`),{ok:t.length===0,issues:t,aRoll:n,bRoll:r,totalSec:s}}function ao(i,e,t,n,r={}){var d,u;const s=n.spotCinematographyMap[i];if(!s)throw new Error(`Spot sin mapa cinematográfico: ${i}`);const o=nr(n);if(e==="B-Roll"){const f=s.defaultBRollPresets[t%s.defaultBRollPresets.length],m=o.directors.get(s.defaultARollPreset.directorStyleId);return{shotId:`auto_${i}_broll${t}`,spotId:i,shotRole:"B-Roll",directorStyleId:m.id,shotTypeId:f.shotTypeId,cameraMoveId:f.cameraMoveId,lightingSchemeId:s.defaultARollPreset.lightingSchemeId,focalLengthMm:f.focalMm,apertureFStop:2.8,durationSec:f.durationSec,animation:"Idle",focusMode:"macro_prop_lock",brollIndex:t,mirrorShot:!1,motionStrength:o.moves.get(f.cameraMoveId).recommendedMotionStrength,...r}}const a=s.defaultARollPreset;o.directors.get(a.directorStyleId);const l=o.shotTypes.get(a.shotTypeId),c=o.moves.get(a.cameraMoveId);return{shotId:`auto_${i}_aroll`,spotId:i,shotRole:"A-Roll",directorStyleId:a.directorStyleId,shotTypeId:a.shotTypeId,cameraMoveId:a.cameraMoveId,lightingSchemeId:a.lightingSchemeId,focalLengthMm:l.defaultFocalMm,apertureFStop:l.defaultAperture,durationSec:c.recommendedDurationSec,animation:"Idle",focusMode:l.id==="ots_mirror"?"mirror_reflection_plane":"iris_lock",mirrorShot:!!((d=s.specialFlags)!=null&&d.mirrorShot&&l.id==="ots_mirror"),motionStrength:c.recommendedMotionStrength,controlNetOverrides:(u=s.specialFlags)!=null&&u.mirrorShot&&l.id==="ots_mirror"?{depthWeight:s.specialFlags.controlNetDepthWeightOverride??.35}:void 0,...r}}function _v(i){return i.replace(/--ar\s+\S+/gi,"").replace(/\b\d{2,3}\s?mm(?:\s+(?:prime\s+lens|portrait\s+lens|lens|f\/[\d.]+))?(?:\s+f\/[\d.]+)?/gi,"").replace(/\s{2,}/g," ").replace(/\s+,/g,",").trim()}function xv(i){return i==="vanity"?"perfume_bottle":i==="podcast"?"vintage_microphone":["bar","pool","cabaret"].includes(i)?"crystal_glass":"monstera_leaf"}function vv({shot:i,spot:e,catalog:t,aspectRatio:n,foregroundProp:r=null}){var M;const s=nr(t),o=s.directors.get(i.directorStyleId),a=s.shotTypes.get(i.shotTypeId),l=s.moves.get(i.cameraMoveId),c=s.lights.get(i.lightingSchemeId),d=`${i.focalLengthMm}mm f/${i.apertureFStop} lens`,u=r?r.promptTokens:null;let f;if(i.shotRole==="B-Roll")f=[(((M=e.brolls)==null?void 0:M[i.brollIndex??0])||"").replace(/^B-Roll \d+:\s*/i,""),u,a.promptTokens,d,c.promptLightingTokens,o.fluxPromptTokens].filter(Boolean).join(", ");else{const T=_v(e.prompt||"");f=[/Alina Van Dijk/i.test(T)?"":t.characterReference.tokenLockPrompt,T,u,a.promptTokens,d,c.promptLightingTokens,o.fluxPromptTokens].filter(Boolean).join(", ")}const m=f;f+=` --ar ${n}`;const g=(l.motionPromptTokens||"").replace(/--motion\s+[\d.]+/gi,"").replace(/,?\s*strict\s+[\d.]+s?(?:\s+seconds?)?\s+(?:clip\s+)?(?:limit|max)/gi,"").replace(/\s{2,}/g," ").trim(),_=(o.motionPromptStyle||"").replace(/,?\s*strict\s+[\d.]+s?(?:\s+seconds?)?\s+(?:clip\s+)?(?:limit|max)/gi,"").trim(),h=`${l.motionPromptTokens}, ${o.motionPromptStyle}`,p=[g,_].filter(Boolean).join(", ");return{flux:f,fluxClean:m,motion:h,motionClean:p}}function bv({shot:i,spot:e,catalog:t,building:n,aspectRatio:r="9:16",baseMode:s="night"}){const o=nr(t),a=o.directors.get(i.directorStyleId),l=o.shotTypes.get(i.shotTypeId),c=o.moves.get(i.cameraMoveId),d=o.lights.get(i.lightingSchemeId),f=(t.spotCinematographyMap[i.spotId]||{specialFlags:{}}).specialFlags||{};if(!a||!l||!c||!d)throw new Error(`Plano con ids inválidos: ${i.shotId}`);const m=e.floor*n.floorHeight,g=!!f.isLayingPosture||i.animation==="Laying",_=[];let h=e.alinaRotY||0,p=null;i.mirrorShot&&f.mirrorCenter&&(p={x:f.mirrorCenter.x,y:m+f.mirrorCenter.yOffset,z:f.mirrorCenter.z},h=Math.atan2(p.x-e.alinaPos.x,p.z-e.alinaPos.z));const M={x:Math.sin(h),y:0,z:Math.cos(h)},T={x:Math.cos(h),y:0,z:-Math.sin(h)};let S,C=M,I=T;if(i.shotRole==="B-Roll"&&e.macroTarget&&e.macroPos)S={...e.macroTarget},C=Ai({x:e.macroPos.x-e.macroTarget.x,y:0,z:e.macroPos.z-e.macroTarget.z}),I=Ai(oo(Mr,C));else{const Re=g?l.layingHeightOverrideM??.22:l.targetHeightM;S={x:e.alinaPos.x,y:e.alinaPos.y+Re,z:e.alinaPos.z},p&&(S=Dl(S,p,.5))}let x=l.azimuthOffsetDeg;i.shotRole==="B-Roll"&&(i.brollIndex??0)%2===1&&(x=-x);const y=x*Er,b=l.elevationDeg*Er,v=wn(Gt(C,Math.cos(y)),Gt(I,Math.sin(y))),A=Ai(wn(Gt(v,Math.cos(b)),Gt(Mr,Math.sin(b)))),P=wn(S,Gt(A,l.distanceM)),F=Ai(oo(Mr,v)),N=Re=>wn(P,wn(Gt(F,Re.right),wn(Gt(Mr,Re.up),Gt(A,Re.forward))));let z=N(c.startOffsetLocal),O=N(c.endOffsetLocal);const Z=n.width/2,X=n.centerZ-n.depth/2,se=n.centerZ+n.depth/2,le=!!f.isExterior;let ve=!1;const Ne=Re=>{const Y={...Re};return le?Y.y=Math.max(m+.3,Y.y):(Y.x=Math.min(Z-.4,Math.max(-Z+.4,Y.x)),Y.z=Math.min(se+1.4,Math.max(X+.4,Y.z)),Y.y=Math.min(m+n.floorHeight-.35,Math.max(m+.3,Y.y))),(Y.x!==Re.x||Y.y!==Re.y||Y.z!==Re.z)&&(ve=!0),Y};z=Ne(z),O=Ne(O);const Ve=Re=>le?Re.y>=m+.3:Re.x>=-Z+.35-1e-6&&Re.x<=Z-.35+1e-6&&Re.z>=X+.35-1e-6&&Re.z<=se+1.5&&Re.y>=m+.3-1e-6&&Re.y<=m+n.floorHeight-.3,J=Ve(z)&&Ve(O);ve&&_.push("Wall Guard recortó la trayectoria al volumen interior");const oe=i.shotRole==="B-Roll"?S:{x:e.alinaPos.x,y:S.y,z:e.alinaPos.z},Te=ls(z,oe),he=ls(O,oe);let Fe=Te,Xe=he;if(i.focusMode==="rack_prop_to_iris"&&(Fe=.48*he,Xe=he),i.focusMode==="mirror_reflection_plane"&&p){const Re=ls(p,oe);Fe=ls(z,p)+Re,Xe=ls(O,p)+Re}const De={x:e.alinaPos.x,y:e.alinaPos.y+(g?.25:1.35),z:e.alinaPos.z},vt=Re=>{const Y=Re.azimuthDeg*Er,R=Re.elevationDeg*Er,w=Ai(wn(Gt(wn(Gt(M,Math.cos(Y)),Gt(T,Math.sin(Y))),Math.cos(R)),Gt(Mr,Math.sin(R))));return $i(wn(De,Gt(w,Re.distanceM)))},ht=Re=>({worldPos:vt(Re),targetPos:$i(De),colorHex:Re.colorHex,intensity:Re.intensity,spotAngleDeg:Re.spotAngleDeg??55,kelvin:Re.kelvin});d.compatibleBaseModes.includes(s)||_.push(`Luz '${d.id}' no recomendada en modo ${s}`);let He=null;if(i.foregroundFraming&&t.foregroundProps){const Re=i.foregroundPropId||xv(i.spotId),Y=t.foregroundProps[Re]||t.foregroundProps.monstera_leaf;if(Y){const R=Ai(ju(S,z)),w=Ai(oo(R,Mr)),G=Ai(oo(w,R)),V=wn(z,wn(Gt(R,Y.distanceMeters),wn(Gt(w,Y.lateralOffsetM),Gt(G,Y.verticalOffsetM))));He={propId:Y.id,name:Y.name,polyhavenModelId:Y.polyhavenModelId,worldPos:$i(V),scale:Y.scale,distanceFromCameraM:Y.distanceMeters,promptTokens:Y.promptTokens}}}const L=Xu(i,t),St=vv({shot:i,spot:e,catalog:t,aspectRatio:r,foregroundProp:He}),$=Math.min(Fe,Xe,(He==null?void 0:He.distanceFromCameraM)??1/0),be=Math.max(Fe,Xe),Ie={uNear:+Math.max(.32,$*.28).toFixed(3),uFar:+Math.max(be+8,be*2.8).toFixed(3)};return{shotId:i.shotId,spotId:i.spotId,baseMode:s,animation:i.animation,mirrorShot:!!i.mirrorShot,foregroundFraming:!!i.foregroundFraming,foregroundProp:He,alinaRotY:+h.toFixed(4),alinaRotYDeg:+(h/Er).toFixed(2),depthBoundsM:Ie,camera:{startPos:$i(z),startTarget:$i(S),endPos:$i(O),endTarget:$i(S),verticalFovDeg:+mv(i.focalLengthMm,r,t).toFixed(2),focalMm:i.focalLengthMm,rollDeg:l.rollDeg,durationSec:i.durationSec,easing:c.easing,handheldHz:c.handheldHz,handheldAmpM:c.handheldAmpM},dof:{enabled:!0,focalLengthMm:i.focalLengthMm,apertureFStop:i.apertureFStop,startFocusDistM:+Fe.toFixed(3),endFocusDistM:+Xe.toFixed(3)},realtimeRig:{keyLight:ht(d.realtimeKeyLight),rimLight:ht(d.realtimeRimLight),ambientMultiplier:d.ambientMultiplier,reflectionMultiplier:d.reflectionMultiplier,fogDensityOverride:d.fogDensityOverride},volumeGrade:a.volumeProfileGrade,threeJsGrade:a.threeJsGrade,prompts:St,zeroWaste:L,boundsOk:J,clamped:ve,warnings:_}}const yv="2.0.0",Mv="alina-sanctuary-cinematography-v2",Sv="alina-sanctuary.blueprint.json",wv={name:"Alina Van Dijk",heightMeters:1.72,eyeHeightM:1.56,mouthHeightM:1.5,chestHeightM:1.3,waistHeightM:1.06,hipsHeightM:.94,feetHeightM:.05,layingEyeHeightM:.24,layingChestHeightM:.16,allowedAnimations:["Idle","Walk","Rumba","Laying","HipHop"],tokenLockPrompt:"28yo Dutch-Latin woman Alina Van Dijk, vivid copper red hair with natural soft waves, vivid emerald green eyes, light natural freckles, crimson lips, micro-pores"},Ev={"9:16":{sensorWidthMm:20.25,sensorHeightMm:36,description:"35mm Full Frame rotated 90 deg vertical cinema gate (portrait native)"},"4:5":{sensorWidthMm:28.8,sensorHeightMm:36,description:"35mm Full Frame rotated portrait editorial gate"},"16:9":{sensorWidthMm:36,sensorHeightMm:20.25,description:"35mm Full Frame landscape cinema gate"},"21:9":{sensorWidthMm:36,sensorHeightMm:15.43,description:"35mm Anamorphic 2.39:1 gate"}},Tv=[{id:"fincher_cronenweth",name:"David Fincher — Control Clínico & Precisión",dp:"Jeff Cronenweth",moodTags:["clínico","autoridad","psicoanálisis","tensión controlada"],funnelStages:["Conversión Fanvue & Telegram VIP","Trabajo & Terapia"],defaultFocalMm:50,defaultAperture:1.8,preferredShotTypes:["mcu_interview","cu_portrait","ots_mirror","macro_broll_prop"],preferredMoves:["slow_dolly_push_in","static_breathing","rack_focus_macro_to_eyes"],defaultLightingSchemeId:"fincher_top_soft_negfill",volumeProfileGrade:{postExposure:-.08,contrast:18,saturation:-12,temperature:-14,tint:6,splitShadowsHex:"#162A2C",splitHighlightsHex:"#E3C898",bloomIntensity:.16,vignetteIntensity:.28},threeJsGrade:{toneMappingExposure:1.08,environmentIntensityMultiplier:.72},zeroWasteMotionRange:{min:1.5,max:2.6},fluxPromptTokens:"David Fincher aesthetic, Jeff Cronenweth clinical cinematography, razor-sharp focus on iris, clean symmetrical composition, deep controlled shadows with subtle cyan-amber color separation, negative fill contrast, Hasselblad crispness",motionPromptStyle:"Calculated precision mechanical dolly push-in, zero handheld jitter, steady hypnotic eye lock"},{id:"wong_kar_wai_doyle",name:"Wong Kar-wai — Seducción Nocturna & Neón Clandestino",dp:"Christopher Doyle",moodTags:["sensual","nocturno","neón","intimidad furtiva"],funnelStages:["Mundo Exterior / Viral Dance & Reels","Conversión Fanvue & Telegram VIP"],defaultFocalMm:35,defaultAperture:1.4,preferredShotTypes:["mcu_interview","ots_mirror","ms_waist","macro_broll_prop"],preferredMoves:["lateral_slider_truck","subtle_parallax_arc","static_breathing"],defaultLightingSchemeId:"wong_neon_practical",volumeProfileGrade:{postExposure:.05,contrast:22,saturation:14,temperature:-6,tint:14,splitShadowsHex:"#0E3B35",splitHighlightsHex:"#FF8C66",bloomIntensity:.42,vignetteIntensity:.34},threeJsGrade:{toneMappingExposure:1.24,environmentIntensityMultiplier:.9},zeroWasteMotionRange:{min:2,max:3},fluxPromptTokens:"Wong Kar-wai and Christopher Doyle cinematography, lush sensual 35mm anamorphic bokeh, rich emerald and crimson neon practical glow, soft foreground framing blur, poetic nocturnal Hong Kong speakeasy mood, 35mm film grain texture",motionPromptStyle:"Languid drifting lateral glide, soft candle and neon shimmer, dreamy slow tempo"},{id:"villeneuve_deakins",name:"Denis Villeneuve — Monumentalidad & Luz Motivada Única",dp:"Roger Deakins",moodTags:["arquitectónico","contemplativo","agua","lujo silencioso"],funnelStages:["High-Ticket / Membresía Anual","Top-Funnel / Intimidad Cotidiana"],defaultFocalMm:40,defaultAperture:2,preferredShotTypes:["ws_architectural","ms_waist","fs_full_body","top_down_zenital"],preferredMoves:["pedestal_reveal_up","slow_dolly_push_in","slow_dolly_pull_out"],defaultLightingSchemeId:"deakins_single_window",volumeProfileGrade:{postExposure:-.04,contrast:20,saturation:-8,temperature:8,tint:-2,splitShadowsHex:"#1B2838",splitHighlightsHex:"#F5D0A9",bloomIntensity:.24,vignetteIntensity:.26},threeJsGrade:{toneMappingExposure:1.12,environmentIntensityMultiplier:.85},zeroWasteMotionRange:{min:1.6,max:2.5},fluxPromptTokens:"Roger Deakins and Denis Villeneuve cinematography, monumental architectural symmetry, single motivated natural light source casting clean geometric shadows, delicate atmospheric mist, tactile basalt stone and water reflections",motionPromptStyle:"Solemn slow architectural pedestal rise, serene minimal subject motion, meditative stillness"},{id:"guadagnino_mukdeeprom",name:"Luca Guadagnino — Sensorialidad Táctil & Luz Mediterránea",dp:"Sayombhu Mukdeeprom",moodTags:["sensorial","diurno","espresso","táctil"],funnelStages:["Descubrimiento & Street Lifestyle","Top-Funnel / Intimidad Cotidiana"],defaultFocalMm:50,defaultAperture:2,preferredShotTypes:["ms_waist","cu_portrait","macro_broll_prop","cowboy_american"],preferredMoves:["lateral_slider_truck","slow_dolly_push_in","rack_focus_macro_to_eyes"],defaultLightingSchemeId:"guadagnino_golden_bounce",volumeProfileGrade:{postExposure:.12,contrast:8,saturation:10,temperature:18,tint:4,splitShadowsHex:"#3A2C24",splitHighlightsHex:"#FFE0B2",bloomIntensity:.26,vignetteIntensity:.16},threeJsGrade:{toneMappingExposure:1.2,environmentIntensityMultiplier:1.05},zeroWasteMotionRange:{min:2,max:3},fluxPromptTokens:"Luca Guadagnino and Sayombhu Mukdeeprom 35mm Kodak Portra aesthetic, warm Mediterranean side-window daylight, tactile marble copper and linen textures, intimate unhurried sensual realism, golden warm skin bounce",motionPromptStyle:"Gentle organic push-in and tactile macro slider glide, relaxed natural breathing"},{id:"kubrick_alcott",name:"Stanley Kubrick — Simetría Hipnótica & Luz de Velas",dp:"John Alcott",moodTags:["dominación","simetría","tenebrismo","velas 2200K"],funnelStages:["Conversión Fanvue & Telegram VIP","Top-Funnel / Intimidad Cotidiana"],defaultFocalMm:35,defaultAperture:1.4,preferredShotTypes:["low_angle_authority","ws_architectural","cu_portrait","top_down_zenital"],preferredMoves:["slow_dolly_push_in","static_breathing","slow_dolly_pull_out"],defaultLightingSchemeId:"kubrick_candlelight_2200k",volumeProfileGrade:{postExposure:-.1,contrast:26,saturation:4,temperature:22,tint:2,splitShadowsHex:"#140F14",splitHighlightsHex:"#FFB76B",bloomIntensity:.34,vignetteIntensity:.38},threeJsGrade:{toneMappingExposure:1.15,environmentIntensityMultiplier:.65},zeroWasteMotionRange:{min:1.4,max:2.4},fluxPromptTokens:"Stanley Kubrick and John Alcott Barry Lyndon candlelight aesthetic, one-point perspective symmetry, subtle low-angle dominance, ultra-fast f/1.4 practical 2200K flickering candlelight, rich chiaroscuro velvet and brass",motionPromptStyle:"Hypnotic locked symmetrical forward tracking glide, commanding stationary posture"},{id:"lubezki_natural",name:"Emmanuel Lubezki — Inmersión Fluida & Contraluz Natural",dp:"Emmanuel Lubezki",moodTags:["walking","dinámico","espontáneo","contraluz"],funnelStages:["Descubrimiento & Street Lifestyle","Mundo Exterior / Viral Dance & Reels"],defaultFocalMm:24,defaultAperture:2.4,preferredShotTypes:["ms_waist","cowboy_american","fs_full_body","low_angle_authority"],preferredMoves:["handheld_walking_lubezki","subtle_parallax_arc","pedestal_reveal_up"],defaultLightingSchemeId:"lubezki_ambient_backlight",volumeProfileGrade:{postExposure:.08,contrast:12,saturation:6,temperature:12,tint:0,splitShadowsHex:"#202A38",splitHighlightsHex:"#FFD29D",bloomIntensity:.3,vignetteIntensity:.18},threeJsGrade:{toneMappingExposure:1.18,environmentIntensityMultiplier:1.1},zeroWasteMotionRange:{min:2.4,max:3.2},fluxPromptTokens:"Emmanuel Lubezki wide-angle 24mm immersive proximity, natural golden or streetlamp rim backlight catching copper red hair strands, realistic environmental depth, candid living movement, sharp foreground subject",motionPromptStyle:"Fluid 1.7Hz handheld walking presence, gentle parallax wrap, strict 3.0s clip limit"},{id:"refn_neon_noir",name:"Nicolas Winding Refn — Neon Noir & Contraste Cromático",dp:"Natasha Braier / Darius Khondji",moodTags:["cabaret","baile","magenta-cian","hipnótico"],funnelStages:["Mundo Exterior / Viral Dance & Reels","High-Ticket / Membresía Anual"],defaultFocalMm:50,defaultAperture:1.6,preferredShotTypes:["fs_full_body","cowboy_american","ecu_eyes","low_angle_authority"],preferredMoves:["static_breathing","slow_dolly_push_in","subtle_parallax_arc"],defaultLightingSchemeId:"wong_neon_practical",volumeProfileGrade:{postExposure:-.05,contrast:30,saturation:22,temperature:-10,tint:18,splitShadowsHex:"#101A36",splitHighlightsHex:"#FF4FA3",bloomIntensity:.48,vignetteIntensity:.36},threeJsGrade:{toneMappingExposure:1.22,environmentIntensityMultiplier:.78},zeroWasteMotionRange:{min:2,max:3},fluxPromptTokens:"Nicolas Winding Refn neon noir cinematography, sculptural magenta and cyan split lighting, specular reflections on black marble, bold geometric framing, magnetic hypnotic poise",motionPromptStyle:"Locked vertical tripod or ultra-slow push-in, rhythmic center-of-mass stability, feet anchored"},{id:"coppola_intimate",name:"Sofia Coppola — Intimidad Suave & Susurro Editorial",dp:"Philippe Le Sourd",moodTags:["íntimo","spa","tocador","susurro ASMR"],funnelStages:["Top-Funnel / Intimidad Cotidiana","Conversión Fanvue & Telegram VIP"],defaultFocalMm:85,defaultAperture:1.4,preferredShotTypes:["cu_portrait","ecu_eyes","ots_mirror","top_down_zenital"],preferredMoves:["static_breathing","slow_dolly_push_in","rack_focus_macro_to_eyes"],defaultLightingSchemeId:"coppola_soft_window_spa",volumeProfileGrade:{postExposure:.1,contrast:6,saturation:-4,temperature:10,tint:8,splitShadowsHex:"#2C2538",splitHighlightsHex:"#FCE2C4",bloomIntensity:.32,vignetteIntensity:.22},threeJsGrade:{toneMappingExposure:1.16,environmentIntensityMultiplier:.95},zeroWasteMotionRange:{min:1.5,max:2.4},fluxPromptTokens:"Sofia Coppola and Philippe Le Sourd delicate editorial portrait, soft diffused window light, creamy 85mm f/1.4 shallow depth of field, intimate serene vulnerability, refined porcelain and silk atmosphere",motionPromptStyle:"Whisper-quiet slow push-in or gentle rack focus from reflection/prop to emerald eyes"}],Av=[{id:"ecu_eyes",label:"Primerísimo Primer Plano (ECU Ojos / Labios)",shotRoleDefault:"A-Roll",targetAnchor:"eyes",targetHeightM:1.56,layingHeightOverrideM:.24,defaultFocalMm:100,defaultAperture:1.8,distanceM:1.25,azimuthOffsetDeg:4,elevationDeg:0,rollDeg:0,maxSafeHeadYawDeg:12,zeroWasteRisk:"Bajo",promptTokens:"extreme close-up portrait framing emerald eyes and subtle smirk, 100mm f/1.8 macro depth of field, hyper-detailed corneal reflection and natural nasal bridge freckles"},{id:"cu_portrait",label:"Primer Plano (CU Rostro & Hombros)",shotRoleDefault:"A-Roll",targetAnchor:"eyes",targetHeightM:1.52,layingHeightOverrideM:.22,defaultFocalMm:85,defaultAperture:1.4,distanceM:1.8,azimuthOffsetDeg:8,elevationDeg:2,rollDeg:0,maxSafeHeadYawDeg:18,zeroWasteRisk:"Bajo",promptTokens:"intimate close-up portrait from collarbone to crown, 85mm f/1.4 prime lens, creamy bokeh background separation, crisp iris focus"},{id:"mcu_interview",label:"Plano Medio Corto (MCU Podcast / Confesionario)",shotRoleDefault:"A-Roll",targetAnchor:"chest",targetHeightM:1.42,layingHeightOverrideM:.2,defaultFocalMm:85,defaultAperture:1.4,distanceM:2.45,azimuthOffsetDeg:10,elevationDeg:2,rollDeg:0,maxSafeHeadYawDeg:20,zeroWasteRisk:"Bajo",promptTokens:"medium close-up chest-up framing, 85mm f/1.4 portrait lens, clinical poise, balanced headroom in 4.9m architectural room"},{id:"ms_waist",label:"Plano Medio (MS Cintura & Manos Ancladas)",shotRoleDefault:"A-Roll",targetAnchor:"waist",targetHeightM:1.24,layingHeightOverrideM:.18,defaultFocalMm:50,defaultAperture:1.8,distanceM:2.3,azimuthOffsetDeg:12,elevationDeg:1,rollDeg:0,maxSafeHeadYawDeg:22,zeroWasteRisk:"Bajo",promptTokens:"waist-up medium shot, 50mm f/1.8 standard lens, hands calmly resting on table or waist, clear spatial context"},{id:"cowboy_american",label:"Plano Americano (3/4 Muslos a Cabeza)",shotRoleDefault:"A-Roll",targetAnchor:"hips",targetHeightM:1.06,layingHeightOverrideM:.16,defaultFocalMm:50,defaultAperture:2,distanceM:2.9,azimuthOffsetDeg:14,elevationDeg:0,rollDeg:0,maxSafeHeadYawDeg:22,zeroWasteRisk:"Medio-Bajo",promptTokens:"three-quarter American shot from mid-thigh up, 50mm f/2.0 lens, confident posture and surrounding luxury interior"},{id:"fs_full_body",label:"Plano Entero (FS Cuerpo Completo 9:16)",shotRoleDefault:"A-Roll",targetAnchor:"hips",targetHeightM:.94,layingHeightOverrideM:.15,defaultFocalMm:50,defaultAperture:1.8,distanceM:3.4,azimuthOffsetDeg:8,elevationDeg:1,rollDeg:0,maxSafeHeadYawDeg:20,zeroWasteRisk:"Medio",promptTokens:"full body vertical 9:16 shot from shoes to crown, 50mm f/1.8 lens, feet firmly grounded on floor, full architectural floor-to-ceiling height"},{id:"ws_architectural",label:"Plano General Arquitectónico (WS 4.9m)",shotRoleDefault:"A-Roll",targetAnchor:"chest",targetHeightM:1.25,layingHeightOverrideM:.2,defaultFocalMm:35,defaultAperture:2.8,distanceM:4.2,azimuthOffsetDeg:16,elevationDeg:2,rollDeg:0,maxSafeHeadYawDeg:24,zeroWasteRisk:"Bajo",promptTokens:"wide architectural shot showcasing 4.9m ceiling moldings, curtains, and volumetric lighting around Alina, 35mm f/2.8 cinema lens"},{id:"ots_mirror",label:"Sobre el Hombro con Espejo Planar (OTS Mirror, cámara a espaldas)",shotRoleDefault:"A-Roll",targetAnchor:"eyes",targetHeightM:1.48,layingHeightOverrideM:.24,defaultFocalMm:50,defaultAperture:1.4,distanceM:3.6,azimuthOffsetDeg:160,elevationDeg:3,rollDeg:0,maxSafeHeadYawDeg:22,zeroWasteRisk:"Medio-Bajo",promptTokens:"cinematic over-the-shoulder composition framing Alina and her crisp reflection in illuminated vanity mirror, soft shoulder foreground blur, 50mm f/1.4"},{id:"low_angle_authority",label:"Contrapicado de Autoridad (+11 deg)",shotRoleDefault:"A-Roll",targetAnchor:"chest",targetHeightM:1.38,layingHeightOverrideM:.2,defaultFocalMm:35,defaultAperture:1.8,distanceM:2.5,azimuthOffsetDeg:8,elevationDeg:-11,rollDeg:0,maxSafeHeadYawDeg:18,zeroWasteRisk:"Bajo",promptTokens:"subtle heroic low-angle shot looking slightly upward at Alina against tall 4.9m luxury architecture, projecting effortless dominance and poise, 35mm f/1.8"},{id:"top_down_zenital",label:"Picado Alto / Cenital (Spa & Suite)",shotRoleDefault:"A-Roll",targetAnchor:"chest",targetHeightM:1.1,layingHeightOverrideM:.18,defaultFocalMm:35,defaultAperture:2,distanceM:2.65,azimuthOffsetDeg:12,elevationDeg:66,rollDeg:0,maxSafeHeadYawDeg:15,zeroWasteRisk:"Medio-Bajo",promptTokens:"high-angle architectural top-down composition looking down over basalt bathtub or charcoal linen king bed, sculptural candlelight shadows, 35mm f/2.0"},{id:"macro_broll_prop",label:"B-Roll Macro de Prop / Bodegón (Zero-Face)",shotRoleDefault:"B-Roll",targetAnchor:"prop",targetHeightM:.9,layingHeightOverrideM:.4,defaultFocalMm:100,defaultAperture:2.8,distanceM:1.35,azimuthOffsetDeg:15,elevationDeg:10,rollDeg:0,maxSafeHeadYawDeg:0,zeroWasteRisk:"Zero",promptTokens:"100mm macro f/2.8 tactile close-up B-roll insert of luxury prop with shallow bokeh, zero human face, rich PBR specular highlights"}],Rv=[{id:"static_breathing",label:"Estático + Micro-Respiración (Lock Tripod)",startOffsetLocal:{right:0,up:0,forward:0},endOffsetLocal:{right:0,up:.008,forward:-.02},arcDegrees:0,easing:"easeInOutSine",recommendedDurationSec:3.5,maxDurationSec:4,handheldHz:0,handheldAmpM:0,focusTransition:"locked",recommendedMotionStrength:2,motionPromptTokens:"steady locked tripod shot, ultra-subtle chest breathing, calm blinking, zero camera drift --motion 2"},{id:"slow_dolly_push_in",label:"Dolly Push-In Quirúrgico (25cm hacia iris)",startOffsetLocal:{right:0,up:0,forward:.14},endOffsetLocal:{right:0,up:0,forward:-.14},arcDegrees:0,easing:"easeInOutSine",recommendedDurationSec:3.5,maxDurationSec:4,handheldHz:0,handheldAmpM:0,focusTransition:"locked",recommendedMotionStrength:2.2,motionPromptTokens:"very subtle slow dolly push-in 25cm toward emerald eyes, steady subject posture, smooth mechanical rail --motion 2"},{id:"slow_dolly_pull_out",label:"Dolly Pull-Out (Revelado de Escenario 4.9m)",startOffsetLocal:{right:0,up:0,forward:-.15},endOffsetLocal:{right:0,up:.06,forward:.25},arcDegrees:0,easing:"easeOutCubic",recommendedDurationSec:3.5,maxDurationSec:4,handheldHz:0,handheldAmpM:0,focusTransition:"locked",recommendedMotionStrength:2.4,motionPromptTokens:"slow graceful dolly pull-out revealing surrounding architectural room, serene poised subject --motion 2"},{id:"subtle_parallax_arc",label:"Arco Parallax Acotado (14 deg Zero-Waste Safe)",startOffsetLocal:{right:-.26,up:0,forward:.05},endOffsetLocal:{right:.26,up:.02,forward:0},arcDegrees:14,easing:"easeInOutSine",recommendedDurationSec:3.5,maxDurationSec:4,handheldHz:0,handheldAmpM:0,focusTransition:"locked",recommendedMotionStrength:2.6,motionPromptTokens:"gentle 14-degree lateral parallax camera glide keeping subject face within front quadrant, smooth background depth shift --motion 2.5"},{id:"pedestal_reveal_up",label:"Pedestal Reveal Vertical (9:16 Ascendente)",startOffsetLocal:{right:0,up:-.24,forward:.05},endOffsetLocal:{right:0,up:.14,forward:-.05},arcDegrees:0,easing:"easeInOutCubic",recommendedDurationSec:3.5,maxDurationSec:4,handheldHz:0,handheldAmpM:0,focusTransition:"locked",recommendedMotionStrength:2.5,motionPromptTokens:"smooth vertical pedestal rise revealing posture and architecture upward, poised stillness --motion 2.5"},{id:"lateral_slider_truck",label:"Slider Lateral (B-Roll Bodegón / Café)",startOffsetLocal:{right:-.32,up:0,forward:0},endOffsetLocal:{right:.32,up:0,forward:0},arcDegrees:4,easing:"easeInOutSine",recommendedDurationSec:2.5,maxDurationSec:3.5,handheldHz:0,handheldAmpM:0,focusTransition:"locked",recommendedMotionStrength:2.8,motionPromptTokens:"silky lateral tabletop slider pan across prop textures, specular reflections gliding across surface --motion 2.8"},{id:"handheld_walking_lubezki",label:"Handheld Orgánico Caminando (1.7 Hz · Máx 3.0s)",startOffsetLocal:{right:.08,up:.02,forward:.12},endOffsetLocal:{right:-.04,up:0,forward:-.28},arcDegrees:6,easing:"linear",recommendedDurationSec:3,maxDurationSec:3,handheldHz:1.7,handheldAmpM:.022,focusTransition:"locked",recommendedMotionStrength:3,motionPromptTokens:"natural front-camera handheld walking presence, subtle 1.7Hz breathing bob, copper hair catching breeze, strict 3 seconds max --motion 3"},{id:"rack_focus_macro_to_eyes",label:"Rack Focus Cinemático (Primer Término → Iris / Prop)",startOffsetLocal:{right:0,up:0,forward:.08},endOffsetLocal:{right:0,up:0,forward:-.06},arcDegrees:0,easing:"easeInOutCubic",recommendedDurationSec:2.5,maxDurationSec:3.5,handheldHz:0,handheldAmpM:0,focusTransition:"rack_near_to_subject",recommendedMotionStrength:2.2,motionPromptTokens:"smooth optical rack focus pulling smoothly from foreground bokeh edge onto crisp sharp subject detail --motion 2.2"}],Cv=[{id:"rembrandt_chiaroscuro",label:"Rembrandt Chiaroscuro (45° Key + Rim Cobre)",compatibleBaseModes:["night","day"],contrastRatio:"4:1",realtimeKeyLight:{azimuthDeg:42,elevationDeg:28,distanceM:2.6,kelvin:2900,colorHex:"#FFC285",intensity:5.5,spotAngleDeg:52,purpose:"Sculptural 45-degree warm key forming soft cheek shadow triangle"},realtimeRimLight:{azimuthDeg:-142,elevationDeg:34,distanceM:2.4,kelvin:5400,colorHex:"#B8D6FF",intensity:3.2,spotAngleDeg:46,purpose:"Cool edge separation on copper hair and shoulders"},ambientMultiplier:.85,reflectionMultiplier:.9,fogDensityOverride:.0085,promptLightingTokens:"Rembrandt chiaroscuro 2900K warm key light with soft cheek shadow triangle, subtle 5400K rim separation on copper hair"},{id:"fincher_top_soft_negfill",label:"Fincher Top-Soft + Negative Fill (4:1 Clínico)",compatibleBaseModes:["night","day"],contrastRatio:"4:1",realtimeKeyLight:{azimuthDeg:28,elevationDeg:48,distanceM:2.4,kelvin:3400,colorHex:"#FFD9B3",intensity:4.8,spotAngleDeg:48,purpose:"Controlled overhead soft source preserving deep eye sockets and crisp jawline"},realtimeRimLight:{azimuthDeg:-155,elevationDeg:26,distanceM:2.3,kelvin:5800,colorHex:"#99D6EA",intensity:2.6,spotAngleDeg:42,purpose:"Cool steel rim separating silhouette against dark walnut bookshelves"},ambientMultiplier:.65,reflectionMultiplier:.78,fogDensityOverride:.007,promptLightingTokens:"Fincher top-soft key light 3400K with deep negative fill on shadow side, cool cyan rim separation, clinical contrast"},{id:"wong_neon_practical",label:"Wong / Refn Dual Gel (Ámbar Práctico + Neón Magenta/Esmeralda)",compatibleBaseModes:["night"],contrastRatio:"6:1",realtimeKeyLight:{azimuthDeg:55,elevationDeg:16,distanceM:2.2,kelvin:2400,colorHex:"#FF9B5C",intensity:5.2,spotAngleDeg:56,purpose:"Warm tungsten practical spill on cheekbones"},realtimeRimLight:{azimuthDeg:-125,elevationDeg:20,distanceM:2.5,kelvin:6500,colorHex:"#FF3D9A",intensity:4.4,spotAngleDeg:58,purpose:"Clandestine magenta-crimson neon edge kicker"},ambientMultiplier:.75,reflectionMultiplier:1.15,fogDensityOverride:.011,promptLightingTokens:"dual-tone neon noir lighting, warm 2400K tungsten key against saturated magenta-cyan rim practicals, lush specular highlights"},{id:"deakins_single_window",label:"Deakins Single-Source (Luz Direccional Motivada + Haze)",compatibleBaseModes:["day","night"],contrastRatio:"5:1",realtimeKeyLight:{azimuthDeg:72,elevationDeg:22,distanceM:3.4,kelvin:4600,colorHex:"#FFE3C4",intensity:6,spotAngleDeg:64,purpose:"Broad directional single-source key wrapping cleanly across form"},realtimeRimLight:{azimuthDeg:-160,elevationDeg:18,distanceM:3,kelvin:6200,colorHex:"#88B4E6",intensity:1.8,spotAngleDeg:54,purpose:"Subtle ambient sky bounce on opposite contour"},ambientMultiplier:.72,reflectionMultiplier:.95,fogDensityOverride:.009,promptLightingTokens:"Roger Deakins single motivated lateral light source wrapping softly across face and stone architecture, delicate atmospheric haze"},{id:"guadagnino_golden_bounce",label:"Guadagnino Golden Bounce (Luz Lateral 4500K + Rebote Cálido 2:1)",compatibleBaseModes:["day"],contrastRatio:"2:1",realtimeKeyLight:{azimuthDeg:52,elevationDeg:24,distanceM:2.9,kelvin:4500,colorHex:"#FFE1B8",intensity:4.6,spotAngleDeg:68,purpose:"Soft Mediterranean daylight grazing marble and linen"},realtimeRimLight:{azimuthDeg:-138,elevationDeg:32,distanceM:2.7,kelvin:3800,colorHex:"#FFD29E",intensity:2.8,spotAngleDeg:60,purpose:"Warm golden sun halo in copper red waves"},ambientMultiplier:1.05,reflectionMultiplier:1,fogDensityOverride:.0045,promptLightingTokens:"soft 4500K Mediterranean window side-light with warm 2:1 natural bounce fill, luminous skin tones and golden copper hair halo"},{id:"kubrick_candlelight_2200k",label:"Kubrick / Alcott Candlelight (2200K Íntimo + Penumbra 8:1)",compatibleBaseModes:["night"],contrastRatio:"8:1",realtimeKeyLight:{azimuthDeg:24,elevationDeg:8,distanceM:1.9,kelvin:2200,colorHex:"#FF9840",intensity:5.8,spotAngleDeg:58,purpose:"Low candle-level warm glow casting dramatic upward and lateral chiaroscuro"},realtimeRimLight:{azimuthDeg:-150,elevationDeg:26,distanceM:2.5,kelvin:3200,colorHex:"#E6A96E",intensity:1.6,spotAngleDeg:48,purpose:"Faint antique brass specular contour"},ambientMultiplier:.55,reflectionMultiplier:.8,fogDensityOverride:.01,promptLightingTokens:"intimate 2200K practical candlelight chiaroscuro, deep velvet shadows, warm amber specular highlights in eyes"},{id:"lubezki_ambient_backlight",label:"Lubezki Natural Backlight (Contraluz Envolvente + Fill Frontal)",compatibleBaseModes:["day","night"],contrastRatio:"3:1",realtimeKeyLight:{azimuthDeg:-162,elevationDeg:30,distanceM:3.2,kelvin:4200,colorHex:"#FFD494",intensity:6.2,spotAngleDeg:62,purpose:"Strong motivated rim/backlight haloing hair and silhouette"},realtimeRimLight:{azimuthDeg:25,elevationDeg:16,distanceM:2.4,kelvin:5e3,colorHex:"#FFF1DF",intensity:2.4,spotAngleDeg:72,purpose:"Gentle ambient frontal fill preserving clean facial detail against backlight"},ambientMultiplier:1,reflectionMultiplier:1.05,fogDensityOverride:.0055,promptLightingTokens:"luminous natural backlight haloing copper hair with soft balanced frontal bounce fill, authentic environmental depth"},{id:"coppola_soft_window_spa",label:"Coppola Soft Diffused Glow (Suave 3800K + Destello Espejo/Agua)",compatibleBaseModes:["day","night"],contrastRatio:"2:1",realtimeKeyLight:{azimuthDeg:34,elevationDeg:20,distanceM:2.4,kelvin:3600,colorHex:"#FFE0C8",intensity:4.2,spotAngleDeg:70,purpose:"Diffused flattering vanity/spa frontal-side wash"},realtimeRimLight:{azimuthDeg:-132,elevationDeg:24,distanceM:2.4,kelvin:4800,colorHex:"#D4E8FF",intensity:2.2,spotAngleDeg:55,purpose:"Gentle cool shimmer separating silk and skin from dark stone"},ambientMultiplier:.92,reflectionMultiplier:1.1,fogDensityOverride:.0065,promptLightingTokens:"soft diffused flattering editorial glow, delicate reflection highlights in mirror and eyes, low-contrast intimate warmth"}],Iv=JSON.parse('{"cabaret":{"floor":0,"funnelStage":"Mundo Exterior / Viral Dance & Reels","recommendedBaseMode":"night","recommendedDirectors":["refn_neon_noir","wong_kar_wai_doyle","lubezki_natural"],"defaultARollPreset":{"directorStyleId":"refn_neon_noir","shotTypeId":"fs_full_body","cameraMoveId":"static_breathing","lightingSchemeId":"wong_neon_practical"},"defaultBRollPresets":[{"label":"Teclas Piano de Cola","shotTypeId":"macro_broll_prop","cameraMoveId":"lateral_slider_truck","targetPropIndex":0,"focalMm":100,"durationSec":2.5},{"label":"Copa & Vela Mesa Cóctel","shotTypeId":"macro_broll_prop","cameraMoveId":"rack_focus_macro_to_eyes","targetPropIndex":1,"focalMm":100,"durationSec":2.5}],"specialFlags":{"mirrorShot":false,"waterReflections":false,"wallGuardSide":"south","foregroundPropReady":true,"isExterior":false,"isLayingPosture":false}},"parking":{"floor":0,"funnelStage":"Mundo Exterior / Viral Dance & Reels","recommendedBaseMode":"night","recommendedDirectors":["lubezki_natural","wong_kar_wai_doyle","refn_neon_noir"],"defaultARollPreset":{"directorStyleId":"lubezki_natural","shotTypeId":"cowboy_american","cameraMoveId":"handheld_walking_lubezki","lightingSchemeId":"wong_neon_practical"},"defaultBRollPresets":[{"label":"Reflejo Neón sobre Capó","shotTypeId":"macro_broll_prop","cameraMoveId":"lateral_slider_truck","targetPropIndex":0,"focalMm":85,"durationSec":2.5},{"label":"Postes Dorados & Terciopelo VIP","shotTypeId":"macro_broll_prop","cameraMoveId":"pedestal_reveal_up","targetPropIndex":1,"focalMm":85,"durationSec":2.5}],"specialFlags":{"mirrorShot":false,"waterReflections":false,"wallGuardSide":"none","foregroundPropReady":true,"isExterior":true,"isLayingPosture":false}},"cafe":{"floor":1,"funnelStage":"Descubrimiento & Street Lifestyle","recommendedBaseMode":"day","recommendedDirectors":["guadagnino_mukdeeprom","coppola_intimate","fincher_cronenweth"],"defaultARollPreset":{"directorStyleId":"guadagnino_mukdeeprom","shotTypeId":"ms_waist","cameraMoveId":"slow_dolly_push_in","lightingSchemeId":"guadagnino_golden_bounce"},"defaultBRollPresets":[{"label":"Extracción Espresso La Marzocco","shotTypeId":"macro_broll_prop","cameraMoveId":"lateral_slider_truck","targetPropIndex":0,"focalMm":100,"durationSec":2.5},{"label":"Mesa Carrara junto al Ventanal","shotTypeId":"macro_broll_prop","cameraMoveId":"rack_focus_macro_to_eyes","targetPropIndex":1,"focalMm":100,"durationSec":2.5}],"specialFlags":{"mirrorShot":false,"waterReflections":false,"wallGuardSide":"south","foregroundPropReady":true,"isExterior":false,"isLayingPosture":false}},"walk_cafe":{"floor":1,"funnelStage":"Descubrimiento & Street Lifestyle","recommendedBaseMode":"day","recommendedDirectors":["lubezki_natural","guadagnino_mukdeeprom"],"defaultARollPreset":{"directorStyleId":"lubezki_natural","shotTypeId":"ms_waist","cameraMoveId":"handheld_walking_lubezki","lightingSchemeId":"lubezki_ambient_backlight"},"defaultBRollPresets":[{"label":"Hojas Monstera & Luz Balcón","shotTypeId":"macro_broll_prop","cameraMoveId":"subtle_parallax_arc","targetPropIndex":0,"focalMm":85,"durationSec":2.5},{"label":"Vitrina Repostería Artesanal","shotTypeId":"macro_broll_prop","cameraMoveId":"lateral_slider_truck","targetPropIndex":1,"focalMm":100,"durationSec":2.5}],"specialFlags":{"mirrorShot":false,"waterReflections":false,"wallGuardSide":"south","foregroundPropReady":true,"isExterior":false,"isLayingPosture":false}},"vanity":{"floor":2,"funnelStage":"Top-Funnel / Intimidad Cotidiana","recommendedBaseMode":"night","recommendedDirectors":["wong_kar_wai_doyle","coppola_intimate","fincher_cronenweth"],"defaultARollPreset":{"directorStyleId":"wong_kar_wai_doyle","shotTypeId":"ots_mirror","cameraMoveId":"slow_dolly_push_in","lightingSchemeId":"coppola_soft_window_spa"},"defaultBRollPresets":[{"label":"Macro Labial Carmesí & Perfume Ámbar","shotTypeId":"macro_broll_prop","cameraMoveId":"lateral_slider_truck","targetPropIndex":0,"focalMm":100,"durationSec":2.5},{"label":"Aro Bombillas Reflejado en Espejo","shotTypeId":"macro_broll_prop","cameraMoveId":"rack_focus_macro_to_eyes","targetPropIndex":1,"focalMm":85,"durationSec":2.5}],"specialFlags":{"mirrorShot":true,"controlNetDepthWeightOverride":0.35,"waterReflections":false,"wallGuardSide":"south","foregroundPropReady":true,"isExterior":false,"isLayingPosture":false,"mirrorCenter":{"x":-0.4,"yOffset":1.65,"z":-13.55}}},"bath":{"floor":2,"funnelStage":"Top-Funnel / Intimidad Cotidiana","recommendedBaseMode":"night","recommendedDirectors":["villeneuve_deakins","coppola_intimate","kubrick_alcott"],"defaultARollPreset":{"directorStyleId":"villeneuve_deakins","shotTypeId":"top_down_zenital","cameraMoveId":"slow_dolly_push_in","lightingSchemeId":"kubrick_candlelight_2200k"},"defaultBRollPresets":[{"label":"Velas Reflejadas en Piedra Basáltica","shotTypeId":"macro_broll_prop","cameraMoveId":"static_breathing","targetPropIndex":0,"focalMm":100,"durationSec":2.5},{"label":"Bandeja de Teca & Sales Minerales","shotTypeId":"macro_broll_prop","cameraMoveId":"lateral_slider_truck","targetPropIndex":1,"focalMm":100,"durationSec":2.5}],"specialFlags":{"mirrorShot":false,"waterReflections":true,"wallGuardSide":"south","foregroundPropReady":true,"isExterior":false,"isLayingPosture":true}},"kitchen":{"floor":2,"funnelStage":"Top-Funnel / Intimidad Cotidiana","recommendedBaseMode":"day","recommendedDirectors":["guadagnino_mukdeeprom","fincher_cronenweth"],"defaultARollPreset":{"directorStyleId":"guadagnino_mukdeeprom","shotTypeId":"ms_waist","cameraMoveId":"subtle_parallax_arc","lightingSchemeId":"guadagnino_golden_bounce"},"defaultBRollPresets":[{"label":"Vapor Espresso sobre Nero Marquina","shotTypeId":"macro_broll_prop","cameraMoveId":"static_breathing","targetPropIndex":0,"focalMm":100,"durationSec":2.5},{"label":"Lámparas Latón & Copas Suspendidas","shotTypeId":"macro_broll_prop","cameraMoveId":"pedestal_reveal_up","targetPropIndex":1,"focalMm":85,"durationSec":2.5}],"specialFlags":{"mirrorShot":false,"waterReflections":false,"wallGuardSide":"south","foregroundPropReady":true,"isExterior":false,"isLayingPosture":false}},"suite":{"floor":2,"funnelStage":"Top-Funnel / Intimidad Cotidiana","recommendedBaseMode":"night","recommendedDirectors":["coppola_intimate","kubrick_alcott","wong_kar_wai_doyle"],"defaultARollPreset":{"directorStyleId":"coppola_intimate","shotTypeId":"cu_portrait","cameraMoveId":"slow_dolly_push_in","lightingSchemeId":"kubrick_candlelight_2200k"},"defaultBRollPresets":[{"label":"Luz Ámbar de Mesilla sobre Lino Carbón","shotTypeId":"macro_broll_prop","cameraMoveId":"rack_focus_macro_to_eyes","targetPropIndex":0,"focalMm":100,"durationSec":2.5},{"label":"Copa Vino en Balcón Modernista","shotTypeId":"macro_broll_prop","cameraMoveId":"lateral_slider_truck","targetPropIndex":1,"focalMm":85,"durationSec":2.5}],"specialFlags":{"mirrorShot":false,"waterReflections":false,"wallGuardSide":"south","foregroundPropReady":true,"isExterior":false,"isLayingPosture":true}},"podcast":{"floor":3,"funnelStage":"Conversión Fanvue & Telegram VIP","recommendedBaseMode":"night","recommendedDirectors":["fincher_cronenweth","villeneuve_deakins","coppola_intimate"],"defaultARollPreset":{"directorStyleId":"fincher_cronenweth","shotTypeId":"mcu_interview","cameraMoveId":"slow_dolly_push_in","lightingSchemeId":"fincher_top_soft_negfill"},"defaultBRollPresets":[{"label":"Vapor Espresso sobre Cuaderno Clínico","shotTypeId":"macro_broll_prop","cameraMoveId":"lateral_slider_truck","targetPropIndex":0,"focalMm":100,"durationSec":2.5},{"label":"Rack Focus Lomos Bataille & Foucault","shotTypeId":"macro_broll_prop","cameraMoveId":"rack_focus_macro_to_eyes","targetPropIndex":1,"focalMm":100,"durationSec":2.5}],"specialFlags":{"mirrorShot":false,"waterReflections":false,"wallGuardSide":"south","foregroundPropReady":true,"isExterior":false,"isLayingPosture":false}},"boudoir":{"floor":3,"funnelStage":"Conversión Fanvue & Telegram VIP","recommendedBaseMode":"night","recommendedDirectors":["kubrick_alcott","wong_kar_wai_doyle","refn_neon_noir"],"defaultARollPreset":{"directorStyleId":"kubrick_alcott","shotTypeId":"low_angle_authority","cameraMoveId":"slow_dolly_push_in","lightingSchemeId":"kubrick_candlelight_2200k"},"defaultBRollPresets":[{"label":"Madejas Shibari Lila & Negra sobre Satén","shotTypeId":"macro_broll_prop","cameraMoveId":"lateral_slider_truck","targetPropIndex":0,"focalMm":100,"durationSec":2.5},{"label":"Micrófono Binaural 3Dio & Antifaz Cuero","shotTypeId":"macro_broll_prop","cameraMoveId":"rack_focus_macro_to_eyes","targetPropIndex":1,"focalMm":100,"durationSec":2.5}],"specialFlags":{"mirrorShot":false,"waterReflections":false,"wallGuardSide":"south","foregroundPropReady":true,"isExterior":false,"isLayingPosture":false}},"pool":{"floor":4,"funnelStage":"High-Ticket / Membresía Anual","recommendedBaseMode":"day","recommendedDirectors":["villeneuve_deakins","guadagnino_mukdeeprom","lubezki_natural"],"defaultARollPreset":{"directorStyleId":"villeneuve_deakins","shotTypeId":"ws_architectural","cameraMoveId":"pedestal_reveal_up","lightingSchemeId":"deakins_single_window"},"defaultBRollPresets":[{"label":"Reflejos Dorados Plunge Pool Basáltica","shotTypeId":"macro_broll_prop","cameraMoveId":"lateral_slider_truck","targetPropIndex":0,"focalMm":100,"durationSec":2.5},{"label":"Tumbona Teca & Copa Tallada Atardecer","shotTypeId":"macro_broll_prop","cameraMoveId":"rack_focus_macro_to_eyes","targetPropIndex":1,"focalMm":85,"durationSec":2.5}],"specialFlags":{"mirrorShot":false,"waterReflections":true,"wallGuardSide":"none","foregroundPropReady":true,"isExterior":true,"isLayingPosture":false}},"bar":{"floor":4,"funnelStage":"High-Ticket / Membresía Anual","recommendedBaseMode":"night","recommendedDirectors":["wong_kar_wai_doyle","fincher_cronenweth","refn_neon_noir"],"defaultARollPreset":{"directorStyleId":"wong_kar_wai_doyle","shotTypeId":"cu_portrait","cameraMoveId":"subtle_parallax_arc","lightingSchemeId":"rembrandt_chiaroscuro"},"defaultBRollPresets":[{"label":"Botellas Ámbar Retroiluminadas en Latón","shotTypeId":"macro_broll_prop","cameraMoveId":"pedestal_reveal_up","targetPropIndex":0,"focalMm":100,"durationSec":2.5},{"label":"Copa Martini sobre Cobre Martillado","shotTypeId":"macro_broll_prop","cameraMoveId":"lateral_slider_truck","targetPropIndex":1,"focalMm":100,"durationSec":2.5}],"specialFlags":{"mirrorShot":false,"waterReflections":false,"wallGuardSide":"none","foregroundPropReady":true,"isExterior":true,"isLayingPosture":false}}}'),Pv={monstera_leaf:{id:"monstera_leaf",name:"Hoja Tropical Monstera (Desenfocada)",polyhavenModelId:"potted_plant_04",distanceMeters:.52,lateralOffsetM:-.19,verticalOffsetM:-.06,scale:.38,promptTokens:"soft organic defocused tropical monstera leaf framing left edge in extreme shallow foreground bokeh f/1.4"},crystal_glass:{id:"crystal_glass",name:"Copa de Cristal / Vaso Facetado",polyhavenModelId:"coffee_table_round_01",distanceMeters:.48,lateralOffsetM:.16,verticalOffsetM:-.12,scale:.25,promptTokens:"subtle blurred rim of crystal cocktail glass with specular refraction in foreground bokeh f/1.4"},vintage_microphone:{id:"vintage_microphone",name:"Micrófono Shure SM7B en Primer Plano",polyhavenModelId:"ClassicNightstand_01",distanceMeters:.55,lateralOffsetM:-.19,verticalOffsetM:-.08,scale:.3,promptTokens:"dark matte studio microphone chassis blurred in soft cinematic foreground framing f/1.8"},perfume_bottle:{id:"perfume_bottle",name:"Frasco de Perfume de Tocador en Latón",polyhavenModelId:"Ottoman_01",distanceMeters:.46,lateralOffsetM:.15,verticalOffsetM:-.14,scale:.22,promptTokens:"warm golden perfume flacon rim blurred in immediate foreground bokeh f/1.4"}},Yt={schemaVersion:yv,catalogId:Mv,compatibleBlueprint:Sv,characterReference:wv,sensorGates:Ev,directorStyles:Tv,shotTypes:Av,cameraMoves:Rv,lightingSchemes:Cv,spotCinematographyMap:Iv,foregroundProps:Pv},Dv=5,Lv={floorHeight:ee,width:pt,depth:kt,centerZ:Ut};class Fv{constructor({scene:e,renderer:t,lighting:n,camCtrl:r,alina:s,getSpot:o,prepareSpot:a,getBaseMode:l}){Object.assign(this,{scene:e,renderer:t,lighting:n,camCtrl:r,alina:s,getSpot:o,prepareSpot:a,getBaseMode:l}),this.active=!1,this.payload=null,this.shot=null,this.playing=!1,this.t0=0,this.onFrameHud=null,this.onMoveEnd=null,this._saved=null;const c=d=>{const u=new Lu(16777215,0,30,0,.6,1.4);return u.castShadow=d,d&&(u.shadow.mapSize.set(1024,1024),u.shadow.bias=-4e-4,u.shadow.radius=4),u.visible=!1,this.scene.add(u,u.target),u};this.keyLight=c(!0),this.rimLight=c(!1),this.foregroundGroup=new Wt,this.foregroundGroup.name="CinemaForegroundPropGroup",this.foregroundGroup.visible=!1,this.scene.add(this.foregroundGroup),this._initForegroundMeshes(),r.controls.addEventListener("start",()=>{this.playing&&this.stop(!1)})}_initForegroundMeshes(){const e=new sn(.005,.35,.85,12,4,!0,0,Math.PI),t=new ke({color:1333810,roughness:.38,metalness:.05,side:Rn}),n=new Ue(e,t);n.rotation.z=Math.PI/4,n.castShadow=!0;const r=new sn(.12,.08,.32,16),s=new on({color:16777215,roughness:.08,metalness:.1,transmission:.88,transparent:!0,opacity:.72,ior:1.5}),o=new Ue(r,s),a=new Wt,l=new Ue(new sn(.07,.07,.32,16),new ke({color:2172201,roughness:.6})),c=new Ue(new Zi(.08,16,16),new ke({color:4804695,metalness:.8,roughness:.3}));c.position.y=.18,a.add(l,c);const d=new Ue(new sn(.06,.09,.26,16),new ke({color:13145662,metalness:.75,roughness:.25}));this.foregroundMeshes={monstera_leaf:n,crystal_glass:o,vintage_microphone:a,perfume_bottle:d}}_saveBase(){if(this._saved)return;const e=this.lighting;this._saved={exposure:this.renderer.toneMappingExposure,envIntensity:this.scene.environmentIntensity,hemi:e.hemiLight.intensity,fog:this.scene.fog&&this.scene.fog.isFogExp2?this.scene.fog.density:null,fov:this.camCtrl.camera.fov,maxPolar:this.camCtrl.controls.maxPolarAngle,minDist:this.camCtrl.controls.minDistance},this.camCtrl.controls.maxPolarAngle=Math.PI*.99,this.camCtrl.controls.minDistance=.25}_restoreBase(){var n;if(!this._saved)return;const e=this._saved,t=this.lighting;this.renderer.toneMappingExposure=e.exposure,this.scene.environmentIntensity=e.envIntensity,t.hemiLight.intensity=e.hemi,e.fog!=null&&((n=this.scene.fog)!=null&&n.isFogExp2)&&(this.scene.fog.density=e.fog),this.camCtrl.camera.fov=e.fov,this.camCtrl.controls.maxPolarAngle=e.maxPolar,this.camCtrl.controls.minDistance=e.minDist,this.camCtrl.camera.updateProjectionMatrix(),this._saved=null}exit(){var t;this.stop(!1),this.keyLight.visible=!1,this.rimLight.visible=!1,this.keyLight.intensity=this.rimLight.intensity=0,this.foregroundGroup.visible=!1,this._restoreBase();const e=this.getSpot();e&&((t=this.alina)==null||t.placeAtSpot(e)),this.active=!1,this.payload=null}resolve(e,t="9:16"){const n=this.getSpot(e.spotId);if(!n)throw new Error(`Spot desconocido: ${e.spotId}`);return bv({shot:e,spot:n,catalog:Yt,building:Lv,aspectRatio:t,baseMode:this.getBaseMode()})}apply(e,t="9:16"){var a,l,c;this.stop(!1),(a=this.prepareSpot)==null||a.call(this,e.spotId);const n=this.resolve(e,t);this._saveBase(),this.active=!0,this.shot=e,this.payload=n,(l=this.alina)!=null&&l.root&&(this.alina.root.rotation.y=n.alinaRotY,n.animation&&this.alina.playAnimation(n.animation,.25));const r=(d,u)=>{d.visible=!0,d.color.set(u.colorHex),d.intensity=u.intensity*Dv,d.angle=So.degToRad(Math.min(75,u.spotAngleDeg/2)),d.position.set(u.worldPos.x,u.worldPos.y,u.worldPos.z),d.target.position.set(u.targetPos.x,u.targetPos.y,u.targetPos.z),d.target.updateMatrixWorld()};r(this.keyLight,n.realtimeRig.keyLight),r(this.rimLight,n.realtimeRig.rimLight);const s=n.threeJsGrade,o=this._saved;return this.renderer.toneMappingExposure=s.toneMappingExposure,this.scene.environmentIntensity=o.envIntensity*s.environmentIntensityMultiplier*n.realtimeRig.reflectionMultiplier,this.lighting.hemiLight.intensity=o.hemi*n.realtimeRig.ambientMultiplier,(c=this.scene.fog)!=null&&c.isFogExp2&&n.realtimeRig.fogDensityOverride>0&&(this.scene.fog.density=n.realtimeRig.fogDensityOverride),this._setCamera(0,0),this._updateForegroundProp(n.foregroundProp),n}_updateForegroundProp(e){for(;this.foregroundGroup.children.length>0;)this.foregroundGroup.remove(this.foregroundGroup.children[0]);if(!e){this.foregroundGroup.visible=!1;return}const t=this.foregroundMeshes[e.propId]||this.foregroundMeshes.monstera_leaf;if(t){const n=t.clone(!0);n.traverse(r=>{r.isMesh&&(r.userData.maskId="foreground")}),n.scale.setScalar(e.scale||.3),this.foregroundGroup.add(n),this.foregroundGroup.position.set(e.worldPos.x,e.worldPos.y,e.worldPos.z),this.foregroundGroup.visible=!0}}seekNormalized(e,{cleanKeyframe:t=!0}={}){this.payload&&this._setCamera(e,t?0:e*this.payload.camera.durationSec,t)}_setCamera(e,t,n=!1){const r=this.payload;if(!r)return;const s=r.camera,o=gv(s.easing,e),a=Dl(s.startPos,s.endPos,o),l=Dl(s.startTarget,s.endTarget,o);if(s.handheldAmpM>0&&!n){const u=2*Math.PI*s.handheldHz;a.x+=Math.sin(t*u)*s.handheldAmpM*.6+Math.sin(t*u*.37+1.3)*s.handheldAmpM*.4,a.y+=Math.sin(t*u*2+.5)*s.handheldAmpM*.7,a.z+=Math.sin(t*u*.53+2.1)*s.handheldAmpM*.3}const c=this.camCtrl.camera;c.position.set(a.x,a.y,a.z),this.camCtrl.controls.target.set(l.x,l.y,l.z),this.camCtrl.isTransitioning=!1,c.fov=s.verticalFovDeg,c.updateProjectionMatrix(),this.camCtrl.controls.update(),s.rollDeg&&c.rotateZ(So.degToRad(s.rollDeg));const d=r.dof.startFocusDistM+(r.dof.endFocusDistM-r.dof.startFocusDistM)*o;this.focusDistM=d}play(e){this.payload&&(this.stop(!1),this.playing=!0,this.t0=performance.now(),this.onMoveEnd=e||null)}stop(e){if(!this.playing)return;this.playing=!1;const t=this.onMoveEnd;this.onMoveEnd=null,e&&t&&t()}update(){var e;if(!this.active)return!1;if(this.playing&&this.payload){const t=(performance.now()-this.t0)/1e3,n=this.payload.camera.durationSec,r=Math.min(1,t/n);if(this._setCamera(r,t),(e=this.onFrameHud)==null||e.call(this,{t:r,el:t,dur:n,focusM:this.focusDistM}),r>=1){this.playing=!1;const s=this.onMoveEnd;this.onMoveEnd=null,s==null||s()}return!0}return!1}}const Nv={environment:{id:0,hex:"#000000",rgb:[0,0,0],label:"Architecture & Furniture"},skin:{id:1,hex:"#FF3B30",rgb:[255,59,48],label:"Alina Skin (Face/Neck/Hands)"},eyes:{id:2,hex:"#34C759",rgb:[52,199,89],label:"Alina Emerald Iris & Sclera"},hair:{id:3,hex:"#FFCC00",rgb:[255,204,0],label:"Alina Copper Hair Strands"},wardrobe:{id:4,hex:"#007AFF",rgb:[0,122,255],label:"Alina Wardrobe Fabric"},foreground:{id:5,hex:"#AF52DE",rgb:[175,82,222],label:"Foreground Bokeh Prop"},mirror:{id:6,hex:"#00C7BE",rgb:[0,199,190],label:"Planar Mirror Active Disc"}},Co={fincher_cronenweth:{cameraProfile:"red_v_raptor",cameraLabel:"RED V-Raptor 8K VV",lensProfile:"zeiss_ultra_prime",lensLabel:"Zeiss Master / Ultra Prime",filmGrain:.025,colorScience:"Clinical cyan-amber separation, crisp micro-contrast, deep negative fill"},wong_kar_wai_doyle:{cameraProfile:"arriflex_35mm",cameraLabel:"ARRI Arriflex 35mm Film",lensProfile:"panavision_c_series",lensLabel:"Panavision C-Series Anamorphic",filmGrain:.055,colorScience:"Warm tungsten halation, oval anamorphic bokeh, lush emerald-crimson neon glow"},villeneuve_deakins:{cameraProfile:"arri_alexa_35",cameraLabel:"ARRI Alexa 35 / LF",lensProfile:"arri_signature",lensLabel:"ARRI Signature Prime",filmGrain:.03,colorScience:"Zero geometric distortion, smooth highlight roll-off, atmospheric single-source haze"},guadagnino_mukdeeprom:{cameraProfile:"film_35mm",cameraLabel:"35mm Film (Kodak Vision3 250D)",lensProfile:"cooke_s4",lensLabel:"Cooke S4/i Prime",filmGrain:.045,colorScience:'Warm Mediterranean skin roll-off ("Cooke Look"), tactile organic daylight bounce'},kubrick_alcott:{cameraProfile:"arri_alexa_35",cameraLabel:"ARRI Alexa 35",lensProfile:"canon_k35",lensLabel:"Canon K-35 / Zeiss Fast Vintage Prime",filmGrain:.04,colorScience:"2200K practical candlelight chiaroscuro, rich velvet shadow retention, warm amber flare"},lubezki_natural:{cameraProfile:"sony_venice",cameraLabel:"Sony Venice 2 8K",lensProfile:"arri_signature",lensLabel:"ARRI Master / Signature Wide",filmGrain:.03,colorScience:"High-latitude natural backlight, rectilinear wide-angle clarity, organic hair rim"},refn_neon_noir:{cameraProfile:"sony_venice",cameraLabel:"Sony Venice 2 8K",lensProfile:"hawk_v_lite",lensLabel:"Hawk V-Lite Anamorphic",filmGrain:.04,colorScience:"High-saturation magenta/cyan neon separation, deep obsidian marble blacks"},coppola_intimate:{cameraProfile:"arri_alexa_35",cameraLabel:"ARRI Alexa 35",lensProfile:"cooke_s4",lensLabel:"Cooke S4/i Portrait Prime",filmGrain:.035,colorScience:"Soft pastel highlight retention, creamy portrait depth transition, porcelain skin warmth"}},kv=[14,24,35,50,75];function Uv(i){return`${kv.reduce((t,n)=>Math.abs(n-i)<Math.abs(t-i)?n:t)}mm`}function Ia({focalMm:i,apertureFStop:e,focusDistM:t,sampleDistM:n,sensorHeightMm:r=36,imageHeightPx:s=1920}){const o=i,a=Math.max(1,e),l=Math.max(.25,t)*1e3,c=Math.max(.2,n)*1e3;if(l<=o+1)return 0;const u=Math.abs(o*o/(a*(l-o))*((c-l)/c))/r*s;return+Math.min(48,u).toFixed(2)}function Ov({shot:i,payload:e}){const t=i.cameraMoveId,n=!!(i.mirrorShot||i.shotTypeId==="ots_mirror"),r=i.focusMode==="rack_prop_to_iris"||t==="rack_focus_macro_to_eyes";if((t==="handheld_walking_lubezki"||["Walk","Rumba","HipHop"].includes(i.animation))&&!n&&!r){const o=t==="handheld_walking_lubezki";return{mode:"START_ONLY",exportEndFrame:!1,reason:o?"Walking/Handheld <=3.0s: START_ONLY evita foot-sliding; el micro-shake 1.7Hz se aplica con 4% overscan en post para 0% jelly-walls.":`Animación cíclica (${i.animation}): START_ONLY permite física corporal fluida sin interpolación robótica hacia pose fija.`,overscanHandheldPost:o?{enabled:!0,renderResolution:{width:1124,height:1998},deliveryCrop:{width:1080,height:1920},frequencyHz:e.camera.handheldHz||1.7,amplitudePx:14,maxClipDurationSec:3}:null}}return n?{mode:"START_END",exportEndFrame:!0,reason:"ots_mirror: ancla geométricamente la ley de reflexión y el paralaje doble entre nuca/hombro y espejo.",overscanHandheldPost:null}:r?{mode:"START_END",exportEndFrame:!0,reason:"Rack Focus óptico: Start tiene primer término nítido y End tiene iris/sujeto nítido con CoC físico exacto.",overscanHandheldPost:null}:["slow_dolly_pull_out","subtle_parallax_arc","pedestal_reveal_up","lateral_slider_truck"].includes(t)?{mode:"START_END",exportEndFrame:!0,reason:`Desoclusión espacial (${t}): End Frame inyecta la arquitectura real del set y bloquea invenciones de fondo.`,overscanHandheldPost:null}:e.foregroundProp&&t!=="static_breathing"?{mode:"START_END",exportEndFrame:!0,reason:"Foreground Framing con traslación: clava la velocidad diferencial de paralaje entre el prop a 0.48m y Alina.",overscanHandheldPost:null}:{mode:"START_ONLY",exportEndFrame:!1,reason:"Encuadre frontal acotado sin desoclusión nueva: START_ONLY + MoveSet nativo maximiza naturalidad facial y ocular.",overscanHandheldPost:null}}function Bv(i){switch(i){case"linear":return"linear";case"easeOutCubic":return"decelerate";case"easeInOutCubic":return"smooth_curve";case"easeInOutSine":default:return"smooth"}}function zv({shot:i,keyframeMode:e,catalog:t}){const r=nr(t).moves.get(i.cameraMoveId),s=i.motionStrength??(r==null?void 0:r.recommendedMotionStrength)??2.2,o=Math.min(.72,Math.max(.18,+((s-1)/3.5).toFixed(2))),a={static_breathing:{id:"static_locked",uiLabel:"Static / Subtle Breathing",guidedId:"none_keyframe_guided"},slow_dolly_push_in:{id:"dolly_in_slow",uiLabel:"Dolly In (Slow)",guidedId:"subtle_dolly_in"},slow_dolly_pull_out:{id:"dolly_out_slow",uiLabel:"Dolly Out (Slow)",guidedId:"subtle_dolly_out"},subtle_parallax_arc:{id:"arc_right_subtle",uiLabel:"Orbit / Arc (Low)",guidedId:"keyframe_arc_guided"},pedestal_reveal_up:{id:"crane_up_slow",uiLabel:"Crane / Pedestal Up",guidedId:"keyframe_pedestal_up"},lateral_slider_truck:{id:"truck_right",uiLabel:"Truck Right (Slider)",guidedId:"keyframe_truck_guided"},handheld_walking_lubezki:{id:"tracking_forward",uiLabel:"Tracking / Handheld Low",guidedId:"tracking_forward"},rack_focus_macro_to_eyes:{id:"rack_focus_lock",uiLabel:"Static + Optical Rack Focus",guidedId:"none_keyframe_guided"}},l=a[i.cameraMoveId]||a.static_breathing,c=e==="START_END";return{cameraMovement:c?l.guidedId:l.id,uiPresetLabel:c?`${l.uiLabel} [Keyframe-Guided · Low Intensity]`:l.uiLabel,speedRamp:c?"linear":Bv(r==null?void 0:r.easing),motionIntensity:c?Math.min(.32,o):o,antiDuplicationLock:c,operatorNote:c?"Start + End ya contienen el desplazamiento 3D exacto: en Higgsfield UI deja Camera Move en None/Subtle (<=30%) para no duplicar velocidad.":"Usa solo Start Frame y activa el preset indicado en Higgsfield Cinema Studio."}}function Hv({shot:i,spot:e,payload:t,catalog:n}){var M,T,S;const r=nr(n),s=r.lights.get(i.lightingSchemeId),o=r.moves.get(i.cameraMoveId),a=Math.round(Math.hypot(t.camera.endPos.x-t.camera.startPos.x,t.camera.endPos.y-t.camera.startPos.y,t.camera.endPos.z-t.camera.startPos.z)*100);let l="";const c=`${i.focalLengthMm}mm f/${i.apertureFStop}`;i.focusMode==="rack_prop_to_iris"||i.cameraMoveId==="rack_focus_macro_to_eyes"?l=`Smooth optical rack focus transition (${c}) pulling focus plane from near foreground at ${t.dof.startFocusDistM}m onto crisp target at ${t.dof.endFocusDistM}m with natural lens breathing, minimal ${a}cm axial glide`:i.mirrorShot||i.shotTypeId==="ots_mirror"?l=`Controlled ${a}cm over-the-shoulder push-in toward vanity mirror (${c}), optical focus locked at ${t.dof.startFocusDistM}m on the virtual reflection plane while near shoulder stays softly blurred`:i.cameraMoveId==="static_breathing"?l=`Locked cinema tripod (${c}), zero camera pan or drift, razor-sharp focus locked at ${t.dof.startFocusDistM}m`:i.cameraMoveId==="handheld_walking_lubezki"?l=`Smooth ${a}cm backward tracking camera keeping constant framing ahead of walking subject (${c}), level horizon, architectural verticals straight`:i.cameraMoveId==="subtle_parallax_arc"?l=`Gentle ${(o==null?void 0:o.arcDegrees)||14}-degree lateral parallax glide (${a}cm slider arc, ${c}), smooth multi-plane separation with focus locked on subject`:i.cameraMoveId==="pedestal_reveal_up"?l=`Smooth ${a}cm vertical pedestal rise (${c}), steady architectural verticals, focus locked at ${t.dof.endFocusDistM}m`:i.cameraMoveId==="lateral_slider_truck"?l=`Silky ${a}cm horizontal tabletop slider truck (${c}), zero tilt, crisp macro focus plane at ${t.dof.startFocusDistM}m`:i.cameraMoveId==="slow_dolly_pull_out"?l=`Controlled ${a}cm linear dolly pull-out revealing room architecture (${c}), focus continuously tracking subject`:l=`Precision ${a}cm linear dolly push-in along optical axis (${c}), zero roll, shallow depth of field locked on near iris at ${t.dof.endFocusDistM}m`;let d="";i.shotRole==="B-Roll"?d=`Zero human presence; static ${(((M=e==null?void 0:e.brolls)==null?void 0:M[i.brollIndex??0])||"tactile luxury object").replace(/^B-Roll \d+:\s*/i,"").toLowerCase()} anchored firmly on surface with realistic specular highlight shift as lens glides`:i.mirrorShot||i.shotTypeId==="ots_mirror"?d="Foreground back-of-head and shoulder silhouette remain poised and still while her crisp vanity mirror reflection maintains steady emerald eye contact, subtle left-corner smirk, single slow natural blink in exact optical sync":i.animation==="Walk"?d="Poised woman walks forward at unhurried natural pace, relaxed shoulders, steady forward gaze with subtle asymmetric left smirk, hands relaxed below frame":i.animation==="Rumba"||i.animation==="HipHop"?d="Fluid rhythmic torso and hip sway with feet grounded cleanly on floor, poised head control within front quadrant, natural blink and confident gaze":i.animation==="Laying"?d="Reclining woman rests calmly with slow subtle ribcage breathing, serene emerald eye lock toward lens, gentle unhurried blink, relaxed hands still":d="Poised woman maintains steady hypnotic eye contact with lens, subtle asymmetric left-corner smirk, single slow natural blink, gentle ribcage inhalation, hands resting completely still";const u=[];i.shotRole==="A-Roll"&&u.push(i.animation==="Walk"||i.animation==="Rumba"?"copper red hair waves move with natural inertial follow-through, subtle metallic earring sway":"fine loose copper hair strands settle naturally with barely perceptible air drift"),t.foregroundProp&&u.push(`out-of-focus foreground ${t.foregroundProp.name.toLowerCase()} shifts smoothly in near-plane bokeh parallax`),["bath","pool"].includes(i.spotId)?u.push("gentle dark water surface micro-ripples catching warm specular glints"):["boudoir","suite"].includes(i.spotId)||i.lightingSchemeId==="kubrick_candlelight_2200k"?u.push("subtle organic 2200K candle flame micro-shimmer"):["podcast","cafe","kitchen"].includes(i.spotId)&&u.push("delicate wisp of warm espresso steam rising softly");const f=u.join(", ")||"subtle atmospheric dust motes drifting in light beam",m=((T=s==null?void 0:s.realtimeKeyLight)==null?void 0:T.kelvin)??3200,g=((S=s==null?void 0:s.realtimeRimLight)==null?void 0:S.kelvin)??5400,_=`Constant ${m}K motivated key light and ${g}K rim separation (${(s==null?void 0:s.contrastRatio)||"4:1"} ratio), locked architectural shadow geometry, zero exposure pumping or color shift`,h=`[CAMERA: ${l}] [SUBJECT: ${d}] [PHYSICS: ${f}] [LIGHTING: ${_}]`,p=["plastic CGI skin","texture boiling","warped wall lines","jelly architecture","extra fingers","hand morphing","sudden zoom jump","exposure flicker"];return i.mirrorShot&&p.unshift("desynchronized mirror reflection","foreground head turning 180 degrees"),i.shotRole==="B-Roll"&&p.unshift("human face","hands entering frame"),{blocks:{camera:l,subject:d,physics:f,lighting:_},compiled:h,negativeGuardrails:p.join(", ")}}function Vv({shot:i,spot:e,payload:t,catalog:n,keyframeStrategy:r}){var m;const s=Co[i.directorStyleId]||Co.fincher_cronenweth,o=sc(n,"9:16"),a=["bath","pool"].includes(i.spotId)&&i.shotRole==="B-Roll",l=!!(i.mirrorShot||i.shotTypeId==="ots_mirror"),c=((m=t.foregroundProp)==null?void 0:m.distanceFromCameraM)??.48,d=t.foregroundProp?Ia({focalMm:i.focalLengthMm,apertureFStop:i.apertureFStop,focusDistM:t.dof.startFocusDistM,sampleDistM:c,sensorHeightMm:o.sensorHeightMm}):0,u=Ia({focalMm:i.focalLengthMm,apertureFStop:i.apertureFStop,focusDistM:t.dof.startFocusDistM,sampleDistM:t.dof.startFocusDistM+3.2,sensorHeightMm:o.sensorHeightMm}),f=Ia({focalMm:i.focalLengthMm,apertureFStop:i.apertureFStop,focusDistM:t.dof.endFocusDistM,sampleDistM:t.dof.endFocusDistM+3.2,sensorHeightMm:o.sensorHeightMm});return{pipelineVersion:"alina-render2real-v2.1",baseModel:"flux1-dev.safetensors",sampler:{name:"dpmpp_2m",scheduler:"beta",steps:28,fluxGuidance:3.2},pairedKeyframeLock:{enabled:r.exportEndFrame,sharedSeed:84729104,sharedSelfAttentionFromStart:r.exportEndFrame,lockedDepthMeters:t.depthBoundsM},globalStage1A:{denoise:a?.32:.56,preLuminanceFilmGrain:s.filmGrain,prompt:t.prompts.fluxClean||t.prompts.flux,controlNets:{depth:{model:"FLUX.1-dev-ControlNet-Union-Pro-2.0",inputPass:"depth",preprocessor:"NONE_RAW_METRIC_16BIT",strength:l?.35:.68,startPercent:0,endPercent:l?.42:.58,regionalMultipliers:{environment:1,skin:.85,hair:.65,foreground:.3,mirror:.35}},normals:{model:"FLUX.1-dev-ControlNet-Union-Pro-2.0",inputPass:"normals",preprocessor:"NONE_VIEWSPACE_NORMAL",strength:.42,startPercent:0,endPercent:.45,regionalMultipliers:{environment:1,wardrobe:.55,skin:.2,eyes:0,hair:0,foreground:0,mirror:0}},openPose:{enabled:i.shotRole==="A-Roll",inputPass:"openpose",strength:.75,startPercent:0,endPercent:.5}},kelvinChrominanceLock:{enabled:!0,referencePass:"beauty",colorSpace:"CIELAB_AB_ONLY",blendStrength:.55,kelvinKey:t.realtimeRig.keyLight.kelvin,kelvinRim:t.realtimeRig.rimLight.kelvin}},identityStage1B:{enabled:i.shotRole==="A-Roll",targetSemanticMasks:l?["mirror"]:["skin","eyes"],cropResolution:1024,cropPaddingPx:64,denoise:.36,lora:{file:"alina_vandijk_v2.safetensors",strengthModel:.85,strengthClip:.8},pulidFlux:{enabled:!0,referenceImage:"alina_master_id.png",weight:.75,endAt:.8},hairRefinementPass:{targetSemanticMasks:["hair"],denoise:.46,promptAppend:"individual copper red hair strands (#9E3D24 to #C26733), anisotropic rim sheen, zero plastic helmet clump"}},opticalCoCStage1C:{enabled:!0,focalMm:i.focalLengthMm,apertureFStop:i.apertureFStop,startFocusDistM:t.dof.startFocusDistM,endFocusDistM:t.dof.endFocusDistM,estimatedBlurRadiusPx1920:{startForegroundPropPx:d,startBackground3mPx:u,endBackground3mPx:f}},semanticPalette:Nv}}function Od({shot:i,spot:e,payload:t,catalog:n,sceneId:r=null}){const s=Co[i.directorStyleId]||Co.fincher_cronenweth,o=i.shotRole==="B-Roll"&&i.focalLengthMm>=95,a=o?"laowa_macro":s.lensProfile,l=o?"Laowa 100mm f/2.8 Macro 1:1":s.lensLabel,c=Ov({shot:i,payload:t}),d=zv({shot:i,keyframeMode:c.mode,catalog:n}),u=Hv({shot:i,spot:e,payload:t,catalog:n}),f=Vv({shot:i,spot:e,payload:t,catalog:n,keyframeStrategy:c}),m=i.durationSec<=3?3:5,g="frames_higgsfield_ready/start_real_1080x1920.png",_=c.exportEndFrame?"frames_higgsfield_ready/end_real_1080x1920.png":null;return{schemaVersion:"2.1.0",generatedAt:new Date().toISOString(),sceneId:r,shotId:i.shotId,spotId:i.spotId,spotName:(e==null?void 0:e.name)||i.spotId,shotRole:i.shotRole,engine:"Three.js Metric 1:1 Previz (Single-Source)",zeroWasteAudit:t.zeroWaste,keyframeStrategy:{mode:c.mode,exportEndFrame:c.exportEndFrame,reason:c.reason,startFrameFile:g,endFrameFile:_,overscanHandheldPost:c.overscanHandheldPost},higgsfieldCinemaStudio:{endpoint:"higgsfield/cinema-studio/4.0",aspectRatio:"9:16",resolution:"1080p",durationGenerateSec:m,editorialTrimSec:i.durationSec,cameraProfile:s.cameraProfile,cameraLabel:s.cameraLabel,lensProfile:a,lensLabel:l,focalLength:Uv(i.focalLengthMm),solverExactFocalMm:i.focalLengthMm,aperture:`f/${i.apertureFStop}`,cameraMovement:d.cameraMovement,uiPresetLabel:d.uiPresetLabel,speedRamp:d.speedRamp,motionIntensity:d.motionIntensity,antiDuplicationLock:d.antiDuplicationLock,operatorChecklist:d.operatorNote},structuredPrompt:u,opticsTelemetry:{sensorGateMm:sc(n,"9:16"),verticalFovDeg:t.camera.verticalFovDeg,startPosM:t.camera.startPos,endPosM:t.camera.endPos,startFocusDistM:t.dof.startFocusDistM,endFocusDistM:t.dof.endFocusDistM,depthBoundsLockedM:t.depthBoundsM,kelvinKey:t.realtimeRig.keyLight.kelvin,kelvinRim:t.realtimeRig.rimLight.kelvin,mirrorShot:!!i.mirrorShot,foregroundProp:t.foregroundProp},raw3DPasses:{start:{beauty:"frames_3d_raw/start_beauty_1080x1920.png",depth:"frames_3d_raw/start_depth_1080x1920.png",normals:"frames_3d_raw/start_normals_1080x1920.png",mask:"frames_3d_raw/start_mask_1080x1920.png",openposePng:i.shotRole==="A-Roll"?"frames_3d_raw/start_openpose_1080x1920.png":null,openposeJson:i.shotRole==="A-Roll"?"frames_3d_raw/start_openpose.json":null},end:c.exportEndFrame?{beauty:"frames_3d_raw/end_beauty_1080x1920.png",depth:"frames_3d_raw/end_depth_1080x1920.png",normals:"frames_3d_raw/end_normals_1080x1920.png",mask:"frames_3d_raw/end_mask_1080x1920.png",openposePng:i.shotRole==="A-Roll"?"frames_3d_raw/end_openpose_1080x1920.png":null,openposeJson:i.shotRole==="A-Roll"?"frames_3d_raw/end_openpose.json":null}:null},renderToRealComfyJob:f}}const Gv=(()=>{const i=new Uint32Array(256);for(let e=0;e<256;e++){let t=e;for(let n=0;n<8;n++)t=t&1?3988292384^t>>>1:t>>>1;i[e]=t>>>0}return i})();function Wv(i){let e=4294967295;for(let t=0;t<i.length;t++)e=Gv[(e^i[t])&255]^e>>>8;return(e^4294967295)>>>0}function jv(i){const e=i.indexOf(","),t=e>=0?i.slice(e+1):i,n=atob(t),r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}async function $v(i){return i instanceof Uint8Array?i:typeof i=="string"?i.startsWith("data:")?jv(i):new TextEncoder().encode(i):typeof Blob<"u"&&i instanceof Blob?new Uint8Array(await i.arrayBuffer()):new TextEncoder().encode(JSON.stringify(i,null,2))}async function Io(i){const e=new TextEncoder,t=[];let n=0;const r=new Date,s=(r.getHours()&31)<<11|(r.getMinutes()&63)<<5|r.getSeconds()>>1&31,o=(r.getFullYear()-1980&127)<<9|(r.getMonth()+1&15)<<5|r.getDate()&31,a=[];for(const f of i){if(!f||f.data==null)continue;const m=e.encode(f.path.replace(/^\/+/,"")),g=await $v(f.data),_=Wv(g),h=new Uint8Array(30+m.length),p=new DataView(h.buffer);p.setUint32(0,67324752,!0),p.setUint16(4,20,!0),p.setUint16(6,2048,!0),p.setUint16(8,0,!0),p.setUint16(10,s,!0),p.setUint16(12,o,!0),p.setUint32(14,_,!0),p.setUint32(18,g.length,!0),p.setUint32(22,g.length,!0),p.setUint16(26,m.length,!0),p.setUint16(28,0,!0),h.set(m,30),t.push({nameBytes:m,crc:_,size:g.length,offset:n,dosTime:s,dosDate:o}),a.push(h,g),n+=h.length+g.length}const l=n;for(const f of t){const m=new Uint8Array(46+f.nameBytes.length),g=new DataView(m.buffer);g.setUint32(0,33639248,!0),g.setUint16(4,20,!0),g.setUint16(6,20,!0),g.setUint16(8,2048,!0),g.setUint16(10,0,!0),g.setUint16(12,f.dosTime,!0),g.setUint16(14,f.dosDate,!0),g.setUint32(16,f.crc,!0),g.setUint32(20,f.size,!0),g.setUint32(24,f.size,!0),g.setUint16(28,f.nameBytes.length,!0),g.setUint16(30,0,!0),g.setUint16(32,0,!0),g.setUint16(34,0,!0),g.setUint16(36,0,!0),g.setUint32(38,0,!0),g.setUint32(42,f.offset,!0),m.set(f.nameBytes,46),a.push(m),n+=m.length}const c=n-l,d=new Uint8Array(22),u=new DataView(d.buffer);return u.setUint32(0,101010256,!0),u.setUint16(4,0,!0),u.setUint16(6,0,!0),u.setUint16(8,t.length,!0),u.setUint16(10,t.length,!0),u.setUint32(12,c,!0),u.setUint32(16,l,!0),u.setUint16(20,0,!0),a.push(d),new Blob(a,{type:"application/zip"})}const Xv=[{sceneId:"scene_01_podcast_fincher",title:"The Mind Sanctuary — Diagnóstico de Control (Fincher 4-Shot)",chapterRef:"Capítulo 1: El Arte de Ceder el Control",targetPlatform:"Fanvue VIP",aspectRatio:"9:16",baseLightingMode:"night",audioTrack:{provider:"ElevenLabs",voiceId:"Alina-Hypno-v1",bpm:72,durationSec:12,scriptFull:"Llevas diez horas resolviendo problemas de otros... ¿cuándo fue la última vez que alguien tomó el mando por ti? [pausa de 2.0s] Entra. Cierra la puerta. Esta noche decido yo."},shots:[{shotId:"s01_podcast_aroll_open",order:1,spotId:"podcast",shotRole:"A-Roll",directorStyleId:"fincher_cronenweth",shotTypeId:"mcu_interview",cameraMoveId:"slow_dolly_push_in",lightingSchemeId:"fincher_top_soft_negfill",focalLengthMm:85,apertureFStop:1.4,durationSec:3.5,animation:"Idle",focusMode:"iris_lock",scriptSegment:"Llevas diez horas resolviendo problemas de otros...",mirrorShot:!1,motionStrength:2.2,controlNetOverrides:{depthWeight:.9,normalWeight:.75,openPoseWeight:1,denoisingStrength:.52},exportPasses:["beauty","depth","normal","openpose2d","mask"]},{shotId:"s01_podcast_broll_espresso",order:2,spotId:"podcast",shotRole:"B-Roll",directorStyleId:"fincher_cronenweth",shotTypeId:"macro_broll_prop",cameraMoveId:"lateral_slider_truck",lightingSchemeId:"fincher_top_soft_negfill",focalLengthMm:100,apertureFStop:2.8,durationSec:2.5,animation:"Idle",focusMode:"macro_prop_lock",brollIndex:0,scriptSegment:"¿cuándo fue la última vez...",mirrorShot:!1,motionStrength:2.5,controlNetOverrides:{depthWeight:.85,normalWeight:.8,openPoseWeight:0,denoisingStrength:.32},exportPasses:["beauty","depth","normal"]},{shotId:"s01_podcast_broll_books",order:3,spotId:"podcast",shotRole:"B-Roll",directorStyleId:"fincher_cronenweth",shotTypeId:"macro_broll_prop",cameraMoveId:"rack_focus_macro_to_eyes",lightingSchemeId:"rembrandt_chiaroscuro",focalLengthMm:100,apertureFStop:2.8,durationSec:2.5,animation:"Idle",focusMode:"rack_prop_to_iris",brollIndex:1,scriptSegment:"...que alguien tomó el mando por ti? [pausa]",mirrorShot:!1,motionStrength:2.2,controlNetOverrides:{depthWeight:.85,normalWeight:.8,openPoseWeight:0,denoisingStrength:.3},exportPasses:["beauty","depth","normal"]},{shotId:"s01_podcast_aroll_close",order:4,spotId:"podcast",shotRole:"A-Roll",directorStyleId:"fincher_cronenweth",shotTypeId:"cu_portrait",cameraMoveId:"static_breathing",lightingSchemeId:"fincher_top_soft_negfill",focalLengthMm:85,apertureFStop:1.4,durationSec:3.5,animation:"Idle",focusMode:"iris_lock",scriptSegment:"Entra. Cierra la puerta. Esta noche decido yo.",mirrorShot:!1,motionStrength:2,controlNetOverrides:{depthWeight:.9,normalWeight:.8,openPoseWeight:1,denoisingStrength:.5},exportPasses:["beauty","depth","normal","openpose2d","mask"]}]},{sceneId:"scene_02_vanity_wong_mirror",title:"El Tocador Vanity — Espejo Planar & Confesión (Wong Kar-wai)",chapterRef:"Capítulo 2: Desarme Psicológico Frente al Espejo",targetPlatform:"Instagram Reels",aspectRatio:"9:16",baseLightingMode:"night",audioTrack:{provider:"ElevenLabs",voiceId:"Alina-Hypno-v1",bpm:68,durationSec:12,scriptFull:"Te pasas el día sosteniendo el personaje... fingiendo que no pesa. [pausa de 2.0s] Frente a este espejo solo existe la verdad. Déjame ver quién eres cuando nadie te está evaluando."},shots:[{shotId:"s02_vanity_aroll_ots_mirror",order:1,spotId:"vanity",shotRole:"A-Roll",directorStyleId:"wong_kar_wai_doyle",shotTypeId:"ots_mirror",cameraMoveId:"slow_dolly_push_in",lightingSchemeId:"coppola_soft_window_spa",focalLengthMm:50,apertureFStop:1.4,durationSec:3.5,animation:"Idle",focusMode:"mirror_reflection_plane",scriptSegment:"Te pasas el día sosteniendo el personaje...",mirrorShot:!0,foregroundFraming:!0,foregroundPropId:"perfume_bottle",motionStrength:2.3,controlNetOverrides:{depthWeight:.35,normalWeight:.85,openPoseWeight:1,cannyWeight:.65,denoisingStrength:.48},exportPasses:["beauty","depth","normal","openpose2d","mask"]},{shotId:"s02_vanity_broll_lipstick",order:2,spotId:"vanity",shotRole:"B-Roll",directorStyleId:"wong_kar_wai_doyle",shotTypeId:"macro_broll_prop",cameraMoveId:"lateral_slider_truck",lightingSchemeId:"wong_neon_practical",focalLengthMm:100,apertureFStop:2,durationSec:2.5,animation:"Idle",focusMode:"macro_prop_lock",brollIndex:0,scriptSegment:"...fingiendo que no pesa.",mirrorShot:!1,motionStrength:2.6,controlNetOverrides:{depthWeight:.85,normalWeight:.75,openPoseWeight:0,denoisingStrength:.3},exportPasses:["beauty","depth","normal"]},{shotId:"s02_vanity_broll_bulbs",order:3,spotId:"vanity",shotRole:"B-Roll",directorStyleId:"coppola_intimate",shotTypeId:"macro_broll_prop",cameraMoveId:"rack_focus_macro_to_eyes",lightingSchemeId:"coppola_soft_window_spa",focalLengthMm:85,apertureFStop:1.4,durationSec:2.5,animation:"Idle",focusMode:"rack_prop_to_iris",brollIndex:1,scriptSegment:"Frente a este espejo solo existe la verdad.",mirrorShot:!0,motionStrength:2.2,controlNetOverrides:{depthWeight:.35,normalWeight:.8,openPoseWeight:0,cannyWeight:.6,denoisingStrength:.35},exportPasses:["beauty","depth","normal"]},{shotId:"s02_vanity_aroll_cu_close",order:4,spotId:"vanity",shotRole:"A-Roll",directorStyleId:"coppola_intimate",shotTypeId:"cu_portrait",cameraMoveId:"subtle_parallax_arc",lightingSchemeId:"coppola_soft_window_spa",focalLengthMm:85,apertureFStop:1.4,durationSec:3.5,animation:"Idle",focusMode:"iris_lock",scriptSegment:"Déjame ver quién eres cuando nadie te está evaluando.",mirrorShot:!1,motionStrength:2.1,controlNetOverrides:{depthWeight:.9,normalWeight:.8,openPoseWeight:1,denoisingStrength:.48},exportPasses:["beauty","depth","normal","openpose2d","mask"]}]},{sceneId:"scene_03_pool_villeneuve_sunset",title:"The Inner Circle Rooftop — Atardecer Monumental (Villeneuve / Deakins)",chapterRef:"Capítulo 4: Membresía VIP & Silencio en la Cima",targetPlatform:"YouTube Shorts",aspectRatio:"9:16",baseLightingMode:"day",audioTrack:{provider:"ElevenLabs",voiceId:"Alina-Hypno-v1",bpm:60,durationSec:12,scriptFull:"Cuando estás arriba, el ruido de abajo se disuelve. Aquí solo entra quien comprende que liderar también exige saber rendirse. [pausa de 2.0s] Bienvenido al círculo íntimo."},shots:[{shotId:"s03_pool_aroll_pedestal_ws",order:1,spotId:"pool",shotRole:"A-Roll",directorStyleId:"villeneuve_deakins",shotTypeId:"ws_architectural",cameraMoveId:"pedestal_reveal_up",lightingSchemeId:"deakins_single_window",focalLengthMm:40,apertureFStop:2,durationSec:3.5,animation:"Idle",focusMode:"iris_lock",scriptSegment:"Cuando estás arriba, el ruido de abajo se disuelve.",mirrorShot:!1,motionStrength:2.2,controlNetOverrides:{depthWeight:.92,normalWeight:.75,openPoseWeight:1,denoisingStrength:.5},exportPasses:["beauty","depth","normal","openpose2d","mask"]},{shotId:"s03_pool_broll_water_ripples",order:2,spotId:"pool",shotRole:"B-Roll",directorStyleId:"villeneuve_deakins",shotTypeId:"macro_broll_prop",cameraMoveId:"lateral_slider_truck",lightingSchemeId:"deakins_single_window",focalLengthMm:100,apertureFStop:2.8,durationSec:2.5,animation:"Idle",focusMode:"macro_prop_lock",brollIndex:0,scriptSegment:"Aquí solo entra quien comprende...",mirrorShot:!1,motionStrength:2.4,controlNetOverrides:{depthWeight:.8,normalWeight:.85,openPoseWeight:0,denoisingStrength:.28},exportPasses:["beauty","depth","normal"]},{shotId:"s03_pool_broll_lounger_glass",order:3,spotId:"pool",shotRole:"B-Roll",directorStyleId:"guadagnino_mukdeeprom",shotTypeId:"macro_broll_prop",cameraMoveId:"rack_focus_macro_to_eyes",lightingSchemeId:"guadagnino_golden_bounce",focalLengthMm:85,apertureFStop:2,durationSec:2.5,animation:"Idle",focusMode:"rack_prop_to_iris",brollIndex:1,scriptSegment:"...que liderar también exige saber rendirse.",mirrorShot:!1,motionStrength:2.3,controlNetOverrides:{depthWeight:.85,normalWeight:.8,openPoseWeight:0,denoisingStrength:.3},exportPasses:["beauty","depth","normal"]},{shotId:"s03_pool_aroll_cu_sunset",order:4,spotId:"pool",shotRole:"A-Roll",directorStyleId:"villeneuve_deakins",shotTypeId:"cu_portrait",cameraMoveId:"slow_dolly_push_in",lightingSchemeId:"lubezki_ambient_backlight",focalLengthMm:85,apertureFStop:1.4,durationSec:3.5,animation:"Idle",focusMode:"iris_lock",scriptSegment:"Bienvenido al círculo íntimo.",mirrorShot:!1,motionStrength:2.1,controlNetOverrides:{depthWeight:.9,normalWeight:.8,openPoseWeight:1,denoisingStrength:.48},exportPasses:["beauty","depth","normal","openpose2d","mask"]}]}],qv={storyboard:Xv},En=nr(Yt),cs=[24,28,35,40,50,85,100],Yv={iris_lock:"Iris (lock)",macro_prop_lock:"Prop macro (lock)",rack_prop_to_iris:"Rack prop → iris",mirror_reflection_plane:"Plano del espejo"},Un=i=>String(i).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Sr=(i,e,t)=>`<option value="${Un(i)}" ${t?"selected":""}>${Un(e)}</option>`;function Bd(i,e){const t=URL.createObjectURL(i),n=document.createElement("a");n.href=t,n.download=e,document.body.appendChild(n),n.click(),document.body.removeChild(n),setTimeout(()=>URL.revokeObjectURL(t),2500)}function Kv(i,e){var I;const{director:t}=e,n={directorId:"fincher_cronenweth",shotTypeId:"mcu_interview",moveId:"slow_dolly_push_in",lightId:"fincher_top_soft_negfill",lens:85,aperture:1.4,role:"A",focusOverride:"auto",scene:null,sceneKey:"auto",playingScene:!1,sceneAbort:!1,foregroundFraming:!1,foregroundPropId:null,lastManifest:null};i.innerHTML=`
  <div class="bg-[#12141a] border border-white/10 rounded-2xl p-4 shadow-2xl space-y-3" id="cinema-card">
    <div class="flex items-center justify-between pb-2 border-b border-white/5">
      <h2 class="text-xs font-bold tracking-wider uppercase text-slate-200">🎬 Director & Higgsfield Pack</h2>
      <div class="flex items-center gap-1.5">
        <span id="cin-zw" class="text-[10px] font-mono px-2 py-0.5 rounded-full border border-white/10 text-slate-400">—</span>
        <button id="cin-exit" class="hidden text-[10px] font-mono px-2 py-0.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10">✕ Salir</button>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-2 text-[11px]">
      <label class="space-y-1"><span class="text-slate-400">Director</span>
        <select id="cin-dir" class="w-full bg-black/50 border border-white/10 rounded-lg p-1.5 text-white">${Yt.directorStyles.map(x=>Sr(x.id,x.name.split("—")[0].trim(),x.id===n.directorId)).join("")}</select></label>
      <label class="space-y-1"><span class="text-slate-400">Toma / Encuadre</span>
        <select id="cin-shot" class="w-full bg-black/50 border border-white/10 rounded-lg p-1.5 text-white">${Yt.shotTypes.map(x=>Sr(x.id,x.label.split("(")[0].trim(),x.id===n.shotTypeId)).join("")}</select></label>
      <label class="space-y-1"><span class="text-slate-400">Desplazamiento</span>
        <select id="cin-move" class="w-full bg-black/50 border border-white/10 rounded-lg p-1.5 text-white">${Yt.cameraMoves.map(x=>Sr(x.id,x.label.split("(")[0].trim(),x.id===n.moveId)).join("")}</select></label>
      <label class="space-y-1"><span class="text-slate-400">Iluminación</span>
        <select id="cin-light" class="w-full bg-black/50 border border-white/10 rounded-lg p-1.5 text-white">${Yt.lightingSchemes.map(x=>Sr(x.id,x.label.split("(")[0].trim(),x.id===n.lightId)).join("")}</select></label>
      <label class="space-y-1"><span class="text-slate-400">Lente (Gate 35mm)</span>
        <select id="cin-lens" class="w-full bg-black/50 border border-white/10 rounded-lg p-1.5 text-white">${cs.map(x=>Sr(x,`${x} mm`,x===n.lens)).join("")}</select></label>
      <label class="space-y-1"><span class="text-slate-400">Rol / Foco</span>
        <div class="grid grid-cols-2 gap-1">
          <select id="cin-role" class="w-full bg-black/50 border border-white/10 rounded-lg p-1.5 text-white">
            <option value="A">A-Roll</option><option value="B0">B-Roll 1</option><option value="B1">B-Roll 2</option></select>
          <select id="cin-focus" class="w-full bg-black/50 border border-white/10 rounded-lg p-1.5 text-white" title="Modo de enfoque óptico">
            <option value="auto">Foco Auto</option>
            <option value="iris_lock">Iris Lock</option>
            <option value="rack_prop_to_iris">Rack Focus</option>
            <option value="mirror_reflection_plane">Espejo</option>
          </select>
        </div>
      </label>
    </div>

    <!-- Foreground Framing (Bokeh f/1.4) -->
    <div class="flex items-center justify-between px-2.5 py-1.5 bg-black/35 rounded-lg border border-white/10 text-[11px]">
      <label class="flex items-center gap-2 cursor-pointer select-none">
        <input type="checkbox" id="cin-fg-toggle" class="accent-[#c86446] rounded cursor-pointer">
        <span class="text-slate-200 font-medium">🌿 Primer Término (Bokeh CoC f/1.4)</span>
      </label>
      <select id="cin-fg-prop" class="hidden bg-black/60 border border-white/15 rounded px-1.5 py-0.5 text-[10px] text-slate-200 font-mono">
        <option value="auto">Auto (por spot)</option>
        <option value="monstera_leaf">Hoja Monstera</option>
        <option value="crystal_glass">Copa Cristal</option>
        <option value="vintage_microphone">Micrófono</option>
        <option value="perfume_bottle">Perfume Latón</option>
      </select>
    </div>

    <div class="grid grid-cols-3 gap-1.5 text-[11px]">
      <button id="cin-recipe" class="py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10" title="Carga la receta recomendada para el spot activo">🎯 Receta spot</button>
      <button id="cin-apply" class="py-1.5 rounded-lg bg-[#c86446]/80 hover:bg-[#c86446] text-white font-semibold">📐 Aplicar</button>
      <button id="cin-play" class="py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold">▶ Mover</button>
    </div>

    <div id="cin-readout" class="grid grid-cols-2 gap-x-3 gap-y-0.5 text-[10px] font-mono text-slate-400 bg-black/40 rounded-lg p-2 border border-white/5"></div>
    <div id="cin-warn" class="hidden text-[10px] font-mono text-amber-300 bg-amber-500/10 border border-amber-500/20 rounded-lg p-2"></div>

    <!-- Tarjeta Determinista Higgsfield Cinema Studio 4.0 -->
    <div class="p-2.5 bg-gradient-to-br from-[#191c26] to-[#0f1117] border border-[#c86446]/35 rounded-xl space-y-2">
      <div class="flex items-center justify-between gap-2">
        <span class="text-[10px] uppercase tracking-wider font-bold text-[#f29979]">🎥 Higgsfield Cinema Studio Preset</span>
        <span id="cin-hf-mode" class="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full border border-emerald-500/40 bg-emerald-500/15 text-emerald-300">START ONLY</span>
      </div>
      <div id="cin-hf-specs" class="grid grid-cols-2 gap-x-2 gap-y-1 text-[10px] font-mono text-slate-300"></div>
      <div id="cin-hf-note" class="text-[9.5px] text-slate-400 leading-snug bg-black/40 rounded-lg px-2 py-1 border border-white/5"></div>
    </div>

    <div class="space-y-1.5">
      <div class="flex items-center justify-between">
        <span class="text-[10px] uppercase tracking-wider text-emerald-300 font-semibold">1. Render-to-Real Prompt (Flux.1 Dev + CN)</span>
        <button id="cin-copy-flux" class="text-[10px] text-[#f29979] hover:text-white font-mono">Copiar</button>
      </div>
      <div id="cin-flux" class="p-2 bg-black/60 border border-white/5 rounded-lg text-slate-300 text-[10px] font-mono leading-relaxed max-h-16 overflow-y-auto select-all"></div>

      <div class="flex items-center justify-between">
        <span class="text-[10px] uppercase tracking-wider text-amber-300 font-semibold">2. Higgsfield Structured Delta Prompt (I2V)</span>
        <button id="cin-copy-motion" class="text-[10px] text-[#f29979] hover:text-white font-mono">Copiar</button>
      </div>
      <div id="cin-motion" class="p-2 bg-black/60 border border-white/5 rounded-lg text-amber-100/95 text-[10px] font-mono leading-relaxed max-h-24 overflow-y-auto select-all"></div>
    </div>

    <button id="cin-export-pack" class="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-[#c86446] to-[#9a3412] hover:opacity-95 text-white text-xs font-bold shadow-lg copper-glow flex items-center justify-center gap-1.5">
      <span>📦 Exportar Shot Pack Higgsfield (.zip)</span>
    </button>

    <div class="pt-2 border-t border-white/5 space-y-2">
      <div class="flex items-center justify-between">
        <span class="text-[10px] uppercase tracking-wider text-slate-300 font-bold">🎞️ Maqueta de escena (Storyboard 1:2)</span>
        <span id="cin-scene-badge" class="text-[10px] font-mono px-2 py-0.5 rounded-full border border-white/10 text-slate-400">—</span>
      </div>
      <select id="cin-scene" class="w-full bg-black/50 border border-white/10 rounded-lg p-1.5 text-white text-[11px]"></select>
      <div id="cin-chips" class="flex flex-wrap gap-1"></div>
      <div class="grid grid-cols-3 gap-1.5 text-[11px]">
        <button id="cin-scene-play" class="py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold">▶ Escena</button>
        <button id="cin-scene-rec" class="py-1.5 rounded-lg bg-rose-600/80 hover:bg-rose-500 text-white font-semibold">⏺ Animatic</button>
        <button id="cin-scene-pack" class="py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-slate-100 border border-white/15 font-semibold" title="Exporta todos los planos de la escena en un único ZIP">📦 Escena ZIP</button>
      </div>
    </div>
  </div>`;const r=x=>i.querySelector("#"+x),s=document.createElement("div");s.id="cinema-hud",s.className="hidden absolute top-14 left-1/2 -translate-x-1/2 z-20 pointer-events-none text-center",s.innerHTML=`<div class="bg-black/80 backdrop-blur-md border border-white/15 rounded-lg px-3 py-1.5 text-[10px] font-mono text-slate-200 shadow-xl">
      <div id="cin-hud-title" class="font-bold text-[#f29979]"></div><div id="cin-hud-sub" class="text-slate-400"></div>
      <div class="h-1 mt-1 bg-white/10 rounded overflow-hidden"><div id="cin-hud-bar" class="h-full bg-emerald-400" style="width:0%"></div></div></div>`,(I=document.getElementById("viewport-wrapper"))==null||I.appendChild(s);const o=x=>s.classList.toggle("hidden",!x),a=()=>({role:n.role==="A"?"A-Roll":"B-Roll",brollIndex:n.role==="A"?0:Number(n.role[1])});function l(){var O,Z;const x=e.getActiveSpot(),y=En.moves.get(n.moveId),b=En.shotTypes.get(n.shotTypeId),v=Yt.spotCinematographyMap[x.id],{role:A,brollIndex:P}=a(),F=b.id==="ots_mirror"&&!!((O=v==null?void 0:v.specialFlags)!=null&&O.mirrorShot);let N=F?"mirror_reflection_plane":y.id==="rack_focus_macro_to_eyes"?"rack_prop_to_iris":A==="B-Roll"?"macro_prop_lock":"iris_lock";n.focusOverride!=="auto"&&(N=n.focusOverride);const z={shotId:`manual_${x.id}_${A==="A-Roll"?"a":"b"+P}`,spotId:x.id,shotRole:A,brollIndex:P,directorStyleId:n.directorId,shotTypeId:n.shotTypeId,cameraMoveId:n.moveId,lightingSchemeId:n.lightId,focalLengthMm:n.lens,apertureFStop:n.aperture,durationSec:Math.min(4,y.recommendedDurationSec),animation:((Z=e.getAnim)==null?void 0:Z.call(e))||x.defaultAnim||"Idle",focusMode:N,mirrorShot:F,motionStrength:y.recommendedMotionStrength,foregroundFraming:!!(n.foregroundFraming||N==="rack_prop_to_iris"),foregroundPropId:n.foregroundPropId||void 0};return F&&(z.controlNetOverrides={depthWeight:v.specialFlags.controlNetDepthWeightOverride??.35}),z}function c(){r("cin-dir").value=n.directorId,r("cin-shot").value=n.shotTypeId,r("cin-move").value=n.moveId,r("cin-light").value=n.lightId,r("cin-lens").value=String(n.lens),r("cin-role").value=n.role,r("cin-focus").value=n.focusOverride,r("cin-fg-toggle").checked=!!n.foregroundFraming,r("cin-fg-prop").classList.toggle("hidden",!n.foregroundFraming),n.foregroundPropId&&(r("cin-fg-prop").value=n.foregroundPropId)}function d(x,y){const b=e.getSpot(y.spotId)||e.getActiveSpot(),v=Od({shot:y,spot:b,payload:x,catalog:Yt,sceneId:n.sceneKey});n.lastManifest=v;const A=En.lights.get(y.lightingSchemeId),P=x.zeroWaste;r("cin-readout").innerHTML=[["vFOV",`${x.camera.verticalFovDeg}° (${y.focalLengthMm}mm f/${y.apertureFStop})`],["Foco",`${x.dof.startFocusDistM}→${x.dof.endFocusDistM} m`],["Depth Lock",`${x.depthBoundsM.uNear}–${x.depthBoundsM.uFar} m`],["Key/Rim",`${A.realtimeKeyLight.kelvin}K / ${A.realtimeRimLight.kelvin}K · ${A.contrastRatio}`],["Primer Plano",x.foregroundProp?`🌿 ${x.foregroundProp.name}`:"Desactivado"],["Foco en",Yv[y.focusMode]||y.focusMode]].map(([X,se])=>`<div><span class="text-slate-500">${X}</span> <span class="text-slate-200">${Un(se)}</span></div>`).join("");const F=r("cin-zw");F.textContent=P.ok?"Zero-Waste ✔":"Zero-Waste ✖",F.className=`text-[10px] font-mono px-2 py-0.5 rounded-full border ${P.ok?"text-emerald-300 border-emerald-500/30 bg-emerald-500/10":"text-rose-300 border-rose-500/30 bg-rose-500/10"}`;const N=[...P.issues,...x.warnings];r("cin-warn").classList.toggle("hidden",N.length===0),r("cin-warn").innerHTML=N.map(X=>"⚠ "+Un(X)).join("<br>");const z=v.higgsfieldCinemaStudio,O=v.keyframeStrategy,Z=r("cin-hf-mode");Z.textContent=O.mode==="START_END"?"START + END (LOCKED)":"START ONLY + MOVESET",Z.className=O.mode==="START_END"?"text-[9px] font-mono font-bold px-2 py-0.5 rounded-full border border-emerald-500/40 bg-emerald-500/15 text-emerald-300":"text-[9px] font-mono font-bold px-2 py-0.5 rounded-full border border-amber-500/40 bg-amber-500/15 text-amber-300",r("cin-hf-specs").innerHTML=[["Body",z.cameraLabel],["Glass",z.lensLabel],["Optics",`${z.focalLength} · ${z.aperture}`],["Move",`${z.uiPresetLabel.split("[")[0].trim()} (${Math.round(z.motionIntensity*100)}%)`]].map(([X,se])=>`<div class="truncate" title="${Un(se)}"><span class="text-slate-500">${X}:</span> <span class="text-white">${Un(se)}</span></div>`).join(""),r("cin-hf-note").textContent=`💡 ${O.reason}`,r("cin-flux").textContent=x.prompts.fluxClean||x.prompts.flux,r("cin-motion").textContent=v.structuredPrompt.compiled}function u(x,y){const b=t.apply(x,"9:16");return r("cin-exit").classList.remove("hidden"),d(b,x),y||e.setStatus(`🎬 <span class="text-emerald-400 font-bold">${Un(En.directors.get(x.directorStyleId).name.split("—")[0].trim())}</span> · ${Un(En.shotTypes.get(x.shotTypeId).label.split("(")[0].trim())} · ${x.focalLengthMm}mm`),b}function f(x,y=""){r("cin-hud-title").textContent=`${x.shotRole} · ${En.shotTypes.get(x.shotTypeId).label.split("(")[0].trim()}`,r("cin-hud-sub").textContent=`${En.directors.get(x.directorStyleId).name.split("—")[0].trim()} · ${x.focalLengthMm}mm f/${x.apertureFStop} · ${En.moves.get(x.cameraMoveId).label.split("(")[0].trim()}${y}`}t.onFrameHud=({t:x})=>{r("cin-hud-bar").style.width=`${Math.round(x*100)}%`};function m(x,y=""){var X;const b=e.getSpot(x.spotId)||e.getActiveSpot(),v=t.apply(x,"9:16"),A=Od({shot:x,spot:b,payload:v,catalog:Yt,sceneId:n.sceneKey}),P=A.keyframeStrategy.overscanHandheldPost,F=P!=null&&P.enabled?P.renderResolution.width:1080,N=P!=null&&P.enabled?P.renderResolution.height:1920,z=[],O=((X=t.alina)==null?void 0:X.root)||null,Z=(se,le)=>{t.seekNormalized(se,{cleanKeyframe:!0});const ve=se===0?v.dof.startFocusDistM:v.dof.endFocusDistM,Ne={enabled:!0,focalLengthMm:x.focalLengthMm,apertureFStop:x.apertureFStop,focusDistM:ve,sensorHeightMm:36};if(z.push({path:`${y}frames_3d_raw/${le}_beauty_1080x1920.png`,data:e.camCtrl.renderVertical916DataURL(F,N,"beauty",{dof:Ne})}),z.push({path:`${y}frames_3d_raw/${le}_depth_1080x1920.png`,data:e.camCtrl.renderVertical916DataURL(F,N,"depth",{depthBoundsM:v.depthBoundsM})}),z.push({path:`${y}frames_3d_raw/${le}_normals_1080x1920.png`,data:e.camCtrl.renderVertical916DataURL(F,N,"normals")}),z.push({path:`${y}frames_3d_raw/${le}_mask_1080x1920.png`,data:e.camCtrl.renderVertical916DataURL(F,N,"mask")}),x.shotRole==="A-Roll"){const Ve=e.camCtrl.renderOpenPose916(F,N,O);z.push({path:`${y}frames_3d_raw/${le}_openpose_1080x1920.png`,data:Ve.dataUrl}),z.push({path:`${y}frames_3d_raw/${le}_openpose.json`,data:Ve.keypoints})}};return Z(0,"start"),A.keyframeStrategy.exportEndFrame&&(Z(1,"end"),t.seekNormalized(0,{cleanKeyframe:!0})),z.push({path:`${y}higgsfield_manifest.json`,data:A}),z.push({path:`${y}comfy_render2real_job.json`,data:A.renderToRealComfyJob}),z.push({path:`${y}HIGGSFIELD_QUICK_CARD.txt`,data:["=== ALINA STUDIO OS -> HIGGSFIELD CINEMA STUDIO 4.0 ===",`Shot ID:         ${A.shotId} (${A.shotRole})`,`Spot:            ${A.spotName}`,`Keyframe Mode:   ${A.keyframeStrategy.mode}`,`Reason:          ${A.keyframeStrategy.reason}`,`Camera Body:     ${A.higgsfieldCinemaStudio.cameraLabel} (${A.higgsfieldCinemaStudio.cameraProfile})`,`Cinema Glass:    ${A.higgsfieldCinemaStudio.lensLabel} (${A.higgsfieldCinemaStudio.lensProfile})`,`Focal / f-Stop:  ${A.higgsfieldCinemaStudio.focalLength} ${A.higgsfieldCinemaStudio.aperture}`,`Move Preset:     ${A.higgsfieldCinemaStudio.uiPresetLabel}`,`Speed / Motion:  ${A.higgsfieldCinemaStudio.speedRamp} | Intensity=${A.higgsfieldCinemaStudio.motionIntensity}`,`Editorial Trim:  ${A.higgsfieldCinemaStudio.editorialTrimSec}s (gen ${A.higgsfieldCinemaStudio.durationGenerateSec}s)`,"","--- 1) RENDER-TO-REAL PROMPT (ComfyUI Flux.1 Dev) ---",v.prompts.fluxClean||v.prompts.flux,"","--- 2) HIGGSFIELD STRUCTURED DELTA PROMPT ---",A.structuredPrompt.compiled,"","--- NEGATIVE GUARDRAILS ---",A.structuredPrompt.negativeGuardrails].join(`
`)}),{entries:z,manifest:A}}r("cin-dir").onchange=x=>{const y=En.directors.get(x.target.value);n.directorId=y.id,n.shotTypeId=y.preferredShotTypes[0],n.moveId=y.preferredMoves[0],n.lightId=y.defaultLightingSchemeId,n.lens=cs.reduce((b,v)=>Math.abs(v-y.defaultFocalMm)<Math.abs(b-y.defaultFocalMm)?v:b),n.aperture=y.defaultAperture,n.role="A",n.focusOverride="auto",n.foregroundFraming=y.id==="wong_kar_wai_doyle"||y.id==="guadagnino_mukdeeprom",c(),u(l())},r("cin-shot").onchange=x=>{const y=En.shotTypes.get(x.target.value);n.shotTypeId=y.id,n.lens=cs.reduce((b,v)=>Math.abs(v-y.defaultFocalMm)<Math.abs(b-y.defaultFocalMm)?v:b),n.aperture=y.defaultAperture,y.shotRoleDefault==="B-Roll"&&n.role==="A"&&(n.role="B0"),y.shotRoleDefault==="A-Roll"&&n.role!=="A"&&(n.role="A"),c(),u(l())},r("cin-move").onchange=x=>{n.moveId=x.target.value,n.moveId==="rack_focus_macro_to_eyes"&&(n.foregroundFraming=!0),c(),u(l())},r("cin-light").onchange=x=>{n.lightId=x.target.value,u(l())},r("cin-lens").onchange=x=>{n.lens=Number(x.target.value),u(l())},r("cin-role").onchange=x=>{n.role=x.target.value,n.role!=="A"?(n.shotTypeId="macro_broll_prop",n.lens=100,n.aperture=2.8):n.shotTypeId==="macro_broll_prop"&&(n.shotTypeId=En.directors.get(n.directorId).preferredShotTypes[0],n.lens=85,n.aperture=1.4),c(),u(l())},r("cin-focus").onchange=x=>{n.focusOverride=x.target.value,n.focusOverride==="rack_prop_to_iris"&&(n.foregroundFraming=!0),c(),u(l())},r("cin-fg-toggle").onchange=x=>{n.foregroundFraming=x.target.checked,r("cin-fg-prop").classList.toggle("hidden",!n.foregroundFraming),u(l())},r("cin-fg-prop").onchange=x=>{n.foregroundPropId=x.target.value==="auto"?null:x.target.value,u(l())},r("cin-recipe").onclick=()=>{g(),u(l())},r("cin-apply").onclick=()=>u(l()),r("cin-play").onclick=()=>{const x=l();u(x,!0),f(x),o(!0),t.play(()=>setTimeout(()=>o(!1),600))},r("cin-exit").onclick=()=>{t.exit(),o(!1),r("cin-exit").classList.add("hidden"),r("cin-zw").textContent="—",e.setStatus("Modo cine desactivado.")},r("cin-copy-flux").onclick=()=>{navigator.clipboard.writeText(r("cin-flux").textContent),r("cin-copy-flux").textContent="¡Copiado!",setTimeout(()=>{r("cin-copy-flux").textContent="Copiar"},1200)},r("cin-copy-motion").onclick=()=>{navigator.clipboard.writeText(r("cin-motion").textContent),r("cin-copy-motion").textContent="¡Copiado!",setTimeout(()=>{r("cin-copy-motion").textContent="Copiar"},1200)},r("cin-export-pack").onclick=async()=>{const x=r("cin-export-pack"),y=x.innerHTML;x.innerHTML="<span>⏳ Empaquetando Multipass + Bokeh CoC...</span>",await new Promise(b=>setTimeout(b,30));try{const b=t.active&&t.shot?t.shot:l(),{entries:v,manifest:A}=m(b,""),P=await Io(v),F=`shotpack_${b.spotId}_${b.shotId}.zip`;Bd(P,F),d(t.payload,b),e.setStatus(`✅ <span class="text-emerald-400 font-bold">Shot Pack ${Un(F)}</span> exportado (${A.keyframeStrategy.mode} · ${v.length} archivos con Bokeh CoC, Depth, Normals, Mask 7-ID y Manifest Higgsfield).`)}finally{x.innerHTML=y}};function g(){const x=e.getActiveSpot(),y=ao(x.id,"A-Roll",0,Yt);n.directorId=y.directorStyleId,n.shotTypeId=y.shotTypeId,n.moveId=y.cameraMoveId,n.lightId=y.lightingSchemeId,n.role="A",n.focusOverride="auto",n.foregroundFraming=y.directorStyleId==="wong_kar_wai_doyle"||y.directorStyleId==="guadagnino_mukdeeprom",n.lens=cs.reduce((b,v)=>Math.abs(v-y.focalLengthMm)<Math.abs(b-y.focalLengthMm)?v:b),n.aperture=y.apertureFStop,c()}function _(){const x=e.getActiveSpot(),y=Yt.spotCinematographyMap[x.id],b=ao(x.id,"A-Roll",0,Yt,{shotId:`auto_${x.id}_a1`,durationSec:3.5}),v=ao(x.id,"B-Roll",0,Yt,{shotId:`auto_${x.id}_b0`,durationSec:2.5}),A=ao(x.id,"B-Roll",1,Yt,{shotId:`auto_${x.id}_b1`,durationSec:2.5}),P={...b,shotId:`auto_${x.id}_a2`,durationSec:3.5,cameraMoveId:"static_breathing",motionStrength:2},F=[b,v,A,P].map((N,z)=>({...N,order:z+1,animation:x.defaultAnim||"Idle"}));return{sceneId:`auto_${x.id}`,title:`Auto-maqueta 1:2 · ${x.name}`,targetPlatform:"Instagram Reels",aspectRatio:"9:16",baseLightingMode:y.recommendedBaseMode,audioTrack:{provider:"ElevenLabs",voiceId:"Alina-Hypno-v1",durationSec:12,scriptFull:x.script},shots:F}}function h(){return[_(),...qv.storyboard]}function p(){return h().find(x=>x.sceneId===n.sceneKey)||h()[0]}function M(){const x=h();r("cin-scene").innerHTML=x.map(A=>Sr(A.sceneId,A.title,A.sceneId===n.sceneKey)).join(""),x.find(A=>A.sceneId===n.sceneKey)||(n.sceneKey=x[0].sceneId);const y=p();n.scene=y;const b=Ud(y,Yt),v=r("cin-scene-badge");v.textContent=`${b.aRoll}A:${b.bRoll}B · ${b.totalSec}s ${b.ok?"✔":"✖"}`,v.className=`text-[10px] font-mono px-2 py-0.5 rounded-full border ${b.ok?"text-emerald-300 border-emerald-500/30":"text-rose-300 border-rose-500/30"}`,v.title=b.issues.join(`
`),r("cin-chips").innerHTML=y.shots.map((A,P)=>`<button data-i="${P}" class="cin-chip text-[10px] font-mono px-2 py-1 rounded-lg border ${A.shotRole==="A-Roll"?"border-[#c86446]/50 text-[#f29979]":"border-sky-500/40 text-sky-300"} bg-black/40 hover:bg-white/10">${P+1}·${A.shotRole==="A-Roll"?"A":"B"} ${Un(En.shotTypes.get(A.shotTypeId).id.replace("_"," ").slice(0,10))} ${A.durationSec}s</button>`).join(""),i.querySelectorAll(".cin-chip").forEach(A=>{A.onclick=()=>{const P=y.shots[Number(A.dataset.i)];n.directorId=P.directorStyleId,n.shotTypeId=P.shotTypeId,n.moveId=P.cameraMoveId,n.lightId=P.lightingSchemeId,n.lens=cs.reduce((F,N)=>Math.abs(N-P.focalLengthMm)<Math.abs(F-P.focalLengthMm)?N:F),n.aperture=P.apertureFStop,n.role=P.shotRole==="A-Roll"?"A":`B${P.brollIndex??0}`,n.focusOverride=P.focusMode||"auto",n.foregroundFraming=!!P.foregroundFraming,c(),u(P)}})}r("cin-scene").onchange=x=>{n.sceneKey=x.target.value,M()};async function T({record:x=!1}={}){var v;if(n.playingScene){n.sceneAbort=!0,t.stop(!1);return}const y=p();n.playingScene=!0,n.sceneAbort=!1,r("cin-scene-play").textContent="■ Detener";let b=null;x&&(b=S()),o(!0);for(let A=0;A<y.shots.length&&!n.sceneAbort;A++){const P=y.shots[A];e.getSpot(P.spotId)&&((v=e.setActiveSpot)==null||v.call(e,P.spotId)),u(P,!0),f(P,` · plano ${A+1}/${y.shots.length}`),await new Promise(N=>{t.play(N);const z=setInterval(()=>{(n.sceneAbort||!t.playing)&&(clearInterval(z),N())},120)})}b&&await C(b,y.sceneId),n.playingScene=!1,n.sceneAbort=!1,r("cin-scene-play").textContent="▶ Escena",setTimeout(()=>o(!1),500)}r("cin-scene-play").onclick=()=>T(),r("cin-scene-rec").onclick=()=>{n.playingScene||T({record:!0})},r("cin-scene-pack").onclick=async()=>{const x=p(),y=r("cin-scene-pack"),b=y.textContent;y.textContent="⏳ ZIP…",await new Promise(v=>setTimeout(v,30));try{const v=[],A=[];for(let F=0;F<x.shots.length;F++){const N=x.shots[F],z=`${String(F+1).padStart(2,"0")}_${N.shotId}/`,{entries:O,manifest:Z}=m(N,z);v.push(...O),A.push(Z)}v.push({path:"scene_storyboard_manifest.json",data:{sceneId:x.sceneId,title:x.title,aspectRatio:x.aspectRatio,audioTrack:x.audioTrack,zeroWasteSceneAudit:Ud(x,Yt),shots:A}});const P=await Io(v);Bd(P,`storyboard_pack_${x.sceneId}.zip`),e.setStatus(`✅ <span class="text-emerald-400 font-bold">Storyboard Pack (${x.shots.length} planos · ${v.length} archivos)</span> descargado en .zip.`)}finally{y.textContent=b}};function S(){const x=e.renderer.domElement,y=document.createElement("canvas");y.width=720,y.height=1280;const b=y.getContext("2d");let v=0;const A=()=>{const z=x.height,O=z*9/16,Z=(x.width-O)/2;b.drawImage(x,Z,0,O,z,0,0,y.width,y.height),v=requestAnimationFrame(A)};A();const P=["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(z=>MediaRecorder.isTypeSupported(z)),F=new MediaRecorder(y.captureStream(30),{mimeType:P,videoBitsPerSecond:6e6}),N=[];return F.ondataavailable=z=>z.data.size&&N.push(z.data),F.start(250),r("cin-scene-rec").textContent="● Grabando…",{mr:F,chunks:N,stopDraw:()=>cancelAnimationFrame(v)}}function C(x,y){return new Promise(b=>{x.mr.onstop=()=>{x.stopDraw();const v=new Blob(x.chunks,{type:"video/webm"}),A=URL.createObjectURL(v);e.download.dataUrl(A,`animatic_${y}_720x1280.webm`),setTimeout(()=>URL.revokeObjectURL(A),2e3),r("cin-scene-rec").textContent="⏺ Animatic",e.setStatus(`✅ <span class="text-emerald-400 font-bold">Animatic ${Un(y)} (.webm 9:16)</span> descargado.`),b()},x.mr.stop()})}return g(),M(),{onSpotChanged(){n.playingScene||(g(),M(),t.active&&u(l(),!0))},onModeChanged(){t.active&&t.shot&&(t._saved=null,u(t.shot,!0))},isPlayingScene:()=>n.playingScene}}const Zv="28yo Dutch-Latin woman Alina Van Dijk, vivid copper red hair with natural soft waves, vivid emerald green eyes, light natural freckles across nose, subtle crimson lips, realistic skin micro-pores",Po={Idle:{still:"standing poised with relaxed confident posture, subtle gaze toward lens",motion:"subtle natural breathing, slow soft blink, gentle copper hair micro-movement, slight weight shift"},Walk:{still:"mid-stride walking forward with poised runway posture and natural movement",motion:"smooth confident slow walk forward, natural hip and shoulder sway, copper hair flowing gently with each step"},Rumba:{still:"expressive sensual dance posture, sculpted silhouette and graceful arm line",motion:"fluid rhythmic rumba sway, smooth hip and torso articulation, hair catching warm rim light"},Laying:{still:"reclining gracefully in relaxed boudoir lounge pose, calm magnetic gaze",motion:"calm reclined breathing, subtle slow head tilt, soft eye blink, fabric settling naturally"},HipHop:{still:"dynamic contemporary urban dance stance with grounded energy",motion:"controlled rhythmic groove, subtle shoulder and head bounce on beat, natural hair motion"}},zd={"85mm":{shot:"medium portrait shot",angle:"eye-level angle",mm:85},reset:{shot:"medium portrait shot",angle:"eye-level angle",mm:85},macro:{shot:"intimate close-up detail shot",angle:"slightly high macro angle",mm:100},top:{shot:"overhead editorial shot",angle:"top-down cenital angle",mm:35},dollhouse:{shot:"architectural cross-section wide shot",angle:"elevated three-quarter angle",mm:28},overview:{shot:"establishing architectural exterior-interior wide shot",angle:"high three-quarter drone angle",mm:24}};function Pa(i,e){return Math.hypot(i.x-e.x,i.y-e.y,i.z-e.z)}function Jv({camera:i,spot:e,camPreset:t="85mm",cinemaShot:n=null}){if(n)return{shot:n.shotLabel||"cinematic medium close-up",angle:n.angleLabel||"eye-level angle",mm:n.focalLengthMm||85,distance:i!=null&&i.position?Number(Pa(i.position,e.alinaPos).toFixed(2)):2.8,elevationDeg:0,source:"Director de Fotografía"};if(i&&!i.approximate&&i.position&&i.target){const o={x:e.alinaPos.x,y:e.alinaPos.y+1.45,z:e.alinaPos.z},a=Pa(i.position,o),l=Math.hypot(i.position.x-i.target.x,i.position.z-i.target.z)||.001,c=Math.atan2(i.position.y-i.target.y,l)*180/Math.PI;let d;a<1.35?d="extreme close-up":a<2.35?d="close-up portrait":a<4.4?d="medium shot":a<9?d="full-body wide shot":d="architectural establishing wide shot";let u;c>45?u="top-down overhead angle":c>14?u="slightly high angle":c<-12?u="low heroic angle":u="eye-level angle";const f=i.fov_deg||45,m=Math.max(18,Math.min(135,Math.round(18/Math.tan(f*Math.PI/360))));return{shot:d,angle:u,mm:m,distance:Number(a.toFixed(2)),elevationDeg:Math.round(c),source:"Cámara 3D en vivo"}}const r=zd[t]||zd["85mm"],s=i!=null&&i.position?Number(Pa(i.position,e.alinaPos).toFixed(2)):3;return{...r,distance:s,elevationDeg:t==="top"?72:4,source:`Unity 6 URP (${t})`}}function Qv(i){return new Promise(e=>{const t=new Image;t.onload=()=>{try{const n=document.createElement("canvas"),r=72,s=128;n.width=r,n.height=s;const o=n.getContext("2d",{willReadFrequently:!0});o.drawImage(t,0,0,r,s);const{data:a}=o.getImageData(0,0,r,s);let l=0,c=0,d=0,u=0,f=0;const m=r*s;for(let S=0;S<a.length;S+=4){const C=a[S],I=a[S+1],x=a[S+2],y=.2126*C+.7152*I+.0722*x;l+=y,u+=C,f+=x,y<42&&c++,y>205&&d++}const g=Math.round(l/m),_=Math.round(c/m*100),h=Math.round(d/m*100),p=(u-f)/m;let M;g<68&&_>45?M="deep low-key chiaroscuro contrast with sculpted rim highlights":g<115?M="moody cinematic mid-low key lighting with soft practical falloff":g<165?M="balanced natural architectural lighting with gentle specular depth":M="bright luminous high-key daylight with airy reflections";const T=p>18?"warm amber-copper tungsten & golden tones":p<-10?"cool moonlight slate-blue & silver atmosphere":"neutral cinema color grading with warm skin tones";e({avgLum:g,shadowPct:_,highlightPct:h,warmth:Math.round(p),keyDescriptor:M,toneDescriptor:T,summary:`Lum ${g}/255 · Sombras ${_}% · ${p>12?"Cálido":p<-8?"Frío":"Neutro"}`})}catch{e(null)}},t.onerror=()=>e(null),t.src=i})}function qu({spot:i,floorName:e,anim:t,lightingMode:n,framing:r,imageMetrics:s,depthPass:o,attachedObjects:a=[]}){var g;const l=((g=Po[t])==null?void 0:g.still)||Po.Idle.still,c=n==="day"?"warm golden hour sunlight streaming through architectural glass":"intimate nocturnal chiaroscuro with warm practical lamps",d=s?`${s.keyDescriptor}, ${s.toneDescriptor}`:c,u=i.prompt.replace(/^Cinematic\s+\d+mm\s+[^,]+,\s*/i,"").replace(/^Cinematic\s+(medium|wide|close-up|overhead)[^,]*shot\s+of\s+/i,""),f=o?"[ControlNet Depth 9:16 lock active] ":"",m=Array.isArray(a)&&a.length>0?` Featured Higgsfield reference objects (${a.map(_=>_.handle).join(", ")}): ${a.map(_=>_.promptToken).join("; ")}.`:"";return`${f}Cinematic ${r.shot}, ${r.angle}, shot on ARRI Alexa Mini LF ${r.mm}mm prime lens, shallow depth of field, vertical 9:16 composition. ${Zv}, ${l}, located at ${i.name} (${e}).${m} ${d}, ${c}. Scene reference: ${u}`.replace(/\s+/g," ").trim()}function Do({anim:i,framing:e,motionStrength:t=2.5,motionEngine:n="higgsfield",cinemaMoveLabel:r=null}){var l;const s=((l=Po[i])==null?void 0:l.motion)||Po.Idle.motion;let o;r?o=r:e.mm>=90||e.distance<2.2?o="locked-off tripod with imperceptible 2% micro push-in, crisp focus locked on emerald eyes":e.angle.includes("top-down")?o="ultra-slow overhead boom descent, smooth stabilized gimbal":e.distance>7.5?o="slow architectural dolly-in revealing spatial depth":o="smooth stabilized 3% slow dolly push-in maintaining framing";const a=n==="liveportrait"?"Mouth gently closed, no talking (prepared for LivePortrait audio sync).":"Mouth closed, no talking, zero facial distortion, locked identity.";return`${s}. Camera: ${o}, ${e.angle}, ${e.mm}mm lens feel. ${a} Temporal consistency, natural physics, Higgsfield motion strength ${Number(t).toFixed(1)}.`}const eb={name:"Alina Van Dijk",age:"28 años",origin:"Ámsterdam (Países Bajos) ➔ Barcelona & Tulum",avatar:"./alina_avatar.jpg",story:"Nacida en Ámsterdam de madre neerlandesa y padre de raíces latinas, y radicada entre su estudio loft de Barcelona y retiros sensoriales en Tulum. Formada en sexología clínica y dinámicas de poder consensuadas (SSC: Sano, Seguro y Consensuado), Alina descubrió que ceder el control en un espacio seguro es una de las válvulas terapéuticas más potentes frente al agotamiento ejecutivo y el exceso de decisiones diarias.",voice:{id:"Alina-Hypno-v1",pitch:.98,rate:.95,sample:"«Respira hondo y suelta el control. No hay nada oscuro en tus fantasías cuando hay consentimiento y respeto. Aquí estás a salvo para dejar de decidir.»"},consistencyLock:{tokenSnippet:"28yo Dutch-Latin woman Alina Van Dijk, vivid copper red hair with natural soft waves, vivid emerald green eyes, light natural freckles dusting the bridge of nose and upper cheeks, full naturally pigmented crimson lips, authentic photorealistic skin texture with visible micro-pores, refined facial bone structure, magnetic and commanding yet empathetic gaze",negativeTokens:"deformed, extra fingers, cartoon, plastic skin, airbrushed, blur, cross-eyed, bad anatomy, third arm, fused limbs, distorted ears, talking mouth distortion"},masterPromptScenes:[{id:"loft_editorial",label:"🖤 Dominatrix Elegante Studio (Chiaroscuro)",aspect:"9:16 / 16:9",prompt:"Cinematic moody studio portrait of 28yo Dutch-Latin woman Alina Van Dijk wearing sleek black leather corset and tailored brass-ring choker, vivid copper red hair, emerald green eyes, natural freckles, intense commanding yet warm gaze, chiaroscuro lighting, deep shadows, 85mm f/1.4 lens, 8k photographic master --ar 9:16"},{id:"tropical_day",label:"🌴 Retiro Sensorial Diurno (Luz Natural)",aspect:"4:5 / 9:16",prompt:"Close-up sensual portrait of 28yo redhead woman Alina Van Dijk with freckled skin, vivid emerald green eyes, crimson lips, copper hair in a high bun with loose strands, wearing minimalist black linen bikini, lush tropical foliage in soft bokeh background, natural dappled golden sunlight, realistic skin pores, 85mm lens --ar 4:5"},{id:"still_life_broll",label:"💎 Bodegón B-Roll Zero-Face (0 Créditos Rostro)",aspect:"9:16 / 16:9",prompt:"Cinematic close-up still life of a handcrafted sleek black leather choker with warm brass ring resting on dark silk sheets beside an open vintage clinical sexology notebook and a steaming espresso cup, moody warm candlelight, deep shadows, 100mm macro lens, 8k photographic master, no humans --ar 9:16"}]},tb=[{num:"01",severity:"Crítica",rule:"Entrada Limpia 2K+",desc:"Jamás animar en Higgsfield una imagen base con dedos dudosos o resolución baja; el video multiplica x10 cualquier fallo."},{num:"02",severity:"Crítica",rule:"Ángulo Ciego < 25°",desc:"No pedir giros de cabeza mayores a 25° respecto al encuadre inicial para evitar pérdida de identidad facial."},{num:"03",severity:"Alta",rule:"Motion Strength 2.0–3.5",desc:"Mantener el slider entre 2.0 y 3.5 en planos con rostro. Por encima de 4.0 se degrada la geometría facial."},{num:"04",severity:"Alta",rule:"Cuerpo Estable, Cámara Móvil",desc:"Priorizar slow dolly push-in o rack focus sobre desplazamientos largos del personaje."},{num:"05",severity:"Crítica",rule:"Blindaje de Manos",desc:"Evitar que las manos crucen el rostro o se entrelacen en movimiento; apoyarlas en superficies o sujetar un objeto fijo."},{num:"06",severity:"Media",rule:"Fórmula 1:2 con Objetos B-Roll",desc:"1 plano de Alina (3.5s) + 2 planos de Objetos/Accesorios (Zero-Face) = máxima retención y 70% menos gasto de créditos."},{num:"07",severity:"Alta",rule:"Micro-Tomas de 2.5 a 4s",desc:"Cortar antes del segundo 4.0 elimina la deriva temporal de fondo y da ritmo cinematográfico."},{num:"08",severity:"Crítica",rule:"Boca Cerrada en Higgsfield",desc:"Nunca pedir «she talks» en I2V. Generar con labios cerrados y aplicar lipsync dedicado en LivePortrait / Hedra."}],Da=["Imagen base revisada en manos, ojos y simetría antes de animar (Regla 01)","Motion Strength fijado entre 2.0 y 3.5 (Regla 03)","Manos apoyadas o sujetando prop sin cruzar el rostro (Regla 05)","Duración por clip acotada entre 2.5s y 4.0s (Regla 07)","Objetos B-Roll Zero-Face seleccionados para montaje 1:2 (Regla 06)","Boca cerrada en prompt de video si lleva voz de ElevenLabs (Regla 08)"],Hd=["Todos","Cuero & Fetish","Café & Lifestyle","Intelecto & Estudio","Sensorial & Spa","Audio & Set","Vestuario & Joyas"];function ds(i,e,t,n){const r=`<svg xmlns="http://www.w3.org/2000/svg" width="540" height="540" viewBox="0 0 540 540">
    <defs>
      <radialGradient id="g" cx="50%" cy="38%" r="65%">
        <stop offset="0%" stop-color="${n}" stop-opacity="0.34"/>
        <stop offset="100%" stop-color="#090a0f" stop-opacity="1"/>
      </radialGradient>
    </defs>
    <rect width="540" height="540" fill="url(#g)"/>
    <rect x="24" y="24" width="492" height="492" rx="28" fill="none" stroke="${n}" stroke-opacity="0.35" stroke-width="2"/>
    <text x="270" y="225" text-anchor="middle" font-size="108">${i}</text>
    <text x="270" y="320" text-anchor="middle" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="24" font-weight="700">${e}</text>
    <text x="270" y="356" text-anchor="middle" fill="#94a3b8" font-family="monospace" font-size="16">${t}</text>
    <text x="270" y="468" text-anchor="middle" fill="${n}" font-family="monospace" font-size="14">SUBE TU RENDER O CAPTURA DESDE 3D</text>
  </svg>`;return`data:image/svg+xml;utf8,${encodeURIComponent(r)}`}const lo=[{id:"obj-cuero-choker",name:"Gargantilla & Antifaz de Cuero Negro",handle:"@cuero_choker",category:"Cuero & Fetish",floor:3,spotId:"boudoir",image:ds("🖤","Gargantilla & Antifaz","@cuero_choker • Piso 3 Boudoir","#c86446"),isPlaceholderImage:!0,promptToken:"handcrafted sleek black satin-finish leather choker with polished warm brass O-ring and matching black velvet blindfold resting on dark charcoal silk sheets",motionPrompt:"Subtle flickering warm candle flame reflections glinting across polished brass O-ring and black leather grain, slow macro push-in, no people, motion strength 2.2",usage:"Plano B-Roll de tensión elegante entre miradas de Alina o prop equipado en escenas de Boudoir (Cap. 3)."},{id:"obj-espresso-diario",name:"Espresso Doble & Cuaderno de Sexología",handle:"@espresso_diario",category:"Café & Lifestyle",floor:1,spotId:"cafe",image:ds("☕","Espresso & Diario Clínico","@espresso_diario • Piso 1/2","#f59e0b"),isPlaceholderImage:!0,promptToken:"matte black ceramic espresso cup with rich golden crema beside an open leatherbound clinical sexology notebook with fountain pen and tortoiseshell glasses on dark marble table",motionPrompt:"Delicate wisps of white steam rising slowly from the hot espresso crema, soft morning light shifting across notebook pages, locked macro tripod, motion strength 2.0",usage:"Apertura o cierre reflexivo para capítulos matutinos y reels confesionales (Cap. 1 y Cap. 2)."},{id:"obj-libros-whisky",name:" Manuales Clínicos & Vaso Ámbar",handle:"@libros_whisky",category:"Intelecto & Estudio",floor:3,spotId:"podcast",image:ds("📚","Biblioteca & Vaso Ámbar","@libros_whisky • Piso 3 Estudio","#10b981"),isPlaceholderImage:!0,promptToken:"stack of vintage clothbound psychoanalysis and clinical sexology books on dark walnut desk next to a cut-crystal tumbler with amber liquor catching warm Edison lamp light",motionPrompt:"Slow cinematic rack focus from gilded vintage book spines to warm amber reflections inside crystal glass, subtle dust motes in lamp beam, motion strength 2.2",usage:"Refuerza autoridad intelectual en «The Mind Sanctuary» durante monólogos de podcast (Cap. 1)."},{id:"obj-shibari-aceite",name:"Cuerdas de Seda & Frasco de Aceite Ámbar",handle:"@shibari_aceite",category:"Sensorial & Spa",floor:2,spotId:"bath",image:ds("🪶","Seda & Aceite Botánico","@shibari_aceite • Piso 2 Spa","#ec4899"),isPlaceholderImage:!0,promptToken:"coiled obsidian and muted plum silk ropes arranged neatly on raw natural linen beside an amber glass dropper bottle of botanical massage oil and a soft dark feather",motionPrompt:"Ultra-slow macro slider glide over braided silk texture, warm spa candlelight catching the amber glass dropper, serene atmosphere, motion strength 2.0",usage:"B-Roll táctil ideal para acompañar audios binaurales 3D de respiración y entrega sensorial (Cap. 2 y 3)."},{id:"obj-shure-sm7b",name:"Micrófono Shure SM7B en Brazo Articulado",handle:"@mic_sm7b",category:"Audio & Set",floor:3,spotId:"podcast",image:ds("🎙️","Shure SM7B Broadcast","@mic_sm7b • Piso 3 Podcast","#38bdf8"),isPlaceholderImage:!0,promptToken:"professional matte-black Shure SM7B dynamic broadcast microphone mounted on articulated studio boom arm in foreground soft bokeh with warm copper rim light",motionPrompt:"Subtle shallow depth-of-field focus pull past the matte black microphone capsule toward warm studio background glow, stationary camera, motion strength 2.0",usage:"Objeto de encuadre en primer plano (Foreground Bokeh) para confesionarios y capítulos de voz."}],La={serieTitle:"El Arte de Ceder el Control"},Fa=[{id:"chap-1",number:1,week:"Acto I · Capítulo 1",title:"La Sobrecarga de Decidir",subtitle:"Fascinación intelectual y el descanso de soltar el mando",status:"🟢 Listo para Rodaje",floor:3,spotId:"podcast",lightingMode:"night",format:"Podcast Confesional 9:16",synopsis:"Alina abre la serie en su estudio nocturno del Piso 3 («The Mind Sanctuary»). Expone cómo quienes toman miles de decisiones bajo presión durante el día buscan en secreto un espacio seguro donde otra mente firme decida por ellos.",hook:"«Hoy tomaste demasiadas decisiones difíciles por otros. Esta noche... decide no decidir nada. Cierra los ojos y deja que mi voz se encargue de todo.»",audioTone:"Voz pausada, cercana y confesional (Pitch 0.98 | Rate 0.95). Silencio de 1.5s tras la primera frase.",directorNotes:"Arrancar con plano detalle de @libros_whisky (2.5s), cortar a plano medio 85mm de Alina frente a @mic_sm7b con empuje lento (3.5s) y cerrar con @espresso_diario.",linkedObjectIds:["obj-libros-whisky","obj-shure-sm7b"],linkedShotIds:[]},{id:"chap-2",number:2,week:"Acto I · Capítulo 2",title:"Respira Conmigo: Apaga el Ruido",subtitle:"Desconexión sensorial a través del cuerpo y la respiración",status:"🟡 En Pre-Producción",floor:2,spotId:"bath",lightingMode:"day",format:"Guía Sensorial & B-Roll Táctil",synopsis:"El ruido analítico no se apaga pensando más, sino bajando al cuerpo. Desde el Spa privado y la luz cálida de la residencia (Piso 2), Alina guía una secuencia rítmica de respiración mientras el agua y los aceites marcan el tempo visual.",hook:"«Inhala despacio conmigo... uno, dos, tres, cuatro. Suelta el aire. ¿Notas cómo caen tus hombros cuando dejas de pelear contra el reloj? Quédate ahí.»",audioTone:"Susurro binaural muy próximo al oído, respiración audible, cadencia hipnótica lenta.",directorNotes:"Usar luz dorada rasante. Alternar plano cenital/lateral suave en el Spa con macros táctiles de @shibari_aceite y reflejos de agua.",linkedObjectIds:["obj-shibari-aceite","obj-espresso-diario"],linkedShotIds:[]},{id:"chap-3",number:3,week:"Acto II · Capítulo 3",title:"La Regla del Poder Consensuado",subtitle:"Tensión chiaroscuro y la arquitectura de la obediencia",status:"⚪ En Escritura",floor:3,spotId:"boudoir",lightingMode:"night",format:"Ficción Psicológica Boudoir",synopsis:"La narrativa entra en el Boudoir chiaroscuro del Piso 3. Alina revela la paradoja del consentimiento: quien obedece voluntariamente no pierde poder, sino que firma las reglas de su propia liberación.",hook:"«No te intimida obedecerme. Te intimida reconocer la paz que sientes cuando por fin alguien sostiene las riendas sin dudar. Mírame.»",audioTone:"Voz firme, magnética, autoridad serena con pausas dramáticas de 2 segundos.",directorNotes:"Iluminación de vela 2200K de alto contraste. Abrir fuera de foco sobre @cuero_choker en primer plano antes de revelar la mirada esmeralda de Alina.",linkedObjectIds:["obj-cuero-choker","obj-shibari-aceite"],linkedShotIds:[]},{id:"chap-4",number:4,week:"Acto II · Capítulo 4",title:"El Círculo Íntimo",subtitle:"Cierre nocturno en el Penthouse Rooftop",status:"⚪ Planificado",floor:4,spotId:"bar",lightingMode:"night",format:"Editorial Nocturno 9:16",synopsis:"Desenlace del primer arco en la terraza Penthouse del Piso 4 frente al skyline nocturno y la piscina basáltica. Alina brinda con quienes cruzaron el umbral del santuario y deja abierto el cliffhanger hacia la segunda temporada.",hook:"«Desde aquí arriba la ciudad entera parece correr sin rumbo. Quienes entendieron mi lenguaje ya están aquí dentro conmigo. ¿Subes o sigues mirando desde abajo?»",audioTone:"Complicidad nocturna íntima, brisa suave de fondo, tono cálido de cierre de temporada.",directorNotes:"Aprovechar reflejos nocturnos sobre la barra de cobre y la plunge pool del Piso 4. Lente 50mm/85mm con bokeh del skyline.",linkedObjectIds:["obj-cuero-choker"],linkedShotIds:[]}],nb="AlinaStudioOS_CapturesDB",ib=2,Ss="shots",$r="objects",Xr="chapters",Na=24;let co=null;function vi(){return co||(typeof indexedDB>"u"?Promise.resolve(null):(co=new Promise(i=>{try{const e=indexedDB.open(nb,ib);e.onupgradeneeded=()=>{const t=e.result;t.objectStoreNames.contains(Ss)||t.createObjectStore(Ss,{keyPath:"id"}).createIndex("timestamp","timestamp",{unique:!1}),t.objectStoreNames.contains($r)||t.createObjectStore($r,{keyPath:"id"}),t.objectStoreNames.contains(Xr)||t.createObjectStore(Xr,{keyPath:"id"})},e.onsuccess=()=>i(e.result),e.onerror=()=>{console.warn("[StudioStorage] IndexedDB no disponible:",e.error),i(null)}}catch(e){console.warn("[StudioStorage] Error abriendo IndexedDB:",e),i(null)}}),co))}function As(i,e,t){return new Promise(n=>{const r=i.transaction(e,"readwrite");r.objectStore(e).put(t),r.oncomplete=()=>n(),r.onerror=()=>n()})}function oc(i,e,t){return new Promise(n=>{const r=i.transaction(e,"readwrite");r.objectStore(e).delete(t),r.oncomplete=()=>n(),r.onerror=()=>n()})}function ac(i,e){return new Promise(t=>{const r=i.transaction(e,"readonly").objectStore(e).getAll();r.onsuccess=()=>t(r.result||[]),r.onerror=()=>t([])})}function rb(i){var e;return{id:i.id,timestamp:i.timestamp||Number(String(i.id).replace("shot-",""))||Date.now(),createdAt:i.createdAt,engine:i.engine,floor:i.floor,floorName:i.floorName,spotId:(e=i.spot)==null?void 0:e.id,spotSnapshot:i.spot,anim:i.anim,camPreset:i.camPreset,lightingMode:i.lightingMode,sliced:i.sliced,depthPass:i.depthPass,camera:i.camera,framing:i.framing,imageMetrics:i.imageMetrics,cinemaMoveLabel:i.cinemaMoveLabel,image:i.image,depthImage:i.depthImage||null,motionEngine:i.motionEngine,motionStrength:i.motionStrength,objectIds:Array.isArray(i.objectIds)?i.objectIds:[],chapterId:i.chapterId||"",fluxPrompt:i.fluxPrompt,motionPrompt:i.motionPrompt}}async function gi(i){const e=await vi();!e||!(i!=null&&i.id)||await As(e,Ss,rb(i))}async function lc(i){const e=await vi();!e||!i||await oc(e,Ss,i)}async function sb(i){const e=await vi();if(!e)return[];const t=await ac(e,Ss);return t.sort((n,r)=>(r.timestamp||0)-(n.timestamp||0)),t.length>Na&&t.slice(Na).forEach(n=>lc(n.id)),t.slice(0,Na).map(n=>({...n,objectIds:Array.isArray(n.objectIds)?n.objectIds:[],chapterId:n.chapterId||"",spot:i&&n.spotId&&i(n.spotId)||n.spotSnapshot})).filter(n=>!!(n.spot&&n.image))}async function ob(){const i=await vi();if(!i)return[...lo];const e=await ac(i,$r);if(e.length===0){for(let t=0;t<lo.length;t++)await As(i,$r,{...lo[t],order:t+1});return lo.map((t,n)=>({...t,order:n+1}))}return e.sort((t,n)=>(t.order??999)-(n.order??999)),e}async function fs(i){const e=await vi();!e||!(i!=null&&i.id)||await As(e,$r,{...i})}async function ab(i){const e=await vi();!e||!i||await oc(e,$r,i)}async function lb(){const i=await vi();if(!i)return Fa.map(t=>({...t}));const e=await ac(i,Xr);if(e.length===0){for(const t of Fa)await As(i,Xr,{...t});return Fa.map(t=>({...t}))}return e.sort((t,n)=>(t.number||0)-(n.number||0)),e}async function ka(i){const e=await vi();!e||!(i!=null&&i.id)||await As(e,Xr,{...i})}async function cb(i){const e=await vi();!e||!i||await oc(e,Xr,i)}function Vd(i,e=1440){return new Promise((t,n)=>{const r=new FileReader;r.onerror=()=>n(new Error("No se pudo leer el archivo de imagen")),r.onload=()=>{const s=new Image;s.onerror=()=>n(new Error("Formato de imagen no válido")),s.onload=()=>{const o=Math.min(1,e/Math.max(s.width,s.height)),a=Math.max(1,Math.round(s.width*o)),l=Math.max(1,Math.round(s.height*o)),c=document.createElement("canvas");c.width=a,c.height=l,c.getContext("2d").drawImage(s,0,0,a,l);const u=i.type==="image/png";t(u?c.toDataURL("image/png"):c.toDataURL("image/jpeg",.88))},s.src=r.result},r.readAsDataURL(i)})}const Nt=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function db(i,e){let t="Todos",n=null,r=null;i.innerHTML=`
    <div class="bg-[#12141a] border border-white/10 rounded-2xl p-4 md:p-5 shadow-2xl flex-1 flex flex-col gap-4">
      <!-- Cabecera limpia de Objetos -->
      <div class="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/5">
        <div>
          <div class="flex items-center gap-2">
            <h2 class="text-sm font-bold tracking-wide text-white uppercase">🏺 Bóveda de Objetos & B-Roll (Higgsfield)</h2>
            <span id="obj-total-pill" class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#c86446]/20 text-[#f29979] border border-[#c86446]/30">0 objetos</span>
          </div>
          <p class="text-xs text-slate-400 mt-0.5">
            Guarda renders de accesorios u objetos capturados del 3D para inyectarlos como referencia visual y textual en los prompts de Alina.
          </p>
        </div>

        <div class="flex flex-wrap items-center gap-2 text-xs">
          <button id="btn-obj-toggle-3d" class="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 font-semibold transition-all">
            👁 Mostrar Visor 3D para Capturar
          </button>
          <label class="cursor-pointer px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold shadow transition-all">
            📂 Subir Render Nuevo
            <input id="input-obj-upload-new" type="file" accept="image/*" multiple class="hidden">
          </label>
          <button id="btn-obj-create-empty" class="px-3 py-1.5 rounded-xl bg-[#c86446] hover:bg-[#a34a32] text-white font-bold shadow transition-all">
            ➕ Crear Ficha
          </button>
        </div>
      </div>

      <!-- Barra de captura desde 3D (visible cuando el visor 3D lateral está abierto en Objetos) -->
      <div id="obj-3d-capture-bar" class="hidden flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-[#c86446]/10 border border-[#c86446]/30 text-xs">
        <span class="text-slate-200">
          🎯 Encuadra cualquier mueble o accesorio en el visor izquierdo y guárdalo como Objeto:
        </span>
        <div class="flex flex-wrap items-center gap-2">
          <button id="btn-obj-snap-new-1x1" class="px-3 py-1.5 rounded-lg bg-[#c86446] hover:opacity-95 text-white font-bold">
            📸 Capturar Nuevo (1:1)
          </button>
          <button id="btn-obj-snap-new-9x16" class="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold border border-white/15">
            📱 Capturar Nuevo (9:16 B-Roll)
          </button>
          <button id="btn-obj-snap-replace" class="px-3 py-1.5 rounded-lg bg-emerald-600/80 hover:bg-emerald-500 text-white font-semibold">
            ↻ Reemplazar Imagen Seleccionada
          </button>
        </div>
      </div>

      <!-- Filtros por categoría -->
      <div id="obj-cat-pills" class="flex flex-wrap gap-1.5"></div>

      <!-- Cuerpo: Galería a la izquierda + Inspector del Objeto a la derecha -->
      <div class="grid grid-cols-12 gap-4 flex-1 min-h-[420px]">
        <div id="obj-grid" class="col-span-12 xl:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3 content-start overflow-y-auto custom-scrollbar pr-1 max-h-[68vh]"></div>

        <div id="obj-inspector" class="col-span-12 xl:col-span-5 bg-black/45 border border-white/10 rounded-2xl p-4 flex flex-col gap-3">
          <!-- Renderizado dinámico -->
        </div>
      </div>
    </div>
  `;const s=_=>i.querySelector("#"+_);function o(){return e.getObjects()}function a(){const _=o();return _.find(h=>h.id===n)||_[0]||null}function l(_){clearTimeout(r),r=setTimeout(async()=>{var h;await fs(_),(h=e.onObjectsChanged)==null||h.call(e)},220)}function c(_){return"@"+(String(_||"").trim().toLowerCase().replace(/[^a-z0-9_@-]/g,"_").replace(/^@+/,"")||"objeto")}function d(){const _=s("obj-cat-pills");_.innerHTML=Hd.map(h=>{const p=h===t;return`<button data-cat="${Nt(h)}" class="obj-cat-btn px-3 py-1 rounded-lg text-xs font-semibold transition-all ${p?"bg-[#c86446] text-white shadow":"bg-white/5 text-slate-300 hover:bg-white/10 border border-white/5"}">${Nt(h)}</button>`}).join(""),_.querySelectorAll(".obj-cat-btn").forEach(h=>{h.onclick=()=>{t=h.dataset.cat,g()}})}function u(){const _=o();s("obj-total-pill").textContent=`${_.length} objeto${_.length===1?"":"s"}`;const h=t==="Todos"?_:_.filter(M=>M.category===t);!n&&h[0]&&(n=h[0].id);const p=s("obj-grid");if(h.length===0){p.innerHTML=`
        <div class="col-span-full rounded-xl border border-dashed border-white/15 p-8 text-center text-xs text-slate-400">
          No hay objetos en «${Nt(t)}». Sube un render o captura uno desde el visor 3D.
        </div>`;return}p.innerHTML=h.map(M=>{const T=M.id===n;return`
        <div data-id="${Nt(M.id)}" class="obj-card group cursor-pointer rounded-xl border p-2.5 bg-[#151821] hover:bg-[#1a1e29] transition-all flex flex-col gap-2 ${T?"border-[#c86446] copper-glow":"border-white/10"}">
          <div class="relative w-full aspect-square rounded-lg overflow-hidden bg-black border border-white/10">
            <img src="${M.image}" alt="${Nt(M.name)}" class="w-full h-full object-cover">
            <span class="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded bg-black/80 text-[10px] font-mono text-[#f29979] border border-white/10">${Nt(M.handle)}</span>
            ${M.isPlaceholderImage?'<span class="absolute bottom-1.5 inset-x-1.5 text-center px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-200 text-[9px] font-mono border border-amber-400/30">Pendiente render</span>':'<span class="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 rounded bg-emerald-600/85 text-white text-[9px] font-mono font-bold">RENDER</span>'}
          </div>
          <div class="min-w-0">
            <div class="text-xs font-bold text-white truncate">${Nt(M.name)}</div>
            <div class="text-[10px] text-slate-400 truncate">${Nt(M.category)}</div>
          </div>
        </div>`}).join(""),p.querySelectorAll(".obj-card").forEach(M=>{M.onclick=()=>{n=M.dataset.id,u(),f()}})}function f(){const _=s("obj-inspector"),h=a();if(!h){_.innerHTML='<div class="text-xs text-slate-400 m-auto">Selecciona o crea un objeto.</div>';return}const p=Hd.filter(M=>M!=="Todos");_.innerHTML=`
      <div class="flex items-start gap-3 pb-3 border-b border-white/10">
        <div class="relative w-24 h-24 rounded-xl overflow-hidden bg-black border border-white/15 shrink-0">
          <img id="insp-obj-img" src="${h.image}" alt="${Nt(h.name)}" class="w-full h-full object-cover">
        </div>
        <div class="flex-1 min-w-0 space-y-1.5">
          <input id="insp-obj-name" type="text" value="${Nt(h.name)}" placeholder="Nombre del objeto"
            class="w-full bg-black/50 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs font-bold text-white focus:outline-none focus:border-[#c86446]">
          <div class="grid grid-cols-2 gap-1.5">
            <input id="insp-obj-handle" type="text" value="${Nt(h.handle)}" placeholder="@etiqueta"
              class="bg-black/50 border border-white/10 rounded-lg px-2 py-1 text-[11px] font-mono text-[#f29979] focus:outline-none focus:border-[#c86446]">
            <select id="insp-obj-cat" class="bg-black/50 border border-white/10 rounded-lg px-2 py-1 text-[11px] text-slate-200">
              ${p.map(M=>`<option value="${Nt(M)}" ${M===h.category?"selected":""}>${Nt(M)}</option>`).join("")}
            </select>
          </div>
          <div class="flex flex-wrap gap-1.5 pt-0.5">
            <label class="cursor-pointer px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/15 text-[10px] font-semibold text-white border border-white/10">
              🖼 Cambiar Imagen
              <input id="insp-obj-file" type="file" accept="image/*" class="hidden">
            </label>
            <button id="insp-obj-use-in-prompt" class="px-2.5 py-1 rounded-lg bg-[#c86446] hover:opacity-95 text-[10px] font-bold text-white">
              ✨ Inyectar en Estudio Prompts
            </button>
          </div>
        </div>
      </div>

      <div class="space-y-1">
        <div class="flex items-center justify-between">
          <label for="insp-obj-token" class="text-[10px] font-bold uppercase tracking-wider text-slate-300">
            Object Token Lock (Descripción que se inyecta al prompt)
          </label>
          <button id="insp-copy-token" class="text-[10px] font-mono text-[#f29979] hover:text-white">Copiar</button>
        </div>
        <textarea id="insp-obj-token" rows="3" class="prompt-textarea">${Nt(h.promptToken)}</textarea>
      </div>

      <div class="space-y-1">
        <div class="flex items-center justify-between">
          <label for="insp-obj-motion" class="text-[10px] font-bold uppercase tracking-wider text-slate-300">
            Motion Prompt B-Roll Zero-Face (Higgsfield I2V)
          </label>
          <button id="insp-copy-motion" class="text-[10px] font-mono text-[#f29979] hover:text-white">Copiar</button>
        </div>
        <textarea id="insp-obj-motion" rows="3" class="prompt-textarea">${Nt(h.motionPrompt||"")}</textarea>
      </div>

      <div class="space-y-1">
        <label for="insp-obj-usage" class="text-[10px] font-bold uppercase tracking-wider text-slate-400">
          Notas de Uso / Continuidad en Escena
        </label>
        <input id="insp-obj-usage" type="text" value="${Nt(h.usage||"")}"
          class="w-full bg-black/45 border border-white/10 rounded-lg px-2.5 py-1.5 text-[11px] text-slate-300 focus:outline-none focus:border-[#c86446]">
      </div>

      <div class="grid grid-cols-5 gap-2 pt-2 mt-auto border-t border-white/10 text-[11px] font-semibold">
        <button id="insp-obj-export" class="col-span-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-colors">
          📦 Descargar Render + JSON Higgsfield
        </button>
        <button id="insp-obj-delete" class="col-span-1 py-2 rounded-xl bg-white/5 hover:bg-rose-600/70 text-slate-300 hover:text-white border border-white/10 transition-colors" title="Eliminar objeto">
          🗑
        </button>
      </div>
    `,s("insp-obj-name").oninput=M=>{h.name=M.target.value,u(),l(h)},s("insp-obj-handle").onchange=M=>{h.handle=c(M.target.value),M.target.value=h.handle,u(),l(h)},s("insp-obj-cat").onchange=M=>{h.category=M.target.value,u(),l(h)},s("insp-obj-token").oninput=M=>{h.promptToken=M.target.value,l(h)},s("insp-obj-motion").oninput=M=>{h.motionPrompt=M.target.value,l(h)},s("insp-obj-usage").oninput=M=>{h.usage=M.target.value,l(h)},s("insp-obj-file").onchange=async M=>{var C,I;const T=(C=M.target.files)==null?void 0:C[0];if(!T)return;const S=await Vd(T);h.image=S,h.isPlaceholderImage=!1,await fs(h),(I=e.onObjectsChanged)==null||I.call(e),g(),e.setStatus(`✅ <span class="text-emerald-400 font-bold">Imagen actualizada</span> para ${Nt(h.name)}.`)},s("insp-copy-token").onclick=()=>navigator.clipboard.writeText(h.promptToken),s("insp-copy-motion").onclick=()=>navigator.clipboard.writeText(h.motionPrompt||""),s("insp-obj-use-in-prompt").onclick=()=>{e.injectObjectIntoPrompts(h)},s("insp-obj-export").onclick=()=>{const M=h.handle.replace("@","");e.downloadDataUrl(h.image,`objeto_${M}.png`),setTimeout(()=>{e.downloadJson({type:"Higgsfield_Object_Reference",id:h.id,name:h.name,handle:h.handle,category:h.category,object_token_lock:h.promptToken,broll_zero_face_motion_prompt:h.motionPrompt,usage_notes:h.usage},`objeto_${M}_higgsfield.json`)},220),e.setStatus(`📦 <span class="text-emerald-400 font-bold">Objeto ${Nt(h.handle)} exportado (Imagen + JSON).</span>`)},s("insp-obj-delete").onclick=async()=>{var S,C;const M=o(),T=M.findIndex(I=>I.id===h.id);T>=0&&M.splice(T,1),await ab(h.id),n=((S=M[0])==null?void 0:S.id)||null,(C=e.onObjectsChanged)==null||C.call(e),g()}}async function m(_,h="Nuevo Objeto Renderizado",p=!1){var I,x;const M=o(),T=M.length+1,S=h.toLowerCase().replace(/\.[a-z0-9]+$/i,"").replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"").slice(0,18),C={id:`obj-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,order:T,name:h.replace(/\.[a-z0-9]+$/i,""),handle:`@${S||"objeto_"+T}`,category:t==="Todos"?"Cuero & Fetish":t,floor:e.getActiveFloor(),spotId:((I=e.getActiveSpot())==null?void 0:I.id)||"vanity",image:_,isPlaceholderImage:p,promptToken:`detailed photorealistic ${h.replace(/\.[a-z0-9]+$/i,"")}, studio lighting, crisp material textures`,motionPrompt:"Subtle macro light reflections across surface, locked tripod slow 2% push-in, no humans, motion strength 2.2",usage:"Referencia visual para Higgsfield Elements o inserción B-Roll 1:2."};return M.unshift(C),n=C.id,await fs(C),(x=e.onObjectsChanged)==null||x.call(e),g(),C}s("input-obj-upload-new").onchange=async _=>{const h=Array.from(_.target.files||[]);for(const p of h){const M=await Vd(p);await m(M,p.name,!1)}_.target.value="",h.length&&e.setStatus(`✅ <span class="text-emerald-400 font-bold">${h.length} render(s) guardado(s) en Bóveda de Objetos.</span>`)},s("btn-obj-create-empty").onclick=async()=>{const _=`data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="540" height="540"><rect width="540" height="540" fill="#0d1017"/><text x="270" y="260" text-anchor="middle" font-size="88">🏺</text><text x="270" y="330" text-anchor="middle" fill="#94a3b8" font-family="sans-serif" font-size="20">Sube o captura imagen</text></svg>')}`;await m(_,`Objeto ${o().length+1}`,!0)},s("btn-obj-toggle-3d").onclick=()=>{const _=e.toggle3DViewportInObjects();s("btn-obj-toggle-3d").textContent=_?"✕ Ocultar Visor 3D":"👁 Mostrar Visor 3D para Capturar",s("obj-3d-capture-bar").classList.toggle("hidden",!_),s("obj-3d-capture-bar").classList.toggle("flex",_)},s("btn-obj-snap-new-1x1").onclick=async()=>{var h;const _=await e.captureObjectFrom3D("1:1");_&&(await m(_,`Prop ${((h=e.getActiveSpot())==null?void 0:h.name)||"Santuario"}`,!1),e.setStatus('📸 <span class="text-emerald-400 font-bold">Objeto 1:1 capturado del visor 3D y guardado.</span>'))},s("btn-obj-snap-new-9x16").onclick=async()=>{var h;const _=await e.captureObjectFrom3D("9:16");_&&(await m(_,`B-Roll ${((h=e.getActiveSpot())==null?void 0:h.name)||"Santuario"}`,!1),e.setStatus('📱 <span class="text-emerald-400 font-bold">Objeto B-Roll 9:16 capturado del visor 3D y guardado.</span>'))},s("btn-obj-snap-replace").onclick=async()=>{var p;const _=a();if(!_)return;const h=await e.captureObjectFrom3D("1:1");h&&(_.image=h,_.isPlaceholderImage=!1,await fs(_),(p=e.onObjectsChanged)==null||p.call(e),g(),e.setStatus(`✅ <span class="text-emerald-400 font-bold">Render 3D asignado a ${Nt(_.handle)}.</span>`))};function g(){d(),u(),f()}return{render:g,selectObject(_){n=_,g()},sync3DBar(_){s("btn-obj-toggle-3d").textContent=_?"✕ Ocultar Visor 3D":"👁 Mostrar Visor 3D para Capturar",s("obj-3d-capture-bar").classList.toggle("hidden",!_),s("obj-3d-capture-bar").classList.toggle("flex",_)}}}const nt=i=>String(i??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),ub=["🟢 Listo para Rodaje","🟡 En Pre-Producción","⚪ En Escritura","🎬 En Montaje","✅ Publicado"];function hb(i,e,t,n){let r="chapters",s=null,o=null;const a=Da.map(()=>!1);function l(){const _=[];for(const h of[4,3,2,1,0])Gn[h].spots.forEach(M=>{_.push({floor:h,spotId:M.id,label:`P${h===0?"B":h} · ${M.icon} ${M.name}`})});return _}i.innerHTML=`
    <div class="flex flex-wrap items-center justify-between gap-3 bg-[#12141a] border border-white/10 rounded-2xl px-4 py-2.5 shadow-xl">
      <div class="flex items-center gap-1.5 bg-black/50 p-1 rounded-xl border border-white/10 text-xs">
        <button data-csub="chapters" class="csub-btn px-3 py-1.5 rounded-lg bg-[#c86446] text-white font-semibold transition-all">
          📖 Capítulos & Historia
        </button>
        <button data-csub="director" class="csub-btn px-3 py-1.5 rounded-lg text-slate-300 hover:text-white font-semibold transition-all">
          🎬 Director de Fotografía & Animatic
        </button>
        <button data-csub="bible" class="csub-btn px-3 py-1.5 rounded-lg text-slate-300 hover:text-white font-semibold transition-all">
          👤 Biblia de Alina & Reglas
        </button>
      </div>
      <div class="text-[11px] text-slate-400 font-mono truncate">
        Serie activa: <span class="text-[#f29979] font-semibold">${nt(La.serieTitle)}</span>
      </div>
    </div>
  `;function c(_){r=_,i.querySelectorAll(".csub-btn").forEach(h=>{const p=h.dataset.csub===r;h.className=p?"csub-btn px-3 py-1.5 rounded-lg bg-[#c86446] text-white font-semibold transition-all shadow":"csub-btn px-3 py-1.5 rounded-lg text-slate-300 hover:text-white font-semibold transition-all"}),n.onSubTabChanged(r),r==="chapters"&&m(),r==="bible"&&g()}i.querySelectorAll(".csub-btn").forEach(_=>{_.onclick=()=>c(_.dataset.csub)});function d(){return n.getChapters()}function u(){const _=d();return _.find(h=>h.id===s)||_[0]||null}function f(_){clearTimeout(o),o=setTimeout(async()=>{var h;await ka(_),(h=n.onChaptersChanged)==null||h.call(n)},220)}function m(){var I;const _=d();!s&&_[0]&&(s=_[0].id);const h=u(),p=l(),M=n.getObjects(),T=n.getShots(),S=h?T.filter(x=>x.chapterId===h.id||(h.linkedShotIds||[]).includes(x.id)):[];if(e.innerHTML=`
      <div class="grid grid-cols-12 gap-4">
        <!-- Lista lateral de Capítulos -->
        <aside class="col-span-12 lg:col-span-4 xl:col-span-3 bg-[#12141a] border border-white/10 rounded-2xl p-4 shadow-2xl flex flex-col gap-3">
          <div class="flex items-center justify-between gap-2 pb-2.5 border-b border-white/5">
            <div>
              <h3 class="text-xs font-bold uppercase tracking-wider text-white">📖 Capítulos de Cine</h3>
              <p class="text-[10px] text-slate-400">${_.length} episodios en desarrollo</p>
            </div>
            <button id="btn-chap-add" class="px-2.5 py-1.5 rounded-xl bg-[#c86446] hover:bg-[#a34a32] text-white text-xs font-bold shadow transition-all">
              ➕ Capítulo
            </button>
          </div>

          <div class="flex flex-col gap-2 overflow-y-auto custom-scrollbar max-h-[65vh] pr-1" id="chap-list">
            ${_.map(x=>{const y=h&&x.id===h.id;return`
                <button data-cid="${nt(x.id)}" class="chap-item text-left p-3 rounded-xl border transition-all ${y?"border-[#c86446] bg-[#c86446]/15 copper-glow":"border-white/5 bg-white/[0.02] hover:bg-white/[0.06]"}">
                  <div class="flex items-center justify-between gap-1 text-[10px] font-mono">
                    <span class="text-[#f29979] font-bold">CAPÍTULO ${x.number}</span>
                    <span class="text-slate-400 truncate">${nt(x.status)}</span>
                  </div>
                  <div class="text-xs font-bold text-white mt-1">${nt(x.title)}</div>
                  <div class="text-[10px] text-slate-400 mt-0.5 line-clamp-2">${nt(x.subtitle||"")}</div>
                </button>`}).join("")}
          </div>
        </aside>

        <!-- Editor del Capítulo Seleccionado -->
        <section class="col-span-12 lg:col-span-8 xl:col-span-9 bg-[#12141a] border border-white/10 rounded-2xl p-4 md:p-5 shadow-2xl flex flex-col gap-4">
          ${h?`
          <!-- Cabecera editable del Capítulo + Salto directo al Set 3D -->
          <div class="flex flex-wrap items-start justify-between gap-3 pb-3 border-b border-white/10">
            <div class="flex-1 min-w-[240px] space-y-1.5">
              <div class="flex flex-wrap items-center gap-2">
                <span class="px-2 py-0.5 rounded bg-[#c86446]/20 text-[#f29979] border border-[#c86446]/30 text-[10px] font-mono font-bold">
                  CAPÍTULO ${h.number}
                </span>
                <input id="chap-week" type="text" value="${nt(h.week||"")}" placeholder="Acto / Semana"
                  class="bg-black/40 border border-white/10 rounded-lg px-2 py-0.5 text-[11px] font-mono text-slate-300 w-40 focus:outline-none focus:border-[#c86446]">
                <select id="chap-status" class="bg-black/40 border border-white/10 rounded-lg px-2 py-0.5 text-[11px] text-slate-200">
                  ${ub.map(x=>`<option value="${nt(x)}" ${x===h.status?"selected":""}>${nt(x)}</option>`).join("")}
                </select>
              </div>
              <input id="chap-title" type="text" value="${nt(h.title)}" placeholder="Título del capítulo"
                class="w-full bg-transparent border-b border-transparent hover:border-white/15 focus:border-[#c86446] text-lg font-bold text-white focus:outline-none py-0.5">
              <input id="chap-subtitle" type="text" value="${nt(h.subtitle||"")}" placeholder="Subtítulo o tema dramático"
                class="w-full bg-transparent border-b border-transparent hover:border-white/15 focus:border-[#c86446] text-xs text-slate-400 focus:outline-none py-0.5">
            </div>

            <!-- Set 3D vinculado + Ir a Rodar -->
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 bg-black/45 p-2.5 rounded-xl border border-white/10 text-xs">
              <div class="space-y-1">
                <label class="block text-[10px] font-mono text-slate-400 uppercase">Locación en el Santuario 3D</label>
                <div class="flex items-center gap-1.5">
                  <select id="chap-spot" class="bg-black/70 border border-white/10 rounded-lg px-2 py-1 text-[11px] text-white">
                    ${p.map(x=>`<option value="${x.floor}:${nt(x.spotId)}" ${x.spotId===h.spotId?"selected":""}>${nt(x.label)}</option>`).join("")}
                  </select>
                  <select id="chap-light" class="bg-black/70 border border-white/10 rounded-lg px-2 py-1 text-[11px] text-white">
                    <option value="night" ${h.lightingMode==="night"?"selected":""}>🌙 Noche</option>
                    <option value="day" ${h.lightingMode==="day"?"selected":""}>☀️ Día</option>
                  </select>
                </div>
              </div>
              <button id="btn-chap-goto-set" class="px-3 py-2 rounded-xl bg-gradient-to-r from-[#c86446] to-[#9a3412] hover:opacity-95 text-white font-bold shadow copper-glow whitespace-nowrap">
                🎥 Rodar en Estudio Prompts ↗
              </button>
            </div>
          </div>

          <!-- Guion Narrativo + Voz en Off + Notas de Dirección -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="space-y-1.5">
              <label for="chap-synopsis" class="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                1. Sinopsis & Escaleta Narrativa
              </label>
              <textarea id="chap-synopsis" rows="4" class="prompt-textarea" placeholder="Qué ocurre dramática y visualmente en este capítulo...">${nt(h.synopsis)}</textarea>

              <label for="chap-notes" class="block pt-1 text-[11px] font-bold uppercase tracking-wider text-slate-300">
                2. Notas de Dirección & Montaje (1:2)
              </label>
              <textarea id="chap-notes" rows="3" class="prompt-textarea" placeholder="Instrucciones de cámara, ritmo de cortes y atmósfera...">${nt(h.directorNotes||"")}</textarea>
            </div>

            <div class="space-y-1.5">
              <div class="flex items-center justify-between">
                <label for="chap-hook" class="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                  3. Monólogo / Voz en Off ("Alina-Hypno-v1")
                </label>
                <button id="btn-chap-copy-voice" class="text-[10px] font-mono text-[#f29979] hover:text-white">Copiar Voz</button>
              </div>
              <textarea id="chap-hook" rows="4" class="prompt-textarea" placeholder="Texto exacto que susurra o narra Alina en ElevenLabs...">${nt(h.hook)}</textarea>

              <label for="chap-tone" class="block pt-1 text-[11px] font-bold uppercase tracking-wider text-slate-300">
                4. Dirección Vocal & Diseño Sonoro
              </label>
              <textarea id="chap-tone" rows="3" class="prompt-textarea" placeholder="Cadencia, silencios, efectos binaurales...">${nt(h.audioTone||"")}</textarea>
            </div>
          </div>

          <!-- Objetos B-Roll vinculados al Capítulo -->
          <div class="p-3.5 rounded-xl bg-black/40 border border-white/10 space-y-2">
            <div class="flex items-center justify-between gap-2">
              <span class="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                🏺 Objetos B-Roll / Referencias de este Capítulo
              </span>
              <span class="text-[10px] text-slate-400 font-mono">Clic para incluir o quitar del capítulo</span>
            </div>
            <div class="flex flex-wrap gap-2" id="chap-obj-chips">
              ${M.map(x=>{const y=(h.linkedObjectIds||[]).includes(x.id);return`
                  <button data-oid="${nt(x.id)}" class="chap-obj-chip flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs transition-all ${y?"border-[#c86446] bg-[#c86446]/20 text-white font-semibold":"border-white/10 bg-white/5 text-slate-400 hover:text-white"}">
                    <img src="${x.image}" alt="" class="w-5 h-5 rounded object-cover">
                    <span class="font-mono text-[11px]">${nt(x.handle)}</span>
                  </button>`}).join("")}
            </div>
          </div>

          <!-- Tira Cinematográfica de Tomas Capturadas asignadas al Capítulo -->
          <div class="p-3.5 rounded-xl bg-black/40 border border-white/10 space-y-2.5">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <span class="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                🎞️ Planos Capturados en este Capítulo (${S.length})
              </span>
              <span class="text-[10px] text-slate-400">
                Asigna cualquier captura desde «Estudio Prompts» o pulsa «Rodar en Estudio Prompts ↗»
              </span>
            </div>
            ${S.length===0?`<div class="text-xs text-slate-400 py-3 text-center border border-dashed border-white/10 rounded-lg">
                    Aún no has vinculado capturas 9:16 a este capítulo. Pulsa <strong class="text-[#f29979]">Rodar en Estudio Prompts ↗</strong> para encuadrar sus planos.
                  </div>`:`<div class="flex gap-3 overflow-x-auto custom-scrollbar pb-1">
                    ${S.map((x,y)=>`
                      <div class="shrink-0 w-28 rounded-xl bg-[#151821] border border-white/10 p-1.5 space-y-1">
                        <img src="${x.image}" alt="Plano ${y+1}" class="w-full rounded-lg object-cover" style="aspect-ratio: 9/16;">
                        <div class="text-[10px] font-bold text-white truncate">Plano ${y+1} · ${nt(x.spot.name)}</div>
                        <div class="text-[9px] font-mono text-slate-400">${x.framing.mm}mm · ${nt(x.anim)}</div>
                      </div>`).join("")}
                  </div>`}
          </div>

          <!-- Acciones de exportación de la Ficha de Rodaje del Capítulo -->
          <div class="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-white/10 text-xs">
            <button id="btn-chap-delete" class="px-3 py-2 rounded-xl bg-white/5 hover:bg-rose-600/70 text-slate-300 hover:text-white border border-white/10 transition-colors">
              🗑 Eliminar Capítulo
            </button>
            <div class="flex flex-wrap items-center gap-2">
              <button id="btn-chap-copy-sheet" class="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold border border-white/15 transition-colors">
                📋 Copiar Ficha de Rodaje (LMNJDRS)
              </button>
              <button id="btn-chap-export-json" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow transition-colors">
                📦 Exportar Guion & Escaleta (.json)
              </button>
            </div>
          </div>
          `:'<div class="text-xs text-slate-400 m-auto py-12">Crea tu primer capítulo para empezar la historia.</div>'}
        </section>
      </div>
    `,(I=e.querySelector("#btn-chap-add"))==null||I.addEventListener("click",async()=>{var A;const x=d(),y=x.reduce((P,F)=>Math.max(P,F.number||0),0)+1,b=n.getActiveSpot(),v={id:`chap-${Date.now()}`,number:y,week:`Capítulo ${y}`,title:`Nuevo Capítulo ${y}`,subtitle:"En desarrollo narrativo",status:"⚪ En Escritura",floor:n.getActiveFloor(),spotId:(b==null?void 0:b.id)||"vanity",lightingMode:n.getLightingMode(),format:"Ficción Vertical 9:16",synopsis:"",hook:"«Escribe aquí el monólogo susurrado de Alina para este episodio...»",audioTone:"ElevenLabs Alina-Hypno-v1 (Pitch 0.98 | Rate 0.95)",directorNotes:"",linkedObjectIds:[],linkedShotIds:[]};x.push(v),s=v.id,await ka(v),(A=n.onChaptersChanged)==null||A.call(n),m(),n.setStatus(`📖 <span class="text-emerald-400 font-bold">Capítulo ${y} creado.</span>`)}),e.querySelectorAll(".chap-item").forEach(x=>{x.onclick=()=>{s=x.dataset.cid,m()}}),!h)return;const C=(x,y,b=!1)=>{const v=e.querySelector("#"+x);v&&v.addEventListener("input",A=>{if(h[y]=A.target.value,b){const P=e.querySelector(`.chap-item[data-cid="${h.id}"] .text-xs.font-bold`);P&&y==="title"&&(P.textContent=h.title)}f(h)})};C("chap-week","week"),C("chap-title","title",!0),C("chap-subtitle","subtitle"),C("chap-synopsis","synopsis"),C("chap-notes","directorNotes"),C("chap-hook","hook"),C("chap-tone","audioTone"),e.querySelector("#chap-status").onchange=x=>{h.status=x.target.value,f(h),m()},e.querySelector("#chap-spot").onchange=x=>{const[y,b]=x.target.value.split(":");h.floor=Number(y),h.spotId=b,f(h)},e.querySelector("#chap-light").onchange=x=>{h.lightingMode=x.target.value,f(h)},e.querySelectorAll(".chap-obj-chip").forEach(x=>{x.onclick=()=>{const y=x.dataset.oid;h.linkedObjectIds=Array.isArray(h.linkedObjectIds)?h.linkedObjectIds:[],h.linkedObjectIds.includes(y)?h.linkedObjectIds=h.linkedObjectIds.filter(b=>b!==y):h.linkedObjectIds.push(y),ka(h),m()}}),e.querySelector("#btn-chap-goto-set").onclick=()=>{n.loadChapterSetIntoStudio(h)},e.querySelector("#btn-chap-copy-voice").onclick=()=>{navigator.clipboard.writeText(h.hook||""),n.setStatus('🎙️ <span class="text-emerald-400 font-bold">Guion de voz copiado para ElevenLabs.</span>')},e.querySelector("#btn-chap-copy-sheet").onclick=()=>{const x=M.filter(b=>(h.linkedObjectIds||[]).includes(b.id)),y=["=== FICHA DE RODAJE CINEMATOGRÁFICO: ALINA VAN DIJK ===",`SERIE: ${La.serieTitle}`,`CAPÍTULO ${h.number}: ${h.title} (${h.week||""})`,`ESTADO: ${h.status}`,`SET 3D: Piso ${h.floor} • Spot ${h.spotId} • Luz ${h.lightingMode==="day"?"Día (Golden Hour)":"Noche (Chiaroscuro)"}`,"","[SINOPSIS]",h.synopsis||"(Sin sinopsis)","","[LOCUCIÓN ELEVENLABS — Alina-Hypno-v1 | Pitch 0.98 | Rate 0.95]",h.hook||"",`Tono vocal: ${h.audioTone||""}`,"","[NOTAS DE DIRECCIÓN]",h.directorNotes||"","",`[OBJETOS B-ROLL ASIGNADOS (${x.length})]`,...x.map(b=>`- ${b.handle} (${b.name}): ${b.promptToken}`),"",`[PLANOS CAPTURADOS VINCULADOS (${S.length})]`,...S.map((b,v)=>`Plano ${v+1} (${b.framing.mm}mm, ${b.anim}): ${b.fluxPrompt}`),"======================================================="].join(`
`);navigator.clipboard.writeText(y),n.setStatus(`📋 <span class="text-emerald-400 font-bold">Ficha completa del Capítulo ${h.number} copiada al portapapeles.</span>`)},e.querySelector("#btn-chap-export-json").onclick=()=>{const x=M.filter(y=>(h.linkedObjectIds||[]).includes(y.id));n.downloadJson({series:La.serieTitle,chapter:h,objects_broll:x.map(y=>({id:y.id,handle:y.handle,name:y.name,promptToken:y.promptToken,motionPrompt:y.motionPrompt})),captured_shots:S.map((y,b)=>({order:b+1,id:y.id,spot:y.spot.name,framing:y.framing,fluxPrompt:y.fluxPrompt,motionPrompt:y.motionPrompt}))},`alina_capitulo_${h.number}_escaleta.json`),n.setStatus(`📦 <span class="text-emerald-400 font-bold">Escaleta JSON del Capítulo ${h.number} descargada.</span>`)},e.querySelector("#btn-chap-delete").onclick=async()=>{var b,v;const x=d();if(x.length<=1){n.setStatus("⚠️ Conserva al menos un capítulo en la serie.");return}const y=x.findIndex(A=>A.id===h.id);y>=0&&x.splice(y,1),await cb(h.id),s=((b=x[0])==null?void 0:b.id)||null,(v=n.onChaptersChanged)==null||v.call(n),m()}}function g(){const _=eb,h=a.filter(Boolean).length,p=Math.round(h/Da.length*100);t.innerHTML=`
      <div class="grid grid-cols-12 gap-4">
        <!-- Columna Izquierda: Perfil & Token Lock Maestro -->
        <div class="col-span-12 lg:col-span-5 space-y-4">
          <div class="bg-[#12141a] border border-white/10 rounded-2xl p-5 shadow-2xl space-y-3">
            <div class="flex items-center gap-3.5">
              <img src="${_.avatar}" alt="${nt(_.name)}" class="w-16 h-16 rounded-2xl object-cover border border-[#c86446]/50 shadow-lg">
              <div>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-[#c86446]/20 text-[#f29979] border border-[#c86446]/30">CANON LMNJDRS</span>
                <h3 class="text-base font-bold text-white mt-1">${nt(_.name)} (${nt(_.age)})</h3>
                <p class="text-[11px] text-slate-400">${nt(_.origin)}</p>
              </div>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed">${nt(_.story)}</p>
            <div class="p-3 rounded-xl bg-black/45 border border-white/5 space-y-1 text-xs">
              <div class="flex items-center justify-between text-[11px]">
                <span class="font-bold text-[#f29979]">🎙️ Voz ElevenLabs: ${nt(_.voice.id)}</span>
                <span class="font-mono text-slate-400">Pitch ${_.voice.pitch} | Rate ${_.voice.rate}</span>
              </div>
              <p class="text-[11px] italic text-slate-300">${nt(_.voice.sample)}</p>
            </div>
          </div>

          <!-- Master Facial Token Lock -->
          <div class="bg-[#12141a] border border-white/10 rounded-2xl p-5 shadow-2xl space-y-3">
            <div class="flex items-center justify-between">
              <h4 class="text-xs font-bold uppercase tracking-wider text-white">🔒 Master Facial Token Lock</h4>
              <button id="btn-copy-master-token" class="text-[11px] font-mono text-[#f29979] hover:text-white font-semibold">Copiar Token</button>
            </div>
            <div class="p-3 rounded-xl bg-black/60 border border-white/10 text-[11px] font-mono text-emerald-300/95 leading-relaxed select-all">${nt(_.consistencyLock.tokenSnippet)}</div>

            <div class="flex items-center justify-between pt-1">
              <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400">Negative Prompt Base</span>
              <button id="btn-copy-neg-token" class="text-[11px] font-mono text-slate-400 hover:text-white">Copiar Negative</button>
            </div>
            <div class="p-2.5 rounded-xl bg-black/60 border border-white/5 text-[10px] font-mono text-rose-300/85 select-all">${nt(_.consistencyLock.negativeTokens)}</div>
          </div>
        </div>

        <!-- Columna Derecha: Prompts Maestros LMNJDRS + Decálogo Zero-Waste + Checklist -->
        <div class="col-span-12 lg:col-span-7 space-y-4">
          <div class="bg-[#12141a] border border-white/10 rounded-2xl p-5 shadow-2xl space-y-3">
            <h4 class="text-xs font-bold uppercase tracking-wider text-white">✨ Prompts Maestros de Referencia (LMNJDRS)</h4>
            <div class="space-y-2.5">
              ${_.masterPromptScenes.map((M,T)=>`
                <div class="p-3 rounded-xl bg-black/45 border border-white/10 space-y-1.5">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-white">${nt(M.label)}</span>
                    <button data-mscene="${T}" class="copy-mscene-btn text-[10px] font-mono text-[#f29979] hover:text-white">Copiar Prompt</button>
                  </div>
                  <p class="text-[11px] font-mono text-slate-300 leading-relaxed select-all">${nt(M.prompt)}</p>
                </div>`).join("")}
            </div>
          </div>

          <div class="bg-[#12141a] border border-white/10 rounded-2xl p-5 shadow-2xl space-y-3">
            <div class="flex items-center justify-between">
              <h4 class="text-xs font-bold uppercase tracking-wider text-white">🛡️ Checklist Pre-Flight & Doctrina Zero-Waste</h4>
              <span class="text-[11px] font-mono font-bold ${p===100?"text-emerald-400":"text-amber-300"}">${p}% Verificado</span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
              ${Da.map((M,T)=>`
                <label class="flex items-start gap-2 p-2.5 rounded-xl bg-black/40 border border-white/5 cursor-pointer text-[11px] text-slate-200">
                  <input type="checkbox" data-chk="${T}" ${a[T]?"checked":""} class="mt-0.5 accent-[#c86446]">
                  <span>${nt(M)}</span>
                </label>`).join("")}
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-white/5">
              ${tb.map(M=>`
                <div class="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 text-[11px]">
                  <div class="font-bold text-[#f29979]">#${M.num} · ${nt(M.rule)}</div>
                  <div class="text-slate-400 text-[10px] mt-0.5 leading-snug">${nt(M.desc)}</div>
                </div>`).join("")}
            </div>
          </div>
        </div>
      </div>
    `,t.querySelector("#btn-copy-master-token").onclick=()=>{navigator.clipboard.writeText(_.consistencyLock.tokenSnippet),n.setStatus('🔒 <span class="text-emerald-400 font-bold">Master Facial Token Lock copiado.</span>')},t.querySelector("#btn-copy-neg-token").onclick=()=>{navigator.clipboard.writeText(_.consistencyLock.negativeTokens),n.setStatus('🚫 <span class="text-emerald-400 font-bold">Negative Prompt copiado.</span>')},t.querySelectorAll(".copy-mscene-btn").forEach(M=>{M.onclick=()=>{const T=_.masterPromptScenes[Number(M.dataset.mscene)];T&&(navigator.clipboard.writeText(T.prompt),n.setStatus(`✨ <span class="text-emerald-400 font-bold">Prompt «${nt(T.label)}» copiado.</span>`))}}),t.querySelectorAll("input[data-chk]").forEach(M=>{M.onchange=T=>{a[Number(M.dataset.chk)]=T.target.checked,g()}})}return{getSubTab:()=>r,setSubTab:c,renderChapters:m,renderBible:g,selectChapter(_){s=_,c("chapters")}}}const H={activeView:"plato",cinemaSubView:"chapters",objects3DVisible:!1,activeEngine:"threejs",activeFloor:2,activeSpot:Gn[2].spots[0],activeAnim:"Idle",activeCamPreset:"85mm",lightingMode:"night",sliced:!0,activePass:"beauty",depthPass:!1,guide916:!1,theaterMode:!1,motionEngine:"higgsfield",shots:[],objects:[],chapters:[],selectedShotId:null,defaultChapterIdForNextShot:"",pendingObjectIdsForNextShot:[],threeLoadMs:0};let wr,Wn,Ci,Lo,wt,Oe,dn,Ji,Li,Ri;const Gd=new hp;let Ua=0,Oa=performance.now(),Yu=0;function Qi(i,e){const t=document.createElement("a");t.download=e,t.href=i,document.body.appendChild(t),t.click(),document.body.removeChild(t)}function xo(i,e){const t=new Blob([JSON.stringify(i,null,2)],{type:"application/json"}),n=URL.createObjectURL(t);Qi(n,e),setTimeout(()=>URL.revokeObjectURL(n),1e3)}function Kt(i){const e=document.getElementById("renderStatus");e&&(e.innerHTML=i)}function Wd(){const i=document.getElementById("perf-badge");i&&(i.textContent=`FPS: ${Yu||"--"}`)}function Ll(){const i=document.getElementById("btn-slice");i&&(i.textContent=H.sliced?"🔪 Sliced: ON":"🏛️ Sliced: OFF",i.className=H.sliced?"text-[10px] bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 px-2 py-0.5 rounded-lg border border-emerald-500/30 font-mono transition-colors":"text-[10px] bg-white/5 hover:bg-white/10 text-slate-300 px-2 py-0.5 rounded-lg border border-white/10 font-mono transition-colors")}function qr(){if(Lo)for(let i=0;i<=4;i++){const e=Lo.floorGroups[i];e&&(H.sliced&&i>H.activeFloor?(e.position.y=i*ee+16,e.visible=!1):(e.position.y=i*ee,e.visible=!0))}}function Ku(){return!!(H.activeView==="plato"||H.activeView==="prompts"||H.activeView==="objects"&&H.objects3DVisible||H.activeView==="cinema"&&H.cinemaSubView==="director")}function Fo(){Ku()&&(requestAnimationFrame(()=>{Oe==null||Oe.onWindowResize(),window.dispatchEvent(new Event("resize"))}),setTimeout(()=>{Oe==null||Oe.onWindowResize(),window.dispatchEvent(new Event("resize"))},140))}function Ii(i){const t=["plato","prompts","objects","cinema"].includes(i)?i:"plato";H.activeView=t,document.body.dataset.view=t,document.querySelectorAll(".top-nav-btn").forEach(n=>{const r=n.dataset.nav===t;n.className=r?"top-nav-btn px-3 py-1.5 rounded-xl bg-[#c86446] text-white font-bold shadow transition-all flex items-center gap-1.5 whitespace-nowrap copper-glow":"top-nav-btn px-3 py-1.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap"}),t==="objects"&&(Li==null||Li.render()),t==="cinema"&&(H.cinemaSubView==="chapters"&&(Ri==null||Ri.renderChapters()),H.cinemaSubView==="bible"&&(Ri==null||Ri.renderBible())),t==="prompts"&&Qn(),Fo()}function Nr(){const i=document.getElementById("shotsCountBadge"),e=document.getElementById("objectsCountBadge"),t=document.getElementById("chaptersCountBadge");i&&(i.textContent=String(H.shots.length),i.classList.toggle("hidden",H.shots.length===0)),e&&(e.textContent=String(H.objects.length)),t&&(t.textContent=String(H.chapters.length))}function fb(){const i=document.getElementById("floorContainer"),e=document.getElementById("compactFloorBar");i.innerHTML="",e.innerHTML="";const t={amber:"text-amber-400",purple:"text-purple-400",copper:"text-[#f29979]",emerald:"text-emerald-400",rose:"text-rose-400"},n={amber:"bg-amber-500/10 text-amber-300 border-amber-500/20",purple:"bg-purple-500/10 text-purple-300 border-purple-500/20",copper:"bg-[#c86446]/20 text-[#f29979] border-[#c86446]/30",emerald:"bg-emerald-500/10 text-emerald-300 border-emerald-500/20",rose:"bg-rose-500/10 text-rose-300 border-rose-500/20"};for(const r of[4,3,2,1,0]){const s=Gn[r],o=document.createElement("div");o.id=`floor-card-${r}`,o.className="floor-card cursor-pointer p-2.5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] transition-all",o.innerHTML=`
      <div class="flex items-center justify-between gap-2">
        <span class="text-xs font-bold ${t[s.badgeColor]} font-mono">${r===0?"PLANTA BAJA":`PISO ${r}${r===2?" ★":""}`}</span>
        <span class="text-[10px] px-2 py-0.5 rounded-full border font-medium ${n[s.badgeColor]}">${s.badge}</span>
      </div>
      <h3 class="text-xs font-semibold text-white mt-1 truncate">${s.subtitle}</h3>
    `,o.addEventListener("click",()=>No(r)),i.appendChild(o);const a=document.createElement("button");a.id=`floor-chip-${r}`,a.textContent=r===0?"PB":`P${r}`,a.title=s.floorName,a.addEventListener("click",()=>No(r)),e.appendChild(a)}}function cc(){for(let i=0;i<=4;i++){const e=document.getElementById(`floor-card-${i}`);e&&(e.className=i===H.activeFloor?"floor-card cursor-pointer p-2.5 rounded-xl border border-[#c86446]/70 bg-[#c86446]/12 copper-glow transition-all":"floor-card cursor-pointer p-2.5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] transition-all");const t=document.getElementById(`floor-chip-${i}`);t&&(t.className=i===H.activeFloor?"px-2 py-1 rounded-lg text-[11px] font-mono font-bold bg-[#c86446]/25 text-[#f29979] border border-[#c86446]/60 transition-all":"px-2 py-1 rounded-lg text-[11px] font-mono text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all")}}function dc(){const i=Gn[H.activeFloor],e=document.getElementById("spotPillsContainer");e.innerHTML="",i.spots.forEach(t=>{const n=document.createElement("button");n.id=`pill-${t.id}`;const r=t.id===H.activeSpot.id;n.className=r?"px-3 py-1 rounded-lg text-xs font-semibold bg-[#c86446] text-white transition-all shadow":"px-3 py-1 rounded-lg text-xs font-semibold bg-white/5 text-slate-300 hover:bg-white/10 transition-all",n.textContent=`${t.icon} ${t.name}`,n.addEventListener("click",()=>uc(t)),e.appendChild(n)})}function Go(i){H.activeAnim=i,document.getElementById("alinaPoseBadge").textContent=i,document.querySelectorAll(".anim-btn").forEach(e=>{const t=e.dataset.anim===i;e.className=t?"anim-btn py-1 px-2 rounded-lg border border-[#c86446] bg-[#c86446]/25 text-white font-semibold transition-colors":"anim-btn py-1 px-2 rounded-lg border border-white/10 bg-black/40 text-slate-300 hover:bg-white/10 transition-colors"})}function No(i){H.activeFloor=i;const e=Gn[i];document.getElementById("currentFloorTag").textContent=e.floorName,cc(),qr(),uc(e.spots[0])}function uc(i){H.activeSpot=i,H.activeCamPreset="85mm",dc(),document.getElementById("currentSpotTitle").textContent=i.name,document.getElementById("fluxPromptBox").textContent=i.prompt,document.getElementById("scriptInput").value=i.script,document.getElementById("alinaPosBadge").textContent=`${i.alinaPos.x.toFixed(1)}, ${i.alinaPos.y.toFixed(1)}, ${i.alinaPos.z.toFixed(1)}`,document.getElementById("brollPackage").innerHTML=i.brolls.map(e=>`<div>• ${e}</div>`).join(""),wt==null||wt.placeAtSpot(i),Go(i.defaultAnim||"Idle"),Oe==null||Oe.flyTo(i.camPos,i.camTarget),Rs(),Ji==null||Ji.onSpotChanged()}function ps(i){for(const e of Object.values(Gn)){const t=e.spots.find(n=>n.id===i);if(t)return t}return null}function jd(i){const e=ps(i);!e||H.activeSpot&&H.activeSpot.id===e.id&&H.activeFloor===e.floor||(H.activeFloor=e.floor,H.activeSpot=e,document.getElementById("currentFloorTag").textContent=Gn[e.floor].floorName,cc(),qr(),dc(),document.getElementById("currentSpotTitle").textContent=e.name,document.getElementById("fluxPromptBox").textContent=e.prompt,document.getElementById("alinaPosBadge").textContent=`${e.alinaPos.x.toFixed(1)}, ${e.alinaPos.y.toFixed(1)}, ${e.alinaPos.z.toFixed(1)}`,wt==null||wt.placeAtSpot(e))}function Rs(){const i=Gn[H.activeFloor].floorName.split("•")[0].trim(),t={beauty:H.activeSpot.name,depth:"DEPTH PASS",normals:"CAMERA NORMALS",mask:"SEMANTIC MASK 7-ID"}[H.activePass]||H.activeSpot.name;document.getElementById("viewport-status-hud").textContent=`${i} • ${t} [Three.js 1:1]`}function ko(i){H.lightingMode=i,Ci==null||Ci.setMode(i),Ji==null||Ji.onModeChanged();const e=document.getElementById("btn-mode-day"),t=document.getElementById("btn-mode-night");i==="day"?(e.className="px-2 py-1 rounded-lg bg-[#c86446] text-white font-medium shadow transition-all",t.className="px-2 py-1 rounded-lg text-slate-400 hover:text-white font-medium transition-all"):(t.className="px-2 py-1 rounded-lg bg-[#c86446] text-white font-medium shadow transition-all",e.className="px-2 py-1 rounded-lg text-slate-400 hover:text-white font-medium transition-all")}function Zu(i="beauty"){H.activePass=i,H.depthPass=i==="depth";const e=new D(H.activeSpot.alinaPos.x,H.activeSpot.alinaPos.y+1,H.activeSpot.alinaPos.z);Oe==null||Oe.setRenderPass(i,e),document.querySelectorAll(".pass-btn").forEach(t=>{const n=t.dataset.pass===i,r=i==="beauty"?"bg-[#c86446]":i==="depth"?"bg-emerald-600":i==="normals"?"bg-indigo-600":"bg-fuchsia-600";t.className=n?`pass-btn px-2 py-1 rounded-lg ${r} text-white font-semibold shadow transition-all`:"pass-btn px-2 py-1 rounded-lg text-slate-400 hover:text-white font-semibold transition-colors"}),Rs()}function pb(i){Zu(i?"depth":"beauty")}function Ba(i){H.activeCamPreset=i;const e=H.activeSpot;if(i==="dollhouse"){H.sliced=!1,Ll(),qr(),Oe==null||Oe.flyTo({x:3.5,y:12.8,z:36},{x:0,y:11.2,z:-5.5}),document.getElementById("viewport-status-hud").textContent="CASA DE MUÑECAS 5 PISOS [Three.js 1:1]";return}if(i==="overview"){H.sliced=!1,Ll(),qr(),Oe==null||Oe.flyTo({x:30,y:24.5,z:33.5},{x:0,y:10.5,z:-4}),document.getElementById("viewport-status-hud").textContent="EXTERIOR 3/4 • 5 PISOS [Three.js 1:1]";return}i==="85mm"||i==="reset"?Oe==null||Oe.flyTo(e.camPos,e.camTarget):i==="macro"?Oe==null||Oe.flyTo(e.macroPos,e.macroTarget):i==="top"&&(Oe==null||Oe.flyTo({x:e.alinaPos.x,y:e.alinaPos.y+4.3,z:e.alinaPos.z+1},{x:e.alinaPos.x,y:e.alinaPos.y,z:e.alinaPos.z})),Rs()}function $d(){const i=Oe?Oe.getCameraTelemetry():{spot:H.activeSpot.id,preset:H.activeCamPreset};return{engine:"Three.js Metric 1:1 Previz + alina.glb",character:"Alina Van Dijk",token_lock:"28yo Dutch-Latin woman Alina Van Dijk, vivid copper red hair with natural soft waves, vivid emerald green eyes, light natural freckles, crimson lips, micro-pores",floor:Gn[H.activeFloor].floorName,spot:H.activeSpot.name,animation:H.activeAnim,lighting_mode:H.lightingMode,spatial_coordinates:H.activeSpot.alinaPos,camera_telemetry:i,higgsfield_zero_waste:{mode:"Image-to-Video",motion_strength:parseFloat(document.getElementById("motionSlider").value),aspect_ratio:"9:16 (1080x1920)",duration_seconds:3.5,lipsync_engine:H.motionEngine,brolls:H.activeSpot.brolls},flux_prompt:H.activeSpot.prompt,elevenlabs_script:document.getElementById("scriptInput").value}}let Xd=null;function za(i){i&&(clearTimeout(Xd),Xd=setTimeout(()=>{gi(i)},220))}function mb(){if(Oe)return{...Oe.getCameraTelemetry(),approximate:!1};const i=H.activeSpot;return{...H.activeCamPreset==="macro"?{position:{...i.macroPos},target:{...i.macroTarget},fov_deg:24}:H.activeCamPreset==="top"?{position:{x:i.alinaPos.x,y:i.alinaPos.y+4.3,z:i.alinaPos.z+1},target:{...i.alinaPos},fov_deg:52}:H.activeCamPreset==="dollhouse"?{position:{x:3.5,y:12.8,z:36},target:{x:0,y:11.2,z:-5.5},fov_deg:55}:H.activeCamPreset==="overview"?{position:{x:30,y:24.5,z:33.5},target:{x:0,y:10.5,z:-4},fov_deg:60}:{position:{...i.camPos},target:{...i.camTarget},fov_deg:36},approximate:!0}}function An(){return H.shots.find(i=>i.id===H.selectedShotId)||null}function hc(i){const e=(i==null?void 0:i.objectIds)||[];return H.objects.filter(t=>e.includes(t.id))}async function gb(i,e=null){var p,M;const t=H.activeSpot,n=Gn[H.activeFloor].floorName,r=mb(),s=parseFloat(document.getElementById("motionSlider").value)||2.5,o=(dn==null?void 0:dn.active)&&(dn==null?void 0:dn.shot),a=o?{shotLabel:(p=dn.shot.shotTypeId)==null?void 0:p.replace(/_/g," "),angleLabel:"cinematic angle",focalLengthMm:dn.shot.focalLengthMm}:null,l=o?(M=dn.shot.cameraMoveId)==null?void 0:M.replace(/_/g," "):null,c=Jv({camera:r,spot:t,camPreset:H.activeCamPreset,cinemaShot:a}),d=await Qv(i),u=!!e||H.depthPass,f=[...H.pendingObjectIdsForNextShot];H.pendingObjectIdsForNextShot=[];const m=H.objects.filter(T=>f.includes(T.id)),g=qu({spot:t,floorName:n,anim:H.activeAnim,lightingMode:H.lightingMode,framing:c,imageMetrics:d,depthPass:u,attachedObjects:m}),_=Do({anim:H.activeAnim,framing:c,motionStrength:s,motionEngine:H.motionEngine,cinemaMoveLabel:l}),h={id:`shot-${Date.now()}`,createdAt:new Date().toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit",second:"2-digit"}),engine:H.activeEngine,floor:H.activeFloor,floorName:n,spot:t,anim:H.activeAnim,camPreset:H.activeCamPreset,lightingMode:H.lightingMode,sliced:H.sliced,depthPass:H.depthPass,camera:r,framing:c,imageMetrics:d,cinemaMoveLabel:l,image:i,depthImage:e,motionEngine:H.motionEngine,motionStrength:s,objectIds:f,chapterId:H.defaultChapterIdForNextShot||"",fluxPrompt:g,motionPrompt:_};if(H.shots.unshift(h),H.shots.length>24){const T=H.shots.pop();T!=null&&T.id&&lc(T.id)}H.selectedShotId=h.id,await gi(h),Nr(),Qn(),Kt(`✅ <span class="text-emerald-400 font-bold">Captura #${H.shots.length} (${h.engine==="unity"?"Unity 6 URP":"Three.js"}) lista en Estudio Prompts.</span>`)}function Ha({withDepth:i=!1}={}){H.activeView!=="prompts"&&Ii("prompts");const e=Oe.renderVertical916DataURL(1080,1920,!!H.depthPass),t=i?Oe.renderVertical916DataURL(1080,1920,!0):null;gb(e,t)}function Ju(i="1:1"){const e=i==="1:1"?1080:1920;return Promise.resolve(Oe.renderVertical916DataURL(1080,e,!1))}function _b(){const i=An();i&&(i.depthImage=Oe.renderVertical916DataURL(1080,1920,!0),Wo(i,{onlyFluxIfClean:!0}),gi(i),Qn(),Kt('✅ <span class="text-emerald-400 font-bold">Depth Map 9:16 adjuntado a la captura.</span>'))}function Wo(i,{onlyFluxIfClean:e=!1}={}){i.fluxPrompt=qu({spot:i.spot,floorName:i.floorName,anim:i.anim,lightingMode:i.lightingMode,framing:i.framing,imageMetrics:i.imageMetrics,depthPass:!!i.depthImage||i.depthPass,attachedObjects:hc(i)}),e||(i.motionPrompt=Do({anim:i.anim,framing:i.framing,motionStrength:i.motionStrength,motionEngine:i.motionEngine,cinemaMoveLabel:i.cinemaMoveLabel}))}function Qu(i){document.querySelectorAll(".motion-btn").forEach(e=>{const t=e.dataset.motion===i;e.className=t?"motion-btn p-2 rounded-xl border border-emerald-500/50 bg-emerald-500/10 text-left transition-all":"motion-btn p-2 rounded-xl border border-white/5 bg-black/40 text-left hover:bg-white/5 transition-all";const n=e.querySelector("div");n&&(n.className=t?"font-bold text-emerald-400 text-[11px]":"font-bold text-white text-[11px]")})}function Qn(){const i=document.getElementById("shotsStrip"),e=document.getElementById("shotEmptyState"),t=document.getElementById("shotDetail"),n=H.shots.length>0;i.classList.toggle("hidden",!n),i.classList.toggle("flex",n),e.classList.toggle("hidden",n),i.innerHTML="",H.shots.forEach((c,d)=>{const u=c.id===H.selectedShotId,f=H.shots.length-d,m=document.createElement("button");m.type="button",m.className=`relative shrink-0 rounded-lg overflow-hidden border-2 transition-all ${u?"border-[#c86446] scale-[1.02] copper-glow":"border-white/10 opacity-75 hover:opacity-100"}`,m.title=`Toma #${f} • ${c.spot.name}`,m.innerHTML=`
      <img src="${c.image}" alt="Toma ${f}" class="block w-12 object-cover bg-black" style="aspect-ratio: 9/16;">
      <span class="absolute top-0.5 left-0.5 px-1 rounded bg-black/80 text-[8px] font-mono text-white">#${f}</span>
      <span class="absolute bottom-0.5 right-0.5 px-1 rounded text-[7px] font-mono font-bold ${c.engine==="unity"?"bg-pink-500/85 text-white":"bg-emerald-600/85 text-white"}">${c.engine==="unity"?"U6":"3D"}</span>
    `,m.addEventListener("click",()=>{H.selectedShotId=c.id,Qn()}),i.appendChild(m)});const r=An();if(t.classList.toggle("hidden",!r),t.classList.toggle("flex",!!r),!r)return;document.getElementById("shotPreview").src=r.image;const s=document.getElementById("shotDepthPreview");r.depthImage?(s.src=r.depthImage,s.classList.remove("hidden")):s.classList.add("hidden"),document.getElementById("shotMetaTitle").textContent=`${r.spot.icon} ${r.spot.name}`;const o=document.getElementById("shotEngineTag");o.textContent=r.engine==="unity"?"UNITY 6 URP":"THREE.JS",o.className=r.engine==="unity"?"text-[9px] font-mono px-1.5 py-0.5 rounded border border-pink-500/40 bg-pink-500/15 text-pink-300 shrink-0 font-bold":"text-[9px] font-mono px-1.5 py-0.5 rounded border border-emerald-500/40 bg-emerald-500/15 text-emerald-300 shrink-0 font-bold",document.getElementById("shotMetaFraming").textContent=`${r.framing.shot} • ${r.framing.mm}mm • ${r.framing.angle}`,document.getElementById("shotMetaState").textContent=`${r.floorName.split("•")[0].trim()} • ${r.anim} • ${r.lightingMode==="day"?"☀️ Día":"🌙 Noche"} • ${r.createdAt}`,document.getElementById("shotMetaLight").textContent=r.imageMetrics?`Luz medida: ${r.imageMetrics.summary}`:"";const a=document.getElementById("shotChapterSelect");a.innerHTML='<option value="">📖 Sin capítulo</option>'+H.chapters.map(c=>`<option value="${c.id}" ${r.chapterId===c.id?"selected":""}>Cap. ${c.number}: ${c.title}</option>`).join("");const l=document.getElementById("shotObjectChips");r.objectIds=Array.isArray(r.objectIds)?r.objectIds:[],l.innerHTML=H.objects.map(c=>{const d=r.objectIds.includes(c.id);return`
      <button type="button" data-oid="${c.id}" class="shot-obj-chip flex items-center gap-1.5 px-2 py-1 rounded-lg border text-[10px] font-mono transition-all ${d?"border-[#c86446] bg-[#c86446]/25 text-white font-bold shadow":"border-white/10 bg-white/5 text-slate-400 hover:text-white"}" title="${c.name}">
        <img src="${c.image}" alt="" class="w-4 h-4 rounded object-cover">
        <span>${c.handle}</span>
      </button>`}).join(""),l.querySelectorAll(".shot-obj-chip").forEach(c=>{c.onclick=()=>{const d=c.dataset.oid;r.objectIds.includes(d)?r.objectIds=r.objectIds.filter(u=>u!==d):r.objectIds.push(d),Wo(r,{onlyFluxIfClean:!0}),gi(r),Qn()}}),document.getElementById("shotFluxPrompt").value=r.fluxPrompt,document.getElementById("shotMotionPrompt").value=r.motionPrompt,document.getElementById("motionSlider").value=String(r.motionStrength),document.getElementById("motionVal").textContent=Number(r.motionStrength).toFixed(1),H.motionEngine=r.motionEngine,Qu(r.motionEngine)}function xb(i){var e,t;H.activeFloor!==i.floor&&(H.activeFloor=i.floor,document.getElementById("currentFloorTag").textContent=Gn[i.floor].floorName,cc(),qr(),unityBridge==null||unityBridge.sendFloor(i.floor)),H.activeSpot=i.spot,H.activeCamPreset=i.camPreset||"85mm",dc(),document.getElementById("currentSpotTitle").textContent=i.spot.name,document.getElementById("fluxPromptBox").textContent=i.spot.prompt,document.getElementById("alinaPosBadge").textContent=`${i.spot.alinaPos.x.toFixed(1)}, ${i.spot.alinaPos.y.toFixed(1)}, ${i.spot.alinaPos.z.toFixed(1)}`,wt==null||wt.placeAtSpot(i.spot),Go(i.anim),wt==null||wt.playAnimation(i.anim),ko(i.lightingMode),pb(i.depthPass),(e=i.camera)!=null&&e.position&&((t=i.camera)!=null&&t.target)&&(Oe==null||Oe.flyTo(i.camera.position,i.camera.target)),Rs(),Kt(`↩ <span class="text-emerald-400 font-bold">Encuadre restaurado:</span> ${i.spot.name} (${i.anim}).`)}function vb(i){const e=hc(i),t=H.chapters.find(n=>n.id===i.chapterId);return{captured_at:i.createdAt,engine:i.engine==="unity"?"Motor B: Unity 6 URP WebGL":"Motor A: Three.js WebGL + alina.glb",character:"Alina Van Dijk",chapter:t?{number:t.number,title:t.title}:null,floor:i.floorName,spot:i.spot.name,animation:i.anim,lighting_mode:i.lightingMode,spatial_coordinates:i.spot.alinaPos,camera_telemetry:i.camera,framing_analysis:i.framing,measured_frame_lighting:i.imageMetrics,reference_objects:e.map(n=>({id:n.id,handle:n.handle,name:n.name,category:n.category,object_token_lock:n.promptToken,broll_motion_prompt:n.motionPrompt})),higgsfield_zero_waste:{mode:"Image-to-Video",target_engine:i.motionEngine,motion_strength:i.motionStrength,aspect_ratio:"9:16 (1080x1920)",duration_seconds:3.5,has_depth_map:!!i.depthImage},prompts:{flux_keyframe_prompt:i.fluxPrompt,higgsfield_motion_prompt:i.motionPrompt},elevenlabs_script:(t==null?void 0:t.hook)||document.getElementById("scriptInput").value}}async function bb(){const i=An();if(!i)return;const e=`alina_piso${i.floor}_${i.spot.id}_${i.id.slice(-5)}`,t=hc(i);!i.depthImage&&Oe&&(i.depthImage=Oe.renderVertical916DataURL(1080,1920,"depth"),gi(i),Qn());const n=[{path:"frames_3d_raw/start_beauty_1080x1920.png",data:i.image},{path:"frames_3d_raw/start_depth_1080x1920.png",data:i.depthImage},{path:"frames_3d_raw/start_normals_1080x1920.png",data:Oe.renderVertical916DataURL(1080,1920,"normals")},{path:"frames_3d_raw/start_mask_1080x1920.png",data:Oe.renderVertical916DataURL(1080,1920,"mask")},{path:"higgsfield_capture_manifest.json",data:vb(i)}];t.forEach(o=>{n.push({path:`elements_refs/${o.handle.replace("@","")}.png`,data:o.image})});const r=await Io(n),s=URL.createObjectURL(r);Qi(s,`shotpack_${e}.zip`),setTimeout(()=>URL.revokeObjectURL(s),2e3),Kt(`✅ <span class="text-emerald-400 font-bold">Shot Pack .zip exportado (Beauty + Depth + Normals + Mask + ${t.length} Objeto(s) + JSON).</span>`)}function qd(i=null){const e=i!==null?i:!H.theaterMode;H.theaterMode=e;const t=document.getElementById("viewport-wrapper"),n=document.getElementById("btn-fullscreen");t.classList.toggle("viewport-theater",e),n.textContent=e?"✕ Salir":"⛶ Completa",Fo()}function yb(){var t,n,r,s;document.getElementById("brand-home-btn").addEventListener("click",()=>Ii("plato")),document.querySelectorAll(".top-nav-btn").forEach(o=>{o.addEventListener("click",()=>Ii(o.dataset.nav))}),document.getElementById("btn-prompts-close").addEventListener("click",()=>Ii("plato")),document.getElementById("btn-goto-objects-vault").addEventListener("click",()=>Ii("objects")),document.getElementById("btn-mode-day").addEventListener("click",()=>ko("day")),document.getElementById("btn-mode-night").addEventListener("click",()=>ko("night")),document.getElementById("btn-slice").addEventListener("click",()=>{H.sliced=!H.sliced,Ll(),qr()}),document.getElementById("btn-capture-to-prompt").addEventListener("click",()=>Ha({withDepth:!1})),document.getElementById("btn-capture-shot").addEventListener("click",()=>Ha({withDepth:!1})),document.getElementById("btn-capture-shot-depth").addEventListener("click",()=>Ha({withDepth:!0})),document.getElementById("btn-quick-save-object").addEventListener("click",async()=>{var d,u,f;const o=await Ju("1:1");if(!o)return;const a=((d=H.activeSpot)==null?void 0:d.name)||"Santuario",l=H.objects.length+1,c={id:`obj-${Date.now()}`,order:l,name:`Objeto ${a}`,handle:`@prop_${((u=H.activeSpot)==null?void 0:u.id)||"set"}_${l}`,category:"Audio & Set",floor:H.activeFloor,spotId:((f=H.activeSpot)==null?void 0:f.id)||"vanity",image:o,isPlaceholderImage:!1,promptToken:`photorealistic prop captured from ${a}, detailed luxury surface texture and lighting`,motionPrompt:"Subtle macro light reflections across prop surface, slow 2% push-in, no humans, motion strength 2.2",usage:`Capturado desde Piso ${H.activeFloor} (${a}).`};H.objects.unshift(c),await fs(c),Nr(),Ii("objects"),Li==null||Li.selectObject(c.id),Kt(`🏺 <span class="text-emerald-400 font-bold">Objeto guardado en la Bóveda (${c.handle}).</span>`)}),document.getElementById("shotFluxPrompt").addEventListener("input",o=>{const a=An();a&&(a.fluxPrompt=o.target.value,za(a))}),document.getElementById("shotMotionPrompt").addEventListener("input",o=>{const a=An();a&&(a.motionPrompt=o.target.value,za(a))}),document.getElementById("shotChapterSelect").addEventListener("change",o=>{const a=An();a&&(a.chapterId=o.target.value,gi(a),Kt(a.chapterId?'📖 <span class="text-emerald-400 font-bold">Captura vinculada al capítulo seleccionado.</span>':"ℹ️ Captura desvinculada de capítulo."))}),document.getElementById("btn-shot-regen").addEventListener("click",()=>{const o=An();o&&(Wo(o),gi(o),Qn(),Kt('↻ <span class="text-[#f29979]">Prompts regenerados con los Objetos y telemetría activos.</span>'))}),document.getElementById("btn-shot-restore").addEventListener("click",()=>{const o=An();o&&xb(o)}),document.getElementById("btn-shot-attach-depth").addEventListener("click",_b),document.getElementById("btn-shot-png").addEventListener("click",()=>{const o=An();o&&(Qi(o.image,`alina_${o.engine}_piso${o.floor}_${o.spot.id}_1080x1920.png`),Kt('✅ <span class="text-emerald-400 font-bold">PNG 1080×1920 descargado.</span>'))}),document.getElementById("btn-shot-package").addEventListener("click",bb),document.getElementById("btn-shot-delete").addEventListener("click",()=>{var a;if(!H.selectedShotId)return;const o=H.selectedShotId;H.shots=H.shots.filter(l=>l.id!==o),H.selectedShotId=((a=H.shots[0])==null?void 0:a.id)??null,lc(o),Nr(),Qn()}),document.querySelectorAll(".copy-prompt-btn").forEach(o=>{o.addEventListener("click",()=>{const a=document.getElementById(o.dataset.copy);if(!a)return;navigator.clipboard.writeText(a.value);const l=o.textContent;o.textContent="¡Copiado!",setTimeout(()=>{o.textContent=l},1400)})}),document.getElementById("btn-dollhouse").addEventListener("click",()=>Ba("dollhouse")),document.getElementById("btn-overview").addEventListener("click",()=>Ba("overview")),document.getElementById("btn-fullscreen").addEventListener("click",()=>qd());const i=document.getElementById("docs-modal"),e=o=>{i&&i.classList.toggle("hidden",!o)};(t=document.getElementById("btn-docs-modal"))==null||t.addEventListener("click",()=>e(!0)),(n=document.getElementById("btn-docs-close"))==null||n.addEventListener("click",()=>e(!1)),(r=document.getElementById("btn-docs-close-footer"))==null||r.addEventListener("click",()=>e(!1)),i==null||i.addEventListener("click",o=>{o.target===i&&e(!1)}),document.querySelectorAll(".docs-tab-btn").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.tab;document.querySelectorAll(".docs-tab-btn").forEach(l=>{const c=l.dataset.tab===a;l.className=c?"docs-tab-btn px-3 py-1.5 rounded-lg font-medium text-white bg-[#c86446] transition-all shrink-0":"docs-tab-btn px-3 py-1.5 rounded-lg font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all shrink-0"}),document.querySelectorAll(".docs-pane").forEach(l=>{l.classList.toggle("hidden",l.id!==`pane-${a}`)})})}),window.addEventListener("keydown",o=>{if(o.key==="Escape"){if(i&&!i.classList.contains("hidden")){e(!1);return}H.theaterMode&&qd(!1)}}),document.getElementById("btn-guide-916").addEventListener("click",()=>{H.guide916=!H.guide916,document.getElementById("guide-916-overlay").classList.toggle("hidden",!H.guide916),document.getElementById("btn-guide-916").className=H.guide916?"px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-400/40 text-[11px] font-mono transition-colors":"px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 text-[11px] font-mono transition-colors"}),document.querySelectorAll(".pass-btn").forEach(o=>{o.addEventListener("click",()=>Zu(o.dataset.pass))}),document.querySelectorAll(".cam-preset-btn").forEach(o=>{o.addEventListener("click",()=>Ba(o.dataset.cam))}),document.querySelectorAll(".anim-btn").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.anim;Go(a),wt==null||wt.playAnimation(a)})}),document.querySelectorAll(".motion-btn").forEach(o=>{o.addEventListener("click",()=>{H.motionEngine=o.dataset.motion,Qu(H.motionEngine);const a=An();a&&(a.motionEngine=H.motionEngine,a.motionPrompt=Do({anim:a.anim,framing:a.framing,motionStrength:a.motionStrength,motionEngine:a.motionEngine,cinemaMoveLabel:a.cinemaMoveLabel}),document.getElementById("shotMotionPrompt").value=a.motionPrompt,gi(a))})}),document.getElementById("motionSlider").addEventListener("input",o=>{const a=parseFloat(o.target.value);document.getElementById("motionVal").textContent=a.toFixed(1);const l=An();l&&(l.motionStrength=a,l.motionPrompt=Do({anim:l.anim,framing:l.framing,motionStrength:a,motionEngine:l.motionEngine,cinemaMoveLabel:l.cinemaMoveLabel}),document.getElementById("shotMotionPrompt").value=l.motionPrompt,za(l))}),document.getElementById("copyBtn").addEventListener("click",o=>{o.preventDefault(),navigator.clipboard.writeText(document.getElementById("fluxPromptBox").textContent);const a=document.getElementById("copyBtn");a.textContent="¡Copiado!",setTimeout(()=>{a.textContent="Copiar"},1500)}),(s=document.getElementById("btn-share"))==null||s.addEventListener("click",()=>{navigator.clipboard.writeText(window.location.href);const o=document.getElementById("btn-share");o.innerHTML="<span>¡Copiado!</span>",setTimeout(()=>{o.innerHTML="<span>🔗 Compartir</span>"},1800)}),document.getElementById("btn-export-png").addEventListener("click",()=>{const o=H.activePass||"beauty",a=Oe.renderVertical916DataURL(1080,1920,o);Qi(a,`alina_9x16_piso${H.activeFloor}_${H.activeSpot.id}_${o}.png`),Kt(`✅ <span class="text-emerald-400 font-bold">Frame 1080×1920 (${o}) exportado.</span>`)}),document.getElementById("btn-export-json").addEventListener("click",()=>{xo($d(),`alina_higgsfield_piso${H.activeFloor}_${H.activeSpot.id}.json`),Kt('✅ <span class="text-amber-300 font-bold">JSON técnico del Spot descargado.</span>')}),document.getElementById("btn-export-package").addEventListener("click",async()=>{const o=`alina_piso${H.activeFloor}_${H.activeSpot.id}`,a=Oe.renderOpenPose916(1080,1920,(wt==null?void 0:wt.root)||null),l=[{path:"frames_3d_raw/start_beauty_1080x1920.png",data:Oe.renderVertical916DataURL(1080,1920,"beauty")},{path:"frames_3d_raw/start_depth_1080x1920.png",data:Oe.renderVertical916DataURL(1080,1920,"depth")},{path:"frames_3d_raw/start_normals_1080x1920.png",data:Oe.renderVertical916DataURL(1080,1920,"normals")},{path:"frames_3d_raw/start_mask_1080x1920.png",data:Oe.renderVertical916DataURL(1080,1920,"mask")},{path:"frames_3d_raw/start_openpose_1080x1920.png",data:a.dataUrl},{path:"frames_3d_raw/start_openpose.json",data:a.keypoints},{path:"higgsfield_spot_manifest.json",data:$d()}],c=await Io(l),d=URL.createObjectURL(c);Qi(d,`shotpack_${o}.zip`),setTimeout(()=>URL.revokeObjectURL(d),2e3),Kt('✅ <span class="text-emerald-400 font-bold">Shot Pack 9:16 (.zip con Beauty, Depth, Normals, Mask, OpenPose y JSON) exportado.</span>')})}async function Mb(){const i=performance.now();fb(),yb();const e=document.getElementById("three-canvas-container");wr=new jl,Wn=new cx({antialias:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"}),Wn.setPixelRatio(Math.min(window.devicePixelRatio,2)),Wn.setSize(e.clientWidth||960,e.clientHeight||560,!1),Wn.shadowMap.enabled=!0,Wn.shadowMap.type=Kd,e.appendChild(Wn.domElement),Ci=new hx(wr,Wn),Lo=Jx(wr,Ci),Oe=new pv(e,wr,Wn,Ci),wt=new Qx(wr),dn=new Fv({scene:wr,renderer:Wn,lighting:Ci,camCtrl:Oe,alina:wt,getSpot:o=>o?ps(o):H.activeSpot,prepareSpot:jd,getBaseMode:()=>H.lightingMode}),Ji=Kv(document.getElementById("cinema-panel"),{director:dn,getSpot:ps,getActiveSpot:()=>H.activeSpot,setActiveSpot:jd,getAnim:()=>H.activeAnim,renderer:Wn,camCtrl:Oe,download:{dataUrl:Qi,json:xo},setStatus:Kt}),Li=db(document.getElementById("col-objects"),{getObjects:()=>H.objects,getActiveFloor:()=>H.activeFloor,getActiveSpot:()=>H.activeSpot,onObjectsChanged:()=>{Nr(),H.activeView==="prompts"&&Qn()},toggle3DViewportInObjects:()=>(H.objects3DVisible=!H.objects3DVisible,document.body.classList.toggle("objects-with-3d",H.objects3DVisible),Fo(),H.objects3DVisible),captureObjectFrom3D:o=>Ju(o),injectObjectIntoPrompts:o=>{const a=An();a?(a.objectIds=Array.isArray(a.objectIds)?a.objectIds:[],a.objectIds.includes(o.id)||(a.objectIds.push(o.id),Wo(a,{onlyFluxIfClean:!0}),gi(a))):H.pendingObjectIdsForNextShot.includes(o.id)||H.pendingObjectIdsForNextShot.push(o.id),Ii("prompts"),Kt(`🏺 <span class="text-emerald-400 font-bold">Objeto ${o.handle} inyectado en Estudio Prompts.</span>`)},downloadDataUrl:Qi,downloadJson:xo,setStatus:Kt}),Ri=hb(document.getElementById("cinema-subnav-wrap"),document.getElementById("col-chapters"),document.getElementById("col-bible"),{getChapters:()=>H.chapters,getObjects:()=>H.objects,getShots:()=>H.shots,getActiveFloor:()=>H.activeFloor,getActiveSpot:()=>H.activeSpot,getLightingMode:()=>H.lightingMode,onChaptersChanged:()=>{Nr()},onSubTabChanged:o=>{H.cinemaSubView=o,document.body.dataset.cinemaSub=o,Fo()},loadChapterSetIntoStudio:o=>{H.defaultChapterIdForNextShot=o.id,H.pendingObjectIdsForNextShot=Array.isArray(o.linkedObjectIds)?[...o.linkedObjectIds]:[],ko(o.lightingMode||"night"),No(o.floor??3);const a=ps(o.spotId);a&&uc(a),o.hook&&(document.getElementById("scriptInput").value=o.hook),Ii("prompts"),Kt(`🎥 <span class="text-emerald-400 font-bold">Set del Capítulo ${o.number} («${o.title}») cargado.</span> Tus próximas capturas se vincularán a este capítulo.`)},downloadJson:xo,setStatus:Kt});const[t,n,r]=await Promise.all([ob(),lb(),sb(ps)]);H.objects=t,H.chapters=n,r.length>0&&(H.shots=r,H.selectedShotId=r[0].id),Nr(),Li.render(),Ri.renderChapters(),Qn(),No(2);try{await wt.load("./models/alina.glb"),wt.placeAtSpot(H.activeSpot),Go(H.activeSpot.defaultAnim||"Idle"),H.threeLoadMs=Math.round(performance.now()-i),Wd(),Rs()}catch(o){console.error("[AlinaLoader] Error:",o),document.getElementById("viewport-status-hud").textContent=`Error cargando alina.glb: ${o.message}`}function s(){requestAnimationFrame(s);const o=Math.min(Gd.getDelta(),.1),a=Gd.elapsedTime;if(Ku()){wt.update(o),Ci.update(a);for(const c of Lo.waterMeshes)c.position.y=(c.userData.baseY??(c.userData.baseY=c.position.y))+Math.sin(a*2.2)*.012;dn==null||dn.update(),Oe.update(),Oe.render(),Ua++;const l=performance.now();l-Oa>=750&&(Yu=Math.round(Ua*1e3/(l-Oa)),Ua=0,Oa=l,Wd())}}s()}Mb();
