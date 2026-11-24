(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ja="174",_s={ROTATE:0,DOLLY:1,PAN:2},us={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rh=0,bl=1,oh=2,ed=1,td=2,Jn=3,ri=0,Xt=1,Fn=2,xi=0,xs=1,El=2,Tl=3,wl=4,ah=5,Ui=100,lh=101,ch=102,dh=103,hh=104,uh=200,fh=201,ph=202,mh=203,ra=204,oa=205,gh=206,_h=207,xh=208,vh=209,yh=210,Mh=211,Sh=212,bh=213,Eh=214,aa=0,la=1,ca=2,Ss=3,da=4,ha=5,ua=6,fa=7,nd=0,Th=1,wh=2,vi=0,Ah=1,Rh=2,Ch=3,id=4,Ih=5,Ph=6,Dh=7,Al="attached",Lh="detached",sd=300,bs=301,Es=302,sr=303,pa=304,ho=306,Mn=1e3,On=1001,Qr=1002,Zt=1003,rd=1004,Js=1005,kt=1006,Xr=1007,Bn=1008,oi=1009,od=1010,ad=1011,rr=1012,Qa=1013,zi=1014,sn=1015,kn=1016,el=1017,tl=1018,Ts=1020,ld=35902,cd=1021,dd=1022,yn=1023,hd=1024,ud=1025,vs=1026,ws=1027,nl=1028,il=1029,fd=1030,sl=1031,rl=1033,jr=33776,Yr=33777,qr=33778,Kr=33779,ma=35840,ga=35841,_a=35842,xa=35843,va=36196,ya=37492,Ma=37496,Sa=37808,ba=37809,Ea=37810,Ta=37811,wa=37812,Aa=37813,Ra=37814,Ca=37815,Ia=37816,Pa=37817,Da=37818,La=37819,Na=37820,Ua=37821,$r=36492,Fa=36494,Oa=36495,pd=36283,Ba=36284,ka=36285,za=36286,md=2200,gd=2201,Nh=2202,or=2300,ar=2301,_o=2302,fs=2400,ps=2401,eo=2402,ol=2500,Uh=2501,Fh=0,_d=1,Ha=2,Oh=3200,Bh=3201,xd=0,kh=1,ti="",Rt="srgb",jt="srgb-linear",to="linear",vt="srgb",Yi=7680,Rl=519,zh=512,Hh=513,Vh=514,vd=515,Gh=516,Wh=517,Xh=518,jh=519,Va=35044,Cl="300 es",ii=2e3,no=2001;class Mi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Il=1234567;const tr=Math.PI/180,As=180/Math.PI;function Cn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ht[s&255]+Ht[s>>8&255]+Ht[s>>16&255]+Ht[s>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function Ke(s,e,t){return Math.max(e,Math.min(t,s))}function al(s,e){return(s%e+e)%e}function Yh(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function qh(s,e,t){return s!==e?(t-s)/(e-s):0}function nr(s,e,t){return(1-t)*s+t*e}function Kh(s,e,t,n){return nr(s,e,1-Math.exp(-t*n))}function $h(s,e=1){return e-Math.abs(al(s,e*2)-e)}function Zh(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Jh(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Qh(s,e){return s+Math.floor(Math.random()*(e-s+1))}function eu(s,e){return s+Math.random()*(e-s)}function tu(s){return s*(.5-Math.random())}function nu(s){s!==void 0&&(Il=s);let e=Il+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function iu(s){return s*tr}function su(s){return s*As}function ru(s){return(s&s-1)===0&&s!==0}function ou(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function au(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function lu(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),d=o((e+n)/2),h=r((e-n)/2),u=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*d,l*h,l*u,a*c);break;case"YZY":s.set(l*u,a*d,l*h,a*c);break;case"ZXZ":s.set(l*h,l*u,a*d,a*c);break;case"XZX":s.set(a*d,l*g,l*p,a*c);break;case"YXY":s.set(l*p,a*d,l*g,a*c);break;case"ZYZ":s.set(l*g,l*p,a*d,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function An(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function mt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const io={DEG2RAD:tr,RAD2DEG:As,generateUUID:Cn,clamp:Ke,euclideanModulo:al,mapLinear:Yh,inverseLerp:qh,lerp:nr,damp:Kh,pingpong:$h,smoothstep:Zh,smootherstep:Jh,randInt:Qh,randFloat:eu,randFloatSpread:tu,seededRandom:nu,degToRad:iu,radToDeg:su,isPowerOfTwo:ru,ceilPowerOfTwo:ou,floorPowerOfTwo:au,setQuaternionFromProperEuler:lu,normalize:mt,denormalize:An};class Ee{constructor(e=0,t=0){Ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,n,i,r,o,a,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=i,d[2]=a,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],h=n[7],u=n[2],p=n[5],g=n[8],x=i[0],m=i[3],f=i[6],R=i[1],A=i[4],b=i[7],P=i[2],S=i[5],E=i[8];return r[0]=o*x+a*R+l*P,r[3]=o*m+a*A+l*S,r[6]=o*f+a*b+l*E,r[1]=c*x+d*R+h*P,r[4]=c*m+d*A+h*S,r[7]=c*f+d*b+h*E,r[2]=u*x+p*R+g*P,r[5]=u*m+p*A+g*S,r[8]=u*f+p*b+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-n*r*d+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*o-a*c,u=a*l-d*r,p=c*r-o*l,g=t*h+n*u+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(i*c-d*n)*x,e[2]=(a*n-i*o)*x,e[3]=u*x,e[4]=(d*t-i*l)*x,e[5]=(i*r-a*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(xo.makeScale(e,t)),this}rotate(e){return this.premultiply(xo.makeRotation(-e)),this}translate(e,t){return this.premultiply(xo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xo=new Xe;function yd(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function lr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function cu(){const s=lr("canvas");return s.style.display="block",s}const Pl={};function Li(s){s in Pl||(Pl[s]=!0,console.warn(s))}function du(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function hu(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function uu(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Dl=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ll=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fu(){const s={enabled:!0,workingColorSpace:jt,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===vt&&(i.r=si(i.r),i.g=si(i.g),i.b=si(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===vt&&(i.r=ys(i.r),i.g=ys(i.g),i.b=ys(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ti?to:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[jt]:{primaries:e,whitePoint:n,transfer:to,toXYZ:Dl,fromXYZ:Ll,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:e,whitePoint:n,transfer:vt,toXYZ:Dl,fromXYZ:Ll,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}}),s}const nt=fu();function si(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ys(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let qi;class pu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qi===void 0&&(qi=lr("canvas")),qi.width=e.width,qi.height=e.height;const n=qi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=qi}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=lr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=si(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(si(t[n]/255)*255):t[n]=si(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mu=0;class ll{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=Cn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(vo(i[o].image)):r.push(vo(i[o]))}else r=vo(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function vo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?pu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gu=0;class Ut extends Mi{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,n=On,i=On,r=kt,o=Bn,a=yn,l=oi,c=Ut.DEFAULT_ANISOTROPY,d=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=Cn(),this.name="",this.source=new ll(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mn:e.x=e.x-Math.floor(e.x);break;case On:e.x=e.x<0?0:1;break;case Qr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mn:e.y=e.y-Math.floor(e.y);break;case On:e.y=e.y<0?0:1;break;case Qr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=sd;Ut.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,n=0,i=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],d=l[4],h=l[8],u=l[1],p=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,b=(p+1)/2,P=(f+1)/2,S=(d+u)/4,E=(h+x)/4,T=(g+m)/4;return A>b&&A>P?A<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(A),i=S/n,r=E/n):b>P?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=S/i,r=T/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=E/r,i=T/r),this.set(n,i,r,t),this}let R=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(u-d)*(u-d));return Math.abs(R)<.001&&(R=1),this.x=(m-g)/R,this.y=(h-x)/R,this.z=(u-d)/R,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _u extends Mi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ut(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new ll(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yi extends _u{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Md extends Ut{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xu extends Ut{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],d=n[i+2],h=n[i+3];const u=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h;return}if(a===1){e[t+0]=u,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==u||c!==p||d!==g){let m=1-a;const f=l*u+c*p+d*g+h*x,R=f>=0?1:-1,A=1-f*f;if(A>Number.EPSILON){const P=Math.sqrt(A),S=Math.atan2(P,f*R);m=Math.sin(m*S)/P,a=Math.sin(a*S)/P}const b=a*R;if(l=l*m+u*b,c=c*m+p*b,d=d*m+g*b,h=h*m+x*b,m===1-a){const P=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=P,c*=P,d*=P,h*=P}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],d=n[i+3],h=r[o],u=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+d*h+l*p-c*u,e[t+1]=l*g+d*u+c*h-a*p,e[t+2]=c*g+d*p+a*u-l*h,e[t+3]=d*g-a*h-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(i/2),h=a(r/2),u=l(n/2),p=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=u*d*h+c*p*g,this._y=c*p*h-u*d*g,this._z=c*d*g+u*p*h,this._w=c*d*h-u*p*g;break;case"YXZ":this._x=u*d*h+c*p*g,this._y=c*p*h-u*d*g,this._z=c*d*g-u*p*h,this._w=c*d*h+u*p*g;break;case"ZXY":this._x=u*d*h-c*p*g,this._y=c*p*h+u*d*g,this._z=c*d*g+u*p*h,this._w=c*d*h-u*p*g;break;case"ZYX":this._x=u*d*h-c*p*g,this._y=c*p*h+u*d*g,this._z=c*d*g-u*p*h,this._w=c*d*h+u*p*g;break;case"YZX":this._x=u*d*h+c*p*g,this._y=c*p*h+u*d*g,this._z=c*d*g-u*p*h,this._w=c*d*h-u*p*g;break;case"XZY":this._x=u*d*h-c*p*g,this._y=c*p*h-u*d*g,this._z=c*d*g+u*p*h,this._w=c*d*h+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],h=t[10],u=n+a+h;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-c)*p,this._z=(o-i)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(d-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(r-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-i)/p,this._x=(r+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+o*a+i*c-r*l,this._y=i*d+o*l+r*a-n*c,this._z=r*d+o*c+n*l-i*a,this._w=o*d-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),h=Math.sin((1-t)*d)/c,u=Math.sin(t*d)/c;return this._w=o*h+this._w*u,this._x=n*h+this._x*u,this._y=i*h+this._y*u,this._z=r*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),d=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*d,this.y=n+l*d+a*c-r*h,this.z=i+l*h+r*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return yo.copy(this).projectOnVector(e),this.sub(yo)}reflect(e){return this.sub(yo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yo=new L,Nl=new hn;class In{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,bn):bn.fromBufferAttribute(r,o),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),mr.copy(n.boundingBox)),mr.applyMatrix4(e.matrixWorld),this.union(mr)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bs),gr.subVectors(this.max,Bs),Ki.subVectors(e.a,Bs),$i.subVectors(e.b,Bs),Zi.subVectors(e.c,Bs),li.subVectors($i,Ki),ci.subVectors(Zi,$i),wi.subVectors(Ki,Zi);let t=[0,-li.z,li.y,0,-ci.z,ci.y,0,-wi.z,wi.y,li.z,0,-li.x,ci.z,0,-ci.x,wi.z,0,-wi.x,-li.y,li.x,0,-ci.y,ci.x,0,-wi.y,wi.x,0];return!Mo(t,Ki,$i,Zi,gr)||(t=[1,0,0,0,1,0,0,0,1],!Mo(t,Ki,$i,Zi,gr))?!1:(_r.crossVectors(li,ci),t=[_r.x,_r.y,_r.z],Mo(t,Ki,$i,Zi,gr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xn=[new L,new L,new L,new L,new L,new L,new L,new L],bn=new L,mr=new In,Ki=new L,$i=new L,Zi=new L,li=new L,ci=new L,wi=new L,Bs=new L,gr=new L,_r=new L,Ai=new L;function Mo(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ai.fromArray(s,r);const a=i.x*Math.abs(Ai.x)+i.y*Math.abs(Ai.y)+i.z*Math.abs(Ai.z),l=e.dot(Ai),c=t.dot(Ai),d=n.dot(Ai);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const vu=new In,ks=new L,So=new L;class Gn{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):vu.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ks.subVectors(e,this.center);const t=ks.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ks,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(So.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ks.copy(e.center).add(So)),this.expandByPoint(ks.copy(e.center).sub(So))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jn=new L,bo=new L,xr=new L,di=new L,Eo=new L,vr=new L,To=new L;class dr{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,t),jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){bo.copy(e).add(t).multiplyScalar(.5),xr.copy(t).sub(e).normalize(),di.copy(this.origin).sub(bo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(xr),a=di.dot(this.direction),l=-di.dot(xr),c=di.lengthSq(),d=Math.abs(1-o*o);let h,u,p,g;if(d>0)if(h=o*l-a,u=o*a-l,g=r*d,h>=0)if(u>=-g)if(u<=g){const x=1/d;h*=x,u*=x,p=h*(h+o*u+2*a)+u*(o*h+u+2*l)+c}else u=r,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;else u=-r,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;else u<=-g?(h=Math.max(0,-(-o*r+a)),u=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+u*(u+2*l)+c):u<=g?(h=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(h=Math.max(0,-(o*r+a)),u=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+u*(u+2*l)+c);else u=o>0?-r:r,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(bo).addScaledVector(xr,u),p}intersectSphere(e,t){jn.subVectors(e.center,this.origin);const n=jn.dot(this.direction),i=jn.dot(jn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),d>=0?(r=(e.min.y-u.y)*d,o=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,o=(e.min.y-u.y)*d),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(a=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,n,i,r){Eo.subVectors(t,e),vr.subVectors(n,e),To.crossVectors(Eo,vr);let o=this.direction.dot(To),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;di.subVectors(this.origin,e);const l=a*this.direction.dot(vr.crossVectors(di,vr));if(l<0)return null;const c=a*this.direction.dot(Eo.cross(di));if(c<0||l+c>o)return null;const d=-a*di.dot(To);return d<0?null:this.at(d/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class We{constructor(e,t,n,i,r,o,a,l,c,d,h,u,p,g,x,m){We.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,d,h,u,p,g,x,m)}set(e,t,n,i,r,o,a,l,c,d,h,u,p,g,x,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=d,f[10]=h,f[14]=u,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new We().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ji.setFromMatrixColumn(e,0).length(),r=1/Ji.setFromMatrixColumn(e,1).length(),o=1/Ji.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),d=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const u=o*d,p=o*h,g=a*d,x=a*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=u-x*c,t[9]=-a*l,t[2]=x-u*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const u=l*d,p=l*h,g=c*d,x=c*h;t[0]=u+x*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*d,t[9]=-a,t[2]=p*a-g,t[6]=x+u*a,t[10]=o*l}else if(e.order==="ZXY"){const u=l*d,p=l*h,g=c*d,x=c*h;t[0]=u-x*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*d,t[9]=x-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const u=o*d,p=o*h,g=a*d,x=a*h;t[0]=l*d,t[4]=g*c-p,t[8]=u*c+x,t[1]=l*h,t[5]=x*c+u,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const u=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*d,t[4]=x-u*h,t[8]=g*h+p,t[1]=h,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=p*h+g,t[10]=u-x*h}else if(e.order==="XZY"){const u=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=u*h+x,t[5]=o*d,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*d,t[10]=x*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yu,e,Mu)}lookAt(e,t,n){const i=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),hi.crossVectors(n,ln),hi.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),hi.crossVectors(n,ln)),hi.normalize(),yr.crossVectors(ln,hi),i[0]=hi.x,i[4]=yr.x,i[8]=ln.x,i[1]=hi.y,i[5]=yr.y,i[9]=ln.y,i[2]=hi.z,i[6]=yr.z,i[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],h=n[5],u=n[9],p=n[13],g=n[2],x=n[6],m=n[10],f=n[14],R=n[3],A=n[7],b=n[11],P=n[15],S=i[0],E=i[4],T=i[8],v=i[12],_=i[1],C=i[5],O=i[9],U=i[13],F=i[2],j=i[6],k=i[10],Z=i[14],Y=i[3],oe=i[7],le=i[11],me=i[15];return r[0]=o*S+a*_+l*F+c*Y,r[4]=o*E+a*C+l*j+c*oe,r[8]=o*T+a*O+l*k+c*le,r[12]=o*v+a*U+l*Z+c*me,r[1]=d*S+h*_+u*F+p*Y,r[5]=d*E+h*C+u*j+p*oe,r[9]=d*T+h*O+u*k+p*le,r[13]=d*v+h*U+u*Z+p*me,r[2]=g*S+x*_+m*F+f*Y,r[6]=g*E+x*C+m*j+f*oe,r[10]=g*T+x*O+m*k+f*le,r[14]=g*v+x*U+m*Z+f*me,r[3]=R*S+A*_+b*F+P*Y,r[7]=R*E+A*C+b*j+P*oe,r[11]=R*T+A*O+b*k+P*le,r[15]=R*v+A*U+b*Z+P*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],u=e[10],p=e[14],g=e[3],x=e[7],m=e[11],f=e[15];return g*(+r*l*h-i*c*h-r*a*u+n*c*u+i*a*p-n*l*p)+x*(+t*l*p-t*c*u+r*o*u-i*o*p+i*c*d-r*l*d)+m*(+t*c*h-t*a*p-r*o*h+n*o*p+r*a*d-n*c*d)+f*(-i*a*d-t*l*h+t*a*u+i*o*h-n*o*u+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],u=e[10],p=e[11],g=e[12],x=e[13],m=e[14],f=e[15],R=h*m*c-x*u*c+x*l*p-a*m*p-h*l*f+a*u*f,A=g*u*c-d*m*c-g*l*p+o*m*p+d*l*f-o*u*f,b=d*x*c-g*h*c+g*a*p-o*x*p-d*a*f+o*h*f,P=g*h*l-d*x*l-g*a*u+o*x*u+d*a*m-o*h*m,S=t*R+n*A+i*b+r*P;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/S;return e[0]=R*E,e[1]=(x*u*r-h*m*r-x*i*p+n*m*p+h*i*f-n*u*f)*E,e[2]=(a*m*r-x*l*r+x*i*c-n*m*c-a*i*f+n*l*f)*E,e[3]=(h*l*r-a*u*r-h*i*c+n*u*c+a*i*p-n*l*p)*E,e[4]=A*E,e[5]=(d*m*r-g*u*r+g*i*p-t*m*p-d*i*f+t*u*f)*E,e[6]=(g*l*r-o*m*r-g*i*c+t*m*c+o*i*f-t*l*f)*E,e[7]=(o*u*r-d*l*r+d*i*c-t*u*c-o*i*p+t*l*p)*E,e[8]=b*E,e[9]=(g*h*r-d*x*r-g*n*p+t*x*p+d*n*f-t*h*f)*E,e[10]=(o*x*r-g*a*r+g*n*c-t*x*c-o*n*f+t*a*f)*E,e[11]=(d*a*r-o*h*r-d*n*c+t*h*c+o*n*p-t*a*p)*E,e[12]=P*E,e[13]=(d*x*i-g*h*i+g*n*u-t*x*u-d*n*m+t*h*m)*E,e[14]=(g*a*i-o*x*i-g*n*l+t*x*l+o*n*m-t*a*m)*E,e[15]=(o*h*i-d*a*i+d*n*l-t*h*l-o*n*u+t*a*u)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,d=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,d*a+n,d*l-i*o,0,c*l-i*a,d*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,d=o+o,h=a+a,u=r*c,p=r*d,g=r*h,x=o*d,m=o*h,f=a*h,R=l*c,A=l*d,b=l*h,P=n.x,S=n.y,E=n.z;return i[0]=(1-(x+f))*P,i[1]=(p+b)*P,i[2]=(g-A)*P,i[3]=0,i[4]=(p-b)*S,i[5]=(1-(u+f))*S,i[6]=(m+R)*S,i[7]=0,i[8]=(g+A)*E,i[9]=(m-R)*E,i[10]=(1-(u+x))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ji.set(i[0],i[1],i[2]).length();const o=Ji.set(i[4],i[5],i[6]).length(),a=Ji.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],En.copy(this);const c=1/r,d=1/o,h=1/a;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=d,En.elements[5]*=d,En.elements[6]*=d,En.elements[8]*=h,En.elements[9]*=h,En.elements[10]*=h,t.setFromRotationMatrix(En),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=ii){const l=this.elements,c=2*r/(t-e),d=2*r/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i);let p,g;if(a===ii)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===no)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=ii){const l=this.elements,c=1/(t-e),d=1/(n-i),h=1/(o-r),u=(t+e)*c,p=(n+i)*d;let g,x;if(a===ii)g=(o+r)*h,x=-2*h;else if(a===no)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ji=new L,En=new We,yu=new L(0,0,0),Mu=new L(1,1,1),hi=new L,yr=new L,ln=new L,Ul=new We,Fl=new hn;class Vn{constructor(e=0,t=0,n=0,i=Vn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],d=i[9],h=i[2],u=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ul.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ul,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fl.setFromEuler(this),this.setFromQuaternion(Fl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vn.DEFAULT_ORDER="XYZ";class Sd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Su=0;const Ol=new L,Qi=new hn,Yn=new We,Mr=new L,zs=new L,bu=new L,Eu=new hn,Bl=new L(1,0,0),kl=new L(0,1,0),zl=new L(0,0,1),Hl={type:"added"},Tu={type:"removed"},es={type:"childadded",child:null},wo={type:"childremoved",child:null};class Et extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=Cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new L,t=new Vn,n=new hn,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new We},normalMatrix:{value:new Xe}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.premultiply(Qi),this}rotateX(e){return this.rotateOnAxis(Bl,e)}rotateY(e){return this.rotateOnAxis(kl,e)}rotateZ(e){return this.rotateOnAxis(zl,e)}translateOnAxis(e,t){return Ol.copy(e).applyQuaternion(this.quaternion),this.position.add(Ol.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bl,e)}translateY(e){return this.translateOnAxis(kl,e)}translateZ(e){return this.translateOnAxis(zl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Mr.copy(e):Mr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(zs,Mr,this.up):Yn.lookAt(Mr,zs,this.up),this.quaternion.setFromRotationMatrix(Yn),i&&(Yn.extractRotation(i.matrixWorld),Qi.setFromRotationMatrix(Yn),this.quaternion.premultiply(Qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hl),es.child=e,this.dispatchEvent(es),es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tu),wo.child=e,this.dispatchEvent(wo),wo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hl),es.child=e,this.dispatchEvent(es),es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,e,bu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,Eu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),u=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Et.DEFAULT_UP=new L(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new L,qn=new L,Ao=new L,Kn=new L,ts=new L,ns=new L,Vl=new L,Ro=new L,Co=new L,Io=new L,Po=new ot,Do=new ot,Lo=new ot;class Rn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Tn.subVectors(e,t),i.cross(Tn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Tn.subVectors(i,t),qn.subVectors(n,t),Ao.subVectors(e,t);const o=Tn.dot(Tn),a=Tn.dot(qn),l=Tn.dot(Ao),c=qn.dot(qn),d=qn.dot(Ao),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const u=1/h,p=(c*l-a*d)*u,g=(o*d-a*l)*u;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Kn.x),l.addScaledVector(o,Kn.y),l.addScaledVector(a,Kn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Po.setScalar(0),Do.setScalar(0),Lo.setScalar(0),Po.fromBufferAttribute(e,t),Do.fromBufferAttribute(e,n),Lo.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Po,r.x),o.addScaledVector(Do,r.y),o.addScaledVector(Lo,r.z),o}static isFrontFacing(e,t,n,i){return Tn.subVectors(n,t),qn.subVectors(e,t),Tn.cross(qn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),Tn.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Rn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;ts.subVectors(i,n),ns.subVectors(r,n),Ro.subVectors(e,n);const l=ts.dot(Ro),c=ns.dot(Ro);if(l<=0&&c<=0)return t.copy(n);Co.subVectors(e,i);const d=ts.dot(Co),h=ns.dot(Co);if(d>=0&&h<=d)return t.copy(i);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(n).addScaledVector(ts,o);Io.subVectors(e,r);const p=ts.dot(Io),g=ns.dot(Io);if(g>=0&&p<=g)return t.copy(r);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ns,a);const m=d*g-p*h;if(m<=0&&h-d>=0&&p-g>=0)return Vl.subVectors(r,i),a=(h-d)/(h-d+(p-g)),t.copy(i).addScaledVector(Vl,a);const f=1/(m+x+u);return o=x*f,a=u*f,t.copy(n).addScaledVector(ts,o).addScaledVector(ns,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const bd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},Sr={h:0,s:0,l:0};function No(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class we{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=nt.workingColorSpace){if(e=al(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=No(o,r,e+1/3),this.g=No(o,r,e),this.b=No(o,r,e-1/3)}return nt.toWorkingColorSpace(this,i),this}setStyle(e,t=Rt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){const n=bd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return nt.fromWorkingColorSpace(Vt.copy(this),e),Math.round(Ke(Vt.r*255,0,255))*65536+Math.round(Ke(Vt.g*255,0,255))*256+Math.round(Ke(Vt.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Vt.copy(this),t);const n=Vt.r,i=Vt.g,r=Vt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Rt){nt.fromWorkingColorSpace(Vt.copy(this),e);const t=Vt.r,n=Vt.g,i=Vt.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ui),this.setHSL(ui.h+e,ui.s+t,ui.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ui),e.getHSL(Sr);const n=nr(ui.h,Sr.h,t),i=nr(ui.s,Sr.s,t),r=nr(ui.l,Sr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new we;we.NAMES=bd;let wu=0;class Hn extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=Cn(),this.name="",this.type="Material",this.blending=xs,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ra,this.blendDst=oa,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=Ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(n.blending=this.blending),this.side!==ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ra&&(n.blendSrc=this.blendSrc),this.blendDst!==oa&&(n.blendDst=this.blendDst),this.blendEquation!==Ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ss&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class zn extends Hn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=nd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ni=Au();function Au(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,d=0;for(;(c&8388608)===0;)c<<=1,d-=8388608;c&=-8388609,d+=947912704,r[l]=c|d}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function Ru(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=Ke(s,-65504,65504),ni.floatView[0]=s;const e=ni.uint32View[0],t=e>>23&511;return ni.baseTable[t]+((e&8388607)>>ni.shiftTable[t])}function Cu(s){const e=s>>10;return ni.uint32View[0]=ni.mantissaTable[ni.offsetTable[e]+(s&1023)]+ni.exponentTable[e],ni.floatView[0]}class br{static toHalfFloat(e){return Ru(e)}static fromHalfFloat(e){return Cu(e)}}const Pt=new L,Er=new Ee;let Iu=0;class Jt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Iu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Va,this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Er.fromBufferAttribute(this,t),Er.applyMatrix3(e),this.setXY(t,Er.x,Er.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=An(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=An(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=An(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=An(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=An(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Va&&(e.usage=this.usage),e}}class Ed extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Td extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ct extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Pu=0;const mn=new We,Uo=new Et,is=new L,cn=new In,Hs=new In,Bt=new L;class rn extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=Cn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yd(e)?Td:Ed)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,n){return mn.makeTranslation(e,t,n),this.applyMatrix4(mn),this}scale(e,t,n){return mn.makeScale(e,t,n),this.applyMatrix4(mn),this}lookAt(e){return Uo.lookAt(e),Uo.updateMatrix(),this.applyMatrix4(Uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ct(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new In);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Hs.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(cn.min,Hs.min),cn.expandByPoint(Bt),Bt.addVectors(cn.max,Hs.max),cn.expandByPoint(Bt)):(cn.expandByPoint(Hs.min),cn.expandByPoint(Hs.max))}cn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Bt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Bt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Bt.fromBufferAttribute(a,c),l&&(is.fromBufferAttribute(e,c),Bt.add(is)),i=Math.max(i,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let T=0;T<n.count;T++)a[T]=new L,l[T]=new L;const c=new L,d=new L,h=new L,u=new Ee,p=new Ee,g=new Ee,x=new L,m=new L;function f(T,v,_){c.fromBufferAttribute(n,T),d.fromBufferAttribute(n,v),h.fromBufferAttribute(n,_),u.fromBufferAttribute(r,T),p.fromBufferAttribute(r,v),g.fromBufferAttribute(r,_),d.sub(c),h.sub(c),p.sub(u),g.sub(u);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(x.copy(d).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(C),m.copy(h).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(C),a[T].add(x),a[v].add(x),a[_].add(x),l[T].add(m),l[v].add(m),l[_].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let T=0,v=R.length;T<v;++T){const _=R[T],C=_.start,O=_.count;for(let U=C,F=C+O;U<F;U+=3)f(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const A=new L,b=new L,P=new L,S=new L;function E(T){P.fromBufferAttribute(i,T),S.copy(P);const v=a[T];A.copy(v),A.sub(P.multiplyScalar(P.dot(v))).normalize(),b.crossVectors(S,v);const C=b.dot(l[T])<0?-1:1;o.setXYZW(T,A.x,A.y,A.z,C)}for(let T=0,v=R.length;T<v;++T){const _=R[T],C=_.start,O=_.count;for(let U=C,F=C+O;U<F;U+=3)E(e.getX(U+0)),E(e.getX(U+1)),E(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const i=new L,r=new L,o=new L,a=new L,l=new L,c=new L,d=new L,h=new L;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),d.subVectors(o,r),h.subVectors(i,r),d.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(d),l.add(d),c.add(d),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),d.subVectors(o,r),h.subVectors(i,r),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,h=a.normalized,u=new c.constructor(l.length*d);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*d;for(let f=0;f<d;f++)u[g++]=c[p++]}return new Jt(u,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new rn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let d=0,h=c.length;d<h;d++){const u=c[d],p=e(u,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const p=c[h];d.push(p.toJSON(e.data))}d.length>0&&(i[l]=d,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const d=i[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],h=r[c];for(let u=0,p=h.length;u<p;u++)d.push(h[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gl=new We,Ri=new dr,Tr=new Gn,Wl=new L,wr=new L,Ar=new L,Rr=new L,Fo=new L,Cr=new L,Xl=new L,Ir=new L;class Oe extends Et{constructor(e=new rn,t=new zn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Cr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=a[l],h=r[l];d!==0&&(Fo.fromBufferAttribute(h,e),o?Cr.addScaledVector(Fo,d):Cr.addScaledVector(Fo.sub(t),d))}t.add(Cr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(r),Ri.copy(e.ray).recast(e.near),!(Tr.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(Tr,Wl)===null||Ri.origin.distanceToSquared(Wl)>(e.far-e.near)**2))&&(Gl.copy(r).invert(),Ri.copy(e.ray).applyMatrix4(Gl),!(n.boundingBox!==null&&Ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ri)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){const m=u[g],f=o[m.materialIndex],R=Math.max(m.start,p.start),A=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let b=R,P=A;b<P;b+=3){const S=a.getX(b),E=a.getX(b+1),T=a.getX(b+2);i=Pr(this,f,e,n,c,d,h,S,E,T),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const R=a.getX(m),A=a.getX(m+1),b=a.getX(m+2);i=Pr(this,o,e,n,c,d,h,R,A,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){const m=u[g],f=o[m.materialIndex],R=Math.max(m.start,p.start),A=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=R,P=A;b<P;b+=3){const S=b,E=b+1,T=b+2;i=Pr(this,f,e,n,c,d,h,S,E,T),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const R=m,A=m+1,b=m+2;i=Pr(this,o,e,n,c,d,h,R,A,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Du(s,e,t,n,i,r,o,a){let l;if(e.side===Xt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===ri,a),l===null)return null;Ir.copy(a),Ir.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Ir);return c<t.near||c>t.far?null:{distance:c,point:Ir.clone(),object:s}}function Pr(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,wr),s.getVertexPosition(l,Ar),s.getVertexPosition(c,Rr);const d=Du(s,e,t,n,wr,Ar,Rr,Xl);if(d){const h=new L;Rn.getBarycoord(Xl,wr,Ar,Rr,h),i&&(d.uv=Rn.getInterpolatedAttribute(i,a,l,c,h,new Ee)),r&&(d.uv1=Rn.getInterpolatedAttribute(r,a,l,c,h,new Ee)),o&&(d.normal=Rn.getInterpolatedAttribute(o,a,l,c,h,new L),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new L,materialIndex:0};Rn.getNormal(wr,Ar,Rr,u.normal),d.face=u,d.barycoord=h}return d}class Si extends rn{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],d=[],h=[];let u=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(d,3)),this.setAttribute("uv",new Ct(h,2));function g(x,m,f,R,A,b,P,S,E,T,v){const _=b/E,C=P/T,O=b/2,U=P/2,F=S/2,j=E+1,k=T+1;let Z=0,Y=0;const oe=new L;for(let le=0;le<k;le++){const me=le*C-U;for(let Pe=0;Pe<j;Pe++){const ke=Pe*_-O;oe[x]=ke*R,oe[m]=me*A,oe[f]=F,c.push(oe.x,oe.y,oe.z),oe[x]=0,oe[m]=0,oe[f]=S>0?1:-1,d.push(oe.x,oe.y,oe.z),h.push(Pe/E),h.push(1-le/T),Z+=1}}for(let le=0;le<T;le++)for(let me=0;me<E;me++){const Pe=u+me+j*le,ke=u+me+j*(le+1),K=u+(me+1)+j*(le+1),ae=u+(me+1)+j*le;l.push(Pe,ke,ae),l.push(ke,K,ae),Y+=6}a.addGroup(p,Y,v),p+=Y,u+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Si(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rs(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function $t(s){const e={};for(let t=0;t<s.length;t++){const n=Rs(s[t]);for(const i in n)e[i]=n[i]}return e}function Lu(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function wd(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const Ad={clone:Rs,merge:$t};var Nu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pn extends Hn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nu,this.fragmentShader=Uu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=Lu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Rd extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=ii}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fi=new L,jl=new Ee,Yl=new Ee;class Wt extends Rd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=As*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return As*2*Math.atan(Math.tan(tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fi.x,fi.y).multiplyScalar(-e/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fi.x,fi.y).multiplyScalar(-e/fi.z)}getViewSize(e,t){return this.getViewBounds(e,jl,Yl),t.subVectors(Yl,jl)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(tr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ss=-90,rs=1;class Fu extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Wt(ss,rs,e,t);i.layers=this.layers,this.add(i);const r=new Wt(ss,rs,e,t);r.layers=this.layers,this.add(r);const o=new Wt(ss,rs,e,t);o.layers=this.layers,this.add(o);const a=new Wt(ss,rs,e,t);a.layers=this.layers,this.add(a);const l=new Wt(ss,rs,e,t);l.layers=this.layers,this.add(l);const c=new Wt(ss,rs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===ii)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===no)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(h,u,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Cd extends Ut{constructor(e,t,n,i,r,o,a,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:bs,super(e,t,n,i,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ou extends yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Cd(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Si(5,5,5),r=new Pn({name:"CubemapFromEquirect",uniforms:Rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:xi});r.uniforms.tEquirect.value=t;const o=new Oe(i,r),a=t.minFilter;return t.minFilter===Bn&&(t.minFilter=kt),new Fu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}class Gt extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bu={type:"move"};class Oo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bu)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Gt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class so{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new we(e),this.density=t}clone(){return new so(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Id extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ku{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Va,this.updateRanges=[],this.version=0,this.uuid=Cn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Kt=new L;class cl{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=An(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=An(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=An(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=An(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=An(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),i=mt(i,this.array),r=mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new cl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ql=new L,Kl=new ot,$l=new ot,zu=new L,Zl=new We,Dr=new L,Bo=new Gn,Jl=new We,ko=new dr;class Hu extends Oe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Al,this.bindMatrix=new We,this.bindMatrixInverse=new We,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new In),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Dr),this.boundingBox.expandByPoint(Dr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Gn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Dr),this.boundingSphere.expandByPoint(Dr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bo.copy(this.boundingSphere),Bo.applyMatrix4(i),e.ray.intersectsSphere(Bo)!==!1&&(Jl.copy(i).invert(),ko.copy(e.ray).applyMatrix4(Jl),!(this.boundingBox!==null&&ko.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ko)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ot,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Al?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Lh?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Kl.fromBufferAttribute(i.attributes.skinIndex,e),$l.fromBufferAttribute(i.attributes.skinWeight,e),ql.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=$l.getComponent(r);if(o!==0){const a=Kl.getComponent(r);Zl.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(zu.copy(ql).applyMatrix4(Zl),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Pd extends Et{constructor(){super(),this.isBone=!0,this.type="Bone"}}class dl extends Ut{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Zt,d=Zt,h,u){super(null,o,a,l,c,d,i,r,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ql=new We,Vu=new We;class hl{constructor(e=[],t=[]){this.uuid=Cn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new We)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new We;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Vu;Ql.multiplyMatrices(a,t[r]),Ql.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new hl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new dl(t,e,e,yn,sn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Pd),this.bones.push(o),this.boneInverses.push(new We().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Ga extends Jt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const os=new We,ec=new We,Lr=[],tc=new In,Gu=new We,Vs=new Oe,Gs=new Gn;class Wu extends Oe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ga(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Gu)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new In),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,os),tc.copy(e.boundingBox).applyMatrix4(os),this.boundingBox.union(tc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,os),Gs.copy(e.boundingSphere).applyMatrix4(os),this.boundingSphere.union(Gs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Vs.geometry=this.geometry,Vs.material=this.material,Vs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gs.copy(this.boundingSphere),Gs.applyMatrix4(n),e.ray.intersectsSphere(Gs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,os),ec.multiplyMatrices(n,os),Vs.matrixWorld=ec,Vs.raycast(e,Lr);for(let o=0,a=Lr.length;o<a;o++){const l=Lr[o];l.instanceId=r,l.object=this,t.push(l)}Lr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ga(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new dl(new Float32Array(i*this.count),i,this.count,nl,sn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const zo=new L,Xu=new L,ju=new Xe;class ei{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=zo.subVectors(n,t).cross(Xu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(zo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ju.getNormalMatrix(e),i=this.coplanarPoint(zo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ci=new Gn,Nr=new L;class ul{constructor(e=new ei,t=new ei,n=new ei,i=new ei,r=new ei,o=new ei){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ii){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],d=i[5],h=i[6],u=i[7],p=i[8],g=i[9],x=i[10],m=i[11],f=i[12],R=i[13],A=i[14],b=i[15];if(n[0].setComponents(l-r,u-c,m-p,b-f).normalize(),n[1].setComponents(l+r,u+c,m+p,b+f).normalize(),n[2].setComponents(l+o,u+d,m+g,b+R).normalize(),n[3].setComponents(l-o,u-d,m-g,b-R).normalize(),n[4].setComponents(l-a,u-h,m-x,b-A).normalize(),t===ii)n[5].setComponents(l+a,u+h,m+x,b+A).normalize();else if(t===no)n[5].setComponents(a,h,x,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(e){return Ci.center.set(0,0,0),Ci.radius=.7071067811865476,Ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Nr.x=i.normal.x>0?e.max.x:e.min.x,Nr.y=i.normal.y>0?e.max.y:e.min.y,Nr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Nr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Dd extends Hn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ro=new L,oo=new L,nc=new We,Ws=new dr,Ur=new Gn,Ho=new L,ic=new L;class fl extends Et{constructor(e=new rn,t=new Dd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ro.fromBufferAttribute(t,i-1),oo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ro.distanceTo(oo);e.setAttribute("lineDistance",new Ct(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(i),Ur.radius+=r,e.ray.intersectsSphere(Ur)===!1)return;nc.copy(i).invert(),Ws.copy(e.ray).applyMatrix4(nc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){const f=d.getX(x),R=d.getX(x+1),A=Fr(this,e,Ws,l,f,R,x);A&&t.push(A)}if(this.isLineLoop){const x=d.getX(g-1),m=d.getX(p),f=Fr(this,e,Ws,l,x,m,g-1);f&&t.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){const f=Fr(this,e,Ws,l,x,x+1,x);f&&t.push(f)}if(this.isLineLoop){const x=Fr(this,e,Ws,l,g-1,p,g-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Fr(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(ro.fromBufferAttribute(a,i),oo.fromBufferAttribute(a,r),t.distanceSqToSegment(ro,oo,Ho,ic)>n)return;Ho.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Ho);if(!(c<e.near||c>e.far))return{distance:c,point:ic.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const sc=new L,rc=new L;class Yu extends fl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)sc.fromBufferAttribute(t,i),rc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+sc.distanceTo(rc);e.setAttribute("lineDistance",new Ct(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qu extends fl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ld extends Hn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const oc=new We,Wa=new dr,Or=new Gn,Br=new L;class Ku extends Et{constructor(e=new rn,t=new Ld){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(i),Or.radius+=r,e.ray.intersectsSphere(Or)===!1)return;oc.copy(i).invert(),Wa.copy(e.ray).applyMatrix4(oc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const u=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=u,x=p;g<x;g++){const m=c.getX(g);Br.fromBufferAttribute(h,m),ac(Br,m,l,i,e,t,this)}}else{const u=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=u,x=p;g<x;g++)Br.fromBufferAttribute(h,g),ac(Br,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ac(s,e,t,n,i,r,o){const a=Wa.distanceSqToPoint(s);if(a<t){const l=new L;Wa.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Nd extends Ut{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ud extends Ut{constructor(e,t,n,i,r,o,a,l,c,d=vs){if(d!==vs&&d!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===vs&&(n=zi),n===void 0&&d===ws&&(n=Ts),super(null,i,r,o,a,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Zt,this.minFilter=l!==void 0?l:Zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ll(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class uo extends rn{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new L,d=new Ee;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,u=3;h<=t;h++,u+=3){const p=n+h/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(o[u]/e+1)/2,d.y=(o[u+1]/e+1)/2,l.push(d.x,d.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Ct(o,3)),this.setAttribute("normal",new Ct(a,3)),this.setAttribute("uv",new Ct(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class wn extends rn{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const d=[],h=[],u=[],p=[];let g=0;const x=[],m=n/2;let f=0;R(),o===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(d),this.setAttribute("position",new Ct(h,3)),this.setAttribute("normal",new Ct(u,3)),this.setAttribute("uv",new Ct(p,2));function R(){const b=new L,P=new L;let S=0;const E=(t-e)/n;for(let T=0;T<=r;T++){const v=[],_=T/r,C=_*(t-e)+e;for(let O=0;O<=i;O++){const U=O/i,F=U*l+a,j=Math.sin(F),k=Math.cos(F);P.x=C*j,P.y=-_*n+m,P.z=C*k,h.push(P.x,P.y,P.z),b.set(j,E,k).normalize(),u.push(b.x,b.y,b.z),p.push(U,1-_),v.push(g++)}x.push(v)}for(let T=0;T<i;T++)for(let v=0;v<r;v++){const _=x[v][T],C=x[v+1][T],O=x[v+1][T+1],U=x[v][T+1];(e>0||v!==0)&&(d.push(_,C,U),S+=3),(t>0||v!==r-1)&&(d.push(C,O,U),S+=3)}c.addGroup(f,S,0),f+=S}function A(b){const P=g,S=new Ee,E=new L;let T=0;const v=b===!0?e:t,_=b===!0?1:-1;for(let O=1;O<=i;O++)h.push(0,m*_,0),u.push(0,_,0),p.push(.5,.5),g++;const C=g;for(let O=0;O<=i;O++){const F=O/i*l+a,j=Math.cos(F),k=Math.sin(F);E.x=v*k,E.y=m*_,E.z=v*j,h.push(E.x,E.y,E.z),u.push(0,_,0),S.x=j*.5+.5,S.y=k*.5*_+.5,p.push(S.x,S.y),g++}for(let O=0;O<i;O++){const U=P+O,F=C+O;b===!0?d.push(F,F+1,U):d.push(F+1,F,U),T+=3}c.addGroup(f,T,b===!0?1:2),f+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ds extends rn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,d=l+1,h=e/a,u=t/l,p=[],g=[],x=[],m=[];for(let f=0;f<d;f++){const R=f*u-o;for(let A=0;A<c;A++){const b=A*h-r;g.push(b,-R,0),x.push(0,0,1),m.push(A/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let R=0;R<a;R++){const A=R+c*f,b=R+c*(f+1),P=R+1+c*(f+1),S=R+1+c*f;p.push(A,b,S),p.push(b,P,S)}this.setIndex(p),this.setAttribute("position",new Ct(g,3)),this.setAttribute("normal",new Ct(x,3)),this.setAttribute("uv",new Ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ds(e.width,e.height,e.widthSegments,e.heightSegments)}}class Oi extends rn{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const d=[],h=new L,u=new L,p=[],g=[],x=[],m=[];for(let f=0;f<=n;f++){const R=[],A=f/n;let b=0;f===0&&o===0?b=.5/t:f===n&&l===Math.PI&&(b=-.5/t);for(let P=0;P<=t;P++){const S=P/t;h.x=-e*Math.cos(i+S*r)*Math.sin(o+A*a),h.y=e*Math.cos(o+A*a),h.z=e*Math.sin(i+S*r)*Math.sin(o+A*a),g.push(h.x,h.y,h.z),u.copy(h).normalize(),x.push(u.x,u.y,u.z),m.push(S+b,1-A),R.push(c++)}d.push(R)}for(let f=0;f<n;f++)for(let R=0;R<t;R++){const A=d[f][R+1],b=d[f][R],P=d[f+1][R],S=d[f+1][R+1];(f!==0||o>0)&&p.push(A,b,S),(f!==n-1||l<Math.PI)&&p.push(b,P,S)}this.setIndex(p),this.setAttribute("position",new Ct(g,3)),this.setAttribute("normal",new Ct(x,3)),this.setAttribute("uv",new Ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ao extends rn{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],d=new L,h=new L,u=new L;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const x=g/i*r,m=p/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(x),h.y=(e+t*Math.cos(m))*Math.sin(x),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),u.subVectors(h,d).normalize(),l.push(u.x,u.y,u.z),c.push(g/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const x=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,f=(i+1)*(p-1)+g,R=(i+1)*p+g;o.push(x,m,R),o.push(m,f,R)}this.setIndex(o),this.setAttribute("position",new Ct(a,3)),this.setAttribute("normal",new Ct(l,3)),this.setAttribute("uv",new Ct(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ao(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ne extends Hn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xd,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class un extends Ne{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class $u extends Hn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Oh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Zu extends Hn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function kr(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Ju(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Qu(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function lc(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function Fd(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class hr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ef extends hr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fs,endingEnd:fs}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ps:r=e,a=2*t-n;break;case eo:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ps:o=e,l=2*n-t;break;case eo:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),x=g*g,m=x*g,f=-u*m+2*u*x-u*g,R=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*g+1,A=(-1-p)*m+(1.5+p)*x+.5*g,b=p*m-p*x;for(let P=0;P!==a;++P)r[P]=f*o[d+P]+R*o[c+P]+A*o[l+P]+b*o[h+P];return r}}class Od extends hr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=(n-t)/(i-t),h=1-d;for(let u=0;u!==a;++u)r[u]=o[c+u]*h+o[l+u]*d;return r}}class tf extends hr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Wn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=kr(t,this.TimeBufferType),this.values=kr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:kr(e.times,Array),values:kr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new tf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Od(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ef(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case or:t=this.InterpolantFactoryMethodDiscrete;break;case ar:t=this.InterpolantFactoryMethodLinear;break;case _o:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return or;case this.InterpolantFactoryMethodLinear:return ar;case this.InterpolantFactoryMethodSmooth:return _o}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Ju(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===_o,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],d=e[a+1];if(c!==d&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,u=h-n,p=h+n;for(let g=0;g!==n;++g){const x=t[h+g];if(x!==t[u+g]||x!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,u=o*n;for(let p=0;p!==n;++p)t[u+p]=t[h+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=ar;class Ls extends Wn{constructor(e,t,n){super(e,t,n)}}Ls.prototype.ValueTypeName="bool";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=or;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;class Bd extends Wn{}Bd.prototype.ValueTypeName="color";class Cs extends Wn{}Cs.prototype.ValueTypeName="number";class nf extends hr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let d=c+a;c!==d;c+=4)hn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Is extends Wn{InterpolantFactoryMethodLinear(e){return new nf(this.times,this.values,this.getValueSize(),e)}}Is.prototype.ValueTypeName="quaternion";Is.prototype.InterpolantFactoryMethodSmooth=void 0;class Ns extends Wn{constructor(e,t,n){super(e,t,n)}}Ns.prototype.ValueTypeName="string";Ns.prototype.ValueBufferType=Array;Ns.prototype.DefaultInterpolation=or;Ns.prototype.InterpolantFactoryMethodLinear=void 0;Ns.prototype.InterpolantFactoryMethodSmooth=void 0;class Ps extends Wn{}Ps.prototype.ValueTypeName="vector";class Xa{constructor(e="",t=-1,n=[],i=ol){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Cn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(rf(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Wn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const d=Qu(l);l=lc(l,1,d),c=lc(c,1,d),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Cs(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],d=c.name.match(r);if(d&&d.length>1){const h=d[1];let u=i[h];u||(i[h]=u=[]),u.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,u,p,g,x){if(p.length!==0){const m=[],f=[];Fd(p,m,f,g),m.length!==0&&x.push(new h(u,m,f))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const u=c[h].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const p={};let g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let x=0;x<u[g].morphTargets.length;x++)p[u[g].morphTargets[x]]=-1;for(const x in p){const m=[],f=[];for(let R=0;R!==u[g].morphTargets.length;++R){const A=u[g];m.push(A.time),f.push(A.morphTarget===x?1:0)}i.push(new Cs(".morphTargetInfluence["+x+"]",m,f))}l=p.length*o}else{const p=".bones["+t[h].name+"]";n(Ps,p+".position",u,"pos",i),n(Is,p+".quaternion",u,"rot",i),n(Ps,p+".scale",u,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function sf(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Cs;case"vector":case"vector2":case"vector3":case"vector4":return Ps;case"color":return Bd;case"quaternion":return Is;case"bool":case"boolean":return Ls;case"string":return Ns}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function rf(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=sf(s.type);if(s.times===void 0){const t=[],n=[];Fd(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const _i={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class of{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){a++,r===!1&&i.onStart!==void 0&&i.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,i.onProgress!==void 0&&i.onProgress(d,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){const h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=c.length;h<u;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(d))return g}return null}}}const af=new of;class Vi{constructor(e){this.manager=e!==void 0?e:af,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Vi.DEFAULT_MATERIAL_NAME="__DEFAULT";const $n={};class lf extends Error{constructor(e,t){super(e),this.response=t}}class pl extends Vi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=_i.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if($n[e]!==void 0){$n[e].push({onLoad:t,onProgress:n,onError:i});return}$n[e]=[],$n[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const d=$n[e],h=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=u?parseInt(u):0,g=p!==0;let x=0;const m=new ReadableStream({start(f){R();function R(){h.read().then(({done:A,value:b})=>{if(A)f.close();else{x+=b.byteLength;const P=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:p});for(let S=0,E=d.length;S<E;S++){const T=d[S];T.onProgress&&T.onProgress(P)}f.enqueue(b),R()}},A=>{f.error(A)})}}});return new Response(m)}else throw new lf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),u=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(u);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{_i.add(e,c);const d=$n[e];delete $n[e];for(let h=0,u=d.length;h<u;h++){const p=d[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const d=$n[e];if(d===void 0)throw this.manager.itemError(e),c;delete $n[e];for(let h=0,u=d.length;h<u;h++){const p=d[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class cf extends Vi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=_i.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=lr("img");function l(){d(),_i.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){d(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class df extends Vi{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new dl,a=new pl(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(d){if(i!==void 0)i(d);else{console.error(d);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:On,o.wrapT=c.wrapT!==void 0?c.wrapT:On,o.magFilter=c.magFilter!==void 0?c.magFilter:kt,o.minFilter=c.minFilter!==void 0?c.minFilter:kt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Bn),c.mipmapCount===1&&(o.minFilter=kt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,i),o}}class kd extends Vi{constructor(e){super(e)}load(e,t,n,i){const r=new Ut,o=new cf(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class fo extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class hf extends fo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new we(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Vo=new We,cc=new L,dc=new L;class ml{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ul,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;cc.setFromMatrixPosition(e.matrixWorld),t.position.copy(cc),dc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dc),t.updateMatrixWorld(),Vo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Vo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class uf extends ml{constructor(){super(new Wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=As*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class zd extends fo{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new uf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const hc=new We,Xs=new L,Go=new L;class ff extends ml{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ee(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Xs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Xs),Go.copy(n.position),Go.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Go),n.updateMatrixWorld(),i.makeTranslation(-Xs.x,-Xs.y,-Xs.z),hc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hc)}}class xn extends fo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ff}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class gl extends Rd{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class pf extends ml{constructor(){super(new gl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hd extends fo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new pf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ir{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class mf extends Vi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=_i.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return _i.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),_i.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});_i.add(e,l),r.manager.itemStart(e)}}class gf extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class _f{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=uc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=uc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function uc(){return performance.now()}class xf{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){hn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;hn.multiplyQuaternionsFlat(e,o,e,t,e,n),hn.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const _l="\\[\\]\\.:\\/",vf=new RegExp("["+_l+"]","g"),xl="[^"+_l+"]",yf="[^"+_l.replace("\\.","")+"]",Mf=/((?:WC+[\/:])*)/.source.replace("WC",xl),Sf=/(WCOD+)?/.source.replace("WCOD",yf),bf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xl),Ef=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xl),Tf=new RegExp("^"+Mf+Sf+bf+Ef+"$"),wf=["material","materials","bones","map"];class Af{constructor(e,t,n){const i=n||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ut{constructor(e,t,n){this.path=t,this.parsedPath=n||ut.parseTrackName(t),this.node=ut.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ut.Composite(e,t,n):new ut(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(vf,"")}static parseTrackName(e){const t=Tf.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);wf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=ut.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ut.Composite=Af;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Rf{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,a=new Array(o),l={endingStart:fs,endingEnd:fs};for(let c=0;c!==o;++c){const d=r[c].createInterpolant(null);a[c]=d,d.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=gd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Uh:for(let d=0,h=l.length;d!==h;++d)l[d].evaluate(o),c[d].accumulateAdditive(a);break;case ol:default:for(let d=0,h=l.length;d!==h;++d)l[d].evaluate(o),c[d].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===Nh;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===md){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=ps,i.endingEnd=ps):(e?i.endingStart=this.zeroSlopeAtStart?ps:fs:i.endingStart=eo,t?i.endingEnd=this.zeroSlopeAtEnd?ps:fs:i.endingEnd=eo)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}}const Cf=new Float32Array(1);class If extends Mi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let d=c[l];d===void 0&&(d={},c[l]=d);for(let h=0;h!==r;++h){const u=i[h],p=u.name;let g=d[p];if(g!==void 0)++g.referenceCount,o[h]=g;else{if(g=o[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,p));continue}const x=t&&t._propertyBindings[h].binding.parsedPath;g=new xf(ut.create(n,p,x),u.ValueTypeName,u.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,p),o[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],d=e._byClipCacheIndex;c._byClipCacheIndex=d,l[d]=c,l.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,u=(e._localRoot||this._root).uuid;delete h[u],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Od(new Float32Array(2),new Float32Array(2),1,Cf),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?Xa.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=ol),l!==void 0){const h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const d=new Rf(this,o,t,n);return this._bindAction(d,c),this._addInactiveAction(d,a,r),d}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?Xa.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const d=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=d,t[d]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class fc{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ke(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Pf extends Mi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function pc(s,e,t,n){const i=Df(n);switch(t){case cd:return s*e;case hd:return s*e;case ud:return s*e*2;case nl:return s*e/i.components*i.byteLength;case il:return s*e/i.components*i.byteLength;case fd:return s*e*2/i.components*i.byteLength;case sl:return s*e*2/i.components*i.byteLength;case dd:return s*e*3/i.components*i.byteLength;case yn:return s*e*4/i.components*i.byteLength;case rl:return s*e*4/i.components*i.byteLength;case jr:case Yr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case qr:case Kr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ga:case xa:return Math.max(s,16)*Math.max(e,8)/4;case ma:case _a:return Math.max(s,8)*Math.max(e,8)/2;case va:case ya:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ma:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Sa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ba:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ea:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ta:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case wa:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Aa:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ra:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ca:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ia:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Pa:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Da:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case La:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Na:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ua:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case $r:case Fa:case Oa:return Math.ceil(s/4)*Math.ceil(e/4)*16;case pd:case Ba:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ka:case za:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Df(s){switch(s){case oi:case od:return{byteLength:1,components:1};case rr:case ad:case kn:return{byteLength:2,components:1};case el:case tl:return{byteLength:2,components:4};case zi:case Qa:case sn:return{byteLength:4,components:1};case ld:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ja}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ja);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Vd(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Lf(s){const e=new WeakMap;function t(a,l){const c=a.array,d=a.usage,h=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,d),a.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const d=l.array,h=l.updateRanges;if(s.bindBuffer(c,a),h.length===0)s.bufferSubData(c,0,d);else{h.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<h.length;p++){const g=h[u],x=h[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,h[u]=x)}h.length=u+1;for(let p=0,g=h.length;p<g;p++){const x=h[p];s.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Nf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Uf=`#ifdef USE_ALPHAHASH
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
#endif`,Ff=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Of=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zf=`#ifdef USE_AOMAP
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
#endif`,Hf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vf=`#ifdef USE_BATCHING
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
#endif`,Gf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yf=`#ifdef USE_IRIDESCENCE
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
#endif`,qf=`#ifdef USE_BUMPMAP
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
#endif`,Kf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,np=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ip=`#define PI 3.141592653589793
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
} // validated`,sp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rp=`vec3 transformedNormal = objectNormal;
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
#endif`,op=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ap=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dp="gl_FragColor = linearToOutputTexel( gl_FragColor );",hp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,up=`#ifdef USE_ENVMAP
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
#endif`,fp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pp=`#ifdef USE_ENVMAP
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
#endif`,mp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gp=`#ifdef USE_ENVMAP
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
#endif`,_p=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mp=`#ifdef USE_GRADIENTMAP
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
}`,Sp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tp=`uniform bool receiveShadow;
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
#endif`,wp=`#ifdef USE_ENVMAP
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
#endif`,Ap=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pp=`PhysicalMaterial material;
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
#endif`,Dp=`struct PhysicalMaterial {
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
}`,Lp=`
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
#endif`,Np=`#if defined( RE_IndirectDiffuse )
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
#endif`,Up=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Op=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gp=`#if defined( USE_POINTS_UV )
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
#endif`,Wp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kp=`#ifdef USE_MORPHTARGETS
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
#endif`,$p=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nm=`#ifdef USE_NORMALMAP
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
#endif`,im=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,om=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,am=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,um=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_m=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xm=`float getShadowMask() {
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
}`,vm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ym=`#ifdef USE_SKINNING
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
#endif`,Mm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sm=`#ifdef USE_SKINNING
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
#endif`,bm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Em=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Am=`#ifdef USE_TRANSMISSION
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
#endif`,Rm=`#ifdef USE_TRANSMISSION
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
#endif`,Cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nm=`uniform sampler2D t2D;
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
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,km=`#include <common>
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
}`,zm=`#if DEPTH_PACKING == 3200
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
}`,Hm=`#define DISTANCE
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
}`,Vm=`#define DISTANCE
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
}`,Gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xm=`uniform float scale;
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
}`,jm=`uniform vec3 diffuse;
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
}`,Ym=`#include <common>
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
}`,qm=`uniform vec3 diffuse;
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
}`,Km=`#define LAMBERT
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
}`,$m=`#define LAMBERT
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
}`,Zm=`#define MATCAP
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
}`,Jm=`#define MATCAP
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
}`,Qm=`#define NORMAL
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
}`,eg=`#define NORMAL
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
}`,tg=`#define PHONG
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
}`,ng=`#define PHONG
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
}`,ig=`#define STANDARD
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
}`,sg=`#define STANDARD
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
}`,rg=`#define TOON
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
}`,og=`#define TOON
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
}`,ag=`uniform float size;
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
}`,lg=`uniform vec3 diffuse;
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
}`,cg=`#include <common>
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
}`,dg=`uniform vec3 color;
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
}`,hg=`uniform float rotation;
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
}`,ug=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:Nf,alphahash_pars_fragment:Uf,alphamap_fragment:Ff,alphamap_pars_fragment:Of,alphatest_fragment:Bf,alphatest_pars_fragment:kf,aomap_fragment:zf,aomap_pars_fragment:Hf,batching_pars_vertex:Vf,batching_vertex:Gf,begin_vertex:Wf,beginnormal_vertex:Xf,bsdfs:jf,iridescence_fragment:Yf,bumpmap_pars_fragment:qf,clipping_planes_fragment:Kf,clipping_planes_pars_fragment:$f,clipping_planes_pars_vertex:Zf,clipping_planes_vertex:Jf,color_fragment:Qf,color_pars_fragment:ep,color_pars_vertex:tp,color_vertex:np,common:ip,cube_uv_reflection_fragment:sp,defaultnormal_vertex:rp,displacementmap_pars_vertex:op,displacementmap_vertex:ap,emissivemap_fragment:lp,emissivemap_pars_fragment:cp,colorspace_fragment:dp,colorspace_pars_fragment:hp,envmap_fragment:up,envmap_common_pars_fragment:fp,envmap_pars_fragment:pp,envmap_pars_vertex:mp,envmap_physical_pars_fragment:wp,envmap_vertex:gp,fog_vertex:_p,fog_pars_vertex:xp,fog_fragment:vp,fog_pars_fragment:yp,gradientmap_pars_fragment:Mp,lightmap_pars_fragment:Sp,lights_lambert_fragment:bp,lights_lambert_pars_fragment:Ep,lights_pars_begin:Tp,lights_toon_fragment:Ap,lights_toon_pars_fragment:Rp,lights_phong_fragment:Cp,lights_phong_pars_fragment:Ip,lights_physical_fragment:Pp,lights_physical_pars_fragment:Dp,lights_fragment_begin:Lp,lights_fragment_maps:Np,lights_fragment_end:Up,logdepthbuf_fragment:Fp,logdepthbuf_pars_fragment:Op,logdepthbuf_pars_vertex:Bp,logdepthbuf_vertex:kp,map_fragment:zp,map_pars_fragment:Hp,map_particle_fragment:Vp,map_particle_pars_fragment:Gp,metalnessmap_fragment:Wp,metalnessmap_pars_fragment:Xp,morphinstance_vertex:jp,morphcolor_vertex:Yp,morphnormal_vertex:qp,morphtarget_pars_vertex:Kp,morphtarget_vertex:$p,normal_fragment_begin:Zp,normal_fragment_maps:Jp,normal_pars_fragment:Qp,normal_pars_vertex:em,normal_vertex:tm,normalmap_pars_fragment:nm,clearcoat_normal_fragment_begin:im,clearcoat_normal_fragment_maps:sm,clearcoat_pars_fragment:rm,iridescence_pars_fragment:om,opaque_fragment:am,packing:lm,premultiplied_alpha_fragment:cm,project_vertex:dm,dithering_fragment:hm,dithering_pars_fragment:um,roughnessmap_fragment:fm,roughnessmap_pars_fragment:pm,shadowmap_pars_fragment:mm,shadowmap_pars_vertex:gm,shadowmap_vertex:_m,shadowmask_pars_fragment:xm,skinbase_vertex:vm,skinning_pars_vertex:ym,skinning_vertex:Mm,skinnormal_vertex:Sm,specularmap_fragment:bm,specularmap_pars_fragment:Em,tonemapping_fragment:Tm,tonemapping_pars_fragment:wm,transmission_fragment:Am,transmission_pars_fragment:Rm,uv_pars_fragment:Cm,uv_pars_vertex:Im,uv_vertex:Pm,worldpos_vertex:Dm,background_vert:Lm,background_frag:Nm,backgroundCube_vert:Um,backgroundCube_frag:Fm,cube_vert:Om,cube_frag:Bm,depth_vert:km,depth_frag:zm,distanceRGBA_vert:Hm,distanceRGBA_frag:Vm,equirect_vert:Gm,equirect_frag:Wm,linedashed_vert:Xm,linedashed_frag:jm,meshbasic_vert:Ym,meshbasic_frag:qm,meshlambert_vert:Km,meshlambert_frag:$m,meshmatcap_vert:Zm,meshmatcap_frag:Jm,meshnormal_vert:Qm,meshnormal_frag:eg,meshphong_vert:tg,meshphong_frag:ng,meshphysical_vert:ig,meshphysical_frag:sg,meshtoon_vert:rg,meshtoon_frag:og,points_vert:ag,points_frag:lg,shadow_vert:cg,shadow_frag:dg,sprite_vert:hg,sprite_frag:ug},ue={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Nn={basic:{uniforms:$t([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:$t([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new we(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:$t([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:$t([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:$t([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new we(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:$t([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:$t([ue.points,ue.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:$t([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:$t([ue.common,ue.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:$t([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:$t([ue.sprite,ue.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:$t([ue.common,ue.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:$t([ue.lights,ue.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Nn.physical={uniforms:$t([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const zr={r:0,b:0,g:0},Ii=new Vn,fg=new We;function pg(s,e,t,n,i,r,o){const a=new we(0);let l=r===!0?0:1,c,d,h=null,u=0,p=null;function g(A){let b=A.isScene===!0?A.background:null;return b&&b.isTexture&&(b=(A.backgroundBlurriness>0?t:e).get(b)),b}function x(A){let b=!1;const P=g(A);P===null?f(a,l):P&&P.isColor&&(f(P,1),b=!0);const S=s.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(A,b){const P=g(b);P&&(P.isCubeTexture||P.mapping===ho)?(d===void 0&&(d=new Oe(new Si(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:Rs(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(S,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),Ii.copy(b.backgroundRotation),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),d.material.uniforms.envMap.value=P,d.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(fg.makeRotationFromEuler(Ii)),d.material.toneMapped=nt.getTransfer(P.colorSpace)!==vt,(h!==P||u!==P.version||p!==s.toneMapping)&&(d.material.needsUpdate=!0,h=P,u=P.version,p=s.toneMapping),d.layers.enableAll(),A.unshift(d,d.geometry,d.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new Oe(new Ds(2,2),new Pn({name:"BackgroundMaterial",uniforms:Rs(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=nt.getTransfer(P.colorSpace)!==vt,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(h!==P||u!==P.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,h=P,u=P.version,p=s.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function f(A,b){A.getRGB(zr,wd(s)),n.buffers.color.setClear(zr.r,zr.g,zr.b,b,o)}function R(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(A,b=1){a.set(A),l=b,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,f(a,l)},render:x,addToRenderList:m,dispose:R}}function mg(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,o=!1;function a(_,C,O,U,F){let j=!1;const k=h(U,O,C);r!==k&&(r=k,c(r.object)),j=p(_,U,O,F),j&&g(_,U,O,F),F!==null&&e.update(F,s.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,b(_,C,O,U),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return s.createVertexArray()}function c(_){return s.bindVertexArray(_)}function d(_){return s.deleteVertexArray(_)}function h(_,C,O){const U=O.wireframe===!0;let F=n[_.id];F===void 0&&(F={},n[_.id]=F);let j=F[C.id];j===void 0&&(j={},F[C.id]=j);let k=j[U];return k===void 0&&(k=u(l()),j[U]=k),k}function u(_){const C=[],O=[],U=[];for(let F=0;F<t;F++)C[F]=0,O[F]=0,U[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:O,attributeDivisors:U,object:_,attributes:{},index:null}}function p(_,C,O,U){const F=r.attributes,j=C.attributes;let k=0;const Z=O.getAttributes();for(const Y in Z)if(Z[Y].location>=0){const le=F[Y];let me=j[Y];if(me===void 0&&(Y==="instanceMatrix"&&_.instanceMatrix&&(me=_.instanceMatrix),Y==="instanceColor"&&_.instanceColor&&(me=_.instanceColor)),le===void 0||le.attribute!==me||me&&le.data!==me.data)return!0;k++}return r.attributesNum!==k||r.index!==U}function g(_,C,O,U){const F={},j=C.attributes;let k=0;const Z=O.getAttributes();for(const Y in Z)if(Z[Y].location>=0){let le=j[Y];le===void 0&&(Y==="instanceMatrix"&&_.instanceMatrix&&(le=_.instanceMatrix),Y==="instanceColor"&&_.instanceColor&&(le=_.instanceColor));const me={};me.attribute=le,le&&le.data&&(me.data=le.data),F[Y]=me,k++}r.attributes=F,r.attributesNum=k,r.index=U}function x(){const _=r.newAttributes;for(let C=0,O=_.length;C<O;C++)_[C]=0}function m(_){f(_,0)}function f(_,C){const O=r.newAttributes,U=r.enabledAttributes,F=r.attributeDivisors;O[_]=1,U[_]===0&&(s.enableVertexAttribArray(_),U[_]=1),F[_]!==C&&(s.vertexAttribDivisor(_,C),F[_]=C)}function R(){const _=r.newAttributes,C=r.enabledAttributes;for(let O=0,U=C.length;O<U;O++)C[O]!==_[O]&&(s.disableVertexAttribArray(O),C[O]=0)}function A(_,C,O,U,F,j,k){k===!0?s.vertexAttribIPointer(_,C,O,F,j):s.vertexAttribPointer(_,C,O,U,F,j)}function b(_,C,O,U){x();const F=U.attributes,j=O.getAttributes(),k=C.defaultAttributeValues;for(const Z in j){const Y=j[Z];if(Y.location>=0){let oe=F[Z];if(oe===void 0&&(Z==="instanceMatrix"&&_.instanceMatrix&&(oe=_.instanceMatrix),Z==="instanceColor"&&_.instanceColor&&(oe=_.instanceColor)),oe!==void 0){const le=oe.normalized,me=oe.itemSize,Pe=e.get(oe);if(Pe===void 0)continue;const ke=Pe.buffer,K=Pe.type,ae=Pe.bytesPerElement,Se=K===s.INT||K===s.UNSIGNED_INT||oe.gpuType===Qa;if(oe.isInterleavedBufferAttribute){const ce=oe.data,Ie=ce.stride,$e=oe.offset;if(ce.isInstancedInterleavedBuffer){for(let De=0;De<Y.locationSize;De++)f(Y.location+De,ce.meshPerAttribute);_.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let De=0;De<Y.locationSize;De++)m(Y.location+De);s.bindBuffer(s.ARRAY_BUFFER,ke);for(let De=0;De<Y.locationSize;De++)A(Y.location+De,me/Y.locationSize,K,le,Ie*ae,($e+me/Y.locationSize*De)*ae,Se)}else{if(oe.isInstancedBufferAttribute){for(let ce=0;ce<Y.locationSize;ce++)f(Y.location+ce,oe.meshPerAttribute);_.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ce=0;ce<Y.locationSize;ce++)m(Y.location+ce);s.bindBuffer(s.ARRAY_BUFFER,ke);for(let ce=0;ce<Y.locationSize;ce++)A(Y.location+ce,me/Y.locationSize,K,le,me*ae,me/Y.locationSize*ce*ae,Se)}}else if(k!==void 0){const le=k[Z];if(le!==void 0)switch(le.length){case 2:s.vertexAttrib2fv(Y.location,le);break;case 3:s.vertexAttrib3fv(Y.location,le);break;case 4:s.vertexAttrib4fv(Y.location,le);break;default:s.vertexAttrib1fv(Y.location,le)}}}}R()}function P(){T();for(const _ in n){const C=n[_];for(const O in C){const U=C[O];for(const F in U)d(U[F].object),delete U[F];delete C[O]}delete n[_]}}function S(_){if(n[_.id]===void 0)return;const C=n[_.id];for(const O in C){const U=C[O];for(const F in U)d(U[F].object),delete U[F];delete C[O]}delete n[_.id]}function E(_){for(const C in n){const O=n[C];if(O[_.id]===void 0)continue;const U=O[_.id];for(const F in U)d(U[F].object),delete U[F];delete O[_.id]}}function T(){v(),o=!0,r!==i&&(r=i,c(r.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:T,resetDefaultState:v,dispose:P,releaseStatesOfGeometry:S,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:m,disableUnusedAttributes:R}}function gg(s,e,t){let n;function i(c){n=c}function r(c,d){s.drawArrays(n,c,d),t.update(d,n,1)}function o(c,d,h){h!==0&&(s.drawArraysInstanced(n,c,d,h),t.update(d,n,h))}function a(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,h);let p=0;for(let g=0;g<h;g++)p+=d[g];t.update(p,n,1)}function l(c,d,h,u){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],d[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,d,0,u,0,h);let g=0;for(let x=0;x<h;x++)g+=d[x]*u[x];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function _g(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==yn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const T=E===kn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==oi&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==sn&&!T)}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),R=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),A=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,S=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:R,maxVaryings:A,maxFragmentUniforms:b,vertexTextures:P,maxSamples:S}}function xg(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new ei,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const p=h.length!==0||u||n!==0||i;return i=u,n=h.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,p){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,f=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?d(null):c();else{const R=r?0:n,A=R*4;let b=f.clippingState||null;l.value=b,b=d(g,u,A,p);for(let P=0;P!==A;++P)b[P]=t[P];f.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,u,p,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const f=p+x*4,R=u.matrixWorldInverse;a.getNormalMatrix(R),(m===null||m.length<f)&&(m=new Float32Array(f));for(let A=0,b=p;A!==x;++A,b+=4)o.copy(h[A]).applyMatrix4(R,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function vg(s){let e=new WeakMap;function t(o,a){return a===sr?o.mapping=bs:a===pa&&(o.mapping=Es),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===sr||a===pa)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ou(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const ms=4,mc=[.125,.215,.35,.446,.526,.582],Fi=20,Wo=new gl,gc=new we;let Xo=null,jo=0,Yo=0,qo=!1;const Ni=(1+Math.sqrt(5))/2,as=1/Ni,_c=[new L(-Ni,as,0),new L(Ni,as,0),new L(-as,0,Ni),new L(as,0,Ni),new L(0,Ni,-as),new L(0,Ni,as),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],yg=new L;class lo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=yg}=r;Xo=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xo,jo,Yo),this._renderer.xr.enabled=qo,e.scissorTest=!1,Hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bs||e.mapping===Es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xo=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:kn,format:yn,colorSpace:jt,depthBuffer:!1},i=xc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mg(r)),this._blurMaterial=Sg(r,e,t)}return i}_compileMaterial(e){const t=new Oe(this._lodPlanes[0],e);this._renderer.compile(t,Wo)}_sceneToCubeUV(e,t,n,i,r){const l=new Wt(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(gc),h.toneMapping=vi,h.autoClear=!1;const g=new zn({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),x=new Oe(new Si,g);let m=!1;const f=e.background;f?f.isColor&&(g.color.copy(f),e.background=null,m=!0):(g.color.copy(gc),m=!0);for(let R=0;R<6;R++){const A=R%3;A===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[R],r.y,r.z)):A===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[R]));const b=this._cubeSize;Hr(i,A*b,R>2?b:0,b,b),h.setRenderTarget(i),m&&h.render(x,l),h.render(e,l)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=p,h.autoClear=u,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===bs||e.mapping===Es;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=yc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vc());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Oe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Hr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Wo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=_c[(i-r-1)%_c.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new Oe(this._lodPlanes[i],c),u=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Fi-1),x=r/g,m=isFinite(r)?1+Math.floor(d*x):Fi;m>Fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fi}`);const f=[];let R=0;for(let E=0;E<Fi;++E){const T=E/x,v=Math.exp(-T*T/2);f.push(v),E===0?R+=v:E<m&&(R+=2*v)}for(let E=0;E<f.length;E++)f[E]=f[E]/R;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:A}=this;u.dTheta.value=g,u.mipInt.value=A-n;const b=this._sizeLods[i],P=3*b*(i>A-ms?i-A+ms:0),S=4*(this._cubeSize-b);Hr(t,P,S,3*b,2*b),l.setRenderTarget(t),l.render(h,Wo)}}function Mg(s){const e=[],t=[],n=[];let i=s;const r=s-ms+1+mc.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-ms?l=mc[o-s+ms-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,g=6,x=3,m=2,f=1,R=new Float32Array(x*g*p),A=new Float32Array(m*g*p),b=new Float32Array(f*g*p);for(let S=0;S<p;S++){const E=S%3*2/3-1,T=S>2?0:-1,v=[E,T,0,E+2/3,T,0,E+2/3,T+1,0,E,T,0,E+2/3,T+1,0,E,T+1,0];R.set(v,x*g*S),A.set(u,m*g*S);const _=[S,S,S,S,S,S];b.set(_,f*g*S)}const P=new rn;P.setAttribute("position",new Jt(R,x)),P.setAttribute("uv",new Jt(A,m)),P.setAttribute("faceIndex",new Jt(b,f)),e.push(P),i>ms&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function xc(s,e,t){const n=new yi(s,e,t);return n.texture.mapping=ho,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Sg(s,e,t){const n=new Float32Array(Fi),i=new L(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:vl(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function vc(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vl(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function yc(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function vl(){return`

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
	`}function bg(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===sr||l===pa,d=l===bs||l===Es;if(c||d){let h=e.get(a);const u=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new lo(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||d&&p&&i(p)?(t===null&&(t=new lo(s)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Eg(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Li("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Tg(s,e,t,n){const i={},r=new WeakMap;function o(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete i[u.id];const p=r.get(u);p&&(e.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(h,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,t.memory.geometries++),u}function l(h){const u=h.attributes;for(const p in u)e.update(u[p],s.ARRAY_BUFFER)}function c(h){const u=[],p=h.index,g=h.attributes.position;let x=0;if(p!==null){const R=p.array;x=p.version;for(let A=0,b=R.length;A<b;A+=3){const P=R[A+0],S=R[A+1],E=R[A+2];u.push(P,S,S,E,E,P)}}else if(g!==void 0){const R=g.array;x=g.version;for(let A=0,b=R.length/3-1;A<b;A+=3){const P=A+0,S=A+1,E=A+2;u.push(P,S,S,E,E,P)}}else return;const m=new(yd(u)?Td:Ed)(u,1);m.version=x;const f=r.get(h);f&&e.remove(f),r.set(h,m)}function d(h){const u=r.get(h);if(u){const p=h.index;p!==null&&u.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function wg(s,e,t){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,p){s.drawElements(n,p,r,u*o),t.update(p,n,1)}function c(u,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,u*o,g),t.update(p,n,g))}function d(u,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function h(u,p,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)c(u[f]/o,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,u,0,x,0,g);let f=0;for(let R=0;R<g;R++)f+=p[R]*x[R];t.update(f,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function Ag(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Rg(s,e,t){const n=new WeakMap,i=new ot;function r(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0;let u=n.get(a);if(u===void 0||u.count!==h){let _=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",_)};var p=_;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],R=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let b=0;g===!0&&(b=1),x===!0&&(b=2),m===!0&&(b=3);let P=a.attributes.position.count*b,S=1;P>e.maxTextureSize&&(S=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const E=new Float32Array(P*S*4*h),T=new Md(E,P,S,h);T.type=sn,T.needsUpdate=!0;const v=b*4;for(let C=0;C<h;C++){const O=f[C],U=R[C],F=A[C],j=P*S*4*C;for(let k=0;k<O.count;k++){const Z=k*v;g===!0&&(i.fromBufferAttribute(O,k),E[j+Z+0]=i.x,E[j+Z+1]=i.y,E[j+Z+2]=i.z,E[j+Z+3]=0),x===!0&&(i.fromBufferAttribute(U,k),E[j+Z+4]=i.x,E[j+Z+5]=i.y,E[j+Z+6]=i.z,E[j+Z+7]=0),m===!0&&(i.fromBufferAttribute(F,k),E[j+Z+8]=i.x,E[j+Z+9]=i.y,E[j+Z+10]=i.z,E[j+Z+11]=F.itemSize===4?i.w:1)}}u={count:h,texture:T,size:new Ee(P,S)},n.set(a,u),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Cg(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,d=l.geometry,h=e.get(l,d);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Gd=new Ut,Mc=new Ud(1,1),Wd=new Md,Xd=new xu,jd=new Cd,Sc=[],bc=[],Ec=new Float32Array(16),Tc=new Float32Array(9),wc=new Float32Array(4);function Us(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Sc[i];if(r===void 0&&(r=new Float32Array(i),Sc[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Ft(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ot(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function po(s,e){let t=bc[e];t===void 0&&(t=new Int32Array(e),bc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Ig(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Pg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2fv(this.addr,e),Ot(t,e)}}function Dg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;s.uniform3fv(this.addr,e),Ot(t,e)}}function Lg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4fv(this.addr,e),Ot(t,e)}}function Ng(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;wc.set(n),s.uniformMatrix2fv(this.addr,!1,wc),Ot(t,n)}}function Ug(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;Tc.set(n),s.uniformMatrix3fv(this.addr,!1,Tc),Ot(t,n)}}function Fg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;Ec.set(n),s.uniformMatrix4fv(this.addr,!1,Ec),Ot(t,n)}}function Og(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Bg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2iv(this.addr,e),Ot(t,e)}}function kg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;s.uniform3iv(this.addr,e),Ot(t,e)}}function zg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4iv(this.addr,e),Ot(t,e)}}function Hg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Vg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2uiv(this.addr,e),Ot(t,e)}}function Gg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;s.uniform3uiv(this.addr,e),Ot(t,e)}}function Wg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4uiv(this.addr,e),Ot(t,e)}}function Xg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Mc.compareFunction=vd,r=Mc):r=Gd,t.setTexture2D(e||r,i)}function jg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Xd,i)}function Yg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||jd,i)}function qg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Wd,i)}function Kg(s){switch(s){case 5126:return Ig;case 35664:return Pg;case 35665:return Dg;case 35666:return Lg;case 35674:return Ng;case 35675:return Ug;case 35676:return Fg;case 5124:case 35670:return Og;case 35667:case 35671:return Bg;case 35668:case 35672:return kg;case 35669:case 35673:return zg;case 5125:return Hg;case 36294:return Vg;case 36295:return Gg;case 36296:return Wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Xg;case 35679:case 36299:case 36307:return jg;case 35680:case 36300:case 36308:case 36293:return Yg;case 36289:case 36303:case 36311:case 36292:return qg}}function $g(s,e){s.uniform1fv(this.addr,e)}function Zg(s,e){const t=Us(e,this.size,2);s.uniform2fv(this.addr,t)}function Jg(s,e){const t=Us(e,this.size,3);s.uniform3fv(this.addr,t)}function Qg(s,e){const t=Us(e,this.size,4);s.uniform4fv(this.addr,t)}function e0(s,e){const t=Us(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function t0(s,e){const t=Us(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function n0(s,e){const t=Us(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function i0(s,e){s.uniform1iv(this.addr,e)}function s0(s,e){s.uniform2iv(this.addr,e)}function r0(s,e){s.uniform3iv(this.addr,e)}function o0(s,e){s.uniform4iv(this.addr,e)}function a0(s,e){s.uniform1uiv(this.addr,e)}function l0(s,e){s.uniform2uiv(this.addr,e)}function c0(s,e){s.uniform3uiv(this.addr,e)}function d0(s,e){s.uniform4uiv(this.addr,e)}function h0(s,e,t){const n=this.cache,i=e.length,r=po(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Gd,r[o])}function u0(s,e,t){const n=this.cache,i=e.length,r=po(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Xd,r[o])}function f0(s,e,t){const n=this.cache,i=e.length,r=po(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||jd,r[o])}function p0(s,e,t){const n=this.cache,i=e.length,r=po(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Wd,r[o])}function m0(s){switch(s){case 5126:return $g;case 35664:return Zg;case 35665:return Jg;case 35666:return Qg;case 35674:return e0;case 35675:return t0;case 35676:return n0;case 5124:case 35670:return i0;case 35667:case 35671:return s0;case 35668:case 35672:return r0;case 35669:case 35673:return o0;case 5125:return a0;case 36294:return l0;case 36295:return c0;case 36296:return d0;case 35678:case 36198:case 36298:case 36306:case 35682:return h0;case 35679:case 36299:case 36307:return u0;case 35680:case 36300:case 36308:case 36293:return f0;case 36289:case 36303:case 36311:case 36292:return p0}}class g0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Kg(t.type)}}class _0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=m0(t.type)}}class x0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Ko=/(\w+)(\])?(\[|\.)?/g;function Ac(s,e){s.seq.push(e),s.map[e.id]=e}function v0(s,e,t){const n=s.name,i=n.length;for(Ko.lastIndex=0;;){const r=Ko.exec(n),o=Ko.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Ac(t,c===void 0?new g0(a,s,e):new _0(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new x0(a),Ac(t,h)),t=h}}}class Zr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);v0(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Rc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const y0=37297;let M0=0;function S0(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Cc=new Xe;function b0(s){nt._getMatrix(Cc,nt.workingColorSpace,s);const e=`mat3( ${Cc.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(s)){case to:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Ic(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+S0(s.getShaderSource(e),o)}else return i}function E0(s,e){const t=b0(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function T0(s,e){let t;switch(e){case Ah:t="Linear";break;case Rh:t="Reinhard";break;case Ch:t="Cineon";break;case id:t="ACESFilmic";break;case Ph:t="AgX";break;case Dh:t="Neutral";break;case Ih:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Vr=new L;function w0(){nt.getLuminanceCoefficients(Vr);const s=Vr.x.toFixed(4),e=Vr.y.toFixed(4),t=Vr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function A0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function R0(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function C0(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Qs(s){return s!==""}function Pc(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const I0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ja(s){return s.replace(I0,D0)}const P0=new Map;function D0(s,e){let t=Ye[e];if(t===void 0){const n=P0.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ja(t)}const L0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lc(s){return s.replace(L0,N0)}function N0(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Nc(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function U0(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ed?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===td?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Jn&&(e="SHADOWMAP_TYPE_VSM"),e}function F0(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case bs:case Es:e="ENVMAP_TYPE_CUBE";break;case ho:e="ENVMAP_TYPE_CUBE_UV";break}return e}function O0(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Es:e="ENVMAP_MODE_REFRACTION";break}return e}function B0(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case nd:e="ENVMAP_BLENDING_MULTIPLY";break;case Th:e="ENVMAP_BLENDING_MIX";break;case wh:e="ENVMAP_BLENDING_ADD";break}return e}function k0(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function z0(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=U0(t),c=F0(t),d=O0(t),h=B0(t),u=k0(t),p=A0(t),g=R0(r),x=i.createProgram();let m,f,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qs).join(`
`),f.length>0&&(f+=`
`)):(m=[Nc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),f=[Nc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vi?"#define TONE_MAPPING":"",t.toneMapping!==vi?Ye.tonemapping_pars_fragment:"",t.toneMapping!==vi?T0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,E0("linearToOutputTexel",t.outputColorSpace),w0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qs).join(`
`)),o=ja(o),o=Pc(o,t),o=Dc(o,t),a=ja(a),a=Pc(a,t),a=Dc(a,t),o=Lc(o),a=Lc(a),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Cl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const A=R+m+o,b=R+f+a,P=Rc(i,i.VERTEX_SHADER,A),S=Rc(i,i.FRAGMENT_SHADER,b);i.attachShader(x,P),i.attachShader(x,S),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function E(C){if(s.debug.checkShaderErrors){const O=i.getProgramInfoLog(x).trim(),U=i.getShaderInfoLog(P).trim(),F=i.getShaderInfoLog(S).trim();let j=!0,k=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,P,S);else{const Z=Ic(i,P,"vertex"),Y=Ic(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+O+`
`+Z+`
`+Y)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(U===""||F==="")&&(k=!1);k&&(C.diagnostics={runnable:j,programLog:O,vertexShader:{log:U,prefix:m},fragmentShader:{log:F,prefix:f}})}i.deleteShader(P),i.deleteShader(S),T=new Zr(i,x),v=C0(i,x)}let T;this.getUniforms=function(){return T===void 0&&E(this),T};let v;this.getAttributes=function(){return v===void 0&&E(this),v};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=i.getProgramParameter(x,y0)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=M0++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=S,this}let H0=0;class V0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new G0(e),t.set(e,n)),n}}class G0{constructor(e){this.id=H0++,this.code=e,this.usedTimes=0}}function W0(s,e,t,n,i,r,o){const a=new Sd,l=new V0,c=new Set,d=[],h=i.logarithmicDepthBuffer,u=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,_,C,O,U){const F=O.fog,j=U.geometry,k=v.isMeshStandardMaterial?O.environment:null,Z=(v.isMeshStandardMaterial?t:e).get(v.envMap||k),Y=Z&&Z.mapping===ho?Z.image.height:null,oe=g[v.type];v.precision!==null&&(p=i.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const le=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,me=le!==void 0?le.length:0;let Pe=0;j.morphAttributes.position!==void 0&&(Pe=1),j.morphAttributes.normal!==void 0&&(Pe=2),j.morphAttributes.color!==void 0&&(Pe=3);let ke,K,ae,Se;if(oe){const st=Nn[oe];ke=st.vertexShader,K=st.fragmentShader}else ke=v.vertexShader,K=v.fragmentShader,l.update(v),ae=l.getVertexShaderID(v),Se=l.getFragmentShaderID(v);const ce=s.getRenderTarget(),Ie=s.state.buffers.depth.getReversed(),$e=U.isInstancedMesh===!0,De=U.isBatchedMesh===!0,it=!!v.map,gt=!!v.matcap,Ze=!!Z,D=!!v.aoMap,ze=!!v.lightMap,Te=!!v.bumpMap,W=!!v.normalMap,ee=!!v.displacementMap,lt=!!v.emissiveMap,Ae=!!v.metalnessMap,w=!!v.roughnessMap,y=v.anisotropy>0,V=v.clearcoat>0,$=v.dispersion>0,te=v.iridescence>0,G=v.sheen>0,be=v.transmission>0,fe=y&&!!v.anisotropyMap,ve=V&&!!v.clearcoatMap,et=V&&!!v.clearcoatNormalMap,ne=V&&!!v.clearcoatRoughnessMap,xe=te&&!!v.iridescenceMap,Ue=te&&!!v.iridescenceThicknessMap,Fe=G&&!!v.sheenColorMap,se=G&&!!v.sheenRoughnessMap,Je=!!v.specularMap,Ge=!!v.specularColorMap,ct=!!v.specularIntensityMap,I=be&&!!v.transmissionMap,de=be&&!!v.thicknessMap,q=!!v.gradientMap,J=!!v.alphaMap,ge=v.alphaTest>0,pe=!!v.alphaHash,Ve=!!v.extensions;let Mt=vi;v.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(Mt=s.toneMapping);const At={shaderID:oe,shaderType:v.type,shaderName:v.name,vertexShader:ke,fragmentShader:K,defines:v.defines,customVertexShaderID:ae,customFragmentShaderID:Se,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:De,batchingColor:De&&U._colorsTexture!==null,instancing:$e,instancingColor:$e&&U.instanceColor!==null,instancingMorph:$e&&U.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ce===null?s.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:jt,alphaToCoverage:!!v.alphaToCoverage,map:it,matcap:gt,envMap:Ze,envMapMode:Ze&&Z.mapping,envMapCubeUVHeight:Y,aoMap:D,lightMap:ze,bumpMap:Te,normalMap:W,displacementMap:u&&ee,emissiveMap:lt,normalMapObjectSpace:W&&v.normalMapType===kh,normalMapTangentSpace:W&&v.normalMapType===xd,metalnessMap:Ae,roughnessMap:w,anisotropy:y,anisotropyMap:fe,clearcoat:V,clearcoatMap:ve,clearcoatNormalMap:et,clearcoatRoughnessMap:ne,dispersion:$,iridescence:te,iridescenceMap:xe,iridescenceThicknessMap:Ue,sheen:G,sheenColorMap:Fe,sheenRoughnessMap:se,specularMap:Je,specularColorMap:Ge,specularIntensityMap:ct,transmission:be,transmissionMap:I,thicknessMap:de,gradientMap:q,opaque:v.transparent===!1&&v.blending===xs&&v.alphaToCoverage===!1,alphaMap:J,alphaTest:ge,alphaHash:pe,combine:v.combine,mapUv:it&&x(v.map.channel),aoMapUv:D&&x(v.aoMap.channel),lightMapUv:ze&&x(v.lightMap.channel),bumpMapUv:Te&&x(v.bumpMap.channel),normalMapUv:W&&x(v.normalMap.channel),displacementMapUv:ee&&x(v.displacementMap.channel),emissiveMapUv:lt&&x(v.emissiveMap.channel),metalnessMapUv:Ae&&x(v.metalnessMap.channel),roughnessMapUv:w&&x(v.roughnessMap.channel),anisotropyMapUv:fe&&x(v.anisotropyMap.channel),clearcoatMapUv:ve&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:et&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:se&&x(v.sheenRoughnessMap.channel),specularMapUv:Je&&x(v.specularMap.channel),specularColorMapUv:Ge&&x(v.specularColorMap.channel),specularIntensityMapUv:ct&&x(v.specularIntensityMap.channel),transmissionMapUv:I&&x(v.transmissionMap.channel),thicknessMapUv:de&&x(v.thicknessMap.channel),alphaMapUv:J&&x(v.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(W||y),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!j.attributes.uv&&(it||J),fog:!!F,useFog:v.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ie,skinning:U.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Pe,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:Mt,decodeVideoTexture:it&&v.map.isVideoTexture===!0&&nt.getTransfer(v.map.colorSpace)===vt,decodeVideoTextureEmissive:lt&&v.emissiveMap.isVideoTexture===!0&&nt.getTransfer(v.emissiveMap.colorSpace)===vt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Fn,flipSided:v.side===Xt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ve&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&v.extensions.multiDraw===!0||De)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return At.vertexUv1s=c.has(1),At.vertexUv2s=c.has(2),At.vertexUv3s=c.has(3),c.clear(),At}function f(v){const _=[];if(v.shaderID?_.push(v.shaderID):(_.push(v.customVertexShaderID),_.push(v.customFragmentShaderID)),v.defines!==void 0)for(const C in v.defines)_.push(C),_.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(R(_,v),A(_,v),_.push(s.outputColorSpace)),_.push(v.customProgramCacheKey),_.join()}function R(v,_){v.push(_.precision),v.push(_.outputColorSpace),v.push(_.envMapMode),v.push(_.envMapCubeUVHeight),v.push(_.mapUv),v.push(_.alphaMapUv),v.push(_.lightMapUv),v.push(_.aoMapUv),v.push(_.bumpMapUv),v.push(_.normalMapUv),v.push(_.displacementMapUv),v.push(_.emissiveMapUv),v.push(_.metalnessMapUv),v.push(_.roughnessMapUv),v.push(_.anisotropyMapUv),v.push(_.clearcoatMapUv),v.push(_.clearcoatNormalMapUv),v.push(_.clearcoatRoughnessMapUv),v.push(_.iridescenceMapUv),v.push(_.iridescenceThicknessMapUv),v.push(_.sheenColorMapUv),v.push(_.sheenRoughnessMapUv),v.push(_.specularMapUv),v.push(_.specularColorMapUv),v.push(_.specularIntensityMapUv),v.push(_.transmissionMapUv),v.push(_.thicknessMapUv),v.push(_.combine),v.push(_.fogExp2),v.push(_.sizeAttenuation),v.push(_.morphTargetsCount),v.push(_.morphAttributeCount),v.push(_.numDirLights),v.push(_.numPointLights),v.push(_.numSpotLights),v.push(_.numSpotLightMaps),v.push(_.numHemiLights),v.push(_.numRectAreaLights),v.push(_.numDirLightShadows),v.push(_.numPointLightShadows),v.push(_.numSpotLightShadows),v.push(_.numSpotLightShadowsWithMaps),v.push(_.numLightProbes),v.push(_.shadowMapType),v.push(_.toneMapping),v.push(_.numClippingPlanes),v.push(_.numClipIntersection),v.push(_.depthPacking)}function A(v,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),v.push(a.mask)}function b(v){const _=g[v.type];let C;if(_){const O=Nn[_];C=Ad.clone(O.uniforms)}else C=v.uniforms;return C}function P(v,_){let C;for(let O=0,U=d.length;O<U;O++){const F=d[O];if(F.cacheKey===_){C=F,++C.usedTimes;break}}return C===void 0&&(C=new z0(s,_,v,r),d.push(C)),C}function S(v){if(--v.usedTimes===0){const _=d.indexOf(v);d[_]=d[d.length-1],d.pop(),v.destroy()}}function E(v){l.remove(v)}function T(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:b,acquireProgram:P,releaseProgram:S,releaseShaderCache:E,programs:d,dispose:T}}function X0(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function j0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Uc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Fc(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,u,p,g,x,m){let f=s[e];return f===void 0?(f={id:h.id,object:h,geometry:u,material:p,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},s[e]=f):(f.id=h.id,f.object=h,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=x,f.group=m),e++,f}function a(h,u,p,g,x,m){const f=o(h,u,p,g,x,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function l(h,u,p,g,x,m){const f=o(h,u,p,g,x,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function c(h,u){t.length>1&&t.sort(h||j0),n.length>1&&n.sort(u||Uc),i.length>1&&i.sort(u||Uc)}function d(){for(let h=e,u=s.length;h<u;h++){const p=s[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:d,sort:c}}function Y0(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Fc,s.set(n,[o])):i>=r.length?(o=new Fc,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function q0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new we};break;case"SpotLight":t={position:new L,direction:new L,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function K0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let $0=0;function Z0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function J0(s){const e=new q0,t=K0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const i=new L,r=new We,o=new We;function a(c){let d=0,h=0,u=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,R=0,A=0,b=0,P=0,S=0,E=0;c.sort(Z0);for(let v=0,_=c.length;v<_;v++){const C=c[v],O=C.color,U=C.intensity,F=C.distance,j=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)d+=O.r*U,h+=O.g*U,u+=O.b*U;else if(C.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(C.sh.coefficients[k],U);E++}else if(C.isDirectionalLight){const k=e.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Z=C.shadow,Y=t.get(C);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,n.directionalShadow[p]=Y,n.directionalShadowMap[p]=j,n.directionalShadowMatrix[p]=C.shadow.matrix,R++}n.directional[p]=k,p++}else if(C.isSpotLight){const k=e.get(C);k.position.setFromMatrixPosition(C.matrixWorld),k.color.copy(O).multiplyScalar(U),k.distance=F,k.coneCos=Math.cos(C.angle),k.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),k.decay=C.decay,n.spot[x]=k;const Z=C.shadow;if(C.map&&(n.spotLightMap[P]=C.map,P++,Z.updateMatrices(C),C.castShadow&&S++),n.spotLightMatrix[x]=Z.matrix,C.castShadow){const Y=t.get(C);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,n.spotShadow[x]=Y,n.spotShadowMap[x]=j,b++}x++}else if(C.isRectAreaLight){const k=e.get(C);k.color.copy(O).multiplyScalar(U),k.halfWidth.set(C.width*.5,0,0),k.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=k,m++}else if(C.isPointLight){const k=e.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),k.distance=C.distance,k.decay=C.decay,C.castShadow){const Z=C.shadow,Y=t.get(C);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,Y.shadowCameraNear=Z.camera.near,Y.shadowCameraFar=Z.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=C.shadow.matrix,A++}n.point[g]=k,g++}else if(C.isHemisphereLight){const k=e.get(C);k.skyColor.copy(C.color).multiplyScalar(U),k.groundColor.copy(C.groundColor).multiplyScalar(U),n.hemi[f]=k,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=u;const T=n.hash;(T.directionalLength!==p||T.pointLength!==g||T.spotLength!==x||T.rectAreaLength!==m||T.hemiLength!==f||T.numDirectionalShadows!==R||T.numPointShadows!==A||T.numSpotShadows!==b||T.numSpotMaps!==P||T.numLightProbes!==E)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=b+P-S,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=E,T.directionalLength=p,T.pointLength=g,T.spotLength=x,T.rectAreaLength=m,T.hemiLength=f,T.numDirectionalShadows=R,T.numPointShadows=A,T.numSpotShadows=b,T.numSpotMaps=P,T.numLightProbes=E,n.version=$0++)}function l(c,d){let h=0,u=0,p=0,g=0,x=0;const m=d.matrixWorldInverse;for(let f=0,R=c.length;f<R;f++){const A=c[f];if(A.isDirectionalLight){const b=n.directional[h];b.direction.setFromMatrixPosition(A.matrixWorld),i.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),h++}else if(A.isSpotLight){const b=n.spot[p];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(A.matrixWorld),i.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),p++}else if(A.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(A.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(A.width*.5,0,0),b.halfHeight.set(0,A.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(A.isPointLight){const b=n.point[u];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(m),u++}else if(A.isHemisphereLight){const b=n.hemi[x];b.direction.setFromMatrixPosition(A.matrixWorld),b.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function Oc(s){const e=new J0(s),t=[],n=[];function i(d){c.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function o(d){n.push(d)}function a(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Q0(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new Oc(s),e.set(i,[a])):r>=o.length?(a=new Oc(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const e_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,t_=`uniform sampler2D shadow_pass;
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
}`;function n_(s,e,t){let n=new ul;const i=new Ee,r=new Ee,o=new ot,a=new $u({depthPacking:Bh}),l=new Zu,c={},d=t.maxTextureSize,h={[ri]:Xt,[Xt]:ri,[Fn]:Fn},u=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:e_,fragmentShader:t_}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new rn;g.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Oe(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ed;let f=this.type;this.render=function(S,E,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const v=s.getRenderTarget(),_=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),O=s.state;O.setBlending(xi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const U=f!==Jn&&this.type===Jn,F=f===Jn&&this.type!==Jn;for(let j=0,k=S.length;j<k;j++){const Z=S[j],Y=Z.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const oe=Y.getFrameExtents();if(i.multiply(oe),r.copy(Y.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(r.x=Math.floor(d/oe.x),i.x=r.x*oe.x,Y.mapSize.x=r.x),i.y>d&&(r.y=Math.floor(d/oe.y),i.y=r.y*oe.y,Y.mapSize.y=r.y)),Y.map===null||U===!0||F===!0){const me=this.type!==Jn?{minFilter:Zt,magFilter:Zt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new yi(i.x,i.y,me),Y.map.texture.name=Z.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const le=Y.getViewportCount();for(let me=0;me<le;me++){const Pe=Y.getViewport(me);o.set(r.x*Pe.x,r.y*Pe.y,r.x*Pe.z,r.y*Pe.w),O.viewport(o),Y.updateMatrices(Z,me),n=Y.getFrustum(),b(E,T,Y.camera,Z,this.type)}Y.isPointLightShadow!==!0&&this.type===Jn&&R(Y,T),Y.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(v,_,C)};function R(S,E){const T=e.update(x);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new yi(i.x,i.y)),u.uniforms.shadow_pass.value=S.map.texture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(E,null,T,u,x,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(E,null,T,p,x,null)}function A(S,E,T,v){let _=null;const C=T.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(C!==void 0)_=C;else if(_=T.isPointLight===!0?l:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const O=_.uuid,U=E.uuid;let F=c[O];F===void 0&&(F={},c[O]=F);let j=F[U];j===void 0&&(j=_.clone(),F[U]=j,E.addEventListener("dispose",P)),_=j}if(_.visible=E.visible,_.wireframe=E.wireframe,v===Jn?_.side=E.shadowSide!==null?E.shadowSide:E.side:_.side=E.shadowSide!==null?E.shadowSide:h[E.side],_.alphaMap=E.alphaMap,_.alphaTest=E.alphaTest,_.map=E.map,_.clipShadows=E.clipShadows,_.clippingPlanes=E.clippingPlanes,_.clipIntersection=E.clipIntersection,_.displacementMap=E.displacementMap,_.displacementScale=E.displacementScale,_.displacementBias=E.displacementBias,_.wireframeLinewidth=E.wireframeLinewidth,_.linewidth=E.linewidth,T.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const O=s.properties.get(_);O.light=T}return _}function b(S,E,T,v,_){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&_===Jn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,S.matrixWorld);const U=e.update(S),F=S.material;if(Array.isArray(F)){const j=U.groups;for(let k=0,Z=j.length;k<Z;k++){const Y=j[k],oe=F[Y.materialIndex];if(oe&&oe.visible){const le=A(S,oe,v,_);S.onBeforeShadow(s,S,E,T,U,le,Y),s.renderBufferDirect(T,null,U,le,S,Y),S.onAfterShadow(s,S,E,T,U,le,Y)}}}else if(F.visible){const j=A(S,F,v,_);S.onBeforeShadow(s,S,E,T,U,j,null),s.renderBufferDirect(T,null,U,j,S,null),S.onAfterShadow(s,S,E,T,U,j,null)}}const O=S.children;for(let U=0,F=O.length;U<F;U++)b(O[U],E,T,v,_)}function P(S){S.target.removeEventListener("dispose",P);for(const T in c){const v=c[T],_=S.target.uuid;_ in v&&(v[_].dispose(),delete v[_])}}}const i_={[aa]:la,[ca]:ua,[da]:fa,[Ss]:ha,[la]:aa,[ua]:ca,[fa]:da,[ha]:Ss};function s_(s,e){function t(){let I=!1;const de=new ot;let q=null;const J=new ot(0,0,0,0);return{setMask:function(ge){q!==ge&&!I&&(s.colorMask(ge,ge,ge,ge),q=ge)},setLocked:function(ge){I=ge},setClear:function(ge,pe,Ve,Mt,At){At===!0&&(ge*=Mt,pe*=Mt,Ve*=Mt),de.set(ge,pe,Ve,Mt),J.equals(de)===!1&&(s.clearColor(ge,pe,Ve,Mt),J.copy(de))},reset:function(){I=!1,q=null,J.set(-1,0,0,0)}}}function n(){let I=!1,de=!1,q=null,J=null,ge=null;return{setReversed:function(pe){if(de!==pe){const Ve=e.get("EXT_clip_control");de?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT);const Mt=ge;ge=null,this.setClear(Mt)}de=pe},getReversed:function(){return de},setTest:function(pe){pe?ce(s.DEPTH_TEST):Ie(s.DEPTH_TEST)},setMask:function(pe){q!==pe&&!I&&(s.depthMask(pe),q=pe)},setFunc:function(pe){if(de&&(pe=i_[pe]),J!==pe){switch(pe){case aa:s.depthFunc(s.NEVER);break;case la:s.depthFunc(s.ALWAYS);break;case ca:s.depthFunc(s.LESS);break;case Ss:s.depthFunc(s.LEQUAL);break;case da:s.depthFunc(s.EQUAL);break;case ha:s.depthFunc(s.GEQUAL);break;case ua:s.depthFunc(s.GREATER);break;case fa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=pe}},setLocked:function(pe){I=pe},setClear:function(pe){ge!==pe&&(de&&(pe=1-pe),s.clearDepth(pe),ge=pe)},reset:function(){I=!1,q=null,J=null,ge=null,de=!1}}}function i(){let I=!1,de=null,q=null,J=null,ge=null,pe=null,Ve=null,Mt=null,At=null;return{setTest:function(st){I||(st?ce(s.STENCIL_TEST):Ie(s.STENCIL_TEST))},setMask:function(st){de!==st&&!I&&(s.stencilMask(st),de=st)},setFunc:function(st,Yt,je){(q!==st||J!==Yt||ge!==je)&&(s.stencilFunc(st,Yt,je),q=st,J=Yt,ge=je)},setOp:function(st,Yt,je){(pe!==st||Ve!==Yt||Mt!==je)&&(s.stencilOp(st,Yt,je),pe=st,Ve=Yt,Mt=je)},setLocked:function(st){I=st},setClear:function(st){At!==st&&(s.clearStencil(st),At=st)},reset:function(){I=!1,de=null,q=null,J=null,ge=null,pe=null,Ve=null,Mt=null,At=null}}}const r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let d={},h={},u=new WeakMap,p=[],g=null,x=!1,m=null,f=null,R=null,A=null,b=null,P=null,S=null,E=new we(0,0,0),T=0,v=!1,_=null,C=null,O=null,U=null,F=null;const j=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,Z=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),k=Z>=1):Y.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),k=Z>=2);let oe=null,le={};const me=s.getParameter(s.SCISSOR_BOX),Pe=s.getParameter(s.VIEWPORT),ke=new ot().fromArray(me),K=new ot().fromArray(Pe);function ae(I,de,q,J){const ge=new Uint8Array(4),pe=s.createTexture();s.bindTexture(I,pe),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ve=0;Ve<q;Ve++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(de,0,s.RGBA,1,1,J,0,s.RGBA,s.UNSIGNED_BYTE,ge):s.texImage2D(de+Ve,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ge);return pe}const Se={};Se[s.TEXTURE_2D]=ae(s.TEXTURE_2D,s.TEXTURE_2D,1),Se[s.TEXTURE_CUBE_MAP]=ae(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[s.TEXTURE_2D_ARRAY]=ae(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Se[s.TEXTURE_3D]=ae(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ce(s.DEPTH_TEST),o.setFunc(Ss),Te(!1),W(bl),ce(s.CULL_FACE),D(xi);function ce(I){d[I]!==!0&&(s.enable(I),d[I]=!0)}function Ie(I){d[I]!==!1&&(s.disable(I),d[I]=!1)}function $e(I,de){return h[I]!==de?(s.bindFramebuffer(I,de),h[I]=de,I===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=de),I===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=de),!0):!1}function De(I,de){let q=p,J=!1;if(I){q=u.get(de),q===void 0&&(q=[],u.set(de,q));const ge=I.textures;if(q.length!==ge.length||q[0]!==s.COLOR_ATTACHMENT0){for(let pe=0,Ve=ge.length;pe<Ve;pe++)q[pe]=s.COLOR_ATTACHMENT0+pe;q.length=ge.length,J=!0}}else q[0]!==s.BACK&&(q[0]=s.BACK,J=!0);J&&s.drawBuffers(q)}function it(I){return g!==I?(s.useProgram(I),g=I,!0):!1}const gt={[Ui]:s.FUNC_ADD,[lh]:s.FUNC_SUBTRACT,[ch]:s.FUNC_REVERSE_SUBTRACT};gt[dh]=s.MIN,gt[hh]=s.MAX;const Ze={[uh]:s.ZERO,[fh]:s.ONE,[ph]:s.SRC_COLOR,[ra]:s.SRC_ALPHA,[yh]:s.SRC_ALPHA_SATURATE,[xh]:s.DST_COLOR,[gh]:s.DST_ALPHA,[mh]:s.ONE_MINUS_SRC_COLOR,[oa]:s.ONE_MINUS_SRC_ALPHA,[vh]:s.ONE_MINUS_DST_COLOR,[_h]:s.ONE_MINUS_DST_ALPHA,[Mh]:s.CONSTANT_COLOR,[Sh]:s.ONE_MINUS_CONSTANT_COLOR,[bh]:s.CONSTANT_ALPHA,[Eh]:s.ONE_MINUS_CONSTANT_ALPHA};function D(I,de,q,J,ge,pe,Ve,Mt,At,st){if(I===xi){x===!0&&(Ie(s.BLEND),x=!1);return}if(x===!1&&(ce(s.BLEND),x=!0),I!==ah){if(I!==m||st!==v){if((f!==Ui||b!==Ui)&&(s.blendEquation(s.FUNC_ADD),f=Ui,b=Ui),st)switch(I){case xs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case El:s.blendFunc(s.ONE,s.ONE);break;case Tl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case wl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case xs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case El:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Tl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case wl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}R=null,A=null,P=null,S=null,E.set(0,0,0),T=0,m=I,v=st}return}ge=ge||de,pe=pe||q,Ve=Ve||J,(de!==f||ge!==b)&&(s.blendEquationSeparate(gt[de],gt[ge]),f=de,b=ge),(q!==R||J!==A||pe!==P||Ve!==S)&&(s.blendFuncSeparate(Ze[q],Ze[J],Ze[pe],Ze[Ve]),R=q,A=J,P=pe,S=Ve),(Mt.equals(E)===!1||At!==T)&&(s.blendColor(Mt.r,Mt.g,Mt.b,At),E.copy(Mt),T=At),m=I,v=!1}function ze(I,de){I.side===Fn?Ie(s.CULL_FACE):ce(s.CULL_FACE);let q=I.side===Xt;de&&(q=!q),Te(q),I.blending===xs&&I.transparent===!1?D(xi):D(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const J=I.stencilWrite;a.setTest(J),J&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),lt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ce(s.SAMPLE_ALPHA_TO_COVERAGE):Ie(s.SAMPLE_ALPHA_TO_COVERAGE)}function Te(I){_!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),_=I)}function W(I){I!==rh?(ce(s.CULL_FACE),I!==C&&(I===bl?s.cullFace(s.BACK):I===oh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ie(s.CULL_FACE),C=I}function ee(I){I!==O&&(k&&s.lineWidth(I),O=I)}function lt(I,de,q){I?(ce(s.POLYGON_OFFSET_FILL),(U!==de||F!==q)&&(s.polygonOffset(de,q),U=de,F=q)):Ie(s.POLYGON_OFFSET_FILL)}function Ae(I){I?ce(s.SCISSOR_TEST):Ie(s.SCISSOR_TEST)}function w(I){I===void 0&&(I=s.TEXTURE0+j-1),oe!==I&&(s.activeTexture(I),oe=I)}function y(I,de,q){q===void 0&&(oe===null?q=s.TEXTURE0+j-1:q=oe);let J=le[q];J===void 0&&(J={type:void 0,texture:void 0},le[q]=J),(J.type!==I||J.texture!==de)&&(oe!==q&&(s.activeTexture(q),oe=q),s.bindTexture(I,de||Se[I]),J.type=I,J.texture=de)}function V(){const I=le[oe];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function $(){try{s.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{s.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function G(){try{s.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{s.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{s.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{s.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{s.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{s.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{s.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ue(){try{s.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Fe(I){ke.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),ke.copy(I))}function se(I){K.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),K.copy(I))}function Je(I,de){let q=c.get(de);q===void 0&&(q=new WeakMap,c.set(de,q));let J=q.get(I);J===void 0&&(J=s.getUniformBlockIndex(de,I.name),q.set(I,J))}function Ge(I,de){const J=c.get(de).get(I);l.get(de)!==J&&(s.uniformBlockBinding(de,J,I.__bindingPointIndex),l.set(de,J))}function ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},oe=null,le={},h={},u=new WeakMap,p=[],g=null,x=!1,m=null,f=null,R=null,A=null,b=null,P=null,S=null,E=new we(0,0,0),T=0,v=!1,_=null,C=null,O=null,U=null,F=null,ke.set(0,0,s.canvas.width,s.canvas.height),K.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ce,disable:Ie,bindFramebuffer:$e,drawBuffers:De,useProgram:it,setBlending:D,setMaterial:ze,setFlipSided:Te,setCullFace:W,setLineWidth:ee,setPolygonOffset:lt,setScissorTest:Ae,activeTexture:w,bindTexture:y,unbindTexture:V,compressedTexImage2D:$,compressedTexImage3D:te,texImage2D:xe,texImage3D:Ue,updateUBOMapping:Je,uniformBlockBinding:Ge,texStorage2D:et,texStorage3D:ne,texSubImage2D:G,texSubImage3D:be,compressedTexSubImage2D:fe,compressedTexSubImage3D:ve,scissor:Fe,viewport:se,reset:ct}}function r_(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ee,d=new WeakMap;let h;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,y){return p?new OffscreenCanvas(w,y):lr("canvas")}function x(w,y,V){let $=1;const te=Ae(w);if((te.width>V||te.height>V)&&($=V/Math.max(te.width,te.height)),$<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const G=Math.floor($*te.width),be=Math.floor($*te.height);h===void 0&&(h=g(G,be));const fe=y?g(G,be):h;return fe.width=G,fe.height=be,fe.getContext("2d").drawImage(w,0,0,G,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+G+"x"+be+")."),fe}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),w;return w}function m(w){return w.generateMipmaps}function f(w){s.generateMipmap(w)}function R(w){return w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?s.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function A(w,y,V,$,te=!1){if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let G=y;if(y===s.RED&&(V===s.FLOAT&&(G=s.R32F),V===s.HALF_FLOAT&&(G=s.R16F),V===s.UNSIGNED_BYTE&&(G=s.R8)),y===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(G=s.R8UI),V===s.UNSIGNED_SHORT&&(G=s.R16UI),V===s.UNSIGNED_INT&&(G=s.R32UI),V===s.BYTE&&(G=s.R8I),V===s.SHORT&&(G=s.R16I),V===s.INT&&(G=s.R32I)),y===s.RG&&(V===s.FLOAT&&(G=s.RG32F),V===s.HALF_FLOAT&&(G=s.RG16F),V===s.UNSIGNED_BYTE&&(G=s.RG8)),y===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(G=s.RG8UI),V===s.UNSIGNED_SHORT&&(G=s.RG16UI),V===s.UNSIGNED_INT&&(G=s.RG32UI),V===s.BYTE&&(G=s.RG8I),V===s.SHORT&&(G=s.RG16I),V===s.INT&&(G=s.RG32I)),y===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&(G=s.RGB8UI),V===s.UNSIGNED_SHORT&&(G=s.RGB16UI),V===s.UNSIGNED_INT&&(G=s.RGB32UI),V===s.BYTE&&(G=s.RGB8I),V===s.SHORT&&(G=s.RGB16I),V===s.INT&&(G=s.RGB32I)),y===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&(G=s.RGBA8UI),V===s.UNSIGNED_SHORT&&(G=s.RGBA16UI),V===s.UNSIGNED_INT&&(G=s.RGBA32UI),V===s.BYTE&&(G=s.RGBA8I),V===s.SHORT&&(G=s.RGBA16I),V===s.INT&&(G=s.RGBA32I)),y===s.RGB&&V===s.UNSIGNED_INT_5_9_9_9_REV&&(G=s.RGB9_E5),y===s.RGBA){const be=te?to:nt.getTransfer($);V===s.FLOAT&&(G=s.RGBA32F),V===s.HALF_FLOAT&&(G=s.RGBA16F),V===s.UNSIGNED_BYTE&&(G=be===vt?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&(G=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(G=s.RGB5_A1)}return(G===s.R16F||G===s.R32F||G===s.RG16F||G===s.RG32F||G===s.RGBA16F||G===s.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function b(w,y){let V;return w?y===null||y===zi||y===Ts?V=s.DEPTH24_STENCIL8:y===sn?V=s.DEPTH32F_STENCIL8:y===rr&&(V=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===zi||y===Ts?V=s.DEPTH_COMPONENT24:y===sn?V=s.DEPTH_COMPONENT32F:y===rr&&(V=s.DEPTH_COMPONENT16),V}function P(w,y){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Zt&&w.minFilter!==kt?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function S(w){const y=w.target;y.removeEventListener("dispose",S),T(y),y.isVideoTexture&&d.delete(y)}function E(w){const y=w.target;y.removeEventListener("dispose",E),_(y)}function T(w){const y=n.get(w);if(y.__webglInit===void 0)return;const V=w.source,$=u.get(V);if($){const te=$[y.__cacheKey];te.usedTimes--,te.usedTimes===0&&v(w),Object.keys($).length===0&&u.delete(V)}n.remove(w)}function v(w){const y=n.get(w);s.deleteTexture(y.__webglTexture);const V=w.source,$=u.get(V);delete $[y.__cacheKey],o.memory.textures--}function _(w){const y=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(y.__webglFramebuffer[$]))for(let te=0;te<y.__webglFramebuffer[$].length;te++)s.deleteFramebuffer(y.__webglFramebuffer[$][te]);else s.deleteFramebuffer(y.__webglFramebuffer[$]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[$])}else{if(Array.isArray(y.__webglFramebuffer))for(let $=0;$<y.__webglFramebuffer.length;$++)s.deleteFramebuffer(y.__webglFramebuffer[$]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let $=0;$<y.__webglColorRenderbuffer.length;$++)y.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[$]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const V=w.textures;for(let $=0,te=V.length;$<te;$++){const G=n.get(V[$]);G.__webglTexture&&(s.deleteTexture(G.__webglTexture),o.memory.textures--),n.remove(V[$])}n.remove(w)}let C=0;function O(){C=0}function U(){const w=C;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),C+=1,w}function F(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function j(w,y){const V=n.get(w);if(w.isVideoTexture&&ee(w),w.isRenderTargetTexture===!1&&w.version>0&&V.__version!==w.version){const $=w.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(V,w,y);return}}t.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+y)}function k(w,y){const V=n.get(w);if(w.version>0&&V.__version!==w.version){K(V,w,y);return}t.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+y)}function Z(w,y){const V=n.get(w);if(w.version>0&&V.__version!==w.version){K(V,w,y);return}t.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+y)}function Y(w,y){const V=n.get(w);if(w.version>0&&V.__version!==w.version){ae(V,w,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+y)}const oe={[Mn]:s.REPEAT,[On]:s.CLAMP_TO_EDGE,[Qr]:s.MIRRORED_REPEAT},le={[Zt]:s.NEAREST,[rd]:s.NEAREST_MIPMAP_NEAREST,[Js]:s.NEAREST_MIPMAP_LINEAR,[kt]:s.LINEAR,[Xr]:s.LINEAR_MIPMAP_NEAREST,[Bn]:s.LINEAR_MIPMAP_LINEAR},me={[zh]:s.NEVER,[jh]:s.ALWAYS,[Hh]:s.LESS,[vd]:s.LEQUAL,[Vh]:s.EQUAL,[Xh]:s.GEQUAL,[Gh]:s.GREATER,[Wh]:s.NOTEQUAL};function Pe(w,y){if(y.type===sn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===kt||y.magFilter===Xr||y.magFilter===Js||y.magFilter===Bn||y.minFilter===kt||y.minFilter===Xr||y.minFilter===Js||y.minFilter===Bn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,oe[y.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,oe[y.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,oe[y.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,le[y.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,le[y.minFilter]),y.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,me[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Zt||y.minFilter!==Js&&y.minFilter!==Bn||y.type===sn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");s.texParameterf(w,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function ke(w,y){let V=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",S));const $=y.source;let te=u.get($);te===void 0&&(te={},u.set($,te));const G=F(y);if(G!==w.__cacheKey){te[G]===void 0&&(te[G]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,V=!0),te[G].usedTimes++;const be=te[w.__cacheKey];be!==void 0&&(te[w.__cacheKey].usedTimes--,be.usedTimes===0&&v(y)),w.__cacheKey=G,w.__webglTexture=te[G].texture}return V}function K(w,y,V){let $=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&($=s.TEXTURE_3D);const te=ke(w,y),G=y.source;t.bindTexture($,w.__webglTexture,s.TEXTURE0+V);const be=n.get(G);if(G.version!==be.__version||te===!0){t.activeTexture(s.TEXTURE0+V);const fe=nt.getPrimaries(nt.workingColorSpace),ve=y.colorSpace===ti?null:nt.getPrimaries(y.colorSpace),et=y.colorSpace===ti||fe===ve?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let ne=x(y.image,!1,i.maxTextureSize);ne=lt(y,ne);const xe=r.convert(y.format,y.colorSpace),Ue=r.convert(y.type);let Fe=A(y.internalFormat,xe,Ue,y.colorSpace,y.isVideoTexture);Pe($,y);let se;const Je=y.mipmaps,Ge=y.isVideoTexture!==!0,ct=be.__version===void 0||te===!0,I=G.dataReady,de=P(y,ne);if(y.isDepthTexture)Fe=b(y.format===ws,y.type),ct&&(Ge?t.texStorage2D(s.TEXTURE_2D,1,Fe,ne.width,ne.height):t.texImage2D(s.TEXTURE_2D,0,Fe,ne.width,ne.height,0,xe,Ue,null));else if(y.isDataTexture)if(Je.length>0){Ge&&ct&&t.texStorage2D(s.TEXTURE_2D,de,Fe,Je[0].width,Je[0].height);for(let q=0,J=Je.length;q<J;q++)se=Je[q],Ge?I&&t.texSubImage2D(s.TEXTURE_2D,q,0,0,se.width,se.height,xe,Ue,se.data):t.texImage2D(s.TEXTURE_2D,q,Fe,se.width,se.height,0,xe,Ue,se.data);y.generateMipmaps=!1}else Ge?(ct&&t.texStorage2D(s.TEXTURE_2D,de,Fe,ne.width,ne.height),I&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ne.width,ne.height,xe,Ue,ne.data)):t.texImage2D(s.TEXTURE_2D,0,Fe,ne.width,ne.height,0,xe,Ue,ne.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ge&&ct&&t.texStorage3D(s.TEXTURE_2D_ARRAY,de,Fe,Je[0].width,Je[0].height,ne.depth);for(let q=0,J=Je.length;q<J;q++)if(se=Je[q],y.format!==yn)if(xe!==null)if(Ge){if(I)if(y.layerUpdates.size>0){const ge=pc(se.width,se.height,y.format,y.type);for(const pe of y.layerUpdates){const Ve=se.data.subarray(pe*ge/se.data.BYTES_PER_ELEMENT,(pe+1)*ge/se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,pe,se.width,se.height,1,xe,Ve)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,se.width,se.height,ne.depth,xe,se.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,q,Fe,se.width,se.height,ne.depth,0,se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?I&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,se.width,se.height,ne.depth,xe,Ue,se.data):t.texImage3D(s.TEXTURE_2D_ARRAY,q,Fe,se.width,se.height,ne.depth,0,xe,Ue,se.data)}else{Ge&&ct&&t.texStorage2D(s.TEXTURE_2D,de,Fe,Je[0].width,Je[0].height);for(let q=0,J=Je.length;q<J;q++)se=Je[q],y.format!==yn?xe!==null?Ge?I&&t.compressedTexSubImage2D(s.TEXTURE_2D,q,0,0,se.width,se.height,xe,se.data):t.compressedTexImage2D(s.TEXTURE_2D,q,Fe,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?I&&t.texSubImage2D(s.TEXTURE_2D,q,0,0,se.width,se.height,xe,Ue,se.data):t.texImage2D(s.TEXTURE_2D,q,Fe,se.width,se.height,0,xe,Ue,se.data)}else if(y.isDataArrayTexture)if(Ge){if(ct&&t.texStorage3D(s.TEXTURE_2D_ARRAY,de,Fe,ne.width,ne.height,ne.depth),I)if(y.layerUpdates.size>0){const q=pc(ne.width,ne.height,y.format,y.type);for(const J of y.layerUpdates){const ge=ne.data.subarray(J*q/ne.data.BYTES_PER_ELEMENT,(J+1)*q/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,ne.width,ne.height,1,xe,Ue,ge)}y.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,xe,Ue,ne.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Fe,ne.width,ne.height,ne.depth,0,xe,Ue,ne.data);else if(y.isData3DTexture)Ge?(ct&&t.texStorage3D(s.TEXTURE_3D,de,Fe,ne.width,ne.height,ne.depth),I&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,xe,Ue,ne.data)):t.texImage3D(s.TEXTURE_3D,0,Fe,ne.width,ne.height,ne.depth,0,xe,Ue,ne.data);else if(y.isFramebufferTexture){if(ct)if(Ge)t.texStorage2D(s.TEXTURE_2D,de,Fe,ne.width,ne.height);else{let q=ne.width,J=ne.height;for(let ge=0;ge<de;ge++)t.texImage2D(s.TEXTURE_2D,ge,Fe,q,J,0,xe,Ue,null),q>>=1,J>>=1}}else if(Je.length>0){if(Ge&&ct){const q=Ae(Je[0]);t.texStorage2D(s.TEXTURE_2D,de,Fe,q.width,q.height)}for(let q=0,J=Je.length;q<J;q++)se=Je[q],Ge?I&&t.texSubImage2D(s.TEXTURE_2D,q,0,0,xe,Ue,se):t.texImage2D(s.TEXTURE_2D,q,Fe,xe,Ue,se);y.generateMipmaps=!1}else if(Ge){if(ct){const q=Ae(ne);t.texStorage2D(s.TEXTURE_2D,de,Fe,q.width,q.height)}I&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,xe,Ue,ne)}else t.texImage2D(s.TEXTURE_2D,0,Fe,xe,Ue,ne);m(y)&&f($),be.__version=G.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function ae(w,y,V){if(y.image.length!==6)return;const $=ke(w,y),te=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+V);const G=n.get(te);if(te.version!==G.__version||$===!0){t.activeTexture(s.TEXTURE0+V);const be=nt.getPrimaries(nt.workingColorSpace),fe=y.colorSpace===ti?null:nt.getPrimaries(y.colorSpace),ve=y.colorSpace===ti||be===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const et=y.isCompressedTexture||y.image[0].isCompressedTexture,ne=y.image[0]&&y.image[0].isDataTexture,xe=[];for(let J=0;J<6;J++)!et&&!ne?xe[J]=x(y.image[J],!0,i.maxCubemapSize):xe[J]=ne?y.image[J].image:y.image[J],xe[J]=lt(y,xe[J]);const Ue=xe[0],Fe=r.convert(y.format,y.colorSpace),se=r.convert(y.type),Je=A(y.internalFormat,Fe,se,y.colorSpace),Ge=y.isVideoTexture!==!0,ct=G.__version===void 0||$===!0,I=te.dataReady;let de=P(y,Ue);Pe(s.TEXTURE_CUBE_MAP,y);let q;if(et){Ge&&ct&&t.texStorage2D(s.TEXTURE_CUBE_MAP,de,Je,Ue.width,Ue.height);for(let J=0;J<6;J++){q=xe[J].mipmaps;for(let ge=0;ge<q.length;ge++){const pe=q[ge];y.format!==yn?Fe!==null?Ge?I&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge,0,0,pe.width,pe.height,Fe,pe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge,Je,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge,0,0,pe.width,pe.height,Fe,se,pe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge,Je,pe.width,pe.height,0,Fe,se,pe.data)}}}else{if(q=y.mipmaps,Ge&&ct){q.length>0&&de++;const J=Ae(xe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,de,Je,J.width,J.height)}for(let J=0;J<6;J++)if(ne){Ge?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,xe[J].width,xe[J].height,Fe,se,xe[J].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Je,xe[J].width,xe[J].height,0,Fe,se,xe[J].data);for(let ge=0;ge<q.length;ge++){const Ve=q[ge].image[J].image;Ge?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge+1,0,0,Ve.width,Ve.height,Fe,se,Ve.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge+1,Je,Ve.width,Ve.height,0,Fe,se,Ve.data)}}else{Ge?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Fe,se,xe[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Je,Fe,se,xe[J]);for(let ge=0;ge<q.length;ge++){const pe=q[ge];Ge?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge+1,0,0,Fe,se,pe.image[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ge+1,Je,Fe,se,pe.image[J])}}}m(y)&&f(s.TEXTURE_CUBE_MAP),G.__version=te.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function Se(w,y,V,$,te,G){const be=r.convert(V.format,V.colorSpace),fe=r.convert(V.type),ve=A(V.internalFormat,be,fe,V.colorSpace),et=n.get(y),ne=n.get(V);if(ne.__renderTarget=y,!et.__hasExternalTextures){const xe=Math.max(1,y.width>>G),Ue=Math.max(1,y.height>>G);te===s.TEXTURE_3D||te===s.TEXTURE_2D_ARRAY?t.texImage3D(te,G,ve,xe,Ue,y.depth,0,be,fe,null):t.texImage2D(te,G,ve,xe,Ue,0,be,fe,null)}t.bindFramebuffer(s.FRAMEBUFFER,w),W(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,te,ne.__webglTexture,0,Te(y)):(te===s.TEXTURE_2D||te>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,te,ne.__webglTexture,G),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ce(w,y,V){if(s.bindRenderbuffer(s.RENDERBUFFER,w),y.depthBuffer){const $=y.depthTexture,te=$&&$.isDepthTexture?$.type:null,G=b(y.stencilBuffer,te),be=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=Te(y);W(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,fe,G,y.width,y.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,fe,G,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,G,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,be,s.RENDERBUFFER,w)}else{const $=y.textures;for(let te=0;te<$.length;te++){const G=$[te],be=r.convert(G.format,G.colorSpace),fe=r.convert(G.type),ve=A(G.internalFormat,be,fe,G.colorSpace),et=Te(y);V&&W(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,et,ve,y.width,y.height):W(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,et,ve,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,ve,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ie(w,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(y.depthTexture);$.__renderTarget=y,(!$.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),j(y.depthTexture,0);const te=$.__webglTexture,G=Te(y);if(y.depthTexture.format===vs)W(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0,G):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0);else if(y.depthTexture.format===ws)W(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0,G):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function $e(w){const y=n.get(w),V=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){const $=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),$){const te=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,$.removeEventListener("dispose",te)};$.addEventListener("dispose",te),y.__depthDisposeCallback=te}y.__boundDepthTexture=$}if(w.depthTexture&&!y.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Ie(y.__webglFramebuffer,w)}else if(V){y.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[$]),y.__webglDepthbuffer[$]===void 0)y.__webglDepthbuffer[$]=s.createRenderbuffer(),ce(y.__webglDepthbuffer[$],w,!1);else{const te=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,G=y.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,G),s.framebufferRenderbuffer(s.FRAMEBUFFER,te,s.RENDERBUFFER,G)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),ce(y.__webglDepthbuffer,w,!1);else{const $=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,te=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,te),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,te)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function De(w,y,V){const $=n.get(w);y!==void 0&&Se($.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&$e(w)}function it(w){const y=w.texture,V=n.get(w),$=n.get(y);w.addEventListener("dispose",E);const te=w.textures,G=w.isWebGLCubeRenderTarget===!0,be=te.length>1;if(be||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=y.version,o.memory.textures++),G){V.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer[fe]=[];for(let ve=0;ve<y.mipmaps.length;ve++)V.__webglFramebuffer[fe][ve]=s.createFramebuffer()}else V.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer=[];for(let fe=0;fe<y.mipmaps.length;fe++)V.__webglFramebuffer[fe]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(be)for(let fe=0,ve=te.length;fe<ve;fe++){const et=n.get(te[fe]);et.__webglTexture===void 0&&(et.__webglTexture=s.createTexture(),o.memory.textures++)}if(w.samples>0&&W(w)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let fe=0;fe<te.length;fe++){const ve=te[fe];V.__webglColorRenderbuffer[fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[fe]);const et=r.convert(ve.format,ve.colorSpace),ne=r.convert(ve.type),xe=A(ve.internalFormat,et,ne,ve.colorSpace,w.isXRRenderTarget===!0),Ue=Te(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ue,xe,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,V.__webglColorRenderbuffer[fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),ce(V.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(G){t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),Pe(s.TEXTURE_CUBE_MAP,y);for(let fe=0;fe<6;fe++)if(y.mipmaps&&y.mipmaps.length>0)for(let ve=0;ve<y.mipmaps.length;ve++)Se(V.__webglFramebuffer[fe][ve],w,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ve);else Se(V.__webglFramebuffer[fe],w,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(y)&&f(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let fe=0,ve=te.length;fe<ve;fe++){const et=te[fe],ne=n.get(et);t.bindTexture(s.TEXTURE_2D,ne.__webglTexture),Pe(s.TEXTURE_2D,et),Se(V.__webglFramebuffer,w,et,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,0),m(et)&&f(s.TEXTURE_2D)}t.unbindTexture()}else{let fe=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(fe=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(fe,$.__webglTexture),Pe(fe,y),y.mipmaps&&y.mipmaps.length>0)for(let ve=0;ve<y.mipmaps.length;ve++)Se(V.__webglFramebuffer[ve],w,y,s.COLOR_ATTACHMENT0,fe,ve);else Se(V.__webglFramebuffer,w,y,s.COLOR_ATTACHMENT0,fe,0);m(y)&&f(fe),t.unbindTexture()}w.depthBuffer&&$e(w)}function gt(w){const y=w.textures;for(let V=0,$=y.length;V<$;V++){const te=y[V];if(m(te)){const G=R(w),be=n.get(te).__webglTexture;t.bindTexture(G,be),f(G),t.unbindTexture()}}}const Ze=[],D=[];function ze(w){if(w.samples>0){if(W(w)===!1){const y=w.textures,V=w.width,$=w.height;let te=s.COLOR_BUFFER_BIT;const G=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=n.get(w),fe=y.length>1;if(fe)for(let ve=0;ve<y.length;ve++)t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let ve=0;ve<y.length;ve++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(te|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(te|=s.STENCIL_BUFFER_BIT)),fe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,be.__webglColorRenderbuffer[ve]);const et=n.get(y[ve]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,et,0)}s.blitFramebuffer(0,0,V,$,0,0,V,$,te,s.NEAREST),l===!0&&(Ze.length=0,D.length=0,Ze.push(s.COLOR_ATTACHMENT0+ve),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Ze.push(G),D.push(G),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,D)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ze))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),fe)for(let ve=0;ve<y.length;ve++){t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,be.__webglColorRenderbuffer[ve]);const et=n.get(y[ve]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,et,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const y=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function Te(w){return Math.min(i.maxSamples,w.samples)}function W(w){const y=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ee(w){const y=o.render.frame;d.get(w)!==y&&(d.set(w,y),w.update())}function lt(w,y){const V=w.colorSpace,$=w.format,te=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||V!==jt&&V!==ti&&(nt.getTransfer(V)===vt?($!==yn||te!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),y}function Ae(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=O,this.setTexture2D=j,this.setTexture2DArray=k,this.setTexture3D=Z,this.setTextureCube=Y,this.rebindTextures=De,this.setupRenderTarget=it,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=W}function o_(s,e){function t(n,i=ti){let r;const o=nt.getTransfer(i);if(n===oi)return s.UNSIGNED_BYTE;if(n===el)return s.UNSIGNED_SHORT_4_4_4_4;if(n===tl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ld)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===od)return s.BYTE;if(n===ad)return s.SHORT;if(n===rr)return s.UNSIGNED_SHORT;if(n===Qa)return s.INT;if(n===zi)return s.UNSIGNED_INT;if(n===sn)return s.FLOAT;if(n===kn)return s.HALF_FLOAT;if(n===cd)return s.ALPHA;if(n===dd)return s.RGB;if(n===yn)return s.RGBA;if(n===hd)return s.LUMINANCE;if(n===ud)return s.LUMINANCE_ALPHA;if(n===vs)return s.DEPTH_COMPONENT;if(n===ws)return s.DEPTH_STENCIL;if(n===nl)return s.RED;if(n===il)return s.RED_INTEGER;if(n===fd)return s.RG;if(n===sl)return s.RG_INTEGER;if(n===rl)return s.RGBA_INTEGER;if(n===jr||n===Yr||n===qr||n===Kr)if(o===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Kr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ma||n===ga||n===_a||n===xa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ma)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ga)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===va||n===ya||n===Ma)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===va||n===ya)return o===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ma)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Sa||n===ba||n===Ea||n===Ta||n===wa||n===Aa||n===Ra||n===Ca||n===Ia||n===Pa||n===Da||n===La||n===Na||n===Ua)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Sa)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ba)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ea)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ta)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wa)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Aa)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ra)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ca)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ia)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pa)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Da)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===La)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Na)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ua)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$r||n===Fa||n===Oa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===$r)return o===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Oa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pd||n===Ba||n===ka||n===za)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===$r)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ba)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ka)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===za)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ts?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const a_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,l_=`
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

}`;class c_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Ut,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Pn({vertexShader:a_,fragmentShader:l_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Oe(new Ds(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class d_ extends Mi{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,u=null,p=null,g=null;const x=new c_,m=t.getContextAttributes();let f=null,R=null;const A=[],b=[],P=new Ee;let S=null;const E=new Wt;E.viewport=new ot;const T=new Wt;T.viewport=new ot;const v=[E,T],_=new gf;let C=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ae=A[K];return ae===void 0&&(ae=new Oo,A[K]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(K){let ae=A[K];return ae===void 0&&(ae=new Oo,A[K]=ae),ae.getGripSpace()},this.getHand=function(K){let ae=A[K];return ae===void 0&&(ae=new Oo,A[K]=ae),ae.getHandSpace()};function U(K){const ae=b.indexOf(K.inputSource);if(ae===-1)return;const Se=A[ae];Se!==void 0&&(Se.update(K.inputSource,K.frame,c||o),Se.dispatchEvent({type:K.type,data:K.inputSource}))}function F(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",j);for(let K=0;K<A.length;K++){const ae=b[K];ae!==null&&(b[K]=null,A[K].disconnect(ae))}C=null,O=null,x.reset(),e.setRenderTarget(f),p=null,u=null,h=null,i=null,R=null,ke.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",F),i.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(P),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,ce=null,Ie=null;m.depth&&(Ie=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=m.stencil?ws:vs,ce=m.stencil?Ts:zi);const $e={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:r};h=new XRWebGLBinding(i,t),u=h.createProjectionLayer($e),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),R=new yi(u.textureWidth,u.textureHeight,{format:yn,type:oi,depthTexture:new Ud(u.textureWidth,u.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const Se={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,Se),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),R=new yi(p.framebufferWidth,p.framebufferHeight,{format:yn,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ke.setContext(i),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function j(K){for(let ae=0;ae<K.removed.length;ae++){const Se=K.removed[ae],ce=b.indexOf(Se);ce>=0&&(b[ce]=null,A[ce].disconnect(Se))}for(let ae=0;ae<K.added.length;ae++){const Se=K.added[ae];let ce=b.indexOf(Se);if(ce===-1){for(let $e=0;$e<A.length;$e++)if($e>=b.length){b.push(Se),ce=$e;break}else if(b[$e]===null){b[$e]=Se,ce=$e;break}if(ce===-1)break}const Ie=A[ce];Ie&&Ie.connect(Se)}}const k=new L,Z=new L;function Y(K,ae,Se){k.setFromMatrixPosition(ae.matrixWorld),Z.setFromMatrixPosition(Se.matrixWorld);const ce=k.distanceTo(Z),Ie=ae.projectionMatrix.elements,$e=Se.projectionMatrix.elements,De=Ie[14]/(Ie[10]-1),it=Ie[14]/(Ie[10]+1),gt=(Ie[9]+1)/Ie[5],Ze=(Ie[9]-1)/Ie[5],D=(Ie[8]-1)/Ie[0],ze=($e[8]+1)/$e[0],Te=De*D,W=De*ze,ee=ce/(-D+ze),lt=ee*-D;if(ae.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(lt),K.translateZ(ee),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ie[10]===-1)K.projectionMatrix.copy(ae.projectionMatrix),K.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const Ae=De+ee,w=it+ee,y=Te-lt,V=W+(ce-lt),$=gt*it/w*Ae,te=Ze*it/w*Ae;K.projectionMatrix.makePerspective(y,V,$,te,Ae,w),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function oe(K,ae){ae===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ae.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let ae=K.near,Se=K.far;x.texture!==null&&(x.depthNear>0&&(ae=x.depthNear),x.depthFar>0&&(Se=x.depthFar)),_.near=T.near=E.near=ae,_.far=T.far=E.far=Se,(C!==_.near||O!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),C=_.near,O=_.far),E.layers.mask=K.layers.mask|2,T.layers.mask=K.layers.mask|4,_.layers.mask=E.layers.mask|T.layers.mask;const ce=K.parent,Ie=_.cameras;oe(_,ce);for(let $e=0;$e<Ie.length;$e++)oe(Ie[$e],ce);Ie.length===2?Y(_,E,T):_.projectionMatrix.copy(E.projectionMatrix),le(K,_,ce)};function le(K,ae,Se){Se===null?K.matrix.copy(ae.matrixWorld):(K.matrix.copy(Se.matrixWorld),K.matrix.invert(),K.matrix.multiply(ae.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ae.projectionMatrix),K.projectionMatrixInverse.copy(ae.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=As*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let me=null;function Pe(K,ae){if(d=ae.getViewerPose(c||o),g=ae,d!==null){const Se=d.views;p!==null&&(e.setRenderTargetFramebuffer(R,p.framebuffer),e.setRenderTarget(R));let ce=!1;Se.length!==_.cameras.length&&(_.cameras.length=0,ce=!0);for(let De=0;De<Se.length;De++){const it=Se[De];let gt=null;if(p!==null)gt=p.getViewport(it);else{const D=h.getViewSubImage(u,it);gt=D.viewport,De===0&&(e.setRenderTargetTextures(R,D.colorTexture,u.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(R))}let Ze=v[De];Ze===void 0&&(Ze=new Wt,Ze.layers.enable(De),Ze.viewport=new ot,v[De]=Ze),Ze.matrix.fromArray(it.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(it.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(gt.x,gt.y,gt.width,gt.height),De===0&&(_.matrix.copy(Ze.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ce===!0&&_.cameras.push(Ze)}const Ie=i.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&h){const De=h.getDepthInformation(Se[0]);De&&De.isValid&&De.texture&&x.init(e,De,i.renderState)}}for(let Se=0;Se<A.length;Se++){const ce=b[Se],Ie=A[Se];ce!==null&&Ie!==void 0&&Ie.update(ce,ae,c||o)}me&&me(K,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),g=null}const ke=new Vd;ke.setAnimationLoop(Pe),this.setAnimationLoop=function(K){me=K},this.dispose=function(){}}}const Pi=new Vn,h_=new We;function u_(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,wd(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,R,A,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),d(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,b)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,R,A):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Xt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Xt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const R=e.get(f),A=R.envMap,b=R.envMapRotation;A&&(m.envMap.value=A,Pi.copy(b),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),m.envMapRotation.value.setFromMatrix4(h_.makeRotationFromEuler(Pi)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,R,A){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*R,m.scale.value=A*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function d(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,R){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Xt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=R.texture,m.transmissionSamplerSize.value.set(R.width,R.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const R=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(R.matrixWorld),m.nearDistance.value=R.shadow.camera.near,m.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function f_(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,A){const b=A.program;n.uniformBlockBinding(R,b)}function c(R,A){let b=i[R.id];b===void 0&&(g(R),b=d(R),i[R.id]=b,R.addEventListener("dispose",m));const P=A.program;n.updateUBOMapping(R,P);const S=e.render.frame;r[R.id]!==S&&(u(R),r[R.id]=S)}function d(R){const A=h();R.__bindingPointIndex=A;const b=s.createBuffer(),P=R.__size,S=R.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,P,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,A,b),b}function h(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(R){const A=i[R.id],b=R.uniforms,P=R.__cache;s.bindBuffer(s.UNIFORM_BUFFER,A);for(let S=0,E=b.length;S<E;S++){const T=Array.isArray(b[S])?b[S]:[b[S]];for(let v=0,_=T.length;v<_;v++){const C=T[v];if(p(C,S,v,P)===!0){const O=C.__offset,U=Array.isArray(C.value)?C.value:[C.value];let F=0;for(let j=0;j<U.length;j++){const k=U[j],Z=x(k);typeof k=="number"||typeof k=="boolean"?(C.__data[0]=k,s.bufferSubData(s.UNIFORM_BUFFER,O+F,C.__data)):k.isMatrix3?(C.__data[0]=k.elements[0],C.__data[1]=k.elements[1],C.__data[2]=k.elements[2],C.__data[3]=0,C.__data[4]=k.elements[3],C.__data[5]=k.elements[4],C.__data[6]=k.elements[5],C.__data[7]=0,C.__data[8]=k.elements[6],C.__data[9]=k.elements[7],C.__data[10]=k.elements[8],C.__data[11]=0):(k.toArray(C.__data,F),F+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(R,A,b,P){const S=R.value,E=A+"_"+b;if(P[E]===void 0)return typeof S=="number"||typeof S=="boolean"?P[E]=S:P[E]=S.clone(),!0;{const T=P[E];if(typeof S=="number"||typeof S=="boolean"){if(T!==S)return P[E]=S,!0}else if(T.equals(S)===!1)return T.copy(S),!0}return!1}function g(R){const A=R.uniforms;let b=0;const P=16;for(let E=0,T=A.length;E<T;E++){const v=Array.isArray(A[E])?A[E]:[A[E]];for(let _=0,C=v.length;_<C;_++){const O=v[_],U=Array.isArray(O.value)?O.value:[O.value];for(let F=0,j=U.length;F<j;F++){const k=U[F],Z=x(k),Y=b%P,oe=Y%Z.boundary,le=Y+oe;b+=oe,le!==0&&P-le<Z.storage&&(b+=P-le),O.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=b,b+=Z.storage}}}const S=b%P;return S>0&&(b+=P-S),R.__size=b,R.__cache={},this}function x(R){const A={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(A.boundary=4,A.storage=4):R.isVector2?(A.boundary=8,A.storage=8):R.isVector3||R.isColor?(A.boundary=16,A.storage=12):R.isVector4?(A.boundary=16,A.storage=16):R.isMatrix3?(A.boundary=48,A.storage=48):R.isMatrix4?(A.boundary=64,A.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),A}function m(R){const A=R.target;A.removeEventListener("dispose",m);const b=o.indexOf(A.__bindingPointIndex);o.splice(b,1),s.deleteBuffer(i[A.id]),delete i[A.id],delete r[A.id]}function f(){for(const R in i)s.deleteBuffer(i[R]);o=[],i={},r={}}return{bind:l,update:c,dispose:f}}class p_{constructor(e={}){const{canvas:t=cu(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,f=null;const R=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rt,this.toneMapping=vi,this.toneMappingExposure=1;const b=this;let P=!1,S=0,E=0,T=null,v=-1,_=null;const C=new ot,O=new ot;let U=null;const F=new we(0);let j=0,k=t.width,Z=t.height,Y=1,oe=null,le=null;const me=new ot(0,0,k,Z),Pe=new ot(0,0,k,Z);let ke=!1;const K=new ul;let ae=!1,Se=!1;this.transmissionResolutionScale=1;const ce=new We,Ie=new We,$e=new L,De=new ot,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function Ze(){return T===null?Y:1}let D=n;function ze(M,N){return t.getContext(M,N)}try{const M={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ja}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",pe,!1),D===null){const N="webgl2";if(D=ze(N,M),D===null)throw ze(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Te,W,ee,lt,Ae,w,y,V,$,te,G,be,fe,ve,et,ne,xe,Ue,Fe,se,Je,Ge,ct,I;function de(){Te=new Eg(D),Te.init(),Ge=new o_(D,Te),W=new _g(D,Te,e,Ge),ee=new s_(D,Te),W.reverseDepthBuffer&&u&&ee.buffers.depth.setReversed(!0),lt=new Ag(D),Ae=new X0,w=new r_(D,Te,ee,Ae,W,Ge,lt),y=new vg(b),V=new bg(b),$=new Lf(D),ct=new mg(D,$),te=new Tg(D,$,lt,ct),G=new Cg(D,te,$,lt),Fe=new Rg(D,W,w),ne=new xg(Ae),be=new W0(b,y,V,Te,W,ct,ne),fe=new u_(b,Ae),ve=new Y0,et=new Q0(Te),Ue=new pg(b,y,V,ee,G,p,l),xe=new n_(b,G,W),I=new f_(D,lt,W,ee),se=new gg(D,Te,lt),Je=new wg(D,Te,lt),lt.programs=be.programs,b.capabilities=W,b.extensions=Te,b.properties=Ae,b.renderLists=ve,b.shadowMap=xe,b.state=ee,b.info=lt}de();const q=new d_(b,D);this.xr=q,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const M=Te.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Te.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(M){M!==void 0&&(Y=M,this.setSize(k,Z,!1))},this.getSize=function(M){return M.set(k,Z)},this.setSize=function(M,N,z=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=M,Z=N,t.width=Math.floor(M*Y),t.height=Math.floor(N*Y),z===!0&&(t.style.width=M+"px",t.style.height=N+"px"),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(k*Y,Z*Y).floor()},this.setDrawingBufferSize=function(M,N,z){k=M,Z=N,Y=z,t.width=Math.floor(M*z),t.height=Math.floor(N*z),this.setViewport(0,0,M,N)},this.getCurrentViewport=function(M){return M.copy(C)},this.getViewport=function(M){return M.copy(me)},this.setViewport=function(M,N,z,X){M.isVector4?me.set(M.x,M.y,M.z,M.w):me.set(M,N,z,X),ee.viewport(C.copy(me).multiplyScalar(Y).round())},this.getScissor=function(M){return M.copy(Pe)},this.setScissor=function(M,N,z,X){M.isVector4?Pe.set(M.x,M.y,M.z,M.w):Pe.set(M,N,z,X),ee.scissor(O.copy(Pe).multiplyScalar(Y).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(M){ee.setScissorTest(ke=M)},this.setOpaqueSort=function(M){oe=M},this.setTransparentSort=function(M){le=M},this.getClearColor=function(M){return M.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(M=!0,N=!0,z=!0){let X=0;if(M){let B=!1;if(T!==null){const ie=T.texture.format;B=ie===rl||ie===sl||ie===il}if(B){const ie=T.texture.type,he=ie===oi||ie===zi||ie===rr||ie===Ts||ie===el||ie===tl,_e=Ue.getClearColor(),Me=Ue.getClearAlpha(),Re=_e.r,Be=_e.g,Ce=_e.b;he?(g[0]=Re,g[1]=Be,g[2]=Ce,g[3]=Me,D.clearBufferuiv(D.COLOR,0,g)):(x[0]=Re,x[1]=Be,x[2]=Ce,x[3]=Me,D.clearBufferiv(D.COLOR,0,x))}else X|=D.COLOR_BUFFER_BIT}N&&(X|=D.DEPTH_BUFFER_BIT),z&&(X|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),Ue.dispose(),ve.dispose(),et.dispose(),Ae.dispose(),y.dispose(),V.dispose(),G.dispose(),ct.dispose(),I.dispose(),be.dispose(),q.dispose(),q.removeEventListener("sessionstart",Gi),q.removeEventListener("sessionend",Fs),Dn.stop()};function J(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const M=lt.autoReset,N=xe.enabled,z=xe.autoUpdate,X=xe.needsUpdate,B=xe.type;de(),lt.autoReset=M,xe.enabled=N,xe.autoUpdate=z,xe.needsUpdate=X,xe.type=B}function pe(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ve(M){const N=M.target;N.removeEventListener("dispose",Ve),Mt(N)}function Mt(M){At(M),Ae.remove(M)}function At(M){const N=Ae.get(M).programs;N!==void 0&&(N.forEach(function(z){be.releaseProgram(z)}),M.isShaderMaterial&&be.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,z,X,B,ie){N===null&&(N=it);const he=B.isMesh&&B.matrixWorld.determinant()<0,_e=ft(M,N,z,X,B);ee.setMaterial(X,he);let Me=z.index,Re=1;if(X.wireframe===!0){if(Me=te.getWireframeAttribute(z),Me===void 0)return;Re=2}const Be=z.drawRange,Ce=z.attributes.position;let rt=Be.start*Re,dt=(Be.start+Be.count)*Re;ie!==null&&(rt=Math.max(rt,ie.start*Re),dt=Math.min(dt,(ie.start+ie.count)*Re)),Me!==null?(rt=Math.max(rt,0),dt=Math.min(dt,Me.count)):Ce!=null&&(rt=Math.max(rt,0),dt=Math.min(dt,Ce.count));const It=dt-rt;if(It<0||It===1/0)return;ct.setup(B,X,_e,z,Me);let wt,at=se;if(Me!==null&&(wt=$.get(Me),at=Je,at.setIndex(wt)),B.isMesh)X.wireframe===!0?(ee.setLineWidth(X.wireframeLinewidth*Ze()),at.setMode(D.LINES)):at.setMode(D.TRIANGLES);else if(B.isLine){let Le=X.linewidth;Le===void 0&&(Le=1),ee.setLineWidth(Le*Ze()),B.isLineSegments?at.setMode(D.LINES):B.isLineLoop?at.setMode(D.LINE_LOOP):at.setMode(D.LINE_STRIP)}else B.isPoints?at.setMode(D.POINTS):B.isSprite&&at.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Li("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Te.get("WEBGL_multi_draw"))at.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Le=B._multiDrawStarts,zt=B._multiDrawCounts,ht=B._multiDrawCount,Sn=Me?$.get(Me).bytesPerElement:1,ji=Ae.get(X).currentProgram.getUniforms();for(let an=0;an<ht;an++)ji.setValue(D,"_gl_DrawID",an),at.render(Le[an]/Sn,zt[an])}else if(B.isInstancedMesh)at.renderInstances(rt,It,B.count);else if(z.isInstancedBufferGeometry){const Le=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,zt=Math.min(z.instanceCount,Le);at.renderInstances(rt,It,zt)}else at.render(rt,It)};function st(M,N,z){M.transparent===!0&&M.side===Fn&&M.forceSinglePass===!1?(M.side=Xt,M.needsUpdate=!0,ai(M,N,z),M.side=ri,M.needsUpdate=!0,ai(M,N,z),M.side=Fn):ai(M,N,z)}this.compile=function(M,N,z=null){z===null&&(z=M),f=et.get(z),f.init(N),A.push(f),z.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),M!==z&&M.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights();const X=new Set;return M.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ie=B.material;if(ie)if(Array.isArray(ie))for(let he=0;he<ie.length;he++){const _e=ie[he];st(_e,z,B),X.add(_e)}else st(ie,z,B),X.add(ie)}),f=A.pop(),X},this.compileAsync=function(M,N,z=null){const X=this.compile(M,N,z);return new Promise(B=>{function ie(){if(X.forEach(function(he){Ae.get(he).currentProgram.isReady()&&X.delete(he)}),X.size===0){B(M);return}setTimeout(ie,10)}Te.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let Yt=null;function je(M){Yt&&Yt(M)}function Gi(){Dn.stop()}function Fs(){Dn.start()}const Dn=new Vd;Dn.setAnimationLoop(je),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(M){Yt=M,q.setAnimationLoop(M),M===null?Dn.stop():Dn.start()},q.addEventListener("sessionstart",Gi),q.addEventListener("sessionend",Fs),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(N),N=q.getCamera()),M.isScene===!0&&M.onBeforeRender(b,M,N,T),f=et.get(M,A.length),f.init(N),A.push(f),Ie.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),K.setFromProjectionMatrix(Ie),Se=this.localClippingEnabled,ae=ne.init(this.clippingPlanes,Se),m=ve.get(M,R.length),m.init(),R.push(m),q.enabled===!0&&q.isPresenting===!0){const ie=b.xr.getDepthSensingMesh();ie!==null&&Ei(ie,N,-1/0,b.sortObjects)}Ei(M,N,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(oe,le),gt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,gt&&Ue.addToRenderList(m,M),this.info.render.frame++,ae===!0&&ne.beginShadows();const z=f.state.shadowsArray;xe.render(z,M,N),ae===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,B=m.transmissive;if(f.setupLights(),N.isArrayCamera){const ie=N.cameras;if(B.length>0)for(let he=0,_e=ie.length;he<_e;he++){const Me=ie[he];_t(X,B,M,Me)}gt&&Ue.render(M);for(let he=0,_e=ie.length;he<_e;he++){const Me=ie[he];pr(m,M,Me,Me.viewport)}}else B.length>0&&_t(X,B,M,N),gt&&Ue.render(M),pr(m,M,N);T!==null&&E===0&&(w.updateMultisampleRenderTarget(T),w.updateRenderTargetMipmap(T)),M.isScene===!0&&M.onAfterRender(b,M,N),ct.resetDefaultState(),v=-1,_=null,A.pop(),A.length>0?(f=A[A.length-1],ae===!0&&ne.setGlobalState(b.clippingPlanes,f.state.camera)):f=null,R.pop(),R.length>0?m=R[R.length-1]:m=null};function Ei(M,N,z,X){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||K.intersectsSprite(M)){X&&De.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ie);const he=G.update(M),_e=M.material;_e.visible&&m.push(M,he,_e,z,De.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||K.intersectsObject(M))){const he=G.update(M),_e=M.material;if(X&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),De.copy(M.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),De.copy(he.boundingSphere.center)),De.applyMatrix4(M.matrixWorld).applyMatrix4(Ie)),Array.isArray(_e)){const Me=he.groups;for(let Re=0,Be=Me.length;Re<Be;Re++){const Ce=Me[Re],rt=_e[Ce.materialIndex];rt&&rt.visible&&m.push(M,he,rt,z,De.z,Ce)}}else _e.visible&&m.push(M,he,_e,z,De.z,null)}}const ie=M.children;for(let he=0,_e=ie.length;he<_e;he++)Ei(ie[he],N,z,X)}function pr(M,N,z,X){const B=M.opaque,ie=M.transmissive,he=M.transparent;f.setupLightsView(z),ae===!0&&ne.setGlobalState(b.clippingPlanes,z),X&&ee.viewport(C.copy(X)),B.length>0&&Wi(B,N,z),ie.length>0&&Wi(ie,N,z),he.length>0&&Wi(he,N,z),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function _t(M,N,z,X){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[X.id]===void 0&&(f.state.transmissionRenderTarget[X.id]=new yi(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float")?kn:oi,minFilter:Bn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const ie=f.state.transmissionRenderTarget[X.id],he=X.viewport||C;ie.setSize(he.z*b.transmissionResolutionScale,he.w*b.transmissionResolutionScale);const _e=b.getRenderTarget();b.setRenderTarget(ie),b.getClearColor(F),j=b.getClearAlpha(),j<1&&b.setClearColor(16777215,.5),b.clear(),gt&&Ue.render(z);const Me=b.toneMapping;b.toneMapping=vi;const Re=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),f.setupLightsView(X),ae===!0&&ne.setGlobalState(b.clippingPlanes,X),Wi(M,z,X),w.updateMultisampleRenderTarget(ie),w.updateRenderTargetMipmap(ie),Te.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Ce=0,rt=N.length;Ce<rt;Ce++){const dt=N[Ce],It=dt.object,wt=dt.geometry,at=dt.material,Le=dt.group;if(at.side===Fn&&It.layers.test(X.layers)){const zt=at.side;at.side=Xt,at.needsUpdate=!0,Xi(It,z,X,wt,at,Le),at.side=zt,at.needsUpdate=!0,Be=!0}}Be===!0&&(w.updateMultisampleRenderTarget(ie),w.updateRenderTargetMipmap(ie))}b.setRenderTarget(_e),b.setClearColor(F,j),Re!==void 0&&(X.viewport=Re),b.toneMapping=Me}function Wi(M,N,z){const X=N.isScene===!0?N.overrideMaterial:null;for(let B=0,ie=M.length;B<ie;B++){const he=M[B],_e=he.object,Me=he.geometry,Re=X===null?he.material:X,Be=he.group;_e.layers.test(z.layers)&&Xi(_e,N,z,Me,Re,Be)}}function Xi(M,N,z,X,B,ie){M.onBeforeRender(b,N,z,X,B,ie),M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),B.onBeforeRender(b,N,z,X,M,ie),B.transparent===!0&&B.side===Fn&&B.forceSinglePass===!1?(B.side=Xt,B.needsUpdate=!0,b.renderBufferDirect(z,N,X,B,M,ie),B.side=ri,B.needsUpdate=!0,b.renderBufferDirect(z,N,X,B,M,ie),B.side=Fn):b.renderBufferDirect(z,N,X,B,M,ie),M.onAfterRender(b,N,z,X,B,ie)}function ai(M,N,z){N.isScene!==!0&&(N=it);const X=Ae.get(M),B=f.state.lights,ie=f.state.shadowsArray,he=B.state.version,_e=be.getParameters(M,B.state,ie,N,z),Me=be.getProgramCacheKey(_e);let Re=X.programs;X.environment=M.isMeshStandardMaterial?N.environment:null,X.fog=N.fog,X.envMap=(M.isMeshStandardMaterial?V:y).get(M.envMap||X.environment),X.envMapRotation=X.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,Re===void 0&&(M.addEventListener("dispose",Ve),Re=new Map,X.programs=Re);let Be=Re.get(Me);if(Be!==void 0){if(X.currentProgram===Be&&X.lightsStateVersion===he)return ye(M,_e),Be}else _e.uniforms=be.getUniforms(M),M.onBeforeCompile(_e,b),Be=be.acquireProgram(_e,Me),Re.set(Me,Be),X.uniforms=_e.uniforms;const Ce=X.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ce.clippingPlanes=ne.uniform),ye(M,_e),X.needsLights=St(M),X.lightsStateVersion=he,X.needsLights&&(Ce.ambientLightColor.value=B.state.ambient,Ce.lightProbe.value=B.state.probe,Ce.directionalLights.value=B.state.directional,Ce.directionalLightShadows.value=B.state.directionalShadow,Ce.spotLights.value=B.state.spot,Ce.spotLightShadows.value=B.state.spotShadow,Ce.rectAreaLights.value=B.state.rectArea,Ce.ltc_1.value=B.state.rectAreaLTC1,Ce.ltc_2.value=B.state.rectAreaLTC2,Ce.pointLights.value=B.state.point,Ce.pointLightShadows.value=B.state.pointShadow,Ce.hemisphereLights.value=B.state.hemi,Ce.directionalShadowMap.value=B.state.directionalShadowMap,Ce.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ce.spotShadowMap.value=B.state.spotShadowMap,Ce.spotLightMatrix.value=B.state.spotLightMatrix,Ce.spotLightMap.value=B.state.spotLightMap,Ce.pointShadowMap.value=B.state.pointShadowMap,Ce.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=Be,X.uniformsList=null,Be}function H(M){if(M.uniformsList===null){const N=M.currentProgram.getUniforms();M.uniformsList=Zr.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function ye(M,N){const z=Ae.get(M);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.batchingColor=N.batchingColor,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.instancingMorph=N.instancingMorph,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function ft(M,N,z,X,B){N.isScene!==!0&&(N=it),w.resetTextureUnits();const ie=N.fog,he=X.isMeshStandardMaterial?N.environment:null,_e=T===null?b.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:jt,Me=(X.isMeshStandardMaterial?V:y).get(X.envMap||he),Re=X.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Be=!!z.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ce=!!z.morphAttributes.position,rt=!!z.morphAttributes.normal,dt=!!z.morphAttributes.color;let It=vi;X.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(It=b.toneMapping);const wt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,at=wt!==void 0?wt.length:0,Le=Ae.get(X),zt=f.state.lights;if(ae===!0&&(Se===!0||M!==_)){const qt=M===_&&X.id===v;ne.setState(X,M,qt)}let ht=!1;X.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==zt.state.version||Le.outputColorSpace!==_e||B.isBatchedMesh&&Le.batching===!1||!B.isBatchedMesh&&Le.batching===!0||B.isBatchedMesh&&Le.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Le.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Le.instancing===!1||!B.isInstancedMesh&&Le.instancing===!0||B.isSkinnedMesh&&Le.skinning===!1||!B.isSkinnedMesh&&Le.skinning===!0||B.isInstancedMesh&&Le.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Le.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Le.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Le.instancingMorph===!1&&B.morphTexture!==null||Le.envMap!==Me||X.fog===!0&&Le.fog!==ie||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==ne.numPlanes||Le.numIntersection!==ne.numIntersection)||Le.vertexAlphas!==Re||Le.vertexTangents!==Be||Le.morphTargets!==Ce||Le.morphNormals!==rt||Le.morphColors!==dt||Le.toneMapping!==It||Le.morphTargetsCount!==at)&&(ht=!0):(ht=!0,Le.__version=X.version);let Sn=Le.currentProgram;ht===!0&&(Sn=ai(X,N,B));let ji=!1,an=!1,Os=!1;const bt=Sn.getUniforms(),fn=Le.uniforms;if(ee.useProgram(Sn.program)&&(ji=!0,an=!0,Os=!0),X.id!==v&&(v=X.id,an=!0),ji||_!==M){ee.buffers.depth.getReversed()?(ce.copy(M.projectionMatrix),hu(ce),uu(ce),bt.setValue(D,"projectionMatrix",ce)):bt.setValue(D,"projectionMatrix",M.projectionMatrix),bt.setValue(D,"viewMatrix",M.matrixWorldInverse);const Qt=bt.map.cameraPosition;Qt!==void 0&&Qt.setValue(D,$e.setFromMatrixPosition(M.matrixWorld)),W.logarithmicDepthBuffer&&bt.setValue(D,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&bt.setValue(D,"isOrthographic",M.isOrthographicCamera===!0),_!==M&&(_=M,an=!0,Os=!0)}if(B.isSkinnedMesh){bt.setOptional(D,B,"bindMatrix"),bt.setOptional(D,B,"bindMatrixInverse");const qt=B.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),bt.setValue(D,"boneTexture",qt.boneTexture,w))}B.isBatchedMesh&&(bt.setOptional(D,B,"batchingTexture"),bt.setValue(D,"batchingTexture",B._matricesTexture,w),bt.setOptional(D,B,"batchingIdTexture"),bt.setValue(D,"batchingIdTexture",B._indirectTexture,w),bt.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&bt.setValue(D,"batchingColorTexture",B._colorsTexture,w));const pn=z.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&Fe.update(B,z,Sn),(an||Le.receiveShadow!==B.receiveShadow)&&(Le.receiveShadow=B.receiveShadow,bt.setValue(D,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(fn.envMap.value=Me,fn.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&N.environment!==null&&(fn.envMapIntensity.value=N.environmentIntensity),an&&(bt.setValue(D,"toneMappingExposure",b.toneMappingExposure),Le.needsLights&&Tt(fn,Os),ie&&X.fog===!0&&fe.refreshFogUniforms(fn,ie),fe.refreshMaterialUniforms(fn,X,Y,Z,f.state.transmissionRenderTarget[M.id]),Zr.upload(D,H(Le),fn,w)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Zr.upload(D,H(Le),fn,w),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&bt.setValue(D,"center",B.center),bt.setValue(D,"modelViewMatrix",B.modelViewMatrix),bt.setValue(D,"normalMatrix",B.normalMatrix),bt.setValue(D,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const qt=X.uniformsGroups;for(let Qt=0,go=qt.length;Qt<go;Qt++){const Ti=qt[Qt];I.update(Ti,Sn),I.bind(Ti,Sn)}}return Sn}function Tt(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function St(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(M,N,z){Ae.get(M.texture).__webglTexture=N,Ae.get(M.depthTexture).__webglTexture=z;const X=Ae.get(M);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=z===void 0,X.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,N){const z=Ae.get(M);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0};const tt=D.createFramebuffer();this.setRenderTarget=function(M,N=0,z=0){T=M,S=N,E=z;let X=!0,B=null,ie=!1,he=!1;if(M){const Me=Ae.get(M);if(Me.__useDefaultFramebuffer!==void 0)ee.bindFramebuffer(D.FRAMEBUFFER,null),X=!1;else if(Me.__webglFramebuffer===void 0)w.setupRenderTarget(M);else if(Me.__hasExternalTextures)w.rebindTextures(M,Ae.get(M.texture).__webglTexture,Ae.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ce=M.depthTexture;if(Me.__boundDepthTexture!==Ce){if(Ce!==null&&Ae.has(Ce)&&(M.width!==Ce.image.width||M.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(M)}}const Re=M.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(he=!0);const Be=Ae.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Be[N])?B=Be[N][z]:B=Be[N],ie=!0):M.samples>0&&w.useMultisampledRTT(M)===!1?B=Ae.get(M).__webglMultisampledFramebuffer:Array.isArray(Be)?B=Be[z]:B=Be,C.copy(M.viewport),O.copy(M.scissor),U=M.scissorTest}else C.copy(me).multiplyScalar(Y).floor(),O.copy(Pe).multiplyScalar(Y).floor(),U=ke;if(z!==0&&(B=tt),ee.bindFramebuffer(D.FRAMEBUFFER,B)&&X&&ee.drawBuffers(M,B),ee.viewport(C),ee.scissor(O),ee.setScissorTest(U),ie){const Me=Ae.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,Me.__webglTexture,z)}else if(he){const Me=Ae.get(M.texture),Re=N;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Me.__webglTexture,z,Re)}else if(M!==null&&z!==0){const Me=Ae.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Me.__webglTexture,z)}v=-1},this.readRenderTargetPixels=function(M,N,z,X,B,ie,he){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Ae.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&he!==void 0&&(_e=_e[he]),_e){ee.bindFramebuffer(D.FRAMEBUFFER,_e);try{const Me=M.texture,Re=Me.format,Be=Me.type;if(!W.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!W.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-X&&z>=0&&z<=M.height-B&&D.readPixels(N,z,X,B,Ge.convert(Re),Ge.convert(Be),ie)}finally{const Me=T!==null?Ae.get(T).__webglFramebuffer:null;ee.bindFramebuffer(D.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(M,N,z,X,B,ie,he){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Ae.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&he!==void 0&&(_e=_e[he]),_e){const Me=M.texture,Re=Me.format,Be=Me.type;if(!W.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!W.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=M.width-X&&z>=0&&z<=M.height-B){ee.bindFramebuffer(D.FRAMEBUFFER,_e);const Ce=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ce),D.bufferData(D.PIXEL_PACK_BUFFER,ie.byteLength,D.STREAM_READ),D.readPixels(N,z,X,B,Ge.convert(Re),Ge.convert(Be),0);const rt=T!==null?Ae.get(T).__webglFramebuffer:null;ee.bindFramebuffer(D.FRAMEBUFFER,rt);const dt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await du(D,dt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ce),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ie),D.deleteBuffer(Ce),D.deleteSync(dt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,N=null,z=0){M.isTexture!==!0&&(Li("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,M=arguments[1]);const X=Math.pow(2,-z),B=Math.floor(M.image.width*X),ie=Math.floor(M.image.height*X),he=N!==null?N.x:0,_e=N!==null?N.y:0;w.setTexture2D(M,0),D.copyTexSubImage2D(D.TEXTURE_2D,z,0,0,he,_e,B,ie),ee.unbindTexture()};const pt=D.createFramebuffer(),on=D.createFramebuffer();this.copyTextureToTexture=function(M,N,z=null,X=null,B=0,ie=null){M.isTexture!==!0&&(Li("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,M=arguments[1],N=arguments[2],ie=arguments[3]||0,z=null),ie===null&&(B!==0?(Li("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=B,B=0):ie=0);let he,_e,Me,Re,Be,Ce,rt,dt,It;const wt=M.isCompressedTexture?M.mipmaps[ie]:M.image;if(z!==null)he=z.max.x-z.min.x,_e=z.max.y-z.min.y,Me=z.isBox3?z.max.z-z.min.z:1,Re=z.min.x,Be=z.min.y,Ce=z.isBox3?z.min.z:0;else{const pn=Math.pow(2,-B);he=Math.floor(wt.width*pn),_e=Math.floor(wt.height*pn),M.isDataArrayTexture?Me=wt.depth:M.isData3DTexture?Me=Math.floor(wt.depth*pn):Me=1,Re=0,Be=0,Ce=0}X!==null?(rt=X.x,dt=X.y,It=X.z):(rt=0,dt=0,It=0);const at=Ge.convert(N.format),Le=Ge.convert(N.type);let zt;N.isData3DTexture?(w.setTexture3D(N,0),zt=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(w.setTexture2DArray(N,0),zt=D.TEXTURE_2D_ARRAY):(w.setTexture2D(N,0),zt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const ht=D.getParameter(D.UNPACK_ROW_LENGTH),Sn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ji=D.getParameter(D.UNPACK_SKIP_PIXELS),an=D.getParameter(D.UNPACK_SKIP_ROWS),Os=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,wt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,wt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Re),D.pixelStorei(D.UNPACK_SKIP_ROWS,Be),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ce);const bt=M.isDataArrayTexture||M.isData3DTexture,fn=N.isDataArrayTexture||N.isData3DTexture;if(M.isDepthTexture){const pn=Ae.get(M),qt=Ae.get(N),Qt=Ae.get(pn.__renderTarget),go=Ae.get(qt.__renderTarget);ee.bindFramebuffer(D.READ_FRAMEBUFFER,Qt.__webglFramebuffer),ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,go.__webglFramebuffer);for(let Ti=0;Ti<Me;Ti++)bt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ae.get(M).__webglTexture,B,Ce+Ti),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ae.get(N).__webglTexture,ie,It+Ti)),D.blitFramebuffer(Re,Be,he,_e,rt,dt,he,_e,D.DEPTH_BUFFER_BIT,D.NEAREST);ee.bindFramebuffer(D.READ_FRAMEBUFFER,null),ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(B!==0||M.isRenderTargetTexture||Ae.has(M)){const pn=Ae.get(M),qt=Ae.get(N);ee.bindFramebuffer(D.READ_FRAMEBUFFER,pt),ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,on);for(let Qt=0;Qt<Me;Qt++)bt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,pn.__webglTexture,B,Ce+Qt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,pn.__webglTexture,B),fn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,qt.__webglTexture,ie,It+Qt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,qt.__webglTexture,ie),B!==0?D.blitFramebuffer(Re,Be,he,_e,rt,dt,he,_e,D.COLOR_BUFFER_BIT,D.NEAREST):fn?D.copyTexSubImage3D(zt,ie,rt,dt,It+Qt,Re,Be,he,_e):D.copyTexSubImage2D(zt,ie,rt,dt,Re,Be,he,_e);ee.bindFramebuffer(D.READ_FRAMEBUFFER,null),ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else fn?M.isDataTexture||M.isData3DTexture?D.texSubImage3D(zt,ie,rt,dt,It,he,_e,Me,at,Le,wt.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(zt,ie,rt,dt,It,he,_e,Me,at,wt.data):D.texSubImage3D(zt,ie,rt,dt,It,he,_e,Me,at,Le,wt):M.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ie,rt,dt,he,_e,at,Le,wt.data):M.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ie,rt,dt,wt.width,wt.height,at,wt.data):D.texSubImage2D(D.TEXTURE_2D,ie,rt,dt,he,_e,at,Le,wt);D.pixelStorei(D.UNPACK_ROW_LENGTH,ht),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Sn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ji),D.pixelStorei(D.UNPACK_SKIP_ROWS,an),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Os),ie===0&&N.generateMipmaps&&D.generateMipmap(zt),ee.unbindTexture()},this.copyTextureToTexture3D=function(M,N,z=null,X=null,B=0){return M.isTexture!==!0&&(Li("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,X=arguments[1]||null,M=arguments[2],N=arguments[3],B=arguments[4]||0),Li('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,N,z,X,B)},this.initRenderTarget=function(M){Ae.get(M).__webglFramebuffer===void 0&&w.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?w.setTextureCube(M,0):M.isData3DTexture?w.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?w.setTexture2DArray(M,0):w.setTexture2D(M,0),ee.unbindTexture()},this.resetState=function(){S=0,E=0,T=null,ee.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}const Q=4.9,xt=26,Lt=16,Nt=-6.5,bi={4:{floorNumber:4,floorName:"PISO 4 • ROOFTOP & PENTHOUSE",subtitle:"«The Inner Circle» Terrace",badge:"Penthouse VIP",badgeColor:"amber",description:"Plunge pool basáltica, tumbonas de teca, barra en cobre martillado, pérgola bioclimática y vistas skyline.",floorY:4*Q,funnelStage:"High-Ticket / Membresía Anual",spots:[{id:"pool",name:"Plunge Pool Basáltica",icon:"🏊‍♀️",floor:4,alinaPose:"De pie al borde de la piscina infinita",alinaPos:{x:-2.5,y:4*Q+.06,z:-2.8},alinaRotY:.25,defaultAnim:"Idle",camPos:{x:-1.4,y:4*Q+1.55,z:.4},camTarget:{x:-2.5,y:4*Q+1.38,z:-2.8},macroPos:{x:-.5,y:4*Q+1.1,z:-4.2},macroTarget:{x:-2.2,y:4*Q+.45,z:-6.2},prompt:"Cinematic 85mm medium shot of 28yo Dutch-Latin woman Alina Van Dijk standing beside volcanic stone plunge pool on luxury rooftop deck at sunset, vivid copper red hair with natural soft waves, vivid emerald green eyes, light freckles, crimson lips, black silk resort wrap, turquoise water reflections, golden hour rim light --ar 9:16",script:"Cuando estás arriba, el ruido de abajo se disuelve. Aquí solo entra quien comprende que liderar también exige saber rendirse. [pausa de 2.0s] Bienvenido al círculo íntimo.",brolls:["B-Roll 1: Reflejos dorados sobre el agua turquesa de la plunge pool basáltica.","B-Roll 2: Tumbona de teca con copa de cristal tallado al atardecer."]},{id:"bar",name:"Barra de Cócteles Botánicos",icon:"🍸",floor:4,alinaPose:"Junto a la barra de cobre martillado",alinaPos:{x:4.5,y:4*Q+.06,z:-7.8},alinaRotY:-.35,defaultAnim:"Idle",camPos:{x:3.1,y:4*Q+1.55,z:-4.6},camTarget:{x:4.5,y:4*Q+1.38,z:-7.8},macroPos:{x:4.6,y:4*Q+1.45,z:-7.5},macroTarget:{x:5.5,y:4*Q+1.18,z:-9.5},prompt:"28yo Dutch-Latin woman Alina Van Dijk standing by polished hammered copper rooftop cocktail bar, vivid copper red hair, emerald green eyes, holding crystal martini glass, moody skyline bokeh, warm backlighting, 85mm f/1.4 --ar 9:16",script:"La mente necesita un antídoto contra el exceso de control. Este es el mío. [pausa de 1.5s] Salud por los que no le temen a su propia vulnerabilidad.",brolls:["B-Roll 1: Botellas ámbar retroiluminadas sobre estantería de latón.","B-Roll 2: Macro de copa de martini sobre barra de cobre martillado."]}]},3:{floorNumber:3,floorName:"PISO 3 • THE MIND SANCTUARY",subtitle:"Estudio Clínico & Boudoir",badge:"Trabajo & Terapia",badgeColor:"purple",description:"Estudio de podcast con Shure SM7B, biblioteca clínica, diván de cuero negro y laboratorio sensorial SSC.",floorY:3*Q,funnelStage:"Conversión Fanvue & Telegram VIP",spots:[{id:"podcast",name:"The Mind Sanctuary (Podcast)",icon:"🎙️",floor:3,alinaPose:"Frente al escritorio clínico y Shure SM7B",alinaPos:{x:-4.8,y:3*Q,z:-8.8},alinaRotY:.15,defaultAnim:"Idle",camPos:{x:-4.1,y:3*Q+1.52,z:-5.4},camTarget:{x:-4.8,y:3*Q+1.42,z:-8.8},macroPos:{x:-3.5,y:3*Q+1.35,z:-6.8},macroTarget:{x:-4.5,y:3*Q+1.05,z:-8.2},prompt:"Cinematic medium close-up of 28yo Dutch-Latin woman Alina Van Dijk in dark loft podcast studio SET-01, vivid copper red hair, vivid emerald green eyes, light freckles, Shure SM7B microphone on boom arm, exposed dark brick wall, warm Edison bulb, bookshelf with psychoanalysis books, 85mm f/1.8 --ar 9:16",script:"Llevas diez horas resolviendo problemas de otros... ¿cuándo fue la última vez que alguien tomó el mando por ti? [pausa de 2.0s] Entra. Cierra la puerta. Esta noche decido yo.",brolls:["B-Roll 1: Vapor de café espresso sobre cuaderno de notas clínicas en nogal.","B-Roll 2: Rack focus por lomos antiguos de Bataille y Foucault junto a vaso ámbar."]},{id:"boudoir",name:"Boudoir Velvet & Terapia SSC",icon:"🗝️",floor:3,alinaPose:"En el laboratorio sensorial junto al micrófono 3Dio",alinaPos:{x:4.5,y:3*Q,z:-7.5},alinaRotY:-.25,defaultAnim:"Idle",camPos:{x:3.4,y:3*Q+1.5,z:-4},camTarget:{x:4.5,y:3*Q+1.35,z:-7.5},macroPos:{x:3.6,y:3*Q+1.15,z:-6.2},macroTarget:{x:4.8,y:3*Q+.9,z:-7.9},prompt:"28yo Dutch-Latin woman Alina Van Dijk in luxury chiaroscuro boudoir SET-04, emerald velvet tufted headboard behind her, warm candlelight shadows, silk shibari rope rack in soft bokeh, hypnotic emerald gaze, 85mm prime lens --ar 9:16",script:"El poder real nunca se impone a la fuerza. Se entrega voluntariamente a quien sabe sostenerlo sin juicio. [pausa de 2.0s] ¿Estás listo?",brolls:["B-Roll 1: Paneo macro por madejas de cuerda shibari lila y negra sobre satén.","B-Roll 2: Micrófono binaural 3Dio y antifaz de cuero pulido bajo luz de vela."]}]},2:{floorNumber:2,floorName:"PISO 2 • RESIDENCIA PRIVADA",subtitle:"Hogar Privado («Donde Nace Todo»)",badge:"Residencia Alina",badgeColor:"copper",description:"4 estancias divididas con tabiques reales: tocador vanity con 12 bombillas, baño spa con tina basáltica, cocina de autor y suite principal.",floorY:2*Q,funnelStage:"Top-Funnel / Intimidad Cotidiana",spots:[{id:"vanity",name:"El Tocador Vanity & Vestidor",icon:"💄",floor:2,alinaPose:"Frente al tocador iluminado y espejo vanity",alinaPos:{x:-.4,y:2*Q,z:-10.8},alinaRotY:.12,defaultAnim:"Idle",camPos:{x:.25,y:2*Q+1.5,z:-8.1},camTarget:{x:-.4,y:2*Q+1.38,z:-10.8},macroPos:{x:.45,y:2*Q+1.15,z:-11.6},macroTarget:{x:-.35,y:2*Q+.85,z:-13.1},prompt:"Intimate cinematic shot of 28yo Dutch-Latin woman Alina Van Dijk by luxury dark walnut vanity table in Piso 2 suite, vivid copper red hair with soft waves, vivid emerald green eyes, light natural freckles, crimson lips, glowing round vanity bulbs in mirror behind her, black silk outfit, 85mm f/1.4 --ar 9:16",script:"Te pasas el día sosteniendo el personaje... fingiendo que no pesa. [pausa de 2.0s] Frente a este espejo solo existe la verdad. Déjame ver quién eres cuando nadie te está evaluando.",brolls:["B-Roll 1: Macro slider sobre labial carmesí dorado y frascos ámbar de perfume.","B-Roll 2: Aro de bombillas cálidas reflejado en el espejo biselado."]},{id:"bath",name:"Baño Spa & Tina Monolítica",icon:"🛁",floor:2,alinaPose:"Recostada en tina basáltica entre velas",alinaPos:{x:-9,y:2*Q+.68,z:-7.8},alinaRotY:.35,defaultAnim:"Laying",camPos:{x:-6.8,y:2*Q+1.65,z:-4.6},camTarget:{x:-9,y:2*Q+.72,z:-7.8},macroPos:{x:-7.4,y:2*Q+1.1,z:-6.2},macroTarget:{x:-8.8,y:2*Q+.55,z:-7.5},prompt:"28yo Dutch-Latin woman Alina Van Dijk reclining in freestanding black basalt stone bathtub filled with warm water, copper hair pinned up loosely, emerald green eyes, surrounded by flickering scented candles and frosted glass partition, chiaroscuro luxury spa, 85mm f/1.8 --ar 9:16",script:"El cuerpo guarda todo lo que la mente reprime. Cierra los ojos... siente el peso soltarse en el agua. [pausa de 2.0s] Yo me encargo del resto.",brolls:["B-Roll 1: Llamas de velas aromáticas reflejadas sobre piedra basáltica negra.","B-Roll 2: Bandeja de teca con sales minerales y toallas de algodón enrolladas."]},{id:"kitchen",name:"Cocina de Autor & Isla Mármol",icon:"☕",floor:2,alinaPose:"Junto a la isla de mármol Nero Marquina",alinaPos:{x:6,y:2*Q,z:-7.6},alinaRotY:-.45,defaultAnim:"Idle",camPos:{x:4.5,y:2*Q+1.5,z:-4.2},camTarget:{x:6.2,y:2*Q+1.35,z:-7.6},macroPos:{x:5.5,y:2*Q+1.25,z:-6.6},macroTarget:{x:7.2,y:2*Q+.98,z:-8.2},prompt:"28yo Dutch-Latin woman Alina Van Dijk standing beside black Nero Marquina marble kitchen island, copper red waves, emerald eyes, brass pendant lights overhead, morning espresso cup on marble counter, 85mm f/1.8 --ar 9:16",script:"Antes de que empiece el caos de tu agenda... regálate tres minutos de silencio absoluto. [pausa de 1.5s] Respira conmigo.",brolls:["B-Roll 1: Vapor ascendiendo desde taza de espresso sobre mármol Nero Marquina.","B-Roll 2: Lámparas colgantes de latón sobre copas de cristal suspendidas."]},{id:"suite",name:"Suite Principal & Balcón",icon:"🛏️",floor:2,alinaPose:"En la cama King de lino carbón",alinaPos:{x:-.5,y:2*Q+.92,z:-3.2},alinaRotY:0,defaultAnim:"Laying",camPos:{x:1.4,y:2*Q+1.68,z:.1},camTarget:{x:-.5,y:2*Q+.95,z:-3.2},macroPos:{x:-2.2,y:2*Q+1.25,z:-1.6},macroTarget:{x:-2.2,y:2*Q+.85,z:-4.2},prompt:"28yo Dutch-Latin woman Alina Van Dijk resting on king bed dressed in charcoal linen sheets, emerald velvet headboard, warm bedside table lamps, Eixample balcony doors behind, 85mm f/1.4 --ar 9:16",script:"Apaga la pantalla. Deja de repasar mentalmente tus pendientes de mañana. [pausa de 2.0s] Tu mente necesita rendirse para poder renacer.",brolls:["B-Roll 1: Lámpara de mesilla proyectando luz ámbar sobre lino carbón.","B-Roll 2: Copa de vino tinto en mesa del balcón modernista al atardecer."]}]},1:{floorNumber:1,floorName:"PISO 1 • LE VELVET CAFÉ",subtitle:"Cafetería Especialidad & Balcón",badge:"Lifestyle Diurno",badgeColor:"emerald",description:"Barra de roble con cafetera La Marzocco en cobre, vitrina de repostería, 4 mesas Carrara con sillas Thonet y balcón.",floorY:1*Q,funnelStage:"Descubrimiento & Street Lifestyle",spots:[{id:"cafe",name:"Barra La Marzocco & Mesas Carrara",icon:"🥐",floor:1,alinaPose:"De pie junto a las mesas de mármol Carrara",alinaPos:{x:-2,y:1*Q,z:-3.5},alinaRotY:.2,defaultAnim:"Idle",camPos:{x:-.9,y:1*Q+1.5,z:-.3},camTarget:{x:-2,y:1*Q+1.35,z:-3.5},macroPos:{x:-1.4,y:1*Q+1.45,z:-6.5},macroTarget:{x:0,y:1*Q+1.25,z:-9.5},prompt:"28yo Dutch-Latin woman Alina Van Dijk inside boutique Barcelona specialty coffee lounge, Carrara marble bistro tables, oak bar with copper La Marzocco espresso machine behind, soft morning sunlight, 85mm f/2.0 --ar 9:16",script:"La productividad sin introspección es solo ansiedad disfrazada de éxito. [pausa de 1.5s] ¿Tú qué buscas hoy?",brolls:["B-Roll 1: Cafetera La Marzocco en cobre pulido extrayendo espresso.","B-Roll 2: Mesa bistró de mármol blanco junto al ventanal del Eixample."]},{id:"walk_cafe",name:"Pasarela Interior Café (Walking)",icon:"🚶‍♀️",floor:1,alinaPose:"Caminando entre mesas hacia el balcón",alinaPos:{x:2.8,y:1*Q,z:-3},alinaRotY:-.15,defaultAnim:"Walk",camPos:{x:2.2,y:1*Q+1.48,z:.4},camTarget:{x:2.8,y:1*Q+1.25,z:-3},macroPos:{x:4.5,y:1*Q+1.1,z:-2.2},macroTarget:{x:3.5,y:1*Q+.78,z:-3.2},prompt:"Walking selfie style shot of 28yo Dutch-Latin woman Alina Van Dijk walking gracefully across specialty coffee lounge toward wrought-iron balcony, natural copper hair movement, warm daylight --ar 9:16",script:"Tres minutos para ordenar la cabeza antes de entrar en sesión.",brolls:["B-Roll 1: Hojas de monstera y luz natural atravesando el balcón.","B-Roll 2: Vitrina iluminada con repostería artesanal."]}]},0:{floorNumber:0,floorName:"PLANTA BAJA • CABARET & PARKING",subtitle:"Nocturne Speakeasy & Exterior",badge:"Portado de Unity",badgeColor:"rose",description:"Parking exterior 28m×18m con 8 líneas amarillas, 4 coches, 3 farolas, marquesina VIP con alfombra roja, pista neón, barra y piano de cola.",floorY:0,funnelStage:"Mundo Exterior / Viral Dance & Reels",spots:[{id:"cabaret",name:"Pista Neón & Piano de Cola",icon:"🎷",floor:0,alinaPose:"Bailando en el escenario junto al piano",alinaPos:{x:0,y:.45,z:-10.5},alinaRotY:0,defaultAnim:"Rumba",camPos:{x:1.5,y:1.85,z:-6.8},camTarget:{x:0,y:1.45,z:-10.5},macroPos:{x:-3.5,y:1.55,z:-7},macroTarget:{x:-5.8,y:.95,z:-9.5},prompt:"28yo Dutch-Latin woman Alina Van Dijk on elevated wood stage inside Nocturne speakeasy club, crimson velvet curtains, glowing cyan floor rim, grand black lacquered piano nearby, dramatic chiaroscuro spotlights, 85mm f/1.4 --ar 9:16",script:"Las mejores conversaciones ocurren cuando la ciudad se va a dormir y caen todas las máscaras. [pausa de 2.0s] ¿Entras?",brolls:["B-Roll 1: Teclas blancas y negras del piano de cola bajo foco cálido.","B-Roll 2: Copa iluminada sobre mesa de cóctel con vela parpadeante."]},{id:"parking",name:"Parking Exterior & Alfombra VIP",icon:"🚗",floor:0,alinaPose:"Llegando por la alfombra roja bajo el neón NOCTURNE",alinaPos:{x:0,y:.16,z:3.4},alinaRotY:0,defaultAnim:"Walk",camPos:{x:1.8,y:1.55,z:7.4},camTarget:{x:0,y:1.25,z:3.4},macroPos:{x:-3.2,y:1.35,z:9.2},macroTarget:{x:-3.8,y:.7,z:12.5},prompt:"Full body evening street shot of 28yo Dutch-Latin woman Alina Van Dijk walking on red carpet under glowing magenta NOCTURNE marquee sign, parked luxury cars and glowing streetlamps on wet asphalt behind, 85mm f/1.8 --ar 9:16",script:"Deja el ruido afuera. Aquí dentro las reglas las pongo yo.",brolls:["B-Roll 1: Reflejo de farola cálida y neón magenta sobre capó negro brillante.","B-Roll 2: Postes dorados y cordón de terciopelo en la entrada del club."]}]}};class m_ extends Id{constructor(){super();const e=new Si;e.deleteAttribute("uv");const t=new Ne({side:Xt}),n=new Ne,i=new xn(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new Oe(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new Oe(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new Oe(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new Oe(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new Oe(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const d=new Oe(e,n);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);const h=new Oe(e,n);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);const u=new Oe(e,ls(50));u.position.set(-16.116,14.37,8.208),u.scale.set(.1,2.428,2.739),this.add(u);const p=new Oe(e,ls(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const g=new Oe(e,ls(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const x=new Oe(e,ls(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);const m=new Oe(e,ls(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const f=new Oe(e,ls(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function ls(s){const e=new zn;return e.color.setScalar(s),e}class g_ extends df{constructor(e){super(e),this.type=kn}parse(e){const o=function(T,v){switch(T){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(v||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(v||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(v||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(v||""))}},h=function(T,v,_){v=v||1024;let O=T.pos,U=-1,F=0,j="",k=String.fromCharCode.apply(null,new Uint16Array(T.subarray(O,O+128)));for(;0>(U=k.indexOf(`
`))&&F<v&&O<T.byteLength;)j+=k,F+=k.length,O+=128,k+=String.fromCharCode.apply(null,new Uint16Array(T.subarray(O,O+128)));return-1<U?(T.pos+=F+U+1,j+k.slice(0,U)):!1},u=function(T){const v=/^#\?(\S+)/,_=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,C=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,O=/^\s*FORMAT=(\S+)\s*$/,U=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,F={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let j,k;for((T.pos>=T.byteLength||!(j=h(T)))&&o(1,"no header found"),(k=j.match(v))||o(3,"bad initial token"),F.valid|=1,F.programtype=k[1],F.string+=j+`
`;j=h(T),j!==!1;){if(F.string+=j+`
`,j.charAt(0)==="#"){F.comments+=j+`
`;continue}if((k=j.match(_))&&(F.gamma=parseFloat(k[1])),(k=j.match(C))&&(F.exposure=parseFloat(k[1])),(k=j.match(O))&&(F.valid|=2,F.format=k[1]),(k=j.match(U))&&(F.valid|=4,F.height=parseInt(k[1],10),F.width=parseInt(k[2],10)),F.valid&2&&F.valid&4)break}return F.valid&2||o(3,"missing format specifier"),F.valid&4||o(3,"missing image size specifier"),F},p=function(T,v,_){const C=v;if(C<8||C>32767||T[0]!==2||T[1]!==2||T[2]&128)return new Uint8Array(T);C!==(T[2]<<8|T[3])&&o(3,"wrong scanline width");const O=new Uint8Array(4*v*_);O.length||o(4,"unable to allocate buffer space");let U=0,F=0;const j=4*C,k=new Uint8Array(4),Z=new Uint8Array(j);let Y=_;for(;Y>0&&F<T.byteLength;){F+4>T.byteLength&&o(1),k[0]=T[F++],k[1]=T[F++],k[2]=T[F++],k[3]=T[F++],(k[0]!=2||k[1]!=2||(k[2]<<8|k[3])!=C)&&o(3,"bad rgbe scanline format");let oe=0,le;for(;oe<j&&F<T.byteLength;){le=T[F++];const Pe=le>128;if(Pe&&(le-=128),(le===0||oe+le>j)&&o(3,"bad scanline data"),Pe){const ke=T[F++];for(let K=0;K<le;K++)Z[oe++]=ke}else Z.set(T.subarray(F,F+le),oe),oe+=le,F+=le}const me=C;for(let Pe=0;Pe<me;Pe++){let ke=0;O[U]=Z[Pe+ke],ke+=C,O[U+1]=Z[Pe+ke],ke+=C,O[U+2]=Z[Pe+ke],ke+=C,O[U+3]=Z[Pe+ke],U+=4}Y--}return O},g=function(T,v,_,C){const O=T[v+3],U=Math.pow(2,O-128)/255;_[C+0]=T[v+0]*U,_[C+1]=T[v+1]*U,_[C+2]=T[v+2]*U,_[C+3]=1},x=function(T,v,_,C){const O=T[v+3],U=Math.pow(2,O-128)/255;_[C+0]=br.toHalfFloat(Math.min(T[v+0]*U,65504)),_[C+1]=br.toHalfFloat(Math.min(T[v+1]*U,65504)),_[C+2]=br.toHalfFloat(Math.min(T[v+2]*U,65504)),_[C+3]=br.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const f=u(m),R=f.width,A=f.height,b=p(m.subarray(m.pos),R,A);let P,S,E;switch(this.type){case sn:E=b.length/4;const T=new Float32Array(E*4);for(let _=0;_<E;_++)g(b,_*4,T,_*4);P=T,S=sn;break;case kn:E=b.length/4;const v=new Uint16Array(E*4);for(let _=0;_<E;_++)x(b,_*4,v,_*4);P=v,S=kn;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:R,height:A,data:P,header:f.string,gamma:f.gamma,exposure:f.exposure,type:S}}setDataType(e){return this.type=e,this}load(e,t,n,i){function r(o,a){switch(o.type){case sn:case kn:o.colorSpace=jt,o.minFilter=kt,o.magFilter=kt,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,r,n,i)}}class __{constructor(e,t){this.scene=e,this.renderer=t,this.lights=[],this.flickerCandles=[],this.emissiveRefs=[],this.mode="night",this.hdrDayRT=null,this.hdrNightRT=null,this.depthFogDisabled=!1,this._setupEnvironment(),this._setupSkyDome(),this._setupSkylineSilhouettes(),this._setupGlobalLights(),this._loadPhotographicHDRIs()}_loadPhotographicHDRIs(){const e=new lo(this.renderer);e.compileEquirectangularShader();const t=new g_;t.load("./polyhaven/hdri/hdri_night.hdr",n=>{n.mapping=sr,this.hdrNightRT=e.fromEquirectangular(n),n.dispose(),this.mode==="night"&&!this.depthFogDisabled&&this._applyHDRI("night")},void 0,n=>console.warn("[HDRI Night]",n)),t.load("./polyhaven/hdri/hdri_day.hdr",n=>{n.mapping=sr,this.hdrDayRT=e.fromEquirectangular(n),n.dispose(),this.mode==="day"&&!this.depthFogDisabled&&this._applyHDRI("day")},void 0,n=>console.warn("[HDRI Day]",n))}_applyHDRI(e){const t=e==="day"?this.hdrDayRT:this.hdrNightRT;t&&(this.scene.environment=t.texture,this.scene.background=t.texture,this.scene.backgroundBlurriness=.04,this.scene.backgroundIntensity=e==="day"?1.05:.85,this.scene.environmentIntensity=e==="day"?1:.72,this.skyDome&&(this.skyDome.visible=!1))}_setupEnvironment(){this.renderer.toneMapping=id,this.renderer.toneMappingExposure=1.18,this.renderer.outputColorSpace=Rt;const e=new lo(this.renderer);e.compileEquirectangularShader();const t=new m_;this.envRT=e.fromScene(t,.04),this.scene.environment=this.envRT.texture,this.scene.environmentIntensity=.55,t.dispose(),e.dispose()}_setupSkyDome(){const e=new Oi(140,32,24);this.skyUniforms={topColor:{value:new we(395539)},midColor:{value:new we(1317677)},horizonColor:{value:new we(2628646)},sunDir:{value:new L(.55,.35,-.75).normalize()},sunStrength:{value:0},starOpacity:{value:1}};const t=new Pn({side:Xt,depthWrite:!1,uniforms:this.skyUniforms,vertexShader:`
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
      `});this.skyDome=new Oe(e,t),this.scene.add(this.skyDome)}_setupSkylineSilhouettes(){this.skylineGroup=new Gt;const e=new Ne({color:1053466,roughness:.9,metalness:.1}),t=document.createElement("canvas");t.width=128,t.height=256;const n=t.getContext("2d");n.fillStyle="#0c0e14",n.fillRect(0,0,128,256);for(let l=8;l<248;l+=16)for(let c=8;c<120;c+=16)(c*7+l*13)%5===0&&(n.fillStyle=(c+l)%3===0?"#fbbf24":"#7dd3fc",n.fillRect(c,l,8,8));const i=new Nd(t);i.colorSpace=Rt,i.wrapS=Mn,i.wrapT=Mn,i.repeat.set(2,4),this.skylineMat=new Ne({color:1185054,emissiveMap:i,emissive:new we(16766888),emissiveIntensity:.9,roughness:.85});const r=26;for(let l=0;l<r;l++){const c=l/r*Math.PI*2,d=52+l%3*10,h=6+l%4*2.5,u=14+l%5*6.5,p=6+(l+1)%3*2.2,g=new Oe(new Si(h,u,p),l%2===0?this.skylineMat:e);g.position.set(Math.cos(c)*d,u/2-1,Math.sin(c)*d),g.rotation.y=-c,this.skylineGroup.add(g)}const o=new Ne({color:1184793,roughness:.95,metalness:.05}),a=new Oe(new uo(110,48),o);a.rotation.x=-Math.PI/2,a.position.y=-.32,a.receiveShadow=!0,this.skylineGroup.add(a),this.scene.add(this.skylineGroup)}_setupGlobalLights(){this.hemiLight=new hf(9414870,2497815,.75),this.scene.add(this.hemiLight),this.dirLight=new Hd(16764825,1.2),this.dirLight.position.set(22,26,20),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.set(2048,2048),this.dirLight.shadow.camera.near=2,this.dirLight.shadow.camera.far=95,this.dirLight.shadow.camera.left=-28,this.dirLight.shadow.camera.right=28,this.dirLight.shadow.camera.top=28,this.dirLight.shadow.camera.bottom=-28,this.dirLight.shadow.bias=-5e-4,this.scene.add(this.dirLight)}registerLight(e,{dayIntensity:t=.8,nightIntensity:n=2,flicker:i=!1}={}){this.lights.push({light:e,dayIntensity:t,nightIntensity:n,baseNight:n}),i&&this.flickerCandles.push({light:e,dayIntensity:t,nightIntensity:n,phase:Math.random()*10}),e.intensity=this.mode==="day"?t:n}registerEmissive(e,{dayIntensity:t=.2,nightIntensity:n=1.6}={}){this.emissiveRefs.push({material:e,dayIntensity:t,nightIntensity:n}),e.emissiveIntensity=this.mode==="day"?t:n}setMode(e){this.mode=e,e==="day"?(this.skyUniforms.topColor.value.setHex(2644124),this.skyUniforms.midColor.value.setHex(8168143),this.skyUniforms.horizonColor.value.setHex(15969910),this.skyUniforms.sunStrength.value=1,this.skyUniforms.starOpacity.value=0,this.scene.fog=new so(14333854,.0055),this.scene.environmentIntensity=.95,this.hemiLight.color.setHex(16770764),this.hemiLight.groundColor.setHex(4930352),this.hemiLight.intensity=1.05,this.dirLight.color.setHex(16765593),this.dirLight.position.set(24,17,22),this.dirLight.intensity=2.8,this.skylineMat.emissiveIntensity=.08,this.renderer.toneMappingExposure=1.15):(this.skyUniforms.topColor.value.setHex(329489),this.skyUniforms.midColor.value.setHex(1120041),this.skyUniforms.horizonColor.value.setHex(2562339),this.skyUniforms.sunStrength.value=0,this.skyUniforms.starOpacity.value=1,this.scene.fog=new so(658710,.009),this.scene.environmentIntensity=.48,this.hemiLight.color.setHex(3821434),this.hemiLight.groundColor.setHex(1971472),this.hemiLight.intensity=.65,this.dirLight.color.setHex(8037608),this.dirLight.position.set(-18,28,22),this.dirLight.intensity=.65,this.skylineMat.emissiveIntensity=1.1,this.renderer.toneMappingExposure=1.25);for(const t of this.lights)t.light.intensity=e==="day"?t.dayIntensity:t.nightIntensity;for(const t of this.emissiveRefs)t.material.emissiveIntensity=e==="day"?t.dayIntensity:t.nightIntensity;this.depthFogDisabled||(e==="day"&&this.hdrDayRT||e==="night"&&this.hdrNightRT?this._applyHDRI(e):(this.envRT&&(this.scene.environment=this.envRT.texture),this.scene.background=null,this.skyDome&&(this.skyDome.visible=!0)))}update(e){for(const t of this.flickerCandles){const n=this.mode==="day"?t.dayIntensity:t.nightIntensity;t.light.intensity=n*(.85+Math.sin(e*9.5+t.phase)*.1+Math.sin(e*17+t.phase)*.05)}}setDepthFogDisabled(e){this.depthFogDisabled=e,e?(this.scene.fog=null,this.scene.background=null,this.skyDome&&(this.skyDome.visible=!1)):this.setMode(this.mode)}}function Bc(s,e){if(e===Fh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Ha||e===_d){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Ha)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class Yd extends Vi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new S_(t)}),this.register(function(t){return new b_(t)}),this.register(function(t){return new D_(t)}),this.register(function(t){return new L_(t)}),this.register(function(t){return new N_(t)}),this.register(function(t){return new T_(t)}),this.register(function(t){return new w_(t)}),this.register(function(t){return new A_(t)}),this.register(function(t){return new R_(t)}),this.register(function(t){return new M_(t)}),this.register(function(t){return new C_(t)}),this.register(function(t){return new E_(t)}),this.register(function(t){return new P_(t)}),this.register(function(t){return new I_(t)}),this.register(function(t){return new v_(t)}),this.register(function(t){return new U_(t)}),this.register(function(t){return new F_(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=ir.extractUrlBase(e);o=ir.resolveURL(c,this.path)}else o=ir.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new pl(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(d){t(d),r.manager.itemEnd(e)},a)}catch(d){a(d)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===qd){try{o[Qe.KHR_BINARY_GLTF]=new O_(e)}catch(h){i&&i(h);return}r=JSON.parse(o[Qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new $_(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const h=this.pluginCallbacks[d](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let d=0;d<r.extensionsUsed.length;++d){const h=r.extensionsUsed[d],u=r.extensionsRequired||[];switch(h){case Qe.KHR_MATERIALS_UNLIT:o[h]=new y_;break;case Qe.KHR_DRACO_MESH_COMPRESSION:o[h]=new B_(r,this.dracoLoader);break;case Qe.KHR_TEXTURE_TRANSFORM:o[h]=new k_;break;case Qe.KHR_MESH_QUANTIZATION:o[h]=new z_;break;default:u.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function x_(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class v_{constructor(e){this.parser=e,this.name=Qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const d=new we(16777215);l.color!==void 0&&d.setRGB(l.color[0],l.color[1],l.color[2],jt);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Hd(d),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new xn(d),c.distance=h;break;case"spot":c=new zd(d),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Qn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class y_{constructor(){this.name=Qe.KHR_MATERIALS_UNLIT}getMaterialType(){return zn}extendParams(e,t,n){const i=[];e.color=new we(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],jt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Rt))}return Promise.all(i)}}class M_{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class S_{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ee(a,a)}return Promise.all(r)}}class b_{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class E_{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class T_{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new we(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],jt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Rt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class w_{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class A_{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new we().setRGB(a[0],a[1],a[2],jt),Promise.all(r)}}class R_{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class C_{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new we().setRGB(a[0],a[1],a[2],jt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Rt)),Promise.all(r)}}class I_{constructor(e){this.parser=e,this.name=Qe.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class P_{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class D_{constructor(e){this.parser=e,this.name=Qe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class L_{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class N_{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class U_{constructor(e){this.name=Qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,d=i.count,h=i.byteStride,u=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(d,h,u,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(d*h);return o.decodeGltfBuffer(new Uint8Array(p),d,h,u,i.mode,i.filter),p})})}else return null}}class F_{constructor(e){this.name=Qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==vn.TRIANGLES&&c.mode!==vn.TRIANGLE_STRIP&&c.mode!==vn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(d=>(l[c]=d,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const d=c.pop(),h=d.isGroup?d.children:[d],u=c[0].count,p=[];for(const g of h){const x=new We,m=new L,f=new hn,R=new L(1,1,1),A=new Wu(g.geometry,g.material,u);for(let b=0;b<u;b++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,b),l.SCALE&&R.fromBufferAttribute(l.SCALE,b),A.setMatrixAt(b,x.compose(m,f,R));for(const b in l)if(b==="_COLOR_0"){const P=l[b];A.instanceColor=new Ga(P.array,P.itemSize,P.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,l[b]);Et.prototype.copy.call(A,g),this.parser.assignFinalMaterial(A),p.push(A)}return d.isGroup?(d.clear(),d.add(...p),d):p[0]}))}}const qd="glTF",js=12,kc={JSON:1313821514,BIN:5130562};class O_{constructor(e){this.name=Qe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,js),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==qd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-js,r=new DataView(e,js);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===kc.JSON){const c=new Uint8Array(e,js+o,a);this.content=n.decode(c)}else if(l===kc.BIN){const c=js+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class B_{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const d in o){const h=Ya[d]||d.toLowerCase();a[h]=o[d]}for(const d in e.attributes){const h=Ya[d]||d.toLowerCase();if(o[d]!==void 0){const u=n.accessors[e.attributes[d]],p=Ms[u.componentType];c[h]=p.name,l[h]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(d){return new Promise(function(h,u){i.decodeDracoFile(d,function(p){for(const g in p.attributes){const x=p.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}h(p)},a,c,jt,u)})})}}class k_{constructor(){this.name=Qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class z_{constructor(){this.name=Qe.KHR_MESH_QUANTIZATION}}class Kd extends hr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,d=i-t,h=(n-t)/d,u=h*h,p=u*h,g=e*c,x=g-c,m=-2*p+3*u,f=p-u,R=1-m,A=f-u+h;for(let b=0;b!==a;b++){const P=o[x+b+a],S=o[x+b+l]*d,E=o[g+b+a],T=o[g+b]*d;r[b]=R*P+A*S+m*E+f*T}return r}}const H_=new hn;class V_ extends Kd{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return H_.fromArray(r).normalize().toArray(r),r}}const vn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ms={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},zc={9728:Zt,9729:kt,9984:rd,9985:Xr,9986:Js,9987:Bn},Hc={33071:On,33648:Qr,10497:Mn},$o={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ya={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},pi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},G_={CUBICSPLINE:void 0,LINEAR:ar,STEP:or},Zo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function W_(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ne({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ri})),s.DefaultMaterial}function Di(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Qn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function X_(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,d=e.length;c<d;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,d=e.length;c<d;c++){const h=e[c];if(n){const u=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(u)}if(i){const u=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(u)}if(r){const u=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(u)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const d=c[0],h=c[1],u=c[2];return n&&(s.morphAttributes.position=d),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=u),s.morphTargetsRelative=!0,s})}function j_(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Y_(s){let e;const t=s.extensions&&s.extensions[Qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Jo(t.attributes):e=s.indices+":"+Jo(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Jo(s.targets[n]);return e}function Jo(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function qa(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function q_(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const K_=new We;class $_{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new x_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new kd(this.options.manager):this.textureLoader=new mf(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new pl(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Di(r,a,i),Qn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,d]of o.children.entries())r(d,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Qe.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(ir.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=$o[i.type],a=Ms[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Jt(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=$o[i.type],c=Ms[i.componentType],d=c.BYTES_PER_ELEMENT,h=d*l,u=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let x,m;if(p&&p!==h){const f=Math.floor(u/p),R="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let A=t.cache.get(R);A||(x=new c(a,f*p,i.count*p/d),A=new ku(x,p/d),t.cache.add(R,A)),m=new cl(A,l,u%p/d,g)}else a===null?x=new c(i.count*l):x=new c(a,u,i.count*l),m=new Jt(x,l,g);if(i.sparse!==void 0){const f=$o.SCALAR,R=Ms[i.sparse.indices.componentType],A=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,P=new R(o[1],A,i.sparse.count*f),S=new c(o[2],b,i.sparse.count*l);a!==null&&(m=new Jt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let E=0,T=P.length;E<T;E++){const v=P[E];if(m.setX(v,S[E*l]),l>=2&&m.setY(v,S[E*l+1]),l>=3&&m.setZ(v,S[E*l+2]),l>=4&&m.setW(v,S[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(d){d.flipY=!1,d.name=o.name||a.name||"",d.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(d.name=a.uri);const u=(r.samplers||{})[o.sampler]||{};return d.magFilter=zc[u.magFilter]||kt,d.minFilter=zc[u.minFilter]||Bn,d.wrapS=Hc[u.wrapS]||Mn,d.wrapT=Hc[u.wrapT]||Mn,d.generateMipmaps=!d.isCompressedTexture&&d.minFilter!==Zt&&d.minFilter!==kt,i.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const u=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(u),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(l).then(function(h){return new Promise(function(u,p){let g=u;t.isImageBitmapLoader===!0&&(g=function(x){const m=new Ut(x);m.needsUpdate=!0,u(m)}),t.load(ir.resolveURL(h,r.path),g,void 0,p)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),Qn(h,o),h.userData.mimeType=o.mimeType||q_(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=d,d}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Qe.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Qe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Qe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Ld,Hn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Dd,Hn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ne}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Qe.KHR_MATERIALS_UNLIT]){const h=i[Qe.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new we(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const u=h.baseColorFactor;a.color.setRGB(u[0],u[1],u[2],jt),a.opacity=u[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Rt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Fn);const d=r.alphaMode||Zo.OPAQUE;if(d===Zo.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,d===Zo.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==zn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ee(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==zn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==zn){const h=r.emissiveFactor;a.emissive=new we().setRGB(h[0],h[1],h[2],jt)}return r.emissiveTexture!==void 0&&o!==zn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Rt)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),Qn(h,r),t.associations.set(h,{materials:e}),r.extensions&&Di(i,h,r),h})}createUniqueName(e){const t=ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Vc(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],d=Y_(c),h=i[d];if(h)o.push(h.promise);else{let u;c.extensions&&c.extensions[Qe.KHR_DRACO_MESH_COMPRESSION]?u=r(c):u=Vc(new rn,c,t),i[d]={primitive:c,promise:u},o.push(u)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const d=o[l].material===void 0?W_(this.cache):this.getDependency("material",o[l].material);a.push(d)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),d=l[l.length-1],h=[];for(let p=0,g=d.length;p<g;p++){const x=d[p],m=o[p];let f;const R=c[p];if(m.mode===vn.TRIANGLES||m.mode===vn.TRIANGLE_STRIP||m.mode===vn.TRIANGLE_FAN||m.mode===void 0)f=r.isSkinnedMesh===!0?new Hu(x,R):new Oe(x,R),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===vn.TRIANGLE_STRIP?f.geometry=Bc(f.geometry,_d):m.mode===vn.TRIANGLE_FAN&&(f.geometry=Bc(f.geometry,Ha));else if(m.mode===vn.LINES)f=new Yu(x,R);else if(m.mode===vn.LINE_STRIP)f=new fl(x,R);else if(m.mode===vn.LINE_LOOP)f=new qu(x,R);else if(m.mode===vn.POINTS)f=new Ku(x,R);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&j_(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),Qn(f,r),m.extensions&&Di(i,f,m),t.assignFinalMaterial(f),h.push(f)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return r.extensions&&Di(i,h[0],r),h[0];const u=new Gt;r.extensions&&Di(i,u,r),t.associations.set(u,{meshes:e});for(let p=0,g=h.length;p<g;p++)u.add(h[p]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Wt(io.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new gl(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Qn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,d=o.length;c<d;c++){const h=o[c];if(h){a.push(h);const u=new We;r!==null&&u.fromArray(r.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new hl(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],d=[];for(let h=0,u=i.channels.length;h<u;h++){const p=i.channels[h],g=i.samplers[p.sampler],x=p.target,m=x.node,f=i.parameters!==void 0?i.parameters[g.input]:g.input,R=i.parameters!==void 0?i.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",R)),c.push(g),d.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(d)]).then(function(h){const u=h[0],p=h[1],g=h[2],x=h[3],m=h[4],f=[];for(let R=0,A=u.length;R<A;R++){const b=u[R],P=p[R],S=g[R],E=x[R],T=m[R];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const v=n._createAnimationTracks(b,P,S,E,T);if(v)for(let _=0;_<v.length;_++)f.push(v[_])}return new Xa(r,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,d=a.length;c<d;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const d=c[0],h=c[1],u=c[2];u!==null&&d.traverse(function(p){p.isSkinnedMesh&&p.bind(u,K_)});for(let p=0,g=h.length;p<g;p++)d.add(h[p]);return d})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let d;if(r.isBone===!0?d=new Pd:c.length>1?d=new Gt:c.length===1?d=c[0]:d=new Et,d!==c[0])for(let h=0,u=c.length;h<u;h++)d.add(c[h]);if(r.name&&(d.userData.name=r.name,d.name=o),Qn(d,r),r.extensions&&Di(n,d,r),r.matrix!==void 0){const h=new We;h.fromArray(r.matrix),d.applyMatrix4(h)}else r.translation!==void 0&&d.position.fromArray(r.translation),r.rotation!==void 0&&d.quaternion.fromArray(r.rotation),r.scale!==void 0&&d.scale.fromArray(r.scale);return i.associations.has(d)||i.associations.set(d,{}),i.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Gt;n.name&&(r.name=i.createUniqueName(n.name)),Qn(r,n),n.extensions&&Di(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let d=0,h=l.length;d<h;d++)r.add(l[d]);const c=d=>{const h=new Map;for(const[u,p]of i.associations)(u instanceof Hn||u instanceof Ut)&&h.set(u,p);return d.traverse(u=>{const p=i.associations.get(u);p!=null&&h.set(u,p)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];pi[r.path]===pi.weights?e.traverse(function(u){u.morphTargetInfluences&&l.push(u.name?u.name:u.uuid)}):l.push(a);let c;switch(pi[r.path]){case pi.weights:c=Cs;break;case pi.rotation:c=Is;break;case pi.position:case pi.scale:c=Ps;break;default:switch(n.itemSize){case 1:c=Cs;break;case 2:case 3:default:c=Ps;break}break}const d=i.interpolation!==void 0?G_[i.interpolation]:ar,h=this._getArrayFromAccessor(n);for(let u=0,p=l.length;u<p;u++){const g=new c(l[u]+"."+pi[r.path],t.array,h,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=qa(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Is?V_:Kd;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Z_(s,e,t){const n=e.attributes,i=new In;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),a.normalized){const d=qa(Ms[a.componentType]);i.min.multiplyScalar(d),i.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new L,l=new L;for(let c=0,d=r.length;c<d;c++){const h=r[c];if(h.POSITION!==void 0){const u=t.json.accessors[h.POSITION],p=u.min,g=u.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),u.normalized){const x=qa(Ms[u.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Gn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Vc(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=Ya[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return nt.workingColorSpace!==jt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${nt.workingColorSpace}" not supported.`),Qn(s,e),Z_(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?X_(s,e.targets,t):s})}class mo extends Oe{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new Wt;const n=this,i=t.color!==void 0?new we(t.color):new we(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||mo.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,d=new ei,h=new L,u=new L,p=new L,g=new We,x=new L(0,0,-1),m=new ot,f=new L,R=new L,A=new ot,b=new We,P=this.camera,S=new yi(r,o,{samples:c,type:kn}),E=new Pn({name:l.name!==void 0?l.name:"unspecified",uniforms:Ad.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});E.uniforms.tDiffuse.value=S.texture,E.uniforms.color.value=i,E.uniforms.textureMatrix.value=b,this.material=E,this.onBeforeRender=function(T,v,_){if(u.setFromMatrixPosition(n.matrixWorld),p.setFromMatrixPosition(_.matrixWorld),g.extractRotation(n.matrixWorld),h.set(0,0,1),h.applyMatrix4(g),f.subVectors(u,p),f.dot(h)>0===!0&&this.forceUpdate===!1)return;f.reflect(h).negate(),f.add(u),g.extractRotation(_.matrixWorld),x.set(0,0,-1),x.applyMatrix4(g),x.add(p),R.subVectors(u,x),R.reflect(h).negate(),R.add(u),P.position.copy(f),P.up.set(0,1,0),P.up.applyMatrix4(g),P.up.reflect(h),P.lookAt(R),P.far=_.far,P.updateMatrixWorld(),P.projectionMatrix.copy(_.projectionMatrix),b.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),b.multiply(P.projectionMatrix),b.multiply(P.matrixWorldInverse),b.multiply(n.matrixWorld),d.setFromNormalAndCoplanarPoint(h,u),d.applyMatrix4(P.matrixWorldInverse),m.set(d.normal.x,d.normal.y,d.normal.z,d.constant);const O=P.projectionMatrix;A.x=(Math.sign(m.x)+O.elements[8])/O.elements[0],A.y=(Math.sign(m.y)+O.elements[9])/O.elements[5],A.z=-1,A.w=(1+O.elements[10])/O.elements[14],m.multiplyScalar(2/m.dot(A)),O.elements[2]=m.x,O.elements[6]=m.y,O.elements[10]=m.z+1-a,O.elements[14]=m.w,n.visible=!1;const U=T.getRenderTarget(),F=T.xr.enabled,j=T.shadowMap.autoUpdate;T.xr.enabled=!1,T.shadowMap.autoUpdate=!1,T.setRenderTarget(S),T.state.buffers.depth.setMask(!0),T.autoClear===!1&&T.clear(),T.render(v,P),T.xr.enabled=F,T.shadowMap.autoUpdate=j,T.setRenderTarget(U);const k=_.viewport;k!==void 0&&T.state.viewport(k),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return S},this.dispose=function(){S.dispose(),n.material.dispose()}}}mo.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};function yl(s=512){const e=document.createElement("canvas");return e.width=s,e.height=s,[e,e.getContext("2d")]}function ur(s,{colorSpace:e=Rt,repeatX:t=1,repeatY:n=1}={}){const i=new Nd(s);return i.wrapS=Mn,i.wrapT=Mn,i.repeat.set(t,n),i.anisotropy=8,i.colorSpace=e,i}function Gc(s,e="#140812",t="#ff2a85",n=""){const i=document.createElement("canvas");i.width=1024,i.height=256;const r=i.getContext("2d");return r.fillStyle=e,r.fillRect(0,0,i.width,i.height),r.strokeStyle=t,r.lineWidth=8,r.strokeRect(12,12,i.width-24,i.height-24),r.textAlign="center",r.textBaseline="middle",r.shadowColor=t,r.shadowBlur=24,r.fillStyle="#fff5fa",r.font="bold 96px Georgia, serif",r.fillText(s,i.width/2,n?i.height/2-22:i.height/2),n&&(r.shadowBlur=8,r.fillStyle=t,r.font="600 28px monospace",r.fillText(n,i.width/2,i.height/2+54)),ur(i,{repeatX:1,repeatY:1})}function J_(s=12,e=9,t=1.5){const[n,i]=yl(512);i.fillStyle="#0d0e14",i.fillRect(0,0,512,512);const r=128;for(let o=0;o<512;o+=r)for(let a=0;a<512;a+=r)i.fillStyle=(a+o)/r%2===0?"#141722":"#0f111a",i.fillRect(a+3,o+3,r-6,r-6),i.strokeStyle="rgba(16, 185, 129, 0.25)",i.lineWidth=2,i.strokeRect(a+3,o+3,r-6,r-6);return ur(n,{repeatX:s/t,repeatY:e/t})}function Q_(){const s=document.createElement("canvas");s.width=256,s.height=512;const e=s.getContext("2d"),t=e.createLinearGradient(0,0,0,512);return t.addColorStop(0,"#ffd8a8"),t.addColorStop(.55,"#c86446"),t.addColorStop(1,"#1e293b"),e.fillStyle=t,e.fillRect(0,0,256,512),e.fillStyle="#111319",e.fillRect(0,0,256,16),e.fillRect(0,496,256,16),e.fillRect(0,0,14,512),e.fillRect(242,0,14,512),e.fillRect(122,0,12,512),e.fillRect(0,170,256,10),e.fillRect(0,340,256,10),ur(s,{repeatX:1,repeatY:1})}const ex=new kd;function gn(s,{repeatX:e=1,repeatY:t=1,includeAO:n=!0}={}){const i=`./polyhaven/textures/${s}`,r=(o,a)=>{const l=ex.load(o);return l.wrapS=Mn,l.wrapT=Mn,l.repeat.set(e,t),l.anisotropy=8,l.colorSpace=a?Rt:ti,!a&&o.endsWith("ao.jpg")&&(l.channel=0),l};return{map:r(`${i}/diffuse.jpg`,!0),normalMap:r(`${i}/nor_gl.jpg`,!1),roughnessMap:r(`${i}/rough.jpg`,!1),aoMap:n?r(`${i}/ao.jpg`,!1):void 0}}function $d(){const[s,e]=yl(128),t=e.createRadialGradient(64,64,8,64,64,62);return t.addColorStop(0,"rgba(0, 0, 0, 0.56)"),t.addColorStop(.55,"rgba(0, 0, 0, 0.25)"),t.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=t,e.fillRect(0,0,128,128),ur(s,{repeatX:1,repeatY:1})}function Wc(s=1){const[e,t]=yl(256);t.fillStyle=s===1?"#12141a":"#181014",t.fillRect(0,0,256,256);const n=t.createRadialGradient(128,120,12,128,128,110);return n.addColorStop(0,s===1?"#d18447":"#bf2e4c"),n.addColorStop(.55,s===1?"#1a735c":"#dbba6b"),n.addColorStop(1,"rgba(18, 20, 26, 0)"),t.fillStyle=n,t.fillRect(16,16,224,224),t.strokeStyle="#e5dfd3",t.lineWidth=10,t.strokeRect(5,5,246,246),ur(e,{repeatX:1,repeatY:1})}const tx=new Yd,Qo=new Map;function nx(s){return Qo.has(s)||Qo.set(s,tx.loadAsync(`./polyhaven/models/${s}/${s}.gltf`)),Qo.get(s)}function ix(s,e){const t=[],n=[],i=[],r=gn("asphalt_02",{repeatX:8,repeatY:5.5}),o=new Ne({...r,color:10133674,roughness:1,metalness:.03}),a=gn("brushed_concrete_04",{repeatX:9,repeatY:1.2}),l=new Ne({...a,color:13685980,roughness:1,metalness:.04}),c=new Ne({color:15381256,roughness:.65}),d=gn("herringbone_parquet",{repeatX:6.5,repeatY:4}),h=new Ne({...d,color:15127490,normalScale:new Ee(.75,.75),roughness:.92,metalness:.04}),u=gn("marble_01",{repeatX:5.2,repeatY:3.2}),p=new Ne({...u,color:2962239,normalScale:new Ee(.5,.5),roughness:.72,metalness:.1}),g=gn("marble_01",{repeatX:5.2,repeatY:3.2}),x=new Ne({...g,color:16118508,normalScale:new Ee(.45,.45),roughness:.76,metalness:.06}),m=gn("brick_wall_005",{repeatX:8,repeatY:1.8}),f=new Ne({...m,color:13285552,normalScale:new Ee(.9,.9),roughness:1,metalness:.02}),R=gn("beige_wall_001",{repeatX:6,repeatY:1.6}),A=new Ne({...R,color:4540759,normalScale:new Ee(.55,.55),roughness:1,metalness:.02}),b=gn("granite_tile_02",{repeatX:8,repeatY:1.6}),P=new Ne({...b,color:10791603,normalScale:new Ee(.7,.7),roughness:1,metalness:.06}),S=Q_(),E=new Ne({map:S,emissiveMap:S,emissive:new we(16764832),emissiveIntensity:1.2,roughness:.25});e.registerEmissive(E,{dayIntensity:.35,nightIntensity:1.25});const T=new Ne({...R,color:4935518,normalScale:new Ee(.45,.45),roughness:1,metalness:.02}),v=gn("brown_planks_03",{repeatX:6,repeatY:4}),_=new Ne({...v,color:14205872,normalScale:new Ee(.75,.75),roughness:1,metalness:.04}),C=new Ne({color:3875864,roughness:.48,metalness:.08}),O=new Ne({...gn("brown_planks_03",{repeatX:2,repeatY:1}),color:14270367,roughness:.88,metalness:.04}),U=new Ne({color:13132870,roughness:.28,metalness:.88}),F=new Ne({color:13938487,roughness:.25,metalness:.9}),j=new Ne({color:13949151,roughness:.18,metalness:.92}),k=new Ne({color:1974827,roughness:.45,metalness:.75}),Z=gn("velour_velvet",{repeatX:2,repeatY:2}),Y=new Ne({...Z,color:1079386,normalScale:new Ee(.7,.7),roughness:1,metalness:.02}),oe=new Ne({...Z,color:10886452,normalScale:new Ee(.7,.7),roughness:1,metalness:.02}),le=new Ne({color:2764086,roughness:.92,metalness:.02}),me=new Ne({color:15196630,roughness:.88,metalness:.02}),Pe=gn("fabric_leather_02",{repeatX:2,repeatY:2}),ke=new Ne({...Pe,color:10244909,normalScale:new Ee(.65,.65),roughness:.9,metalness:.05}),K=new Ne({...Pe,color:2500656,normalScale:new Ee(.65,.65),roughness:.85,metalness:.08}),ae=new Ne({color:16777215,roughness:.04,metalness:.98}),Se=new Ne({color:12762542,roughness:.72,metalness:.02}),ce=$d(),Ie=new zn({map:ce,transparent:!0,opacity:.68,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}),$e=new Ne({map:Wc(1),roughness:.35,metalness:.04}),De=new Ne({map:Wc(2),roughness:.35,metalness:.04}),it=new un({color:10875900,roughness:.08,metalness:.1,transparent:!0,opacity:.28,transmission:.35}),gt=new Ne({color:13753570,roughness:.45,metalness:.1,transparent:!0,opacity:.55}),Ze=new Ne({color:959977,roughness:.08,metalness:.35,transparent:!0,opacity:.78}),D=new Ne({color:16774097,emissive:new we(16763256),emissiveIntensity:1.8,roughness:.2});e.registerEmissive(D,{dayIntensity:.5,nightIntensity:2.2});const ze=new Ne({color:16722565,emissive:new we(16719480),emissiveIntensity:1.8});e.registerEmissive(ze,{dayIntensity:.4,nightIntensity:2.4});const Te=new Ne({color:58879,emissive:new we(55807),emissiveIntensity:1.8});e.registerEmissive(Te,{dayIntensity:.3,nightIntensity:2});function W(H,ye,ft,Tt,St,tt,pt,on,M=!0,N=!0){const z=new Oe(new Si(ye,ft,Tt),on);return z.position.set(St,tt,pt),z.castShadow=M,z.receiveShadow=N,H.add(z),z}function ee(H,ye,ft,Tt,St,tt,pt,on,M,N=!0){const z=new Oe(new wn(ye,ft,Tt,St),M);return z.position.set(tt,pt,on),z.castShadow=N,z.receiveShadow=!0,H.add(z),z}function lt(H,ye,ft){if(W(H,xt,.26,Lt,0,-.13,Nt,ft,!1,!0),W(H,xt+.5,.34,.38,0,-.13,1.55,k,!0,!0),W(H,xt+.52,.06,.06,0,.01,1.73,F,!1,!1),W(H,xt,Q,.3,0,Q/2,Nt-Lt/2,ye===3||ye===0?f:A),W(H,.3,Q,Lt,-xt/2,Q/2,Nt,A),W(H,.3,Q,Lt,xt/2,Q/2,Nt,A),W(H,xt+.36,Q,.16,0,Q/2,Nt-Lt/2-.19,P),W(H,.16,Q,Lt+.16,-xt/2-.19,Q/2,Nt,P),W(H,.16,Q,Lt+.16,xt/2+.19,Q/2,Nt,P),ye>=1&&ye<=3)for(const St of[-4.2,-9.8])W(H,.08,3.1,2.5,-xt/2-.28,Q*.52,St,E,!1,!1),W(H,.08,3.1,2.5,xt/2+.28,Q*.52,St,E,!1,!1);W(H,xt+.2,.24,.24,0,Q-.12,1.45,k,!1,!1),W(H,xt,.24,.36,0,Q-.12,Nt-Lt/2+.18,T,!1,!1);for(const St of[-12.85,-5.2,4.4,12.85])W(H,.38,Q,.38,St,Q/2,1.45,k);const Tt=W(H,.1,Q,4.2,10.2,Q/2,-12.1,it,!1,!1);if(Tt.castShadow=!1,W(H,1.8,.14,1.8,11.4,.08,-12.8,k),W(H,.08,Q,.08,10.6,Q/2,-11.9,Te,!1,!1),ye<4)for(let tt=0;tt<14;tt++){const pt=(tt+.5)*(Q/14),on=-10.5+tt*.38;W(H,1.3,.16,.4,11.4,pt,on,O)}W(H,xt-.3,.14,.06,0,.07,Nt-Lt/2+.16,C,!1,!0),W(H,.06,.14,Lt-.3,-xt/2+.16,.07,Nt,C,!1,!0),W(H,.06,.14,Lt-.3,xt/2-.16,.07,Nt,C,!1,!0),W(H,xt-.3,.12,.16,0,Q-.09,Nt-Lt/2+.2,Se,!1,!1),W(H,.16,.12,Lt-.3,-xt/2+.2,Q-.09,Nt,Se,!1,!1),W(H,.16,.12,Lt-.3,xt/2-.2,Q-.09,Nt,Se,!1,!1);for(const St of[-10.5,-5,.2,4.4,9.6])W(H,.28,Q,.12,St,Q/2,Nt-Lt/2+.18,Se,!1,!0)}function Ae(H,ye,ft,Tt=.75,St=.75,tt=.015){const pt=new Oe(new Ds(Tt*2,St*2),Ie);return pt.rotation.x=-Math.PI/2,pt.position.set(ye,tt,ft),pt.userData.hideOnDepthPass=!0,H.add(pt),pt}function w(H,ye,ft,Tt,St,tt,pt=0,{addShadow:on=!0,customArtMat:M=null}={}){nx(ye).then(N=>{const z=N.scene.clone(!0);z.rotation.set(0,pt,0),z.updateMatrixWorld(!0);const X=new In().setFromObject(z),B=new L;X.getSize(B);const ie=ft/Math.max(.05,B.y);z.scale.multiplyScalar(ie),z.updateMatrixWorld(!0);const he=new In().setFromObject(z),_e=new L,Me=new L;he.getCenter(_e),he.getSize(Me),z.position.set(Tt-_e.x,St-he.min.y,tt-_e.z),z.traverse(Re=>{var Be;if(Re.isMesh){if(Re.castShadow=!0,Re.receiveShadow=!0,M&&Re.material){const Ce=String(Re.material.name||"").toLowerCase();Ce.includes("artwork")?Re.material=M:Ce.includes("glass")&&(Re.material=new un({color:16777215,roughness:.06,metalness:.05,transparent:!0,opacity:.1,depthWrite:!1}))}(Be=Re.material)!=null&&Be.aoMap&&(Re.material.aoMap.channel=0)}}),H.add(z),on&&Ae(H,Tt,tt,Math.max(.32,Me.x*.58),Math.max(.32,Me.z*.58),St+.014)}).catch(N=>console.warn("[PolyHaven GLTF]",ye,N))}function y(H,ye,ft,Tt,St=!1){ee(H,.045,.045,.16,10,ye,ft+.08,Tt,me);const tt=new Oe(new Oi(.025,8,8),D);if(tt.scale.set(.8,1.5,.8),tt.position.set(ye,ft+.2,Tt),H.add(tt),St){const pt=new xn(16755021,5.5,7,1.5);pt.position.set(ye,ft+.32,Tt),H.add(pt),e.registerLight(pt,{dayIntensity:.8,nightIntensity:5.5,flicker:!0})}}function V(H,ye,ft,Tt,St=1){w(H,"potted_plant_04",1.35*St,ye,ft,Tt,ye*.35,{addShadow:!0})}function $(H,ye,ft,Tt,St=0,tt=C){const pt=new Gt;pt.position.set(ye,ft,Tt),pt.rotation.y=St,ee(pt,.23,.23,.05,16,0,.45,0,tt);for(const[on,M]of[[-.16,-.16],[.16,-.16],[-.16,.16],[.16,.16]])ee(pt,.022,.018,.44,8,on,.22,M,k);W(pt,.42,.38,.05,0,.68,-.19,tt),H.add(pt)}function te(H,ye,ft,Tt,St){const tt=new Gt;tt.position.set(ye,0,ft),tt.rotation.y=Tt;const pt=new Ne({color:St,roughness:.2,metalness:.85}),on=new Ne({color:988970,roughness:.1,metalness:.9}),M=new Ne({color:1118742,roughness:.88}),N=new Ne({color:15680580,emissive:new we(14427686),emissiveIntensity:1.5});W(tt,1.92,.58,4.3,0,.56,0,pt),W(tt,1.62,.52,2.25,0,1.08,-.25,pt),W(tt,1.56,.42,1.85,0,1.08,-.25,on);for(const[z,X]of[[-.94,1.32],[.94,1.32],[-.94,-1.32],[.94,-1.32]]){const B=new Oe(new wn(.36,.36,.24,18),M);B.rotation.z=Math.PI/2,B.position.set(z,.36,X),B.castShadow=!0,tt.add(B);const ie=new Oe(new wn(.21,.21,.26,12),j);ie.rotation.z=Math.PI/2,ie.position.set(z,.36,X),tt.add(ie)}W(tt,.38,.14,.08,-.62,.62,2.16,D,!1),W(tt,.38,.14,.08,.62,.62,2.16,D,!1),W(tt,.42,.12,.08,-.62,.65,-2.16,N,!1),W(tt,.42,.12,.08,.62,.65,-2.16,N,!1),H.add(tt)}const G=new Gt;G.position.y=0,s.add(G),t[0]=G,W(G,28,.24,18,0,-.12,10.5,o,!1,!0),W(G,28,.16,3.3,0,.08,3.15,l,!1,!0);for(let H=-3;H<=3;H++)W(G,.14,.02,5.4,H*3.4,.015,12.5,c,!1,!0);te(G,-8.5,12.5,0,12131356),te(G,-5.1,12.5,0,1120295),te(G,5.1,12.5,0,14870768),te(G,8.5,12.5,Math.PI,8138002);for(const[H,ye]of[[-11.5,4.9],[11.5,4.9],[-11.5,16.5]]){ee(G,.08,.14,5.2,12,H,2.6,ye,k);const ft=new Oe(new Oi(.28,14,14),D);ft.position.set(H,5.3,ye),G.add(ft)}const be=new xn(16764808,22,32,1.3);be.position.set(0,6.2,8.5),G.add(be),e.registerLight(be,{dayIntensity:1,nightIntensity:22}),W(G,6.4,.24,3.4,0,3.45,3.1,k);const fe=Gc("NOCTURNE","#120610","#ff2a85","CABARET  •  SPEAKEASY  •  VIP"),ve=new Ne({map:fe,emissiveMap:fe,emissive:new we(16777215),emissiveIntensity:1.5,roughness:.2});e.registerEmissive(ve,{dayIntensity:.4,nightIntensity:1.7}),W(G,4.8,.9,.14,0,4,4.78,ve,!1),W(G,2.3,.03,4.2,0,.175,3.4,oe,!1,!0);for(const H of[-1.25,1.25]){for(const ye of[1.8,3.3,4.7])ee(G,.04,.09,.92,10,H,.62,ye,F);W(G,.05,.05,3,H,.96,3.25,oe)}lt(G,0,p);const et=new Ne({map:J_(12,9,1.5),roughness:.16,metalness:.45});W(G,12,.04,9,0,.02,-5.2,et,!1,!0),W(G,12.15,.05,.12,0,.03,-.7,Te,!1),W(G,12.15,.05,.12,0,.03,-9.7,Te,!1),W(G,.12,.05,9.1,-6,.03,-5.2,Te,!1),W(G,.12,.05,9.1,6,.03,-5.2,Te,!1),W(G,8.6,.45,3.8,0,.225,-12.1,h);for(const H of[-4.6,-4.1,4.1,4.6])ee(G,.26,.28,Q-.1,14,H,Q/2,-13.7,oe);W(G,1.6,1.08,7.6,-9.6,.54,-5.6,p),W(G,1.75,.08,7.8,-9.6,1.1,-5.6,U),W(G,.45,2.5,7,-12.5,1.4,-5.6,C);for(let H=-8.4;H<=-2.8;H+=.7)ee(G,.055,.055,.28,10,-12.4,1.55,H,H%1.4===0?U:Te),ee(G,.055,.055,.28,10,-12.4,2.15,H,D);for(let H=-8.2;H<=-3;H+=1.3)ee(G,.2,.2,.06,14,-8.3,.76,H,oe),ee(G,.04,.06,.74,10,-8.3,.37,H,F);const ne=new Gt;ne.position.set(-5.8,0,-11.2),ne.rotation.y=.45;const xe=new Ne({color:723984,roughness:.08,metalness:.55});W(ne,1.6,.28,2.1,0,.78,0,xe),W(ne,1.54,.06,.35,0,.72,1.08,me);const Ue=W(ne,1.56,.05,1.85,.25,1.16,-.05,xe);Ue.rotation.z=-.35,ee(ne,.02,.02,.55,8,.65,1.05,.2,F);for(const[H,ye]of[[-.65,.85],[.65,.85],[0,-.85]])ee(ne,.05,.035,.7,10,H,.35,ye,xe);W(ne,.9,.08,.4,0,.48,1.65,K),W(ne,.82,.44,.34,0,.22,1.65,xe),G.add(ne);for(const H of[-2.5,-5.5,-8.5])ee(G,.55,.55,.06,20,8,.78,H,p),ee(G,.06,.22,.75,12,8,.375,H,F),y(G,8,.81,H,!1),$(G,7.15,0,H,Math.PI/2,oe),$(G,8.85,0,H,-Math.PI/2,oe);const Fe=new xn(16737970,24,30,1.3);Fe.position.set(0,3.85,-6.5),G.add(Fe),e.registerLight(Fe,{dayIntensity:2,nightIntensity:24});const se=new Gt;se.position.y=Q,s.add(se),t[1]=se,lt(se,1,x),W(se,xt-2.6,.95,.08,-1.2,.48,1.48,it,!1),W(se,xt-2.6,.06,.14,-1.2,.97,1.48,k),W(se,6.2,1.05,1.35,-.5,.525,-9.8,O),W(se,6.3,.06,1.45,-.5,1.08,-9.8,x),W(se,1.35,.52,.62,-1.2,1.36,-9.8,U),W(se,1.1,.18,.22,-1.2,1.25,-9.45,j),ee(se,.1,.14,.48,12,.1,1.35,-9.8,k),W(se,1.6,.65,.72,1.5,1.42,-9.75,it,!1);for(let H=1;H<=2;H+=.35)ee(se,.08,.1,.08,10,H,1.15,-9.75,O);const Je=Gc("LE VELVET CAFÉ","#1c1410","#d99a64","SPECIALTY ESPRESSO  •  EIXAMPLE"),Ge=new Ne({map:Je,emissiveMap:Je,emissive:new we(16768936),emissiveIntensity:1});e.registerEmissive(Ge,{dayIntensity:.3,nightIntensity:1.2}),W(se,4.4,.8,.1,-.5,3.1,-14.2,Ge,!1),w(se,"hanging_picture_frame_01",1.35,-6.2,1.85,-14.25,0,{addShadow:!1,customArtMat:$e}),w(se,"hanging_picture_frame_01",1.35,5.2,1.85,-14.25,0,{addShadow:!1,customArtMat:De}),w(se,"coffee_table_round_01",.72,-5.8,0,-4,.26,{addShadow:!0}),w(se,"coffee_table_round_01",.72,6,0,-4.2,-.44,{addShadow:!0}),w(se,"ArmChair_01",.88,-6.9,0,-4,Math.PI/2,{addShadow:!0}),w(se,"ArmChair_01",.88,7.1,0,-4.2,-Math.PI/2,{addShadow:!0});for(const[H,ye]of[[-5.8,-4],[-2,-3.5],[2.2,-3.8],[6,-4.2]])ee(se,.56,.56,.05,22,H,.76,ye,x),ee(se,.05,.22,.74,12,H,.37,ye,k),ee(se,.055,.045,.08,10,H+.1,.82,ye,me),$(se,H-.72,0,ye,Math.PI/2,C),$(se,H+.72,0,ye,-Math.PI/2,C);V(se,-11.5,0,-12.5,1.3),V(se,8.8,0,-12.5,1.2),V(se,-11.2,0,.2,1.1);const ct=new xn(16768944,20,28,1.3);ct.position.set(0,3.85,-5.5),se.add(ct),e.registerLight(ct,{dayIntensity:3,nightIntensity:20});const I=new Gt;I.position.y=2*Q,s.add(I),t[2]=I,lt(I,2,h),W(I,.16,Q,9.8,-5,Q/2,-9.4,T),W(I,.16,Q,3.6,-5,Q/2,-.3,T),W(I,.16,Q-2.4,2,-5,2.4+(Q-2.4)/2,-3.2,T),W(I,.16,Q,4.8,4.4,Q/2,-12,T),W(I,.16,Q,3.4,4.4,Q/2,-.2,T);for(const H of[-4.75,4.15,-12.65])ee(I,.22,.22,4.75,12,H,2.38,1.15,oe);w(I,"hanging_picture_frame_01",1.25,2.4,1.95,-14.25,0,{addShadow:!1,customArtMat:$e}),w(I,"hanging_picture_frame_01",1.25,-2.8,2.25,-14.25,0,{addShadow:!1,customArtMat:De}),W(I,3.2,.08,.85,-.4,.78,-13.2,C),W(I,3,.22,.78,-.4,.65,-13.2,O);for(const H of[-1.8,1])ee(I,.035,.025,.74,10,H,.37,-13.5,F),ee(I,.035,.025,.74,10,H,.37,-12.9,F);const de=new Oe(new wn(.76,.76,.04,36),ae);de.rotation.x=Math.PI/2,de.position.set(-.4,1.65,-13.58),I.add(de);const q=new mo(new uo(.74,36),{clipBias:.003,textureWidth:512,textureHeight:512,color:10134706});q.position.set(-.4,1.65,-13.55),q.userData.hideOnDepthPass=!0,I.add(q);const J=new Oe(new ao(.79,.035,14,48),F);J.position.set(-.4,1.65,-13.545),I.add(J);for(let H=0;H<12;H++){const ye=H/12*Math.PI*2,ft=new Oe(new Oi(.038,10,10),D);ft.position.set(-.4+Math.cos(ye)*.78,1.65+Math.sin(ye)*.78,-13.505),I.add(ft)}const ge=new un({color:14251782,roughness:.1,metalness:.1,transparent:!0,opacity:.85});ee(I,.045,.045,.14,12,.35,.89,-13.1,ge),ee(I,.02,.02,.04,10,.35,.98,-13.1,F),ee(I,.032,.032,.11,12,.52,.88,-13.15,ge),ee(I,.015,.015,.08,10,.22,.86,-13.05,F),ee(I,.012,.012,.04,10,.22,.91,-13.05,oe),ee(I,.045,.04,.12,12,-1.05,.88,-13.1,me),w(I,"Ottoman_01",.48,-.4,0,-12.05,-.26,{addShadow:!0}),W(I,1.6,.06,.65,-3.5,.03,-13.2,C),ee(I,.02,.02,2,8,-4.2,1,-13.2,F),ee(I,.02,.02,2,8,-2.8,1,-13.2,F);const pe=new Oe(new wn(.02,.02,1.45,8),F);pe.rotation.z=Math.PI/2,pe.position.set(-3.5,1.98,-13.2),I.add(pe);for(let H=-4;H<=-3;H+=.24)W(I,.14,1.1,.38,H,1.38,-13.2,H%.48===0?Y:K);const Ve=new xn(16766883,10,14,1.4);Ve.position.set(-.4,1.85,-11.4),I.add(Ve),e.registerLight(Ve,{dayIntensity:2.5,nightIntensity:10});const Mt=new Oe(new wn(.95,.82,.66,28),p);Mt.scale.set(1.35,1,.72),Mt.position.set(-9,.33,-7.8),Mt.castShadow=!0,I.add(Mt);const At=new Oe(new wn(.86,.86,.04,28),Ze);At.scale.set(1.3,1,.68),At.position.set(-9,.62,-7.8),I.add(At),n.push(At),ee(I,.025,.03,.95,10,-10.5,.48,-7.8,F),W(I,.25,.04,.04,-10.38,.94,-7.8,F),W(I,.08,2.4,2.8,-6.4,1.2,-10.6,gt,!1),W(I,1.2,.42,.5,-11.2,.21,-10.8,_);for(let H=-11.55;H<=-10.85;H+=.35){const ye=new Oe(new wn(.11,.11,.34,12),me);ye.rotation.x=Math.PI/2,ye.position.set(H,.52,-10.8),I.add(ye)}y(I,-7.8,.66,-7.1,!0),y(I,-8.2,0,-6.6,!1),y(I,-10.1,0,-6.9,!1),W(I,1.35,.94,3.6,7.3,.47,-8,p),W(I,1.45,.06,3.7,7.3,.96,-8,p),ee(I,.02,.025,.38,10,7.4,1.16,-7.4,F),ee(I,.055,.045,.09,12,6.8,1.03,-8.3,me);for(const H of[-9,-8,-7]){const ye=Q-2.35;ee(I,.01,.01,ye,8,7.3,2.35+ye/2,H,k,!1),ee(I,.1,.22,.24,16,7.3,2.25,H,U)}for(const H of[-9,-8,-7])ee(I,.2,.2,.06,16,6.1,.68,H,ke),ee(I,.035,.05,.66,10,6.1,.33,H,k);W(I,1.8,.06,1.1,7.3,.75,-2.5,C);for(const[H,ye]of[[6.5,-2.95],[8.1,-2.95],[6.5,-2.05],[8.1,-2.05]])ee(I,.03,.02,.72,8,H,.36,ye,k);$(I,6.8,0,-1.65,Math.PI,ke),$(I,7.8,0,-1.65,Math.PI,ke),$(I,6.8,0,-3.35,0,ke),$(I,7.8,0,-3.35,0,ke);const st=new xn(16765852,10,14,1.4);st.position.set(7.1,2.15,-7.8),I.add(st),e.registerLight(st,{dayIntensity:2,nightIntensity:10}),W(I,3.6,.02,3.8,-.5,.01,-3.1,le,!1,!0),W(I,2.15,.32,2.3,-.5,.16,-3.2,C),W(I,2.02,.28,2.18,-.5,.45,-3.2,me),W(I,2.08,.16,1.45,-.5,.56,-2.75,le);for(const H of[-.95,-.05])W(I,.72,.14,.44,H,.66,-3.95,me);W(I,2.45,1.22,.18,-.5,.61,-4.4,Y);for(const H of[-2.15,1.15])w(I,"ClassicNightstand_01",.58,H,0,-4.15,0,{addShadow:!0}),ee(I,.04,.08,.24,12,H,.7,-4.15,F),ee(I,.14,.2,.22,16,H,.9,-4.15,D);const Yt=new xn(16758896,8.5,12,1.4);Yt.position.set(-.5,1.45,-3.6),I.add(Yt),e.registerLight(Yt,{dayIntensity:1.5,nightIntensity:8.5}),W(I,xt-2.6,.95,.08,-1.2,.48,1.48,it,!1),W(I,xt-2.6,.06,.14,-1.2,.97,1.48,k),w(I,"coffee_table_round_01",.65,2.5,0,.65,0,{addShadow:!0}),w(I,"ArmChair_01",.88,-3.3,0,-1.5,-.66,{addShadow:!0});const je=new Gt;je.position.y=3*Q,s.add(je),t[3]=je,lt(je,3,h),W(je,xt-2.6,.95,.08,-1.2,.48,1.48,it,!1),W(je,.18,Q,9,.2,Q/2,-9.8,T);for(const H of[-12.6,-.1,9.6])ee(je,.22,.22,4.75,12,H,2.38,1.15,Y);w(je,"hanging_picture_frame_01",1.35,-4.8,2.25,-14.25,0,{addShadow:!1,customArtMat:De}),w(je,"hanging_picture_frame_01",1.35,4.8,2.45,-14.25,0,{addShadow:!1,customArtMat:$e}),W(je,3.2,.08,1.35,-4.8,.8,-10.5,C);for(const H of[-6.2,-3.4])W(je,.08,.78,1.1,H,.39,-10.5,k);ee(je,.02,.025,.65,8,-4.2,1.15,-10.4,k);const Gi=new Oe(new wn(.055,.055,.22,14),k);Gi.rotation.x=Math.PI/3,Gi.position.set(-4.5,1.42,-10.1),je.add(Gi),W(je,.32,.08,.2,-5.5,.88,-10.3,k),W(je,.05,.03,.02,-5.5,.88,-10.19,Te,!1),ee(je,.02,.06,.32,10,-3.7,1,-10.5,F);const Fs=new Oe(new Oi(.08,12,12),D);Fs.position.set(-6,1.32,-10.6),je.add(Fs),ee(je,.02,.09,.42,10,-6,1.05,-10.6,F),W(je,.55,3.8,6.4,-12.4,1.9,-7.2,C);const Dn=[8138002,413243,1976635,10033947,11817737,3223169];for(let H=.45;H<=3.45;H+=.5)for(let ye=-10;ye<=-4.4;ye+=.28){const ft=new Ne({color:Dn[Math.abs(Math.round(ye*10+H))%Dn.length],roughness:.75});W(je,.32,.36,.18,-12.35,H,ye,ft)}w(je,"Sofa_01",.88,-5.5,0,-4.2,-1.48,{addShadow:!0});const Ei=new xn(16758892,15,18,1.3);Ei.position.set(-4.8,2.95,-9.2),je.add(Ei),e.registerLight(Ei,{dayIntensity:2,nightIntensity:11}),W(je,2.4,1.6,.22,4.8,.8,-12.4,Y),W(je,2.2,.52,2.2,4.8,.26,-11.2,K),W(je,2.15,.14,1.8,4.8,.56,-11,le),W(je,1.8,1.5,.08,8.2,1.55,-14.2,C);const pr=new Ne({color:8266446,roughness:.5});for(let H=7.6;H<=8.8;H+=.4){const ye=new Oe(new ao(.14,.03,10,20),H>8.1?K:pr);ye.position.set(H,1.6,-14.12),je.add(ye)}ee(je,.025,.04,1.05,10,4.8,.525,-8.8,k),W(je,.28,.14,.12,4.8,1.12,-8.8,me),y(je,6.4,0,-9.5,!0);const _t=new Gt;_t.position.y=4*Q,s.add(_t),t[4]=_t,W(_t,xt,.24,Lt,0,-.12,Nt,_,!1,!0),W(_t,xt,1.05,.08,0,.525,1.45,it,!1),W(_t,xt,1.05,.08,0,.525,-14.45,it,!1),W(_t,.08,1.05,Lt,-12.95,.525,Nt,it,!1),W(_t,.08,1.05,Lt,12.95,.525,Nt,it,!1),W(_t,7.4,.65,4.6,-3,.325,-6.8,p);const Wi=W(_t,6.8,.08,4,-3,.58,-6.8,Ze,!1,!0);n.push(Wi),W(_t,1.4,.24,.7,-5.5,.36,-5.3,p);const Xi=new xn(2282478,14,16,1.4);Xi.position.set(-3,.5,-6.8),_t.add(Xi),e.registerLight(Xi,{dayIntensity:2,nightIntensity:14});for(const H of[-8.2,-5.6]){W(_t,2.1,.24,.95,-9,.12,H,_),W(_t,1.5,.12,.88,-8.75,.28,H,me);const ye=W(_t,.62,.12,.88,-9.75,.44,H,me);ye.rotation.z=.48}for(const[H,ye]of[[2.2,-11.5],[8.8,-11.5],[2.2,-6.8],[8.8,-6.8]])W(_t,.18,3.6,.18,H,1.8,ye,k);for(let H=-11.4;H<=-6.8;H+=.48)W(_t,6.8,.08,.18,5.5,3.6,H,k);W(_t,4.6,1.08,1.15,5.5,.54,-9.8,U),W(_t,4.75,.06,1.25,5.5,1.1,-9.8,p),W(_t,4.4,2.1,.45,5.5,1.1,-11.4,C);for(let H=3.6;H<=7.4;H+=.55)ee(_t,.05,.05,.28,10,H,1.45,-11.35,H%1.1===0?D:U);for(let H=3.8;H<=7.2;H+=1.1)ee(_t,.2,.2,.06,14,H,.76,-8.8,me),ee(_t,.035,.05,.74,10,H,.37,-8.8,k);const ai=new xn(16758635,10,14,1.4);ai.position.set(5.5,2.45,-9.2),_t.add(ai),e.registerLight(ai,{dayIntensity:2,nightIntensity:10});for(const[H,ye]of[[-11.8,-13],[-11.8,-1],[.5,-13],[11.5,-13],[11.5,-1],[2,-1]])V(_t,H,0,ye,1.25);return V(I,-11.6,0,-5.8,1),{floorGroups:t,waterMeshes:n,frontGlassPanels:i,mirrorReflector:q}}class sx{constructor(e){this.scene=e,this.root=null,this.mixer=null,this.actions={},this.currentActionName=null,this.loaded=!1}async load(e="./models/alina.glb"){const n=await new Yd().loadAsync(e);this.root=n.scene,this.root.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0,a.material&&(a.material.envMapIntensity=.75,a.material.needsUpdate=!0))}),this.mixer=new If(this.root);for(const a of n.animations||[]){const l=this.mixer.clipAction(a);a.name==="Laying"?(l.setLoop(md),l.clampWhenFinished=!0):l.setLoop(gd),this.actions[a.name]=l}this.scene.add(this.root);const i=$d(),r=new zn({map:i,transparent:!0,opacity:.72,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}),o=new Oe(new Ds(1.15,1.15),r);return o.rotation.x=-Math.PI/2,o.position.y=.015,o.userData.hideOnDepthPass=!0,this.root.add(o),this.loaded=!0,this.playAnimation("Idle"),Object.keys(this.actions)}playAnimation(e,t=.35){if(!this.loaded)return;const n=this.actions[e]||this.actions.Idle||Object.values(this.actions)[0];if(!n)return;const i=this.currentActionName?this.actions[this.currentActionName]:null;i&&i!==n?(n.reset(),n.play(),i.crossFadeTo(n,t,!0)):(n.reset(),n.play()),this.currentActionName=n.getClip().name}placeAtSpot(e){!this.root||!e||(this.root.position.set(e.alinaPos.x,e.alinaPos.y,e.alinaPos.z),this.root.rotation.set(0,e.alinaRotY||0,0),e.defaultAnim&&this.playAnimation(e.defaultAnim,.3))}update(e){this.mixer&&this.mixer.update(e)}}const Xc={type:"change"},Ml={type:"start"},Zd={type:"end"},Gr=new dr,jc=new ei,rx=Math.cos(70*io.DEG2RAD),Dt=new L,en=2*Math.PI,yt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ea=1e-6;class ox extends Pf{constructor(e,t=null){super(e,t),this.state=yt.NONE,this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_s.ROTATE,MIDDLE:_s.DOLLY,RIGHT:_s.PAN},this.touches={ONE:us.ROTATE,TWO:us.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new hn,this._lastTargetPosition=new L,this._quat=new hn().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new fc,this._sphericalDelta=new fc,this._scale=1,this._panOffset=new L,this._rotateStart=new Ee,this._rotateEnd=new Ee,this._rotateDelta=new Ee,this._panStart=new Ee,this._panEnd=new Ee,this._panDelta=new Ee,this._dollyStart=new Ee,this._dollyEnd=new Ee,this._dollyDelta=new Ee,this._dollyDirection=new L,this._mouse=new Ee,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=lx.bind(this),this._onPointerDown=ax.bind(this),this._onPointerUp=cx.bind(this),this._onContextMenu=gx.bind(this),this._onMouseWheel=ux.bind(this),this._onKeyDown=fx.bind(this),this._onTouchStart=px.bind(this),this._onTouchMove=mx.bind(this),this._onMouseDown=dx.bind(this),this._onMouseMove=hx.bind(this),this._interceptControlDown=_x.bind(this),this._interceptControlUp=xx.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Xc),this.update(),this.state=yt.NONE}update(e=null){const t=this.object.position;Dt.copy(t).sub(this.target),Dt.applyQuaternion(this._quat),this._spherical.setFromVector3(Dt),this.autoRotate&&this.state===yt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=en:n>Math.PI&&(n-=en),i<-Math.PI?i+=en:i>Math.PI&&(i-=en),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Dt.setFromSpherical(this._spherical),Dt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Dt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Dt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Dt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Gr.origin.copy(this.object.position),Gr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Gr.direction))<rx?this.object.lookAt(this.target):(jc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Gr.intersectPlane(jc,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ea||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ea||this._lastTargetPosition.distanceToSquared(this.target)>ea?(this.dispatchEvent(Xc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?en/60*this.autoRotateSpeed*e:en/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Dt.setFromMatrixColumn(t,0),Dt.multiplyScalar(-e),this._panOffset.add(Dt)}_panUp(e,t){this.screenSpacePanning===!0?Dt.setFromMatrixColumn(t,1):(Dt.setFromMatrixColumn(t,0),Dt.crossVectors(this.object.up,Dt)),Dt.multiplyScalar(e),this._panOffset.add(Dt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Dt.copy(i).sub(this.target);let r=Dt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(en*this._rotateDelta.x/t.clientHeight),this._rotateUp(en*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(en*this._rotateDelta.x/t.clientHeight),this._rotateUp(en*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ee,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function ax(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function lx(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function cx(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Zd),this.state=yt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function dx(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case _s.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=yt.DOLLY;break;case _s.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=yt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=yt.ROTATE}break;case _s.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=yt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=yt.PAN}break;default:this.state=yt.NONE}this.state!==yt.NONE&&this.dispatchEvent(Ml)}function hx(s){switch(this.state){case yt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case yt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case yt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function ux(s){this.enabled===!1||this.enableZoom===!1||this.state!==yt.NONE||(s.preventDefault(),this.dispatchEvent(Ml),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Zd))}function fx(s){this.enabled!==!1&&this._handleKeyDown(s)}function px(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case us.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=yt.TOUCH_ROTATE;break;case us.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=yt.TOUCH_PAN;break;default:this.state=yt.NONE}break;case 2:switch(this.touches.TWO){case us.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=yt.TOUCH_DOLLY_PAN;break;case us.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=yt.TOUCH_DOLLY_ROTATE;break;default:this.state=yt.NONE}break;default:this.state=yt.NONE}this.state!==yt.NONE&&this.dispatchEvent(Ml)}function mx(s){switch(this._trackPointer(s),this.state){case yt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case yt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case yt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case yt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=yt.NONE}}function gx(s){this.enabled!==!1&&s.preventDefault()}function _x(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function xx(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class vx{constructor(e,t,n,i){this.container=e,this.scene=t,this.renderer=n,this.lighting=i;const r=e.clientWidth||720,o=e.clientHeight||480;this.camera=new Wt(42,r/o,.1,320),this.camera.position.set(.25,11.3,-8.1),this.controls=new ox(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.06,this.controls.maxPolarAngle=Math.PI/2-.01,this.controls.minDistance=.8,this.controls.maxDistance=110,this.controls.target.set(-.4,11.18,-10.8),this.controls.update(),this.isTransitioning=!1,this.targetPos=this.camera.position.clone(),this.targetLook=this.controls.target.clone(),this.controls.addEventListener("start",()=>{this.isTransitioning=!1}),this.isDepthPass=!1,this.depthMaterial=this._createSkinnedLinearDepthMaterial(),this._bindResize()}_createSkinnedLinearDepthMaterial(){return new Pn({uniforms:{uNear:{value:.6},uFar:{value:24}},vertexShader:`
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
      `})}_bindResize(){this.onWindowResize=()=>{if(!this.container||!this.renderer||!this.camera)return;const e=Math.max(1,this.container.clientWidth),t=Math.max(1,this.container.clientHeight);this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1)},window.addEventListener("resize",this.onWindowResize),typeof ResizeObserver<"u"&&(this.resizeObserver=new ResizeObserver(()=>this.onWindowResize()),this.resizeObserver.observe(this.container))}flyTo(e,t){this.targetPos.set(e.x,e.y,e.z),this.targetLook.set(t.x,t.y,t.z),this.isTransitioning=!0}updateDepthRangeForFocus(e){const t=this.camera.position.distanceTo(e);this.depthMaterial.uniforms.uNear.value=Math.max(.4,t*.28),this.depthMaterial.uniforms.uFar.value=Math.max(t+8,t*2.8)}setDepthPass(e,t=null){this.isDepthPass=e,this.scene.traverse(n=>{var i;(i=n.userData)!=null&&i.hideOnDepthPass&&(n.visible=!e)}),e?(t&&this.updateDepthRangeForFocus(t),this.scene.overrideMaterial=this.depthMaterial,this.lighting.setDepthFogDisabled(!0),this.renderer.setClearColor(0,1)):(this.scene.overrideMaterial=null,this.lighting.setDepthFogDisabled(!1))}update(){this.isTransitioning&&(this.camera.position.lerp(this.targetPos,.09),this.controls.target.lerp(this.targetLook,.09),this.camera.position.distanceTo(this.targetPos)<.03&&this.controls.target.distanceTo(this.targetLook)<.03&&(this.camera.position.copy(this.targetPos),this.controls.target.copy(this.targetLook),this.isTransitioning=!1)),this.controls.update()}render(){this.isDepthPass&&this.updateDepthRangeForFocus(this.controls.target),this.renderer.render(this.scene,this.camera)}renderVertical916DataURL(e=1080,t=1920,n=null){const i=this.scene.overrideMaterial,r=this.scene.fog,o=this.scene.background,a=this.lighting.depthFogDisabled,l=[];this.scene.traverse(p=>{var g;(g=p.userData)!=null&&g.hideOnDepthPass&&(l.push([p,p.visible]),n===!0?p.visible=!1:n===!1&&(p.visible=!0))});const c=this.renderer.getSize(new Ee),d=this.renderer.getPixelRatio();n===!0?(this.updateDepthRangeForFocus(this.controls.target),this.scene.overrideMaterial=this.depthMaterial,this.lighting.setDepthFogDisabled(!0),this.renderer.setClearColor(0,1)):n===!1&&(this.scene.overrideMaterial=null,this.lighting.setDepthFogDisabled(!1));const h=this.camera.clone();h.aspect=e/t,h.updateProjectionMatrix(),this.renderer.setPixelRatio(1),this.renderer.setSize(e,t,!1),this.renderer.render(this.scene,h);const u=this.renderer.domElement.toDataURL("image/png");for(const[p,g]of l)p.visible=g;return this.renderer.setPixelRatio(d),this.renderer.setSize(c.x,c.y,!1),this.scene.overrideMaterial=i,this.lighting.setDepthFogDisabled(a),this.scene.fog=r,this.scene.background=o,this.renderer.render(this.scene,this.camera),u}getCameraTelemetry(){return{position:{x:Number(this.camera.position.x.toFixed(3)),y:Number(this.camera.position.y.toFixed(3)),z:Number(this.camera.position.z.toFixed(3))},target:{x:Number(this.controls.target.x.toFixed(3)),y:Number(this.controls.target.y.toFixed(3)),z:Number(this.controls.target.z.toFixed(3))},fov_deg:this.camera.fov}}}class yx{constructor(e,t,n,i,r,o){this.canvasEl=e,this.onProgress=t,this.onReady=n,this.onScreenshot=i,this.onFps=r,this.onDepthScreenshot=o,this.instance=null,this.loading=!1,this.ready=!1,this.loadStartMs=0,this.loadDurationMs=null,this.pendingState=null,window.AlinaUnityCallbacks={onReady:()=>{this.ready=!0,this.pendingState&&this.syncFullState(this.pendingState),this.onReady&&this.onReady(this.loadDurationMs)},onScreenshot:a=>{this.onScreenshot&&this.onScreenshot(a)},onDepthScreenshot:a=>{this.onDepthScreenshot&&this.onDepthScreenshot(a)},onFps:a=>{this.onFps&&this.onFps(a)}}}async ensureLoaded(){if(this.instance)return this.instance;if(this.loading)return null;this.loading=!0,this.loadStartMs=performance.now();const e="./unity-build/Build",t=`${e}/unity-build.loader.js`;await new Promise((i,r)=>{if(typeof window.createUnityInstance=="function"){i();return}const o=document.createElement("script");o.src=t,o.async=!0,o.onload=i,o.onerror=()=>r(new Error(`No se pudo cargar ${t}`)),document.body.appendChild(o)});const n={arguments:[],dataUrl:`${e}/unity-build.data.unityweb`,frameworkUrl:`${e}/unity-build.framework.js.unityweb`,codeUrl:`${e}/unity-build.wasm.unityweb`,streamingAssetsUrl:"./unity-build/StreamingAssets",companyName:"LMNJDRS",productName:"AlinaSanctuary",productVersion:"3.0",matchWebGLToCanvasSize:!0};return this.instance=await window.createUnityInstance(this.canvasEl,n,i=>{this.onProgress&&this.onProgress(Math.round(i*100))}),this.loadDurationMs=Math.round(performance.now()-this.loadStartMs),this.loading=!1,this.ready=!0,this.pendingState&&this.syncFullState(this.pendingState),this.onReady&&this.onReady(this.loadDurationMs),this.instance}_send(e,t){if(!(!this.instance||!this.ready))try{t===void 0?this.instance.SendMessage("AlinaSanctuaryBridge",e):this.instance.SendMessage("AlinaSanctuaryBridge",e,t)}catch(n){console.warn("[UnityBridge] SendMessage error:",e,n)}}syncFullState(e){this.pendingState={...e},!(!this.instance||!this.ready)&&(this._send("SetLightingMode",e.lightingMode),this._send("SetDollhouseSlice",e.sliced?1:0),this._send("SelectFloor",e.floor),this._send("SelectSpot",e.spotId),e.anim&&this._send("SetAnimation",e.anim),e.renderPass&&this._send("SetRenderPass",e.renderPass))}sendRenderPass(e){this.pendingState&&(this.pendingState.renderPass=e),this._send("SetRenderPass",e)}sendFloor(e){this.pendingState&&(this.pendingState.floor=e),this._send("SelectFloor",e)}sendSpot(e){this.pendingState&&(this.pendingState.spotId=e),this._send("SelectSpot",e)}sendLightingMode(e){this.pendingState&&(this.pendingState.lightingMode=e),this._send("SetLightingMode",e)}sendDollhouseSlice(e){this.pendingState&&(this.pendingState.sliced=e),this._send("SetDollhouseSlice",e?1:0)}sendCameraAngle(e){this._send("SetCameraAngle",e)}sendAnimation(e){this.pendingState&&(this.pendingState.anim=e),this._send("SetAnimation",e)}applyCinemaShot(e){const t=typeof e=="string"?e:JSON.stringify(e);this._send("ApplyCinemaShot",t)}playCameraMove(e){const t=typeof e=="string"?e:JSON.stringify(e);this._send("PlayCameraMove",t)}requestScreenshot916(){this._send("CaptureFrame916")}requestDepthScreenshot916(){this._send("CaptureDepth916")}}const er=Math.PI/180,Ys={x:0,y:1,z:0},Zn=(s,e)=>({x:s.x+e.x,y:s.y+e.y,z:s.z+e.z}),Mx=(s,e)=>({x:s.x-e.x,y:s.y-e.y,z:s.z-e.z}),tn=(s,e)=>({x:s.x*e,y:s.y*e,z:s.z*e}),Jd=s=>Math.hypot(s.x,s.y,s.z),qs=(s,e)=>Jd(Mx(s,e)),Ks=s=>{const e=Jd(s)||1;return tn(s,1/e)},Yc=(s,e)=>({x:s.y*e.z-s.z*e.y,y:s.z*e.x-s.x*e.z,z:s.x*e.y-s.y*e.x}),Ka=(s,e,t)=>({x:s.x+(e.x-s.x)*t,y:s.y+(e.y-s.y)*t,z:s.z+(e.z-s.z)*t}),cs=s=>({x:+s.x.toFixed(3),y:+s.y.toFixed(3),z:+s.z.toFixed(3)});function Sx(s,e){return s.sensorGates[e]||s.sensorGates["9:16"]}function bx(s,e,t){const n=Sx(t,e);return 2*Math.atan(n.sensorHeightMm/(2*s))/er}function Ex(s,e){const t=Math.min(1,Math.max(0,e));switch(s){case"linear":return t;case"easeOutCubic":return 1-Math.pow(1-t,3);case"easeInOutCubic":return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;case"easeInOutSine":default:return-(Math.cos(Math.PI*t)-1)/2}}function fr(s){return{directors:new Map(s.directorStyles.map(e=>[e.id,e])),shotTypes:new Map(s.shotTypes.map(e=>[e.id,e])),moves:new Map(s.cameraMoves.map(e=>[e.id,e])),lights:new Map(s.lightingSchemes.map(e=>[e.id,e]))}}function Qd(s,e){var o;const t=fr(e),n=t.shotTypes.get(s.shotTypeId),i=t.moves.get(s.cameraMoveId),r=[];return s.durationSec>4&&r.push(`Regla 07: plano de ${s.durationSec}s (> 4.0s)`),s.cameraMoveId==="handheld_walking_lubezki"&&s.durationSec>3&&r.push(`Walking Selfie: ${s.durationSec}s (> 3.0s)`),i&&i.arcDegrees>25&&r.push(`Regla 02: arco ${i.arcDegrees}° (> 25°)`),n&&n.shotRoleDefault==="A-Roll"&&n.id!=="ots_mirror"&&n.maxSafeHeadYawDeg>25&&r.push(`Regla 02: yaw seguro ${n.maxSafeHeadYawDeg}° (> 25°)`),s.shotRole==="A-Roll"&&(s.motionStrength??2)>3.5&&r.push(`Regla 03: motion ${s.motionStrength} (> 3.5)`),s.mirrorShot&&(((o=s.controlNetOverrides)==null?void 0:o.depthWeight)??1)>.4&&r.push("mirrorShot: depthWeight debe ser ≤ 0.40"),{ok:r.length===0,issues:r}}function Tx(s,e){const t=[];let n=0,i=0,r=0;for(const o of s.shots)Qd(o,e).issues.forEach(l=>t.push(`${o.shotId}: ${l}`)),r+=o.durationSec,o.shotRole==="A-Roll"?n++:i++;return i<2&&t.push(`Fórmula 1:2: faltan B-Roll (${i} < 2)`),Math.abs(r-s.audioTrack.durationSec)>.01&&t.push(`Duración: planos ${r}s ≠ audio ${s.audioTrack.durationSec}s`),{ok:t.length===0,issues:t,aRoll:n,bRoll:i,totalSec:r}}function Wr(s,e,t,n,i={}){var d,h;const r=n.spotCinematographyMap[s];if(!r)throw new Error(`Spot sin mapa cinematográfico: ${s}`);const o=fr(n);if(e==="B-Roll"){const u=r.defaultBRollPresets[t%r.defaultBRollPresets.length],p=o.directors.get(r.defaultARollPreset.directorStyleId);return{shotId:`auto_${s}_broll${t}`,spotId:s,shotRole:"B-Roll",directorStyleId:p.id,shotTypeId:u.shotTypeId,cameraMoveId:u.cameraMoveId,lightingSchemeId:r.defaultARollPreset.lightingSchemeId,focalLengthMm:u.focalMm,apertureFStop:2.8,durationSec:u.durationSec,animation:"Idle",focusMode:"macro_prop_lock",brollIndex:t,mirrorShot:!1,motionStrength:o.moves.get(u.cameraMoveId).recommendedMotionStrength,...i}}const a=r.defaultARollPreset;o.directors.get(a.directorStyleId);const l=o.shotTypes.get(a.shotTypeId),c=o.moves.get(a.cameraMoveId);return{shotId:`auto_${s}_aroll`,spotId:s,shotRole:"A-Roll",directorStyleId:a.directorStyleId,shotTypeId:a.shotTypeId,cameraMoveId:a.cameraMoveId,lightingSchemeId:a.lightingSchemeId,focalLengthMm:l.defaultFocalMm,apertureFStop:l.defaultAperture,durationSec:c.recommendedDurationSec,animation:"Idle",focusMode:l.id==="ots_mirror"?"mirror_reflection_plane":"iris_lock",mirrorShot:!!((d=r.specialFlags)!=null&&d.mirrorShot&&l.id==="ots_mirror"),motionStrength:c.recommendedMotionStrength,controlNetOverrides:(h=r.specialFlags)!=null&&h.mirrorShot&&l.id==="ots_mirror"?{depthWeight:r.specialFlags.controlNetDepthWeightOverride??.35}:void 0,...i}}function wx(s){return s.replace(/--ar\s+\S+/gi,"").replace(/\b\d{2,3}\s?mm(?:\s+(?:prime\s+lens|portrait\s+lens|lens|f\/[\d.]+))?(?:\s+f\/[\d.]+)?/gi,"").replace(/\s{2,}/g," ").replace(/\s+,/g,",").trim()}function Ax({shot:s,spot:e,catalog:t,aspectRatio:n}){var u;const i=fr(t),r=i.directors.get(s.directorStyleId),o=i.shotTypes.get(s.shotTypeId),a=i.moves.get(s.cameraMoveId),l=i.lights.get(s.lightingSchemeId),c=`${s.focalLengthMm}mm f/${s.apertureFStop} lens`;let d;if(s.shotRole==="B-Roll")d=[(((u=e.brolls)==null?void 0:u[s.brollIndex??0])||"").replace(/^B-Roll \d+:\s*/i,""),o.promptTokens,c,l.promptLightingTokens,r.fluxPromptTokens].filter(Boolean).join(", ");else{const p=wx(e.prompt||"");d=[/Alina Van Dijk/i.test(p)?"":t.characterReference.tokenLockPrompt,p,o.promptTokens,c,l.promptLightingTokens,r.fluxPromptTokens].filter(Boolean).join(", ")}d+=` --ar ${n}`;const h=`${a.motionPromptTokens}, ${r.motionPromptStyle}`;return{flux:d,motion:h}}function Rx({shot:s,spot:e,catalog:t,building:n,aspectRatio:i="9:16",baseMode:r="night"}){const o=fr(t),a=o.directors.get(s.directorStyleId),l=o.shotTypes.get(s.shotTypeId),c=o.moves.get(s.cameraMoveId),d=o.lights.get(s.lightingSchemeId),u=(t.spotCinematographyMap[s.spotId]||{specialFlags:{}}).specialFlags||{};if(!a||!l||!c||!d)throw new Error(`Plano con ids inválidos: ${s.shotId}`);const p=e.floor*n.floorHeight,g=!!u.isLayingPosture||s.animation==="Laying",x=[];let m=e.alinaRotY||0,f=null;s.mirrorShot&&u.mirrorCenter&&(f={x:u.mirrorCenter.x,y:p+u.mirrorCenter.yOffset,z:u.mirrorCenter.z},m=Math.atan2(f.x-e.alinaPos.x,f.z-e.alinaPos.z));const R={x:Math.sin(m),y:0,z:Math.cos(m)},A={x:Math.cos(m),y:0,z:-Math.sin(m)};let b,P=R,S=A;if(s.shotRole==="B-Roll"&&e.macroTarget&&e.macroPos)b={...e.macroTarget},P=Ks({x:e.macroPos.x-e.macroTarget.x,y:0,z:e.macroPos.z-e.macroTarget.z}),S=Ks(Yc(Ys,P));else{const ze=g?l.layingHeightOverrideM??.22:l.targetHeightM;b={x:e.alinaPos.x,y:e.alinaPos.y+ze,z:e.alinaPos.z},f&&(b=Ka(b,f,.5))}let E=l.azimuthOffsetDeg;s.shotRole==="B-Roll"&&(s.brollIndex??0)%2===1&&(E=-E);const T=E*er,v=l.elevationDeg*er,_=Zn(tn(P,Math.cos(T)),tn(S,Math.sin(T))),C=Ks(Zn(tn(_,Math.cos(v)),tn(Ys,Math.sin(v)))),O=Zn(b,tn(C,l.distanceM)),U=Ks(Yc(Ys,_)),F=ze=>Zn(O,Zn(tn(U,ze.right),Zn(tn(Ys,ze.up),tn(C,ze.forward))));let j=F(c.startOffsetLocal),k=F(c.endOffsetLocal);const Z=n.width/2,Y=n.centerZ-n.depth/2,oe=n.centerZ+n.depth/2,le=!!u.isExterior;let me=!1;const Pe=ze=>{const Te={...ze};return le?Te.y=Math.max(p+.3,Te.y):(Te.x=Math.min(Z-.4,Math.max(-Z+.4,Te.x)),Te.z=Math.min(oe+1.4,Math.max(Y+.4,Te.z)),Te.y=Math.min(p+n.floorHeight-.35,Math.max(p+.3,Te.y))),(Te.x!==ze.x||Te.y!==ze.y||Te.z!==ze.z)&&(me=!0),Te};j=Pe(j),k=Pe(k);const ke=ze=>le?ze.y>=p+.3:ze.x>=-Z+.35-1e-6&&ze.x<=Z-.35+1e-6&&ze.z>=Y+.35-1e-6&&ze.z<=oe+1.5&&ze.y>=p+.3-1e-6&&ze.y<=p+n.floorHeight-.3,K=ke(j)&&ke(k);me&&x.push("Wall Guard recortó la trayectoria al volumen interior");const ae=s.shotRole==="B-Roll"?b:{x:e.alinaPos.x,y:b.y,z:e.alinaPos.z},Se=qs(j,ae),ce=qs(k,ae);let Ie=Se,$e=ce;if(s.focusMode==="rack_prop_to_iris"&&(Ie=.48*ce,$e=ce),s.focusMode==="mirror_reflection_plane"&&f){const ze=qs(f,ae);Ie=qs(j,f)+ze,$e=qs(k,f)+ze}const De={x:e.alinaPos.x,y:e.alinaPos.y+(g?.25:1.35),z:e.alinaPos.z},it=ze=>{const Te=ze.azimuthDeg*er,W=ze.elevationDeg*er,ee=Ks(Zn(tn(Zn(tn(R,Math.cos(Te)),tn(A,Math.sin(Te))),Math.cos(W)),tn(Ys,Math.sin(W))));return cs(Zn(De,tn(ee,ze.distanceM)))},gt=ze=>({worldPos:it(ze),targetPos:cs(De),colorHex:ze.colorHex,intensity:ze.intensity,spotAngleDeg:ze.spotAngleDeg??55,kelvin:ze.kelvin});d.compatibleBaseModes.includes(r)||x.push(`Luz '${d.id}' no recomendada en modo ${r}`);const Ze=Qd(s,t),D=Ax({shot:s,spot:e,catalog:t,aspectRatio:i});return{shotId:s.shotId,spotId:s.spotId,baseMode:r,animation:s.animation,mirrorShot:!!s.mirrorShot,alinaRotY:+m.toFixed(4),camera:{startPos:cs(j),startTarget:cs(b),endPos:cs(k),endTarget:cs(b),verticalFovDeg:+bx(s.focalLengthMm,i,t).toFixed(2),focalMm:s.focalLengthMm,rollDeg:l.rollDeg,durationSec:s.durationSec,easing:c.easing,handheldHz:c.handheldHz,handheldAmpM:c.handheldAmpM},dof:{enabled:!0,focalLengthMm:s.focalLengthMm,apertureFStop:s.apertureFStop,startFocusDistM:+Ie.toFixed(3),endFocusDistM:+$e.toFixed(3)},realtimeRig:{keyLight:gt(d.realtimeKeyLight),rimLight:gt(d.realtimeRimLight),ambientMultiplier:d.ambientMultiplier,reflectionMultiplier:d.reflectionMultiplier,fogDensityOverride:d.fogDensityOverride},volumeGrade:a.volumeProfileGrade,threeJsGrade:a.threeJsGrade,prompts:D,zeroWaste:Ze,boundsOk:K,clamped:me,warnings:x}}const Cx={name:"Alina Van Dijk",heightMeters:1.72,eyeHeightM:1.56,mouthHeightM:1.5,chestHeightM:1.3,waistHeightM:1.06,hipsHeightM:.94,feetHeightM:.05,layingEyeHeightM:.24,layingChestHeightM:.16,allowedAnimations:["Idle","Walk","Rumba","Laying","HipHop"],tokenLockPrompt:"28yo Dutch-Latin woman Alina Van Dijk, vivid copper red hair with natural soft waves, vivid emerald green eyes, light natural freckles, crimson lips, micro-pores"},Ix={"9:16":{sensorWidthMm:20.25,sensorHeightMm:36,description:"35mm Full Frame rotated 90 deg vertical cinema gate (portrait native)"},"4:5":{sensorWidthMm:28.8,sensorHeightMm:36,description:"35mm Full Frame rotated portrait editorial gate"},"16:9":{sensorWidthMm:36,sensorHeightMm:20.25,description:"35mm Full Frame landscape cinema gate"},"21:9":{sensorWidthMm:36,sensorHeightMm:15.43,description:"35mm Anamorphic 2.39:1 gate"}},Px=[{id:"fincher_cronenweth",name:"David Fincher — Control Clínico & Precisión",dp:"Jeff Cronenweth",moodTags:["clínico","autoridad","psicoanálisis","tensión controlada"],funnelStages:["Conversión Fanvue & Telegram VIP","Trabajo & Terapia"],defaultFocalMm:50,defaultAperture:1.8,preferredShotTypes:["mcu_interview","cu_portrait","ots_mirror","macro_broll_prop"],preferredMoves:["slow_dolly_push_in","static_breathing","rack_focus_macro_to_eyes"],defaultLightingSchemeId:"fincher_top_soft_negfill",volumeProfileGrade:{postExposure:-.08,contrast:18,saturation:-12,temperature:-14,tint:6,splitShadowsHex:"#162A2C",splitHighlightsHex:"#E3C898",bloomIntensity:.16,vignetteIntensity:.28},threeJsGrade:{toneMappingExposure:1.08,environmentIntensityMultiplier:.72},zeroWasteMotionRange:{min:1.5,max:2.6},fluxPromptTokens:"David Fincher aesthetic, Jeff Cronenweth clinical cinematography, razor-sharp focus on iris, clean symmetrical composition, deep controlled shadows with subtle cyan-amber color separation, negative fill contrast, Hasselblad crispness",motionPromptStyle:"Calculated precision mechanical dolly push-in, zero handheld jitter, steady hypnotic eye lock"},{id:"wong_kar_wai_doyle",name:"Wong Kar-wai — Seducción Nocturna & Neón Clandestino",dp:"Christopher Doyle",moodTags:["sensual","nocturno","neón","intimidad furtiva"],funnelStages:["Mundo Exterior / Viral Dance & Reels","Conversión Fanvue & Telegram VIP"],defaultFocalMm:35,defaultAperture:1.4,preferredShotTypes:["mcu_interview","ots_mirror","ms_waist","macro_broll_prop"],preferredMoves:["lateral_slider_truck","subtle_parallax_arc","static_breathing"],defaultLightingSchemeId:"wong_neon_practical",volumeProfileGrade:{postExposure:.05,contrast:22,saturation:14,temperature:-6,tint:14,splitShadowsHex:"#0E3B35",splitHighlightsHex:"#FF8C66",bloomIntensity:.42,vignetteIntensity:.34},threeJsGrade:{toneMappingExposure:1.24,environmentIntensityMultiplier:.9},zeroWasteMotionRange:{min:2,max:3},fluxPromptTokens:"Wong Kar-wai and Christopher Doyle cinematography, lush sensual 35mm anamorphic bokeh, rich emerald and crimson neon practical glow, soft foreground framing blur, poetic nocturnal Hong Kong speakeasy mood, 35mm film grain texture",motionPromptStyle:"Languid drifting lateral glide, soft candle and neon shimmer, dreamy slow tempo"},{id:"villeneuve_deakins",name:"Denis Villeneuve — Monumentalidad & Luz Motivada Única",dp:"Roger Deakins",moodTags:["arquitectónico","contemplativo","agua","lujo silencioso"],funnelStages:["High-Ticket / Membresía Anual","Top-Funnel / Intimidad Cotidiana"],defaultFocalMm:40,defaultAperture:2,preferredShotTypes:["ws_architectural","ms_waist","fs_full_body","top_down_zenital"],preferredMoves:["pedestal_reveal_up","slow_dolly_push_in","slow_dolly_pull_out"],defaultLightingSchemeId:"deakins_single_window",volumeProfileGrade:{postExposure:-.04,contrast:20,saturation:-8,temperature:8,tint:-2,splitShadowsHex:"#1B2838",splitHighlightsHex:"#F5D0A9",bloomIntensity:.24,vignetteIntensity:.26},threeJsGrade:{toneMappingExposure:1.12,environmentIntensityMultiplier:.85},zeroWasteMotionRange:{min:1.6,max:2.5},fluxPromptTokens:"Roger Deakins and Denis Villeneuve cinematography, monumental architectural symmetry, single motivated natural light source casting clean geometric shadows, delicate atmospheric mist, tactile basalt stone and water reflections",motionPromptStyle:"Solemn slow architectural pedestal rise, serene minimal subject motion, meditative stillness"},{id:"guadagnino_mukdeeprom",name:"Luca Guadagnino — Sensorialidad Táctil & Luz Mediterránea",dp:"Sayombhu Mukdeeprom",moodTags:["sensorial","diurno","espresso","táctil"],funnelStages:["Descubrimiento & Street Lifestyle","Top-Funnel / Intimidad Cotidiana"],defaultFocalMm:50,defaultAperture:2,preferredShotTypes:["ms_waist","cu_portrait","macro_broll_prop","cowboy_american"],preferredMoves:["lateral_slider_truck","slow_dolly_push_in","rack_focus_macro_to_eyes"],defaultLightingSchemeId:"guadagnino_golden_bounce",volumeProfileGrade:{postExposure:.12,contrast:8,saturation:10,temperature:18,tint:4,splitShadowsHex:"#3A2C24",splitHighlightsHex:"#FFE0B2",bloomIntensity:.26,vignetteIntensity:.16},threeJsGrade:{toneMappingExposure:1.2,environmentIntensityMultiplier:1.05},zeroWasteMotionRange:{min:2,max:3},fluxPromptTokens:"Luca Guadagnino and Sayombhu Mukdeeprom 35mm Kodak Portra aesthetic, warm Mediterranean side-window daylight, tactile marble copper and linen textures, intimate unhurried sensual realism, golden warm skin bounce",motionPromptStyle:"Gentle organic push-in and tactile macro slider glide, relaxed natural breathing"},{id:"kubrick_alcott",name:"Stanley Kubrick — Simetría Hipnótica & Luz de Velas",dp:"John Alcott",moodTags:["dominación","simetría","tenebrismo","velas 2200K"],funnelStages:["Conversión Fanvue & Telegram VIP","Top-Funnel / Intimidad Cotidiana"],defaultFocalMm:35,defaultAperture:1.4,preferredShotTypes:["low_angle_authority","ws_architectural","cu_portrait","top_down_zenital"],preferredMoves:["slow_dolly_push_in","static_breathing","slow_dolly_pull_out"],defaultLightingSchemeId:"kubrick_candlelight_2200k",volumeProfileGrade:{postExposure:-.1,contrast:26,saturation:4,temperature:22,tint:2,splitShadowsHex:"#140F14",splitHighlightsHex:"#FFB76B",bloomIntensity:.34,vignetteIntensity:.38},threeJsGrade:{toneMappingExposure:1.15,environmentIntensityMultiplier:.65},zeroWasteMotionRange:{min:1.4,max:2.4},fluxPromptTokens:"Stanley Kubrick and John Alcott Barry Lyndon candlelight aesthetic, one-point perspective symmetry, subtle low-angle dominance, ultra-fast f/1.4 practical 2200K flickering candlelight, rich chiaroscuro velvet and brass",motionPromptStyle:"Hypnotic locked symmetrical forward tracking glide, commanding stationary posture"},{id:"lubezki_natural",name:"Emmanuel Lubezki — Inmersión Fluida & Contraluz Natural",dp:"Emmanuel Lubezki",moodTags:["walking","dinámico","espontáneo","contraluz"],funnelStages:["Descubrimiento & Street Lifestyle","Mundo Exterior / Viral Dance & Reels"],defaultFocalMm:24,defaultAperture:2.4,preferredShotTypes:["ms_waist","cowboy_american","fs_full_body","low_angle_authority"],preferredMoves:["handheld_walking_lubezki","subtle_parallax_arc","pedestal_reveal_up"],defaultLightingSchemeId:"lubezki_ambient_backlight",volumeProfileGrade:{postExposure:.08,contrast:12,saturation:6,temperature:12,tint:0,splitShadowsHex:"#202A38",splitHighlightsHex:"#FFD29D",bloomIntensity:.3,vignetteIntensity:.18},threeJsGrade:{toneMappingExposure:1.18,environmentIntensityMultiplier:1.1},zeroWasteMotionRange:{min:2.4,max:3.2},fluxPromptTokens:"Emmanuel Lubezki wide-angle 24mm immersive proximity, natural golden or streetlamp rim backlight catching copper red hair strands, realistic environmental depth, candid living movement, sharp foreground subject",motionPromptStyle:"Fluid 1.7Hz handheld walking presence, gentle parallax wrap, strict 3.0s clip limit"},{id:"refn_neon_noir",name:"Nicolas Winding Refn — Neon Noir & Contraste Cromático",dp:"Natasha Braier / Darius Khondji",moodTags:["cabaret","baile","magenta-cian","hipnótico"],funnelStages:["Mundo Exterior / Viral Dance & Reels","High-Ticket / Membresía Anual"],defaultFocalMm:50,defaultAperture:1.6,preferredShotTypes:["fs_full_body","cowboy_american","ecu_eyes","low_angle_authority"],preferredMoves:["static_breathing","slow_dolly_push_in","subtle_parallax_arc"],defaultLightingSchemeId:"wong_neon_practical",volumeProfileGrade:{postExposure:-.05,contrast:30,saturation:22,temperature:-10,tint:18,splitShadowsHex:"#101A36",splitHighlightsHex:"#FF4FA3",bloomIntensity:.48,vignetteIntensity:.36},threeJsGrade:{toneMappingExposure:1.22,environmentIntensityMultiplier:.78},zeroWasteMotionRange:{min:2,max:3},fluxPromptTokens:"Nicolas Winding Refn neon noir cinematography, sculptural magenta and cyan split lighting, specular reflections on black marble, bold geometric framing, magnetic hypnotic poise",motionPromptStyle:"Locked vertical tripod or ultra-slow push-in, rhythmic center-of-mass stability, feet anchored"},{id:"coppola_intimate",name:"Sofia Coppola — Intimidad Suave & Susurro Editorial",dp:"Philippe Le Sourd",moodTags:["íntimo","spa","tocador","susurro ASMR"],funnelStages:["Top-Funnel / Intimidad Cotidiana","Conversión Fanvue & Telegram VIP"],defaultFocalMm:85,defaultAperture:1.4,preferredShotTypes:["cu_portrait","ecu_eyes","ots_mirror","top_down_zenital"],preferredMoves:["static_breathing","slow_dolly_push_in","rack_focus_macro_to_eyes"],defaultLightingSchemeId:"coppola_soft_window_spa",volumeProfileGrade:{postExposure:.1,contrast:6,saturation:-4,temperature:10,tint:8,splitShadowsHex:"#2C2538",splitHighlightsHex:"#FCE2C4",bloomIntensity:.32,vignetteIntensity:.22},threeJsGrade:{toneMappingExposure:1.16,environmentIntensityMultiplier:.95},zeroWasteMotionRange:{min:1.5,max:2.4},fluxPromptTokens:"Sofia Coppola and Philippe Le Sourd delicate editorial portrait, soft diffused window light, creamy 85mm f/1.4 shallow depth of field, intimate serene vulnerability, refined porcelain and silk atmosphere",motionPromptStyle:"Whisper-quiet slow push-in or gentle rack focus from reflection/prop to emerald eyes"}],Dx=[{id:"ecu_eyes",label:"Primerísimo Primer Plano (ECU Ojos / Labios)",shotRoleDefault:"A-Roll",targetAnchor:"eyes",targetHeightM:1.56,layingHeightOverrideM:.24,defaultFocalMm:100,defaultAperture:1.8,distanceM:1.25,azimuthOffsetDeg:4,elevationDeg:0,rollDeg:0,maxSafeHeadYawDeg:12,zeroWasteRisk:"Bajo",promptTokens:"extreme close-up portrait framing emerald eyes and subtle smirk, 100mm f/1.8 macro depth of field, hyper-detailed corneal reflection and natural nasal bridge freckles"},{id:"cu_portrait",label:"Primer Plano (CU Rostro & Hombros)",shotRoleDefault:"A-Roll",targetAnchor:"eyes",targetHeightM:1.52,layingHeightOverrideM:.22,defaultFocalMm:85,defaultAperture:1.4,distanceM:1.8,azimuthOffsetDeg:8,elevationDeg:2,rollDeg:0,maxSafeHeadYawDeg:18,zeroWasteRisk:"Bajo",promptTokens:"intimate close-up portrait from collarbone to crown, 85mm f/1.4 prime lens, creamy bokeh background separation, crisp iris focus"},{id:"mcu_interview",label:"Plano Medio Corto (MCU Podcast / Confesionario)",shotRoleDefault:"A-Roll",targetAnchor:"chest",targetHeightM:1.42,layingHeightOverrideM:.2,defaultFocalMm:85,defaultAperture:1.4,distanceM:2.45,azimuthOffsetDeg:10,elevationDeg:2,rollDeg:0,maxSafeHeadYawDeg:20,zeroWasteRisk:"Bajo",promptTokens:"medium close-up chest-up framing, 85mm f/1.4 portrait lens, clinical poise, balanced headroom in 4.9m architectural room"},{id:"ms_waist",label:"Plano Medio (MS Cintura & Manos Ancladas)",shotRoleDefault:"A-Roll",targetAnchor:"waist",targetHeightM:1.24,layingHeightOverrideM:.18,defaultFocalMm:50,defaultAperture:1.8,distanceM:2.3,azimuthOffsetDeg:12,elevationDeg:1,rollDeg:0,maxSafeHeadYawDeg:22,zeroWasteRisk:"Bajo",promptTokens:"waist-up medium shot, 50mm f/1.8 standard lens, hands calmly resting on table or waist, clear spatial context"},{id:"cowboy_american",label:"Plano Americano (3/4 Muslos a Cabeza)",shotRoleDefault:"A-Roll",targetAnchor:"hips",targetHeightM:1.06,layingHeightOverrideM:.16,defaultFocalMm:50,defaultAperture:2,distanceM:2.9,azimuthOffsetDeg:14,elevationDeg:0,rollDeg:0,maxSafeHeadYawDeg:22,zeroWasteRisk:"Medio-Bajo",promptTokens:"three-quarter American shot from mid-thigh up, 50mm f/2.0 lens, confident posture and surrounding luxury interior"},{id:"fs_full_body",label:"Plano Entero (FS Cuerpo Completo 9:16)",shotRoleDefault:"A-Roll",targetAnchor:"hips",targetHeightM:.94,layingHeightOverrideM:.15,defaultFocalMm:50,defaultAperture:1.8,distanceM:3.4,azimuthOffsetDeg:8,elevationDeg:1,rollDeg:0,maxSafeHeadYawDeg:20,zeroWasteRisk:"Medio",promptTokens:"full body vertical 9:16 shot from shoes to crown, 50mm f/1.8 lens, feet firmly grounded on floor, full architectural floor-to-ceiling height"},{id:"ws_architectural",label:"Plano General Arquitectónico (WS 4.9m)",shotRoleDefault:"A-Roll",targetAnchor:"chest",targetHeightM:1.25,layingHeightOverrideM:.2,defaultFocalMm:35,defaultAperture:2.8,distanceM:4.2,azimuthOffsetDeg:16,elevationDeg:2,rollDeg:0,maxSafeHeadYawDeg:24,zeroWasteRisk:"Bajo",promptTokens:"wide architectural shot showcasing 4.9m ceiling moldings, curtains, and volumetric lighting around Alina, 35mm f/2.8 cinema lens"},{id:"ots_mirror",label:"Sobre el Hombro con Espejo Planar (OTS Mirror, cámara a espaldas)",shotRoleDefault:"A-Roll",targetAnchor:"eyes",targetHeightM:1.48,layingHeightOverrideM:.24,defaultFocalMm:50,defaultAperture:1.4,distanceM:3.6,azimuthOffsetDeg:160,elevationDeg:3,rollDeg:0,maxSafeHeadYawDeg:22,zeroWasteRisk:"Medio-Bajo",promptTokens:"cinematic over-the-shoulder composition framing Alina and her crisp reflection in illuminated vanity mirror, soft shoulder foreground blur, 50mm f/1.4"},{id:"low_angle_authority",label:"Contrapicado de Autoridad (+11 deg)",shotRoleDefault:"A-Roll",targetAnchor:"chest",targetHeightM:1.38,layingHeightOverrideM:.2,defaultFocalMm:35,defaultAperture:1.8,distanceM:2.5,azimuthOffsetDeg:8,elevationDeg:-11,rollDeg:0,maxSafeHeadYawDeg:18,zeroWasteRisk:"Bajo",promptTokens:"subtle heroic low-angle shot looking slightly upward at Alina against tall 4.9m luxury architecture, projecting effortless dominance and poise, 35mm f/1.8"},{id:"top_down_zenital",label:"Picado Alto / Cenital (Spa & Suite)",shotRoleDefault:"A-Roll",targetAnchor:"chest",targetHeightM:1.1,layingHeightOverrideM:.18,defaultFocalMm:35,defaultAperture:2,distanceM:2.65,azimuthOffsetDeg:12,elevationDeg:66,rollDeg:0,maxSafeHeadYawDeg:15,zeroWasteRisk:"Medio-Bajo",promptTokens:"high-angle architectural top-down composition looking down over basalt bathtub or charcoal linen king bed, sculptural candlelight shadows, 35mm f/2.0"},{id:"macro_broll_prop",label:"B-Roll Macro de Prop / Bodegón (Zero-Face)",shotRoleDefault:"B-Roll",targetAnchor:"prop",targetHeightM:.9,layingHeightOverrideM:.4,defaultFocalMm:100,defaultAperture:2.8,distanceM:1.35,azimuthOffsetDeg:15,elevationDeg:10,rollDeg:0,maxSafeHeadYawDeg:0,zeroWasteRisk:"Zero",promptTokens:"100mm macro f/2.8 tactile close-up B-roll insert of luxury prop with shallow bokeh, zero human face, rich PBR specular highlights"}],Lx=[{id:"static_breathing",label:"Estático + Micro-Respiración (Lock Tripod)",startOffsetLocal:{right:0,up:0,forward:0},endOffsetLocal:{right:0,up:.008,forward:-.02},arcDegrees:0,easing:"easeInOutSine",recommendedDurationSec:3.5,maxDurationSec:4,handheldHz:0,handheldAmpM:0,focusTransition:"locked",recommendedMotionStrength:2,motionPromptTokens:"steady locked tripod shot, ultra-subtle chest breathing, calm blinking, zero camera drift --motion 2"},{id:"slow_dolly_push_in",label:"Dolly Push-In Quirúrgico (25cm hacia iris)",startOffsetLocal:{right:0,up:0,forward:.14},endOffsetLocal:{right:0,up:0,forward:-.14},arcDegrees:0,easing:"easeInOutSine",recommendedDurationSec:3.5,maxDurationSec:4,handheldHz:0,handheldAmpM:0,focusTransition:"locked",recommendedMotionStrength:2.2,motionPromptTokens:"very subtle slow dolly push-in 25cm toward emerald eyes, steady subject posture, smooth mechanical rail --motion 2"},{id:"slow_dolly_pull_out",label:"Dolly Pull-Out (Revelado de Escenario 4.9m)",startOffsetLocal:{right:0,up:0,forward:-.15},endOffsetLocal:{right:0,up:.06,forward:.25},arcDegrees:0,easing:"easeOutCubic",recommendedDurationSec:3.5,maxDurationSec:4,handheldHz:0,handheldAmpM:0,focusTransition:"locked",recommendedMotionStrength:2.4,motionPromptTokens:"slow graceful dolly pull-out revealing surrounding architectural room, serene poised subject --motion 2"},{id:"subtle_parallax_arc",label:"Arco Parallax Acotado (14 deg Zero-Waste Safe)",startOffsetLocal:{right:-.26,up:0,forward:.05},endOffsetLocal:{right:.26,up:.02,forward:0},arcDegrees:14,easing:"easeInOutSine",recommendedDurationSec:3.5,maxDurationSec:4,handheldHz:0,handheldAmpM:0,focusTransition:"locked",recommendedMotionStrength:2.6,motionPromptTokens:"gentle 14-degree lateral parallax camera glide keeping subject face within front quadrant, smooth background depth shift --motion 2.5"},{id:"pedestal_reveal_up",label:"Pedestal Reveal Vertical (9:16 Ascendente)",startOffsetLocal:{right:0,up:-.24,forward:.05},endOffsetLocal:{right:0,up:.14,forward:-.05},arcDegrees:0,easing:"easeInOutCubic",recommendedDurationSec:3.5,maxDurationSec:4,handheldHz:0,handheldAmpM:0,focusTransition:"locked",recommendedMotionStrength:2.5,motionPromptTokens:"smooth vertical pedestal rise revealing posture and architecture upward, poised stillness --motion 2.5"},{id:"lateral_slider_truck",label:"Slider Lateral (B-Roll Bodegón / Café)",startOffsetLocal:{right:-.32,up:0,forward:0},endOffsetLocal:{right:.32,up:0,forward:0},arcDegrees:4,easing:"easeInOutSine",recommendedDurationSec:2.5,maxDurationSec:3.5,handheldHz:0,handheldAmpM:0,focusTransition:"locked",recommendedMotionStrength:2.8,motionPromptTokens:"silky lateral tabletop slider pan across prop textures, specular reflections gliding across surface --motion 2.8"},{id:"handheld_walking_lubezki",label:"Handheld Orgánico Caminando (1.7 Hz · Máx 3.0s)",startOffsetLocal:{right:.08,up:.02,forward:.12},endOffsetLocal:{right:-.04,up:0,forward:-.28},arcDegrees:6,easing:"linear",recommendedDurationSec:3,maxDurationSec:3,handheldHz:1.7,handheldAmpM:.022,focusTransition:"locked",recommendedMotionStrength:3,motionPromptTokens:"natural front-camera handheld walking presence, subtle 1.7Hz breathing bob, copper hair catching breeze, strict 3 seconds max --motion 3"},{id:"rack_focus_macro_to_eyes",label:"Rack Focus Cinemático (Primer Término → Iris / Prop)",startOffsetLocal:{right:0,up:0,forward:.08},endOffsetLocal:{right:0,up:0,forward:-.06},arcDegrees:0,easing:"easeInOutCubic",recommendedDurationSec:2.5,maxDurationSec:3.5,handheldHz:0,handheldAmpM:0,focusTransition:"rack_near_to_subject",recommendedMotionStrength:2.2,motionPromptTokens:"smooth optical rack focus pulling smoothly from foreground bokeh edge onto crisp sharp subject detail --motion 2.2"}],Nx=[{id:"rembrandt_chiaroscuro",label:"Rembrandt Chiaroscuro (45° Key + Rim Cobre)",compatibleBaseModes:["night","day"],contrastRatio:"4:1",realtimeKeyLight:{azimuthDeg:42,elevationDeg:28,distanceM:2.6,kelvin:2900,colorHex:"#FFC285",intensity:5.5,spotAngleDeg:52,purpose:"Sculptural 45-degree warm key forming soft cheek shadow triangle"},realtimeRimLight:{azimuthDeg:-142,elevationDeg:34,distanceM:2.4,kelvin:5400,colorHex:"#B8D6FF",intensity:3.2,spotAngleDeg:46,purpose:"Cool edge separation on copper hair and shoulders"},ambientMultiplier:.85,reflectionMultiplier:.9,fogDensityOverride:.0085,promptLightingTokens:"Rembrandt chiaroscuro 2900K warm key light with soft cheek shadow triangle, subtle 5400K rim separation on copper hair"},{id:"fincher_top_soft_negfill",label:"Fincher Top-Soft + Negative Fill (4:1 Clínico)",compatibleBaseModes:["night","day"],contrastRatio:"4:1",realtimeKeyLight:{azimuthDeg:28,elevationDeg:48,distanceM:2.4,kelvin:3400,colorHex:"#FFD9B3",intensity:4.8,spotAngleDeg:48,purpose:"Controlled overhead soft source preserving deep eye sockets and crisp jawline"},realtimeRimLight:{azimuthDeg:-155,elevationDeg:26,distanceM:2.3,kelvin:5800,colorHex:"#99D6EA",intensity:2.6,spotAngleDeg:42,purpose:"Cool steel rim separating silhouette against dark walnut bookshelves"},ambientMultiplier:.65,reflectionMultiplier:.78,fogDensityOverride:.007,promptLightingTokens:"Fincher top-soft key light 3400K with deep negative fill on shadow side, cool cyan rim separation, clinical contrast"},{id:"wong_neon_practical",label:"Wong / Refn Dual Gel (Ámbar Práctico + Neón Magenta/Esmeralda)",compatibleBaseModes:["night"],contrastRatio:"6:1",realtimeKeyLight:{azimuthDeg:55,elevationDeg:16,distanceM:2.2,kelvin:2400,colorHex:"#FF9B5C",intensity:5.2,spotAngleDeg:56,purpose:"Warm tungsten practical spill on cheekbones"},realtimeRimLight:{azimuthDeg:-125,elevationDeg:20,distanceM:2.5,kelvin:6500,colorHex:"#FF3D9A",intensity:4.4,spotAngleDeg:58,purpose:"Clandestine magenta-crimson neon edge kicker"},ambientMultiplier:.75,reflectionMultiplier:1.15,fogDensityOverride:.011,promptLightingTokens:"dual-tone neon noir lighting, warm 2400K tungsten key against saturated magenta-cyan rim practicals, lush specular highlights"},{id:"deakins_single_window",label:"Deakins Single-Source (Luz Direccional Motivada + Haze)",compatibleBaseModes:["day","night"],contrastRatio:"5:1",realtimeKeyLight:{azimuthDeg:72,elevationDeg:22,distanceM:3.4,kelvin:4600,colorHex:"#FFE3C4",intensity:6,spotAngleDeg:64,purpose:"Broad directional single-source key wrapping cleanly across form"},realtimeRimLight:{azimuthDeg:-160,elevationDeg:18,distanceM:3,kelvin:6200,colorHex:"#88B4E6",intensity:1.8,spotAngleDeg:54,purpose:"Subtle ambient sky bounce on opposite contour"},ambientMultiplier:.72,reflectionMultiplier:.95,fogDensityOverride:.009,promptLightingTokens:"Roger Deakins single motivated lateral light source wrapping softly across face and stone architecture, delicate atmospheric haze"},{id:"guadagnino_golden_bounce",label:"Guadagnino Golden Bounce (Luz Lateral 4500K + Rebote Cálido 2:1)",compatibleBaseModes:["day"],contrastRatio:"2:1",realtimeKeyLight:{azimuthDeg:52,elevationDeg:24,distanceM:2.9,kelvin:4500,colorHex:"#FFE1B8",intensity:4.6,spotAngleDeg:68,purpose:"Soft Mediterranean daylight grazing marble and linen"},realtimeRimLight:{azimuthDeg:-138,elevationDeg:32,distanceM:2.7,kelvin:3800,colorHex:"#FFD29E",intensity:2.8,spotAngleDeg:60,purpose:"Warm golden sun halo in copper red waves"},ambientMultiplier:1.05,reflectionMultiplier:1,fogDensityOverride:.0045,promptLightingTokens:"soft 4500K Mediterranean window side-light with warm 2:1 natural bounce fill, luminous skin tones and golden copper hair halo"},{id:"kubrick_candlelight_2200k",label:"Kubrick / Alcott Candlelight (2200K Íntimo + Penumbra 8:1)",compatibleBaseModes:["night"],contrastRatio:"8:1",realtimeKeyLight:{azimuthDeg:24,elevationDeg:8,distanceM:1.9,kelvin:2200,colorHex:"#FF9840",intensity:5.8,spotAngleDeg:58,purpose:"Low candle-level warm glow casting dramatic upward and lateral chiaroscuro"},realtimeRimLight:{azimuthDeg:-150,elevationDeg:26,distanceM:2.5,kelvin:3200,colorHex:"#E6A96E",intensity:1.6,spotAngleDeg:48,purpose:"Faint antique brass specular contour"},ambientMultiplier:.55,reflectionMultiplier:.8,fogDensityOverride:.01,promptLightingTokens:"intimate 2200K practical candlelight chiaroscuro, deep velvet shadows, warm amber specular highlights in eyes"},{id:"lubezki_ambient_backlight",label:"Lubezki Natural Backlight (Contraluz Envolvente + Fill Frontal)",compatibleBaseModes:["day","night"],contrastRatio:"3:1",realtimeKeyLight:{azimuthDeg:-162,elevationDeg:30,distanceM:3.2,kelvin:4200,colorHex:"#FFD494",intensity:6.2,spotAngleDeg:62,purpose:"Strong motivated rim/backlight haloing hair and silhouette"},realtimeRimLight:{azimuthDeg:25,elevationDeg:16,distanceM:2.4,kelvin:5e3,colorHex:"#FFF1DF",intensity:2.4,spotAngleDeg:72,purpose:"Gentle ambient frontal fill preserving clean facial detail against backlight"},ambientMultiplier:1,reflectionMultiplier:1.05,fogDensityOverride:.0055,promptLightingTokens:"luminous natural backlight haloing copper hair with soft balanced frontal bounce fill, authentic environmental depth"},{id:"coppola_soft_window_spa",label:"Coppola Soft Diffused Glow (Suave 3800K + Destello Espejo/Agua)",compatibleBaseModes:["day","night"],contrastRatio:"2:1",realtimeKeyLight:{azimuthDeg:34,elevationDeg:20,distanceM:2.4,kelvin:3600,colorHex:"#FFE0C8",intensity:4.2,spotAngleDeg:70,purpose:"Diffused flattering vanity/spa frontal-side wash"},realtimeRimLight:{azimuthDeg:-132,elevationDeg:24,distanceM:2.4,kelvin:4800,colorHex:"#D4E8FF",intensity:2.2,spotAngleDeg:55,purpose:"Gentle cool shimmer separating silk and skin from dark stone"},ambientMultiplier:.92,reflectionMultiplier:1.1,fogDensityOverride:.0065,promptLightingTokens:"soft diffused flattering editorial glow, delicate reflection highlights in mirror and eyes, low-contrast intimate warmth"}],Ux=JSON.parse('{"cabaret":{"floor":0,"funnelStage":"Mundo Exterior / Viral Dance & Reels","recommendedBaseMode":"night","recommendedDirectors":["refn_neon_noir","wong_kar_wai_doyle","lubezki_natural"],"defaultARollPreset":{"directorStyleId":"refn_neon_noir","shotTypeId":"fs_full_body","cameraMoveId":"static_breathing","lightingSchemeId":"wong_neon_practical"},"defaultBRollPresets":[{"label":"Teclas Piano de Cola","shotTypeId":"macro_broll_prop","cameraMoveId":"lateral_slider_truck","targetPropIndex":0,"focalMm":100,"durationSec":2.5},{"label":"Copa & Vela Mesa Cóctel","shotTypeId":"macro_broll_prop","cameraMoveId":"rack_focus_macro_to_eyes","targetPropIndex":1,"focalMm":100,"durationSec":2.5}],"specialFlags":{"mirrorShot":false,"waterReflections":false,"wallGuardSide":"south","foregroundPropReady":true,"isExterior":false,"isLayingPosture":false}},"parking":{"floor":0,"funnelStage":"Mundo Exterior / Viral Dance & Reels","recommendedBaseMode":"night","recommendedDirectors":["lubezki_natural","wong_kar_wai_doyle","refn_neon_noir"],"defaultARollPreset":{"directorStyleId":"lubezki_natural","shotTypeId":"cowboy_american","cameraMoveId":"handheld_walking_lubezki","lightingSchemeId":"wong_neon_practical"},"defaultBRollPresets":[{"label":"Reflejo Neón sobre Capó","shotTypeId":"macro_broll_prop","cameraMoveId":"lateral_slider_truck","targetPropIndex":0,"focalMm":85,"durationSec":2.5},{"label":"Postes Dorados & Terciopelo VIP","shotTypeId":"macro_broll_prop","cameraMoveId":"pedestal_reveal_up","targetPropIndex":1,"focalMm":85,"durationSec":2.5}],"specialFlags":{"mirrorShot":false,"waterReflections":false,"wallGuardSide":"none","foregroundPropReady":true,"isExterior":true,"isLayingPosture":false}},"cafe":{"floor":1,"funnelStage":"Descubrimiento & Street Lifestyle","recommendedBaseMode":"day","recommendedDirectors":["guadagnino_mukdeeprom","coppola_intimate","fincher_cronenweth"],"defaultARollPreset":{"directorStyleId":"guadagnino_mukdeeprom","shotTypeId":"ms_waist","cameraMoveId":"slow_dolly_push_in","lightingSchemeId":"guadagnino_golden_bounce"},"defaultBRollPresets":[{"label":"Extracción Espresso La Marzocco","shotTypeId":"macro_broll_prop","cameraMoveId":"lateral_slider_truck","targetPropIndex":0,"focalMm":100,"durationSec":2.5},{"label":"Mesa Carrara junto al Ventanal","shotTypeId":"macro_broll_prop","cameraMoveId":"rack_focus_macro_to_eyes","targetPropIndex":1,"focalMm":100,"durationSec":2.5}],"specialFlags":{"mirrorShot":false,"waterReflections":false,"wallGuardSide":"south","foregroundPropReady":true,"isExterior":false,"isLayingPosture":false}},"walk_cafe":{"floor":1,"funnelStage":"Descubrimiento & Street Lifestyle","recommendedBaseMode":"day","recommendedDirectors":["lubezki_natural","guadagnino_mukdeeprom"],"defaultARollPreset":{"directorStyleId":"lubezki_natural","shotTypeId":"ms_waist","cameraMoveId":"handheld_walking_lubezki","lightingSchemeId":"lubezki_ambient_backlight"},"defaultBRollPresets":[{"label":"Hojas Monstera & Luz Balcón","shotTypeId":"macro_broll_prop","cameraMoveId":"subtle_parallax_arc","targetPropIndex":0,"focalMm":85,"durationSec":2.5},{"label":"Vitrina Repostería Artesanal","shotTypeId":"macro_broll_prop","cameraMoveId":"lateral_slider_truck","targetPropIndex":1,"focalMm":100,"durationSec":2.5}],"specialFlags":{"mirrorShot":false,"waterReflections":false,"wallGuardSide":"south","foregroundPropReady":true,"isExterior":false,"isLayingPosture":false}},"vanity":{"floor":2,"funnelStage":"Top-Funnel / Intimidad Cotidiana","recommendedBaseMode":"night","recommendedDirectors":["wong_kar_wai_doyle","coppola_intimate","fincher_cronenweth"],"defaultARollPreset":{"directorStyleId":"wong_kar_wai_doyle","shotTypeId":"ots_mirror","cameraMoveId":"slow_dolly_push_in","lightingSchemeId":"coppola_soft_window_spa"},"defaultBRollPresets":[{"label":"Macro Labial Carmesí & Perfume Ámbar","shotTypeId":"macro_broll_prop","cameraMoveId":"lateral_slider_truck","targetPropIndex":0,"focalMm":100,"durationSec":2.5},{"label":"Aro Bombillas Reflejado en Espejo","shotTypeId":"macro_broll_prop","cameraMoveId":"rack_focus_macro_to_eyes","targetPropIndex":1,"focalMm":85,"durationSec":2.5}],"specialFlags":{"mirrorShot":true,"controlNetDepthWeightOverride":0.35,"waterReflections":false,"wallGuardSide":"south","foregroundPropReady":true,"isExterior":false,"isLayingPosture":false,"mirrorCenter":{"x":-0.4,"yOffset":1.65,"z":-13.55}}},"bath":{"floor":2,"funnelStage":"Top-Funnel / Intimidad Cotidiana","recommendedBaseMode":"night","recommendedDirectors":["villeneuve_deakins","coppola_intimate","kubrick_alcott"],"defaultARollPreset":{"directorStyleId":"villeneuve_deakins","shotTypeId":"top_down_zenital","cameraMoveId":"slow_dolly_push_in","lightingSchemeId":"kubrick_candlelight_2200k"},"defaultBRollPresets":[{"label":"Velas Reflejadas en Piedra Basáltica","shotTypeId":"macro_broll_prop","cameraMoveId":"static_breathing","targetPropIndex":0,"focalMm":100,"durationSec":2.5},{"label":"Bandeja de Teca & Sales Minerales","shotTypeId":"macro_broll_prop","cameraMoveId":"lateral_slider_truck","targetPropIndex":1,"focalMm":100,"durationSec":2.5}],"specialFlags":{"mirrorShot":false,"waterReflections":true,"wallGuardSide":"south","foregroundPropReady":true,"isExterior":false,"isLayingPosture":true}},"kitchen":{"floor":2,"funnelStage":"Top-Funnel / Intimidad Cotidiana","recommendedBaseMode":"day","recommendedDirectors":["guadagnino_mukdeeprom","fincher_cronenweth"],"defaultARollPreset":{"directorStyleId":"guadagnino_mukdeeprom","shotTypeId":"ms_waist","cameraMoveId":"subtle_parallax_arc","lightingSchemeId":"guadagnino_golden_bounce"},"defaultBRollPresets":[{"label":"Vapor Espresso sobre Nero Marquina","shotTypeId":"macro_broll_prop","cameraMoveId":"static_breathing","targetPropIndex":0,"focalMm":100,"durationSec":2.5},{"label":"Lámparas Latón & Copas Suspendidas","shotTypeId":"macro_broll_prop","cameraMoveId":"pedestal_reveal_up","targetPropIndex":1,"focalMm":85,"durationSec":2.5}],"specialFlags":{"mirrorShot":false,"waterReflections":false,"wallGuardSide":"south","foregroundPropReady":true,"isExterior":false,"isLayingPosture":false}},"suite":{"floor":2,"funnelStage":"Top-Funnel / Intimidad Cotidiana","recommendedBaseMode":"night","recommendedDirectors":["coppola_intimate","kubrick_alcott","wong_kar_wai_doyle"],"defaultARollPreset":{"directorStyleId":"coppola_intimate","shotTypeId":"cu_portrait","cameraMoveId":"slow_dolly_push_in","lightingSchemeId":"kubrick_candlelight_2200k"},"defaultBRollPresets":[{"label":"Luz Ámbar de Mesilla sobre Lino Carbón","shotTypeId":"macro_broll_prop","cameraMoveId":"rack_focus_macro_to_eyes","targetPropIndex":0,"focalMm":100,"durationSec":2.5},{"label":"Copa Vino en Balcón Modernista","shotTypeId":"macro_broll_prop","cameraMoveId":"lateral_slider_truck","targetPropIndex":1,"focalMm":85,"durationSec":2.5}],"specialFlags":{"mirrorShot":false,"waterReflections":false,"wallGuardSide":"south","foregroundPropReady":true,"isExterior":false,"isLayingPosture":true}},"podcast":{"floor":3,"funnelStage":"Conversión Fanvue & Telegram VIP","recommendedBaseMode":"night","recommendedDirectors":["fincher_cronenweth","villeneuve_deakins","coppola_intimate"],"defaultARollPreset":{"directorStyleId":"fincher_cronenweth","shotTypeId":"mcu_interview","cameraMoveId":"slow_dolly_push_in","lightingSchemeId":"fincher_top_soft_negfill"},"defaultBRollPresets":[{"label":"Vapor Espresso sobre Cuaderno Clínico","shotTypeId":"macro_broll_prop","cameraMoveId":"lateral_slider_truck","targetPropIndex":0,"focalMm":100,"durationSec":2.5},{"label":"Rack Focus Lomos Bataille & Foucault","shotTypeId":"macro_broll_prop","cameraMoveId":"rack_focus_macro_to_eyes","targetPropIndex":1,"focalMm":100,"durationSec":2.5}],"specialFlags":{"mirrorShot":false,"waterReflections":false,"wallGuardSide":"south","foregroundPropReady":true,"isExterior":false,"isLayingPosture":false}},"boudoir":{"floor":3,"funnelStage":"Conversión Fanvue & Telegram VIP","recommendedBaseMode":"night","recommendedDirectors":["kubrick_alcott","wong_kar_wai_doyle","refn_neon_noir"],"defaultARollPreset":{"directorStyleId":"kubrick_alcott","shotTypeId":"low_angle_authority","cameraMoveId":"slow_dolly_push_in","lightingSchemeId":"kubrick_candlelight_2200k"},"defaultBRollPresets":[{"label":"Madejas Shibari Lila & Negra sobre Satén","shotTypeId":"macro_broll_prop","cameraMoveId":"lateral_slider_truck","targetPropIndex":0,"focalMm":100,"durationSec":2.5},{"label":"Micrófono Binaural 3Dio & Antifaz Cuero","shotTypeId":"macro_broll_prop","cameraMoveId":"rack_focus_macro_to_eyes","targetPropIndex":1,"focalMm":100,"durationSec":2.5}],"specialFlags":{"mirrorShot":false,"waterReflections":false,"wallGuardSide":"south","foregroundPropReady":true,"isExterior":false,"isLayingPosture":false}},"pool":{"floor":4,"funnelStage":"High-Ticket / Membresía Anual","recommendedBaseMode":"day","recommendedDirectors":["villeneuve_deakins","guadagnino_mukdeeprom","lubezki_natural"],"defaultARollPreset":{"directorStyleId":"villeneuve_deakins","shotTypeId":"ws_architectural","cameraMoveId":"pedestal_reveal_up","lightingSchemeId":"deakins_single_window"},"defaultBRollPresets":[{"label":"Reflejos Dorados Plunge Pool Basáltica","shotTypeId":"macro_broll_prop","cameraMoveId":"lateral_slider_truck","targetPropIndex":0,"focalMm":100,"durationSec":2.5},{"label":"Tumbona Teca & Copa Tallada Atardecer","shotTypeId":"macro_broll_prop","cameraMoveId":"rack_focus_macro_to_eyes","targetPropIndex":1,"focalMm":85,"durationSec":2.5}],"specialFlags":{"mirrorShot":false,"waterReflections":true,"wallGuardSide":"none","foregroundPropReady":true,"isExterior":true,"isLayingPosture":false}},"bar":{"floor":4,"funnelStage":"High-Ticket / Membresía Anual","recommendedBaseMode":"night","recommendedDirectors":["wong_kar_wai_doyle","fincher_cronenweth","refn_neon_noir"],"defaultARollPreset":{"directorStyleId":"wong_kar_wai_doyle","shotTypeId":"cu_portrait","cameraMoveId":"subtle_parallax_arc","lightingSchemeId":"rembrandt_chiaroscuro"},"defaultBRollPresets":[{"label":"Botellas Ámbar Retroiluminadas en Latón","shotTypeId":"macro_broll_prop","cameraMoveId":"pedestal_reveal_up","targetPropIndex":0,"focalMm":100,"durationSec":2.5},{"label":"Copa Martini sobre Cobre Martillado","shotTypeId":"macro_broll_prop","cameraMoveId":"lateral_slider_truck","targetPropIndex":1,"focalMm":100,"durationSec":2.5}],"specialFlags":{"mirrorShot":false,"waterReflections":false,"wallGuardSide":"none","foregroundPropReady":true,"isExterior":true,"isLayingPosture":false}}}'),dn={characterReference:Cx,sensorGates:Ix,directorStyles:Px,shotTypes:Dx,cameraMoves:Lx,lightingSchemes:Nx,spotCinematographyMap:Ux},Fx=5,Ox={floorHeight:Q,width:xt,depth:Lt,centerZ:Nt};class Bx{constructor({scene:e,renderer:t,lighting:n,camCtrl:i,alina:r,unityBridge:o,getSpot:a,prepareSpot:l,getBaseMode:c}){Object.assign(this,{scene:e,renderer:t,lighting:n,camCtrl:i,alina:r,unityBridge:o,getSpot:a,prepareSpot:l,getBaseMode:c}),this.active=!1,this.payload=null,this.shot=null,this.playing=!1,this.t0=0,this.onFrameHud=null,this.onMoveEnd=null,this._saved=null;const d=h=>{const u=new zd(16777215,0,30,0,.6,1.4);return u.castShadow=h,h&&(u.shadow.mapSize.set(1024,1024),u.shadow.bias=-4e-4,u.shadow.radius=4),u.visible=!1,this.scene.add(u,u.target),u};this.keyLight=d(!0),this.rimLight=d(!1),i.controls.addEventListener("start",()=>{this.playing&&this.stop(!1)})}_saveBase(){if(this._saved)return;const e=this.lighting;this._saved={exposure:this.renderer.toneMappingExposure,envIntensity:this.scene.environmentIntensity,hemi:e.hemiLight.intensity,fog:this.scene.fog&&this.scene.fog.isFogExp2?this.scene.fog.density:null,fov:this.camCtrl.camera.fov,maxPolar:this.camCtrl.controls.maxPolarAngle,minDist:this.camCtrl.controls.minDistance},this.camCtrl.controls.maxPolarAngle=Math.PI*.99,this.camCtrl.controls.minDistance=.25}_restoreBase(){var n;if(!this._saved)return;const e=this._saved,t=this.lighting;this.renderer.toneMappingExposure=e.exposure,this.scene.environmentIntensity=e.envIntensity,t.hemiLight.intensity=e.hemi,e.fog!=null&&((n=this.scene.fog)!=null&&n.isFogExp2)&&(this.scene.fog.density=e.fog),this.camCtrl.camera.fov=e.fov,this.camCtrl.controls.maxPolarAngle=e.maxPolar,this.camCtrl.controls.minDistance=e.minDist,this.camCtrl.camera.updateProjectionMatrix(),this._saved=null}exit(){var t;this.stop(!1),this.keyLight.visible=!1,this.rimLight.visible=!1,this.keyLight.intensity=this.rimLight.intensity=0,this._restoreBase();const e=this.getSpot();e&&((t=this.alina)==null||t.placeAtSpot(e)),this.active=!1,this.payload=null}resolve(e,t="9:16"){const n=this.getSpot(e.spotId);if(!n)throw new Error(`Spot desconocido: ${e.spotId}`);return Rx({shot:e,spot:n,catalog:dn,building:Ox,aspectRatio:t,baseMode:this.getBaseMode()})}apply(e,t="9:16"){var a,l,c,d;this.stop(!1),(a=this.prepareSpot)==null||a.call(this,e.spotId);const n=this.resolve(e,t);this._saveBase(),this.active=!0,this.shot=e,this.payload=n,(l=this.alina)!=null&&l.root&&(this.alina.root.rotation.y=n.alinaRotY,n.animation&&this.alina.playAnimation(n.animation,.25));const i=(h,u)=>{h.visible=!0,h.color.set(u.colorHex),h.intensity=u.intensity*Fx,h.angle=io.degToRad(Math.min(75,u.spotAngleDeg/2)),h.position.set(u.worldPos.x,u.worldPos.y,u.worldPos.z),h.target.position.set(u.targetPos.x,u.targetPos.y,u.targetPos.z),h.target.updateMatrixWorld()};i(this.keyLight,n.realtimeRig.keyLight),i(this.rimLight,n.realtimeRig.rimLight);const r=n.threeJsGrade,o=this._saved;return this.renderer.toneMappingExposure=r.toneMappingExposure,this.scene.environmentIntensity=o.envIntensity*r.environmentIntensityMultiplier*n.realtimeRig.reflectionMultiplier,this.lighting.hemiLight.intensity=o.hemi*n.realtimeRig.ambientMultiplier,(c=this.scene.fog)!=null&&c.isFogExp2&&n.realtimeRig.fogDensityOverride>0&&(this.scene.fog.density=n.realtimeRig.fogDensityOverride),this._setCamera(0,0),(d=this.unityBridge)==null||d.applyCinemaShot(n),n}_setCamera(e,t){const n=this.payload;if(!n)return;const i=n.camera,r=Ex(i.easing,e),o=Ka(i.startPos,i.endPos,r),a=Ka(i.startTarget,i.endTarget,r);if(i.handheldAmpM>0){const d=2*Math.PI*i.handheldHz;o.x+=Math.sin(t*d)*i.handheldAmpM*.6+Math.sin(t*d*.37+1.3)*i.handheldAmpM*.4,o.y+=Math.sin(t*d*2+.5)*i.handheldAmpM*.7,o.z+=Math.sin(t*d*.53+2.1)*i.handheldAmpM*.3}const l=this.camCtrl.camera;l.position.set(o.x,o.y,o.z),this.camCtrl.controls.target.set(a.x,a.y,a.z),this.camCtrl.isTransitioning=!1,l.fov=i.verticalFovDeg,l.updateProjectionMatrix(),this.camCtrl.controls.update(),i.rollDeg&&l.rotateZ(io.degToRad(i.rollDeg));const c=n.dof.startFocusDistM+(n.dof.endFocusDistM-n.dof.startFocusDistM)*r;this.focusDistM=c}play(e){var t;this.payload&&(this.stop(!1),this.playing=!0,this.t0=performance.now(),this.onMoveEnd=e||null,(t=this.unityBridge)==null||t.playCameraMove(this.payload))}stop(e){if(!this.playing)return;this.playing=!1;const t=this.onMoveEnd;this.onMoveEnd=null,e&&t&&t()}update(){var e;if(!this.active)return!1;if(this.playing&&this.payload){const t=(performance.now()-this.t0)/1e3,n=this.payload.camera.durationSec,i=Math.min(1,t/n);if(this._setCamera(i,t),(e=this.onFrameHud)==null||e.call(this,{t:i,el:t,dur:n,focusM:this.focusDistM}),i>=1){this.playing=!1;const r=this.onMoveEnd;this.onMoveEnd=null,r==null||r()}return!0}return!1}}const kx=[{sceneId:"scene_01_podcast_fincher",title:"The Mind Sanctuary — Diagnóstico de Control (Fincher 4-Shot)",chapterRef:"Capítulo 1: El Arte de Ceder el Control",targetPlatform:"Fanvue VIP",aspectRatio:"9:16",baseLightingMode:"night",audioTrack:{provider:"ElevenLabs",voiceId:"Alina-Hypno-v1",bpm:72,durationSec:12,scriptFull:"Llevas diez horas resolviendo problemas de otros... ¿cuándo fue la última vez que alguien tomó el mando por ti? [pausa de 2.0s] Entra. Cierra la puerta. Esta noche decido yo."},shots:[{shotId:"s01_podcast_aroll_open",order:1,spotId:"podcast",shotRole:"A-Roll",directorStyleId:"fincher_cronenweth",shotTypeId:"mcu_interview",cameraMoveId:"slow_dolly_push_in",lightingSchemeId:"fincher_top_soft_negfill",focalLengthMm:85,apertureFStop:1.4,durationSec:3.5,animation:"Idle",focusMode:"iris_lock",scriptSegment:"Llevas diez horas resolviendo problemas de otros...",mirrorShot:!1,motionStrength:2.2,controlNetOverrides:{depthWeight:.9,normalWeight:.75,openPoseWeight:1,denoisingStrength:.52},exportPasses:["beauty","depth","normal","openpose2d","mask"]},{shotId:"s01_podcast_broll_espresso",order:2,spotId:"podcast",shotRole:"B-Roll",directorStyleId:"fincher_cronenweth",shotTypeId:"macro_broll_prop",cameraMoveId:"lateral_slider_truck",lightingSchemeId:"fincher_top_soft_negfill",focalLengthMm:100,apertureFStop:2.8,durationSec:2.5,animation:"Idle",focusMode:"macro_prop_lock",brollIndex:0,scriptSegment:"¿cuándo fue la última vez...",mirrorShot:!1,motionStrength:2.5,controlNetOverrides:{depthWeight:.85,normalWeight:.8,openPoseWeight:0,denoisingStrength:.32},exportPasses:["beauty","depth","normal"]},{shotId:"s01_podcast_broll_books",order:3,spotId:"podcast",shotRole:"B-Roll",directorStyleId:"fincher_cronenweth",shotTypeId:"macro_broll_prop",cameraMoveId:"rack_focus_macro_to_eyes",lightingSchemeId:"rembrandt_chiaroscuro",focalLengthMm:100,apertureFStop:2.8,durationSec:2.5,animation:"Idle",focusMode:"rack_prop_to_iris",brollIndex:1,scriptSegment:"...que alguien tomó el mando por ti? [pausa]",mirrorShot:!1,motionStrength:2.2,controlNetOverrides:{depthWeight:.85,normalWeight:.8,openPoseWeight:0,denoisingStrength:.3},exportPasses:["beauty","depth","normal"]},{shotId:"s01_podcast_aroll_close",order:4,spotId:"podcast",shotRole:"A-Roll",directorStyleId:"fincher_cronenweth",shotTypeId:"cu_portrait",cameraMoveId:"static_breathing",lightingSchemeId:"fincher_top_soft_negfill",focalLengthMm:85,apertureFStop:1.4,durationSec:3.5,animation:"Idle",focusMode:"iris_lock",scriptSegment:"Entra. Cierra la puerta. Esta noche decido yo.",mirrorShot:!1,motionStrength:2,controlNetOverrides:{depthWeight:.9,normalWeight:.8,openPoseWeight:1,denoisingStrength:.5},exportPasses:["beauty","depth","normal","openpose2d","mask"]}]},{sceneId:"scene_02_vanity_wong_mirror",title:"El Tocador Vanity — Espejo Planar & Confesión (Wong Kar-wai)",chapterRef:"Capítulo 2: Desarme Psicológico Frente al Espejo",targetPlatform:"Instagram Reels",aspectRatio:"9:16",baseLightingMode:"night",audioTrack:{provider:"ElevenLabs",voiceId:"Alina-Hypno-v1",bpm:68,durationSec:12,scriptFull:"Te pasas el día sosteniendo el personaje... fingiendo que no pesa. [pausa de 2.0s] Frente a este espejo solo existe la verdad. Déjame ver quién eres cuando nadie te está evaluando."},shots:[{shotId:"s02_vanity_aroll_ots_mirror",order:1,spotId:"vanity",shotRole:"A-Roll",directorStyleId:"wong_kar_wai_doyle",shotTypeId:"ots_mirror",cameraMoveId:"slow_dolly_push_in",lightingSchemeId:"coppola_soft_window_spa",focalLengthMm:50,apertureFStop:1.4,durationSec:3.5,animation:"Idle",focusMode:"mirror_reflection_plane",scriptSegment:"Te pasas el día sosteniendo el personaje...",mirrorShot:!0,motionStrength:2.3,controlNetOverrides:{depthWeight:.35,normalWeight:.85,openPoseWeight:1,cannyWeight:.65,denoisingStrength:.48},exportPasses:["beauty","depth","normal","openpose2d","mask"]},{shotId:"s02_vanity_broll_lipstick",order:2,spotId:"vanity",shotRole:"B-Roll",directorStyleId:"wong_kar_wai_doyle",shotTypeId:"macro_broll_prop",cameraMoveId:"lateral_slider_truck",lightingSchemeId:"wong_neon_practical",focalLengthMm:100,apertureFStop:2,durationSec:2.5,animation:"Idle",focusMode:"macro_prop_lock",brollIndex:0,scriptSegment:"...fingiendo que no pesa.",mirrorShot:!1,motionStrength:2.6,controlNetOverrides:{depthWeight:.85,normalWeight:.75,openPoseWeight:0,denoisingStrength:.3},exportPasses:["beauty","depth","normal"]},{shotId:"s02_vanity_broll_bulbs",order:3,spotId:"vanity",shotRole:"B-Roll",directorStyleId:"coppola_intimate",shotTypeId:"macro_broll_prop",cameraMoveId:"rack_focus_macro_to_eyes",lightingSchemeId:"coppola_soft_window_spa",focalLengthMm:85,apertureFStop:1.4,durationSec:2.5,animation:"Idle",focusMode:"rack_prop_to_iris",brollIndex:1,scriptSegment:"Frente a este espejo solo existe la verdad.",mirrorShot:!0,motionStrength:2.2,controlNetOverrides:{depthWeight:.35,normalWeight:.8,openPoseWeight:0,cannyWeight:.6,denoisingStrength:.35},exportPasses:["beauty","depth","normal"]},{shotId:"s02_vanity_aroll_cu_close",order:4,spotId:"vanity",shotRole:"A-Roll",directorStyleId:"coppola_intimate",shotTypeId:"cu_portrait",cameraMoveId:"subtle_parallax_arc",lightingSchemeId:"coppola_soft_window_spa",focalLengthMm:85,apertureFStop:1.4,durationSec:3.5,animation:"Idle",focusMode:"iris_lock",scriptSegment:"Déjame ver quién eres cuando nadie te está evaluando.",mirrorShot:!1,motionStrength:2.1,controlNetOverrides:{depthWeight:.9,normalWeight:.8,openPoseWeight:1,denoisingStrength:.48},exportPasses:["beauty","depth","normal","openpose2d","mask"]}]},{sceneId:"scene_03_pool_villeneuve_sunset",title:"The Inner Circle Rooftop — Atardecer Monumental (Villeneuve / Deakins)",chapterRef:"Capítulo 4: Membresía VIP & Silencio en la Cima",targetPlatform:"YouTube Shorts",aspectRatio:"9:16",baseLightingMode:"day",audioTrack:{provider:"ElevenLabs",voiceId:"Alina-Hypno-v1",bpm:60,durationSec:12,scriptFull:"Cuando estás arriba, el ruido de abajo se disuelve. Aquí solo entra quien comprende que liderar también exige saber rendirse. [pausa de 2.0s] Bienvenido al círculo íntimo."},shots:[{shotId:"s03_pool_aroll_pedestal_ws",order:1,spotId:"pool",shotRole:"A-Roll",directorStyleId:"villeneuve_deakins",shotTypeId:"ws_architectural",cameraMoveId:"pedestal_reveal_up",lightingSchemeId:"deakins_single_window",focalLengthMm:40,apertureFStop:2,durationSec:3.5,animation:"Idle",focusMode:"iris_lock",scriptSegment:"Cuando estás arriba, el ruido de abajo se disuelve.",mirrorShot:!1,motionStrength:2.2,controlNetOverrides:{depthWeight:.92,normalWeight:.75,openPoseWeight:1,denoisingStrength:.5},exportPasses:["beauty","depth","normal","openpose2d","mask"]},{shotId:"s03_pool_broll_water_ripples",order:2,spotId:"pool",shotRole:"B-Roll",directorStyleId:"villeneuve_deakins",shotTypeId:"macro_broll_prop",cameraMoveId:"lateral_slider_truck",lightingSchemeId:"deakins_single_window",focalLengthMm:100,apertureFStop:2.8,durationSec:2.5,animation:"Idle",focusMode:"macro_prop_lock",brollIndex:0,scriptSegment:"Aquí solo entra quien comprende...",mirrorShot:!1,motionStrength:2.4,controlNetOverrides:{depthWeight:.8,normalWeight:.85,openPoseWeight:0,denoisingStrength:.28},exportPasses:["beauty","depth","normal"]},{shotId:"s03_pool_broll_lounger_glass",order:3,spotId:"pool",shotRole:"B-Roll",directorStyleId:"guadagnino_mukdeeprom",shotTypeId:"macro_broll_prop",cameraMoveId:"rack_focus_macro_to_eyes",lightingSchemeId:"guadagnino_golden_bounce",focalLengthMm:85,apertureFStop:2,durationSec:2.5,animation:"Idle",focusMode:"rack_prop_to_iris",brollIndex:1,scriptSegment:"...que liderar también exige saber rendirse.",mirrorShot:!1,motionStrength:2.3,controlNetOverrides:{depthWeight:.85,normalWeight:.8,openPoseWeight:0,denoisingStrength:.3},exportPasses:["beauty","depth","normal"]},{shotId:"s03_pool_aroll_cu_sunset",order:4,spotId:"pool",shotRole:"A-Roll",directorStyleId:"villeneuve_deakins",shotTypeId:"cu_portrait",cameraMoveId:"slow_dolly_push_in",lightingSchemeId:"lubezki_ambient_backlight",focalLengthMm:85,apertureFStop:1.4,durationSec:3.5,animation:"Idle",focusMode:"iris_lock",scriptSegment:"Bienvenido al círculo íntimo.",mirrorShot:!1,motionStrength:2.1,controlNetOverrides:{depthWeight:.9,normalWeight:.8,openPoseWeight:1,denoisingStrength:.48},exportPasses:["beauty","depth","normal","openpose2d","mask"]}]}],zx={storyboard:kx},_n=fr(dn),$s=[24,28,35,40,50,85,100],Hx={iris_lock:"Iris (lock)",macro_prop_lock:"Prop macro (lock)",rack_prop_to_iris:"Rack prop → iris",mirror_reflection_plane:"Plano del espejo"},mi=s=>String(s).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),ds=(s,e,t)=>`<option value="${mi(s)}" ${t?"selected":""}>${mi(e)}</option>`;function Vx(s,e){var P;const{director:t}=e,n={directorId:"fincher_cronenweth",shotTypeId:"mcu_interview",moveId:"slow_dolly_push_in",lightId:"fincher_top_soft_negfill",lens:85,aperture:1.4,role:"A",scene:null,sceneKey:"auto",playingScene:!1,sceneAbort:!1};s.innerHTML=`
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
        <select id="cin-dir" class="w-full bg-black/50 border border-white/10 rounded-lg p-1.5 text-white">${dn.directorStyles.map(S=>ds(S.id,S.name.split("—")[0].trim(),S.id===n.directorId)).join("")}</select></label>
      <label class="space-y-1"><span class="text-slate-400">Toma / Encuadre</span>
        <select id="cin-shot" class="w-full bg-black/50 border border-white/10 rounded-lg p-1.5 text-white">${dn.shotTypes.map(S=>ds(S.id,S.label.split("(")[0].trim(),S.id===n.shotTypeId)).join("")}</select></label>
      <label class="space-y-1"><span class="text-slate-400">Desplazamiento</span>
        <select id="cin-move" class="w-full bg-black/50 border border-white/10 rounded-lg p-1.5 text-white">${dn.cameraMoves.map(S=>ds(S.id,S.label.split("(")[0].trim(),S.id===n.moveId)).join("")}</select></label>
      <label class="space-y-1"><span class="text-slate-400">Iluminación</span>
        <select id="cin-light" class="w-full bg-black/50 border border-white/10 rounded-lg p-1.5 text-white">${dn.lightingSchemes.map(S=>ds(S.id,S.label.split("(")[0].trim(),S.id===n.lightId)).join("")}</select></label>
      <label class="space-y-1"><span class="text-slate-400">Lente</span>
        <select id="cin-lens" class="w-full bg-black/50 border border-white/10 rounded-lg p-1.5 text-white">${$s.map(S=>ds(S,`${S} mm`,S===n.lens)).join("")}</select></label>
      <label class="space-y-1"><span class="text-slate-400">Rol del plano</span>
        <select id="cin-role" class="w-full bg-black/50 border border-white/10 rounded-lg p-1.5 text-white">
          <option value="A">A-Roll (Alina)</option><option value="B0">B-Roll 1 (prop)</option><option value="B1">B-Roll 2 (prop)</option></select></label>
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
      <div class="h-1 mt-1 bg-white/10 rounded overflow-hidden"><div id="cin-hud-bar" class="h-full bg-emerald-400" style="width:0%"></div></div></div>`,(P=document.getElementById("viewport-wrapper"))==null||P.appendChild(r);const o=S=>r.classList.toggle("hidden",!S),a=()=>({role:n.role==="A"?"A-Roll":"B-Roll",brollIndex:n.role==="A"?0:Number(n.role[1])});function l(){var F,j;const S=e.getActiveSpot(),E=_n.moves.get(n.moveId),T=_n.shotTypes.get(n.shotTypeId),v=dn.spotCinematographyMap[S.id],{role:_,brollIndex:C}=a(),O=T.id==="ots_mirror"&&!!((F=v==null?void 0:v.specialFlags)!=null&&F.mirrorShot),U={shotId:`manual_${S.id}_${_==="A-Roll"?"a":"b"+C}`,spotId:S.id,shotRole:_,brollIndex:C,directorStyleId:n.directorId,shotTypeId:n.shotTypeId,cameraMoveId:n.moveId,lightingSchemeId:n.lightId,focalLengthMm:n.lens,apertureFStop:n.aperture,durationSec:Math.min(4,E.recommendedDurationSec),animation:((j=e.getAnim)==null?void 0:j.call(e))||S.defaultAnim||"Idle",focusMode:O?"mirror_reflection_plane":_==="B-Roll"?"macro_prop_lock":"iris_lock",mirrorShot:O,motionStrength:E.recommendedMotionStrength};return O&&(U.controlNetOverrides={depthWeight:v.specialFlags.controlNetDepthWeightOverride??.35}),U}function c(){i("cin-dir").value=n.directorId,i("cin-shot").value=n.shotTypeId,i("cin-move").value=n.moveId,i("cin-light").value=n.lightId,i("cin-lens").value=String(n.lens),i("cin-role").value=n.role}function d(S,E){const T=_n.lights.get(E.lightingSchemeId),v=S.zeroWaste;i("cin-readout").innerHTML=[["vFOV",`${S.camera.verticalFovDeg}° (${E.focalLengthMm}mm f/${E.apertureFStop})`],["Foco",`${S.dof.startFocusDistM}→${S.dof.endFocusDistM} m`],["Duración",`${S.camera.durationSec}s · ${S.camera.easing}`],["Key/Rim",`${T.realtimeKeyLight.kelvin}K / ${T.realtimeRimLight.kelvin}K · ${T.contrastRatio}`],["Foco en",Hx[E.focusMode]||E.focusMode],["Motion",`${E.motionStrength} (máx 3.5)`]].map(([O,U])=>`<div><span class="text-slate-500">${O}</span> <span class="text-slate-200">${mi(U)}</span></div>`).join("");const _=i("cin-zw");_.textContent=v.ok?"Zero-Waste ✔":"Zero-Waste ✖",_.className=`text-[10px] font-mono px-2 py-0.5 rounded-full border ${v.ok?"text-emerald-300 border-emerald-500/30 bg-emerald-500/10":"text-rose-300 border-rose-500/30 bg-rose-500/10"}`;const C=[...v.issues,...S.warnings];i("cin-warn").classList.toggle("hidden",C.length===0),i("cin-warn").innerHTML=C.map(O=>"⚠ "+mi(O)).join("<br>"),i("cin-flux").textContent=S.prompts.flux,i("cin-motion").textContent=S.prompts.motion}function h(S,E){const T=t.apply(S,"9:16");return i("cin-exit").classList.remove("hidden"),d(T,S),E||e.setStatus(`🎬 <span class="text-emerald-400 font-bold">${mi(_n.directors.get(S.directorStyleId).name.split("—")[0].trim())}</span> · ${mi(_n.shotTypes.get(S.shotTypeId).label.split("(")[0].trim())} · ${S.focalLengthMm}mm`),T}function u(S,E=""){i("cin-hud-title").textContent=`${S.shotRole} · ${_n.shotTypes.get(S.shotTypeId).label.split("(")[0].trim()}`,i("cin-hud-sub").textContent=`${_n.directors.get(S.directorStyleId).name.split("—")[0].trim()} · ${S.focalLengthMm}mm f/${S.apertureFStop} · ${_n.moves.get(S.cameraMoveId).label.split("(")[0].trim()}${E}`}t.onFrameHud=({t:S})=>{i("cin-hud-bar").style.width=`${Math.round(S*100)}%`},i("cin-dir").onchange=S=>{const E=_n.directors.get(S.target.value);n.directorId=E.id,n.shotTypeId=E.preferredShotTypes[0],n.moveId=E.preferredMoves[0],n.lightId=E.defaultLightingSchemeId,n.lens=E.defaultFocalMm,n.aperture=E.defaultAperture,n.role="A";const T=$s.reduce((v,_)=>Math.abs(_-n.lens)<Math.abs(v-n.lens)?_:v);n.lens=T,c(),h(l())},i("cin-shot").onchange=S=>{const E=_n.shotTypes.get(S.target.value);n.shotTypeId=E.id,n.lens=$s.reduce((T,v)=>Math.abs(v-E.defaultFocalMm)<Math.abs(T-E.defaultFocalMm)?v:T),n.aperture=E.defaultAperture,E.shotRoleDefault==="B-Roll"&&n.role==="A"&&(n.role="B0"),E.shotRoleDefault==="A-Roll"&&n.role!=="A"&&(n.role="A"),c(),h(l())},i("cin-move").onchange=S=>{n.moveId=S.target.value,h(l())},i("cin-light").onchange=S=>{n.lightId=S.target.value,h(l())},i("cin-lens").onchange=S=>{n.lens=Number(S.target.value),h(l())},i("cin-role").onchange=S=>{n.role=S.target.value,n.role!=="A"?(n.shotTypeId="macro_broll_prop",n.lens=100,n.aperture=2.8):n.shotTypeId==="macro_broll_prop"&&(n.shotTypeId=_n.directors.get(n.directorId).preferredShotTypes[0],n.lens=85,n.aperture=1.4),c(),h(l())},i("cin-recipe").onclick=()=>{p(),h(l())},i("cin-apply").onclick=()=>h(l()),i("cin-play").onclick=()=>{const S=l();h(S,!0),u(S),o(!0),t.play(()=>setTimeout(()=>o(!1),600))},i("cin-exit").onclick=()=>{t.exit(),o(!1),i("cin-exit").classList.add("hidden"),i("cin-zw").textContent="—",e.setStatus("Modo cine desactivado.")},i("cin-copy-flux").onclick=()=>navigator.clipboard.writeText(i("cin-flux").textContent),i("cin-copy-motion").onclick=()=>navigator.clipboard.writeText(i("cin-motion").textContent);function p(){const S=e.getActiveSpot(),E=Wr(S.id,"A-Roll",0,dn);n.directorId=E.directorStyleId,n.shotTypeId=E.shotTypeId,n.moveId=E.cameraMoveId,n.lightId=E.lightingSchemeId,n.role="A",n.lens=$s.reduce((T,v)=>Math.abs(v-E.focalLengthMm)<Math.abs(T-E.focalLengthMm)?v:T),n.aperture=E.apertureFStop,c()}function g(){const S=e.getActiveSpot(),E=dn.spotCinematographyMap[S.id],T=Wr(S.id,"A-Roll",0,dn,{shotId:`auto_${S.id}_a1`,durationSec:3.5}),v=Wr(S.id,"B-Roll",0,dn,{shotId:`auto_${S.id}_b0`,durationSec:2.5}),_=Wr(S.id,"B-Roll",1,dn,{shotId:`auto_${S.id}_b1`,durationSec:2.5}),C={...T,shotId:`auto_${S.id}_a2`,durationSec:3.5,cameraMoveId:"static_breathing",motionStrength:2},O=[T,v,_,C].map((U,F)=>({...U,order:F+1,animation:S.defaultAnim||"Idle"}));return{sceneId:`auto_${S.id}`,title:`Auto-maqueta 1:2 · ${S.name}`,targetPlatform:"Instagram Reels",aspectRatio:"9:16",baseLightingMode:E.recommendedBaseMode,audioTrack:{provider:"ElevenLabs",voiceId:"Alina-Hypno-v1",durationSec:12,scriptFull:S.script},shots:O}}function x(){return[g(),...zx.storyboard]}function m(){return x().find(S=>S.sceneId===n.sceneKey)||x()[0]}function f(){const S=x();i("cin-scene").innerHTML=S.map(_=>ds(_.sceneId,_.title,_.sceneId===n.sceneKey)).join(""),S.find(_=>_.sceneId===n.sceneKey)||(n.sceneKey=S[0].sceneId);const E=m();n.scene=E;const T=Tx(E,dn),v=i("cin-scene-badge");v.textContent=`${T.aRoll}A:${T.bRoll}B · ${T.totalSec}s ${T.ok?"✔":"✖"}`,v.className=`text-[10px] font-mono px-2 py-0.5 rounded-full border ${T.ok?"text-emerald-300 border-emerald-500/30":"text-rose-300 border-rose-500/30"}`,v.title=T.issues.join(`
`),i("cin-chips").innerHTML=E.shots.map((_,C)=>`<button data-i="${C}" class="cin-chip text-[10px] font-mono px-2 py-1 rounded-lg border ${_.shotRole==="A-Roll"?"border-[#c86446]/50 text-[#f29979]":"border-sky-500/40 text-sky-300"} bg-black/40 hover:bg-white/10">${C+1}·${_.shotRole==="A-Roll"?"A":"B"} ${mi(_n.shotTypes.get(_.shotTypeId).id.replace("_"," ").slice(0,10))} ${_.durationSec}s</button>`).join(""),s.querySelectorAll(".cin-chip").forEach(_=>{_.onclick=()=>{const C=E.shots[Number(_.dataset.i)];n.directorId=C.directorStyleId,n.shotTypeId=C.shotTypeId,n.moveId=C.cameraMoveId,n.lightId=C.lightingSchemeId,n.lens=$s.reduce((O,U)=>Math.abs(U-C.focalLengthMm)<Math.abs(O-C.focalLengthMm)?U:O),n.aperture=C.apertureFStop,n.role=C.shotRole==="A-Roll"?"A":`B${C.brollIndex??0}`,c(),h(C)}})}i("cin-scene").onchange=S=>{n.sceneKey=S.target.value,f()};async function R({record:S=!1}={}){var v;if(n.playingScene){n.sceneAbort=!0,t.stop(!1);return}const E=m();n.playingScene=!0,n.sceneAbort=!1,i("cin-scene-play").textContent="■ Detener";let T=null;S&&(T=A()),o(!0);for(let _=0;_<E.shots.length&&!n.sceneAbort;_++){const C=E.shots[_];e.getSpot(C.spotId)&&((v=e.setActiveSpot)==null||v.call(e,C.spotId)),h(C,!0),u(C,` · plano ${_+1}/${E.shots.length}`),await new Promise(U=>{t.play(U);const F=setInterval(()=>{(n.sceneAbort||!t.playing)&&(clearInterval(F),U())},120)})}T&&await b(T,E.sceneId),n.playingScene=!1,n.sceneAbort=!1,i("cin-scene-play").textContent="▶ Escena",setTimeout(()=>o(!1),500)}i("cin-scene-play").onclick=()=>R(),i("cin-scene-rec").onclick=()=>{n.playingScene||R({record:!0})};function A(){const S=e.renderer.domElement,E=document.createElement("canvas");E.width=720,E.height=1280;const T=E.getContext("2d");let v=0;const _=()=>{const F=S.height,j=F*9/16,k=(S.width-j)/2;T.drawImage(S,k,0,j,F,0,0,E.width,E.height),v=requestAnimationFrame(_)};_();const C=["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(F=>MediaRecorder.isTypeSupported(F)),O=new MediaRecorder(E.captureStream(30),{mimeType:C,videoBitsPerSecond:6e6}),U=[];return O.ondataavailable=F=>F.data.size&&U.push(F.data),O.start(250),i("cin-scene-rec").textContent="● Grabando…",{mr:O,chunks:U,stopDraw:()=>cancelAnimationFrame(v)}}function b(S,E){return new Promise(T=>{S.mr.onstop=()=>{S.stopDraw();const v=new Blob(S.chunks,{type:"video/webm"}),_=URL.createObjectURL(v);e.download.dataUrl(_,`animatic_${E}_720x1280.webm`),setTimeout(()=>URL.revokeObjectURL(_),2e3),i("cin-scene-rec").textContent="⏺ Animatic",e.setStatus(`✅ <span class="text-emerald-400 font-bold">Animatic ${mi(E)} (.webm 9:16)</span> descargado.`),T()},S.mr.stop()})}return i("cin-export").onclick=()=>{const S=t.active&&t.shot?t.shot:l(),E=t.active?t.payload:h(S,!0),T=`alina_${S.spotId}_${S.shotId}`;e.download.dataUrl(e.camCtrl.renderVertical916DataURL(1080,1920,!1),`${T}_beauty_1080x1920.png`),setTimeout(()=>e.download.dataUrl(e.camCtrl.renderVertical916DataURL(1080,1920,!0),`${T}_depth_1080x1920.png`),250),setTimeout(()=>e.download.json({shot:S,cinemaShotPayload:{...E,prompts:void 0,zeroWaste:void 0},prompts:E.prompts,zeroWaste:E.zeroWaste,controlNet:{...S.controlNetOverrides||{},mirrorShot:!!S.mirrorShot},passes:{beauty:`${T}_beauty_1080x1920.png`,depth:`${T}_depth_1080x1920.png`}},`${T}.json`),500),e.setStatus('✅ <span class="text-emerald-400 font-bold">Plano exportado</span> (Beauty + Depth + JSON con prompts y ControlNet).')},p(),f(),{onSpotChanged(){n.playingScene||(p(),f(),t.active&&h(l(),!0))},onModeChanged(){t.active&&t.shot&&(t._saved=null,h(t.shot,!0))},isPlayingScene:()=>n.playingScene}}const re={activeEngine:"threejs",activeFloor:2,activeSpot:bi[2].spots[0],activeAnim:"Idle",lightingMode:"night",sliced:!0,depthPass:!1,guide916:!1,theaterMode:!1,motionEngine:"liveportrait",threeLoadMs:0,unityLoadMs:null,unityFps:null};let hs,Ln,gi,co,nn,qe,He,Zs,Bi;const qc=new _f;let ta=0,na=performance.now(),eh=0;function ki(s,e){const t=document.createElement("a");t.download=e,t.href=s,document.body.appendChild(t),t.click(),document.body.removeChild(t)}function Jr(s,e){const t=new Blob([JSON.stringify(s,null,2)],{type:"application/json"}),n=URL.createObjectURL(t);ki(n,e),setTimeout(()=>URL.revokeObjectURL(n),1e3)}function Un(s){document.getElementById("renderStatus").innerHTML=s}function gs(){const s=document.getElementById("perf-badge");if(re.activeEngine==="threejs")s.textContent=`FPS: ${eh||"--"} | Carga: ${re.threeLoadMs}ms`;else{const e=re.unityLoadMs!=null?`${(re.unityLoadMs/1e3).toFixed(1)}s`:"Cargando...",t=re.unityFps!=null?`${re.unityFps}`:"--";s.textContent=`Unity 6 URP | FPS: ${t} | Carga: ${e}`}}function $a(){const s=document.getElementById("btn-slice");s.textContent=re.sliced?"🔪 Corte Sliced: ACTIVO":"🏛️ Corte Sliced: OFF",s.className=re.sliced?"bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 px-2.5 py-1.5 rounded-lg border border-emerald-500/30 font-mono transition-colors":"bg-white/5 hover:bg-white/10 text-slate-300 px-2.5 py-1.5 rounded-lg border border-white/10 font-mono transition-colors"}function cr(){if(co)for(let s=0;s<=4;s++){const e=co.floorGroups[s];e&&(re.sliced&&s>re.activeFloor?(e.position.y=s*Q+16,e.visible=!1):(e.position.y=s*Q,e.visible=!0))}}function Gx(){const s=document.getElementById("floorContainer");s.innerHTML="";const e={amber:"text-amber-400",purple:"text-purple-400",copper:"text-[#f29979]",emerald:"text-emerald-400",rose:"text-rose-400"},t={amber:"bg-amber-500/10 text-amber-300 border-amber-500/20",purple:"bg-purple-500/10 text-purple-300 border-purple-500/20",copper:"bg-[#c86446]/20 text-[#f29979] border-[#c86446]/30",emerald:"bg-emerald-500/10 text-emerald-300 border-emerald-500/20",rose:"bg-rose-500/10 text-rose-300 border-rose-500/20"};for(const n of[4,3,2,1,0]){const i=bi[n],r=document.createElement("div");r.id=`floor-card-${n}`,r.className="floor-card cursor-pointer p-2.5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] transition-all",r.innerHTML=`
      <div class="flex items-center justify-between gap-2">
        <span class="text-xs font-bold ${e[i.badgeColor]} font-mono">${n===0?"PLANTA BAJA":`PISO ${n}${n===2?" ★":""}`}</span>
        <span class="text-[10px] px-2 py-0.5 rounded-full border font-medium ${t[i.badgeColor]}">${i.badge}</span>
      </div>
      <h3 class="text-xs font-semibold text-white mt-1">${i.subtitle}</h3>
      <p class="text-[10px] text-slate-400 mt-0.5 leading-snug">${i.description}</p>
    `,r.addEventListener("click",()=>ih(n)),s.appendChild(r)}}function th(){for(let s=0;s<=4;s++){const e=document.getElementById(`floor-card-${s}`);e&&(e.className=s===re.activeFloor?"floor-card cursor-pointer p-2.5 rounded-xl border border-[#c86446]/70 bg-[#c86446]/12 copper-glow transition-all":"floor-card cursor-pointer p-2.5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] transition-all")}}function nh(){const s=bi[re.activeFloor],e=document.getElementById("spotPillsContainer");e.innerHTML="",s.spots.forEach(t=>{const n=document.createElement("button");n.id=`pill-${t.id}`;const i=t.id===re.activeSpot.id;n.className=i?"px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#c86446] text-white transition-all shadow":"px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/5 text-slate-300 hover:bg-white/10 transition-all",n.textContent=`${t.icon} ${t.name}`,n.addEventListener("click",()=>sh(t)),e.appendChild(n)})}function Sl(s){re.activeAnim=s,document.getElementById("alinaPoseBadge").textContent=s,document.querySelectorAll(".anim-btn").forEach(e=>{const t=e.dataset.anim===s;e.className=t?"anim-btn py-1.5 px-1 rounded-lg border border-[#c86446] bg-[#c86446]/25 text-white font-semibold":"anim-btn py-1.5 px-1 rounded-lg border border-white/10 bg-black/40 text-slate-300 hover:bg-white/10"})}function ih(s){re.activeFloor=s;const e=bi[s];document.getElementById("currentFloorTag").textContent=e.floorName,th(),cr(),He==null||He.sendFloor(s),sh(e.spots[0])}function sh(s){re.activeSpot=s,nh(),document.getElementById("currentSpotTitle").textContent=s.name,document.getElementById("fluxPromptBox").textContent=s.prompt,document.getElementById("scriptInput").value=s.script,document.getElementById("alinaPosBadge").textContent=`X: ${s.alinaPos.x.toFixed(1)} Y: ${s.alinaPos.y.toFixed(1)} Z: ${s.alinaPos.z.toFixed(1)}`,document.getElementById("brollPackage").innerHTML=s.brolls.map(e=>`<div>• ${e}</div>`).join(""),nn==null||nn.placeAtSpot(s),Sl(s.defaultAnim||"Idle"),qe==null||qe.flyTo(s.camPos,s.camTarget),He==null||He.sendSpot(s.id),He==null||He.sendAnimation(s.defaultAnim||"Idle"),Hi(),Bi==null||Bi.onSpotChanged()}function Za(s){for(const e of Object.values(bi)){const t=e.spots.find(n=>n.id===s);if(t)return t}return null}function Kc(s){const e=Za(s);!e||re.activeSpot&&re.activeSpot.id===e.id&&re.activeFloor===e.floor||(re.activeFloor=e.floor,re.activeSpot=e,document.getElementById("currentFloorTag").textContent=bi[e.floor].floorName,th(),cr(),nh(),document.getElementById("currentSpotTitle").textContent=e.name,document.getElementById("fluxPromptBox").textContent=e.prompt,document.getElementById("alinaPosBadge").textContent=`X: ${e.alinaPos.x.toFixed(1)} Y: ${e.alinaPos.y.toFixed(1)} Z: ${e.alinaPos.z.toFixed(1)}`,nn==null||nn.placeAtSpot(e))}function Hi(){const s=bi[re.activeFloor].floorName.split("•")[0].trim(),e=re.activeEngine==="threejs"?"Three.js GLB":"Unity 6 URP",t=re.depthPass?"DEPTH PASS":re.activeSpot.name;document.getElementById("viewport-status-hud").textContent=`${s} • ${t} [${e}]`}function $c(s){re.lightingMode=s,gi==null||gi.setMode(s),He==null||He.sendLightingMode(s),Bi==null||Bi.onModeChanged();const e=document.getElementById("btn-mode-day"),t=document.getElementById("btn-mode-night");s==="day"?(e.className="px-2.5 py-1 rounded-lg bg-[#c86446] text-white font-medium shadow transition-all",t.className="px-2.5 py-1 rounded-lg text-slate-400 hover:text-white font-medium transition-all"):(t.className="px-2.5 py-1 rounded-lg bg-[#c86446] text-white font-medium shadow transition-all",e.className="px-2.5 py-1 rounded-lg text-slate-400 hover:text-white font-medium transition-all")}function Zc(s){re.depthPass=s;const e=new L(re.activeSpot.alinaPos.x,re.activeSpot.alinaPos.y+1,re.activeSpot.alinaPos.z);qe==null||qe.setDepthPass(s,e),He==null||He.sendRenderPass(s?"depth":"beauty");const t=document.getElementById("btn-beauty-pass"),n=document.getElementById("btn-depth-pass");s?(n.className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white font-semibold shadow",t.className="px-2.5 py-1 rounded-lg text-slate-400 hover:text-white font-semibold transition-colors"):(t.className="px-2.5 py-1 rounded-lg bg-[#c86446] text-white font-semibold shadow",n.className="px-2.5 py-1 rounded-lg text-slate-400 hover:text-white font-semibold transition-colors"),Hi()}function ia(s){const e=re.activeSpot;if(s==="dollhouse"){re.sliced=!1,$a(),cr(),qe==null||qe.flyTo({x:3.5,y:12.8,z:36},{x:0,y:11.2,z:-5.5}),He==null||He.sendDollhouseSlice(!1),He==null||He.sendCameraAngle("dollhouse"),document.getElementById("viewport-status-hud").textContent=`CASA DE MUÑECAS 5 PISOS (4.9m/nivel) [${re.activeEngine==="threejs"?"Three.js":"Unity 6 URP"}]`;return}if(s==="overview"){re.sliced=!1,$a(),cr(),qe==null||qe.flyTo({x:30,y:24.5,z:33.5},{x:0,y:10.5,z:-4}),He==null||He.sendDollhouseSlice(!1),He==null||He.sendCameraAngle("overview"),document.getElementById("viewport-status-hud").textContent=`EXTERIOR 3/4 • 5 PISOS (24.5m ALTO) [${re.activeEngine==="threejs"?"Three.js":"Unity 6 URP"}]`;return}s==="85mm"||s==="reset"?qe==null||qe.flyTo(e.camPos,e.camTarget):s==="macro"?qe==null||qe.flyTo(e.macroPos,e.macroTarget):s==="top"&&(qe==null||qe.flyTo({x:e.alinaPos.x,y:e.alinaPos.y+4.3,z:e.alinaPos.z+1},{x:e.alinaPos.x,y:e.alinaPos.y,z:e.alinaPos.z})),He==null||He.sendCameraAngle(s),Hi()}function sa(){const s=re.activeEngine==="threejs"&&qe?qe.getCameraTelemetry():{source:"Unity6_URP_WebGL",spot:re.activeSpot.id};return{engine:re.activeEngine==="threejs"?"Motor A: Three.js WebGL + alina.glb":"Motor B: Unity 6 URP WebGL",character:"Alina Van Dijk",token_lock:"28yo Dutch-Latin woman Alina Van Dijk, vivid copper red hair with natural soft waves, vivid emerald green eyes, light natural freckles, crimson lips, micro-pores",floor:bi[re.activeFloor].floorName,spot:re.activeSpot.name,animation:re.activeAnim,lighting_mode:re.lightingMode,spatial_coordinates:re.activeSpot.alinaPos,camera_telemetry:s,higgsfield_zero_waste:{mode:"Image-to-Video",motion_strength:parseFloat(document.getElementById("motionSlider").value),aspect_ratio:"9:16 (1080x1920)",duration_seconds:3.5,lipsync_engine:re.motionEngine,brolls:re.activeSpot.brolls},flux_prompt:re.activeSpot.prompt,elevenlabs_script:document.getElementById("scriptInput").value}}async function Jc(s){if(re.activeEngine===s)return;re.activeEngine=s;const e=document.getElementById("three-canvas-container"),t=document.getElementById("unity-canvas-container"),n=document.getElementById("btn-engine-a"),i=document.getElementById("btn-engine-b"),r=document.getElementById("motor-badge");if(s==="threejs"){e.classList.remove("hidden"),t.classList.add("hidden"),n.className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white font-semibold shadow transition-all",i.className="px-2.5 py-1 rounded-lg text-slate-300 hover:text-white font-semibold transition-all",r.textContent="THREE.JS ACTIVE",qe==null||qe.onWindowResize(),gs(),Hi();return}e.classList.add("hidden"),t.classList.remove("hidden"),i.className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white font-semibold shadow transition-all",n.className="px-2.5 py-1 rounded-lg text-slate-300 hover:text-white font-semibold transition-all",r.textContent="UNITY 6 URP",gs(),Hi(),He.pendingState={floor:re.activeFloor,spotId:re.activeSpot.id,lightingMode:re.lightingMode,sliced:re.sliced,anim:re.activeAnim,renderPass:re.depthPass?"depth":"beauty"};try{await He.ensureLoaded(),He.syncFullState(He.pendingState)}catch(o){document.getElementById("unity-loading-text").textContent=`Error al cargar Unity WebGL: ${o.message}`,Un(`⚠️ <span class="text-rose-400">Error Unity WebGL:</span> ${o.message}`)}}function Qc(s=null){const e=s!==null?s:!re.theaterMode;re.theaterMode=e;const t=document.getElementById("viewport-wrapper"),n=document.getElementById("btn-fullscreen");t.classList.toggle("viewport-theater",e),n.textContent=e?"✕ Salir Completa":"⛶ Completa",requestAnimationFrame(()=>qe==null?void 0:qe.onWindowResize()),setTimeout(()=>qe==null?void 0:qe.onWindowResize(),120)}function Wx(){document.getElementById("btn-engine-a").addEventListener("click",()=>Jc("threejs")),document.getElementById("btn-engine-b").addEventListener("click",()=>Jc("unity")),document.getElementById("btn-mode-day").addEventListener("click",()=>$c("day")),document.getElementById("btn-mode-night").addEventListener("click",()=>$c("night")),document.getElementById("btn-slice").addEventListener("click",()=>{re.sliced=!re.sliced,$a(),cr(),He==null||He.sendDollhouseSlice(re.sliced)}),document.getElementById("btn-dollhouse").addEventListener("click",()=>ia("dollhouse")),document.getElementById("btn-overview").addEventListener("click",()=>ia("overview")),document.getElementById("btn-fullscreen").addEventListener("click",()=>Qc()),window.addEventListener("keydown",s=>{s.key==="Escape"&&re.theaterMode&&Qc(!1)}),document.getElementById("btn-guide-916").addEventListener("click",()=>{re.guide916=!re.guide916,document.getElementById("guide-916-overlay").classList.toggle("hidden",!re.guide916),document.getElementById("btn-guide-916").textContent=re.guide916?"📱 Guía 9:16: ON":"📱 Guía 9:16: OFF"}),document.getElementById("btn-beauty-pass").addEventListener("click",()=>Zc(!1)),document.getElementById("btn-depth-pass").addEventListener("click",()=>Zc(!0)),document.querySelectorAll(".cam-preset-btn").forEach(s=>{s.addEventListener("click",()=>ia(s.dataset.cam))}),document.querySelectorAll(".anim-btn").forEach(s=>{s.addEventListener("click",()=>{const e=s.dataset.anim;Sl(e),nn==null||nn.playAnimation(e),He==null||He.sendAnimation(e)})}),document.querySelectorAll(".motion-btn").forEach(s=>{s.addEventListener("click",()=>{re.motionEngine=s.dataset.motion,document.querySelectorAll(".motion-btn").forEach(e=>{const t=e.dataset.motion===re.motionEngine;e.className=t?"motion-btn p-2 rounded-xl border border-emerald-500/50 bg-emerald-500/10 text-left":"motion-btn p-2 rounded-xl border border-white/5 bg-black/40 text-left hover:bg-white/5",e.querySelector("div").className=t?"font-bold text-emerald-400 text-[11px]":"font-bold text-white text-[11px]"})})}),document.getElementById("motionSlider").addEventListener("input",s=>{document.getElementById("motionVal").textContent=s.target.value}),document.getElementById("copyBtn").addEventListener("click",()=>{navigator.clipboard.writeText(document.getElementById("fluxPromptBox").textContent);const s=document.getElementById("copyBtn");s.textContent="¡Copiado!",setTimeout(()=>{s.textContent="Copiar"},1500)}),document.getElementById("btn-share").addEventListener("click",()=>{navigator.clipboard.writeText(window.location.href);const s=document.getElementById("btn-share");s.innerHTML="<span>¡Enlace Copiado!</span>",setTimeout(()=>{s.innerHTML="<span>Compartir Web</span>"},1800)}),document.getElementById("btn-export-png").addEventListener("click",()=>{if(re.activeEngine==="threejs"){const s=qe.renderVertical916DataURL(1080,1920,re.depthPass),e=re.depthPass?"depth":"beauty";ki(s,`alina_9x16_piso${re.activeFloor}_${re.activeSpot.id}_${e}.png`),Un(`✅ <span class="text-emerald-400 font-bold">Frame 1080×1920 (${e}) exportado.</span>`)}else re.depthPass?(He.requestDepthScreenshot916(),Un("📸 Capturando Depth Map 1080×1920 desde Unity 6 URP...")):(He.requestScreenshot916(),Un("📸 Capturando 1080×1920 desde Unity 6 URP..."))}),document.getElementById("btn-export-json").addEventListener("click",()=>{Jr(sa(),`alina_higgsfield_piso${re.activeFloor}_${re.activeSpot.id}.json`),Un('✅ <span class="text-amber-300 font-bold">JSON técnico de cámara Higgsfield descargado.</span>')}),document.getElementById("btn-export-package").addEventListener("click",()=>{const s=`alina_piso${re.activeFloor}_${re.activeSpot.id}`;if(re.activeEngine==="threejs"){const e=qe.renderVertical916DataURL(1080,1920,!1);ki(e,`${s}_beauty_1080x1920.png`),setTimeout(()=>{const t=qe.renderVertical916DataURL(1080,1920,!0);ki(t,`${s}_depth_1080x1920.png`)},220),setTimeout(()=>{Jr(sa(),`${s}_higgsfield.json`)},440),Un('✅ <span class="text-emerald-400 font-bold">Paquete 9:16 completo exportado (Beauty + Depth + JSON).</span>')}else He.requestScreenshot916(),setTimeout(()=>{He.requestDepthScreenshot916()},300),setTimeout(()=>{Jr(sa(),`${s}_unity_higgsfield.json`)},600),Un('✅ <span class="text-emerald-400 font-bold">Paquete Unity 9:16 exportado (Beauty + Depth + JSON).</span>')})}async function Xx(){const s=performance.now();Gx(),Wx();const e=document.getElementById("three-canvas-container");hs=new Id,Ln=new p_({antialias:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"}),Ln.setPixelRatio(Math.min(window.devicePixelRatio,2)),Ln.setSize(e.clientWidth||720,e.clientHeight||460,!1),Ln.shadowMap.enabled=!0,Ln.shadowMap.type=td,e.appendChild(Ln.domElement),gi=new __(hs,Ln),co=ix(hs,gi),qe=new vx(e,hs,Ln,gi),nn=new sx(hs),Zs=new Bx({scene:hs,renderer:Ln,lighting:gi,camCtrl:qe,alina:nn,unityBridge:He,getSpot:n=>n?Za(n):re.activeSpot,prepareSpot:Kc,getBaseMode:()=>re.lightingMode}),Bi=Vx(document.getElementById("cinema-panel"),{director:Zs,getSpot:Za,getActiveSpot:()=>re.activeSpot,setActiveSpot:Kc,getAnim:()=>re.activeAnim,renderer:Ln,camCtrl:qe,download:{dataUrl:ki,json:Jr},setStatus:Un}),He=new yx(document.getElementById("unity-canvas"),n=>{document.getElementById("unity-progress-bar").style.width=`${n}%`,document.getElementById("unity-loading-text").textContent=`Cargando runtime Unity 6 URP... ${n}%`},n=>{n!=null&&(re.unityLoadMs=n),document.getElementById("unity-loading-overlay").classList.add("hidden"),gs(),Hi()},n=>{ki(`data:image/png;base64,${n}`,`alina_unity_9x16_piso${re.activeFloor}_${re.activeSpot.id}_beauty.png`),Un('✅ <span class="text-emerald-400 font-bold">Captura Unity Beauty 1080×1920 PNG descargada.</span>')},n=>{re.unityFps=n,re.activeEngine==="unity"&&gs()},n=>{ki(`data:image/png;base64,${n}`,`alina_unity_9x16_piso${re.activeFloor}_${re.activeSpot.id}_depth.png`),Un('✅ <span class="text-emerald-400 font-bold">Captura Unity Depth Map 1080×1920 PNG descargada.</span>')}),ih(2);try{await nn.load("./models/alina.glb"),nn.placeAtSpot(re.activeSpot),Sl(re.activeSpot.defaultAnim||"Idle"),re.threeLoadMs=Math.round(performance.now()-s),gs(),Hi()}catch(n){console.error("[AlinaLoader] Error:",n),document.getElementById("viewport-status-hud").textContent=`Error cargando alina.glb: ${n.message}`}function t(){requestAnimationFrame(t);const n=Math.min(qc.getDelta(),.1),i=qc.elapsedTime;if(re.activeEngine==="threejs"){nn.update(n),gi.update(i);for(const o of co.waterMeshes)o.position.y=(o.userData.baseY??(o.userData.baseY=o.position.y))+Math.sin(i*2.2)*.012;Zs==null||Zs.update(),qe.update(),qe.render(),ta++;const r=performance.now();r-na>=750&&(eh=Math.round(ta*1e3/(r-na)),ta=0,na=r,gs())}}t()}Xx();
