(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vl="174",As={ROTATE:0,DOLLY:1,PAN:2},Ss={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ch=0,$l=1,Ph=2,Td=1,wd=2,ri=3,fi=0,Yt=1,Nn=2,Ai=0,Rs=1,Kl=2,Zl=3,Jl=4,Lh=5,ji=100,Dh=101,Nh=102,Uh=103,Fh=104,Oh=200,Bh=201,kh=202,zh=203,Ma=204,Sa=205,Hh=206,Vh=207,Gh=208,Wh=209,Xh=210,jh=211,qh=212,Yh=213,$h=214,ba=0,Ea=1,Ta=2,Ls=3,wa=4,Aa=5,Ra=6,Ia=7,Ad=0,Kh=1,Zh=2,Ri=0,Jh=1,Qh=2,eu=3,Rd=4,tu=5,nu=6,iu=7,Ql="attached",su="detached",Id=300,Ds=301,Ns=302,dr=303,Ca=304,So=306,An=1e3,Gn=1001,ao=1002,nn=1003,Cd=1004,sr=1005,Ht=1006,Qr=1007,Wn=1008,pi=1009,Pd=1010,Ld=1011,hr=1012,yl=1013,Ki=1014,ln=1015,Xn=1016,Ml=1017,Sl=1018,Us=1020,Dd=35902,Nd=1021,Ud=1022,Tn=1023,Fd=1024,Od=1025,Is=1026,Fs=1027,bl=1028,El=1029,Bd=1030,Tl=1031,wl=1033,eo=33776,to=33777,no=33778,io=33779,Pa=35840,La=35841,Da=35842,Na=35843,Ua=36196,Fa=37492,Oa=37496,Ba=37808,ka=37809,za=37810,Ha=37811,Va=37812,Ga=37813,Wa=37814,Xa=37815,ja=37816,qa=37817,Ya=37818,$a=37819,Ka=37820,Za=37821,so=36492,Ja=36494,Qa=36495,kd=36283,el=36284,tl=36285,nl=36286,zd=2200,Hd=2201,ru=2202,ur=2300,fr=2301,Io=2302,bs=2400,Es=2401,lo=2402,Al=2500,ou=2501,au=0,Vd=1,il=2,lu=3200,cu=3201,Gd=0,du=1,li="",At="srgb",$t="srgb-linear",co="linear",mt="srgb",is=7680,ec=519,hu=512,uu=513,fu=514,Wd=515,pu=516,mu=517,gu=518,_u=519,sl=35044,tc="300 es",di=2e3,ho=2001;class Li{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nc=1234567;const ar=Math.PI/180,Os=180/Math.PI;function On(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xt[s&255]+Xt[s>>8&255]+Xt[s>>16&255]+Xt[s>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]).toLowerCase()}function $e(s,e,t){return Math.max(e,Math.min(t,s))}function Rl(s,e){return(s%e+e)%e}function xu(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function vu(s,e,t){return s!==e?(t-s)/(e-s):0}function lr(s,e,t){return(1-t)*s+t*e}function yu(s,e,t,n){return lr(s,e,1-Math.exp(-t*n))}function Mu(s,e=1){return e-Math.abs(Rl(s,e*2)-e)}function Su(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function bu(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Eu(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Tu(s,e){return s+Math.random()*(e-s)}function wu(s){return s*(.5-Math.random())}function Au(s){s!==void 0&&(nc=s);let e=nc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ru(s){return s*ar}function Iu(s){return s*Os}function Cu(s){return(s&s-1)===0&&s!==0}function Pu(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Lu(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Du(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),d=o((e+n)/2),h=r((e-n)/2),u=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*d,l*h,l*u,a*c);break;case"YZY":s.set(l*u,a*d,l*h,a*c);break;case"ZXZ":s.set(l*h,l*u,a*d,a*c);break;case"XZX":s.set(a*d,l*g,l*p,a*c);break;case"YXY":s.set(l*p,a*d,l*g,a*c);break;case"ZYZ":s.set(l*g,l*p,a*d,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Un(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ft(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const uo={DEG2RAD:ar,RAD2DEG:Os,generateUUID:On,clamp:$e,euclideanModulo:Rl,mapLinear:xu,inverseLerp:vu,lerp:lr,damp:yu,pingpong:Mu,smoothstep:Su,smootherstep:bu,randInt:Eu,randFloat:Tu,randFloatSpread:wu,seededRandom:Au,degToRad:Ru,radToDeg:Iu,isPowerOfTwo:Cu,ceilPowerOfTwo:Pu,floorPowerOfTwo:Lu,setQuaternionFromProperEuler:Du,normalize:ft,denormalize:Un};class Ce{constructor(e=0,t=0){Ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,t,n,i,r,o,a,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=i,d[2]=a,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],h=n[7],u=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],w=i[1],A=i[4],b=i[7],C=i[2],M=i[5],E=i[8];return r[0]=o*_+a*w+l*C,r[3]=o*m+a*A+l*M,r[6]=o*f+a*b+l*E,r[1]=c*_+d*w+h*C,r[4]=c*m+d*A+h*M,r[7]=c*f+d*b+h*E,r[2]=u*_+p*w+g*C,r[5]=u*m+p*A+g*M,r[8]=u*f+p*b+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-n*r*d+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*o-a*c,u=a*l-d*r,p=c*r-o*l,g=t*h+n*u+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-d*n)*_,e[2]=(a*n-i*o)*_,e[3]=u*_,e[4]=(d*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Co.makeScale(e,t)),this}rotate(e){return this.premultiply(Co.makeRotation(-e)),this}translate(e,t){return this.premultiply(Co.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Co=new qe;function Xd(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function pr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Nu(){const s=pr("canvas");return s.style.display="block",s}const ic={};function Wi(s){s in ic||(ic[s]=!0,console.warn(s))}function Uu(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Fu(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ou(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const sc=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rc=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bu(){const s={enabled:!0,workingColorSpace:$t,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===mt&&(i.r=hi(i.r),i.g=hi(i.g),i.b=hi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===mt&&(i.r=Cs(i.r),i.g=Cs(i.g),i.b=Cs(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===li?co:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[$t]:{primaries:e,whitePoint:n,transfer:co,toXYZ:sc,fromXYZ:rc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:At},outputColorSpaceConfig:{drawingBufferColorSpace:At}},[At]:{primaries:e,whitePoint:n,transfer:mt,toXYZ:sc,fromXYZ:rc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:At}}}),s}const nt=Bu();function hi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Cs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ss;class ku{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ss===void 0&&(ss=pr("canvas")),ss.width=e.width,ss.height=e.height;const n=ss.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ss}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=hi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(hi(t[n]/255)*255):t[n]=hi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zu=0;class Il{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=On(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Po(i[o].image)):r.push(Po(i[o]))}else r=Po(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Po(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ku.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hu=0;class Ot extends Li{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,n=Gn,i=Gn,r=Ht,o=Wn,a=Tn,l=pi,c=Ot.DEFAULT_ANISOTROPY,d=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=On(),this.name="",this.source=new Il(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Id)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case An:e.x=e.x-Math.floor(e.x);break;case Gn:e.x=e.x<0?0:1;break;case ao:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case An:e.y=e.y-Math.floor(e.y);break;case Gn:e.y=e.y<0?0:1;break;case ao:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=Id;Ot.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,n=0,i=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],d=l[4],h=l[8],u=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,b=(p+1)/2,C=(f+1)/2,M=(d+u)/4,E=(h+_)/4,T=(g+m)/4;return A>b&&A>C?A<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(A),i=M/n,r=E/n):b>C?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=M/i,r=T/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=E/r,i=T/r),this.set(n,i,r,t),this}let w=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(u-d)*(u-d));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(h-_)/w,this.z=(u-d)/w,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vu extends Li{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ot(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Il(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ii extends Vu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class jd extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=nn,this.minFilter=nn,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Gu extends Ot{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=nn,this.minFilter=nn,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],d=n[i+2],h=n[i+3];const u=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h;return}if(a===1){e[t+0]=u,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==u||c!==p||d!==g){let m=1-a;const f=l*u+c*p+d*g+h*_,w=f>=0?1:-1,A=1-f*f;if(A>Number.EPSILON){const C=Math.sqrt(A),M=Math.atan2(C,f*w);m=Math.sin(m*M)/C,a=Math.sin(a*M)/C}const b=a*w;if(l=l*m+u*b,c=c*m+p*b,d=d*m+g*b,h=h*m+_*b,m===1-a){const C=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=C,c*=C,d*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],d=n[i+3],h=r[o],u=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+d*h+l*p-c*u,e[t+1]=l*g+d*u+c*h-a*p,e[t+2]=c*g+d*p+a*u-l*h,e[t+3]=d*g-a*h-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(i/2),h=a(r/2),u=l(n/2),p=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=u*d*h+c*p*g,this._y=c*p*h-u*d*g,this._z=c*d*g+u*p*h,this._w=c*d*h-u*p*g;break;case"YXZ":this._x=u*d*h+c*p*g,this._y=c*p*h-u*d*g,this._z=c*d*g-u*p*h,this._w=c*d*h+u*p*g;break;case"ZXY":this._x=u*d*h-c*p*g,this._y=c*p*h+u*d*g,this._z=c*d*g+u*p*h,this._w=c*d*h-u*p*g;break;case"ZYX":this._x=u*d*h-c*p*g,this._y=c*p*h+u*d*g,this._z=c*d*g-u*p*h,this._w=c*d*h+u*p*g;break;case"YZX":this._x=u*d*h+c*p*g,this._y=c*p*h+u*d*g,this._z=c*d*g-u*p*h,this._w=c*d*h-u*p*g;break;case"XZY":this._x=u*d*h-c*p*g,this._y=c*p*h-u*d*g,this._z=c*d*g+u*p*h,this._w=c*d*h+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],h=t[10],u=n+a+h;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-c)*p,this._z=(o-i)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(d-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(r-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-i)/p,this._x=(r+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+o*a+i*c-r*l,this._y=i*d+o*l+r*a-n*c,this._z=r*d+o*c+n*l-i*a,this._w=o*d-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),h=Math.sin((1-t)*d)/c,u=Math.sin(t*d)/c;return this._w=o*h+this._w*u,this._x=n*h+this._x*u,this._y=i*h+this._y*u,this._z=r*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(oc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(oc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),d=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*d,this.y=n+l*d+a*c-r*h,this.z=i+l*h+r*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Lo.copy(this).projectOnVector(e),this.sub(Lo)}reflect(e){return this.sub(Lo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lo=new L,oc=new gn;class Bn{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Pn):Pn.fromBufferAttribute(r,o),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),yr.copy(n.boundingBox)),yr.applyMatrix4(e.matrixWorld),this.union(yr)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qs),Mr.subVectors(this.max,qs),rs.subVectors(e.a,qs),os.subVectors(e.b,qs),as.subVectors(e.c,qs),mi.subVectors(os,rs),gi.subVectors(as,os),Fi.subVectors(rs,as);let t=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Fi.z,Fi.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Fi.z,0,-Fi.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Fi.y,Fi.x,0];return!Do(t,rs,os,as,Mr)||(t=[1,0,0,0,1,0,0,0,1],!Do(t,rs,os,as,Mr))?!1:(Sr.crossVectors(mi,gi),t=[Sr.x,Sr.y,Sr.z],Do(t,rs,os,as,Mr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qn=[new L,new L,new L,new L,new L,new L,new L,new L],Pn=new L,yr=new Bn,rs=new L,os=new L,as=new L,mi=new L,gi=new L,Fi=new L,qs=new L,Mr=new L,Sr=new L,Oi=new L;function Do(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Oi.fromArray(s,r);const a=i.x*Math.abs(Oi.x)+i.y*Math.abs(Oi.y)+i.z*Math.abs(Oi.z),l=e.dot(Oi),c=t.dot(Oi),d=n.dot(Oi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const Wu=new Bn,Ys=new L,No=new L;class $n{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Wu.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ys.subVectors(e,this.center);const t=Ys.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ys,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(No.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ys.copy(e.center).add(No)),this.expandByPoint(Ys.copy(e.center).sub(No))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ei=new L,Uo=new L,br=new L,_i=new L,Fo=new L,Er=new L,Oo=new L;class mr{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,t),ei.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Uo.copy(e).add(t).multiplyScalar(.5),br.copy(t).sub(e).normalize(),_i.copy(this.origin).sub(Uo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(br),a=_i.dot(this.direction),l=-_i.dot(br),c=_i.lengthSq(),d=Math.abs(1-o*o);let h,u,p,g;if(d>0)if(h=o*l-a,u=o*a-l,g=r*d,h>=0)if(u>=-g)if(u<=g){const _=1/d;h*=_,u*=_,p=h*(h+o*u+2*a)+u*(o*h+u+2*l)+c}else u=r,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;else u=-r,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;else u<=-g?(h=Math.max(0,-(-o*r+a)),u=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+u*(u+2*l)+c):u<=g?(h=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(h=Math.max(0,-(o*r+a)),u=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+u*(u+2*l)+c);else u=o>0?-r:r,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Uo).addScaledVector(br,u),p}intersectSphere(e,t){ei.subVectors(e.center,this.origin);const n=ei.dot(this.direction),i=ei.dot(ei)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),d>=0?(r=(e.min.y-u.y)*d,o=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,o=(e.min.y-u.y)*d),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(a=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,t,n,i,r){Fo.subVectors(t,e),Er.subVectors(n,e),Oo.crossVectors(Fo,Er);let o=this.direction.dot(Oo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_i.subVectors(this.origin,e);const l=a*this.direction.dot(Er.crossVectors(_i,Er));if(l<0)return null;const c=a*this.direction.dot(Fo.cross(_i));if(c<0||l+c>o)return null;const d=-a*_i.dot(Oo);return d<0?null:this.at(d/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(e,t,n,i,r,o,a,l,c,d,h,u,p,g,_,m){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,d,h,u,p,g,_,m)}set(e,t,n,i,r,o,a,l,c,d,h,u,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=d,f[10]=h,f[14]=u,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ls.setFromMatrixColumn(e,0).length(),r=1/ls.setFromMatrixColumn(e,1).length(),o=1/ls.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),d=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const u=o*d,p=o*h,g=a*d,_=a*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=u-_*c,t[9]=-a*l,t[2]=_-u*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const u=l*d,p=l*h,g=c*d,_=c*h;t[0]=u+_*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*d,t[9]=-a,t[2]=p*a-g,t[6]=_+u*a,t[10]=o*l}else if(e.order==="ZXY"){const u=l*d,p=l*h,g=c*d,_=c*h;t[0]=u-_*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*d,t[9]=_-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const u=o*d,p=o*h,g=a*d,_=a*h;t[0]=l*d,t[4]=g*c-p,t[8]=u*c+_,t[1]=l*h,t[5]=_*c+u,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const u=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*d,t[4]=_-u*h,t[8]=g*h+p,t[1]=h,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=p*h+g,t[10]=u-_*h}else if(e.order==="XZY"){const u=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=u*h+_,t[5]=o*d,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*d,t[10]=_*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xu,e,ju)}lookAt(e,t,n){const i=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),xi.crossVectors(n,un),xi.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),xi.crossVectors(n,un)),xi.normalize(),Tr.crossVectors(un,xi),i[0]=xi.x,i[4]=Tr.x,i[8]=un.x,i[1]=xi.y,i[5]=Tr.y,i[9]=un.y,i[2]=xi.z,i[6]=Tr.z,i[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],h=n[5],u=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],w=n[3],A=n[7],b=n[11],C=n[15],M=i[0],E=i[4],T=i[8],v=i[12],x=i[1],I=i[5],U=i[9],N=i[13],O=i[2],j=i[6],H=i[10],Q=i[14],Y=i[3],le=i[7],he=i[11],Me=i[15];return r[0]=o*M+a*x+l*O+c*Y,r[4]=o*E+a*I+l*j+c*le,r[8]=o*T+a*U+l*H+c*he,r[12]=o*v+a*N+l*Q+c*Me,r[1]=d*M+h*x+u*O+p*Y,r[5]=d*E+h*I+u*j+p*le,r[9]=d*T+h*U+u*H+p*he,r[13]=d*v+h*N+u*Q+p*Me,r[2]=g*M+_*x+m*O+f*Y,r[6]=g*E+_*I+m*j+f*le,r[10]=g*T+_*U+m*H+f*he,r[14]=g*v+_*N+m*Q+f*Me,r[3]=w*M+A*x+b*O+C*Y,r[7]=w*E+A*I+b*j+C*le,r[11]=w*T+A*U+b*H+C*he,r[15]=w*v+A*N+b*Q+C*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],u=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*l*h-i*c*h-r*a*u+n*c*u+i*a*p-n*l*p)+_*(+t*l*p-t*c*u+r*o*u-i*o*p+i*c*d-r*l*d)+m*(+t*c*h-t*a*p-r*o*h+n*o*p+r*a*d-n*c*d)+f*(-i*a*d-t*l*h+t*a*u+i*o*h-n*o*u+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],u=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],w=h*m*c-_*u*c+_*l*p-a*m*p-h*l*f+a*u*f,A=g*u*c-d*m*c-g*l*p+o*m*p+d*l*f-o*u*f,b=d*_*c-g*h*c+g*a*p-o*_*p-d*a*f+o*h*f,C=g*h*l-d*_*l-g*a*u+o*_*u+d*a*m-o*h*m,M=t*w+n*A+i*b+r*C;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=w*E,e[1]=(_*u*r-h*m*r-_*i*p+n*m*p+h*i*f-n*u*f)*E,e[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*f+n*l*f)*E,e[3]=(h*l*r-a*u*r-h*i*c+n*u*c+a*i*p-n*l*p)*E,e[4]=A*E,e[5]=(d*m*r-g*u*r+g*i*p-t*m*p-d*i*f+t*u*f)*E,e[6]=(g*l*r-o*m*r-g*i*c+t*m*c+o*i*f-t*l*f)*E,e[7]=(o*u*r-d*l*r+d*i*c-t*u*c-o*i*p+t*l*p)*E,e[8]=b*E,e[9]=(g*h*r-d*_*r-g*n*p+t*_*p+d*n*f-t*h*f)*E,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*f+t*a*f)*E,e[11]=(d*a*r-o*h*r-d*n*c+t*h*c+o*n*p-t*a*p)*E,e[12]=C*E,e[13]=(d*_*i-g*h*i+g*n*u-t*_*u-d*n*m+t*h*m)*E,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*E,e[15]=(o*h*i-d*a*i+d*n*l-t*h*l-o*n*u+t*a*u)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,d=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,d*a+n,d*l-i*o,0,c*l-i*a,d*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,d=o+o,h=a+a,u=r*c,p=r*d,g=r*h,_=o*d,m=o*h,f=a*h,w=l*c,A=l*d,b=l*h,C=n.x,M=n.y,E=n.z;return i[0]=(1-(_+f))*C,i[1]=(p+b)*C,i[2]=(g-A)*C,i[3]=0,i[4]=(p-b)*M,i[5]=(1-(u+f))*M,i[6]=(m+w)*M,i[7]=0,i[8]=(g+A)*E,i[9]=(m-w)*E,i[10]=(1-(u+_))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=ls.set(i[0],i[1],i[2]).length();const o=ls.set(i[4],i[5],i[6]).length(),a=ls.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Ln.copy(this);const c=1/r,d=1/o,h=1/a;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=d,Ln.elements[5]*=d,Ln.elements[6]*=d,Ln.elements[8]*=h,Ln.elements[9]*=h,Ln.elements[10]*=h,t.setFromRotationMatrix(Ln),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=di){const l=this.elements,c=2*r/(t-e),d=2*r/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i);let p,g;if(a===di)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ho)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=di){const l=this.elements,c=1/(t-e),d=1/(n-i),h=1/(o-r),u=(t+e)*c,p=(n+i)*d;let g,_;if(a===di)g=(o+r)*h,_=-2*h;else if(a===ho)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ls=new L,Ln=new je,Xu=new L(0,0,0),ju=new L(1,1,1),xi=new L,Tr=new L,un=new L,ac=new je,lc=new gn;class Yn{constructor(e=0,t=0,n=0,i=Yn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],d=i[9],h=i[2],u=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ac.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ac,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lc.setFromEuler(this),this.setFromQuaternion(lc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yn.DEFAULT_ORDER="XYZ";class qd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qu=0;const cc=new L,cs=new gn,ti=new je,wr=new L,$s=new L,Yu=new L,$u=new gn,dc=new L(1,0,0),hc=new L(0,1,0),uc=new L(0,0,1),fc={type:"added"},Ku={type:"removed"},ds={type:"childadded",child:null},Bo={type:"childremoved",child:null};class bt extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new L,t=new Yn,n=new gn,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new je},normalMatrix:{value:new qe}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cs.setFromAxisAngle(e,t),this.quaternion.multiply(cs),this}rotateOnWorldAxis(e,t){return cs.setFromAxisAngle(e,t),this.quaternion.premultiply(cs),this}rotateX(e){return this.rotateOnAxis(dc,e)}rotateY(e){return this.rotateOnAxis(hc,e)}rotateZ(e){return this.rotateOnAxis(uc,e)}translateOnAxis(e,t){return cc.copy(e).applyQuaternion(this.quaternion),this.position.add(cc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(dc,e)}translateY(e){return this.translateOnAxis(hc,e)}translateZ(e){return this.translateOnAxis(uc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wr.copy(e):wr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt($s,wr,this.up):ti.lookAt(wr,$s,this.up),this.quaternion.setFromRotationMatrix(ti),i&&(ti.extractRotation(i.matrixWorld),cs.setFromRotationMatrix(ti),this.quaternion.premultiply(cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fc),ds.child=e,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ku),Bo.child=e,this.dispatchEvent(Bo),Bo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fc),ds.child=e,this.dispatchEvent(ds),ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,e,Yu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,$u,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),u=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}bt.DEFAULT_UP=new L(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new L,ni=new L,ko=new L,ii=new L,hs=new L,us=new L,pc=new L,zo=new L,Ho=new L,Vo=new L,Go=new ot,Wo=new ot,Xo=new ot;class Fn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Dn.subVectors(e,t),i.cross(Dn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Dn.subVectors(i,t),ni.subVectors(n,t),ko.subVectors(e,t);const o=Dn.dot(Dn),a=Dn.dot(ni),l=Dn.dot(ko),c=ni.dot(ni),d=ni.dot(ko),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const u=1/h,p=(c*l-a*d)*u,g=(o*d-a*l)*u;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ii.x),l.addScaledVector(o,ii.y),l.addScaledVector(a,ii.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Go.setScalar(0),Wo.setScalar(0),Xo.setScalar(0),Go.fromBufferAttribute(e,t),Wo.fromBufferAttribute(e,n),Xo.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Go,r.x),o.addScaledVector(Wo,r.y),o.addScaledVector(Xo,r.z),o}static isFrontFacing(e,t,n,i){return Dn.subVectors(n,t),ni.subVectors(e,t),Dn.cross(ni).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Dn.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Fn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;hs.subVectors(i,n),us.subVectors(r,n),zo.subVectors(e,n);const l=hs.dot(zo),c=us.dot(zo);if(l<=0&&c<=0)return t.copy(n);Ho.subVectors(e,i);const d=hs.dot(Ho),h=us.dot(Ho);if(d>=0&&h<=d)return t.copy(i);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(n).addScaledVector(hs,o);Vo.subVectors(e,r);const p=hs.dot(Vo),g=us.dot(Vo);if(g>=0&&p<=g)return t.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(us,a);const m=d*g-p*h;if(m<=0&&h-d>=0&&p-g>=0)return pc.subVectors(r,i),a=(h-d)/(h-d+(p-g)),t.copy(i).addScaledVector(pc,a);const f=1/(m+_+u);return o=_*f,a=u*f,t.copy(n).addScaledVector(hs,o).addScaledVector(us,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Yd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},Ar={h:0,s:0,l:0};function jo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class De{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=nt.workingColorSpace){if(e=Rl(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=jo(o,r,e+1/3),this.g=jo(o,r,e),this.b=jo(o,r,e-1/3)}return nt.toWorkingColorSpace(this,i),this}setStyle(e,t=At){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){const n=Yd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hi(e.r),this.g=hi(e.g),this.b=hi(e.b),this}copyLinearToSRGB(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return nt.fromWorkingColorSpace(jt.copy(this),e),Math.round($e(jt.r*255,0,255))*65536+Math.round($e(jt.g*255,0,255))*256+Math.round($e(jt.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(jt.copy(this),t);const n=jt.r,i=jt.g,r=jt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=At){nt.fromWorkingColorSpace(jt.copy(this),e);const t=jt.r,n=jt.g,i=jt.b;return e!==At?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(vi),this.setHSL(vi.h+e,vi.s+t,vi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(vi),e.getHSL(Ar);const n=lr(vi.h,Ar.h,t),i=lr(vi.s,Ar.s,t),r=lr(vi.l,Ar.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new De;De.NAMES=Yd;let Zu=0;class qn extends Li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=On(),this.name="",this.type="Material",this.blending=Rs,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ma,this.blendDst=Sa,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ec,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(n.blending=this.blending),this.side!==fi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ma&&(n.blendSrc=this.blendSrc),this.blendDst!==Sa&&(n.blendDst=this.blendDst),this.blendEquation!==ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ec&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(n.stencilFail=this.stencilFail),this.stencilZFail!==is&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class jn extends qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=Ad,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ci=Ju();function Ju(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,d=0;for(;(c&8388608)===0;)c<<=1,d-=8388608;c&=-8388609,d+=947912704,r[l]=c|d}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function Qu(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=$e(s,-65504,65504),ci.floatView[0]=s;const e=ci.uint32View[0],t=e>>23&511;return ci.baseTable[t]+((e&8388607)>>ci.shiftTable[t])}function ef(s){const e=s>>10;return ci.uint32View[0]=ci.mantissaTable[ci.offsetTable[e]+(s&1023)]+ci.exponentTable[e],ci.floatView[0]}class Rr{static toHalfFloat(e){return Qu(e)}static fromHalfFloat(e){return ef(e)}}const Lt=new L,Ir=new Ce;let tf=0;class sn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=sl,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ir.fromBufferAttribute(this,t),Ir.applyMatrix3(e),this.setXY(t,Ir.x,Ir.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Un(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Un(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Un(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),i=ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),i=ft(i,this.array),r=ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sl&&(e.usage=this.usage),e}}class $d extends sn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Kd extends sn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Rt extends sn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let nf=0;const yn=new je,qo=new bt,fs=new L,fn=new Bn,Ks=new Bn,zt=new L;class cn extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xd(e)?Kd:$d)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,n){return yn.makeTranslation(e,t,n),this.applyMatrix4(yn),this}scale(e,t,n){return yn.makeScale(e,t,n),this.applyMatrix4(yn),this}lookAt(e){return qo.lookAt(e),qo.updateMatrix(),this.applyMatrix4(qo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Rt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $n);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ks.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(fn.min,Ks.min),fn.expandByPoint(zt),zt.addVectors(fn.max,Ks.max),fn.expandByPoint(zt)):(fn.expandByPoint(Ks.min),fn.expandByPoint(Ks.max))}fn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)zt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(zt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)zt.fromBufferAttribute(a,c),l&&(fs.fromBufferAttribute(e,c),zt.add(fs)),i=Math.max(i,n.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let T=0;T<n.count;T++)a[T]=new L,l[T]=new L;const c=new L,d=new L,h=new L,u=new Ce,p=new Ce,g=new Ce,_=new L,m=new L;function f(T,v,x){c.fromBufferAttribute(n,T),d.fromBufferAttribute(n,v),h.fromBufferAttribute(n,x),u.fromBufferAttribute(r,T),p.fromBufferAttribute(r,v),g.fromBufferAttribute(r,x),d.sub(c),h.sub(c),p.sub(u),g.sub(u);const I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(_.copy(d).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(I),m.copy(h).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(I),a[T].add(_),a[v].add(_),a[x].add(_),l[T].add(m),l[v].add(m),l[x].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let T=0,v=w.length;T<v;++T){const x=w[T],I=x.start,U=x.count;for(let N=I,O=I+U;N<O;N+=3)f(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const A=new L,b=new L,C=new L,M=new L;function E(T){C.fromBufferAttribute(i,T),M.copy(C);const v=a[T];A.copy(v),A.sub(C.multiplyScalar(C.dot(v))).normalize(),b.crossVectors(M,v);const I=b.dot(l[T])<0?-1:1;o.setXYZW(T,A.x,A.y,A.z,I)}for(let T=0,v=w.length;T<v;++T){const x=w[T],I=x.start,U=x.count;for(let N=I,O=I+U;N<O;N+=3)E(e.getX(N+0)),E(e.getX(N+1)),E(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new sn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const i=new L,r=new L,o=new L,a=new L,l=new L,c=new L,d=new L,h=new L;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),d.subVectors(o,r),h.subVectors(i,r),d.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(d),l.add(d),c.add(d),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),d.subVectors(o,r),h.subVectors(i,r),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,h=a.normalized,u=new c.constructor(l.length*d);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*d;for(let f=0;f<d;f++)u[g++]=c[p++]}return new sn(u,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let d=0,h=c.length;d<h;d++){const u=c[d],p=e(u,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const p=c[h];d.push(p.toJSON(e.data))}d.length>0&&(i[l]=d,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const d=i[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],h=r[c];for(let u=0,p=h.length;u<p;u++)d.push(h[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mc=new je,Bi=new mr,Cr=new $n,gc=new L,Pr=new L,Lr=new L,Dr=new L,Yo=new L,Nr=new L,_c=new L,Ur=new L;class Oe extends bt{constructor(e=new cn,t=new jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Nr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=a[l],h=r[l];d!==0&&(Yo.fromBufferAttribute(h,e),o?Nr.addScaledVector(Yo,d):Nr.addScaledVector(Yo.sub(t),d))}t.add(Nr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(r),Bi.copy(e.ray).recast(e.near),!(Cr.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(Cr,gc)===null||Bi.origin.distanceToSquared(gc)>(e.far-e.near)**2))&&(mc.copy(r).invert(),Bi.copy(e.ray).applyMatrix4(mc),!(n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Bi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=o[m.materialIndex],w=Math.max(m.start,p.start),A=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let b=w,C=A;b<C;b+=3){const M=a.getX(b),E=a.getX(b+1),T=a.getX(b+2);i=Fr(this,f,e,n,c,d,h,M,E,T),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const w=a.getX(m),A=a.getX(m+1),b=a.getX(m+2);i=Fr(this,o,e,n,c,d,h,w,A,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=o[m.materialIndex],w=Math.max(m.start,p.start),A=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=w,C=A;b<C;b+=3){const M=b,E=b+1,T=b+2;i=Fr(this,f,e,n,c,d,h,M,E,T),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const w=m,A=m+1,b=m+2;i=Fr(this,o,e,n,c,d,h,w,A,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function sf(s,e,t,n,i,r,o,a){let l;if(e.side===Yt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===fi,a),l===null)return null;Ur.copy(a),Ur.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Ur);return c<t.near||c>t.far?null:{distance:c,point:Ur.clone(),object:s}}function Fr(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Pr),s.getVertexPosition(l,Lr),s.getVertexPosition(c,Dr);const d=sf(s,e,t,n,Pr,Lr,Dr,_c);if(d){const h=new L;Fn.getBarycoord(_c,Pr,Lr,Dr,h),i&&(d.uv=Fn.getInterpolatedAttribute(i,a,l,c,h,new Ce)),r&&(d.uv1=Fn.getInterpolatedAttribute(r,a,l,c,h,new Ce)),o&&(d.normal=Fn.getInterpolatedAttribute(o,a,l,c,h,new L),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new L,materialIndex:0};Fn.getNormal(Pr,Lr,Dr,u.normal),d.face=u,d.barycoord=h}return d}class Di extends cn{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],d=[],h=[];let u=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Rt(c,3)),this.setAttribute("normal",new Rt(d,3)),this.setAttribute("uv",new Rt(h,2));function g(_,m,f,w,A,b,C,M,E,T,v){const x=b/E,I=C/T,U=b/2,N=C/2,O=M/2,j=E+1,H=T+1;let Q=0,Y=0;const le=new L;for(let he=0;he<H;he++){const Me=he*I-N;for(let Fe=0;Fe<j;Fe++){const Xe=Fe*x-U;le[_]=Xe*w,le[m]=Me*A,le[f]=O,c.push(le.x,le.y,le.z),le[_]=0,le[m]=0,le[f]=M>0?1:-1,d.push(le.x,le.y,le.z),h.push(Fe/E),h.push(1-he/T),Q+=1}}for(let he=0;he<T;he++)for(let Me=0;Me<E;Me++){const Fe=u+Me+j*he,Xe=u+Me+j*(he+1),K=u+(Me+1)+j*(he+1),oe=u+(Me+1)+j*he;l.push(Fe,Xe,oe),l.push(Xe,K,oe),Y+=6}a.addGroup(p,Y,v),p+=Y,u+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Di(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bs(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Qt(s){const e={};for(let t=0;t<s.length;t++){const n=Bs(s[t]);for(const i in n)e[i]=n[i]}return e}function rf(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Zd(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const Jd={clone:Bs,merge:Qt};var of=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,af=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=of,this.fragmentShader=af,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bs(e.uniforms),this.uniformsGroups=rf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Qd extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=di}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yi=new L,xc=new Ce,vc=new Ce;class qt extends Qd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Os*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ar*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Os*2*Math.atan(Math.tan(ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yi.x,yi.y).multiplyScalar(-e/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yi.x,yi.y).multiplyScalar(-e/yi.z)}getViewSize(e,t){return this.getViewBounds(e,xc,vc),t.subVectors(vc,xc)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ar*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ps=-90,ms=1;class lf extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new qt(ps,ms,e,t);i.layers=this.layers,this.add(i);const r=new qt(ps,ms,e,t);r.layers=this.layers,this.add(r);const o=new qt(ps,ms,e,t);o.layers=this.layers,this.add(o);const a=new qt(ps,ms,e,t);a.layers=this.layers,this.add(a);const l=new qt(ps,ms,e,t);l.layers=this.layers,this.add(l);const c=new qt(ps,ms,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===di)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ho)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(h,u,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class eh extends Ot{constructor(e,t,n,i,r,o,a,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:Ds,super(e,t,n,i,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cf extends Ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new eh(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ht}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Di(5,5,5),r=new kn({name:"CubemapFromEquirect",uniforms:Bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:Ai});r.uniforms.tEquirect.value=t;const o=new Oe(i,r),a=t.minFilter;return t.minFilter===Wn&&(t.minFilter=Ht),new lf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}class Wt extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const df={type:"move"};class $o{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(df)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Wt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class fo{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new De(e),this.density=t}clone(){return new fo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class th extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class hf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=sl,this.updateRanges=[],this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Jt=new L;class Cl{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Un(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),i=ft(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),i=ft(i,this.array),r=ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new sn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Cl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const yc=new L,Mc=new ot,Sc=new ot,uf=new L,bc=new je,Or=new L,Ko=new $n,Ec=new je,Zo=new mr;class ff extends Oe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ql,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Bn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Or),this.boundingBox.expandByPoint(Or)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new $n),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Or),this.boundingSphere.expandByPoint(Or)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ko.copy(this.boundingSphere),Ko.applyMatrix4(i),e.ray.intersectsSphere(Ko)!==!1&&(Ec.copy(i).invert(),Zo.copy(e.ray).applyMatrix4(Ec),!(this.boundingBox!==null&&Zo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Zo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ot,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ql?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===su?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Mc.fromBufferAttribute(i.attributes.skinIndex,e),Sc.fromBufferAttribute(i.attributes.skinWeight,e),yc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Sc.getComponent(r);if(o!==0){const a=Mc.getComponent(r);bc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(uf.copy(yc).applyMatrix4(bc),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class nh extends bt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Pl extends Ot{constructor(e=null,t=1,n=1,i,r,o,a,l,c=nn,d=nn,h,u){super(null,o,a,l,c,d,i,r,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tc=new je,pf=new je;class Ll{constructor(e=[],t=[]){this.uuid=On(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:pf;Tc.multiplyMatrices(a,t[r]),Tc.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ll(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Pl(t,e,e,Tn,ln);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new nh),this.bones.push(o),this.boneInverses.push(new je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class rl extends sn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const gs=new je,wc=new je,Br=[],Ac=new Bn,mf=new je,Zs=new Oe,Js=new $n;class gf extends Oe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new rl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,mf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Bn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gs),Ac.copy(e.boundingBox).applyMatrix4(gs),this.boundingBox.union(Ac)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new $n),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gs),Js.copy(e.boundingSphere).applyMatrix4(gs),this.boundingSphere.union(Js)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Zs.geometry=this.geometry,Zs.material=this.material,Zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Js.copy(this.boundingSphere),Js.applyMatrix4(n),e.ray.intersectsSphere(Js)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,gs),wc.multiplyMatrices(n,gs),Zs.matrixWorld=wc,Zs.raycast(e,Br);for(let o=0,a=Br.length;o<a;o++){const l=Br[o];l.instanceId=r,l.object=this,t.push(l)}Br.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new rl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Pl(new Float32Array(i*this.count),i,this.count,bl,ln));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Jo=new L,_f=new L,xf=new qe;class ai{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Jo.subVectors(n,t).cross(_f.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Jo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||xf.getNormalMatrix(e),i=this.coplanarPoint(Jo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new $n,kr=new L;class Dl{constructor(e=new ai,t=new ai,n=new ai,i=new ai,r=new ai,o=new ai){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=di){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],d=i[5],h=i[6],u=i[7],p=i[8],g=i[9],_=i[10],m=i[11],f=i[12],w=i[13],A=i[14],b=i[15];if(n[0].setComponents(l-r,u-c,m-p,b-f).normalize(),n[1].setComponents(l+r,u+c,m+p,b+f).normalize(),n[2].setComponents(l+o,u+d,m+g,b+w).normalize(),n[3].setComponents(l-o,u-d,m-g,b-w).normalize(),n[4].setComponents(l-a,u-h,m-_,b-A).normalize(),t===di)n[5].setComponents(l+a,u+h,m+_,b+A).normalize();else if(t===ho)n[5].setComponents(a,h,_,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(e){return ki.center.set(0,0,0),ki.radius=.7071067811865476,ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(kr.x=i.normal.x>0?e.max.x:e.min.x,kr.y=i.normal.y>0?e.max.y:e.min.y,kr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(kr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ih extends qn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const po=new L,mo=new L,Rc=new je,Qs=new mr,zr=new $n,Qo=new L,Ic=new L;class Nl extends bt{constructor(e=new cn,t=new ih){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)po.fromBufferAttribute(t,i-1),mo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=po.distanceTo(mo);e.setAttribute("lineDistance",new Rt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere),zr.applyMatrix4(i),zr.radius+=r,e.ray.intersectsSphere(zr)===!1)return;Rc.copy(i).invert(),Qs.copy(e.ray).applyMatrix4(Rc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const f=d.getX(_),w=d.getX(_+1),A=Hr(this,e,Qs,l,f,w,_);A&&t.push(A)}if(this.isLineLoop){const _=d.getX(g-1),m=d.getX(p),f=Hr(this,e,Qs,l,_,m,g-1);f&&t.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const f=Hr(this,e,Qs,l,_,_+1,_);f&&t.push(f)}if(this.isLineLoop){const _=Hr(this,e,Qs,l,g-1,p,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Hr(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(po.fromBufferAttribute(a,i),mo.fromBufferAttribute(a,r),t.distanceSqToSegment(po,mo,Qo,Ic)>n)return;Qo.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Qo);if(!(c<e.near||c>e.far))return{distance:c,point:Ic.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Cc=new L,Pc=new L;class vf extends Nl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Cc.fromBufferAttribute(t,i),Pc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Cc.distanceTo(Pc);e.setAttribute("lineDistance",new Rt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yf extends Nl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class sh extends qn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Lc=new je,ol=new mr,Vr=new $n,Gr=new L;class Mf extends bt{constructor(e=new cn,t=new sh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(i),Vr.radius+=r,e.ray.intersectsSphere(Vr)===!1)return;Lc.copy(i).invert(),ol.copy(e.ray).applyMatrix4(Lc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const u=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=u,_=p;g<_;g++){const m=c.getX(g);Gr.fromBufferAttribute(h,m),Dc(Gr,m,l,i,e,t,this)}}else{const u=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=u,_=p;g<_;g++)Gr.fromBufferAttribute(h,g),Dc(Gr,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Dc(s,e,t,n,i,r,o){const a=ol.distanceSqToPoint(s);if(a<t){const l=new L;ol.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class rh extends Ot{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class oh extends Ot{constructor(e,t,n,i,r,o,a,l,c,d=Is){if(d!==Is&&d!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Is&&(n=Ki),n===void 0&&d===Fs&&(n=Us),super(null,i,r,o,a,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Il(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class bo extends cn{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new L,d=new Ce;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,u=3;h<=t;h++,u+=3){const p=n+h/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(o[u]/e+1)/2,d.y=(o[u+1]/e+1)/2,l.push(d.x,d.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Rt(o,3)),this.setAttribute("normal",new Rt(a,3)),this.setAttribute("uv",new Rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class en extends cn{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const d=[],h=[],u=[],p=[];let g=0;const _=[],m=n/2;let f=0;w(),o===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(d),this.setAttribute("position",new Rt(h,3)),this.setAttribute("normal",new Rt(u,3)),this.setAttribute("uv",new Rt(p,2));function w(){const b=new L,C=new L;let M=0;const E=(t-e)/n;for(let T=0;T<=r;T++){const v=[],x=T/r,I=x*(t-e)+e;for(let U=0;U<=i;U++){const N=U/i,O=N*l+a,j=Math.sin(O),H=Math.cos(O);C.x=I*j,C.y=-x*n+m,C.z=I*H,h.push(C.x,C.y,C.z),b.set(j,E,H).normalize(),u.push(b.x,b.y,b.z),p.push(N,1-x),v.push(g++)}_.push(v)}for(let T=0;T<i;T++)for(let v=0;v<r;v++){const x=_[v][T],I=_[v+1][T],U=_[v+1][T+1],N=_[v][T+1];(e>0||v!==0)&&(d.push(x,I,N),M+=3),(t>0||v!==r-1)&&(d.push(I,U,N),M+=3)}c.addGroup(f,M,0),f+=M}function A(b){const C=g,M=new Ce,E=new L;let T=0;const v=b===!0?e:t,x=b===!0?1:-1;for(let U=1;U<=i;U++)h.push(0,m*x,0),u.push(0,x,0),p.push(.5,.5),g++;const I=g;for(let U=0;U<=i;U++){const O=U/i*l+a,j=Math.cos(O),H=Math.sin(O);E.x=v*H,E.y=m*x,E.z=v*j,h.push(E.x,E.y,E.z),u.push(0,x,0),M.x=j*.5+.5,M.y=H*.5*x+.5,p.push(M.x,M.y),g++}for(let U=0;U<i;U++){const N=C+U,O=I+U;b===!0?d.push(O,O+1,N):d.push(O+1,O,N),T+=3}c.addGroup(f,T,b===!0?1:2),f+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new en(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Zi extends cn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,d=l+1,h=e/a,u=t/l,p=[],g=[],_=[],m=[];for(let f=0;f<d;f++){const w=f*u-o;for(let A=0;A<c;A++){const b=A*h-r;g.push(b,-w,0),_.push(0,0,1),m.push(A/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<a;w++){const A=w+c*f,b=w+c*(f+1),C=w+1+c*(f+1),M=w+1+c*f;p.push(A,b,M),p.push(b,C,M)}this.setIndex(p),this.setAttribute("position",new Rt(g,3)),this.setAttribute("normal",new Rt(_,3)),this.setAttribute("uv",new Rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Yi extends cn{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const d=[],h=new L,u=new L,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const w=[],A=f/n;let b=0;f===0&&o===0?b=.5/t:f===n&&l===Math.PI&&(b=-.5/t);for(let C=0;C<=t;C++){const M=C/t;h.x=-e*Math.cos(i+M*r)*Math.sin(o+A*a),h.y=e*Math.cos(o+A*a),h.z=e*Math.sin(i+M*r)*Math.sin(o+A*a),g.push(h.x,h.y,h.z),u.copy(h).normalize(),_.push(u.x,u.y,u.z),m.push(M+b,1-A),w.push(c++)}d.push(w)}for(let f=0;f<n;f++)for(let w=0;w<t;w++){const A=d[f][w+1],b=d[f][w],C=d[f+1][w],M=d[f+1][w+1];(f!==0||o>0)&&p.push(A,b,M),(f!==n-1||l<Math.PI)&&p.push(b,C,M)}this.setIndex(p),this.setAttribute("position",new Rt(g,3)),this.setAttribute("normal",new Rt(_,3)),this.setAttribute("uv",new Rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class go extends cn{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],d=new L,h=new L,u=new L;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const _=g/i*r,m=p/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(_),h.y=(e+t*Math.cos(m))*Math.sin(_),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),u.subVectors(h,d).normalize(),l.push(u.x,u.y,u.z),c.push(g/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const _=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,f=(i+1)*(p-1)+g,w=(i+1)*p+g;o.push(_,m,w),o.push(m,f,w)}this.setIndex(o),this.setAttribute("position",new Rt(a,3)),this.setAttribute("normal",new Rt(l,3)),this.setAttribute("uv",new Rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new go(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ue extends qn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gd,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tn extends Ue{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Sf extends qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bf extends qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Wr(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Ef(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Tf(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Nc(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function ah(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class gr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class wf extends gr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bs,endingEnd:bs}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Es:r=e,a=2*t-n;break;case lo:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Es:o=e,l=2*n-t;break;case lo:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,f=-u*m+2*u*_-u*g,w=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,A=(-1-p)*m+(1.5+p)*_+.5*g,b=p*m-p*_;for(let C=0;C!==a;++C)r[C]=f*o[d+C]+w*o[c+C]+A*o[l+C]+b*o[h+C];return r}}class lh extends gr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=(n-t)/(i-t),h=1-d;for(let u=0;u!==a;++u)r[u]=o[c+u]*h+o[l+u]*d;return r}}class Af extends gr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Kn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Wr(t,this.TimeBufferType),this.values=Wr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Wr(e.times,Array),values:Wr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Af(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new lh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ur:t=this.InterpolantFactoryMethodDiscrete;break;case fr:t=this.InterpolantFactoryMethodLinear;break;case Io:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ur;case this.InterpolantFactoryMethodLinear:return fr;case this.InterpolantFactoryMethodSmooth:return Io}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Ef(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Io,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],d=e[a+1];if(c!==d&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,u=h-n,p=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[u+g]||_!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,u=o*n;for(let p=0;p!==n;++p)t[u+p]=t[h+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Kn.prototype.TimeBufferType=Float32Array;Kn.prototype.ValueBufferType=Float32Array;Kn.prototype.DefaultInterpolation=fr;class Gs extends Kn{constructor(e,t,n){super(e,t,n)}}Gs.prototype.ValueTypeName="bool";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=ur;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;class ch extends Kn{}ch.prototype.ValueTypeName="color";class ks extends Kn{}ks.prototype.ValueTypeName="number";class Rf extends gr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let d=c+a;c!==d;c+=4)gn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class zs extends Kn{InterpolantFactoryMethodLinear(e){return new Rf(this.times,this.values,this.getValueSize(),e)}}zs.prototype.ValueTypeName="quaternion";zs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ws extends Kn{constructor(e,t,n){super(e,t,n)}}Ws.prototype.ValueTypeName="string";Ws.prototype.ValueBufferType=Array;Ws.prototype.DefaultInterpolation=ur;Ws.prototype.InterpolantFactoryMethodLinear=void 0;Ws.prototype.InterpolantFactoryMethodSmooth=void 0;class Hs extends Kn{}Hs.prototype.ValueTypeName="vector";class al{constructor(e="",t=-1,n=[],i=Al){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=On(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Cf(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Kn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const d=Tf(l);l=Nc(l,1,d),c=Nc(c,1,d),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new ks(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],d=c.name.match(r);if(d&&d.length>1){const h=d[1];let u=i[h];u||(i[h]=u=[]),u.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,u,p,g,_){if(p.length!==0){const m=[],f=[];ah(p,m,f,g),m.length!==0&&_.push(new h(u,m,f))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const u=c[h].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const p={};let g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let _=0;_<u[g].morphTargets.length;_++)p[u[g].morphTargets[_]]=-1;for(const _ in p){const m=[],f=[];for(let w=0;w!==u[g].morphTargets.length;++w){const A=u[g];m.push(A.time),f.push(A.morphTarget===_?1:0)}i.push(new ks(".morphTargetInfluence["+_+"]",m,f))}l=p.length*o}else{const p=".bones["+t[h].name+"]";n(Hs,p+".position",u,"pos",i),n(zs,p+".quaternion",u,"rot",i),n(Hs,p+".scale",u,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function If(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ks;case"vector":case"vector2":case"vector3":case"vector4":return Hs;case"color":return ch;case"quaternion":return zs;case"bool":case"boolean":return Gs;case"string":return Ws}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Cf(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=If(s.type);if(s.times===void 0){const t=[],n=[];ah(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Ti={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Pf{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){a++,r===!1&&i.onStart!==void 0&&i.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,i.onProgress!==void 0&&i.onProgress(d,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){const h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=c.length;h<u;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(d))return g}return null}}}const Lf=new Pf;class Qi{constructor(e){this.manager=e!==void 0?e:Lf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Qi.DEFAULT_MATERIAL_NAME="__DEFAULT";const si={};class Df extends Error{constructor(e,t){super(e),this.response=t}}class Ul extends Qi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ti.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(si[e]!==void 0){si[e].push({onLoad:t,onProgress:n,onError:i});return}si[e]=[],si[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const d=si[e],h=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=u?parseInt(u):0,g=p!==0;let _=0;const m=new ReadableStream({start(f){w();function w(){h.read().then(({done:A,value:b})=>{if(A)f.close();else{_+=b.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let M=0,E=d.length;M<E;M++){const T=d[M];T.onProgress&&T.onProgress(C)}f.enqueue(b),w()}},A=>{f.error(A)})}}});return new Response(m)}else throw new Df(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),u=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(u);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Ti.add(e,c);const d=si[e];delete si[e];for(let h=0,u=d.length;h<u;h++){const p=d[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const d=si[e];if(d===void 0)throw this.manager.itemError(e),c;delete si[e];for(let h=0,u=d.length;h<u;h++){const p=d[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Nf extends Qi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ti.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=pr("img");function l(){d(),Ti.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){d(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Uf extends Qi{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new Pl,a=new Ul(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(d){if(i!==void 0)i(d);else{console.error(d);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Gn,o.wrapT=c.wrapT!==void 0?c.wrapT:Gn,o.magFilter=c.magFilter!==void 0?c.magFilter:Ht,o.minFilter=c.minFilter!==void 0?c.minFilter:Ht,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Wn),c.mipmapCount===1&&(o.minFilter=Ht),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,i),o}}class dh extends Qi{constructor(e){super(e)}load(e,t,n,i){const r=new Ot,o=new Nf(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Eo extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Ff extends Eo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ea=new je,Uc=new L,Fc=new L;class Fl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dl,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Uc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Uc),Fc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fc),t.updateMatrixWorld(),ea.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ea),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ea)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Of extends Fl{constructor(){super(new qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Os*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class hh extends Eo{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Of}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Oc=new je,er=new L,ta=new L;class Bf extends Fl{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ce(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),er.setFromMatrixPosition(e.matrixWorld),n.position.copy(er),ta.copy(n.position),ta.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ta),n.updateMatrixWorld(),i.makeTranslation(-er.x,-er.y,-er.z),Oc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oc)}}class pn extends Eo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Bf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ol extends Qd{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class kf extends Fl{constructor(){super(new Ol(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uh extends Eo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new kf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class cr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class zf extends Qi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ti.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ti.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Ti.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ti.add(e,l),r.manager.itemStart(e)}}class Hf extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class Vf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Bc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Bc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Bc(){return performance.now()}class Gf{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){gn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;gn.multiplyQuaternionsFlat(e,o,e,t,e,n),gn.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const Bl="\\[\\]\\.:\\/",Wf=new RegExp("["+Bl+"]","g"),kl="[^"+Bl+"]",Xf="[^"+Bl.replace("\\.","")+"]",jf=/((?:WC+[\/:])*)/.source.replace("WC",kl),qf=/(WCOD+)?/.source.replace("WCOD",Xf),Yf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kl),$f=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kl),Kf=new RegExp("^"+jf+qf+Yf+$f+"$"),Zf=["material","materials","bones","map"];class Jf{constructor(e,t,n){const i=n||ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ht{constructor(e,t,n){this.path=t,this.parsedPath=n||ht.parseTrackName(t),this.node=ht.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ht.Composite(e,t,n):new ht(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Wf,"")}static parseTrackName(e){const t=Kf.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Zf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=ht.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ht.Composite=Jf;ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray];ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Qf{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,a=new Array(o),l={endingStart:bs,endingEnd:bs};for(let c=0;c!==o;++c){const d=r[c].createInterpolant(null);a[c]=d,d.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Hd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case ou:for(let d=0,h=l.length;d!==h;++d)l[d].evaluate(o),c[d].accumulateAdditive(a);break;case Al:default:for(let d=0,h=l.length;d!==h;++d)l[d].evaluate(o),c[d].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===ru;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===zd){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Es,i.endingEnd=Es):(e?i.endingStart=this.zeroSlopeAtStart?Es:bs:i.endingStart=lo,t?i.endingEnd=this.zeroSlopeAtEnd?Es:bs:i.endingEnd=lo)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}}const ep=new Float32Array(1);class tp extends Li{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let d=c[l];d===void 0&&(d={},c[l]=d);for(let h=0;h!==r;++h){const u=i[h],p=u.name;let g=d[p];if(g!==void 0)++g.referenceCount,o[h]=g;else{if(g=o[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,p));continue}const _=t&&t._propertyBindings[h].binding.parsedPath;g=new Gf(ht.create(n,p,_),u.ValueTypeName,u.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,p),o[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],d=e._byClipCacheIndex;c._byClipCacheIndex=d,l[d]=c,l.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,u=(e._localRoot||this._root).uuid;delete h[u],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new lh(new Float32Array(2),new Float32Array(2),1,ep),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?al.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Al),l!==void 0){const h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const d=new Qf(this,o,t,n);return this._bindAction(d,c),this._addInactiveAction(d,a,r),d}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?al.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const d=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=d,t[d]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class kc{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=$e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos($e(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class np extends Li{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function zc(s,e,t,n){const i=ip(n);switch(t){case Nd:return s*e;case Fd:return s*e;case Od:return s*e*2;case bl:return s*e/i.components*i.byteLength;case El:return s*e/i.components*i.byteLength;case Bd:return s*e*2/i.components*i.byteLength;case Tl:return s*e*2/i.components*i.byteLength;case Ud:return s*e*3/i.components*i.byteLength;case Tn:return s*e*4/i.components*i.byteLength;case wl:return s*e*4/i.components*i.byteLength;case eo:case to:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case no:case io:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case La:case Na:return Math.max(s,16)*Math.max(e,8)/4;case Pa:case Da:return Math.max(s,8)*Math.max(e,8)/2;case Ua:case Fa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Oa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ba:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ka:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case za:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ha:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Va:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ga:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Wa:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Xa:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ja:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case qa:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ya:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case $a:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ka:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Za:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case so:case Ja:case Qa:return Math.ceil(s/4)*Math.ceil(e/4)*16;case kd:case el:return Math.ceil(s/4)*Math.ceil(e/4)*8;case tl:case nl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ip(s){switch(s){case pi:case Pd:return{byteLength:1,components:1};case hr:case Ld:case Xn:return{byteLength:2,components:1};case Ml:case Sl:return{byteLength:2,components:4};case Ki:case yl:case ln:return{byteLength:4,components:1};case Dd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function fh(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function sp(s){const e=new WeakMap;function t(a,l){const c=a.array,d=a.usage,h=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,d),a.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const d=l.array,h=l.updateRanges;if(s.bindBuffer(c,a),h.length===0)s.bufferSubData(c,0,d);else{h.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<h.length;p++){const g=h[u],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,h[u]=_)}h.length=u+1;for(let p=0,g=h.length;p<g;p++){const _=h[p];s.bufferSubData(c,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var rp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,op=`#ifdef USE_ALPHAHASH
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
#endif`,ap=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hp=`#ifdef USE_AOMAP
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
#endif`,up=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fp=`#ifdef USE_BATCHING
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
#endif`,pp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_p=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xp=`#ifdef USE_IRIDESCENCE
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
#endif`,vp=`#ifdef USE_BUMPMAP
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
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Rp=`#define PI 3.141592653589793
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
} // validated`,Ip=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cp=`vec3 transformedNormal = objectNormal;
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
#endif`,Pp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Np=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Up="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Op=`#ifdef USE_ENVMAP
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
#endif`,Bp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kp=`#ifdef USE_ENVMAP
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
#endif`,zp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hp=`#ifdef USE_ENVMAP
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
#endif`,Vp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jp=`#ifdef USE_GRADIENTMAP
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
}`,qp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kp=`uniform bool receiveShadow;
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
#endif`,Zp=`#ifdef USE_ENVMAP
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
#endif`,Jp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nm=`PhysicalMaterial material;
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
#endif`,im=`struct PhysicalMaterial {
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
}`,sm=`
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
#endif`,rm=`#if defined( RE_IndirectDiffuse )
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
#endif`,om=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,am=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,um=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pm=`#if defined( USE_POINTS_UV )
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
#endif`,mm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_m=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ym=`#ifdef USE_MORPHTARGETS
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
#endif`,Mm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Am=`#ifdef USE_NORMALMAP
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
#endif`,Rm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Im=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Nm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Um=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Om=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,km=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gm=`float getShadowMask() {
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
}`,Wm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xm=`#ifdef USE_SKINNING
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
#endif`,jm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qm=`#ifdef USE_SKINNING
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
#endif`,Ym=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$m=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Km=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jm=`#ifdef USE_TRANSMISSION
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
#endif`,Qm=`#ifdef USE_TRANSMISSION
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
#endif`,eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ig=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rg=`uniform sampler2D t2D;
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
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ag=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dg=`#include <common>
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
}`,hg=`#if DEPTH_PACKING == 3200
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
}`,ug=`#define DISTANCE
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
}`,fg=`#define DISTANCE
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
}`,pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gg=`uniform float scale;
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
}`,_g=`uniform vec3 diffuse;
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
}`,xg=`#include <common>
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
}`,vg=`uniform vec3 diffuse;
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
}`,yg=`#define LAMBERT
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
}`,Mg=`#define LAMBERT
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
}`,Sg=`#define MATCAP
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
}`,bg=`#define MATCAP
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
}`,Eg=`#define NORMAL
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
}`,Tg=`#define NORMAL
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
}`,wg=`#define PHONG
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
}`,Ag=`#define PHONG
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
}`,Rg=`#define STANDARD
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
}`,Ig=`#define STANDARD
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
}`,Cg=`#define TOON
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
}`,Pg=`#define TOON
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
}`,Lg=`uniform float size;
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
}`,Dg=`uniform vec3 diffuse;
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
}`,Ng=`#include <common>
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
}`,Ug=`uniform vec3 color;
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
}`,Fg=`uniform float rotation;
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
}`,Og=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:rp,alphahash_pars_fragment:op,alphamap_fragment:ap,alphamap_pars_fragment:lp,alphatest_fragment:cp,alphatest_pars_fragment:dp,aomap_fragment:hp,aomap_pars_fragment:up,batching_pars_vertex:fp,batching_vertex:pp,begin_vertex:mp,beginnormal_vertex:gp,bsdfs:_p,iridescence_fragment:xp,bumpmap_pars_fragment:vp,clipping_planes_fragment:yp,clipping_planes_pars_fragment:Mp,clipping_planes_pars_vertex:Sp,clipping_planes_vertex:bp,color_fragment:Ep,color_pars_fragment:Tp,color_pars_vertex:wp,color_vertex:Ap,common:Rp,cube_uv_reflection_fragment:Ip,defaultnormal_vertex:Cp,displacementmap_pars_vertex:Pp,displacementmap_vertex:Lp,emissivemap_fragment:Dp,emissivemap_pars_fragment:Np,colorspace_fragment:Up,colorspace_pars_fragment:Fp,envmap_fragment:Op,envmap_common_pars_fragment:Bp,envmap_pars_fragment:kp,envmap_pars_vertex:zp,envmap_physical_pars_fragment:Zp,envmap_vertex:Hp,fog_vertex:Vp,fog_pars_vertex:Gp,fog_fragment:Wp,fog_pars_fragment:Xp,gradientmap_pars_fragment:jp,lightmap_pars_fragment:qp,lights_lambert_fragment:Yp,lights_lambert_pars_fragment:$p,lights_pars_begin:Kp,lights_toon_fragment:Jp,lights_toon_pars_fragment:Qp,lights_phong_fragment:em,lights_phong_pars_fragment:tm,lights_physical_fragment:nm,lights_physical_pars_fragment:im,lights_fragment_begin:sm,lights_fragment_maps:rm,lights_fragment_end:om,logdepthbuf_fragment:am,logdepthbuf_pars_fragment:lm,logdepthbuf_pars_vertex:cm,logdepthbuf_vertex:dm,map_fragment:hm,map_pars_fragment:um,map_particle_fragment:fm,map_particle_pars_fragment:pm,metalnessmap_fragment:mm,metalnessmap_pars_fragment:gm,morphinstance_vertex:_m,morphcolor_vertex:xm,morphnormal_vertex:vm,morphtarget_pars_vertex:ym,morphtarget_vertex:Mm,normal_fragment_begin:Sm,normal_fragment_maps:bm,normal_pars_fragment:Em,normal_pars_vertex:Tm,normal_vertex:wm,normalmap_pars_fragment:Am,clearcoat_normal_fragment_begin:Rm,clearcoat_normal_fragment_maps:Im,clearcoat_pars_fragment:Cm,iridescence_pars_fragment:Pm,opaque_fragment:Lm,packing:Dm,premultiplied_alpha_fragment:Nm,project_vertex:Um,dithering_fragment:Fm,dithering_pars_fragment:Om,roughnessmap_fragment:Bm,roughnessmap_pars_fragment:km,shadowmap_pars_fragment:zm,shadowmap_pars_vertex:Hm,shadowmap_vertex:Vm,shadowmask_pars_fragment:Gm,skinbase_vertex:Wm,skinning_pars_vertex:Xm,skinning_vertex:jm,skinnormal_vertex:qm,specularmap_fragment:Ym,specularmap_pars_fragment:$m,tonemapping_fragment:Km,tonemapping_pars_fragment:Zm,transmission_fragment:Jm,transmission_pars_fragment:Qm,uv_pars_fragment:eg,uv_pars_vertex:tg,uv_vertex:ng,worldpos_vertex:ig,background_vert:sg,background_frag:rg,backgroundCube_vert:og,backgroundCube_frag:ag,cube_vert:lg,cube_frag:cg,depth_vert:dg,depth_frag:hg,distanceRGBA_vert:ug,distanceRGBA_frag:fg,equirect_vert:pg,equirect_frag:mg,linedashed_vert:gg,linedashed_frag:_g,meshbasic_vert:xg,meshbasic_frag:vg,meshlambert_vert:yg,meshlambert_frag:Mg,meshmatcap_vert:Sg,meshmatcap_frag:bg,meshnormal_vert:Eg,meshnormal_frag:Tg,meshphong_vert:wg,meshphong_frag:Ag,meshphysical_vert:Rg,meshphysical_frag:Ig,meshtoon_vert:Cg,meshtoon_frag:Pg,points_vert:Lg,points_frag:Dg,shadow_vert:Ng,shadow_frag:Ug,sprite_vert:Fg,sprite_frag:Og},xe={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Vn={basic:{uniforms:Qt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Qt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new De(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Qt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Qt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Qt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new De(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Qt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Qt([xe.points,xe.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Qt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Qt([xe.common,xe.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Qt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Qt([xe.sprite,xe.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Qt([xe.common,xe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Qt([xe.lights,xe.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Vn.physical={uniforms:Qt([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Xr={r:0,b:0,g:0},zi=new Yn,Bg=new je;function kg(s,e,t,n,i,r,o){const a=new De(0);let l=r===!0?0:1,c,d,h=null,u=0,p=null;function g(A){let b=A.isScene===!0?A.background:null;return b&&b.isTexture&&(b=(A.backgroundBlurriness>0?t:e).get(b)),b}function _(A){let b=!1;const C=g(A);C===null?f(a,l):C&&C.isColor&&(f(C,1),b=!0);const M=s.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(A,b){const C=g(b);C&&(C.isCubeTexture||C.mapping===So)?(d===void 0&&(d=new Oe(new Di(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:Bs(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(M,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),zi.copy(b.backgroundRotation),zi.x*=-1,zi.y*=-1,zi.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),d.material.uniforms.envMap.value=C,d.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Bg.makeRotationFromEuler(zi)),d.material.toneMapped=nt.getTransfer(C.colorSpace)!==mt,(h!==C||u!==C.version||p!==s.toneMapping)&&(d.material.needsUpdate=!0,h=C,u=C.version,p=s.toneMapping),d.layers.enableAll(),A.unshift(d,d.geometry,d.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Oe(new Zi(2,2),new kn({name:"BackgroundMaterial",uniforms:Bs(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=nt.getTransfer(C.colorSpace)!==mt,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(h!==C||u!==C.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,h=C,u=C.version,p=s.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function f(A,b){A.getRGB(Xr,Zd(s)),n.buffers.color.setClear(Xr.r,Xr.g,Xr.b,b,o)}function w(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(A,b=1){a.set(A),l=b,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,f(a,l)},render:_,addToRenderList:m,dispose:w}}function zg(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,o=!1;function a(x,I,U,N,O){let j=!1;const H=h(N,U,I);r!==H&&(r=H,c(r.object)),j=p(x,N,U,O),j&&g(x,N,U,O),O!==null&&e.update(O,s.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,b(x,I,U,N),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return s.createVertexArray()}function c(x){return s.bindVertexArray(x)}function d(x){return s.deleteVertexArray(x)}function h(x,I,U){const N=U.wireframe===!0;let O=n[x.id];O===void 0&&(O={},n[x.id]=O);let j=O[I.id];j===void 0&&(j={},O[I.id]=j);let H=j[N];return H===void 0&&(H=u(l()),j[N]=H),H}function u(x){const I=[],U=[],N=[];for(let O=0;O<t;O++)I[O]=0,U[O]=0,N[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:U,attributeDivisors:N,object:x,attributes:{},index:null}}function p(x,I,U,N){const O=r.attributes,j=I.attributes;let H=0;const Q=U.getAttributes();for(const Y in Q)if(Q[Y].location>=0){const he=O[Y];let Me=j[Y];if(Me===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(Me=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(Me=x.instanceColor)),he===void 0||he.attribute!==Me||Me&&he.data!==Me.data)return!0;H++}return r.attributesNum!==H||r.index!==N}function g(x,I,U,N){const O={},j=I.attributes;let H=0;const Q=U.getAttributes();for(const Y in Q)if(Q[Y].location>=0){let he=j[Y];he===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(he=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(he=x.instanceColor));const Me={};Me.attribute=he,he&&he.data&&(Me.data=he.data),O[Y]=Me,H++}r.attributes=O,r.attributesNum=H,r.index=N}function _(){const x=r.newAttributes;for(let I=0,U=x.length;I<U;I++)x[I]=0}function m(x){f(x,0)}function f(x,I){const U=r.newAttributes,N=r.enabledAttributes,O=r.attributeDivisors;U[x]=1,N[x]===0&&(s.enableVertexAttribArray(x),N[x]=1),O[x]!==I&&(s.vertexAttribDivisor(x,I),O[x]=I)}function w(){const x=r.newAttributes,I=r.enabledAttributes;for(let U=0,N=I.length;U<N;U++)I[U]!==x[U]&&(s.disableVertexAttribArray(U),I[U]=0)}function A(x,I,U,N,O,j,H){H===!0?s.vertexAttribIPointer(x,I,U,O,j):s.vertexAttribPointer(x,I,U,N,O,j)}function b(x,I,U,N){_();const O=N.attributes,j=U.getAttributes(),H=I.defaultAttributeValues;for(const Q in j){const Y=j[Q];if(Y.location>=0){let le=O[Q];if(le===void 0&&(Q==="instanceMatrix"&&x.instanceMatrix&&(le=x.instanceMatrix),Q==="instanceColor"&&x.instanceColor&&(le=x.instanceColor)),le!==void 0){const he=le.normalized,Me=le.itemSize,Fe=e.get(le);if(Fe===void 0)continue;const Xe=Fe.buffer,K=Fe.type,oe=Fe.bytesPerElement,Re=K===s.INT||K===s.UNSIGNED_INT||le.gpuType===yl;if(le.isInterleavedBufferAttribute){const pe=le.data,Ne=pe.stride,Ke=le.offset;if(pe.isInstancedInterleavedBuffer){for(let Pe=0;Pe<Y.locationSize;Pe++)f(Y.location+Pe,pe.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Pe=0;Pe<Y.locationSize;Pe++)m(Y.location+Pe);s.bindBuffer(s.ARRAY_BUFFER,Xe);for(let Pe=0;Pe<Y.locationSize;Pe++)A(Y.location+Pe,Me/Y.locationSize,K,he,Ne*oe,(Ke+Me/Y.locationSize*Pe)*oe,Re)}else{if(le.isInstancedBufferAttribute){for(let pe=0;pe<Y.locationSize;pe++)f(Y.location+pe,le.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let pe=0;pe<Y.locationSize;pe++)m(Y.location+pe);s.bindBuffer(s.ARRAY_BUFFER,Xe);for(let pe=0;pe<Y.locationSize;pe++)A(Y.location+pe,Me/Y.locationSize,K,he,Me*oe,Me/Y.locationSize*pe*oe,Re)}}else if(H!==void 0){const he=H[Q];if(he!==void 0)switch(he.length){case 2:s.vertexAttrib2fv(Y.location,he);break;case 3:s.vertexAttrib3fv(Y.location,he);break;case 4:s.vertexAttrib4fv(Y.location,he);break;default:s.vertexAttrib1fv(Y.location,he)}}}}w()}function C(){T();for(const x in n){const I=n[x];for(const U in I){const N=I[U];for(const O in N)d(N[O].object),delete N[O];delete I[U]}delete n[x]}}function M(x){if(n[x.id]===void 0)return;const I=n[x.id];for(const U in I){const N=I[U];for(const O in N)d(N[O].object),delete N[O];delete I[U]}delete n[x.id]}function E(x){for(const I in n){const U=n[I];if(U[x.id]===void 0)continue;const N=U[x.id];for(const O in N)d(N[O].object),delete N[O];delete U[x.id]}}function T(){v(),o=!0,r!==i&&(r=i,c(r.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:T,resetDefaultState:v,dispose:C,releaseStatesOfGeometry:M,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function Hg(s,e,t){let n;function i(c){n=c}function r(c,d){s.drawArrays(n,c,d),t.update(d,n,1)}function o(c,d,h){h!==0&&(s.drawArraysInstanced(n,c,d,h),t.update(d,n,h))}function a(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,h);let p=0;for(let g=0;g<h;g++)p+=d[g];t.update(p,n,1)}function l(c,d,h,u){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],d[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,d,0,u,0,h);let g=0;for(let _=0;_<h;_++)g+=d[_]*u[_];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Vg(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==Tn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const T=E===Xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==pi&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==ln&&!T)}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),A=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,M=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:w,maxVaryings:A,maxFragmentUniforms:b,vertexTextures:C,maxSamples:M}}function Gg(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new ai,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const p=h.length!==0||u||n!==0||i;return i=u,n=h.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,f=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?d(null):c();else{const w=r?0:n,A=w*4;let b=f.clippingState||null;l.value=b,b=d(g,u,A,p);for(let C=0;C!==A;++C)b[C]=t[C];f.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,u,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,w=u.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<f)&&(m=new Float32Array(f));for(let A=0,b=p;A!==_;++A,b+=4)o.copy(h[A]).applyMatrix4(w,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Wg(s){let e=new WeakMap;function t(o,a){return a===dr?o.mapping=Ds:a===Ca&&(o.mapping=Ns),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===dr||a===Ca)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new cf(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Ts=4,Hc=[.125,.215,.35,.446,.526,.582],qi=20,na=new Ol,Vc=new De;let ia=null,sa=0,ra=0,oa=!1;const Xi=(1+Math.sqrt(5))/2,_s=1/Xi,Gc=[new L(-Xi,_s,0),new L(Xi,_s,0),new L(-_s,0,Xi),new L(_s,0,Xi),new L(0,Xi,-_s),new L(0,Xi,_s),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Xg=new L;class _o{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=Xg}=r;ia=this._renderer.getRenderTarget(),sa=this._renderer.getActiveCubeFace(),ra=this._renderer.getActiveMipmapLevel(),oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ia,sa,ra),this._renderer.xr.enabled=oa,e.scissorTest=!1,jr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ds||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ia=this._renderer.getRenderTarget(),sa=this._renderer.getActiveCubeFace(),ra=this._renderer.getActiveMipmapLevel(),oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:Xn,format:Tn,colorSpace:$t,depthBuffer:!1},i=Wc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jg(r)),this._blurMaterial=qg(r,e,t)}return i}_compileMaterial(e){const t=new Oe(this._lodPlanes[0],e);this._renderer.compile(t,na)}_sceneToCubeUV(e,t,n,i,r){const l=new qt(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(Vc),h.toneMapping=Ri,h.autoClear=!1;const g=new jn({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),_=new Oe(new Di,g);let m=!1;const f=e.background;f?f.isColor&&(g.color.copy(f),e.background=null,m=!0):(g.color.copy(Vc),m=!0);for(let w=0;w<6;w++){const A=w%3;A===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[w],r.y,r.z)):A===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[w]));const b=this._cubeSize;jr(i,A*b,w>2?b:0,b,b),h.setRenderTarget(i),m&&h.render(_,l),h.render(e,l)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=p,h.autoClear=u,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ds||e.mapping===Ns;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=jc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xc());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Oe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;jr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,na)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Gc[(i-r-1)%Gc.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new Oe(this._lodPlanes[i],c),u=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*qi-1),_=r/g,m=isFinite(r)?1+Math.floor(d*_):qi;m>qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qi}`);const f=[];let w=0;for(let E=0;E<qi;++E){const T=E/_,v=Math.exp(-T*T/2);f.push(v),E===0?w+=v:E<m&&(w+=2*v)}for(let E=0;E<f.length;E++)f[E]=f[E]/w;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:A}=this;u.dTheta.value=g,u.mipInt.value=A-n;const b=this._sizeLods[i],C=3*b*(i>A-Ts?i-A+Ts:0),M=4*(this._cubeSize-b);jr(t,C,M,3*b,2*b),l.setRenderTarget(t),l.render(h,na)}}function jg(s){const e=[],t=[],n=[];let i=s;const r=s-Ts+1+Hc.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Ts?l=Hc[o-s+Ts-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,g=6,_=3,m=2,f=1,w=new Float32Array(_*g*p),A=new Float32Array(m*g*p),b=new Float32Array(f*g*p);for(let M=0;M<p;M++){const E=M%3*2/3-1,T=M>2?0:-1,v=[E,T,0,E+2/3,T,0,E+2/3,T+1,0,E,T,0,E+2/3,T+1,0,E,T+1,0];w.set(v,_*g*M),A.set(u,m*g*M);const x=[M,M,M,M,M,M];b.set(x,f*g*M)}const C=new cn;C.setAttribute("position",new sn(w,_)),C.setAttribute("uv",new sn(A,m)),C.setAttribute("faceIndex",new sn(b,f)),e.push(C),i>Ts&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Wc(s,e,t){const n=new Ii(s,e,t);return n.texture.mapping=So,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function jr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function qg(s,e,t){const n=new Float32Array(qi),i=new L(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:zl(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Xc(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zl(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function jc(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function zl(){return`

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
	`}function Yg(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===dr||l===Ca,d=l===Ds||l===Ns;if(c||d){let h=e.get(a);const u=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new _o(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||d&&p&&i(p)?(t===null&&(t=new _o(s)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function $g(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Wi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Kg(s,e,t,n){const i={},r=new WeakMap;function o(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete i[u.id];const p=r.get(u);p&&(e.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(h,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,t.memory.geometries++),u}function l(h){const u=h.attributes;for(const p in u)e.update(u[p],s.ARRAY_BUFFER)}function c(h){const u=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const w=p.array;_=p.version;for(let A=0,b=w.length;A<b;A+=3){const C=w[A+0],M=w[A+1],E=w[A+2];u.push(C,M,M,E,E,C)}}else if(g!==void 0){const w=g.array;_=g.version;for(let A=0,b=w.length/3-1;A<b;A+=3){const C=A+0,M=A+1,E=A+2;u.push(C,M,M,E,E,C)}}else return;const m=new(Xd(u)?Kd:$d)(u,1);m.version=_;const f=r.get(h);f&&e.remove(f),r.set(h,m)}function d(h){const u=r.get(h);if(u){const p=h.index;p!==null&&u.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function Zg(s,e,t){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,p){s.drawElements(n,p,r,u*o),t.update(p,n,1)}function c(u,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,u*o,g),t.update(p,n,g))}function d(u,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function h(u,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)c(u[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,u,0,_,0,g);let f=0;for(let w=0;w<g;w++)f+=p[w]*_[w];t.update(f,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function Jg(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Qg(s,e,t){const n=new WeakMap,i=new ot;function r(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0;let u=n.get(a);if(u===void 0||u.count!==h){let x=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var p=x;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let b=0;g===!0&&(b=1),_===!0&&(b=2),m===!0&&(b=3);let C=a.attributes.position.count*b,M=1;C>e.maxTextureSize&&(M=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const E=new Float32Array(C*M*4*h),T=new jd(E,C,M,h);T.type=ln,T.needsUpdate=!0;const v=b*4;for(let I=0;I<h;I++){const U=f[I],N=w[I],O=A[I],j=C*M*4*I;for(let H=0;H<U.count;H++){const Q=H*v;g===!0&&(i.fromBufferAttribute(U,H),E[j+Q+0]=i.x,E[j+Q+1]=i.y,E[j+Q+2]=i.z,E[j+Q+3]=0),_===!0&&(i.fromBufferAttribute(N,H),E[j+Q+4]=i.x,E[j+Q+5]=i.y,E[j+Q+6]=i.z,E[j+Q+7]=0),m===!0&&(i.fromBufferAttribute(O,H),E[j+Q+8]=i.x,E[j+Q+9]=i.y,E[j+Q+10]=i.z,E[j+Q+11]=O.itemSize===4?i.w:1)}}u={count:h,texture:T,size:new Ce(C,M)},n.set(a,u),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function e0(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,d=l.geometry,h=e.get(l,d);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const ph=new Ot,qc=new oh(1,1),mh=new jd,gh=new Gu,_h=new eh,Yc=[],$c=[],Kc=new Float32Array(16),Zc=new Float32Array(9),Jc=new Float32Array(4);function Xs(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Yc[i];if(r===void 0&&(r=new Float32Array(i),Yc[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Bt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function kt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function To(s,e){let t=$c[e];t===void 0&&(t=new Int32Array(e),$c[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function t0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function n0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;s.uniform2fv(this.addr,e),kt(t,e)}}function i0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;s.uniform3fv(this.addr,e),kt(t,e)}}function s0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;s.uniform4fv(this.addr,e),kt(t,e)}}function r0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;Jc.set(n),s.uniformMatrix2fv(this.addr,!1,Jc),kt(t,n)}}function o0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;Zc.set(n),s.uniformMatrix3fv(this.addr,!1,Zc),kt(t,n)}}function a0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;Kc.set(n),s.uniformMatrix4fv(this.addr,!1,Kc),kt(t,n)}}function l0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function c0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;s.uniform2iv(this.addr,e),kt(t,e)}}function d0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;s.uniform3iv(this.addr,e),kt(t,e)}}function h0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;s.uniform4iv(this.addr,e),kt(t,e)}}function u0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function f0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;s.uniform2uiv(this.addr,e),kt(t,e)}}function p0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;s.uniform3uiv(this.addr,e),kt(t,e)}}function m0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;s.uniform4uiv(this.addr,e),kt(t,e)}}function g0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(qc.compareFunction=Wd,r=qc):r=ph,t.setTexture2D(e||r,i)}function _0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||gh,i)}function x0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||_h,i)}function v0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||mh,i)}function y0(s){switch(s){case 5126:return t0;case 35664:return n0;case 35665:return i0;case 35666:return s0;case 35674:return r0;case 35675:return o0;case 35676:return a0;case 5124:case 35670:return l0;case 35667:case 35671:return c0;case 35668:case 35672:return d0;case 35669:case 35673:return h0;case 5125:return u0;case 36294:return f0;case 36295:return p0;case 36296:return m0;case 35678:case 36198:case 36298:case 36306:case 35682:return g0;case 35679:case 36299:case 36307:return _0;case 35680:case 36300:case 36308:case 36293:return x0;case 36289:case 36303:case 36311:case 36292:return v0}}function M0(s,e){s.uniform1fv(this.addr,e)}function S0(s,e){const t=Xs(e,this.size,2);s.uniform2fv(this.addr,t)}function b0(s,e){const t=Xs(e,this.size,3);s.uniform3fv(this.addr,t)}function E0(s,e){const t=Xs(e,this.size,4);s.uniform4fv(this.addr,t)}function T0(s,e){const t=Xs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function w0(s,e){const t=Xs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function A0(s,e){const t=Xs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function R0(s,e){s.uniform1iv(this.addr,e)}function I0(s,e){s.uniform2iv(this.addr,e)}function C0(s,e){s.uniform3iv(this.addr,e)}function P0(s,e){s.uniform4iv(this.addr,e)}function L0(s,e){s.uniform1uiv(this.addr,e)}function D0(s,e){s.uniform2uiv(this.addr,e)}function N0(s,e){s.uniform3uiv(this.addr,e)}function U0(s,e){s.uniform4uiv(this.addr,e)}function F0(s,e,t){const n=this.cache,i=e.length,r=To(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||ph,r[o])}function O0(s,e,t){const n=this.cache,i=e.length,r=To(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||gh,r[o])}function B0(s,e,t){const n=this.cache,i=e.length,r=To(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||_h,r[o])}function k0(s,e,t){const n=this.cache,i=e.length,r=To(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||mh,r[o])}function z0(s){switch(s){case 5126:return M0;case 35664:return S0;case 35665:return b0;case 35666:return E0;case 35674:return T0;case 35675:return w0;case 35676:return A0;case 5124:case 35670:return R0;case 35667:case 35671:return I0;case 35668:case 35672:return C0;case 35669:case 35673:return P0;case 5125:return L0;case 36294:return D0;case 36295:return N0;case 36296:return U0;case 35678:case 36198:case 36298:case 36306:case 35682:return F0;case 35679:case 36299:case 36307:return O0;case 35680:case 36300:case 36308:case 36293:return B0;case 36289:case 36303:case 36311:case 36292:return k0}}class H0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=y0(t.type)}}class V0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=z0(t.type)}}class G0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const aa=/(\w+)(\])?(\[|\.)?/g;function Qc(s,e){s.seq.push(e),s.map[e.id]=e}function W0(s,e,t){const n=s.name,i=n.length;for(aa.lastIndex=0;;){const r=aa.exec(n),o=aa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Qc(t,c===void 0?new H0(a,s,e):new V0(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new G0(a),Qc(t,h)),t=h}}}class ro{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);W0(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function ed(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const X0=37297;let j0=0;function q0(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const td=new qe;function Y0(s){nt._getMatrix(td,nt.workingColorSpace,s);const e=`mat3( ${td.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(s)){case co:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function nd(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+q0(s.getShaderSource(e),o)}else return i}function $0(s,e){const t=Y0(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function K0(s,e){let t;switch(e){case Jh:t="Linear";break;case Qh:t="Reinhard";break;case eu:t="Cineon";break;case Rd:t="ACESFilmic";break;case nu:t="AgX";break;case iu:t="Neutral";break;case tu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const qr=new L;function Z0(){nt.getLuminanceCoefficients(qr);const s=qr.x.toFixed(4),e=qr.y.toFixed(4),t=qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function J0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rr).join(`
`)}function Q0(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function e_(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function rr(s){return s!==""}function id(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sd(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const t_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ll(s){return s.replace(t_,i_)}const n_=new Map;function i_(s,e){let t=Ye[e];if(t===void 0){const n=n_.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ll(t)}const s_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rd(s){return s.replace(s_,r_)}function r_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function od(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function o_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Td?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===wd?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ri&&(e="SHADOWMAP_TYPE_VSM"),e}function a_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ds:case Ns:e="ENVMAP_TYPE_CUBE";break;case So:e="ENVMAP_TYPE_CUBE_UV";break}return e}function l_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ns:e="ENVMAP_MODE_REFRACTION";break}return e}function c_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ad:e="ENVMAP_BLENDING_MULTIPLY";break;case Kh:e="ENVMAP_BLENDING_MIX";break;case Zh:e="ENVMAP_BLENDING_ADD";break}return e}function d_(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function h_(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=o_(t),c=a_(t),d=l_(t),h=c_(t),u=d_(t),p=J0(t),g=Q0(r),_=i.createProgram();let m,f,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(rr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(rr).join(`
`),f.length>0&&(f+=`
`)):(m=[od(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rr).join(`
`),f=[od(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Ri?K0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,$0("linearToOutputTexel",t.outputColorSpace),Z0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rr).join(`
`)),o=ll(o),o=id(o,t),o=sd(o,t),a=ll(a),a=id(a,t),a=sd(a,t),o=rd(o),a=rd(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===tc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const A=w+m+o,b=w+f+a,C=ed(i,i.VERTEX_SHADER,A),M=ed(i,i.FRAGMENT_SHADER,b);i.attachShader(_,C),i.attachShader(_,M),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(I){if(s.debug.checkShaderErrors){const U=i.getProgramInfoLog(_).trim(),N=i.getShaderInfoLog(C).trim(),O=i.getShaderInfoLog(M).trim();let j=!0,H=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,C,M);else{const Q=nd(i,C,"vertex"),Y=nd(i,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+U+`
`+Q+`
`+Y)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(N===""||O==="")&&(H=!1);H&&(I.diagnostics={runnable:j,programLog:U,vertexShader:{log:N,prefix:m},fragmentShader:{log:O,prefix:f}})}i.deleteShader(C),i.deleteShader(M),T=new ro(i,_),v=e_(i,_)}let T;this.getUniforms=function(){return T===void 0&&E(this),T};let v;this.getAttributes=function(){return v===void 0&&E(this),v};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(_,X0)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=j0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=M,this}let u_=0;class f_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new p_(e),t.set(e,n)),n}}class p_{constructor(e){this.id=u_++,this.code=e,this.usedTimes=0}}function m_(s,e,t,n,i,r,o){const a=new qd,l=new f_,c=new Set,d=[],h=i.logarithmicDepthBuffer,u=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,x,I,U,N){const O=U.fog,j=N.geometry,H=v.isMeshStandardMaterial?U.environment:null,Q=(v.isMeshStandardMaterial?t:e).get(v.envMap||H),Y=Q&&Q.mapping===So?Q.image.height:null,le=g[v.type];v.precision!==null&&(p=i.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const he=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Me=he!==void 0?he.length:0;let Fe=0;j.morphAttributes.position!==void 0&&(Fe=1),j.morphAttributes.normal!==void 0&&(Fe=2),j.morphAttributes.color!==void 0&&(Fe=3);let Xe,K,oe,Re;if(le){const Ie=Vn[le];Xe=Ie.vertexShader,K=Ie.fragmentShader}else Xe=v.vertexShader,K=v.fragmentShader,l.update(v),oe=l.getVertexShaderID(v),Re=l.getFragmentShaderID(v);const pe=s.getRenderTarget(),Ne=s.state.buffers.depth.getReversed(),Ke=N.isInstancedMesh===!0,Pe=N.isBatchedMesh===!0,vt=!!v.map,ut=!!v.matcap,Ve=!!Q,P=!!v.aoMap,Et=!!v.lightMap,B=!!v.bumpMap,re=!!v.normalMap,we=!!v.displacementMap,at=!!v.emissiveMap,Z=!!v.metalnessMap,R=!!v.roughnessMap,y=v.anisotropy>0,W=v.clearcoat>0,G=v.dispersion>0,ie=v.iridescence>0,J=v.sheen>0,Le=v.transmission>0,ve=y&&!!v.anisotropyMap,me=W&&!!v.clearcoatMap,Ze=W&&!!v.clearcoatNormalMap,ae=W&&!!v.clearcoatRoughnessMap,Ee=ie&&!!v.iridescenceMap,de=ie&&!!v.iridescenceThicknessMap,He=J&&!!v.sheenColorMap,Te=J&&!!v.sheenRoughnessMap,Je=!!v.specularMap,ne=!!v.specularColorMap,ct=!!v.specularIntensityMap,D=Le&&!!v.transmissionMap,ge=Le&&!!v.thicknessMap,$=!!v.gradientMap,te=!!v.alphaMap,ye=v.alphaTest>0,_e=!!v.alphaHash,We=!!v.extensions;let _t=Ri;v.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(_t=s.toneMapping);const It={shaderID:le,shaderType:v.type,shaderName:v.name,vertexShader:Xe,fragmentShader:K,defines:v.defines,customVertexShaderID:oe,customFragmentShaderID:Re,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:Pe,batchingColor:Pe&&N._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&N.instanceColor!==null,instancingMorph:Ke&&N.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:pe===null?s.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:$t,alphaToCoverage:!!v.alphaToCoverage,map:vt,matcap:ut,envMap:Ve,envMapMode:Ve&&Q.mapping,envMapCubeUVHeight:Y,aoMap:P,lightMap:Et,bumpMap:B,normalMap:re,displacementMap:u&&we,emissiveMap:at,normalMapObjectSpace:re&&v.normalMapType===du,normalMapTangentSpace:re&&v.normalMapType===Gd,metalnessMap:Z,roughnessMap:R,anisotropy:y,anisotropyMap:ve,clearcoat:W,clearcoatMap:me,clearcoatNormalMap:Ze,clearcoatRoughnessMap:ae,dispersion:G,iridescence:ie,iridescenceMap:Ee,iridescenceThicknessMap:de,sheen:J,sheenColorMap:He,sheenRoughnessMap:Te,specularMap:Je,specularColorMap:ne,specularIntensityMap:ct,transmission:Le,transmissionMap:D,thicknessMap:ge,gradientMap:$,opaque:v.transparent===!1&&v.blending===Rs&&v.alphaToCoverage===!1,alphaMap:te,alphaTest:ye,alphaHash:_e,combine:v.combine,mapUv:vt&&_(v.map.channel),aoMapUv:P&&_(v.aoMap.channel),lightMapUv:Et&&_(v.lightMap.channel),bumpMapUv:B&&_(v.bumpMap.channel),normalMapUv:re&&_(v.normalMap.channel),displacementMapUv:we&&_(v.displacementMap.channel),emissiveMapUv:at&&_(v.emissiveMap.channel),metalnessMapUv:Z&&_(v.metalnessMap.channel),roughnessMapUv:R&&_(v.roughnessMap.channel),anisotropyMapUv:ve&&_(v.anisotropyMap.channel),clearcoatMapUv:me&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:Ze&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:de&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:He&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Te&&_(v.sheenRoughnessMap.channel),specularMapUv:Je&&_(v.specularMap.channel),specularColorMapUv:ne&&_(v.specularColorMap.channel),specularIntensityMapUv:ct&&_(v.specularIntensityMap.channel),transmissionMapUv:D&&_(v.transmissionMap.channel),thicknessMapUv:ge&&_(v.thicknessMap.channel),alphaMapUv:te&&_(v.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(re||y),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!j.attributes.uv&&(vt||te),fog:!!O,useFog:v.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ne,skinning:N.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Fe,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:_t,decodeVideoTexture:vt&&v.map.isVideoTexture===!0&&nt.getTransfer(v.map.colorSpace)===mt,decodeVideoTextureEmissive:at&&v.emissiveMap.isVideoTexture===!0&&nt.getTransfer(v.emissiveMap.colorSpace)===mt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Nn,flipSided:v.side===Yt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:We&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&v.extensions.multiDraw===!0||Pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return It.vertexUv1s=c.has(1),It.vertexUv2s=c.has(2),It.vertexUv3s=c.has(3),c.clear(),It}function f(v){const x=[];if(v.shaderID?x.push(v.shaderID):(x.push(v.customVertexShaderID),x.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)x.push(I),x.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(w(x,v),A(x,v),x.push(s.outputColorSpace)),x.push(v.customProgramCacheKey),x.join()}function w(v,x){v.push(x.precision),v.push(x.outputColorSpace),v.push(x.envMapMode),v.push(x.envMapCubeUVHeight),v.push(x.mapUv),v.push(x.alphaMapUv),v.push(x.lightMapUv),v.push(x.aoMapUv),v.push(x.bumpMapUv),v.push(x.normalMapUv),v.push(x.displacementMapUv),v.push(x.emissiveMapUv),v.push(x.metalnessMapUv),v.push(x.roughnessMapUv),v.push(x.anisotropyMapUv),v.push(x.clearcoatMapUv),v.push(x.clearcoatNormalMapUv),v.push(x.clearcoatRoughnessMapUv),v.push(x.iridescenceMapUv),v.push(x.iridescenceThicknessMapUv),v.push(x.sheenColorMapUv),v.push(x.sheenRoughnessMapUv),v.push(x.specularMapUv),v.push(x.specularColorMapUv),v.push(x.specularIntensityMapUv),v.push(x.transmissionMapUv),v.push(x.thicknessMapUv),v.push(x.combine),v.push(x.fogExp2),v.push(x.sizeAttenuation),v.push(x.morphTargetsCount),v.push(x.morphAttributeCount),v.push(x.numDirLights),v.push(x.numPointLights),v.push(x.numSpotLights),v.push(x.numSpotLightMaps),v.push(x.numHemiLights),v.push(x.numRectAreaLights),v.push(x.numDirLightShadows),v.push(x.numPointLightShadows),v.push(x.numSpotLightShadows),v.push(x.numSpotLightShadowsWithMaps),v.push(x.numLightProbes),v.push(x.shadowMapType),v.push(x.toneMapping),v.push(x.numClippingPlanes),v.push(x.numClipIntersection),v.push(x.depthPacking)}function A(v,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),v.push(a.mask)}function b(v){const x=g[v.type];let I;if(x){const U=Vn[x];I=Jd.clone(U.uniforms)}else I=v.uniforms;return I}function C(v,x){let I;for(let U=0,N=d.length;U<N;U++){const O=d[U];if(O.cacheKey===x){I=O,++I.usedTimes;break}}return I===void 0&&(I=new h_(s,x,v,r),d.push(I)),I}function M(v){if(--v.usedTimes===0){const x=d.indexOf(v);d[x]=d[d.length-1],d.pop(),v.destroy()}}function E(v){l.remove(v)}function T(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:b,acquireProgram:C,releaseProgram:M,releaseShaderCache:E,programs:d,dispose:T}}function g_(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function __(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function ad(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ld(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,u,p,g,_,m){let f=s[e];return f===void 0?(f={id:h.id,object:h,geometry:u,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},s[e]=f):(f.id=h.id,f.object=h,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=_,f.group=m),e++,f}function a(h,u,p,g,_,m){const f=o(h,u,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function l(h,u,p,g,_,m){const f=o(h,u,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function c(h,u){t.length>1&&t.sort(h||__),n.length>1&&n.sort(u||ad),i.length>1&&i.sort(u||ad)}function d(){for(let h=e,u=s.length;h<u;h++){const p=s[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:d,sort:c}}function x_(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new ld,s.set(n,[o])):i>=r.length?(o=new ld,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function v_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new De};break;case"SpotLight":t={position:new L,direction:new L,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function y_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let M_=0;function S_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function b_(s){const e=new v_,t=y_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const i=new L,r=new je,o=new je;function a(c){let d=0,h=0,u=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,w=0,A=0,b=0,C=0,M=0,E=0;c.sort(S_);for(let v=0,x=c.length;v<x;v++){const I=c[v],U=I.color,N=I.intensity,O=I.distance,j=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=U.r*N,h+=U.g*N,u+=U.b*N;else if(I.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(I.sh.coefficients[H],N);E++}else if(I.isDirectionalLight){const H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Q=I.shadow,Y=t.get(I);Y.shadowIntensity=Q.intensity,Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,n.directionalShadow[p]=Y,n.directionalShadowMap[p]=j,n.directionalShadowMatrix[p]=I.shadow.matrix,w++}n.directional[p]=H,p++}else if(I.isSpotLight){const H=e.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(U).multiplyScalar(N),H.distance=O,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,n.spot[_]=H;const Q=I.shadow;if(I.map&&(n.spotLightMap[C]=I.map,C++,Q.updateMatrices(I),I.castShadow&&M++),n.spotLightMatrix[_]=Q.matrix,I.castShadow){const Y=t.get(I);Y.shadowIntensity=Q.intensity,Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,n.spotShadow[_]=Y,n.spotShadowMap[_]=j,b++}_++}else if(I.isRectAreaLight){const H=e.get(I);H.color.copy(U).multiplyScalar(N),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=H,m++}else if(I.isPointLight){const H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){const Q=I.shadow,Y=t.get(I);Y.shadowIntensity=Q.intensity,Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,Y.shadowCameraNear=Q.camera.near,Y.shadowCameraFar=Q.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=I.shadow.matrix,A++}n.point[g]=H,g++}else if(I.isHemisphereLight){const H=e.get(I);H.skyColor.copy(I.color).multiplyScalar(N),H.groundColor.copy(I.groundColor).multiplyScalar(N),n.hemi[f]=H,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=u;const T=n.hash;(T.directionalLength!==p||T.pointLength!==g||T.spotLength!==_||T.rectAreaLength!==m||T.hemiLength!==f||T.numDirectionalShadows!==w||T.numPointShadows!==A||T.numSpotShadows!==b||T.numSpotMaps!==C||T.numLightProbes!==E)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=b+C-M,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=E,T.directionalLength=p,T.pointLength=g,T.spotLength=_,T.rectAreaLength=m,T.hemiLength=f,T.numDirectionalShadows=w,T.numPointShadows=A,T.numSpotShadows=b,T.numSpotMaps=C,T.numLightProbes=E,n.version=M_++)}function l(c,d){let h=0,u=0,p=0,g=0,_=0;const m=d.matrixWorldInverse;for(let f=0,w=c.length;f<w;f++){const A=c[f];if(A.isDirectionalLight){const b=n.directional[h];b.direction.setFromMatrixPosition(A.matrixWorld),i.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),h++}else if(A.isSpotLight){const b=n.spot[p];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(A.matrixWorld),i.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),p++}else if(A.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(A.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(A.width*.5,0,0),b.halfHeight.set(0,A.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(A.isPointLight){const b=n.point[u];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(m),u++}else if(A.isHemisphereLight){const b=n.hemi[_];b.direction.setFromMatrixPosition(A.matrixWorld),b.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function cd(s){const e=new b_(s),t=[],n=[];function i(d){c.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function o(d){n.push(d)}function a(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function E_(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new cd(s),e.set(i,[a])):r>=o.length?(a=new cd(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const T_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w_=`uniform sampler2D shadow_pass;
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
}`;function A_(s,e,t){let n=new Dl;const i=new Ce,r=new Ce,o=new ot,a=new Sf({depthPacking:cu}),l=new bf,c={},d=t.maxTextureSize,h={[fi]:Yt,[Yt]:fi,[Nn]:Nn},u=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:T_,fragmentShader:w_}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new cn;g.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Oe(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Td;let f=this.type;this.render=function(M,E,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const v=s.getRenderTarget(),x=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),U=s.state;U.setBlending(Ai),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const N=f!==ri&&this.type===ri,O=f===ri&&this.type!==ri;for(let j=0,H=M.length;j<H;j++){const Q=M[j],Y=Q.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const le=Y.getFrameExtents();if(i.multiply(le),r.copy(Y.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(r.x=Math.floor(d/le.x),i.x=r.x*le.x,Y.mapSize.x=r.x),i.y>d&&(r.y=Math.floor(d/le.y),i.y=r.y*le.y,Y.mapSize.y=r.y)),Y.map===null||N===!0||O===!0){const Me=this.type!==ri?{minFilter:nn,magFilter:nn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Ii(i.x,i.y,Me),Y.map.texture.name=Q.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const he=Y.getViewportCount();for(let Me=0;Me<he;Me++){const Fe=Y.getViewport(Me);o.set(r.x*Fe.x,r.y*Fe.y,r.x*Fe.z,r.y*Fe.w),U.viewport(o),Y.updateMatrices(Q,Me),n=Y.getFrustum(),b(E,T,Y.camera,Q,this.type)}Y.isPointLightShadow!==!0&&this.type===ri&&w(Y,T),Y.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(v,x,I)};function w(M,E){const T=e.update(_);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Ii(i.x,i.y)),u.uniforms.shadow_pass.value=M.map.texture,u.uniforms.resolution.value=M.mapSize,u.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(E,null,T,u,_,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(E,null,T,p,_,null)}function A(M,E,T,v){let x=null;const I=T.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(I!==void 0)x=I;else if(x=T.isPointLight===!0?l:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const U=x.uuid,N=E.uuid;let O=c[U];O===void 0&&(O={},c[U]=O);let j=O[N];j===void 0&&(j=x.clone(),O[N]=j,E.addEventListener("dispose",C)),x=j}if(x.visible=E.visible,x.wireframe=E.wireframe,v===ri?x.side=E.shadowSide!==null?E.shadowSide:E.side:x.side=E.shadowSide!==null?E.shadowSide:h[E.side],x.alphaMap=E.alphaMap,x.alphaTest=E.alphaTest,x.map=E.map,x.clipShadows=E.clipShadows,x.clippingPlanes=E.clippingPlanes,x.clipIntersection=E.clipIntersection,x.displacementMap=E.displacementMap,x.displacementScale=E.displacementScale,x.displacementBias=E.displacementBias,x.wireframeLinewidth=E.wireframeLinewidth,x.linewidth=E.linewidth,T.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const U=s.properties.get(x);U.light=T}return x}function b(M,E,T,v,x){if(M.visible===!1)return;if(M.layers.test(E.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&x===ri)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,M.matrixWorld);const N=e.update(M),O=M.material;if(Array.isArray(O)){const j=N.groups;for(let H=0,Q=j.length;H<Q;H++){const Y=j[H],le=O[Y.materialIndex];if(le&&le.visible){const he=A(M,le,v,x);M.onBeforeShadow(s,M,E,T,N,he,Y),s.renderBufferDirect(T,null,N,he,M,Y),M.onAfterShadow(s,M,E,T,N,he,Y)}}}else if(O.visible){const j=A(M,O,v,x);M.onBeforeShadow(s,M,E,T,N,j,null),s.renderBufferDirect(T,null,N,j,M,null),M.onAfterShadow(s,M,E,T,N,j,null)}}const U=M.children;for(let N=0,O=U.length;N<O;N++)b(U[N],E,T,v,x)}function C(M){M.target.removeEventListener("dispose",C);for(const T in c){const v=c[T],x=M.target.uuid;x in v&&(v[x].dispose(),delete v[x])}}}const R_={[ba]:Ea,[Ta]:Ra,[wa]:Ia,[Ls]:Aa,[Ea]:ba,[Ra]:Ta,[Ia]:wa,[Aa]:Ls};function I_(s,e){function t(){let D=!1;const ge=new ot;let $=null;const te=new ot(0,0,0,0);return{setMask:function(ye){$!==ye&&!D&&(s.colorMask(ye,ye,ye,ye),$=ye)},setLocked:function(ye){D=ye},setClear:function(ye,_e,We,_t,It){It===!0&&(ye*=_t,_e*=_t,We*=_t),ge.set(ye,_e,We,_t),te.equals(ge)===!1&&(s.clearColor(ye,_e,We,_t),te.copy(ge))},reset:function(){D=!1,$=null,te.set(-1,0,0,0)}}}function n(){let D=!1,ge=!1,$=null,te=null,ye=null;return{setReversed:function(_e){if(ge!==_e){const We=e.get("EXT_clip_control");ge?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT);const _t=ye;ye=null,this.setClear(_t)}ge=_e},getReversed:function(){return ge},setTest:function(_e){_e?pe(s.DEPTH_TEST):Ne(s.DEPTH_TEST)},setMask:function(_e){$!==_e&&!D&&(s.depthMask(_e),$=_e)},setFunc:function(_e){if(ge&&(_e=R_[_e]),te!==_e){switch(_e){case ba:s.depthFunc(s.NEVER);break;case Ea:s.depthFunc(s.ALWAYS);break;case Ta:s.depthFunc(s.LESS);break;case Ls:s.depthFunc(s.LEQUAL);break;case wa:s.depthFunc(s.EQUAL);break;case Aa:s.depthFunc(s.GEQUAL);break;case Ra:s.depthFunc(s.GREATER);break;case Ia:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}te=_e}},setLocked:function(_e){D=_e},setClear:function(_e){ye!==_e&&(ge&&(_e=1-_e),s.clearDepth(_e),ye=_e)},reset:function(){D=!1,$=null,te=null,ye=null,ge=!1}}}function i(){let D=!1,ge=null,$=null,te=null,ye=null,_e=null,We=null,_t=null,It=null;return{setTest:function(Ie){D||(Ie?pe(s.STENCIL_TEST):Ne(s.STENCIL_TEST))},setMask:function(Ie){ge!==Ie&&!D&&(s.stencilMask(Ie),ge=Ie)},setFunc:function(Ie,Kt,dn){($!==Ie||te!==Kt||ye!==dn)&&(s.stencilFunc(Ie,Kt,dn),$=Ie,te=Kt,ye=dn)},setOp:function(Ie,Kt,dn){(_e!==Ie||We!==Kt||_t!==dn)&&(s.stencilOp(Ie,Kt,dn),_e=Ie,We=Kt,_t=dn)},setLocked:function(Ie){D=Ie},setClear:function(Ie){It!==Ie&&(s.clearStencil(Ie),It=Ie)},reset:function(){D=!1,ge=null,$=null,te=null,ye=null,_e=null,We=null,_t=null,It=null}}}const r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let d={},h={},u=new WeakMap,p=[],g=null,_=!1,m=null,f=null,w=null,A=null,b=null,C=null,M=null,E=new De(0,0,0),T=0,v=!1,x=null,I=null,U=null,N=null,O=null;const j=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Q=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(Y)[1]),H=Q>=1):Y.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),H=Q>=2);let le=null,he={};const Me=s.getParameter(s.SCISSOR_BOX),Fe=s.getParameter(s.VIEWPORT),Xe=new ot().fromArray(Me),K=new ot().fromArray(Fe);function oe(D,ge,$,te){const ye=new Uint8Array(4),_e=s.createTexture();s.bindTexture(D,_e),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let We=0;We<$;We++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(ge,0,s.RGBA,1,1,te,0,s.RGBA,s.UNSIGNED_BYTE,ye):s.texImage2D(ge+We,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ye);return _e}const Re={};Re[s.TEXTURE_2D]=oe(s.TEXTURE_2D,s.TEXTURE_2D,1),Re[s.TEXTURE_CUBE_MAP]=oe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[s.TEXTURE_2D_ARRAY]=oe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Re[s.TEXTURE_3D]=oe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pe(s.DEPTH_TEST),o.setFunc(Ls),B(!1),re($l),pe(s.CULL_FACE),P(Ai);function pe(D){d[D]!==!0&&(s.enable(D),d[D]=!0)}function Ne(D){d[D]!==!1&&(s.disable(D),d[D]=!1)}function Ke(D,ge){return h[D]!==ge?(s.bindFramebuffer(D,ge),h[D]=ge,D===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ge),D===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ge),!0):!1}function Pe(D,ge){let $=p,te=!1;if(D){$=u.get(ge),$===void 0&&($=[],u.set(ge,$));const ye=D.textures;if($.length!==ye.length||$[0]!==s.COLOR_ATTACHMENT0){for(let _e=0,We=ye.length;_e<We;_e++)$[_e]=s.COLOR_ATTACHMENT0+_e;$.length=ye.length,te=!0}}else $[0]!==s.BACK&&($[0]=s.BACK,te=!0);te&&s.drawBuffers($)}function vt(D){return g!==D?(s.useProgram(D),g=D,!0):!1}const ut={[ji]:s.FUNC_ADD,[Dh]:s.FUNC_SUBTRACT,[Nh]:s.FUNC_REVERSE_SUBTRACT};ut[Uh]=s.MIN,ut[Fh]=s.MAX;const Ve={[Oh]:s.ZERO,[Bh]:s.ONE,[kh]:s.SRC_COLOR,[Ma]:s.SRC_ALPHA,[Xh]:s.SRC_ALPHA_SATURATE,[Gh]:s.DST_COLOR,[Hh]:s.DST_ALPHA,[zh]:s.ONE_MINUS_SRC_COLOR,[Sa]:s.ONE_MINUS_SRC_ALPHA,[Wh]:s.ONE_MINUS_DST_COLOR,[Vh]:s.ONE_MINUS_DST_ALPHA,[jh]:s.CONSTANT_COLOR,[qh]:s.ONE_MINUS_CONSTANT_COLOR,[Yh]:s.CONSTANT_ALPHA,[$h]:s.ONE_MINUS_CONSTANT_ALPHA};function P(D,ge,$,te,ye,_e,We,_t,It,Ie){if(D===Ai){_===!0&&(Ne(s.BLEND),_=!1);return}if(_===!1&&(pe(s.BLEND),_=!0),D!==Lh){if(D!==m||Ie!==v){if((f!==ji||b!==ji)&&(s.blendEquation(s.FUNC_ADD),f=ji,b=ji),Ie)switch(D){case Rs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Kl:s.blendFunc(s.ONE,s.ONE);break;case Zl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Jl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Rs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Kl:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Zl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Jl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}w=null,A=null,C=null,M=null,E.set(0,0,0),T=0,m=D,v=Ie}return}ye=ye||ge,_e=_e||$,We=We||te,(ge!==f||ye!==b)&&(s.blendEquationSeparate(ut[ge],ut[ye]),f=ge,b=ye),($!==w||te!==A||_e!==C||We!==M)&&(s.blendFuncSeparate(Ve[$],Ve[te],Ve[_e],Ve[We]),w=$,A=te,C=_e,M=We),(_t.equals(E)===!1||It!==T)&&(s.blendColor(_t.r,_t.g,_t.b,It),E.copy(_t),T=It),m=D,v=!1}function Et(D,ge){D.side===Nn?Ne(s.CULL_FACE):pe(s.CULL_FACE);let $=D.side===Yt;ge&&($=!$),B($),D.blending===Rs&&D.transparent===!1?P(Ai):P(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const te=D.stencilWrite;a.setTest(te),te&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),at(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?pe(s.SAMPLE_ALPHA_TO_COVERAGE):Ne(s.SAMPLE_ALPHA_TO_COVERAGE)}function B(D){x!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),x=D)}function re(D){D!==Ch?(pe(s.CULL_FACE),D!==I&&(D===$l?s.cullFace(s.BACK):D===Ph?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ne(s.CULL_FACE),I=D}function we(D){D!==U&&(H&&s.lineWidth(D),U=D)}function at(D,ge,$){D?(pe(s.POLYGON_OFFSET_FILL),(N!==ge||O!==$)&&(s.polygonOffset(ge,$),N=ge,O=$)):Ne(s.POLYGON_OFFSET_FILL)}function Z(D){D?pe(s.SCISSOR_TEST):Ne(s.SCISSOR_TEST)}function R(D){D===void 0&&(D=s.TEXTURE0+j-1),le!==D&&(s.activeTexture(D),le=D)}function y(D,ge,$){$===void 0&&(le===null?$=s.TEXTURE0+j-1:$=le);let te=he[$];te===void 0&&(te={type:void 0,texture:void 0},he[$]=te),(te.type!==D||te.texture!==ge)&&(le!==$&&(s.activeTexture($),le=$),s.bindTexture(D,ge||Re[D]),te.type=D,te.texture=ge)}function W(){const D=he[le];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function G(){try{s.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{s.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{s.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(){try{s.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{s.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{s.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ze(){try{s.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{s.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{s.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{s.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function He(D){Xe.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Xe.copy(D))}function Te(D){K.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),K.copy(D))}function Je(D,ge){let $=c.get(ge);$===void 0&&($=new WeakMap,c.set(ge,$));let te=$.get(D);te===void 0&&(te=s.getUniformBlockIndex(ge,D.name),$.set(D,te))}function ne(D,ge){const te=c.get(ge).get(D);l.get(ge)!==te&&(s.uniformBlockBinding(ge,te,D.__bindingPointIndex),l.set(ge,te))}function ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},le=null,he={},h={},u=new WeakMap,p=[],g=null,_=!1,m=null,f=null,w=null,A=null,b=null,C=null,M=null,E=new De(0,0,0),T=0,v=!1,x=null,I=null,U=null,N=null,O=null,Xe.set(0,0,s.canvas.width,s.canvas.height),K.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:pe,disable:Ne,bindFramebuffer:Ke,drawBuffers:Pe,useProgram:vt,setBlending:P,setMaterial:Et,setFlipSided:B,setCullFace:re,setLineWidth:we,setPolygonOffset:at,setScissorTest:Z,activeTexture:R,bindTexture:y,unbindTexture:W,compressedTexImage2D:G,compressedTexImage3D:ie,texImage2D:Ee,texImage3D:de,updateUBOMapping:Je,uniformBlockBinding:ne,texStorage2D:Ze,texStorage3D:ae,texSubImage2D:J,texSubImage3D:Le,compressedTexSubImage2D:ve,compressedTexSubImage3D:me,scissor:He,viewport:Te,reset:ct}}function C_(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ce,d=new WeakMap;let h;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,y){return p?new OffscreenCanvas(R,y):pr("canvas")}function _(R,y,W){let G=1;const ie=Z(R);if((ie.width>W||ie.height>W)&&(G=W/Math.max(ie.width,ie.height)),G<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const J=Math.floor(G*ie.width),Le=Math.floor(G*ie.height);h===void 0&&(h=g(J,Le));const ve=y?g(J,Le):h;return ve.width=J,ve.height=Le,ve.getContext("2d").drawImage(R,0,0,J,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+J+"x"+Le+")."),ve}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),R;return R}function m(R){return R.generateMipmaps}function f(R){s.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function A(R,y,W,G,ie=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=y;if(y===s.RED&&(W===s.FLOAT&&(J=s.R32F),W===s.HALF_FLOAT&&(J=s.R16F),W===s.UNSIGNED_BYTE&&(J=s.R8)),y===s.RED_INTEGER&&(W===s.UNSIGNED_BYTE&&(J=s.R8UI),W===s.UNSIGNED_SHORT&&(J=s.R16UI),W===s.UNSIGNED_INT&&(J=s.R32UI),W===s.BYTE&&(J=s.R8I),W===s.SHORT&&(J=s.R16I),W===s.INT&&(J=s.R32I)),y===s.RG&&(W===s.FLOAT&&(J=s.RG32F),W===s.HALF_FLOAT&&(J=s.RG16F),W===s.UNSIGNED_BYTE&&(J=s.RG8)),y===s.RG_INTEGER&&(W===s.UNSIGNED_BYTE&&(J=s.RG8UI),W===s.UNSIGNED_SHORT&&(J=s.RG16UI),W===s.UNSIGNED_INT&&(J=s.RG32UI),W===s.BYTE&&(J=s.RG8I),W===s.SHORT&&(J=s.RG16I),W===s.INT&&(J=s.RG32I)),y===s.RGB_INTEGER&&(W===s.UNSIGNED_BYTE&&(J=s.RGB8UI),W===s.UNSIGNED_SHORT&&(J=s.RGB16UI),W===s.UNSIGNED_INT&&(J=s.RGB32UI),W===s.BYTE&&(J=s.RGB8I),W===s.SHORT&&(J=s.RGB16I),W===s.INT&&(J=s.RGB32I)),y===s.RGBA_INTEGER&&(W===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),W===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),W===s.UNSIGNED_INT&&(J=s.RGBA32UI),W===s.BYTE&&(J=s.RGBA8I),W===s.SHORT&&(J=s.RGBA16I),W===s.INT&&(J=s.RGBA32I)),y===s.RGB&&W===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),y===s.RGBA){const Le=ie?co:nt.getTransfer(G);W===s.FLOAT&&(J=s.RGBA32F),W===s.HALF_FLOAT&&(J=s.RGBA16F),W===s.UNSIGNED_BYTE&&(J=Le===mt?s.SRGB8_ALPHA8:s.RGBA8),W===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),W===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function b(R,y){let W;return R?y===null||y===Ki||y===Us?W=s.DEPTH24_STENCIL8:y===ln?W=s.DEPTH32F_STENCIL8:y===hr&&(W=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ki||y===Us?W=s.DEPTH_COMPONENT24:y===ln?W=s.DEPTH_COMPONENT32F:y===hr&&(W=s.DEPTH_COMPONENT16),W}function C(R,y){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==nn&&R.minFilter!==Ht?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function M(R){const y=R.target;y.removeEventListener("dispose",M),T(y),y.isVideoTexture&&d.delete(y)}function E(R){const y=R.target;y.removeEventListener("dispose",E),x(y)}function T(R){const y=n.get(R);if(y.__webglInit===void 0)return;const W=R.source,G=u.get(W);if(G){const ie=G[y.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&v(R),Object.keys(G).length===0&&u.delete(W)}n.remove(R)}function v(R){const y=n.get(R);s.deleteTexture(y.__webglTexture);const W=R.source,G=u.get(W);delete G[y.__cacheKey],o.memory.textures--}function x(R){const y=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(y.__webglFramebuffer[G]))for(let ie=0;ie<y.__webglFramebuffer[G].length;ie++)s.deleteFramebuffer(y.__webglFramebuffer[G][ie]);else s.deleteFramebuffer(y.__webglFramebuffer[G]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[G])}else{if(Array.isArray(y.__webglFramebuffer))for(let G=0;G<y.__webglFramebuffer.length;G++)s.deleteFramebuffer(y.__webglFramebuffer[G]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let G=0;G<y.__webglColorRenderbuffer.length;G++)y.__webglColorRenderbuffer[G]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[G]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const W=R.textures;for(let G=0,ie=W.length;G<ie;G++){const J=n.get(W[G]);J.__webglTexture&&(s.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(W[G])}n.remove(R)}let I=0;function U(){I=0}function N(){const R=I;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),I+=1,R}function O(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function j(R,y){const W=n.get(R);if(R.isVideoTexture&&we(R),R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){const G=R.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(W,R,y);return}}t.bindTexture(s.TEXTURE_2D,W.__webglTexture,s.TEXTURE0+y)}function H(R,y){const W=n.get(R);if(R.version>0&&W.__version!==R.version){K(W,R,y);return}t.bindTexture(s.TEXTURE_2D_ARRAY,W.__webglTexture,s.TEXTURE0+y)}function Q(R,y){const W=n.get(R);if(R.version>0&&W.__version!==R.version){K(W,R,y);return}t.bindTexture(s.TEXTURE_3D,W.__webglTexture,s.TEXTURE0+y)}function Y(R,y){const W=n.get(R);if(R.version>0&&W.__version!==R.version){oe(W,R,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture,s.TEXTURE0+y)}const le={[An]:s.REPEAT,[Gn]:s.CLAMP_TO_EDGE,[ao]:s.MIRRORED_REPEAT},he={[nn]:s.NEAREST,[Cd]:s.NEAREST_MIPMAP_NEAREST,[sr]:s.NEAREST_MIPMAP_LINEAR,[Ht]:s.LINEAR,[Qr]:s.LINEAR_MIPMAP_NEAREST,[Wn]:s.LINEAR_MIPMAP_LINEAR},Me={[hu]:s.NEVER,[_u]:s.ALWAYS,[uu]:s.LESS,[Wd]:s.LEQUAL,[fu]:s.EQUAL,[gu]:s.GEQUAL,[pu]:s.GREATER,[mu]:s.NOTEQUAL};function Fe(R,y){if(y.type===ln&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Ht||y.magFilter===Qr||y.magFilter===sr||y.magFilter===Wn||y.minFilter===Ht||y.minFilter===Qr||y.minFilter===sr||y.minFilter===Wn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,le[y.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,le[y.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,le[y.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,he[y.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,he[y.minFilter]),y.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,Me[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===nn||y.minFilter!==sr&&y.minFilter!==Wn||y.type===ln&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Xe(R,y){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",M));const G=y.source;let ie=u.get(G);ie===void 0&&(ie={},u.set(G,ie));const J=O(y);if(J!==R.__cacheKey){ie[J]===void 0&&(ie[J]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ie[J].usedTimes++;const Le=ie[R.__cacheKey];Le!==void 0&&(ie[R.__cacheKey].usedTimes--,Le.usedTimes===0&&v(y)),R.__cacheKey=J,R.__webglTexture=ie[J].texture}return W}function K(R,y,W){let G=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(G=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(G=s.TEXTURE_3D);const ie=Xe(R,y),J=y.source;t.bindTexture(G,R.__webglTexture,s.TEXTURE0+W);const Le=n.get(J);if(J.version!==Le.__version||ie===!0){t.activeTexture(s.TEXTURE0+W);const ve=nt.getPrimaries(nt.workingColorSpace),me=y.colorSpace===li?null:nt.getPrimaries(y.colorSpace),Ze=y.colorSpace===li||ve===me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let ae=_(y.image,!1,i.maxTextureSize);ae=at(y,ae);const Ee=r.convert(y.format,y.colorSpace),de=r.convert(y.type);let He=A(y.internalFormat,Ee,de,y.colorSpace,y.isVideoTexture);Fe(G,y);let Te;const Je=y.mipmaps,ne=y.isVideoTexture!==!0,ct=Le.__version===void 0||ie===!0,D=J.dataReady,ge=C(y,ae);if(y.isDepthTexture)He=b(y.format===Fs,y.type),ct&&(ne?t.texStorage2D(s.TEXTURE_2D,1,He,ae.width,ae.height):t.texImage2D(s.TEXTURE_2D,0,He,ae.width,ae.height,0,Ee,de,null));else if(y.isDataTexture)if(Je.length>0){ne&&ct&&t.texStorage2D(s.TEXTURE_2D,ge,He,Je[0].width,Je[0].height);for(let $=0,te=Je.length;$<te;$++)Te=Je[$],ne?D&&t.texSubImage2D(s.TEXTURE_2D,$,0,0,Te.width,Te.height,Ee,de,Te.data):t.texImage2D(s.TEXTURE_2D,$,He,Te.width,Te.height,0,Ee,de,Te.data);y.generateMipmaps=!1}else ne?(ct&&t.texStorage2D(s.TEXTURE_2D,ge,He,ae.width,ae.height),D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ae.width,ae.height,Ee,de,ae.data)):t.texImage2D(s.TEXTURE_2D,0,He,ae.width,ae.height,0,Ee,de,ae.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ne&&ct&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ge,He,Je[0].width,Je[0].height,ae.depth);for(let $=0,te=Je.length;$<te;$++)if(Te=Je[$],y.format!==Tn)if(Ee!==null)if(ne){if(D)if(y.layerUpdates.size>0){const ye=zc(Te.width,Te.height,y.format,y.type);for(const _e of y.layerUpdates){const We=Te.data.subarray(_e*ye/Te.data.BYTES_PER_ELEMENT,(_e+1)*ye/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,_e,Te.width,Te.height,1,Ee,We)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,Te.width,Te.height,ae.depth,Ee,Te.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,$,He,Te.width,Te.height,ae.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?D&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,Te.width,Te.height,ae.depth,Ee,de,Te.data):t.texImage3D(s.TEXTURE_2D_ARRAY,$,He,Te.width,Te.height,ae.depth,0,Ee,de,Te.data)}else{ne&&ct&&t.texStorage2D(s.TEXTURE_2D,ge,He,Je[0].width,Je[0].height);for(let $=0,te=Je.length;$<te;$++)Te=Je[$],y.format!==Tn?Ee!==null?ne?D&&t.compressedTexSubImage2D(s.TEXTURE_2D,$,0,0,Te.width,Te.height,Ee,Te.data):t.compressedTexImage2D(s.TEXTURE_2D,$,He,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?D&&t.texSubImage2D(s.TEXTURE_2D,$,0,0,Te.width,Te.height,Ee,de,Te.data):t.texImage2D(s.TEXTURE_2D,$,He,Te.width,Te.height,0,Ee,de,Te.data)}else if(y.isDataArrayTexture)if(ne){if(ct&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ge,He,ae.width,ae.height,ae.depth),D)if(y.layerUpdates.size>0){const $=zc(ae.width,ae.height,y.format,y.type);for(const te of y.layerUpdates){const ye=ae.data.subarray(te*$/ae.data.BYTES_PER_ELEMENT,(te+1)*$/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,te,ae.width,ae.height,1,Ee,de,ye)}y.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Ee,de,ae.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,He,ae.width,ae.height,ae.depth,0,Ee,de,ae.data);else if(y.isData3DTexture)ne?(ct&&t.texStorage3D(s.TEXTURE_3D,ge,He,ae.width,ae.height,ae.depth),D&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Ee,de,ae.data)):t.texImage3D(s.TEXTURE_3D,0,He,ae.width,ae.height,ae.depth,0,Ee,de,ae.data);else if(y.isFramebufferTexture){if(ct)if(ne)t.texStorage2D(s.TEXTURE_2D,ge,He,ae.width,ae.height);else{let $=ae.width,te=ae.height;for(let ye=0;ye<ge;ye++)t.texImage2D(s.TEXTURE_2D,ye,He,$,te,0,Ee,de,null),$>>=1,te>>=1}}else if(Je.length>0){if(ne&&ct){const $=Z(Je[0]);t.texStorage2D(s.TEXTURE_2D,ge,He,$.width,$.height)}for(let $=0,te=Je.length;$<te;$++)Te=Je[$],ne?D&&t.texSubImage2D(s.TEXTURE_2D,$,0,0,Ee,de,Te):t.texImage2D(s.TEXTURE_2D,$,He,Ee,de,Te);y.generateMipmaps=!1}else if(ne){if(ct){const $=Z(ae);t.texStorage2D(s.TEXTURE_2D,ge,He,$.width,$.height)}D&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee,de,ae)}else t.texImage2D(s.TEXTURE_2D,0,He,Ee,de,ae);m(y)&&f(G),Le.__version=J.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function oe(R,y,W){if(y.image.length!==6)return;const G=Xe(R,y),ie=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+W);const J=n.get(ie);if(ie.version!==J.__version||G===!0){t.activeTexture(s.TEXTURE0+W);const Le=nt.getPrimaries(nt.workingColorSpace),ve=y.colorSpace===li?null:nt.getPrimaries(y.colorSpace),me=y.colorSpace===li||Le===ve?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ze=y.isCompressedTexture||y.image[0].isCompressedTexture,ae=y.image[0]&&y.image[0].isDataTexture,Ee=[];for(let te=0;te<6;te++)!Ze&&!ae?Ee[te]=_(y.image[te],!0,i.maxCubemapSize):Ee[te]=ae?y.image[te].image:y.image[te],Ee[te]=at(y,Ee[te]);const de=Ee[0],He=r.convert(y.format,y.colorSpace),Te=r.convert(y.type),Je=A(y.internalFormat,He,Te,y.colorSpace),ne=y.isVideoTexture!==!0,ct=J.__version===void 0||G===!0,D=ie.dataReady;let ge=C(y,de);Fe(s.TEXTURE_CUBE_MAP,y);let $;if(Ze){ne&&ct&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ge,Je,de.width,de.height);for(let te=0;te<6;te++){$=Ee[te].mipmaps;for(let ye=0;ye<$.length;ye++){const _e=$[ye];y.format!==Tn?He!==null?ne?D&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,ye,0,0,_e.width,_e.height,He,_e.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,ye,Je,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,ye,0,0,_e.width,_e.height,He,Te,_e.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,ye,Je,_e.width,_e.height,0,He,Te,_e.data)}}}else{if($=y.mipmaps,ne&&ct){$.length>0&&ge++;const te=Z(Ee[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ge,Je,te.width,te.height)}for(let te=0;te<6;te++)if(ae){ne?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ee[te].width,Ee[te].height,He,Te,Ee[te].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Je,Ee[te].width,Ee[te].height,0,He,Te,Ee[te].data);for(let ye=0;ye<$.length;ye++){const We=$[ye].image[te].image;ne?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,ye+1,0,0,We.width,We.height,He,Te,We.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,ye+1,Je,We.width,We.height,0,He,Te,We.data)}}else{ne?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,He,Te,Ee[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Je,He,Te,Ee[te]);for(let ye=0;ye<$.length;ye++){const _e=$[ye];ne?D&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,ye+1,0,0,He,Te,_e.image[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,ye+1,Je,He,Te,_e.image[te])}}}m(y)&&f(s.TEXTURE_CUBE_MAP),J.__version=ie.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Re(R,y,W,G,ie,J){const Le=r.convert(W.format,W.colorSpace),ve=r.convert(W.type),me=A(W.internalFormat,Le,ve,W.colorSpace),Ze=n.get(y),ae=n.get(W);if(ae.__renderTarget=y,!Ze.__hasExternalTextures){const Ee=Math.max(1,y.width>>J),de=Math.max(1,y.height>>J);ie===s.TEXTURE_3D||ie===s.TEXTURE_2D_ARRAY?t.texImage3D(ie,J,me,Ee,de,y.depth,0,Le,ve,null):t.texImage2D(ie,J,me,Ee,de,0,Le,ve,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),re(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,G,ie,ae.__webglTexture,0,B(y)):(ie===s.TEXTURE_2D||ie>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,G,ie,ae.__webglTexture,J),t.bindFramebuffer(s.FRAMEBUFFER,null)}function pe(R,y,W){if(s.bindRenderbuffer(s.RENDERBUFFER,R),y.depthBuffer){const G=y.depthTexture,ie=G&&G.isDepthTexture?G.type:null,J=b(y.stencilBuffer,ie),Le=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=B(y);re(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ve,J,y.width,y.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,ve,J,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,J,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Le,s.RENDERBUFFER,R)}else{const G=y.textures;for(let ie=0;ie<G.length;ie++){const J=G[ie],Le=r.convert(J.format,J.colorSpace),ve=r.convert(J.type),me=A(J.internalFormat,Le,ve,J.colorSpace),Ze=B(y);W&&re(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ze,me,y.width,y.height):re(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ze,me,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,me,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ne(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=n.get(y.depthTexture);G.__renderTarget=y,(!G.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),j(y.depthTexture,0);const ie=G.__webglTexture,J=B(y);if(y.depthTexture.format===Is)re(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ie,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ie,0);else if(y.depthTexture.format===Fs)re(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ie,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Ke(R){const y=n.get(R),W=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const G=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),G){const ie=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,G.removeEventListener("dispose",ie)};G.addEventListener("dispose",ie),y.__depthDisposeCallback=ie}y.__boundDepthTexture=G}if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Ne(y.__webglFramebuffer,R)}else if(W){y.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[G]),y.__webglDepthbuffer[G]===void 0)y.__webglDepthbuffer[G]=s.createRenderbuffer(),pe(y.__webglDepthbuffer[G],R,!1);else{const ie=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=y.__webglDepthbuffer[G];s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,ie,s.RENDERBUFFER,J)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),pe(y.__webglDepthbuffer,R,!1);else{const G=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ie=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ie),s.framebufferRenderbuffer(s.FRAMEBUFFER,G,s.RENDERBUFFER,ie)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Pe(R,y,W){const G=n.get(R);y!==void 0&&Re(G.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),W!==void 0&&Ke(R)}function vt(R){const y=R.texture,W=n.get(R),G=n.get(y);R.addEventListener("dispose",E);const ie=R.textures,J=R.isWebGLCubeRenderTarget===!0,Le=ie.length>1;if(Le||(G.__webglTexture===void 0&&(G.__webglTexture=s.createTexture()),G.__version=y.version,o.memory.textures++),J){W.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(y.mipmaps&&y.mipmaps.length>0){W.__webglFramebuffer[ve]=[];for(let me=0;me<y.mipmaps.length;me++)W.__webglFramebuffer[ve][me]=s.createFramebuffer()}else W.__webglFramebuffer[ve]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){W.__webglFramebuffer=[];for(let ve=0;ve<y.mipmaps.length;ve++)W.__webglFramebuffer[ve]=s.createFramebuffer()}else W.__webglFramebuffer=s.createFramebuffer();if(Le)for(let ve=0,me=ie.length;ve<me;ve++){const Ze=n.get(ie[ve]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&re(R)===!1){W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ve=0;ve<ie.length;ve++){const me=ie[ve];W.__webglColorRenderbuffer[ve]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,W.__webglColorRenderbuffer[ve]);const Ze=r.convert(me.format,me.colorSpace),ae=r.convert(me.type),Ee=A(me.internalFormat,Ze,ae,me.colorSpace,R.isXRRenderTarget===!0),de=B(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,de,Ee,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,W.__webglColorRenderbuffer[ve])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),pe(W.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture),Fe(s.TEXTURE_CUBE_MAP,y);for(let ve=0;ve<6;ve++)if(y.mipmaps&&y.mipmaps.length>0)for(let me=0;me<y.mipmaps.length;me++)Re(W.__webglFramebuffer[ve][me],R,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,me);else Re(W.__webglFramebuffer[ve],R,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);m(y)&&f(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let ve=0,me=ie.length;ve<me;ve++){const Ze=ie[ve],ae=n.get(Ze);t.bindTexture(s.TEXTURE_2D,ae.__webglTexture),Fe(s.TEXTURE_2D,Ze),Re(W.__webglFramebuffer,R,Ze,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,0),m(Ze)&&f(s.TEXTURE_2D)}t.unbindTexture()}else{let ve=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ve=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ve,G.__webglTexture),Fe(ve,y),y.mipmaps&&y.mipmaps.length>0)for(let me=0;me<y.mipmaps.length;me++)Re(W.__webglFramebuffer[me],R,y,s.COLOR_ATTACHMENT0,ve,me);else Re(W.__webglFramebuffer,R,y,s.COLOR_ATTACHMENT0,ve,0);m(y)&&f(ve),t.unbindTexture()}R.depthBuffer&&Ke(R)}function ut(R){const y=R.textures;for(let W=0,G=y.length;W<G;W++){const ie=y[W];if(m(ie)){const J=w(R),Le=n.get(ie).__webglTexture;t.bindTexture(J,Le),f(J),t.unbindTexture()}}}const Ve=[],P=[];function Et(R){if(R.samples>0){if(re(R)===!1){const y=R.textures,W=R.width,G=R.height;let ie=s.COLOR_BUFFER_BIT;const J=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=n.get(R),ve=y.length>1;if(ve)for(let me=0;me<y.length;me++)t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let me=0;me<y.length;me++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ie|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ie|=s.STENCIL_BUFFER_BIT)),ve){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Le.__webglColorRenderbuffer[me]);const Ze=n.get(y[me]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ze,0)}s.blitFramebuffer(0,0,W,G,0,0,W,G,ie,s.NEAREST),l===!0&&(Ve.length=0,P.length=0,Ve.push(s.COLOR_ATTACHMENT0+me),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ve.push(J),P.push(J),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,P)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ve))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ve)for(let me=0;me<y.length;me++){t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,Le.__webglColorRenderbuffer[me]);const Ze=n.get(y[me]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,Ze,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const y=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function B(R){return Math.min(i.maxSamples,R.samples)}function re(R){const y=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function we(R){const y=o.render.frame;d.get(R)!==y&&(d.set(R,y),R.update())}function at(R,y){const W=R.colorSpace,G=R.format,ie=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||W!==$t&&W!==li&&(nt.getTransfer(W)===mt?(G!==Tn||ie!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),y}function Z(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=U,this.setTexture2D=j,this.setTexture2DArray=H,this.setTexture3D=Q,this.setTextureCube=Y,this.rebindTextures=Pe,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=re}function P_(s,e){function t(n,i=li){let r;const o=nt.getTransfer(i);if(n===pi)return s.UNSIGNED_BYTE;if(n===Ml)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Sl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Dd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Pd)return s.BYTE;if(n===Ld)return s.SHORT;if(n===hr)return s.UNSIGNED_SHORT;if(n===yl)return s.INT;if(n===Ki)return s.UNSIGNED_INT;if(n===ln)return s.FLOAT;if(n===Xn)return s.HALF_FLOAT;if(n===Nd)return s.ALPHA;if(n===Ud)return s.RGB;if(n===Tn)return s.RGBA;if(n===Fd)return s.LUMINANCE;if(n===Od)return s.LUMINANCE_ALPHA;if(n===Is)return s.DEPTH_COMPONENT;if(n===Fs)return s.DEPTH_STENCIL;if(n===bl)return s.RED;if(n===El)return s.RED_INTEGER;if(n===Bd)return s.RG;if(n===Tl)return s.RG_INTEGER;if(n===wl)return s.RGBA_INTEGER;if(n===eo||n===to||n===no||n===io)if(o===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===eo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===eo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===io)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Pa||n===La||n===Da||n===Na)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Pa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===La)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Da)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ua||n===Fa||n===Oa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ua||n===Fa)return o===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Oa)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ba||n===ka||n===za||n===Ha||n===Va||n===Ga||n===Wa||n===Xa||n===ja||n===qa||n===Ya||n===$a||n===Ka||n===Za)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ba)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ka)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===za)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ha)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Va)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ga)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wa)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xa)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ja)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qa)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ya)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$a)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ka)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Za)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===so||n===Ja||n===Qa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===so)return o===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ja)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kd||n===el||n===tl||n===nl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===so)return r.COMPRESSED_RED_RGTC1_EXT;if(n===el)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===tl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Us?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const L_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,D_=`
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

}`;class N_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Ot,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new kn({vertexShader:L_,fragmentShader:D_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Oe(new Zi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class U_ extends Li{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,u=null,p=null,g=null;const _=new N_,m=t.getContextAttributes();let f=null,w=null;const A=[],b=[],C=new Ce;let M=null;const E=new qt;E.viewport=new ot;const T=new qt;T.viewport=new ot;const v=[E,T],x=new Hf;let I=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let oe=A[K];return oe===void 0&&(oe=new $o,A[K]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(K){let oe=A[K];return oe===void 0&&(oe=new $o,A[K]=oe),oe.getGripSpace()},this.getHand=function(K){let oe=A[K];return oe===void 0&&(oe=new $o,A[K]=oe),oe.getHandSpace()};function N(K){const oe=b.indexOf(K.inputSource);if(oe===-1)return;const Re=A[oe];Re!==void 0&&(Re.update(K.inputSource,K.frame,c||o),Re.dispatchEvent({type:K.type,data:K.inputSource}))}function O(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",j);for(let K=0;K<A.length;K++){const oe=b[K];oe!==null&&(b[K]=null,A[K].disconnect(oe))}I=null,U=null,_.reset(),e.setRenderTarget(f),p=null,u=null,h=null,i=null,w=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",O),i.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(C),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,pe=null,Ne=null;m.depth&&(Ne=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Re=m.stencil?Fs:Is,pe=m.stencil?Us:Ki);const Ke={colorFormat:t.RGBA8,depthFormat:Ne,scaleFactor:r};h=new XRWebGLBinding(i,t),u=h.createProjectionLayer(Ke),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),w=new Ii(u.textureWidth,u.textureHeight,{format:Tn,type:pi,depthTexture:new oh(u.textureWidth,u.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const Re={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,Re),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new Ii(p.framebufferWidth,p.framebufferHeight,{format:Tn,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Xe.setContext(i),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(K){for(let oe=0;oe<K.removed.length;oe++){const Re=K.removed[oe],pe=b.indexOf(Re);pe>=0&&(b[pe]=null,A[pe].disconnect(Re))}for(let oe=0;oe<K.added.length;oe++){const Re=K.added[oe];let pe=b.indexOf(Re);if(pe===-1){for(let Ke=0;Ke<A.length;Ke++)if(Ke>=b.length){b.push(Re),pe=Ke;break}else if(b[Ke]===null){b[Ke]=Re,pe=Ke;break}if(pe===-1)break}const Ne=A[pe];Ne&&Ne.connect(Re)}}const H=new L,Q=new L;function Y(K,oe,Re){H.setFromMatrixPosition(oe.matrixWorld),Q.setFromMatrixPosition(Re.matrixWorld);const pe=H.distanceTo(Q),Ne=oe.projectionMatrix.elements,Ke=Re.projectionMatrix.elements,Pe=Ne[14]/(Ne[10]-1),vt=Ne[14]/(Ne[10]+1),ut=(Ne[9]+1)/Ne[5],Ve=(Ne[9]-1)/Ne[5],P=(Ne[8]-1)/Ne[0],Et=(Ke[8]+1)/Ke[0],B=Pe*P,re=Pe*Et,we=pe/(-P+Et),at=we*-P;if(oe.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(at),K.translateZ(we),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ne[10]===-1)K.projectionMatrix.copy(oe.projectionMatrix),K.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const Z=Pe+we,R=vt+we,y=B-at,W=re+(pe-at),G=ut*vt/R*Z,ie=Ve*vt/R*Z;K.projectionMatrix.makePerspective(y,W,G,ie,Z,R),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function le(K,oe){oe===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(oe.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let oe=K.near,Re=K.far;_.texture!==null&&(_.depthNear>0&&(oe=_.depthNear),_.depthFar>0&&(Re=_.depthFar)),x.near=T.near=E.near=oe,x.far=T.far=E.far=Re,(I!==x.near||U!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),I=x.near,U=x.far),E.layers.mask=K.layers.mask|2,T.layers.mask=K.layers.mask|4,x.layers.mask=E.layers.mask|T.layers.mask;const pe=K.parent,Ne=x.cameras;le(x,pe);for(let Ke=0;Ke<Ne.length;Ke++)le(Ne[Ke],pe);Ne.length===2?Y(x,E,T):x.projectionMatrix.copy(E.projectionMatrix),he(K,x,pe)};function he(K,oe,Re){Re===null?K.matrix.copy(oe.matrixWorld):(K.matrix.copy(Re.matrixWorld),K.matrix.invert(),K.matrix.multiply(oe.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(oe.projectionMatrix),K.projectionMatrixInverse.copy(oe.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Os*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let Me=null;function Fe(K,oe){if(d=oe.getViewerPose(c||o),g=oe,d!==null){const Re=d.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let pe=!1;Re.length!==x.cameras.length&&(x.cameras.length=0,pe=!0);for(let Pe=0;Pe<Re.length;Pe++){const vt=Re[Pe];let ut=null;if(p!==null)ut=p.getViewport(vt);else{const P=h.getViewSubImage(u,vt);ut=P.viewport,Pe===0&&(e.setRenderTargetTextures(w,P.colorTexture,u.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(w))}let Ve=v[Pe];Ve===void 0&&(Ve=new qt,Ve.layers.enable(Pe),Ve.viewport=new ot,v[Pe]=Ve),Ve.matrix.fromArray(vt.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(vt.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(ut.x,ut.y,ut.width,ut.height),Pe===0&&(x.matrix.copy(Ve.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),pe===!0&&x.cameras.push(Ve)}const Ne=i.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&h){const Pe=h.getDepthInformation(Re[0]);Pe&&Pe.isValid&&Pe.texture&&_.init(e,Pe,i.renderState)}}for(let Re=0;Re<A.length;Re++){const pe=b[Re],Ne=A[Re];pe!==null&&Ne!==void 0&&Ne.update(pe,oe,c||o)}Me&&Me(K,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),g=null}const Xe=new fh;Xe.setAnimationLoop(Fe),this.setAnimationLoop=function(K){Me=K},this.dispose=function(){}}}const Hi=new Yn,F_=new je;function O_(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Zd(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,w,A,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),d(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,b)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,w,A):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Yt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Yt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const w=e.get(f),A=w.envMap,b=w.envMapRotation;A&&(m.envMap.value=A,Hi.copy(b),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),m.envMapRotation.value.setFromMatrix4(F_.makeRotationFromEuler(Hi)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,w,A){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*w,m.scale.value=A*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function d(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,w){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Yt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const w=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function B_(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,A){const b=A.program;n.uniformBlockBinding(w,b)}function c(w,A){let b=i[w.id];b===void 0&&(g(w),b=d(w),i[w.id]=b,w.addEventListener("dispose",m));const C=A.program;n.updateUBOMapping(w,C);const M=e.render.frame;r[w.id]!==M&&(u(w),r[w.id]=M)}function d(w){const A=h();w.__bindingPointIndex=A;const b=s.createBuffer(),C=w.__size,M=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,C,M),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,A,b),b}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(w){const A=i[w.id],b=w.uniforms,C=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,A);for(let M=0,E=b.length;M<E;M++){const T=Array.isArray(b[M])?b[M]:[b[M]];for(let v=0,x=T.length;v<x;v++){const I=T[v];if(p(I,M,v,C)===!0){const U=I.__offset,N=Array.isArray(I.value)?I.value:[I.value];let O=0;for(let j=0;j<N.length;j++){const H=N[j],Q=_(H);typeof H=="number"||typeof H=="boolean"?(I.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,U+O,I.__data)):H.isMatrix3?(I.__data[0]=H.elements[0],I.__data[1]=H.elements[1],I.__data[2]=H.elements[2],I.__data[3]=0,I.__data[4]=H.elements[3],I.__data[5]=H.elements[4],I.__data[6]=H.elements[5],I.__data[7]=0,I.__data[8]=H.elements[6],I.__data[9]=H.elements[7],I.__data[10]=H.elements[8],I.__data[11]=0):(H.toArray(I.__data,O),O+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,U,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(w,A,b,C){const M=w.value,E=A+"_"+b;if(C[E]===void 0)return typeof M=="number"||typeof M=="boolean"?C[E]=M:C[E]=M.clone(),!0;{const T=C[E];if(typeof M=="number"||typeof M=="boolean"){if(T!==M)return C[E]=M,!0}else if(T.equals(M)===!1)return T.copy(M),!0}return!1}function g(w){const A=w.uniforms;let b=0;const C=16;for(let E=0,T=A.length;E<T;E++){const v=Array.isArray(A[E])?A[E]:[A[E]];for(let x=0,I=v.length;x<I;x++){const U=v[x],N=Array.isArray(U.value)?U.value:[U.value];for(let O=0,j=N.length;O<j;O++){const H=N[O],Q=_(H),Y=b%C,le=Y%Q.boundary,he=Y+le;b+=le,he!==0&&C-he<Q.storage&&(b+=C-he),U.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=b,b+=Q.storage}}}const M=b%C;return M>0&&(b+=C-M),w.__size=b,w.__cache={},this}function _(w){const A={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(A.boundary=4,A.storage=4):w.isVector2?(A.boundary=8,A.storage=8):w.isVector3||w.isColor?(A.boundary=16,A.storage=12):w.isVector4?(A.boundary=16,A.storage=16):w.isMatrix3?(A.boundary=48,A.storage=48):w.isMatrix4?(A.boundary=64,A.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),A}function m(w){const A=w.target;A.removeEventListener("dispose",m);const b=o.indexOf(A.__bindingPointIndex);o.splice(b,1),s.deleteBuffer(i[A.id]),delete i[A.id],delete r[A.id]}function f(){for(const w in i)s.deleteBuffer(i[w]);o=[],i={},r={}}return{bind:l,update:c,dispose:f}}class k_{constructor(e={}){const{canvas:t=Nu(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const w=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=At,this.toneMapping=Ri,this.toneMappingExposure=1;const b=this;let C=!1,M=0,E=0,T=null,v=-1,x=null;const I=new ot,U=new ot;let N=null;const O=new De(0);let j=0,H=t.width,Q=t.height,Y=1,le=null,he=null;const Me=new ot(0,0,H,Q),Fe=new ot(0,0,H,Q);let Xe=!1;const K=new Dl;let oe=!1,Re=!1;this.transmissionResolutionScale=1;const pe=new je,Ne=new je,Ke=new L,Pe=new ot,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function Ve(){return T===null?Y:1}let P=n;function Et(S,F){return t.getContext(S,F)}try{const S={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${vl}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",_e,!1),P===null){const F="webgl2";if(P=Et(F,S),P===null)throw Et(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let B,re,we,at,Z,R,y,W,G,ie,J,Le,ve,me,Ze,ae,Ee,de,He,Te,Je,ne,ct,D;function ge(){B=new $g(P),B.init(),ne=new P_(P,B),re=new Vg(P,B,e,ne),we=new I_(P,B),re.reverseDepthBuffer&&u&&we.buffers.depth.setReversed(!0),at=new Jg(P),Z=new g_,R=new C_(P,B,we,Z,re,ne,at),y=new Wg(b),W=new Yg(b),G=new sp(P),ct=new zg(P,G),ie=new Kg(P,G,at,ct),J=new e0(P,ie,G,at),He=new Qg(P,re,R),ae=new Gg(Z),Le=new m_(b,y,W,B,re,ct,ae),ve=new O_(b,Z),me=new x_,Ze=new E_(B),de=new kg(b,y,W,we,J,p,l),Ee=new A_(b,J,re),D=new B_(P,at,re,we),Te=new Hg(P,B,at),Je=new Zg(P,B,at),at.programs=Le.programs,b.capabilities=re,b.extensions=B,b.properties=Z,b.renderLists=me,b.shadowMap=Ee,b.state=we,b.info=at}ge();const $=new U_(b,P);this.xr=$,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const S=B.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=B.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(S){S!==void 0&&(Y=S,this.setSize(H,Q,!1))},this.getSize=function(S){return S.set(H,Q)},this.setSize=function(S,F,X=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=S,Q=F,t.width=Math.floor(S*Y),t.height=Math.floor(F*Y),X===!0&&(t.style.width=S+"px",t.style.height=F+"px"),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(H*Y,Q*Y).floor()},this.setDrawingBufferSize=function(S,F,X){H=S,Q=F,Y=X,t.width=Math.floor(S*X),t.height=Math.floor(F*X),this.setViewport(0,0,S,F)},this.getCurrentViewport=function(S){return S.copy(I)},this.getViewport=function(S){return S.copy(Me)},this.setViewport=function(S,F,X,q){S.isVector4?Me.set(S.x,S.y,S.z,S.w):Me.set(S,F,X,q),we.viewport(I.copy(Me).multiplyScalar(Y).round())},this.getScissor=function(S){return S.copy(Fe)},this.setScissor=function(S,F,X,q){S.isVector4?Fe.set(S.x,S.y,S.z,S.w):Fe.set(S,F,X,q),we.scissor(U.copy(Fe).multiplyScalar(Y).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(S){we.setScissorTest(Xe=S)},this.setOpaqueSort=function(S){le=S},this.setTransparentSort=function(S){he=S},this.getClearColor=function(S){return S.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor(...arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha(...arguments)},this.clear=function(S=!0,F=!0,X=!0){let q=0;if(S){let k=!1;if(T!==null){const se=T.texture.format;k=se===wl||se===Tl||se===El}if(k){const se=T.texture.type,fe=se===pi||se===Ki||se===hr||se===Us||se===Ml||se===Sl,be=de.getClearColor(),ce=de.getClearAlpha(),Be=be.r,Ge=be.g,Ae=be.b;fe?(g[0]=Be,g[1]=Ge,g[2]=Ae,g[3]=ce,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=Be,_[1]=Ge,_[2]=Ae,_[3]=ce,P.clearBufferiv(P.COLOR,0,_))}else q|=P.COLOR_BUFFER_BIT}F&&(q|=P.DEPTH_BUFFER_BIT),X&&(q|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),de.dispose(),me.dispose(),Ze.dispose(),Z.dispose(),y.dispose(),W.dispose(),J.dispose(),ct.dispose(),D.dispose(),Le.dispose(),$.dispose(),$.removeEventListener("sessionstart",vr),$.removeEventListener("sessionend",et),Jn.stop()};function te(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const S=at.autoReset,F=Ee.enabled,X=Ee.autoUpdate,q=Ee.needsUpdate,k=Ee.type;ge(),at.autoReset=S,Ee.enabled=F,Ee.autoUpdate=X,Ee.needsUpdate=q,Ee.type=k}function _e(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function We(S){const F=S.target;F.removeEventListener("dispose",We),_t(F)}function _t(S){It(S),Z.remove(S)}function It(S){const F=Z.get(S).programs;F!==void 0&&(F.forEach(function(X){Le.releaseProgram(X)}),S.isShaderMaterial&&Le.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,X,q,k,se){F===null&&(F=vt);const fe=k.isMesh&&k.matrixWorld.determinant()<0,be=st(S,F,X,q,k);we.setMaterial(q,fe);let ce=X.index,Be=1;if(q.wireframe===!0){if(ce=ie.getWireframeAttribute(X),ce===void 0)return;Be=2}const Ge=X.drawRange,Ae=X.attributes.position;let tt=Ge.start*Be,rt=(Ge.start+Ge.count)*Be;se!==null&&(tt=Math.max(tt,se.start*Be),rt=Math.min(rt,(se.start+se.count)*Be)),ce!==null?(tt=Math.max(tt,0),rt=Math.min(rt,ce.count)):Ae!=null&&(tt=Math.max(tt,0),rt=Math.min(rt,Ae.count));const Pt=rt-tt;if(Pt<0||Pt===1/0)return;ct.setup(k,q,be,X,ce);let wt,lt=Te;if(ce!==null&&(wt=G.get(ce),lt=Je,lt.setIndex(wt)),k.isMesh)q.wireframe===!0?(we.setLineWidth(q.wireframeLinewidth*Ve()),lt.setMode(P.LINES)):lt.setMode(P.TRIANGLES);else if(k.isLine){let ke=q.linewidth;ke===void 0&&(ke=1),we.setLineWidth(ke*Ve()),k.isLineSegments?lt.setMode(P.LINES):k.isLineLoop?lt.setMode(P.LINE_LOOP):lt.setMode(P.LINE_STRIP)}else k.isPoints?lt.setMode(P.POINTS):k.isSprite&&lt.setMode(P.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Wi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(B.get("WEBGL_multi_draw"))lt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const ke=k._multiDrawStarts,Vt=k._multiDrawCounts,dt=k._multiDrawCount,Cn=ce?G.get(ce).bytesPerElement:1,ns=Z.get(q).currentProgram.getUniforms();for(let hn=0;hn<dt;hn++)ns.setValue(P,"_gl_DrawID",hn),lt.render(ke[hn]/Cn,Vt[hn])}else if(k.isInstancedMesh)lt.renderInstances(tt,Pt,k.count);else if(X.isInstancedBufferGeometry){const ke=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Vt=Math.min(X.instanceCount,ke);lt.renderInstances(tt,Pt,Vt)}else lt.render(tt,Pt)};function Ie(S,F,X){S.transparent===!0&&S.side===Nn&&S.forceSinglePass===!1?(S.side=Yt,S.needsUpdate=!0,it(S,F,X),S.side=fi,S.needsUpdate=!0,it(S,F,X),S.side=Nn):it(S,F,X)}this.compile=function(S,F,X=null){X===null&&(X=S),f=Ze.get(X),f.init(F),A.push(f),X.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),S!==X&&S.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),f.setupLights();const q=new Set;return S.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const se=k.material;if(se)if(Array.isArray(se))for(let fe=0;fe<se.length;fe++){const be=se[fe];Ie(be,X,k),q.add(be)}else Ie(se,X,k),q.add(se)}),f=A.pop(),q},this.compileAsync=function(S,F,X=null){const q=this.compile(S,F,X);return new Promise(k=>{function se(){if(q.forEach(function(fe){Z.get(fe).currentProgram.isReady()&&q.delete(fe)}),q.size===0){k(S);return}setTimeout(se,10)}B.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Kt=null;function dn(S){Kt&&Kt(S)}function vr(){Jn.stop()}function et(){Jn.start()}const Jn=new fh;Jn.setAnimationLoop(dn),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(S){Kt=S,$.setAnimationLoop(S),S===null?Jn.stop():Jn.start()},$.addEventListener("sessionstart",vr),$.addEventListener("sessionend",et),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(F),F=$.getCamera()),S.isScene===!0&&S.onBeforeRender(b,S,F,T),f=Ze.get(S,A.length),f.init(F),A.push(f),Ne.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),K.setFromProjectionMatrix(Ne),Re=this.localClippingEnabled,oe=ae.init(this.clippingPlanes,Re),m=me.get(S,w.length),m.init(),w.push(m),$.enabled===!0&&$.isPresenting===!0){const se=b.xr.getDepthSensingMesh();se!==null&&Ni(se,F,-1/0,b.sortObjects)}Ni(S,F,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(le,he),ut=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,ut&&de.addToRenderList(m,S),this.info.render.frame++,oe===!0&&ae.beginShadows();const X=f.state.shadowsArray;Ee.render(X,S,F),oe===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,k=m.transmissive;if(f.setupLights(),F.isArrayCamera){const se=F.cameras;if(k.length>0)for(let fe=0,be=se.length;fe<be;fe++){const ce=se[fe];ts(q,k,S,ce)}ut&&de.render(S);for(let fe=0,be=se.length;fe<be;fe++){const ce=se[fe];es(m,S,ce,ce.viewport)}}else k.length>0&&ts(q,k,S,F),ut&&de.render(S),es(m,S,F);T!==null&&E===0&&(R.updateMultisampleRenderTarget(T),R.updateRenderTargetMipmap(T)),S.isScene===!0&&S.onAfterRender(b,S,F),ct.resetDefaultState(),v=-1,x=null,A.pop(),A.length>0?(f=A[A.length-1],oe===!0&&ae.setGlobalState(b.clippingPlanes,f.state.camera)):f=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Ni(S,F,X,q){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||K.intersectsSprite(S)){q&&Pe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ne);const fe=J.update(S),be=S.material;be.visible&&m.push(S,fe,be,X,Pe.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||K.intersectsObject(S))){const fe=J.update(S),be=S.material;if(q&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Pe.copy(S.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Pe.copy(fe.boundingSphere.center)),Pe.applyMatrix4(S.matrixWorld).applyMatrix4(Ne)),Array.isArray(be)){const ce=fe.groups;for(let Be=0,Ge=ce.length;Be<Ge;Be++){const Ae=ce[Be],tt=be[Ae.materialIndex];tt&&tt.visible&&m.push(S,fe,tt,X,Pe.z,Ae)}}else be.visible&&m.push(S,fe,be,X,Pe.z,null)}}const se=S.children;for(let fe=0,be=se.length;fe<be;fe++)Ni(se[fe],F,X,q)}function es(S,F,X,q){const k=S.opaque,se=S.transmissive,fe=S.transparent;f.setupLightsView(X),oe===!0&&ae.setGlobalState(b.clippingPlanes,X),q&&we.viewport(I.copy(q)),k.length>0&&V(k,F,X),se.length>0&&V(se,F,X),fe.length>0&&V(fe,F,X),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function ts(S,F,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[q.id]===void 0&&(f.state.transmissionRenderTarget[q.id]=new Ii(1,1,{generateMipmaps:!0,type:B.has("EXT_color_buffer_half_float")||B.has("EXT_color_buffer_float")?Xn:pi,minFilter:Wn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const se=f.state.transmissionRenderTarget[q.id],fe=q.viewport||I;se.setSize(fe.z*b.transmissionResolutionScale,fe.w*b.transmissionResolutionScale);const be=b.getRenderTarget();b.setRenderTarget(se),b.getClearColor(O),j=b.getClearAlpha(),j<1&&b.setClearColor(16777215,.5),b.clear(),ut&&de.render(X);const ce=b.toneMapping;b.toneMapping=Ri;const Be=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),f.setupLightsView(q),oe===!0&&ae.setGlobalState(b.clippingPlanes,q),V(S,X,q),R.updateMultisampleRenderTarget(se),R.updateRenderTargetMipmap(se),B.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Ae=0,tt=F.length;Ae<tt;Ae++){const rt=F[Ae],Pt=rt.object,wt=rt.geometry,lt=rt.material,ke=rt.group;if(lt.side===Nn&&Pt.layers.test(q.layers)){const Vt=lt.side;lt.side=Yt,lt.needsUpdate=!0,Se(Pt,X,q,wt,lt,ke),lt.side=Vt,lt.needsUpdate=!0,Ge=!0}}Ge===!0&&(R.updateMultisampleRenderTarget(se),R.updateRenderTargetMipmap(se))}b.setRenderTarget(be),b.setClearColor(O,j),Be!==void 0&&(q.viewport=Be),b.toneMapping=ce}function V(S,F,X){const q=F.isScene===!0?F.overrideMaterial:null;for(let k=0,se=S.length;k<se;k++){const fe=S[k],be=fe.object,ce=fe.geometry,Be=q===null?fe.material:q,Ge=fe.group;be.layers.test(X.layers)&&Se(be,F,X,ce,Be,Ge)}}function Se(S,F,X,q,k,se){S.onBeforeRender(b,F,X,q,k,se),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),k.onBeforeRender(b,F,X,q,S,se),k.transparent===!0&&k.side===Nn&&k.forceSinglePass===!1?(k.side=Yt,k.needsUpdate=!0,b.renderBufferDirect(X,F,q,k,S,se),k.side=fi,k.needsUpdate=!0,b.renderBufferDirect(X,F,q,k,S,se),k.side=Nn):b.renderBufferDirect(X,F,q,k,S,se),S.onAfterRender(b,F,X,q,k,se)}function it(S,F,X){F.isScene!==!0&&(F=vt);const q=Z.get(S),k=f.state.lights,se=f.state.shadowsArray,fe=k.state.version,be=Le.getParameters(S,k.state,se,F,X),ce=Le.getProgramCacheKey(be);let Be=q.programs;q.environment=S.isMeshStandardMaterial?F.environment:null,q.fog=F.fog,q.envMap=(S.isMeshStandardMaterial?W:y).get(S.envMap||q.environment),q.envMapRotation=q.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,Be===void 0&&(S.addEventListener("dispose",We),Be=new Map,q.programs=Be);let Ge=Be.get(ce);if(Ge!==void 0){if(q.currentProgram===Ge&&q.lightsStateVersion===fe)return xt(S,be),Ge}else be.uniforms=Le.getUniforms(S),S.onBeforeCompile(be,b),Ge=Le.acquireProgram(be,ce),Be.set(ce,Ge),q.uniforms=be.uniforms;const Ae=q.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ae.clippingPlanes=ae.uniform),xt(S,be),q.needsLights=Rn(S),q.lightsStateVersion=fe,q.needsLights&&(Ae.ambientLightColor.value=k.state.ambient,Ae.lightProbe.value=k.state.probe,Ae.directionalLights.value=k.state.directional,Ae.directionalLightShadows.value=k.state.directionalShadow,Ae.spotLights.value=k.state.spot,Ae.spotLightShadows.value=k.state.spotShadow,Ae.rectAreaLights.value=k.state.rectArea,Ae.ltc_1.value=k.state.rectAreaLTC1,Ae.ltc_2.value=k.state.rectAreaLTC2,Ae.pointLights.value=k.state.point,Ae.pointLightShadows.value=k.state.pointShadow,Ae.hemisphereLights.value=k.state.hemi,Ae.directionalShadowMap.value=k.state.directionalShadowMap,Ae.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ae.spotShadowMap.value=k.state.spotShadowMap,Ae.spotLightMatrix.value=k.state.spotLightMatrix,Ae.spotLightMap.value=k.state.spotLightMap,Ae.pointShadowMap.value=k.state.pointShadowMap,Ae.pointShadowMatrix.value=k.state.pointShadowMatrix),q.currentProgram=Ge,q.uniformsList=null,Ge}function Tt(S){if(S.uniformsList===null){const F=S.currentProgram.getUniforms();S.uniformsList=ro.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function xt(S,F){const X=Z.get(S);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function st(S,F,X,q,k){F.isScene!==!0&&(F=vt),R.resetTextureUnits();const se=F.fog,fe=q.isMeshStandardMaterial?F.environment:null,be=T===null?b.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:$t,ce=(q.isMeshStandardMaterial?W:y).get(q.envMap||fe),Be=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ge=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ae=!!X.morphAttributes.position,tt=!!X.morphAttributes.normal,rt=!!X.morphAttributes.color;let Pt=Ri;q.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Pt=b.toneMapping);const wt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,lt=wt!==void 0?wt.length:0,ke=Z.get(q),Vt=f.state.lights;if(oe===!0&&(Re===!0||S!==x)){const Zt=S===x&&q.id===v;ae.setState(q,S,Zt)}let dt=!1;q.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Vt.state.version||ke.outputColorSpace!==be||k.isBatchedMesh&&ke.batching===!1||!k.isBatchedMesh&&ke.batching===!0||k.isBatchedMesh&&ke.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&ke.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&ke.instancing===!1||!k.isInstancedMesh&&ke.instancing===!0||k.isSkinnedMesh&&ke.skinning===!1||!k.isSkinnedMesh&&ke.skinning===!0||k.isInstancedMesh&&ke.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&ke.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&ke.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&ke.instancingMorph===!1&&k.morphTexture!==null||ke.envMap!==ce||q.fog===!0&&ke.fog!==se||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==ae.numPlanes||ke.numIntersection!==ae.numIntersection)||ke.vertexAlphas!==Be||ke.vertexTangents!==Ge||ke.morphTargets!==Ae||ke.morphNormals!==tt||ke.morphColors!==rt||ke.toneMapping!==Pt||ke.morphTargetsCount!==lt)&&(dt=!0):(dt=!0,ke.__version=q.version);let Cn=ke.currentProgram;dt===!0&&(Cn=it(q,F,k));let ns=!1,hn=!1,js=!1;const Mt=Cn.getUniforms(),xn=ke.uniforms;if(we.useProgram(Cn.program)&&(ns=!0,hn=!0,js=!0),q.id!==v&&(v=q.id,hn=!0),ns||x!==S){we.buffers.depth.getReversed()?(pe.copy(S.projectionMatrix),Fu(pe),Ou(pe),Mt.setValue(P,"projectionMatrix",pe)):Mt.setValue(P,"projectionMatrix",S.projectionMatrix),Mt.setValue(P,"viewMatrix",S.matrixWorldInverse);const rn=Mt.map.cameraPosition;rn!==void 0&&rn.setValue(P,Ke.setFromMatrixPosition(S.matrixWorld)),re.logarithmicDepthBuffer&&Mt.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Mt.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),x!==S&&(x=S,hn=!0,js=!0)}if(k.isSkinnedMesh){Mt.setOptional(P,k,"bindMatrix"),Mt.setOptional(P,k,"bindMatrixInverse");const Zt=k.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),Mt.setValue(P,"boneTexture",Zt.boneTexture,R))}k.isBatchedMesh&&(Mt.setOptional(P,k,"batchingTexture"),Mt.setValue(P,"batchingTexture",k._matricesTexture,R),Mt.setOptional(P,k,"batchingIdTexture"),Mt.setValue(P,"batchingIdTexture",k._indirectTexture,R),Mt.setOptional(P,k,"batchingColorTexture"),k._colorsTexture!==null&&Mt.setValue(P,"batchingColorTexture",k._colorsTexture,R));const vn=X.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&He.update(k,X,Cn),(hn||ke.receiveShadow!==k.receiveShadow)&&(ke.receiveShadow=k.receiveShadow,Mt.setValue(P,"receiveShadow",k.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(xn.envMap.value=ce,xn.flipEnvMap.value=ce.isCubeTexture&&ce.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&F.environment!==null&&(xn.envMapIntensity.value=F.environmentIntensity),hn&&(Mt.setValue(P,"toneMappingExposure",b.toneMappingExposure),ke.needsLights&&yt(xn,js),se&&q.fog===!0&&ve.refreshFogUniforms(xn,se),ve.refreshMaterialUniforms(xn,q,Y,Q,f.state.transmissionRenderTarget[S.id]),ro.upload(P,Tt(ke),xn,R)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ro.upload(P,Tt(ke),xn,R),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Mt.setValue(P,"center",k.center),Mt.setValue(P,"modelViewMatrix",k.modelViewMatrix),Mt.setValue(P,"normalMatrix",k.normalMatrix),Mt.setValue(P,"modelMatrix",k.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Zt=q.uniformsGroups;for(let rn=0,Ro=Zt.length;rn<Ro;rn++){const Ui=Zt[rn];D.update(Ui,Cn),D.bind(Ui,Cn)}}return Cn}function yt(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function Rn(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(S,F,X){Z.get(S.texture).__webglTexture=F,Z.get(S.depthTexture).__webglTexture=X;const q=Z.get(S);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||B.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,F){const X=Z.get(S);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0};const In=P.createFramebuffer();this.setRenderTarget=function(S,F=0,X=0){T=S,M=F,E=X;let q=!0,k=null,se=!1,fe=!1;if(S){const ce=Z.get(S);if(ce.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(P.FRAMEBUFFER,null),q=!1;else if(ce.__webglFramebuffer===void 0)R.setupRenderTarget(S);else if(ce.__hasExternalTextures)R.rebindTextures(S,Z.get(S.texture).__webglTexture,Z.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ae=S.depthTexture;if(ce.__boundDepthTexture!==Ae){if(Ae!==null&&Z.has(Ae)&&(S.width!==Ae.image.width||S.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(S)}}const Be=S.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(fe=!0);const Ge=Z.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ge[F])?k=Ge[F][X]:k=Ge[F],se=!0):S.samples>0&&R.useMultisampledRTT(S)===!1?k=Z.get(S).__webglMultisampledFramebuffer:Array.isArray(Ge)?k=Ge[X]:k=Ge,I.copy(S.viewport),U.copy(S.scissor),N=S.scissorTest}else I.copy(Me).multiplyScalar(Y).floor(),U.copy(Fe).multiplyScalar(Y).floor(),N=Xe;if(X!==0&&(k=In),we.bindFramebuffer(P.FRAMEBUFFER,k)&&q&&we.drawBuffers(S,k),we.viewport(I),we.scissor(U),we.setScissorTest(N),se){const ce=Z.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,ce.__webglTexture,X)}else if(fe){const ce=Z.get(S.texture),Be=F;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,ce.__webglTexture,X,Be)}else if(S!==null&&X!==0){const ce=Z.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ce.__webglTexture,X)}v=-1},this.readRenderTargetPixels=function(S,F,X,q,k,se,fe){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Z.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&fe!==void 0&&(be=be[fe]),be){we.bindFramebuffer(P.FRAMEBUFFER,be);try{const ce=S.texture,Be=ce.format,Ge=ce.type;if(!re.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-q&&X>=0&&X<=S.height-k&&P.readPixels(F,X,q,k,ne.convert(Be),ne.convert(Ge),se)}finally{const ce=T!==null?Z.get(T).__webglFramebuffer:null;we.bindFramebuffer(P.FRAMEBUFFER,ce)}}},this.readRenderTargetPixelsAsync=async function(S,F,X,q,k,se,fe){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Z.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&fe!==void 0&&(be=be[fe]),be){const ce=S.texture,Be=ce.format,Ge=ce.type;if(!re.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=S.width-q&&X>=0&&X<=S.height-k){we.bindFramebuffer(P.FRAMEBUFFER,be);const Ae=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ae),P.bufferData(P.PIXEL_PACK_BUFFER,se.byteLength,P.STREAM_READ),P.readPixels(F,X,q,k,ne.convert(Be),ne.convert(Ge),0);const tt=T!==null?Z.get(T).__webglFramebuffer:null;we.bindFramebuffer(P.FRAMEBUFFER,tt);const rt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Uu(P,rt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ae),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,se),P.deleteBuffer(Ae),P.deleteSync(rt),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,F=null,X=0){S.isTexture!==!0&&(Wi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,S=arguments[1]);const q=Math.pow(2,-X),k=Math.floor(S.image.width*q),se=Math.floor(S.image.height*q),fe=F!==null?F.x:0,be=F!==null?F.y:0;R.setTexture2D(S,0),P.copyTexSubImage2D(P.TEXTURE_2D,X,0,0,fe,be,k,se),we.unbindTexture()};const _n=P.createFramebuffer(),Ct=P.createFramebuffer();this.copyTextureToTexture=function(S,F,X=null,q=null,k=0,se=null){S.isTexture!==!0&&(Wi("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,S=arguments[1],F=arguments[2],se=arguments[3]||0,X=null),se===null&&(k!==0?(Wi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=k,k=0):se=0);let fe,be,ce,Be,Ge,Ae,tt,rt,Pt;const wt=S.isCompressedTexture?S.mipmaps[se]:S.image;if(X!==null)fe=X.max.x-X.min.x,be=X.max.y-X.min.y,ce=X.isBox3?X.max.z-X.min.z:1,Be=X.min.x,Ge=X.min.y,Ae=X.isBox3?X.min.z:0;else{const vn=Math.pow(2,-k);fe=Math.floor(wt.width*vn),be=Math.floor(wt.height*vn),S.isDataArrayTexture?ce=wt.depth:S.isData3DTexture?ce=Math.floor(wt.depth*vn):ce=1,Be=0,Ge=0,Ae=0}q!==null?(tt=q.x,rt=q.y,Pt=q.z):(tt=0,rt=0,Pt=0);const lt=ne.convert(F.format),ke=ne.convert(F.type);let Vt;F.isData3DTexture?(R.setTexture3D(F,0),Vt=P.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(R.setTexture2DArray(F,0),Vt=P.TEXTURE_2D_ARRAY):(R.setTexture2D(F,0),Vt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);const dt=P.getParameter(P.UNPACK_ROW_LENGTH),Cn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),ns=P.getParameter(P.UNPACK_SKIP_PIXELS),hn=P.getParameter(P.UNPACK_SKIP_ROWS),js=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,wt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,wt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Be),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ge),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ae);const Mt=S.isDataArrayTexture||S.isData3DTexture,xn=F.isDataArrayTexture||F.isData3DTexture;if(S.isDepthTexture){const vn=Z.get(S),Zt=Z.get(F),rn=Z.get(vn.__renderTarget),Ro=Z.get(Zt.__renderTarget);we.bindFramebuffer(P.READ_FRAMEBUFFER,rn.__webglFramebuffer),we.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ro.__webglFramebuffer);for(let Ui=0;Ui<ce;Ui++)Mt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Z.get(S).__webglTexture,k,Ae+Ui),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Z.get(F).__webglTexture,se,Pt+Ui)),P.blitFramebuffer(Be,Ge,fe,be,tt,rt,fe,be,P.DEPTH_BUFFER_BIT,P.NEAREST);we.bindFramebuffer(P.READ_FRAMEBUFFER,null),we.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(k!==0||S.isRenderTargetTexture||Z.has(S)){const vn=Z.get(S),Zt=Z.get(F);we.bindFramebuffer(P.READ_FRAMEBUFFER,_n),we.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ct);for(let rn=0;rn<ce;rn++)Mt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,vn.__webglTexture,k,Ae+rn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,vn.__webglTexture,k),xn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Zt.__webglTexture,se,Pt+rn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Zt.__webglTexture,se),k!==0?P.blitFramebuffer(Be,Ge,fe,be,tt,rt,fe,be,P.COLOR_BUFFER_BIT,P.NEAREST):xn?P.copyTexSubImage3D(Vt,se,tt,rt,Pt+rn,Be,Ge,fe,be):P.copyTexSubImage2D(Vt,se,tt,rt,Be,Ge,fe,be);we.bindFramebuffer(P.READ_FRAMEBUFFER,null),we.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else xn?S.isDataTexture||S.isData3DTexture?P.texSubImage3D(Vt,se,tt,rt,Pt,fe,be,ce,lt,ke,wt.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(Vt,se,tt,rt,Pt,fe,be,ce,lt,wt.data):P.texSubImage3D(Vt,se,tt,rt,Pt,fe,be,ce,lt,ke,wt):S.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,se,tt,rt,fe,be,lt,ke,wt.data):S.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,se,tt,rt,wt.width,wt.height,lt,wt.data):P.texSubImage2D(P.TEXTURE_2D,se,tt,rt,fe,be,lt,ke,wt);P.pixelStorei(P.UNPACK_ROW_LENGTH,dt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Cn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ns),P.pixelStorei(P.UNPACK_SKIP_ROWS,hn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,js),se===0&&F.generateMipmaps&&P.generateMipmap(Vt),we.unbindTexture()},this.copyTextureToTexture3D=function(S,F,X=null,q=null,k=0){return S.isTexture!==!0&&(Wi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,q=arguments[1]||null,S=arguments[2],F=arguments[3],k=arguments[4]||0),Wi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,F,X,q,k)},this.initRenderTarget=function(S){Z.get(S).__webglFramebuffer===void 0&&R.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?R.setTextureCube(S,0):S.isData3DTexture?R.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?R.setTexture2DArray(S,0):R.setTexture2D(S,0),we.unbindTexture()},this.resetState=function(){M=0,E=0,T=null,we.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}const ee=4.9,pt=26,Ut=16,Ft=-6.5,Zn={4:{floorNumber:4,floorName:"PISO 4 • ROOFTOP & PENTHOUSE",subtitle:"«The Inner Circle» Terrace",badge:"Penthouse VIP",badgeColor:"amber",description:"Plunge pool basáltica, tumbonas de teca, barra en cobre martillado, pérgola bioclimática y vistas skyline.",floorY:4*ee,funnelStage:"High-Ticket / Membresía Anual",spots:[{id:"pool",name:"Plunge Pool Basáltica",icon:"🏊‍♀️",floor:4,alinaPose:"De pie al borde de la piscina infinita",alinaPos:{x:-2.5,y:4*ee+.06,z:-2.8},alinaRotY:.25,defaultAnim:"Idle",camPos:{x:-1.4,y:4*ee+1.55,z:.4},camTarget:{x:-2.5,y:4*ee+1.38,z:-2.8},macroPos:{x:-.5,y:4*ee+1.1,z:-4.2},macroTarget:{x:-2.2,y:4*ee+.45,z:-6.2},prompt:"Cinematic 85mm medium shot of 28yo Dutch-Latin woman Alina Van Dijk standing beside volcanic stone plunge pool on luxury rooftop deck at sunset, vivid copper red hair with natural soft waves, vivid emerald green eyes, light freckles, crimson lips, black silk resort wrap, turquoise water reflections, golden hour rim light --ar 9:16",script:"Cuando estás arriba, el ruido de abajo se disuelve. Aquí solo entra quien comprende que liderar también exige saber rendirse. [pausa de 2.0s] Bienvenido al círculo íntimo.",brolls:["B-Roll 1: Reflejos dorados sobre el agua turquesa de la plunge pool basáltica.","B-Roll 2: Tumbona de teca con copa de cristal tallado al atardecer."]},{id:"bar",name:"Barra de Cócteles Botánicos",icon:"🍸",floor:4,alinaPose:"Junto a la barra de cobre martillado",alinaPos:{x:4.5,y:4*ee+.06,z:-7.8},alinaRotY:-.35,defaultAnim:"Idle",camPos:{x:3.1,y:4*ee+1.55,z:-4.6},camTarget:{x:4.5,y:4*ee+1.38,z:-7.8},macroPos:{x:4.6,y:4*ee+1.45,z:-7.5},macroTarget:{x:5.5,y:4*ee+1.18,z:-9.5},prompt:"28yo Dutch-Latin woman Alina Van Dijk standing by polished hammered copper rooftop cocktail bar, vivid copper red hair, emerald green eyes, holding crystal martini glass, moody skyline bokeh, warm backlighting, 85mm f/1.4 --ar 9:16",script:"La mente necesita un antídoto contra el exceso de control. Este es el mío. [pausa de 1.5s] Salud por los que no le temen a su propia vulnerabilidad.",brolls:["B-Roll 1: Botellas ámbar retroiluminadas sobre estantería de latón.","B-Roll 2: Macro de copa de martini sobre barra de cobre martillado."]}]},3:{floorNumber:3,floorName:"PISO 3 • THE MIND SANCTUARY",subtitle:"Estudio Clínico & Boudoir",badge:"Trabajo & Terapia",badgeColor:"purple",description:"Estudio de podcast con Shure SM7B, biblioteca clínica, diván de cuero negro y laboratorio sensorial SSC.",floorY:3*ee,funnelStage:"Conversión Fanvue & Telegram VIP",spots:[{id:"podcast",name:"The Mind Sanctuary (Podcast)",icon:"🎙️",floor:3,alinaPose:"Frente al escritorio clínico y Shure SM7B",alinaPos:{x:-4.8,y:3*ee,z:-8.8},alinaRotY:.15,defaultAnim:"Idle",camPos:{x:-4.1,y:3*ee+1.52,z:-5.4},camTarget:{x:-4.8,y:3*ee+1.42,z:-8.8},macroPos:{x:-3.5,y:3*ee+1.35,z:-6.8},macroTarget:{x:-4.5,y:3*ee+1.05,z:-8.2},prompt:"Cinematic medium close-up of 28yo Dutch-Latin woman Alina Van Dijk in dark loft podcast studio SET-01, vivid copper red hair, vivid emerald green eyes, light freckles, Shure SM7B microphone on boom arm, exposed dark brick wall, warm Edison bulb, bookshelf with psychoanalysis books, 85mm f/1.8 --ar 9:16",script:"Llevas diez horas resolviendo problemas de otros... ¿cuándo fue la última vez que alguien tomó el mando por ti? [pausa de 2.0s] Entra. Cierra la puerta. Esta noche decido yo.",brolls:["B-Roll 1: Vapor de café espresso sobre cuaderno de notas clínicas en nogal.","B-Roll 2: Rack focus por lomos antiguos de Bataille y Foucault junto a vaso ámbar."]},{id:"boudoir",name:"Boudoir Velvet & Terapia SSC",icon:"🗝️",floor:3,alinaPose:"En el laboratorio sensorial junto al micrófono 3Dio",alinaPos:{x:4.5,y:3*ee,z:-7.5},alinaRotY:-.25,defaultAnim:"Idle",camPos:{x:3.4,y:3*ee+1.5,z:-4},camTarget:{x:4.5,y:3*ee+1.35,z:-7.5},macroPos:{x:3.6,y:3*ee+1.15,z:-6.2},macroTarget:{x:4.8,y:3*ee+.9,z:-7.9},prompt:"28yo Dutch-Latin woman Alina Van Dijk in luxury chiaroscuro boudoir SET-04, emerald velvet tufted headboard behind her, warm candlelight shadows, silk shibari rope rack in soft bokeh, hypnotic emerald gaze, 85mm prime lens --ar 9:16",script:"El poder real nunca se impone a la fuerza. Se entrega voluntariamente a quien sabe sostenerlo sin juicio. [pausa de 2.0s] ¿Estás listo?",brolls:["B-Roll 1: Paneo macro por madejas de cuerda shibari lila y negra sobre satén.","B-Roll 2: Micrófono binaural 3Dio y antifaz de cuero pulido bajo luz de vela."]}]},2:{floorNumber:2,floorName:"PISO 2 • RESIDENCIA PRIVADA",subtitle:"Hogar Privado («Donde Nace Todo»)",badge:"Residencia Alina",badgeColor:"copper",description:"4 estancias divididas con tabiques reales: tocador vanity con 12 bombillas, baño spa con tina basáltica, cocina de autor y suite principal.",floorY:2*ee,funnelStage:"Top-Funnel / Intimidad Cotidiana",spots:[{id:"vanity",name:"El Tocador Vanity & Vestidor",icon:"💄",floor:2,alinaPose:"Frente al tocador iluminado y espejo vanity",alinaPos:{x:-.4,y:2*ee,z:-10.8},alinaRotY:.12,defaultAnim:"Idle",camPos:{x:.25,y:2*ee+1.5,z:-8.1},camTarget:{x:-.4,y:2*ee+1.38,z:-10.8},macroPos:{x:.45,y:2*ee+1.15,z:-11.6},macroTarget:{x:-.35,y:2*ee+.85,z:-13.1},prompt:"Intimate cinematic shot of 28yo Dutch-Latin woman Alina Van Dijk by luxury dark walnut vanity table in Piso 2 suite, vivid copper red hair with soft waves, vivid emerald green eyes, light natural freckles, crimson lips, glowing round vanity bulbs in mirror behind her, black silk outfit, 85mm f/1.4 --ar 9:16",script:"Te pasas el día sosteniendo el personaje... fingiendo que no pesa. [pausa de 2.0s] Frente a este espejo solo existe la verdad. Déjame ver quién eres cuando nadie te está evaluando.",brolls:["B-Roll 1: Macro slider sobre labial carmesí dorado y frascos ámbar de perfume.","B-Roll 2: Aro de bombillas cálidas reflejado en el espejo biselado."]},{id:"bath",name:"Baño Spa & Tina Monolítica",icon:"🛁",floor:2,alinaPose:"Recostada en tina basáltica entre velas",alinaPos:{x:-9,y:2*ee+.68,z:-7.8},alinaRotY:.35,defaultAnim:"Laying",camPos:{x:-6.8,y:2*ee+1.65,z:-4.6},camTarget:{x:-9,y:2*ee+.72,z:-7.8},macroPos:{x:-7.4,y:2*ee+1.1,z:-6.2},macroTarget:{x:-8.8,y:2*ee+.55,z:-7.5},prompt:"28yo Dutch-Latin woman Alina Van Dijk reclining in freestanding black basalt stone bathtub filled with warm water, copper hair pinned up loosely, emerald green eyes, surrounded by flickering scented candles and frosted glass partition, chiaroscuro luxury spa, 85mm f/1.8 --ar 9:16",script:"El cuerpo guarda todo lo que la mente reprime. Cierra los ojos... siente el peso soltarse en el agua. [pausa de 2.0s] Yo me encargo del resto.",brolls:["B-Roll 1: Llamas de velas aromáticas reflejadas sobre piedra basáltica negra.","B-Roll 2: Bandeja de teca con sales minerales y toallas de algodón enrolladas."]},{id:"kitchen",name:"Cocina de Autor & Isla Mármol",icon:"☕",floor:2,alinaPose:"Junto a la isla de mármol Nero Marquina",alinaPos:{x:6,y:2*ee,z:-7.6},alinaRotY:-.45,defaultAnim:"Idle",camPos:{x:4.5,y:2*ee+1.5,z:-4.2},camTarget:{x:6.2,y:2*ee+1.35,z:-7.6},macroPos:{x:5.5,y:2*ee+1.25,z:-6.6},macroTarget:{x:7.2,y:2*ee+.98,z:-8.2},prompt:"28yo Dutch-Latin woman Alina Van Dijk standing beside black Nero Marquina marble kitchen island, copper red waves, emerald eyes, brass pendant lights overhead, morning espresso cup on marble counter, 85mm f/1.8 --ar 9:16",script:"Antes de que empiece el caos de tu agenda... regálate tres minutos de silencio absoluto. [pausa de 1.5s] Respira conmigo.",brolls:["B-Roll 1: Vapor ascendiendo desde taza de espresso sobre mármol Nero Marquina.","B-Roll 2: Lámparas colgantes de latón sobre copas de cristal suspendidas."]},{id:"suite",name:"Suite Principal & Balcón",icon:"🛏️",floor:2,alinaPose:"En la cama King de lino carbón",alinaPos:{x:-.5,y:2*ee+.92,z:-3.2},alinaRotY:0,defaultAnim:"Laying",camPos:{x:1.4,y:2*ee+1.68,z:.1},camTarget:{x:-.5,y:2*ee+.95,z:-3.2},macroPos:{x:-2.2,y:2*ee+1.25,z:-1.6},macroTarget:{x:-2.2,y:2*ee+.85,z:-4.2},prompt:"28yo Dutch-Latin woman Alina Van Dijk resting on king bed dressed in charcoal linen sheets, emerald velvet headboard, warm bedside table lamps, Eixample balcony doors behind, 85mm f/1.4 --ar 9:16",script:"Apaga la pantalla. Deja de repasar mentalmente tus pendientes de mañana. [pausa de 2.0s] Tu mente necesita rendirse para poder renacer.",brolls:["B-Roll 1: Lámpara de mesilla proyectando luz ámbar sobre lino carbón.","B-Roll 2: Copa de vino tinto en mesa del balcón modernista al atardecer."]}]},1:{floorNumber:1,floorName:"PISO 1 • LE VELVET CAFÉ",subtitle:"Cafetería Especialidad & Balcón",badge:"Lifestyle Diurno",badgeColor:"emerald",description:"Barra de roble con cafetera La Marzocco en cobre, vitrina de repostería, 4 mesas Carrara con sillas Thonet y balcón.",floorY:1*ee,funnelStage:"Descubrimiento & Street Lifestyle",spots:[{id:"cafe",name:"Barra La Marzocco & Mesas Carrara",icon:"🥐",floor:1,alinaPose:"De pie junto a las mesas de mármol Carrara",alinaPos:{x:-2,y:1*ee,z:-3.5},alinaRotY:.2,defaultAnim:"Idle",camPos:{x:-.9,y:1*ee+1.5,z:-.3},camTarget:{x:-2,y:1*ee+1.35,z:-3.5},macroPos:{x:-1.4,y:1*ee+1.45,z:-6.5},macroTarget:{x:0,y:1*ee+1.25,z:-9.5},prompt:"28yo Dutch-Latin woman Alina Van Dijk inside boutique Barcelona specialty coffee lounge, Carrara marble bistro tables, oak bar with copper La Marzocco espresso machine behind, soft morning sunlight, 85mm f/2.0 --ar 9:16",script:"La productividad sin introspección es solo ansiedad disfrazada de éxito. [pausa de 1.5s] ¿Tú qué buscas hoy?",brolls:["B-Roll 1: Cafetera La Marzocco en cobre pulido extrayendo espresso.","B-Roll 2: Mesa bistró de mármol blanco junto al ventanal del Eixample."]},{id:"walk_cafe",name:"Pasarela Interior Café (Walking)",icon:"🚶‍♀️",floor:1,alinaPose:"Caminando entre mesas hacia el balcón",alinaPos:{x:2.8,y:1*ee,z:-3},alinaRotY:-.15,defaultAnim:"Walk",camPos:{x:2.2,y:1*ee+1.48,z:.4},camTarget:{x:2.8,y:1*ee+1.25,z:-3},macroPos:{x:4.5,y:1*ee+1.1,z:-2.2},macroTarget:{x:3.5,y:1*ee+.78,z:-3.2},prompt:"Walking selfie style shot of 28yo Dutch-Latin woman Alina Van Dijk walking gracefully across specialty coffee lounge toward wrought-iron balcony, natural copper hair movement, warm daylight --ar 9:16",script:"Tres minutos para ordenar la cabeza antes de entrar en sesión.",brolls:["B-Roll 1: Hojas de monstera y luz natural atravesando el balcón.","B-Roll 2: Vitrina iluminada con repostería artesanal."]}]},0:{floorNumber:0,floorName:"PLANTA BAJA • CABARET & PARKING",subtitle:"Nocturne Speakeasy & Exterior",badge:"Portado de Unity",badgeColor:"rose",description:"Parking exterior 28m×18m con 8 líneas amarillas, 4 coches, 3 farolas, marquesina VIP con alfombra roja, pista neón, barra y piano de cola.",floorY:0,funnelStage:"Mundo Exterior / Viral Dance & Reels",spots:[{id:"cabaret",name:"Pista Neón & Piano de Cola",icon:"🎷",floor:0,alinaPose:"Bailando en el escenario junto al piano",alinaPos:{x:0,y:.45,z:-10.5},alinaRotY:0,defaultAnim:"Rumba",camPos:{x:1.5,y:1.85,z:-6.8},camTarget:{x:0,y:1.45,z:-10.5},macroPos:{x:-3.5,y:1.55,z:-7},macroTarget:{x:-5.8,y:.95,z:-9.5},prompt:"28yo Dutch-Latin woman Alina Van Dijk on elevated wood stage inside Nocturne speakeasy club, crimson velvet curtains, glowing cyan floor rim, grand black lacquered piano nearby, dramatic chiaroscuro spotlights, 85mm f/1.4 --ar 9:16",script:"Las mejores conversaciones ocurren cuando la ciudad se va a dormir y caen todas las máscaras. [pausa de 2.0s] ¿Entras?",brolls:["B-Roll 1: Teclas blancas y negras del piano de cola bajo foco cálido.","B-Roll 2: Copa iluminada sobre mesa de cóctel con vela parpadeante."]},{id:"parking",name:"Parking Exterior & Alfombra VIP",icon:"🚗",floor:0,alinaPose:"Llegando por la alfombra roja bajo el neón NOCTURNE",alinaPos:{x:0,y:.16,z:3.4},alinaRotY:0,defaultAnim:"Walk",camPos:{x:1.8,y:1.55,z:7.4},camTarget:{x:0,y:1.25,z:3.4},macroPos:{x:-3.2,y:1.35,z:9.2},macroTarget:{x:-3.8,y:.7,z:12.5},prompt:"Full body evening street shot of 28yo Dutch-Latin woman Alina Van Dijk walking on red carpet under glowing magenta NOCTURNE marquee sign, parked luxury cars and glowing streetlamps on wet asphalt behind, 85mm f/1.8 --ar 9:16",script:"Deja el ruido afuera. Aquí dentro las reglas las pongo yo.",brolls:["B-Roll 1: Reflejo de farola cálida y neón magenta sobre capó negro brillante.","B-Roll 2: Postes dorados y cordón de terciopelo en la entrada del club."]}]}};class z_ extends th{constructor(){super();const e=new Di;e.deleteAttribute("uv");const t=new Ue({side:Yt}),n=new Ue,i=new pn(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new Oe(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new Oe(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new Oe(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new Oe(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new Oe(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const d=new Oe(e,n);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);const h=new Oe(e,n);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);const u=new Oe(e,xs(50));u.position.set(-16.116,14.37,8.208),u.scale.set(.1,2.428,2.739),this.add(u);const p=new Oe(e,xs(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const g=new Oe(e,xs(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new Oe(e,xs(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const m=new Oe(e,xs(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const f=new Oe(e,xs(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function xs(s){const e=new jn;return e.color.setScalar(s),e}class H_ extends Uf{constructor(e){super(e),this.type=Xn}parse(e){const o=function(T,v){switch(T){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(v||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(v||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(v||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(v||""))}},h=function(T,v,x){v=v||1024;let U=T.pos,N=-1,O=0,j="",H=String.fromCharCode.apply(null,new Uint16Array(T.subarray(U,U+128)));for(;0>(N=H.indexOf(`
`))&&O<v&&U<T.byteLength;)j+=H,O+=H.length,U+=128,H+=String.fromCharCode.apply(null,new Uint16Array(T.subarray(U,U+128)));return-1<N?(T.pos+=O+N+1,j+H.slice(0,N)):!1},u=function(T){const v=/^#\?(\S+)/,x=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,I=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,U=/^\s*FORMAT=(\S+)\s*$/,N=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,O={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let j,H;for((T.pos>=T.byteLength||!(j=h(T)))&&o(1,"no header found"),(H=j.match(v))||o(3,"bad initial token"),O.valid|=1,O.programtype=H[1],O.string+=j+`
`;j=h(T),j!==!1;){if(O.string+=j+`
`,j.charAt(0)==="#"){O.comments+=j+`
`;continue}if((H=j.match(x))&&(O.gamma=parseFloat(H[1])),(H=j.match(I))&&(O.exposure=parseFloat(H[1])),(H=j.match(U))&&(O.valid|=2,O.format=H[1]),(H=j.match(N))&&(O.valid|=4,O.height=parseInt(H[1],10),O.width=parseInt(H[2],10)),O.valid&2&&O.valid&4)break}return O.valid&2||o(3,"missing format specifier"),O.valid&4||o(3,"missing image size specifier"),O},p=function(T,v,x){const I=v;if(I<8||I>32767||T[0]!==2||T[1]!==2||T[2]&128)return new Uint8Array(T);I!==(T[2]<<8|T[3])&&o(3,"wrong scanline width");const U=new Uint8Array(4*v*x);U.length||o(4,"unable to allocate buffer space");let N=0,O=0;const j=4*I,H=new Uint8Array(4),Q=new Uint8Array(j);let Y=x;for(;Y>0&&O<T.byteLength;){O+4>T.byteLength&&o(1),H[0]=T[O++],H[1]=T[O++],H[2]=T[O++],H[3]=T[O++],(H[0]!=2||H[1]!=2||(H[2]<<8|H[3])!=I)&&o(3,"bad rgbe scanline format");let le=0,he;for(;le<j&&O<T.byteLength;){he=T[O++];const Fe=he>128;if(Fe&&(he-=128),(he===0||le+he>j)&&o(3,"bad scanline data"),Fe){const Xe=T[O++];for(let K=0;K<he;K++)Q[le++]=Xe}else Q.set(T.subarray(O,O+he),le),le+=he,O+=he}const Me=I;for(let Fe=0;Fe<Me;Fe++){let Xe=0;U[N]=Q[Fe+Xe],Xe+=I,U[N+1]=Q[Fe+Xe],Xe+=I,U[N+2]=Q[Fe+Xe],Xe+=I,U[N+3]=Q[Fe+Xe],N+=4}Y--}return U},g=function(T,v,x,I){const U=T[v+3],N=Math.pow(2,U-128)/255;x[I+0]=T[v+0]*N,x[I+1]=T[v+1]*N,x[I+2]=T[v+2]*N,x[I+3]=1},_=function(T,v,x,I){const U=T[v+3],N=Math.pow(2,U-128)/255;x[I+0]=Rr.toHalfFloat(Math.min(T[v+0]*N,65504)),x[I+1]=Rr.toHalfFloat(Math.min(T[v+1]*N,65504)),x[I+2]=Rr.toHalfFloat(Math.min(T[v+2]*N,65504)),x[I+3]=Rr.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const f=u(m),w=f.width,A=f.height,b=p(m.subarray(m.pos),w,A);let C,M,E;switch(this.type){case ln:E=b.length/4;const T=new Float32Array(E*4);for(let x=0;x<E;x++)g(b,x*4,T,x*4);C=T,M=ln;break;case Xn:E=b.length/4;const v=new Uint16Array(E*4);for(let x=0;x<E;x++)_(b,x*4,v,x*4);C=v,M=Xn;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:w,height:A,data:C,header:f.string,gamma:f.gamma,exposure:f.exposure,type:M}}setDataType(e){return this.type=e,this}load(e,t,n,i){function r(o,a){switch(o.type){case ln:case Xn:o.colorSpace=$t,o.minFilter=Ht,o.magFilter=Ht,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,r,n,i)}}class V_{constructor(e,t){this.scene=e,this.renderer=t,this.lights=[],this.flickerCandles=[],this.emissiveRefs=[],this.mode="night",this.hdrDayRT=null,this.hdrNightRT=null,this.depthFogDisabled=!1,this._setupEnvironment(),this._setupSkyDome(),this._setupSkylineSilhouettes(),this._setupGlobalLights(),this._loadPhotographicHDRIs()}_loadPhotographicHDRIs(){const e=new _o(this.renderer);e.compileEquirectangularShader();const t=new H_;t.load("./polyhaven/hdri/hdri_night.hdr",n=>{n.mapping=dr,this.hdrNightRT=e.fromEquirectangular(n),n.dispose(),this.mode==="night"&&!this.depthFogDisabled&&this._applyHDRI("night")},void 0,n=>console.warn("[HDRI Night]",n)),t.load("./polyhaven/hdri/hdri_day.hdr",n=>{n.mapping=dr,this.hdrDayRT=e.fromEquirectangular(n),n.dispose(),this.mode==="day"&&!this.depthFogDisabled&&this._applyHDRI("day")},void 0,n=>console.warn("[HDRI Day]",n))}_applyHDRI(e){const t=e==="day"?this.hdrDayRT:this.hdrNightRT;t&&(this.scene.environment=t.texture,this.scene.background=t.texture,this.scene.backgroundBlurriness=.04,this.scene.backgroundIntensity=e==="day"?1.05:.85,this.scene.environmentIntensity=e==="day"?1:.72,this.skyDome&&(this.skyDome.visible=!1))}_setupEnvironment(){this.renderer.toneMapping=Rd,this.renderer.toneMappingExposure=1.18,this.renderer.outputColorSpace=At;const e=new _o(this.renderer);e.compileEquirectangularShader();const t=new z_;this.envRT=e.fromScene(t,.04),this.scene.environment=this.envRT.texture,this.scene.environmentIntensity=.55,t.dispose(),e.dispose()}_setupSkyDome(){const e=new Yi(140,32,24);this.skyUniforms={topColor:{value:new De(395539)},midColor:{value:new De(1317677)},horizonColor:{value:new De(2628646)},sunDir:{value:new L(.55,.35,-.75).normalize()},sunStrength:{value:0},starOpacity:{value:1}};const t=new kn({side:Yt,depthWrite:!1,uniforms:this.skyUniforms,vertexShader:`
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
      `});this.skyDome=new Oe(e,t),this.scene.add(this.skyDome)}_setupSkylineSilhouettes(){this.skylineGroup=new Wt;const e=new Ue({color:1053466,roughness:.9,metalness:.1}),t=document.createElement("canvas");t.width=128,t.height=256;const n=t.getContext("2d");n.fillStyle="#0c0e14",n.fillRect(0,0,128,256);for(let l=8;l<248;l+=16)for(let c=8;c<120;c+=16)(c*7+l*13)%5===0&&(n.fillStyle=(c+l)%3===0?"#fbbf24":"#7dd3fc",n.fillRect(c,l,8,8));const i=new rh(t);i.colorSpace=At,i.wrapS=An,i.wrapT=An,i.repeat.set(2,4),this.skylineMat=new Ue({color:1185054,emissiveMap:i,emissive:new De(16766888),emissiveIntensity:.9,roughness:.85});const r=26;for(let l=0;l<r;l++){const c=l/r*Math.PI*2,d=52+l%3*10,h=6+l%4*2.5,u=14+l%5*6.5,p=6+(l+1)%3*2.2,g=new Oe(new Di(h,u,p),l%2===0?this.skylineMat:e);g.position.set(Math.cos(c)*d,u/2-1,Math.sin(c)*d),g.rotation.y=-c,this.skylineGroup.add(g)}const o=new Ue({color:1184793,roughness:.95,metalness:.05}),a=new Oe(new bo(110,48),o);a.rotation.x=-Math.PI/2,a.position.y=-.32,a.receiveShadow=!0,this.skylineGroup.add(a),this.scene.add(this.skylineGroup)}_setupGlobalLights(){this.hemiLight=new Ff(9414870,2497815,.75),this.scene.add(this.hemiLight),this.dirLight=new uh(16764825,1.2),this.dirLight.position.set(22,26,20),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.set(2048,2048),this.dirLight.shadow.camera.near=2,this.dirLight.shadow.camera.far=95,this.dirLight.shadow.camera.left=-28,this.dirLight.shadow.camera.right=28,this.dirLight.shadow.camera.top=28,this.dirLight.shadow.camera.bottom=-28,this.dirLight.shadow.bias=-5e-4,this.scene.add(this.dirLight)}registerLight(e,{dayIntensity:t=.8,nightIntensity:n=2,flicker:i=!1}={}){this.lights.push({light:e,dayIntensity:t,nightIntensity:n,baseNight:n}),i&&this.flickerCandles.push({light:e,dayIntensity:t,nightIntensity:n,phase:Math.random()*10}),e.intensity=this.mode==="day"?t:n}registerEmissive(e,{dayIntensity:t=.2,nightIntensity:n=1.6}={}){this.emissiveRefs.push({material:e,dayIntensity:t,nightIntensity:n}),e.emissiveIntensity=this.mode==="day"?t:n}setMode(e){this.mode=e,e==="day"?(this.skyUniforms.topColor.value.setHex(2644124),this.skyUniforms.midColor.value.setHex(8168143),this.skyUniforms.horizonColor.value.setHex(15969910),this.skyUniforms.sunStrength.value=1,this.skyUniforms.starOpacity.value=0,this.scene.fog=new fo(14333854,.0055),this.scene.environmentIntensity=.95,this.hemiLight.color.setHex(16770764),this.hemiLight.groundColor.setHex(4930352),this.hemiLight.intensity=1.05,this.dirLight.color.setHex(16765593),this.dirLight.position.set(24,17,22),this.dirLight.intensity=2.8,this.skylineMat.emissiveIntensity=.08,this.renderer.toneMappingExposure=1.15):(this.skyUniforms.topColor.value.setHex(329489),this.skyUniforms.midColor.value.setHex(1120041),this.skyUniforms.horizonColor.value.setHex(2562339),this.skyUniforms.sunStrength.value=0,this.skyUniforms.starOpacity.value=1,this.scene.fog=new fo(658710,.009),this.scene.environmentIntensity=.48,this.hemiLight.color.setHex(3821434),this.hemiLight.groundColor.setHex(1971472),this.hemiLight.intensity=.65,this.dirLight.color.setHex(8037608),this.dirLight.position.set(-18,28,22),this.dirLight.intensity=.65,this.skylineMat.emissiveIntensity=1.1,this.renderer.toneMappingExposure=1.25);for(const t of this.lights)t.light.intensity=e==="day"?t.dayIntensity:t.nightIntensity;for(const t of this.emissiveRefs)t.material.emissiveIntensity=e==="day"?t.dayIntensity:t.nightIntensity;this.depthFogDisabled||(e==="day"&&this.hdrDayRT||e==="night"&&this.hdrNightRT?this._applyHDRI(e):(this.envRT&&(this.scene.environment=this.envRT.texture),this.scene.background=null,this.skyDome&&(this.skyDome.visible=!0)))}update(e){for(const t of this.flickerCandles){const n=this.mode==="day"?t.dayIntensity:t.nightIntensity;t.light.intensity=n*(.85+Math.sin(e*9.5+t.phase)*.1+Math.sin(e*17+t.phase)*.05)}}setDepthFogDisabled(e){this.depthFogDisabled=e,e?(this.scene.fog=null,this.scene.background=null,this.skyDome&&(this.skyDome.visible=!1)):this.setMode(this.mode)}}function dd(s,e){if(e===au)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===il||e===Vd){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===il)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class xh extends Qi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new q_(t)}),this.register(function(t){return new Y_(t)}),this.register(function(t){return new ix(t)}),this.register(function(t){return new sx(t)}),this.register(function(t){return new rx(t)}),this.register(function(t){return new K_(t)}),this.register(function(t){return new Z_(t)}),this.register(function(t){return new J_(t)}),this.register(function(t){return new Q_(t)}),this.register(function(t){return new j_(t)}),this.register(function(t){return new ex(t)}),this.register(function(t){return new $_(t)}),this.register(function(t){return new nx(t)}),this.register(function(t){return new tx(t)}),this.register(function(t){return new W_(t)}),this.register(function(t){return new ox(t)}),this.register(function(t){return new ax(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=cr.extractUrlBase(e);o=cr.resolveURL(c,this.path)}else o=cr.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Ul(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(d){t(d),r.manager.itemEnd(e)},a)}catch(d){a(d)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===vh){try{o[Qe.KHR_BINARY_GLTF]=new lx(e)}catch(h){i&&i(h);return}r=JSON.parse(o[Qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Mx(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const h=this.pluginCallbacks[d](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let d=0;d<r.extensionsUsed.length;++d){const h=r.extensionsUsed[d],u=r.extensionsRequired||[];switch(h){case Qe.KHR_MATERIALS_UNLIT:o[h]=new X_;break;case Qe.KHR_DRACO_MESH_COMPRESSION:o[h]=new cx(r,this.dracoLoader);break;case Qe.KHR_TEXTURE_TRANSFORM:o[h]=new dx;break;case Qe.KHR_MESH_QUANTIZATION:o[h]=new hx;break;default:u.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function G_(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class W_{constructor(e){this.parser=e,this.name=Qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const d=new De(16777215);l.color!==void 0&&d.setRGB(l.color[0],l.color[1],l.color[2],$t);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new uh(d),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new pn(d),c.distance=h;break;case"spot":c=new hh(d),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),oi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class X_{constructor(){this.name=Qe.KHR_MATERIALS_UNLIT}getMaterialType(){return jn}extendParams(e,t,n){const i=[];e.color=new De(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],$t),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,At))}return Promise.all(i)}}class j_{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class q_{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ce(a,a)}return Promise.all(r)}}class Y_{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class $_{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class K_{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new De(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],$t)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,At)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class Z_{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class J_{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new De().setRGB(a[0],a[1],a[2],$t),Promise.all(r)}}class Q_{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class ex{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new De().setRGB(a[0],a[1],a[2],$t),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,At)),Promise.all(r)}}class tx{constructor(e){this.parser=e,this.name=Qe.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class nx{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:tn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class ix{constructor(e){this.parser=e,this.name=Qe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class sx{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class rx{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ox{constructor(e){this.name=Qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,d=i.count,h=i.byteStride,u=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(d,h,u,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(d*h);return o.decodeGltfBuffer(new Uint8Array(p),d,h,u,i.mode,i.filter),p})})}else return null}}class ax{constructor(e){this.name=Qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==En.TRIANGLES&&c.mode!==En.TRIANGLE_STRIP&&c.mode!==En.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(d=>(l[c]=d,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const d=c.pop(),h=d.isGroup?d.children:[d],u=c[0].count,p=[];for(const g of h){const _=new je,m=new L,f=new gn,w=new L(1,1,1),A=new gf(g.geometry,g.material,u);for(let b=0;b<u;b++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,b),l.SCALE&&w.fromBufferAttribute(l.SCALE,b),A.setMatrixAt(b,_.compose(m,f,w));for(const b in l)if(b==="_COLOR_0"){const C=l[b];A.instanceColor=new rl(C.array,C.itemSize,C.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,l[b]);bt.prototype.copy.call(A,g),this.parser.assignFinalMaterial(A),p.push(A)}return d.isGroup?(d.clear(),d.add(...p),d):p[0]}))}}const vh="glTF",tr=12,hd={JSON:1313821514,BIN:5130562};class lx{constructor(e){this.name=Qe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,tr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==vh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-tr,r=new DataView(e,tr);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===hd.JSON){const c=new Uint8Array(e,tr+o,a);this.content=n.decode(c)}else if(l===hd.BIN){const c=tr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class cx{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const d in o){const h=cl[d]||d.toLowerCase();a[h]=o[d]}for(const d in e.attributes){const h=cl[d]||d.toLowerCase();if(o[d]!==void 0){const u=n.accessors[e.attributes[d]],p=Ps[u.componentType];c[h]=p.name,l[h]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(d){return new Promise(function(h,u){i.decodeDracoFile(d,function(p){for(const g in p.attributes){const _=p.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(p)},a,c,$t,u)})})}}class dx{constructor(){this.name=Qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class hx{constructor(){this.name=Qe.KHR_MESH_QUANTIZATION}}class yh extends gr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,d=i-t,h=(n-t)/d,u=h*h,p=u*h,g=e*c,_=g-c,m=-2*p+3*u,f=p-u,w=1-m,A=f-u+h;for(let b=0;b!==a;b++){const C=o[_+b+a],M=o[_+b+l]*d,E=o[g+b+a],T=o[g+b]*d;r[b]=w*C+A*M+m*E+f*T}return r}}const ux=new gn;class fx extends yh{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return ux.fromArray(r).normalize().toArray(r),r}}const En={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ps={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ud={9728:nn,9729:Ht,9984:Cd,9985:Qr,9986:sr,9987:Wn},fd={33071:Gn,33648:ao,10497:An},la={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},cl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Mi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},px={CUBICSPLINE:void 0,LINEAR:fr,STEP:ur},ca={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function mx(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ue({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:fi})),s.DefaultMaterial}function Vi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function oi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function gx(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,d=e.length;c<d;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,d=e.length;c<d;c++){const h=e[c];if(n){const u=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(u)}if(i){const u=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(u)}if(r){const u=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(u)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const d=c[0],h=c[1],u=c[2];return n&&(s.morphAttributes.position=d),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=u),s.morphTargetsRelative=!0,s})}function _x(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function xx(s){let e;const t=s.extensions&&s.extensions[Qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+da(t.attributes):e=s.indices+":"+da(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+da(s.targets[n]);return e}function da(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function dl(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function vx(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const yx=new je;class Mx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new G_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new dh(this.options.manager):this.textureLoader=new zf(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ul(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Vi(r,a,i),oi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,d]of o.children.entries())r(d,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Qe.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(cr.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=la[i.type],a=Ps[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new sn(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=la[i.type],c=Ps[i.componentType],d=c.BYTES_PER_ELEMENT,h=d*l,u=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(p&&p!==h){const f=Math.floor(u/p),w="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let A=t.cache.get(w);A||(_=new c(a,f*p,i.count*p/d),A=new hf(_,p/d),t.cache.add(w,A)),m=new Cl(A,l,u%p/d,g)}else a===null?_=new c(i.count*l):_=new c(a,u,i.count*l),m=new sn(_,l,g);if(i.sparse!==void 0){const f=la.SCALAR,w=Ps[i.sparse.indices.componentType],A=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,C=new w(o[1],A,i.sparse.count*f),M=new c(o[2],b,i.sparse.count*l);a!==null&&(m=new sn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let E=0,T=C.length;E<T;E++){const v=C[E];if(m.setX(v,M[E*l]),l>=2&&m.setY(v,M[E*l+1]),l>=3&&m.setZ(v,M[E*l+2]),l>=4&&m.setW(v,M[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(d){d.flipY=!1,d.name=o.name||a.name||"",d.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(d.name=a.uri);const u=(r.samplers||{})[o.sampler]||{};return d.magFilter=ud[u.magFilter]||Ht,d.minFilter=ud[u.minFilter]||Wn,d.wrapS=fd[u.wrapS]||An,d.wrapT=fd[u.wrapT]||An,d.generateMipmaps=!d.isCompressedTexture&&d.minFilter!==nn&&d.minFilter!==Ht,i.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const u=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(u),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(l).then(function(h){return new Promise(function(u,p){let g=u;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Ot(_);m.needsUpdate=!0,u(m)}),t.load(cr.resolveURL(h,r.path),g,void 0,p)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),oi(h,o),h.userData.mimeType=o.mimeType||vx(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=d,d}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Qe.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Qe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Qe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new sh,qn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ih,qn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ue}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Qe.KHR_MATERIALS_UNLIT]){const h=i[Qe.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new De(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const u=h.baseColorFactor;a.color.setRGB(u[0],u[1],u[2],$t),a.opacity=u[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,At)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Nn);const d=r.alphaMode||ca.OPAQUE;if(d===ca.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,d===ca.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==jn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ce(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==jn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==jn){const h=r.emissiveFactor;a.emissive=new De().setRGB(h[0],h[1],h[2],$t)}return r.emissiveTexture!==void 0&&o!==jn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,At)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),oi(h,r),t.associations.set(h,{materials:e}),r.extensions&&Vi(i,h,r),h})}createUniqueName(e){const t=ht.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return pd(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],d=xx(c),h=i[d];if(h)o.push(h.promise);else{let u;c.extensions&&c.extensions[Qe.KHR_DRACO_MESH_COMPRESSION]?u=r(c):u=pd(new cn,c,t),i[d]={primitive:c,promise:u},o.push(u)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const d=o[l].material===void 0?mx(this.cache):this.getDependency("material",o[l].material);a.push(d)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),d=l[l.length-1],h=[];for(let p=0,g=d.length;p<g;p++){const _=d[p],m=o[p];let f;const w=c[p];if(m.mode===En.TRIANGLES||m.mode===En.TRIANGLE_STRIP||m.mode===En.TRIANGLE_FAN||m.mode===void 0)f=r.isSkinnedMesh===!0?new ff(_,w):new Oe(_,w),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===En.TRIANGLE_STRIP?f.geometry=dd(f.geometry,Vd):m.mode===En.TRIANGLE_FAN&&(f.geometry=dd(f.geometry,il));else if(m.mode===En.LINES)f=new vf(_,w);else if(m.mode===En.LINE_STRIP)f=new Nl(_,w);else if(m.mode===En.LINE_LOOP)f=new yf(_,w);else if(m.mode===En.POINTS)f=new Mf(_,w);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&_x(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),oi(f,r),m.extensions&&Vi(i,f,m),t.assignFinalMaterial(f),h.push(f)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return r.extensions&&Vi(i,h[0],r),h[0];const u=new Wt;r.extensions&&Vi(i,u,r),t.associations.set(u,{meshes:e});for(let p=0,g=h.length;p<g;p++)u.add(h[p]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new qt(uo.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ol(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),oi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,d=o.length;c<d;c++){const h=o[c];if(h){a.push(h);const u=new je;r!==null&&u.fromArray(r.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ll(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],d=[];for(let h=0,u=i.channels.length;h<u;h++){const p=i.channels[h],g=i.samplers[p.sampler],_=p.target,m=_.node,f=i.parameters!==void 0?i.parameters[g.input]:g.input,w=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",w)),c.push(g),d.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(d)]).then(function(h){const u=h[0],p=h[1],g=h[2],_=h[3],m=h[4],f=[];for(let w=0,A=u.length;w<A;w++){const b=u[w],C=p[w],M=g[w],E=_[w],T=m[w];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const v=n._createAnimationTracks(b,C,M,E,T);if(v)for(let x=0;x<v.length;x++)f.push(v[x])}return new al(r,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,d=a.length;c<d;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const d=c[0],h=c[1],u=c[2];u!==null&&d.traverse(function(p){p.isSkinnedMesh&&p.bind(u,yx)});for(let p=0,g=h.length;p<g;p++)d.add(h[p]);return d})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let d;if(r.isBone===!0?d=new nh:c.length>1?d=new Wt:c.length===1?d=c[0]:d=new bt,d!==c[0])for(let h=0,u=c.length;h<u;h++)d.add(c[h]);if(r.name&&(d.userData.name=r.name,d.name=o),oi(d,r),r.extensions&&Vi(n,d,r),r.matrix!==void 0){const h=new je;h.fromArray(r.matrix),d.applyMatrix4(h)}else r.translation!==void 0&&d.position.fromArray(r.translation),r.rotation!==void 0&&d.quaternion.fromArray(r.rotation),r.scale!==void 0&&d.scale.fromArray(r.scale);return i.associations.has(d)||i.associations.set(d,{}),i.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Wt;n.name&&(r.name=i.createUniqueName(n.name)),oi(r,n),n.extensions&&Vi(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let d=0,h=l.length;d<h;d++)r.add(l[d]);const c=d=>{const h=new Map;for(const[u,p]of i.associations)(u instanceof qn||u instanceof Ot)&&h.set(u,p);return d.traverse(u=>{const p=i.associations.get(u);p!=null&&h.set(u,p)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];Mi[r.path]===Mi.weights?e.traverse(function(u){u.morphTargetInfluences&&l.push(u.name?u.name:u.uuid)}):l.push(a);let c;switch(Mi[r.path]){case Mi.weights:c=ks;break;case Mi.rotation:c=zs;break;case Mi.position:case Mi.scale:c=Hs;break;default:switch(n.itemSize){case 1:c=ks;break;case 2:case 3:default:c=Hs;break}break}const d=i.interpolation!==void 0?px[i.interpolation]:fr,h=this._getArrayFromAccessor(n);for(let u=0,p=l.length;u<p;u++){const g=new c(l[u]+"."+Mi[r.path],t.array,h,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=dl(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof zs?fx:yh;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Sx(s,e,t){const n=e.attributes,i=new Bn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),a.normalized){const d=dl(Ps[a.componentType]);i.min.multiplyScalar(d),i.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new L,l=new L;for(let c=0,d=r.length;c<d;c++){const h=r[c];if(h.POSITION!==void 0){const u=t.json.accessors[h.POSITION],p=u.min,g=u.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),u.normalized){const _=dl(Ps[u.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new $n;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function pd(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=cl[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return nt.workingColorSpace!==$t&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${nt.workingColorSpace}" not supported.`),oi(s,e),Sx(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?gx(s,e.targets,t):s})}class wo extends Oe{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new qt;const n=this,i=t.color!==void 0?new De(t.color):new De(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||wo.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,d=new ai,h=new L,u=new L,p=new L,g=new je,_=new L(0,0,-1),m=new ot,f=new L,w=new L,A=new ot,b=new je,C=this.camera,M=new Ii(r,o,{samples:c,type:Xn}),E=new kn({name:l.name!==void 0?l.name:"unspecified",uniforms:Jd.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});E.uniforms.tDiffuse.value=M.texture,E.uniforms.color.value=i,E.uniforms.textureMatrix.value=b,this.material=E,this.onBeforeRender=function(T,v,x){if(u.setFromMatrixPosition(n.matrixWorld),p.setFromMatrixPosition(x.matrixWorld),g.extractRotation(n.matrixWorld),h.set(0,0,1),h.applyMatrix4(g),f.subVectors(u,p),f.dot(h)>0===!0&&this.forceUpdate===!1)return;f.reflect(h).negate(),f.add(u),g.extractRotation(x.matrixWorld),_.set(0,0,-1),_.applyMatrix4(g),_.add(p),w.subVectors(u,_),w.reflect(h).negate(),w.add(u),C.position.copy(f),C.up.set(0,1,0),C.up.applyMatrix4(g),C.up.reflect(h),C.lookAt(w),C.far=x.far,C.updateMatrixWorld(),C.projectionMatrix.copy(x.projectionMatrix),b.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),b.multiply(C.projectionMatrix),b.multiply(C.matrixWorldInverse),b.multiply(n.matrixWorld),d.setFromNormalAndCoplanarPoint(h,u),d.applyMatrix4(C.matrixWorldInverse),m.set(d.normal.x,d.normal.y,d.normal.z,d.constant);const U=C.projectionMatrix;A.x=(Math.sign(m.x)+U.elements[8])/U.elements[0],A.y=(Math.sign(m.y)+U.elements[9])/U.elements[5],A.z=-1,A.w=(1+U.elements[10])/U.elements[14],m.multiplyScalar(2/m.dot(A)),U.elements[2]=m.x,U.elements[6]=m.y,U.elements[10]=m.z+1-a,U.elements[14]=m.w,n.visible=!1;const N=T.getRenderTarget(),O=T.xr.enabled,j=T.shadowMap.autoUpdate;T.xr.enabled=!1,T.shadowMap.autoUpdate=!1,T.setRenderTarget(M),T.state.buffers.depth.setMask(!0),T.autoClear===!1&&T.clear(),T.render(v,C),T.xr.enabled=O,T.shadowMap.autoUpdate=j,T.setRenderTarget(N);const H=x.viewport;H!==void 0&&T.state.viewport(H),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return M},this.dispose=function(){M.dispose(),n.material.dispose()}}}wo.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};function Hl(s=512){const e=document.createElement("canvas");return e.width=s,e.height=s,[e,e.getContext("2d")]}function _r(s,{colorSpace:e=At,repeatX:t=1,repeatY:n=1}={}){const i=new rh(s);return i.wrapS=An,i.wrapT=An,i.repeat.set(t,n),i.anisotropy=8,i.colorSpace=e,i}function md(s,e="#140812",t="#ff2a85",n=""){const i=document.createElement("canvas");i.width=1024,i.height=256;const r=i.getContext("2d");return r.fillStyle=e,r.fillRect(0,0,i.width,i.height),r.strokeStyle=t,r.lineWidth=8,r.strokeRect(12,12,i.width-24,i.height-24),r.textAlign="center",r.textBaseline="middle",r.shadowColor=t,r.shadowBlur=24,r.fillStyle="#fff5fa",r.font="bold 96px Georgia, serif",r.fillText(s,i.width/2,n?i.height/2-22:i.height/2),n&&(r.shadowBlur=8,r.fillStyle=t,r.font="600 28px monospace",r.fillText(n,i.width/2,i.height/2+54)),_r(i,{repeatX:1,repeatY:1})}function bx(s=12,e=9,t=1.5){const[n,i]=Hl(512);i.fillStyle="#0d0e14",i.fillRect(0,0,512,512);const r=128;for(let o=0;o<512;o+=r)for(let a=0;a<512;a+=r)i.fillStyle=(a+o)/r%2===0?"#141722":"#0f111a",i.fillRect(a+3,o+3,r-6,r-6),i.strokeStyle="rgba(16, 185, 129, 0.25)",i.lineWidth=2,i.strokeRect(a+3,o+3,r-6,r-6);return _r(n,{repeatX:s/t,repeatY:e/t})}function Ex(){const s=document.createElement("canvas");s.width=256,s.height=512;const e=s.getContext("2d"),t=e.createLinearGradient(0,0,0,512);return t.addColorStop(0,"#ffd8a8"),t.addColorStop(.55,"#c86446"),t.addColorStop(1,"#1e293b"),e.fillStyle=t,e.fillRect(0,0,256,512),e.fillStyle="#111319",e.fillRect(0,0,256,16),e.fillRect(0,496,256,16),e.fillRect(0,0,14,512),e.fillRect(242,0,14,512),e.fillRect(122,0,12,512),e.fillRect(0,170,256,10),e.fillRect(0,340,256,10),_r(s,{repeatX:1,repeatY:1})}const Tx=new dh;function Mn(s,{repeatX:e=1,repeatY:t=1,includeAO:n=!0}={}){const i=`./polyhaven/textures/${s}`,r=(o,a)=>{const l=Tx.load(o);return l.wrapS=An,l.wrapT=An,l.repeat.set(e,t),l.anisotropy=8,l.colorSpace=a?At:li,!a&&o.endsWith("ao.jpg")&&(l.channel=0),l};return{map:r(`${i}/diffuse.jpg`,!0),normalMap:r(`${i}/nor_gl.jpg`,!1),roughnessMap:r(`${i}/rough.jpg`,!1),aoMap:n?r(`${i}/ao.jpg`,!1):void 0}}function Mh(){const[s,e]=Hl(128),t=e.createRadialGradient(64,64,8,64,64,62);return t.addColorStop(0,"rgba(0, 0, 0, 0.56)"),t.addColorStop(.55,"rgba(0, 0, 0, 0.25)"),t.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=t,e.fillRect(0,0,128,128),_r(s,{repeatX:1,repeatY:1})}function gd(s=1){const[e,t]=Hl(256);t.fillStyle=s===1?"#12141a":"#181014",t.fillRect(0,0,256,256);const n=t.createRadialGradient(128,120,12,128,128,110);return n.addColorStop(0,s===1?"#d18447":"#bf2e4c"),n.addColorStop(.55,s===1?"#1a735c":"#dbba6b"),n.addColorStop(1,"rgba(18, 20, 26, 0)"),t.fillStyle=n,t.fillRect(16,16,224,224),t.strokeStyle="#e5dfd3",t.lineWidth=10,t.strokeRect(5,5,246,246),_r(e,{repeatX:1,repeatY:1})}const wx=new xh,ha=new Map;function Ax(s){return ha.has(s)||ha.set(s,wx.loadAsync(`./polyhaven/models/${s}/${s}.gltf`)),ha.get(s)}function Rx(s,e){const t=[],n=[],i=[],r=Mn("asphalt_02",{repeatX:8,repeatY:5.5}),o=new Ue({...r,color:10133674,roughness:1,metalness:.03}),a=Mn("brushed_concrete_04",{repeatX:9,repeatY:1.2}),l=new Ue({...a,color:13685980,roughness:1,metalness:.04}),c=new Ue({color:15381256,roughness:.65}),d=Mn("herringbone_parquet",{repeatX:6.5,repeatY:4}),h=new Ue({...d,color:15127490,normalScale:new Ce(.75,.75),roughness:.92,metalness:.04}),u=Mn("marble_01",{repeatX:5.2,repeatY:3.2}),p=new Ue({...u,color:2962239,normalScale:new Ce(.5,.5),roughness:.72,metalness:.1}),g=Mn("marble_01",{repeatX:5.2,repeatY:3.2}),_=new Ue({...g,color:16118508,normalScale:new Ce(.45,.45),roughness:.76,metalness:.06}),m=Mn("brick_wall_005",{repeatX:8,repeatY:1.8}),f=new Ue({...m,color:13285552,normalScale:new Ce(.9,.9),roughness:1,metalness:.02}),w=Mn("beige_wall_001",{repeatX:6,repeatY:1.6}),A=new Ue({...w,color:4540759,normalScale:new Ce(.55,.55),roughness:1,metalness:.02}),b=Mn("granite_tile_02",{repeatX:8,repeatY:1.6}),C=new Ue({...b,color:10791603,normalScale:new Ce(.7,.7),roughness:1,metalness:.06}),M=Ex(),E=new Ue({map:M,emissiveMap:M,emissive:new De(16764832),emissiveIntensity:1.2,roughness:.25});e.registerEmissive(E,{dayIntensity:.35,nightIntensity:1.25});const T=new Ue({...w,color:4935518,normalScale:new Ce(.45,.45),roughness:1,metalness:.02}),v=Mn("brown_planks_03",{repeatX:6,repeatY:4}),x=new Ue({...v,color:14205872,normalScale:new Ce(.75,.75),roughness:1,metalness:.04}),I=new Ue({color:3875864,roughness:.48,metalness:.08}),U=new Ue({...Mn("brown_planks_03",{repeatX:2,repeatY:1}),color:14270367,roughness:.88,metalness:.04}),N=new Ue({color:13132870,roughness:.28,metalness:.88}),O=new Ue({color:13938487,roughness:.25,metalness:.9}),j=new Ue({color:13949151,roughness:.18,metalness:.92}),H=new Ue({color:1974827,roughness:.45,metalness:.75}),Q=Mn("velour_velvet",{repeatX:2,repeatY:2}),Y=new Ue({...Q,color:1079386,normalScale:new Ce(.7,.7),roughness:1,metalness:.02}),le=new Ue({...Q,color:10886452,normalScale:new Ce(.7,.7),roughness:1,metalness:.02}),he=new Ue({color:2764086,roughness:.92,metalness:.02}),Me=new Ue({color:15196630,roughness:.88,metalness:.02}),Fe=Mn("fabric_leather_02",{repeatX:2,repeatY:2});new Ue({...Fe,color:10244909,normalScale:new Ce(.65,.65),roughness:.9,metalness:.05});const Xe=new Ue({...Fe,color:2500656,normalScale:new Ce(.65,.65),roughness:.85,metalness:.08}),K=new Ue({color:16777215,roughness:.04,metalness:.98}),oe=new Ue({color:12762542,roughness:.72,metalness:.02}),Re=Mh(),pe=new jn({map:Re,transparent:!0,opacity:.68,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}),Ne=new Ue({map:gd(1),roughness:.35,metalness:.04}),Ke=new Ue({map:gd(2),roughness:.35,metalness:.04}),Pe=new tn({color:10875900,roughness:.08,metalness:.1,transparent:!0,opacity:.28,transmission:.35}),vt=new Ue({color:13753570,roughness:.45,metalness:.1,transparent:!0,opacity:.55}),ut=new Ue({color:959977,roughness:.08,metalness:.35,transparent:!0,opacity:.78}),Ve=new Ue({color:16774097,emissive:new De(16763256),emissiveIntensity:1.8,roughness:.2});e.registerEmissive(Ve,{dayIntensity:.5,nightIntensity:2.2});const P=new Ue({color:16722565,emissive:new De(16719480),emissiveIntensity:1.8});e.registerEmissive(P,{dayIntensity:.4,nightIntensity:2.4});const Et=new Ue({color:58879,emissive:new De(55807),emissiveIntensity:1.8});e.registerEmissive(Et,{dayIntensity:.3,nightIntensity:2});function B(V,Se,it,Tt,xt,st,yt,Rn,In=!0,_n=!0){const Ct=new Oe(new Di(Se,it,Tt),Rn);return Ct.position.set(xt,st,yt),Ct.castShadow=In,Ct.receiveShadow=_n,V.add(Ct),Ct}function re(V,Se,it,Tt,xt,st,yt,Rn,In,_n=!0){const Ct=new Oe(new en(Se,it,Tt,xt),In);return Ct.position.set(st,yt,Rn),Ct.castShadow=_n,Ct.receiveShadow=!0,V.add(Ct),Ct}function we(V,Se,it){if(B(V,pt,.26,Ut,0,-.13,Ft,it,!1,!0),B(V,pt+.5,.34,.38,0,-.13,1.55,H,!0,!0),B(V,pt+.52,.06,.06,0,.01,1.73,O,!1,!1),B(V,pt,ee,.3,0,ee/2,Ft-Ut/2,Se===3||Se===0?f:A),B(V,.3,ee,Ut,-pt/2,ee/2,Ft,A),B(V,.3,ee,Ut,pt/2,ee/2,Ft,A),B(V,pt+.36,ee,.16,0,ee/2,Ft-Ut/2-.19,C),B(V,.16,ee,Ut+.16,-pt/2-.19,ee/2,Ft,C),B(V,.16,ee,Ut+.16,pt/2+.19,ee/2,Ft,C),Se>=1&&Se<=3)for(const xt of[-4.2,-9.8])B(V,.08,3.1,2.5,-pt/2-.28,ee*.52,xt,E,!1,!1),B(V,.08,3.1,2.5,pt/2+.28,ee*.52,xt,E,!1,!1);B(V,pt+.2,.24,.24,0,ee-.12,1.45,H,!1,!1),B(V,pt,.24,.36,0,ee-.12,Ft-Ut/2+.18,T,!1,!1);for(const xt of[-12.85,-5.2,4.4,12.85])B(V,.38,ee,.38,xt,ee/2,1.45,H);const Tt=B(V,.1,ee,4.2,10.2,ee/2,-12.1,Pe,!1,!1);if(Tt.castShadow=!1,B(V,1.8,.14,1.8,11.4,.08,-12.8,H),B(V,.08,ee,.08,10.6,ee/2,-11.9,Et,!1,!1),Se<4)for(let st=0;st<14;st++){const yt=(st+.5)*(ee/14),Rn=-10.5+st*.38;B(V,1.3,.16,.4,11.4,yt,Rn,U)}B(V,pt-.3,.14,.06,0,.07,Ft-Ut/2+.16,I,!1,!0),B(V,.06,.14,Ut-.3,-pt/2+.16,.07,Ft,I,!1,!0),B(V,.06,.14,Ut-.3,pt/2-.16,.07,Ft,I,!1,!0),B(V,pt-.3,.12,.16,0,ee-.09,Ft-Ut/2+.2,oe,!1,!1),B(V,.16,.12,Ut-.3,-pt/2+.2,ee-.09,Ft,oe,!1,!1),B(V,.16,.12,Ut-.3,pt/2-.2,ee-.09,Ft,oe,!1,!1);for(const xt of[-10.5,-5,.2,4.4,9.6])B(V,.28,ee,.12,xt,ee/2,Ft-Ut/2+.18,oe,!1,!0)}function at(V,Se,it,Tt=.75,xt=.75,st=.015){const yt=new Oe(new Zi(Tt*2,xt*2),pe);return yt.rotation.x=-Math.PI/2,yt.position.set(Se,st,it),yt.userData.hideOnDepthPass=!0,V.add(yt),yt}function Z(V,Se,it,Tt,xt,st,yt=0,{addShadow:Rn=!0,customArtMat:In=null,hangFromCeiling:_n=!1}={}){Ax(Se).then(Ct=>{const S=Ct.scene.clone(!0);S.rotation.set(0,yt,0),S.updateMatrixWorld(!0);const F=new Bn().setFromObject(S),X=new L;F.getSize(X);const q=it/Math.max(.05,X.y);S.scale.multiplyScalar(q),S.updateMatrixWorld(!0);const k=new Bn().setFromObject(S),se=new L,fe=new L;k.getCenter(se),k.getSize(fe);const be=_n?xt-k.max.y:xt-k.min.y;if(S.position.set(Tt-se.x,be,st-se.z),S.traverse(ce=>{var Be,Ge;if(ce.isMesh){ce.castShadow=!_n,ce.receiveShadow=!0;const Ae=String(((Be=ce.material)==null?void 0:Be.name)||"").toLowerCase();if(In&&ce.material)Ae.includes("artwork")?ce.material=I:Ae.includes("glass")&&(ce.material=new tn({color:16777215,roughness:.06,metalness:.05,transparent:!0,opacity:.1,depthWrite:!1}));else if(Ae.includes("flame")||Ae.includes("globe")||Ae.includes("lamps_")||Ae.endsWith("_light")||Ae.includes("bulb")||Ae.includes("lantern"))ce.material=ce.material.clone(),ce.material.emissive=new De(16763238),ce.material.emissiveIntensity=1.9,e.registerEmissive(ce.material,{dayIntensity:.35,nightIntensity:2.1});else if(Ae.includes("glass")){const tt=Ae.includes("green"),rt=Ae.includes("orange")||Ae.includes("yellow");ce.material=new tn({color:tt?1332013:rt?11817737:14412542,roughness:.08,metalness:.05,transparent:!0,opacity:tt||rt?.78:.32,depthWrite:!1})}(Ge=ce.material)!=null&&Ge.aoMap&&(ce.material.aoMap.channel=0)}}),V.add(S),Se==="hanging_picture_frame_01"&&In){const ce=new Oe(new Zi(Math.max(.25,fe.x*.8),Math.max(.35,fe.y*.82)),In);ce.rotation.y=yt;const Be=new L(0,0,.009).applyAxisAngle(new L(0,1,0),yt);ce.position.set(Tt+Be.x,se.y+be,st+Be.z),V.add(ce)}Rn&&!_n&&at(V,Tt,st,Math.max(.26,fe.x*.58),Math.max(.26,fe.z*.58),xt+.014)}).catch(Ct=>console.warn("[PolyHaven GLTF]",Se,Ct))}function R(V,Se,it,Tt,xt=!1){re(V,.045,.045,.16,10,Se,it+.08,Tt,Me);const st=new Oe(new Yi(.025,8,8),Ve);if(st.scale.set(.8,1.5,.8),st.position.set(Se,it+.2,Tt),V.add(st),xt){const yt=new pn(16755021,5.5,7,1.5);yt.position.set(Se,it+.32,Tt),V.add(yt),e.registerLight(yt,{dayIntensity:.8,nightIntensity:5.5,flicker:!0})}}function y(V,Se,it,Tt,xt=1){Z(V,"potted_plant_04",1.35*xt,Se,it,Tt,Se*.35,{addShadow:!0})}function W(V,Se,it,Tt,xt){const st=new Wt;st.position.set(Se,0,it),st.rotation.y=Tt;const yt=new Ue({color:xt,roughness:.2,metalness:.85}),Rn=new Ue({color:988970,roughness:.1,metalness:.9}),In=new Ue({color:1118742,roughness:.88}),_n=new Ue({color:15680580,emissive:new De(14427686),emissiveIntensity:1.5});B(st,1.92,.58,4.3,0,.56,0,yt),B(st,1.62,.52,2.25,0,1.08,-.25,yt),B(st,1.56,.42,1.85,0,1.08,-.25,Rn);for(const[Ct,S]of[[-.94,1.32],[.94,1.32],[-.94,-1.32],[.94,-1.32]]){const F=new Oe(new en(.36,.36,.24,18),In);F.rotation.z=Math.PI/2,F.position.set(Ct,.36,S),F.castShadow=!0,st.add(F);const X=new Oe(new en(.21,.21,.26,12),j);X.rotation.z=Math.PI/2,X.position.set(Ct,.36,S),st.add(X)}B(st,.38,.14,.08,-.62,.62,2.16,Ve,!1),B(st,.38,.14,.08,.62,.62,2.16,Ve,!1),B(st,.42,.12,.08,-.62,.65,-2.16,_n,!1),B(st,.42,.12,.08,.62,.65,-2.16,_n,!1),V.add(st)}const G=new Wt;G.position.y=0,s.add(G),t[0]=G,B(G,28,.24,18,0,-.12,10.5,o,!1,!0),B(G,28,.16,3.3,0,.08,3.15,l,!1,!0);for(let V=-3;V<=3;V++)B(G,.14,.02,5.4,V*3.4,.015,12.5,c,!1,!0);W(G,-8.5,12.5,0,12131356),W(G,-5.1,12.5,0,1120295),W(G,5.1,12.5,0,14870768),W(G,8.5,12.5,Math.PI,8138002);for(const[V,Se]of[[-11.5,4.9],[11.5,4.9],[-11.5,16.5],[11.5,16.5]]){Z(G,"street_lamp_01",5.4,V,0,Se,V<0?Math.PI/2:-Math.PI/2,{addShadow:!0});const it=new Oe(new Yi(.14,12,12),Ve);it.position.set(V,4.95,Se),G.add(it)}for(const[V,Se]of[[-14.5,5.2],[14.5,5.2],[-14.5,15.5],[14.5,15.5]]){B(G,1.5,.72,1.5,V,.36,Se,C),Z(G,"potted_plant_02",2.85,V,.72,Se,V*.22,{addShadow:!1});const it=Se<10?1.25:-1.25;Z(G,"shrub_02",1.1,V,0,Se+it,V*.35,{addShadow:!0})}const ie=new pn(16764808,22,32,1.3);ie.position.set(0,6.2,8.5),G.add(ie),e.registerLight(ie,{dayIntensity:1,nightIntensity:22}),B(G,6.4,.24,3.4,0,3.45,3.1,H);const J=md("NOCTURNE","#120610","#ff2a85","CABARET  •  SPEAKEASY  •  VIP"),Le=new Ue({map:J,emissiveMap:J,emissive:new De(16777215),emissiveIntensity:1.5,roughness:.2});e.registerEmissive(Le,{dayIntensity:.4,nightIntensity:1.7}),B(G,4.8,.9,.14,0,4,4.78,Le,!1),B(G,2.3,.03,4.2,0,.175,3.4,le,!1,!0);for(const V of[-1.25,1.25]){for(const Se of[1.8,3.3,4.7])re(G,.04,.09,.92,10,V,.62,Se,O);B(G,.05,.05,3,V,.96,3.25,le)}we(G,0,p);const ve=new Ue({map:bx(12,9,1.5),roughness:.16,metalness:.45});B(G,12,.04,9,0,.02,-5.2,ve,!1,!0),B(G,12.15,.05,.12,0,.03,-.7,Et,!1),B(G,12.15,.05,.12,0,.03,-9.7,Et,!1),B(G,.12,.05,9.1,-6,.03,-5.2,Et,!1),B(G,.12,.05,9.1,6,.03,-5.2,Et,!1),B(G,8.6,.45,3.8,0,.225,-12.1,h);for(const V of[-4.6,-4.1,4.1,4.6])re(G,.26,.28,ee-.1,14,V,ee/2,-13.7,le);B(G,1.6,1.08,7.6,-9.6,.54,-5.6,p),B(G,1.75,.08,7.8,-9.6,1.1,-5.6,N),B(G,.45,2.5,7,-12.5,1.4,-5.6,I);for(let V=-8.4;V<=-2.8;V+=.7)re(G,.055,.055,.28,10,-12.4,1.55,V,V%1.4===0?N:Et),re(G,.055,.055,.28,10,-12.4,2.15,V,Ve);for(let V=-8.2;V<=-3;V+=1.3)Z(G,"bar_chair_round_01",.78,-8.3,0,V,Math.PI/2,{addShadow:!0});Z(G,"wine_bottles_01",.36,-9.6,1.14,-4.4,Math.PI/2,{addShadow:!1}),Z(G,"wine_bottles_01",.36,-9.6,1.14,-6.8,Math.PI/2,{addShadow:!1}),Z(G,"Chandelier_01",1.35,0,ee-.05,-5.2,0,{addShadow:!1,hangFromCeiling:!0});const me=new Wt;me.position.set(-5.8,0,-11.2),me.rotation.y=.45;const Ze=new Ue({color:723984,roughness:.08,metalness:.55});B(me,1.6,.28,2.1,0,.78,0,Ze),B(me,1.54,.06,.35,0,.72,1.08,Me);const ae=B(me,1.56,.05,1.85,.25,1.16,-.05,Ze);ae.rotation.z=-.35,re(me,.02,.02,.55,8,.65,1.05,.2,O);for(const[V,Se]of[[-.65,.85],[.65,.85],[0,-.85]])re(me,.05,.035,.7,10,V,.35,Se,Ze);B(me,.9,.08,.4,0,.48,1.65,Xe),B(me,.82,.44,.34,0,.22,1.65,Ze),G.add(me),Z(G,"ArmChair_01",.88,7.15,0,-2.5,Math.PI/2,{addShadow:!0}),Z(G,"ArmChair_01",.88,7.15,0,-5.5,Math.PI/2,{addShadow:!0}),Z(G,"coffee_table_round_01",.62,8.2,0,-2.5,0,{addShadow:!0}),Z(G,"coffee_table_round_01",.62,8.2,0,-5.5,.7,{addShadow:!0});for(const V of[-2.5,-5.5,-8.5])V<-6&&(re(G,.55,.55,.04,20,8,.78,V,p),re(G,.06,.14,.75,12,8,.375,V,O),Z(G,"dining_chair_02",.92,7.15,0,V,Math.PI/2,{addShadow:!0})),Z(G,"brass_candleholders",.26,8.2,V<-6?.8:.62,V,0,{addShadow:!1});const Ee=new pn(16737970,24,30,1.3);Ee.position.set(0,3.85,-6.5),G.add(Ee),e.registerLight(Ee,{dayIntensity:2,nightIntensity:24});const de=new Wt;de.position.y=ee,s.add(de),t[1]=de,we(de,1,_),B(de,pt-2.6,.95,.08,-1.2,.48,1.48,Pe,!1),B(de,pt-2.6,.06,.14,-1.2,.97,1.48,H),B(de,6.2,1.05,1.35,-.5,.525,-9.8,U),B(de,6.3,.06,1.45,-.5,1.08,-9.8,_),B(de,1.35,.52,.62,-1.2,1.36,-9.8,N),B(de,1.1,.18,.22,-1.2,1.25,-9.45,j),re(de,.1,.14,.48,12,.1,1.35,-9.8,H),B(de,1.6,.65,.72,1.5,1.42,-9.75,Pe,!1);for(let V=1;V<=2;V+=.35)re(de,.08,.1,.08,10,V,1.15,-9.75,U);const He=md("LE VELVET CAFÉ","#1c1410","#d99a64","SPECIALTY ESPRESSO  •  EIXAMPLE"),Te=new Ue({map:He,emissiveMap:He,emissive:new De(16768936),emissiveIntensity:1});e.registerEmissive(Te,{dayIntensity:.3,nightIntensity:1.2}),B(de,4.4,.8,.1,-.5,3.1,-14.2,Te,!1),Z(de,"hanging_picture_frame_01",1.35,-6.2,1.85,-14.25,0,{addShadow:!1,customArtMat:Ne}),Z(de,"hanging_picture_frame_01",1.35,5.2,1.85,-14.25,0,{addShadow:!1,customArtMat:Ke}),Z(de,"coffee_table_round_01",.72,-5.8,0,-4,.26,{addShadow:!0}),Z(de,"coffee_table_round_01",.72,6,0,-4.2,-.44,{addShadow:!0}),Z(de,"ArmChair_01",.88,-6.9,0,-4,Math.PI/2,{addShadow:!0}),Z(de,"ArmChair_01",.88,7.1,0,-4.2,-Math.PI/2,{addShadow:!0});for(const[V,Se]of[[-2,-3.5],[2.2,-3.8]])re(de,.56,.56,.04,22,V,.76,Se,_),re(de,.05,.18,.74,12,V,.37,Se,H),re(de,.05,.045,.08,10,V+.1,.82,Se,Me),Z(de,"brass_candleholders",.22,V-.15,.78,Se,.35,{addShadow:!1}),Z(de,"dining_chair_02",.9,V-.72,0,Se,Math.PI/2,{addShadow:!0}),Z(de,"dining_chair_02",.9,V+.72,0,Se,-Math.PI/2,{addShadow:!0});Z(de,"wine_bottles_01",.32,1.8,1.11,-9.8,0,{addShadow:!1}),Z(de,"Chandelier_01",1.15,-3.8,ee-.05,-4.5,0,{addShadow:!1,hangFromCeiling:!0}),Z(de,"Chandelier_01",1.15,3.8,ee-.05,-4.5,0,{addShadow:!1,hangFromCeiling:!0}),y(de,-11.5,0,-12.5,1.3),y(de,8.8,0,-12.5,1.2),y(de,-11.2,0,.2,1.1);const Je=new pn(16768944,20,28,1.3);Je.position.set(0,3.85,-5.5),de.add(Je),e.registerLight(Je,{dayIntensity:3,nightIntensity:20});const ne=new Wt;ne.position.y=2*ee,s.add(ne),t[2]=ne,we(ne,2,h),B(ne,.16,ee,9.8,-5,ee/2,-9.4,T),B(ne,.16,ee,3.6,-5,ee/2,-.3,T),B(ne,.16,ee-2.4,2,-5,2.4+(ee-2.4)/2,-3.2,T),B(ne,.16,ee,4.8,4.4,ee/2,-12,T),B(ne,.16,ee,3.4,4.4,ee/2,-.2,T);for(const V of[-4.75,4.15,-12.65])re(ne,.22,.22,4.75,12,V,2.38,1.15,le);Z(ne,"hanging_picture_frame_01",1.25,2.4,1.95,-14.25,0,{addShadow:!1,customArtMat:Ne}),Z(ne,"hanging_picture_frame_01",1.25,-2.8,2.25,-14.25,0,{addShadow:!1,customArtMat:Ke}),Z(ne,"ClassicConsole_01",.82,-.4,0,-13.15,0,{addShadow:!0});const ct=new Oe(new en(.76,.76,.04,36),K);ct.rotation.x=Math.PI/2,ct.position.set(-.4,1.65,-13.58),ne.add(ct);const D=new wo(new bo(.74,36),{clipBias:.003,textureWidth:512,textureHeight:512,color:10134706});D.position.set(-.4,1.65,-13.55),D.userData.hideOnDepthPass=!0,ne.add(D);const ge=new Oe(new go(.79,.035,14,48),O);ge.position.set(-.4,1.65,-13.545),ne.add(ge);for(let V=0;V<12;V++){const Se=V/12*Math.PI*2,it=new Oe(new Yi(.038,10,10),Ve);it.position.set(-.4+Math.cos(Se)*.78,1.65+Math.sin(Se)*.78,-13.505),ne.add(it)}const $=new tn({color:14251782,roughness:.1,metalness:.1,transparent:!0,opacity:.85});re(ne,.04,.04,.14,12,.14,.89,-13.12,$),re(ne,.018,.018,.04,10,.14,.98,-13.12,O),re(ne,.03,.03,.11,12,.24,.88,-13.16,$),re(ne,.014,.014,.08,10,.02,.86,-13.06,O),re(ne,.012,.012,.04,10,.02,.91,-13.06,le),re(ne,.04,.038,.12,12,-.68,.88,-13.12,Me),Z(ne,"brass_candleholders",.24,-.92,.82,-13.14,.18,{addShadow:!1}),Z(ne,"Ottoman_01",.48,-.4,0,-12.05,-.26,{addShadow:!0}),B(ne,1.6,.06,.65,-3.5,.03,-13.2,I),re(ne,.02,.02,2,8,-4.2,1,-13.2,O),re(ne,.02,.02,2,8,-2.8,1,-13.2,O);const te=new Oe(new en(.02,.02,1.45,8),O);te.rotation.z=Math.PI/2,te.position.set(-3.5,1.98,-13.2),ne.add(te);for(let V=-4;V<=-3;V+=.24)B(ne,.14,1.1,.38,V,1.38,-13.2,V%.48===0?Y:Xe);const ye=new pn(16766883,10,14,1.4);ye.position.set(-.4,1.85,-11.4),ne.add(ye),e.registerLight(ye,{dayIntensity:2.5,nightIntensity:10});const _e=new Oe(new en(.95,.82,.66,28),p);_e.scale.set(1.35,1,.72),_e.position.set(-9,.33,-7.8),_e.castShadow=!0,ne.add(_e);const We=new Oe(new en(.86,.86,.03,28),ut);We.scale.set(1.3,1,.68),We.position.set(-9,.665,-7.8),ne.add(We),n.push(We),re(ne,.025,.03,.95,10,-10.5,.48,-7.8,O),B(ne,.25,.04,.04,-10.38,.94,-7.8,O),B(ne,.08,2.4,2.8,-6.4,1.2,-10.6,vt,!1),B(ne,1.2,.42,.5,-11.2,.21,-10.8,x);for(let V=-11.55;V<=-10.85;V+=.35){const Se=new Oe(new en(.11,.11,.34,12),Me);Se.rotation.x=Math.PI/2,Se.position.set(V,.52,-10.8),ne.add(Se)}R(ne,-7.8,.66,-7.1,!0),R(ne,-8.2,0,-6.6,!1),R(ne,-10.1,0,-6.9,!1),B(ne,1.35,.94,3.6,7.3,.47,-8,p),B(ne,1.45,.06,3.7,7.3,.96,-8,p),re(ne,.02,.025,.38,10,7.4,1.16,-7.4,O),re(ne,.055,.045,.09,12,6.8,1.03,-8.3,Me),Z(ne,"wine_bottles_01",.34,7.3,.99,-8.8,Math.PI/2,{addShadow:!1});for(const V of[-9,-8,-7])Z(ne,"modern_ceiling_lamp_01",1.45,7.3,ee-.05,V,0,{addShadow:!1,hangFromCeiling:!0}),Z(ne,"bar_chair_round_01",.72,6.1,0,V,-Math.PI/2,{addShadow:!0});B(ne,1.8,.06,1.1,7.3,.75,-2.5,I);for(const[V,Se]of[[6.5,-2.95],[8.1,-2.95],[6.5,-2.05],[8.1,-2.05]])re(ne,.03,.02,.72,8,V,.36,Se,H);Z(ne,"dining_chair_02",.92,6.8,0,-1.65,Math.PI,{addShadow:!0}),Z(ne,"dining_chair_02",.92,7.8,0,-1.65,Math.PI,{addShadow:!0}),Z(ne,"dining_chair_02",.92,6.8,0,-3.35,0,{addShadow:!0}),Z(ne,"dining_chair_02",.92,7.8,0,-3.35,0,{addShadow:!0});const _t=new pn(16765852,10,14,1.4);_t.position.set(7.1,2.55,-7.8),ne.add(_t),e.registerLight(_t,{dayIntensity:2,nightIntensity:10}),B(ne,3.9,.28,4.1,-.5,.14,-3.2,I),B(ne,3.6,.02,3.8,-.5,.29,-3.1,he,!1,!0),Z(ne,"GothicBed_01",1.52,-.5,.28,-3.35,0,{addShadow:!0});for(const V of[-1.85,.85])Z(ne,"ClassicNightstand_01",.58,V,.28,-4.15,0,{addShadow:!0}),Z(ne,"desk_lamp_arm_01",.44,V,.86,-4.15,V<0?-.44:.44,{addShadow:!1});Z(ne,"Chandelier_01",1.2,-.5,ee-.05,-3.2,0,{addShadow:!1,hangFromCeiling:!0});const It=new pn(16758896,9.5,12,1.4);It.position.set(-.5,1.85,-3.6),ne.add(It),e.registerLight(It,{dayIntensity:1.5,nightIntensity:9.5}),B(ne,pt-2.6,.95,.08,-1.2,.48,1.48,Pe,!1),B(ne,pt-2.6,.06,.14,-1.2,.97,1.48,H),Z(ne,"coffee_table_round_01",.65,2.5,0,.65,0,{addShadow:!0}),Z(ne,"ArmChair_01",.88,-3.3,0,-1.5,-.66,{addShadow:!0});const Ie=new Wt;Ie.position.y=3*ee,s.add(Ie),t[3]=Ie,we(Ie,3,h),B(Ie,pt-2.6,.95,.08,-1.2,.48,1.48,Pe,!1),B(Ie,.18,ee,9,.2,ee/2,-9.8,T);for(const V of[-12.6,-.1,9.6])re(Ie,.22,.22,4.75,12,V,2.38,1.15,Y);Z(Ie,"hanging_picture_frame_01",1.35,-4.8,2.25,-14.25,0,{addShadow:!1,customArtMat:Ke}),Z(Ie,"hanging_picture_frame_01",1.35,4.8,2.45,-14.25,0,{addShadow:!1,customArtMat:Ne}),B(Ie,3.2,.08,1.35,-4.8,.8,-10.5,I);for(const V of[-6.2,-3.4])B(Ie,.08,.78,1.1,V,.39,-10.5,H);re(Ie,.02,.025,.65,8,-4.2,1.15,-10.4,H);const Kt=new Oe(new en(.055,.055,.22,14),H);Kt.rotation.x=Math.PI/3,Kt.position.set(-4.5,1.42,-10.1),Ie.add(Kt),B(Ie,.32,.08,.2,-5.5,.88,-10.3,H),B(Ie,.05,.03,.02,-5.5,.88,-10.19,Et,!1),re(Ie,.02,.06,.32,10,-3.7,1,-10.5,O),Z(Ie,"desk_lamp_arm_01",.48,-6,.84,-10.55,-.78,{addShadow:!1}),B(Ie,.55,3.8,6.4,-12.4,1.9,-7.2,I);for(let V=.42;V<=3.12;V+=.68)for(let Se=-9.6;Se<=-4.8;Se+=1.55)Z(Ie,"book_encyclopedia_set_01",.34,-12.35,V,Se,Math.PI/2,{addShadow:!1});Z(Ie,"Sofa_01",.88,-5.5,0,-4.2,-1.48,{addShadow:!0}),Z(Ie,"modern_ceiling_lamp_01",1.35,-4.8,ee-.05,-8.5,0,{addShadow:!1,hangFromCeiling:!0});const dn=new pn(16758892,15,18,1.3);dn.position.set(-4.8,2.95,-9.2),Ie.add(dn),e.registerLight(dn,{dayIntensity:2,nightIntensity:11}),B(Ie,2.4,1.6,.22,4.8,.8,-12.4,Y),B(Ie,2.2,.52,2.2,4.8,.26,-11.2,Xe),B(Ie,2.15,.14,1.8,4.8,.56,-11,he),B(Ie,1.8,1.5,.08,8.2,1.55,-14.2,I);const vr=new Ue({color:8266446,roughness:.5});for(let V=7.6;V<=8.8;V+=.4){const Se=new Oe(new go(.14,.03,10,20),V>8.1?Xe:vr);Se.position.set(V,1.6,-14.12),Ie.add(Se)}re(Ie,.025,.04,1.05,10,4.8,.525,-8.8,H),B(Ie,.28,.14,.12,4.8,1.12,-8.8,Me),Z(Ie,"modern_ceiling_lamp_01",1.35,4.8,ee-.05,-8.5,0,{addShadow:!1,hangFromCeiling:!0}),Z(Ie,"brass_candleholders",.28,6.4,0,-9.5,.44,{addShadow:!1}),R(Ie,6.4,0,-9.5,!0);const et=new Wt;et.position.y=4*ee,s.add(et),t[4]=et,B(et,pt,.24,Ut,0,-.12,Ft,x,!1,!0),B(et,pt,1.05,.08,0,.525,1.45,Pe,!1),B(et,pt,1.05,.08,0,.525,-14.45,Pe,!1),B(et,.08,1.05,Ut,-12.95,.525,Ft,Pe,!1),B(et,.08,1.05,Ut,12.95,.525,Ft,Pe,!1),B(et,7,.28,4.2,-3,.14,-6.8,p),B(et,7.4,.66,.32,-3,.33,-8.95,p),B(et,7.4,.66,.32,-3,.33,-4.65,p),B(et,.32,.66,4.6,-6.55,.33,-6.8,p),B(et,.32,.66,4.6,.55,.33,-6.8,p),B(et,1.3,.22,.7,-5.65,.34,-5.35,p);const Jn=B(et,6.8,.03,4,-3,.59,-6.8,ut,!1,!0);n.push(Jn);const Ni=new pn(2282478,18,18,1.35);Ni.position.set(-3,.85,-6.8),et.add(Ni),e.registerLight(Ni,{dayIntensity:2.5,nightIntensity:18});const es=new pn(16766629,14,16,1.4);es.position.set(-1.6,2.85,-.9),et.add(es),e.registerLight(es,{dayIntensity:2,nightIntensity:14});for(const V of[-8.2,-5.6]){B(et,2.1,.24,.95,-9,.12,V,x),B(et,1.5,.12,.88,-8.75,.28,V,Me);const Se=B(et,.62,.12,.88,-9.75,.44,V,Me);Se.rotation.z=.48}for(const[V,Se]of[[2.2,-11.5],[8.8,-11.5],[2.2,-6.8],[8.8,-6.8]])B(et,.18,3.6,.18,V,1.8,Se,H);for(let V=-11.4;V<=-6.8;V+=.48)B(et,6.8,.08,.18,5.5,3.6,V,H);B(et,4.6,1.08,1.15,5.5,.54,-9.8,N),B(et,4.75,.06,1.25,5.5,1.1,-9.8,p),B(et,4.4,2.1,.45,5.5,1.1,-11.4,I);for(let V=3.6;V<=7.4;V+=.55)re(et,.05,.05,.28,10,V,1.45,-11.35,V%1.1===0?Ve:N);Z(et,"wine_bottles_01",.34,4.6,1.13,-9.8,0,{addShadow:!1}),Z(et,"brass_candleholders",.26,6.4,1.13,-9.8,.26,{addShadow:!1});for(let V=3.8;V<=7.2;V+=1.1)Z(et,"bar_chair_round_01",.78,V,0,-8.8,Math.PI,{addShadow:!0});const ts=new pn(16758635,11,15,1.4);ts.position.set(5.5,2.85,-9.2),et.add(ts),e.registerLight(ts,{dayIntensity:2,nightIntensity:11});for(const[V,Se]of[[-11.8,-13],[-11.8,-1],[11.5,-13],[11.5,-1]]){const it=Se<-6;Z(et,it?"potted_plant_02":"potted_plant_04",it?2.15:1.65,V,0,Se,V*.35,{addShadow:!0})}return Z(et,"shrub_02",1.05,-7.6,0,-10.4,.44,{addShadow:!0}),Z(et,"shrub_02",1.05,1.4,0,-10.4,-.52,{addShadow:!0}),y(ne,-11.6,0,-5.8,1),{floorGroups:t,waterMeshes:n,frontGlassPanels:i,mirrorReflector:D}}class Ix{constructor(e){this.scene=e,this.root=null,this.mixer=null,this.actions={},this.currentActionName=null,this.loaded=!1}async load(e="./models/alina.glb"){const n=await new xh().loadAsync(e);this.root=n.scene,this.root.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0,a.material&&(a.material.envMapIntensity=.75,a.material.needsUpdate=!0))}),this.mixer=new tp(this.root);for(const a of n.animations||[]){const l=this.mixer.clipAction(a);a.name==="Laying"?(l.setLoop(zd),l.clampWhenFinished=!0):l.setLoop(Hd),this.actions[a.name]=l}this.scene.add(this.root);const i=Mh(),r=new jn({map:i,transparent:!0,opacity:.72,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}),o=new Oe(new Zi(1.15,1.15),r);return o.rotation.x=-Math.PI/2,o.position.y=.015,o.userData.hideOnDepthPass=!0,this.root.add(o),this.loaded=!0,this.playAnimation("Idle"),Object.keys(this.actions)}playAnimation(e,t=.35){if(!this.loaded)return;const n=this.actions[e]||this.actions.Idle||Object.values(this.actions)[0];if(!n)return;const i=this.currentActionName?this.actions[this.currentActionName]:null;i&&i!==n?(n.reset(),n.play(),i.crossFadeTo(n,t,!0)):(n.reset(),n.play()),this.currentActionName=n.getClip().name}placeAtSpot(e){!this.root||!e||(this.root.position.set(e.alinaPos.x,e.alinaPos.y,e.alinaPos.z),this.root.rotation.set(0,e.alinaRotY||0,0),e.defaultAnim&&this.playAnimation(e.defaultAnim,.3))}update(e){this.mixer&&this.mixer.update(e)}}const _d={type:"change"},Vl={type:"start"},Sh={type:"end"},Yr=new mr,xd=new ai,Cx=Math.cos(70*uo.DEG2RAD),Nt=new L,on=2*Math.PI,gt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ua=1e-6;class Px extends np{constructor(e,t=null){super(e,t),this.state=gt.NONE,this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:As.ROTATE,MIDDLE:As.DOLLY,RIGHT:As.PAN},this.touches={ONE:Ss.ROTATE,TWO:Ss.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new gn,this._lastTargetPosition=new L,this._quat=new gn().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new kc,this._sphericalDelta=new kc,this._scale=1,this._panOffset=new L,this._rotateStart=new Ce,this._rotateEnd=new Ce,this._rotateDelta=new Ce,this._panStart=new Ce,this._panEnd=new Ce,this._panDelta=new Ce,this._dollyStart=new Ce,this._dollyEnd=new Ce,this._dollyDelta=new Ce,this._dollyDirection=new L,this._mouse=new Ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Dx.bind(this),this._onPointerDown=Lx.bind(this),this._onPointerUp=Nx.bind(this),this._onContextMenu=Hx.bind(this),this._onMouseWheel=Ox.bind(this),this._onKeyDown=Bx.bind(this),this._onTouchStart=kx.bind(this),this._onTouchMove=zx.bind(this),this._onMouseDown=Ux.bind(this),this._onMouseMove=Fx.bind(this),this._interceptControlDown=Vx.bind(this),this._interceptControlUp=Gx.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(_d),this.update(),this.state=gt.NONE}update(e=null){const t=this.object.position;Nt.copy(t).sub(this.target),Nt.applyQuaternion(this._quat),this._spherical.setFromVector3(Nt),this.autoRotate&&this.state===gt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=on:n>Math.PI&&(n-=on),i<-Math.PI?i+=on:i>Math.PI&&(i-=on),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Nt.setFromSpherical(this._spherical),Nt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Nt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Nt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Nt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Yr.origin.copy(this.object.position),Yr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Yr.direction))<Cx?this.object.lookAt(this.target):(xd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Yr.intersectPlane(xd,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ua||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ua||this._lastTargetPosition.distanceToSquared(this.target)>ua?(this.dispatchEvent(_d),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?on/60*this.autoRotateSpeed*e:on/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Nt.setFromMatrixColumn(t,0),Nt.multiplyScalar(-e),this._panOffset.add(Nt)}_panUp(e,t){this.screenSpacePanning===!0?Nt.setFromMatrixColumn(t,1):(Nt.setFromMatrixColumn(t,0),Nt.crossVectors(this.object.up,Nt)),Nt.multiplyScalar(e),this._panOffset.add(Nt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Nt.copy(i).sub(this.target);let r=Nt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(on*this._rotateDelta.x/t.clientHeight),this._rotateUp(on*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(on*this._rotateDelta.x/t.clientHeight),this._rotateUp(on*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ce,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Lx(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function Dx(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Nx(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Sh),this.state=gt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Ux(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case As.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=gt.DOLLY;break;case As.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=gt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=gt.ROTATE}break;case As.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=gt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=gt.PAN}break;default:this.state=gt.NONE}this.state!==gt.NONE&&this.dispatchEvent(Vl)}function Fx(s){switch(this.state){case gt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case gt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case gt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Ox(s){this.enabled===!1||this.enableZoom===!1||this.state!==gt.NONE||(s.preventDefault(),this.dispatchEvent(Vl),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Sh))}function Bx(s){this.enabled!==!1&&this._handleKeyDown(s)}function kx(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Ss.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=gt.TOUCH_ROTATE;break;case Ss.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=gt.TOUCH_PAN;break;default:this.state=gt.NONE}break;case 2:switch(this.touches.TWO){case Ss.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=gt.TOUCH_DOLLY_PAN;break;case Ss.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=gt.TOUCH_DOLLY_ROTATE;break;default:this.state=gt.NONE}break;default:this.state=gt.NONE}this.state!==gt.NONE&&this.dispatchEvent(Vl)}function zx(s){switch(this._trackPointer(s),this.state){case gt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case gt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case gt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case gt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=gt.NONE}}function Hx(s){this.enabled!==!1&&s.preventDefault()}function Vx(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Gx(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Wx{constructor(e,t,n,i){this.container=e,this.scene=t,this.renderer=n,this.lighting=i;const r=e.clientWidth||720,o=e.clientHeight||480;this.camera=new qt(42,r/o,.1,320),this.camera.position.set(.25,11.3,-8.1),this.controls=new Px(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.06,this.controls.maxPolarAngle=Math.PI/2-.01,this.controls.minDistance=.8,this.controls.maxDistance=110,this.controls.target.set(-.4,11.18,-10.8),this.controls.update(),this.isTransitioning=!1,this.targetPos=this.camera.position.clone(),this.targetLook=this.controls.target.clone(),this.controls.addEventListener("start",()=>{this.isTransitioning=!1}),this.isDepthPass=!1,this.depthMaterial=this._createSkinnedLinearDepthMaterial(),this._bindResize()}_createSkinnedLinearDepthMaterial(){return new kn({uniforms:{uNear:{value:.6},uFar:{value:24}},vertexShader:`
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
      `})}_bindResize(){this.onWindowResize=()=>{if(!this.container||!this.renderer||!this.camera)return;const e=Math.max(1,this.container.clientWidth),t=Math.max(1,this.container.clientHeight);this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1)},window.addEventListener("resize",this.onWindowResize),typeof ResizeObserver<"u"&&(this.resizeObserver=new ResizeObserver(()=>this.onWindowResize()),this.resizeObserver.observe(this.container))}flyTo(e,t){this.targetPos.set(e.x,e.y,e.z),this.targetLook.set(t.x,t.y,t.z),this.isTransitioning=!0}updateDepthRangeForFocus(e){const t=this.camera.position.distanceTo(e);this.depthMaterial.uniforms.uNear.value=Math.max(.4,t*.28),this.depthMaterial.uniforms.uFar.value=Math.max(t+8,t*2.8)}setDepthPass(e,t=null){this.isDepthPass=e,this.scene.traverse(n=>{var i;(i=n.userData)!=null&&i.hideOnDepthPass&&(n.visible=!e)}),e?(t&&this.updateDepthRangeForFocus(t),this.scene.overrideMaterial=this.depthMaterial,this.lighting.setDepthFogDisabled(!0),this.renderer.setClearColor(0,1)):(this.scene.overrideMaterial=null,this.lighting.setDepthFogDisabled(!1))}update(){this.isTransitioning&&(this.camera.position.lerp(this.targetPos,.09),this.controls.target.lerp(this.targetLook,.09),this.camera.position.distanceTo(this.targetPos)<.03&&this.controls.target.distanceTo(this.targetLook)<.03&&(this.camera.position.copy(this.targetPos),this.controls.target.copy(this.targetLook),this.isTransitioning=!1)),this.controls.update()}render(){this.isDepthPass&&this.updateDepthRangeForFocus(this.controls.target),this.renderer.render(this.scene,this.camera)}renderVertical916DataURL(e=1080,t=1920,n=null){const i=this.scene.overrideMaterial,r=this.scene.fog,o=this.scene.background,a=this.lighting.depthFogDisabled,l=[];this.scene.traverse(p=>{var g;(g=p.userData)!=null&&g.hideOnDepthPass&&(l.push([p,p.visible]),n===!0?p.visible=!1:n===!1&&(p.visible=!0))});const c=this.renderer.getSize(new Ce),d=this.renderer.getPixelRatio();n===!0?(this.updateDepthRangeForFocus(this.controls.target),this.scene.overrideMaterial=this.depthMaterial,this.lighting.setDepthFogDisabled(!0),this.renderer.setClearColor(0,1)):n===!1&&(this.scene.overrideMaterial=null,this.lighting.setDepthFogDisabled(!1));const h=this.camera.clone();h.aspect=e/t,h.updateProjectionMatrix(),this.renderer.setPixelRatio(1),this.renderer.setSize(e,t,!1),this.renderer.render(this.scene,h);const u=this.renderer.domElement.toDataURL("image/png");for(const[p,g]of l)p.visible=g;return this.renderer.setPixelRatio(d),this.renderer.setSize(c.x,c.y,!1),this.scene.overrideMaterial=i,this.lighting.setDepthFogDisabled(a),this.scene.fog=r,this.scene.background=o,this.renderer.render(this.scene,this.camera),u}getCameraTelemetry(){return{position:{x:Number(this.camera.position.x.toFixed(3)),y:Number(this.camera.position.y.toFixed(3)),z:Number(this.camera.position.z.toFixed(3))},target:{x:Number(this.controls.target.x.toFixed(3)),y:Number(this.controls.target.y.toFixed(3)),z:Number(this.controls.target.z.toFixed(3))},fov_deg:this.camera.fov}}}class Xx{constructor(e,t,n,i,r,o){this.canvasEl=e,this.onProgress=t,this.onReady=n,this.onScreenshot=i,this.onFps=r,this.onDepthScreenshot=o,this.instance=null,this.loading=!1,this.ready=!1,this.loadStartMs=0,this.loadDurationMs=null,this.pendingState=null,this.lastCameraTelemetry=null,window.AlinaUnityCallbacks={onReady:()=>{this.ready=!0,this.pendingState&&this.syncFullState(this.pendingState),this.onReady&&this.onReady(this.loadDurationMs)},onScreenshot:a=>{this.onScreenshot&&this.onScreenshot(a)},onDepthScreenshot:a=>{this.onDepthScreenshot&&this.onDepthScreenshot(a)},onCameraTelemetry:a=>{a&&a.position&&a.target&&(this.lastCameraTelemetry={...a,approximate:!1})},onFps:a=>{this.onFps&&this.onFps(a)}}}async ensureLoaded(){if(this.instance)return this.instance;if(this.loading)return null;this.loading=!0,this.loadStartMs=performance.now();const e="./unity-build/Build",t=`${e}/unity-build.loader.js`;await new Promise((i,r)=>{if(typeof window.createUnityInstance=="function"){i();return}const o=document.createElement("script");o.src=t,o.async=!0,o.onload=i,o.onerror=()=>r(new Error(`No se pudo cargar ${t}`)),document.body.appendChild(o)});const n={arguments:[],dataUrl:`${e}/unity-build.data.unityweb`,frameworkUrl:`${e}/unity-build.framework.js.unityweb`,codeUrl:`${e}/unity-build.wasm.unityweb`,streamingAssetsUrl:"./unity-build/StreamingAssets",companyName:"LMNJDRS",productName:"AlinaSanctuary",productVersion:"3.0",matchWebGLToCanvasSize:!0};return this.instance=await window.createUnityInstance(this.canvasEl,n,i=>{this.onProgress&&this.onProgress(Math.round(i*100))}),this.loadDurationMs=Math.round(performance.now()-this.loadStartMs),this.loading=!1,this.ready=!0,this.pendingState&&this.syncFullState(this.pendingState),this.onReady&&this.onReady(this.loadDurationMs),this.instance}_send(e,t){if(!(!this.instance||!this.ready))try{t===void 0?this.instance.SendMessage("AlinaSanctuaryBridge",e):this.instance.SendMessage("AlinaSanctuaryBridge",e,t)}catch(n){console.warn("[UnityBridge] SendMessage error:",e,n)}}syncFullState(e){this.pendingState={...e},!(!this.instance||!this.ready)&&(this._send("SetLightingMode",e.lightingMode),this._send("SetDollhouseSlice",e.sliced?1:0),this._send("SelectFloor",e.floor),this._send("SelectSpot",e.spotId),e.anim&&this._send("SetAnimation",e.anim),e.renderPass&&this._send("SetRenderPass",e.renderPass))}sendRenderPass(e){this.pendingState&&(this.pendingState.renderPass=e),this._send("SetRenderPass",e)}sendFloor(e){this.pendingState&&(this.pendingState.floor=e),this._send("SelectFloor",e)}sendSpot(e){this.pendingState&&(this.pendingState.spotId=e),this._send("SelectSpot",e)}sendLightingMode(e){this.pendingState&&(this.pendingState.lightingMode=e),this._send("SetLightingMode",e)}sendDollhouseSlice(e){this.pendingState&&(this.pendingState.sliced=e),this._send("SetDollhouseSlice",e?1:0)}sendCameraAngle(e){this._send("SetCameraAngle",e)}sendAnimation(e){this.pendingState&&(this.pendingState.anim=e),this._send("SetAnimation",e)}applyCinemaShot(e){const t=typeof e=="string"?e:JSON.stringify(e);this._send("ApplyCinemaShot",t)}playCameraMove(e){const t=typeof e=="string"?e:JSON.stringify(e);this._send("PlayCameraMove",t)}requestScreenshot916(){this._send("CaptureFrame916")}requestDepthScreenshot916(){this._send("CaptureDepth916")}requestCameraTelemetry(){this._send("RequestCameraTelemetry")}flyCameraTo(e,t){!e||!t||this._send("FlyCameraToJson",JSON.stringify({position:e,target:t}))}}const or=Math.PI/180,vs={x:0,y:1,z:0},Sn=(s,e)=>({x:s.x+e.x,y:s.y+e.y,z:s.z+e.z}),bh=(s,e)=>({x:s.x-e.x,y:s.y-e.y,z:s.z-e.z}),Gt=(s,e)=>({x:s.x*e,y:s.y*e,z:s.z*e}),Eh=s=>Math.hypot(s.x,s.y,s.z),nr=(s,e)=>Eh(bh(s,e)),Si=s=>{const e=Eh(s)||1;return Gt(s,1/e)},$r=(s,e)=>({x:s.y*e.z-s.z*e.y,y:s.z*e.x-s.x*e.z,z:s.x*e.y-s.y*e.x}),hl=(s,e,t)=>({x:s.x+(e.x-s.x)*t,y:s.y+(e.y-s.y)*t,z:s.z+(e.z-s.z)*t}),Gi=s=>({x:+s.x.toFixed(3),y:+s.y.toFixed(3),z:+s.z.toFixed(3)});function jx(s,e){return s.sensorGates[e]||s.sensorGates["9:16"]}function qx(s,e,t){const n=jx(t,e);return 2*Math.atan(n.sensorHeightMm/(2*s))/or}function Yx(s,e){const t=Math.min(1,Math.max(0,e));switch(s){case"linear":return t;case"easeOutCubic":return 1-Math.pow(1-t,3);case"easeInOutCubic":return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;case"easeInOutSine":default:return-(Math.cos(Math.PI*t)-1)/2}}function xr(s){return{directors:new Map(s.directorStyles.map(e=>[e.id,e])),shotTypes:new Map(s.shotTypes.map(e=>[e.id,e])),moves:new Map(s.cameraMoves.map(e=>[e.id,e])),lights:new Map(s.lightingSchemes.map(e=>[e.id,e]))}}function Th(s,e){var o;const t=xr(e),n=t.shotTypes.get(s.shotTypeId),i=t.moves.get(s.cameraMoveId),r=[];return s.durationSec>4&&r.push(`Regla 07: plano de ${s.durationSec}s (> 4.0s)`),s.cameraMoveId==="handheld_walking_lubezki"&&s.durationSec>3&&r.push(`Walking Selfie: ${s.durationSec}s (> 3.0s)`),i&&i.arcDegrees>25&&r.push(`Regla 02: arco ${i.arcDegrees}° (> 25°)`),n&&n.shotRoleDefault==="A-Roll"&&n.id!=="ots_mirror"&&n.maxSafeHeadYawDeg>25&&r.push(`Regla 02: yaw seguro ${n.maxSafeHeadYawDeg}° (> 25°)`),s.shotRole==="A-Roll"&&(s.motionStrength??2)>3.5&&r.push(`Regla 03: motion ${s.motionStrength} (> 3.5)`),s.mirrorShot&&(((o=s.controlNetOverrides)==null?void 0:o.depthWeight)??1)>.4&&r.push("mirrorShot: depthWeight debe ser ≤ 0.40"),{ok:r.length===0,issues:r}}function $x(s,e){const t=[];let n=0,i=0,r=0;for(const o of s.shots)Th(o,e).issues.forEach(l=>t.push(`${o.shotId}: ${l}`)),r+=o.durationSec,o.shotRole==="A-Roll"?n++:i++;return i<2&&t.push(`Fórmula 1:2: faltan B-Roll (${i} < 2)`),Math.abs(r-s.audioTrack.durationSec)>.01&&t.push(`Duración: planos ${r}s ≠ audio ${s.audioTrack.durationSec}s`),{ok:t.length===0,issues:t,aRoll:n,bRoll:i,totalSec:r}}function Kr(s,e,t,n,i={}){var d,h;const r=n.spotCinematographyMap[s];if(!r)throw new Error(`Spot sin mapa cinematográfico: ${s}`);const o=xr(n);if(e==="B-Roll"){const u=r.defaultBRollPresets[t%r.defaultBRollPresets.length],p=o.directors.get(r.defaultARollPreset.directorStyleId);return{shotId:`auto_${s}_broll${t}`,spotId:s,shotRole:"B-Roll",directorStyleId:p.id,shotTypeId:u.shotTypeId,cameraMoveId:u.cameraMoveId,lightingSchemeId:r.defaultARollPreset.lightingSchemeId,focalLengthMm:u.focalMm,apertureFStop:2.8,durationSec:u.durationSec,animation:"Idle",focusMode:"macro_prop_lock",brollIndex:t,mirrorShot:!1,motionStrength:o.moves.get(u.cameraMoveId).recommendedMotionStrength,...i}}const a=r.defaultARollPreset;o.directors.get(a.directorStyleId);const l=o.shotTypes.get(a.shotTypeId),c=o.moves.get(a.cameraMoveId);return{shotId:`auto_${s}_aroll`,spotId:s,shotRole:"A-Roll",directorStyleId:a.directorStyleId,shotTypeId:a.shotTypeId,cameraMoveId:a.cameraMoveId,lightingSchemeId:a.lightingSchemeId,focalLengthMm:l.defaultFocalMm,apertureFStop:l.defaultAperture,durationSec:c.recommendedDurationSec,animation:"Idle",focusMode:l.id==="ots_mirror"?"mirror_reflection_plane":"iris_lock",mirrorShot:!!((d=r.specialFlags)!=null&&d.mirrorShot&&l.id==="ots_mirror"),motionStrength:c.recommendedMotionStrength,controlNetOverrides:(h=r.specialFlags)!=null&&h.mirrorShot&&l.id==="ots_mirror"?{depthWeight:r.specialFlags.controlNetDepthWeightOverride??.35}:void 0,...i}}function Kx(s){return s.replace(/--ar\s+\S+/gi,"").replace(/\b\d{2,3}\s?mm(?:\s+(?:prime\s+lens|portrait\s+lens|lens|f\/[\d.]+))?(?:\s+f\/[\d.]+)?/gi,"").replace(/\s{2,}/g," ").replace(/\s+,/g,",").trim()}function Zx(s){return s==="vanity"?"perfume_bottle":s==="podcast"?"vintage_microphone":["bar","pool","cabaret"].includes(s)?"crystal_glass":"monstera_leaf"}function Jx({shot:s,spot:e,catalog:t,aspectRatio:n,foregroundProp:i=null}){var g;const r=xr(t),o=r.directors.get(s.directorStyleId),a=r.shotTypes.get(s.shotTypeId),l=r.moves.get(s.cameraMoveId),c=r.lights.get(s.lightingSchemeId),d=`${s.focalLengthMm}mm f/${s.apertureFStop} lens`,h=i?i.promptTokens:null;let u;if(s.shotRole==="B-Roll")u=[(((g=e.brolls)==null?void 0:g[s.brollIndex??0])||"").replace(/^B-Roll \d+:\s*/i,""),h,a.promptTokens,d,c.promptLightingTokens,o.fluxPromptTokens].filter(Boolean).join(", ");else{const _=Kx(e.prompt||"");u=[/Alina Van Dijk/i.test(_)?"":t.characterReference.tokenLockPrompt,_,h,a.promptTokens,d,c.promptLightingTokens,o.fluxPromptTokens].filter(Boolean).join(", ")}u+=` --ar ${n}`;const p=`${l.motionPromptTokens}, ${o.motionPromptStyle}`;return{flux:u,motion:p}}function Qx({shot:s,spot:e,catalog:t,building:n,aspectRatio:i="9:16",baseMode:r="night"}){const o=xr(t),a=o.directors.get(s.directorStyleId),l=o.shotTypes.get(s.shotTypeId),c=o.moves.get(s.cameraMoveId),d=o.lights.get(s.lightingSchemeId),u=(t.spotCinematographyMap[s.spotId]||{specialFlags:{}}).specialFlags||{};if(!a||!l||!c||!d)throw new Error(`Plano con ids inválidos: ${s.shotId}`);const p=e.floor*n.floorHeight,g=!!u.isLayingPosture||s.animation==="Laying",_=[];let m=e.alinaRotY||0,f=null;s.mirrorShot&&u.mirrorCenter&&(f={x:u.mirrorCenter.x,y:p+u.mirrorCenter.yOffset,z:u.mirrorCenter.z},m=Math.atan2(f.x-e.alinaPos.x,f.z-e.alinaPos.z));const w={x:Math.sin(m),y:0,z:Math.cos(m)},A={x:Math.cos(m),y:0,z:-Math.sin(m)};let b,C=w,M=A;if(s.shotRole==="B-Roll"&&e.macroTarget&&e.macroPos)b={...e.macroTarget},C=Si({x:e.macroPos.x-e.macroTarget.x,y:0,z:e.macroPos.z-e.macroTarget.z}),M=Si($r(vs,C));else{const B=g?l.layingHeightOverrideM??.22:l.targetHeightM;b={x:e.alinaPos.x,y:e.alinaPos.y+B,z:e.alinaPos.z},f&&(b=hl(b,f,.5))}let E=l.azimuthOffsetDeg;s.shotRole==="B-Roll"&&(s.brollIndex??0)%2===1&&(E=-E);const T=E*or,v=l.elevationDeg*or,x=Sn(Gt(C,Math.cos(T)),Gt(M,Math.sin(T))),I=Si(Sn(Gt(x,Math.cos(v)),Gt(vs,Math.sin(v)))),U=Sn(b,Gt(I,l.distanceM)),N=Si($r(vs,x)),O=B=>Sn(U,Sn(Gt(N,B.right),Sn(Gt(vs,B.up),Gt(I,B.forward))));let j=O(c.startOffsetLocal),H=O(c.endOffsetLocal);const Q=n.width/2,Y=n.centerZ-n.depth/2,le=n.centerZ+n.depth/2,he=!!u.isExterior;let Me=!1;const Fe=B=>{const re={...B};return he?re.y=Math.max(p+.3,re.y):(re.x=Math.min(Q-.4,Math.max(-Q+.4,re.x)),re.z=Math.min(le+1.4,Math.max(Y+.4,re.z)),re.y=Math.min(p+n.floorHeight-.35,Math.max(p+.3,re.y))),(re.x!==B.x||re.y!==B.y||re.z!==B.z)&&(Me=!0),re};j=Fe(j),H=Fe(H);const Xe=B=>he?B.y>=p+.3:B.x>=-Q+.35-1e-6&&B.x<=Q-.35+1e-6&&B.z>=Y+.35-1e-6&&B.z<=le+1.5&&B.y>=p+.3-1e-6&&B.y<=p+n.floorHeight-.3,K=Xe(j)&&Xe(H);Me&&_.push("Wall Guard recortó la trayectoria al volumen interior");const oe=s.shotRole==="B-Roll"?b:{x:e.alinaPos.x,y:b.y,z:e.alinaPos.z},Re=nr(j,oe),pe=nr(H,oe);let Ne=Re,Ke=pe;if(s.focusMode==="rack_prop_to_iris"&&(Ne=.48*pe,Ke=pe),s.focusMode==="mirror_reflection_plane"&&f){const B=nr(f,oe);Ne=nr(j,f)+B,Ke=nr(H,f)+B}const Pe={x:e.alinaPos.x,y:e.alinaPos.y+(g?.25:1.35),z:e.alinaPos.z},vt=B=>{const re=B.azimuthDeg*or,we=B.elevationDeg*or,at=Si(Sn(Gt(Sn(Gt(w,Math.cos(re)),Gt(A,Math.sin(re))),Math.cos(we)),Gt(vs,Math.sin(we))));return Gi(Sn(Pe,Gt(at,B.distanceM)))},ut=B=>({worldPos:vt(B),targetPos:Gi(Pe),colorHex:B.colorHex,intensity:B.intensity,spotAngleDeg:B.spotAngleDeg??55,kelvin:B.kelvin});d.compatibleBaseModes.includes(r)||_.push(`Luz '${d.id}' no recomendada en modo ${r}`);let Ve=null;if(s.foregroundFraming&&t.foregroundProps){const B=s.foregroundPropId||Zx(s.spotId),re=t.foregroundProps[B]||t.foregroundProps.monstera_leaf;if(re){const we=Si(bh(b,j)),at=Si($r(we,vs)),Z=Si($r(at,we)),R=Sn(j,Sn(Gt(we,re.distanceMeters),Sn(Gt(at,re.lateralOffsetM),Gt(Z,re.verticalOffsetM))));Ve={propId:re.id,name:re.name,polyhavenModelId:re.polyhavenModelId,worldPos:Gi(R),scale:re.scale,distanceFromCameraM:re.distanceMeters,promptTokens:re.promptTokens}}}const P=Th(s,t),Et=Jx({shot:s,spot:e,catalog:t,aspectRatio:i,foregroundProp:Ve});return{shotId:s.shotId,spotId:s.spotId,baseMode:r,animation:s.animation,mirrorShot:!!s.mirrorShot,foregroundFraming:!!s.foregroundFraming,foregroundProp:Ve,alinaRotY:+m.toFixed(4),camera:{startPos:Gi(j),startTarget:Gi(b),endPos:Gi(H),endTarget:Gi(b),verticalFovDeg:+qx(s.focalLengthMm,i,t).toFixed(2),focalMm:s.focalLengthMm,rollDeg:l.rollDeg,durationSec:s.durationSec,easing:c.easing,handheldHz:c.handheldHz,handheldAmpM:c.handheldAmpM},dof:{enabled:!0,focalLengthMm:s.focalLengthMm,apertureFStop:s.apertureFStop,startFocusDistM:+Ne.toFixed(3),endFocusDistM:+Ke.toFixed(3)},realtimeRig:{keyLight:ut(d.realtimeKeyLight),rimLight:ut(d.realtimeRimLight),ambientMultiplier:d.ambientMultiplier,reflectionMultiplier:d.reflectionMultiplier,fogDensityOverride:d.fogDensityOverride},volumeGrade:a.volumeProfileGrade,threeJsGrade:a.threeJsGrade,prompts:Et,zeroWaste:P,boundsOk:K,clamped:Me,warnings:_}}const ev={name:"Alina Van Dijk",heightMeters:1.72,eyeHeightM:1.56,mouthHeightM:1.5,chestHeightM:1.3,waistHeightM:1.06,hipsHeightM:.94,feetHeightM:.05,layingEyeHeightM:.24,layingChestHeightM:.16,allowedAnimations:["Idle","Walk","Rumba","Laying","HipHop"],tokenLockPrompt:"28yo Dutch-Latin woman Alina Van Dijk, vivid copper red hair with natural soft waves, vivid emerald green eyes, light natural freckles, crimson lips, micro-pores"},tv={"9:16":{sensorWidthMm:20.25,sensorHeightMm:36,description:"35mm Full Frame rotated 90 deg vertical cinema gate (portrait native)"},"4:5":{sensorWidthMm:28.8,sensorHeightMm:36,description:"35mm Full Frame rotated portrait editorial gate"},"16:9":{sensorWidthMm:36,sensorHeightMm:20.25,description:"35mm Full Frame landscape cinema gate"},"21:9":{sensorWidthMm:36,sensorHeightMm:15.43,description:"35mm Anamorphic 2.39:1 gate"}},nv=[{id:"fincher_cronenweth",name:"David Fincher — Control Clínico & Precisión",dp:"Jeff Cronenweth",moodTags:["clínico","autoridad","psicoanálisis","tensión controlada"],funnelStages:["Conversión Fanvue & Telegram VIP","Trabajo & Terapia"],defaultFocalMm:50,defaultAperture:1.8,preferredShotTypes:["mcu_interview","cu_portrait","ots_mirror","macro_broll_prop"],preferredMoves:["slow_dolly_push_in","static_breathing","rack_focus_macro_to_eyes"],defaultLightingSchemeId:"fincher_top_soft_negfill",volumeProfileGrade:{postExposure:-.08,contrast:18,saturation:-12,temperature:-14,tint:6,splitShadowsHex:"#162A2C",splitHighlightsHex:"#E3C898",bloomIntensity:.16,vignetteIntensity:.28},threeJsGrade:{toneMappingExposure:1.08,environmentIntensityMultiplier:.72},zeroWasteMotionRange:{min:1.5,max:2.6},fluxPromptTokens:"David Fincher aesthetic, Jeff Cronenweth clinical cinematography, razor-sharp focus on iris, clean symmetrical composition, deep controlled shadows with subtle cyan-amber color separation, negative fill contrast, Hasselblad crispness",motionPromptStyle:"Calculated precision mechanical dolly push-in, zero handheld jitter, steady hypnotic eye lock"},{id:"wong_kar_wai_doyle",name:"Wong Kar-wai — Seducción Nocturna & Neón Clandestino",dp:"Christopher Doyle",moodTags:["sensual","nocturno","neón","intimidad furtiva"],funnelStages:["Mundo Exterior / Viral Dance & Reels","Conversión Fanvue & Telegram VIP"],defaultFocalMm:35,defaultAperture:1.4,preferredShotTypes:["mcu_interview","ots_mirror","ms_waist","macro_broll_prop"],preferredMoves:["lateral_slider_truck","subtle_parallax_arc","static_breathing"],defaultLightingSchemeId:"wong_neon_practical",volumeProfileGrade:{postExposure:.05,contrast:22,saturation:14,temperature:-6,tint:14,splitShadowsHex:"#0E3B35",splitHighlightsHex:"#FF8C66",bloomIntensity:.42,vignetteIntensity:.34},threeJsGrade:{toneMappingExposure:1.24,environmentIntensityMultiplier:.9},zeroWasteMotionRange:{min:2,max:3},fluxPromptTokens:"Wong Kar-wai and Christopher Doyle cinematography, lush sensual 35mm anamorphic bokeh, rich emerald and crimson neon practical glow, soft foreground framing blur, poetic nocturnal Hong Kong speakeasy mood, 35mm film grain texture",motionPromptStyle:"Languid drifting lateral glide, soft candle and neon shimmer, dreamy slow tempo"},{id:"villeneuve_deakins",name:"Denis Villeneuve — Monumentalidad & Luz Motivada Única",dp:"Roger Deakins",moodTags:["arquitectónico","contemplativo","agua","lujo silencioso"],funnelStages:["High-Ticket / Membresía Anual","Top-Funnel / Intimidad Cotidiana"],defaultFocalMm:40,defaultAperture:2,preferredShotTypes:["ws_architectural","ms_waist","fs_full_body","top_down_zenital"],preferredMoves:["pedestal_reveal_up","slow_dolly_push_in","slow_dolly_pull_out"],defaultLightingSchemeId:"deakins_single_window",volumeProfileGrade:{postExposure:-.04,contrast:20,saturation:-8,temperature:8,tint:-2,splitShadowsHex:"#1B2838",splitHighlightsHex:"#F5D0A9",bloomIntensity:.24,vignetteIntensity:.26},threeJsGrade:{toneMappingExposure:1.12,environmentIntensityMultiplier:.85},zeroWasteMotionRange:{min:1.6,max:2.5},fluxPromptTokens:"Roger Deakins and Denis Villeneuve cinematography, monumental architectural symmetry, single motivated natural light source casting clean geometric shadows, delicate atmospheric mist, tactile basalt stone and water reflections",motionPromptStyle:"Solemn slow architectural pedestal rise, serene minimal subject motion, meditative stillness"},{id:"guadagnino_mukdeeprom",name:"Luca Guadagnino — Sensorialidad Táctil & Luz Mediterránea",dp:"Sayombhu Mukdeeprom",moodTags:["sensorial","diurno","espresso","táctil"],funnelStages:["Descubrimiento & Street Lifestyle","Top-Funnel / Intimidad Cotidiana"],defaultFocalMm:50,defaultAperture:2,preferredShotTypes:["ms_waist","cu_portrait","macro_broll_prop","cowboy_american"],preferredMoves:["lateral_slider_truck","slow_dolly_push_in","rack_focus_macro_to_eyes"],defaultLightingSchemeId:"guadagnino_golden_bounce",volumeProfileGrade:{postExposure:.12,contrast:8,saturation:10,temperature:18,tint:4,splitShadowsHex:"#3A2C24",splitHighlightsHex:"#FFE0B2",bloomIntensity:.26,vignetteIntensity:.16},threeJsGrade:{toneMappingExposure:1.2,environmentIntensityMultiplier:1.05},zeroWasteMotionRange:{min:2,max:3},fluxPromptTokens:"Luca Guadagnino and Sayombhu Mukdeeprom 35mm Kodak Portra aesthetic, warm Mediterranean side-window daylight, tactile marble copper and linen textures, intimate unhurried sensual realism, golden warm skin bounce",motionPromptStyle:"Gentle organic push-in and tactile macro slider glide, relaxed natural breathing"},{id:"kubrick_alcott",name:"Stanley Kubrick — Simetría Hipnótica & Luz de Velas",dp:"John Alcott",moodTags:["dominación","simetría","tenebrismo","velas 2200K"],funnelStages:["Conversión Fanvue & Telegram VIP","Top-Funnel / Intimidad Cotidiana"],defaultFocalMm:35,defaultAperture:1.4,preferredShotTypes:["low_angle_authority","ws_architectural","cu_portrait","top_down_zenital"],preferredMoves:["slow_dolly_push_in","static_breathing","slow_dolly_pull_out"],defaultLightingSchemeId:"kubrick_candlelight_2200k",volumeProfileGrade:{postExposure:-.1,contrast:26,saturation:4,temperature:22,tint:2,splitShadowsHex:"#140F14",splitHighlightsHex:"#FFB76B",bloomIntensity:.34,vignetteIntensity:.38},threeJsGrade:{toneMappingExposure:1.15,environmentIntensityMultiplier:.65},zeroWasteMotionRange:{min:1.4,max:2.4},fluxPromptTokens:"Stanley Kubrick and John Alcott Barry Lyndon candlelight aesthetic, one-point perspective symmetry, subtle low-angle dominance, ultra-fast f/1.4 practical 2200K flickering candlelight, rich chiaroscuro velvet and brass",motionPromptStyle:"Hypnotic locked symmetrical forward tracking glide, commanding stationary posture"},{id:"lubezki_natural",name:"Emmanuel Lubezki — Inmersión Fluida & Contraluz Natural",dp:"Emmanuel Lubezki",moodTags:["walking","dinámico","espontáneo","contraluz"],funnelStages:["Descubrimiento & Street Lifestyle","Mundo Exterior / Viral Dance & Reels"],defaultFocalMm:24,defaultAperture:2.4,preferredShotTypes:["ms_waist","cowboy_american","fs_full_body","low_angle_authority"],preferredMoves:["handheld_walking_lubezki","subtle_parallax_arc","pedestal_reveal_up"],defaultLightingSchemeId:"lubezki_ambient_backlight",volumeProfileGrade:{postExposure:.08,contrast:12,saturation:6,temperature:12,tint:0,splitShadowsHex:"#202A38",splitHighlightsHex:"#FFD29D",bloomIntensity:.3,vignetteIntensity:.18},threeJsGrade:{toneMappingExposure:1.18,environmentIntensityMultiplier:1.1},zeroWasteMotionRange:{min:2.4,max:3.2},fluxPromptTokens:"Emmanuel Lubezki wide-angle 24mm immersive proximity, natural golden or streetlamp rim backlight catching copper red hair strands, realistic environmental depth, candid living movement, sharp foreground subject",motionPromptStyle:"Fluid 1.7Hz handheld walking presence, gentle parallax wrap, strict 3.0s clip limit"},{id:"refn_neon_noir",name:"Nicolas Winding Refn — Neon Noir & Contraste Cromático",dp:"Natasha Braier / Darius Khondji",moodTags:["cabaret","baile","magenta-cian","hipnótico"],funnelStages:["Mundo Exterior / Viral Dance & Reels","High-Ticket / Membresía Anual"],defaultFocalMm:50,defaultAperture:1.6,preferredShotTypes:["fs_full_body","cowboy_american","ecu_eyes","low_angle_authority"],preferredMoves:["static_breathing","slow_dolly_push_in","subtle_parallax_arc"],defaultLightingSchemeId:"wong_neon_practical",volumeProfileGrade:{postExposure:-.05,contrast:30,saturation:22,temperature:-10,tint:18,splitShadowsHex:"#101A36",splitHighlightsHex:"#FF4FA3",bloomIntensity:.48,vignetteIntensity:.36},threeJsGrade:{toneMappingExposure:1.22,environmentIntensityMultiplier:.78},zeroWasteMotionRange:{min:2,max:3},fluxPromptTokens:"Nicolas Winding Refn neon noir cinematography, sculptural magenta and cyan split lighting, specular reflections on black marble, bold geometric framing, magnetic hypnotic poise",motionPromptStyle:"Locked vertical tripod or ultra-slow push-in, rhythmic center-of-mass stability, feet anchored"},{id:"coppola_intimate",name:"Sofia Coppola — Intimidad Suave & Susurro Editorial",dp:"Philippe Le Sourd",moodTags:["íntimo","spa","tocador","susurro ASMR"],funnelStages:["Top-Funnel / Intimidad Cotidiana","Conversión Fanvue & Telegram VIP"],defaultFocalMm:85,defaultAperture:1.4,preferredShotTypes:["cu_portrait","ecu_eyes","ots_mirror","top_down_zenital"],preferredMoves:["static_breathing","slow_dolly_push_in","rack_focus_macro_to_eyes"],defaultLightingSchemeId:"coppola_soft_window_spa",volumeProfileGrade:{postExposure:.1,contrast:6,saturation:-4,temperature:10,tint:8,splitShadowsHex:"#2C2538",splitHighlightsHex:"#FCE2C4",bloomIntensity:.32,vignetteIntensity:.22},threeJsGrade:{toneMappingExposure:1.16,environmentIntensityMultiplier:.95},zeroWasteMotionRange:{min:1.5,max:2.4},fluxPromptTokens:"Sofia Coppola and Philippe Le Sourd delicate editorial portrait, soft diffused window light, creamy 85mm f/1.4 shallow depth of field, intimate serene vulnerability, refined porcelain and silk atmosphere",motionPromptStyle:"Whisper-quiet slow push-in or gentle rack focus from reflection/prop to emerald eyes"}],iv=[{id:"ecu_eyes",label:"Primerísimo Primer Plano (ECU Ojos / Labios)",shotRoleDefault:"A-Roll",targetAnchor:"eyes",targetHeightM:1.56,layingHeightOverrideM:.24,defaultFocalMm:100,defaultAperture:1.8,distanceM:1.25,azimuthOffsetDeg:4,elevationDeg:0,rollDeg:0,maxSafeHeadYawDeg:12,zeroWasteRisk:"Bajo",promptTokens:"extreme close-up portrait framing emerald eyes and subtle smirk, 100mm f/1.8 macro depth of field, hyper-detailed corneal reflection and natural nasal bridge freckles"},{id:"cu_portrait",label:"Primer Plano (CU Rostro & Hombros)",shotRoleDefault:"A-Roll",targetAnchor:"eyes",targetHeightM:1.52,layingHeightOverrideM:.22,defaultFocalMm:85,defaultAperture:1.4,distanceM:1.8,azimuthOffsetDeg:8,elevationDeg:2,rollDeg:0,maxSafeHeadYawDeg:18,zeroWasteRisk:"Bajo",promptTokens:"intimate close-up portrait from collarbone to crown, 85mm f/1.4 prime lens, creamy bokeh background separation, crisp iris focus"},{id:"mcu_interview",label:"Plano Medio Corto (MCU Podcast / Confesionario)",shotRoleDefault:"A-Roll",targetAnchor:"chest",targetHeightM:1.42,layingHeightOverrideM:.2,defaultFocalMm:85,defaultAperture:1.4,distanceM:2.45,azimuthOffsetDeg:10,elevationDeg:2,rollDeg:0,maxSafeHeadYawDeg:20,zeroWasteRisk:"Bajo",promptTokens:"medium close-up chest-up framing, 85mm f/1.4 portrait lens, clinical poise, balanced headroom in 4.9m architectural room"},{id:"ms_waist",label:"Plano Medio (MS Cintura & Manos Ancladas)",shotRoleDefault:"A-Roll",targetAnchor:"waist",targetHeightM:1.24,layingHeightOverrideM:.18,defaultFocalMm:50,defaultAperture:1.8,distanceM:2.3,azimuthOffsetDeg:12,elevationDeg:1,rollDeg:0,maxSafeHeadYawDeg:22,zeroWasteRisk:"Bajo",promptTokens:"waist-up medium shot, 50mm f/1.8 standard lens, hands calmly resting on table or waist, clear spatial context"},{id:"cowboy_american",label:"Plano Americano (3/4 Muslos a Cabeza)",shotRoleDefault:"A-Roll",targetAnchor:"hips",targetHeightM:1.06,layingHeightOverrideM:.16,defaultFocalMm:50,defaultAperture:2,distanceM:2.9,azimuthOffsetDeg:14,elevationDeg:0,rollDeg:0,maxSafeHeadYawDeg:22,zeroWasteRisk:"Medio-Bajo",promptTokens:"three-quarter American shot from mid-thigh up, 50mm f/2.0 lens, confident posture and surrounding luxury interior"},{id:"fs_full_body",label:"Plano Entero (FS Cuerpo Completo 9:16)",shotRoleDefault:"A-Roll",targetAnchor:"hips",targetHeightM:.94,layingHeightOverrideM:.15,defaultFocalMm:50,defaultAperture:1.8,distanceM:3.4,azimuthOffsetDeg:8,elevationDeg:1,rollDeg:0,maxSafeHeadYawDeg:20,zeroWasteRisk:"Medio",promptTokens:"full body vertical 9:16 shot from shoes to crown, 50mm f/1.8 lens, feet firmly grounded on floor, full architectural floor-to-ceiling height"},{id:"ws_architectural",label:"Plano General Arquitectónico (WS 4.9m)",shotRoleDefault:"A-Roll",targetAnchor:"chest",targetHeightM:1.25,layingHeightOverrideM:.2,defaultFocalMm:35,defaultAperture:2.8,distanceM:4.2,azimuthOffsetDeg:16,elevationDeg:2,rollDeg:0,maxSafeHeadYawDeg:24,zeroWasteRisk:"Bajo",promptTokens:"wide architectural shot showcasing 4.9m ceiling moldings, curtains, and volumetric lighting around Alina, 35mm f/2.8 cinema lens"},{id:"ots_mirror",label:"Sobre el Hombro con Espejo Planar (OTS Mirror, cámara a espaldas)",shotRoleDefault:"A-Roll",targetAnchor:"eyes",targetHeightM:1.48,layingHeightOverrideM:.24,defaultFocalMm:50,defaultAperture:1.4,distanceM:3.6,azimuthOffsetDeg:160,elevationDeg:3,rollDeg:0,maxSafeHeadYawDeg:22,zeroWasteRisk:"Medio-Bajo",promptTokens:"cinematic over-the-shoulder composition framing Alina and her crisp reflection in illuminated vanity mirror, soft shoulder foreground blur, 50mm f/1.4"},{id:"low_angle_authority",label:"Contrapicado de Autoridad (+11 deg)",shotRoleDefault:"A-Roll",targetAnchor:"chest",targetHeightM:1.38,layingHeightOverrideM:.2,defaultFocalMm:35,defaultAperture:1.8,distanceM:2.5,azimuthOffsetDeg:8,elevationDeg:-11,rollDeg:0,maxSafeHeadYawDeg:18,zeroWasteRisk:"Bajo",promptTokens:"subtle heroic low-angle shot looking slightly upward at Alina against tall 4.9m luxury architecture, projecting effortless dominance and poise, 35mm f/1.8"},{id:"top_down_zenital",label:"Picado Alto / Cenital (Spa & Suite)",shotRoleDefault:"A-Roll",targetAnchor:"chest",targetHeightM:1.1,layingHeightOverrideM:.18,defaultFocalMm:35,defaultAperture:2,distanceM:2.65,azimuthOffsetDeg:12,elevationDeg:66,rollDeg:0,maxSafeHeadYawDeg:15,zeroWasteRisk:"Medio-Bajo",promptTokens:"high-angle architectural top-down composition looking down over basalt bathtub or charcoal linen king bed, sculptural candlelight shadows, 35mm f/2.0"},{id:"macro_broll_prop",label:"B-Roll Macro de Prop / Bodegón (Zero-Face)",shotRoleDefault:"B-Roll",targetAnchor:"prop",targetHeightM:.9,layingHeightOverrideM:.4,defaultFocalMm:100,defaultAperture:2.8,distanceM:1.35,azimuthOffsetDeg:15,elevationDeg:10,rollDeg:0,maxSafeHeadYawDeg:0,zeroWasteRisk:"Zero",promptTokens:"100mm macro f/2.8 tactile close-up B-roll insert of luxury prop with shallow bokeh, zero human face, rich PBR specular highlights"}],sv=[{id:"static_breathing",label:"Estático + Micro-Respiración (Lock Tripod)",startOffsetLocal:{right:0,up:0,forward:0},endOffsetLocal:{right:0,up:.008,forward:-.02},arcDegrees:0,easing:"easeInOutSine",recommendedDurationSec:3.5,maxDurationSec:4,handheldHz:0,handheldAmpM:0,focusTransition:"locked",recommendedMotionStrength:2,motionPromptTokens:"steady locked tripod shot, ultra-subtle chest breathing, calm blinking, zero camera drift --motion 2"},{id:"slow_dolly_push_in",label:"Dolly Push-In Quirúrgico (25cm hacia iris)",startOffsetLocal:{right:0,up:0,forward:.14},endOffsetLocal:{right:0,up:0,forward:-.14},arcDegrees:0,easing:"easeInOutSine",recommendedDurationSec:3.5,maxDurationSec:4,handheldHz:0,handheldAmpM:0,focusTransition:"locked",recommendedMotionStrength:2.2,motionPromptTokens:"very subtle slow dolly push-in 25cm toward emerald eyes, steady subject posture, smooth mechanical rail --motion 2"},{id:"slow_dolly_pull_out",label:"Dolly Pull-Out (Revelado de Escenario 4.9m)",startOffsetLocal:{right:0,up:0,forward:-.15},endOffsetLocal:{right:0,up:.06,forward:.25},arcDegrees:0,easing:"easeOutCubic",recommendedDurationSec:3.5,maxDurationSec:4,handheldHz:0,handheldAmpM:0,focusTransition:"locked",recommendedMotionStrength:2.4,motionPromptTokens:"slow graceful dolly pull-out revealing surrounding architectural room, serene poised subject --motion 2"},{id:"subtle_parallax_arc",label:"Arco Parallax Acotado (14 deg Zero-Waste Safe)",startOffsetLocal:{right:-.26,up:0,forward:.05},endOffsetLocal:{right:.26,up:.02,forward:0},arcDegrees:14,easing:"easeInOutSine",recommendedDurationSec:3.5,maxDurationSec:4,handheldHz:0,handheldAmpM:0,focusTransition:"locked",recommendedMotionStrength:2.6,motionPromptTokens:"gentle 14-degree lateral parallax camera glide keeping subject face within front quadrant, smooth background depth shift --motion 2.5"},{id:"pedestal_reveal_up",label:"Pedestal Reveal Vertical (9:16 Ascendente)",startOffsetLocal:{right:0,up:-.24,forward:.05},endOffsetLocal:{right:0,up:.14,forward:-.05},arcDegrees:0,easing:"easeInOutCubic",recommendedDurationSec:3.5,maxDurationSec:4,handheldHz:0,handheldAmpM:0,focusTransition:"locked",recommendedMotionStrength:2.5,motionPromptTokens:"smooth vertical pedestal rise revealing posture and architecture upward, poised stillness --motion 2.5"},{id:"lateral_slider_truck",label:"Slider Lateral (B-Roll Bodegón / Café)",startOffsetLocal:{right:-.32,up:0,forward:0},endOffsetLocal:{right:.32,up:0,forward:0},arcDegrees:4,easing:"easeInOutSine",recommendedDurationSec:2.5,maxDurationSec:3.5,handheldHz:0,handheldAmpM:0,focusTransition:"locked",recommendedMotionStrength:2.8,motionPromptTokens:"silky lateral tabletop slider pan across prop textures, specular reflections gliding across surface --motion 2.8"},{id:"handheld_walking_lubezki",label:"Handheld Orgánico Caminando (1.7 Hz · Máx 3.0s)",startOffsetLocal:{right:.08,up:.02,forward:.12},endOffsetLocal:{right:-.04,up:0,forward:-.28},arcDegrees:6,easing:"linear",recommendedDurationSec:3,maxDurationSec:3,handheldHz:1.7,handheldAmpM:.022,focusTransition:"locked",recommendedMotionStrength:3,motionPromptTokens:"natural front-camera handheld walking presence, subtle 1.7Hz breathing bob, copper hair catching breeze, strict 3 seconds max --motion 3"},{id:"rack_focus_macro_to_eyes",label:"Rack Focus Cinemático (Primer Término → Iris / Prop)",startOffsetLocal:{right:0,up:0,forward:.08},endOffsetLocal:{right:0,up:0,forward:-.06},arcDegrees:0,easing:"easeInOutCubic",recommendedDurationSec:2.5,maxDurationSec:3.5,handheldHz:0,handheldAmpM:0,focusTransition:"rack_near_to_subject",recommendedMotionStrength:2.2,motionPromptTokens:"smooth optical rack focus pulling smoothly from foreground bokeh edge onto crisp sharp subject detail --motion 2.2"}],rv=[{id:"rembrandt_chiaroscuro",label:"Rembrandt Chiaroscuro (45° Key + Rim Cobre)",compatibleBaseModes:["night","day"],contrastRatio:"4:1",realtimeKeyLight:{azimuthDeg:42,elevationDeg:28,distanceM:2.6,kelvin:2900,colorHex:"#FFC285",intensity:5.5,spotAngleDeg:52,purpose:"Sculptural 45-degree warm key forming soft cheek shadow triangle"},realtimeRimLight:{azimuthDeg:-142,elevationDeg:34,distanceM:2.4,kelvin:5400,colorHex:"#B8D6FF",intensity:3.2,spotAngleDeg:46,purpose:"Cool edge separation on copper hair and shoulders"},ambientMultiplier:.85,reflectionMultiplier:.9,fogDensityOverride:.0085,promptLightingTokens:"Rembrandt chiaroscuro 2900K warm key light with soft cheek shadow triangle, subtle 5400K rim separation on copper hair"},{id:"fincher_top_soft_negfill",label:"Fincher Top-Soft + Negative Fill (4:1 Clínico)",compatibleBaseModes:["night","day"],contrastRatio:"4:1",realtimeKeyLight:{azimuthDeg:28,elevationDeg:48,distanceM:2.4,kelvin:3400,colorHex:"#FFD9B3",intensity:4.8,spotAngleDeg:48,purpose:"Controlled overhead soft source preserving deep eye sockets and crisp jawline"},realtimeRimLight:{azimuthDeg:-155,elevationDeg:26,distanceM:2.3,kelvin:5800,colorHex:"#99D6EA",intensity:2.6,spotAngleDeg:42,purpose:"Cool steel rim separating silhouette against dark walnut bookshelves"},ambientMultiplier:.65,reflectionMultiplier:.78,fogDensityOverride:.007,promptLightingTokens:"Fincher top-soft key light 3400K with deep negative fill on shadow side, cool cyan rim separation, clinical contrast"},{id:"wong_neon_practical",label:"Wong / Refn Dual Gel (Ámbar Práctico + Neón Magenta/Esmeralda)",compatibleBaseModes:["night"],contrastRatio:"6:1",realtimeKeyLight:{azimuthDeg:55,elevationDeg:16,distanceM:2.2,kelvin:2400,colorHex:"#FF9B5C",intensity:5.2,spotAngleDeg:56,purpose:"Warm tungsten practical spill on cheekbones"},realtimeRimLight:{azimuthDeg:-125,elevationDeg:20,distanceM:2.5,kelvin:6500,colorHex:"#FF3D9A",intensity:4.4,spotAngleDeg:58,purpose:"Clandestine magenta-crimson neon edge kicker"},ambientMultiplier:.75,reflectionMultiplier:1.15,fogDensityOverride:.011,promptLightingTokens:"dual-tone neon noir lighting, warm 2400K tungsten key against saturated magenta-cyan rim practicals, lush specular highlights"},{id:"deakins_single_window",label:"Deakins Single-Source (Luz Direccional Motivada + Haze)",compatibleBaseModes:["day","night"],contrastRatio:"5:1",realtimeKeyLight:{azimuthDeg:72,elevationDeg:22,distanceM:3.4,kelvin:4600,colorHex:"#FFE3C4",intensity:6,spotAngleDeg:64,purpose:"Broad directional single-source key wrapping cleanly across form"},realtimeRimLight:{azimuthDeg:-160,elevationDeg:18,distanceM:3,kelvin:6200,colorHex:"#88B4E6",intensity:1.8,spotAngleDeg:54,purpose:"Subtle ambient sky bounce on opposite contour"},ambientMultiplier:.72,reflectionMultiplier:.95,fogDensityOverride:.009,promptLightingTokens:"Roger Deakins single motivated lateral light source wrapping softly across face and stone architecture, delicate atmospheric haze"},{id:"guadagnino_golden_bounce",label:"Guadagnino Golden Bounce (Luz Lateral 4500K + Rebote Cálido 2:1)",compatibleBaseModes:["day"],contrastRatio:"2:1",realtimeKeyLight:{azimuthDeg:52,elevationDeg:24,distanceM:2.9,kelvin:4500,colorHex:"#FFE1B8",intensity:4.6,spotAngleDeg:68,purpose:"Soft Mediterranean daylight grazing marble and linen"},realtimeRimLight:{azimuthDeg:-138,elevationDeg:32,distanceM:2.7,kelvin:3800,colorHex:"#FFD29E",intensity:2.8,spotAngleDeg:60,purpose:"Warm golden sun halo in copper red waves"},ambientMultiplier:1.05,reflectionMultiplier:1,fogDensityOverride:.0045,promptLightingTokens:"soft 4500K Mediterranean window side-light with warm 2:1 natural bounce fill, luminous skin tones and golden copper hair halo"},{id:"kubrick_candlelight_2200k",label:"Kubrick / Alcott Candlelight (2200K Íntimo + Penumbra 8:1)",compatibleBaseModes:["night"],contrastRatio:"8:1",realtimeKeyLight:{azimuthDeg:24,elevationDeg:8,distanceM:1.9,kelvin:2200,colorHex:"#FF9840",intensity:5.8,spotAngleDeg:58,purpose:"Low candle-level warm glow casting dramatic upward and lateral chiaroscuro"},realtimeRimLight:{azimuthDeg:-150,elevationDeg:26,distanceM:2.5,kelvin:3200,colorHex:"#E6A96E",intensity:1.6,spotAngleDeg:48,purpose:"Faint antique brass specular contour"},ambientMultiplier:.55,reflectionMultiplier:.8,fogDensityOverride:.01,promptLightingTokens:"intimate 2200K practical candlelight chiaroscuro, deep velvet shadows, warm amber specular highlights in eyes"},{id:"lubezki_ambient_backlight",label:"Lubezki Natural Backlight (Contraluz Envolvente + Fill Frontal)",compatibleBaseModes:["day","night"],contrastRatio:"3:1",realtimeKeyLight:{azimuthDeg:-162,elevationDeg:30,distanceM:3.2,kelvin:4200,colorHex:"#FFD494",intensity:6.2,spotAngleDeg:62,purpose:"Strong motivated rim/backlight haloing hair and silhouette"},realtimeRimLight:{azimuthDeg:25,elevationDeg:16,distanceM:2.4,kelvin:5e3,colorHex:"#FFF1DF",intensity:2.4,spotAngleDeg:72,purpose:"Gentle ambient frontal fill preserving clean facial detail against backlight"},ambientMultiplier:1,reflectionMultiplier:1.05,fogDensityOverride:.0055,promptLightingTokens:"luminous natural backlight haloing copper hair with soft balanced frontal bounce fill, authentic environmental depth"},{id:"coppola_soft_window_spa",label:"Coppola Soft Diffused Glow (Suave 3800K + Destello Espejo/Agua)",compatibleBaseModes:["day","night"],contrastRatio:"2:1",realtimeKeyLight:{azimuthDeg:34,elevationDeg:20,distanceM:2.4,kelvin:3600,colorHex:"#FFE0C8",intensity:4.2,spotAngleDeg:70,purpose:"Diffused flattering vanity/spa frontal-side wash"},realtimeRimLight:{azimuthDeg:-132,elevationDeg:24,distanceM:2.4,kelvin:4800,colorHex:"#D4E8FF",intensity:2.2,spotAngleDeg:55,purpose:"Gentle cool shimmer separating silk and skin from dark stone"},ambientMultiplier:.92,reflectionMultiplier:1.1,fogDensityOverride:.0065,promptLightingTokens:"soft diffused flattering editorial glow, delicate reflection highlights in mirror and eyes, low-contrast intimate warmth"}],ov=JSON.parse('{"cabaret":{"floor":0,"funnelStage":"Mundo Exterior / Viral Dance & Reels","recommendedBaseMode":"night","recommendedDirectors":["refn_neon_noir","wong_kar_wai_doyle","lubezki_natural"],"defaultARollPreset":{"directorStyleId":"refn_neon_noir","shotTypeId":"fs_full_body","cameraMoveId":"static_breathing","lightingSchemeId":"wong_neon_practical"},"defaultBRollPresets":[{"label":"Teclas Piano de Cola","shotTypeId":"macro_broll_prop","cameraMoveId":"lateral_slider_truck","targetPropIndex":0,"focalMm":100,"durationSec":2.5},{"label":"Copa & Vela Mesa Cóctel","shotTypeId":"macro_broll_prop","cameraMoveId":"rack_focus_macro_to_eyes","targetPropIndex":1,"focalMm":100,"durationSec":2.5}],"specialFlags":{"mirrorShot":false,"waterReflections":false,"wallGuardSide":"south","foregroundPropReady":true,"isExterior":false,"isLayingPosture":false}},"parking":{"floor":0,"funnelStage":"Mundo Exterior / Viral Dance & Reels","recommendedBaseMode":"night","recommendedDirectors":["lubezki_natural","wong_kar_wai_doyle","refn_neon_noir"],"defaultARollPreset":{"directorStyleId":"lubezki_natural","shotTypeId":"cowboy_american","cameraMoveId":"handheld_walking_lubezki","lightingSchemeId":"wong_neon_practical"},"defaultBRollPresets":[{"label":"Reflejo Neón sobre Capó","shotTypeId":"macro_broll_prop","cameraMoveId":"lateral_slider_truck","targetPropIndex":0,"focalMm":85,"durationSec":2.5},{"label":"Postes Dorados & Terciopelo VIP","shotTypeId":"macro_broll_prop","cameraMoveId":"pedestal_reveal_up","targetPropIndex":1,"focalMm":85,"durationSec":2.5}],"specialFlags":{"mirrorShot":false,"waterReflections":false,"wallGuardSide":"none","foregroundPropReady":true,"isExterior":true,"isLayingPosture":false}},"cafe":{"floor":1,"funnelStage":"Descubrimiento & Street Lifestyle","recommendedBaseMode":"day","recommendedDirectors":["guadagnino_mukdeeprom","coppola_intimate","fincher_cronenweth"],"defaultARollPreset":{"directorStyleId":"guadagnino_mukdeeprom","shotTypeId":"ms_waist","cameraMoveId":"slow_dolly_push_in","lightingSchemeId":"guadagnino_golden_bounce"},"defaultBRollPresets":[{"label":"Extracción Espresso La Marzocco","shotTypeId":"macro_broll_prop","cameraMoveId":"lateral_slider_truck","targetPropIndex":0,"focalMm":100,"durationSec":2.5},{"label":"Mesa Carrara junto al Ventanal","shotTypeId":"macro_broll_prop","cameraMoveId":"rack_focus_macro_to_eyes","targetPropIndex":1,"focalMm":100,"durationSec":2.5}],"specialFlags":{"mirrorShot":false,"waterReflections":false,"wallGuardSide":"south","foregroundPropReady":true,"isExterior":false,"isLayingPosture":false}},"walk_cafe":{"floor":1,"funnelStage":"Descubrimiento & Street Lifestyle","recommendedBaseMode":"day","recommendedDirectors":["lubezki_natural","guadagnino_mukdeeprom"],"defaultARollPreset":{"directorStyleId":"lubezki_natural","shotTypeId":"ms_waist","cameraMoveId":"handheld_walking_lubezki","lightingSchemeId":"lubezki_ambient_backlight"},"defaultBRollPresets":[{"label":"Hojas Monstera & Luz Balcón","shotTypeId":"macro_broll_prop","cameraMoveId":"subtle_parallax_arc","targetPropIndex":0,"focalMm":85,"durationSec":2.5},{"label":"Vitrina Repostería Artesanal","shotTypeId":"macro_broll_prop","cameraMoveId":"lateral_slider_truck","targetPropIndex":1,"focalMm":100,"durationSec":2.5}],"specialFlags":{"mirrorShot":false,"waterReflections":false,"wallGuardSide":"south","foregroundPropReady":true,"isExterior":false,"isLayingPosture":false}},"vanity":{"floor":2,"funnelStage":"Top-Funnel / Intimidad Cotidiana","recommendedBaseMode":"night","recommendedDirectors":["wong_kar_wai_doyle","coppola_intimate","fincher_cronenweth"],"defaultARollPreset":{"directorStyleId":"wong_kar_wai_doyle","shotTypeId":"ots_mirror","cameraMoveId":"slow_dolly_push_in","lightingSchemeId":"coppola_soft_window_spa"},"defaultBRollPresets":[{"label":"Macro Labial Carmesí & Perfume Ámbar","shotTypeId":"macro_broll_prop","cameraMoveId":"lateral_slider_truck","targetPropIndex":0,"focalMm":100,"durationSec":2.5},{"label":"Aro Bombillas Reflejado en Espejo","shotTypeId":"macro_broll_prop","cameraMoveId":"rack_focus_macro_to_eyes","targetPropIndex":1,"focalMm":85,"durationSec":2.5}],"specialFlags":{"mirrorShot":true,"controlNetDepthWeightOverride":0.35,"waterReflections":false,"wallGuardSide":"south","foregroundPropReady":true,"isExterior":false,"isLayingPosture":false,"mirrorCenter":{"x":-0.4,"yOffset":1.65,"z":-13.55}}},"bath":{"floor":2,"funnelStage":"Top-Funnel / Intimidad Cotidiana","recommendedBaseMode":"night","recommendedDirectors":["villeneuve_deakins","coppola_intimate","kubrick_alcott"],"defaultARollPreset":{"directorStyleId":"villeneuve_deakins","shotTypeId":"top_down_zenital","cameraMoveId":"slow_dolly_push_in","lightingSchemeId":"kubrick_candlelight_2200k"},"defaultBRollPresets":[{"label":"Velas Reflejadas en Piedra Basáltica","shotTypeId":"macro_broll_prop","cameraMoveId":"static_breathing","targetPropIndex":0,"focalMm":100,"durationSec":2.5},{"label":"Bandeja de Teca & Sales Minerales","shotTypeId":"macro_broll_prop","cameraMoveId":"lateral_slider_truck","targetPropIndex":1,"focalMm":100,"durationSec":2.5}],"specialFlags":{"mirrorShot":false,"waterReflections":true,"wallGuardSide":"south","foregroundPropReady":true,"isExterior":false,"isLayingPosture":true}},"kitchen":{"floor":2,"funnelStage":"Top-Funnel / Intimidad Cotidiana","recommendedBaseMode":"day","recommendedDirectors":["guadagnino_mukdeeprom","fincher_cronenweth"],"defaultARollPreset":{"directorStyleId":"guadagnino_mukdeeprom","shotTypeId":"ms_waist","cameraMoveId":"subtle_parallax_arc","lightingSchemeId":"guadagnino_golden_bounce"},"defaultBRollPresets":[{"label":"Vapor Espresso sobre Nero Marquina","shotTypeId":"macro_broll_prop","cameraMoveId":"static_breathing","targetPropIndex":0,"focalMm":100,"durationSec":2.5},{"label":"Lámparas Latón & Copas Suspendidas","shotTypeId":"macro_broll_prop","cameraMoveId":"pedestal_reveal_up","targetPropIndex":1,"focalMm":85,"durationSec":2.5}],"specialFlags":{"mirrorShot":false,"waterReflections":false,"wallGuardSide":"south","foregroundPropReady":true,"isExterior":false,"isLayingPosture":false}},"suite":{"floor":2,"funnelStage":"Top-Funnel / Intimidad Cotidiana","recommendedBaseMode":"night","recommendedDirectors":["coppola_intimate","kubrick_alcott","wong_kar_wai_doyle"],"defaultARollPreset":{"directorStyleId":"coppola_intimate","shotTypeId":"cu_portrait","cameraMoveId":"slow_dolly_push_in","lightingSchemeId":"kubrick_candlelight_2200k"},"defaultBRollPresets":[{"label":"Luz Ámbar de Mesilla sobre Lino Carbón","shotTypeId":"macro_broll_prop","cameraMoveId":"rack_focus_macro_to_eyes","targetPropIndex":0,"focalMm":100,"durationSec":2.5},{"label":"Copa Vino en Balcón Modernista","shotTypeId":"macro_broll_prop","cameraMoveId":"lateral_slider_truck","targetPropIndex":1,"focalMm":85,"durationSec":2.5}],"specialFlags":{"mirrorShot":false,"waterReflections":false,"wallGuardSide":"south","foregroundPropReady":true,"isExterior":false,"isLayingPosture":true}},"podcast":{"floor":3,"funnelStage":"Conversión Fanvue & Telegram VIP","recommendedBaseMode":"night","recommendedDirectors":["fincher_cronenweth","villeneuve_deakins","coppola_intimate"],"defaultARollPreset":{"directorStyleId":"fincher_cronenweth","shotTypeId":"mcu_interview","cameraMoveId":"slow_dolly_push_in","lightingSchemeId":"fincher_top_soft_negfill"},"defaultBRollPresets":[{"label":"Vapor Espresso sobre Cuaderno Clínico","shotTypeId":"macro_broll_prop","cameraMoveId":"lateral_slider_truck","targetPropIndex":0,"focalMm":100,"durationSec":2.5},{"label":"Rack Focus Lomos Bataille & Foucault","shotTypeId":"macro_broll_prop","cameraMoveId":"rack_focus_macro_to_eyes","targetPropIndex":1,"focalMm":100,"durationSec":2.5}],"specialFlags":{"mirrorShot":false,"waterReflections":false,"wallGuardSide":"south","foregroundPropReady":true,"isExterior":false,"isLayingPosture":false}},"boudoir":{"floor":3,"funnelStage":"Conversión Fanvue & Telegram VIP","recommendedBaseMode":"night","recommendedDirectors":["kubrick_alcott","wong_kar_wai_doyle","refn_neon_noir"],"defaultARollPreset":{"directorStyleId":"kubrick_alcott","shotTypeId":"low_angle_authority","cameraMoveId":"slow_dolly_push_in","lightingSchemeId":"kubrick_candlelight_2200k"},"defaultBRollPresets":[{"label":"Madejas Shibari Lila & Negra sobre Satén","shotTypeId":"macro_broll_prop","cameraMoveId":"lateral_slider_truck","targetPropIndex":0,"focalMm":100,"durationSec":2.5},{"label":"Micrófono Binaural 3Dio & Antifaz Cuero","shotTypeId":"macro_broll_prop","cameraMoveId":"rack_focus_macro_to_eyes","targetPropIndex":1,"focalMm":100,"durationSec":2.5}],"specialFlags":{"mirrorShot":false,"waterReflections":false,"wallGuardSide":"south","foregroundPropReady":true,"isExterior":false,"isLayingPosture":false}},"pool":{"floor":4,"funnelStage":"High-Ticket / Membresía Anual","recommendedBaseMode":"day","recommendedDirectors":["villeneuve_deakins","guadagnino_mukdeeprom","lubezki_natural"],"defaultARollPreset":{"directorStyleId":"villeneuve_deakins","shotTypeId":"ws_architectural","cameraMoveId":"pedestal_reveal_up","lightingSchemeId":"deakins_single_window"},"defaultBRollPresets":[{"label":"Reflejos Dorados Plunge Pool Basáltica","shotTypeId":"macro_broll_prop","cameraMoveId":"lateral_slider_truck","targetPropIndex":0,"focalMm":100,"durationSec":2.5},{"label":"Tumbona Teca & Copa Tallada Atardecer","shotTypeId":"macro_broll_prop","cameraMoveId":"rack_focus_macro_to_eyes","targetPropIndex":1,"focalMm":85,"durationSec":2.5}],"specialFlags":{"mirrorShot":false,"waterReflections":true,"wallGuardSide":"none","foregroundPropReady":true,"isExterior":true,"isLayingPosture":false}},"bar":{"floor":4,"funnelStage":"High-Ticket / Membresía Anual","recommendedBaseMode":"night","recommendedDirectors":["wong_kar_wai_doyle","fincher_cronenweth","refn_neon_noir"],"defaultARollPreset":{"directorStyleId":"wong_kar_wai_doyle","shotTypeId":"cu_portrait","cameraMoveId":"subtle_parallax_arc","lightingSchemeId":"rembrandt_chiaroscuro"},"defaultBRollPresets":[{"label":"Botellas Ámbar Retroiluminadas en Latón","shotTypeId":"macro_broll_prop","cameraMoveId":"pedestal_reveal_up","targetPropIndex":0,"focalMm":100,"durationSec":2.5},{"label":"Copa Martini sobre Cobre Martillado","shotTypeId":"macro_broll_prop","cameraMoveId":"lateral_slider_truck","targetPropIndex":1,"focalMm":100,"durationSec":2.5}],"specialFlags":{"mirrorShot":false,"waterReflections":false,"wallGuardSide":"none","foregroundPropReady":true,"isExterior":true,"isLayingPosture":false}}}'),av={monstera_leaf:{id:"monstera_leaf",name:"Hoja Tropical Monstera (Desenfocada)",polyhavenModelId:"potted_plant_04",distanceMeters:.52,lateralOffsetM:-.19,verticalOffsetM:-.06,scale:.38,promptTokens:"soft organic defocused tropical monstera leaf framing left edge in extreme shallow foreground bokeh f/1.4"},crystal_glass:{id:"crystal_glass",name:"Copa de Cristal / Vaso Facetado",polyhavenModelId:"coffee_table_round_01",distanceMeters:.48,lateralOffsetM:.16,verticalOffsetM:-.12,scale:.25,promptTokens:"subtle blurred rim of crystal cocktail glass with specular refraction in foreground bokeh f/1.4"},vintage_microphone:{id:"vintage_microphone",name:"Micrófono Shure SM7B en Primer Plano",polyhavenModelId:"ClassicNightstand_01",distanceMeters:.55,lateralOffsetM:-.19,verticalOffsetM:-.08,scale:.3,promptTokens:"dark matte studio microphone chassis blurred in soft cinematic foreground framing f/1.8"},perfume_bottle:{id:"perfume_bottle",name:"Frasco de Perfume de Tocador en Latón",polyhavenModelId:"Ottoman_01",distanceMeters:.46,lateralOffsetM:.15,verticalOffsetM:-.14,scale:.22,promptTokens:"warm golden perfume flacon rim blurred in immediate foreground bokeh f/1.4"}},mn={characterReference:ev,sensorGates:tv,directorStyles:nv,shotTypes:iv,cameraMoves:sv,lightingSchemes:rv,spotCinematographyMap:ov,foregroundProps:av},lv=5,cv={floorHeight:ee,width:pt,depth:Ut,centerZ:Ft};class dv{constructor({scene:e,renderer:t,lighting:n,camCtrl:i,alina:r,unityBridge:o,getSpot:a,prepareSpot:l,getBaseMode:c}){Object.assign(this,{scene:e,renderer:t,lighting:n,camCtrl:i,alina:r,unityBridge:o,getSpot:a,prepareSpot:l,getBaseMode:c}),this.active=!1,this.payload=null,this.shot=null,this.playing=!1,this.t0=0,this.onFrameHud=null,this.onMoveEnd=null,this._saved=null;const d=h=>{const u=new hh(16777215,0,30,0,.6,1.4);return u.castShadow=h,h&&(u.shadow.mapSize.set(1024,1024),u.shadow.bias=-4e-4,u.shadow.radius=4),u.visible=!1,this.scene.add(u,u.target),u};this.keyLight=d(!0),this.rimLight=d(!1),this.foregroundGroup=new Wt,this.foregroundGroup.name="CinemaForegroundPropGroup",this.foregroundGroup.visible=!1,this.scene.add(this.foregroundGroup),this._initForegroundMeshes(),i.controls.addEventListener("start",()=>{this.playing&&this.stop(!1)})}_initForegroundMeshes(){const e=new en(.005,.35,.85,12,4,!0,0,Math.PI),t=new Ue({color:1333810,roughness:.38,metalness:.05,side:Nn}),n=new Oe(e,t);n.rotation.z=Math.PI/4,n.castShadow=!0;const i=new en(.12,.08,.32,16),r=new tn({color:16777215,roughness:.08,metalness:.1,transmission:.88,transparent:!0,opacity:.72,ior:1.5}),o=new Oe(i,r),a=new Wt,l=new Oe(new en(.07,.07,.32,16),new Ue({color:2172201,roughness:.6})),c=new Oe(new Yi(.08,16,16),new Ue({color:4804695,metalness:.8,roughness:.3}));c.position.y=.18,a.add(l,c);const d=new Oe(new en(.06,.09,.26,16),new Ue({color:13145662,metalness:.75,roughness:.25}));this.foregroundMeshes={monstera_leaf:n,crystal_glass:o,vintage_microphone:a,perfume_bottle:d}}_saveBase(){if(this._saved)return;const e=this.lighting;this._saved={exposure:this.renderer.toneMappingExposure,envIntensity:this.scene.environmentIntensity,hemi:e.hemiLight.intensity,fog:this.scene.fog&&this.scene.fog.isFogExp2?this.scene.fog.density:null,fov:this.camCtrl.camera.fov,maxPolar:this.camCtrl.controls.maxPolarAngle,minDist:this.camCtrl.controls.minDistance},this.camCtrl.controls.maxPolarAngle=Math.PI*.99,this.camCtrl.controls.minDistance=.25}_restoreBase(){var n;if(!this._saved)return;const e=this._saved,t=this.lighting;this.renderer.toneMappingExposure=e.exposure,this.scene.environmentIntensity=e.envIntensity,t.hemiLight.intensity=e.hemi,e.fog!=null&&((n=this.scene.fog)!=null&&n.isFogExp2)&&(this.scene.fog.density=e.fog),this.camCtrl.camera.fov=e.fov,this.camCtrl.controls.maxPolarAngle=e.maxPolar,this.camCtrl.controls.minDistance=e.minDist,this.camCtrl.camera.updateProjectionMatrix(),this._saved=null}exit(){var t;this.stop(!1),this.keyLight.visible=!1,this.rimLight.visible=!1,this.keyLight.intensity=this.rimLight.intensity=0,this.foregroundGroup.visible=!1,this._restoreBase();const e=this.getSpot();e&&((t=this.alina)==null||t.placeAtSpot(e)),this.active=!1,this.payload=null}resolve(e,t="9:16"){const n=this.getSpot(e.spotId);if(!n)throw new Error(`Spot desconocido: ${e.spotId}`);return Qx({shot:e,spot:n,catalog:mn,building:cv,aspectRatio:t,baseMode:this.getBaseMode()})}apply(e,t="9:16"){var a,l,c,d;this.stop(!1),(a=this.prepareSpot)==null||a.call(this,e.spotId);const n=this.resolve(e,t);this._saveBase(),this.active=!0,this.shot=e,this.payload=n,(l=this.alina)!=null&&l.root&&(this.alina.root.rotation.y=n.alinaRotY,n.animation&&this.alina.playAnimation(n.animation,.25));const i=(h,u)=>{h.visible=!0,h.color.set(u.colorHex),h.intensity=u.intensity*lv,h.angle=uo.degToRad(Math.min(75,u.spotAngleDeg/2)),h.position.set(u.worldPos.x,u.worldPos.y,u.worldPos.z),h.target.position.set(u.targetPos.x,u.targetPos.y,u.targetPos.z),h.target.updateMatrixWorld()};i(this.keyLight,n.realtimeRig.keyLight),i(this.rimLight,n.realtimeRig.rimLight);const r=n.threeJsGrade,o=this._saved;return this.renderer.toneMappingExposure=r.toneMappingExposure,this.scene.environmentIntensity=o.envIntensity*r.environmentIntensityMultiplier*n.realtimeRig.reflectionMultiplier,this.lighting.hemiLight.intensity=o.hemi*n.realtimeRig.ambientMultiplier,(c=this.scene.fog)!=null&&c.isFogExp2&&n.realtimeRig.fogDensityOverride>0&&(this.scene.fog.density=n.realtimeRig.fogDensityOverride),this._setCamera(0,0),this._updateForegroundProp(n.foregroundProp),(d=this.unityBridge)==null||d.applyCinemaShot(n),n}_updateForegroundProp(e){for(;this.foregroundGroup.children.length>0;)this.foregroundGroup.remove(this.foregroundGroup.children[0]);if(!e){this.foregroundGroup.visible=!1;return}const t=this.foregroundMeshes[e.propId]||this.foregroundMeshes.monstera_leaf;if(t){const n=t.clone(!0);n.scale.setScalar(e.scale||.3),this.foregroundGroup.add(n),this.foregroundGroup.position.set(e.worldPos.x,e.worldPos.y,e.worldPos.z),this.foregroundGroup.visible=!0}}_setCamera(e,t){const n=this.payload;if(!n)return;const i=n.camera,r=Yx(i.easing,e),o=hl(i.startPos,i.endPos,r),a=hl(i.startTarget,i.endTarget,r);if(i.handheldAmpM>0){const d=2*Math.PI*i.handheldHz;o.x+=Math.sin(t*d)*i.handheldAmpM*.6+Math.sin(t*d*.37+1.3)*i.handheldAmpM*.4,o.y+=Math.sin(t*d*2+.5)*i.handheldAmpM*.7,o.z+=Math.sin(t*d*.53+2.1)*i.handheldAmpM*.3}const l=this.camCtrl.camera;l.position.set(o.x,o.y,o.z),this.camCtrl.controls.target.set(a.x,a.y,a.z),this.camCtrl.isTransitioning=!1,l.fov=i.verticalFovDeg,l.updateProjectionMatrix(),this.camCtrl.controls.update(),i.rollDeg&&l.rotateZ(uo.degToRad(i.rollDeg));const c=n.dof.startFocusDistM+(n.dof.endFocusDistM-n.dof.startFocusDistM)*r;this.focusDistM=c}play(e){var t;this.payload&&(this.stop(!1),this.playing=!0,this.t0=performance.now(),this.onMoveEnd=e||null,(t=this.unityBridge)==null||t.playCameraMove(this.payload))}stop(e){if(!this.playing)return;this.playing=!1;const t=this.onMoveEnd;this.onMoveEnd=null,e&&t&&t()}update(){var e;if(!this.active)return!1;if(this.playing&&this.payload){const t=(performance.now()-this.t0)/1e3,n=this.payload.camera.durationSec,i=Math.min(1,t/n);if(this._setCamera(i,t),(e=this.onFrameHud)==null||e.call(this,{t:i,el:t,dur:n,focusM:this.focusDistM}),i>=1){this.playing=!1;const r=this.onMoveEnd;this.onMoveEnd=null,r==null||r()}return!0}return!1}}const hv=[{sceneId:"scene_01_podcast_fincher",title:"The Mind Sanctuary — Diagnóstico de Control (Fincher 4-Shot)",chapterRef:"Capítulo 1: El Arte de Ceder el Control",targetPlatform:"Fanvue VIP",aspectRatio:"9:16",baseLightingMode:"night",audioTrack:{provider:"ElevenLabs",voiceId:"Alina-Hypno-v1",bpm:72,durationSec:12,scriptFull:"Llevas diez horas resolviendo problemas de otros... ¿cuándo fue la última vez que alguien tomó el mando por ti? [pausa de 2.0s] Entra. Cierra la puerta. Esta noche decido yo."},shots:[{shotId:"s01_podcast_aroll_open",order:1,spotId:"podcast",shotRole:"A-Roll",directorStyleId:"fincher_cronenweth",shotTypeId:"mcu_interview",cameraMoveId:"slow_dolly_push_in",lightingSchemeId:"fincher_top_soft_negfill",focalLengthMm:85,apertureFStop:1.4,durationSec:3.5,animation:"Idle",focusMode:"iris_lock",scriptSegment:"Llevas diez horas resolviendo problemas de otros...",mirrorShot:!1,motionStrength:2.2,controlNetOverrides:{depthWeight:.9,normalWeight:.75,openPoseWeight:1,denoisingStrength:.52},exportPasses:["beauty","depth","normal","openpose2d","mask"]},{shotId:"s01_podcast_broll_espresso",order:2,spotId:"podcast",shotRole:"B-Roll",directorStyleId:"fincher_cronenweth",shotTypeId:"macro_broll_prop",cameraMoveId:"lateral_slider_truck",lightingSchemeId:"fincher_top_soft_negfill",focalLengthMm:100,apertureFStop:2.8,durationSec:2.5,animation:"Idle",focusMode:"macro_prop_lock",brollIndex:0,scriptSegment:"¿cuándo fue la última vez...",mirrorShot:!1,motionStrength:2.5,controlNetOverrides:{depthWeight:.85,normalWeight:.8,openPoseWeight:0,denoisingStrength:.32},exportPasses:["beauty","depth","normal"]},{shotId:"s01_podcast_broll_books",order:3,spotId:"podcast",shotRole:"B-Roll",directorStyleId:"fincher_cronenweth",shotTypeId:"macro_broll_prop",cameraMoveId:"rack_focus_macro_to_eyes",lightingSchemeId:"rembrandt_chiaroscuro",focalLengthMm:100,apertureFStop:2.8,durationSec:2.5,animation:"Idle",focusMode:"rack_prop_to_iris",brollIndex:1,scriptSegment:"...que alguien tomó el mando por ti? [pausa]",mirrorShot:!1,motionStrength:2.2,controlNetOverrides:{depthWeight:.85,normalWeight:.8,openPoseWeight:0,denoisingStrength:.3},exportPasses:["beauty","depth","normal"]},{shotId:"s01_podcast_aroll_close",order:4,spotId:"podcast",shotRole:"A-Roll",directorStyleId:"fincher_cronenweth",shotTypeId:"cu_portrait",cameraMoveId:"static_breathing",lightingSchemeId:"fincher_top_soft_negfill",focalLengthMm:85,apertureFStop:1.4,durationSec:3.5,animation:"Idle",focusMode:"iris_lock",scriptSegment:"Entra. Cierra la puerta. Esta noche decido yo.",mirrorShot:!1,motionStrength:2,controlNetOverrides:{depthWeight:.9,normalWeight:.8,openPoseWeight:1,denoisingStrength:.5},exportPasses:["beauty","depth","normal","openpose2d","mask"]}]},{sceneId:"scene_02_vanity_wong_mirror",title:"El Tocador Vanity — Espejo Planar & Confesión (Wong Kar-wai)",chapterRef:"Capítulo 2: Desarme Psicológico Frente al Espejo",targetPlatform:"Instagram Reels",aspectRatio:"9:16",baseLightingMode:"night",audioTrack:{provider:"ElevenLabs",voiceId:"Alina-Hypno-v1",bpm:68,durationSec:12,scriptFull:"Te pasas el día sosteniendo el personaje... fingiendo que no pesa. [pausa de 2.0s] Frente a este espejo solo existe la verdad. Déjame ver quién eres cuando nadie te está evaluando."},shots:[{shotId:"s02_vanity_aroll_ots_mirror",order:1,spotId:"vanity",shotRole:"A-Roll",directorStyleId:"wong_kar_wai_doyle",shotTypeId:"ots_mirror",cameraMoveId:"slow_dolly_push_in",lightingSchemeId:"coppola_soft_window_spa",focalLengthMm:50,apertureFStop:1.4,durationSec:3.5,animation:"Idle",focusMode:"mirror_reflection_plane",scriptSegment:"Te pasas el día sosteniendo el personaje...",mirrorShot:!0,foregroundFraming:!0,foregroundPropId:"perfume_bottle",motionStrength:2.3,controlNetOverrides:{depthWeight:.35,normalWeight:.85,openPoseWeight:1,cannyWeight:.65,denoisingStrength:.48},exportPasses:["beauty","depth","normal","openpose2d","mask"]},{shotId:"s02_vanity_broll_lipstick",order:2,spotId:"vanity",shotRole:"B-Roll",directorStyleId:"wong_kar_wai_doyle",shotTypeId:"macro_broll_prop",cameraMoveId:"lateral_slider_truck",lightingSchemeId:"wong_neon_practical",focalLengthMm:100,apertureFStop:2,durationSec:2.5,animation:"Idle",focusMode:"macro_prop_lock",brollIndex:0,scriptSegment:"...fingiendo que no pesa.",mirrorShot:!1,motionStrength:2.6,controlNetOverrides:{depthWeight:.85,normalWeight:.75,openPoseWeight:0,denoisingStrength:.3},exportPasses:["beauty","depth","normal"]},{shotId:"s02_vanity_broll_bulbs",order:3,spotId:"vanity",shotRole:"B-Roll",directorStyleId:"coppola_intimate",shotTypeId:"macro_broll_prop",cameraMoveId:"rack_focus_macro_to_eyes",lightingSchemeId:"coppola_soft_window_spa",focalLengthMm:85,apertureFStop:1.4,durationSec:2.5,animation:"Idle",focusMode:"rack_prop_to_iris",brollIndex:1,scriptSegment:"Frente a este espejo solo existe la verdad.",mirrorShot:!0,motionStrength:2.2,controlNetOverrides:{depthWeight:.35,normalWeight:.8,openPoseWeight:0,cannyWeight:.6,denoisingStrength:.35},exportPasses:["beauty","depth","normal"]},{shotId:"s02_vanity_aroll_cu_close",order:4,spotId:"vanity",shotRole:"A-Roll",directorStyleId:"coppola_intimate",shotTypeId:"cu_portrait",cameraMoveId:"subtle_parallax_arc",lightingSchemeId:"coppola_soft_window_spa",focalLengthMm:85,apertureFStop:1.4,durationSec:3.5,animation:"Idle",focusMode:"iris_lock",scriptSegment:"Déjame ver quién eres cuando nadie te está evaluando.",mirrorShot:!1,motionStrength:2.1,controlNetOverrides:{depthWeight:.9,normalWeight:.8,openPoseWeight:1,denoisingStrength:.48},exportPasses:["beauty","depth","normal","openpose2d","mask"]}]},{sceneId:"scene_03_pool_villeneuve_sunset",title:"The Inner Circle Rooftop — Atardecer Monumental (Villeneuve / Deakins)",chapterRef:"Capítulo 4: Membresía VIP & Silencio en la Cima",targetPlatform:"YouTube Shorts",aspectRatio:"9:16",baseLightingMode:"day",audioTrack:{provider:"ElevenLabs",voiceId:"Alina-Hypno-v1",bpm:60,durationSec:12,scriptFull:"Cuando estás arriba, el ruido de abajo se disuelve. Aquí solo entra quien comprende que liderar también exige saber rendirse. [pausa de 2.0s] Bienvenido al círculo íntimo."},shots:[{shotId:"s03_pool_aroll_pedestal_ws",order:1,spotId:"pool",shotRole:"A-Roll",directorStyleId:"villeneuve_deakins",shotTypeId:"ws_architectural",cameraMoveId:"pedestal_reveal_up",lightingSchemeId:"deakins_single_window",focalLengthMm:40,apertureFStop:2,durationSec:3.5,animation:"Idle",focusMode:"iris_lock",scriptSegment:"Cuando estás arriba, el ruido de abajo se disuelve.",mirrorShot:!1,motionStrength:2.2,controlNetOverrides:{depthWeight:.92,normalWeight:.75,openPoseWeight:1,denoisingStrength:.5},exportPasses:["beauty","depth","normal","openpose2d","mask"]},{shotId:"s03_pool_broll_water_ripples",order:2,spotId:"pool",shotRole:"B-Roll",directorStyleId:"villeneuve_deakins",shotTypeId:"macro_broll_prop",cameraMoveId:"lateral_slider_truck",lightingSchemeId:"deakins_single_window",focalLengthMm:100,apertureFStop:2.8,durationSec:2.5,animation:"Idle",focusMode:"macro_prop_lock",brollIndex:0,scriptSegment:"Aquí solo entra quien comprende...",mirrorShot:!1,motionStrength:2.4,controlNetOverrides:{depthWeight:.8,normalWeight:.85,openPoseWeight:0,denoisingStrength:.28},exportPasses:["beauty","depth","normal"]},{shotId:"s03_pool_broll_lounger_glass",order:3,spotId:"pool",shotRole:"B-Roll",directorStyleId:"guadagnino_mukdeeprom",shotTypeId:"macro_broll_prop",cameraMoveId:"rack_focus_macro_to_eyes",lightingSchemeId:"guadagnino_golden_bounce",focalLengthMm:85,apertureFStop:2,durationSec:2.5,animation:"Idle",focusMode:"rack_prop_to_iris",brollIndex:1,scriptSegment:"...que liderar también exige saber rendirse.",mirrorShot:!1,motionStrength:2.3,controlNetOverrides:{depthWeight:.85,normalWeight:.8,openPoseWeight:0,denoisingStrength:.3},exportPasses:["beauty","depth","normal"]},{shotId:"s03_pool_aroll_cu_sunset",order:4,spotId:"pool",shotRole:"A-Roll",directorStyleId:"villeneuve_deakins",shotTypeId:"cu_portrait",cameraMoveId:"slow_dolly_push_in",lightingSchemeId:"lubezki_ambient_backlight",focalLengthMm:85,apertureFStop:1.4,durationSec:3.5,animation:"Idle",focusMode:"iris_lock",scriptSegment:"Bienvenido al círculo íntimo.",mirrorShot:!1,motionStrength:2.1,controlNetOverrides:{depthWeight:.9,normalWeight:.8,openPoseWeight:1,denoisingStrength:.48},exportPasses:["beauty","depth","normal","openpose2d","mask"]}]}],uv={storyboard:hv},bn=xr(mn),ir=[24,28,35,40,50,85,100],fv={iris_lock:"Iris (lock)",macro_prop_lock:"Prop macro (lock)",rack_prop_to_iris:"Rack prop → iris",mirror_reflection_plane:"Plano del espejo"},bi=s=>String(s).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),ys=(s,e,t)=>`<option value="${bi(s)}" ${t?"selected":""}>${bi(e)}</option>`;function pv(s,e){var C;const{director:t}=e,n={directorId:"fincher_cronenweth",shotTypeId:"mcu_interview",moveId:"slow_dolly_push_in",lightId:"fincher_top_soft_negfill",lens:85,aperture:1.4,role:"A",scene:null,sceneKey:"auto",playingScene:!1,sceneAbort:!1,foregroundFraming:!1,foregroundPropId:null};s.innerHTML=`
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
        <select id="cin-dir" class="w-full bg-black/50 border border-white/10 rounded-lg p-1.5 text-white">${mn.directorStyles.map(M=>ys(M.id,M.name.split("—")[0].trim(),M.id===n.directorId)).join("")}</select></label>
      <label class="space-y-1"><span class="text-slate-400">Toma / Encuadre</span>
        <select id="cin-shot" class="w-full bg-black/50 border border-white/10 rounded-lg p-1.5 text-white">${mn.shotTypes.map(M=>ys(M.id,M.label.split("(")[0].trim(),M.id===n.shotTypeId)).join("")}</select></label>
      <label class="space-y-1"><span class="text-slate-400">Desplazamiento</span>
        <select id="cin-move" class="w-full bg-black/50 border border-white/10 rounded-lg p-1.5 text-white">${mn.cameraMoves.map(M=>ys(M.id,M.label.split("(")[0].trim(),M.id===n.moveId)).join("")}</select></label>
      <label class="space-y-1"><span class="text-slate-400">Iluminación</span>
        <select id="cin-light" class="w-full bg-black/50 border border-white/10 rounded-lg p-1.5 text-white">${mn.lightingSchemes.map(M=>ys(M.id,M.label.split("(")[0].trim(),M.id===n.lightId)).join("")}</select></label>
      <label class="space-y-1"><span class="text-slate-400">Lente</span>
        <select id="cin-lens" class="w-full bg-black/50 border border-white/10 rounded-lg p-1.5 text-white">${ir.map(M=>ys(M,`${M} mm`,M===n.lens)).join("")}</select></label>
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
  </div>`;const i=M=>s.querySelector("#"+M),r=document.createElement("div");r.id="cinema-hud",r.className="hidden absolute top-14 left-1/2 -translate-x-1/2 z-20 pointer-events-none text-center",r.innerHTML=`<div class="bg-black/80 backdrop-blur-md border border-white/15 rounded-lg px-3 py-1.5 text-[10px] font-mono text-slate-200 shadow-xl">
      <div id="cin-hud-title" class="font-bold text-[#f29979]"></div><div id="cin-hud-sub" class="text-slate-400"></div>
      <div class="h-1 mt-1 bg-white/10 rounded overflow-hidden"><div id="cin-hud-bar" class="h-full bg-emerald-400" style="width:0%"></div></div></div>`,(C=document.getElementById("viewport-wrapper"))==null||C.appendChild(r);const o=M=>r.classList.toggle("hidden",!M),a=()=>({role:n.role==="A"?"A-Roll":"B-Roll",brollIndex:n.role==="A"?0:Number(n.role[1])});function l(){var O,j;const M=e.getActiveSpot(),E=bn.moves.get(n.moveId),T=bn.shotTypes.get(n.shotTypeId),v=mn.spotCinematographyMap[M.id],{role:x,brollIndex:I}=a(),U=T.id==="ots_mirror"&&!!((O=v==null?void 0:v.specialFlags)!=null&&O.mirrorShot),N={shotId:`manual_${M.id}_${x==="A-Roll"?"a":"b"+I}`,spotId:M.id,shotRole:x,brollIndex:I,directorStyleId:n.directorId,shotTypeId:n.shotTypeId,cameraMoveId:n.moveId,lightingSchemeId:n.lightId,focalLengthMm:n.lens,apertureFStop:n.aperture,durationSec:Math.min(4,E.recommendedDurationSec),animation:((j=e.getAnim)==null?void 0:j.call(e))||M.defaultAnim||"Idle",focusMode:U?"mirror_reflection_plane":x==="B-Roll"?"macro_prop_lock":"iris_lock",mirrorShot:U,motionStrength:E.recommendedMotionStrength,foregroundFraming:!!n.foregroundFraming,foregroundPropId:n.foregroundPropId||void 0};return U&&(N.controlNetOverrides={depthWeight:v.specialFlags.controlNetDepthWeightOverride??.35}),N}function c(){i("cin-dir").value=n.directorId,i("cin-shot").value=n.shotTypeId,i("cin-move").value=n.moveId,i("cin-light").value=n.lightId,i("cin-lens").value=String(n.lens),i("cin-role").value=n.role,i("cin-fg-toggle").checked=!!n.foregroundFraming,i("cin-fg-prop").classList.toggle("hidden",!n.foregroundFraming),n.foregroundPropId&&(i("cin-fg-prop").value=n.foregroundPropId)}function d(M,E){const T=bn.lights.get(E.lightingSchemeId),v=M.zeroWaste;i("cin-readout").innerHTML=[["vFOV",`${M.camera.verticalFovDeg}° (${E.focalLengthMm}mm f/${E.apertureFStop})`],["Foco",`${M.dof.startFocusDistM}→${M.dof.endFocusDistM} m`],["Duración",`${M.camera.durationSec}s · ${M.camera.easing}`],["Key/Rim",`${T.realtimeKeyLight.kelvin}K / ${T.realtimeRimLight.kelvin}K · ${T.contrastRatio}`],["Primer Plano",M.foregroundProp?`🌿 ${M.foregroundProp.name}`:"Desactivado"],["Foco en",fv[E.focusMode]||E.focusMode],["Motion",`${E.motionStrength} (máx 3.5)`]].map(([U,N])=>`<div><span class="text-slate-500">${U}</span> <span class="text-slate-200">${bi(N)}</span></div>`).join("");const x=i("cin-zw");x.textContent=v.ok?"Zero-Waste ✔":"Zero-Waste ✖",x.className=`text-[10px] font-mono px-2 py-0.5 rounded-full border ${v.ok?"text-emerald-300 border-emerald-500/30 bg-emerald-500/10":"text-rose-300 border-rose-500/30 bg-rose-500/10"}`;const I=[...v.issues,...M.warnings];i("cin-warn").classList.toggle("hidden",I.length===0),i("cin-warn").innerHTML=I.map(U=>"⚠ "+bi(U)).join("<br>"),i("cin-flux").textContent=M.prompts.flux,i("cin-motion").textContent=M.prompts.motion}function h(M,E){const T=t.apply(M,"9:16");return i("cin-exit").classList.remove("hidden"),d(T,M),E||e.setStatus(`🎬 <span class="text-emerald-400 font-bold">${bi(bn.directors.get(M.directorStyleId).name.split("—")[0].trim())}</span> · ${bi(bn.shotTypes.get(M.shotTypeId).label.split("(")[0].trim())} · ${M.focalLengthMm}mm`),T}function u(M,E=""){i("cin-hud-title").textContent=`${M.shotRole} · ${bn.shotTypes.get(M.shotTypeId).label.split("(")[0].trim()}`,i("cin-hud-sub").textContent=`${bn.directors.get(M.directorStyleId).name.split("—")[0].trim()} · ${M.focalLengthMm}mm f/${M.apertureFStop} · ${bn.moves.get(M.cameraMoveId).label.split("(")[0].trim()}${E}`}t.onFrameHud=({t:M})=>{i("cin-hud-bar").style.width=`${Math.round(M*100)}%`},i("cin-dir").onchange=M=>{const E=bn.directors.get(M.target.value);n.directorId=E.id,n.shotTypeId=E.preferredShotTypes[0],n.moveId=E.preferredMoves[0],n.lightId=E.defaultLightingSchemeId,n.lens=E.defaultFocalMm,n.aperture=E.defaultAperture,n.role="A",n.foregroundFraming=E.id==="wong_kar_wai_doyle"||E.id==="guadagnino_mukdeeprom";const T=ir.reduce((v,x)=>Math.abs(x-n.lens)<Math.abs(v-n.lens)?x:v);n.lens=T,c(),h(l())},i("cin-shot").onchange=M=>{const E=bn.shotTypes.get(M.target.value);n.shotTypeId=E.id,n.lens=ir.reduce((T,v)=>Math.abs(v-E.defaultFocalMm)<Math.abs(T-E.defaultFocalMm)?v:T),n.aperture=E.defaultAperture,E.shotRoleDefault==="B-Roll"&&n.role==="A"&&(n.role="B0"),E.shotRoleDefault==="A-Roll"&&n.role!=="A"&&(n.role="A"),c(),h(l())},i("cin-move").onchange=M=>{n.moveId=M.target.value,h(l())},i("cin-light").onchange=M=>{n.lightId=M.target.value,h(l())},i("cin-lens").onchange=M=>{n.lens=Number(M.target.value),h(l())},i("cin-role").onchange=M=>{n.role=M.target.value,n.role!=="A"?(n.shotTypeId="macro_broll_prop",n.lens=100,n.aperture=2.8):n.shotTypeId==="macro_broll_prop"&&(n.shotTypeId=bn.directors.get(n.directorId).preferredShotTypes[0],n.lens=85,n.aperture=1.4),c(),h(l())},i("cin-fg-toggle").onchange=M=>{n.foregroundFraming=M.target.checked,i("cin-fg-prop").classList.toggle("hidden",!n.foregroundFraming),h(l())},i("cin-fg-prop").onchange=M=>{n.foregroundPropId=M.target.value==="auto"?null:M.target.value,h(l())},i("cin-recipe").onclick=()=>{p(),h(l())},i("cin-apply").onclick=()=>h(l()),i("cin-play").onclick=()=>{const M=l();h(M,!0),u(M),o(!0),t.play(()=>setTimeout(()=>o(!1),600))},i("cin-exit").onclick=()=>{t.exit(),o(!1),i("cin-exit").classList.add("hidden"),i("cin-zw").textContent="—",e.setStatus("Modo cine desactivado.")},i("cin-copy-flux").onclick=()=>navigator.clipboard.writeText(i("cin-flux").textContent),i("cin-copy-motion").onclick=()=>navigator.clipboard.writeText(i("cin-motion").textContent);function p(){const M=e.getActiveSpot(),E=Kr(M.id,"A-Roll",0,mn);n.directorId=E.directorStyleId,n.shotTypeId=E.shotTypeId,n.moveId=E.cameraMoveId,n.lightId=E.lightingSchemeId,n.role="A",n.lens=ir.reduce((T,v)=>Math.abs(v-E.focalLengthMm)<Math.abs(T-E.focalLengthMm)?v:T),n.aperture=E.apertureFStop,c()}function g(){const M=e.getActiveSpot(),E=mn.spotCinematographyMap[M.id],T=Kr(M.id,"A-Roll",0,mn,{shotId:`auto_${M.id}_a1`,durationSec:3.5}),v=Kr(M.id,"B-Roll",0,mn,{shotId:`auto_${M.id}_b0`,durationSec:2.5}),x=Kr(M.id,"B-Roll",1,mn,{shotId:`auto_${M.id}_b1`,durationSec:2.5}),I={...T,shotId:`auto_${M.id}_a2`,durationSec:3.5,cameraMoveId:"static_breathing",motionStrength:2},U=[T,v,x,I].map((N,O)=>({...N,order:O+1,animation:M.defaultAnim||"Idle"}));return{sceneId:`auto_${M.id}`,title:`Auto-maqueta 1:2 · ${M.name}`,targetPlatform:"Instagram Reels",aspectRatio:"9:16",baseLightingMode:E.recommendedBaseMode,audioTrack:{provider:"ElevenLabs",voiceId:"Alina-Hypno-v1",durationSec:12,scriptFull:M.script},shots:U}}function _(){return[g(),...uv.storyboard]}function m(){return _().find(M=>M.sceneId===n.sceneKey)||_()[0]}function f(){const M=_();i("cin-scene").innerHTML=M.map(x=>ys(x.sceneId,x.title,x.sceneId===n.sceneKey)).join(""),M.find(x=>x.sceneId===n.sceneKey)||(n.sceneKey=M[0].sceneId);const E=m();n.scene=E;const T=$x(E,mn),v=i("cin-scene-badge");v.textContent=`${T.aRoll}A:${T.bRoll}B · ${T.totalSec}s ${T.ok?"✔":"✖"}`,v.className=`text-[10px] font-mono px-2 py-0.5 rounded-full border ${T.ok?"text-emerald-300 border-emerald-500/30":"text-rose-300 border-rose-500/30"}`,v.title=T.issues.join(`
`),i("cin-chips").innerHTML=E.shots.map((x,I)=>`<button data-i="${I}" class="cin-chip text-[10px] font-mono px-2 py-1 rounded-lg border ${x.shotRole==="A-Roll"?"border-[#c86446]/50 text-[#f29979]":"border-sky-500/40 text-sky-300"} bg-black/40 hover:bg-white/10">${I+1}·${x.shotRole==="A-Roll"?"A":"B"} ${bi(bn.shotTypes.get(x.shotTypeId).id.replace("_"," ").slice(0,10))} ${x.durationSec}s</button>`).join(""),s.querySelectorAll(".cin-chip").forEach(x=>{x.onclick=()=>{const I=E.shots[Number(x.dataset.i)];n.directorId=I.directorStyleId,n.shotTypeId=I.shotTypeId,n.moveId=I.cameraMoveId,n.lightId=I.lightingSchemeId,n.lens=ir.reduce((U,N)=>Math.abs(N-I.focalLengthMm)<Math.abs(U-I.focalLengthMm)?N:U),n.aperture=I.apertureFStop,n.role=I.shotRole==="A-Roll"?"A":`B${I.brollIndex??0}`,c(),h(I)}})}i("cin-scene").onchange=M=>{n.sceneKey=M.target.value,f()};async function w({record:M=!1}={}){var v;if(n.playingScene){n.sceneAbort=!0,t.stop(!1);return}const E=m();n.playingScene=!0,n.sceneAbort=!1,i("cin-scene-play").textContent="■ Detener";let T=null;M&&(T=A()),o(!0);for(let x=0;x<E.shots.length&&!n.sceneAbort;x++){const I=E.shots[x];e.getSpot(I.spotId)&&((v=e.setActiveSpot)==null||v.call(e,I.spotId)),h(I,!0),u(I,` · plano ${x+1}/${E.shots.length}`),await new Promise(N=>{t.play(N);const O=setInterval(()=>{(n.sceneAbort||!t.playing)&&(clearInterval(O),N())},120)})}T&&await b(T,E.sceneId),n.playingScene=!1,n.sceneAbort=!1,i("cin-scene-play").textContent="▶ Escena",setTimeout(()=>o(!1),500)}i("cin-scene-play").onclick=()=>w(),i("cin-scene-rec").onclick=()=>{n.playingScene||w({record:!0})};function A(){const M=e.renderer.domElement,E=document.createElement("canvas");E.width=720,E.height=1280;const T=E.getContext("2d");let v=0;const x=()=>{const O=M.height,j=O*9/16,H=(M.width-j)/2;T.drawImage(M,H,0,j,O,0,0,E.width,E.height),v=requestAnimationFrame(x)};x();const I=["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(O=>MediaRecorder.isTypeSupported(O)),U=new MediaRecorder(E.captureStream(30),{mimeType:I,videoBitsPerSecond:6e6}),N=[];return U.ondataavailable=O=>O.data.size&&N.push(O.data),U.start(250),i("cin-scene-rec").textContent="● Grabando…",{mr:U,chunks:N,stopDraw:()=>cancelAnimationFrame(v)}}function b(M,E){return new Promise(T=>{M.mr.onstop=()=>{M.stopDraw();const v=new Blob(M.chunks,{type:"video/webm"}),x=URL.createObjectURL(v);e.download.dataUrl(x,`animatic_${E}_720x1280.webm`),setTimeout(()=>URL.revokeObjectURL(x),2e3),i("cin-scene-rec").textContent="⏺ Animatic",e.setStatus(`✅ <span class="text-emerald-400 font-bold">Animatic ${bi(E)} (.webm 9:16)</span> descargado.`),T()},M.mr.stop()})}return i("cin-export").onclick=()=>{const M=t.active&&t.shot?t.shot:l(),E=t.active?t.payload:h(M,!0),T=`alina_${M.spotId}_${M.shotId}`;e.download.dataUrl(e.camCtrl.renderVertical916DataURL(1080,1920,!1),`${T}_beauty_1080x1920.png`),setTimeout(()=>e.download.dataUrl(e.camCtrl.renderVertical916DataURL(1080,1920,!0),`${T}_depth_1080x1920.png`),250),setTimeout(()=>e.download.json({shot:M,cinemaShotPayload:{...E,prompts:void 0,zeroWaste:void 0},prompts:E.prompts,zeroWaste:E.zeroWaste,controlNet:{...M.controlNetOverrides||{},mirrorShot:!!M.mirrorShot},passes:{beauty:`${T}_beauty_1080x1920.png`,depth:`${T}_depth_1080x1920.png`}},`${T}.json`),500),e.setStatus('✅ <span class="text-emerald-400 font-bold">Plano exportado</span> (Beauty + Depth + JSON con prompts y ControlNet).')},p(),f(),{onSpotChanged(){n.playingScene||(p(),f(),t.active&&h(l(),!0))},onModeChanged(){t.active&&t.shot&&(t._saved=null,h(t.shot,!0))},isPlayingScene:()=>n.playingScene}}const mv="28yo Dutch-Latin woman Alina Van Dijk, vivid copper red hair with natural soft waves, vivid emerald green eyes, light natural freckles across nose, subtle crimson lips, realistic skin micro-pores",xo={Idle:{still:"standing poised with relaxed confident posture, subtle gaze toward lens",motion:"subtle natural breathing, slow soft blink, gentle copper hair micro-movement, slight weight shift"},Walk:{still:"mid-stride walking forward with poised runway posture and natural movement",motion:"smooth confident slow walk forward, natural hip and shoulder sway, copper hair flowing gently with each step"},Rumba:{still:"expressive sensual dance posture, sculpted silhouette and graceful arm line",motion:"fluid rhythmic rumba sway, smooth hip and torso articulation, hair catching warm rim light"},Laying:{still:"reclining gracefully in relaxed boudoir lounge pose, calm magnetic gaze",motion:"calm reclined breathing, subtle slow head tilt, soft eye blink, fabric settling naturally"},HipHop:{still:"dynamic contemporary urban dance stance with grounded energy",motion:"controlled rhythmic groove, subtle shoulder and head bounce on beat, natural hair motion"}},vd={"85mm":{shot:"medium portrait shot",angle:"eye-level angle",mm:85},reset:{shot:"medium portrait shot",angle:"eye-level angle",mm:85},macro:{shot:"intimate close-up detail shot",angle:"slightly high macro angle",mm:100},top:{shot:"overhead editorial shot",angle:"top-down cenital angle",mm:35},dollhouse:{shot:"architectural cross-section wide shot",angle:"elevated three-quarter angle",mm:28},overview:{shot:"establishing architectural exterior-interior wide shot",angle:"high three-quarter drone angle",mm:24}};function fa(s,e){return Math.hypot(s.x-e.x,s.y-e.y,s.z-e.z)}function gv({camera:s,spot:e,camPreset:t="85mm",cinemaShot:n=null}){if(n)return{shot:n.shotLabel||"cinematic medium close-up",angle:n.angleLabel||"eye-level angle",mm:n.focalLengthMm||85,distance:s!=null&&s.position?Number(fa(s.position,e.alinaPos).toFixed(2)):2.8,elevationDeg:0,source:"Director de Fotografía"};if(s&&!s.approximate&&s.position&&s.target){const o={x:e.alinaPos.x,y:e.alinaPos.y+1.45,z:e.alinaPos.z},a=fa(s.position,o),l=Math.hypot(s.position.x-s.target.x,s.position.z-s.target.z)||.001,c=Math.atan2(s.position.y-s.target.y,l)*180/Math.PI;let d;a<1.35?d="extreme close-up":a<2.35?d="close-up portrait":a<4.4?d="medium shot":a<9?d="full-body wide shot":d="architectural establishing wide shot";let h;c>45?h="top-down overhead angle":c>14?h="slightly high angle":c<-12?h="low heroic angle":h="eye-level angle";const u=s.fov_deg||45,p=Math.max(18,Math.min(135,Math.round(18/Math.tan(u*Math.PI/360))));return{shot:d,angle:h,mm:p,distance:Number(a.toFixed(2)),elevationDeg:Math.round(c),source:"Cámara 3D en vivo"}}const i=vd[t]||vd["85mm"],r=s!=null&&s.position?Number(fa(s.position,e.alinaPos).toFixed(2)):3;return{...i,distance:r,elevationDeg:t==="top"?72:4,source:`Unity 6 URP (${t})`}}function _v(s){return new Promise(e=>{const t=new Image;t.onload=()=>{try{const n=document.createElement("canvas"),i=72,r=128;n.width=i,n.height=r;const o=n.getContext("2d",{willReadFrequently:!0});o.drawImage(t,0,0,i,r);const{data:a}=o.getImageData(0,0,i,r);let l=0,c=0,d=0,h=0,u=0;const p=i*r;for(let b=0;b<a.length;b+=4){const C=a[b],M=a[b+1],E=a[b+2],T=.2126*C+.7152*M+.0722*E;l+=T,h+=C,u+=E,T<42&&c++,T>205&&d++}const g=Math.round(l/p),_=Math.round(c/p*100),m=Math.round(d/p*100),f=(h-u)/p;let w;g<68&&_>45?w="deep low-key chiaroscuro contrast with sculpted rim highlights":g<115?w="moody cinematic mid-low key lighting with soft practical falloff":g<165?w="balanced natural architectural lighting with gentle specular depth":w="bright luminous high-key daylight with airy reflections";const A=f>18?"warm amber-copper tungsten & golden tones":f<-10?"cool moonlight slate-blue & silver atmosphere":"neutral cinema color grading with warm skin tones";e({avgLum:g,shadowPct:_,highlightPct:m,warmth:Math.round(f),keyDescriptor:w,toneDescriptor:A,summary:`Lum ${g}/255 · Sombras ${_}% · ${f>12?"Cálido":f<-8?"Frío":"Neutro"}`})}catch{e(null)}},t.onerror=()=>e(null),t.src=s})}function wh({spot:s,floorName:e,anim:t,lightingMode:n,framing:i,imageMetrics:r,depthPass:o}){var u;const a=((u=xo[t])==null?void 0:u.still)||xo.Idle.still,l=n==="day"?"warm golden hour sunlight streaming through architectural glass":"intimate nocturnal chiaroscuro with warm practical lamps",c=r?`${r.keyDescriptor}, ${r.toneDescriptor}`:l,d=s.prompt.replace(/^Cinematic\s+\d+mm\s+[^,]+,\s*/i,"").replace(/^Cinematic\s+(medium|wide|close-up|overhead)[^,]*shot\s+of\s+/i,"");return`${o?"[ControlNet Depth 9:16 lock active] ":""}Cinematic ${i.shot}, ${i.angle}, shot on ARRI Alexa Mini LF ${i.mm}mm prime lens, shallow depth of field, vertical 9:16 composition. ${mv}, ${a}, located at ${s.name} (${e}). ${c}, ${l}. Scene reference: ${d}`.replace(/\s+/g," ").trim()}function vo({anim:s,framing:e,motionStrength:t=2.5,motionEngine:n="higgsfield",cinemaMoveLabel:i=null}){var l;const r=((l=xo[s])==null?void 0:l.motion)||xo.Idle.motion;let o;i?o=i:e.mm>=90||e.distance<2.2?o="locked-off tripod with imperceptible 2% micro push-in, crisp focus locked on emerald eyes":e.angle.includes("top-down")?o="ultra-slow overhead boom descent, smooth stabilized gimbal":e.distance>7.5?o="slow architectural dolly-in revealing spatial depth":o="smooth stabilized 3% slow dolly push-in maintaining framing";const a=n==="liveportrait"?"Mouth gently closed, no talking (prepared for LivePortrait audio sync).":"Mouth closed, no talking, zero facial distortion, locked identity.";return`${r}. Camera: ${o}, ${e.angle}, ${e.mm}mm lens feel. ${a} Temporal consistency, natural physics, Higgsfield motion strength ${Number(t).toFixed(1)}.`}const xv="AlinaStudioOS_CapturesDB",vv=1,Ci="shots",pa=24;let Zr=null;function Gl(){return Zr||(typeof indexedDB>"u"?Promise.resolve(null):(Zr=new Promise(s=>{try{const e=indexedDB.open(xv,vv);e.onupgradeneeded=()=>{const t=e.result;t.objectStoreNames.contains(Ci)||t.createObjectStore(Ci,{keyPath:"id"}).createIndex("timestamp","timestamp",{unique:!1})},e.onsuccess=()=>s(e.result),e.onerror=()=>{console.warn("[ShotsStorage] IndexedDB no disponible:",e.error),s(null)}}catch(e){console.warn("[ShotsStorage] Error abriendo IndexedDB:",e),s(null)}}),Zr))}function yv(s){var e;return{id:s.id,timestamp:s.timestamp||Number(String(s.id).replace("shot-",""))||Date.now(),createdAt:s.createdAt,engine:s.engine,floor:s.floor,floorName:s.floorName,spotId:(e=s.spot)==null?void 0:e.id,spotSnapshot:s.spot,anim:s.anim,camPreset:s.camPreset,lightingMode:s.lightingMode,sliced:s.sliced,depthPass:s.depthPass,camera:s.camera,framing:s.framing,imageMetrics:s.imageMetrics,cinemaMoveLabel:s.cinemaMoveLabel,image:s.image,depthImage:s.depthImage||null,motionEngine:s.motionEngine,motionStrength:s.motionStrength,fluxPrompt:s.fluxPrompt,motionPrompt:s.motionPrompt}}async function Ji(s){const e=await Gl();if(!e||!(s!=null&&s.id))return;const t=yv(s);await new Promise(n=>{const i=e.transaction(Ci,"readwrite");i.objectStore(Ci).put(t),i.oncomplete=()=>n(),i.onerror=()=>n()})}async function Wl(s){const e=await Gl();!e||!s||await new Promise(t=>{const n=e.transaction(Ci,"readwrite");n.objectStore(Ci).delete(s),n.oncomplete=()=>t(),n.onerror=()=>t()})}async function Mv(s){const e=await Gl();if(!e)return[];const t=await new Promise(n=>{const r=e.transaction(Ci,"readonly").objectStore(Ci).getAll();r.onsuccess=()=>n(r.result||[]),r.onerror=()=>n([])});return t.sort((n,i)=>(i.timestamp||0)-(n.timestamp||0)),t.length>pa&&t.slice(pa).forEach(i=>Wl(i.id)),t.slice(0,pa).map(n=>{const i=s&&n.spotId&&s(n.spotId)||n.spotSnapshot;return{...n,spot:i}}).filter(n=>!!(n.spot&&n.image))}const z={activeEngine:"threejs",activeFloor:2,activeSpot:Zn[2].spots[0],activeAnim:"Idle",activeCamPreset:"85mm",lightingMode:"night",sliced:!0,depthPass:!1,guide916:!1,theaterMode:!1,promptsMode:!1,promptsTab:"captures",motionEngine:"higgsfield",shots:[],selectedShotId:null,pendingUnityCapture:null,threeLoadMs:0,unityLoadMs:null,unityFps:null};let Ms,zn,Ei,yo,Dt,ze,ue,an,$i;const yd=new Vf;let ma=0,ga=performance.now(),Ah=0;function wn(s,e){const t=document.createElement("a");t.download=e,t.href=s,document.body.appendChild(t),t.click(),document.body.removeChild(t)}function wi(s,e){const t=new Blob([JSON.stringify(s,null,2)],{type:"application/json"}),n=URL.createObjectURL(t);wn(n,e),setTimeout(()=>URL.revokeObjectURL(n),1e3)}function St(s){const e=document.getElementById("renderStatus");e&&(e.innerHTML=s)}function ws(){const s=document.getElementById("perf-badge");if(z.activeEngine==="threejs")s.textContent=`FPS: ${Ah||"--"} | Carga: ${z.threeLoadMs}ms`;else{const e=z.unityLoadMs!=null?`${(z.unityLoadMs/1e3).toFixed(1)}s`:"Cargando...",t=z.unityFps!=null?`${z.unityFps}`:"--";s.textContent=`Unity 6 URP | FPS: ${t} | Carga: ${e}`}}function ul(){const s=document.getElementById("btn-slice");s.textContent=z.sliced?"🔪 Corte Sliced: ACTIVO":"🏛️ Corte Sliced: OFF",s.className=z.sliced?"bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 px-2.5 py-1.5 rounded-lg border border-emerald-500/30 font-mono transition-colors":"bg-white/5 hover:bg-white/10 text-slate-300 px-2.5 py-1.5 rounded-lg border border-white/10 font-mono transition-colors"}function Vs(){if(yo)for(let s=0;s<=4;s++){const e=yo.floorGroups[s];e&&(z.sliced&&s>z.activeFloor?(e.position.y=s*ee+16,e.visible=!1):(e.position.y=s*ee,e.visible=!0))}}function Sv(){const s=document.getElementById("floorContainer"),e=document.getElementById("compactFloorBar");s.innerHTML="",e.innerHTML="";const t={amber:"text-amber-400",purple:"text-purple-400",copper:"text-[#f29979]",emerald:"text-emerald-400",rose:"text-rose-400"},n={amber:"bg-amber-500/10 text-amber-300 border-amber-500/20",purple:"bg-purple-500/10 text-purple-300 border-purple-500/20",copper:"bg-[#c86446]/20 text-[#f29979] border-[#c86446]/30",emerald:"bg-emerald-500/10 text-emerald-300 border-emerald-500/20",rose:"bg-rose-500/10 text-rose-300 border-rose-500/20"};for(const i of[4,3,2,1,0]){const r=Zn[i],o=document.createElement("div");o.id=`floor-card-${i}`,o.className="floor-card cursor-pointer p-2.5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] transition-all",o.innerHTML=`
      <div class="flex items-center justify-between gap-2">
        <span class="text-xs font-bold ${t[r.badgeColor]} font-mono">${i===0?"PLANTA BAJA":`PISO ${i}${i===2?" ★":""}`}</span>
        <span class="text-[10px] px-2 py-0.5 rounded-full border font-medium ${n[r.badgeColor]}">${r.badge}</span>
      </div>
      <h3 class="text-xs font-semibold text-white mt-1">${r.subtitle}</h3>
      <p class="text-[10px] text-slate-400 mt-0.5 leading-snug">${r.description}</p>
    `,o.addEventListener("click",()=>fl(i)),s.appendChild(o);const a=document.createElement("button");a.id=`floor-chip-${i}`,a.textContent=i===0?"PB":`P${i}`,a.title=r.floorName,a.addEventListener("click",()=>fl(i)),e.appendChild(a)}}function Xl(){for(let s=0;s<=4;s++){const e=document.getElementById(`floor-card-${s}`);e&&(e.className=s===z.activeFloor?"floor-card cursor-pointer p-2.5 rounded-xl border border-[#c86446]/70 bg-[#c86446]/12 copper-glow transition-all":"floor-card cursor-pointer p-2.5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] transition-all");const t=document.getElementById(`floor-chip-${s}`);t&&(t.className=s===z.activeFloor?"px-2 py-1 rounded-lg text-[11px] font-mono font-bold bg-[#c86446]/25 text-[#f29979] border border-[#c86446]/60 transition-all":"px-2 py-1 rounded-lg text-[11px] font-mono text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all")}}function jl(){const s=Zn[z.activeFloor],e=document.getElementById("spotPillsContainer");e.innerHTML="",s.spots.forEach(t=>{const n=document.createElement("button");n.id=`pill-${t.id}`;const i=t.id===z.activeSpot.id;n.className=i?"px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#c86446] text-white transition-all shadow":"px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/5 text-slate-300 hover:bg-white/10 transition-all",n.textContent=`${t.icon} ${t.name}`,n.addEventListener("click",()=>Rh(t)),e.appendChild(n)})}function Ao(s){z.activeAnim=s,document.getElementById("alinaPoseBadge").textContent=s,document.querySelectorAll(".anim-btn").forEach(e=>{const t=e.dataset.anim===s;e.className=t?"anim-btn py-1 px-2 rounded-lg border border-[#c86446] bg-[#c86446]/25 text-white font-semibold transition-colors":"anim-btn py-1 px-2 rounded-lg border border-white/10 bg-black/40 text-slate-300 hover:bg-white/10 transition-colors"})}function fl(s){z.activeFloor=s;const e=Zn[s];document.getElementById("currentFloorTag").textContent=e.floorName,Xl(),Vs(),ue==null||ue.sendFloor(s),Rh(e.spots[0])}function Rh(s){z.activeSpot=s,z.activeCamPreset="85mm",jl(),document.getElementById("currentSpotTitle").textContent=s.name,document.getElementById("fluxPromptBox").textContent=s.prompt,document.getElementById("scriptInput").value=s.script,document.getElementById("alinaPosBadge").textContent=`X: ${s.alinaPos.x.toFixed(1)} Y: ${s.alinaPos.y.toFixed(1)} Z: ${s.alinaPos.z.toFixed(1)}`,document.getElementById("brollPackage").innerHTML=s.brolls.map(e=>`<div>• ${e}</div>`).join(""),Dt==null||Dt.placeAtSpot(s),Ao(s.defaultAnim||"Idle"),ze==null||ze.flyTo(s.camPos,s.camTarget),ue==null||ue.sendSpot(s.id),ue==null||ue.sendAnimation(s.defaultAnim||"Idle"),Pi(),$i==null||$i.onSpotChanged()}function oo(s){for(const e of Object.values(Zn)){const t=e.spots.find(n=>n.id===s);if(t)return t}return null}function Md(s){const e=oo(s);!e||z.activeSpot&&z.activeSpot.id===e.id&&z.activeFloor===e.floor||(z.activeFloor=e.floor,z.activeSpot=e,document.getElementById("currentFloorTag").textContent=Zn[e.floor].floorName,Xl(),Vs(),jl(),document.getElementById("currentSpotTitle").textContent=e.name,document.getElementById("fluxPromptBox").textContent=e.prompt,document.getElementById("alinaPosBadge").textContent=`X: ${e.alinaPos.x.toFixed(1)} Y: ${e.alinaPos.y.toFixed(1)} Z: ${e.alinaPos.z.toFixed(1)}`,Dt==null||Dt.placeAtSpot(e))}function Pi(){const s=Zn[z.activeFloor].floorName.split("•")[0].trim(),e=z.activeEngine==="threejs"?"Three.js GLB":"Unity 6 URP",t=z.depthPass?"DEPTH PASS":z.activeSpot.name;document.getElementById("viewport-status-hud").textContent=`${s} • ${t} [${e}]`}function pl(s){z.lightingMode=s,Ei==null||Ei.setMode(s),ue==null||ue.sendLightingMode(s),$i==null||$i.onModeChanged();const e=document.getElementById("btn-mode-day"),t=document.getElementById("btn-mode-night");s==="day"?(e.className="px-2.5 py-1 rounded-lg bg-[#c86446] text-white font-medium shadow transition-all",t.className="px-2.5 py-1 rounded-lg text-slate-400 hover:text-white font-medium transition-all"):(t.className="px-2.5 py-1 rounded-lg bg-[#c86446] text-white font-medium shadow transition-all",e.className="px-2.5 py-1 rounded-lg text-slate-400 hover:text-white font-medium transition-all")}function ml(s){z.depthPass=s;const e=new L(z.activeSpot.alinaPos.x,z.activeSpot.alinaPos.y+1,z.activeSpot.alinaPos.z);ze==null||ze.setDepthPass(s,e),ue==null||ue.sendRenderPass(s?"depth":"beauty");const t=document.getElementById("btn-beauty-pass"),n=document.getElementById("btn-depth-pass");s?(n.className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white font-semibold shadow",t.className="px-2.5 py-1 rounded-lg text-slate-400 hover:text-white font-semibold transition-colors"):(t.className="px-2.5 py-1 rounded-lg bg-[#c86446] text-white font-semibold shadow",n.className="px-2.5 py-1 rounded-lg text-slate-400 hover:text-white font-semibold transition-colors"),Pi()}function _a(s){z.activeCamPreset=s;const e=z.activeSpot;if(s==="dollhouse"){z.sliced=!1,ul(),Vs(),ze==null||ze.flyTo({x:3.5,y:12.8,z:36},{x:0,y:11.2,z:-5.5}),ue==null||ue.sendDollhouseSlice(!1),ue==null||ue.sendCameraAngle("dollhouse"),document.getElementById("viewport-status-hud").textContent=`CASA DE MUÑECAS 5 PISOS (4.9m/nivel) [${z.activeEngine==="threejs"?"Three.js":"Unity 6 URP"}]`;return}if(s==="overview"){z.sliced=!1,ul(),Vs(),ze==null||ze.flyTo({x:30,y:24.5,z:33.5},{x:0,y:10.5,z:-4}),ue==null||ue.sendDollhouseSlice(!1),ue==null||ue.sendCameraAngle("overview"),document.getElementById("viewport-status-hud").textContent=`EXTERIOR 3/4 • 5 PISOS (24.5m ALTO) [${z.activeEngine==="threejs"?"Three.js":"Unity 6 URP"}]`;return}s==="85mm"||s==="reset"?ze==null||ze.flyTo(e.camPos,e.camTarget):s==="macro"?ze==null||ze.flyTo(e.macroPos,e.macroTarget):s==="top"&&(ze==null||ze.flyTo({x:e.alinaPos.x,y:e.alinaPos.y+4.3,z:e.alinaPos.z+1},{x:e.alinaPos.x,y:e.alinaPos.y,z:e.alinaPos.z})),ue==null||ue.sendCameraAngle(s),Pi()}function xa(){const s=z.activeEngine==="threejs"&&ze?ze.getCameraTelemetry():{source:"Unity6_URP_WebGL",spot:z.activeSpot.id,preset:z.activeCamPreset};return{engine:z.activeEngine==="threejs"?"Motor A: Three.js WebGL + alina.glb":"Motor B: Unity 6 URP WebGL",character:"Alina Van Dijk",token_lock:"28yo Dutch-Latin woman Alina Van Dijk, vivid copper red hair with natural soft waves, vivid emerald green eyes, light natural freckles, crimson lips, micro-pores",floor:Zn[z.activeFloor].floorName,spot:z.activeSpot.name,animation:z.activeAnim,lighting_mode:z.lightingMode,spatial_coordinates:z.activeSpot.alinaPos,camera_telemetry:s,higgsfield_zero_waste:{mode:"Image-to-Video",motion_strength:parseFloat(document.getElementById("motionSlider").value),aspect_ratio:"9:16 (1080x1920)",duration_seconds:3.5,lipsync_engine:z.motionEngine,brolls:z.activeSpot.brolls},flux_prompt:z.activeSpot.prompt,elevenlabs_script:document.getElementById("scriptInput").value}}function Mo(){requestAnimationFrame(()=>{ze==null||ze.onWindowResize(),window.dispatchEvent(new Event("resize"))}),setTimeout(()=>{ze==null||ze.onWindowResize(),window.dispatchEvent(new Event("resize"))},140)}function gl(s){z.promptsMode=!!s,document.body.classList.toggle("prompts-mode",z.promptsMode);const e=document.getElementById("btn-prompts-toggle");e.setAttribute("aria-pressed",String(z.promptsMode)),e.className=z.promptsMode?"bg-[#c86446] text-white px-3 py-1.5 rounded-lg border border-[#c86446] font-semibold transition-all flex items-center gap-1.5 shadow-lg copper-glow":"bg-white/5 hover:bg-[#c86446]/25 text-slate-100 hover:text-white px-3 py-1.5 rounded-lg border border-[#c86446]/40 font-semibold transition-all flex items-center gap-1.5",Mo()}function _l(s){z.promptsTab=s;const e=s==="captures";document.getElementById("pane-ptab-captures").classList.toggle("hidden",!e),document.getElementById("pane-ptab-captures").classList.toggle("flex",e),document.getElementById("pane-ptab-director").classList.toggle("hidden",e),document.getElementById("pane-ptab-director").classList.toggle("flex",!e),document.getElementById("btn-ptab-captures").className=e?"py-1.5 px-2 rounded-lg bg-[#c86446] text-white font-semibold transition-all":"py-1.5 px-2 rounded-lg text-slate-400 hover:text-white font-semibold transition-all",document.getElementById("btn-ptab-director").className=e?"py-1.5 px-2 rounded-lg text-slate-400 hover:text-white font-semibold transition-all":"py-1.5 px-2 rounded-lg bg-[#c86446] text-white font-semibold transition-all"}function bv(){if(z.activeEngine==="threejs"&&ze)return{...ze.getCameraTelemetry(),approximate:!1};if(z.activeEngine==="unity"&&(ue!=null&&ue.lastCameraTelemetry))return{...ue.lastCameraTelemetry,approximate:!1};const s=z.activeSpot;return{...z.activeCamPreset==="macro"?{position:{...s.macroPos},target:{...s.macroTarget},fov_deg:24}:z.activeCamPreset==="top"?{position:{x:s.alinaPos.x,y:s.alinaPos.y+4.3,z:s.alinaPos.z+1},target:{...s.alinaPos},fov_deg:52}:z.activeCamPreset==="dollhouse"?{position:{x:3.5,y:12.8,z:36},target:{x:0,y:11.2,z:-5.5},fov_deg:55}:z.activeCamPreset==="overview"?{position:{x:30,y:24.5,z:33.5},target:{x:0,y:10.5,z:-4},fov_deg:60}:{position:{...s.camPos},target:{...s.camTarget},fov_deg:36},approximate:!0}}function Hn(){return z.shots.find(s=>s.id===z.selectedShotId)||null}let Sd=null;function va(s){s&&(clearTimeout(Sd),Sd=setTimeout(()=>{Ji(s)},220))}function ql(){const s=document.getElementById("shotsCountBadge"),e=z.shots.length;s.textContent=String(e),s.classList.toggle("hidden",e===0)}async function xl(s,e=null){var _,m;const t=z.activeSpot,n=Zn[z.activeFloor].floorName,i=bv(),r=parseFloat(document.getElementById("motionSlider").value)||2.5,o=(an==null?void 0:an.active)&&(an==null?void 0:an.shot),a=o?{shotLabel:(_=an.shot.shotTypeId)==null?void 0:_.replace(/_/g," "),angleLabel:"cinematic angle",focalLengthMm:an.shot.focalLengthMm}:null,l=o?(m=an.shot.cameraMoveId)==null?void 0:m.replace(/_/g," "):null,c=gv({camera:i,spot:t,camPreset:z.activeCamPreset,cinemaShot:a}),d=await _v(s),h=!!e||z.depthPass,u=wh({spot:t,floorName:n,anim:z.activeAnim,lightingMode:z.lightingMode,framing:c,imageMetrics:d,depthPass:h}),p=vo({anim:z.activeAnim,framing:c,motionStrength:r,motionEngine:z.motionEngine,cinemaMoveLabel:l}),g={id:`shot-${Date.now()}`,createdAt:new Date().toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit",second:"2-digit"}),engine:z.activeEngine,floor:z.activeFloor,floorName:n,spot:t,anim:z.activeAnim,camPreset:z.activeCamPreset,lightingMode:z.lightingMode,sliced:z.sliced,depthPass:z.depthPass,camera:i,framing:c,imageMetrics:d,cinemaMoveLabel:l,image:s,depthImage:e,motionEngine:z.motionEngine,motionStrength:r,fluxPrompt:u,motionPrompt:p};if(z.shots.unshift(g),z.shots.length>24){const f=z.shots.pop();f!=null&&f.id&&Wl(f.id)}z.selectedShotId=g.id,Ji(g),ql(),ui(),St(`✅ <span class="text-emerald-400 font-bold">Captura #${z.shots.length} (${g.engine==="unity"?"Unity 6 URP":"Three.js"}) convertida en Prompt Higgsfield.</span>`)}function ya({withDepth:s=!1}={}){if(z.promptsMode||gl(!0),z.promptsTab!=="captures"&&_l("captures"),z.activeEngine==="threejs"){const e=ze.renderVertical916DataURL(1080,1920,!!z.depthPass),t=s?ze.renderVertical916DataURL(1080,1920,!0):null;xl(e,t);return}if(!(ue!=null&&ue.ready)){St('⏳ <span class="text-amber-300 font-bold">Espera a que termine de cargar Unity 6 URP para capturar el frame.</span>');return}z.pendingUnityCapture={mode:"create",withDepth:s},St('📸 <span class="text-[#f29979]">Capturando frame 1080×1920 en vivo desde Unity 6 URP...</span>'),z.depthPass?ue.requestDepthScreenshot916():ue.requestScreenshot916()}function Ev(){const s=Hn();if(s){if(z.activeEngine==="threejs"){s.depthImage=ze.renderVertical916DataURL(1080,1920,!0),Yl(s,{onlyFluxIfClean:!0}),Ji(s),ui(),St('✅ <span class="text-emerald-400 font-bold">Depth Map 9:16 adjuntado a la captura actual.</span>');return}if(!(ue!=null&&ue.ready)){St('⏳ <span class="text-amber-300">Unity 6 URP aún no está listo.</span>');return}z.pendingUnityCapture={mode:"attachDepth",shotId:s.id},St('🌑 <span class="text-emerald-300">Capturando Depth Map 1080×1920 desde Unity 6 URP...</span>'),ue.requestDepthScreenshot916()}}function Yl(s,{onlyFluxIfClean:e=!1}={}){s.fluxPrompt=wh({spot:s.spot,floorName:s.floorName,anim:s.anim,lightingMode:s.lightingMode,framing:s.framing,imageMetrics:s.imageMetrics,depthPass:!!s.depthImage||s.depthPass}),e||(s.motionPrompt=vo({anim:s.anim,framing:s.framing,motionStrength:s.motionStrength,motionEngine:s.motionEngine,cinemaMoveLabel:s.cinemaMoveLabel}))}function Ih(s){document.querySelectorAll(".motion-btn").forEach(e=>{const t=e.dataset.motion===s;e.className=t?"motion-btn p-2 rounded-xl border border-emerald-500/50 bg-emerald-500/10 text-left transition-all":"motion-btn p-2 rounded-xl border border-white/5 bg-black/40 text-left hover:bg-white/5 transition-all";const n=e.querySelector("div");n&&(n.className=t?"font-bold text-emerald-400 text-[11px]":"font-bold text-white text-[11px]")})}function ui(){const s=document.getElementById("shotsStrip"),e=document.getElementById("shotEmptyState"),t=document.getElementById("shotDetail"),n=z.shots.length>0;s.classList.toggle("hidden",!n),s.classList.toggle("flex",n),e.classList.toggle("hidden",n),s.innerHTML="",z.shots.forEach((a,l)=>{const c=a.id===z.selectedShotId,d=z.shots.length-l,h=document.createElement("button");h.type="button",h.className=`relative shrink-0 rounded-lg overflow-hidden border-2 transition-all ${c?"border-[#c86446] scale-[1.02] copper-glow":"border-white/10 opacity-75 hover:opacity-100"}`,h.title=`Toma #${d} • ${a.spot.name} (${a.engine==="unity"?"Unity":"Three.js"})`,h.innerHTML=`
      <img src="${a.image}" alt="Toma ${d}" class="block w-12 object-cover bg-black" style="aspect-ratio: 9/16;">
      <span class="absolute top-0.5 left-0.5 px-1 rounded bg-black/80 text-[8px] font-mono text-white">#${d}</span>
      <span class="absolute bottom-0.5 right-0.5 px-1 rounded text-[7px] font-mono font-bold ${a.engine==="unity"?"bg-pink-500/85 text-white":"bg-emerald-600/85 text-white"}">${a.engine==="unity"?"U6":"3D"}</span>
    `,h.addEventListener("click",()=>{z.selectedShotId=a.id,ui()}),s.appendChild(h)});const i=Hn();if(t.classList.toggle("hidden",!i),t.classList.toggle("flex",!!i),!i)return;document.getElementById("shotPreview").src=i.image;const r=document.getElementById("shotDepthPreview");i.depthImage?(r.src=i.depthImage,r.classList.remove("hidden")):r.classList.add("hidden"),document.getElementById("shotMetaTitle").textContent=`${i.spot.icon} ${i.spot.name}`;const o=document.getElementById("shotEngineTag");o.textContent=i.engine==="unity"?"UNITY 6 URP":"THREE.JS",o.className=i.engine==="unity"?"text-[9px] font-mono px-1.5 py-0.5 rounded border border-pink-500/40 bg-pink-500/15 text-pink-300 shrink-0 font-bold":"text-[9px] font-mono px-1.5 py-0.5 rounded border border-emerald-500/40 bg-emerald-500/15 text-emerald-300 shrink-0 font-bold",document.getElementById("shotMetaFraming").textContent=`${i.framing.shot} • ${i.framing.mm}mm • ${i.framing.angle}`,document.getElementById("shotMetaState").textContent=`${i.floorName.split("•")[0].trim()} • Pose: ${i.anim} • ${i.lightingMode==="day"?"☀️ Día":"🌙 Noche"} • ${i.createdAt}`,document.getElementById("shotMetaLight").textContent=i.imageMetrics?`Luz medida: ${i.imageMetrics.summary}`:"",document.getElementById("shotFluxPrompt").value=i.fluxPrompt,document.getElementById("shotMotionPrompt").value=i.motionPrompt,document.getElementById("motionSlider").value=String(i.motionStrength),document.getElementById("motionVal").textContent=Number(i.motionStrength).toFixed(1),z.motionEngine=i.motionEngine,Ih(i.motionEngine)}function Tv(s){var e,t,n,i,r;z.activeFloor!==s.floor&&(z.activeFloor=s.floor,document.getElementById("currentFloorTag").textContent=Zn[s.floor].floorName,Xl(),Vs(),ue==null||ue.sendFloor(s.floor)),z.activeSpot=s.spot,z.activeCamPreset=s.camPreset||"85mm",jl(),document.getElementById("currentSpotTitle").textContent=s.spot.name,document.getElementById("fluxPromptBox").textContent=s.spot.prompt,document.getElementById("alinaPosBadge").textContent=`X: ${s.spot.alinaPos.x.toFixed(1)} Y: ${s.spot.alinaPos.y.toFixed(1)} Z: ${s.spot.alinaPos.z.toFixed(1)}`,Dt==null||Dt.placeAtSpot(s.spot),Ao(s.anim),Dt==null||Dt.playAnimation(s.anim),pl(s.lightingMode),ml(s.depthPass),ue==null||ue.sendSpot(s.spot.id),ue==null||ue.sendAnimation(s.anim),z.activeEngine==="threejs"&&((e=s.camera)!=null&&e.position)&&((t=s.camera)!=null&&t.target)?ze==null||ze.flyTo(s.camera.position,s.camera.target):!((n=s.camera)!=null&&n.approximate)&&((i=s.camera)!=null&&i.position)&&((r=s.camera)!=null&&r.target)?ue==null||ue.flyCameraTo(s.camera.position,s.camera.target):ue==null||ue.sendCameraAngle(s.camPreset||"85mm"),Pi(),St(`↩ <span class="text-emerald-400 font-bold">Encuadre restaurado:</span> ${s.spot.name} (${s.anim}).`)}function Jr(s){return{captured_at:s.createdAt,engine:s.engine==="unity"?"Motor B: Unity 6 URP WebGL":"Motor A: Three.js WebGL + alina.glb",character:"Alina Van Dijk",floor:s.floorName,spot:s.spot.name,animation:s.anim,lighting_mode:s.lightingMode,spatial_coordinates:s.spot.alinaPos,camera_telemetry:s.camera,framing_analysis:s.framing,measured_frame_lighting:s.imageMetrics,higgsfield_zero_waste:{mode:"Image-to-Video",target_engine:s.motionEngine,motion_strength:s.motionStrength,aspect_ratio:"9:16 (1080x1920)",duration_seconds:3.5,has_depth_map:!!s.depthImage},prompts:{flux_keyframe_prompt:s.fluxPrompt,higgsfield_motion_prompt:s.motionPrompt},elevenlabs_script:document.getElementById("scriptInput").value}}function wv(){const s=Hn();if(!s)return;const e=`alina_${s.engine}_piso${s.floor}_${s.spot.id}_${s.id.slice(-5)}`;if(wn(s.image,`${e}_beauty_1080x1920.png`),s.depthImage){setTimeout(()=>{wn(s.depthImage,`${e}_depth_1080x1920.png`)},220),setTimeout(()=>{wi(Jr(s),`${e}_higgsfield.json`)},440),St('✅ <span class="text-emerald-400 font-bold">Paquete de captura exportado (Beauty + Depth + JSON con tus prompts).</span>');return}if(z.activeEngine==="threejs"){const t=ze.renderVertical916DataURL(1080,1920,!0);s.depthImage=t,ui(),setTimeout(()=>{wn(t,`${e}_depth_1080x1920.png`)},220),setTimeout(()=>{wi(Jr(s),`${e}_higgsfield.json`)},440),St('✅ <span class="text-emerald-400 font-bold">Paquete completo exportado (Beauty + Depth + JSON).</span>');return}ue!=null&&ue.ready?(z.pendingUnityCapture={mode:"exportDepth",shotId:s.id,baseName:e},ue.requestDepthScreenshot916(),setTimeout(()=>{wi(Jr(s),`${e}_higgsfield.json`)},450),St('✅ <span class="text-emerald-400 font-bold">Exportando Beauty + Depth desde Unity 6 URP + JSON...</span>')):(setTimeout(()=>{wi(Jr(s),`${e}_higgsfield.json`)},250),St('✅ <span class="text-emerald-400 font-bold">Exportado Beauty PNG + JSON de la captura.</span>'))}async function bd(s){if(z.activeEngine===s)return;z.activeEngine=s;const e=document.getElementById("three-canvas-container"),t=document.getElementById("unity-canvas-container"),n=document.getElementById("btn-engine-a"),i=document.getElementById("btn-engine-b"),r=document.getElementById("motor-badge");if(s==="threejs"){e.classList.remove("hidden"),t.classList.add("hidden"),n.className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white font-semibold shadow transition-all",i.className="px-2.5 py-1 rounded-lg text-slate-300 hover:text-white font-semibold transition-all",r.textContent="THREE.JS ACTIVE",r.className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 font-bold shrink-0",ze==null||ze.onWindowResize(),ws(),Pi();return}e.classList.add("hidden"),t.classList.remove("hidden"),i.className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white font-semibold shadow transition-all",n.className="px-2.5 py-1 rounded-lg text-slate-300 hover:text-white font-semibold transition-all",r.textContent="UNITY 6 URP",r.className="text-[10px] font-mono text-pink-300 bg-pink-500/15 px-2 py-0.5 rounded-full border border-pink-500/30 font-bold shrink-0",ws(),Pi(),Mo(),ue.pendingState={floor:z.activeFloor,spotId:z.activeSpot.id,lightingMode:z.lightingMode,sliced:z.sliced,anim:z.activeAnim,renderPass:z.depthPass?"depth":"beauty"};try{await ue.ensureLoaded(),ue.syncFullState(ue.pendingState),Mo()}catch(o){document.getElementById("unity-loading-text").textContent=`Error al cargar Unity WebGL: ${o.message}`,St(`⚠️ <span class="text-rose-400">Error Unity WebGL:</span> ${o.message}`)}}function Ed(s=null){const e=s!==null?s:!z.theaterMode;z.theaterMode=e;const t=document.getElementById("viewport-wrapper"),n=document.getElementById("btn-fullscreen");t.classList.toggle("viewport-theater",e),n.textContent=e?"✕ Salir Completa":"⛶ Completa",Mo()}function Av(){var t,n,i;document.getElementById("btn-engine-a").addEventListener("click",()=>bd("threejs")),document.getElementById("btn-engine-b").addEventListener("click",()=>bd("unity")),document.getElementById("btn-mode-day").addEventListener("click",()=>pl("day")),document.getElementById("btn-mode-night").addEventListener("click",()=>pl("night")),document.getElementById("btn-slice").addEventListener("click",()=>{z.sliced=!z.sliced,ul(),Vs(),ue==null||ue.sendDollhouseSlice(z.sliced)}),document.getElementById("btn-prompts-toggle").addEventListener("click",()=>gl(!z.promptsMode)),document.getElementById("btn-prompts-close").addEventListener("click",()=>gl(!1)),document.getElementById("btn-ptab-captures").addEventListener("click",()=>_l("captures")),document.getElementById("btn-ptab-director").addEventListener("click",()=>_l("director")),document.getElementById("btn-capture-to-prompt").addEventListener("click",()=>ya({withDepth:!1})),document.getElementById("btn-capture-shot").addEventListener("click",()=>ya({withDepth:!1})),document.getElementById("btn-capture-shot-depth").addEventListener("click",()=>ya({withDepth:!0})),document.getElementById("shotFluxPrompt").addEventListener("input",r=>{const o=Hn();o&&(o.fluxPrompt=r.target.value,va(o))}),document.getElementById("shotMotionPrompt").addEventListener("input",r=>{const o=Hn();o&&(o.motionPrompt=r.target.value,va(o))}),document.getElementById("btn-shot-regen").addEventListener("click",()=>{const r=Hn();r&&(Yl(r),Ji(r),ui(),St('↻ <span class="text-[#f29979]">Prompts regenerados desde la telemetría de la captura.</span>'))}),document.getElementById("btn-shot-restore").addEventListener("click",()=>{const r=Hn();r&&Tv(r)}),document.getElementById("btn-shot-attach-depth").addEventListener("click",Ev),document.getElementById("btn-shot-png").addEventListener("click",()=>{const r=Hn();r&&(wn(r.image,`alina_${r.engine}_piso${r.floor}_${r.spot.id}_1080x1920.png`),St('✅ <span class="text-emerald-400 font-bold">PNG 1080×1920 de la captura descargado.</span>'))}),document.getElementById("btn-shot-package").addEventListener("click",wv),document.getElementById("btn-shot-delete").addEventListener("click",()=>{var o;if(!z.selectedShotId)return;const r=z.selectedShotId;z.shots=z.shots.filter(a=>a.id!==r),z.selectedShotId=((o=z.shots[0])==null?void 0:o.id)??null,Wl(r),ql(),ui()}),document.querySelectorAll(".copy-prompt-btn").forEach(r=>{r.addEventListener("click",()=>{const o=document.getElementById(r.dataset.copy);if(!o)return;navigator.clipboard.writeText(o.value);const a=r.textContent;r.textContent="¡Copiado!",setTimeout(()=>{r.textContent=a},1400)})}),document.getElementById("btn-dollhouse").addEventListener("click",()=>_a("dollhouse")),document.getElementById("btn-overview").addEventListener("click",()=>_a("overview")),document.getElementById("btn-fullscreen").addEventListener("click",()=>Ed());const s=document.getElementById("docs-modal"),e=r=>{s&&s.classList.toggle("hidden",!r)};(t=document.getElementById("btn-docs-modal"))==null||t.addEventListener("click",()=>e(!0)),(n=document.getElementById("btn-docs-close"))==null||n.addEventListener("click",()=>e(!1)),(i=document.getElementById("btn-docs-close-footer"))==null||i.addEventListener("click",()=>e(!1)),s==null||s.addEventListener("click",r=>{r.target===s&&e(!1)}),document.querySelectorAll(".docs-tab-btn").forEach(r=>{r.addEventListener("click",()=>{const o=r.dataset.tab;document.querySelectorAll(".docs-tab-btn").forEach(a=>{const l=a.dataset.tab===o;a.className=l?"docs-tab-btn px-3 py-1.5 rounded-lg font-medium text-white bg-[#c86446] transition-all shrink-0":"docs-tab-btn px-3 py-1.5 rounded-lg font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all shrink-0"}),document.querySelectorAll(".docs-pane").forEach(a=>{a.classList.toggle("hidden",a.id!==`pane-${o}`)})})}),window.addEventListener("keydown",r=>{if(r.key==="Escape"){if(s&&!s.classList.contains("hidden")){e(!1);return}z.theaterMode&&Ed(!1)}}),document.getElementById("btn-guide-916").addEventListener("click",()=>{z.guide916=!z.guide916,document.getElementById("guide-916-overlay").classList.toggle("hidden",!z.guide916),document.getElementById("btn-guide-916").textContent=z.guide916?"📱 Guía 9:16: ON":"📱 Guía 9:16: OFF"}),document.getElementById("btn-beauty-pass").addEventListener("click",()=>ml(!1)),document.getElementById("btn-depth-pass").addEventListener("click",()=>ml(!0)),document.querySelectorAll(".cam-preset-btn").forEach(r=>{r.addEventListener("click",()=>_a(r.dataset.cam))}),document.querySelectorAll(".anim-btn").forEach(r=>{r.addEventListener("click",()=>{const o=r.dataset.anim;Ao(o),Dt==null||Dt.playAnimation(o),ue==null||ue.sendAnimation(o)})}),document.querySelectorAll(".motion-btn").forEach(r=>{r.addEventListener("click",()=>{z.motionEngine=r.dataset.motion,Ih(z.motionEngine);const o=Hn();o&&(o.motionEngine=z.motionEngine,o.motionPrompt=vo({anim:o.anim,framing:o.framing,motionStrength:o.motionStrength,motionEngine:o.motionEngine,cinemaMoveLabel:o.cinemaMoveLabel}),document.getElementById("shotMotionPrompt").value=o.motionPrompt,Ji(o))})}),document.getElementById("motionSlider").addEventListener("input",r=>{const o=parseFloat(r.target.value);document.getElementById("motionVal").textContent=o.toFixed(1);const a=Hn();a&&(a.motionStrength=o,a.motionPrompt=vo({anim:a.anim,framing:a.framing,motionStrength:o,motionEngine:a.motionEngine,cinemaMoveLabel:a.cinemaMoveLabel}),document.getElementById("shotMotionPrompt").value=a.motionPrompt,va(a))}),document.getElementById("copyBtn").addEventListener("click",()=>{navigator.clipboard.writeText(document.getElementById("fluxPromptBox").textContent);const r=document.getElementById("copyBtn");r.textContent="¡Copiado!",setTimeout(()=>{r.textContent="Copiar"},1500)}),document.getElementById("btn-share").addEventListener("click",()=>{navigator.clipboard.writeText(window.location.href);const r=document.getElementById("btn-share");r.innerHTML="<span>¡Enlace Copiado!</span>",setTimeout(()=>{r.innerHTML="<span>Compartir Web</span>"},1800)}),document.getElementById("btn-export-png").addEventListener("click",()=>{if(z.activeEngine==="threejs"){const r=ze.renderVertical916DataURL(1080,1920,z.depthPass),o=z.depthPass?"depth":"beauty";wn(r,`alina_9x16_piso${z.activeFloor}_${z.activeSpot.id}_${o}.png`),St(`✅ <span class="text-emerald-400 font-bold">Frame 1080×1920 (${o}) exportado.</span>`)}else z.depthPass?(ue.requestDepthScreenshot916(),St("📸 Capturando Depth Map 1080×1920 desde Unity 6 URP...")):(ue.requestScreenshot916(),St("📸 Capturando 1080×1920 desde Unity 6 URP..."))}),document.getElementById("btn-export-json").addEventListener("click",()=>{wi(xa(),`alina_higgsfield_piso${z.activeFloor}_${z.activeSpot.id}.json`),St('✅ <span class="text-amber-300 font-bold">JSON técnico de cámara Higgsfield descargado.</span>')}),document.getElementById("btn-export-package").addEventListener("click",()=>{const r=`alina_piso${z.activeFloor}_${z.activeSpot.id}`;if(z.activeEngine==="threejs"){const o=ze.renderVertical916DataURL(1080,1920,!1);wn(o,`${r}_beauty_1080x1920.png`),setTimeout(()=>{const a=ze.renderVertical916DataURL(1080,1920,!0);wn(a,`${r}_depth_1080x1920.png`)},220),setTimeout(()=>{wi(xa(),`${r}_higgsfield.json`)},440),St('✅ <span class="text-emerald-400 font-bold">Paquete 9:16 completo exportado (Beauty + Depth + JSON).</span>')}else ue.requestScreenshot916(),setTimeout(()=>{ue.requestDepthScreenshot916()},300),setTimeout(()=>{wi(xa(),`${r}_unity_higgsfield.json`)},600),St('✅ <span class="text-emerald-400 font-bold">Paquete Unity 9:16 exportado (Beauty + Depth + JSON).</span>')})}async function Rv(){const s=performance.now();Sv(),Av();const e=document.getElementById("three-canvas-container");Ms=new th,zn=new k_({antialias:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"}),zn.setPixelRatio(Math.min(window.devicePixelRatio,2)),zn.setSize(e.clientWidth||960,e.clientHeight||560,!1),zn.shadowMap.enabled=!0,zn.shadowMap.type=wd,e.appendChild(zn.domElement),Ei=new V_(Ms,zn),yo=Rx(Ms,Ei),ze=new Wx(e,Ms,zn,Ei),Dt=new Ix(Ms),ue=new Xx(document.getElementById("unity-canvas"),n=>{document.getElementById("unity-progress-bar").style.width=`${n}%`,document.getElementById("unity-loading-text").textContent=`Cargando runtime Unity 6 URP... ${n}%`},n=>{n!=null&&(z.unityLoadMs=n),document.getElementById("unity-loading-overlay").classList.add("hidden"),ue.requestCameraTelemetry(),ws(),Pi()},async n=>{var r;const i=`data:image/png;base64,${n}`;if(((r=z.pendingUnityCapture)==null?void 0:r.mode)==="create"){const o=z.pendingUnityCapture.withDepth;z.pendingUnityCapture=null,await xl(i,null),o&&z.selectedShotId&&(z.pendingUnityCapture={mode:"attachDepth",shotId:z.selectedShotId},setTimeout(()=>ue.requestDepthScreenshot916(),180));return}wn(i,`alina_unity_9x16_piso${z.activeFloor}_${z.activeSpot.id}_beauty.png`),St('✅ <span class="text-emerald-400 font-bold">Captura Unity Beauty 1080×1920 PNG descargada.</span>')},n=>{z.unityFps=n,z.activeEngine==="unity"&&ws()},async n=>{const i=`data:image/png;base64,${n}`,r=z.pendingUnityCapture;if((r==null?void 0:r.mode)==="create"){z.pendingUnityCapture=null,await xl(i,i);return}if((r==null?void 0:r.mode)==="attachDepth"){z.pendingUnityCapture=null;const o=z.shots.find(a=>a.id===r.shotId);o&&(o.depthImage=i,Yl(o,{onlyFluxIfClean:!0}),Ji(o),ui(),St('✅ <span class="text-emerald-400 font-bold">Depth Map Unity 1080×1920 adjuntado a la captura.</span>'));return}if((r==null?void 0:r.mode)==="exportDepth"){z.pendingUnityCapture=null;const o=z.shots.find(a=>a.id===r.shotId);o&&(o.depthImage=i,Ji(o),ui()),wn(i,`${r.baseName}_depth_1080x1920.png`);return}wn(i,`alina_unity_9x16_piso${z.activeFloor}_${z.activeSpot.id}_depth.png`),St('✅ <span class="text-emerald-400 font-bold">Captura Unity Depth Map 1080×1920 PNG descargada.</span>')}),an=new dv({scene:Ms,renderer:zn,lighting:Ei,camCtrl:ze,alina:Dt,unityBridge:ue,getSpot:n=>n?oo(n):z.activeSpot,prepareSpot:Md,getBaseMode:()=>z.lightingMode}),$i=pv(document.getElementById("cinema-panel"),{director:an,getSpot:oo,getActiveSpot:()=>z.activeSpot,setActiveSpot:Md,getAnim:()=>z.activeAnim,renderer:zn,camCtrl:ze,download:{dataUrl:wn,json:wi},setStatus:St}),Mv(oo).then(n=>{n.length>0&&z.shots.length===0&&(z.shots=n,z.selectedShotId=n[0].id,ql(),ui())}),fl(2);try{await Dt.load("./models/alina.glb"),Dt.placeAtSpot(z.activeSpot),Ao(z.activeSpot.defaultAnim||"Idle"),z.threeLoadMs=Math.round(performance.now()-s),ws(),Pi()}catch(n){console.error("[AlinaLoader] Error:",n),document.getElementById("viewport-status-hud").textContent=`Error cargando alina.glb: ${n.message}`}function t(){requestAnimationFrame(t);const n=Math.min(yd.getDelta(),.1),i=yd.elapsedTime;if(z.activeEngine==="threejs"){Dt.update(n),Ei.update(i);for(const o of yo.waterMeshes)o.position.y=(o.userData.baseY??(o.userData.baseY=o.position.y))+Math.sin(i*2.2)*.012;an==null||an.update(),ze.update(),ze.render(),ma++;const r=performance.now();r-ga>=750&&(Ah=Math.round(ma*1e3/(r-ga)),ma=0,ga=r,ws())}}t()}Rv();
