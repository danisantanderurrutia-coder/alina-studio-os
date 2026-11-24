(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kl="174",Ds={ROTATE:0,DOLLY:1,PAN:2},As={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Jh=0,pc=1,Qh=2,Xd=1,$d=2,di=3,_i=0,Kt=1,Bn=2,Ni=0,Ls=1,mc=2,gc=3,_c=4,eu=5,Ji=100,tu=101,nu=102,iu=103,su=104,ru=200,ou=201,au=202,lu=203,Va=204,Ga=205,cu=206,du=207,hu=208,uu=209,fu=210,pu=211,mu=212,gu=213,_u=214,Wa=0,ja=1,Xa=2,Os=3,$a=4,qa=5,Ya=6,Ka=7,qd=0,xu=1,vu=2,Fi=0,yu=1,bu=2,Su=3,Yd=4,Mu=5,wu=6,Eu=7,xc="attached",Tu="detached",Kd=300,Bs=301,zs=302,Mr=303,Za=304,Bo=306,Pn=1e3,qn=1001,wo=1002,rn=1003,Zd=1004,mr=1005,Gt=1006,_o=1007,Yn=1008,xi=1009,Jd=1010,Qd=1011,wr=1012,Ol=1013,ns=1014,hn=1015,Kn=1016,Bl=1017,zl=1018,Hs=1020,eh=35902,th=1021,nh=1022,Cn=1023,ih=1024,sh=1025,Ns=1026,Vs=1027,Hl=1028,Vl=1029,rh=1030,Gl=1031,Wl=1033,xo=33776,vo=33777,yo=33778,bo=33779,Ja=35840,Qa=35841,el=35842,tl=35843,nl=36196,il=37492,sl=37496,rl=37808,ol=37809,al=37810,ll=37811,cl=37812,dl=37813,hl=37814,ul=37815,fl=37816,pl=37817,ml=37818,gl=37819,_l=37820,xl=37821,So=36492,vl=36494,yl=36495,oh=36283,bl=36284,Sl=36285,Ml=36286,ah=2200,lh=2201,Au=2202,Er=2300,Tr=2301,Xo=2302,Rs=2400,Cs=2401,Eo=2402,jl=2500,Ru=2501,Cu=0,ch=1,wl=2,Iu=3200,Pu=3201,dh=0,Du=1,fi="",Rt="srgb",Zt="srgb-linear",To="linear",_t="srgb",ls=7680,vc=519,Lu=512,Nu=513,Fu=514,hh=515,Uu=516,ku=517,Ou=518,Bu=519,El=35044,yc="300 es",mi=2e3,Ao=2001;class Oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bc=1234567;const yr=Math.PI/180,Gs=180/Math.PI;function Vn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[s&255]+$t[s>>8&255]+$t[s>>16&255]+$t[s>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function Ye(s,e,t){return Math.max(e,Math.min(t,s))}function Xl(s,e){return(s%e+e)%e}function zu(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Hu(s,e,t){return s!==e?(t-s)/(e-s):0}function br(s,e,t){return(1-t)*s+t*e}function Vu(s,e,t,n){return br(s,e,1-Math.exp(-t*n))}function Gu(s,e=1){return e-Math.abs(Xl(s,e*2)-e)}function Wu(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function ju(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Xu(s,e){return s+Math.floor(Math.random()*(e-s+1))}function $u(s,e){return s+Math.random()*(e-s)}function qu(s){return s*(.5-Math.random())}function Yu(s){s!==void 0&&(bc=s);let e=bc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ku(s){return s*yr}function Zu(s){return s*Gs}function Ju(s){return(s&s-1)===0&&s!==0}function Qu(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ef(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function tf(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),d=o((e+n)/2),h=r((e-n)/2),u=o((e-n)/2),m=r((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":s.set(a*d,l*h,l*u,a*c);break;case"YZY":s.set(l*u,a*d,l*h,a*c);break;case"ZXZ":s.set(l*h,l*u,a*d,a*c);break;case"XZX":s.set(a*d,l*_,l*m,a*c);break;case"YXY":s.set(l*m,a*d,l*_,a*c);break;case"ZYZ":s.set(l*_,l*m,a*d,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function zn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function mt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ro={DEG2RAD:yr,RAD2DEG:Gs,generateUUID:Vn,clamp:Ye,euclideanModulo:Xl,mapLinear:zu,inverseLerp:Hu,lerp:br,damp:Vu,pingpong:Gu,smoothstep:Wu,smootherstep:ju,randInt:Xu,randFloat:$u,randFloatSpread:qu,seededRandom:Yu,degToRad:Ku,radToDeg:Zu,isPowerOfTwo:Ju,ceilPowerOfTwo:Qu,floorPowerOfTwo:ef,setQuaternionFromProperEuler:tf,normalize:mt,denormalize:zn};class Ie{constructor(e=0,t=0){Ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,t,n,i,r,o,a,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=i,d[2]=a,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],h=n[7],u=n[2],m=n[5],_=n[8],g=i[0],f=i[3],p=i[6],M=i[1],A=i[4],b=i[7],I=i[2],S=i[5],y=i[8];return r[0]=o*g+a*M+l*I,r[3]=o*f+a*A+l*S,r[6]=o*p+a*b+l*y,r[1]=c*g+d*M+h*I,r[4]=c*f+d*A+h*S,r[7]=c*p+d*b+h*y,r[2]=u*g+m*M+_*I,r[5]=u*f+m*A+_*S,r[8]=u*p+m*b+_*y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-n*r*d+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*o-a*c,u=a*l-d*r,m=c*r-o*l,_=t*h+n*u+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(i*c-d*n)*g,e[2]=(a*n-i*o)*g,e[3]=u*g,e[4]=(d*t-i*l)*g,e[5]=(i*r-a*t)*g,e[6]=m*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply($o.makeScale(e,t)),this}rotate(e){return this.premultiply($o.makeRotation(-e)),this}translate(e,t){return this.premultiply($o.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $o=new $e;function uh(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ar(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function nf(){const s=Ar("canvas");return s.style.display="block",s}const Sc={};function Ki(s){s in Sc||(Sc[s]=!0,console.warn(s))}function sf(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function rf(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function of(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Mc=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wc=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function af(){const s={enabled:!0,workingColorSpace:Zt,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_t&&(i.r=gi(i.r),i.g=gi(i.g),i.b=gi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_t&&(i.r=Fs(i.r),i.g=Fs(i.g),i.b=Fs(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===fi?To:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Zt]:{primaries:e,whitePoint:n,transfer:To,toXYZ:Mc,fromXYZ:wc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:Mc,fromXYZ:wc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}}),s}const it=af();function gi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Fs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let cs;class lf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{cs===void 0&&(cs=Ar("canvas")),cs.width=e.width,cs.height=e.height;const n=cs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=cs}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ar("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=gi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(gi(t[n]/255)*255):t[n]=gi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cf=0;class $l{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=Vn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(qo(i[o].image)):r.push(qo(i[o]))}else r=qo(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function qo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?lf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let df=0;class Bt extends Oi{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,n=qn,i=qn,r=Gt,o=Yn,a=Cn,l=xi,c=Bt.DEFAULT_ANISOTROPY,d=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=Vn(),this.name="",this.source=new $l(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pn:e.x=e.x-Math.floor(e.x);break;case qn:e.x=e.x<0?0:1;break;case wo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pn:e.y=e.y-Math.floor(e.y);break;case qn:e.y=e.y<0?0:1;break;case wo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=Kd;Bt.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,i=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],d=l[4],h=l[8],u=l[1],m=l[5],_=l[9],g=l[2],f=l[6],p=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-g)<.01&&Math.abs(_-f)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+g)<.1&&Math.abs(_+f)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,b=(m+1)/2,I=(p+1)/2,S=(d+u)/4,y=(h+g)/4,T=(_+f)/4;return A>b&&A>I?A<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(A),i=S/n,r=y/n):b>I?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=S/i,r=T/i):I<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(I),n=y/r,i=T/r),this.set(n,i,r,t),this}let M=Math.sqrt((f-_)*(f-_)+(h-g)*(h-g)+(u-d)*(u-d));return Math.abs(M)<.001&&(M=1),this.x=(f-_)/M,this.y=(h-g)/M,this.z=(u-d)/M,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hf extends Oi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Bt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new $l(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ki extends hf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class fh extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=rn,this.minFilter=rn,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class uf extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=rn,this.minFilter=rn,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],d=n[i+2],h=n[i+3];const u=r[o+0],m=r[o+1],_=r[o+2],g=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h;return}if(a===1){e[t+0]=u,e[t+1]=m,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==u||c!==m||d!==_){let f=1-a;const p=l*u+c*m+d*_+h*g,M=p>=0?1:-1,A=1-p*p;if(A>Number.EPSILON){const I=Math.sqrt(A),S=Math.atan2(I,p*M);f=Math.sin(f*S)/I,a=Math.sin(a*S)/I}const b=a*M;if(l=l*f+u*b,c=c*f+m*b,d=d*f+_*b,h=h*f+g*b,f===1-a){const I=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=I,c*=I,d*=I,h*=I}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],d=n[i+3],h=r[o],u=r[o+1],m=r[o+2],_=r[o+3];return e[t]=a*_+d*h+l*m-c*u,e[t+1]=l*_+d*u+c*h-a*m,e[t+2]=c*_+d*m+a*u-l*h,e[t+3]=d*_-a*h-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(i/2),h=a(r/2),u=l(n/2),m=l(i/2),_=l(r/2);switch(o){case"XYZ":this._x=u*d*h+c*m*_,this._y=c*m*h-u*d*_,this._z=c*d*_+u*m*h,this._w=c*d*h-u*m*_;break;case"YXZ":this._x=u*d*h+c*m*_,this._y=c*m*h-u*d*_,this._z=c*d*_-u*m*h,this._w=c*d*h+u*m*_;break;case"ZXY":this._x=u*d*h-c*m*_,this._y=c*m*h+u*d*_,this._z=c*d*_+u*m*h,this._w=c*d*h-u*m*_;break;case"ZYX":this._x=u*d*h-c*m*_,this._y=c*m*h+u*d*_,this._z=c*d*_-u*m*h,this._w=c*d*h+u*m*_;break;case"YZX":this._x=u*d*h+c*m*_,this._y=c*m*h+u*d*_,this._z=c*d*_-u*m*h,this._w=c*d*h-u*m*_;break;case"XZY":this._x=u*d*h-c*m*_,this._y=c*m*h-u*d*_,this._z=c*d*_+u*m*h,this._w=c*d*h+u*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],h=t[10],u=n+a+h;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(d-l)*m,this._y=(r-c)*m,this._z=(o-i)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(d-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(r-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-i)/m,this._x=(r+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+o*a+i*c-r*l,this._y=i*d+o*l+r*a-n*c,this._z=r*d+o*c+n*l-i*a,this._w=o*d-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),h=Math.sin((1-t)*d)/c,u=Math.sin(t*d)/c;return this._w=o*h+this._w*u,this._x=n*h+this._x*u,this._y=i*h+this._y*u,this._z=r*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ec.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ec.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),d=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*d,this.y=n+l*d+a*c-r*h,this.z=i+l*h+r*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Yo.copy(this).projectOnVector(e),this.sub(Yo)}reflect(e){return this.sub(Yo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yo=new L,Ec=new vn;class Wn{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Un):Un.fromBufferAttribute(r,o),Un.applyMatrix4(e.matrixWorld),this.expandByPoint(Un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ur.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ur.copy(n.boundingBox)),Ur.applyMatrix4(e.matrixWorld),this.union(Ur)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nr),kr.subVectors(this.max,nr),ds.subVectors(e.a,nr),hs.subVectors(e.b,nr),us.subVectors(e.c,nr),bi.subVectors(hs,ds),Si.subVectors(us,hs),Vi.subVectors(ds,us);let t=[0,-bi.z,bi.y,0,-Si.z,Si.y,0,-Vi.z,Vi.y,bi.z,0,-bi.x,Si.z,0,-Si.x,Vi.z,0,-Vi.x,-bi.y,bi.x,0,-Si.y,Si.x,0,-Vi.y,Vi.x,0];return!Ko(t,ds,hs,us,kr)||(t=[1,0,0,0,1,0,0,0,1],!Ko(t,ds,hs,us,kr))?!1:(Or.crossVectors(bi,Si),t=[Or.x,Or.y,Or.z],Ko(t,ds,hs,us,kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const si=[new L,new L,new L,new L,new L,new L,new L,new L],Un=new L,Ur=new Wn,ds=new L,hs=new L,us=new L,bi=new L,Si=new L,Vi=new L,nr=new L,kr=new L,Or=new L,Gi=new L;function Ko(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Gi.fromArray(s,r);const a=i.x*Math.abs(Gi.x)+i.y*Math.abs(Gi.y)+i.z*Math.abs(Gi.z),l=e.dot(Gi),c=t.dot(Gi),d=n.dot(Gi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const ff=new Wn,ir=new L,Zo=new L;class ti{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ff.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ir.subVectors(e,this.center);const t=ir.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ir,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ir.copy(e.center).add(Zo)),this.expandByPoint(ir.copy(e.center).sub(Zo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ri=new L,Jo=new L,Br=new L,Mi=new L,Qo=new L,zr=new L,ea=new L;class Ir{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,t),ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Jo.copy(e).add(t).multiplyScalar(.5),Br.copy(t).sub(e).normalize(),Mi.copy(this.origin).sub(Jo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Br),a=Mi.dot(this.direction),l=-Mi.dot(Br),c=Mi.lengthSq(),d=Math.abs(1-o*o);let h,u,m,_;if(d>0)if(h=o*l-a,u=o*a-l,_=r*d,h>=0)if(u>=-_)if(u<=_){const g=1/d;h*=g,u*=g,m=h*(h+o*u+2*a)+u*(o*h+u+2*l)+c}else u=r,h=Math.max(0,-(o*u+a)),m=-h*h+u*(u+2*l)+c;else u=-r,h=Math.max(0,-(o*u+a)),m=-h*h+u*(u+2*l)+c;else u<=-_?(h=Math.max(0,-(-o*r+a)),u=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+u*(u+2*l)+c):u<=_?(h=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(h=Math.max(0,-(o*r+a)),u=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+u*(u+2*l)+c);else u=o>0?-r:r,h=Math.max(0,-(o*u+a)),m=-h*h+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Jo).addScaledVector(Br,u),m}intersectSphere(e,t){ri.subVectors(e.center,this.origin);const n=ri.dot(this.direction),i=ri.dot(ri)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),d>=0?(r=(e.min.y-u.y)*d,o=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,o=(e.min.y-u.y)*d),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(a=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,t,n,i,r){Qo.subVectors(t,e),zr.subVectors(n,e),ea.crossVectors(Qo,zr);let o=this.direction.dot(ea),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mi.subVectors(this.origin,e);const l=a*this.direction.dot(zr.crossVectors(Mi,zr));if(l<0)return null;const c=a*this.direction.dot(Qo.cross(Mi));if(c<0||l+c>o)return null;const d=-a*Mi.dot(ea);return d<0?null:this.at(d/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(e,t,n,i,r,o,a,l,c,d,h,u,m,_,g,f){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,d,h,u,m,_,g,f)}set(e,t,n,i,r,o,a,l,c,d,h,u,m,_,g,f){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=d,p[10]=h,p[14]=u,p[3]=m,p[7]=_,p[11]=g,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/fs.setFromMatrixColumn(e,0).length(),r=1/fs.setFromMatrixColumn(e,1).length(),o=1/fs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),d=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const u=o*d,m=o*h,_=a*d,g=a*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=m+_*c,t[5]=u-g*c,t[9]=-a*l,t[2]=g-u*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){const u=l*d,m=l*h,_=c*d,g=c*h;t[0]=u+g*a,t[4]=_*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*d,t[9]=-a,t[2]=m*a-_,t[6]=g+u*a,t[10]=o*l}else if(e.order==="ZXY"){const u=l*d,m=l*h,_=c*d,g=c*h;t[0]=u-g*a,t[4]=-o*h,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*d,t[9]=g-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const u=o*d,m=o*h,_=a*d,g=a*h;t[0]=l*d,t[4]=_*c-m,t[8]=u*c+g,t[1]=l*h,t[5]=g*c+u,t[9]=m*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const u=o*l,m=o*c,_=a*l,g=a*c;t[0]=l*d,t[4]=g-u*h,t[8]=_*h+m,t[1]=h,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=m*h+_,t[10]=u-g*h}else if(e.order==="XZY"){const u=o*l,m=o*c,_=a*l,g=a*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=u*h+g,t[5]=o*d,t[9]=m*h-_,t[2]=_*h-m,t[6]=a*d,t[10]=g*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pf,e,mf)}lookAt(e,t,n){const i=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),wi.crossVectors(n,mn),wi.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),wi.crossVectors(n,mn)),wi.normalize(),Hr.crossVectors(mn,wi),i[0]=wi.x,i[4]=Hr.x,i[8]=mn.x,i[1]=wi.y,i[5]=Hr.y,i[9]=mn.y,i[2]=wi.z,i[6]=Hr.z,i[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],h=n[5],u=n[9],m=n[13],_=n[2],g=n[6],f=n[10],p=n[14],M=n[3],A=n[7],b=n[11],I=n[15],S=i[0],y=i[4],T=i[8],v=i[12],x=i[1],R=i[5],N=i[9],F=i[13],O=i[2],X=i[6],H=i[10],Q=i[14],q=i[3],ce=i[7],ue=i[11],be=i[15];return r[0]=o*S+a*x+l*O+c*q,r[4]=o*y+a*R+l*X+c*ce,r[8]=o*T+a*N+l*H+c*ue,r[12]=o*v+a*F+l*Q+c*be,r[1]=d*S+h*x+u*O+m*q,r[5]=d*y+h*R+u*X+m*ce,r[9]=d*T+h*N+u*H+m*ue,r[13]=d*v+h*F+u*Q+m*be,r[2]=_*S+g*x+f*O+p*q,r[6]=_*y+g*R+f*X+p*ce,r[10]=_*T+g*N+f*H+p*ue,r[14]=_*v+g*F+f*Q+p*be,r[3]=M*S+A*x+b*O+I*q,r[7]=M*y+A*R+b*X+I*ce,r[11]=M*T+A*N+b*H+I*ue,r[15]=M*v+A*F+b*Q+I*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],u=e[10],m=e[14],_=e[3],g=e[7],f=e[11],p=e[15];return _*(+r*l*h-i*c*h-r*a*u+n*c*u+i*a*m-n*l*m)+g*(+t*l*m-t*c*u+r*o*u-i*o*m+i*c*d-r*l*d)+f*(+t*c*h-t*a*m-r*o*h+n*o*m+r*a*d-n*c*d)+p*(-i*a*d-t*l*h+t*a*u+i*o*h-n*o*u+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],u=e[10],m=e[11],_=e[12],g=e[13],f=e[14],p=e[15],M=h*f*c-g*u*c+g*l*m-a*f*m-h*l*p+a*u*p,A=_*u*c-d*f*c-_*l*m+o*f*m+d*l*p-o*u*p,b=d*g*c-_*h*c+_*a*m-o*g*m-d*a*p+o*h*p,I=_*h*l-d*g*l-_*a*u+o*g*u+d*a*f-o*h*f,S=t*M+n*A+i*b+r*I;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/S;return e[0]=M*y,e[1]=(g*u*r-h*f*r-g*i*m+n*f*m+h*i*p-n*u*p)*y,e[2]=(a*f*r-g*l*r+g*i*c-n*f*c-a*i*p+n*l*p)*y,e[3]=(h*l*r-a*u*r-h*i*c+n*u*c+a*i*m-n*l*m)*y,e[4]=A*y,e[5]=(d*f*r-_*u*r+_*i*m-t*f*m-d*i*p+t*u*p)*y,e[6]=(_*l*r-o*f*r-_*i*c+t*f*c+o*i*p-t*l*p)*y,e[7]=(o*u*r-d*l*r+d*i*c-t*u*c-o*i*m+t*l*m)*y,e[8]=b*y,e[9]=(_*h*r-d*g*r-_*n*m+t*g*m+d*n*p-t*h*p)*y,e[10]=(o*g*r-_*a*r+_*n*c-t*g*c-o*n*p+t*a*p)*y,e[11]=(d*a*r-o*h*r-d*n*c+t*h*c+o*n*m-t*a*m)*y,e[12]=I*y,e[13]=(d*g*i-_*h*i+_*n*u-t*g*u-d*n*f+t*h*f)*y,e[14]=(_*a*i-o*g*i-_*n*l+t*g*l+o*n*f-t*a*f)*y,e[15]=(o*h*i-d*a*i+d*n*l-t*h*l-o*n*u+t*a*u)*y,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,d=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,d*a+n,d*l-i*o,0,c*l-i*a,d*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,d=o+o,h=a+a,u=r*c,m=r*d,_=r*h,g=o*d,f=o*h,p=a*h,M=l*c,A=l*d,b=l*h,I=n.x,S=n.y,y=n.z;return i[0]=(1-(g+p))*I,i[1]=(m+b)*I,i[2]=(_-A)*I,i[3]=0,i[4]=(m-b)*S,i[5]=(1-(u+p))*S,i[6]=(f+M)*S,i[7]=0,i[8]=(_+A)*y,i[9]=(f-M)*y,i[10]=(1-(u+g))*y,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=fs.set(i[0],i[1],i[2]).length();const o=fs.set(i[4],i[5],i[6]).length(),a=fs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],kn.copy(this);const c=1/r,d=1/o,h=1/a;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=d,kn.elements[5]*=d,kn.elements[6]*=d,kn.elements[8]*=h,kn.elements[9]*=h,kn.elements[10]*=h,t.setFromRotationMatrix(kn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=mi){const l=this.elements,c=2*r/(t-e),d=2*r/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i);let m,_;if(a===mi)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ao)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=mi){const l=this.elements,c=1/(t-e),d=1/(n-i),h=1/(o-r),u=(t+e)*c,m=(n+i)*d;let _,g;if(a===mi)_=(o+r)*h,g=-2*h;else if(a===Ao)_=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const fs=new L,kn=new Xe,pf=new L(0,0,0),mf=new L(1,1,1),wi=new L,Hr=new L,mn=new L,Tc=new Xe,Ac=new vn;class ei{constructor(e=0,t=0,n=0,i=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],d=i[9],h=i[2],u=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Tc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ac.setFromEuler(this),this.setFromQuaternion(Ac,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";class ph{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gf=0;const Rc=new L,ps=new vn,oi=new Xe,Vr=new L,sr=new L,_f=new L,xf=new vn,Cc=new L(1,0,0),Ic=new L(0,1,0),Pc=new L(0,0,1),Dc={type:"added"},vf={type:"removed"},ms={type:"childadded",child:null},ta={type:"childremoved",child:null};class wt extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=Vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new L,t=new ei,n=new vn,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xe},normalMatrix:{value:new $e}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ph,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.multiply(ps),this}rotateOnWorldAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.premultiply(ps),this}rotateX(e){return this.rotateOnAxis(Cc,e)}rotateY(e){return this.rotateOnAxis(Ic,e)}rotateZ(e){return this.rotateOnAxis(Pc,e)}translateOnAxis(e,t){return Rc.copy(e).applyQuaternion(this.quaternion),this.position.add(Rc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cc,e)}translateY(e){return this.translateOnAxis(Ic,e)}translateZ(e){return this.translateOnAxis(Pc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Vr.copy(e):Vr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(sr,Vr,this.up):oi.lookAt(Vr,sr,this.up),this.quaternion.setFromRotationMatrix(oi),i&&(oi.extractRotation(i.matrixWorld),ps.setFromRotationMatrix(oi),this.quaternion.premultiply(ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dc),ms.child=e,this.dispatchEvent(ms),ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vf),ta.child=e,this.dispatchEvent(ta),ta.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dc),ms.child=e,this.dispatchEvent(ms),ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,e,_f),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,xf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),u=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}wt.DEFAULT_UP=new L(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const On=new L,ai=new L,na=new L,li=new L,gs=new L,_s=new L,Lc=new L,ia=new L,sa=new L,ra=new L,oa=new lt,aa=new lt,la=new lt;class Hn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),On.subVectors(e,t),i.cross(On);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){On.subVectors(i,t),ai.subVectors(n,t),na.subVectors(e,t);const o=On.dot(On),a=On.dot(ai),l=On.dot(na),c=ai.dot(ai),d=ai.dot(na),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const u=1/h,m=(c*l-a*d)*u,_=(o*d-a*l)*u;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,li.x),l.addScaledVector(o,li.y),l.addScaledVector(a,li.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return oa.setScalar(0),aa.setScalar(0),la.setScalar(0),oa.fromBufferAttribute(e,t),aa.fromBufferAttribute(e,n),la.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(oa,r.x),o.addScaledVector(aa,r.y),o.addScaledVector(la,r.z),o}static isFrontFacing(e,t,n,i){return On.subVectors(n,t),ai.subVectors(e,t),On.cross(ai).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),On.cross(ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Hn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;gs.subVectors(i,n),_s.subVectors(r,n),ia.subVectors(e,n);const l=gs.dot(ia),c=_s.dot(ia);if(l<=0&&c<=0)return t.copy(n);sa.subVectors(e,i);const d=gs.dot(sa),h=_s.dot(sa);if(d>=0&&h<=d)return t.copy(i);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(n).addScaledVector(gs,o);ra.subVectors(e,r);const m=gs.dot(ra),_=_s.dot(ra);if(_>=0&&m<=_)return t.copy(r);const g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(_s,a);const f=d*_-m*h;if(f<=0&&h-d>=0&&m-_>=0)return Lc.subVectors(r,i),a=(h-d)/(h-d+(m-_)),t.copy(i).addScaledVector(Lc,a);const p=1/(f+g+u);return o=g*p,a=u*p,t.copy(n).addScaledVector(gs,o).addScaledVector(_s,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const mh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},Gr={h:0,s:0,l:0};function ca(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Le{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=it.workingColorSpace){if(e=Xl(e,1),t=Ye(t,0,1),n=Ye(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ca(o,r,e+1/3),this.g=ca(o,r,e),this.b=ca(o,r,e-1/3)}return it.toWorkingColorSpace(this,i),this}setStyle(e,t=Rt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){const n=mh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}copyLinearToSRGB(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return it.fromWorkingColorSpace(qt.copy(this),e),Math.round(Ye(qt.r*255,0,255))*65536+Math.round(Ye(qt.g*255,0,255))*256+Math.round(Ye(qt.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.fromWorkingColorSpace(qt.copy(this),t);const n=qt.r,i=qt.g,r=qt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=it.workingColorSpace){return it.fromWorkingColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=Rt){it.fromWorkingColorSpace(qt.copy(this),e);const t=qt.r,n=qt.g,i=qt.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+t,Ei.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ei),e.getHSL(Gr);const n=br(Ei.h,Gr.h,t),i=br(Ei.s,Gr.s,t),r=br(Ei.l,Gr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new Le;Le.NAMES=mh;let yf=0;class Qn extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=Vn(),this.name="",this.type="Material",this.blending=Ls,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Va,this.blendDst=Ga,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(n.blending=this.blending),this.side!==_i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Va&&(n.blendSrc=this.blendSrc),this.blendDst!==Ga&&(n.blendDst=this.blendDst),this.blendEquation!==Ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Os&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Zn extends Qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=qd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pi=bf();function bf(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,d=0;for(;(c&8388608)===0;)c<<=1,d-=8388608;c&=-8388609,d+=947912704,r[l]=c|d}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function Sf(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=Ye(s,-65504,65504),pi.floatView[0]=s;const e=pi.uint32View[0],t=e>>23&511;return pi.baseTable[t]+((e&8388607)>>pi.shiftTable[t])}function Mf(s){const e=s>>10;return pi.uint32View[0]=pi.mantissaTable[pi.offsetTable[e]+(s&1023)]+pi.exponentTable[e],pi.floatView[0]}class Wr{static toHalfFloat(e){return Sf(e)}static fromHalfFloat(e){return Mf(e)}}const Lt=new L,jr=new Ie;let wf=0;class on{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=El,this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)jr.fromBufferAttribute(this,t),jr.applyMatrix3(e),this.setXY(t,jr.x,jr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==El&&(e.usage=this.usage),e}}class gh extends on{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class _h extends on{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ct extends on{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ef=0;const Mn=new Xe,da=new wt,xs=new L,gn=new Wn,rr=new Wn,Vt=new L;class un extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=Vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uh(e)?_h:gh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new $e().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,t,n){return Mn.makeTranslation(e,t,n),this.applyMatrix4(Mn),this}scale(e,t,n){return Mn.makeScale(e,t,n),this.applyMatrix4(Mn),this}lookAt(e){return da.lookAt(e),da.updateMatrix(),this.applyMatrix4(da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ct(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ti);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];rr.setFromBufferAttribute(a),this.morphTargetsRelative?(Vt.addVectors(gn.min,rr.min),gn.expandByPoint(Vt),Vt.addVectors(gn.max,rr.max),gn.expandByPoint(Vt)):(gn.expandByPoint(rr.min),gn.expandByPoint(rr.max))}gn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Vt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Vt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Vt.fromBufferAttribute(a,c),l&&(xs.fromBufferAttribute(e,c),Vt.add(xs)),i=Math.max(i,n.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let T=0;T<n.count;T++)a[T]=new L,l[T]=new L;const c=new L,d=new L,h=new L,u=new Ie,m=new Ie,_=new Ie,g=new L,f=new L;function p(T,v,x){c.fromBufferAttribute(n,T),d.fromBufferAttribute(n,v),h.fromBufferAttribute(n,x),u.fromBufferAttribute(r,T),m.fromBufferAttribute(r,v),_.fromBufferAttribute(r,x),d.sub(c),h.sub(c),m.sub(u),_.sub(u);const R=1/(m.x*_.y-_.x*m.y);isFinite(R)&&(g.copy(d).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(R),f.copy(h).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(R),a[T].add(g),a[v].add(g),a[x].add(g),l[T].add(f),l[v].add(f),l[x].add(f))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let T=0,v=M.length;T<v;++T){const x=M[T],R=x.start,N=x.count;for(let F=R,O=R+N;F<O;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const A=new L,b=new L,I=new L,S=new L;function y(T){I.fromBufferAttribute(i,T),S.copy(I);const v=a[T];A.copy(v),A.sub(I.multiplyScalar(I.dot(v))).normalize(),b.crossVectors(S,v);const R=b.dot(l[T])<0?-1:1;o.setXYZW(T,A.x,A.y,A.z,R)}for(let T=0,v=M.length;T<v;++T){const x=M[T],R=x.start,N=x.count;for(let F=R,O=R+N;F<O;F+=3)y(e.getX(F+0)),y(e.getX(F+1)),y(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new on(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const i=new L,r=new L,o=new L,a=new L,l=new L,c=new L,d=new L,h=new L;if(e)for(let u=0,m=e.count;u<m;u+=3){const _=e.getX(u+0),g=e.getX(u+1),f=e.getX(u+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,f),d.subVectors(o,r),h.subVectors(i,r),d.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,f),a.add(d),l.add(d),c.add(d),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),d.subVectors(o,r),h.subVectors(i,r),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,h=a.normalized,u=new c.constructor(l.length*d);let m=0,_=0;for(let g=0,f=l.length;g<f;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*d;for(let p=0;p<d;p++)u[_++]=c[m++]}return new on(u,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new un,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let d=0,h=c.length;d<h;d++){const u=c[d],m=e(u,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const m=c[h];d.push(m.toJSON(e.data))}d.length>0&&(i[l]=d,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const d=i[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],h=r[c];for(let u=0,m=h.length;u<m;u++)d.push(h[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nc=new Xe,Wi=new Ir,Xr=new ti,Fc=new L,$r=new L,qr=new L,Yr=new L,ha=new L,Kr=new L,Uc=new L,Zr=new L;class ke extends wt{constructor(e=new un,t=new Zn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Kr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=a[l],h=r[l];d!==0&&(ha.fromBufferAttribute(h,e),o?Kr.addScaledVector(ha,d):Kr.addScaledVector(ha.sub(t),d))}t.add(Kr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(r),Wi.copy(e.ray).recast(e.near),!(Xr.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(Xr,Fc)===null||Wi.origin.distanceToSquared(Fc)>(e.far-e.near)**2))&&(Nc.copy(r).invert(),Wi.copy(e.ray).applyMatrix4(Nc),!(n.boundingBox!==null&&Wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Wi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,u=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=u.length;_<g;_++){const f=u[_],p=o[f.materialIndex],M=Math.max(f.start,m.start),A=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let b=M,I=A;b<I;b+=3){const S=a.getX(b),y=a.getX(b+1),T=a.getX(b+2);i=Jr(this,p,e,n,c,d,h,S,y,T),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const _=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let f=_,p=g;f<p;f+=3){const M=a.getX(f),A=a.getX(f+1),b=a.getX(f+2);i=Jr(this,o,e,n,c,d,h,M,A,b),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=u.length;_<g;_++){const f=u[_],p=o[f.materialIndex],M=Math.max(f.start,m.start),A=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let b=M,I=A;b<I;b+=3){const S=b,y=b+1,T=b+2;i=Jr(this,p,e,n,c,d,h,S,y,T),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let f=_,p=g;f<p;f+=3){const M=f,A=f+1,b=f+2;i=Jr(this,o,e,n,c,d,h,M,A,b),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}}}function Tf(s,e,t,n,i,r,o,a){let l;if(e.side===Kt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===_i,a),l===null)return null;Zr.copy(a),Zr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Zr);return c<t.near||c>t.far?null:{distance:c,point:Zr.clone(),object:s}}function Jr(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,$r),s.getVertexPosition(l,qr),s.getVertexPosition(c,Yr);const d=Tf(s,e,t,n,$r,qr,Yr,Uc);if(d){const h=new L;Hn.getBarycoord(Uc,$r,qr,Yr,h),i&&(d.uv=Hn.getInterpolatedAttribute(i,a,l,c,h,new Ie)),r&&(d.uv1=Hn.getInterpolatedAttribute(r,a,l,c,h,new Ie)),o&&(d.normal=Hn.getInterpolatedAttribute(o,a,l,c,h,new L),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new L,materialIndex:0};Hn.getNormal($r,qr,Yr,u.normal),d.face=u,d.barycoord=h}return d}class Bi extends un{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],d=[],h=[];let u=0,m=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(d,3)),this.setAttribute("uv",new Ct(h,2));function _(g,f,p,M,A,b,I,S,y,T,v){const x=b/y,R=I/T,N=b/2,F=I/2,O=S/2,X=y+1,H=T+1;let Q=0,q=0;const ce=new L;for(let ue=0;ue<H;ue++){const be=ue*R-F;for(let Ue=0;Ue<X;Ue++){const je=Ue*x-N;ce[g]=je*M,ce[f]=be*A,ce[p]=O,c.push(ce.x,ce.y,ce.z),ce[g]=0,ce[f]=0,ce[p]=S>0?1:-1,d.push(ce.x,ce.y,ce.z),h.push(Ue/y),h.push(1-ue/T),Q+=1}}for(let ue=0;ue<T;ue++)for(let be=0;be<y;be++){const Ue=u+be+X*ue,je=u+be+X*(ue+1),K=u+(be+1)+X*(ue+1),ae=u+(be+1)+X*ue;l.push(Ue,je,ae),l.push(je,K,ae),q+=6}a.addGroup(m,q,v),m+=q,u+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ws(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function tn(s){const e={};for(let t=0;t<s.length;t++){const n=Ws(s[t]);for(const i in n)e[i]=n[i]}return e}function Af(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function xh(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const vh={clone:Ws,merge:tn};var Rf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jn extends Qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rf,this.fragmentShader=Cf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=Af(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class yh extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=mi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new L,kc=new Ie,Oc=new Ie;class Yt extends yh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gs*2*Math.atan(Math.tan(yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z)}getViewSize(e,t){return this.getViewBounds(e,kc,Oc),t.subVectors(Oc,kc)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(yr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vs=-90,ys=1;class If extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Yt(vs,ys,e,t);i.layers=this.layers,this.add(i);const r=new Yt(vs,ys,e,t);r.layers=this.layers,this.add(r);const o=new Yt(vs,ys,e,t);o.layers=this.layers,this.add(o);const a=new Yt(vs,ys,e,t);a.layers=this.layers,this.add(a);const l=new Yt(vs,ys,e,t);l.layers=this.layers,this.add(l);const c=new Yt(vs,ys,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===mi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ao)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(h,u,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class bh extends Bt{constructor(e,t,n,i,r,o,a,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:Bs,super(e,t,n,i,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Pf extends ki{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new bh(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Bi(5,5,5),r=new jn({name:"CubemapFromEquirect",uniforms:Ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:Ni});r.uniforms.tEquirect.value=t;const o=new ke(i,r),a=t.minFilter;return t.minFilter===Yn&&(t.minFilter=Gt),new If(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}class Xt extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Df={type:"move"};class ua{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const f=t.getJointPose(g,n),p=this._getHandJoint(c,g);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&u>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Df)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Xt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Co{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Le(e),this.density=t}clone(){return new Co(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Sh extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Lf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=El,this.updateRanges=[],this.version=0,this.uuid=Vn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const en=new L;class ql{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=zn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array),r=mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new on(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ql(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Bc=new L,zc=new lt,Hc=new lt,Nf=new L,Vc=new Xe,Qr=new L,fa=new ti,Gc=new Xe,pa=new Ir;class Ff extends ke{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=xc,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Wn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Qr),this.boundingBox.expandByPoint(Qr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ti),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Qr),this.boundingSphere.expandByPoint(Qr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fa.copy(this.boundingSphere),fa.applyMatrix4(i),e.ray.intersectsSphere(fa)!==!1&&(Gc.copy(i).invert(),pa.copy(e.ray).applyMatrix4(Gc),!(this.boundingBox!==null&&pa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,pa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new lt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===xc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Tu?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;zc.fromBufferAttribute(i.attributes.skinIndex,e),Hc.fromBufferAttribute(i.attributes.skinWeight,e),Bc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Hc.getComponent(r);if(o!==0){const a=zc.getComponent(r);Vc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Nf.copy(Bc).applyMatrix4(Vc),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Mh extends wt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Yl extends Bt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=rn,d=rn,h,u){super(null,o,a,l,c,d,i,r,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wc=new Xe,Uf=new Xe;class Kl{constructor(e=[],t=[]){this.uuid=Vn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Uf;Wc.multiplyMatrices(a,t[r]),Wc.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Kl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Yl(t,e,e,Cn,hn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Mh),this.bones.push(o),this.boneInverses.push(new Xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Tl extends on{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const bs=new Xe,jc=new Xe,eo=[],Xc=new Wn,kf=new Xe,or=new ke,ar=new ti;class Of extends ke{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Tl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,kf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Wn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,bs),Xc.copy(e.boundingBox).applyMatrix4(bs),this.boundingBox.union(Xc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ti),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,bs),ar.copy(e.boundingSphere).applyMatrix4(bs),this.boundingSphere.union(ar)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(or.geometry=this.geometry,or.material=this.material,or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ar.copy(this.boundingSphere),ar.applyMatrix4(n),e.ray.intersectsSphere(ar)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,bs),jc.multiplyMatrices(n,bs),or.matrixWorld=jc,or.raycast(e,eo);for(let o=0,a=eo.length;o<a;o++){const l=eo[o];l.instanceId=r,l.object=this,t.push(l)}eo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Tl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Yl(new Float32Array(i*this.count),i,this.count,Hl,hn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ma=new L,Bf=new L,zf=new $e;class ui{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ma.subVectors(n,t).cross(Bf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ma),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||zf.getNormalMatrix(e),i=this.coplanarPoint(ma).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ji=new ti,to=new L;class Zl{constructor(e=new ui,t=new ui,n=new ui,i=new ui,r=new ui,o=new ui){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mi){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],d=i[5],h=i[6],u=i[7],m=i[8],_=i[9],g=i[10],f=i[11],p=i[12],M=i[13],A=i[14],b=i[15];if(n[0].setComponents(l-r,u-c,f-m,b-p).normalize(),n[1].setComponents(l+r,u+c,f+m,b+p).normalize(),n[2].setComponents(l+o,u+d,f+_,b+M).normalize(),n[3].setComponents(l-o,u-d,f-_,b-M).normalize(),n[4].setComponents(l-a,u-h,f-g,b-A).normalize(),t===mi)n[5].setComponents(l+a,u+h,f+g,b+A).normalize();else if(t===Ao)n[5].setComponents(a,h,g,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){return ji.center.set(0,0,0),ji.radius=.7071067811865476,ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(to.x=i.normal.x>0?e.max.x:e.min.x,to.y=i.normal.y>0?e.max.y:e.min.y,to.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(to)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wh extends Qn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Io=new L,Po=new L,$c=new Xe,lr=new Ir,no=new ti,ga=new L,qc=new L;class Jl extends wt{constructor(e=new un,t=new wh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Io.fromBufferAttribute(t,i-1),Po.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Io.distanceTo(Po);e.setAttribute("lineDistance",new Ct(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(i),no.radius+=r,e.ray.intersectsSphere(no)===!1)return;$c.copy(i).invert(),lr.copy(e.ray).applyMatrix4($c);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){const m=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let g=m,f=_-1;g<f;g+=c){const p=d.getX(g),M=d.getX(g+1),A=io(this,e,lr,l,p,M,g);A&&t.push(A)}if(this.isLineLoop){const g=d.getX(_-1),f=d.getX(m),p=io(this,e,lr,l,g,f,_-1);p&&t.push(p)}}else{const m=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let g=m,f=_-1;g<f;g+=c){const p=io(this,e,lr,l,g,g+1,g);p&&t.push(p)}if(this.isLineLoop){const g=io(this,e,lr,l,_-1,m,_-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function io(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(Io.fromBufferAttribute(a,i),Po.fromBufferAttribute(a,r),t.distanceSqToSegment(Io,Po,ga,qc)>n)return;ga.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(ga);if(!(c<e.near||c>e.far))return{distance:c,point:qc.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Yc=new L,Kc=new L;class Hf extends Jl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Yc.fromBufferAttribute(t,i),Kc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Yc.distanceTo(Kc);e.setAttribute("lineDistance",new Ct(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Vf extends Jl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Eh extends Qn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Zc=new Xe,Al=new Ir,so=new ti,ro=new L;class Gf extends wt{constructor(e=new un,t=new Eh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(i),so.radius+=r,e.ray.intersectsSphere(so)===!1)return;Zc.copy(i).invert(),Al.copy(e.ray).applyMatrix4(Zc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const u=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let _=u,g=m;_<g;_++){const f=c.getX(_);ro.fromBufferAttribute(h,f),Jc(ro,f,l,i,e,t,this)}}else{const u=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=u,g=m;_<g;_++)ro.fromBufferAttribute(h,_),Jc(ro,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Jc(s,e,t,n,i,r,o){const a=Al.distanceSqToPoint(s);if(a<t){const l=new L;Al.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Th extends Bt{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ah extends Bt{constructor(e,t,n,i,r,o,a,l,c,d=Ns){if(d!==Ns&&d!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Ns&&(n=ns),n===void 0&&d===Vs&&(n=Hs),super(null,i,r,o,a,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:rn,this.minFilter=l!==void 0?l:rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $l(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class zo extends un{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new L,d=new Ie;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,u=3;h<=t;h++,u+=3){const m=n+h/t*i;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(o[u]/e+1)/2,d.y=(o[u+1]/e+1)/2,l.push(d.x,d.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Ct(o,3)),this.setAttribute("normal",new Ct(a,3)),this.setAttribute("uv",new Ct(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class nn extends un{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const d=[],h=[],u=[],m=[];let _=0;const g=[],f=n/2;let p=0;M(),o===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(d),this.setAttribute("position",new Ct(h,3)),this.setAttribute("normal",new Ct(u,3)),this.setAttribute("uv",new Ct(m,2));function M(){const b=new L,I=new L;let S=0;const y=(t-e)/n;for(let T=0;T<=r;T++){const v=[],x=T/r,R=x*(t-e)+e;for(let N=0;N<=i;N++){const F=N/i,O=F*l+a,X=Math.sin(O),H=Math.cos(O);I.x=R*X,I.y=-x*n+f,I.z=R*H,h.push(I.x,I.y,I.z),b.set(X,y,H).normalize(),u.push(b.x,b.y,b.z),m.push(F,1-x),v.push(_++)}g.push(v)}for(let T=0;T<i;T++)for(let v=0;v<r;v++){const x=g[v][T],R=g[v+1][T],N=g[v+1][T+1],F=g[v][T+1];(e>0||v!==0)&&(d.push(x,R,F),S+=3),(t>0||v!==r-1)&&(d.push(R,N,F),S+=3)}c.addGroup(p,S,0),p+=S}function A(b){const I=_,S=new Ie,y=new L;let T=0;const v=b===!0?e:t,x=b===!0?1:-1;for(let N=1;N<=i;N++)h.push(0,f*x,0),u.push(0,x,0),m.push(.5,.5),_++;const R=_;for(let N=0;N<=i;N++){const O=N/i*l+a,X=Math.cos(O),H=Math.sin(O);y.x=v*H,y.y=f*x,y.z=v*X,h.push(y.x,y.y,y.z),u.push(0,x,0),S.x=X*.5+.5,S.y=H*.5*x+.5,m.push(S.x,S.y),_++}for(let N=0;N<i;N++){const F=I+N,O=R+N;b===!0?d.push(O,O+1,F):d.push(O+1,O,F),T+=3}c.addGroup(p,T,b===!0?1:2),p+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class is extends un{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,d=l+1,h=e/a,u=t/l,m=[],_=[],g=[],f=[];for(let p=0;p<d;p++){const M=p*u-o;for(let A=0;A<c;A++){const b=A*h-r;_.push(b,-M,0),g.push(0,0,1),f.push(A/a),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const A=M+c*p,b=M+c*(p+1),I=M+1+c*(p+1),S=M+1+c*p;m.push(A,b,S),m.push(b,I,S)}this.setIndex(m),this.setAttribute("position",new Ct(_,3)),this.setAttribute("normal",new Ct(g,3)),this.setAttribute("uv",new Ct(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.width,e.height,e.widthSegments,e.heightSegments)}}class es extends un{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const d=[],h=new L,u=new L,m=[],_=[],g=[],f=[];for(let p=0;p<=n;p++){const M=[],A=p/n;let b=0;p===0&&o===0?b=.5/t:p===n&&l===Math.PI&&(b=-.5/t);for(let I=0;I<=t;I++){const S=I/t;h.x=-e*Math.cos(i+S*r)*Math.sin(o+A*a),h.y=e*Math.cos(o+A*a),h.z=e*Math.sin(i+S*r)*Math.sin(o+A*a),_.push(h.x,h.y,h.z),u.copy(h).normalize(),g.push(u.x,u.y,u.z),f.push(S+b,1-A),M.push(c++)}d.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){const A=d[p][M+1],b=d[p][M],I=d[p+1][M],S=d[p+1][M+1];(p!==0||o>0)&&m.push(A,b,S),(p!==n-1||l<Math.PI)&&m.push(b,I,S)}this.setIndex(m),this.setAttribute("position",new Ct(_,3)),this.setAttribute("normal",new Ct(g,3)),this.setAttribute("uv",new Ct(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new es(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Do extends un{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],d=new L,h=new L,u=new L;for(let m=0;m<=n;m++)for(let _=0;_<=i;_++){const g=_/i*r,f=m/n*Math.PI*2;h.x=(e+t*Math.cos(f))*Math.cos(g),h.y=(e+t*Math.cos(f))*Math.sin(g),h.z=t*Math.sin(f),a.push(h.x,h.y,h.z),d.x=e*Math.cos(g),d.y=e*Math.sin(g),u.subVectors(h,d).normalize(),l.push(u.x,u.y,u.z),c.push(_/i),c.push(m/n)}for(let m=1;m<=n;m++)for(let _=1;_<=i;_++){const g=(i+1)*m+_-1,f=(i+1)*(m-1)+_-1,p=(i+1)*(m-1)+_,M=(i+1)*m+_;o.push(g,f,M),o.push(f,p,M)}this.setIndex(o),this.setAttribute("position",new Ct(a,3)),this.setAttribute("normal",new Ct(l,3)),this.setAttribute("uv",new Ct(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Do(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Fe extends Qn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dh,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sn extends Fe{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Wf extends Qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Iu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jf extends Qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function oo(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Xf(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function $f(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Qc(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function Rh(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Pr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class qf extends Pr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rs,endingEnd:Rs}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Cs:r=e,a=2*t-n;break;case Eo:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Cs:o=e,l=2*n-t;break;case Eo:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,m=this._weightNext,_=(n-t)/(i-t),g=_*_,f=g*_,p=-u*f+2*u*g-u*_,M=(1+u)*f+(-1.5-2*u)*g+(-.5+u)*_+1,A=(-1-m)*f+(1.5+m)*g+.5*_,b=m*f-m*g;for(let I=0;I!==a;++I)r[I]=p*o[d+I]+M*o[c+I]+A*o[l+I]+b*o[h+I];return r}}class Ch extends Pr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=(n-t)/(i-t),h=1-d;for(let u=0;u!==a;++u)r[u]=o[c+u]*h+o[l+u]*d;return r}}class Yf extends Pr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class ni{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=oo(t,this.TimeBufferType),this.values=oo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:oo(e.times,Array),values:oo(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Yf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ch(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Er:t=this.InterpolantFactoryMethodDiscrete;break;case Tr:t=this.InterpolantFactoryMethodLinear;break;case Xo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Er;case this.InterpolantFactoryMethodLinear:return Tr;case this.InterpolantFactoryMethodSmooth:return Xo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Xf(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Xo,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],d=e[a+1];if(c!==d&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,u=h-n,m=h+n;for(let _=0;_!==n;++_){const g=t[h+_];if(g!==t[u+_]||g!==t[m+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,u=o*n;for(let m=0;m!==n;++m)t[u+m]=t[h+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}ni.prototype.TimeBufferType=Float32Array;ni.prototype.ValueBufferType=Float32Array;ni.prototype.DefaultInterpolation=Tr;class Js extends ni{constructor(e,t,n){super(e,t,n)}}Js.prototype.ValueTypeName="bool";Js.prototype.ValueBufferType=Array;Js.prototype.DefaultInterpolation=Er;Js.prototype.InterpolantFactoryMethodLinear=void 0;Js.prototype.InterpolantFactoryMethodSmooth=void 0;class Ih extends ni{}Ih.prototype.ValueTypeName="color";class js extends ni{}js.prototype.ValueTypeName="number";class Kf extends Pr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let d=c+a;c!==d;c+=4)vn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Xs extends ni{InterpolantFactoryMethodLinear(e){return new Kf(this.times,this.values,this.getValueSize(),e)}}Xs.prototype.ValueTypeName="quaternion";Xs.prototype.InterpolantFactoryMethodSmooth=void 0;class Qs extends ni{constructor(e,t,n){super(e,t,n)}}Qs.prototype.ValueTypeName="string";Qs.prototype.ValueBufferType=Array;Qs.prototype.DefaultInterpolation=Er;Qs.prototype.InterpolantFactoryMethodLinear=void 0;Qs.prototype.InterpolantFactoryMethodSmooth=void 0;class $s extends ni{}$s.prototype.ValueTypeName="vector";class Rl{constructor(e="",t=-1,n=[],i=jl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Vn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Jf(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(ni.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const d=$f(l);l=Qc(l,1,d),c=Qc(c,1,d),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new js(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],d=c.name.match(r);if(d&&d.length>1){const h=d[1];let u=i[h];u||(i[h]=u=[]),u.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,u,m,_,g){if(m.length!==0){const f=[],p=[];Rh(m,f,p,_),f.length!==0&&g.push(new h(u,f,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const u=c[h].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const m={};let _;for(_=0;_<u.length;_++)if(u[_].morphTargets)for(let g=0;g<u[_].morphTargets.length;g++)m[u[_].morphTargets[g]]=-1;for(const g in m){const f=[],p=[];for(let M=0;M!==u[_].morphTargets.length;++M){const A=u[_];f.push(A.time),p.push(A.morphTarget===g?1:0)}i.push(new js(".morphTargetInfluence["+g+"]",f,p))}l=m.length*o}else{const m=".bones["+t[h].name+"]";n($s,m+".position",u,"pos",i),n(Xs,m+".quaternion",u,"rot",i),n($s,m+".scale",u,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Zf(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return js;case"vector":case"vector2":case"vector3":case"vector4":return $s;case"color":return Ih;case"quaternion":return Xs;case"bool":case"boolean":return Js;case"string":return Qs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Jf(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Zf(s.type);if(s.times===void 0){const t=[],n=[];Rh(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Li={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Qf{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){a++,r===!1&&i.onStart!==void 0&&i.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,i.onProgress!==void 0&&i.onProgress(d,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){const h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=c.length;h<u;h+=2){const m=c[h],_=c[h+1];if(m.global&&(m.lastIndex=0),m.test(d))return _}return null}}}const ep=new Qf;class ss{constructor(e){this.manager=e!==void 0?e:ep,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ss.DEFAULT_MATERIAL_NAME="__DEFAULT";const ci={};class tp extends Error{constructor(e,t){super(e),this.response=t}}class Ql extends ss{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Li.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ci[e]!==void 0){ci[e].push({onLoad:t,onProgress:n,onError:i});return}ci[e]=[],ci[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const d=ci[e],h=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=u?parseInt(u):0,_=m!==0;let g=0;const f=new ReadableStream({start(p){M();function M(){h.read().then(({done:A,value:b})=>{if(A)p.close();else{g+=b.byteLength;const I=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:m});for(let S=0,y=d.length;S<y;S++){const T=d[S];T.onProgress&&T.onProgress(I)}p.enqueue(b),M()}},A=>{p.error(A)})}}});return new Response(f)}else throw new tp(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),u=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(u);return c.arrayBuffer().then(_=>m.decode(_))}}}).then(c=>{Li.add(e,c);const d=ci[e];delete ci[e];for(let h=0,u=d.length;h<u;h++){const m=d[h];m.onLoad&&m.onLoad(c)}}).catch(c=>{const d=ci[e];if(d===void 0)throw this.manager.itemError(e),c;delete ci[e];for(let h=0,u=d.length;h<u;h++){const m=d[h];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class np extends ss{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Li.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Ar("img");function l(){d(),Li.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){d(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class ip extends ss{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new Yl,a=new Ql(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(d){if(i!==void 0)i(d);else{console.error(d);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:qn,o.wrapT=c.wrapT!==void 0?c.wrapT:qn,o.magFilter=c.magFilter!==void 0?c.magFilter:Gt,o.minFilter=c.minFilter!==void 0?c.minFilter:Gt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Yn),c.mipmapCount===1&&(o.minFilter=Gt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,i),o}}class Ph extends ss{constructor(e){super(e)}load(e,t,n,i){const r=new Bt,o=new np(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Ho extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class sp extends Ho{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const _a=new Xe,ed=new L,td=new L;class ec{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zl,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ed.setFromMatrixPosition(e.matrixWorld),t.position.copy(ed),td.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(td),t.updateMatrixWorld(),_a.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_a),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_a)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class rp extends ec{constructor(){super(new Yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Gs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Dh extends Ho{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new rp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const nd=new Xe,cr=new L,xa=new L;class op extends ec{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ie(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),cr.setFromMatrixPosition(e.matrixWorld),n.position.copy(cr),xa.copy(n.position),xa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(xa),n.updateMatrixWorld(),i.makeTranslation(-cr.x,-cr.y,-cr.z),nd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nd)}}class _n extends Ho{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new op}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class tc extends yh{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ap extends ec{constructor(){super(new tc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Lh extends Ho{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new ap}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Sr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class lp extends ss{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Li.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Li.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Li.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Li.add(e,l),r.manager.itemStart(e)}}class cp extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class dp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=id(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=id();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function id(){return performance.now()}class hp{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){vn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;vn.multiplyQuaternionsFlat(e,o,e,t,e,n),vn.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const nc="\\[\\]\\.:\\/",up=new RegExp("["+nc+"]","g"),ic="[^"+nc+"]",fp="[^"+nc.replace("\\.","")+"]",pp=/((?:WC+[\/:])*)/.source.replace("WC",ic),mp=/(WCOD+)?/.source.replace("WCOD",fp),gp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ic),_p=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ic),xp=new RegExp("^"+pp+mp+gp+_p+"$"),vp=["material","materials","bones","map"];class yp{constructor(e,t,n){const i=n||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ft{constructor(e,t,n){this.path=t,this.parsedPath=n||ft.parseTrackName(t),this.node=ft.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ft.Composite(e,t,n):new ft(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(up,"")}static parseTrackName(e){const t=xp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);vp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=ft.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ft.Composite=yp;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class bp{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,a=new Array(o),l={endingStart:Rs,endingEnd:Rs};for(let c=0;c!==o;++c){const d=r[c].createInterpolant(null);a[c]=d,d.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=lh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Ru:for(let d=0,h=l.length;d!==h;++d)l[d].evaluate(o),c[d].accumulateAdditive(a);break;case jl:default:for(let d=0,h=l.length;d!==h;++d)l[d].evaluate(o),c[d].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===Au;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===ah){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Cs,i.endingEnd=Cs):(e?i.endingStart=this.zeroSlopeAtStart?Cs:Rs:i.endingStart=Eo,t?i.endingEnd=this.zeroSlopeAtEnd?Cs:Rs:i.endingEnd=Eo)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}}const Sp=new Float32Array(1);class Mp extends Oi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let d=c[l];d===void 0&&(d={},c[l]=d);for(let h=0;h!==r;++h){const u=i[h],m=u.name;let _=d[m];if(_!==void 0)++_.referenceCount,o[h]=_;else{if(_=o[h],_!==void 0){_._cacheIndex===null&&(++_.referenceCount,this._addInactiveBinding(_,l,m));continue}const g=t&&t._propertyBindings[h].binding.parsedPath;_=new hp(ft.create(n,m,g),u.ValueTypeName,u.getValueSize()),++_.referenceCount,this._addInactiveBinding(_,l,m),o[h]=_}a[h].resultBuffer=_.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],d=e._byClipCacheIndex;c._byClipCacheIndex=d,l[d]=c,l.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,u=(e._localRoot||this._root).uuid;delete h[u],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Ch(new Float32Array(2),new Float32Array(2),1,Sp),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?Rl.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=jl),l!==void 0){const h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const d=new bp(this,o,t,n);return this._bindAction(d,c),this._addInactiveAction(d,a,r),d}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?Rl.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const d=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=d,t[d]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class sd{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ye(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ye(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class wp extends Oi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function rd(s,e,t,n){const i=Ep(n);switch(t){case th:return s*e;case ih:return s*e;case sh:return s*e*2;case Hl:return s*e/i.components*i.byteLength;case Vl:return s*e/i.components*i.byteLength;case rh:return s*e*2/i.components*i.byteLength;case Gl:return s*e*2/i.components*i.byteLength;case nh:return s*e*3/i.components*i.byteLength;case Cn:return s*e*4/i.components*i.byteLength;case Wl:return s*e*4/i.components*i.byteLength;case xo:case vo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case yo:case bo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Qa:case tl:return Math.max(s,16)*Math.max(e,8)/4;case Ja:case el:return Math.max(s,8)*Math.max(e,8)/2;case nl:case il:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case sl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case rl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ol:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case al:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ll:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case cl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case dl:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case hl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ul:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case fl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case pl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case ml:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case gl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case _l:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case xl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case So:case vl:case yl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case oh:case bl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Sl:case Ml:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ep(s){switch(s){case xi:case Jd:return{byteLength:1,components:1};case wr:case Qd:case Kn:return{byteLength:2,components:1};case Bl:case zl:return{byteLength:2,components:4};case ns:case Ol:case hn:return{byteLength:4,components:1};case eh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Nh(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Tp(s){const e=new WeakMap;function t(a,l){const c=a.array,d=a.usage,h=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,d),a.onUploadCallback();let m;if(c instanceof Float32Array)m=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=s.HALF_FLOAT:m=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=s.SHORT;else if(c instanceof Uint32Array)m=s.UNSIGNED_INT;else if(c instanceof Int32Array)m=s.INT;else if(c instanceof Int8Array)m=s.BYTE;else if(c instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const d=l.array,h=l.updateRanges;if(s.bindBuffer(c,a),h.length===0)s.bufferSubData(c,0,d);else{h.sort((m,_)=>m.start-_.start);let u=0;for(let m=1;m<h.length;m++){const _=h[u],g=h[m];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++u,h[u]=g)}h.length=u+1;for(let m=0,_=h.length;m<_;m++){const g=h[m];s.bufferSubData(c,g.start*d.BYTES_PER_ELEMENT,d,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Ap=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rp=`#ifdef USE_ALPHAHASH
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
#endif`,Cp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ip=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lp=`#ifdef USE_AOMAP
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
#endif`,Np=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fp=`#ifdef USE_BATCHING
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
#endif`,Up=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Op=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zp=`#ifdef USE_IRIDESCENCE
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
#endif`,Hp=`#ifdef USE_BUMPMAP
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
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Kp=`#define PI 3.141592653589793
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
} // validated`,Zp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Jp=`vec3 transformedNormal = objectNormal;
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
#endif`,Qp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,em=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,im="gl_FragColor = linearToOutputTexel( gl_FragColor );",sm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rm=`#ifdef USE_ENVMAP
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
#endif`,om=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,am=`#ifdef USE_ENVMAP
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
#endif`,lm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cm=`#ifdef USE_ENVMAP
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
#endif`,dm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,um=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pm=`#ifdef USE_GRADIENTMAP
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
}`,mm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xm=`uniform bool receiveShadow;
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
#endif`,vm=`#ifdef USE_ENVMAP
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
#endif`,ym=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wm=`PhysicalMaterial material;
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
#endif`,Em=`struct PhysicalMaterial {
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
}`,Tm=`
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
#endif`,Am=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Im=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Um=`#if defined( USE_POINTS_UV )
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
#endif`,km=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Om=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vm=`#ifdef USE_MORPHTARGETS
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
#endif`,Gm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ym=`#ifdef USE_NORMALMAP
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
#endif`,Km=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ng=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ig=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,og=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ag=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hg=`float getShadowMask() {
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
}`,ug=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fg=`#ifdef USE_SKINNING
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
#endif`,pg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mg=`#ifdef USE_SKINNING
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
#endif`,gg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_g=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yg=`#ifdef USE_TRANSMISSION
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
#endif`,bg=`#ifdef USE_TRANSMISSION
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
#endif`,Sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Eg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Tg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ag=`uniform sampler2D t2D;
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
}`,Rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dg=`#include <common>
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
}`,Lg=`#if DEPTH_PACKING == 3200
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
}`,Ng=`#define DISTANCE
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
}`,Fg=`#define DISTANCE
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
}`,Ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Og=`uniform float scale;
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
}`,Bg=`uniform vec3 diffuse;
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
}`,zg=`#include <common>
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
}`,Hg=`uniform vec3 diffuse;
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
}`,Vg=`#define LAMBERT
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
}`,Gg=`#define LAMBERT
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
}`,Wg=`#define MATCAP
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
}`,jg=`#define MATCAP
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
}`,Xg=`#define NORMAL
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
}`,$g=`#define NORMAL
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
}`,qg=`#define PHONG
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
}`,Yg=`#define PHONG
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
}`,Kg=`#define STANDARD
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
}`,Zg=`#define STANDARD
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
}`,Jg=`#define TOON
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
}`,Qg=`#define TOON
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
}`,e0=`uniform float size;
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
}`,t0=`uniform vec3 diffuse;
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
}`,n0=`#include <common>
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
}`,i0=`uniform vec3 color;
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
}`,s0=`uniform float rotation;
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
}`,r0=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:Ap,alphahash_pars_fragment:Rp,alphamap_fragment:Cp,alphamap_pars_fragment:Ip,alphatest_fragment:Pp,alphatest_pars_fragment:Dp,aomap_fragment:Lp,aomap_pars_fragment:Np,batching_pars_vertex:Fp,batching_vertex:Up,begin_vertex:kp,beginnormal_vertex:Op,bsdfs:Bp,iridescence_fragment:zp,bumpmap_pars_fragment:Hp,clipping_planes_fragment:Vp,clipping_planes_pars_fragment:Gp,clipping_planes_pars_vertex:Wp,clipping_planes_vertex:jp,color_fragment:Xp,color_pars_fragment:$p,color_pars_vertex:qp,color_vertex:Yp,common:Kp,cube_uv_reflection_fragment:Zp,defaultnormal_vertex:Jp,displacementmap_pars_vertex:Qp,displacementmap_vertex:em,emissivemap_fragment:tm,emissivemap_pars_fragment:nm,colorspace_fragment:im,colorspace_pars_fragment:sm,envmap_fragment:rm,envmap_common_pars_fragment:om,envmap_pars_fragment:am,envmap_pars_vertex:lm,envmap_physical_pars_fragment:vm,envmap_vertex:cm,fog_vertex:dm,fog_pars_vertex:hm,fog_fragment:um,fog_pars_fragment:fm,gradientmap_pars_fragment:pm,lightmap_pars_fragment:mm,lights_lambert_fragment:gm,lights_lambert_pars_fragment:_m,lights_pars_begin:xm,lights_toon_fragment:ym,lights_toon_pars_fragment:bm,lights_phong_fragment:Sm,lights_phong_pars_fragment:Mm,lights_physical_fragment:wm,lights_physical_pars_fragment:Em,lights_fragment_begin:Tm,lights_fragment_maps:Am,lights_fragment_end:Rm,logdepthbuf_fragment:Cm,logdepthbuf_pars_fragment:Im,logdepthbuf_pars_vertex:Pm,logdepthbuf_vertex:Dm,map_fragment:Lm,map_pars_fragment:Nm,map_particle_fragment:Fm,map_particle_pars_fragment:Um,metalnessmap_fragment:km,metalnessmap_pars_fragment:Om,morphinstance_vertex:Bm,morphcolor_vertex:zm,morphnormal_vertex:Hm,morphtarget_pars_vertex:Vm,morphtarget_vertex:Gm,normal_fragment_begin:Wm,normal_fragment_maps:jm,normal_pars_fragment:Xm,normal_pars_vertex:$m,normal_vertex:qm,normalmap_pars_fragment:Ym,clearcoat_normal_fragment_begin:Km,clearcoat_normal_fragment_maps:Zm,clearcoat_pars_fragment:Jm,iridescence_pars_fragment:Qm,opaque_fragment:eg,packing:tg,premultiplied_alpha_fragment:ng,project_vertex:ig,dithering_fragment:sg,dithering_pars_fragment:rg,roughnessmap_fragment:og,roughnessmap_pars_fragment:ag,shadowmap_pars_fragment:lg,shadowmap_pars_vertex:cg,shadowmap_vertex:dg,shadowmask_pars_fragment:hg,skinbase_vertex:ug,skinning_pars_vertex:fg,skinning_vertex:pg,skinnormal_vertex:mg,specularmap_fragment:gg,specularmap_pars_fragment:_g,tonemapping_fragment:xg,tonemapping_pars_fragment:vg,transmission_fragment:yg,transmission_pars_fragment:bg,uv_pars_fragment:Sg,uv_pars_vertex:Mg,uv_vertex:wg,worldpos_vertex:Eg,background_vert:Tg,background_frag:Ag,backgroundCube_vert:Rg,backgroundCube_frag:Cg,cube_vert:Ig,cube_frag:Pg,depth_vert:Dg,depth_frag:Lg,distanceRGBA_vert:Ng,distanceRGBA_frag:Fg,equirect_vert:Ug,equirect_frag:kg,linedashed_vert:Og,linedashed_frag:Bg,meshbasic_vert:zg,meshbasic_frag:Hg,meshlambert_vert:Vg,meshlambert_frag:Gg,meshmatcap_vert:Wg,meshmatcap_frag:jg,meshnormal_vert:Xg,meshnormal_frag:$g,meshphong_vert:qg,meshphong_frag:Yg,meshphysical_vert:Kg,meshphysical_frag:Zg,meshtoon_vert:Jg,meshtoon_frag:Qg,points_vert:e0,points_frag:t0,shadow_vert:n0,shadow_frag:i0,sprite_vert:s0,sprite_frag:r0},xe={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},$n={basic:{uniforms:tn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:tn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Le(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:tn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:tn([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:tn([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Le(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:tn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:tn([xe.points,xe.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:tn([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:tn([xe.common,xe.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:tn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:tn([xe.sprite,xe.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:tn([xe.common,xe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:tn([xe.lights,xe.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};$n.physical={uniforms:tn([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const ao={r:0,b:0,g:0},Xi=new ei,o0=new Xe;function a0(s,e,t,n,i,r,o){const a=new Le(0);let l=r===!0?0:1,c,d,h=null,u=0,m=null;function _(A){let b=A.isScene===!0?A.background:null;return b&&b.isTexture&&(b=(A.backgroundBlurriness>0?t:e).get(b)),b}function g(A){let b=!1;const I=_(A);I===null?p(a,l):I&&I.isColor&&(p(I,1),b=!0);const S=s.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function f(A,b){const I=_(b);I&&(I.isCubeTexture||I.mapping===Bo)?(d===void 0&&(d=new ke(new Bi(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:Ws($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(S,y,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),Xi.copy(b.backgroundRotation),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),d.material.uniforms.envMap.value=I,d.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(o0.makeRotationFromEuler(Xi)),d.material.toneMapped=it.getTransfer(I.colorSpace)!==_t,(h!==I||u!==I.version||m!==s.toneMapping)&&(d.material.needsUpdate=!0,h=I,u=I.version,m=s.toneMapping),d.layers.enableAll(),A.unshift(d,d.geometry,d.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new ke(new is(2,2),new jn({name:"BackgroundMaterial",uniforms:Ws($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=it.getTransfer(I.colorSpace)!==_t,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(h!==I||u!==I.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,h=I,u=I.version,m=s.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function p(A,b){A.getRGB(ao,xh(s)),n.buffers.color.setClear(ao.r,ao.g,ao.b,b,o)}function M(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(A,b=1){a.set(A),l=b,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,p(a,l)},render:g,addToRenderList:f,dispose:M}}function l0(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,o=!1;function a(x,R,N,F,O){let X=!1;const H=h(F,N,R);r!==H&&(r=H,c(r.object)),X=m(x,F,N,O),X&&_(x,F,N,O),O!==null&&e.update(O,s.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,b(x,R,N,F),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return s.createVertexArray()}function c(x){return s.bindVertexArray(x)}function d(x){return s.deleteVertexArray(x)}function h(x,R,N){const F=N.wireframe===!0;let O=n[x.id];O===void 0&&(O={},n[x.id]=O);let X=O[R.id];X===void 0&&(X={},O[R.id]=X);let H=X[F];return H===void 0&&(H=u(l()),X[F]=H),H}function u(x){const R=[],N=[],F=[];for(let O=0;O<t;O++)R[O]=0,N[O]=0,F[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:N,attributeDivisors:F,object:x,attributes:{},index:null}}function m(x,R,N,F){const O=r.attributes,X=R.attributes;let H=0;const Q=N.getAttributes();for(const q in Q)if(Q[q].location>=0){const ue=O[q];let be=X[q];if(be===void 0&&(q==="instanceMatrix"&&x.instanceMatrix&&(be=x.instanceMatrix),q==="instanceColor"&&x.instanceColor&&(be=x.instanceColor)),ue===void 0||ue.attribute!==be||be&&ue.data!==be.data)return!0;H++}return r.attributesNum!==H||r.index!==F}function _(x,R,N,F){const O={},X=R.attributes;let H=0;const Q=N.getAttributes();for(const q in Q)if(Q[q].location>=0){let ue=X[q];ue===void 0&&(q==="instanceMatrix"&&x.instanceMatrix&&(ue=x.instanceMatrix),q==="instanceColor"&&x.instanceColor&&(ue=x.instanceColor));const be={};be.attribute=ue,ue&&ue.data&&(be.data=ue.data),O[q]=be,H++}r.attributes=O,r.attributesNum=H,r.index=F}function g(){const x=r.newAttributes;for(let R=0,N=x.length;R<N;R++)x[R]=0}function f(x){p(x,0)}function p(x,R){const N=r.newAttributes,F=r.enabledAttributes,O=r.attributeDivisors;N[x]=1,F[x]===0&&(s.enableVertexAttribArray(x),F[x]=1),O[x]!==R&&(s.vertexAttribDivisor(x,R),O[x]=R)}function M(){const x=r.newAttributes,R=r.enabledAttributes;for(let N=0,F=R.length;N<F;N++)R[N]!==x[N]&&(s.disableVertexAttribArray(N),R[N]=0)}function A(x,R,N,F,O,X,H){H===!0?s.vertexAttribIPointer(x,R,N,O,X):s.vertexAttribPointer(x,R,N,F,O,X)}function b(x,R,N,F){g();const O=F.attributes,X=N.getAttributes(),H=R.defaultAttributeValues;for(const Q in X){const q=X[Q];if(q.location>=0){let ce=O[Q];if(ce===void 0&&(Q==="instanceMatrix"&&x.instanceMatrix&&(ce=x.instanceMatrix),Q==="instanceColor"&&x.instanceColor&&(ce=x.instanceColor)),ce!==void 0){const ue=ce.normalized,be=ce.itemSize,Ue=e.get(ce);if(Ue===void 0)continue;const je=Ue.buffer,K=Ue.type,ae=Ue.bytesPerElement,Re=K===s.INT||K===s.UNSIGNED_INT||ce.gpuType===Ol;if(ce.isInterleavedBufferAttribute){const pe=ce.data,Ne=pe.stride,Ke=ce.offset;if(pe.isInstancedInterleavedBuffer){for(let Pe=0;Pe<q.locationSize;Pe++)p(q.location+Pe,pe.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Pe=0;Pe<q.locationSize;Pe++)f(q.location+Pe);s.bindBuffer(s.ARRAY_BUFFER,je);for(let Pe=0;Pe<q.locationSize;Pe++)A(q.location+Pe,be/q.locationSize,K,ue,Ne*ae,(Ke+be/q.locationSize*Pe)*ae,Re)}else{if(ce.isInstancedBufferAttribute){for(let pe=0;pe<q.locationSize;pe++)p(q.location+pe,ce.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let pe=0;pe<q.locationSize;pe++)f(q.location+pe);s.bindBuffer(s.ARRAY_BUFFER,je);for(let pe=0;pe<q.locationSize;pe++)A(q.location+pe,be/q.locationSize,K,ue,be*ae,be/q.locationSize*pe*ae,Re)}}else if(H!==void 0){const ue=H[Q];if(ue!==void 0)switch(ue.length){case 2:s.vertexAttrib2fv(q.location,ue);break;case 3:s.vertexAttrib3fv(q.location,ue);break;case 4:s.vertexAttrib4fv(q.location,ue);break;default:s.vertexAttrib1fv(q.location,ue)}}}}M()}function I(){T();for(const x in n){const R=n[x];for(const N in R){const F=R[N];for(const O in F)d(F[O].object),delete F[O];delete R[N]}delete n[x]}}function S(x){if(n[x.id]===void 0)return;const R=n[x.id];for(const N in R){const F=R[N];for(const O in F)d(F[O].object),delete F[O];delete R[N]}delete n[x.id]}function y(x){for(const R in n){const N=n[R];if(N[x.id]===void 0)continue;const F=N[x.id];for(const O in F)d(F[O].object),delete F[O];delete N[x.id]}}function T(){v(),o=!0,r!==i&&(r=i,c(r.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:T,resetDefaultState:v,dispose:I,releaseStatesOfGeometry:S,releaseStatesOfProgram:y,initAttributes:g,enableAttribute:f,disableUnusedAttributes:M}}function c0(s,e,t){let n;function i(c){n=c}function r(c,d){s.drawArrays(n,c,d),t.update(d,n,1)}function o(c,d,h){h!==0&&(s.drawArraysInstanced(n,c,d,h),t.update(d,n,h))}function a(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,h);let m=0;for(let _=0;_<h;_++)m+=d[_];t.update(m,n,1)}function l(c,d,h,u){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)o(c[_],d[_],u[_]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,d,0,u,0,h);let _=0;for(let g=0;g<h;g++)_+=d[g]*u[g];t.update(_,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function d0(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(y){return!(y!==Cn&&n.convert(y)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(y){const T=y===Kn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==xi&&n.convert(y)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&y!==hn&&!T)}function l(y){if(y==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),f=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),A=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=_>0,S=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:u,maxTextures:m,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:b,vertexTextures:I,maxSamples:S}}function h0(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new ui,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const m=h.length!==0||u||n!==0||i;return i=u,n=h.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,m){const _=h.clippingPlanes,g=h.clipIntersection,f=h.clipShadows,p=s.get(h);if(!i||_===null||_.length===0||r&&!f)r?d(null):c();else{const M=r?0:n,A=M*4;let b=p.clippingState||null;l.value=b,b=d(_,u,A,m);for(let I=0;I!==A;++I)b[I]=t[I];p.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,u,m,_){const g=h!==null?h.length:0;let f=null;if(g!==0){if(f=l.value,_!==!0||f===null){const p=m+g*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(f===null||f.length<p)&&(f=new Float32Array(p));for(let A=0,b=m;A!==g;++A,b+=4)o.copy(h[A]).applyMatrix4(M,a),o.normal.toArray(f,b),f[b+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,f}}function u0(s){let e=new WeakMap;function t(o,a){return a===Mr?o.mapping=Bs:a===Za&&(o.mapping=zs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Mr||a===Za)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Pf(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Is=4,od=[.125,.215,.35,.446,.526,.582],Qi=20,va=new tc,ad=new Le;let ya=null,ba=0,Sa=0,Ma=!1;const Zi=(1+Math.sqrt(5))/2,Ss=1/Zi,ld=[new L(-Zi,Ss,0),new L(Zi,Ss,0),new L(-Ss,0,Zi),new L(Ss,0,Zi),new L(0,Zi,-Ss),new L(0,Zi,Ss),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],f0=new L;class Lo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=f0}=r;ya=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Sa=this._renderer.getActiveMipmapLevel(),Ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ya,ba,Sa),this._renderer.xr.enabled=Ma,e.scissorTest=!1,lo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bs||e.mapping===zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ya=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Sa=this._renderer.getActiveMipmapLevel(),Ma=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:Kn,format:Cn,colorSpace:Zt,depthBuffer:!1},i=cd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cd(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=p0(r)),this._blurMaterial=m0(r,e,t)}return i}_compileMaterial(e){const t=new ke(this._lodPlanes[0],e);this._renderer.compile(t,va)}_sceneToCubeUV(e,t,n,i,r){const l=new Yt(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,m=h.toneMapping;h.getClearColor(ad),h.toneMapping=Fi,h.autoClear=!1;const _=new Zn({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),g=new ke(new Bi,_);let f=!1;const p=e.background;p?p.isColor&&(_.color.copy(p),e.background=null,f=!0):(_.color.copy(ad),f=!0);for(let M=0;M<6;M++){const A=M%3;A===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[M],r.y,r.z)):A===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[M]));const b=this._cubeSize;lo(i,A*b,M>2?b:0,b,b),h.setRenderTarget(i),f&&h.render(g,l),h.render(e,l)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=m,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Bs||e.mapping===zs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=hd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dd());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new ke(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;lo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,va)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ld[(i-r-1)%ld.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new ke(this._lodPlanes[i],c),u=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Qi-1),g=r/_,f=isFinite(r)?1+Math.floor(d*g):Qi;f>Qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Qi}`);const p=[];let M=0;for(let y=0;y<Qi;++y){const T=y/g,v=Math.exp(-T*T/2);p.push(v),y===0?M+=v:y<f&&(M+=2*v)}for(let y=0;y<p.length;y++)p[y]=p[y]/M;u.envMap.value=e.texture,u.samples.value=f,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:A}=this;u.dTheta.value=_,u.mipInt.value=A-n;const b=this._sizeLods[i],I=3*b*(i>A-Is?i-A+Is:0),S=4*(this._cubeSize-b);lo(t,I,S,3*b,2*b),l.setRenderTarget(t),l.render(h,va)}}function p0(s){const e=[],t=[],n=[];let i=s;const r=s-Is+1+od.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Is?l=od[o-s+Is-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,_=6,g=3,f=2,p=1,M=new Float32Array(g*_*m),A=new Float32Array(f*_*m),b=new Float32Array(p*_*m);for(let S=0;S<m;S++){const y=S%3*2/3-1,T=S>2?0:-1,v=[y,T,0,y+2/3,T,0,y+2/3,T+1,0,y,T,0,y+2/3,T+1,0,y,T+1,0];M.set(v,g*_*S),A.set(u,f*_*S);const x=[S,S,S,S,S,S];b.set(x,p*_*S)}const I=new un;I.setAttribute("position",new on(M,g)),I.setAttribute("uv",new on(A,f)),I.setAttribute("faceIndex",new on(b,p)),e.push(I),i>Is&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function cd(s,e,t){const n=new ki(s,e,t);return n.texture.mapping=Bo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function lo(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function m0(s,e,t){const n=new Float32Array(Qi),i=new L(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:Qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:sc(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function dd(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sc(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function hd(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function sc(){return`

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
	`}function g0(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Mr||l===Za,d=l===Bs||l===zs;if(c||d){let h=e.get(a);const u=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new Lo(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return c&&m&&m.height>0||d&&m&&i(m)?(t===null&&(t=new Lo(s)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function _0(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ki("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function x0(s,e,t,n){const i={},r=new WeakMap;function o(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const _ in u.attributes)e.remove(u.attributes[_]);u.removeEventListener("dispose",o),delete i[u.id];const m=r.get(u);m&&(e.remove(m),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(h,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,t.memory.geometries++),u}function l(h){const u=h.attributes;for(const m in u)e.update(u[m],s.ARRAY_BUFFER)}function c(h){const u=[],m=h.index,_=h.attributes.position;let g=0;if(m!==null){const M=m.array;g=m.version;for(let A=0,b=M.length;A<b;A+=3){const I=M[A+0],S=M[A+1],y=M[A+2];u.push(I,S,S,y,y,I)}}else if(_!==void 0){const M=_.array;g=_.version;for(let A=0,b=M.length/3-1;A<b;A+=3){const I=A+0,S=A+1,y=A+2;u.push(I,S,S,y,y,I)}}else return;const f=new(uh(u)?_h:gh)(u,1);f.version=g;const p=r.get(h);p&&e.remove(p),r.set(h,f)}function d(h){const u=r.get(h);if(u){const m=h.index;m!==null&&u.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function v0(s,e,t){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,m){s.drawElements(n,m,r,u*o),t.update(m,n,1)}function c(u,m,_){_!==0&&(s.drawElementsInstanced(n,m,r,u*o,_),t.update(m,n,_))}function d(u,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,u,0,_);let f=0;for(let p=0;p<_;p++)f+=m[p];t.update(f,n,1)}function h(u,m,_,g){if(_===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<u.length;p++)c(u[p]/o,m[p],g[p]);else{f.multiDrawElementsInstancedWEBGL(n,m,0,r,u,0,g,0,_);let p=0;for(let M=0;M<_;M++)p+=m[M]*g[M];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function y0(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function b0(s,e,t){const n=new WeakMap,i=new lt;function r(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0;let u=n.get(a);if(u===void 0||u.count!==h){let x=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var m=x;u!==void 0&&u.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let b=0;_===!0&&(b=1),g===!0&&(b=2),f===!0&&(b=3);let I=a.attributes.position.count*b,S=1;I>e.maxTextureSize&&(S=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const y=new Float32Array(I*S*4*h),T=new fh(y,I,S,h);T.type=hn,T.needsUpdate=!0;const v=b*4;for(let R=0;R<h;R++){const N=p[R],F=M[R],O=A[R],X=I*S*4*R;for(let H=0;H<N.count;H++){const Q=H*v;_===!0&&(i.fromBufferAttribute(N,H),y[X+Q+0]=i.x,y[X+Q+1]=i.y,y[X+Q+2]=i.z,y[X+Q+3]=0),g===!0&&(i.fromBufferAttribute(F,H),y[X+Q+4]=i.x,y[X+Q+5]=i.y,y[X+Q+6]=i.z,y[X+Q+7]=0),f===!0&&(i.fromBufferAttribute(O,H),y[X+Q+8]=i.x,y[X+Q+9]=i.y,y[X+Q+10]=i.z,y[X+Q+11]=O.itemSize===4?i.w:1)}}u={count:h,texture:T,size:new Ie(I,S)},n.set(a,u),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let _=0;for(let f=0;f<c.length;f++)_+=c[f];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function S0(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,d=l.geometry,h=e.get(l,d);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Fh=new Bt,ud=new Ah(1,1),Uh=new fh,kh=new uf,Oh=new bh,fd=[],pd=[],md=new Float32Array(16),gd=new Float32Array(9),_d=new Float32Array(4);function er(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=fd[i];if(r===void 0&&(r=new Float32Array(i),fd[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function zt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ht(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Vo(s,e){let t=pd[e];t===void 0&&(t=new Int32Array(e),pd[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function M0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function w0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;s.uniform2fv(this.addr,e),Ht(t,e)}}function E0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;s.uniform3fv(this.addr,e),Ht(t,e)}}function T0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;s.uniform4fv(this.addr,e),Ht(t,e)}}function A0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,n))return;_d.set(n),s.uniformMatrix2fv(this.addr,!1,_d),Ht(t,n)}}function R0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,n))return;gd.set(n),s.uniformMatrix3fv(this.addr,!1,gd),Ht(t,n)}}function C0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,n))return;md.set(n),s.uniformMatrix4fv(this.addr,!1,md),Ht(t,n)}}function I0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function P0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;s.uniform2iv(this.addr,e),Ht(t,e)}}function D0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;s.uniform3iv(this.addr,e),Ht(t,e)}}function L0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;s.uniform4iv(this.addr,e),Ht(t,e)}}function N0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function F0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;s.uniform2uiv(this.addr,e),Ht(t,e)}}function U0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;s.uniform3uiv(this.addr,e),Ht(t,e)}}function k0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;s.uniform4uiv(this.addr,e),Ht(t,e)}}function O0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(ud.compareFunction=hh,r=ud):r=Fh,t.setTexture2D(e||r,i)}function B0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||kh,i)}function z0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Oh,i)}function H0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Uh,i)}function V0(s){switch(s){case 5126:return M0;case 35664:return w0;case 35665:return E0;case 35666:return T0;case 35674:return A0;case 35675:return R0;case 35676:return C0;case 5124:case 35670:return I0;case 35667:case 35671:return P0;case 35668:case 35672:return D0;case 35669:case 35673:return L0;case 5125:return N0;case 36294:return F0;case 36295:return U0;case 36296:return k0;case 35678:case 36198:case 36298:case 36306:case 35682:return O0;case 35679:case 36299:case 36307:return B0;case 35680:case 36300:case 36308:case 36293:return z0;case 36289:case 36303:case 36311:case 36292:return H0}}function G0(s,e){s.uniform1fv(this.addr,e)}function W0(s,e){const t=er(e,this.size,2);s.uniform2fv(this.addr,t)}function j0(s,e){const t=er(e,this.size,3);s.uniform3fv(this.addr,t)}function X0(s,e){const t=er(e,this.size,4);s.uniform4fv(this.addr,t)}function $0(s,e){const t=er(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function q0(s,e){const t=er(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Y0(s,e){const t=er(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function K0(s,e){s.uniform1iv(this.addr,e)}function Z0(s,e){s.uniform2iv(this.addr,e)}function J0(s,e){s.uniform3iv(this.addr,e)}function Q0(s,e){s.uniform4iv(this.addr,e)}function e_(s,e){s.uniform1uiv(this.addr,e)}function t_(s,e){s.uniform2uiv(this.addr,e)}function n_(s,e){s.uniform3uiv(this.addr,e)}function i_(s,e){s.uniform4uiv(this.addr,e)}function s_(s,e,t){const n=this.cache,i=e.length,r=Vo(t,i);zt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Fh,r[o])}function r_(s,e,t){const n=this.cache,i=e.length,r=Vo(t,i);zt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||kh,r[o])}function o_(s,e,t){const n=this.cache,i=e.length,r=Vo(t,i);zt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Oh,r[o])}function a_(s,e,t){const n=this.cache,i=e.length,r=Vo(t,i);zt(n,r)||(s.uniform1iv(this.addr,r),Ht(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Uh,r[o])}function l_(s){switch(s){case 5126:return G0;case 35664:return W0;case 35665:return j0;case 35666:return X0;case 35674:return $0;case 35675:return q0;case 35676:return Y0;case 5124:case 35670:return K0;case 35667:case 35671:return Z0;case 35668:case 35672:return J0;case 35669:case 35673:return Q0;case 5125:return e_;case 36294:return t_;case 36295:return n_;case 36296:return i_;case 35678:case 36198:case 36298:case 36306:case 35682:return s_;case 35679:case 36299:case 36307:return r_;case 35680:case 36300:case 36308:case 36293:return o_;case 36289:case 36303:case 36311:case 36292:return a_}}class c_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=V0(t.type)}}class d_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=l_(t.type)}}class h_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const wa=/(\w+)(\])?(\[|\.)?/g;function xd(s,e){s.seq.push(e),s.map[e.id]=e}function u_(s,e,t){const n=s.name,i=n.length;for(wa.lastIndex=0;;){const r=wa.exec(n),o=wa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){xd(t,c===void 0?new c_(a,s,e):new d_(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new h_(a),xd(t,h)),t=h}}}class Mo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);u_(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function vd(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const f_=37297;let p_=0;function m_(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const yd=new $e;function g_(s){it._getMatrix(yd,it.workingColorSpace,s);const e=`mat3( ${yd.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(s)){case To:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function bd(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+m_(s.getShaderSource(e),o)}else return i}function __(s,e){const t=g_(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function x_(s,e){let t;switch(e){case yu:t="Linear";break;case bu:t="Reinhard";break;case Su:t="Cineon";break;case Yd:t="ACESFilmic";break;case wu:t="AgX";break;case Eu:t="Neutral";break;case Mu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const co=new L;function v_(){it.getLuminanceCoefficients(co);const s=co.x.toFixed(4),e=co.y.toFixed(4),t=co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function y_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gr).join(`
`)}function b_(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function S_(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function gr(s){return s!==""}function Sd(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Md(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const M_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cl(s){return s.replace(M_,E_)}const w_=new Map;function E_(s,e){let t=qe[e];if(t===void 0){const n=w_.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Cl(t)}const T_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wd(s){return s.replace(T_,A_)}function A_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ed(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function R_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Xd?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===$d?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===di&&(e="SHADOWMAP_TYPE_VSM"),e}function C_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Bs:case zs:e="ENVMAP_TYPE_CUBE";break;case Bo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function I_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case zs:e="ENVMAP_MODE_REFRACTION";break}return e}function P_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case qd:e="ENVMAP_BLENDING_MULTIPLY";break;case xu:e="ENVMAP_BLENDING_MIX";break;case vu:e="ENVMAP_BLENDING_ADD";break}return e}function D_(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function L_(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=R_(t),c=C_(t),d=I_(t),h=P_(t),u=D_(t),m=y_(t),_=b_(r),g=i.createProgram();let f,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(gr).join(`
`),f.length>0&&(f+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(gr).join(`
`),p.length>0&&(p+=`
`)):(f=[Ed(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gr).join(`
`),p=[Ed(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fi?"#define TONE_MAPPING":"",t.toneMapping!==Fi?qe.tonemapping_pars_fragment:"",t.toneMapping!==Fi?x_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,__("linearToOutputTexel",t.outputColorSpace),v_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gr).join(`
`)),o=Cl(o),o=Sd(o,t),o=Md(o,t),a=Cl(a),a=Sd(a,t),a=Md(a,t),o=wd(o),a=wd(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",t.glslVersion===yc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=M+f+o,b=M+p+a,I=vd(i,i.VERTEX_SHADER,A),S=vd(i,i.FRAGMENT_SHADER,b);i.attachShader(g,I),i.attachShader(g,S),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function y(R){if(s.debug.checkShaderErrors){const N=i.getProgramInfoLog(g).trim(),F=i.getShaderInfoLog(I).trim(),O=i.getShaderInfoLog(S).trim();let X=!0,H=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,I,S);else{const Q=bd(i,I,"vertex"),q=bd(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+N+`
`+Q+`
`+q)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(F===""||O==="")&&(H=!1);H&&(R.diagnostics={runnable:X,programLog:N,vertexShader:{log:F,prefix:f},fragmentShader:{log:O,prefix:p}})}i.deleteShader(I),i.deleteShader(S),T=new Mo(i,g),v=S_(i,g)}let T;this.getUniforms=function(){return T===void 0&&y(this),T};let v;this.getAttributes=function(){return v===void 0&&y(this),v};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(g,f_)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=p_++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=I,this.fragmentShader=S,this}let N_=0;class F_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new U_(e),t.set(e,n)),n}}class U_{constructor(e){this.id=N_++,this.code=e,this.usedTimes=0}}function k_(s,e,t,n,i,r,o){const a=new ph,l=new F_,c=new Set,d=[],h=i.logarithmicDepthBuffer,u=i.vertexTextures;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return c.add(v),v===0?"uv":`uv${v}`}function f(v,x,R,N,F){const O=N.fog,X=F.geometry,H=v.isMeshStandardMaterial?N.environment:null,Q=(v.isMeshStandardMaterial?t:e).get(v.envMap||H),q=Q&&Q.mapping===Bo?Q.image.height:null,ce=_[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const ue=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,be=ue!==void 0?ue.length:0;let Ue=0;X.morphAttributes.position!==void 0&&(Ue=1),X.morphAttributes.normal!==void 0&&(Ue=2),X.morphAttributes.color!==void 0&&(Ue=3);let je,K,ae,Re;if(ce){const Ce=$n[ce];je=Ce.vertexShader,K=Ce.fragmentShader}else je=v.vertexShader,K=v.fragmentShader,l.update(v),ae=l.getVertexShaderID(v),Re=l.getFragmentShaderID(v);const pe=s.getRenderTarget(),Ne=s.state.buffers.depth.getReversed(),Ke=F.isInstancedMesh===!0,Pe=F.isBatchedMesh===!0,bt=!!v.map,pt=!!v.matcap,Ve=!!Q,D=!!v.aoMap,Et=!!v.lightMap,B=!!v.bumpMap,re=!!v.normalMap,Te=!!v.displacementMap,ct=!!v.emissiveMap,Z=!!v.metalnessMap,C=!!v.roughnessMap,w=v.anisotropy>0,W=v.clearcoat>0,G=v.dispersion>0,ie=v.iridescence>0,J=v.sheen>0,De=v.transmission>0,ve=w&&!!v.anisotropyMap,me=W&&!!v.clearcoatMap,Ze=W&&!!v.clearcoatNormalMap,le=W&&!!v.clearcoatRoughnessMap,we=ie&&!!v.iridescenceMap,he=ie&&!!v.iridescenceThicknessMap,He=J&&!!v.sheenColorMap,Ee=J&&!!v.sheenRoughnessMap,Je=!!v.specularMap,ne=!!v.specularColorMap,ht=!!v.specularIntensityMap,U=De&&!!v.transmissionMap,ge=De&&!!v.thicknessMap,Y=!!v.gradientMap,te=!!v.alphaMap,ye=v.alphaTest>0,_e=!!v.alphaHash,We=!!v.extensions;let vt=Fi;v.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(vt=s.toneMapping);const It={shaderID:ce,shaderType:v.type,shaderName:v.name,vertexShader:je,fragmentShader:K,defines:v.defines,customVertexShaderID:ae,customFragmentShaderID:Re,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,batching:Pe,batchingColor:Pe&&F._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&F.instanceColor!==null,instancingMorph:Ke&&F.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:pe===null?s.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Zt,alphaToCoverage:!!v.alphaToCoverage,map:bt,matcap:pt,envMap:Ve,envMapMode:Ve&&Q.mapping,envMapCubeUVHeight:q,aoMap:D,lightMap:Et,bumpMap:B,normalMap:re,displacementMap:u&&Te,emissiveMap:ct,normalMapObjectSpace:re&&v.normalMapType===Du,normalMapTangentSpace:re&&v.normalMapType===dh,metalnessMap:Z,roughnessMap:C,anisotropy:w,anisotropyMap:ve,clearcoat:W,clearcoatMap:me,clearcoatNormalMap:Ze,clearcoatRoughnessMap:le,dispersion:G,iridescence:ie,iridescenceMap:we,iridescenceThicknessMap:he,sheen:J,sheenColorMap:He,sheenRoughnessMap:Ee,specularMap:Je,specularColorMap:ne,specularIntensityMap:ht,transmission:De,transmissionMap:U,thicknessMap:ge,gradientMap:Y,opaque:v.transparent===!1&&v.blending===Ls&&v.alphaToCoverage===!1,alphaMap:te,alphaTest:ye,alphaHash:_e,combine:v.combine,mapUv:bt&&g(v.map.channel),aoMapUv:D&&g(v.aoMap.channel),lightMapUv:Et&&g(v.lightMap.channel),bumpMapUv:B&&g(v.bumpMap.channel),normalMapUv:re&&g(v.normalMap.channel),displacementMapUv:Te&&g(v.displacementMap.channel),emissiveMapUv:ct&&g(v.emissiveMap.channel),metalnessMapUv:Z&&g(v.metalnessMap.channel),roughnessMapUv:C&&g(v.roughnessMap.channel),anisotropyMapUv:ve&&g(v.anisotropyMap.channel),clearcoatMapUv:me&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:Ze&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:he&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:He&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&g(v.sheenRoughnessMap.channel),specularMapUv:Je&&g(v.specularMap.channel),specularColorMapUv:ne&&g(v.specularColorMap.channel),specularIntensityMapUv:ht&&g(v.specularIntensityMap.channel),transmissionMapUv:U&&g(v.transmissionMap.channel),thicknessMapUv:ge&&g(v.thicknessMap.channel),alphaMapUv:te&&g(v.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(re||w),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!X.attributes.uv&&(bt||te),fog:!!O,useFog:v.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ne,skinning:F.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Ue,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:vt,decodeVideoTexture:bt&&v.map.isVideoTexture===!0&&it.getTransfer(v.map.colorSpace)===_t,decodeVideoTextureEmissive:ct&&v.emissiveMap.isVideoTexture===!0&&it.getTransfer(v.emissiveMap.colorSpace)===_t,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Bn,flipSided:v.side===Kt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:We&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&v.extensions.multiDraw===!0||Pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return It.vertexUv1s=c.has(1),It.vertexUv2s=c.has(2),It.vertexUv3s=c.has(3),c.clear(),It}function p(v){const x=[];if(v.shaderID?x.push(v.shaderID):(x.push(v.customVertexShaderID),x.push(v.customFragmentShaderID)),v.defines!==void 0)for(const R in v.defines)x.push(R),x.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(M(x,v),A(x,v),x.push(s.outputColorSpace)),x.push(v.customProgramCacheKey),x.join()}function M(v,x){v.push(x.precision),v.push(x.outputColorSpace),v.push(x.envMapMode),v.push(x.envMapCubeUVHeight),v.push(x.mapUv),v.push(x.alphaMapUv),v.push(x.lightMapUv),v.push(x.aoMapUv),v.push(x.bumpMapUv),v.push(x.normalMapUv),v.push(x.displacementMapUv),v.push(x.emissiveMapUv),v.push(x.metalnessMapUv),v.push(x.roughnessMapUv),v.push(x.anisotropyMapUv),v.push(x.clearcoatMapUv),v.push(x.clearcoatNormalMapUv),v.push(x.clearcoatRoughnessMapUv),v.push(x.iridescenceMapUv),v.push(x.iridescenceThicknessMapUv),v.push(x.sheenColorMapUv),v.push(x.sheenRoughnessMapUv),v.push(x.specularMapUv),v.push(x.specularColorMapUv),v.push(x.specularIntensityMapUv),v.push(x.transmissionMapUv),v.push(x.thicknessMapUv),v.push(x.combine),v.push(x.fogExp2),v.push(x.sizeAttenuation),v.push(x.morphTargetsCount),v.push(x.morphAttributeCount),v.push(x.numDirLights),v.push(x.numPointLights),v.push(x.numSpotLights),v.push(x.numSpotLightMaps),v.push(x.numHemiLights),v.push(x.numRectAreaLights),v.push(x.numDirLightShadows),v.push(x.numPointLightShadows),v.push(x.numSpotLightShadows),v.push(x.numSpotLightShadowsWithMaps),v.push(x.numLightProbes),v.push(x.shadowMapType),v.push(x.toneMapping),v.push(x.numClippingPlanes),v.push(x.numClipIntersection),v.push(x.depthPacking)}function A(v,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),v.push(a.mask)}function b(v){const x=_[v.type];let R;if(x){const N=$n[x];R=vh.clone(N.uniforms)}else R=v.uniforms;return R}function I(v,x){let R;for(let N=0,F=d.length;N<F;N++){const O=d[N];if(O.cacheKey===x){R=O,++R.usedTimes;break}}return R===void 0&&(R=new L_(s,x,v,r),d.push(R)),R}function S(v){if(--v.usedTimes===0){const x=d.indexOf(v);d[x]=d[d.length-1],d.pop(),v.destroy()}}function y(v){l.remove(v)}function T(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:b,acquireProgram:I,releaseProgram:S,releaseShaderCache:y,programs:d,dispose:T}}function O_(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function B_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Td(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ad(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,u,m,_,g,f){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:u,material:m,groupOrder:_,renderOrder:h.renderOrder,z:g,group:f},s[e]=p):(p.id=h.id,p.object=h,p.geometry=u,p.material=m,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=g,p.group=f),e++,p}function a(h,u,m,_,g,f){const p=o(h,u,m,_,g,f);m.transmission>0?n.push(p):m.transparent===!0?i.push(p):t.push(p)}function l(h,u,m,_,g,f){const p=o(h,u,m,_,g,f);m.transmission>0?n.unshift(p):m.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,u){t.length>1&&t.sort(h||B_),n.length>1&&n.sort(u||Td),i.length>1&&i.sort(u||Td)}function d(){for(let h=e,u=s.length;h<u;h++){const m=s[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:d,sort:c}}function z_(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Ad,s.set(n,[o])):i>=r.length?(o=new Ad,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function H_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Le};break;case"SpotLight":t={position:new L,direction:new L,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function V_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let G_=0;function W_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function j_(s){const e=new H_,t=V_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const i=new L,r=new Xe,o=new Xe;function a(c){let d=0,h=0,u=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let m=0,_=0,g=0,f=0,p=0,M=0,A=0,b=0,I=0,S=0,y=0;c.sort(W_);for(let v=0,x=c.length;v<x;v++){const R=c[v],N=R.color,F=R.intensity,O=R.distance,X=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=N.r*F,h+=N.g*F,u+=N.b*F;else if(R.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(R.sh.coefficients[H],F);y++}else if(R.isDirectionalLight){const H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Q=R.shadow,q=t.get(R);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,n.directionalShadow[m]=q,n.directionalShadowMap[m]=X,n.directionalShadowMatrix[m]=R.shadow.matrix,M++}n.directional[m]=H,m++}else if(R.isSpotLight){const H=e.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(N).multiplyScalar(F),H.distance=O,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,n.spot[g]=H;const Q=R.shadow;if(R.map&&(n.spotLightMap[I]=R.map,I++,Q.updateMatrices(R),R.castShadow&&S++),n.spotLightMatrix[g]=Q.matrix,R.castShadow){const q=t.get(R);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,n.spotShadow[g]=q,n.spotShadowMap[g]=X,b++}g++}else if(R.isRectAreaLight){const H=e.get(R);H.color.copy(N).multiplyScalar(F),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),n.rectArea[f]=H,f++}else if(R.isPointLight){const H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),H.distance=R.distance,H.decay=R.decay,R.castShadow){const Q=R.shadow,q=t.get(R);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,q.shadowCameraNear=Q.camera.near,q.shadowCameraFar=Q.camera.far,n.pointShadow[_]=q,n.pointShadowMap[_]=X,n.pointShadowMatrix[_]=R.shadow.matrix,A++}n.point[_]=H,_++}else if(R.isHemisphereLight){const H=e.get(R);H.skyColor.copy(R.color).multiplyScalar(F),H.groundColor.copy(R.groundColor).multiplyScalar(F),n.hemi[p]=H,p++}}f>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=u;const T=n.hash;(T.directionalLength!==m||T.pointLength!==_||T.spotLength!==g||T.rectAreaLength!==f||T.hemiLength!==p||T.numDirectionalShadows!==M||T.numPointShadows!==A||T.numSpotShadows!==b||T.numSpotMaps!==I||T.numLightProbes!==y)&&(n.directional.length=m,n.spot.length=g,n.rectArea.length=f,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=b+I-S,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=y,T.directionalLength=m,T.pointLength=_,T.spotLength=g,T.rectAreaLength=f,T.hemiLength=p,T.numDirectionalShadows=M,T.numPointShadows=A,T.numSpotShadows=b,T.numSpotMaps=I,T.numLightProbes=y,n.version=G_++)}function l(c,d){let h=0,u=0,m=0,_=0,g=0;const f=d.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const A=c[p];if(A.isDirectionalLight){const b=n.directional[h];b.direction.setFromMatrixPosition(A.matrixWorld),i.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(f),h++}else if(A.isSpotLight){const b=n.spot[m];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(A.matrixWorld),i.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(f),m++}else if(A.isRectAreaLight){const b=n.rectArea[_];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(f),o.identity(),r.copy(A.matrixWorld),r.premultiply(f),o.extractRotation(r),b.halfWidth.set(A.width*.5,0,0),b.halfHeight.set(0,A.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(A.isPointLight){const b=n.point[u];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(f),u++}else if(A.isHemisphereLight){const b=n.hemi[g];b.direction.setFromMatrixPosition(A.matrixWorld),b.direction.transformDirection(f),g++}}}return{setup:a,setupView:l,state:n}}function Rd(s){const e=new j_(s),t=[],n=[];function i(d){c.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function o(d){n.push(d)}function a(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function X_(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new Rd(s),e.set(i,[a])):r>=o.length?(a=new Rd(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const $_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,q_=`uniform sampler2D shadow_pass;
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
}`;function Y_(s,e,t){let n=new Zl;const i=new Ie,r=new Ie,o=new lt,a=new Wf({depthPacking:Pu}),l=new jf,c={},d=t.maxTextureSize,h={[_i]:Kt,[Kt]:_i,[Bn]:Bn},u=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:$_,fragmentShader:q_}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const _=new un;_.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ke(_,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xd;let p=this.type;this.render=function(S,y,T){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||S.length===0)return;const v=s.getRenderTarget(),x=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),N=s.state;N.setBlending(Ni),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const F=p!==di&&this.type===di,O=p===di&&this.type!==di;for(let X=0,H=S.length;X<H;X++){const Q=S[X],q=Q.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const ce=q.getFrameExtents();if(i.multiply(ce),r.copy(q.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(r.x=Math.floor(d/ce.x),i.x=r.x*ce.x,q.mapSize.x=r.x),i.y>d&&(r.y=Math.floor(d/ce.y),i.y=r.y*ce.y,q.mapSize.y=r.y)),q.map===null||F===!0||O===!0){const be=this.type!==di?{minFilter:rn,magFilter:rn}:{};q.map!==null&&q.map.dispose(),q.map=new ki(i.x,i.y,be),q.map.texture.name=Q.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();const ue=q.getViewportCount();for(let be=0;be<ue;be++){const Ue=q.getViewport(be);o.set(r.x*Ue.x,r.y*Ue.y,r.x*Ue.z,r.y*Ue.w),N.viewport(o),q.updateMatrices(Q,be),n=q.getFrustum(),b(y,T,q.camera,Q,this.type)}q.isPointLightShadow!==!0&&this.type===di&&M(q,T),q.needsUpdate=!1}p=this.type,f.needsUpdate=!1,s.setRenderTarget(v,x,R)};function M(S,y){const T=e.update(g);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new ki(i.x,i.y)),u.uniforms.shadow_pass.value=S.map.texture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(y,null,T,u,g,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(y,null,T,m,g,null)}function A(S,y,T,v){let x=null;const R=T.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(R!==void 0)x=R;else if(x=T.isPointLight===!0?l:a,s.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const N=x.uuid,F=y.uuid;let O=c[N];O===void 0&&(O={},c[N]=O);let X=O[F];X===void 0&&(X=x.clone(),O[F]=X,y.addEventListener("dispose",I)),x=X}if(x.visible=y.visible,x.wireframe=y.wireframe,v===di?x.side=y.shadowSide!==null?y.shadowSide:y.side:x.side=y.shadowSide!==null?y.shadowSide:h[y.side],x.alphaMap=y.alphaMap,x.alphaTest=y.alphaTest,x.map=y.map,x.clipShadows=y.clipShadows,x.clippingPlanes=y.clippingPlanes,x.clipIntersection=y.clipIntersection,x.displacementMap=y.displacementMap,x.displacementScale=y.displacementScale,x.displacementBias=y.displacementBias,x.wireframeLinewidth=y.wireframeLinewidth,x.linewidth=y.linewidth,T.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const N=s.properties.get(x);N.light=T}return x}function b(S,y,T,v,x){if(S.visible===!1)return;if(S.layers.test(y.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&x===di)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,S.matrixWorld);const F=e.update(S),O=S.material;if(Array.isArray(O)){const X=F.groups;for(let H=0,Q=X.length;H<Q;H++){const q=X[H],ce=O[q.materialIndex];if(ce&&ce.visible){const ue=A(S,ce,v,x);S.onBeforeShadow(s,S,y,T,F,ue,q),s.renderBufferDirect(T,null,F,ue,S,q),S.onAfterShadow(s,S,y,T,F,ue,q)}}}else if(O.visible){const X=A(S,O,v,x);S.onBeforeShadow(s,S,y,T,F,X,null),s.renderBufferDirect(T,null,F,X,S,null),S.onAfterShadow(s,S,y,T,F,X,null)}}const N=S.children;for(let F=0,O=N.length;F<O;F++)b(N[F],y,T,v,x)}function I(S){S.target.removeEventListener("dispose",I);for(const T in c){const v=c[T],x=S.target.uuid;x in v&&(v[x].dispose(),delete v[x])}}}const K_={[Wa]:ja,[Xa]:Ya,[$a]:Ka,[Os]:qa,[ja]:Wa,[Ya]:Xa,[Ka]:$a,[qa]:Os};function Z_(s,e){function t(){let U=!1;const ge=new lt;let Y=null;const te=new lt(0,0,0,0);return{setMask:function(ye){Y!==ye&&!U&&(s.colorMask(ye,ye,ye,ye),Y=ye)},setLocked:function(ye){U=ye},setClear:function(ye,_e,We,vt,It){It===!0&&(ye*=vt,_e*=vt,We*=vt),ge.set(ye,_e,We,vt),te.equals(ge)===!1&&(s.clearColor(ye,_e,We,vt),te.copy(ge))},reset:function(){U=!1,Y=null,te.set(-1,0,0,0)}}}function n(){let U=!1,ge=!1,Y=null,te=null,ye=null;return{setReversed:function(_e){if(ge!==_e){const We=e.get("EXT_clip_control");ge?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT);const vt=ye;ye=null,this.setClear(vt)}ge=_e},getReversed:function(){return ge},setTest:function(_e){_e?pe(s.DEPTH_TEST):Ne(s.DEPTH_TEST)},setMask:function(_e){Y!==_e&&!U&&(s.depthMask(_e),Y=_e)},setFunc:function(_e){if(ge&&(_e=K_[_e]),te!==_e){switch(_e){case Wa:s.depthFunc(s.NEVER);break;case ja:s.depthFunc(s.ALWAYS);break;case Xa:s.depthFunc(s.LESS);break;case Os:s.depthFunc(s.LEQUAL);break;case $a:s.depthFunc(s.EQUAL);break;case qa:s.depthFunc(s.GEQUAL);break;case Ya:s.depthFunc(s.GREATER);break;case Ka:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}te=_e}},setLocked:function(_e){U=_e},setClear:function(_e){ye!==_e&&(ge&&(_e=1-_e),s.clearDepth(_e),ye=_e)},reset:function(){U=!1,Y=null,te=null,ye=null,ge=!1}}}function i(){let U=!1,ge=null,Y=null,te=null,ye=null,_e=null,We=null,vt=null,It=null;return{setTest:function(Ce){U||(Ce?pe(s.STENCIL_TEST):Ne(s.STENCIL_TEST))},setMask:function(Ce){ge!==Ce&&!U&&(s.stencilMask(Ce),ge=Ce)},setFunc:function(Ce,Jt,fn){(Y!==Ce||te!==Jt||ye!==fn)&&(s.stencilFunc(Ce,Jt,fn),Y=Ce,te=Jt,ye=fn)},setOp:function(Ce,Jt,fn){(_e!==Ce||We!==Jt||vt!==fn)&&(s.stencilOp(Ce,Jt,fn),_e=Ce,We=Jt,vt=fn)},setLocked:function(Ce){U=Ce},setClear:function(Ce){It!==Ce&&(s.clearStencil(Ce),It=Ce)},reset:function(){U=!1,ge=null,Y=null,te=null,ye=null,_e=null,We=null,vt=null,It=null}}}const r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let d={},h={},u=new WeakMap,m=[],_=null,g=!1,f=null,p=null,M=null,A=null,b=null,I=null,S=null,y=new Le(0,0,0),T=0,v=!1,x=null,R=null,N=null,F=null,O=null;const X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Q=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=Q>=1):q.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=Q>=2);let ce=null,ue={};const be=s.getParameter(s.SCISSOR_BOX),Ue=s.getParameter(s.VIEWPORT),je=new lt().fromArray(be),K=new lt().fromArray(Ue);function ae(U,ge,Y,te){const ye=new Uint8Array(4),_e=s.createTexture();s.bindTexture(U,_e),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let We=0;We<Y;We++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(ge,0,s.RGBA,1,1,te,0,s.RGBA,s.UNSIGNED_BYTE,ye):s.texImage2D(ge+We,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ye);return _e}const Re={};Re[s.TEXTURE_2D]=ae(s.TEXTURE_2D,s.TEXTURE_2D,1),Re[s.TEXTURE_CUBE_MAP]=ae(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[s.TEXTURE_2D_ARRAY]=ae(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Re[s.TEXTURE_3D]=ae(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pe(s.DEPTH_TEST),o.setFunc(Os),B(!1),re(pc),pe(s.CULL_FACE),D(Ni);function pe(U){d[U]!==!0&&(s.enable(U),d[U]=!0)}function Ne(U){d[U]!==!1&&(s.disable(U),d[U]=!1)}function Ke(U,ge){return h[U]!==ge?(s.bindFramebuffer(U,ge),h[U]=ge,U===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ge),U===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ge),!0):!1}function Pe(U,ge){let Y=m,te=!1;if(U){Y=u.get(ge),Y===void 0&&(Y=[],u.set(ge,Y));const ye=U.textures;if(Y.length!==ye.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let _e=0,We=ye.length;_e<We;_e++)Y[_e]=s.COLOR_ATTACHMENT0+_e;Y.length=ye.length,te=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,te=!0);te&&s.drawBuffers(Y)}function bt(U){return _!==U?(s.useProgram(U),_=U,!0):!1}const pt={[Ji]:s.FUNC_ADD,[tu]:s.FUNC_SUBTRACT,[nu]:s.FUNC_REVERSE_SUBTRACT};pt[iu]=s.MIN,pt[su]=s.MAX;const Ve={[ru]:s.ZERO,[ou]:s.ONE,[au]:s.SRC_COLOR,[Va]:s.SRC_ALPHA,[fu]:s.SRC_ALPHA_SATURATE,[hu]:s.DST_COLOR,[cu]:s.DST_ALPHA,[lu]:s.ONE_MINUS_SRC_COLOR,[Ga]:s.ONE_MINUS_SRC_ALPHA,[uu]:s.ONE_MINUS_DST_COLOR,[du]:s.ONE_MINUS_DST_ALPHA,[pu]:s.CONSTANT_COLOR,[mu]:s.ONE_MINUS_CONSTANT_COLOR,[gu]:s.CONSTANT_ALPHA,[_u]:s.ONE_MINUS_CONSTANT_ALPHA};function D(U,ge,Y,te,ye,_e,We,vt,It,Ce){if(U===Ni){g===!0&&(Ne(s.BLEND),g=!1);return}if(g===!1&&(pe(s.BLEND),g=!0),U!==eu){if(U!==f||Ce!==v){if((p!==Ji||b!==Ji)&&(s.blendEquation(s.FUNC_ADD),p=Ji,b=Ji),Ce)switch(U){case Ls:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case mc:s.blendFunc(s.ONE,s.ONE);break;case gc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case _c:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ls:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case mc:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case gc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case _c:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}M=null,A=null,I=null,S=null,y.set(0,0,0),T=0,f=U,v=Ce}return}ye=ye||ge,_e=_e||Y,We=We||te,(ge!==p||ye!==b)&&(s.blendEquationSeparate(pt[ge],pt[ye]),p=ge,b=ye),(Y!==M||te!==A||_e!==I||We!==S)&&(s.blendFuncSeparate(Ve[Y],Ve[te],Ve[_e],Ve[We]),M=Y,A=te,I=_e,S=We),(vt.equals(y)===!1||It!==T)&&(s.blendColor(vt.r,vt.g,vt.b,It),y.copy(vt),T=It),f=U,v=!1}function Et(U,ge){U.side===Bn?Ne(s.CULL_FACE):pe(s.CULL_FACE);let Y=U.side===Kt;ge&&(Y=!Y),B(Y),U.blending===Ls&&U.transparent===!1?D(Ni):D(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const te=U.stencilWrite;a.setTest(te),te&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ct(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?pe(s.SAMPLE_ALPHA_TO_COVERAGE):Ne(s.SAMPLE_ALPHA_TO_COVERAGE)}function B(U){x!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),x=U)}function re(U){U!==Jh?(pe(s.CULL_FACE),U!==R&&(U===pc?s.cullFace(s.BACK):U===Qh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ne(s.CULL_FACE),R=U}function Te(U){U!==N&&(H&&s.lineWidth(U),N=U)}function ct(U,ge,Y){U?(pe(s.POLYGON_OFFSET_FILL),(F!==ge||O!==Y)&&(s.polygonOffset(ge,Y),F=ge,O=Y)):Ne(s.POLYGON_OFFSET_FILL)}function Z(U){U?pe(s.SCISSOR_TEST):Ne(s.SCISSOR_TEST)}function C(U){U===void 0&&(U=s.TEXTURE0+X-1),ce!==U&&(s.activeTexture(U),ce=U)}function w(U,ge,Y){Y===void 0&&(ce===null?Y=s.TEXTURE0+X-1:Y=ce);let te=ue[Y];te===void 0&&(te={type:void 0,texture:void 0},ue[Y]=te),(te.type!==U||te.texture!==ge)&&(ce!==Y&&(s.activeTexture(Y),ce=Y),s.bindTexture(U,ge||Re[U]),te.type=U,te.texture=ge)}function W(){const U=ue[ce];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function G(){try{s.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{s.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{s.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(){try{s.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(){try{s.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{s.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ze(){try{s.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{s.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function we(){try{s.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{s.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function He(U){je.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),je.copy(U))}function Ee(U){K.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),K.copy(U))}function Je(U,ge){let Y=c.get(ge);Y===void 0&&(Y=new WeakMap,c.set(ge,Y));let te=Y.get(U);te===void 0&&(te=s.getUniformBlockIndex(ge,U.name),Y.set(U,te))}function ne(U,ge){const te=c.get(ge).get(U);l.get(ge)!==te&&(s.uniformBlockBinding(ge,te,U.__bindingPointIndex),l.set(ge,te))}function ht(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},ce=null,ue={},h={},u=new WeakMap,m=[],_=null,g=!1,f=null,p=null,M=null,A=null,b=null,I=null,S=null,y=new Le(0,0,0),T=0,v=!1,x=null,R=null,N=null,F=null,O=null,je.set(0,0,s.canvas.width,s.canvas.height),K.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:pe,disable:Ne,bindFramebuffer:Ke,drawBuffers:Pe,useProgram:bt,setBlending:D,setMaterial:Et,setFlipSided:B,setCullFace:re,setLineWidth:Te,setPolygonOffset:ct,setScissorTest:Z,activeTexture:C,bindTexture:w,unbindTexture:W,compressedTexImage2D:G,compressedTexImage3D:ie,texImage2D:we,texImage3D:he,updateUBOMapping:Je,uniformBlockBinding:ne,texStorage2D:Ze,texStorage3D:le,texSubImage2D:J,texSubImage3D:De,compressedTexSubImage2D:ve,compressedTexSubImage3D:me,scissor:He,viewport:Ee,reset:ht}}function J_(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ie,d=new WeakMap;let h;const u=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,w){return m?new OffscreenCanvas(C,w):Ar("canvas")}function g(C,w,W){let G=1;const ie=Z(C);if((ie.width>W||ie.height>W)&&(G=W/Math.max(ie.width,ie.height)),G<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const J=Math.floor(G*ie.width),De=Math.floor(G*ie.height);h===void 0&&(h=_(J,De));const ve=w?_(J,De):h;return ve.width=J,ve.height=De,ve.getContext("2d").drawImage(C,0,0,J,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+J+"x"+De+")."),ve}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),C;return C}function f(C){return C.generateMipmaps}function p(C){s.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function A(C,w,W,G,ie=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let J=w;if(w===s.RED&&(W===s.FLOAT&&(J=s.R32F),W===s.HALF_FLOAT&&(J=s.R16F),W===s.UNSIGNED_BYTE&&(J=s.R8)),w===s.RED_INTEGER&&(W===s.UNSIGNED_BYTE&&(J=s.R8UI),W===s.UNSIGNED_SHORT&&(J=s.R16UI),W===s.UNSIGNED_INT&&(J=s.R32UI),W===s.BYTE&&(J=s.R8I),W===s.SHORT&&(J=s.R16I),W===s.INT&&(J=s.R32I)),w===s.RG&&(W===s.FLOAT&&(J=s.RG32F),W===s.HALF_FLOAT&&(J=s.RG16F),W===s.UNSIGNED_BYTE&&(J=s.RG8)),w===s.RG_INTEGER&&(W===s.UNSIGNED_BYTE&&(J=s.RG8UI),W===s.UNSIGNED_SHORT&&(J=s.RG16UI),W===s.UNSIGNED_INT&&(J=s.RG32UI),W===s.BYTE&&(J=s.RG8I),W===s.SHORT&&(J=s.RG16I),W===s.INT&&(J=s.RG32I)),w===s.RGB_INTEGER&&(W===s.UNSIGNED_BYTE&&(J=s.RGB8UI),W===s.UNSIGNED_SHORT&&(J=s.RGB16UI),W===s.UNSIGNED_INT&&(J=s.RGB32UI),W===s.BYTE&&(J=s.RGB8I),W===s.SHORT&&(J=s.RGB16I),W===s.INT&&(J=s.RGB32I)),w===s.RGBA_INTEGER&&(W===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),W===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),W===s.UNSIGNED_INT&&(J=s.RGBA32UI),W===s.BYTE&&(J=s.RGBA8I),W===s.SHORT&&(J=s.RGBA16I),W===s.INT&&(J=s.RGBA32I)),w===s.RGB&&W===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),w===s.RGBA){const De=ie?To:it.getTransfer(G);W===s.FLOAT&&(J=s.RGBA32F),W===s.HALF_FLOAT&&(J=s.RGBA16F),W===s.UNSIGNED_BYTE&&(J=De===_t?s.SRGB8_ALPHA8:s.RGBA8),W===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),W===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function b(C,w){let W;return C?w===null||w===ns||w===Hs?W=s.DEPTH24_STENCIL8:w===hn?W=s.DEPTH32F_STENCIL8:w===wr&&(W=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ns||w===Hs?W=s.DEPTH_COMPONENT24:w===hn?W=s.DEPTH_COMPONENT32F:w===wr&&(W=s.DEPTH_COMPONENT16),W}function I(C,w){return f(C)===!0||C.isFramebufferTexture&&C.minFilter!==rn&&C.minFilter!==Gt?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function S(C){const w=C.target;w.removeEventListener("dispose",S),T(w),w.isVideoTexture&&d.delete(w)}function y(C){const w=C.target;w.removeEventListener("dispose",y),x(w)}function T(C){const w=n.get(C);if(w.__webglInit===void 0)return;const W=C.source,G=u.get(W);if(G){const ie=G[w.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&v(C),Object.keys(G).length===0&&u.delete(W)}n.remove(C)}function v(C){const w=n.get(C);s.deleteTexture(w.__webglTexture);const W=C.source,G=u.get(W);delete G[w.__cacheKey],o.memory.textures--}function x(C){const w=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(w.__webglFramebuffer[G]))for(let ie=0;ie<w.__webglFramebuffer[G].length;ie++)s.deleteFramebuffer(w.__webglFramebuffer[G][ie]);else s.deleteFramebuffer(w.__webglFramebuffer[G]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[G])}else{if(Array.isArray(w.__webglFramebuffer))for(let G=0;G<w.__webglFramebuffer.length;G++)s.deleteFramebuffer(w.__webglFramebuffer[G]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let G=0;G<w.__webglColorRenderbuffer.length;G++)w.__webglColorRenderbuffer[G]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[G]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const W=C.textures;for(let G=0,ie=W.length;G<ie;G++){const J=n.get(W[G]);J.__webglTexture&&(s.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(W[G])}n.remove(C)}let R=0;function N(){R=0}function F(){const C=R;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),R+=1,C}function O(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function X(C,w){const W=n.get(C);if(C.isVideoTexture&&Te(C),C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){const G=C.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(W,C,w);return}}t.bindTexture(s.TEXTURE_2D,W.__webglTexture,s.TEXTURE0+w)}function H(C,w){const W=n.get(C);if(C.version>0&&W.__version!==C.version){K(W,C,w);return}t.bindTexture(s.TEXTURE_2D_ARRAY,W.__webglTexture,s.TEXTURE0+w)}function Q(C,w){const W=n.get(C);if(C.version>0&&W.__version!==C.version){K(W,C,w);return}t.bindTexture(s.TEXTURE_3D,W.__webglTexture,s.TEXTURE0+w)}function q(C,w){const W=n.get(C);if(C.version>0&&W.__version!==C.version){ae(W,C,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture,s.TEXTURE0+w)}const ce={[Pn]:s.REPEAT,[qn]:s.CLAMP_TO_EDGE,[wo]:s.MIRRORED_REPEAT},ue={[rn]:s.NEAREST,[Zd]:s.NEAREST_MIPMAP_NEAREST,[mr]:s.NEAREST_MIPMAP_LINEAR,[Gt]:s.LINEAR,[_o]:s.LINEAR_MIPMAP_NEAREST,[Yn]:s.LINEAR_MIPMAP_LINEAR},be={[Lu]:s.NEVER,[Bu]:s.ALWAYS,[Nu]:s.LESS,[hh]:s.LEQUAL,[Fu]:s.EQUAL,[Ou]:s.GEQUAL,[Uu]:s.GREATER,[ku]:s.NOTEQUAL};function Ue(C,w){if(w.type===hn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Gt||w.magFilter===_o||w.magFilter===mr||w.magFilter===Yn||w.minFilter===Gt||w.minFilter===_o||w.minFilter===mr||w.minFilter===Yn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,ce[w.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,ce[w.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,ce[w.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,ue[w.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,ue[w.minFilter]),w.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,be[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===rn||w.minFilter!==mr&&w.minFilter!==Yn||w.type===hn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function je(C,w){let W=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",S));const G=w.source;let ie=u.get(G);ie===void 0&&(ie={},u.set(G,ie));const J=O(w);if(J!==C.__cacheKey){ie[J]===void 0&&(ie[J]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ie[J].usedTimes++;const De=ie[C.__cacheKey];De!==void 0&&(ie[C.__cacheKey].usedTimes--,De.usedTimes===0&&v(w)),C.__cacheKey=J,C.__webglTexture=ie[J].texture}return W}function K(C,w,W){let G=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(G=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(G=s.TEXTURE_3D);const ie=je(C,w),J=w.source;t.bindTexture(G,C.__webglTexture,s.TEXTURE0+W);const De=n.get(J);if(J.version!==De.__version||ie===!0){t.activeTexture(s.TEXTURE0+W);const ve=it.getPrimaries(it.workingColorSpace),me=w.colorSpace===fi?null:it.getPrimaries(w.colorSpace),Ze=w.colorSpace===fi||ve===me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let le=g(w.image,!1,i.maxTextureSize);le=ct(w,le);const we=r.convert(w.format,w.colorSpace),he=r.convert(w.type);let He=A(w.internalFormat,we,he,w.colorSpace,w.isVideoTexture);Ue(G,w);let Ee;const Je=w.mipmaps,ne=w.isVideoTexture!==!0,ht=De.__version===void 0||ie===!0,U=J.dataReady,ge=I(w,le);if(w.isDepthTexture)He=b(w.format===Vs,w.type),ht&&(ne?t.texStorage2D(s.TEXTURE_2D,1,He,le.width,le.height):t.texImage2D(s.TEXTURE_2D,0,He,le.width,le.height,0,we,he,null));else if(w.isDataTexture)if(Je.length>0){ne&&ht&&t.texStorage2D(s.TEXTURE_2D,ge,He,Je[0].width,Je[0].height);for(let Y=0,te=Je.length;Y<te;Y++)Ee=Je[Y],ne?U&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,Ee.width,Ee.height,we,he,Ee.data):t.texImage2D(s.TEXTURE_2D,Y,He,Ee.width,Ee.height,0,we,he,Ee.data);w.generateMipmaps=!1}else ne?(ht&&t.texStorage2D(s.TEXTURE_2D,ge,He,le.width,le.height),U&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,le.width,le.height,we,he,le.data)):t.texImage2D(s.TEXTURE_2D,0,He,le.width,le.height,0,we,he,le.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ne&&ht&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ge,He,Je[0].width,Je[0].height,le.depth);for(let Y=0,te=Je.length;Y<te;Y++)if(Ee=Je[Y],w.format!==Cn)if(we!==null)if(ne){if(U)if(w.layerUpdates.size>0){const ye=rd(Ee.width,Ee.height,w.format,w.type);for(const _e of w.layerUpdates){const We=Ee.data.subarray(_e*ye/Ee.data.BYTES_PER_ELEMENT,(_e+1)*ye/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,_e,Ee.width,Ee.height,1,we,We)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,Ee.width,Ee.height,le.depth,we,Ee.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,He,Ee.width,Ee.height,le.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?U&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,Ee.width,Ee.height,le.depth,we,he,Ee.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Y,He,Ee.width,Ee.height,le.depth,0,we,he,Ee.data)}else{ne&&ht&&t.texStorage2D(s.TEXTURE_2D,ge,He,Je[0].width,Je[0].height);for(let Y=0,te=Je.length;Y<te;Y++)Ee=Je[Y],w.format!==Cn?we!==null?ne?U&&t.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,Ee.width,Ee.height,we,Ee.data):t.compressedTexImage2D(s.TEXTURE_2D,Y,He,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?U&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,Ee.width,Ee.height,we,he,Ee.data):t.texImage2D(s.TEXTURE_2D,Y,He,Ee.width,Ee.height,0,we,he,Ee.data)}else if(w.isDataArrayTexture)if(ne){if(ht&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ge,He,le.width,le.height,le.depth),U)if(w.layerUpdates.size>0){const Y=rd(le.width,le.height,w.format,w.type);for(const te of w.layerUpdates){const ye=le.data.subarray(te*Y/le.data.BYTES_PER_ELEMENT,(te+1)*Y/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,te,le.width,le.height,1,we,he,ye)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,we,he,le.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,He,le.width,le.height,le.depth,0,we,he,le.data);else if(w.isData3DTexture)ne?(ht&&t.texStorage3D(s.TEXTURE_3D,ge,He,le.width,le.height,le.depth),U&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,we,he,le.data)):t.texImage3D(s.TEXTURE_3D,0,He,le.width,le.height,le.depth,0,we,he,le.data);else if(w.isFramebufferTexture){if(ht)if(ne)t.texStorage2D(s.TEXTURE_2D,ge,He,le.width,le.height);else{let Y=le.width,te=le.height;for(let ye=0;ye<ge;ye++)t.texImage2D(s.TEXTURE_2D,ye,He,Y,te,0,we,he,null),Y>>=1,te>>=1}}else if(Je.length>0){if(ne&&ht){const Y=Z(Je[0]);t.texStorage2D(s.TEXTURE_2D,ge,He,Y.width,Y.height)}for(let Y=0,te=Je.length;Y<te;Y++)Ee=Je[Y],ne?U&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,we,he,Ee):t.texImage2D(s.TEXTURE_2D,Y,He,we,he,Ee);w.generateMipmaps=!1}else if(ne){if(ht){const Y=Z(le);t.texStorage2D(s.TEXTURE_2D,ge,He,Y.width,Y.height)}U&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,we,he,le)}else t.texImage2D(s.TEXTURE_2D,0,He,we,he,le);f(w)&&p(G),De.__version=J.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function ae(C,w,W){if(w.image.length!==6)return;const G=je(C,w),ie=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+W);const J=n.get(ie);if(ie.version!==J.__version||G===!0){t.activeTexture(s.TEXTURE0+W);const De=it.getPrimaries(it.workingColorSpace),ve=w.colorSpace===fi?null:it.getPrimaries(w.colorSpace),me=w.colorSpace===fi||De===ve?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ze=w.isCompressedTexture||w.image[0].isCompressedTexture,le=w.image[0]&&w.image[0].isDataTexture,we=[];for(let te=0;te<6;te++)!Ze&&!le?we[te]=g(w.image[te],!0,i.maxCubemapSize):we[te]=le?w.image[te].image:w.image[te],we[te]=ct(w,we[te]);const he=we[0],He=r.convert(w.format,w.colorSpace),Ee=r.convert(w.type),Je=A(w.internalFormat,He,Ee,w.colorSpace),ne=w.isVideoTexture!==!0,ht=J.__version===void 0||G===!0,U=ie.dataReady;let ge=I(w,he);Ue(s.TEXTURE_CUBE_MAP,w);let Y;if(Ze){ne&&ht&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ge,Je,he.width,he.height);for(let te=0;te<6;te++){Y=we[te].mipmaps;for(let ye=0;ye<Y.length;ye++){const _e=Y[ye];w.format!==Cn?He!==null?ne?U&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,ye,0,0,_e.width,_e.height,He,_e.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,ye,Je,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,ye,0,0,_e.width,_e.height,He,Ee,_e.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,ye,Je,_e.width,_e.height,0,He,Ee,_e.data)}}}else{if(Y=w.mipmaps,ne&&ht){Y.length>0&&ge++;const te=Z(we[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ge,Je,te.width,te.height)}for(let te=0;te<6;te++)if(le){ne?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,we[te].width,we[te].height,He,Ee,we[te].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Je,we[te].width,we[te].height,0,He,Ee,we[te].data);for(let ye=0;ye<Y.length;ye++){const We=Y[ye].image[te].image;ne?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,ye+1,0,0,We.width,We.height,He,Ee,We.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,ye+1,Je,We.width,We.height,0,He,Ee,We.data)}}else{ne?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,He,Ee,we[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Je,He,Ee,we[te]);for(let ye=0;ye<Y.length;ye++){const _e=Y[ye];ne?U&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,ye+1,0,0,He,Ee,_e.image[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,ye+1,Je,He,Ee,_e.image[te])}}}f(w)&&p(s.TEXTURE_CUBE_MAP),J.__version=ie.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function Re(C,w,W,G,ie,J){const De=r.convert(W.format,W.colorSpace),ve=r.convert(W.type),me=A(W.internalFormat,De,ve,W.colorSpace),Ze=n.get(w),le=n.get(W);if(le.__renderTarget=w,!Ze.__hasExternalTextures){const we=Math.max(1,w.width>>J),he=Math.max(1,w.height>>J);ie===s.TEXTURE_3D||ie===s.TEXTURE_2D_ARRAY?t.texImage3D(ie,J,me,we,he,w.depth,0,De,ve,null):t.texImage2D(ie,J,me,we,he,0,De,ve,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),re(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,G,ie,le.__webglTexture,0,B(w)):(ie===s.TEXTURE_2D||ie>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,G,ie,le.__webglTexture,J),t.bindFramebuffer(s.FRAMEBUFFER,null)}function pe(C,w,W){if(s.bindRenderbuffer(s.RENDERBUFFER,C),w.depthBuffer){const G=w.depthTexture,ie=G&&G.isDepthTexture?G.type:null,J=b(w.stencilBuffer,ie),De=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=B(w);re(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ve,J,w.width,w.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,ve,J,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,J,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,De,s.RENDERBUFFER,C)}else{const G=w.textures;for(let ie=0;ie<G.length;ie++){const J=G[ie],De=r.convert(J.format,J.colorSpace),ve=r.convert(J.type),me=A(J.internalFormat,De,ve,J.colorSpace),Ze=B(w);W&&re(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ze,me,w.width,w.height):re(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ze,me,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,me,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ne(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=n.get(w.depthTexture);G.__renderTarget=w,(!G.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),X(w.depthTexture,0);const ie=G.__webglTexture,J=B(w);if(w.depthTexture.format===Ns)re(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ie,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ie,0);else if(w.depthTexture.format===Vs)re(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ie,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Ke(C){const w=n.get(C),W=C.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==C.depthTexture){const G=C.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),G){const ie=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,G.removeEventListener("dispose",ie)};G.addEventListener("dispose",ie),w.__depthDisposeCallback=ie}w.__boundDepthTexture=G}if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Ne(w.__webglFramebuffer,C)}else if(W){w.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[G]),w.__webglDepthbuffer[G]===void 0)w.__webglDepthbuffer[G]=s.createRenderbuffer(),pe(w.__webglDepthbuffer[G],C,!1);else{const ie=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=w.__webglDepthbuffer[G];s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,ie,s.RENDERBUFFER,J)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),pe(w.__webglDepthbuffer,C,!1);else{const G=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ie=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ie),s.framebufferRenderbuffer(s.FRAMEBUFFER,G,s.RENDERBUFFER,ie)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Pe(C,w,W){const G=n.get(C);w!==void 0&&Re(G.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),W!==void 0&&Ke(C)}function bt(C){const w=C.texture,W=n.get(C),G=n.get(w);C.addEventListener("dispose",y);const ie=C.textures,J=C.isWebGLCubeRenderTarget===!0,De=ie.length>1;if(De||(G.__webglTexture===void 0&&(G.__webglTexture=s.createTexture()),G.__version=w.version,o.memory.textures++),J){W.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(w.mipmaps&&w.mipmaps.length>0){W.__webglFramebuffer[ve]=[];for(let me=0;me<w.mipmaps.length;me++)W.__webglFramebuffer[ve][me]=s.createFramebuffer()}else W.__webglFramebuffer[ve]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){W.__webglFramebuffer=[];for(let ve=0;ve<w.mipmaps.length;ve++)W.__webglFramebuffer[ve]=s.createFramebuffer()}else W.__webglFramebuffer=s.createFramebuffer();if(De)for(let ve=0,me=ie.length;ve<me;ve++){const Ze=n.get(ie[ve]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&re(C)===!1){W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ve=0;ve<ie.length;ve++){const me=ie[ve];W.__webglColorRenderbuffer[ve]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,W.__webglColorRenderbuffer[ve]);const Ze=r.convert(me.format,me.colorSpace),le=r.convert(me.type),we=A(me.internalFormat,Ze,le,me.colorSpace,C.isXRRenderTarget===!0),he=B(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,he,we,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,W.__webglColorRenderbuffer[ve])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),pe(W.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture),Ue(s.TEXTURE_CUBE_MAP,w);for(let ve=0;ve<6;ve++)if(w.mipmaps&&w.mipmaps.length>0)for(let me=0;me<w.mipmaps.length;me++)Re(W.__webglFramebuffer[ve][me],C,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,me);else Re(W.__webglFramebuffer[ve],C,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);f(w)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let ve=0,me=ie.length;ve<me;ve++){const Ze=ie[ve],le=n.get(Ze);t.bindTexture(s.TEXTURE_2D,le.__webglTexture),Ue(s.TEXTURE_2D,Ze),Re(W.__webglFramebuffer,C,Ze,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,0),f(Ze)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let ve=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ve=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ve,G.__webglTexture),Ue(ve,w),w.mipmaps&&w.mipmaps.length>0)for(let me=0;me<w.mipmaps.length;me++)Re(W.__webglFramebuffer[me],C,w,s.COLOR_ATTACHMENT0,ve,me);else Re(W.__webglFramebuffer,C,w,s.COLOR_ATTACHMENT0,ve,0);f(w)&&p(ve),t.unbindTexture()}C.depthBuffer&&Ke(C)}function pt(C){const w=C.textures;for(let W=0,G=w.length;W<G;W++){const ie=w[W];if(f(ie)){const J=M(C),De=n.get(ie).__webglTexture;t.bindTexture(J,De),p(J),t.unbindTexture()}}}const Ve=[],D=[];function Et(C){if(C.samples>0){if(re(C)===!1){const w=C.textures,W=C.width,G=C.height;let ie=s.COLOR_BUFFER_BIT;const J=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,De=n.get(C),ve=w.length>1;if(ve)for(let me=0;me<w.length;me++)t.bindFramebuffer(s.FRAMEBUFFER,De.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,De.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let me=0;me<w.length;me++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ie|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ie|=s.STENCIL_BUFFER_BIT)),ve){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,De.__webglColorRenderbuffer[me]);const Ze=n.get(w[me]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ze,0)}s.blitFramebuffer(0,0,W,G,0,0,W,G,ie,s.NEAREST),l===!0&&(Ve.length=0,D.length=0,Ve.push(s.COLOR_ATTACHMENT0+me),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ve.push(J),D.push(J),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,D)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ve))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ve)for(let me=0;me<w.length;me++){t.bindFramebuffer(s.FRAMEBUFFER,De.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,De.__webglColorRenderbuffer[me]);const Ze=n.get(w[me]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,De.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,Ze,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const w=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function B(C){return Math.min(i.maxSamples,C.samples)}function re(C){const w=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Te(C){const w=o.render.frame;d.get(C)!==w&&(d.set(C,w),C.update())}function ct(C,w){const W=C.colorSpace,G=C.format,ie=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||W!==Zt&&W!==fi&&(it.getTransfer(W)===_t?(G!==Cn||ie!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),w}function Z(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=N,this.setTexture2D=X,this.setTexture2DArray=H,this.setTexture3D=Q,this.setTextureCube=q,this.rebindTextures=Pe,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=re}function Q_(s,e){function t(n,i=fi){let r;const o=it.getTransfer(i);if(n===xi)return s.UNSIGNED_BYTE;if(n===Bl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===zl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===eh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Jd)return s.BYTE;if(n===Qd)return s.SHORT;if(n===wr)return s.UNSIGNED_SHORT;if(n===Ol)return s.INT;if(n===ns)return s.UNSIGNED_INT;if(n===hn)return s.FLOAT;if(n===Kn)return s.HALF_FLOAT;if(n===th)return s.ALPHA;if(n===nh)return s.RGB;if(n===Cn)return s.RGBA;if(n===ih)return s.LUMINANCE;if(n===sh)return s.LUMINANCE_ALPHA;if(n===Ns)return s.DEPTH_COMPONENT;if(n===Vs)return s.DEPTH_STENCIL;if(n===Hl)return s.RED;if(n===Vl)return s.RED_INTEGER;if(n===rh)return s.RG;if(n===Gl)return s.RG_INTEGER;if(n===Wl)return s.RGBA_INTEGER;if(n===xo||n===vo||n===yo||n===bo)if(o===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===xo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===xo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===vo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===yo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ja||n===Qa||n===el||n===tl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ja)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===el)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===tl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===nl||n===il||n===sl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===nl||n===il)return o===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===sl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===rl||n===ol||n===al||n===ll||n===cl||n===dl||n===hl||n===ul||n===fl||n===pl||n===ml||n===gl||n===_l||n===xl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===rl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ol)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===al)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ll)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===cl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===dl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ul)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ml)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===gl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_l)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===So||n===vl||n===yl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===So)return o===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===oh||n===bl||n===Sl||n===Ml)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===So)return r.COMPRESSED_RED_RGTC1_EXT;if(n===bl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Sl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ml)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const ex=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tx=`
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

}`;class nx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Bt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new jn({vertexShader:ex,fragmentShader:tx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ke(new is(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ix extends Oi{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,u=null,m=null,_=null;const g=new nx,f=t.getContextAttributes();let p=null,M=null;const A=[],b=[],I=new Ie;let S=null;const y=new Yt;y.viewport=new lt;const T=new Yt;T.viewport=new lt;const v=[y,T],x=new cp;let R=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ae=A[K];return ae===void 0&&(ae=new ua,A[K]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(K){let ae=A[K];return ae===void 0&&(ae=new ua,A[K]=ae),ae.getGripSpace()},this.getHand=function(K){let ae=A[K];return ae===void 0&&(ae=new ua,A[K]=ae),ae.getHandSpace()};function F(K){const ae=b.indexOf(K.inputSource);if(ae===-1)return;const Re=A[ae];Re!==void 0&&(Re.update(K.inputSource,K.frame,c||o),Re.dispatchEvent({type:K.type,data:K.inputSource}))}function O(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",X);for(let K=0;K<A.length;K++){const ae=b[K];ae!==null&&(b[K]=null,A[K].disconnect(ae))}R=null,N=null,g.reset(),e.setRenderTarget(p),m=null,u=null,h=null,i=null,M=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",O),i.addEventListener("inputsourceschange",X),f.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,pe=null,Ne=null;f.depth&&(Ne=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Re=f.stencil?Vs:Ns,pe=f.stencil?Hs:ns);const Ke={colorFormat:t.RGBA8,depthFormat:Ne,scaleFactor:r};h=new XRWebGLBinding(i,t),u=h.createProjectionLayer(Ke),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new ki(u.textureWidth,u.textureHeight,{format:Cn,type:xi,depthTexture:new Ah(u.textureWidth,u.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const Re={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,Re),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new ki(m.framebufferWidth,m.framebufferHeight,{format:Cn,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),je.setContext(i),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function X(K){for(let ae=0;ae<K.removed.length;ae++){const Re=K.removed[ae],pe=b.indexOf(Re);pe>=0&&(b[pe]=null,A[pe].disconnect(Re))}for(let ae=0;ae<K.added.length;ae++){const Re=K.added[ae];let pe=b.indexOf(Re);if(pe===-1){for(let Ke=0;Ke<A.length;Ke++)if(Ke>=b.length){b.push(Re),pe=Ke;break}else if(b[Ke]===null){b[Ke]=Re,pe=Ke;break}if(pe===-1)break}const Ne=A[pe];Ne&&Ne.connect(Re)}}const H=new L,Q=new L;function q(K,ae,Re){H.setFromMatrixPosition(ae.matrixWorld),Q.setFromMatrixPosition(Re.matrixWorld);const pe=H.distanceTo(Q),Ne=ae.projectionMatrix.elements,Ke=Re.projectionMatrix.elements,Pe=Ne[14]/(Ne[10]-1),bt=Ne[14]/(Ne[10]+1),pt=(Ne[9]+1)/Ne[5],Ve=(Ne[9]-1)/Ne[5],D=(Ne[8]-1)/Ne[0],Et=(Ke[8]+1)/Ke[0],B=Pe*D,re=Pe*Et,Te=pe/(-D+Et),ct=Te*-D;if(ae.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ct),K.translateZ(Te),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ne[10]===-1)K.projectionMatrix.copy(ae.projectionMatrix),K.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const Z=Pe+Te,C=bt+Te,w=B-ct,W=re+(pe-ct),G=pt*bt/C*Z,ie=Ve*bt/C*Z;K.projectionMatrix.makePerspective(w,W,G,ie,Z,C),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ce(K,ae){ae===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ae.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let ae=K.near,Re=K.far;g.texture!==null&&(g.depthNear>0&&(ae=g.depthNear),g.depthFar>0&&(Re=g.depthFar)),x.near=T.near=y.near=ae,x.far=T.far=y.far=Re,(R!==x.near||N!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,N=x.far),y.layers.mask=K.layers.mask|2,T.layers.mask=K.layers.mask|4,x.layers.mask=y.layers.mask|T.layers.mask;const pe=K.parent,Ne=x.cameras;ce(x,pe);for(let Ke=0;Ke<Ne.length;Ke++)ce(Ne[Ke],pe);Ne.length===2?q(x,y,T):x.projectionMatrix.copy(y.projectionMatrix),ue(K,x,pe)};function ue(K,ae,Re){Re===null?K.matrix.copy(ae.matrixWorld):(K.matrix.copy(Re.matrixWorld),K.matrix.invert(),K.matrix.multiply(ae.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ae.projectionMatrix),K.projectionMatrixInverse.copy(ae.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Gs*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(x)};let be=null;function Ue(K,ae){if(d=ae.getViewerPose(c||o),_=ae,d!==null){const Re=d.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let pe=!1;Re.length!==x.cameras.length&&(x.cameras.length=0,pe=!0);for(let Pe=0;Pe<Re.length;Pe++){const bt=Re[Pe];let pt=null;if(m!==null)pt=m.getViewport(bt);else{const D=h.getViewSubImage(u,bt);pt=D.viewport,Pe===0&&(e.setRenderTargetTextures(M,D.colorTexture,u.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(M))}let Ve=v[Pe];Ve===void 0&&(Ve=new Yt,Ve.layers.enable(Pe),Ve.viewport=new lt,v[Pe]=Ve),Ve.matrix.fromArray(bt.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(bt.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(pt.x,pt.y,pt.width,pt.height),Pe===0&&(x.matrix.copy(Ve.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),pe===!0&&x.cameras.push(Ve)}const Ne=i.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&h){const Pe=h.getDepthInformation(Re[0]);Pe&&Pe.isValid&&Pe.texture&&g.init(e,Pe,i.renderState)}}for(let Re=0;Re<A.length;Re++){const pe=b[Re],Ne=A[Re];pe!==null&&Ne!==void 0&&Ne.update(pe,ae,c||o)}be&&be(K,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),_=null}const je=new Nh;je.setAnimationLoop(Ue),this.setAnimationLoop=function(K){be=K},this.dispose=function(){}}}const $i=new ei,sx=new Xe;function rx(s,e){function t(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,xh(s)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function i(f,p,M,A,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(f,p):p.isMeshToonMaterial?(r(f,p),h(f,p)):p.isMeshPhongMaterial?(r(f,p),d(f,p)):p.isMeshStandardMaterial?(r(f,p),u(f,p),p.isMeshPhysicalMaterial&&m(f,p,b)):p.isMeshMatcapMaterial?(r(f,p),_(f,p)):p.isMeshDepthMaterial?r(f,p):p.isMeshDistanceMaterial?(r(f,p),g(f,p)):p.isMeshNormalMaterial?r(f,p):p.isLineBasicMaterial?(o(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?l(f,p,M,A):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,t(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Kt&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,t(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Kt&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,t(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,t(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const M=e.get(p),A=M.envMap,b=M.envMapRotation;A&&(f.envMap.value=A,$i.copy(b),$i.x*=-1,$i.y*=-1,$i.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),f.envMapRotation.value.setFromMatrix4(sx.makeRotationFromEuler($i)),f.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,f.aoMapTransform))}function o(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform))}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,M,A){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*M,f.scale.value=A*.5,p.map&&(f.map.value=p.map,t(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function d(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function h(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function u(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,M){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Kt&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=M.texture,f.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,p){p.matcap&&(f.matcap.value=p.matcap)}function g(f,p){const M=e.get(p).light;f.referencePosition.value.setFromMatrixPosition(M.matrixWorld),f.nearDistance.value=M.shadow.camera.near,f.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ox(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,A){const b=A.program;n.uniformBlockBinding(M,b)}function c(M,A){let b=i[M.id];b===void 0&&(_(M),b=d(M),i[M.id]=b,M.addEventListener("dispose",f));const I=A.program;n.updateUBOMapping(M,I);const S=e.render.frame;r[M.id]!==S&&(u(M),r[M.id]=S)}function d(M){const A=h();M.__bindingPointIndex=A;const b=s.createBuffer(),I=M.__size,S=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,I,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,A,b),b}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const A=i[M.id],b=M.uniforms,I=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,A);for(let S=0,y=b.length;S<y;S++){const T=Array.isArray(b[S])?b[S]:[b[S]];for(let v=0,x=T.length;v<x;v++){const R=T[v];if(m(R,S,v,I)===!0){const N=R.__offset,F=Array.isArray(R.value)?R.value:[R.value];let O=0;for(let X=0;X<F.length;X++){const H=F[X],Q=g(H);typeof H=="number"||typeof H=="boolean"?(R.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,N+O,R.__data)):H.isMatrix3?(R.__data[0]=H.elements[0],R.__data[1]=H.elements[1],R.__data[2]=H.elements[2],R.__data[3]=0,R.__data[4]=H.elements[3],R.__data[5]=H.elements[4],R.__data[6]=H.elements[5],R.__data[7]=0,R.__data[8]=H.elements[6],R.__data[9]=H.elements[7],R.__data[10]=H.elements[8],R.__data[11]=0):(H.toArray(R.__data,O),O+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(M,A,b,I){const S=M.value,y=A+"_"+b;if(I[y]===void 0)return typeof S=="number"||typeof S=="boolean"?I[y]=S:I[y]=S.clone(),!0;{const T=I[y];if(typeof S=="number"||typeof S=="boolean"){if(T!==S)return I[y]=S,!0}else if(T.equals(S)===!1)return T.copy(S),!0}return!1}function _(M){const A=M.uniforms;let b=0;const I=16;for(let y=0,T=A.length;y<T;y++){const v=Array.isArray(A[y])?A[y]:[A[y]];for(let x=0,R=v.length;x<R;x++){const N=v[x],F=Array.isArray(N.value)?N.value:[N.value];for(let O=0,X=F.length;O<X;O++){const H=F[O],Q=g(H),q=b%I,ce=q%Q.boundary,ue=q+ce;b+=ce,ue!==0&&I-ue<Q.storage&&(b+=I-ue),N.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=b,b+=Q.storage}}}const S=b%I;return S>0&&(b+=I-S),M.__size=b,M.__cache={},this}function g(M){const A={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(A.boundary=4,A.storage=4):M.isVector2?(A.boundary=8,A.storage=8):M.isVector3||M.isColor?(A.boundary=16,A.storage=12):M.isVector4?(A.boundary=16,A.storage=16):M.isMatrix3?(A.boundary=48,A.storage=48):M.isMatrix4?(A.boundary=64,A.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),A}function f(M){const A=M.target;A.removeEventListener("dispose",f);const b=o.indexOf(A.__bindingPointIndex);o.splice(b,1),s.deleteBuffer(i[A.id]),delete i[A.id],delete r[A.id]}function p(){for(const M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class ax{constructor(e={}){const{canvas:t=nf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const _=new Uint32Array(4),g=new Int32Array(4);let f=null,p=null;const M=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rt,this.toneMapping=Fi,this.toneMappingExposure=1;const b=this;let I=!1,S=0,y=0,T=null,v=-1,x=null;const R=new lt,N=new lt;let F=null;const O=new Le(0);let X=0,H=t.width,Q=t.height,q=1,ce=null,ue=null;const be=new lt(0,0,H,Q),Ue=new lt(0,0,H,Q);let je=!1;const K=new Zl;let ae=!1,Re=!1;this.transmissionResolutionScale=1;const pe=new Xe,Ne=new Xe,Ke=new L,Pe=new lt,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function Ve(){return T===null?q:1}let D=n;function Et(E,k){return t.getContext(E,k)}try{const E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${kl}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",_e,!1),D===null){const k="webgl2";if(D=Et(k,E),D===null)throw Et(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let B,re,Te,ct,Z,C,w,W,G,ie,J,De,ve,me,Ze,le,we,he,He,Ee,Je,ne,ht,U;function ge(){B=new _0(D),B.init(),ne=new Q_(D,B),re=new d0(D,B,e,ne),Te=new Z_(D,B),re.reverseDepthBuffer&&u&&Te.buffers.depth.setReversed(!0),ct=new y0(D),Z=new O_,C=new J_(D,B,Te,Z,re,ne,ct),w=new u0(b),W=new g0(b),G=new Tp(D),ht=new l0(D,G),ie=new x0(D,G,ct,ht),J=new S0(D,ie,G,ct),He=new b0(D,re,C),le=new h0(Z),De=new k_(b,w,W,B,re,ht,le),ve=new rx(b,Z),me=new z_,Ze=new X_(B),he=new a0(b,w,W,Te,J,m,l),we=new Y_(b,J,re),U=new ox(D,ct,re,Te),Ee=new c0(D,B,ct),Je=new v0(D,B,ct),ct.programs=De.programs,b.capabilities=re,b.extensions=B,b.properties=Z,b.renderLists=me,b.shadowMap=we,b.state=Te,b.info=ct}ge();const Y=new ix(b,D);this.xr=Y,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=B.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=B.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(E){E!==void 0&&(q=E,this.setSize(H,Q,!1))},this.getSize=function(E){return E.set(H,Q)},this.setSize=function(E,k,j=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=E,Q=k,t.width=Math.floor(E*q),t.height=Math.floor(k*q),j===!0&&(t.style.width=E+"px",t.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(H*q,Q*q).floor()},this.setDrawingBufferSize=function(E,k,j){H=E,Q=k,q=j,t.width=Math.floor(E*j),t.height=Math.floor(k*j),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(R)},this.getViewport=function(E){return E.copy(be)},this.setViewport=function(E,k,j,$){E.isVector4?be.set(E.x,E.y,E.z,E.w):be.set(E,k,j,$),Te.viewport(R.copy(be).multiplyScalar(q).round())},this.getScissor=function(E){return E.copy(Ue)},this.setScissor=function(E,k,j,$){E.isVector4?Ue.set(E.x,E.y,E.z,E.w):Ue.set(E,k,j,$),Te.scissor(N.copy(Ue).multiplyScalar(q).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(E){Te.setScissorTest(je=E)},this.setOpaqueSort=function(E){ce=E},this.setTransparentSort=function(E){ue=E},this.getClearColor=function(E){return E.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor(...arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha(...arguments)},this.clear=function(E=!0,k=!0,j=!0){let $=0;if(E){let z=!1;if(T!==null){const se=T.texture.format;z=se===Wl||se===Gl||se===Vl}if(z){const se=T.texture.type,fe=se===xi||se===ns||se===wr||se===Hs||se===Bl||se===zl,Me=he.getClearColor(),de=he.getClearAlpha(),Oe=Me.r,Ge=Me.g,Ae=Me.b;fe?(_[0]=Oe,_[1]=Ge,_[2]=Ae,_[3]=de,D.clearBufferuiv(D.COLOR,0,_)):(g[0]=Oe,g[1]=Ge,g[2]=Ae,g[3]=de,D.clearBufferiv(D.COLOR,0,g))}else $|=D.COLOR_BUFFER_BIT}k&&($|=D.DEPTH_BUFFER_BIT),j&&($|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),he.dispose(),me.dispose(),Ze.dispose(),Z.dispose(),w.dispose(),W.dispose(),J.dispose(),ht.dispose(),U.dispose(),De.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Fr),Y.removeEventListener("sessionend",et),ii.stop()};function te(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const E=ct.autoReset,k=we.enabled,j=we.autoUpdate,$=we.needsUpdate,z=we.type;ge(),ct.autoReset=E,we.enabled=k,we.autoUpdate=j,we.needsUpdate=$,we.type=z}function _e(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function We(E){const k=E.target;k.removeEventListener("dispose",We),vt(k)}function vt(E){It(E),Z.remove(E)}function It(E){const k=Z.get(E).programs;k!==void 0&&(k.forEach(function(j){De.releaseProgram(j)}),E.isShaderMaterial&&De.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,j,$,z,se){k===null&&(k=bt);const fe=z.isMesh&&z.matrixWorld.determinant()<0,Me=ot(E,k,j,$,z);Te.setMaterial($,fe);let de=j.index,Oe=1;if($.wireframe===!0){if(de=ie.getWireframeAttribute(j),de===void 0)return;Oe=2}const Ge=j.drawRange,Ae=j.attributes.position;let tt=Ge.start*Oe,at=(Ge.start+Ge.count)*Oe;se!==null&&(tt=Math.max(tt,se.start*Oe),at=Math.min(at,(se.start+se.count)*Oe)),de!==null?(tt=Math.max(tt,0),at=Math.min(at,de.count)):Ae!=null&&(tt=Math.max(tt,0),at=Math.min(at,Ae.count));const Dt=at-tt;if(Dt<0||Dt===1/0)return;ht.setup(z,$,Me,j,de);let At,dt=Ee;if(de!==null&&(At=G.get(de),dt=Je,dt.setIndex(At)),z.isMesh)$.wireframe===!0?(Te.setLineWidth($.wireframeLinewidth*Ve()),dt.setMode(D.LINES)):dt.setMode(D.TRIANGLES);else if(z.isLine){let Be=$.linewidth;Be===void 0&&(Be=1),Te.setLineWidth(Be*Ve()),z.isLineSegments?dt.setMode(D.LINES):z.isLineLoop?dt.setMode(D.LINE_LOOP):dt.setMode(D.LINE_STRIP)}else z.isPoints?dt.setMode(D.POINTS):z.isSprite&&dt.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Ki("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),dt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(B.get("WEBGL_multi_draw"))dt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Be=z._multiDrawStarts,Wt=z._multiDrawCounts,ut=z._multiDrawCount,Fn=de?G.get(de).bytesPerElement:1,as=Z.get($).currentProgram.getUniforms();for(let pn=0;pn<ut;pn++)as.setValue(D,"_gl_DrawID",pn),dt.render(Be[pn]/Fn,Wt[pn])}else if(z.isInstancedMesh)dt.renderInstances(tt,Dt,z.count);else if(j.isInstancedBufferGeometry){const Be=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Wt=Math.min(j.instanceCount,Be);dt.renderInstances(tt,Dt,Wt)}else dt.render(tt,Dt)};function Ce(E,k,j){E.transparent===!0&&E.side===Bn&&E.forceSinglePass===!1?(E.side=Kt,E.needsUpdate=!0,rt(E,k,j),E.side=_i,E.needsUpdate=!0,rt(E,k,j),E.side=Bn):rt(E,k,j)}this.compile=function(E,k,j=null){j===null&&(j=E),p=Ze.get(j),p.init(k),A.push(p),j.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),E!==j&&E.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const $=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const se=z.material;if(se)if(Array.isArray(se))for(let fe=0;fe<se.length;fe++){const Me=se[fe];Ce(Me,j,z),$.add(Me)}else Ce(se,j,z),$.add(se)}),p=A.pop(),$},this.compileAsync=function(E,k,j=null){const $=this.compile(E,k,j);return new Promise(z=>{function se(){if($.forEach(function(fe){Z.get(fe).currentProgram.isReady()&&$.delete(fe)}),$.size===0){z(E);return}setTimeout(se,10)}B.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Jt=null;function fn(E){Jt&&Jt(E)}function Fr(){ii.stop()}function et(){ii.start()}const ii=new Nh;ii.setAnimationLoop(fn),typeof self<"u"&&ii.setContext(self),this.setAnimationLoop=function(E){Jt=E,Y.setAnimationLoop(E),E===null?ii.stop():ii.start()},Y.addEventListener("sessionstart",Fr),Y.addEventListener("sessionend",et),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(k),k=Y.getCamera()),E.isScene===!0&&E.onBeforeRender(b,E,k,T),p=Ze.get(E,A.length),p.init(k),A.push(p),Ne.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),K.setFromProjectionMatrix(Ne),Re=this.localClippingEnabled,ae=le.init(this.clippingPlanes,Re),f=me.get(E,M.length),f.init(),M.push(f),Y.enabled===!0&&Y.isPresenting===!0){const se=b.xr.getDepthSensingMesh();se!==null&&zi(se,k,-1/0,b.sortObjects)}zi(E,k,0,b.sortObjects),f.finish(),b.sortObjects===!0&&f.sort(ce,ue),pt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,pt&&he.addToRenderList(f,E),this.info.render.frame++,ae===!0&&le.beginShadows();const j=p.state.shadowsArray;we.render(j,E,k),ae===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=f.opaque,z=f.transmissive;if(p.setupLights(),k.isArrayCamera){const se=k.cameras;if(z.length>0)for(let fe=0,Me=se.length;fe<Me;fe++){const de=se[fe];os($,z,E,de)}pt&&he.render(E);for(let fe=0,Me=se.length;fe<Me;fe++){const de=se[fe];rs(f,E,de,de.viewport)}}else z.length>0&&os($,z,E,k),pt&&he.render(E),rs(f,E,k);T!==null&&y===0&&(C.updateMultisampleRenderTarget(T),C.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(b,E,k),ht.resetDefaultState(),v=-1,x=null,A.pop(),A.length>0?(p=A[A.length-1],ae===!0&&le.setGlobalState(b.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?f=M[M.length-1]:f=null};function zi(E,k,j,$){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||K.intersectsSprite(E)){$&&Pe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ne);const fe=J.update(E),Me=E.material;Me.visible&&f.push(E,fe,Me,j,Pe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||K.intersectsObject(E))){const fe=J.update(E),Me=E.material;if($&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Pe.copy(E.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Pe.copy(fe.boundingSphere.center)),Pe.applyMatrix4(E.matrixWorld).applyMatrix4(Ne)),Array.isArray(Me)){const de=fe.groups;for(let Oe=0,Ge=de.length;Oe<Ge;Oe++){const Ae=de[Oe],tt=Me[Ae.materialIndex];tt&&tt.visible&&f.push(E,fe,tt,j,Pe.z,Ae)}}else Me.visible&&f.push(E,fe,Me,j,Pe.z,null)}}const se=E.children;for(let fe=0,Me=se.length;fe<Me;fe++)zi(se[fe],k,j,$)}function rs(E,k,j,$){const z=E.opaque,se=E.transmissive,fe=E.transparent;p.setupLightsView(j),ae===!0&&le.setGlobalState(b.clippingPlanes,j),$&&Te.viewport(R.copy($)),z.length>0&&V(z,k,j),se.length>0&&V(se,k,j),fe.length>0&&V(fe,k,j),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function os(E,k,j,$){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new ki(1,1,{generateMipmaps:!0,type:B.has("EXT_color_buffer_half_float")||B.has("EXT_color_buffer_float")?Kn:xi,minFilter:Yn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const se=p.state.transmissionRenderTarget[$.id],fe=$.viewport||R;se.setSize(fe.z*b.transmissionResolutionScale,fe.w*b.transmissionResolutionScale);const Me=b.getRenderTarget();b.setRenderTarget(se),b.getClearColor(O),X=b.getClearAlpha(),X<1&&b.setClearColor(16777215,.5),b.clear(),pt&&he.render(j);const de=b.toneMapping;b.toneMapping=Fi;const Oe=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),ae===!0&&le.setGlobalState(b.clippingPlanes,$),V(E,j,$),C.updateMultisampleRenderTarget(se),C.updateRenderTargetMipmap(se),B.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Ae=0,tt=k.length;Ae<tt;Ae++){const at=k[Ae],Dt=at.object,At=at.geometry,dt=at.material,Be=at.group;if(dt.side===Bn&&Dt.layers.test($.layers)){const Wt=dt.side;dt.side=Kt,dt.needsUpdate=!0,Se(Dt,j,$,At,dt,Be),dt.side=Wt,dt.needsUpdate=!0,Ge=!0}}Ge===!0&&(C.updateMultisampleRenderTarget(se),C.updateRenderTargetMipmap(se))}b.setRenderTarget(Me),b.setClearColor(O,X),Oe!==void 0&&($.viewport=Oe),b.toneMapping=de}function V(E,k,j){const $=k.isScene===!0?k.overrideMaterial:null;for(let z=0,se=E.length;z<se;z++){const fe=E[z],Me=fe.object,de=fe.geometry,Oe=$===null?fe.material:$,Ge=fe.group;Me.layers.test(j.layers)&&Se(Me,k,j,de,Oe,Ge)}}function Se(E,k,j,$,z,se){E.onBeforeRender(b,k,j,$,z,se),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(b,k,j,$,E,se),z.transparent===!0&&z.side===Bn&&z.forceSinglePass===!1?(z.side=Kt,z.needsUpdate=!0,b.renderBufferDirect(j,k,$,z,E,se),z.side=_i,z.needsUpdate=!0,b.renderBufferDirect(j,k,$,z,E,se),z.side=Bn):b.renderBufferDirect(j,k,$,z,E,se),E.onAfterRender(b,k,j,$,z,se)}function rt(E,k,j){k.isScene!==!0&&(k=bt);const $=Z.get(E),z=p.state.lights,se=p.state.shadowsArray,fe=z.state.version,Me=De.getParameters(E,z.state,se,k,j),de=De.getProgramCacheKey(Me);let Oe=$.programs;$.environment=E.isMeshStandardMaterial?k.environment:null,$.fog=k.fog,$.envMap=(E.isMeshStandardMaterial?W:w).get(E.envMap||$.environment),$.envMapRotation=$.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,Oe===void 0&&(E.addEventListener("dispose",We),Oe=new Map,$.programs=Oe);let Ge=Oe.get(de);if(Ge!==void 0){if($.currentProgram===Ge&&$.lightsStateVersion===fe)return yt(E,Me),Ge}else Me.uniforms=De.getUniforms(E),E.onBeforeCompile(Me,b),Ge=De.acquireProgram(Me,de),Oe.set(de,Ge),$.uniforms=Me.uniforms;const Ae=$.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ae.clippingPlanes=le.uniform),yt(E,Me),$.needsLights=Ln(E),$.lightsStateVersion=fe,$.needsLights&&(Ae.ambientLightColor.value=z.state.ambient,Ae.lightProbe.value=z.state.probe,Ae.directionalLights.value=z.state.directional,Ae.directionalLightShadows.value=z.state.directionalShadow,Ae.spotLights.value=z.state.spot,Ae.spotLightShadows.value=z.state.spotShadow,Ae.rectAreaLights.value=z.state.rectArea,Ae.ltc_1.value=z.state.rectAreaLTC1,Ae.ltc_2.value=z.state.rectAreaLTC2,Ae.pointLights.value=z.state.point,Ae.pointLightShadows.value=z.state.pointShadow,Ae.hemisphereLights.value=z.state.hemi,Ae.directionalShadowMap.value=z.state.directionalShadowMap,Ae.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ae.spotShadowMap.value=z.state.spotShadowMap,Ae.spotLightMatrix.value=z.state.spotLightMatrix,Ae.spotLightMap.value=z.state.spotLightMap,Ae.pointShadowMap.value=z.state.pointShadowMap,Ae.pointShadowMatrix.value=z.state.pointShadowMatrix),$.currentProgram=Ge,$.uniformsList=null,Ge}function Tt(E){if(E.uniformsList===null){const k=E.currentProgram.getUniforms();E.uniformsList=Mo.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function yt(E,k){const j=Z.get(E);j.outputColorSpace=k.outputColorSpace,j.batching=k.batching,j.batchingColor=k.batchingColor,j.instancing=k.instancing,j.instancingColor=k.instancingColor,j.instancingMorph=k.instancingMorph,j.skinning=k.skinning,j.morphTargets=k.morphTargets,j.morphNormals=k.morphNormals,j.morphColors=k.morphColors,j.morphTargetsCount=k.morphTargetsCount,j.numClippingPlanes=k.numClippingPlanes,j.numIntersection=k.numClipIntersection,j.vertexAlphas=k.vertexAlphas,j.vertexTangents=k.vertexTangents,j.toneMapping=k.toneMapping}function ot(E,k,j,$,z){k.isScene!==!0&&(k=bt),C.resetTextureUnits();const se=k.fog,fe=$.isMeshStandardMaterial?k.environment:null,Me=T===null?b.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Zt,de=($.isMeshStandardMaterial?W:w).get($.envMap||fe),Oe=$.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ge=!!j.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ae=!!j.morphAttributes.position,tt=!!j.morphAttributes.normal,at=!!j.morphAttributes.color;let Dt=Fi;$.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Dt=b.toneMapping);const At=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,dt=At!==void 0?At.length:0,Be=Z.get($),Wt=p.state.lights;if(ae===!0&&(Re===!0||E!==x)){const Qt=E===x&&$.id===v;le.setState($,E,Qt)}let ut=!1;$.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Wt.state.version||Be.outputColorSpace!==Me||z.isBatchedMesh&&Be.batching===!1||!z.isBatchedMesh&&Be.batching===!0||z.isBatchedMesh&&Be.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Be.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Be.instancing===!1||!z.isInstancedMesh&&Be.instancing===!0||z.isSkinnedMesh&&Be.skinning===!1||!z.isSkinnedMesh&&Be.skinning===!0||z.isInstancedMesh&&Be.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Be.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Be.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Be.instancingMorph===!1&&z.morphTexture!==null||Be.envMap!==de||$.fog===!0&&Be.fog!==se||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==le.numPlanes||Be.numIntersection!==le.numIntersection)||Be.vertexAlphas!==Oe||Be.vertexTangents!==Ge||Be.morphTargets!==Ae||Be.morphNormals!==tt||Be.morphColors!==at||Be.toneMapping!==Dt||Be.morphTargetsCount!==dt)&&(ut=!0):(ut=!0,Be.__version=$.version);let Fn=Be.currentProgram;ut===!0&&(Fn=rt($,k,z));let as=!1,pn=!1,tr=!1;const Mt=Fn.getUniforms(),bn=Be.uniforms;if(Te.useProgram(Fn.program)&&(as=!0,pn=!0,tr=!0),$.id!==v&&(v=$.id,pn=!0),as||x!==E){Te.buffers.depth.getReversed()?(pe.copy(E.projectionMatrix),rf(pe),of(pe),Mt.setValue(D,"projectionMatrix",pe)):Mt.setValue(D,"projectionMatrix",E.projectionMatrix),Mt.setValue(D,"viewMatrix",E.matrixWorldInverse);const an=Mt.map.cameraPosition;an!==void 0&&an.setValue(D,Ke.setFromMatrixPosition(E.matrixWorld)),re.logarithmicDepthBuffer&&Mt.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Mt.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),x!==E&&(x=E,pn=!0,tr=!0)}if(z.isSkinnedMesh){Mt.setOptional(D,z,"bindMatrix"),Mt.setOptional(D,z,"bindMatrixInverse");const Qt=z.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),Mt.setValue(D,"boneTexture",Qt.boneTexture,C))}z.isBatchedMesh&&(Mt.setOptional(D,z,"batchingTexture"),Mt.setValue(D,"batchingTexture",z._matricesTexture,C),Mt.setOptional(D,z,"batchingIdTexture"),Mt.setValue(D,"batchingIdTexture",z._indirectTexture,C),Mt.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&Mt.setValue(D,"batchingColorTexture",z._colorsTexture,C));const Sn=j.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&He.update(z,j,Fn),(pn||Be.receiveShadow!==z.receiveShadow)&&(Be.receiveShadow=z.receiveShadow,Mt.setValue(D,"receiveShadow",z.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(bn.envMap.value=de,bn.flipEnvMap.value=de.isCubeTexture&&de.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&k.environment!==null&&(bn.envMapIntensity.value=k.environmentIntensity),pn&&(Mt.setValue(D,"toneMappingExposure",b.toneMappingExposure),Be.needsLights&&St(bn,tr),se&&$.fog===!0&&ve.refreshFogUniforms(bn,se),ve.refreshMaterialUniforms(bn,$,q,Q,p.state.transmissionRenderTarget[E.id]),Mo.upload(D,Tt(Be),bn,C)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Mo.upload(D,Tt(Be),bn,C),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Mt.setValue(D,"center",z.center),Mt.setValue(D,"modelViewMatrix",z.modelViewMatrix),Mt.setValue(D,"normalMatrix",z.normalMatrix),Mt.setValue(D,"modelMatrix",z.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Qt=$.uniformsGroups;for(let an=0,jo=Qt.length;an<jo;an++){const Hi=Qt[an];U.update(Hi,Fn),U.bind(Hi,Fn)}}return Fn}function St(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function Ln(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,k,j){Z.get(E.texture).__webglTexture=k,Z.get(E.depthTexture).__webglTexture=j;const $=Z.get(E);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=j===void 0,$.__autoAllocateDepthBuffer||B.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,k){const j=Z.get(E);j.__webglFramebuffer=k,j.__useDefaultFramebuffer=k===void 0};const Nn=D.createFramebuffer();this.setRenderTarget=function(E,k=0,j=0){T=E,S=k,y=j;let $=!0,z=null,se=!1,fe=!1;if(E){const de=Z.get(E);if(de.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(D.FRAMEBUFFER,null),$=!1;else if(de.__webglFramebuffer===void 0)C.setupRenderTarget(E);else if(de.__hasExternalTextures)C.rebindTextures(E,Z.get(E.texture).__webglTexture,Z.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ae=E.depthTexture;if(de.__boundDepthTexture!==Ae){if(Ae!==null&&Z.has(Ae)&&(E.width!==Ae.image.width||E.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(E)}}const Oe=E.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(fe=!0);const Ge=Z.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ge[k])?z=Ge[k][j]:z=Ge[k],se=!0):E.samples>0&&C.useMultisampledRTT(E)===!1?z=Z.get(E).__webglMultisampledFramebuffer:Array.isArray(Ge)?z=Ge[j]:z=Ge,R.copy(E.viewport),N.copy(E.scissor),F=E.scissorTest}else R.copy(be).multiplyScalar(q).floor(),N.copy(Ue).multiplyScalar(q).floor(),F=je;if(j!==0&&(z=Nn),Te.bindFramebuffer(D.FRAMEBUFFER,z)&&$&&Te.drawBuffers(E,z),Te.viewport(R),Te.scissor(N),Te.setScissorTest(F),se){const de=Z.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,de.__webglTexture,j)}else if(fe){const de=Z.get(E.texture),Oe=k;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,de.__webglTexture,j,Oe)}else if(E!==null&&j!==0){const de=Z.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,de.__webglTexture,j)}v=-1},this.readRenderTargetPixels=function(E,k,j,$,z,se,fe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Z.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&fe!==void 0&&(Me=Me[fe]),Me){Te.bindFramebuffer(D.FRAMEBUFFER,Me);try{const de=E.texture,Oe=de.format,Ge=de.type;if(!re.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-$&&j>=0&&j<=E.height-z&&D.readPixels(k,j,$,z,ne.convert(Oe),ne.convert(Ge),se)}finally{const de=T!==null?Z.get(T).__webglFramebuffer:null;Te.bindFramebuffer(D.FRAMEBUFFER,de)}}},this.readRenderTargetPixelsAsync=async function(E,k,j,$,z,se,fe){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Z.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&fe!==void 0&&(Me=Me[fe]),Me){const de=E.texture,Oe=de.format,Ge=de.type;if(!re.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=E.width-$&&j>=0&&j<=E.height-z){Te.bindFramebuffer(D.FRAMEBUFFER,Me);const Ae=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ae),D.bufferData(D.PIXEL_PACK_BUFFER,se.byteLength,D.STREAM_READ),D.readPixels(k,j,$,z,ne.convert(Oe),ne.convert(Ge),0);const tt=T!==null?Z.get(T).__webglFramebuffer:null;Te.bindFramebuffer(D.FRAMEBUFFER,tt);const at=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await sf(D,at,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ae),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,se),D.deleteBuffer(Ae),D.deleteSync(at),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,k=null,j=0){E.isTexture!==!0&&(Ki("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,E=arguments[1]);const $=Math.pow(2,-j),z=Math.floor(E.image.width*$),se=Math.floor(E.image.height*$),fe=k!==null?k.x:0,Me=k!==null?k.y:0;C.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,j,0,0,fe,Me,z,se),Te.unbindTexture()};const yn=D.createFramebuffer(),Pt=D.createFramebuffer();this.copyTextureToTexture=function(E,k,j=null,$=null,z=0,se=null){E.isTexture!==!0&&(Ki("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,E=arguments[1],k=arguments[2],se=arguments[3]||0,j=null),se===null&&(z!==0?(Ki("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=z,z=0):se=0);let fe,Me,de,Oe,Ge,Ae,tt,at,Dt;const At=E.isCompressedTexture?E.mipmaps[se]:E.image;if(j!==null)fe=j.max.x-j.min.x,Me=j.max.y-j.min.y,de=j.isBox3?j.max.z-j.min.z:1,Oe=j.min.x,Ge=j.min.y,Ae=j.isBox3?j.min.z:0;else{const Sn=Math.pow(2,-z);fe=Math.floor(At.width*Sn),Me=Math.floor(At.height*Sn),E.isDataArrayTexture?de=At.depth:E.isData3DTexture?de=Math.floor(At.depth*Sn):de=1,Oe=0,Ge=0,Ae=0}$!==null?(tt=$.x,at=$.y,Dt=$.z):(tt=0,at=0,Dt=0);const dt=ne.convert(k.format),Be=ne.convert(k.type);let Wt;k.isData3DTexture?(C.setTexture3D(k,0),Wt=D.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(C.setTexture2DArray(k,0),Wt=D.TEXTURE_2D_ARRAY):(C.setTexture2D(k,0),Wt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const ut=D.getParameter(D.UNPACK_ROW_LENGTH),Fn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),as=D.getParameter(D.UNPACK_SKIP_PIXELS),pn=D.getParameter(D.UNPACK_SKIP_ROWS),tr=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,At.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,At.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Oe),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ge),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ae);const Mt=E.isDataArrayTexture||E.isData3DTexture,bn=k.isDataArrayTexture||k.isData3DTexture;if(E.isDepthTexture){const Sn=Z.get(E),Qt=Z.get(k),an=Z.get(Sn.__renderTarget),jo=Z.get(Qt.__renderTarget);Te.bindFramebuffer(D.READ_FRAMEBUFFER,an.__webglFramebuffer),Te.bindFramebuffer(D.DRAW_FRAMEBUFFER,jo.__webglFramebuffer);for(let Hi=0;Hi<de;Hi++)Mt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Z.get(E).__webglTexture,z,Ae+Hi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Z.get(k).__webglTexture,se,Dt+Hi)),D.blitFramebuffer(Oe,Ge,fe,Me,tt,at,fe,Me,D.DEPTH_BUFFER_BIT,D.NEAREST);Te.bindFramebuffer(D.READ_FRAMEBUFFER,null),Te.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(z!==0||E.isRenderTargetTexture||Z.has(E)){const Sn=Z.get(E),Qt=Z.get(k);Te.bindFramebuffer(D.READ_FRAMEBUFFER,yn),Te.bindFramebuffer(D.DRAW_FRAMEBUFFER,Pt);for(let an=0;an<de;an++)Mt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Sn.__webglTexture,z,Ae+an):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Sn.__webglTexture,z),bn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Qt.__webglTexture,se,Dt+an):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Qt.__webglTexture,se),z!==0?D.blitFramebuffer(Oe,Ge,fe,Me,tt,at,fe,Me,D.COLOR_BUFFER_BIT,D.NEAREST):bn?D.copyTexSubImage3D(Wt,se,tt,at,Dt+an,Oe,Ge,fe,Me):D.copyTexSubImage2D(Wt,se,tt,at,Oe,Ge,fe,Me);Te.bindFramebuffer(D.READ_FRAMEBUFFER,null),Te.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else bn?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Wt,se,tt,at,Dt,fe,Me,de,dt,Be,At.data):k.isCompressedArrayTexture?D.compressedTexSubImage3D(Wt,se,tt,at,Dt,fe,Me,de,dt,At.data):D.texSubImage3D(Wt,se,tt,at,Dt,fe,Me,de,dt,Be,At):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,se,tt,at,fe,Me,dt,Be,At.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,se,tt,at,At.width,At.height,dt,At.data):D.texSubImage2D(D.TEXTURE_2D,se,tt,at,fe,Me,dt,Be,At);D.pixelStorei(D.UNPACK_ROW_LENGTH,ut),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Fn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,as),D.pixelStorei(D.UNPACK_SKIP_ROWS,pn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,tr),se===0&&k.generateMipmaps&&D.generateMipmap(Wt),Te.unbindTexture()},this.copyTextureToTexture3D=function(E,k,j=null,$=null,z=0){return E.isTexture!==!0&&(Ki("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,$=arguments[1]||null,E=arguments[2],k=arguments[3],z=arguments[4]||0),Ki('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,k,j,$,z)},this.initRenderTarget=function(E){Z.get(E).__webglFramebuffer===void 0&&C.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),Te.unbindTexture()},this.resetState=function(){S=0,y=0,T=null,Te.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}const ee=4.9,gt=26,kt=16,Ot=-6.5,Dn={4:{floorNumber:4,floorName:"PISO 4 • ROOFTOP & PENTHOUSE",subtitle:"«The Inner Circle» Terrace",badge:"Penthouse VIP",badgeColor:"amber",description:"Plunge pool basáltica, tumbonas de teca, barra en cobre martillado, pérgola bioclimática y vistas skyline.",floorY:4*ee,funnelStage:"High-Ticket / Membresía Anual",spots:[{id:"pool",name:"Plunge Pool Basáltica",icon:"🏊‍♀️",floor:4,alinaPose:"De pie al borde de la piscina infinita",alinaPos:{x:-2.5,y:4*ee+.06,z:-2.8},alinaRotY:.25,defaultAnim:"Idle",camPos:{x:-1.4,y:4*ee+1.55,z:.4},camTarget:{x:-2.5,y:4*ee+1.38,z:-2.8},macroPos:{x:-.5,y:4*ee+1.1,z:-4.2},macroTarget:{x:-2.2,y:4*ee+.45,z:-6.2},prompt:"Cinematic 85mm medium shot of 28yo Dutch-Latin woman Alina Van Dijk standing beside volcanic stone plunge pool on luxury rooftop deck at sunset, vivid copper red hair with natural soft waves, vivid emerald green eyes, light freckles, crimson lips, black silk resort wrap, turquoise water reflections, golden hour rim light --ar 9:16",script:"Cuando estás arriba, el ruido de abajo se disuelve. Aquí solo entra quien comprende que liderar también exige saber rendirse. [pausa de 2.0s] Bienvenido al círculo íntimo.",brolls:["B-Roll 1: Reflejos dorados sobre el agua turquesa de la plunge pool basáltica.","B-Roll 2: Tumbona de teca con copa de cristal tallado al atardecer."]},{id:"bar",name:"Barra de Cócteles Botánicos",icon:"🍸",floor:4,alinaPose:"Junto a la barra de cobre martillado",alinaPos:{x:4.5,y:4*ee+.06,z:-7.8},alinaRotY:-.35,defaultAnim:"Idle",camPos:{x:3.1,y:4*ee+1.55,z:-4.6},camTarget:{x:4.5,y:4*ee+1.38,z:-7.8},macroPos:{x:4.6,y:4*ee+1.45,z:-7.5},macroTarget:{x:5.5,y:4*ee+1.18,z:-9.5},prompt:"28yo Dutch-Latin woman Alina Van Dijk standing by polished hammered copper rooftop cocktail bar, vivid copper red hair, emerald green eyes, holding crystal martini glass, moody skyline bokeh, warm backlighting, 85mm f/1.4 --ar 9:16",script:"La mente necesita un antídoto contra el exceso de control. Este es el mío. [pausa de 1.5s] Salud por los que no le temen a su propia vulnerabilidad.",brolls:["B-Roll 1: Botellas ámbar retroiluminadas sobre estantería de latón.","B-Roll 2: Macro de copa de martini sobre barra de cobre martillado."]}]},3:{floorNumber:3,floorName:"PISO 3 • THE MIND SANCTUARY",subtitle:"Estudio Clínico & Boudoir",badge:"Trabajo & Terapia",badgeColor:"purple",description:"Estudio de podcast con Shure SM7B, biblioteca clínica, diván de cuero negro y laboratorio sensorial SSC.",floorY:3*ee,funnelStage:"Conversión Fanvue & Telegram VIP",spots:[{id:"podcast",name:"The Mind Sanctuary (Podcast)",icon:"🎙️",floor:3,alinaPose:"Frente al escritorio clínico y Shure SM7B",alinaPos:{x:-4.8,y:3*ee,z:-8.8},alinaRotY:.15,defaultAnim:"Idle",camPos:{x:-4.1,y:3*ee+1.52,z:-5.4},camTarget:{x:-4.8,y:3*ee+1.42,z:-8.8},macroPos:{x:-3.5,y:3*ee+1.35,z:-6.8},macroTarget:{x:-4.5,y:3*ee+1.05,z:-8.2},prompt:"Cinematic medium close-up of 28yo Dutch-Latin woman Alina Van Dijk in dark loft podcast studio SET-01, vivid copper red hair, vivid emerald green eyes, light freckles, Shure SM7B microphone on boom arm, exposed dark brick wall, warm Edison bulb, bookshelf with psychoanalysis books, 85mm f/1.8 --ar 9:16",script:"Llevas diez horas resolviendo problemas de otros... ¿cuándo fue la última vez que alguien tomó el mando por ti? [pausa de 2.0s] Entra. Cierra la puerta. Esta noche decido yo.",brolls:["B-Roll 1: Vapor de café espresso sobre cuaderno de notas clínicas en nogal.","B-Roll 2: Rack focus por lomos antiguos de Bataille y Foucault junto a vaso ámbar."]},{id:"boudoir",name:"Boudoir Velvet & Terapia SSC",icon:"🗝️",floor:3,alinaPose:"En el laboratorio sensorial junto al micrófono 3Dio",alinaPos:{x:4.5,y:3*ee,z:-7.5},alinaRotY:-.25,defaultAnim:"Idle",camPos:{x:3.4,y:3*ee+1.5,z:-4},camTarget:{x:4.5,y:3*ee+1.35,z:-7.5},macroPos:{x:3.6,y:3*ee+1.15,z:-6.2},macroTarget:{x:4.8,y:3*ee+.9,z:-7.9},prompt:"28yo Dutch-Latin woman Alina Van Dijk in luxury chiaroscuro boudoir SET-04, emerald velvet tufted headboard behind her, warm candlelight shadows, silk shibari rope rack in soft bokeh, hypnotic emerald gaze, 85mm prime lens --ar 9:16",script:"El poder real nunca se impone a la fuerza. Se entrega voluntariamente a quien sabe sostenerlo sin juicio. [pausa de 2.0s] ¿Estás listo?",brolls:["B-Roll 1: Paneo macro por madejas de cuerda shibari lila y negra sobre satén.","B-Roll 2: Micrófono binaural 3Dio y antifaz de cuero pulido bajo luz de vela."]}]},2:{floorNumber:2,floorName:"PISO 2 • RESIDENCIA PRIVADA",subtitle:"Hogar Privado («Donde Nace Todo»)",badge:"Residencia Alina",badgeColor:"copper",description:"4 estancias divididas con tabiques reales: tocador vanity con 12 bombillas, baño spa con tina basáltica, cocina de autor y suite principal.",floorY:2*ee,funnelStage:"Top-Funnel / Intimidad Cotidiana",spots:[{id:"vanity",name:"El Tocador Vanity & Vestidor",icon:"💄",floor:2,alinaPose:"Frente al tocador iluminado y espejo vanity",alinaPos:{x:-.4,y:2*ee,z:-10.8},alinaRotY:.12,defaultAnim:"Idle",camPos:{x:.25,y:2*ee+1.5,z:-8.1},camTarget:{x:-.4,y:2*ee+1.38,z:-10.8},macroPos:{x:.45,y:2*ee+1.15,z:-11.6},macroTarget:{x:-.35,y:2*ee+.85,z:-13.1},prompt:"Intimate cinematic shot of 28yo Dutch-Latin woman Alina Van Dijk by luxury dark walnut vanity table in Piso 2 suite, vivid copper red hair with soft waves, vivid emerald green eyes, light natural freckles, crimson lips, glowing round vanity bulbs in mirror behind her, black silk outfit, 85mm f/1.4 --ar 9:16",script:"Te pasas el día sosteniendo el personaje... fingiendo que no pesa. [pausa de 2.0s] Frente a este espejo solo existe la verdad. Déjame ver quién eres cuando nadie te está evaluando.",brolls:["B-Roll 1: Macro slider sobre labial carmesí dorado y frascos ámbar de perfume.","B-Roll 2: Aro de bombillas cálidas reflejado en el espejo biselado."]},{id:"bath",name:"Baño Spa & Tina Monolítica",icon:"🛁",floor:2,alinaPose:"Recostada en tina basáltica entre velas",alinaPos:{x:-9,y:2*ee+.68,z:-7.8},alinaRotY:.35,defaultAnim:"Laying",camPos:{x:-6.8,y:2*ee+1.65,z:-4.6},camTarget:{x:-9,y:2*ee+.72,z:-7.8},macroPos:{x:-7.4,y:2*ee+1.1,z:-6.2},macroTarget:{x:-8.8,y:2*ee+.55,z:-7.5},prompt:"28yo Dutch-Latin woman Alina Van Dijk reclining in freestanding black basalt stone bathtub filled with warm water, copper hair pinned up loosely, emerald green eyes, surrounded by flickering scented candles and frosted glass partition, chiaroscuro luxury spa, 85mm f/1.8 --ar 9:16",script:"El cuerpo guarda todo lo que la mente reprime. Cierra los ojos... siente el peso soltarse en el agua. [pausa de 2.0s] Yo me encargo del resto.",brolls:["B-Roll 1: Llamas de velas aromáticas reflejadas sobre piedra basáltica negra.","B-Roll 2: Bandeja de teca con sales minerales y toallas de algodón enrolladas."]},{id:"kitchen",name:"Cocina de Autor & Isla Mármol",icon:"☕",floor:2,alinaPose:"Junto a la isla de mármol Nero Marquina",alinaPos:{x:6,y:2*ee,z:-7.6},alinaRotY:-.45,defaultAnim:"Idle",camPos:{x:4.5,y:2*ee+1.5,z:-4.2},camTarget:{x:6.2,y:2*ee+1.35,z:-7.6},macroPos:{x:5.5,y:2*ee+1.25,z:-6.6},macroTarget:{x:7.2,y:2*ee+.98,z:-8.2},prompt:"28yo Dutch-Latin woman Alina Van Dijk standing beside black Nero Marquina marble kitchen island, copper red waves, emerald eyes, brass pendant lights overhead, morning espresso cup on marble counter, 85mm f/1.8 --ar 9:16",script:"Antes de que empiece el caos de tu agenda... regálate tres minutos de silencio absoluto. [pausa de 1.5s] Respira conmigo.",brolls:["B-Roll 1: Vapor ascendiendo desde taza de espresso sobre mármol Nero Marquina.","B-Roll 2: Lámparas colgantes de latón sobre copas de cristal suspendidas."]},{id:"suite",name:"Suite Principal & Balcón",icon:"🛏️",floor:2,alinaPose:"En la cama King de lino carbón",alinaPos:{x:-.5,y:2*ee+.92,z:-3.2},alinaRotY:0,defaultAnim:"Laying",camPos:{x:1.4,y:2*ee+1.68,z:.1},camTarget:{x:-.5,y:2*ee+.95,z:-3.2},macroPos:{x:-2.2,y:2*ee+1.25,z:-1.6},macroTarget:{x:-2.2,y:2*ee+.85,z:-4.2},prompt:"28yo Dutch-Latin woman Alina Van Dijk resting on king bed dressed in charcoal linen sheets, emerald velvet headboard, warm bedside table lamps, Eixample balcony doors behind, 85mm f/1.4 --ar 9:16",script:"Apaga la pantalla. Deja de repasar mentalmente tus pendientes de mañana. [pausa de 2.0s] Tu mente necesita rendirse para poder renacer.",brolls:["B-Roll 1: Lámpara de mesilla proyectando luz ámbar sobre lino carbón.","B-Roll 2: Copa de vino tinto en mesa del balcón modernista al atardecer."]}]},1:{floorNumber:1,floorName:"PISO 1 • LE VELVET CAFÉ",subtitle:"Cafetería Especialidad & Balcón",badge:"Lifestyle Diurno",badgeColor:"emerald",description:"Barra de roble con cafetera La Marzocco en cobre, vitrina de repostería, 4 mesas Carrara con sillas Thonet y balcón.",floorY:1*ee,funnelStage:"Descubrimiento & Street Lifestyle",spots:[{id:"cafe",name:"Barra La Marzocco & Mesas Carrara",icon:"🥐",floor:1,alinaPose:"De pie junto a las mesas de mármol Carrara",alinaPos:{x:-2,y:1*ee,z:-3.5},alinaRotY:.2,defaultAnim:"Idle",camPos:{x:-.9,y:1*ee+1.5,z:-.3},camTarget:{x:-2,y:1*ee+1.35,z:-3.5},macroPos:{x:-1.4,y:1*ee+1.45,z:-6.5},macroTarget:{x:0,y:1*ee+1.25,z:-9.5},prompt:"28yo Dutch-Latin woman Alina Van Dijk inside boutique Barcelona specialty coffee lounge, Carrara marble bistro tables, oak bar with copper La Marzocco espresso machine behind, soft morning sunlight, 85mm f/2.0 --ar 9:16",script:"La productividad sin introspección es solo ansiedad disfrazada de éxito. [pausa de 1.5s] ¿Tú qué buscas hoy?",brolls:["B-Roll 1: Cafetera La Marzocco en cobre pulido extrayendo espresso.","B-Roll 2: Mesa bistró de mármol blanco junto al ventanal del Eixample."]},{id:"walk_cafe",name:"Pasarela Interior Café (Walking)",icon:"🚶‍♀️",floor:1,alinaPose:"Caminando entre mesas hacia el balcón",alinaPos:{x:2.8,y:1*ee,z:-3},alinaRotY:-.15,defaultAnim:"Walk",camPos:{x:2.2,y:1*ee+1.48,z:.4},camTarget:{x:2.8,y:1*ee+1.25,z:-3},macroPos:{x:4.5,y:1*ee+1.1,z:-2.2},macroTarget:{x:3.5,y:1*ee+.78,z:-3.2},prompt:"Walking selfie style shot of 28yo Dutch-Latin woman Alina Van Dijk walking gracefully across specialty coffee lounge toward wrought-iron balcony, natural copper hair movement, warm daylight --ar 9:16",script:"Tres minutos para ordenar la cabeza antes de entrar en sesión.",brolls:["B-Roll 1: Hojas de monstera y luz natural atravesando el balcón.","B-Roll 2: Vitrina iluminada con repostería artesanal."]}]},0:{floorNumber:0,floorName:"PLANTA BAJA • CABARET & PARKING",subtitle:"Nocturne Speakeasy & Exterior",badge:"Portado de Unity",badgeColor:"rose",description:"Parking exterior 28m×18m con 8 líneas amarillas, 4 coches, 3 farolas, marquesina VIP con alfombra roja, pista neón, barra y piano de cola.",floorY:0,funnelStage:"Mundo Exterior / Viral Dance & Reels",spots:[{id:"cabaret",name:"Pista Neón & Piano de Cola",icon:"🎷",floor:0,alinaPose:"Bailando en el escenario junto al piano",alinaPos:{x:0,y:.45,z:-10.5},alinaRotY:0,defaultAnim:"Rumba",camPos:{x:1.5,y:1.85,z:-6.8},camTarget:{x:0,y:1.45,z:-10.5},macroPos:{x:-3.5,y:1.55,z:-7},macroTarget:{x:-5.8,y:.95,z:-9.5},prompt:"28yo Dutch-Latin woman Alina Van Dijk on elevated wood stage inside Nocturne speakeasy club, crimson velvet curtains, glowing cyan floor rim, grand black lacquered piano nearby, dramatic chiaroscuro spotlights, 85mm f/1.4 --ar 9:16",script:"Las mejores conversaciones ocurren cuando la ciudad se va a dormir y caen todas las máscaras. [pausa de 2.0s] ¿Entras?",brolls:["B-Roll 1: Teclas blancas y negras del piano de cola bajo foco cálido.","B-Roll 2: Copa iluminada sobre mesa de cóctel con vela parpadeante."]},{id:"parking",name:"Parking Exterior & Alfombra VIP",icon:"🚗",floor:0,alinaPose:"Llegando por la alfombra roja bajo el neón NOCTURNE",alinaPos:{x:0,y:.16,z:3.4},alinaRotY:0,defaultAnim:"Walk",camPos:{x:1.8,y:1.55,z:7.4},camTarget:{x:0,y:1.25,z:3.4},macroPos:{x:-3.2,y:1.35,z:9.2},macroTarget:{x:-3.8,y:.7,z:12.5},prompt:"Full body evening street shot of 28yo Dutch-Latin woman Alina Van Dijk walking on red carpet under glowing magenta NOCTURNE marquee sign, parked luxury cars and glowing streetlamps on wet asphalt behind, 85mm f/1.8 --ar 9:16",script:"Deja el ruido afuera. Aquí dentro las reglas las pongo yo.",brolls:["B-Roll 1: Reflejo de farola cálida y neón magenta sobre capó negro brillante.","B-Roll 2: Postes dorados y cordón de terciopelo en la entrada del club."]}]}};class lx extends Sh{constructor(){super();const e=new Bi;e.deleteAttribute("uv");const t=new Fe({side:Kt}),n=new Fe,i=new _n(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new ke(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new ke(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new ke(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new ke(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new ke(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const d=new ke(e,n);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);const h=new ke(e,n);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);const u=new ke(e,Ms(50));u.position.set(-16.116,14.37,8.208),u.scale.set(.1,2.428,2.739),this.add(u);const m=new ke(e,Ms(50));m.position.set(-16.109,18.021,-8.207),m.scale.set(.1,2.425,2.751),this.add(m);const _=new ke(e,Ms(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);const g=new ke(e,Ms(43));g.position.set(-.462,8.89,14.52),g.scale.set(4.38,5.441,.088),this.add(g);const f=new ke(e,Ms(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const p=new ke(e,Ms(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Ms(s){const e=new Zn;return e.color.setScalar(s),e}class cx extends ip{constructor(e){super(e),this.type=Kn}parse(e){const o=function(T,v){switch(T){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(v||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(v||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(v||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(v||""))}},h=function(T,v,x){v=v||1024;let N=T.pos,F=-1,O=0,X="",H=String.fromCharCode.apply(null,new Uint16Array(T.subarray(N,N+128)));for(;0>(F=H.indexOf(`
`))&&O<v&&N<T.byteLength;)X+=H,O+=H.length,N+=128,H+=String.fromCharCode.apply(null,new Uint16Array(T.subarray(N,N+128)));return-1<F?(T.pos+=O+F+1,X+H.slice(0,F)):!1},u=function(T){const v=/^#\?(\S+)/,x=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,R=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,N=/^\s*FORMAT=(\S+)\s*$/,F=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,O={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let X,H;for((T.pos>=T.byteLength||!(X=h(T)))&&o(1,"no header found"),(H=X.match(v))||o(3,"bad initial token"),O.valid|=1,O.programtype=H[1],O.string+=X+`
`;X=h(T),X!==!1;){if(O.string+=X+`
`,X.charAt(0)==="#"){O.comments+=X+`
`;continue}if((H=X.match(x))&&(O.gamma=parseFloat(H[1])),(H=X.match(R))&&(O.exposure=parseFloat(H[1])),(H=X.match(N))&&(O.valid|=2,O.format=H[1]),(H=X.match(F))&&(O.valid|=4,O.height=parseInt(H[1],10),O.width=parseInt(H[2],10)),O.valid&2&&O.valid&4)break}return O.valid&2||o(3,"missing format specifier"),O.valid&4||o(3,"missing image size specifier"),O},m=function(T,v,x){const R=v;if(R<8||R>32767||T[0]!==2||T[1]!==2||T[2]&128)return new Uint8Array(T);R!==(T[2]<<8|T[3])&&o(3,"wrong scanline width");const N=new Uint8Array(4*v*x);N.length||o(4,"unable to allocate buffer space");let F=0,O=0;const X=4*R,H=new Uint8Array(4),Q=new Uint8Array(X);let q=x;for(;q>0&&O<T.byteLength;){O+4>T.byteLength&&o(1),H[0]=T[O++],H[1]=T[O++],H[2]=T[O++],H[3]=T[O++],(H[0]!=2||H[1]!=2||(H[2]<<8|H[3])!=R)&&o(3,"bad rgbe scanline format");let ce=0,ue;for(;ce<X&&O<T.byteLength;){ue=T[O++];const Ue=ue>128;if(Ue&&(ue-=128),(ue===0||ce+ue>X)&&o(3,"bad scanline data"),Ue){const je=T[O++];for(let K=0;K<ue;K++)Q[ce++]=je}else Q.set(T.subarray(O,O+ue),ce),ce+=ue,O+=ue}const be=R;for(let Ue=0;Ue<be;Ue++){let je=0;N[F]=Q[Ue+je],je+=R,N[F+1]=Q[Ue+je],je+=R,N[F+2]=Q[Ue+je],je+=R,N[F+3]=Q[Ue+je],F+=4}q--}return N},_=function(T,v,x,R){const N=T[v+3],F=Math.pow(2,N-128)/255;x[R+0]=T[v+0]*F,x[R+1]=T[v+1]*F,x[R+2]=T[v+2]*F,x[R+3]=1},g=function(T,v,x,R){const N=T[v+3],F=Math.pow(2,N-128)/255;x[R+0]=Wr.toHalfFloat(Math.min(T[v+0]*F,65504)),x[R+1]=Wr.toHalfFloat(Math.min(T[v+1]*F,65504)),x[R+2]=Wr.toHalfFloat(Math.min(T[v+2]*F,65504)),x[R+3]=Wr.toHalfFloat(1)},f=new Uint8Array(e);f.pos=0;const p=u(f),M=p.width,A=p.height,b=m(f.subarray(f.pos),M,A);let I,S,y;switch(this.type){case hn:y=b.length/4;const T=new Float32Array(y*4);for(let x=0;x<y;x++)_(b,x*4,T,x*4);I=T,S=hn;break;case Kn:y=b.length/4;const v=new Uint16Array(y*4);for(let x=0;x<y;x++)g(b,x*4,v,x*4);I=v,S=Kn;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:M,height:A,data:I,header:p.string,gamma:p.gamma,exposure:p.exposure,type:S}}setDataType(e){return this.type=e,this}load(e,t,n,i){function r(o,a){switch(o.type){case hn:case Kn:o.colorSpace=Zt,o.minFilter=Gt,o.magFilter=Gt,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,r,n,i)}}class dx{constructor(e,t){this.scene=e,this.renderer=t,this.lights=[],this.flickerCandles=[],this.emissiveRefs=[],this.mode="night",this.hdrDayRT=null,this.hdrNightRT=null,this.depthFogDisabled=!1,this._setupEnvironment(),this._setupSkyDome(),this._setupSkylineSilhouettes(),this._setupGlobalLights(),this._loadPhotographicHDRIs()}_loadPhotographicHDRIs(){const e=new Lo(this.renderer);e.compileEquirectangularShader();const t=new cx;t.load("./polyhaven/hdri/hdri_night.hdr",n=>{n.mapping=Mr,this.hdrNightRT=e.fromEquirectangular(n),n.dispose(),this.mode==="night"&&!this.depthFogDisabled&&this._applyHDRI("night")},void 0,n=>console.warn("[HDRI Night]",n)),t.load("./polyhaven/hdri/hdri_day.hdr",n=>{n.mapping=Mr,this.hdrDayRT=e.fromEquirectangular(n),n.dispose(),this.mode==="day"&&!this.depthFogDisabled&&this._applyHDRI("day")},void 0,n=>console.warn("[HDRI Day]",n))}_applyHDRI(e){const t=e==="day"?this.hdrDayRT:this.hdrNightRT;t&&(this.scene.environment=t.texture,this.scene.background=t.texture,this.scene.backgroundBlurriness=.04,this.scene.backgroundIntensity=e==="day"?1.05:.85,this.scene.environmentIntensity=e==="day"?1:.72,this.skyDome&&(this.skyDome.visible=!1))}_setupEnvironment(){this.renderer.toneMapping=Yd,this.renderer.toneMappingExposure=1.18,this.renderer.outputColorSpace=Rt;const e=new Lo(this.renderer);e.compileEquirectangularShader();const t=new lx;this.envRT=e.fromScene(t,.04),this.scene.environment=this.envRT.texture,this.scene.environmentIntensity=.55,t.dispose(),e.dispose()}_setupSkyDome(){const e=new es(140,32,24);this.skyUniforms={topColor:{value:new Le(395539)},midColor:{value:new Le(1317677)},horizonColor:{value:new Le(2628646)},sunDir:{value:new L(.55,.35,-.75).normalize()},sunStrength:{value:0},starOpacity:{value:1}};const t=new jn({side:Kt,depthWrite:!1,uniforms:this.skyUniforms,vertexShader:`
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
      `});this.skyDome=new ke(e,t),this.scene.add(this.skyDome)}_setupSkylineSilhouettes(){this.skylineGroup=new Xt;const e=new Fe({color:1053466,roughness:.9,metalness:.1}),t=document.createElement("canvas");t.width=128,t.height=256;const n=t.getContext("2d");n.fillStyle="#0c0e14",n.fillRect(0,0,128,256);for(let l=8;l<248;l+=16)for(let c=8;c<120;c+=16)(c*7+l*13)%5===0&&(n.fillStyle=(c+l)%3===0?"#fbbf24":"#7dd3fc",n.fillRect(c,l,8,8));const i=new Th(t);i.colorSpace=Rt,i.wrapS=Pn,i.wrapT=Pn,i.repeat.set(2,4),this.skylineMat=new Fe({color:1185054,emissiveMap:i,emissive:new Le(16766888),emissiveIntensity:.9,roughness:.85});const r=26;for(let l=0;l<r;l++){const c=l/r*Math.PI*2,d=52+l%3*10,h=6+l%4*2.5,u=14+l%5*6.5,m=6+(l+1)%3*2.2,_=new ke(new Bi(h,u,m),l%2===0?this.skylineMat:e);_.position.set(Math.cos(c)*d,u/2-1,Math.sin(c)*d),_.rotation.y=-c,this.skylineGroup.add(_)}const o=new Fe({color:1184793,roughness:.95,metalness:.05}),a=new ke(new zo(110,48),o);a.rotation.x=-Math.PI/2,a.position.y=-.32,a.receiveShadow=!0,this.skylineGroup.add(a),this.scene.add(this.skylineGroup)}_setupGlobalLights(){this.hemiLight=new sp(9414870,2497815,.75),this.scene.add(this.hemiLight),this.dirLight=new Lh(16764825,1.2),this.dirLight.position.set(22,26,20),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.set(2048,2048),this.dirLight.shadow.camera.near=2,this.dirLight.shadow.camera.far=95,this.dirLight.shadow.camera.left=-28,this.dirLight.shadow.camera.right=28,this.dirLight.shadow.camera.top=28,this.dirLight.shadow.camera.bottom=-28,this.dirLight.shadow.bias=-5e-4,this.scene.add(this.dirLight)}registerLight(e,{dayIntensity:t=.8,nightIntensity:n=2,flicker:i=!1}={}){this.lights.push({light:e,dayIntensity:t,nightIntensity:n,baseNight:n}),i&&this.flickerCandles.push({light:e,dayIntensity:t,nightIntensity:n,phase:Math.random()*10}),e.intensity=this.mode==="day"?t:n}registerEmissive(e,{dayIntensity:t=.2,nightIntensity:n=1.6}={}){this.emissiveRefs.push({material:e,dayIntensity:t,nightIntensity:n}),e.emissiveIntensity=this.mode==="day"?t:n}setMode(e){this.mode=e,e==="day"?(this.skyUniforms.topColor.value.setHex(2644124),this.skyUniforms.midColor.value.setHex(8168143),this.skyUniforms.horizonColor.value.setHex(15969910),this.skyUniforms.sunStrength.value=1,this.skyUniforms.starOpacity.value=0,this.scene.fog=new Co(14333854,.0055),this.scene.environmentIntensity=.95,this.hemiLight.color.setHex(16770764),this.hemiLight.groundColor.setHex(4930352),this.hemiLight.intensity=1.05,this.dirLight.color.setHex(16765593),this.dirLight.position.set(24,17,22),this.dirLight.intensity=2.8,this.skylineMat.emissiveIntensity=.08,this.renderer.toneMappingExposure=1.15):(this.skyUniforms.topColor.value.setHex(329489),this.skyUniforms.midColor.value.setHex(1120041),this.skyUniforms.horizonColor.value.setHex(2562339),this.skyUniforms.sunStrength.value=0,this.skyUniforms.starOpacity.value=1,this.scene.fog=new Co(658710,.009),this.scene.environmentIntensity=.48,this.hemiLight.color.setHex(3821434),this.hemiLight.groundColor.setHex(1971472),this.hemiLight.intensity=.65,this.dirLight.color.setHex(8037608),this.dirLight.position.set(-18,28,22),this.dirLight.intensity=.65,this.skylineMat.emissiveIntensity=1.1,this.renderer.toneMappingExposure=1.25);for(const t of this.lights)t.light.intensity=e==="day"?t.dayIntensity:t.nightIntensity;for(const t of this.emissiveRefs)t.material.emissiveIntensity=e==="day"?t.dayIntensity:t.nightIntensity;this.depthFogDisabled||(e==="day"&&this.hdrDayRT||e==="night"&&this.hdrNightRT?this._applyHDRI(e):(this.envRT&&(this.scene.environment=this.envRT.texture),this.scene.background=null,this.skyDome&&(this.skyDome.visible=!0)))}update(e){for(const t of this.flickerCandles){const n=this.mode==="day"?t.dayIntensity:t.nightIntensity;t.light.intensity=n*(.85+Math.sin(e*9.5+t.phase)*.1+Math.sin(e*17+t.phase)*.05)}}setDepthFogDisabled(e){this.depthFogDisabled=e,e?(this.scene.fog=null,this.scene.background=null,this.skyDome&&(this.skyDome.visible=!1)):this.setMode(this.mode)}}function Cd(s,e){if(e===Cu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===wl||e===ch){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===wl)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class Bh extends ss{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new mx(t)}),this.register(function(t){return new gx(t)}),this.register(function(t){return new Ex(t)}),this.register(function(t){return new Tx(t)}),this.register(function(t){return new Ax(t)}),this.register(function(t){return new xx(t)}),this.register(function(t){return new vx(t)}),this.register(function(t){return new yx(t)}),this.register(function(t){return new bx(t)}),this.register(function(t){return new px(t)}),this.register(function(t){return new Sx(t)}),this.register(function(t){return new _x(t)}),this.register(function(t){return new wx(t)}),this.register(function(t){return new Mx(t)}),this.register(function(t){return new ux(t)}),this.register(function(t){return new Rx(t)}),this.register(function(t){return new Cx(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Sr.extractUrlBase(e);o=Sr.resolveURL(c,this.path)}else o=Sr.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Ql(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(d){t(d),r.manager.itemEnd(e)},a)}catch(d){a(d)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===zh){try{o[Qe.KHR_BINARY_GLTF]=new Ix(e)}catch(h){i&&i(h);return}r=JSON.parse(o[Qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Gx(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const h=this.pluginCallbacks[d](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let d=0;d<r.extensionsUsed.length;++d){const h=r.extensionsUsed[d],u=r.extensionsRequired||[];switch(h){case Qe.KHR_MATERIALS_UNLIT:o[h]=new fx;break;case Qe.KHR_DRACO_MESH_COMPRESSION:o[h]=new Px(r,this.dracoLoader);break;case Qe.KHR_TEXTURE_TRANSFORM:o[h]=new Dx;break;case Qe.KHR_MESH_QUANTIZATION:o[h]=new Lx;break;default:u.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function hx(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class ux{constructor(e){this.parser=e,this.name=Qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const d=new Le(16777215);l.color!==void 0&&d.setRGB(l.color[0],l.color[1],l.color[2],Zt);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Lh(d),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new _n(d),c.distance=h;break;case"spot":c=new Dh(d),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),hi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class fx{constructor(){this.name=Qe.KHR_MATERIALS_UNLIT}getMaterialType(){return Zn}extendParams(e,t,n){const i=[];e.color=new Le(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Zt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Rt))}return Promise.all(i)}}class px{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class mx{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:sn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ie(a,a)}return Promise.all(r)}}class gx{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:sn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class _x{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:sn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class xx{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:sn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Le(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Zt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Rt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class vx{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:sn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class yx{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:sn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Le().setRGB(a[0],a[1],a[2],Zt),Promise.all(r)}}class bx{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:sn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Sx{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:sn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Le().setRGB(a[0],a[1],a[2],Zt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Rt)),Promise.all(r)}}class Mx{constructor(e){this.parser=e,this.name=Qe.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:sn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class wx{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:sn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class Ex{constructor(e){this.parser=e,this.name=Qe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class Tx{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Ax{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Rx{constructor(e){this.name=Qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,d=i.count,h=i.byteStride,u=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(d,h,u,i.mode,i.filter).then(function(m){return m.buffer}):o.ready.then(function(){const m=new ArrayBuffer(d*h);return o.decodeGltfBuffer(new Uint8Array(m),d,h,u,i.mode,i.filter),m})})}else return null}}class Cx{constructor(e){this.name=Qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==An.TRIANGLES&&c.mode!==An.TRIANGLE_STRIP&&c.mode!==An.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(d=>(l[c]=d,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const d=c.pop(),h=d.isGroup?d.children:[d],u=c[0].count,m=[];for(const _ of h){const g=new Xe,f=new L,p=new vn,M=new L(1,1,1),A=new Of(_.geometry,_.material,u);for(let b=0;b<u;b++)l.TRANSLATION&&f.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,b),l.SCALE&&M.fromBufferAttribute(l.SCALE,b),A.setMatrixAt(b,g.compose(f,p,M));for(const b in l)if(b==="_COLOR_0"){const I=l[b];A.instanceColor=new Tl(I.array,I.itemSize,I.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&_.geometry.setAttribute(b,l[b]);wt.prototype.copy.call(A,_),this.parser.assignFinalMaterial(A),m.push(A)}return d.isGroup?(d.clear(),d.add(...m),d):m[0]}))}}const zh="glTF",dr=12,Id={JSON:1313821514,BIN:5130562};class Ix{constructor(e){this.name=Qe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,dr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==zh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-dr,r=new DataView(e,dr);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Id.JSON){const c=new Uint8Array(e,dr+o,a);this.content=n.decode(c)}else if(l===Id.BIN){const c=dr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Px{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const d in o){const h=Il[d]||d.toLowerCase();a[h]=o[d]}for(const d in e.attributes){const h=Il[d]||d.toLowerCase();if(o[d]!==void 0){const u=n.accessors[e.attributes[d]],m=Us[u.componentType];c[h]=m.name,l[h]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(d){return new Promise(function(h,u){i.decodeDracoFile(d,function(m){for(const _ in m.attributes){const g=m.attributes[_],f=l[_];f!==void 0&&(g.normalized=f)}h(m)},a,c,Zt,u)})})}}class Dx{constructor(){this.name=Qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Lx{constructor(){this.name=Qe.KHR_MESH_QUANTIZATION}}class Hh extends Pr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,d=i-t,h=(n-t)/d,u=h*h,m=u*h,_=e*c,g=_-c,f=-2*m+3*u,p=m-u,M=1-f,A=p-u+h;for(let b=0;b!==a;b++){const I=o[g+b+a],S=o[g+b+l]*d,y=o[_+b+a],T=o[_+b]*d;r[b]=M*I+A*S+f*y+p*T}return r}}const Nx=new vn;class Fx extends Hh{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Nx.fromArray(r).normalize().toArray(r),r}}const An={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Us={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Pd={9728:rn,9729:Gt,9984:Zd,9985:_o,9986:mr,9987:Yn},Dd={33071:qn,33648:wo,10497:Pn},Ea={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Il={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ai={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ux={CUBICSPLINE:void 0,LINEAR:Tr,STEP:Er},Ta={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function kx(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Fe({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:_i})),s.DefaultMaterial}function qi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function hi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ox(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,d=e.length;c<d;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,d=e.length;c<d;c++){const h=e[c];if(n){const u=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(u)}if(i){const u=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(u)}if(r){const u=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(u)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const d=c[0],h=c[1],u=c[2];return n&&(s.morphAttributes.position=d),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=u),s.morphTargetsRelative=!0,s})}function Bx(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function zx(s){let e;const t=s.extensions&&s.extensions[Qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Aa(t.attributes):e=s.indices+":"+Aa(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Aa(s.targets[n]);return e}function Aa(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Pl(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Hx(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Vx=new Xe;class Gx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new hx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new Ph(this.options.manager):this.textureLoader=new lp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ql(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return qi(r,a,i),hi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,d]of o.children.entries())r(d,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Qe.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Sr.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Ea[i.type],a=Us[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new on(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Ea[i.type],c=Us[i.componentType],d=c.BYTES_PER_ELEMENT,h=d*l,u=i.byteOffset||0,m=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let g,f;if(m&&m!==h){const p=Math.floor(u/m),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let A=t.cache.get(M);A||(g=new c(a,p*m,i.count*m/d),A=new Lf(g,m/d),t.cache.add(M,A)),f=new ql(A,l,u%m/d,_)}else a===null?g=new c(i.count*l):g=new c(a,u,i.count*l),f=new on(g,l,_);if(i.sparse!==void 0){const p=Ea.SCALAR,M=Us[i.sparse.indices.componentType],A=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,I=new M(o[1],A,i.sparse.count*p),S=new c(o[2],b,i.sparse.count*l);a!==null&&(f=new on(f.array.slice(),f.itemSize,f.normalized)),f.normalized=!1;for(let y=0,T=I.length;y<T;y++){const v=I[y];if(f.setX(v,S[y*l]),l>=2&&f.setY(v,S[y*l+1]),l>=3&&f.setZ(v,S[y*l+2]),l>=4&&f.setW(v,S[y*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}f.normalized=_}return f})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(d){d.flipY=!1,d.name=o.name||a.name||"",d.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(d.name=a.uri);const u=(r.samplers||{})[o.sampler]||{};return d.magFilter=Pd[u.magFilter]||Gt,d.minFilter=Pd[u.minFilter]||Yn,d.wrapS=Dd[u.wrapS]||Pn,d.wrapT=Dd[u.wrapT]||Pn,d.generateMipmaps=!d.isCompressedTexture&&d.minFilter!==rn&&d.minFilter!==Gt,i.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const u=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(u),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(l).then(function(h){return new Promise(function(u,m){let _=u;t.isImageBitmapLoader===!0&&(_=function(g){const f=new Bt(g);f.needsUpdate=!0,u(f)}),t.load(Sr.resolveURL(h,r.path),_,void 0,m)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),hi(h,o),h.userData.mimeType=o.mimeType||Hx(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=d,d}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Qe.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Qe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Qe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Eh,Qn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new wh,Qn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Fe}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Qe.KHR_MATERIALS_UNLIT]){const h=i[Qe.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Le(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const u=h.baseColorFactor;a.color.setRGB(u[0],u[1],u[2],Zt),a.opacity=u[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Rt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Bn);const d=r.alphaMode||Ta.OPAQUE;if(d===Ta.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,d===Ta.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Zn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ie(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Zn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Zn){const h=r.emissiveFactor;a.emissive=new Le().setRGB(h[0],h[1],h[2],Zt)}return r.emissiveTexture!==void 0&&o!==Zn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Rt)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),hi(h,r),t.associations.set(h,{materials:e}),r.extensions&&qi(i,h,r),h})}createUniqueName(e){const t=ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Ld(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],d=zx(c),h=i[d];if(h)o.push(h.promise);else{let u;c.extensions&&c.extensions[Qe.KHR_DRACO_MESH_COMPRESSION]?u=r(c):u=Ld(new un,c,t),i[d]={primitive:c,promise:u},o.push(u)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const d=o[l].material===void 0?kx(this.cache):this.getDependency("material",o[l].material);a.push(d)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),d=l[l.length-1],h=[];for(let m=0,_=d.length;m<_;m++){const g=d[m],f=o[m];let p;const M=c[m];if(f.mode===An.TRIANGLES||f.mode===An.TRIANGLE_STRIP||f.mode===An.TRIANGLE_FAN||f.mode===void 0)p=r.isSkinnedMesh===!0?new Ff(g,M):new ke(g,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),f.mode===An.TRIANGLE_STRIP?p.geometry=Cd(p.geometry,ch):f.mode===An.TRIANGLE_FAN&&(p.geometry=Cd(p.geometry,wl));else if(f.mode===An.LINES)p=new Hf(g,M);else if(f.mode===An.LINE_STRIP)p=new Jl(g,M);else if(f.mode===An.LINE_LOOP)p=new Vf(g,M);else if(f.mode===An.POINTS)p=new Gf(g,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);Object.keys(p.geometry.morphAttributes).length>0&&Bx(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),hi(p,r),f.extensions&&qi(i,p,f),t.assignFinalMaterial(p),h.push(p)}for(let m=0,_=h.length;m<_;m++)t.associations.set(h[m],{meshes:e,primitives:m});if(h.length===1)return r.extensions&&qi(i,h[0],r),h[0];const u=new Xt;r.extensions&&qi(i,u,r),t.associations.set(u,{meshes:e});for(let m=0,_=h.length;m<_;m++)u.add(h[m]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Yt(Ro.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new tc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),hi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,d=o.length;c<d;c++){const h=o[c];if(h){a.push(h);const u=new Xe;r!==null&&u.fromArray(r.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Kl(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],d=[];for(let h=0,u=i.channels.length;h<u;h++){const m=i.channels[h],_=i.samplers[m.sampler],g=m.target,f=g.node,p=i.parameters!==void 0?i.parameters[_.input]:_.input,M=i.parameters!==void 0?i.parameters[_.output]:_.output;g.node!==void 0&&(o.push(this.getDependency("node",f)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",M)),c.push(_),d.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(d)]).then(function(h){const u=h[0],m=h[1],_=h[2],g=h[3],f=h[4],p=[];for(let M=0,A=u.length;M<A;M++){const b=u[M],I=m[M],S=_[M],y=g[M],T=f[M];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const v=n._createAnimationTracks(b,I,S,y,T);if(v)for(let x=0;x<v.length;x++)p.push(v[x])}return new Rl(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,d=a.length;c<d;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const d=c[0],h=c[1],u=c[2];u!==null&&d.traverse(function(m){m.isSkinnedMesh&&m.bind(u,Vx)});for(let m=0,_=h.length;m<_;m++)d.add(h[m]);return d})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let d;if(r.isBone===!0?d=new Mh:c.length>1?d=new Xt:c.length===1?d=c[0]:d=new wt,d!==c[0])for(let h=0,u=c.length;h<u;h++)d.add(c[h]);if(r.name&&(d.userData.name=r.name,d.name=o),hi(d,r),r.extensions&&qi(n,d,r),r.matrix!==void 0){const h=new Xe;h.fromArray(r.matrix),d.applyMatrix4(h)}else r.translation!==void 0&&d.position.fromArray(r.translation),r.rotation!==void 0&&d.quaternion.fromArray(r.rotation),r.scale!==void 0&&d.scale.fromArray(r.scale);return i.associations.has(d)||i.associations.set(d,{}),i.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Xt;n.name&&(r.name=i.createUniqueName(n.name)),hi(r,n),n.extensions&&qi(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let d=0,h=l.length;d<h;d++)r.add(l[d]);const c=d=>{const h=new Map;for(const[u,m]of i.associations)(u instanceof Qn||u instanceof Bt)&&h.set(u,m);return d.traverse(u=>{const m=i.associations.get(u);m!=null&&h.set(u,m)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];Ai[r.path]===Ai.weights?e.traverse(function(u){u.morphTargetInfluences&&l.push(u.name?u.name:u.uuid)}):l.push(a);let c;switch(Ai[r.path]){case Ai.weights:c=js;break;case Ai.rotation:c=Xs;break;case Ai.position:case Ai.scale:c=$s;break;default:switch(n.itemSize){case 1:c=js;break;case 2:case 3:default:c=$s;break}break}const d=i.interpolation!==void 0?Ux[i.interpolation]:Tr,h=this._getArrayFromAccessor(n);for(let u=0,m=l.length;u<m;u++){const _=new c(l[u]+"."+Ai[r.path],t.array,h,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Pl(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Xs?Fx:Hh;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Wx(s,e,t){const n=e.attributes,i=new Wn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),a.normalized){const d=Pl(Us[a.componentType]);i.min.multiplyScalar(d),i.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new L,l=new L;for(let c=0,d=r.length;c<d;c++){const h=r[c];if(h.POSITION!==void 0){const u=t.json.accessors[h.POSITION],m=u.min,_=u.max;if(m!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(_[2]))),u.normalized){const g=Pl(Us[u.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new ti;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Ld(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=Il[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return it.workingColorSpace!==Zt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${it.workingColorSpace}" not supported.`),hi(s,e),Wx(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Ox(s,e.targets,t):s})}class Go extends ke{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new Yt;const n=this,i=t.color!==void 0?new Le(t.color):new Le(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||Go.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,d=new ui,h=new L,u=new L,m=new L,_=new Xe,g=new L(0,0,-1),f=new lt,p=new L,M=new L,A=new lt,b=new Xe,I=this.camera,S=new ki(r,o,{samples:c,type:Kn}),y=new jn({name:l.name!==void 0?l.name:"unspecified",uniforms:vh.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});y.uniforms.tDiffuse.value=S.texture,y.uniforms.color.value=i,y.uniforms.textureMatrix.value=b,this.material=y,this.onBeforeRender=function(T,v,x){if(u.setFromMatrixPosition(n.matrixWorld),m.setFromMatrixPosition(x.matrixWorld),_.extractRotation(n.matrixWorld),h.set(0,0,1),h.applyMatrix4(_),p.subVectors(u,m),p.dot(h)>0===!0&&this.forceUpdate===!1)return;p.reflect(h).negate(),p.add(u),_.extractRotation(x.matrixWorld),g.set(0,0,-1),g.applyMatrix4(_),g.add(m),M.subVectors(u,g),M.reflect(h).negate(),M.add(u),I.position.copy(p),I.up.set(0,1,0),I.up.applyMatrix4(_),I.up.reflect(h),I.lookAt(M),I.far=x.far,I.updateMatrixWorld(),I.projectionMatrix.copy(x.projectionMatrix),b.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),b.multiply(I.projectionMatrix),b.multiply(I.matrixWorldInverse),b.multiply(n.matrixWorld),d.setFromNormalAndCoplanarPoint(h,u),d.applyMatrix4(I.matrixWorldInverse),f.set(d.normal.x,d.normal.y,d.normal.z,d.constant);const N=I.projectionMatrix;A.x=(Math.sign(f.x)+N.elements[8])/N.elements[0],A.y=(Math.sign(f.y)+N.elements[9])/N.elements[5],A.z=-1,A.w=(1+N.elements[10])/N.elements[14],f.multiplyScalar(2/f.dot(A)),N.elements[2]=f.x,N.elements[6]=f.y,N.elements[10]=f.z+1-a,N.elements[14]=f.w,n.visible=!1;const F=T.getRenderTarget(),O=T.xr.enabled,X=T.shadowMap.autoUpdate;T.xr.enabled=!1,T.shadowMap.autoUpdate=!1,T.setRenderTarget(S),T.state.buffers.depth.setMask(!0),T.autoClear===!1&&T.clear(),T.render(v,I),T.xr.enabled=O,T.shadowMap.autoUpdate=X,T.setRenderTarget(F);const H=x.viewport;H!==void 0&&T.state.viewport(H),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return S},this.dispose=function(){S.dispose(),n.material.dispose()}}}Go.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};function rc(s=512){const e=document.createElement("canvas");return e.width=s,e.height=s,[e,e.getContext("2d")]}function Dr(s,{colorSpace:e=Rt,repeatX:t=1,repeatY:n=1}={}){const i=new Th(s);return i.wrapS=Pn,i.wrapT=Pn,i.repeat.set(t,n),i.anisotropy=8,i.colorSpace=e,i}function Nd(s,e="#140812",t="#ff2a85",n=""){const i=document.createElement("canvas");i.width=1024,i.height=256;const r=i.getContext("2d");return r.fillStyle=e,r.fillRect(0,0,i.width,i.height),r.strokeStyle=t,r.lineWidth=8,r.strokeRect(12,12,i.width-24,i.height-24),r.textAlign="center",r.textBaseline="middle",r.shadowColor=t,r.shadowBlur=24,r.fillStyle="#fff5fa",r.font="bold 96px Georgia, serif",r.fillText(s,i.width/2,n?i.height/2-22:i.height/2),n&&(r.shadowBlur=8,r.fillStyle=t,r.font="600 28px monospace",r.fillText(n,i.width/2,i.height/2+54)),Dr(i,{repeatX:1,repeatY:1})}function jx(s=12,e=9,t=1.5){const[n,i]=rc(512);i.fillStyle="#0d0e14",i.fillRect(0,0,512,512);const r=128;for(let o=0;o<512;o+=r)for(let a=0;a<512;a+=r)i.fillStyle=(a+o)/r%2===0?"#141722":"#0f111a",i.fillRect(a+3,o+3,r-6,r-6),i.strokeStyle="rgba(16, 185, 129, 0.25)",i.lineWidth=2,i.strokeRect(a+3,o+3,r-6,r-6);return Dr(n,{repeatX:s/t,repeatY:e/t})}function Xx(){const s=document.createElement("canvas");s.width=256,s.height=512;const e=s.getContext("2d"),t=e.createLinearGradient(0,0,0,512);return t.addColorStop(0,"#ffd8a8"),t.addColorStop(.55,"#c86446"),t.addColorStop(1,"#1e293b"),e.fillStyle=t,e.fillRect(0,0,256,512),e.fillStyle="#111319",e.fillRect(0,0,256,16),e.fillRect(0,496,256,16),e.fillRect(0,0,14,512),e.fillRect(242,0,14,512),e.fillRect(122,0,12,512),e.fillRect(0,170,256,10),e.fillRect(0,340,256,10),Dr(s,{repeatX:1,repeatY:1})}const $x=new Ph;function wn(s,{repeatX:e=1,repeatY:t=1,includeAO:n=!0}={}){const i=`./polyhaven/textures/${s}`,r=(o,a)=>{const l=$x.load(o);return l.wrapS=Pn,l.wrapT=Pn,l.repeat.set(e,t),l.anisotropy=8,l.colorSpace=a?Rt:fi,!a&&o.endsWith("ao.jpg")&&(l.channel=0),l};return{map:r(`${i}/diffuse.jpg`,!0),normalMap:r(`${i}/nor_gl.jpg`,!1),roughnessMap:r(`${i}/rough.jpg`,!1),aoMap:n?r(`${i}/ao.jpg`,!1):void 0}}function Vh(){const[s,e]=rc(128),t=e.createRadialGradient(64,64,8,64,64,62);return t.addColorStop(0,"rgba(0, 0, 0, 0.56)"),t.addColorStop(.55,"rgba(0, 0, 0, 0.25)"),t.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=t,e.fillRect(0,0,128,128),Dr(s,{repeatX:1,repeatY:1})}function Fd(s=1){const[e,t]=rc(256);t.fillStyle=s===1?"#12141a":"#181014",t.fillRect(0,0,256,256);const n=t.createRadialGradient(128,120,12,128,128,110);return n.addColorStop(0,s===1?"#d18447":"#bf2e4c"),n.addColorStop(.55,s===1?"#1a735c":"#dbba6b"),n.addColorStop(1,"rgba(18, 20, 26, 0)"),t.fillStyle=n,t.fillRect(16,16,224,224),t.strokeStyle="#e5dfd3",t.lineWidth=10,t.strokeRect(5,5,246,246),Dr(e,{repeatX:1,repeatY:1})}const qx=new Bh,Ra=new Map;function Yx(s){return Ra.has(s)||Ra.set(s,qx.loadAsync(`./polyhaven/models/${s}/${s}.gltf`)),Ra.get(s)}function Kx(s,e){const t=[],n=[],i=[],r=wn("asphalt_02",{repeatX:8,repeatY:5.5}),o=new Fe({...r,color:10133674,roughness:1,metalness:.03}),a=wn("brushed_concrete_04",{repeatX:9,repeatY:1.2}),l=new Fe({...a,color:13685980,roughness:1,metalness:.04}),c=new Fe({color:15381256,roughness:.65}),d=wn("herringbone_parquet",{repeatX:6.5,repeatY:4}),h=new Fe({...d,color:15127490,normalScale:new Ie(.75,.75),roughness:.92,metalness:.04}),u=wn("marble_01",{repeatX:5.2,repeatY:3.2}),m=new Fe({...u,color:2962239,normalScale:new Ie(.5,.5),roughness:.72,metalness:.1}),_=wn("marble_01",{repeatX:5.2,repeatY:3.2}),g=new Fe({..._,color:16118508,normalScale:new Ie(.45,.45),roughness:.76,metalness:.06}),f=wn("brick_wall_005",{repeatX:8,repeatY:1.8}),p=new Fe({...f,color:13285552,normalScale:new Ie(.9,.9),roughness:1,metalness:.02}),M=wn("beige_wall_001",{repeatX:6,repeatY:1.6}),A=new Fe({...M,color:4540759,normalScale:new Ie(.55,.55),roughness:1,metalness:.02}),b=wn("granite_tile_02",{repeatX:8,repeatY:1.6}),I=new Fe({...b,color:10791603,normalScale:new Ie(.7,.7),roughness:1,metalness:.06}),S=Xx(),y=new Fe({map:S,emissiveMap:S,emissive:new Le(16764832),emissiveIntensity:1.2,roughness:.25});e.registerEmissive(y,{dayIntensity:.35,nightIntensity:1.25});const T=new Fe({...M,color:4935518,normalScale:new Ie(.45,.45),roughness:1,metalness:.02}),v=wn("brown_planks_03",{repeatX:6,repeatY:4}),x=new Fe({...v,color:14205872,normalScale:new Ie(.75,.75),roughness:1,metalness:.04}),R=new Fe({color:3875864,roughness:.48,metalness:.08}),N=new Fe({...wn("brown_planks_03",{repeatX:2,repeatY:1}),color:14270367,roughness:.88,metalness:.04}),F=new Fe({color:13132870,roughness:.28,metalness:.88}),O=new Fe({color:13938487,roughness:.25,metalness:.9}),X=new Fe({color:13949151,roughness:.18,metalness:.92}),H=new Fe({color:1974827,roughness:.45,metalness:.75}),Q=wn("velour_velvet",{repeatX:2,repeatY:2}),q=new Fe({...Q,color:1079386,normalScale:new Ie(.7,.7),roughness:1,metalness:.02}),ce=new Fe({...Q,color:10886452,normalScale:new Ie(.7,.7),roughness:1,metalness:.02}),ue=new Fe({color:2764086,roughness:.92,metalness:.02}),be=new Fe({color:15196630,roughness:.88,metalness:.02}),Ue=wn("fabric_leather_02",{repeatX:2,repeatY:2});new Fe({...Ue,color:10244909,normalScale:new Ie(.65,.65),roughness:.9,metalness:.05});const je=new Fe({...Ue,color:2500656,normalScale:new Ie(.65,.65),roughness:.85,metalness:.08}),K=new Fe({color:16777215,roughness:.04,metalness:.98}),ae=new Fe({color:12762542,roughness:.72,metalness:.02}),Re=Vh(),pe=new Zn({map:Re,transparent:!0,opacity:.68,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}),Ne=new Fe({map:Fd(1),roughness:.35,metalness:.04}),Ke=new Fe({map:Fd(2),roughness:.35,metalness:.04}),Pe=new sn({color:10875900,roughness:.08,metalness:.1,transparent:!0,opacity:.28,transmission:.35}),bt=new Fe({color:13753570,roughness:.45,metalness:.1,transparent:!0,opacity:.55}),pt=new Fe({color:959977,roughness:.08,metalness:.35,transparent:!0,opacity:.78}),Ve=new Fe({color:16774097,emissive:new Le(16763256),emissiveIntensity:1.8,roughness:.2});e.registerEmissive(Ve,{dayIntensity:.5,nightIntensity:2.2});const D=new Fe({color:16722565,emissive:new Le(16719480),emissiveIntensity:1.8});e.registerEmissive(D,{dayIntensity:.4,nightIntensity:2.4});const Et=new Fe({color:58879,emissive:new Le(55807),emissiveIntensity:1.8});e.registerEmissive(Et,{dayIntensity:.3,nightIntensity:2});function B(V,Se,rt,Tt,yt,ot,St,Ln,Nn=!0,yn=!0){const Pt=new ke(new Bi(Se,rt,Tt),Ln);return Pt.position.set(yt,ot,St),Pt.castShadow=Nn,Pt.receiveShadow=yn,V.add(Pt),Pt}function re(V,Se,rt,Tt,yt,ot,St,Ln,Nn,yn=!0){const Pt=new ke(new nn(Se,rt,Tt,yt),Nn);return Pt.position.set(ot,St,Ln),Pt.castShadow=yn,Pt.receiveShadow=!0,V.add(Pt),Pt}function Te(V,Se,rt){if(B(V,gt,.26,kt,0,-.13,Ot,rt,!1,!0),B(V,gt+.5,.34,.38,0,-.13,1.55,H,!0,!0),B(V,gt+.52,.06,.06,0,.01,1.73,O,!1,!1),B(V,gt,ee,.3,0,ee/2,Ot-kt/2,Se===3||Se===0?p:A),B(V,.3,ee,kt,-gt/2,ee/2,Ot,A),B(V,.3,ee,kt,gt/2,ee/2,Ot,A),B(V,gt+.36,ee,.16,0,ee/2,Ot-kt/2-.19,I),B(V,.16,ee,kt+.16,-gt/2-.19,ee/2,Ot,I),B(V,.16,ee,kt+.16,gt/2+.19,ee/2,Ot,I),Se>=1&&Se<=3)for(const yt of[-4.2,-9.8])B(V,.08,3.1,2.5,-gt/2-.28,ee*.52,yt,y,!1,!1),B(V,.08,3.1,2.5,gt/2+.28,ee*.52,yt,y,!1,!1);B(V,gt+.2,.24,.24,0,ee-.12,1.45,H,!1,!1),B(V,gt,.24,.36,0,ee-.12,Ot-kt/2+.18,T,!1,!1);for(const yt of[-12.85,-5.2,4.4,12.85])B(V,.38,ee,.38,yt,ee/2,1.45,H);const Tt=B(V,.1,ee,4.2,10.2,ee/2,-12.1,Pe,!1,!1);if(Tt.castShadow=!1,B(V,1.8,.14,1.8,11.4,.08,-12.8,H),B(V,.08,ee,.08,10.6,ee/2,-11.9,Et,!1,!1),Se<4)for(let ot=0;ot<14;ot++){const St=(ot+.5)*(ee/14),Ln=-10.5+ot*.38;B(V,1.3,.16,.4,11.4,St,Ln,N)}B(V,gt-.3,.14,.06,0,.07,Ot-kt/2+.16,R,!1,!0),B(V,.06,.14,kt-.3,-gt/2+.16,.07,Ot,R,!1,!0),B(V,.06,.14,kt-.3,gt/2-.16,.07,Ot,R,!1,!0),B(V,gt-.3,.12,.16,0,ee-.09,Ot-kt/2+.2,ae,!1,!1),B(V,.16,.12,kt-.3,-gt/2+.2,ee-.09,Ot,ae,!1,!1),B(V,.16,.12,kt-.3,gt/2-.2,ee-.09,Ot,ae,!1,!1);for(const yt of[-10.5,-5,.2,4.4,9.6])B(V,.28,ee,.12,yt,ee/2,Ot-kt/2+.18,ae,!1,!0)}function ct(V,Se,rt,Tt=.75,yt=.75,ot=.015){const St=new ke(new is(Tt*2,yt*2),pe);return St.rotation.x=-Math.PI/2,St.position.set(Se,ot,rt),St.userData.hideOnDepthPass=!0,V.add(St),St}function Z(V,Se,rt,Tt,yt,ot,St=0,{addShadow:Ln=!0,customArtMat:Nn=null,hangFromCeiling:yn=!1}={}){Yx(Se).then(Pt=>{const E=Pt.scene.clone(!0);E.rotation.set(0,St,0),E.updateMatrixWorld(!0);const k=new Wn().setFromObject(E),j=new L;k.getSize(j);const $=rt/Math.max(.05,j.y);E.scale.multiplyScalar($),E.updateMatrixWorld(!0);const z=new Wn().setFromObject(E),se=new L,fe=new L;z.getCenter(se),z.getSize(fe);const Me=yn?yt-z.max.y:yt-z.min.y;if(E.position.set(Tt-se.x,Me,ot-se.z),E.traverse(de=>{var Oe,Ge;if(de.isMesh){de.castShadow=!yn,de.receiveShadow=!0;const Ae=String(((Oe=de.material)==null?void 0:Oe.name)||"").toLowerCase();if(Nn&&de.material)Ae.includes("artwork")?de.material=R:Ae.includes("glass")&&(de.material=new sn({color:16777215,roughness:.06,metalness:.05,transparent:!0,opacity:.1,depthWrite:!1}));else if(Ae.includes("flame")||Ae.includes("globe")||Ae.includes("lamps_")||Ae.endsWith("_light")||Ae.includes("bulb")||Ae.includes("lantern"))de.material=de.material.clone(),de.material.emissive=new Le(16763238),de.material.emissiveIntensity=1.9,e.registerEmissive(de.material,{dayIntensity:.35,nightIntensity:2.1});else if(Ae.includes("glass")){const tt=Ae.includes("green"),at=Ae.includes("orange")||Ae.includes("yellow");de.material=new sn({color:tt?1332013:at?11817737:14412542,roughness:.08,metalness:.05,transparent:!0,opacity:tt||at?.78:.32,depthWrite:!1})}(Ge=de.material)!=null&&Ge.aoMap&&(de.material.aoMap.channel=0)}}),V.add(E),Se==="hanging_picture_frame_01"&&Nn){const de=new ke(new is(Math.max(.25,fe.x*.8),Math.max(.35,fe.y*.82)),Nn);de.rotation.y=St;const Oe=new L(0,0,.009).applyAxisAngle(new L(0,1,0),St);de.position.set(Tt+Oe.x,se.y+Me,ot+Oe.z),V.add(de)}Ln&&!yn&&ct(V,Tt,ot,Math.max(.26,fe.x*.58),Math.max(.26,fe.z*.58),yt+.014)}).catch(Pt=>console.warn("[PolyHaven GLTF]",Se,Pt))}function C(V,Se,rt,Tt,yt=!1){re(V,.045,.045,.16,10,Se,rt+.08,Tt,be);const ot=new ke(new es(.025,8,8),Ve);if(ot.scale.set(.8,1.5,.8),ot.position.set(Se,rt+.2,Tt),V.add(ot),yt){const St=new _n(16755021,5.5,7,1.5);St.position.set(Se,rt+.32,Tt),V.add(St),e.registerLight(St,{dayIntensity:.8,nightIntensity:5.5,flicker:!0})}}function w(V,Se,rt,Tt,yt=1){Z(V,"potted_plant_04",1.35*yt,Se,rt,Tt,Se*.35,{addShadow:!0})}function W(V,Se,rt,Tt,yt){const ot=new Xt;ot.position.set(Se,0,rt),ot.rotation.y=Tt;const St=new Fe({color:yt,roughness:.2,metalness:.85}),Ln=new Fe({color:988970,roughness:.1,metalness:.9}),Nn=new Fe({color:1118742,roughness:.88}),yn=new Fe({color:15680580,emissive:new Le(14427686),emissiveIntensity:1.5});B(ot,1.92,.58,4.3,0,.56,0,St),B(ot,1.62,.52,2.25,0,1.08,-.25,St),B(ot,1.56,.42,1.85,0,1.08,-.25,Ln);for(const[Pt,E]of[[-.94,1.32],[.94,1.32],[-.94,-1.32],[.94,-1.32]]){const k=new ke(new nn(.36,.36,.24,18),Nn);k.rotation.z=Math.PI/2,k.position.set(Pt,.36,E),k.castShadow=!0,ot.add(k);const j=new ke(new nn(.21,.21,.26,12),X);j.rotation.z=Math.PI/2,j.position.set(Pt,.36,E),ot.add(j)}B(ot,.38,.14,.08,-.62,.62,2.16,Ve,!1),B(ot,.38,.14,.08,.62,.62,2.16,Ve,!1),B(ot,.42,.12,.08,-.62,.65,-2.16,yn,!1),B(ot,.42,.12,.08,.62,.65,-2.16,yn,!1),V.add(ot)}const G=new Xt;G.position.y=0,s.add(G),t[0]=G,B(G,28,.24,18,0,-.12,10.5,o,!1,!0),B(G,28,.16,3.3,0,.08,3.15,l,!1,!0);for(let V=-3;V<=3;V++)B(G,.14,.02,5.4,V*3.4,.015,12.5,c,!1,!0);W(G,-8.5,12.5,0,12131356),W(G,-5.1,12.5,0,1120295),W(G,5.1,12.5,0,14870768),W(G,8.5,12.5,Math.PI,8138002);for(const[V,Se]of[[-11.5,4.9],[11.5,4.9],[-11.5,16.5],[11.5,16.5]]){Z(G,"street_lamp_01",5.4,V,0,Se,V<0?Math.PI/2:-Math.PI/2,{addShadow:!0});const rt=new ke(new es(.14,12,12),Ve);rt.position.set(V,4.95,Se),G.add(rt)}for(const[V,Se]of[[-14.5,5.2],[14.5,5.2],[-14.5,15.5],[14.5,15.5]]){B(G,1.5,.72,1.5,V,.36,Se,I),Z(G,"potted_plant_02",2.85,V,.72,Se,V*.22,{addShadow:!1});const rt=Se<10?1.25:-1.25;Z(G,"shrub_02",1.1,V,0,Se+rt,V*.35,{addShadow:!0})}const ie=new _n(16764808,22,32,1.3);ie.position.set(0,6.2,8.5),G.add(ie),e.registerLight(ie,{dayIntensity:1,nightIntensity:22}),B(G,6.4,.24,3.4,0,3.45,3.1,H);const J=Nd("NOCTURNE","#120610","#ff2a85","CABARET  •  SPEAKEASY  •  VIP"),De=new Fe({map:J,emissiveMap:J,emissive:new Le(16777215),emissiveIntensity:1.5,roughness:.2});e.registerEmissive(De,{dayIntensity:.4,nightIntensity:1.7}),B(G,4.8,.9,.14,0,4,4.78,De,!1),B(G,2.3,.03,4.2,0,.175,3.4,ce,!1,!0);for(const V of[-1.25,1.25]){for(const Se of[1.8,3.3,4.7])re(G,.04,.09,.92,10,V,.62,Se,O);B(G,.05,.05,3,V,.96,3.25,ce)}Te(G,0,m);const ve=new Fe({map:jx(12,9,1.5),roughness:.16,metalness:.45});B(G,12,.04,9,0,.02,-5.2,ve,!1,!0),B(G,12.15,.05,.12,0,.03,-.7,Et,!1),B(G,12.15,.05,.12,0,.03,-9.7,Et,!1),B(G,.12,.05,9.1,-6,.03,-5.2,Et,!1),B(G,.12,.05,9.1,6,.03,-5.2,Et,!1),B(G,8.6,.45,3.8,0,.225,-12.1,h);for(const V of[-4.6,-4.1,4.1,4.6])re(G,.26,.28,ee-.1,14,V,ee/2,-13.7,ce);B(G,1.6,1.08,7.6,-9.6,.54,-5.6,m),B(G,1.75,.08,7.8,-9.6,1.1,-5.6,F),B(G,.45,2.5,7,-12.5,1.4,-5.6,R);for(let V=-8.4;V<=-2.8;V+=.7)re(G,.055,.055,.28,10,-12.4,1.55,V,V%1.4===0?F:Et),re(G,.055,.055,.28,10,-12.4,2.15,V,Ve);for(let V=-8.2;V<=-3;V+=1.3)Z(G,"bar_chair_round_01",.78,-8.3,0,V,Math.PI/2,{addShadow:!0});Z(G,"wine_bottles_01",.36,-9.6,1.14,-4.4,Math.PI/2,{addShadow:!1}),Z(G,"wine_bottles_01",.36,-9.6,1.14,-6.8,Math.PI/2,{addShadow:!1}),Z(G,"Chandelier_01",1.35,0,ee-.05,-5.2,0,{addShadow:!1,hangFromCeiling:!0});const me=new Xt;me.position.set(-5.8,0,-11.2),me.rotation.y=.45;const Ze=new Fe({color:723984,roughness:.08,metalness:.55});B(me,1.6,.28,2.1,0,.78,0,Ze),B(me,1.54,.06,.35,0,.72,1.08,be);const le=B(me,1.56,.05,1.85,.25,1.16,-.05,Ze);le.rotation.z=-.35,re(me,.02,.02,.55,8,.65,1.05,.2,O);for(const[V,Se]of[[-.65,.85],[.65,.85],[0,-.85]])re(me,.05,.035,.7,10,V,.35,Se,Ze);B(me,.9,.08,.4,0,.48,1.65,je),B(me,.82,.44,.34,0,.22,1.65,Ze),G.add(me),Z(G,"ArmChair_01",.88,7.15,0,-2.5,Math.PI/2,{addShadow:!0}),Z(G,"ArmChair_01",.88,7.15,0,-5.5,Math.PI/2,{addShadow:!0}),Z(G,"coffee_table_round_01",.62,8.2,0,-2.5,0,{addShadow:!0}),Z(G,"coffee_table_round_01",.62,8.2,0,-5.5,.7,{addShadow:!0});for(const V of[-2.5,-5.5,-8.5])V<-6&&(re(G,.55,.55,.04,20,8,.78,V,m),re(G,.06,.14,.75,12,8,.375,V,O),Z(G,"dining_chair_02",.92,7.15,0,V,Math.PI/2,{addShadow:!0})),Z(G,"brass_candleholders",.26,8.2,V<-6?.8:.62,V,0,{addShadow:!1});const we=new _n(16737970,24,30,1.3);we.position.set(0,3.85,-6.5),G.add(we),e.registerLight(we,{dayIntensity:2,nightIntensity:24});const he=new Xt;he.position.y=ee,s.add(he),t[1]=he,Te(he,1,g),B(he,gt-2.6,.95,.08,-1.2,.48,1.48,Pe,!1),B(he,gt-2.6,.06,.14,-1.2,.97,1.48,H),B(he,6.2,1.05,1.35,-.5,.525,-9.8,N),B(he,6.3,.06,1.45,-.5,1.08,-9.8,g),B(he,1.35,.52,.62,-1.2,1.36,-9.8,F),B(he,1.1,.18,.22,-1.2,1.25,-9.45,X),re(he,.1,.14,.48,12,.1,1.35,-9.8,H),B(he,1.6,.65,.72,1.5,1.42,-9.75,Pe,!1);for(let V=1;V<=2;V+=.35)re(he,.08,.1,.08,10,V,1.15,-9.75,N);const He=Nd("LE VELVET CAFÉ","#1c1410","#d99a64","SPECIALTY ESPRESSO  •  EIXAMPLE"),Ee=new Fe({map:He,emissiveMap:He,emissive:new Le(16768936),emissiveIntensity:1});e.registerEmissive(Ee,{dayIntensity:.3,nightIntensity:1.2}),B(he,4.4,.8,.1,-.5,3.1,-14.2,Ee,!1),Z(he,"hanging_picture_frame_01",1.35,-6.2,1.85,-14.25,0,{addShadow:!1,customArtMat:Ne}),Z(he,"hanging_picture_frame_01",1.35,5.2,1.85,-14.25,0,{addShadow:!1,customArtMat:Ke}),Z(he,"coffee_table_round_01",.72,-5.8,0,-4,.26,{addShadow:!0}),Z(he,"coffee_table_round_01",.72,6,0,-4.2,-.44,{addShadow:!0}),Z(he,"ArmChair_01",.88,-6.9,0,-4,Math.PI/2,{addShadow:!0}),Z(he,"ArmChair_01",.88,7.1,0,-4.2,-Math.PI/2,{addShadow:!0});for(const[V,Se]of[[-2,-3.5],[2.2,-3.8]])re(he,.56,.56,.04,22,V,.76,Se,g),re(he,.05,.18,.74,12,V,.37,Se,H),re(he,.05,.045,.08,10,V+.1,.82,Se,be),Z(he,"brass_candleholders",.22,V-.15,.78,Se,.35,{addShadow:!1}),Z(he,"dining_chair_02",.9,V-.72,0,Se,Math.PI/2,{addShadow:!0}),Z(he,"dining_chair_02",.9,V+.72,0,Se,-Math.PI/2,{addShadow:!0});Z(he,"wine_bottles_01",.32,1.8,1.11,-9.8,0,{addShadow:!1}),Z(he,"Chandelier_01",1.15,-3.8,ee-.05,-4.5,0,{addShadow:!1,hangFromCeiling:!0}),Z(he,"Chandelier_01",1.15,3.8,ee-.05,-4.5,0,{addShadow:!1,hangFromCeiling:!0}),w(he,-11.5,0,-12.5,1.3),w(he,8.8,0,-12.5,1.2),w(he,-11.2,0,.2,1.1);const Je=new _n(16768944,20,28,1.3);Je.position.set(0,3.85,-5.5),he.add(Je),e.registerLight(Je,{dayIntensity:3,nightIntensity:20});const ne=new Xt;ne.position.y=2*ee,s.add(ne),t[2]=ne,Te(ne,2,h),B(ne,.16,ee,9.8,-5,ee/2,-9.4,T),B(ne,.16,ee,3.6,-5,ee/2,-.3,T),B(ne,.16,ee-2.4,2,-5,2.4+(ee-2.4)/2,-3.2,T),B(ne,.16,ee,4.8,4.4,ee/2,-12,T),B(ne,.16,ee,3.4,4.4,ee/2,-.2,T);for(const V of[-4.75,4.15,-12.65])re(ne,.22,.22,4.75,12,V,2.38,1.15,ce);Z(ne,"hanging_picture_frame_01",1.25,2.4,1.95,-14.25,0,{addShadow:!1,customArtMat:Ne}),Z(ne,"hanging_picture_frame_01",1.25,-2.8,2.25,-14.25,0,{addShadow:!1,customArtMat:Ke}),Z(ne,"ClassicConsole_01",.82,-.4,0,-13.15,0,{addShadow:!0});const ht=new ke(new nn(.76,.76,.04,36),K);ht.rotation.x=Math.PI/2,ht.position.set(-.4,1.65,-13.58),ne.add(ht);const U=new Go(new zo(.74,36),{clipBias:.003,textureWidth:512,textureHeight:512,color:10134706});U.position.set(-.4,1.65,-13.55),U.userData.hideOnDepthPass=!0,ne.add(U);const ge=new ke(new Do(.79,.035,14,48),O);ge.position.set(-.4,1.65,-13.545),ne.add(ge);for(let V=0;V<12;V++){const Se=V/12*Math.PI*2,rt=new ke(new es(.038,10,10),Ve);rt.position.set(-.4+Math.cos(Se)*.78,1.65+Math.sin(Se)*.78,-13.505),ne.add(rt)}const Y=new sn({color:14251782,roughness:.1,metalness:.1,transparent:!0,opacity:.85});re(ne,.04,.04,.14,12,.14,.89,-13.12,Y),re(ne,.018,.018,.04,10,.14,.98,-13.12,O),re(ne,.03,.03,.11,12,.24,.88,-13.16,Y),re(ne,.014,.014,.08,10,.02,.86,-13.06,O),re(ne,.012,.012,.04,10,.02,.91,-13.06,ce),re(ne,.04,.038,.12,12,-.68,.88,-13.12,be),Z(ne,"brass_candleholders",.24,-.92,.82,-13.14,.18,{addShadow:!1}),Z(ne,"Ottoman_01",.48,-.4,0,-12.05,-.26,{addShadow:!0}),B(ne,1.6,.06,.65,-3.5,.03,-13.2,R),re(ne,.02,.02,2,8,-4.2,1,-13.2,O),re(ne,.02,.02,2,8,-2.8,1,-13.2,O);const te=new ke(new nn(.02,.02,1.45,8),O);te.rotation.z=Math.PI/2,te.position.set(-3.5,1.98,-13.2),ne.add(te);for(let V=-4;V<=-3;V+=.24)B(ne,.14,1.1,.38,V,1.38,-13.2,V%.48===0?q:je);const ye=new _n(16766883,10,14,1.4);ye.position.set(-.4,1.85,-11.4),ne.add(ye),e.registerLight(ye,{dayIntensity:2.5,nightIntensity:10});const _e=new ke(new nn(.95,.82,.66,28),m);_e.scale.set(1.35,1,.72),_e.position.set(-9,.33,-7.8),_e.castShadow=!0,ne.add(_e);const We=new ke(new nn(.86,.86,.03,28),pt);We.scale.set(1.3,1,.68),We.position.set(-9,.665,-7.8),ne.add(We),n.push(We),re(ne,.025,.03,.95,10,-10.5,.48,-7.8,O),B(ne,.25,.04,.04,-10.38,.94,-7.8,O),B(ne,.08,2.4,2.8,-6.4,1.2,-10.6,bt,!1),B(ne,1.2,.42,.5,-11.2,.21,-10.8,x);for(let V=-11.55;V<=-10.85;V+=.35){const Se=new ke(new nn(.11,.11,.34,12),be);Se.rotation.x=Math.PI/2,Se.position.set(V,.52,-10.8),ne.add(Se)}C(ne,-7.8,.66,-7.1,!0),C(ne,-8.2,0,-6.6,!1),C(ne,-10.1,0,-6.9,!1),B(ne,1.35,.94,3.6,7.3,.47,-8,m),B(ne,1.45,.06,3.7,7.3,.96,-8,m),re(ne,.02,.025,.38,10,7.4,1.16,-7.4,O),re(ne,.055,.045,.09,12,6.8,1.03,-8.3,be),Z(ne,"wine_bottles_01",.34,7.3,.99,-8.8,Math.PI/2,{addShadow:!1});for(const V of[-9,-8,-7])Z(ne,"modern_ceiling_lamp_01",1.45,7.3,ee-.05,V,0,{addShadow:!1,hangFromCeiling:!0}),Z(ne,"bar_chair_round_01",.72,6.1,0,V,-Math.PI/2,{addShadow:!0});B(ne,1.8,.06,1.1,7.3,.75,-2.5,R);for(const[V,Se]of[[6.5,-2.95],[8.1,-2.95],[6.5,-2.05],[8.1,-2.05]])re(ne,.03,.02,.72,8,V,.36,Se,H);Z(ne,"dining_chair_02",.92,6.8,0,-1.65,Math.PI,{addShadow:!0}),Z(ne,"dining_chair_02",.92,7.8,0,-1.65,Math.PI,{addShadow:!0}),Z(ne,"dining_chair_02",.92,6.8,0,-3.35,0,{addShadow:!0}),Z(ne,"dining_chair_02",.92,7.8,0,-3.35,0,{addShadow:!0});const vt=new _n(16765852,10,14,1.4);vt.position.set(7.1,2.55,-7.8),ne.add(vt),e.registerLight(vt,{dayIntensity:2,nightIntensity:10}),B(ne,3.9,.28,4.1,-.5,.14,-3.2,R),B(ne,3.6,.02,3.8,-.5,.29,-3.1,ue,!1,!0),Z(ne,"GothicBed_01",1.52,-.5,.28,-3.35,0,{addShadow:!0});for(const V of[-1.85,.85])Z(ne,"ClassicNightstand_01",.58,V,.28,-4.15,0,{addShadow:!0}),Z(ne,"desk_lamp_arm_01",.44,V,.86,-4.15,V<0?-.44:.44,{addShadow:!1});Z(ne,"Chandelier_01",1.2,-.5,ee-.05,-3.2,0,{addShadow:!1,hangFromCeiling:!0});const It=new _n(16758896,9.5,12,1.4);It.position.set(-.5,1.85,-3.6),ne.add(It),e.registerLight(It,{dayIntensity:1.5,nightIntensity:9.5}),B(ne,gt-2.6,.95,.08,-1.2,.48,1.48,Pe,!1),B(ne,gt-2.6,.06,.14,-1.2,.97,1.48,H),Z(ne,"coffee_table_round_01",.65,2.5,0,.65,0,{addShadow:!0}),Z(ne,"ArmChair_01",.88,-3.3,0,-1.5,-.66,{addShadow:!0});const Ce=new Xt;Ce.position.y=3*ee,s.add(Ce),t[3]=Ce,Te(Ce,3,h),B(Ce,gt-2.6,.95,.08,-1.2,.48,1.48,Pe,!1),B(Ce,.18,ee,9,.2,ee/2,-9.8,T);for(const V of[-12.6,-.1,9.6])re(Ce,.22,.22,4.75,12,V,2.38,1.15,q);Z(Ce,"hanging_picture_frame_01",1.35,-4.8,2.25,-14.25,0,{addShadow:!1,customArtMat:Ke}),Z(Ce,"hanging_picture_frame_01",1.35,4.8,2.45,-14.25,0,{addShadow:!1,customArtMat:Ne}),B(Ce,3.2,.08,1.35,-4.8,.8,-10.5,R);for(const V of[-6.2,-3.4])B(Ce,.08,.78,1.1,V,.39,-10.5,H);re(Ce,.02,.025,.65,8,-4.2,1.15,-10.4,H);const Jt=new ke(new nn(.055,.055,.22,14),H);Jt.rotation.x=Math.PI/3,Jt.position.set(-4.5,1.42,-10.1),Ce.add(Jt),B(Ce,.32,.08,.2,-5.5,.88,-10.3,H),B(Ce,.05,.03,.02,-5.5,.88,-10.19,Et,!1),re(Ce,.02,.06,.32,10,-3.7,1,-10.5,O),Z(Ce,"desk_lamp_arm_01",.48,-6,.84,-10.55,-.78,{addShadow:!1}),B(Ce,.55,3.8,6.4,-12.4,1.9,-7.2,R);for(let V=.42;V<=3.12;V+=.68)for(let Se=-9.6;Se<=-4.8;Se+=1.55)Z(Ce,"book_encyclopedia_set_01",.34,-12.35,V,Se,Math.PI/2,{addShadow:!1});Z(Ce,"Sofa_01",.88,-5.5,0,-4.2,-1.48,{addShadow:!0}),Z(Ce,"modern_ceiling_lamp_01",1.35,-4.8,ee-.05,-8.5,0,{addShadow:!1,hangFromCeiling:!0});const fn=new _n(16758892,15,18,1.3);fn.position.set(-4.8,2.95,-9.2),Ce.add(fn),e.registerLight(fn,{dayIntensity:2,nightIntensity:11}),B(Ce,2.4,1.6,.22,4.8,.8,-12.4,q),B(Ce,2.2,.52,2.2,4.8,.26,-11.2,je),B(Ce,2.15,.14,1.8,4.8,.56,-11,ue),B(Ce,1.8,1.5,.08,8.2,1.55,-14.2,R);const Fr=new Fe({color:8266446,roughness:.5});for(let V=7.6;V<=8.8;V+=.4){const Se=new ke(new Do(.14,.03,10,20),V>8.1?je:Fr);Se.position.set(V,1.6,-14.12),Ce.add(Se)}re(Ce,.025,.04,1.05,10,4.8,.525,-8.8,H),B(Ce,.28,.14,.12,4.8,1.12,-8.8,be),Z(Ce,"modern_ceiling_lamp_01",1.35,4.8,ee-.05,-8.5,0,{addShadow:!1,hangFromCeiling:!0}),Z(Ce,"brass_candleholders",.28,6.4,0,-9.5,.44,{addShadow:!1}),C(Ce,6.4,0,-9.5,!0);const et=new Xt;et.position.y=4*ee,s.add(et),t[4]=et,B(et,gt,.24,kt,0,-.12,Ot,x,!1,!0),B(et,gt,1.05,.08,0,.525,1.45,Pe,!1),B(et,gt,1.05,.08,0,.525,-14.45,Pe,!1),B(et,.08,1.05,kt,-12.95,.525,Ot,Pe,!1),B(et,.08,1.05,kt,12.95,.525,Ot,Pe,!1),B(et,7,.28,4.2,-3,.14,-6.8,m),B(et,7.4,.66,.32,-3,.33,-8.95,m),B(et,7.4,.66,.32,-3,.33,-4.65,m),B(et,.32,.66,4.6,-6.55,.33,-6.8,m),B(et,.32,.66,4.6,.55,.33,-6.8,m),B(et,1.3,.22,.7,-5.65,.34,-5.35,m);const ii=B(et,6.8,.03,4,-3,.59,-6.8,pt,!1,!0);n.push(ii);const zi=new _n(2282478,18,18,1.35);zi.position.set(-3,.85,-6.8),et.add(zi),e.registerLight(zi,{dayIntensity:2.5,nightIntensity:18});const rs=new _n(16766629,14,16,1.4);rs.position.set(-1.6,2.85,-.9),et.add(rs),e.registerLight(rs,{dayIntensity:2,nightIntensity:14});for(const V of[-8.2,-5.6]){B(et,2.1,.24,.95,-9,.12,V,x),B(et,1.5,.12,.88,-8.75,.28,V,be);const Se=B(et,.62,.12,.88,-9.75,.44,V,be);Se.rotation.z=.48}for(const[V,Se]of[[2.2,-11.5],[8.8,-11.5],[2.2,-6.8],[8.8,-6.8]])B(et,.18,3.6,.18,V,1.8,Se,H);for(let V=-11.4;V<=-6.8;V+=.48)B(et,6.8,.08,.18,5.5,3.6,V,H);B(et,4.6,1.08,1.15,5.5,.54,-9.8,F),B(et,4.75,.06,1.25,5.5,1.1,-9.8,m),B(et,4.4,2.1,.45,5.5,1.1,-11.4,R);for(let V=3.6;V<=7.4;V+=.55)re(et,.05,.05,.28,10,V,1.45,-11.35,V%1.1===0?Ve:F);Z(et,"wine_bottles_01",.34,4.6,1.13,-9.8,0,{addShadow:!1}),Z(et,"brass_candleholders",.26,6.4,1.13,-9.8,.26,{addShadow:!1});for(let V=3.8;V<=7.2;V+=1.1)Z(et,"bar_chair_round_01",.78,V,0,-8.8,Math.PI,{addShadow:!0});const os=new _n(16758635,11,15,1.4);os.position.set(5.5,2.85,-9.2),et.add(os),e.registerLight(os,{dayIntensity:2,nightIntensity:11});for(const[V,Se]of[[-11.8,-13],[-11.8,-1],[11.5,-13],[11.5,-1]]){const rt=Se<-6;Z(et,rt?"potted_plant_02":"potted_plant_04",rt?2.15:1.65,V,0,Se,V*.35,{addShadow:!0})}return Z(et,"shrub_02",1.05,-7.6,0,-10.4,.44,{addShadow:!0}),Z(et,"shrub_02",1.05,1.4,0,-10.4,-.52,{addShadow:!0}),w(ne,-11.6,0,-5.8,1),{floorGroups:t,waterMeshes:n,frontGlassPanels:i,mirrorReflector:U}}class Zx{constructor(e){this.scene=e,this.root=null,this.mixer=null,this.actions={},this.currentActionName=null,this.loaded=!1}async load(e="./models/alina.glb"){const n=await new Bh().loadAsync(e);this.root=n.scene,this.root.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0,a.material&&(a.material.envMapIntensity=.75,a.material.needsUpdate=!0))}),this.mixer=new Mp(this.root);for(const a of n.animations||[]){const l=this.mixer.clipAction(a);a.name==="Laying"?(l.setLoop(ah),l.clampWhenFinished=!0):l.setLoop(lh),this.actions[a.name]=l}this.scene.add(this.root);const i=Vh(),r=new Zn({map:i,transparent:!0,opacity:.72,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}),o=new ke(new is(1.15,1.15),r);return o.rotation.x=-Math.PI/2,o.position.y=.015,o.userData.hideOnDepthPass=!0,this.root.add(o),this.loaded=!0,this.playAnimation("Idle"),Object.keys(this.actions)}playAnimation(e,t=.35){if(!this.loaded)return;const n=this.actions[e]||this.actions.Idle||Object.values(this.actions)[0];if(!n)return;const i=this.currentActionName?this.actions[this.currentActionName]:null;i&&i!==n?(n.reset(),n.play(),i.crossFadeTo(n,t,!0)):(n.reset(),n.play()),this.currentActionName=n.getClip().name}placeAtSpot(e){!this.root||!e||(this.root.position.set(e.alinaPos.x,e.alinaPos.y,e.alinaPos.z),this.root.rotation.set(0,e.alinaRotY||0,0),e.defaultAnim&&this.playAnimation(e.defaultAnim,.3))}update(e){this.mixer&&this.mixer.update(e)}}const Ud={type:"change"},oc={type:"start"},Gh={type:"end"},ho=new Ir,kd=new ui,Jx=Math.cos(70*Ro.DEG2RAD),Ft=new L,ln=2*Math.PI,xt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ca=1e-6;class Qx extends wp{constructor(e,t=null){super(e,t),this.state=xt.NONE,this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ds.ROTATE,MIDDLE:Ds.DOLLY,RIGHT:Ds.PAN},this.touches={ONE:As.ROTATE,TWO:As.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new vn,this._lastTargetPosition=new L,this._quat=new vn().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new sd,this._sphericalDelta=new sd,this._scale=1,this._panOffset=new L,this._rotateStart=new Ie,this._rotateEnd=new Ie,this._rotateDelta=new Ie,this._panStart=new Ie,this._panEnd=new Ie,this._panDelta=new Ie,this._dollyStart=new Ie,this._dollyEnd=new Ie,this._dollyDelta=new Ie,this._dollyDirection=new L,this._mouse=new Ie,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=tv.bind(this),this._onPointerDown=ev.bind(this),this._onPointerUp=nv.bind(this),this._onContextMenu=cv.bind(this),this._onMouseWheel=rv.bind(this),this._onKeyDown=ov.bind(this),this._onTouchStart=av.bind(this),this._onTouchMove=lv.bind(this),this._onMouseDown=iv.bind(this),this._onMouseMove=sv.bind(this),this._interceptControlDown=dv.bind(this),this._interceptControlUp=hv.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ud),this.update(),this.state=xt.NONE}update(e=null){const t=this.object.position;Ft.copy(t).sub(this.target),Ft.applyQuaternion(this._quat),this._spherical.setFromVector3(Ft),this.autoRotate&&this.state===xt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=ln:n>Math.PI&&(n-=ln),i<-Math.PI?i+=ln:i>Math.PI&&(i-=ln),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ft.setFromSpherical(this._spherical),Ft.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ft),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ft.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ft.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ho.origin.copy(this.object.position),ho.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ho.direction))<Jx?this.object.lookAt(this.target):(kd.setFromNormalAndCoplanarPoint(this.object.up,this.target),ho.intersectPlane(kd,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ca||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ca||this._lastTargetPosition.distanceToSquared(this.target)>Ca?(this.dispatchEvent(Ud),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ln/60*this.autoRotateSpeed*e:ln/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ft.setFromMatrixColumn(t,0),Ft.multiplyScalar(-e),this._panOffset.add(Ft)}_panUp(e,t){this.screenSpacePanning===!0?Ft.setFromMatrixColumn(t,1):(Ft.setFromMatrixColumn(t,0),Ft.crossVectors(this.object.up,Ft)),Ft.multiplyScalar(e),this._panOffset.add(Ft)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Ft.copy(i).sub(this.target);let r=Ft.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/t.clientHeight),this._rotateUp(ln*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/t.clientHeight),this._rotateUp(ln*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ie,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function ev(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function tv(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function nv(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Gh),this.state=xt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function iv(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ds.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=xt.DOLLY;break;case Ds.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=xt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=xt.ROTATE}break;case Ds.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=xt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=xt.PAN}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(oc)}function sv(s){switch(this.state){case xt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case xt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case xt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function rv(s){this.enabled===!1||this.enableZoom===!1||this.state!==xt.NONE||(s.preventDefault(),this.dispatchEvent(oc),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Gh))}function ov(s){this.enabled!==!1&&this._handleKeyDown(s)}function av(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case As.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=xt.TOUCH_ROTATE;break;case As.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=xt.TOUCH_PAN;break;default:this.state=xt.NONE}break;case 2:switch(this.touches.TWO){case As.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=xt.TOUCH_DOLLY_PAN;break;case As.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=xt.TOUCH_DOLLY_ROTATE;break;default:this.state=xt.NONE}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(oc)}function lv(s){switch(this._trackPointer(s),this.state){case xt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case xt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case xt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case xt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=xt.NONE}}function cv(s){this.enabled!==!1&&s.preventDefault()}function dv(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function hv(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class uv{constructor(e,t,n,i){this.container=e,this.scene=t,this.renderer=n,this.lighting=i;const r=e.clientWidth||720,o=e.clientHeight||480;this.camera=new Yt(42,r/o,.1,320),this.camera.position.set(.25,11.3,-8.1),this.controls=new Qx(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.06,this.controls.maxPolarAngle=Math.PI/2-.01,this.controls.minDistance=.8,this.controls.maxDistance=110,this.controls.target.set(-.4,11.18,-10.8),this.controls.update(),this.isTransitioning=!1,this.targetPos=this.camera.position.clone(),this.targetLook=this.controls.target.clone(),this.controls.addEventListener("start",()=>{this.isTransitioning=!1}),this.isDepthPass=!1,this.depthMaterial=this._createSkinnedLinearDepthMaterial(),this._bindResize()}_createSkinnedLinearDepthMaterial(){return new jn({uniforms:{uNear:{value:.6},uFar:{value:24}},vertexShader:`
        #include <common>
        #include <skinning_pars_vertex>
        varying float vViewZ;
        void main() {
          #include <skinbase_vertex>
          #include <begin_vertex>
          #include <skinning_vertex>
          vec4 mvPos = modelViewMatrix * vec4(transformed, 1.0);
          vViewZ = -mvPos.z;
          gl_Position = projectionMatrix * mvPos;
        }
      `,fragmentShader:`
        uniform float uNear;
        uniform float uFar;
        varying float vViewZ;
        void main() {
          float d = clamp((vViewZ - uNear) / max(uFar - uNear, 0.001), 0.0, 1.0);
          float val = 1.0 - pow(d, 0.82);
          gl_FragColor = vec4(vec3(val), 1.0);
        }
      `})}_bindResize(){this.onWindowResize=()=>{if(!this.container||!this.renderer||!this.camera)return;const e=Math.max(1,this.container.clientWidth),t=Math.max(1,this.container.clientHeight);this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1)},window.addEventListener("resize",this.onWindowResize),typeof ResizeObserver<"u"&&(this.resizeObserver=new ResizeObserver(()=>this.onWindowResize()),this.resizeObserver.observe(this.container))}flyTo(e,t){this.targetPos.set(e.x,e.y,e.z),this.targetLook.set(t.x,t.y,t.z),this.isTransitioning=!0}updateDepthRangeForFocus(e){const t=this.camera.position.distanceTo(e);this.depthMaterial.uniforms.uNear.value=Math.max(.4,t*.28),this.depthMaterial.uniforms.uFar.value=Math.max(t+8,t*2.8)}setDepthPass(e,t=null){this.isDepthPass=e,this.scene.traverse(n=>{var i;(i=n.userData)!=null&&i.hideOnDepthPass&&(n.visible=!e)}),e?(t&&this.updateDepthRangeForFocus(t),this.scene.overrideMaterial=this.depthMaterial,this.lighting.setDepthFogDisabled(!0),this.renderer.setClearColor(0,1)):(this.scene.overrideMaterial=null,this.lighting.setDepthFogDisabled(!1))}update(){this.isTransitioning&&(this.camera.position.lerp(this.targetPos,.09),this.controls.target.lerp(this.targetLook,.09),this.camera.position.distanceTo(this.targetPos)<.03&&this.controls.target.distanceTo(this.targetLook)<.03&&(this.camera.position.copy(this.targetPos),this.controls.target.copy(this.targetLook),this.isTransitioning=!1)),this.controls.update()}render(){this.isDepthPass&&this.updateDepthRangeForFocus(this.controls.target),this.renderer.render(this.scene,this.camera)}renderVertical916DataURL(e=1080,t=1920,n=null){const i=this.scene.overrideMaterial,r=this.scene.fog,o=this.scene.background,a=this.lighting.depthFogDisabled,l=[];this.scene.traverse(m=>{var _;(_=m.userData)!=null&&_.hideOnDepthPass&&(l.push([m,m.visible]),n===!0?m.visible=!1:n===!1&&(m.visible=!0))});const c=this.renderer.getSize(new Ie),d=this.renderer.getPixelRatio();n===!0?(this.updateDepthRangeForFocus(this.controls.target),this.scene.overrideMaterial=this.depthMaterial,this.lighting.setDepthFogDisabled(!0),this.renderer.setClearColor(0,1)):n===!1&&(this.scene.overrideMaterial=null,this.lighting.setDepthFogDisabled(!1));const h=this.camera.clone();h.aspect=e/t,h.updateProjectionMatrix(),this.renderer.setPixelRatio(1),this.renderer.setSize(e,t,!1),this.renderer.render(this.scene,h);const u=this.renderer.domElement.toDataURL("image/png");for(const[m,_]of l)m.visible=_;return this.renderer.setPixelRatio(d),this.renderer.setSize(c.x,c.y,!1),this.scene.overrideMaterial=i,this.lighting.setDepthFogDisabled(a),this.scene.fog=r,this.scene.background=o,this.renderer.render(this.scene,this.camera),u}getCameraTelemetry(){return{position:{x:Number(this.camera.position.x.toFixed(3)),y:Number(this.camera.position.y.toFixed(3)),z:Number(this.camera.position.z.toFixed(3))},target:{x:Number(this.controls.target.x.toFixed(3)),y:Number(this.controls.target.y.toFixed(3)),z:Number(this.controls.target.z.toFixed(3))},fov_deg:this.camera.fov}}}class fv{constructor(e,t,n,i,r,o){this.canvasEl=e,this.onProgress=t,this.onReady=n,this.onScreenshot=i,this.onFps=r,this.onDepthScreenshot=o,this.onFloorLoadProgress=null,this.instance=null,this.loading=!1,this.ready=!1,this.loadStartMs=0,this.loadDurationMs=null,this.pendingState=null,this.lastCameraTelemetry=null,window.AlinaUnityCallbacks={onReady:()=>{this.ready=!0,this.pendingState&&this.syncFullState(this.pendingState),this.onReady&&this.onReady(this.loadDurationMs)},onScreenshot:a=>{this.onScreenshot&&this.onScreenshot(a)},onDepthScreenshot:a=>{this.onDepthScreenshot&&this.onDepthScreenshot(a)},onCameraTelemetry:a=>{a&&a.position&&a.target&&(this.lastCameraTelemetry={...a,approximate:!1})},onFps:a=>{this.onFps&&this.onFps(a)},onFloorLoadProgress:a=>{this.onFloorLoadProgress&&this.onFloorLoadProgress(a)}}}async ensureLoaded(){if(this.instance)return this.instance;if(this.loading)return null;this.loading=!0,this.loadStartMs=performance.now();const e="./unity-build/Build",t=`${e}/unity-build.loader.js`;await new Promise((i,r)=>{if(typeof window.createUnityInstance=="function"){i();return}const o=document.createElement("script");o.src=t,o.async=!0,o.onload=i,o.onerror=()=>r(new Error(`No se pudo cargar ${t}`)),document.body.appendChild(o)});const n={arguments:[],dataUrl:`${e}/unity-build.data.unityweb`,frameworkUrl:`${e}/unity-build.framework.js.unityweb`,codeUrl:`${e}/unity-build.wasm.unityweb`,streamingAssetsUrl:"./unity-build/StreamingAssets",companyName:"LMNJDRS",productName:"AlinaSanctuary",productVersion:"3.0",matchWebGLToCanvasSize:!0};return this.instance=await window.createUnityInstance(this.canvasEl,n,i=>{this.onProgress&&this.onProgress(Math.round(i*100))}),this.loadDurationMs=Math.round(performance.now()-this.loadStartMs),this.loading=!1,this.ready=!0,this.pendingState&&this.syncFullState(this.pendingState),this.onReady&&this.onReady(this.loadDurationMs),this.instance}_send(e,t){if(!(!this.instance||!this.ready))try{t===void 0?this.instance.SendMessage("AlinaSanctuaryBridge",e):this.instance.SendMessage("AlinaSanctuaryBridge",e,t)}catch(n){console.warn("[UnityBridge] SendMessage error:",e,n)}}syncFullState(e){this.pendingState={...e},!(!this.instance||!this.ready)&&(this._send("SetLightingMode",e.lightingMode),this._send("SetDollhouseSlice",e.sliced?1:0),this._send("SelectFloor",e.floor),this._send("SelectSpot",e.spotId),e.anim&&this._send("SetAnimation",e.anim),e.renderPass&&this._send("SetRenderPass",e.renderPass))}sendRenderPass(e){this.pendingState&&(this.pendingState.renderPass=e),this._send("SetRenderPass",e)}sendFloor(e){this.pendingState&&(this.pendingState.floor=e),this._send("SelectFloor",e)}sendSpot(e){this.pendingState&&(this.pendingState.spotId=e),this._send("SelectSpot",e)}sendLightingMode(e){this.pendingState&&(this.pendingState.lightingMode=e),this._send("SetLightingMode",e)}sendDollhouseSlice(e){this.pendingState&&(this.pendingState.sliced=e),this._send("SetDollhouseSlice",e?1:0)}sendCameraAngle(e){this._send("SetCameraAngle",e)}sendAnimation(e){this.pendingState&&(this.pendingState.anim=e),this._send("SetAnimation",e)}applyCinemaShot(e){const t=typeof e=="string"?e:JSON.stringify(e);this._send("ApplyCinemaShot",t)}playCameraMove(e){const t=typeof e=="string"?e:JSON.stringify(e);this._send("PlayCameraMove",t)}requestScreenshot916(){this._send("CaptureFrame916")}requestDepthScreenshot916(){this._send("CaptureDepth916")}requestCameraTelemetry(){this._send("RequestCameraTelemetry")}flyCameraTo(e,t){!e||!t||this._send("FlyCameraToJson",JSON.stringify({position:e,target:t}))}}const _r=Math.PI/180,ws={x:0,y:1,z:0},En=(s,e)=>({x:s.x+e.x,y:s.y+e.y,z:s.z+e.z}),Wh=(s,e)=>({x:s.x-e.x,y:s.y-e.y,z:s.z-e.z}),jt=(s,e)=>({x:s.x*e,y:s.y*e,z:s.z*e}),jh=s=>Math.hypot(s.x,s.y,s.z),hr=(s,e)=>jh(Wh(s,e)),Ri=s=>{const e=jh(s)||1;return jt(s,1/e)},uo=(s,e)=>({x:s.y*e.z-s.z*e.y,y:s.z*e.x-s.x*e.z,z:s.x*e.y-s.y*e.x}),Dl=(s,e,t)=>({x:s.x+(e.x-s.x)*t,y:s.y+(e.y-s.y)*t,z:s.z+(e.z-s.z)*t}),Yi=s=>({x:+s.x.toFixed(3),y:+s.y.toFixed(3),z:+s.z.toFixed(3)});function pv(s,e){return s.sensorGates[e]||s.sensorGates["9:16"]}function mv(s,e,t){const n=pv(t,e);return 2*Math.atan(n.sensorHeightMm/(2*s))/_r}function gv(s,e){const t=Math.min(1,Math.max(0,e));switch(s){case"linear":return t;case"easeOutCubic":return 1-Math.pow(1-t,3);case"easeInOutCubic":return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;case"easeInOutSine":default:return-(Math.cos(Math.PI*t)-1)/2}}function Lr(s){return{directors:new Map(s.directorStyles.map(e=>[e.id,e])),shotTypes:new Map(s.shotTypes.map(e=>[e.id,e])),moves:new Map(s.cameraMoves.map(e=>[e.id,e])),lights:new Map(s.lightingSchemes.map(e=>[e.id,e]))}}function Xh(s,e){var o;const t=Lr(e),n=t.shotTypes.get(s.shotTypeId),i=t.moves.get(s.cameraMoveId),r=[];return s.durationSec>4&&r.push(`Regla 07: plano de ${s.durationSec}s (> 4.0s)`),s.cameraMoveId==="handheld_walking_lubezki"&&s.durationSec>3&&r.push(`Walking Selfie: ${s.durationSec}s (> 3.0s)`),i&&i.arcDegrees>25&&r.push(`Regla 02: arco ${i.arcDegrees}° (> 25°)`),n&&n.shotRoleDefault==="A-Roll"&&n.id!=="ots_mirror"&&n.maxSafeHeadYawDeg>25&&r.push(`Regla 02: yaw seguro ${n.maxSafeHeadYawDeg}° (> 25°)`),s.shotRole==="A-Roll"&&(s.motionStrength??2)>3.5&&r.push(`Regla 03: motion ${s.motionStrength} (> 3.5)`),s.mirrorShot&&(((o=s.controlNetOverrides)==null?void 0:o.depthWeight)??1)>.4&&r.push("mirrorShot: depthWeight debe ser ≤ 0.40"),{ok:r.length===0,issues:r}}function _v(s,e){const t=[];let n=0,i=0,r=0;for(const o of s.shots)Xh(o,e).issues.forEach(l=>t.push(`${o.shotId}: ${l}`)),r+=o.durationSec,o.shotRole==="A-Roll"?n++:i++;return i<2&&t.push(`Fórmula 1:2: faltan B-Roll (${i} < 2)`),Math.abs(r-s.audioTrack.durationSec)>.01&&t.push(`Duración: planos ${r}s ≠ audio ${s.audioTrack.durationSec}s`),{ok:t.length===0,issues:t,aRoll:n,bRoll:i,totalSec:r}}function fo(s,e,t,n,i={}){var d,h;const r=n.spotCinematographyMap[s];if(!r)throw new Error(`Spot sin mapa cinematográfico: ${s}`);const o=Lr(n);if(e==="B-Roll"){const u=r.defaultBRollPresets[t%r.defaultBRollPresets.length],m=o.directors.get(r.defaultARollPreset.directorStyleId);return{shotId:`auto_${s}_broll${t}`,spotId:s,shotRole:"B-Roll",directorStyleId:m.id,shotTypeId:u.shotTypeId,cameraMoveId:u.cameraMoveId,lightingSchemeId:r.defaultARollPreset.lightingSchemeId,focalLengthMm:u.focalMm,apertureFStop:2.8,durationSec:u.durationSec,animation:"Idle",focusMode:"macro_prop_lock",brollIndex:t,mirrorShot:!1,motionStrength:o.moves.get(u.cameraMoveId).recommendedMotionStrength,...i}}const a=r.defaultARollPreset;o.directors.get(a.directorStyleId);const l=o.shotTypes.get(a.shotTypeId),c=o.moves.get(a.cameraMoveId);return{shotId:`auto_${s}_aroll`,spotId:s,shotRole:"A-Roll",directorStyleId:a.directorStyleId,shotTypeId:a.shotTypeId,cameraMoveId:a.cameraMoveId,lightingSchemeId:a.lightingSchemeId,focalLengthMm:l.defaultFocalMm,apertureFStop:l.defaultAperture,durationSec:c.recommendedDurationSec,animation:"Idle",focusMode:l.id==="ots_mirror"?"mirror_reflection_plane":"iris_lock",mirrorShot:!!((d=r.specialFlags)!=null&&d.mirrorShot&&l.id==="ots_mirror"),motionStrength:c.recommendedMotionStrength,controlNetOverrides:(h=r.specialFlags)!=null&&h.mirrorShot&&l.id==="ots_mirror"?{depthWeight:r.specialFlags.controlNetDepthWeightOverride??.35}:void 0,...i}}function xv(s){return s.replace(/--ar\s+\S+/gi,"").replace(/\b\d{2,3}\s?mm(?:\s+(?:prime\s+lens|portrait\s+lens|lens|f\/[\d.]+))?(?:\s+f\/[\d.]+)?/gi,"").replace(/\s{2,}/g," ").replace(/\s+,/g,",").trim()}function vv(s){return s==="vanity"?"perfume_bottle":s==="podcast"?"vintage_microphone":["bar","pool","cabaret"].includes(s)?"crystal_glass":"monstera_leaf"}function yv({shot:s,spot:e,catalog:t,aspectRatio:n,foregroundProp:i=null}){var _;const r=Lr(t),o=r.directors.get(s.directorStyleId),a=r.shotTypes.get(s.shotTypeId),l=r.moves.get(s.cameraMoveId),c=r.lights.get(s.lightingSchemeId),d=`${s.focalLengthMm}mm f/${s.apertureFStop} lens`,h=i?i.promptTokens:null;let u;if(s.shotRole==="B-Roll")u=[(((_=e.brolls)==null?void 0:_[s.brollIndex??0])||"").replace(/^B-Roll \d+:\s*/i,""),h,a.promptTokens,d,c.promptLightingTokens,o.fluxPromptTokens].filter(Boolean).join(", ");else{const g=xv(e.prompt||"");u=[/Alina Van Dijk/i.test(g)?"":t.characterReference.tokenLockPrompt,g,h,a.promptTokens,d,c.promptLightingTokens,o.fluxPromptTokens].filter(Boolean).join(", ")}u+=` --ar ${n}`;const m=`${l.motionPromptTokens}, ${o.motionPromptStyle}`;return{flux:u,motion:m}}function bv({shot:s,spot:e,catalog:t,building:n,aspectRatio:i="9:16",baseMode:r="night"}){const o=Lr(t),a=o.directors.get(s.directorStyleId),l=o.shotTypes.get(s.shotTypeId),c=o.moves.get(s.cameraMoveId),d=o.lights.get(s.lightingSchemeId),u=(t.spotCinematographyMap[s.spotId]||{specialFlags:{}}).specialFlags||{};if(!a||!l||!c||!d)throw new Error(`Plano con ids inválidos: ${s.shotId}`);const m=e.floor*n.floorHeight,_=!!u.isLayingPosture||s.animation==="Laying",g=[];let f=e.alinaRotY||0,p=null;s.mirrorShot&&u.mirrorCenter&&(p={x:u.mirrorCenter.x,y:m+u.mirrorCenter.yOffset,z:u.mirrorCenter.z},f=Math.atan2(p.x-e.alinaPos.x,p.z-e.alinaPos.z));const M={x:Math.sin(f),y:0,z:Math.cos(f)},A={x:Math.cos(f),y:0,z:-Math.sin(f)};let b,I=M,S=A;if(s.shotRole==="B-Roll"&&e.macroTarget&&e.macroPos)b={...e.macroTarget},I=Ri({x:e.macroPos.x-e.macroTarget.x,y:0,z:e.macroPos.z-e.macroTarget.z}),S=Ri(uo(ws,I));else{const B=_?l.layingHeightOverrideM??.22:l.targetHeightM;b={x:e.alinaPos.x,y:e.alinaPos.y+B,z:e.alinaPos.z},p&&(b=Dl(b,p,.5))}let y=l.azimuthOffsetDeg;s.shotRole==="B-Roll"&&(s.brollIndex??0)%2===1&&(y=-y);const T=y*_r,v=l.elevationDeg*_r,x=En(jt(I,Math.cos(T)),jt(S,Math.sin(T))),R=Ri(En(jt(x,Math.cos(v)),jt(ws,Math.sin(v)))),N=En(b,jt(R,l.distanceM)),F=Ri(uo(ws,x)),O=B=>En(N,En(jt(F,B.right),En(jt(ws,B.up),jt(R,B.forward))));let X=O(c.startOffsetLocal),H=O(c.endOffsetLocal);const Q=n.width/2,q=n.centerZ-n.depth/2,ce=n.centerZ+n.depth/2,ue=!!u.isExterior;let be=!1;const Ue=B=>{const re={...B};return ue?re.y=Math.max(m+.3,re.y):(re.x=Math.min(Q-.4,Math.max(-Q+.4,re.x)),re.z=Math.min(ce+1.4,Math.max(q+.4,re.z)),re.y=Math.min(m+n.floorHeight-.35,Math.max(m+.3,re.y))),(re.x!==B.x||re.y!==B.y||re.z!==B.z)&&(be=!0),re};X=Ue(X),H=Ue(H);const je=B=>ue?B.y>=m+.3:B.x>=-Q+.35-1e-6&&B.x<=Q-.35+1e-6&&B.z>=q+.35-1e-6&&B.z<=ce+1.5&&B.y>=m+.3-1e-6&&B.y<=m+n.floorHeight-.3,K=je(X)&&je(H);be&&g.push("Wall Guard recortó la trayectoria al volumen interior");const ae=s.shotRole==="B-Roll"?b:{x:e.alinaPos.x,y:b.y,z:e.alinaPos.z},Re=hr(X,ae),pe=hr(H,ae);let Ne=Re,Ke=pe;if(s.focusMode==="rack_prop_to_iris"&&(Ne=.48*pe,Ke=pe),s.focusMode==="mirror_reflection_plane"&&p){const B=hr(p,ae);Ne=hr(X,p)+B,Ke=hr(H,p)+B}const Pe={x:e.alinaPos.x,y:e.alinaPos.y+(_?.25:1.35),z:e.alinaPos.z},bt=B=>{const re=B.azimuthDeg*_r,Te=B.elevationDeg*_r,ct=Ri(En(jt(En(jt(M,Math.cos(re)),jt(A,Math.sin(re))),Math.cos(Te)),jt(ws,Math.sin(Te))));return Yi(En(Pe,jt(ct,B.distanceM)))},pt=B=>({worldPos:bt(B),targetPos:Yi(Pe),colorHex:B.colorHex,intensity:B.intensity,spotAngleDeg:B.spotAngleDeg??55,kelvin:B.kelvin});d.compatibleBaseModes.includes(r)||g.push(`Luz '${d.id}' no recomendada en modo ${r}`);let Ve=null;if(s.foregroundFraming&&t.foregroundProps){const B=s.foregroundPropId||vv(s.spotId),re=t.foregroundProps[B]||t.foregroundProps.monstera_leaf;if(re){const Te=Ri(Wh(b,X)),ct=Ri(uo(Te,ws)),Z=Ri(uo(ct,Te)),C=En(X,En(jt(Te,re.distanceMeters),En(jt(ct,re.lateralOffsetM),jt(Z,re.verticalOffsetM))));Ve={propId:re.id,name:re.name,polyhavenModelId:re.polyhavenModelId,worldPos:Yi(C),scale:re.scale,distanceFromCameraM:re.distanceMeters,promptTokens:re.promptTokens}}}const D=Xh(s,t),Et=yv({shot:s,spot:e,catalog:t,aspectRatio:i,foregroundProp:Ve});return{shotId:s.shotId,spotId:s.spotId,baseMode:r,animation:s.animation,mirrorShot:!!s.mirrorShot,foregroundFraming:!!s.foregroundFraming,foregroundProp:Ve,alinaRotY:+f.toFixed(4),camera:{startPos:Yi(X),startTarget:Yi(b),endPos:Yi(H),endTarget:Yi(b),verticalFovDeg:+mv(s.focalLengthMm,i,t).toFixed(2),focalMm:s.focalLengthMm,rollDeg:l.rollDeg,durationSec:s.durationSec,easing:c.easing,handheldHz:c.handheldHz,handheldAmpM:c.handheldAmpM},dof:{enabled:!0,focalLengthMm:s.focalLengthMm,apertureFStop:s.apertureFStop,startFocusDistM:+Ne.toFixed(3),endFocusDistM:+Ke.toFixed(3)},realtimeRig:{keyLight:pt(d.realtimeKeyLight),rimLight:pt(d.realtimeRimLight),ambientMultiplier:d.ambientMultiplier,reflectionMultiplier:d.reflectionMultiplier,fogDensityOverride:d.fogDensityOverride},volumeGrade:a.volumeProfileGrade,threeJsGrade:a.threeJsGrade,prompts:Et,zeroWaste:D,boundsOk:K,clamped:be,warnings:g}}const Sv={name:"Alina Van Dijk",heightMeters:1.72,eyeHeightM:1.56,mouthHeightM:1.5,chestHeightM:1.3,waistHeightM:1.06,hipsHeightM:.94,feetHeightM:.05,layingEyeHeightM:.24,layingChestHeightM:.16,allowedAnimations:["Idle","Walk","Rumba","Laying","HipHop"],tokenLockPrompt:"28yo Dutch-Latin woman Alina Van Dijk, vivid copper red hair with natural soft waves, vivid emerald green eyes, light natural freckles, crimson lips, micro-pores"},Mv={"9:16":{sensorWidthMm:20.25,sensorHeightMm:36,description:"35mm Full Frame rotated 90 deg vertical cinema gate (portrait native)"},"4:5":{sensorWidthMm:28.8,sensorHeightMm:36,description:"35mm Full Frame rotated portrait editorial gate"},"16:9":{sensorWidthMm:36,sensorHeightMm:20.25,description:"35mm Full Frame landscape cinema gate"},"21:9":{sensorWidthMm:36,sensorHeightMm:15.43,description:"35mm Anamorphic 2.39:1 gate"}},wv=[{id:"fincher_cronenweth",name:"David Fincher — Control Clínico & Precisión",dp:"Jeff Cronenweth",moodTags:["clínico","autoridad","psicoanálisis","tensión controlada"],funnelStages:["Conversión Fanvue & Telegram VIP","Trabajo & Terapia"],defaultFocalMm:50,defaultAperture:1.8,preferredShotTypes:["mcu_interview","cu_portrait","ots_mirror","macro_broll_prop"],preferredMoves:["slow_dolly_push_in","static_breathing","rack_focus_macro_to_eyes"],defaultLightingSchemeId:"fincher_top_soft_negfill",volumeProfileGrade:{postExposure:-.08,contrast:18,saturation:-12,temperature:-14,tint:6,splitShadowsHex:"#162A2C",splitHighlightsHex:"#E3C898",bloomIntensity:.16,vignetteIntensity:.28},threeJsGrade:{toneMappingExposure:1.08,environmentIntensityMultiplier:.72},zeroWasteMotionRange:{min:1.5,max:2.6},fluxPromptTokens:"David Fincher aesthetic, Jeff Cronenweth clinical cinematography, razor-sharp focus on iris, clean symmetrical composition, deep controlled shadows with subtle cyan-amber color separation, negative fill contrast, Hasselblad crispness",motionPromptStyle:"Calculated precision mechanical dolly push-in, zero handheld jitter, steady hypnotic eye lock"},{id:"wong_kar_wai_doyle",name:"Wong Kar-wai — Seducción Nocturna & Neón Clandestino",dp:"Christopher Doyle",moodTags:["sensual","nocturno","neón","intimidad furtiva"],funnelStages:["Mundo Exterior / Viral Dance & Reels","Conversión Fanvue & Telegram VIP"],defaultFocalMm:35,defaultAperture:1.4,preferredShotTypes:["mcu_interview","ots_mirror","ms_waist","macro_broll_prop"],preferredMoves:["lateral_slider_truck","subtle_parallax_arc","static_breathing"],defaultLightingSchemeId:"wong_neon_practical",volumeProfileGrade:{postExposure:.05,contrast:22,saturation:14,temperature:-6,tint:14,splitShadowsHex:"#0E3B35",splitHighlightsHex:"#FF8C66",bloomIntensity:.42,vignetteIntensity:.34},threeJsGrade:{toneMappingExposure:1.24,environmentIntensityMultiplier:.9},zeroWasteMotionRange:{min:2,max:3},fluxPromptTokens:"Wong Kar-wai and Christopher Doyle cinematography, lush sensual 35mm anamorphic bokeh, rich emerald and crimson neon practical glow, soft foreground framing blur, poetic nocturnal Hong Kong speakeasy mood, 35mm film grain texture",motionPromptStyle:"Languid drifting lateral glide, soft candle and neon shimmer, dreamy slow tempo"},{id:"villeneuve_deakins",name:"Denis Villeneuve — Monumentalidad & Luz Motivada Única",dp:"Roger Deakins",moodTags:["arquitectónico","contemplativo","agua","lujo silencioso"],funnelStages:["High-Ticket / Membresía Anual","Top-Funnel / Intimidad Cotidiana"],defaultFocalMm:40,defaultAperture:2,preferredShotTypes:["ws_architectural","ms_waist","fs_full_body","top_down_zenital"],preferredMoves:["pedestal_reveal_up","slow_dolly_push_in","slow_dolly_pull_out"],defaultLightingSchemeId:"deakins_single_window",volumeProfileGrade:{postExposure:-.04,contrast:20,saturation:-8,temperature:8,tint:-2,splitShadowsHex:"#1B2838",splitHighlightsHex:"#F5D0A9",bloomIntensity:.24,vignetteIntensity:.26},threeJsGrade:{toneMappingExposure:1.12,environmentIntensityMultiplier:.85},zeroWasteMotionRange:{min:1.6,max:2.5},fluxPromptTokens:"Roger Deakins and Denis Villeneuve cinematography, monumental architectural symmetry, single motivated natural light source casting clean geometric shadows, delicate atmospheric mist, tactile basalt stone and water reflections",motionPromptStyle:"Solemn slow architectural pedestal rise, serene minimal subject motion, meditative stillness"},{id:"guadagnino_mukdeeprom",name:"Luca Guadagnino — Sensorialidad Táctil & Luz Mediterránea",dp:"Sayombhu Mukdeeprom",moodTags:["sensorial","diurno","espresso","táctil"],funnelStages:["Descubrimiento & Street Lifestyle","Top-Funnel / Intimidad Cotidiana"],defaultFocalMm:50,defaultAperture:2,preferredShotTypes:["ms_waist","cu_portrait","macro_broll_prop","cowboy_american"],preferredMoves:["lateral_slider_truck","slow_dolly_push_in","rack_focus_macro_to_eyes"],defaultLightingSchemeId:"guadagnino_golden_bounce",volumeProfileGrade:{postExposure:.12,contrast:8,saturation:10,temperature:18,tint:4,splitShadowsHex:"#3A2C24",splitHighlightsHex:"#FFE0B2",bloomIntensity:.26,vignetteIntensity:.16},threeJsGrade:{toneMappingExposure:1.2,environmentIntensityMultiplier:1.05},zeroWasteMotionRange:{min:2,max:3},fluxPromptTokens:"Luca Guadagnino and Sayombhu Mukdeeprom 35mm Kodak Portra aesthetic, warm Mediterranean side-window daylight, tactile marble copper and linen textures, intimate unhurried sensual realism, golden warm skin bounce",motionPromptStyle:"Gentle organic push-in and tactile macro slider glide, relaxed natural breathing"},{id:"kubrick_alcott",name:"Stanley Kubrick — Simetría Hipnótica & Luz de Velas",dp:"John Alcott",moodTags:["dominación","simetría","tenebrismo","velas 2200K"],funnelStages:["Conversión Fanvue & Telegram VIP","Top-Funnel / Intimidad Cotidiana"],defaultFocalMm:35,defaultAperture:1.4,preferredShotTypes:["low_angle_authority","ws_architectural","cu_portrait","top_down_zenital"],preferredMoves:["slow_dolly_push_in","static_breathing","slow_dolly_pull_out"],defaultLightingSchemeId:"kubrick_candlelight_2200k",volumeProfileGrade:{postExposure:-.1,contrast:26,saturation:4,temperature:22,tint:2,splitShadowsHex:"#140F14",splitHighlightsHex:"#FFB76B",bloomIntensity:.34,vignetteIntensity:.38},threeJsGrade:{toneMappingExposure:1.15,environmentIntensityMultiplier:.65},zeroWasteMotionRange:{min:1.4,max:2.4},fluxPromptTokens:"Stanley Kubrick and John Alcott Barry Lyndon candlelight aesthetic, one-point perspective symmetry, subtle low-angle dominance, ultra-fast f/1.4 practical 2200K flickering candlelight, rich chiaroscuro velvet and brass",motionPromptStyle:"Hypnotic locked symmetrical forward tracking glide, commanding stationary posture"},{id:"lubezki_natural",name:"Emmanuel Lubezki — Inmersión Fluida & Contraluz Natural",dp:"Emmanuel Lubezki",moodTags:["walking","dinámico","espontáneo","contraluz"],funnelStages:["Descubrimiento & Street Lifestyle","Mundo Exterior / Viral Dance & Reels"],defaultFocalMm:24,defaultAperture:2.4,preferredShotTypes:["ms_waist","cowboy_american","fs_full_body","low_angle_authority"],preferredMoves:["handheld_walking_lubezki","subtle_parallax_arc","pedestal_reveal_up"],defaultLightingSchemeId:"lubezki_ambient_backlight",volumeProfileGrade:{postExposure:.08,contrast:12,saturation:6,temperature:12,tint:0,splitShadowsHex:"#202A38",splitHighlightsHex:"#FFD29D",bloomIntensity:.3,vignetteIntensity:.18},threeJsGrade:{toneMappingExposure:1.18,environmentIntensityMultiplier:1.1},zeroWasteMotionRange:{min:2.4,max:3.2},fluxPromptTokens:"Emmanuel Lubezki wide-angle 24mm immersive proximity, natural golden or streetlamp rim backlight catching copper red hair strands, realistic environmental depth, candid living movement, sharp foreground subject",motionPromptStyle:"Fluid 1.7Hz handheld walking presence, gentle parallax wrap, strict 3.0s clip limit"},{id:"refn_neon_noir",name:"Nicolas Winding Refn — Neon Noir & Contraste Cromático",dp:"Natasha Braier / Darius Khondji",moodTags:["cabaret","baile","magenta-cian","hipnótico"],funnelStages:["Mundo Exterior / Viral Dance & Reels","High-Ticket / Membresía Anual"],defaultFocalMm:50,defaultAperture:1.6,preferredShotTypes:["fs_full_body","cowboy_american","ecu_eyes","low_angle_authority"],preferredMoves:["static_breathing","slow_dolly_push_in","subtle_parallax_arc"],defaultLightingSchemeId:"wong_neon_practical",volumeProfileGrade:{postExposure:-.05,contrast:30,saturation:22,temperature:-10,tint:18,splitShadowsHex:"#101A36",splitHighlightsHex:"#FF4FA3",bloomIntensity:.48,vignetteIntensity:.36},threeJsGrade:{toneMappingExposure:1.22,environmentIntensityMultiplier:.78},zeroWasteMotionRange:{min:2,max:3},fluxPromptTokens:"Nicolas Winding Refn neon noir cinematography, sculptural magenta and cyan split lighting, specular reflections on black marble, bold geometric framing, magnetic hypnotic poise",motionPromptStyle:"Locked vertical tripod or ultra-slow push-in, rhythmic center-of-mass stability, feet anchored"},{id:"coppola_intimate",name:"Sofia Coppola — Intimidad Suave & Susurro Editorial",dp:"Philippe Le Sourd",moodTags:["íntimo","spa","tocador","susurro ASMR"],funnelStages:["Top-Funnel / Intimidad Cotidiana","Conversión Fanvue & Telegram VIP"],defaultFocalMm:85,defaultAperture:1.4,preferredShotTypes:["cu_portrait","ecu_eyes","ots_mirror","top_down_zenital"],preferredMoves:["static_breathing","slow_dolly_push_in","rack_focus_macro_to_eyes"],defaultLightingSchemeId:"coppola_soft_window_spa",volumeProfileGrade:{postExposure:.1,contrast:6,saturation:-4,temperature:10,tint:8,splitShadowsHex:"#2C2538",splitHighlightsHex:"#FCE2C4",bloomIntensity:.32,vignetteIntensity:.22},threeJsGrade:{toneMappingExposure:1.16,environmentIntensityMultiplier:.95},zeroWasteMotionRange:{min:1.5,max:2.4},fluxPromptTokens:"Sofia Coppola and Philippe Le Sourd delicate editorial portrait, soft diffused window light, creamy 85mm f/1.4 shallow depth of field, intimate serene vulnerability, refined porcelain and silk atmosphere",motionPromptStyle:"Whisper-quiet slow push-in or gentle rack focus from reflection/prop to emerald eyes"}],Ev=[{id:"ecu_eyes",label:"Primerísimo Primer Plano (ECU Ojos / Labios)",shotRoleDefault:"A-Roll",targetAnchor:"eyes",targetHeightM:1.56,layingHeightOverrideM:.24,defaultFocalMm:100,defaultAperture:1.8,distanceM:1.25,azimuthOffsetDeg:4,elevationDeg:0,rollDeg:0,maxSafeHeadYawDeg:12,zeroWasteRisk:"Bajo",promptTokens:"extreme close-up portrait framing emerald eyes and subtle smirk, 100mm f/1.8 macro depth of field, hyper-detailed corneal reflection and natural nasal bridge freckles"},{id:"cu_portrait",label:"Primer Plano (CU Rostro & Hombros)",shotRoleDefault:"A-Roll",targetAnchor:"eyes",targetHeightM:1.52,layingHeightOverrideM:.22,defaultFocalMm:85,defaultAperture:1.4,distanceM:1.8,azimuthOffsetDeg:8,elevationDeg:2,rollDeg:0,maxSafeHeadYawDeg:18,zeroWasteRisk:"Bajo",promptTokens:"intimate close-up portrait from collarbone to crown, 85mm f/1.4 prime lens, creamy bokeh background separation, crisp iris focus"},{id:"mcu_interview",label:"Plano Medio Corto (MCU Podcast / Confesionario)",shotRoleDefault:"A-Roll",targetAnchor:"chest",targetHeightM:1.42,layingHeightOverrideM:.2,defaultFocalMm:85,defaultAperture:1.4,distanceM:2.45,azimuthOffsetDeg:10,elevationDeg:2,rollDeg:0,maxSafeHeadYawDeg:20,zeroWasteRisk:"Bajo",promptTokens:"medium close-up chest-up framing, 85mm f/1.4 portrait lens, clinical poise, balanced headroom in 4.9m architectural room"},{id:"ms_waist",label:"Plano Medio (MS Cintura & Manos Ancladas)",shotRoleDefault:"A-Roll",targetAnchor:"waist",targetHeightM:1.24,layingHeightOverrideM:.18,defaultFocalMm:50,defaultAperture:1.8,distanceM:2.3,azimuthOffsetDeg:12,elevationDeg:1,rollDeg:0,maxSafeHeadYawDeg:22,zeroWasteRisk:"Bajo",promptTokens:"waist-up medium shot, 50mm f/1.8 standard lens, hands calmly resting on table or waist, clear spatial context"},{id:"cowboy_american",label:"Plano Americano (3/4 Muslos a Cabeza)",shotRoleDefault:"A-Roll",targetAnchor:"hips",targetHeightM:1.06,layingHeightOverrideM:.16,defaultFocalMm:50,defaultAperture:2,distanceM:2.9,azimuthOffsetDeg:14,elevationDeg:0,rollDeg:0,maxSafeHeadYawDeg:22,zeroWasteRisk:"Medio-Bajo",promptTokens:"three-quarter American shot from mid-thigh up, 50mm f/2.0 lens, confident posture and surrounding luxury interior"},{id:"fs_full_body",label:"Plano Entero (FS Cuerpo Completo 9:16)",shotRoleDefault:"A-Roll",targetAnchor:"hips",targetHeightM:.94,layingHeightOverrideM:.15,defaultFocalMm:50,defaultAperture:1.8,distanceM:3.4,azimuthOffsetDeg:8,elevationDeg:1,rollDeg:0,maxSafeHeadYawDeg:20,zeroWasteRisk:"Medio",promptTokens:"full body vertical 9:16 shot from shoes to crown, 50mm f/1.8 lens, feet firmly grounded on floor, full architectural floor-to-ceiling height"},{id:"ws_architectural",label:"Plano General Arquitectónico (WS 4.9m)",shotRoleDefault:"A-Roll",targetAnchor:"chest",targetHeightM:1.25,layingHeightOverrideM:.2,defaultFocalMm:35,defaultAperture:2.8,distanceM:4.2,azimuthOffsetDeg:16,elevationDeg:2,rollDeg:0,maxSafeHeadYawDeg:24,zeroWasteRisk:"Bajo",promptTokens:"wide architectural shot showcasing 4.9m ceiling moldings, curtains, and volumetric lighting around Alina, 35mm f/2.8 cinema lens"},{id:"ots_mirror",label:"Sobre el Hombro con Espejo Planar (OTS Mirror, cámara a espaldas)",shotRoleDefault:"A-Roll",targetAnchor:"eyes",targetHeightM:1.48,layingHeightOverrideM:.24,defaultFocalMm:50,defaultAperture:1.4,distanceM:3.6,azimuthOffsetDeg:160,elevationDeg:3,rollDeg:0,maxSafeHeadYawDeg:22,zeroWasteRisk:"Medio-Bajo",promptTokens:"cinematic over-the-shoulder composition framing Alina and her crisp reflection in illuminated vanity mirror, soft shoulder foreground blur, 50mm f/1.4"},{id:"low_angle_authority",label:"Contrapicado de Autoridad (+11 deg)",shotRoleDefault:"A-Roll",targetAnchor:"chest",targetHeightM:1.38,layingHeightOverrideM:.2,defaultFocalMm:35,defaultAperture:1.8,distanceM:2.5,azimuthOffsetDeg:8,elevationDeg:-11,rollDeg:0,maxSafeHeadYawDeg:18,zeroWasteRisk:"Bajo",promptTokens:"subtle heroic low-angle shot looking slightly upward at Alina against tall 4.9m luxury architecture, projecting effortless dominance and poise, 35mm f/1.8"},{id:"top_down_zenital",label:"Picado Alto / Cenital (Spa & Suite)",shotRoleDefault:"A-Roll",targetAnchor:"chest",targetHeightM:1.1,layingHeightOverrideM:.18,defaultFocalMm:35,defaultAperture:2,distanceM:2.65,azimuthOffsetDeg:12,elevationDeg:66,rollDeg:0,maxSafeHeadYawDeg:15,zeroWasteRisk:"Medio-Bajo",promptTokens:"high-angle architectural top-down composition looking down over basalt bathtub or charcoal linen king bed, sculptural candlelight shadows, 35mm f/2.0"},{id:"macro_broll_prop",label:"B-Roll Macro de Prop / Bodegón (Zero-Face)",shotRoleDefault:"B-Roll",targetAnchor:"prop",targetHeightM:.9,layingHeightOverrideM:.4,defaultFocalMm:100,defaultAperture:2.8,distanceM:1.35,azimuthOffsetDeg:15,elevationDeg:10,rollDeg:0,maxSafeHeadYawDeg:0,zeroWasteRisk:"Zero",promptTokens:"100mm macro f/2.8 tactile close-up B-roll insert of luxury prop with shallow bokeh, zero human face, rich PBR specular highlights"}],Tv=[{id:"static_breathing",label:"Estático + Micro-Respiración (Lock Tripod)",startOffsetLocal:{right:0,up:0,forward:0},endOffsetLocal:{right:0,up:.008,forward:-.02},arcDegrees:0,easing:"easeInOutSine",recommendedDurationSec:3.5,maxDurationSec:4,handheldHz:0,handheldAmpM:0,focusTransition:"locked",recommendedMotionStrength:2,motionPromptTokens:"steady locked tripod shot, ultra-subtle chest breathing, calm blinking, zero camera drift --motion 2"},{id:"slow_dolly_push_in",label:"Dolly Push-In Quirúrgico (25cm hacia iris)",startOffsetLocal:{right:0,up:0,forward:.14},endOffsetLocal:{right:0,up:0,forward:-.14},arcDegrees:0,easing:"easeInOutSine",recommendedDurationSec:3.5,maxDurationSec:4,handheldHz:0,handheldAmpM:0,focusTransition:"locked",recommendedMotionStrength:2.2,motionPromptTokens:"very subtle slow dolly push-in 25cm toward emerald eyes, steady subject posture, smooth mechanical rail --motion 2"},{id:"slow_dolly_pull_out",label:"Dolly Pull-Out (Revelado de Escenario 4.9m)",startOffsetLocal:{right:0,up:0,forward:-.15},endOffsetLocal:{right:0,up:.06,forward:.25},arcDegrees:0,easing:"easeOutCubic",recommendedDurationSec:3.5,maxDurationSec:4,handheldHz:0,handheldAmpM:0,focusTransition:"locked",recommendedMotionStrength:2.4,motionPromptTokens:"slow graceful dolly pull-out revealing surrounding architectural room, serene poised subject --motion 2"},{id:"subtle_parallax_arc",label:"Arco Parallax Acotado (14 deg Zero-Waste Safe)",startOffsetLocal:{right:-.26,up:0,forward:.05},endOffsetLocal:{right:.26,up:.02,forward:0},arcDegrees:14,easing:"easeInOutSine",recommendedDurationSec:3.5,maxDurationSec:4,handheldHz:0,handheldAmpM:0,focusTransition:"locked",recommendedMotionStrength:2.6,motionPromptTokens:"gentle 14-degree lateral parallax camera glide keeping subject face within front quadrant, smooth background depth shift --motion 2.5"},{id:"pedestal_reveal_up",label:"Pedestal Reveal Vertical (9:16 Ascendente)",startOffsetLocal:{right:0,up:-.24,forward:.05},endOffsetLocal:{right:0,up:.14,forward:-.05},arcDegrees:0,easing:"easeInOutCubic",recommendedDurationSec:3.5,maxDurationSec:4,handheldHz:0,handheldAmpM:0,focusTransition:"locked",recommendedMotionStrength:2.5,motionPromptTokens:"smooth vertical pedestal rise revealing posture and architecture upward, poised stillness --motion 2.5"},{id:"lateral_slider_truck",label:"Slider Lateral (B-Roll Bodegón / Café)",startOffsetLocal:{right:-.32,up:0,forward:0},endOffsetLocal:{right:.32,up:0,forward:0},arcDegrees:4,easing:"easeInOutSine",recommendedDurationSec:2.5,maxDurationSec:3.5,handheldHz:0,handheldAmpM:0,focusTransition:"locked",recommendedMotionStrength:2.8,motionPromptTokens:"silky lateral tabletop slider pan across prop textures, specular reflections gliding across surface --motion 2.8"},{id:"handheld_walking_lubezki",label:"Handheld Orgánico Caminando (1.7 Hz · Máx 3.0s)",startOffsetLocal:{right:.08,up:.02,forward:.12},endOffsetLocal:{right:-.04,up:0,forward:-.28},arcDegrees:6,easing:"linear",recommendedDurationSec:3,maxDurationSec:3,handheldHz:1.7,handheldAmpM:.022,focusTransition:"locked",recommendedMotionStrength:3,motionPromptTokens:"natural front-camera handheld walking presence, subtle 1.7Hz breathing bob, copper hair catching breeze, strict 3 seconds max --motion 3"},{id:"rack_focus_macro_to_eyes",label:"Rack Focus Cinemático (Primer Término → Iris / Prop)",startOffsetLocal:{right:0,up:0,forward:.08},endOffsetLocal:{right:0,up:0,forward:-.06},arcDegrees:0,easing:"easeInOutCubic",recommendedDurationSec:2.5,maxDurationSec:3.5,handheldHz:0,handheldAmpM:0,focusTransition:"rack_near_to_subject",recommendedMotionStrength:2.2,motionPromptTokens:"smooth optical rack focus pulling smoothly from foreground bokeh edge onto crisp sharp subject detail --motion 2.2"}],Av=[{id:"rembrandt_chiaroscuro",label:"Rembrandt Chiaroscuro (45° Key + Rim Cobre)",compatibleBaseModes:["night","day"],contrastRatio:"4:1",realtimeKeyLight:{azimuthDeg:42,elevationDeg:28,distanceM:2.6,kelvin:2900,colorHex:"#FFC285",intensity:5.5,spotAngleDeg:52,purpose:"Sculptural 45-degree warm key forming soft cheek shadow triangle"},realtimeRimLight:{azimuthDeg:-142,elevationDeg:34,distanceM:2.4,kelvin:5400,colorHex:"#B8D6FF",intensity:3.2,spotAngleDeg:46,purpose:"Cool edge separation on copper hair and shoulders"},ambientMultiplier:.85,reflectionMultiplier:.9,fogDensityOverride:.0085,promptLightingTokens:"Rembrandt chiaroscuro 2900K warm key light with soft cheek shadow triangle, subtle 5400K rim separation on copper hair"},{id:"fincher_top_soft_negfill",label:"Fincher Top-Soft + Negative Fill (4:1 Clínico)",compatibleBaseModes:["night","day"],contrastRatio:"4:1",realtimeKeyLight:{azimuthDeg:28,elevationDeg:48,distanceM:2.4,kelvin:3400,colorHex:"#FFD9B3",intensity:4.8,spotAngleDeg:48,purpose:"Controlled overhead soft source preserving deep eye sockets and crisp jawline"},realtimeRimLight:{azimuthDeg:-155,elevationDeg:26,distanceM:2.3,kelvin:5800,colorHex:"#99D6EA",intensity:2.6,spotAngleDeg:42,purpose:"Cool steel rim separating silhouette against dark walnut bookshelves"},ambientMultiplier:.65,reflectionMultiplier:.78,fogDensityOverride:.007,promptLightingTokens:"Fincher top-soft key light 3400K with deep negative fill on shadow side, cool cyan rim separation, clinical contrast"},{id:"wong_neon_practical",label:"Wong / Refn Dual Gel (Ámbar Práctico + Neón Magenta/Esmeralda)",compatibleBaseModes:["night"],contrastRatio:"6:1",realtimeKeyLight:{azimuthDeg:55,elevationDeg:16,distanceM:2.2,kelvin:2400,colorHex:"#FF9B5C",intensity:5.2,spotAngleDeg:56,purpose:"Warm tungsten practical spill on cheekbones"},realtimeRimLight:{azimuthDeg:-125,elevationDeg:20,distanceM:2.5,kelvin:6500,colorHex:"#FF3D9A",intensity:4.4,spotAngleDeg:58,purpose:"Clandestine magenta-crimson neon edge kicker"},ambientMultiplier:.75,reflectionMultiplier:1.15,fogDensityOverride:.011,promptLightingTokens:"dual-tone neon noir lighting, warm 2400K tungsten key against saturated magenta-cyan rim practicals, lush specular highlights"},{id:"deakins_single_window",label:"Deakins Single-Source (Luz Direccional Motivada + Haze)",compatibleBaseModes:["day","night"],contrastRatio:"5:1",realtimeKeyLight:{azimuthDeg:72,elevationDeg:22,distanceM:3.4,kelvin:4600,colorHex:"#FFE3C4",intensity:6,spotAngleDeg:64,purpose:"Broad directional single-source key wrapping cleanly across form"},realtimeRimLight:{azimuthDeg:-160,elevationDeg:18,distanceM:3,kelvin:6200,colorHex:"#88B4E6",intensity:1.8,spotAngleDeg:54,purpose:"Subtle ambient sky bounce on opposite contour"},ambientMultiplier:.72,reflectionMultiplier:.95,fogDensityOverride:.009,promptLightingTokens:"Roger Deakins single motivated lateral light source wrapping softly across face and stone architecture, delicate atmospheric haze"},{id:"guadagnino_golden_bounce",label:"Guadagnino Golden Bounce (Luz Lateral 4500K + Rebote Cálido 2:1)",compatibleBaseModes:["day"],contrastRatio:"2:1",realtimeKeyLight:{azimuthDeg:52,elevationDeg:24,distanceM:2.9,kelvin:4500,colorHex:"#FFE1B8",intensity:4.6,spotAngleDeg:68,purpose:"Soft Mediterranean daylight grazing marble and linen"},realtimeRimLight:{azimuthDeg:-138,elevationDeg:32,distanceM:2.7,kelvin:3800,colorHex:"#FFD29E",intensity:2.8,spotAngleDeg:60,purpose:"Warm golden sun halo in copper red waves"},ambientMultiplier:1.05,reflectionMultiplier:1,fogDensityOverride:.0045,promptLightingTokens:"soft 4500K Mediterranean window side-light with warm 2:1 natural bounce fill, luminous skin tones and golden copper hair halo"},{id:"kubrick_candlelight_2200k",label:"Kubrick / Alcott Candlelight (2200K Íntimo + Penumbra 8:1)",compatibleBaseModes:["night"],contrastRatio:"8:1",realtimeKeyLight:{azimuthDeg:24,elevationDeg:8,distanceM:1.9,kelvin:2200,colorHex:"#FF9840",intensity:5.8,spotAngleDeg:58,purpose:"Low candle-level warm glow casting dramatic upward and lateral chiaroscuro"},realtimeRimLight:{azimuthDeg:-150,elevationDeg:26,distanceM:2.5,kelvin:3200,colorHex:"#E6A96E",intensity:1.6,spotAngleDeg:48,purpose:"Faint antique brass specular contour"},ambientMultiplier:.55,reflectionMultiplier:.8,fogDensityOverride:.01,promptLightingTokens:"intimate 2200K practical candlelight chiaroscuro, deep velvet shadows, warm amber specular highlights in eyes"},{id:"lubezki_ambient_backlight",label:"Lubezki Natural Backlight (Contraluz Envolvente + Fill Frontal)",compatibleBaseModes:["day","night"],contrastRatio:"3:1",realtimeKeyLight:{azimuthDeg:-162,elevationDeg:30,distanceM:3.2,kelvin:4200,colorHex:"#FFD494",intensity:6.2,spotAngleDeg:62,purpose:"Strong motivated rim/backlight haloing hair and silhouette"},realtimeRimLight:{azimuthDeg:25,elevationDeg:16,distanceM:2.4,kelvin:5e3,colorHex:"#FFF1DF",intensity:2.4,spotAngleDeg:72,purpose:"Gentle ambient frontal fill preserving clean facial detail against backlight"},ambientMultiplier:1,reflectionMultiplier:1.05,fogDensityOverride:.0055,promptLightingTokens:"luminous natural backlight haloing copper hair with soft balanced frontal bounce fill, authentic environmental depth"},{id:"coppola_soft_window_spa",label:"Coppola Soft Diffused Glow (Suave 3800K + Destello Espejo/Agua)",compatibleBaseModes:["day","night"],contrastRatio:"2:1",realtimeKeyLight:{azimuthDeg:34,elevationDeg:20,distanceM:2.4,kelvin:3600,colorHex:"#FFE0C8",intensity:4.2,spotAngleDeg:70,purpose:"Diffused flattering vanity/spa frontal-side wash"},realtimeRimLight:{azimuthDeg:-132,elevationDeg:24,distanceM:2.4,kelvin:4800,colorHex:"#D4E8FF",intensity:2.2,spotAngleDeg:55,purpose:"Gentle cool shimmer separating silk and skin from dark stone"},ambientMultiplier:.92,reflectionMultiplier:1.1,fogDensityOverride:.0065,promptLightingTokens:"soft diffused flattering editorial glow, delicate reflection highlights in mirror and eyes, low-contrast intimate warmth"}],Rv=JSON.parse('{"cabaret":{"floor":0,"funnelStage":"Mundo Exterior / Viral Dance & Reels","recommendedBaseMode":"night","recommendedDirectors":["refn_neon_noir","wong_kar_wai_doyle","lubezki_natural"],"defaultARollPreset":{"directorStyleId":"refn_neon_noir","shotTypeId":"fs_full_body","cameraMoveId":"static_breathing","lightingSchemeId":"wong_neon_practical"},"defaultBRollPresets":[{"label":"Teclas Piano de Cola","shotTypeId":"macro_broll_prop","cameraMoveId":"lateral_slider_truck","targetPropIndex":0,"focalMm":100,"durationSec":2.5},{"label":"Copa & Vela Mesa Cóctel","shotTypeId":"macro_broll_prop","cameraMoveId":"rack_focus_macro_to_eyes","targetPropIndex":1,"focalMm":100,"durationSec":2.5}],"specialFlags":{"mirrorShot":false,"waterReflections":false,"wallGuardSide":"south","foregroundPropReady":true,"isExterior":false,"isLayingPosture":false}},"parking":{"floor":0,"funnelStage":"Mundo Exterior / Viral Dance & Reels","recommendedBaseMode":"night","recommendedDirectors":["lubezki_natural","wong_kar_wai_doyle","refn_neon_noir"],"defaultARollPreset":{"directorStyleId":"lubezki_natural","shotTypeId":"cowboy_american","cameraMoveId":"handheld_walking_lubezki","lightingSchemeId":"wong_neon_practical"},"defaultBRollPresets":[{"label":"Reflejo Neón sobre Capó","shotTypeId":"macro_broll_prop","cameraMoveId":"lateral_slider_truck","targetPropIndex":0,"focalMm":85,"durationSec":2.5},{"label":"Postes Dorados & Terciopelo VIP","shotTypeId":"macro_broll_prop","cameraMoveId":"pedestal_reveal_up","targetPropIndex":1,"focalMm":85,"durationSec":2.5}],"specialFlags":{"mirrorShot":false,"waterReflections":false,"wallGuardSide":"none","foregroundPropReady":true,"isExterior":true,"isLayingPosture":false}},"cafe":{"floor":1,"funnelStage":"Descubrimiento & Street Lifestyle","recommendedBaseMode":"day","recommendedDirectors":["guadagnino_mukdeeprom","coppola_intimate","fincher_cronenweth"],"defaultARollPreset":{"directorStyleId":"guadagnino_mukdeeprom","shotTypeId":"ms_waist","cameraMoveId":"slow_dolly_push_in","lightingSchemeId":"guadagnino_golden_bounce"},"defaultBRollPresets":[{"label":"Extracción Espresso La Marzocco","shotTypeId":"macro_broll_prop","cameraMoveId":"lateral_slider_truck","targetPropIndex":0,"focalMm":100,"durationSec":2.5},{"label":"Mesa Carrara junto al Ventanal","shotTypeId":"macro_broll_prop","cameraMoveId":"rack_focus_macro_to_eyes","targetPropIndex":1,"focalMm":100,"durationSec":2.5}],"specialFlags":{"mirrorShot":false,"waterReflections":false,"wallGuardSide":"south","foregroundPropReady":true,"isExterior":false,"isLayingPosture":false}},"walk_cafe":{"floor":1,"funnelStage":"Descubrimiento & Street Lifestyle","recommendedBaseMode":"day","recommendedDirectors":["lubezki_natural","guadagnino_mukdeeprom"],"defaultARollPreset":{"directorStyleId":"lubezki_natural","shotTypeId":"ms_waist","cameraMoveId":"handheld_walking_lubezki","lightingSchemeId":"lubezki_ambient_backlight"},"defaultBRollPresets":[{"label":"Hojas Monstera & Luz Balcón","shotTypeId":"macro_broll_prop","cameraMoveId":"subtle_parallax_arc","targetPropIndex":0,"focalMm":85,"durationSec":2.5},{"label":"Vitrina Repostería Artesanal","shotTypeId":"macro_broll_prop","cameraMoveId":"lateral_slider_truck","targetPropIndex":1,"focalMm":100,"durationSec":2.5}],"specialFlags":{"mirrorShot":false,"waterReflections":false,"wallGuardSide":"south","foregroundPropReady":true,"isExterior":false,"isLayingPosture":false}},"vanity":{"floor":2,"funnelStage":"Top-Funnel / Intimidad Cotidiana","recommendedBaseMode":"night","recommendedDirectors":["wong_kar_wai_doyle","coppola_intimate","fincher_cronenweth"],"defaultARollPreset":{"directorStyleId":"wong_kar_wai_doyle","shotTypeId":"ots_mirror","cameraMoveId":"slow_dolly_push_in","lightingSchemeId":"coppola_soft_window_spa"},"defaultBRollPresets":[{"label":"Macro Labial Carmesí & Perfume Ámbar","shotTypeId":"macro_broll_prop","cameraMoveId":"lateral_slider_truck","targetPropIndex":0,"focalMm":100,"durationSec":2.5},{"label":"Aro Bombillas Reflejado en Espejo","shotTypeId":"macro_broll_prop","cameraMoveId":"rack_focus_macro_to_eyes","targetPropIndex":1,"focalMm":85,"durationSec":2.5}],"specialFlags":{"mirrorShot":true,"controlNetDepthWeightOverride":0.35,"waterReflections":false,"wallGuardSide":"south","foregroundPropReady":true,"isExterior":false,"isLayingPosture":false,"mirrorCenter":{"x":-0.4,"yOffset":1.65,"z":-13.55}}},"bath":{"floor":2,"funnelStage":"Top-Funnel / Intimidad Cotidiana","recommendedBaseMode":"night","recommendedDirectors":["villeneuve_deakins","coppola_intimate","kubrick_alcott"],"defaultARollPreset":{"directorStyleId":"villeneuve_deakins","shotTypeId":"top_down_zenital","cameraMoveId":"slow_dolly_push_in","lightingSchemeId":"kubrick_candlelight_2200k"},"defaultBRollPresets":[{"label":"Velas Reflejadas en Piedra Basáltica","shotTypeId":"macro_broll_prop","cameraMoveId":"static_breathing","targetPropIndex":0,"focalMm":100,"durationSec":2.5},{"label":"Bandeja de Teca & Sales Minerales","shotTypeId":"macro_broll_prop","cameraMoveId":"lateral_slider_truck","targetPropIndex":1,"focalMm":100,"durationSec":2.5}],"specialFlags":{"mirrorShot":false,"waterReflections":true,"wallGuardSide":"south","foregroundPropReady":true,"isExterior":false,"isLayingPosture":true}},"kitchen":{"floor":2,"funnelStage":"Top-Funnel / Intimidad Cotidiana","recommendedBaseMode":"day","recommendedDirectors":["guadagnino_mukdeeprom","fincher_cronenweth"],"defaultARollPreset":{"directorStyleId":"guadagnino_mukdeeprom","shotTypeId":"ms_waist","cameraMoveId":"subtle_parallax_arc","lightingSchemeId":"guadagnino_golden_bounce"},"defaultBRollPresets":[{"label":"Vapor Espresso sobre Nero Marquina","shotTypeId":"macro_broll_prop","cameraMoveId":"static_breathing","targetPropIndex":0,"focalMm":100,"durationSec":2.5},{"label":"Lámparas Latón & Copas Suspendidas","shotTypeId":"macro_broll_prop","cameraMoveId":"pedestal_reveal_up","targetPropIndex":1,"focalMm":85,"durationSec":2.5}],"specialFlags":{"mirrorShot":false,"waterReflections":false,"wallGuardSide":"south","foregroundPropReady":true,"isExterior":false,"isLayingPosture":false}},"suite":{"floor":2,"funnelStage":"Top-Funnel / Intimidad Cotidiana","recommendedBaseMode":"night","recommendedDirectors":["coppola_intimate","kubrick_alcott","wong_kar_wai_doyle"],"defaultARollPreset":{"directorStyleId":"coppola_intimate","shotTypeId":"cu_portrait","cameraMoveId":"slow_dolly_push_in","lightingSchemeId":"kubrick_candlelight_2200k"},"defaultBRollPresets":[{"label":"Luz Ámbar de Mesilla sobre Lino Carbón","shotTypeId":"macro_broll_prop","cameraMoveId":"rack_focus_macro_to_eyes","targetPropIndex":0,"focalMm":100,"durationSec":2.5},{"label":"Copa Vino en Balcón Modernista","shotTypeId":"macro_broll_prop","cameraMoveId":"lateral_slider_truck","targetPropIndex":1,"focalMm":85,"durationSec":2.5}],"specialFlags":{"mirrorShot":false,"waterReflections":false,"wallGuardSide":"south","foregroundPropReady":true,"isExterior":false,"isLayingPosture":true}},"podcast":{"floor":3,"funnelStage":"Conversión Fanvue & Telegram VIP","recommendedBaseMode":"night","recommendedDirectors":["fincher_cronenweth","villeneuve_deakins","coppola_intimate"],"defaultARollPreset":{"directorStyleId":"fincher_cronenweth","shotTypeId":"mcu_interview","cameraMoveId":"slow_dolly_push_in","lightingSchemeId":"fincher_top_soft_negfill"},"defaultBRollPresets":[{"label":"Vapor Espresso sobre Cuaderno Clínico","shotTypeId":"macro_broll_prop","cameraMoveId":"lateral_slider_truck","targetPropIndex":0,"focalMm":100,"durationSec":2.5},{"label":"Rack Focus Lomos Bataille & Foucault","shotTypeId":"macro_broll_prop","cameraMoveId":"rack_focus_macro_to_eyes","targetPropIndex":1,"focalMm":100,"durationSec":2.5}],"specialFlags":{"mirrorShot":false,"waterReflections":false,"wallGuardSide":"south","foregroundPropReady":true,"isExterior":false,"isLayingPosture":false}},"boudoir":{"floor":3,"funnelStage":"Conversión Fanvue & Telegram VIP","recommendedBaseMode":"night","recommendedDirectors":["kubrick_alcott","wong_kar_wai_doyle","refn_neon_noir"],"defaultARollPreset":{"directorStyleId":"kubrick_alcott","shotTypeId":"low_angle_authority","cameraMoveId":"slow_dolly_push_in","lightingSchemeId":"kubrick_candlelight_2200k"},"defaultBRollPresets":[{"label":"Madejas Shibari Lila & Negra sobre Satén","shotTypeId":"macro_broll_prop","cameraMoveId":"lateral_slider_truck","targetPropIndex":0,"focalMm":100,"durationSec":2.5},{"label":"Micrófono Binaural 3Dio & Antifaz Cuero","shotTypeId":"macro_broll_prop","cameraMoveId":"rack_focus_macro_to_eyes","targetPropIndex":1,"focalMm":100,"durationSec":2.5}],"specialFlags":{"mirrorShot":false,"waterReflections":false,"wallGuardSide":"south","foregroundPropReady":true,"isExterior":false,"isLayingPosture":false}},"pool":{"floor":4,"funnelStage":"High-Ticket / Membresía Anual","recommendedBaseMode":"day","recommendedDirectors":["villeneuve_deakins","guadagnino_mukdeeprom","lubezki_natural"],"defaultARollPreset":{"directorStyleId":"villeneuve_deakins","shotTypeId":"ws_architectural","cameraMoveId":"pedestal_reveal_up","lightingSchemeId":"deakins_single_window"},"defaultBRollPresets":[{"label":"Reflejos Dorados Plunge Pool Basáltica","shotTypeId":"macro_broll_prop","cameraMoveId":"lateral_slider_truck","targetPropIndex":0,"focalMm":100,"durationSec":2.5},{"label":"Tumbona Teca & Copa Tallada Atardecer","shotTypeId":"macro_broll_prop","cameraMoveId":"rack_focus_macro_to_eyes","targetPropIndex":1,"focalMm":85,"durationSec":2.5}],"specialFlags":{"mirrorShot":false,"waterReflections":true,"wallGuardSide":"none","foregroundPropReady":true,"isExterior":true,"isLayingPosture":false}},"bar":{"floor":4,"funnelStage":"High-Ticket / Membresía Anual","recommendedBaseMode":"night","recommendedDirectors":["wong_kar_wai_doyle","fincher_cronenweth","refn_neon_noir"],"defaultARollPreset":{"directorStyleId":"wong_kar_wai_doyle","shotTypeId":"cu_portrait","cameraMoveId":"subtle_parallax_arc","lightingSchemeId":"rembrandt_chiaroscuro"},"defaultBRollPresets":[{"label":"Botellas Ámbar Retroiluminadas en Latón","shotTypeId":"macro_broll_prop","cameraMoveId":"pedestal_reveal_up","targetPropIndex":0,"focalMm":100,"durationSec":2.5},{"label":"Copa Martini sobre Cobre Martillado","shotTypeId":"macro_broll_prop","cameraMoveId":"lateral_slider_truck","targetPropIndex":1,"focalMm":100,"durationSec":2.5}],"specialFlags":{"mirrorShot":false,"waterReflections":false,"wallGuardSide":"none","foregroundPropReady":true,"isExterior":true,"isLayingPosture":false}}}'),Cv={monstera_leaf:{id:"monstera_leaf",name:"Hoja Tropical Monstera (Desenfocada)",polyhavenModelId:"potted_plant_04",distanceMeters:.52,lateralOffsetM:-.19,verticalOffsetM:-.06,scale:.38,promptTokens:"soft organic defocused tropical monstera leaf framing left edge in extreme shallow foreground bokeh f/1.4"},crystal_glass:{id:"crystal_glass",name:"Copa de Cristal / Vaso Facetado",polyhavenModelId:"coffee_table_round_01",distanceMeters:.48,lateralOffsetM:.16,verticalOffsetM:-.12,scale:.25,promptTokens:"subtle blurred rim of crystal cocktail glass with specular refraction in foreground bokeh f/1.4"},vintage_microphone:{id:"vintage_microphone",name:"Micrófono Shure SM7B en Primer Plano",polyhavenModelId:"ClassicNightstand_01",distanceMeters:.55,lateralOffsetM:-.19,verticalOffsetM:-.08,scale:.3,promptTokens:"dark matte studio microphone chassis blurred in soft cinematic foreground framing f/1.8"},perfume_bottle:{id:"perfume_bottle",name:"Frasco de Perfume de Tocador en Latón",polyhavenModelId:"Ottoman_01",distanceMeters:.46,lateralOffsetM:.15,verticalOffsetM:-.14,scale:.22,promptTokens:"warm golden perfume flacon rim blurred in immediate foreground bokeh f/1.4"}},xn={characterReference:Sv,sensorGates:Mv,directorStyles:wv,shotTypes:Ev,cameraMoves:Tv,lightingSchemes:Av,spotCinematographyMap:Rv,foregroundProps:Cv},Iv=5,Pv={floorHeight:ee,width:gt,depth:kt,centerZ:Ot};class Dv{constructor({scene:e,renderer:t,lighting:n,camCtrl:i,alina:r,unityBridge:o,getSpot:a,prepareSpot:l,getBaseMode:c}){Object.assign(this,{scene:e,renderer:t,lighting:n,camCtrl:i,alina:r,unityBridge:o,getSpot:a,prepareSpot:l,getBaseMode:c}),this.active=!1,this.payload=null,this.shot=null,this.playing=!1,this.t0=0,this.onFrameHud=null,this.onMoveEnd=null,this._saved=null;const d=h=>{const u=new Dh(16777215,0,30,0,.6,1.4);return u.castShadow=h,h&&(u.shadow.mapSize.set(1024,1024),u.shadow.bias=-4e-4,u.shadow.radius=4),u.visible=!1,this.scene.add(u,u.target),u};this.keyLight=d(!0),this.rimLight=d(!1),this.foregroundGroup=new Xt,this.foregroundGroup.name="CinemaForegroundPropGroup",this.foregroundGroup.visible=!1,this.scene.add(this.foregroundGroup),this._initForegroundMeshes(),i.controls.addEventListener("start",()=>{this.playing&&this.stop(!1)})}_initForegroundMeshes(){const e=new nn(.005,.35,.85,12,4,!0,0,Math.PI),t=new Fe({color:1333810,roughness:.38,metalness:.05,side:Bn}),n=new ke(e,t);n.rotation.z=Math.PI/4,n.castShadow=!0;const i=new nn(.12,.08,.32,16),r=new sn({color:16777215,roughness:.08,metalness:.1,transmission:.88,transparent:!0,opacity:.72,ior:1.5}),o=new ke(i,r),a=new Xt,l=new ke(new nn(.07,.07,.32,16),new Fe({color:2172201,roughness:.6})),c=new ke(new es(.08,16,16),new Fe({color:4804695,metalness:.8,roughness:.3}));c.position.y=.18,a.add(l,c);const d=new ke(new nn(.06,.09,.26,16),new Fe({color:13145662,metalness:.75,roughness:.25}));this.foregroundMeshes={monstera_leaf:n,crystal_glass:o,vintage_microphone:a,perfume_bottle:d}}_saveBase(){if(this._saved)return;const e=this.lighting;this._saved={exposure:this.renderer.toneMappingExposure,envIntensity:this.scene.environmentIntensity,hemi:e.hemiLight.intensity,fog:this.scene.fog&&this.scene.fog.isFogExp2?this.scene.fog.density:null,fov:this.camCtrl.camera.fov,maxPolar:this.camCtrl.controls.maxPolarAngle,minDist:this.camCtrl.controls.minDistance},this.camCtrl.controls.maxPolarAngle=Math.PI*.99,this.camCtrl.controls.minDistance=.25}_restoreBase(){var n;if(!this._saved)return;const e=this._saved,t=this.lighting;this.renderer.toneMappingExposure=e.exposure,this.scene.environmentIntensity=e.envIntensity,t.hemiLight.intensity=e.hemi,e.fog!=null&&((n=this.scene.fog)!=null&&n.isFogExp2)&&(this.scene.fog.density=e.fog),this.camCtrl.camera.fov=e.fov,this.camCtrl.controls.maxPolarAngle=e.maxPolar,this.camCtrl.controls.minDistance=e.minDist,this.camCtrl.camera.updateProjectionMatrix(),this._saved=null}exit(){var t;this.stop(!1),this.keyLight.visible=!1,this.rimLight.visible=!1,this.keyLight.intensity=this.rimLight.intensity=0,this.foregroundGroup.visible=!1,this._restoreBase();const e=this.getSpot();e&&((t=this.alina)==null||t.placeAtSpot(e)),this.active=!1,this.payload=null}resolve(e,t="9:16"){const n=this.getSpot(e.spotId);if(!n)throw new Error(`Spot desconocido: ${e.spotId}`);return bv({shot:e,spot:n,catalog:xn,building:Pv,aspectRatio:t,baseMode:this.getBaseMode()})}apply(e,t="9:16"){var a,l,c,d;this.stop(!1),(a=this.prepareSpot)==null||a.call(this,e.spotId);const n=this.resolve(e,t);this._saveBase(),this.active=!0,this.shot=e,this.payload=n,(l=this.alina)!=null&&l.root&&(this.alina.root.rotation.y=n.alinaRotY,n.animation&&this.alina.playAnimation(n.animation,.25));const i=(h,u)=>{h.visible=!0,h.color.set(u.colorHex),h.intensity=u.intensity*Iv,h.angle=Ro.degToRad(Math.min(75,u.spotAngleDeg/2)),h.position.set(u.worldPos.x,u.worldPos.y,u.worldPos.z),h.target.position.set(u.targetPos.x,u.targetPos.y,u.targetPos.z),h.target.updateMatrixWorld()};i(this.keyLight,n.realtimeRig.keyLight),i(this.rimLight,n.realtimeRig.rimLight);const r=n.threeJsGrade,o=this._saved;return this.renderer.toneMappingExposure=r.toneMappingExposure,this.scene.environmentIntensity=o.envIntensity*r.environmentIntensityMultiplier*n.realtimeRig.reflectionMultiplier,this.lighting.hemiLight.intensity=o.hemi*n.realtimeRig.ambientMultiplier,(c=this.scene.fog)!=null&&c.isFogExp2&&n.realtimeRig.fogDensityOverride>0&&(this.scene.fog.density=n.realtimeRig.fogDensityOverride),this._setCamera(0,0),this._updateForegroundProp(n.foregroundProp),(d=this.unityBridge)==null||d.applyCinemaShot(n),n}_updateForegroundProp(e){for(;this.foregroundGroup.children.length>0;)this.foregroundGroup.remove(this.foregroundGroup.children[0]);if(!e){this.foregroundGroup.visible=!1;return}const t=this.foregroundMeshes[e.propId]||this.foregroundMeshes.monstera_leaf;if(t){const n=t.clone(!0);n.scale.setScalar(e.scale||.3),this.foregroundGroup.add(n),this.foregroundGroup.position.set(e.worldPos.x,e.worldPos.y,e.worldPos.z),this.foregroundGroup.visible=!0}}_setCamera(e,t){const n=this.payload;if(!n)return;const i=n.camera,r=gv(i.easing,e),o=Dl(i.startPos,i.endPos,r),a=Dl(i.startTarget,i.endTarget,r);if(i.handheldAmpM>0){const d=2*Math.PI*i.handheldHz;o.x+=Math.sin(t*d)*i.handheldAmpM*.6+Math.sin(t*d*.37+1.3)*i.handheldAmpM*.4,o.y+=Math.sin(t*d*2+.5)*i.handheldAmpM*.7,o.z+=Math.sin(t*d*.53+2.1)*i.handheldAmpM*.3}const l=this.camCtrl.camera;l.position.set(o.x,o.y,o.z),this.camCtrl.controls.target.set(a.x,a.y,a.z),this.camCtrl.isTransitioning=!1,l.fov=i.verticalFovDeg,l.updateProjectionMatrix(),this.camCtrl.controls.update(),i.rollDeg&&l.rotateZ(Ro.degToRad(i.rollDeg));const c=n.dof.startFocusDistM+(n.dof.endFocusDistM-n.dof.startFocusDistM)*r;this.focusDistM=c}play(e){var t;this.payload&&(this.stop(!1),this.playing=!0,this.t0=performance.now(),this.onMoveEnd=e||null,(t=this.unityBridge)==null||t.playCameraMove(this.payload))}stop(e){if(!this.playing)return;this.playing=!1;const t=this.onMoveEnd;this.onMoveEnd=null,e&&t&&t()}update(){var e;if(!this.active)return!1;if(this.playing&&this.payload){const t=(performance.now()-this.t0)/1e3,n=this.payload.camera.durationSec,i=Math.min(1,t/n);if(this._setCamera(i,t),(e=this.onFrameHud)==null||e.call(this,{t:i,el:t,dur:n,focusM:this.focusDistM}),i>=1){this.playing=!1;const r=this.onMoveEnd;this.onMoveEnd=null,r==null||r()}return!0}return!1}}const Lv=[{sceneId:"scene_01_podcast_fincher",title:"The Mind Sanctuary — Diagnóstico de Control (Fincher 4-Shot)",chapterRef:"Capítulo 1: El Arte de Ceder el Control",targetPlatform:"Fanvue VIP",aspectRatio:"9:16",baseLightingMode:"night",audioTrack:{provider:"ElevenLabs",voiceId:"Alina-Hypno-v1",bpm:72,durationSec:12,scriptFull:"Llevas diez horas resolviendo problemas de otros... ¿cuándo fue la última vez que alguien tomó el mando por ti? [pausa de 2.0s] Entra. Cierra la puerta. Esta noche decido yo."},shots:[{shotId:"s01_podcast_aroll_open",order:1,spotId:"podcast",shotRole:"A-Roll",directorStyleId:"fincher_cronenweth",shotTypeId:"mcu_interview",cameraMoveId:"slow_dolly_push_in",lightingSchemeId:"fincher_top_soft_negfill",focalLengthMm:85,apertureFStop:1.4,durationSec:3.5,animation:"Idle",focusMode:"iris_lock",scriptSegment:"Llevas diez horas resolviendo problemas de otros...",mirrorShot:!1,motionStrength:2.2,controlNetOverrides:{depthWeight:.9,normalWeight:.75,openPoseWeight:1,denoisingStrength:.52},exportPasses:["beauty","depth","normal","openpose2d","mask"]},{shotId:"s01_podcast_broll_espresso",order:2,spotId:"podcast",shotRole:"B-Roll",directorStyleId:"fincher_cronenweth",shotTypeId:"macro_broll_prop",cameraMoveId:"lateral_slider_truck",lightingSchemeId:"fincher_top_soft_negfill",focalLengthMm:100,apertureFStop:2.8,durationSec:2.5,animation:"Idle",focusMode:"macro_prop_lock",brollIndex:0,scriptSegment:"¿cuándo fue la última vez...",mirrorShot:!1,motionStrength:2.5,controlNetOverrides:{depthWeight:.85,normalWeight:.8,openPoseWeight:0,denoisingStrength:.32},exportPasses:["beauty","depth","normal"]},{shotId:"s01_podcast_broll_books",order:3,spotId:"podcast",shotRole:"B-Roll",directorStyleId:"fincher_cronenweth",shotTypeId:"macro_broll_prop",cameraMoveId:"rack_focus_macro_to_eyes",lightingSchemeId:"rembrandt_chiaroscuro",focalLengthMm:100,apertureFStop:2.8,durationSec:2.5,animation:"Idle",focusMode:"rack_prop_to_iris",brollIndex:1,scriptSegment:"...que alguien tomó el mando por ti? [pausa]",mirrorShot:!1,motionStrength:2.2,controlNetOverrides:{depthWeight:.85,normalWeight:.8,openPoseWeight:0,denoisingStrength:.3},exportPasses:["beauty","depth","normal"]},{shotId:"s01_podcast_aroll_close",order:4,spotId:"podcast",shotRole:"A-Roll",directorStyleId:"fincher_cronenweth",shotTypeId:"cu_portrait",cameraMoveId:"static_breathing",lightingSchemeId:"fincher_top_soft_negfill",focalLengthMm:85,apertureFStop:1.4,durationSec:3.5,animation:"Idle",focusMode:"iris_lock",scriptSegment:"Entra. Cierra la puerta. Esta noche decido yo.",mirrorShot:!1,motionStrength:2,controlNetOverrides:{depthWeight:.9,normalWeight:.8,openPoseWeight:1,denoisingStrength:.5},exportPasses:["beauty","depth","normal","openpose2d","mask"]}]},{sceneId:"scene_02_vanity_wong_mirror",title:"El Tocador Vanity — Espejo Planar & Confesión (Wong Kar-wai)",chapterRef:"Capítulo 2: Desarme Psicológico Frente al Espejo",targetPlatform:"Instagram Reels",aspectRatio:"9:16",baseLightingMode:"night",audioTrack:{provider:"ElevenLabs",voiceId:"Alina-Hypno-v1",bpm:68,durationSec:12,scriptFull:"Te pasas el día sosteniendo el personaje... fingiendo que no pesa. [pausa de 2.0s] Frente a este espejo solo existe la verdad. Déjame ver quién eres cuando nadie te está evaluando."},shots:[{shotId:"s02_vanity_aroll_ots_mirror",order:1,spotId:"vanity",shotRole:"A-Roll",directorStyleId:"wong_kar_wai_doyle",shotTypeId:"ots_mirror",cameraMoveId:"slow_dolly_push_in",lightingSchemeId:"coppola_soft_window_spa",focalLengthMm:50,apertureFStop:1.4,durationSec:3.5,animation:"Idle",focusMode:"mirror_reflection_plane",scriptSegment:"Te pasas el día sosteniendo el personaje...",mirrorShot:!0,foregroundFraming:!0,foregroundPropId:"perfume_bottle",motionStrength:2.3,controlNetOverrides:{depthWeight:.35,normalWeight:.85,openPoseWeight:1,cannyWeight:.65,denoisingStrength:.48},exportPasses:["beauty","depth","normal","openpose2d","mask"]},{shotId:"s02_vanity_broll_lipstick",order:2,spotId:"vanity",shotRole:"B-Roll",directorStyleId:"wong_kar_wai_doyle",shotTypeId:"macro_broll_prop",cameraMoveId:"lateral_slider_truck",lightingSchemeId:"wong_neon_practical",focalLengthMm:100,apertureFStop:2,durationSec:2.5,animation:"Idle",focusMode:"macro_prop_lock",brollIndex:0,scriptSegment:"...fingiendo que no pesa.",mirrorShot:!1,motionStrength:2.6,controlNetOverrides:{depthWeight:.85,normalWeight:.75,openPoseWeight:0,denoisingStrength:.3},exportPasses:["beauty","depth","normal"]},{shotId:"s02_vanity_broll_bulbs",order:3,spotId:"vanity",shotRole:"B-Roll",directorStyleId:"coppola_intimate",shotTypeId:"macro_broll_prop",cameraMoveId:"rack_focus_macro_to_eyes",lightingSchemeId:"coppola_soft_window_spa",focalLengthMm:85,apertureFStop:1.4,durationSec:2.5,animation:"Idle",focusMode:"rack_prop_to_iris",brollIndex:1,scriptSegment:"Frente a este espejo solo existe la verdad.",mirrorShot:!0,motionStrength:2.2,controlNetOverrides:{depthWeight:.35,normalWeight:.8,openPoseWeight:0,cannyWeight:.6,denoisingStrength:.35},exportPasses:["beauty","depth","normal"]},{shotId:"s02_vanity_aroll_cu_close",order:4,spotId:"vanity",shotRole:"A-Roll",directorStyleId:"coppola_intimate",shotTypeId:"cu_portrait",cameraMoveId:"subtle_parallax_arc",lightingSchemeId:"coppola_soft_window_spa",focalLengthMm:85,apertureFStop:1.4,durationSec:3.5,animation:"Idle",focusMode:"iris_lock",scriptSegment:"Déjame ver quién eres cuando nadie te está evaluando.",mirrorShot:!1,motionStrength:2.1,controlNetOverrides:{depthWeight:.9,normalWeight:.8,openPoseWeight:1,denoisingStrength:.48},exportPasses:["beauty","depth","normal","openpose2d","mask"]}]},{sceneId:"scene_03_pool_villeneuve_sunset",title:"The Inner Circle Rooftop — Atardecer Monumental (Villeneuve / Deakins)",chapterRef:"Capítulo 4: Membresía VIP & Silencio en la Cima",targetPlatform:"YouTube Shorts",aspectRatio:"9:16",baseLightingMode:"day",audioTrack:{provider:"ElevenLabs",voiceId:"Alina-Hypno-v1",bpm:60,durationSec:12,scriptFull:"Cuando estás arriba, el ruido de abajo se disuelve. Aquí solo entra quien comprende que liderar también exige saber rendirse. [pausa de 2.0s] Bienvenido al círculo íntimo."},shots:[{shotId:"s03_pool_aroll_pedestal_ws",order:1,spotId:"pool",shotRole:"A-Roll",directorStyleId:"villeneuve_deakins",shotTypeId:"ws_architectural",cameraMoveId:"pedestal_reveal_up",lightingSchemeId:"deakins_single_window",focalLengthMm:40,apertureFStop:2,durationSec:3.5,animation:"Idle",focusMode:"iris_lock",scriptSegment:"Cuando estás arriba, el ruido de abajo se disuelve.",mirrorShot:!1,motionStrength:2.2,controlNetOverrides:{depthWeight:.92,normalWeight:.75,openPoseWeight:1,denoisingStrength:.5},exportPasses:["beauty","depth","normal","openpose2d","mask"]},{shotId:"s03_pool_broll_water_ripples",order:2,spotId:"pool",shotRole:"B-Roll",directorStyleId:"villeneuve_deakins",shotTypeId:"macro_broll_prop",cameraMoveId:"lateral_slider_truck",lightingSchemeId:"deakins_single_window",focalLengthMm:100,apertureFStop:2.8,durationSec:2.5,animation:"Idle",focusMode:"macro_prop_lock",brollIndex:0,scriptSegment:"Aquí solo entra quien comprende...",mirrorShot:!1,motionStrength:2.4,controlNetOverrides:{depthWeight:.8,normalWeight:.85,openPoseWeight:0,denoisingStrength:.28},exportPasses:["beauty","depth","normal"]},{shotId:"s03_pool_broll_lounger_glass",order:3,spotId:"pool",shotRole:"B-Roll",directorStyleId:"guadagnino_mukdeeprom",shotTypeId:"macro_broll_prop",cameraMoveId:"rack_focus_macro_to_eyes",lightingSchemeId:"guadagnino_golden_bounce",focalLengthMm:85,apertureFStop:2,durationSec:2.5,animation:"Idle",focusMode:"rack_prop_to_iris",brollIndex:1,scriptSegment:"...que liderar también exige saber rendirse.",mirrorShot:!1,motionStrength:2.3,controlNetOverrides:{depthWeight:.85,normalWeight:.8,openPoseWeight:0,denoisingStrength:.3},exportPasses:["beauty","depth","normal"]},{shotId:"s03_pool_aroll_cu_sunset",order:4,spotId:"pool",shotRole:"A-Roll",directorStyleId:"villeneuve_deakins",shotTypeId:"cu_portrait",cameraMoveId:"slow_dolly_push_in",lightingSchemeId:"lubezki_ambient_backlight",focalLengthMm:85,apertureFStop:1.4,durationSec:3.5,animation:"Idle",focusMode:"iris_lock",scriptSegment:"Bienvenido al círculo íntimo.",mirrorShot:!1,motionStrength:2.1,controlNetOverrides:{depthWeight:.9,normalWeight:.8,openPoseWeight:1,denoisingStrength:.48},exportPasses:["beauty","depth","normal","openpose2d","mask"]}]}],Nv={storyboard:Lv},Tn=Lr(xn),ur=[24,28,35,40,50,85,100],Fv={iris_lock:"Iris (lock)",macro_prop_lock:"Prop macro (lock)",rack_prop_to_iris:"Rack prop → iris",mirror_reflection_plane:"Plano del espejo"},Ci=s=>String(s).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Es=(s,e,t)=>`<option value="${Ci(s)}" ${t?"selected":""}>${Ci(e)}</option>`;function Uv(s,e){var I;const{director:t}=e,n={directorId:"fincher_cronenweth",shotTypeId:"mcu_interview",moveId:"slow_dolly_push_in",lightId:"fincher_top_soft_negfill",lens:85,aperture:1.4,role:"A",scene:null,sceneKey:"auto",playingScene:!1,sceneAbort:!1,foregroundFraming:!1,foregroundPropId:null};s.innerHTML=`
  <div class="bg-[#12141a] border border-white/10 rounded-2xl p-4 shadow-2xl space-y-3" id="cinema-card">
    <div class="flex items-center justify-between pb-2 border-b border-white/5">
      <h2 class="text-xs font-bold tracking-wider uppercase text-slate-300">🎬 Director de Fotografía</h2>
      <div class="flex items-center gap-1.5">
        <span id="cin-zw" class="text-[10px] font-mono px-2 py-0.5 rounded-full border border-white/10 text-slate-400">—</span>
        <button id="cin-exit" class="hidden text-[10px] font-mono px-2 py-0.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10">✕ Salir</button>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-2 text-[11px]">
      <label class="space-y-1"><span class="text-slate-400">Director</span>
        <select id="cin-dir" class="w-full bg-black/50 border border-white/10 rounded-lg p-1.5 text-white">${xn.directorStyles.map(S=>Es(S.id,S.name.split("—")[0].trim(),S.id===n.directorId)).join("")}</select></label>
      <label class="space-y-1"><span class="text-slate-400">Toma / Encuadre</span>
        <select id="cin-shot" class="w-full bg-black/50 border border-white/10 rounded-lg p-1.5 text-white">${xn.shotTypes.map(S=>Es(S.id,S.label.split("(")[0].trim(),S.id===n.shotTypeId)).join("")}</select></label>
      <label class="space-y-1"><span class="text-slate-400">Desplazamiento</span>
        <select id="cin-move" class="w-full bg-black/50 border border-white/10 rounded-lg p-1.5 text-white">${xn.cameraMoves.map(S=>Es(S.id,S.label.split("(")[0].trim(),S.id===n.moveId)).join("")}</select></label>
      <label class="space-y-1"><span class="text-slate-400">Iluminación</span>
        <select id="cin-light" class="w-full bg-black/50 border border-white/10 rounded-lg p-1.5 text-white">${xn.lightingSchemes.map(S=>Es(S.id,S.label.split("(")[0].trim(),S.id===n.lightId)).join("")}</select></label>
      <label class="space-y-1"><span class="text-slate-400">Lente</span>
        <select id="cin-lens" class="w-full bg-black/50 border border-white/10 rounded-lg p-1.5 text-white">${ur.map(S=>Es(S,`${S} mm`,S===n.lens)).join("")}</select></label>
      <label class="space-y-1"><span class="text-slate-400">Rol del plano</span>
        <select id="cin-role" class="w-full bg-black/50 border border-white/10 rounded-lg p-1.5 text-white">
          <option value="A">A-Roll (Alina)</option><option value="B0">B-Roll 1 (prop)</option><option value="B1">B-Roll 2 (prop)</option></select></label>
    </div>

    <!-- Salto 3: Foreground Framing (Bokeh en primer término) -->
    <div class="flex items-center justify-between px-2.5 py-1.5 bg-black/35 rounded-lg border border-white/10 text-[11px]">
      <label class="flex items-center gap-2 cursor-pointer select-none">
        <input type="checkbox" id="cin-fg-toggle" class="accent-[#c86446] rounded cursor-pointer">
        <span class="text-slate-200 font-medium">🌿 Primer Término (Bokeh f/1.4)</span>
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

    <div class="space-y-1">
      <div class="flex items-center justify-between"><span class="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Prompt Flux (sincronizado)</span>
        <button id="cin-copy-flux" class="text-[10px] text-[#f29979] hover:text-white font-mono">Copiar</button></div>
      <div id="cin-flux" class="p-2 bg-black/60 border border-white/5 rounded-lg text-slate-300 text-[10px] font-mono leading-relaxed max-h-20 overflow-y-auto select-all"></div>
      <div class="flex items-center justify-between"><span class="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Motion prompt</span>
        <button id="cin-copy-motion" class="text-[10px] text-[#f29979] hover:text-white font-mono">Copiar</button></div>
      <div id="cin-motion" class="p-2 bg-black/60 border border-white/5 rounded-lg text-amber-200/90 text-[10px] font-mono leading-relaxed select-all"></div>
    </div>

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
        <button id="cin-export" class="py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10">📦 Plano</button>
      </div>
    </div>
  </div>`;const i=S=>s.querySelector("#"+S),r=document.createElement("div");r.id="cinema-hud",r.className="hidden absolute top-14 left-1/2 -translate-x-1/2 z-20 pointer-events-none text-center",r.innerHTML=`<div class="bg-black/80 backdrop-blur-md border border-white/15 rounded-lg px-3 py-1.5 text-[10px] font-mono text-slate-200 shadow-xl">
      <div id="cin-hud-title" class="font-bold text-[#f29979]"></div><div id="cin-hud-sub" class="text-slate-400"></div>
      <div class="h-1 mt-1 bg-white/10 rounded overflow-hidden"><div id="cin-hud-bar" class="h-full bg-emerald-400" style="width:0%"></div></div></div>`,(I=document.getElementById("viewport-wrapper"))==null||I.appendChild(r);const o=S=>r.classList.toggle("hidden",!S),a=()=>({role:n.role==="A"?"A-Roll":"B-Roll",brollIndex:n.role==="A"?0:Number(n.role[1])});function l(){var O,X;const S=e.getActiveSpot(),y=Tn.moves.get(n.moveId),T=Tn.shotTypes.get(n.shotTypeId),v=xn.spotCinematographyMap[S.id],{role:x,brollIndex:R}=a(),N=T.id==="ots_mirror"&&!!((O=v==null?void 0:v.specialFlags)!=null&&O.mirrorShot),F={shotId:`manual_${S.id}_${x==="A-Roll"?"a":"b"+R}`,spotId:S.id,shotRole:x,brollIndex:R,directorStyleId:n.directorId,shotTypeId:n.shotTypeId,cameraMoveId:n.moveId,lightingSchemeId:n.lightId,focalLengthMm:n.lens,apertureFStop:n.aperture,durationSec:Math.min(4,y.recommendedDurationSec),animation:((X=e.getAnim)==null?void 0:X.call(e))||S.defaultAnim||"Idle",focusMode:N?"mirror_reflection_plane":x==="B-Roll"?"macro_prop_lock":"iris_lock",mirrorShot:N,motionStrength:y.recommendedMotionStrength,foregroundFraming:!!n.foregroundFraming,foregroundPropId:n.foregroundPropId||void 0};return N&&(F.controlNetOverrides={depthWeight:v.specialFlags.controlNetDepthWeightOverride??.35}),F}function c(){i("cin-dir").value=n.directorId,i("cin-shot").value=n.shotTypeId,i("cin-move").value=n.moveId,i("cin-light").value=n.lightId,i("cin-lens").value=String(n.lens),i("cin-role").value=n.role,i("cin-fg-toggle").checked=!!n.foregroundFraming,i("cin-fg-prop").classList.toggle("hidden",!n.foregroundFraming),n.foregroundPropId&&(i("cin-fg-prop").value=n.foregroundPropId)}function d(S,y){const T=Tn.lights.get(y.lightingSchemeId),v=S.zeroWaste;i("cin-readout").innerHTML=[["vFOV",`${S.camera.verticalFovDeg}° (${y.focalLengthMm}mm f/${y.apertureFStop})`],["Foco",`${S.dof.startFocusDistM}→${S.dof.endFocusDistM} m`],["Duración",`${S.camera.durationSec}s · ${S.camera.easing}`],["Key/Rim",`${T.realtimeKeyLight.kelvin}K / ${T.realtimeRimLight.kelvin}K · ${T.contrastRatio}`],["Primer Plano",S.foregroundProp?`🌿 ${S.foregroundProp.name}`:"Desactivado"],["Foco en",Fv[y.focusMode]||y.focusMode],["Motion",`${y.motionStrength} (máx 3.5)`]].map(([N,F])=>`<div><span class="text-slate-500">${N}</span> <span class="text-slate-200">${Ci(F)}</span></div>`).join("");const x=i("cin-zw");x.textContent=v.ok?"Zero-Waste ✔":"Zero-Waste ✖",x.className=`text-[10px] font-mono px-2 py-0.5 rounded-full border ${v.ok?"text-emerald-300 border-emerald-500/30 bg-emerald-500/10":"text-rose-300 border-rose-500/30 bg-rose-500/10"}`;const R=[...v.issues,...S.warnings];i("cin-warn").classList.toggle("hidden",R.length===0),i("cin-warn").innerHTML=R.map(N=>"⚠ "+Ci(N)).join("<br>"),i("cin-flux").textContent=S.prompts.flux,i("cin-motion").textContent=S.prompts.motion}function h(S,y){const T=t.apply(S,"9:16");return i("cin-exit").classList.remove("hidden"),d(T,S),y||e.setStatus(`🎬 <span class="text-emerald-400 font-bold">${Ci(Tn.directors.get(S.directorStyleId).name.split("—")[0].trim())}</span> · ${Ci(Tn.shotTypes.get(S.shotTypeId).label.split("(")[0].trim())} · ${S.focalLengthMm}mm`),T}function u(S,y=""){i("cin-hud-title").textContent=`${S.shotRole} · ${Tn.shotTypes.get(S.shotTypeId).label.split("(")[0].trim()}`,i("cin-hud-sub").textContent=`${Tn.directors.get(S.directorStyleId).name.split("—")[0].trim()} · ${S.focalLengthMm}mm f/${S.apertureFStop} · ${Tn.moves.get(S.cameraMoveId).label.split("(")[0].trim()}${y}`}t.onFrameHud=({t:S})=>{i("cin-hud-bar").style.width=`${Math.round(S*100)}%`},i("cin-dir").onchange=S=>{const y=Tn.directors.get(S.target.value);n.directorId=y.id,n.shotTypeId=y.preferredShotTypes[0],n.moveId=y.preferredMoves[0],n.lightId=y.defaultLightingSchemeId,n.lens=y.defaultFocalMm,n.aperture=y.defaultAperture,n.role="A",n.foregroundFraming=y.id==="wong_kar_wai_doyle"||y.id==="guadagnino_mukdeeprom";const T=ur.reduce((v,x)=>Math.abs(x-n.lens)<Math.abs(v-n.lens)?x:v);n.lens=T,c(),h(l())},i("cin-shot").onchange=S=>{const y=Tn.shotTypes.get(S.target.value);n.shotTypeId=y.id,n.lens=ur.reduce((T,v)=>Math.abs(v-y.defaultFocalMm)<Math.abs(T-y.defaultFocalMm)?v:T),n.aperture=y.defaultAperture,y.shotRoleDefault==="B-Roll"&&n.role==="A"&&(n.role="B0"),y.shotRoleDefault==="A-Roll"&&n.role!=="A"&&(n.role="A"),c(),h(l())},i("cin-move").onchange=S=>{n.moveId=S.target.value,h(l())},i("cin-light").onchange=S=>{n.lightId=S.target.value,h(l())},i("cin-lens").onchange=S=>{n.lens=Number(S.target.value),h(l())},i("cin-role").onchange=S=>{n.role=S.target.value,n.role!=="A"?(n.shotTypeId="macro_broll_prop",n.lens=100,n.aperture=2.8):n.shotTypeId==="macro_broll_prop"&&(n.shotTypeId=Tn.directors.get(n.directorId).preferredShotTypes[0],n.lens=85,n.aperture=1.4),c(),h(l())},i("cin-fg-toggle").onchange=S=>{n.foregroundFraming=S.target.checked,i("cin-fg-prop").classList.toggle("hidden",!n.foregroundFraming),h(l())},i("cin-fg-prop").onchange=S=>{n.foregroundPropId=S.target.value==="auto"?null:S.target.value,h(l())},i("cin-recipe").onclick=()=>{m(),h(l())},i("cin-apply").onclick=()=>h(l()),i("cin-play").onclick=()=>{const S=l();h(S,!0),u(S),o(!0),t.play(()=>setTimeout(()=>o(!1),600))},i("cin-exit").onclick=()=>{t.exit(),o(!1),i("cin-exit").classList.add("hidden"),i("cin-zw").textContent="—",e.setStatus("Modo cine desactivado.")},i("cin-copy-flux").onclick=()=>navigator.clipboard.writeText(i("cin-flux").textContent),i("cin-copy-motion").onclick=()=>navigator.clipboard.writeText(i("cin-motion").textContent);function m(){const S=e.getActiveSpot(),y=fo(S.id,"A-Roll",0,xn);n.directorId=y.directorStyleId,n.shotTypeId=y.shotTypeId,n.moveId=y.cameraMoveId,n.lightId=y.lightingSchemeId,n.role="A",n.lens=ur.reduce((T,v)=>Math.abs(v-y.focalLengthMm)<Math.abs(T-y.focalLengthMm)?v:T),n.aperture=y.apertureFStop,c()}function _(){const S=e.getActiveSpot(),y=xn.spotCinematographyMap[S.id],T=fo(S.id,"A-Roll",0,xn,{shotId:`auto_${S.id}_a1`,durationSec:3.5}),v=fo(S.id,"B-Roll",0,xn,{shotId:`auto_${S.id}_b0`,durationSec:2.5}),x=fo(S.id,"B-Roll",1,xn,{shotId:`auto_${S.id}_b1`,durationSec:2.5}),R={...T,shotId:`auto_${S.id}_a2`,durationSec:3.5,cameraMoveId:"static_breathing",motionStrength:2},N=[T,v,x,R].map((F,O)=>({...F,order:O+1,animation:S.defaultAnim||"Idle"}));return{sceneId:`auto_${S.id}`,title:`Auto-maqueta 1:2 · ${S.name}`,targetPlatform:"Instagram Reels",aspectRatio:"9:16",baseLightingMode:y.recommendedBaseMode,audioTrack:{provider:"ElevenLabs",voiceId:"Alina-Hypno-v1",durationSec:12,scriptFull:S.script},shots:N}}function g(){return[_(),...Nv.storyboard]}function f(){return g().find(S=>S.sceneId===n.sceneKey)||g()[0]}function p(){const S=g();i("cin-scene").innerHTML=S.map(x=>Es(x.sceneId,x.title,x.sceneId===n.sceneKey)).join(""),S.find(x=>x.sceneId===n.sceneKey)||(n.sceneKey=S[0].sceneId);const y=f();n.scene=y;const T=_v(y,xn),v=i("cin-scene-badge");v.textContent=`${T.aRoll}A:${T.bRoll}B · ${T.totalSec}s ${T.ok?"✔":"✖"}`,v.className=`text-[10px] font-mono px-2 py-0.5 rounded-full border ${T.ok?"text-emerald-300 border-emerald-500/30":"text-rose-300 border-rose-500/30"}`,v.title=T.issues.join(`
`),i("cin-chips").innerHTML=y.shots.map((x,R)=>`<button data-i="${R}" class="cin-chip text-[10px] font-mono px-2 py-1 rounded-lg border ${x.shotRole==="A-Roll"?"border-[#c86446]/50 text-[#f29979]":"border-sky-500/40 text-sky-300"} bg-black/40 hover:bg-white/10">${R+1}·${x.shotRole==="A-Roll"?"A":"B"} ${Ci(Tn.shotTypes.get(x.shotTypeId).id.replace("_"," ").slice(0,10))} ${x.durationSec}s</button>`).join(""),s.querySelectorAll(".cin-chip").forEach(x=>{x.onclick=()=>{const R=y.shots[Number(x.dataset.i)];n.directorId=R.directorStyleId,n.shotTypeId=R.shotTypeId,n.moveId=R.cameraMoveId,n.lightId=R.lightingSchemeId,n.lens=ur.reduce((N,F)=>Math.abs(F-R.focalLengthMm)<Math.abs(N-R.focalLengthMm)?F:N),n.aperture=R.apertureFStop,n.role=R.shotRole==="A-Roll"?"A":`B${R.brollIndex??0}`,c(),h(R)}})}i("cin-scene").onchange=S=>{n.sceneKey=S.target.value,p()};async function M({record:S=!1}={}){var v;if(n.playingScene){n.sceneAbort=!0,t.stop(!1);return}const y=f();n.playingScene=!0,n.sceneAbort=!1,i("cin-scene-play").textContent="■ Detener";let T=null;S&&(T=A()),o(!0);for(let x=0;x<y.shots.length&&!n.sceneAbort;x++){const R=y.shots[x];e.getSpot(R.spotId)&&((v=e.setActiveSpot)==null||v.call(e,R.spotId)),h(R,!0),u(R,` · plano ${x+1}/${y.shots.length}`),await new Promise(F=>{t.play(F);const O=setInterval(()=>{(n.sceneAbort||!t.playing)&&(clearInterval(O),F())},120)})}T&&await b(T,y.sceneId),n.playingScene=!1,n.sceneAbort=!1,i("cin-scene-play").textContent="▶ Escena",setTimeout(()=>o(!1),500)}i("cin-scene-play").onclick=()=>M(),i("cin-scene-rec").onclick=()=>{n.playingScene||M({record:!0})};function A(){const S=e.renderer.domElement,y=document.createElement("canvas");y.width=720,y.height=1280;const T=y.getContext("2d");let v=0;const x=()=>{const O=S.height,X=O*9/16,H=(S.width-X)/2;T.drawImage(S,H,0,X,O,0,0,y.width,y.height),v=requestAnimationFrame(x)};x();const R=["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(O=>MediaRecorder.isTypeSupported(O)),N=new MediaRecorder(y.captureStream(30),{mimeType:R,videoBitsPerSecond:6e6}),F=[];return N.ondataavailable=O=>O.data.size&&F.push(O.data),N.start(250),i("cin-scene-rec").textContent="● Grabando…",{mr:N,chunks:F,stopDraw:()=>cancelAnimationFrame(v)}}function b(S,y){return new Promise(T=>{S.mr.onstop=()=>{S.stopDraw();const v=new Blob(S.chunks,{type:"video/webm"}),x=URL.createObjectURL(v);e.download.dataUrl(x,`animatic_${y}_720x1280.webm`),setTimeout(()=>URL.revokeObjectURL(x),2e3),i("cin-scene-rec").textContent="⏺ Animatic",e.setStatus(`✅ <span class="text-emerald-400 font-bold">Animatic ${Ci(y)} (.webm 9:16)</span> descargado.`),T()},S.mr.stop()})}return i("cin-export").onclick=()=>{const S=t.active&&t.shot?t.shot:l(),y=t.active?t.payload:h(S,!0),T=`alina_${S.spotId}_${S.shotId}`;e.download.dataUrl(e.camCtrl.renderVertical916DataURL(1080,1920,!1),`${T}_beauty_1080x1920.png`),setTimeout(()=>e.download.dataUrl(e.camCtrl.renderVertical916DataURL(1080,1920,!0),`${T}_depth_1080x1920.png`),250),setTimeout(()=>e.download.json({shot:S,cinemaShotPayload:{...y,prompts:void 0,zeroWaste:void 0},prompts:y.prompts,zeroWaste:y.zeroWaste,controlNet:{...S.controlNetOverrides||{},mirrorShot:!!S.mirrorShot},passes:{beauty:`${T}_beauty_1080x1920.png`,depth:`${T}_depth_1080x1920.png`}},`${T}.json`),500),e.setStatus('✅ <span class="text-emerald-400 font-bold">Plano exportado</span> (Beauty + Depth + JSON con prompts y ControlNet).')},m(),p(),{onSpotChanged(){n.playingScene||(m(),p(),t.active&&h(l(),!0))},onModeChanged(){t.active&&t.shot&&(t._saved=null,h(t.shot,!0))},isPlayingScene:()=>n.playingScene}}const kv="28yo Dutch-Latin woman Alina Van Dijk, vivid copper red hair with natural soft waves, vivid emerald green eyes, light natural freckles across nose, subtle crimson lips, realistic skin micro-pores",No={Idle:{still:"standing poised with relaxed confident posture, subtle gaze toward lens",motion:"subtle natural breathing, slow soft blink, gentle copper hair micro-movement, slight weight shift"},Walk:{still:"mid-stride walking forward with poised runway posture and natural movement",motion:"smooth confident slow walk forward, natural hip and shoulder sway, copper hair flowing gently with each step"},Rumba:{still:"expressive sensual dance posture, sculpted silhouette and graceful arm line",motion:"fluid rhythmic rumba sway, smooth hip and torso articulation, hair catching warm rim light"},Laying:{still:"reclining gracefully in relaxed boudoir lounge pose, calm magnetic gaze",motion:"calm reclined breathing, subtle slow head tilt, soft eye blink, fabric settling naturally"},HipHop:{still:"dynamic contemporary urban dance stance with grounded energy",motion:"controlled rhythmic groove, subtle shoulder and head bounce on beat, natural hair motion"}},Od={"85mm":{shot:"medium portrait shot",angle:"eye-level angle",mm:85},reset:{shot:"medium portrait shot",angle:"eye-level angle",mm:85},macro:{shot:"intimate close-up detail shot",angle:"slightly high macro angle",mm:100},top:{shot:"overhead editorial shot",angle:"top-down cenital angle",mm:35},dollhouse:{shot:"architectural cross-section wide shot",angle:"elevated three-quarter angle",mm:28},overview:{shot:"establishing architectural exterior-interior wide shot",angle:"high three-quarter drone angle",mm:24}};function Ia(s,e){return Math.hypot(s.x-e.x,s.y-e.y,s.z-e.z)}function Ov({camera:s,spot:e,camPreset:t="85mm",cinemaShot:n=null}){if(n)return{shot:n.shotLabel||"cinematic medium close-up",angle:n.angleLabel||"eye-level angle",mm:n.focalLengthMm||85,distance:s!=null&&s.position?Number(Ia(s.position,e.alinaPos).toFixed(2)):2.8,elevationDeg:0,source:"Director de Fotografía"};if(s&&!s.approximate&&s.position&&s.target){const o={x:e.alinaPos.x,y:e.alinaPos.y+1.45,z:e.alinaPos.z},a=Ia(s.position,o),l=Math.hypot(s.position.x-s.target.x,s.position.z-s.target.z)||.001,c=Math.atan2(s.position.y-s.target.y,l)*180/Math.PI;let d;a<1.35?d="extreme close-up":a<2.35?d="close-up portrait":a<4.4?d="medium shot":a<9?d="full-body wide shot":d="architectural establishing wide shot";let h;c>45?h="top-down overhead angle":c>14?h="slightly high angle":c<-12?h="low heroic angle":h="eye-level angle";const u=s.fov_deg||45,m=Math.max(18,Math.min(135,Math.round(18/Math.tan(u*Math.PI/360))));return{shot:d,angle:h,mm:m,distance:Number(a.toFixed(2)),elevationDeg:Math.round(c),source:"Cámara 3D en vivo"}}const i=Od[t]||Od["85mm"],r=s!=null&&s.position?Number(Ia(s.position,e.alinaPos).toFixed(2)):3;return{...i,distance:r,elevationDeg:t==="top"?72:4,source:`Unity 6 URP (${t})`}}function Bv(s){return new Promise(e=>{const t=new Image;t.onload=()=>{try{const n=document.createElement("canvas"),i=72,r=128;n.width=i,n.height=r;const o=n.getContext("2d",{willReadFrequently:!0});o.drawImage(t,0,0,i,r);const{data:a}=o.getImageData(0,0,i,r);let l=0,c=0,d=0,h=0,u=0;const m=i*r;for(let b=0;b<a.length;b+=4){const I=a[b],S=a[b+1],y=a[b+2],T=.2126*I+.7152*S+.0722*y;l+=T,h+=I,u+=y,T<42&&c++,T>205&&d++}const _=Math.round(l/m),g=Math.round(c/m*100),f=Math.round(d/m*100),p=(h-u)/m;let M;_<68&&g>45?M="deep low-key chiaroscuro contrast with sculpted rim highlights":_<115?M="moody cinematic mid-low key lighting with soft practical falloff":_<165?M="balanced natural architectural lighting with gentle specular depth":M="bright luminous high-key daylight with airy reflections";const A=p>18?"warm amber-copper tungsten & golden tones":p<-10?"cool moonlight slate-blue & silver atmosphere":"neutral cinema color grading with warm skin tones";e({avgLum:_,shadowPct:g,highlightPct:f,warmth:Math.round(p),keyDescriptor:M,toneDescriptor:A,summary:`Lum ${_}/255 · Sombras ${g}% · ${p>12?"Cálido":p<-8?"Frío":"Neutro"}`})}catch{e(null)}},t.onerror=()=>e(null),t.src=s})}function $h({spot:s,floorName:e,anim:t,lightingMode:n,framing:i,imageMetrics:r,depthPass:o,attachedObjects:a=[]}){var _;const l=((_=No[t])==null?void 0:_.still)||No.Idle.still,c=n==="day"?"warm golden hour sunlight streaming through architectural glass":"intimate nocturnal chiaroscuro with warm practical lamps",d=r?`${r.keyDescriptor}, ${r.toneDescriptor}`:c,h=s.prompt.replace(/^Cinematic\s+\d+mm\s+[^,]+,\s*/i,"").replace(/^Cinematic\s+(medium|wide|close-up|overhead)[^,]*shot\s+of\s+/i,""),u=o?"[ControlNet Depth 9:16 lock active] ":"",m=Array.isArray(a)&&a.length>0?` Featured Higgsfield reference objects (${a.map(g=>g.handle).join(", ")}): ${a.map(g=>g.promptToken).join("; ")}.`:"";return`${u}Cinematic ${i.shot}, ${i.angle}, shot on ARRI Alexa Mini LF ${i.mm}mm prime lens, shallow depth of field, vertical 9:16 composition. ${kv}, ${l}, located at ${s.name} (${e}).${m} ${d}, ${c}. Scene reference: ${h}`.replace(/\s+/g," ").trim()}function Fo({anim:s,framing:e,motionStrength:t=2.5,motionEngine:n="higgsfield",cinemaMoveLabel:i=null}){var l;const r=((l=No[s])==null?void 0:l.motion)||No.Idle.motion;let o;i?o=i:e.mm>=90||e.distance<2.2?o="locked-off tripod with imperceptible 2% micro push-in, crisp focus locked on emerald eyes":e.angle.includes("top-down")?o="ultra-slow overhead boom descent, smooth stabilized gimbal":e.distance>7.5?o="slow architectural dolly-in revealing spatial depth":o="smooth stabilized 3% slow dolly push-in maintaining framing";const a=n==="liveportrait"?"Mouth gently closed, no talking (prepared for LivePortrait audio sync).":"Mouth closed, no talking, zero facial distortion, locked identity.";return`${r}. Camera: ${o}, ${e.angle}, ${e.mm}mm lens feel. ${a} Temporal consistency, natural physics, Higgsfield motion strength ${Number(t).toFixed(1)}.`}const zv={name:"Alina Van Dijk",age:"28 años",origin:"Ámsterdam (Países Bajos) ➔ Barcelona & Tulum",avatar:"./alina_avatar.jpg",story:"Nacida en Ámsterdam de madre neerlandesa y padre de raíces latinas, y radicada entre su estudio loft de Barcelona y retiros sensoriales en Tulum. Formada en sexología clínica y dinámicas de poder consensuadas (SSC: Sano, Seguro y Consensuado), Alina descubrió que ceder el control en un espacio seguro es una de las válvulas terapéuticas más potentes frente al agotamiento ejecutivo y el exceso de decisiones diarias.",voice:{id:"Alina-Hypno-v1",pitch:.98,rate:.95,sample:"«Respira hondo y suelta el control. No hay nada oscuro en tus fantasías cuando hay consentimiento y respeto. Aquí estás a salvo para dejar de decidir.»"},consistencyLock:{tokenSnippet:"28yo Dutch-Latin woman Alina Van Dijk, vivid copper red hair with natural soft waves, vivid emerald green eyes, light natural freckles dusting the bridge of nose and upper cheeks, full naturally pigmented crimson lips, authentic photorealistic skin texture with visible micro-pores, refined facial bone structure, magnetic and commanding yet empathetic gaze",negativeTokens:"deformed, extra fingers, cartoon, plastic skin, airbrushed, blur, cross-eyed, bad anatomy, third arm, fused limbs, distorted ears, talking mouth distortion"},masterPromptScenes:[{id:"loft_editorial",label:"🖤 Dominatrix Elegante Studio (Chiaroscuro)",aspect:"9:16 / 16:9",prompt:"Cinematic moody studio portrait of 28yo Dutch-Latin woman Alina Van Dijk wearing sleek black leather corset and tailored brass-ring choker, vivid copper red hair, emerald green eyes, natural freckles, intense commanding yet warm gaze, chiaroscuro lighting, deep shadows, 85mm f/1.4 lens, 8k photographic master --ar 9:16"},{id:"tropical_day",label:"🌴 Retiro Sensorial Diurno (Luz Natural)",aspect:"4:5 / 9:16",prompt:"Close-up sensual portrait of 28yo redhead woman Alina Van Dijk with freckled skin, vivid emerald green eyes, crimson lips, copper hair in a high bun with loose strands, wearing minimalist black linen bikini, lush tropical foliage in soft bokeh background, natural dappled golden sunlight, realistic skin pores, 85mm lens --ar 4:5"},{id:"still_life_broll",label:"💎 Bodegón B-Roll Zero-Face (0 Créditos Rostro)",aspect:"9:16 / 16:9",prompt:"Cinematic close-up still life of a handcrafted sleek black leather choker with warm brass ring resting on dark silk sheets beside an open vintage clinical sexology notebook and a steaming espresso cup, moody warm candlelight, deep shadows, 100mm macro lens, 8k photographic master, no humans --ar 9:16"}]},Hv=[{num:"01",severity:"Crítica",rule:"Entrada Limpia 2K+",desc:"Jamás animar en Higgsfield una imagen base con dedos dudosos o resolución baja; el video multiplica x10 cualquier fallo."},{num:"02",severity:"Crítica",rule:"Ángulo Ciego < 25°",desc:"No pedir giros de cabeza mayores a 25° respecto al encuadre inicial para evitar pérdida de identidad facial."},{num:"03",severity:"Alta",rule:"Motion Strength 2.0–3.5",desc:"Mantener el slider entre 2.0 y 3.5 en planos con rostro. Por encima de 4.0 se degrada la geometría facial."},{num:"04",severity:"Alta",rule:"Cuerpo Estable, Cámara Móvil",desc:"Priorizar slow dolly push-in o rack focus sobre desplazamientos largos del personaje."},{num:"05",severity:"Crítica",rule:"Blindaje de Manos",desc:"Evitar que las manos crucen el rostro o se entrelacen en movimiento; apoyarlas en superficies o sujetar un objeto fijo."},{num:"06",severity:"Media",rule:"Fórmula 1:2 con Objetos B-Roll",desc:"1 plano de Alina (3.5s) + 2 planos de Objetos/Accesorios (Zero-Face) = máxima retención y 70% menos gasto de créditos."},{num:"07",severity:"Alta",rule:"Micro-Tomas de 2.5 a 4s",desc:"Cortar antes del segundo 4.0 elimina la deriva temporal de fondo y da ritmo cinematográfico."},{num:"08",severity:"Crítica",rule:"Boca Cerrada en Higgsfield",desc:"Nunca pedir «she talks» en I2V. Generar con labios cerrados y aplicar lipsync dedicado en LivePortrait / Hedra."}],Pa=["Imagen base revisada en manos, ojos y simetría antes de animar (Regla 01)","Motion Strength fijado entre 2.0 y 3.5 (Regla 03)","Manos apoyadas o sujetando prop sin cruzar el rostro (Regla 05)","Duración por clip acotada entre 2.5s y 4.0s (Regla 07)","Objetos B-Roll Zero-Face seleccionados para montaje 1:2 (Regla 06)","Boca cerrada en prompt de video si lleva voz de ElevenLabs (Regla 08)"],Bd=["Todos","Cuero & Fetish","Café & Lifestyle","Intelecto & Estudio","Sensorial & Spa","Audio & Set","Vestuario & Joyas"];function fr(s,e,t,n){const i=`<svg xmlns="http://www.w3.org/2000/svg" width="540" height="540" viewBox="0 0 540 540">
    <defs>
      <radialGradient id="g" cx="50%" cy="38%" r="65%">
        <stop offset="0%" stop-color="${n}" stop-opacity="0.34"/>
        <stop offset="100%" stop-color="#090a0f" stop-opacity="1"/>
      </radialGradient>
    </defs>
    <rect width="540" height="540" fill="url(#g)"/>
    <rect x="24" y="24" width="492" height="492" rx="28" fill="none" stroke="${n}" stroke-opacity="0.35" stroke-width="2"/>
    <text x="270" y="225" text-anchor="middle" font-size="108">${s}</text>
    <text x="270" y="320" text-anchor="middle" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="24" font-weight="700">${e}</text>
    <text x="270" y="356" text-anchor="middle" fill="#94a3b8" font-family="monospace" font-size="16">${t}</text>
    <text x="270" y="468" text-anchor="middle" fill="${n}" font-family="monospace" font-size="14">SUBE TU RENDER O CAPTURA DESDE 3D</text>
  </svg>`;return`data:image/svg+xml;utf8,${encodeURIComponent(i)}`}const po=[{id:"obj-cuero-choker",name:"Gargantilla & Antifaz de Cuero Negro",handle:"@cuero_choker",category:"Cuero & Fetish",floor:3,spotId:"boudoir",image:fr("🖤","Gargantilla & Antifaz","@cuero_choker • Piso 3 Boudoir","#c86446"),isPlaceholderImage:!0,promptToken:"handcrafted sleek black satin-finish leather choker with polished warm brass O-ring and matching black velvet blindfold resting on dark charcoal silk sheets",motionPrompt:"Subtle flickering warm candle flame reflections glinting across polished brass O-ring and black leather grain, slow macro push-in, no people, motion strength 2.2",usage:"Plano B-Roll de tensión elegante entre miradas de Alina o prop equipado en escenas de Boudoir (Cap. 3)."},{id:"obj-espresso-diario",name:"Espresso Doble & Cuaderno de Sexología",handle:"@espresso_diario",category:"Café & Lifestyle",floor:1,spotId:"cafe",image:fr("☕","Espresso & Diario Clínico","@espresso_diario • Piso 1/2","#f59e0b"),isPlaceholderImage:!0,promptToken:"matte black ceramic espresso cup with rich golden crema beside an open leatherbound clinical sexology notebook with fountain pen and tortoiseshell glasses on dark marble table",motionPrompt:"Delicate wisps of white steam rising slowly from the hot espresso crema, soft morning light shifting across notebook pages, locked macro tripod, motion strength 2.0",usage:"Apertura o cierre reflexivo para capítulos matutinos y reels confesionales (Cap. 1 y Cap. 2)."},{id:"obj-libros-whisky",name:" Manuales Clínicos & Vaso Ámbar",handle:"@libros_whisky",category:"Intelecto & Estudio",floor:3,spotId:"podcast",image:fr("📚","Biblioteca & Vaso Ámbar","@libros_whisky • Piso 3 Estudio","#10b981"),isPlaceholderImage:!0,promptToken:"stack of vintage clothbound psychoanalysis and clinical sexology books on dark walnut desk next to a cut-crystal tumbler with amber liquor catching warm Edison lamp light",motionPrompt:"Slow cinematic rack focus from gilded vintage book spines to warm amber reflections inside crystal glass, subtle dust motes in lamp beam, motion strength 2.2",usage:"Refuerza autoridad intelectual en «The Mind Sanctuary» durante monólogos de podcast (Cap. 1)."},{id:"obj-shibari-aceite",name:"Cuerdas de Seda & Frasco de Aceite Ámbar",handle:"@shibari_aceite",category:"Sensorial & Spa",floor:2,spotId:"bath",image:fr("🪶","Seda & Aceite Botánico","@shibari_aceite • Piso 2 Spa","#ec4899"),isPlaceholderImage:!0,promptToken:"coiled obsidian and muted plum silk ropes arranged neatly on raw natural linen beside an amber glass dropper bottle of botanical massage oil and a soft dark feather",motionPrompt:"Ultra-slow macro slider glide over braided silk texture, warm spa candlelight catching the amber glass dropper, serene atmosphere, motion strength 2.0",usage:"B-Roll táctil ideal para acompañar audios binaurales 3D de respiración y entrega sensorial (Cap. 2 y 3)."},{id:"obj-shure-sm7b",name:"Micrófono Shure SM7B en Brazo Articulado",handle:"@mic_sm7b",category:"Audio & Set",floor:3,spotId:"podcast",image:fr("🎙️","Shure SM7B Broadcast","@mic_sm7b • Piso 3 Podcast","#38bdf8"),isPlaceholderImage:!0,promptToken:"professional matte-black Shure SM7B dynamic broadcast microphone mounted on articulated studio boom arm in foreground soft bokeh with warm copper rim light",motionPrompt:"Subtle shallow depth-of-field focus pull past the matte black microphone capsule toward warm studio background glow, stationary camera, motion strength 2.0",usage:"Objeto de encuadre en primer plano (Foreground Bokeh) para confesionarios y capítulos de voz."}],Da={serieTitle:"El Arte de Ceder el Control"},La=[{id:"chap-1",number:1,week:"Acto I · Capítulo 1",title:"La Sobrecarga de Decidir",subtitle:"Fascinación intelectual y el descanso de soltar el mando",status:"🟢 Listo para Rodaje",floor:3,spotId:"podcast",lightingMode:"night",format:"Podcast Confesional 9:16",synopsis:"Alina abre la serie en su estudio nocturno del Piso 3 («The Mind Sanctuary»). Expone cómo quienes toman miles de decisiones bajo presión durante el día buscan en secreto un espacio seguro donde otra mente firme decida por ellos.",hook:"«Hoy tomaste demasiadas decisiones difíciles por otros. Esta noche... decide no decidir nada. Cierra los ojos y deja que mi voz se encargue de todo.»",audioTone:"Voz pausada, cercana y confesional (Pitch 0.98 | Rate 0.95). Silencio de 1.5s tras la primera frase.",directorNotes:"Arrancar con plano detalle de @libros_whisky (2.5s), cortar a plano medio 85mm de Alina frente a @mic_sm7b con empuje lento (3.5s) y cerrar con @espresso_diario.",linkedObjectIds:["obj-libros-whisky","obj-shure-sm7b"],linkedShotIds:[]},{id:"chap-2",number:2,week:"Acto I · Capítulo 2",title:"Respira Conmigo: Apaga el Ruido",subtitle:"Desconexión sensorial a través del cuerpo y la respiración",status:"🟡 En Pre-Producción",floor:2,spotId:"bath",lightingMode:"day",format:"Guía Sensorial & B-Roll Táctil",synopsis:"El ruido analítico no se apaga pensando más, sino bajando al cuerpo. Desde el Spa privado y la luz cálida de la residencia (Piso 2), Alina guía una secuencia rítmica de respiración mientras el agua y los aceites marcan el tempo visual.",hook:"«Inhala despacio conmigo... uno, dos, tres, cuatro. Suelta el aire. ¿Notas cómo caen tus hombros cuando dejas de pelear contra el reloj? Quédate ahí.»",audioTone:"Susurro binaural muy próximo al oído, respiración audible, cadencia hipnótica lenta.",directorNotes:"Usar luz dorada rasante. Alternar plano cenital/lateral suave en el Spa con macros táctiles de @shibari_aceite y reflejos de agua.",linkedObjectIds:["obj-shibari-aceite","obj-espresso-diario"],linkedShotIds:[]},{id:"chap-3",number:3,week:"Acto II · Capítulo 3",title:"La Regla del Poder Consensuado",subtitle:"Tensión chiaroscuro y la arquitectura de la obediencia",status:"⚪ En Escritura",floor:3,spotId:"boudoir",lightingMode:"night",format:"Ficción Psicológica Boudoir",synopsis:"La narrativa entra en el Boudoir chiaroscuro del Piso 3. Alina revela la paradoja del consentimiento: quien obedece voluntariamente no pierde poder, sino que firma las reglas de su propia liberación.",hook:"«No te intimida obedecerme. Te intimida reconocer la paz que sientes cuando por fin alguien sostiene las riendas sin dudar. Mírame.»",audioTone:"Voz firme, magnética, autoridad serena con pausas dramáticas de 2 segundos.",directorNotes:"Iluminación de vela 2200K de alto contraste. Abrir fuera de foco sobre @cuero_choker en primer plano antes de revelar la mirada esmeralda de Alina.",linkedObjectIds:["obj-cuero-choker","obj-shibari-aceite"],linkedShotIds:[]},{id:"chap-4",number:4,week:"Acto II · Capítulo 4",title:"El Círculo Íntimo",subtitle:"Cierre nocturno en el Penthouse Rooftop",status:"⚪ Planificado",floor:4,spotId:"bar",lightingMode:"night",format:"Editorial Nocturno 9:16",synopsis:"Desenlace del primer arco en la terraza Penthouse del Piso 4 frente al skyline nocturno y la piscina basáltica. Alina brinda con quienes cruzaron el umbral del santuario y deja abierto el cliffhanger hacia la segunda temporada.",hook:"«Desde aquí arriba la ciudad entera parece correr sin rumbo. Quienes entendieron mi lenguaje ya están aquí dentro conmigo. ¿Subes o sigues mirando desde abajo?»",audioTone:"Complicidad nocturna íntima, brisa suave de fondo, tono cálido de cierre de temporada.",directorNotes:"Aprovechar reflejos nocturnos sobre la barra de cobre y la plunge pool del Piso 4. Lente 50mm/85mm con bokeh del skyline.",linkedObjectIds:["obj-cuero-choker"],linkedShotIds:[]}],Vv="AlinaStudioOS_CapturesDB",Gv=2,Rr="shots",qs="objects",Ys="chapters",Na=24;let mo=null;function yi(){return mo||(typeof indexedDB>"u"?Promise.resolve(null):(mo=new Promise(s=>{try{const e=indexedDB.open(Vv,Gv);e.onupgradeneeded=()=>{const t=e.result;t.objectStoreNames.contains(Rr)||t.createObjectStore(Rr,{keyPath:"id"}).createIndex("timestamp","timestamp",{unique:!1}),t.objectStoreNames.contains(qs)||t.createObjectStore(qs,{keyPath:"id"}),t.objectStoreNames.contains(Ys)||t.createObjectStore(Ys,{keyPath:"id"})},e.onsuccess=()=>s(e.result),e.onerror=()=>{console.warn("[StudioStorage] IndexedDB no disponible:",e.error),s(null)}}catch(e){console.warn("[StudioStorage] Error abriendo IndexedDB:",e),s(null)}}),mo))}function Nr(s,e,t){return new Promise(n=>{const i=s.transaction(e,"readwrite");i.objectStore(e).put(t),i.oncomplete=()=>n(),i.onerror=()=>n()})}function ac(s,e,t){return new Promise(n=>{const i=s.transaction(e,"readwrite");i.objectStore(e).delete(t),i.oncomplete=()=>n(),i.onerror=()=>n()})}function lc(s,e){return new Promise(t=>{const i=s.transaction(e,"readonly").objectStore(e).getAll();i.onsuccess=()=>t(i.result||[]),i.onerror=()=>t([])})}function Wv(s){var e;return{id:s.id,timestamp:s.timestamp||Number(String(s.id).replace("shot-",""))||Date.now(),createdAt:s.createdAt,engine:s.engine,floor:s.floor,floorName:s.floorName,spotId:(e=s.spot)==null?void 0:e.id,spotSnapshot:s.spot,anim:s.anim,camPreset:s.camPreset,lightingMode:s.lightingMode,sliced:s.sliced,depthPass:s.depthPass,camera:s.camera,framing:s.framing,imageMetrics:s.imageMetrics,cinemaMoveLabel:s.cinemaMoveLabel,image:s.image,depthImage:s.depthImage||null,motionEngine:s.motionEngine,motionStrength:s.motionStrength,objectIds:Array.isArray(s.objectIds)?s.objectIds:[],chapterId:s.chapterId||"",fluxPrompt:s.fluxPrompt,motionPrompt:s.motionPrompt}}async function Gn(s){const e=await yi();!e||!(s!=null&&s.id)||await Nr(e,Rr,Wv(s))}async function cc(s){const e=await yi();!e||!s||await ac(e,Rr,s)}async function jv(s){const e=await yi();if(!e)return[];const t=await lc(e,Rr);return t.sort((n,i)=>(i.timestamp||0)-(n.timestamp||0)),t.length>Na&&t.slice(Na).forEach(n=>cc(n.id)),t.slice(0,Na).map(n=>({...n,objectIds:Array.isArray(n.objectIds)?n.objectIds:[],chapterId:n.chapterId||"",spot:s&&n.spotId&&s(n.spotId)||n.spotSnapshot})).filter(n=>!!(n.spot&&n.image))}async function Xv(){const s=await yi();if(!s)return[...po];const e=await lc(s,qs);if(e.length===0){for(let t=0;t<po.length;t++)await Nr(s,qs,{...po[t],order:t+1});return po.map((t,n)=>({...t,order:n+1}))}return e.sort((t,n)=>(t.order??999)-(n.order??999)),e}async function xr(s){const e=await yi();!e||!(s!=null&&s.id)||await Nr(e,qs,{...s})}async function $v(s){const e=await yi();!e||!s||await ac(e,qs,s)}async function qv(){const s=await yi();if(!s)return La.map(t=>({...t}));const e=await lc(s,Ys);if(e.length===0){for(const t of La)await Nr(s,Ys,{...t});return La.map(t=>({...t}))}return e.sort((t,n)=>(t.number||0)-(n.number||0)),e}async function Fa(s){const e=await yi();!e||!(s!=null&&s.id)||await Nr(e,Ys,{...s})}async function Yv(s){const e=await yi();!e||!s||await ac(e,Ys,s)}function zd(s,e=1440){return new Promise((t,n)=>{const i=new FileReader;i.onerror=()=>n(new Error("No se pudo leer el archivo de imagen")),i.onload=()=>{const r=new Image;r.onerror=()=>n(new Error("Formato de imagen no válido")),r.onload=()=>{const o=Math.min(1,e/Math.max(r.width,r.height)),a=Math.max(1,Math.round(r.width*o)),l=Math.max(1,Math.round(r.height*o)),c=document.createElement("canvas");c.width=a,c.height=l,c.getContext("2d").drawImage(r,0,0,a,l);const h=s.type==="image/png";t(h?c.toDataURL("image/png"):c.toDataURL("image/jpeg",.88))},r.src=i.result},i.readAsDataURL(s)})}const Ut=s=>String(s??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function Kv(s,e){let t="Todos",n=null,i=null;s.innerHTML=`
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
  `;const r=g=>s.querySelector("#"+g);function o(){return e.getObjects()}function a(){const g=o();return g.find(f=>f.id===n)||g[0]||null}function l(g){clearTimeout(i),i=setTimeout(async()=>{var f;await xr(g),(f=e.onObjectsChanged)==null||f.call(e)},220)}function c(g){return"@"+(String(g||"").trim().toLowerCase().replace(/[^a-z0-9_@-]/g,"_").replace(/^@+/,"")||"objeto")}function d(){const g=r("obj-cat-pills");g.innerHTML=Bd.map(f=>{const p=f===t;return`<button data-cat="${Ut(f)}" class="obj-cat-btn px-3 py-1 rounded-lg text-xs font-semibold transition-all ${p?"bg-[#c86446] text-white shadow":"bg-white/5 text-slate-300 hover:bg-white/10 border border-white/5"}">${Ut(f)}</button>`}).join(""),g.querySelectorAll(".obj-cat-btn").forEach(f=>{f.onclick=()=>{t=f.dataset.cat,_()}})}function h(){const g=o();r("obj-total-pill").textContent=`${g.length} objeto${g.length===1?"":"s"}`;const f=t==="Todos"?g:g.filter(M=>M.category===t);!n&&f[0]&&(n=f[0].id);const p=r("obj-grid");if(f.length===0){p.innerHTML=`
        <div class="col-span-full rounded-xl border border-dashed border-white/15 p-8 text-center text-xs text-slate-400">
          No hay objetos en «${Ut(t)}». Sube un render o captura uno desde el visor 3D.
        </div>`;return}p.innerHTML=f.map(M=>{const A=M.id===n;return`
        <div data-id="${Ut(M.id)}" class="obj-card group cursor-pointer rounded-xl border p-2.5 bg-[#151821] hover:bg-[#1a1e29] transition-all flex flex-col gap-2 ${A?"border-[#c86446] copper-glow":"border-white/10"}">
          <div class="relative w-full aspect-square rounded-lg overflow-hidden bg-black border border-white/10">
            <img src="${M.image}" alt="${Ut(M.name)}" class="w-full h-full object-cover">
            <span class="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded bg-black/80 text-[10px] font-mono text-[#f29979] border border-white/10">${Ut(M.handle)}</span>
            ${M.isPlaceholderImage?'<span class="absolute bottom-1.5 inset-x-1.5 text-center px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-200 text-[9px] font-mono border border-amber-400/30">Pendiente render</span>':'<span class="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 rounded bg-emerald-600/85 text-white text-[9px] font-mono font-bold">RENDER</span>'}
          </div>
          <div class="min-w-0">
            <div class="text-xs font-bold text-white truncate">${Ut(M.name)}</div>
            <div class="text-[10px] text-slate-400 truncate">${Ut(M.category)}</div>
          </div>
        </div>`}).join(""),p.querySelectorAll(".obj-card").forEach(M=>{M.onclick=()=>{n=M.dataset.id,h(),u()}})}function u(){const g=r("obj-inspector"),f=a();if(!f){g.innerHTML='<div class="text-xs text-slate-400 m-auto">Selecciona o crea un objeto.</div>';return}const p=Bd.filter(M=>M!=="Todos");g.innerHTML=`
      <div class="flex items-start gap-3 pb-3 border-b border-white/10">
        <div class="relative w-24 h-24 rounded-xl overflow-hidden bg-black border border-white/15 shrink-0">
          <img id="insp-obj-img" src="${f.image}" alt="${Ut(f.name)}" class="w-full h-full object-cover">
        </div>
        <div class="flex-1 min-w-0 space-y-1.5">
          <input id="insp-obj-name" type="text" value="${Ut(f.name)}" placeholder="Nombre del objeto"
            class="w-full bg-black/50 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs font-bold text-white focus:outline-none focus:border-[#c86446]">
          <div class="grid grid-cols-2 gap-1.5">
            <input id="insp-obj-handle" type="text" value="${Ut(f.handle)}" placeholder="@etiqueta"
              class="bg-black/50 border border-white/10 rounded-lg px-2 py-1 text-[11px] font-mono text-[#f29979] focus:outline-none focus:border-[#c86446]">
            <select id="insp-obj-cat" class="bg-black/50 border border-white/10 rounded-lg px-2 py-1 text-[11px] text-slate-200">
              ${p.map(M=>`<option value="${Ut(M)}" ${M===f.category?"selected":""}>${Ut(M)}</option>`).join("")}
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
        <textarea id="insp-obj-token" rows="3" class="prompt-textarea">${Ut(f.promptToken)}</textarea>
      </div>

      <div class="space-y-1">
        <div class="flex items-center justify-between">
          <label for="insp-obj-motion" class="text-[10px] font-bold uppercase tracking-wider text-slate-300">
            Motion Prompt B-Roll Zero-Face (Higgsfield I2V)
          </label>
          <button id="insp-copy-motion" class="text-[10px] font-mono text-[#f29979] hover:text-white">Copiar</button>
        </div>
        <textarea id="insp-obj-motion" rows="3" class="prompt-textarea">${Ut(f.motionPrompt||"")}</textarea>
      </div>

      <div class="space-y-1">
        <label for="insp-obj-usage" class="text-[10px] font-bold uppercase tracking-wider text-slate-400">
          Notas de Uso / Continuidad en Escena
        </label>
        <input id="insp-obj-usage" type="text" value="${Ut(f.usage||"")}"
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
    `,r("insp-obj-name").oninput=M=>{f.name=M.target.value,h(),l(f)},r("insp-obj-handle").onchange=M=>{f.handle=c(M.target.value),M.target.value=f.handle,h(),l(f)},r("insp-obj-cat").onchange=M=>{f.category=M.target.value,h(),l(f)},r("insp-obj-token").oninput=M=>{f.promptToken=M.target.value,l(f)},r("insp-obj-motion").oninput=M=>{f.motionPrompt=M.target.value,l(f)},r("insp-obj-usage").oninput=M=>{f.usage=M.target.value,l(f)},r("insp-obj-file").onchange=async M=>{var I,S;const A=(I=M.target.files)==null?void 0:I[0];if(!A)return;const b=await zd(A);f.image=b,f.isPlaceholderImage=!1,await xr(f),(S=e.onObjectsChanged)==null||S.call(e),_(),e.setStatus(`✅ <span class="text-emerald-400 font-bold">Imagen actualizada</span> para ${Ut(f.name)}.`)},r("insp-copy-token").onclick=()=>navigator.clipboard.writeText(f.promptToken),r("insp-copy-motion").onclick=()=>navigator.clipboard.writeText(f.motionPrompt||""),r("insp-obj-use-in-prompt").onclick=()=>{e.injectObjectIntoPrompts(f)},r("insp-obj-export").onclick=()=>{const M=f.handle.replace("@","");e.downloadDataUrl(f.image,`objeto_${M}.png`),setTimeout(()=>{e.downloadJson({type:"Higgsfield_Object_Reference",id:f.id,name:f.name,handle:f.handle,category:f.category,object_token_lock:f.promptToken,broll_zero_face_motion_prompt:f.motionPrompt,usage_notes:f.usage},`objeto_${M}_higgsfield.json`)},220),e.setStatus(`📦 <span class="text-emerald-400 font-bold">Objeto ${Ut(f.handle)} exportado (Imagen + JSON).</span>`)},r("insp-obj-delete").onclick=async()=>{var b,I;const M=o(),A=M.findIndex(S=>S.id===f.id);A>=0&&M.splice(A,1),await $v(f.id),n=((b=M[0])==null?void 0:b.id)||null,(I=e.onObjectsChanged)==null||I.call(e),_()}}async function m(g,f="Nuevo Objeto Renderizado",p=!1){var S,y;const M=o(),A=M.length+1,b=f.toLowerCase().replace(/\.[a-z0-9]+$/i,"").replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"").slice(0,18),I={id:`obj-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,order:A,name:f.replace(/\.[a-z0-9]+$/i,""),handle:`@${b||"objeto_"+A}`,category:t==="Todos"?"Cuero & Fetish":t,floor:e.getActiveFloor(),spotId:((S=e.getActiveSpot())==null?void 0:S.id)||"vanity",image:g,isPlaceholderImage:p,promptToken:`detailed photorealistic ${f.replace(/\.[a-z0-9]+$/i,"")}, studio lighting, crisp material textures`,motionPrompt:"Subtle macro light reflections across surface, locked tripod slow 2% push-in, no humans, motion strength 2.2",usage:"Referencia visual para Higgsfield Elements o inserción B-Roll 1:2."};return M.unshift(I),n=I.id,await xr(I),(y=e.onObjectsChanged)==null||y.call(e),_(),I}r("input-obj-upload-new").onchange=async g=>{const f=Array.from(g.target.files||[]);for(const p of f){const M=await zd(p);await m(M,p.name,!1)}g.target.value="",f.length&&e.setStatus(`✅ <span class="text-emerald-400 font-bold">${f.length} render(s) guardado(s) en Bóveda de Objetos.</span>`)},r("btn-obj-create-empty").onclick=async()=>{const g=`data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="540" height="540"><rect width="540" height="540" fill="#0d1017"/><text x="270" y="260" text-anchor="middle" font-size="88">🏺</text><text x="270" y="330" text-anchor="middle" fill="#94a3b8" font-family="sans-serif" font-size="20">Sube o captura imagen</text></svg>')}`;await m(g,`Objeto ${o().length+1}`,!0)},r("btn-obj-toggle-3d").onclick=()=>{const g=e.toggle3DViewportInObjects();r("btn-obj-toggle-3d").textContent=g?"✕ Ocultar Visor 3D":"👁 Mostrar Visor 3D para Capturar",r("obj-3d-capture-bar").classList.toggle("hidden",!g),r("obj-3d-capture-bar").classList.toggle("flex",g)},r("btn-obj-snap-new-1x1").onclick=async()=>{var f;const g=await e.captureObjectFrom3D("1:1");g&&(await m(g,`Prop ${((f=e.getActiveSpot())==null?void 0:f.name)||"Santuario"}`,!1),e.setStatus('📸 <span class="text-emerald-400 font-bold">Objeto 1:1 capturado del visor 3D y guardado.</span>'))},r("btn-obj-snap-new-9x16").onclick=async()=>{var f;const g=await e.captureObjectFrom3D("9:16");g&&(await m(g,`B-Roll ${((f=e.getActiveSpot())==null?void 0:f.name)||"Santuario"}`,!1),e.setStatus('📱 <span class="text-emerald-400 font-bold">Objeto B-Roll 9:16 capturado del visor 3D y guardado.</span>'))},r("btn-obj-snap-replace").onclick=async()=>{var p;const g=a();if(!g)return;const f=await e.captureObjectFrom3D("1:1");f&&(g.image=f,g.isPlaceholderImage=!1,await xr(g),(p=e.onObjectsChanged)==null||p.call(e),_(),e.setStatus(`✅ <span class="text-emerald-400 font-bold">Render 3D asignado a ${Ut(g.handle)}.</span>`))};function _(){d(),h(),u()}return{render:_,selectObject(g){n=g,_()},sync3DBar(g){r("btn-obj-toggle-3d").textContent=g?"✕ Ocultar Visor 3D":"👁 Mostrar Visor 3D para Capturar",r("obj-3d-capture-bar").classList.toggle("hidden",!g),r("obj-3d-capture-bar").classList.toggle("flex",g)}}}const nt=s=>String(s??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Zv=["🟢 Listo para Rodaje","🟡 En Pre-Producción","⚪ En Escritura","🎬 En Montaje","✅ Publicado"];function Jv(s,e,t,n){let i="chapters",r=null,o=null;const a=Pa.map(()=>!1);function l(){const g=[];for(const f of[4,3,2,1,0])Dn[f].spots.forEach(M=>{g.push({floor:f,spotId:M.id,label:`P${f===0?"B":f} · ${M.icon} ${M.name}`})});return g}s.innerHTML=`
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
        Serie activa: <span class="text-[#f29979] font-semibold">${nt(Da.serieTitle)}</span>
      </div>
    </div>
  `;function c(g){i=g,s.querySelectorAll(".csub-btn").forEach(f=>{const p=f.dataset.csub===i;f.className=p?"csub-btn px-3 py-1.5 rounded-lg bg-[#c86446] text-white font-semibold transition-all shadow":"csub-btn px-3 py-1.5 rounded-lg text-slate-300 hover:text-white font-semibold transition-all"}),n.onSubTabChanged(i),i==="chapters"&&m(),i==="bible"&&_()}s.querySelectorAll(".csub-btn").forEach(g=>{g.onclick=()=>c(g.dataset.csub)});function d(){return n.getChapters()}function h(){const g=d();return g.find(f=>f.id===r)||g[0]||null}function u(g){clearTimeout(o),o=setTimeout(async()=>{var f;await Fa(g),(f=n.onChaptersChanged)==null||f.call(n)},220)}function m(){var S;const g=d();!r&&g[0]&&(r=g[0].id);const f=h(),p=l(),M=n.getObjects(),A=n.getShots(),b=f?A.filter(y=>y.chapterId===f.id||(f.linkedShotIds||[]).includes(y.id)):[];if(e.innerHTML=`
      <div class="grid grid-cols-12 gap-4">
        <!-- Lista lateral de Capítulos -->
        <aside class="col-span-12 lg:col-span-4 xl:col-span-3 bg-[#12141a] border border-white/10 rounded-2xl p-4 shadow-2xl flex flex-col gap-3">
          <div class="flex items-center justify-between gap-2 pb-2.5 border-b border-white/5">
            <div>
              <h3 class="text-xs font-bold uppercase tracking-wider text-white">📖 Capítulos de Cine</h3>
              <p class="text-[10px] text-slate-400">${g.length} episodios en desarrollo</p>
            </div>
            <button id="btn-chap-add" class="px-2.5 py-1.5 rounded-xl bg-[#c86446] hover:bg-[#a34a32] text-white text-xs font-bold shadow transition-all">
              ➕ Capítulo
            </button>
          </div>

          <div class="flex flex-col gap-2 overflow-y-auto custom-scrollbar max-h-[65vh] pr-1" id="chap-list">
            ${g.map(y=>{const T=f&&y.id===f.id;return`
                <button data-cid="${nt(y.id)}" class="chap-item text-left p-3 rounded-xl border transition-all ${T?"border-[#c86446] bg-[#c86446]/15 copper-glow":"border-white/5 bg-white/[0.02] hover:bg-white/[0.06]"}">
                  <div class="flex items-center justify-between gap-1 text-[10px] font-mono">
                    <span class="text-[#f29979] font-bold">CAPÍTULO ${y.number}</span>
                    <span class="text-slate-400 truncate">${nt(y.status)}</span>
                  </div>
                  <div class="text-xs font-bold text-white mt-1">${nt(y.title)}</div>
                  <div class="text-[10px] text-slate-400 mt-0.5 line-clamp-2">${nt(y.subtitle||"")}</div>
                </button>`}).join("")}
          </div>
        </aside>

        <!-- Editor del Capítulo Seleccionado -->
        <section class="col-span-12 lg:col-span-8 xl:col-span-9 bg-[#12141a] border border-white/10 rounded-2xl p-4 md:p-5 shadow-2xl flex flex-col gap-4">
          ${f?`
          <!-- Cabecera editable del Capítulo + Salto directo al Set 3D -->
          <div class="flex flex-wrap items-start justify-between gap-3 pb-3 border-b border-white/10">
            <div class="flex-1 min-w-[240px] space-y-1.5">
              <div class="flex flex-wrap items-center gap-2">
                <span class="px-2 py-0.5 rounded bg-[#c86446]/20 text-[#f29979] border border-[#c86446]/30 text-[10px] font-mono font-bold">
                  CAPÍTULO ${f.number}
                </span>
                <input id="chap-week" type="text" value="${nt(f.week||"")}" placeholder="Acto / Semana"
                  class="bg-black/40 border border-white/10 rounded-lg px-2 py-0.5 text-[11px] font-mono text-slate-300 w-40 focus:outline-none focus:border-[#c86446]">
                <select id="chap-status" class="bg-black/40 border border-white/10 rounded-lg px-2 py-0.5 text-[11px] text-slate-200">
                  ${Zv.map(y=>`<option value="${nt(y)}" ${y===f.status?"selected":""}>${nt(y)}</option>`).join("")}
                </select>
              </div>
              <input id="chap-title" type="text" value="${nt(f.title)}" placeholder="Título del capítulo"
                class="w-full bg-transparent border-b border-transparent hover:border-white/15 focus:border-[#c86446] text-lg font-bold text-white focus:outline-none py-0.5">
              <input id="chap-subtitle" type="text" value="${nt(f.subtitle||"")}" placeholder="Subtítulo o tema dramático"
                class="w-full bg-transparent border-b border-transparent hover:border-white/15 focus:border-[#c86446] text-xs text-slate-400 focus:outline-none py-0.5">
            </div>

            <!-- Set 3D vinculado + Ir a Rodar -->
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 bg-black/45 p-2.5 rounded-xl border border-white/10 text-xs">
              <div class="space-y-1">
                <label class="block text-[10px] font-mono text-slate-400 uppercase">Locación en el Santuario 3D</label>
                <div class="flex items-center gap-1.5">
                  <select id="chap-spot" class="bg-black/70 border border-white/10 rounded-lg px-2 py-1 text-[11px] text-white">
                    ${p.map(y=>`<option value="${y.floor}:${nt(y.spotId)}" ${y.spotId===f.spotId?"selected":""}>${nt(y.label)}</option>`).join("")}
                  </select>
                  <select id="chap-light" class="bg-black/70 border border-white/10 rounded-lg px-2 py-1 text-[11px] text-white">
                    <option value="night" ${f.lightingMode==="night"?"selected":""}>🌙 Noche</option>
                    <option value="day" ${f.lightingMode==="day"?"selected":""}>☀️ Día</option>
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
              <textarea id="chap-synopsis" rows="4" class="prompt-textarea" placeholder="Qué ocurre dramática y visualmente en este capítulo...">${nt(f.synopsis)}</textarea>

              <label for="chap-notes" class="block pt-1 text-[11px] font-bold uppercase tracking-wider text-slate-300">
                2. Notas de Dirección & Montaje (1:2)
              </label>
              <textarea id="chap-notes" rows="3" class="prompt-textarea" placeholder="Instrucciones de cámara, ritmo de cortes y atmósfera...">${nt(f.directorNotes||"")}</textarea>
            </div>

            <div class="space-y-1.5">
              <div class="flex items-center justify-between">
                <label for="chap-hook" class="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                  3. Monólogo / Voz en Off ("Alina-Hypno-v1")
                </label>
                <button id="btn-chap-copy-voice" class="text-[10px] font-mono text-[#f29979] hover:text-white">Copiar Voz</button>
              </div>
              <textarea id="chap-hook" rows="4" class="prompt-textarea" placeholder="Texto exacto que susurra o narra Alina en ElevenLabs...">${nt(f.hook)}</textarea>

              <label for="chap-tone" class="block pt-1 text-[11px] font-bold uppercase tracking-wider text-slate-300">
                4. Dirección Vocal & Diseño Sonoro
              </label>
              <textarea id="chap-tone" rows="3" class="prompt-textarea" placeholder="Cadencia, silencios, efectos binaurales...">${nt(f.audioTone||"")}</textarea>
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
              ${M.map(y=>{const T=(f.linkedObjectIds||[]).includes(y.id);return`
                  <button data-oid="${nt(y.id)}" class="chap-obj-chip flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs transition-all ${T?"border-[#c86446] bg-[#c86446]/20 text-white font-semibold":"border-white/10 bg-white/5 text-slate-400 hover:text-white"}">
                    <img src="${y.image}" alt="" class="w-5 h-5 rounded object-cover">
                    <span class="font-mono text-[11px]">${nt(y.handle)}</span>
                  </button>`}).join("")}
            </div>
          </div>

          <!-- Tira Cinematográfica de Tomas Capturadas asignadas al Capítulo -->
          <div class="p-3.5 rounded-xl bg-black/40 border border-white/10 space-y-2.5">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <span class="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                🎞️ Planos Capturados en este Capítulo (${b.length})
              </span>
              <span class="text-[10px] text-slate-400">
                Asigna cualquier captura desde «Estudio Prompts» o pulsa «Rodar en Estudio Prompts ↗»
              </span>
            </div>
            ${b.length===0?`<div class="text-xs text-slate-400 py-3 text-center border border-dashed border-white/10 rounded-lg">
                    Aún no has vinculado capturas 9:16 a este capítulo. Pulsa <strong class="text-[#f29979]">Rodar en Estudio Prompts ↗</strong> para encuadrar sus planos.
                  </div>`:`<div class="flex gap-3 overflow-x-auto custom-scrollbar pb-1">
                    ${b.map((y,T)=>`
                      <div class="shrink-0 w-28 rounded-xl bg-[#151821] border border-white/10 p-1.5 space-y-1">
                        <img src="${y.image}" alt="Plano ${T+1}" class="w-full rounded-lg object-cover" style="aspect-ratio: 9/16;">
                        <div class="text-[10px] font-bold text-white truncate">Plano ${T+1} · ${nt(y.spot.name)}</div>
                        <div class="text-[9px] font-mono text-slate-400">${y.framing.mm}mm · ${nt(y.anim)}</div>
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
    `,(S=e.querySelector("#btn-chap-add"))==null||S.addEventListener("click",async()=>{var R;const y=d(),T=y.reduce((N,F)=>Math.max(N,F.number||0),0)+1,v=n.getActiveSpot(),x={id:`chap-${Date.now()}`,number:T,week:`Capítulo ${T}`,title:`Nuevo Capítulo ${T}`,subtitle:"En desarrollo narrativo",status:"⚪ En Escritura",floor:n.getActiveFloor(),spotId:(v==null?void 0:v.id)||"vanity",lightingMode:n.getLightingMode(),format:"Ficción Vertical 9:16",synopsis:"",hook:"«Escribe aquí el monólogo susurrado de Alina para este episodio...»",audioTone:"ElevenLabs Alina-Hypno-v1 (Pitch 0.98 | Rate 0.95)",directorNotes:"",linkedObjectIds:[],linkedShotIds:[]};y.push(x),r=x.id,await Fa(x),(R=n.onChaptersChanged)==null||R.call(n),m(),n.setStatus(`📖 <span class="text-emerald-400 font-bold">Capítulo ${T} creado.</span>`)}),e.querySelectorAll(".chap-item").forEach(y=>{y.onclick=()=>{r=y.dataset.cid,m()}}),!f)return;const I=(y,T,v=!1)=>{const x=e.querySelector("#"+y);x&&x.addEventListener("input",R=>{if(f[T]=R.target.value,v){const N=e.querySelector(`.chap-item[data-cid="${f.id}"] .text-xs.font-bold`);N&&T==="title"&&(N.textContent=f.title)}u(f)})};I("chap-week","week"),I("chap-title","title",!0),I("chap-subtitle","subtitle"),I("chap-synopsis","synopsis"),I("chap-notes","directorNotes"),I("chap-hook","hook"),I("chap-tone","audioTone"),e.querySelector("#chap-status").onchange=y=>{f.status=y.target.value,u(f),m()},e.querySelector("#chap-spot").onchange=y=>{const[T,v]=y.target.value.split(":");f.floor=Number(T),f.spotId=v,u(f)},e.querySelector("#chap-light").onchange=y=>{f.lightingMode=y.target.value,u(f)},e.querySelectorAll(".chap-obj-chip").forEach(y=>{y.onclick=()=>{const T=y.dataset.oid;f.linkedObjectIds=Array.isArray(f.linkedObjectIds)?f.linkedObjectIds:[],f.linkedObjectIds.includes(T)?f.linkedObjectIds=f.linkedObjectIds.filter(v=>v!==T):f.linkedObjectIds.push(T),Fa(f),m()}}),e.querySelector("#btn-chap-goto-set").onclick=()=>{n.loadChapterSetIntoStudio(f)},e.querySelector("#btn-chap-copy-voice").onclick=()=>{navigator.clipboard.writeText(f.hook||""),n.setStatus('🎙️ <span class="text-emerald-400 font-bold">Guion de voz copiado para ElevenLabs.</span>')},e.querySelector("#btn-chap-copy-sheet").onclick=()=>{const y=M.filter(v=>(f.linkedObjectIds||[]).includes(v.id)),T=["=== FICHA DE RODAJE CINEMATOGRÁFICO: ALINA VAN DIJK ===",`SERIE: ${Da.serieTitle}`,`CAPÍTULO ${f.number}: ${f.title} (${f.week||""})`,`ESTADO: ${f.status}`,`SET 3D: Piso ${f.floor} • Spot ${f.spotId} • Luz ${f.lightingMode==="day"?"Día (Golden Hour)":"Noche (Chiaroscuro)"}`,"","[SINOPSIS]",f.synopsis||"(Sin sinopsis)","","[LOCUCIÓN ELEVENLABS — Alina-Hypno-v1 | Pitch 0.98 | Rate 0.95]",f.hook||"",`Tono vocal: ${f.audioTone||""}`,"","[NOTAS DE DIRECCIÓN]",f.directorNotes||"","",`[OBJETOS B-ROLL ASIGNADOS (${y.length})]`,...y.map(v=>`- ${v.handle} (${v.name}): ${v.promptToken}`),"",`[PLANOS CAPTURADOS VINCULADOS (${b.length})]`,...b.map((v,x)=>`Plano ${x+1} (${v.framing.mm}mm, ${v.anim}): ${v.fluxPrompt}`),"======================================================="].join(`
`);navigator.clipboard.writeText(T),n.setStatus(`📋 <span class="text-emerald-400 font-bold">Ficha completa del Capítulo ${f.number} copiada al portapapeles.</span>`)},e.querySelector("#btn-chap-export-json").onclick=()=>{const y=M.filter(T=>(f.linkedObjectIds||[]).includes(T.id));n.downloadJson({series:Da.serieTitle,chapter:f,objects_broll:y.map(T=>({id:T.id,handle:T.handle,name:T.name,promptToken:T.promptToken,motionPrompt:T.motionPrompt})),captured_shots:b.map((T,v)=>({order:v+1,id:T.id,spot:T.spot.name,framing:T.framing,fluxPrompt:T.fluxPrompt,motionPrompt:T.motionPrompt}))},`alina_capitulo_${f.number}_escaleta.json`),n.setStatus(`📦 <span class="text-emerald-400 font-bold">Escaleta JSON del Capítulo ${f.number} descargada.</span>`)},e.querySelector("#btn-chap-delete").onclick=async()=>{var v,x;const y=d();if(y.length<=1){n.setStatus("⚠️ Conserva al menos un capítulo en la serie.");return}const T=y.findIndex(R=>R.id===f.id);T>=0&&y.splice(T,1),await Yv(f.id),r=((v=y[0])==null?void 0:v.id)||null,(x=n.onChaptersChanged)==null||x.call(n),m()}}function _(){const g=zv,f=a.filter(Boolean).length,p=Math.round(f/Pa.length*100);t.innerHTML=`
      <div class="grid grid-cols-12 gap-4">
        <!-- Columna Izquierda: Perfil & Token Lock Maestro -->
        <div class="col-span-12 lg:col-span-5 space-y-4">
          <div class="bg-[#12141a] border border-white/10 rounded-2xl p-5 shadow-2xl space-y-3">
            <div class="flex items-center gap-3.5">
              <img src="${g.avatar}" alt="${nt(g.name)}" class="w-16 h-16 rounded-2xl object-cover border border-[#c86446]/50 shadow-lg">
              <div>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-[#c86446]/20 text-[#f29979] border border-[#c86446]/30">CANON LMNJDRS</span>
                <h3 class="text-base font-bold text-white mt-1">${nt(g.name)} (${nt(g.age)})</h3>
                <p class="text-[11px] text-slate-400">${nt(g.origin)}</p>
              </div>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed">${nt(g.story)}</p>
            <div class="p-3 rounded-xl bg-black/45 border border-white/5 space-y-1 text-xs">
              <div class="flex items-center justify-between text-[11px]">
                <span class="font-bold text-[#f29979]">🎙️ Voz ElevenLabs: ${nt(g.voice.id)}</span>
                <span class="font-mono text-slate-400">Pitch ${g.voice.pitch} | Rate ${g.voice.rate}</span>
              </div>
              <p class="text-[11px] italic text-slate-300">${nt(g.voice.sample)}</p>
            </div>
          </div>

          <!-- Master Facial Token Lock -->
          <div class="bg-[#12141a] border border-white/10 rounded-2xl p-5 shadow-2xl space-y-3">
            <div class="flex items-center justify-between">
              <h4 class="text-xs font-bold uppercase tracking-wider text-white">🔒 Master Facial Token Lock</h4>
              <button id="btn-copy-master-token" class="text-[11px] font-mono text-[#f29979] hover:text-white font-semibold">Copiar Token</button>
            </div>
            <div class="p-3 rounded-xl bg-black/60 border border-white/10 text-[11px] font-mono text-emerald-300/95 leading-relaxed select-all">${nt(g.consistencyLock.tokenSnippet)}</div>

            <div class="flex items-center justify-between pt-1">
              <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400">Negative Prompt Base</span>
              <button id="btn-copy-neg-token" class="text-[11px] font-mono text-slate-400 hover:text-white">Copiar Negative</button>
            </div>
            <div class="p-2.5 rounded-xl bg-black/60 border border-white/5 text-[10px] font-mono text-rose-300/85 select-all">${nt(g.consistencyLock.negativeTokens)}</div>
          </div>
        </div>

        <!-- Columna Derecha: Prompts Maestros LMNJDRS + Decálogo Zero-Waste + Checklist -->
        <div class="col-span-12 lg:col-span-7 space-y-4">
          <div class="bg-[#12141a] border border-white/10 rounded-2xl p-5 shadow-2xl space-y-3">
            <h4 class="text-xs font-bold uppercase tracking-wider text-white">✨ Prompts Maestros de Referencia (LMNJDRS)</h4>
            <div class="space-y-2.5">
              ${g.masterPromptScenes.map((M,A)=>`
                <div class="p-3 rounded-xl bg-black/45 border border-white/10 space-y-1.5">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-white">${nt(M.label)}</span>
                    <button data-mscene="${A}" class="copy-mscene-btn text-[10px] font-mono text-[#f29979] hover:text-white">Copiar Prompt</button>
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
              ${Pa.map((M,A)=>`
                <label class="flex items-start gap-2 p-2.5 rounded-xl bg-black/40 border border-white/5 cursor-pointer text-[11px] text-slate-200">
                  <input type="checkbox" data-chk="${A}" ${a[A]?"checked":""} class="mt-0.5 accent-[#c86446]">
                  <span>${nt(M)}</span>
                </label>`).join("")}
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-white/5">
              ${Hv.map(M=>`
                <div class="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 text-[11px]">
                  <div class="font-bold text-[#f29979]">#${M.num} · ${nt(M.rule)}</div>
                  <div class="text-slate-400 text-[10px] mt-0.5 leading-snug">${nt(M.desc)}</div>
                </div>`).join("")}
            </div>
          </div>
        </div>
      </div>
    `,t.querySelector("#btn-copy-master-token").onclick=()=>{navigator.clipboard.writeText(g.consistencyLock.tokenSnippet),n.setStatus('🔒 <span class="text-emerald-400 font-bold">Master Facial Token Lock copiado.</span>')},t.querySelector("#btn-copy-neg-token").onclick=()=>{navigator.clipboard.writeText(g.consistencyLock.negativeTokens),n.setStatus('🚫 <span class="text-emerald-400 font-bold">Negative Prompt copiado.</span>')},t.querySelectorAll(".copy-mscene-btn").forEach(M=>{M.onclick=()=>{const A=g.masterPromptScenes[Number(M.dataset.mscene)];A&&(navigator.clipboard.writeText(A.prompt),n.setStatus(`✨ <span class="text-emerald-400 font-bold">Prompt «${nt(A.label)}» copiado.</span>`))}}),t.querySelectorAll("input[data-chk]").forEach(M=>{M.onchange=A=>{a[Number(M.dataset.chk)]=A.target.checked,_()}})}return{getSubTab:()=>i,setSubTab:c,renderChapters:m,renderBible:_,selectChapter(g){r=g,c("chapters")}}}const P={activeView:"plato",cinemaSubView:"chapters",objects3DVisible:!1,activeEngine:"threejs",activeFloor:2,activeSpot:Dn[2].spots[0],activeAnim:"Idle",activeCamPreset:"85mm",lightingMode:"night",sliced:!0,depthPass:!1,guide916:!1,theaterMode:!1,motionEngine:"higgsfield",shots:[],objects:[],chapters:[],selectedShotId:null,defaultChapterIdForNextShot:"",pendingObjectIdsForNextShot:[],pendingUnityCapture:null,unityLoadedFloors:new Set,threeLoadMs:0,unityLoadMs:null,unityFps:null},Qv={0:"Planta Baja — Cabaret Nocturne, parking exterior, marquesina VIP y piano de cola",1:"Le Velvet Café — Barra de roble con La Marzocco en cobre, mesas Carrara y balcón",2:"Residencia Privada — Tocador vanity iluminado, baño spa basáltico, cocina y suite",3:"The Mind Sanctuary — Estudio de podcast con Shure SM7B, biblioteca clínica y boudoir",4:"Penthouse Rooftop — Plunge pool basáltica, tumbonas de teca, barra en cobre y skyline"};let pr=null;function Ll({floor:s,percent:e=0,done:t=!1,error:n=""}){var h;const i=document.getElementById("unity-floor-loading-overlay"),r=document.getElementById("unity-floor-loading-title"),o=document.getElementById("unity-floor-loading-pct"),a=document.getElementById("unity-floor-progress-bar");if(!i||!r||!o||!a)return;const l=Qv[s]||((h=Dn[s])==null?void 0:h.description)||"Escenario 3D",c=`Cargando piso ${s}: ${l}, favor espere`;if(pr&&(clearTimeout(pr),pr=null),n){i.classList.remove("hidden"),r.textContent=`Error cargando piso ${s}: ${n}`,o.textContent="ERR",st(`⚠️ <span class="text-rose-400 font-semibold">Error cargando piso ${s}:</span> ${n}`);return}const d=Math.max(0,Math.min(100,Math.round(Number(e)||0)));if(i.classList.remove("hidden"),r.textContent=c,o.textContent=`${d}%`,a.style.width=`${d}%`,P.activeEngine==="unity"){const u=document.getElementById("viewport-status-hud");u&&(u.textContent=`${c} (${d}%)`),st(`⏳ <span class="text-amber-300 font-semibold">${c}</span> <span class="font-mono text-emerald-400">${d}%</span>`)}t&&(P.unityLoadedFloors.add(s),pr=setTimeout(()=>{i.classList.add("hidden"),pr=null,P.activeEngine==="unity"&&(vi(),st(`✅ <span class="text-emerald-400 font-semibold">Piso ${s} cargado (100%):</span> ${l}`))},450))}let Ts,Xn,Pi,Uo,Nt,ze,oe,cn,ts,Ui,Ii;const Hd=new dp;let Ua=0,ka=performance.now(),qh=0;function dn(s,e){const t=document.createElement("a");t.download=e,t.href=s,document.body.appendChild(t),t.click(),document.body.removeChild(t)}function Jn(s,e){const t=new Blob([JSON.stringify(s,null,2)],{type:"application/json"}),n=URL.createObjectURL(t);dn(n,e),setTimeout(()=>URL.revokeObjectURL(n),1e3)}function ey(s,e=1080){return new Promise(t=>{const n=new Image;n.onload=()=>{const i=Math.min(n.width,n.height),r=Math.round((n.width-i)/2),o=Math.round((n.height-i)/2),a=document.createElement("canvas");a.width=e,a.height=e,a.getContext("2d").drawImage(n,r,o,i,i,0,0,e,e),t(a.toDataURL("image/png"))},n.onerror=()=>t(s),n.src=s})}function st(s){const e=document.getElementById("renderStatus");e&&(e.innerHTML=s)}function Ps(){const s=document.getElementById("perf-badge");if(s)if(P.activeEngine==="threejs")s.textContent=`FPS: ${qh||"--"}`;else{const e=P.unityFps!=null?`${P.unityFps}`:"--";s.textContent=`U6 FPS: ${e}`}}function Nl(){const s=document.getElementById("btn-slice");s&&(s.textContent=P.sliced?"🔪 Sliced: ON":"🏛️ Sliced: OFF",s.className=P.sliced?"text-[10px] bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 px-2 py-0.5 rounded-lg border border-emerald-500/30 font-mono transition-colors":"text-[10px] bg-white/5 hover:bg-white/10 text-slate-300 px-2 py-0.5 rounded-lg border border-white/10 font-mono transition-colors")}function Ks(){if(Uo)for(let s=0;s<=4;s++){const e=Uo.floorGroups[s];e&&(P.sliced&&s>P.activeFloor?(e.position.y=s*ee+16,e.visible=!1):(e.position.y=s*ee,e.visible=!0))}}function Yh(){return!!(P.activeView==="plato"||P.activeView==="prompts"||P.activeView==="objects"&&P.objects3DVisible||P.activeView==="cinema"&&P.cinemaSubView==="director")}function Zs(){Yh()&&(requestAnimationFrame(()=>{ze==null||ze.onWindowResize(),window.dispatchEvent(new Event("resize"))}),setTimeout(()=>{ze==null||ze.onWindowResize(),window.dispatchEvent(new Event("resize"))},140))}function Di(s){const t=["plato","prompts","objects","cinema"].includes(s)?s:"plato";P.activeView=t,document.body.dataset.view=t,document.querySelectorAll(".top-nav-btn").forEach(n=>{const i=n.dataset.nav===t;n.className=i?"top-nav-btn px-3 py-1.5 rounded-xl bg-[#c86446] text-white font-bold shadow transition-all flex items-center gap-1.5 whitespace-nowrap copper-glow":"top-nav-btn px-3 py-1.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap"}),t==="objects"&&(Ui==null||Ui.render()),t==="cinema"&&(P.cinemaSubView==="chapters"&&(Ii==null||Ii.renderChapters()),P.cinemaSubView==="bible"&&(Ii==null||Ii.renderBible())),t==="prompts"&&In(),Zs()}function ks(){const s=document.getElementById("shotsCountBadge"),e=document.getElementById("objectsCountBadge"),t=document.getElementById("chaptersCountBadge");s&&(s.textContent=String(P.shots.length),s.classList.toggle("hidden",P.shots.length===0)),e&&(e.textContent=String(P.objects.length)),t&&(t.textContent=String(P.chapters.length))}function ty(){const s=document.getElementById("floorContainer"),e=document.getElementById("compactFloorBar");s.innerHTML="",e.innerHTML="";const t={amber:"text-amber-400",purple:"text-purple-400",copper:"text-[#f29979]",emerald:"text-emerald-400",rose:"text-rose-400"},n={amber:"bg-amber-500/10 text-amber-300 border-amber-500/20",purple:"bg-purple-500/10 text-purple-300 border-purple-500/20",copper:"bg-[#c86446]/20 text-[#f29979] border-[#c86446]/30",emerald:"bg-emerald-500/10 text-emerald-300 border-emerald-500/20",rose:"bg-rose-500/10 text-rose-300 border-rose-500/20"};for(const i of[4,3,2,1,0]){const r=Dn[i],o=document.createElement("div");o.id=`floor-card-${i}`,o.className="floor-card cursor-pointer p-2.5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] transition-all",o.innerHTML=`
      <div class="flex items-center justify-between gap-2">
        <span class="text-xs font-bold ${t[r.badgeColor]} font-mono">${i===0?"PLANTA BAJA":`PISO ${i}${i===2?" ★":""}`}</span>
        <span class="text-[10px] px-2 py-0.5 rounded-full border font-medium ${n[r.badgeColor]}">${r.badge}</span>
      </div>
      <h3 class="text-xs font-semibold text-white mt-1 truncate">${r.subtitle}</h3>
    `,o.addEventListener("click",()=>ko(i)),s.appendChild(o);const a=document.createElement("button");a.id=`floor-chip-${i}`,a.textContent=i===0?"PB":`P${i}`,a.title=r.floorName,a.addEventListener("click",()=>ko(i)),e.appendChild(a)}}function dc(){for(let s=0;s<=4;s++){const e=document.getElementById(`floor-card-${s}`);e&&(e.className=s===P.activeFloor?"floor-card cursor-pointer p-2.5 rounded-xl border border-[#c86446]/70 bg-[#c86446]/12 copper-glow transition-all":"floor-card cursor-pointer p-2.5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] transition-all");const t=document.getElementById(`floor-chip-${s}`);t&&(t.className=s===P.activeFloor?"px-2 py-1 rounded-lg text-[11px] font-mono font-bold bg-[#c86446]/25 text-[#f29979] border border-[#c86446]/60 transition-all":"px-2 py-1 rounded-lg text-[11px] font-mono text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all")}}function hc(){const s=Dn[P.activeFloor],e=document.getElementById("spotPillsContainer");e.innerHTML="",s.spots.forEach(t=>{const n=document.createElement("button");n.id=`pill-${t.id}`;const i=t.id===P.activeSpot.id;n.className=i?"px-3 py-1 rounded-lg text-xs font-semibold bg-[#c86446] text-white transition-all shadow":"px-3 py-1 rounded-lg text-xs font-semibold bg-white/5 text-slate-300 hover:bg-white/10 transition-all",n.textContent=`${t.icon} ${t.name}`,n.addEventListener("click",()=>uc(t)),e.appendChild(n)})}function Wo(s){P.activeAnim=s,document.getElementById("alinaPoseBadge").textContent=s,document.querySelectorAll(".anim-btn").forEach(e=>{const t=e.dataset.anim===s;e.className=t?"anim-btn py-1 px-2 rounded-lg border border-[#c86446] bg-[#c86446]/25 text-white font-semibold transition-colors":"anim-btn py-1 px-2 rounded-lg border border-white/10 bg-black/40 text-slate-300 hover:bg-white/10 transition-colors"})}function ko(s){P.activeFloor=s;const e=Dn[s];document.getElementById("currentFloorTag").textContent=e.floorName,dc(),Ks(),P.activeEngine==="unity"&&(oe!=null&&oe.ready)&&!P.unityLoadedFloors.has(s)&&Ll({floor:s,percent:0,done:!1}),oe==null||oe.sendFloor(s),uc(e.spots[0])}function uc(s){P.activeSpot=s,P.activeCamPreset="85mm",hc(),document.getElementById("currentSpotTitle").textContent=s.name,document.getElementById("fluxPromptBox").textContent=s.prompt,document.getElementById("scriptInput").value=s.script,document.getElementById("alinaPosBadge").textContent=`${s.alinaPos.x.toFixed(1)}, ${s.alinaPos.y.toFixed(1)}, ${s.alinaPos.z.toFixed(1)}`,document.getElementById("brollPackage").innerHTML=s.brolls.map(e=>`<div>• ${e}</div>`).join(""),Nt==null||Nt.placeAtSpot(s),Wo(s.defaultAnim||"Idle"),ze==null||ze.flyTo(s.camPos,s.camTarget),oe==null||oe.sendSpot(s.id),oe==null||oe.sendAnimation(s.defaultAnim||"Idle"),vi(),ts==null||ts.onSpotChanged()}function vr(s){for(const e of Object.values(Dn)){const t=e.spots.find(n=>n.id===s);if(t)return t}return null}function Vd(s){const e=vr(s);!e||P.activeSpot&&P.activeSpot.id===e.id&&P.activeFloor===e.floor||(P.activeFloor=e.floor,P.activeSpot=e,document.getElementById("currentFloorTag").textContent=Dn[e.floor].floorName,dc(),Ks(),hc(),document.getElementById("currentSpotTitle").textContent=e.name,document.getElementById("fluxPromptBox").textContent=e.prompt,document.getElementById("alinaPosBadge").textContent=`${e.alinaPos.x.toFixed(1)}, ${e.alinaPos.y.toFixed(1)}, ${e.alinaPos.z.toFixed(1)}`,Nt==null||Nt.placeAtSpot(e))}function vi(){const s=Dn[P.activeFloor].floorName.split("•")[0].trim(),e=P.activeEngine==="threejs"?"Three.js":"Unity 6 URP",t=P.depthPass?"DEPTH PASS":P.activeSpot.name;document.getElementById("viewport-status-hud").textContent=`${s} • ${t} [${e}]`}function Oo(s){P.lightingMode=s,Pi==null||Pi.setMode(s),oe==null||oe.sendLightingMode(s),ts==null||ts.onModeChanged();const e=document.getElementById("btn-mode-day"),t=document.getElementById("btn-mode-night");s==="day"?(e.className="px-2 py-1 rounded-lg bg-[#c86446] text-white font-medium shadow transition-all",t.className="px-2 py-1 rounded-lg text-slate-400 hover:text-white font-medium transition-all"):(t.className="px-2 py-1 rounded-lg bg-[#c86446] text-white font-medium shadow transition-all",e.className="px-2 py-1 rounded-lg text-slate-400 hover:text-white font-medium transition-all")}function Fl(s){P.depthPass=s;const e=new L(P.activeSpot.alinaPos.x,P.activeSpot.alinaPos.y+1,P.activeSpot.alinaPos.z);ze==null||ze.setDepthPass(s,e),oe==null||oe.sendRenderPass(s?"depth":"beauty");const t=document.getElementById("btn-beauty-pass"),n=document.getElementById("btn-depth-pass");s?(n.className="px-2 py-1 rounded-lg bg-emerald-600 text-white font-semibold shadow",t.className="px-2 py-1 rounded-lg text-slate-400 hover:text-white font-semibold transition-colors"):(t.className="px-2 py-1 rounded-lg bg-[#c86446] text-white font-semibold shadow",n.className="px-2 py-1 rounded-lg text-slate-400 hover:text-white font-semibold transition-colors"),vi()}function Oa(s){P.activeCamPreset=s;const e=P.activeSpot;if(s==="dollhouse"){P.sliced=!1,Nl(),Ks(),ze==null||ze.flyTo({x:3.5,y:12.8,z:36},{x:0,y:11.2,z:-5.5}),oe==null||oe.sendDollhouseSlice(!1),oe==null||oe.sendCameraAngle("dollhouse"),document.getElementById("viewport-status-hud").textContent=`CASA DE MUÑECAS 5 PISOS [${P.activeEngine==="threejs"?"Three.js":"Unity 6 URP"}]`;return}if(s==="overview"){P.sliced=!1,Nl(),Ks(),ze==null||ze.flyTo({x:30,y:24.5,z:33.5},{x:0,y:10.5,z:-4}),oe==null||oe.sendDollhouseSlice(!1),oe==null||oe.sendCameraAngle("overview"),document.getElementById("viewport-status-hud").textContent=`EXTERIOR 3/4 • 5 PISOS [${P.activeEngine==="threejs"?"Three.js":"Unity 6 URP"}]`;return}s==="85mm"||s==="reset"?ze==null||ze.flyTo(e.camPos,e.camTarget):s==="macro"?ze==null||ze.flyTo(e.macroPos,e.macroTarget):s==="top"&&(ze==null||ze.flyTo({x:e.alinaPos.x,y:e.alinaPos.y+4.3,z:e.alinaPos.z+1},{x:e.alinaPos.x,y:e.alinaPos.y,z:e.alinaPos.z})),oe==null||oe.sendCameraAngle(s),vi()}function Ba(){const s=P.activeEngine==="threejs"&&ze?ze.getCameraTelemetry():(oe==null?void 0:oe.lastCameraTelemetry)||{source:"Unity6_URP_WebGL",spot:P.activeSpot.id,preset:P.activeCamPreset};return{engine:P.activeEngine==="threejs"?"Motor A: Three.js WebGL + alina.glb":"Motor B: Unity 6 URP WebGL",character:"Alina Van Dijk",token_lock:"28yo Dutch-Latin woman Alina Van Dijk, vivid copper red hair with natural soft waves, vivid emerald green eyes, light natural freckles, crimson lips, micro-pores",floor:Dn[P.activeFloor].floorName,spot:P.activeSpot.name,animation:P.activeAnim,lighting_mode:P.lightingMode,spatial_coordinates:P.activeSpot.alinaPos,camera_telemetry:s,higgsfield_zero_waste:{mode:"Image-to-Video",motion_strength:parseFloat(document.getElementById("motionSlider").value),aspect_ratio:"9:16 (1080x1920)",duration_seconds:3.5,lipsync_engine:P.motionEngine,brolls:P.activeSpot.brolls},flux_prompt:P.activeSpot.prompt,elevenlabs_script:document.getElementById("scriptInput").value}}let Gd=null;function za(s){s&&(clearTimeout(Gd),Gd=setTimeout(()=>{Gn(s)},220))}function ny(){if(P.activeEngine==="threejs"&&ze)return{...ze.getCameraTelemetry(),approximate:!1};if(P.activeEngine==="unity"&&(oe!=null&&oe.lastCameraTelemetry))return{...oe.lastCameraTelemetry,approximate:!1};const s=P.activeSpot;return{...P.activeCamPreset==="macro"?{position:{...s.macroPos},target:{...s.macroTarget},fov_deg:24}:P.activeCamPreset==="top"?{position:{x:s.alinaPos.x,y:s.alinaPos.y+4.3,z:s.alinaPos.z+1},target:{...s.alinaPos},fov_deg:52}:P.activeCamPreset==="dollhouse"?{position:{x:3.5,y:12.8,z:36},target:{x:0,y:11.2,z:-5.5},fov_deg:55}:P.activeCamPreset==="overview"?{position:{x:30,y:24.5,z:33.5},target:{x:0,y:10.5,z:-4},fov_deg:60}:{position:{...s.camPos},target:{...s.camTarget},fov_deg:36},approximate:!0}}function Rn(){return P.shots.find(s=>s.id===P.selectedShotId)||null}function fc(s){const e=(s==null?void 0:s.objectIds)||[];return P.objects.filter(t=>e.includes(t.id))}async function Ul(s,e=null){var p,M;const t=P.activeSpot,n=Dn[P.activeFloor].floorName,i=ny(),r=parseFloat(document.getElementById("motionSlider").value)||2.5,o=(cn==null?void 0:cn.active)&&(cn==null?void 0:cn.shot),a=o?{shotLabel:(p=cn.shot.shotTypeId)==null?void 0:p.replace(/_/g," "),angleLabel:"cinematic angle",focalLengthMm:cn.shot.focalLengthMm}:null,l=o?(M=cn.shot.cameraMoveId)==null?void 0:M.replace(/_/g," "):null,c=Ov({camera:i,spot:t,camPreset:P.activeCamPreset,cinemaShot:a}),d=await Bv(s),h=!!e||P.depthPass,u=[...P.pendingObjectIdsForNextShot];P.pendingObjectIdsForNextShot=[];const m=P.objects.filter(A=>u.includes(A.id)),_=$h({spot:t,floorName:n,anim:P.activeAnim,lightingMode:P.lightingMode,framing:c,imageMetrics:d,depthPass:h,attachedObjects:m}),g=Fo({anim:P.activeAnim,framing:c,motionStrength:r,motionEngine:P.motionEngine,cinemaMoveLabel:l}),f={id:`shot-${Date.now()}`,createdAt:new Date().toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit",second:"2-digit"}),engine:P.activeEngine,floor:P.activeFloor,floorName:n,spot:t,anim:P.activeAnim,camPreset:P.activeCamPreset,lightingMode:P.lightingMode,sliced:P.sliced,depthPass:P.depthPass,camera:i,framing:c,imageMetrics:d,cinemaMoveLabel:l,image:s,depthImage:e,motionEngine:P.motionEngine,motionStrength:r,objectIds:u,chapterId:P.defaultChapterIdForNextShot||"",fluxPrompt:_,motionPrompt:g};if(P.shots.unshift(f),P.shots.length>24){const A=P.shots.pop();A!=null&&A.id&&cc(A.id)}P.selectedShotId=f.id,await Gn(f),ks(),In(),st(`✅ <span class="text-emerald-400 font-bold">Captura #${P.shots.length} (${f.engine==="unity"?"Unity 6 URP":"Three.js"}) lista en Estudio Prompts.</span>`)}function Ha({withDepth:s=!1}={}){if(P.activeView!=="prompts"&&Di("prompts"),P.activeEngine==="threejs"){const e=ze.renderVertical916DataURL(1080,1920,!!P.depthPass),t=s?ze.renderVertical916DataURL(1080,1920,!0):null;Ul(e,t);return}if(!(oe!=null&&oe.ready)){st('⏳ <span class="text-amber-300 font-bold">Espera a que cargue Unity 6 URP para capturar el frame.</span>');return}P.pendingUnityCapture={mode:"create",withDepth:s},st('📸 <span class="text-[#f29979]">Capturando frame 1080×1920 desde Unity 6 URP...</span>'),P.depthPass?oe.requestDepthScreenshot916():oe.requestScreenshot916()}function Kh(s="1:1"){if(P.activeEngine==="threejs"){const e=s==="1:1"?1080:1920;return Promise.resolve(ze.renderVertical916DataURL(1080,e,!1))}return oe!=null&&oe.ready?new Promise(e=>{P.pendingUnityCapture={mode:"objectCapture",aspect:s,resolve:e},oe.requestScreenshot916()}):(st('⏳ <span class="text-amber-300 font-bold">Espera a que cargue Unity 6 URP para capturar el objeto.</span>'),Promise.resolve(null))}function iy(){const s=Rn();if(s){if(P.activeEngine==="threejs"){s.depthImage=ze.renderVertical916DataURL(1080,1920,!0),Cr(s,{onlyFluxIfClean:!0}),Gn(s),In(),st('✅ <span class="text-emerald-400 font-bold">Depth Map 9:16 adjuntado a la captura.</span>');return}if(!(oe!=null&&oe.ready)){st('⏳ <span class="text-amber-300">Unity 6 URP aún no está listo.</span>');return}P.pendingUnityCapture={mode:"attachDepth",shotId:s.id},st('🌑 <span class="text-emerald-300">Capturando Depth Map 1080×1920 desde Unity 6 URP...</span>'),oe.requestDepthScreenshot916()}}function Cr(s,{onlyFluxIfClean:e=!1}={}){s.fluxPrompt=$h({spot:s.spot,floorName:s.floorName,anim:s.anim,lightingMode:s.lightingMode,framing:s.framing,imageMetrics:s.imageMetrics,depthPass:!!s.depthImage||s.depthPass,attachedObjects:fc(s)}),e||(s.motionPrompt=Fo({anim:s.anim,framing:s.framing,motionStrength:s.motionStrength,motionEngine:s.motionEngine,cinemaMoveLabel:s.cinemaMoveLabel}))}function Zh(s){document.querySelectorAll(".motion-btn").forEach(e=>{const t=e.dataset.motion===s;e.className=t?"motion-btn p-2 rounded-xl border border-emerald-500/50 bg-emerald-500/10 text-left transition-all":"motion-btn p-2 rounded-xl border border-white/5 bg-black/40 text-left hover:bg-white/5 transition-all";const n=e.querySelector("div");n&&(n.className=t?"font-bold text-emerald-400 text-[11px]":"font-bold text-white text-[11px]")})}function In(){const s=document.getElementById("shotsStrip"),e=document.getElementById("shotEmptyState"),t=document.getElementById("shotDetail"),n=P.shots.length>0;s.classList.toggle("hidden",!n),s.classList.toggle("flex",n),e.classList.toggle("hidden",n),s.innerHTML="",P.shots.forEach((c,d)=>{const h=c.id===P.selectedShotId,u=P.shots.length-d,m=document.createElement("button");m.type="button",m.className=`relative shrink-0 rounded-lg overflow-hidden border-2 transition-all ${h?"border-[#c86446] scale-[1.02] copper-glow":"border-white/10 opacity-75 hover:opacity-100"}`,m.title=`Toma #${u} • ${c.spot.name}`,m.innerHTML=`
      <img src="${c.image}" alt="Toma ${u}" class="block w-12 object-cover bg-black" style="aspect-ratio: 9/16;">
      <span class="absolute top-0.5 left-0.5 px-1 rounded bg-black/80 text-[8px] font-mono text-white">#${u}</span>
      <span class="absolute bottom-0.5 right-0.5 px-1 rounded text-[7px] font-mono font-bold ${c.engine==="unity"?"bg-pink-500/85 text-white":"bg-emerald-600/85 text-white"}">${c.engine==="unity"?"U6":"3D"}</span>
    `,m.addEventListener("click",()=>{P.selectedShotId=c.id,In()}),s.appendChild(m)});const i=Rn();if(t.classList.toggle("hidden",!i),t.classList.toggle("flex",!!i),!i)return;document.getElementById("shotPreview").src=i.image;const r=document.getElementById("shotDepthPreview");i.depthImage?(r.src=i.depthImage,r.classList.remove("hidden")):r.classList.add("hidden"),document.getElementById("shotMetaTitle").textContent=`${i.spot.icon} ${i.spot.name}`;const o=document.getElementById("shotEngineTag");o.textContent=i.engine==="unity"?"UNITY 6 URP":"THREE.JS",o.className=i.engine==="unity"?"text-[9px] font-mono px-1.5 py-0.5 rounded border border-pink-500/40 bg-pink-500/15 text-pink-300 shrink-0 font-bold":"text-[9px] font-mono px-1.5 py-0.5 rounded border border-emerald-500/40 bg-emerald-500/15 text-emerald-300 shrink-0 font-bold",document.getElementById("shotMetaFraming").textContent=`${i.framing.shot} • ${i.framing.mm}mm • ${i.framing.angle}`,document.getElementById("shotMetaState").textContent=`${i.floorName.split("•")[0].trim()} • ${i.anim} • ${i.lightingMode==="day"?"☀️ Día":"🌙 Noche"} • ${i.createdAt}`,document.getElementById("shotMetaLight").textContent=i.imageMetrics?`Luz medida: ${i.imageMetrics.summary}`:"";const a=document.getElementById("shotChapterSelect");a.innerHTML='<option value="">📖 Sin capítulo</option>'+P.chapters.map(c=>`<option value="${c.id}" ${i.chapterId===c.id?"selected":""}>Cap. ${c.number}: ${c.title}</option>`).join("");const l=document.getElementById("shotObjectChips");i.objectIds=Array.isArray(i.objectIds)?i.objectIds:[],l.innerHTML=P.objects.map(c=>{const d=i.objectIds.includes(c.id);return`
      <button type="button" data-oid="${c.id}" class="shot-obj-chip flex items-center gap-1.5 px-2 py-1 rounded-lg border text-[10px] font-mono transition-all ${d?"border-[#c86446] bg-[#c86446]/25 text-white font-bold shadow":"border-white/10 bg-white/5 text-slate-400 hover:text-white"}" title="${c.name}">
        <img src="${c.image}" alt="" class="w-4 h-4 rounded object-cover">
        <span>${c.handle}</span>
      </button>`}).join(""),l.querySelectorAll(".shot-obj-chip").forEach(c=>{c.onclick=()=>{const d=c.dataset.oid;i.objectIds.includes(d)?i.objectIds=i.objectIds.filter(h=>h!==d):i.objectIds.push(d),Cr(i,{onlyFluxIfClean:!0}),Gn(i),In()}}),document.getElementById("shotFluxPrompt").value=i.fluxPrompt,document.getElementById("shotMotionPrompt").value=i.motionPrompt,document.getElementById("motionSlider").value=String(i.motionStrength),document.getElementById("motionVal").textContent=Number(i.motionStrength).toFixed(1),P.motionEngine=i.motionEngine,Zh(i.motionEngine)}function sy(s){var e,t,n,i,r;P.activeFloor!==s.floor&&(P.activeFloor=s.floor,document.getElementById("currentFloorTag").textContent=Dn[s.floor].floorName,dc(),Ks(),oe==null||oe.sendFloor(s.floor)),P.activeSpot=s.spot,P.activeCamPreset=s.camPreset||"85mm",hc(),document.getElementById("currentSpotTitle").textContent=s.spot.name,document.getElementById("fluxPromptBox").textContent=s.spot.prompt,document.getElementById("alinaPosBadge").textContent=`${s.spot.alinaPos.x.toFixed(1)}, ${s.spot.alinaPos.y.toFixed(1)}, ${s.spot.alinaPos.z.toFixed(1)}`,Nt==null||Nt.placeAtSpot(s.spot),Wo(s.anim),Nt==null||Nt.playAnimation(s.anim),Oo(s.lightingMode),Fl(s.depthPass),oe==null||oe.sendSpot(s.spot.id),oe==null||oe.sendAnimation(s.anim),P.activeEngine==="threejs"&&((e=s.camera)!=null&&e.position)&&((t=s.camera)!=null&&t.target)?ze==null||ze.flyTo(s.camera.position,s.camera.target):!((n=s.camera)!=null&&n.approximate)&&((i=s.camera)!=null&&i.position)&&((r=s.camera)!=null&&r.target)?oe==null||oe.flyCameraTo(s.camera.position,s.camera.target):oe==null||oe.sendCameraAngle(s.camPreset||"85mm"),vi(),st(`↩ <span class="text-emerald-400 font-bold">Encuadre restaurado:</span> ${s.spot.name} (${s.anim}).`)}function go(s){const e=fc(s),t=P.chapters.find(n=>n.id===s.chapterId);return{captured_at:s.createdAt,engine:s.engine==="unity"?"Motor B: Unity 6 URP WebGL":"Motor A: Three.js WebGL + alina.glb",character:"Alina Van Dijk",chapter:t?{number:t.number,title:t.title}:null,floor:s.floorName,spot:s.spot.name,animation:s.anim,lighting_mode:s.lightingMode,spatial_coordinates:s.spot.alinaPos,camera_telemetry:s.camera,framing_analysis:s.framing,measured_frame_lighting:s.imageMetrics,reference_objects:e.map(n=>({id:n.id,handle:n.handle,name:n.name,category:n.category,object_token_lock:n.promptToken,broll_motion_prompt:n.motionPrompt})),higgsfield_zero_waste:{mode:"Image-to-Video",target_engine:s.motionEngine,motion_strength:s.motionStrength,aspect_ratio:"9:16 (1080x1920)",duration_seconds:3.5,has_depth_map:!!s.depthImage},prompts:{flux_keyframe_prompt:s.fluxPrompt,higgsfield_motion_prompt:s.motionPrompt},elevenlabs_script:(t==null?void 0:t.hook)||document.getElementById("scriptInput").value}}function ry(){const s=Rn();if(!s)return;const e=`alina_${s.engine}_piso${s.floor}_${s.spot.id}_${s.id.slice(-5)}`,t=fc(s);if(dn(s.image,`${e}_beauty_1080x1920.png`),t.forEach((n,i)=>{setTimeout(()=>{dn(n.image,`${e}_ref_${n.handle.replace("@","")}.png`)},650+i*220)}),s.depthImage){setTimeout(()=>dn(s.depthImage,`${e}_depth_1080x1920.png`),220),setTimeout(()=>Jn(go(s),`${e}_higgsfield.json`),440),st(`✅ <span class="text-emerald-400 font-bold">Paquete exportado (Beauty + Depth + ${t.length} Objeto(s) + JSON).</span>`);return}if(P.activeEngine==="threejs"){const n=ze.renderVertical916DataURL(1080,1920,!0);s.depthImage=n,Gn(s),In(),setTimeout(()=>dn(n,`${e}_depth_1080x1920.png`),220),setTimeout(()=>Jn(go(s),`${e}_higgsfield.json`),440),st(`✅ <span class="text-emerald-400 font-bold">Paquete completo exportado (Beauty + Depth + ${t.length} Objeto(s) + JSON).</span>`);return}oe!=null&&oe.ready?(P.pendingUnityCapture={mode:"exportDepth",shotId:s.id,baseName:e},oe.requestDepthScreenshot916(),setTimeout(()=>Jn(go(s),`${e}_higgsfield.json`),450),st('✅ <span class="text-emerald-400 font-bold">Exportando Beauty + Depth desde Unity 6 URP + Objetos + JSON...</span>')):(setTimeout(()=>Jn(go(s),`${e}_higgsfield.json`),250),st('✅ <span class="text-emerald-400 font-bold">Exportado Beauty PNG + Objetos + JSON.</span>'))}async function Wd(s){if(P.activeEngine===s)return;P.activeEngine=s;const e=document.getElementById("three-canvas-container"),t=document.getElementById("unity-canvas-container"),n=document.getElementById("btn-engine-a"),i=document.getElementById("btn-engine-b"),r=document.getElementById("motor-badge");if(s==="threejs"){e.classList.remove("hidden"),t.classList.add("hidden"),n.className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white font-semibold shadow transition-all",i.className="px-2.5 py-1 rounded-lg text-slate-300 hover:text-white font-semibold transition-all",r.textContent="THREE.JS",r.className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 font-bold shrink-0",ze==null||ze.onWindowResize(),Ps(),vi();return}e.classList.add("hidden"),t.classList.remove("hidden"),i.className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white font-semibold shadow transition-all",n.className="px-2.5 py-1 rounded-lg text-slate-300 hover:text-white font-semibold transition-all",r.textContent="UNITY 6 URP",r.className="text-[10px] font-mono text-pink-300 bg-pink-500/15 px-2 py-0.5 rounded-full border border-pink-500/30 font-bold shrink-0",Ps(),vi(),Zs(),oe.pendingState={floor:P.activeFloor,spotId:P.activeSpot.id,lightingMode:P.lightingMode,sliced:P.sliced,anim:P.activeAnim,renderPass:P.depthPass?"depth":"beauty"};try{await oe.ensureLoaded(),oe.syncFullState(oe.pendingState),Zs()}catch(o){document.getElementById("unity-loading-text").textContent=`Error al cargar Unity WebGL: ${o.message}`,st(`⚠️ <span class="text-rose-400">Error Unity WebGL:</span> ${o.message}`)}}function jd(s=null){const e=s!==null?s:!P.theaterMode;P.theaterMode=e;const t=document.getElementById("viewport-wrapper"),n=document.getElementById("btn-fullscreen");t.classList.toggle("viewport-theater",e),n.textContent=e?"✕ Salir":"⛶ Completa",Zs()}function oy(){var t,n,i,r;document.getElementById("brand-home-btn").addEventListener("click",()=>Di("plato")),document.querySelectorAll(".top-nav-btn").forEach(o=>{o.addEventListener("click",()=>Di(o.dataset.nav))}),document.getElementById("btn-prompts-close").addEventListener("click",()=>Di("plato")),document.getElementById("btn-goto-objects-vault").addEventListener("click",()=>Di("objects")),document.getElementById("btn-engine-a").addEventListener("click",()=>Wd("threejs")),document.getElementById("btn-engine-b").addEventListener("click",()=>Wd("unity")),document.getElementById("btn-mode-day").addEventListener("click",()=>Oo("day")),document.getElementById("btn-mode-night").addEventListener("click",()=>Oo("night")),document.getElementById("btn-slice").addEventListener("click",()=>{P.sliced=!P.sliced,Nl(),Ks(),oe==null||oe.sendDollhouseSlice(P.sliced)}),document.getElementById("btn-capture-to-prompt").addEventListener("click",()=>Ha({withDepth:!1})),document.getElementById("btn-capture-shot").addEventListener("click",()=>Ha({withDepth:!1})),document.getElementById("btn-capture-shot-depth").addEventListener("click",()=>Ha({withDepth:!0})),document.getElementById("btn-quick-save-object").addEventListener("click",async()=>{var d,h,u;const o=await Kh("1:1");if(!o)return;const a=((d=P.activeSpot)==null?void 0:d.name)||"Santuario",l=P.objects.length+1,c={id:`obj-${Date.now()}`,order:l,name:`Objeto ${a}`,handle:`@prop_${((h=P.activeSpot)==null?void 0:h.id)||"set"}_${l}`,category:"Audio & Set",floor:P.activeFloor,spotId:((u=P.activeSpot)==null?void 0:u.id)||"vanity",image:o,isPlaceholderImage:!1,promptToken:`photorealistic prop captured from ${a}, detailed luxury surface texture and lighting`,motionPrompt:"Subtle macro light reflections across prop surface, slow 2% push-in, no humans, motion strength 2.2",usage:`Capturado desde Piso ${P.activeFloor} (${a}).`};P.objects.unshift(c),await xr(c),ks(),Di("objects"),Ui==null||Ui.selectObject(c.id),st(`🏺 <span class="text-emerald-400 font-bold">Objeto guardado en la Bóveda (${c.handle}).</span>`)}),document.getElementById("shotFluxPrompt").addEventListener("input",o=>{const a=Rn();a&&(a.fluxPrompt=o.target.value,za(a))}),document.getElementById("shotMotionPrompt").addEventListener("input",o=>{const a=Rn();a&&(a.motionPrompt=o.target.value,za(a))}),document.getElementById("shotChapterSelect").addEventListener("change",o=>{const a=Rn();a&&(a.chapterId=o.target.value,Gn(a),st(a.chapterId?'📖 <span class="text-emerald-400 font-bold">Captura vinculada al capítulo seleccionado.</span>':"ℹ️ Captura desvinculada de capítulo."))}),document.getElementById("btn-shot-regen").addEventListener("click",()=>{const o=Rn();o&&(Cr(o),Gn(o),In(),st('↻ <span class="text-[#f29979]">Prompts regenerados con los Objetos y telemetría activos.</span>'))}),document.getElementById("btn-shot-restore").addEventListener("click",()=>{const o=Rn();o&&sy(o)}),document.getElementById("btn-shot-attach-depth").addEventListener("click",iy),document.getElementById("btn-shot-png").addEventListener("click",()=>{const o=Rn();o&&(dn(o.image,`alina_${o.engine}_piso${o.floor}_${o.spot.id}_1080x1920.png`),st('✅ <span class="text-emerald-400 font-bold">PNG 1080×1920 descargado.</span>'))}),document.getElementById("btn-shot-package").addEventListener("click",ry),document.getElementById("btn-shot-delete").addEventListener("click",()=>{var a;if(!P.selectedShotId)return;const o=P.selectedShotId;P.shots=P.shots.filter(l=>l.id!==o),P.selectedShotId=((a=P.shots[0])==null?void 0:a.id)??null,cc(o),ks(),In()}),document.querySelectorAll(".copy-prompt-btn").forEach(o=>{o.addEventListener("click",()=>{const a=document.getElementById(o.dataset.copy);if(!a)return;navigator.clipboard.writeText(a.value);const l=o.textContent;o.textContent="¡Copiado!",setTimeout(()=>{o.textContent=l},1400)})}),document.getElementById("btn-dollhouse").addEventListener("click",()=>Oa("dollhouse")),document.getElementById("btn-overview").addEventListener("click",()=>Oa("overview")),document.getElementById("btn-fullscreen").addEventListener("click",()=>jd());const s=document.getElementById("docs-modal"),e=o=>{s&&s.classList.toggle("hidden",!o)};(t=document.getElementById("btn-docs-modal"))==null||t.addEventListener("click",()=>e(!0)),(n=document.getElementById("btn-docs-close"))==null||n.addEventListener("click",()=>e(!1)),(i=document.getElementById("btn-docs-close-footer"))==null||i.addEventListener("click",()=>e(!1)),s==null||s.addEventListener("click",o=>{o.target===s&&e(!1)}),document.querySelectorAll(".docs-tab-btn").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.tab;document.querySelectorAll(".docs-tab-btn").forEach(l=>{const c=l.dataset.tab===a;l.className=c?"docs-tab-btn px-3 py-1.5 rounded-lg font-medium text-white bg-[#c86446] transition-all shrink-0":"docs-tab-btn px-3 py-1.5 rounded-lg font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all shrink-0"}),document.querySelectorAll(".docs-pane").forEach(l=>{l.classList.toggle("hidden",l.id!==`pane-${a}`)})})}),window.addEventListener("keydown",o=>{if(o.key==="Escape"){if(s&&!s.classList.contains("hidden")){e(!1);return}P.theaterMode&&jd(!1)}}),document.getElementById("btn-guide-916").addEventListener("click",()=>{P.guide916=!P.guide916,document.getElementById("guide-916-overlay").classList.toggle("hidden",!P.guide916),document.getElementById("btn-guide-916").className=P.guide916?"px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-400/40 text-[11px] font-mono transition-colors":"px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 text-[11px] font-mono transition-colors"}),document.getElementById("btn-beauty-pass").addEventListener("click",()=>Fl(!1)),document.getElementById("btn-depth-pass").addEventListener("click",()=>Fl(!0)),document.querySelectorAll(".cam-preset-btn").forEach(o=>{o.addEventListener("click",()=>Oa(o.dataset.cam))}),document.querySelectorAll(".anim-btn").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.anim;Wo(a),Nt==null||Nt.playAnimation(a),oe==null||oe.sendAnimation(a)})}),document.querySelectorAll(".motion-btn").forEach(o=>{o.addEventListener("click",()=>{P.motionEngine=o.dataset.motion,Zh(P.motionEngine);const a=Rn();a&&(a.motionEngine=P.motionEngine,a.motionPrompt=Fo({anim:a.anim,framing:a.framing,motionStrength:a.motionStrength,motionEngine:a.motionEngine,cinemaMoveLabel:a.cinemaMoveLabel}),document.getElementById("shotMotionPrompt").value=a.motionPrompt,Gn(a))})}),document.getElementById("motionSlider").addEventListener("input",o=>{const a=parseFloat(o.target.value);document.getElementById("motionVal").textContent=a.toFixed(1);const l=Rn();l&&(l.motionStrength=a,l.motionPrompt=Fo({anim:l.anim,framing:l.framing,motionStrength:a,motionEngine:l.motionEngine,cinemaMoveLabel:l.cinemaMoveLabel}),document.getElementById("shotMotionPrompt").value=l.motionPrompt,za(l))}),document.getElementById("copyBtn").addEventListener("click",o=>{o.preventDefault(),navigator.clipboard.writeText(document.getElementById("fluxPromptBox").textContent);const a=document.getElementById("copyBtn");a.textContent="¡Copiado!",setTimeout(()=>{a.textContent="Copiar"},1500)}),(r=document.getElementById("btn-share"))==null||r.addEventListener("click",()=>{navigator.clipboard.writeText(window.location.href);const o=document.getElementById("btn-share");o.innerHTML="<span>¡Copiado!</span>",setTimeout(()=>{o.innerHTML="<span>🔗 Compartir</span>"},1800)}),document.getElementById("btn-export-png").addEventListener("click",()=>{if(P.activeEngine==="threejs"){const o=ze.renderVertical916DataURL(1080,1920,P.depthPass),a=P.depthPass?"depth":"beauty";dn(o,`alina_9x16_piso${P.activeFloor}_${P.activeSpot.id}_${a}.png`),st(`✅ <span class="text-emerald-400 font-bold">Frame 1080×1920 (${a}) exportado.</span>`)}else P.depthPass?(oe.requestDepthScreenshot916(),st("📸 Capturando Depth Map 1080×1920 desde Unity 6 URP...")):(oe.requestScreenshot916(),st("📸 Capturando 1080×1920 desde Unity 6 URP..."))}),document.getElementById("btn-export-json").addEventListener("click",()=>{Jn(Ba(),`alina_higgsfield_piso${P.activeFloor}_${P.activeSpot.id}.json`),st('✅ <span class="text-amber-300 font-bold">JSON técnico del Spot descargado.</span>')}),document.getElementById("btn-export-package").addEventListener("click",()=>{const o=`alina_piso${P.activeFloor}_${P.activeSpot.id}`;if(P.activeEngine==="threejs"){const a=ze.renderVertical916DataURL(1080,1920,!1);dn(a,`${o}_beauty_1080x1920.png`),setTimeout(()=>{const l=ze.renderVertical916DataURL(1080,1920,!0);dn(l,`${o}_depth_1080x1920.png`)},220),setTimeout(()=>{Jn(Ba(),`${o}_higgsfield.json`)},440),st('✅ <span class="text-emerald-400 font-bold">Paquete 9:16 exportado (Beauty + Depth + JSON).</span>')}else oe.requestScreenshot916(),setTimeout(()=>oe.requestDepthScreenshot916(),300),setTimeout(()=>Jn(Ba(),`${o}_unity_higgsfield.json`),600),st('✅ <span class="text-emerald-400 font-bold">Paquete Unity 9:16 exportado.</span>')})}async function ay(){const s=performance.now();ty(),oy();const e=document.getElementById("three-canvas-container");Ts=new Sh,Xn=new ax({antialias:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"}),Xn.setPixelRatio(Math.min(window.devicePixelRatio,2)),Xn.setSize(e.clientWidth||960,e.clientHeight||560,!1),Xn.shadowMap.enabled=!0,Xn.shadowMap.type=$d,e.appendChild(Xn.domElement),Pi=new dx(Ts,Xn),Uo=Kx(Ts,Pi),ze=new uv(e,Ts,Xn,Pi),Nt=new Zx(Ts),oe=new fv(document.getElementById("unity-canvas"),o=>{document.getElementById("unity-progress-bar").style.width=`${o}%`,document.getElementById("unity-loading-text").textContent=`Cargando runtime Unity 6 URP... ${o}%`},o=>{o!=null&&(P.unityLoadMs=o),document.getElementById("unity-loading-overlay").classList.add("hidden"),P.unityLoadedFloors.has(P.activeFloor)||Ll({floor:P.activeFloor,percent:0,done:!1}),oe.requestCameraTelemetry(),Ps(),vi()},async o=>{const a=`data:image/png;base64,${o}`,l=P.pendingUnityCapture;if((l==null?void 0:l.mode)==="objectCapture"){P.pendingUnityCapture=null;const c=l.aspect==="1:1"?await ey(a,1080):a;l.resolve(c);return}if((l==null?void 0:l.mode)==="create"){const c=l.withDepth;P.pendingUnityCapture=null,await Ul(a,null),c&&P.selectedShotId&&(P.pendingUnityCapture={mode:"attachDepth",shotId:P.selectedShotId},setTimeout(()=>oe.requestDepthScreenshot916(),180));return}dn(a,`alina_unity_9x16_piso${P.activeFloor}_${P.activeSpot.id}_beauty.png`),st('✅ <span class="text-emerald-400 font-bold">Captura Unity Beauty 1080×1920 PNG descargada.</span>')},o=>{P.unityFps=o,P.activeEngine==="unity"&&Ps()},async o=>{const a=`data:image/png;base64,${o}`,l=P.pendingUnityCapture;if((l==null?void 0:l.mode)==="create"){P.pendingUnityCapture=null,await Ul(a,a);return}if((l==null?void 0:l.mode)==="attachDepth"){P.pendingUnityCapture=null;const c=P.shots.find(d=>d.id===l.shotId);c&&(c.depthImage=a,Cr(c,{onlyFluxIfClean:!0}),Gn(c),In(),st('✅ <span class="text-emerald-400 font-bold">Depth Map Unity 1080×1920 adjuntado.</span>'));return}if((l==null?void 0:l.mode)==="exportDepth"){P.pendingUnityCapture=null;const c=P.shots.find(d=>d.id===l.shotId);c&&(c.depthImage=a,Gn(c),In()),dn(a,`${l.baseName}_depth_1080x1920.png`);return}dn(a,`alina_unity_9x16_piso${P.activeFloor}_${P.activeSpot.id}_depth.png`),st('✅ <span class="text-emerald-400 font-bold">Captura Unity Depth Map 1080×1920 PNG descargada.</span>')}),oe.onFloorLoadProgress=Ll,cn=new Dv({scene:Ts,renderer:Xn,lighting:Pi,camCtrl:ze,alina:Nt,unityBridge:oe,getSpot:o=>o?vr(o):P.activeSpot,prepareSpot:Vd,getBaseMode:()=>P.lightingMode}),ts=Uv(document.getElementById("cinema-panel"),{director:cn,getSpot:vr,getActiveSpot:()=>P.activeSpot,setActiveSpot:Vd,getAnim:()=>P.activeAnim,renderer:Xn,camCtrl:ze,download:{dataUrl:dn,json:Jn},setStatus:st}),Ui=Kv(document.getElementById("col-objects"),{getObjects:()=>P.objects,getActiveFloor:()=>P.activeFloor,getActiveSpot:()=>P.activeSpot,onObjectsChanged:()=>{ks(),P.activeView==="prompts"&&In()},toggle3DViewportInObjects:()=>(P.objects3DVisible=!P.objects3DVisible,document.body.classList.toggle("objects-with-3d",P.objects3DVisible),Zs(),P.objects3DVisible),captureObjectFrom3D:o=>Kh(o),injectObjectIntoPrompts:o=>{const a=Rn();a?(a.objectIds=Array.isArray(a.objectIds)?a.objectIds:[],a.objectIds.includes(o.id)||(a.objectIds.push(o.id),Cr(a,{onlyFluxIfClean:!0}),Gn(a))):P.pendingObjectIdsForNextShot.includes(o.id)||P.pendingObjectIdsForNextShot.push(o.id),Di("prompts"),st(`🏺 <span class="text-emerald-400 font-bold">Objeto ${o.handle} inyectado en Estudio Prompts.</span>`)},downloadDataUrl:dn,downloadJson:Jn,setStatus:st}),Ii=Jv(document.getElementById("cinema-subnav-wrap"),document.getElementById("col-chapters"),document.getElementById("col-bible"),{getChapters:()=>P.chapters,getObjects:()=>P.objects,getShots:()=>P.shots,getActiveFloor:()=>P.activeFloor,getActiveSpot:()=>P.activeSpot,getLightingMode:()=>P.lightingMode,onChaptersChanged:()=>{ks()},onSubTabChanged:o=>{P.cinemaSubView=o,document.body.dataset.cinemaSub=o,Zs()},loadChapterSetIntoStudio:o=>{P.defaultChapterIdForNextShot=o.id,P.pendingObjectIdsForNextShot=Array.isArray(o.linkedObjectIds)?[...o.linkedObjectIds]:[],Oo(o.lightingMode||"night"),ko(o.floor??3);const a=vr(o.spotId);a&&uc(a),o.hook&&(document.getElementById("scriptInput").value=o.hook),Di("prompts"),st(`🎥 <span class="text-emerald-400 font-bold">Set del Capítulo ${o.number} («${o.title}») cargado.</span> Tus próximas capturas se vincularán a este capítulo.`)},downloadJson:Jn,setStatus:st});const[t,n,i]=await Promise.all([Xv(),qv(),jv(vr)]);P.objects=t,P.chapters=n,i.length>0&&(P.shots=i,P.selectedShotId=i[0].id),ks(),Ui.render(),Ii.renderChapters(),In(),ko(2);try{await Nt.load("./models/alina.glb"),Nt.placeAtSpot(P.activeSpot),Wo(P.activeSpot.defaultAnim||"Idle"),P.threeLoadMs=Math.round(performance.now()-s),Ps(),vi()}catch(o){console.error("[AlinaLoader] Error:",o),document.getElementById("viewport-status-hud").textContent=`Error cargando alina.glb: ${o.message}`}function r(){requestAnimationFrame(r);const o=Math.min(Hd.getDelta(),.1),a=Hd.elapsedTime;if(P.activeEngine==="threejs"&&Yh()){Nt.update(o),Pi.update(a);for(const c of Uo.waterMeshes)c.position.y=(c.userData.baseY??(c.userData.baseY=c.position.y))+Math.sin(a*2.2)*.012;cn==null||cn.update(),ze.update(),ze.render(),Ua++;const l=performance.now();l-ka>=750&&(qh=Math.round(Ua*1e3/(l-ka)),Ua=0,ka=l,Ps())}}r()}ay();
