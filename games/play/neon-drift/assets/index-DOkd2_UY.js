import{W as Dt}from"./three-renderer-D_WcrXaz.js";import{cg as Ze,bO as k,ch as Nt,bF as qe,C as q,ci as Lt,cj as Je,ck as dt,g as U,cl as fe,m as te,c0 as ee,cm as Gt,cn as Ft,co as ce,cp as ht,O as Ot,i as Qe,j as Ie,au as L,bJ as we,o as D,b as ye,H as Me,ay as It,cq as zt,k as Vt,d as Ht,n as qt,bX as Qt,bW as Xt,bV as Wt,bU as $t,bT as Kt,bS as jt,bR as Yt,aK as Xe,D as ze,av as Zt,cr as et,cs as Jt,ct as es,cu as ts,P as ss}from"./three-core-bPI3gPZ7.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=s(i);fetch(i.href,o)}})();function Pe(t){return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,t|1);return e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function rs(t){let e=2166136261;for(let s=0;s<t.length;s++)e=Math.imul(e^t.charCodeAt(s),16777619);return e>>>0}const Ne=57,Le=41,tt=[-5.7,-2.85,0,2.85,5.7];function st(t,e){const s=e-5,r=e+382,i=Math.max(0,Math.floor((s-Le-9)/Ne)),o=Math.ceil((r-Le+9)/Ne),a=[];for(let l=i;l<=o;l++){const c=Pe(t^Math.imul(l+1,668265261)),u=Le+l*Ne+(l===0?0:(c()-.5)*18);u<s||u>r||a.push({id:l,s:u,kind:l%3===0?"cell":"gem",lateral:l===0?0:tt[Math.floor(c()*tt.length)]})}return a}function is(t,e){return Math.abs(e.s-t.s)<2.4&&Math.abs(e.lateral-t.lateral)<1.65}const ue=9,he=144;function os(t){function e(o){const a=Pe(t^Math.imul(o,2654435769));return{x:(a()-.5)*76,y:(a()-.5)*15}}let s=NaN,r=e(0),i=e(1);return o=>{const a=Math.floor(o/he);a!==s&&(s=a,r=e(a),i=e(a+1));const l=o/he-a,c=l*l*l*(10+l*(-15+6*l)),u=30*l*l*(1-l)**2/he,n=60*l*(1-l)*(1-2*l)/he**2;return{x:r.x+(i.x-r.x)*c,y:r.y+(i.y-r.y)*c,heading:Math.atan((i.x-r.x)*u),pitch:Math.atan((i.y-r.y)*u),curvature:(i.x-r.x)*n}}}const as=77,ns=103,ls=()=>({s:0,lateral:0,speed:23,lateralSpeed:0,yaw:0,drifting:!1,charge:0,boost:0});function cs(t,e,s,r){const i=e.drift&&t.speed>19&&(t.drifting||Math.abs(e.steer)>.15),o=t.drifting&&!i&&t.charge>=.16,a=o?Math.max(t.boost,.4+t.charge*1.9):Math.max(0,t.boost-r),l=i?Math.min(1,t.charge+r*Math.abs(e.steer)*.85):Math.max(0,t.charge-(o?1:r*2)),c=Math.abs(t.lateral)>ue-.4,u=c?32:a>0?ns:as,n=e.throttle*15-3-e.brake*42+(a>0?35:0),f=Math.max(0,t.speed>u?Math.max(u,t.speed-r*(c?42:20)-e.brake*28*r):Math.min(u,t.speed+n*r)),d=e.steer*(i?13:10)*Math.min(1,f/22)-s.curvature*f*(i?4.5:3),h=t.lateralSpeed+(d-t.lateralSpeed)*(1-Math.exp(-r*(i?4:9))),p=Math.min(ue+2,Math.max(-ue-2,t.lateral+h*r)),g=t.yaw+(e.steer*(i?.58:.22)-t.yaw)*(1-Math.exp(-r*9));return{s:t.s+f*r,speed:f,lateral:p,lateralSpeed:h,yaw:g,drifting:i,charge:l,boost:a}}function us(){return{time:0,distance:0,score:0,topSpeed:0,nearMisses:0,pickups:0,drifts:0,multiplier:1}}function fs(t,e,s,r){const i={...t,time:t.time+r,distance:e.s,score:t.score+Math.max(0,e.s-t.distance)*2*t.multiplier,topSpeed:Math.max(t.topSpeed,e.speed)};for(const o of s)switch(o){case"nearMiss":i.nearMisses++,i.multiplier=Math.min(3,i.multiplier+.25),i.score+=125*i.multiplier;break;case"boost":i.drifts++,i.score+=50*i.multiplier;break;case"gem":i.pickups++,i.score+=250*i.multiplier;break;case"cell":i.pickups++,i.score+=75*i.multiplier;break;case"crash":i.multiplier=1;break}return i}const pt=12,pe=68,Ge=110,me=[-5.7,0,5.7],ge=[16725870,5496823,11696639,16755794],mt=1.9,ds=3.6,hs=3.4;function rt(t,e,s){const r=pt*s,i=e-28,o=e+390,a=Math.max(0,Math.floor((i-Ge-r-40)/pe)),l=Math.ceil((o-Ge-r+4)/pe),c=[];for(let u=a;u<=l;u++){const n=Pe(t^Math.imul(u+1,1540483477)),f=Ge+u*pe+r+(n()-.5)*8,d=u===0?1:Math.floor(n()*me.length),h=ge[Math.floor(n()*ge.length)],p=Math.max(0,u*pe-450),g=Math.min(.88,p/2400),m=n()<g,b=(d+1+Math.floor(n()*2))%me.length,T=ge[Math.floor(n()*ge.length)],_=Math.min(1.55,p/1050),P=me[d]+(n()*2-1)*_,x=me[b]+(n()*2-1)*_;f>=i&&f<=o&&c.push({id:u*2,s:f,lateral:P,color:h});const z=f+28;m&&z>=i&&z<=o&&c.push({id:u*2+1,s:z,lateral:x,color:T})}return c}function ps(t,e){return Math.abs(e.s-t.s)<ds&&Math.abs(e.lateral-t.lateral)<mt}function ms(t,e,s,r){return t.s<s.s-pt*r&&e.s>=s.s}function gs(t,e){const s=Math.abs(e.lateral-t.lateral);return s>=mt&&s<=hs}function We(t){const e=os(t);let s=ls(),r=rt(t,0,0),i=st(t,0),o=us(),a=!1,l=-1;const c=new Set;function u(n,f){if(a)return[];const d=[],h=s;s=cs(h,n,e(h.s),f),r=rt(t,s.s,o.time+f),h.drifting&&!s.drifting&&h.charge>=.16&&d.push("boost");for(const p of r){if(ps(s,p)){a=!0,d.push("crash");break}p.id>l&&ms(h,s,p,f)&&(l=p.id,gs(s,p)&&d.push("nearMiss"))}if(!a){const p=st(t,s.s),g=p[0]?.id??1/0;for(const m of c)m<g&&c.delete(m);i=p.filter(m=>c.has(m.id)?!1:is(s,m)?(c.add(m.id),d.push(m.kind),m.kind==="cell"&&(s={...s,boost:Math.max(s.boost,.85)}),!1):!0)}return o=fs(o,s,d,f),d}return{get car(){return s},track:e,get traffic(){return r},get pickups(){return i},get stats(){return o},get ended(){return a},step:u}}function vs(t=new Date){return t.toISOString().slice(0,10)}function bs(t){return rs(t)}const ys=1e5,gt=2e3,Ms=100,vt=10,bt=100,yt=1e3,xs=1200,Ts=1e3;function ws(t,e){return[Math.round(t*1e3),Math.round(e.s*vt),Math.round(e.lateral*bt),Math.round(e.yaw*yt)]}function Mt(t){return Array.isArray(t)&&t.length===4&&t.every(Number.isSafeInteger)&&t[0]>=0&&t[1]>=0&&Math.abs(t[2])<=xs&&Math.abs(t[3])<=Ts}function xt(t){let e=[0,0,0,0],s=[e],r=Ms,i=r;return{record(o,a){const l=ws(o,a);if(!(!Mt(l)||l[0]<e[0]||l[1]<e[1])){if(e=l,l[0]===0){s[0]=l;return}l[0]<i||(s.length>=gt-1&&(s=s.filter((c,u)=>u%2===0),r*=2),s.push(l),i=(Math.floor(l[0]/r)+1)*r)}},finish(){const o=s.map(l=>[...l]),a=o.length-1;return o[a][0]===e[0]?o[a]=[...e]:o.push([...e]),{version:1,seed:t>>>0,samples:o}}}}function Ss(t){if(t.length>ys)return null;try{const e=JSON.parse(t);if(typeof e!="object"||e===null)return null;const{version:s,seed:r,samples:i}=e;if(s!==1||typeof r!="number"||r!==r>>>0||!Array.isArray(i)||i.length===0||i.length>gt)return null;let o=-1,a=0;for(const l of i){if(!Mt(l)||l[0]<=o||l[1]<a)return null;o=l[0],a=l[1]}return i[0][0]!==0?null:{version:s,seed:r,samples:i}}catch{return null}}function As(t,e){const s=e*1e3;let r=0,i=t.samples.length-1;if(!Number.isFinite(s)||i<0||s<t.samples[0][0]||s>t.samples[i][0])return;for(;i-r>1;){const c=r+i>>>1;t.samples[c][0]>s?i=c:r=c}const o=t.samples[r],a=t.samples[i],l=a[0]===o[0]?0:(s-o[0])/(a[0]-o[0]);return{s:(o[1]+(a[1]-o[1])*l)/vt,lateral:(o[2]+(a[2]-o[2])*l)/bt,yaw:(o[3]+(a[3]-o[3])*l)/yt}}const ve=32,ae=32,Fe=390;function it(t,e,s,r,i){const o=new k(t,e,s),a=o.getAttribute("position");for(let l=0;l<a.count;l++)a.getY(l)>0&&a.setXYZ(l,a.getX(l)*r,a.getY(l),a.getZ(l)*i);return o.computeVertexNormals(),o}const O=t=>new ee({color:t}),W=(t,e)=>O(new q(t).multiplyScalar(e));function V(t,e,s,r,i,o){const a=new te(e,s);a.position.set(r,i,o),t.add(a)}function Cs(t){const e=it(2.16,.54,4.1,.91,.92),s=it(1.74,.5,2.02,.69,.63),r=new Ze;V(r,e,O("#b82c76"),0,.49,0),V(r,s,O("#332446"),0,1,-.28),V(r,new k(1.75,.25,.07),O("#1b102c"),0,.48,2.018),V(r,new k(1.74,.11,.09),O("#ed568c"),0,.77,1.76);const i=new k(.3,.61,.78),o=O("#140f22"),a=new k(.031,.32,.32),l=O("#9278af"),c=new k(.69,.122,.09),u=W("#ff256c",2.6),n=new k(.06,.071,2.72),f=W("#ea39db",1.7);for(const y of[-1,1]){for(const w of[-1.31,1.31])V(r,i,o,y*1.01,.31,w),V(r,a,l,y*1.17,.31,w);V(r,c,u,y*.48,.55,2.056),V(r,n,f,y*1.03,.28,0)}t.add(r);const d=new Ze;d.visible=!1,d.scale.setScalar(1.08);const h=new Nt({color:new q("#63ffe6").multiplyScalar(2.5),transparent:!0,depthWrite:!1,blending:qe});function p(y,w,B=0){const S=new Gt(new Ft(y),h);S.position.set(0,w,B),d.add(S)}p(e,.49),p(s,1,-.28),p(new k(1.6,.12,.16),.55,2.04),t.add(d);function g(y,w,B){const S=new ce(y,w,B);return S.instanceMatrix.setUsage(ht),S.frustumCulled=!1,S.count=0,t.add(S),S}const m=g(e,O("#ffffff"),ve),b=g(s,O("#524564"),ve),T=g(new k(1.54,.108,.08),W("#ff525c",1.5),ve),_={cell:g(new k(.76,1.48,.6),W("#55ffe0",2),ae),gem:g(new Lt(.71),W("#ffb556",2.2),ae)},P={cell:g(new Je(.93,.04,4,16),W("#36cdb6",1.5),ae),gem:g(new Je(.93,.04,4,16),W("#cb6f32",1.5),ae)},x=new dt,z=new q,N="YXZ",Q=new U,oe=(y,w,B,S,G)=>{Q.set(B,S,G).applyEuler(x.rotation),x.position.add(Q),x.updateMatrix(),y.setMatrixAt(w,x.matrix),x.position.sub(Q)};return({car:y,track:w,traffic:B,pickups:S,time:G,ghost:A})=>{const X=w(y.s);if(r.position.set(X.x+y.lateral,X.y,-y.s),r.rotation.set(X.pitch,-X.heading-y.yaw,-.1*y.yaw,N),d.visible=!1,A&&A.s>y.s-8&&A.s<y.s+Fe){const v=w(A.s),C=Math.hypot((A.s-y.s)/4,(A.lateral-y.lateral)/2.1);d.visible=!0,h.opacity=fe.lerp(.38,.83,Math.min(1,C)),d.position.set(v.x+A.lateral,v.y+.12,-A.s),d.rotation.set(v.pitch,-v.heading-A.yaw,-.1*A.yaw,N)}let F=0;for(const v of B){if(F===ve)break;if(v.s<y.s-30||v.s>y.s+Fe)continue;const C=w(v.s);x.position.set(C.x+v.lateral,C.y,-v.s),x.rotation.set(C.pitch,-C.heading,0,N),oe(m,F,0,.49,0),oe(b,F,0,1,-.28),oe(T,F,0,.54,2.05),m.setColorAt(F,z.setHex(v.color)),F++}for(const v of[m,b,T])v.count=F,v.instanceMatrix.needsUpdate=!0;m.instanceColor&&(m.instanceColor.needsUpdate=!0),_.cell.count=0,_.gem.count=0;for(const v of S){const C=_[v.kind];if(C.count===ae||v.s<y.s-30||v.s>y.s+Fe)continue;const j=w(v.s),De=Math.sin(G*4+v.id);x.position.set(j.x+v.lateral,j.y+1.03+.18*De,-v.s),x.rotation.set(.16,G*2.5+v.id,.26,N),x.updateMatrix(),C.setMatrixAt(C.count,x.matrix),x.position.y=j.y+.14,x.rotation.set(-Math.PI/2,0,0),x.updateMatrix(),P[v.kind].setMatrixAt(C.count,x.matrix),C.count++}for(const v of["cell","gem"])_[v].instanceMatrix.needsUpdate=!0,P[v].count=_[v].count,P[v].instanceMatrix.needsUpdate=!0}}const xe={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ie{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const _s=new Ot(-1,1,1,-1,0,1);class Es extends Qe{constructor(){super(),this.setAttribute("position",new Ie([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ie([0,2,0,0,2,0],2))}}const Rs=new Es;class $e{constructor(e){this._mesh=new te(Rs,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,_s)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ps extends ie{constructor(e,s="tDiffuse"){super(),this.textureID=s,this.uniforms=null,this.material=null,e instanceof L?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=we.clone(e.uniforms),this.material=new L({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new $e(this.material)}render(e,s,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(s),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class ot extends ie{constructor(e,s){super(),this.scene=e,this.camera=s,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,s,r){const i=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let a,l;this.inverse?(a=0,l=1):(a=1,l=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),o.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),o.buffers.stencil.setClear(l),o.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(s),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(i.EQUAL,1,4294967295),o.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),o.buffers.stencil.setLocked(!0)}}class Bs extends ie{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Us{constructor(e,s){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),s===void 0){const r=e.getSize(new D);this._width=r.width,this._height=r.height,s=new ye(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Me}),s.texture.name="EffectComposer.rt1"}else this._width=s.width,this._height=s.height;this.renderTarget1=s,this.renderTarget2=s.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ps(xe),this.copyPass.material.blending=It,this.clock=new zt}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,s){this.passes.splice(s,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const s=this.passes.indexOf(e);s!==-1&&this.passes.splice(s,1)}isLastEnabledPass(e){for(let s=e+1;s<this.passes.length;s++)if(this.passes[s].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const s=this.renderer.getRenderTarget();let r=!1;for(let i=0,o=this.passes.length;i<o;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),a.needsSwap){if(r){const l=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}ot!==void 0&&(a instanceof ot?r=!0:a instanceof Bs&&(r=!1))}}this.renderer.setRenderTarget(s)}reset(e){if(e===void 0){const s=this.renderer.getSize(new D);this._pixelRatio=this.renderer.getPixelRatio(),this._width=s.width,this._height=s.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,s){this._width=e,this._height=s;const r=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(r,i),this.renderTarget2.setSize(r,i);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(r,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const be={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class ks extends ie{constructor(){super(),this.isOutputPass=!0,this.uniforms=we.clone(be.uniforms),this.material=new Vt({name:be.name,uniforms:this.uniforms,vertexShader:be.vertexShader,fragmentShader:be.fragmentShader}),this._fsQuad=new $e(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,s,r){this.uniforms.tDiffuse.value=r.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ht.getTransfer(this._outputColorSpace)===qt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Qt?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Xt?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Wt?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===$t?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Kt?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===jt?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Yt&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(s),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Ds extends ie{constructor(e,s,r=null,i=null,o=null){super(),this.scene=e,this.camera=s,this.overrideMaterial=r,this.clearColor=i,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new q}render(e,s,r){const i=e.autoClear;e.autoClear=!1;let o,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(o=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}const Ns={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new q(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class se extends ie{constructor(e,s=1,r,i){super(),this.strength=s,this.radius=r,this.threshold=i,this.resolution=e!==void 0?new D(e.x,e.y):new D(256,256),this.clearColor=new q(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new ye(o,a,{type:Me}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let n=0;n<this.nMips;n++){const f=new ye(o,a,{type:Me});f.texture.name="UnrealBloomPass.h"+n,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new ye(o,a,{type:Me});d.texture.name="UnrealBloomPass.v"+n,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),o=Math.round(o/2),a=Math.round(a/2)}const l=Ns;this.highPassUniforms=we.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new L({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];const c=[6,10,14,18,22];o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let n=0;n<this.nMips;n++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[n])),this.separableBlurMaterials[n].uniforms.invSize.value=new D(1/o,1/a),o=Math.round(o/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=s,this.compositeMaterial.uniforms.bloomRadius.value=.1;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=we.clone(xe.uniforms),this.blendMaterial=new L({uniforms:this.copyUniforms,vertexShader:xe.vertexShader,fragmentShader:xe.fragmentShader,premultipliedAlpha:!0,blending:qe,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new q,this._oldClearAlpha=1,this._basic=new ee,this._fsQuad=new $e(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,s){let r=Math.round(e/2),i=Math.round(s/2);this.renderTargetBright.setSize(r,i);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(r,i),this.renderTargetsVertical[o].setSize(r,i),this.separableBlurMaterials[o].uniforms.invSize.value=new D(1/r,1/i),r=Math.round(r/2),i=Math.round(i/2)}render(e,s,r,i,o){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),o&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let l=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[c].uniforms.direction.value=se.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=se.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),l=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(r),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const s=[],r=e/3;for(let i=0;i<e;i++)s.push(.39894*Math.exp(-.5*i*i/(r*r))/r);return new L({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new D(.5,.5)},direction:{value:new D(.5,.5)},gaussianCoefficients:{value:s}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new L({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}se.BlurDirectionX=new D(1,0);se.BlurDirectionY=new D(0,1);const Tt=`
  varying vec2 screenUV;
  void main() {
    screenUV = uv;
    gl_Position = vec4(position.xy, 0.9999, 1.);
  }`;function Ls(t){const e=new L({depthTest:!1,depthWrite:!1,uniforms:{aspect:{value:1},horizon:{value:.57},sunX:{value:.64}},vertexShader:Tt,fragmentShader:`
      uniform float aspect;
      uniform float horizon;
      uniform float sunX;
      varying vec2 screenUV;

      float hash(vec2 point) {
        return fract(sin(dot(point, vec2(127.1, 311.7))) * 43758.5453);
      }
      float ridge(float x, float detail) {
        float segment = floor(x * detail);
        float t = fract(x * detail);
        return mix(hash(vec2(segment, detail)), hash(vec2(segment + 1., detail)), t);
      }
      float stars(vec2 uv, float density) {
        vec2 point = uv * density;
        vec2 cell = floor(point);
        float brightness = hash(cell);
        vec2 offset = vec2(hash(cell + 2.), hash(cell + 9.)) * .65 + .175;
        float dist = length(fract(point) - offset);
        return step(.955, brightness) * (1. - smoothstep(.025, .105, dist))
          * mix(.24, .66, brightness);
      }
      void main() {
        vec2 uv = screenUV;
        float alt = uv.y - horizon;
        vec2 sun = vec2((uv.x - sunX) * aspect, alt - .102);
        float radius = .129;
        float dist = length(sun);
        float glow = exp(-dist * 7.5);
        float edge = 1. - smoothstep(radius - .0014, radius + .0008, dist);
        float stripe = smoothstep(.15, .43, fract((sun.y / radius + 1.) * 6.8));
        stripe = mix(stripe, 1., smoothstep(-.014, .053, sun.y));
        vec3 sunTone = mix(vec3(1.75, .055, .19), vec3(2.4, .76, .19),
          smoothstep(-.11, .11, sun.y));

        vec3 upper = vec3(.010, .007, .033);
        vec3 low = vec3(.16, .013, .105);
        vec3 tone = mix(low, upper, smoothstep(-.065, .39, alt));
        tone += vec3(.49, .075, .15) * glow;
        tone += stars(vec2(uv.x * aspect, uv.y), 79.) * smoothstep(.065, .34, alt)
          * vec3(.39, .53, .76);
        float clouds = ridge(uv.x + alt * .27, 12.) * ridge(uv.x - alt * .7, 33.);
        float cloudBands = sin(alt * 100. + clouds * 3.) * .5 + .5;
        tone += vec3(.095, .034, .056) * cloudBands * clouds
          * smoothstep(.005, .10, alt) * (1. - smoothstep(.10, .24, alt));
        tone = mix(tone, sunTone, edge * stripe);

        float width = max(1., aspect);
        float x = (uv.x - .5) * width;
        float distant = .012 + .068 * ridge(x, 12.) + .022 * ridge(x, 31.);
        distant *= mix(.52, 1., smoothstep(.015, .33, abs(x + .03)));
        float near = -.003 + .040 * ridge(x + .45, 16.) + .012 * ridge(x, 39.);
        vec3 farTone = mix(vec3(.05, .012, .076), vec3(.15, .028, .105), glow);
        tone = mix(tone, farTone, 1. - smoothstep(distant - .002, distant, alt));
        tone = mix(tone, vec3(.024, .008, .053), 1. - smoothstep(near - .001, near, alt));
        tone += exp(-abs(alt + .012) * 39.) * vec3(.057, .015, .061);
        float vignette = 1. - .22 * pow(length((uv - .5) * vec2(1.25, .9)), 1.4);
        tone *= vignette;
        tone += (hash(gl_FragCoord.xy) - .5) * .0023;
        gl_FragColor = vec4(max(tone, vec3(0.)), 1.);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),s=new te(new Xe(2,2),e);s.frustumCulled=!1,s.renderOrder=-100,t.add(s);const r=new U;return(i,o)=>{i.getWorldDirection(r);const a=Math.tan(fe.degToRad(i.fov*.5));e.uniforms.aspect.value=i.aspect,e.uniforms.horizon.value=fe.clamp(.5-r.y/(2*a),.4,.66),e.uniforms.sunX.value=i.aspect<1?.63:o?.7:.58}}function Gs(t,e,s){const r=new Us(t);r.addPass(new Ds(e,s));const i=new se(new D(1,1),.58,.56,.68),o=new ks;r.addPass(i),r.addPass(o);const a={power:{value:0},time:{value:0},aspect:{value:1}},l=new te(new Xe(2,2),new L({uniforms:a,depthTest:!1,depthWrite:!1,transparent:!0,vertexShader:Tt,blending:qe,fragmentShader:`
      uniform float power;
      uniform float time;
      uniform float aspect;
      varying vec2 screenUV;
      float random(float seed) { return fract(sin(seed * 47.83) * 47912.213); }
      void main() {
        vec2 point = (screenUV - vec2(.5, .54)) * vec2(aspect, 1.);
        float arm = atan(point.y, point.x) * 13.37;
        float ray = floor(arm);
        float offset = random(ray);
        float radius = length(point);
        float pulse = fract(radius * 2.1 - time * (1.8 + offset * .63) + random(ray + 8.));
        float edge = smoothstep(.20, .50 + offset * .19, radius);
        float streak = 1. - smoothstep(.035, .076, abs(fract(arm) - .5));
        float strength = edge * streak * step(.22, offset) * smoothstep(.72, 1., pulse) * power;
        vec3 color = mix(vec3(.21, .91, 1.26), vec3(1.46, .22, .49), offset);
        gl_FragColor = vec4(color, strength * .78);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}));l.frustumCulled=!1,l.renderOrder=100,e.add(l);let c=!1,u=0,n=16.7;return{resize(f,d,h){a.aspect.value=f/d,c||(r.setPixelRatio(h),r.setSize(f,d))},update(f,d,h,p){return a.power.value=f,a.time.value=d,l.visible=f>.01,!p||d<2||c||(n+=(h-n)*.055,u=n>25?u+h:Math.max(0,u-h*2),u<2400)?!1:(c=!0,i.dispose(),o.dispose(),r.dispose(),!0)},draw(f,d){c?t.render(f,d):r.render()}}}const at=106,Oe=5;function Fs(t){const e=new Xe(1,1,1,at),s=e.getAttribute("position"),r=e.clone(),i=r.getAttribute("position"),o=`
    varying vec2 roadUV;
    varying vec3 world;
    varying float depth;
    void main() {
      roadUV = uv;
      world = position;
      vec4 view = modelViewMatrix * vec4(position, 1.);
      depth = -view.z;
      gl_Position = projectionMatrix * view;
    }`,a=new te(r,new L({side:ze,vertexShader:o,fragmentShader:`
      varying vec3 world;
      varying float depth;
      float grid(float coord) {
        float line = abs(fract(coord + .5) - .5);
        return 1. - smoothstep(.009, .018 + fwidth(coord), line);
      }
      void main() {
        float net = max(grid(world.x / 10.), grid(world.z / 10.));
        float fog = smoothstep(50., 315., depth);
        vec3 color = vec3(.0105, .006, .022) + net * vec3(.055, .007, .068) * (1. - fog);
        color = mix(color, vec3(.025, .009, .052), fog);
        gl_FragColor = vec4(color, 1.);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}));a.frustumCulled=!1,t.add(a);const l=new L({side:ze,vertexShader:o,fragmentShader:`
      varying vec2 roadUV;
      varying vec3 world;
      varying float depth;
      float grid(float coord, float width) {
        return 1. - smoothstep(width, width + fwidth(coord) * .85 + .002, abs(fract(coord + .5) - .5));
      }
      void main() {
        float s = -world.z;
        float edge = min(roadUV.x, 1. - roadUV.x);
        float rail = 1. - smoothstep(.004, .011, edge);
        float railGlow = exp(-edge * 94.);
        float shoulder = step(.013, edge) * (1. - smoothstep(.026, .035, edge));
        float lane = roadUV.x * 3.;
        float stripes = grid(lane, .008) * smoothstep(.28, .39, fract(s / 12.));
        float crossbar = grid(s / 5., .009);
        float tiles = max(grid(roadUV.x * 12., .009), crossbar);
        float fade = 1. - smoothstep(155., 390., depth);
        vec3 color = vec3(.015, .008, .037);
        color += fade * tiles * vec3(.034, .017, .072);
        color += fade * stripes * vec3(.14, .22, .35);
        color += shoulder * mix(vec3(.04, .013, .044), vec3(.24, .020, .10), step(.50, fract(s / 8.)));
        color += railGlow * vec3(.24, .008, .095) + rail * vec3(1.68, .035, .39);
        color = mix(color, vec3(.052, .015, .077), smoothstep(95., 470., depth));
        gl_FragColor = vec4(color, 1.);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),c=new te(e,l);c.frustumCulled=!1,t.add(c);let u=NaN,n;return(f,d)=>{const h=Math.floor((d-25)/Oe)*Oe;if(!(u===h&&n===f)){u=h,n=f;for(let p=0;p<=at;p++){const g=h+p*Oe,m=f(g);s.setXYZ(p*2,m.x-ue,m.y,-g),s.setXYZ(p*2+1,m.x+ue,m.y,-g),i.setXYZ(p*2,m.x-420,m.y-.55,-g),i.setXYZ(p*2+1,m.x+420,m.y-.55,-g)}s.needsUpdate=!0,i.needsUpdate=!0}}}function Os(t,e=!1){const s=t[0].index!==null,r=new Set(Object.keys(t[0].attributes)),i=new Set(Object.keys(t[0].morphAttributes)),o={},a={},l=t[0].morphTargetsRelative,c=new Qe;let u=0;for(let n=0;n<t.length;++n){const f=t[n];let d=0;if(s!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+n+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const h in f.attributes){if(!r.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+n+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;o[h]===void 0&&(o[h]=[]),o[h].push(f.attributes[h]),d++}if(d!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+n+". Make sure all geometries have the same number of attributes."),null;if(l!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+n+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const h in f.morphAttributes){if(!i.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+n+".  .morphAttributes must be consistent throughout all geometries."),null;a[h]===void 0&&(a[h]=[]),a[h].push(f.morphAttributes[h])}if(e){let h;if(s)h=f.index.count;else if(f.attributes.position!==void 0)h=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+n+". The geometry must have either an index or a position attribute"),null;c.addGroup(u,h,n),u+=h}}if(s){let n=0;const f=[];for(let d=0;d<t.length;++d){const h=t[d].index;for(let p=0;p<h.count;++p)f.push(h.getX(p)+n);n+=t[d].attributes.position.count}c.setIndex(f)}for(const n in o){const f=nt(o[n]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+n+" attribute."),null;c.setAttribute(n,f)}for(const n in a){const f=a[n][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[n]=[];for(let d=0;d<f;++d){const h=[];for(let g=0;g<a[n].length;++g)h.push(a[n][g][d]);const p=nt(h);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+n+" morphAttribute."),null;c.morphAttributes[n].push(p)}}return c}function nt(t){let e,s,r,i=-1,o=0;for(let u=0;u<t.length;++u){const n=t[u];if(e===void 0&&(e=n.array.constructor),e!==n.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(s===void 0&&(s=n.itemSize),s!==n.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(r===void 0&&(r=n.normalized),r!==n.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=n.gpuType),i!==n.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=n.count*s}const a=new e(o),l=new Zt(a,s,r);let c=0;for(let u=0;u<t.length;++u){const n=t[u];if(n.isInterleavedBufferAttribute){const f=c/s;for(let d=0,h=n.count;d<h;d++)for(let p=0;p<s;p++){const g=n.getComponent(d,p);l.setComponent(d+f,p,g)}}else a.set(n.array,c);c+=n.count*s}return i!==void 0&&(l.gpuType=i),l}const lt=24,ne=19;function Is(){const t=new Jt(.17,.43,7.75,7);t.rotateZ(-.105).translate(.42,3.85,0),t.deleteAttribute("uv");const e=[],s=new U(.85,7.71,0);for(let i=0;i<8;i++){const o=i*Math.PI/4,a=i%2===0?3.83:3.05,l=Math.cos(o),c=Math.sin(o),u=s.clone().add(new U(l*a*.52,.88,c*a*.52)),n=u.clone().add(new U(-c*.62,-.48,l*.62)),f=u.clone().add(new U(c*.62,-.48,-l*.62)),d=s.clone().add(new U(l*a,-.78,c*a));for(const h of[s,n,u,u,n,d,s,u,f,u,d,f])e.push(h.x,h.y,h.z)}const r=new Qe;return r.setAttribute("position",new Ie(e,3)),r.computeVertexNormals(),Os([t.toNonIndexed(),r])}function zs(t){const e=new ce(Is(),new ee({color:"#261333",side:ze}),ne*2),s=new ce(new et(11,14,4),new ee({color:"#291747"}),ne),r=new ce(new et(3,3.8,4),new ee({color:"#794562"}),ne),i=new ce(new k(.27,.64,.38),new ee({color:new q("#fc418d").multiplyScalar(2)}),ne*2);for(const c of[e,s,r,i])c.frustumCulled=!1,c.instanceMatrix.setUsage(ht),t.add(c);const o=new dt;let a=NaN,l;return(c,u)=>{const n=Math.floor((u-45)/lt);if(n===a&&c===l)return;a=n,l=c;let f=0;for(let d=0;d<ne;d++){const h=n+d,p=Pe(Math.imul(h,963760835)),g=lt*h+p()*8,m=c(g);for(let b=0;b<2;b++){const T=b===0?-1:1,_=.82+p()*.42;o.rotation.y=p()*6,o.scale.setScalar(_),o.position.set(m.x+T*(16+p()*12),m.y-.49,-g+b*-9),o.updateMatrix(),e.setMatrixAt(d*2+b,o.matrix),o.position.set(m.x+T*10.2,m.y+.18,-g),o.rotation.y=-m.heading,o.scale.setScalar(1),o.updateMatrix(),i.setMatrixAt(d*2+b,o.matrix)}if(h%3===0){const b=p()>.5?1:-1,T=1+p()*1.2;o.position.set(m.x+b*(41+p()*22),m.y+7*T-.65,-g),o.rotation.y=Math.PI/4+p()*.4,o.scale.setScalar(T),o.updateMatrix(),s.setMatrixAt(f,o.matrix),o.position.y+=5.12*T,o.scale.multiplyScalar(1.026),o.updateMatrix(),r.setMatrixAt(f++,o.matrix)}}s.count=r.count=f;for(const d of[e,s,r,i])d.instanceMatrix.needsUpdate=!0}}function Vs(t){const e=t.getContext("webgl2",{alpha:!1,antialias:!1,powerPreference:"high-performance"});if(!e)return null;const s=new Dt({canvas:t,context:e}),r=new es;r.fog=new ts("#371834",47,415);const i=new ss(61,1,.18,580),o=Ls(r),a=Fs(r),l=zs(r),c=Cs(r),u=Gs(s,r,i),n=matchMedia("(prefers-reduced-motion: reduce)"),f=matchMedia("(pointer: coarse)");let d=!1,h=performance.now(),p=0;function g(){const m=Math.max(1,t.clientWidth),b=Math.max(1,t.clientHeight),T=d?1:f.matches?1.35:1.5,P=Math.min(devicePixelRatio,T,Math.sqrt((d?16e5:3e6)/(m*b)));i.aspect=m/b,i.updateProjectionMatrix(),s.setDrawingBufferSize(m,b,P),u.resize(m,b,P)}return window.addEventListener("resize",g),g(),{draw(m){const{car:b,track:T,mode:_,time:P}=m,x=performance.now(),z=Math.min(100,x-h);h=x;const N=_==="title",Q=_==="play",oe=Q&&b.boost>0&&!n.matches?1:0;p+=(oe-p)*(1-Math.exp(-z*.012));const y=n.matches?0:p,w=b.lateral*.68,B=i.aspect<.86,S=B?12.4:N?8.7:f.matches?13:11.4,G=T(b.s-S),A=T(b.s+27),X=T(b.s),F=N?G.y+3.8:B?G.y+4.8:fe.lerp(X.y,G.y,.35)+4.4,v=B?A.y+.6:N?A.y+2.4:fe.lerp(X.y,A.y,.55)+.7,C=N&&i.aspect>1.15?-9.3:0,j=(B?69:61)+y*10;Math.abs(j-i.fov)>.03&&(i.fov=j,i.updateProjectionMatrix()),a(T,b.s),l(T,b.s),c(m),i.position.set(G.x+w+C*.23+Math.sin(P*61)*.12*y,F+Math.sin(P*52)*.075*y,-b.s+S),i.lookAt(A.x+b.lateral*.19+C,v,-b.s-27),o(i,N);const De=n.matches||!Q?0:Math.max(y,(b.speed-57)*.009);u.update(De,P,z,Q)&&(d=!0,g()),u.draw(r,i)}}}const Hs=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","KeyA","KeyD","KeyW","KeyS","Space"];function qs(t){const e=new Set,s=new Map,r=matchMedia("(pointer: coarse)");let i=!1;const o=()=>r.matches||i,a=()=>{e.clear(),s.clear(),t.querySelectorAll("[data-held]").forEach(u=>u.removeAttribute("data-held"))},l=(...u)=>u.some(n=>e.has(n)),c=u=>Array.from(s.values()).includes(u);window.addEventListener("keydown",u=>{!Hs.includes(u.code)||u.code==="Space"&&u.target instanceof HTMLButtonElement||t.closest('[data-state="play"]')&&(u.preventDefault(),e.add(u.code))}),window.addEventListener("keyup",u=>e.delete(u.code)),window.addEventListener("blur",a);for(const u of t.querySelectorAll("button")){const n=u.dataset.drive;u.addEventListener("pointerdown",d=>{d.preventDefault(),i||=d.pointerType==="touch",s.set(d.pointerId,n),d.isTrusted&&u.setPointerCapture(d.pointerId),u.setAttribute("data-held","")});const f=d=>{s.delete(d.pointerId),c(n)||u.removeAttribute("data-held")};for(const d of["pointerup","pointercancel","lostpointercapture"])u.addEventListener(d,f)}return{clear:a,read(){const u=l("ArrowDown","KeyS")||c("brake");return{steer:Number(l("ArrowRight","KeyD")||c("right"))-Number(l("ArrowLeft","KeyA")||c("left")),throttle:Number(!u&&(o()||l("ArrowUp","KeyW"))),brake:Number(u),drift:l("Space")||c("drift")}}}}const Qs={nearMiss:"CLOSE CALL",gem:"SCORE GEM",cell:"BOOST CELL",boost:"DRIFT BOOST",crash:"CRASH"},Te=t=>Math.floor(t).toString().padStart(6,"0"),wt=t=>(t/1e3).toFixed(2)+" KM";function Xs(t){const e=t.querySelector("#speed"),s=t.querySelector("#score"),r=t.querySelector("#multiplier"),i=t.querySelector("#boost"),o=t.querySelector("#boost-label"),a=t.querySelector("#distance"),l=t.querySelector("#event");let c=0;const u=(n,f)=>{n.textContent!==f&&(n.textContent=f)};return{reset(){c=0,l.textContent=""},event(n,f){n!=="crash"&&(l.textContent=Qs[n]),c=f+1.15},draw(n,f){u(e,Math.round(n.speed*3.6).toString().padStart(3,"0")),u(s,Te(f.score)),u(r,"×"+f.multiplier),u(a,wt(f.distance)),u(o,n.boost>0?"BOOST ACTIVE":n.drifting?"SLIDING":"DRIFT CHARGE"),i.value=n.boost>0?Math.min(1,n.boost/2.3):n.charge,f.time>c&&u(l,"")}}}const Y=(t,e,s=!1)=>'<button type="button" class="action'+(s?" secondary":"")+'" data-action="'+e+'">'+t+"</button>";function Ws(t,e){return t.addEventListener("click",s=>{const i=s.target.closest("[data-action]")?.dataset.action;i&&e(i)}),(s,r,i,o)=>{if(t.hidden=s==="play",s==="play")return;let a;s==="title"?a=`
        <p class="menu-kicker">Synthwave endless racer</p>
        <h1>Neon <em>Drift</em></h1>
        <p>Weave through traffic. Hold a slide, then release it for a burst of speed.</p>
        ${i?`
          <div class="menu-actions">
            ${Y('Daily race <span aria-hidden="true">→</span>',"daily")}
            ${Y("Arcade","arcade",!0)}
          </div>
          <dl class="records">
            <div><dt>Today's best <time datetime="${o.day}">${o.day.slice(5)} UTC</time></dt><dd>${Te(o.daily)}</dd></div>
            <div><dt>All-time best</dt><dd>${Te(o.allTime)}</dd></div>
          </dl>`:'<p role="status">Enable WebGL 2 in your browser to drive.</p>'}
        <div class="control-legend">
          <p class="menu-hint keyboard-copy"><kbd>WASD</kbd> <kbd>↑ ← ↓ →</kbd> DRIVE <kbd>SPACE</kbd> DRIFT</p>
          <p class="menu-hint touch-copy">Auto throttle · Hold drift while steering</p>
        </div>`:s==="pause"?a=`
        <p class="menu-kicker">${o.course==="daily"?"Daily race · "+o.raceDay:"Arcade"}</p>
        <h2>Paused</h2>
        <div class="menu-actions">${Y("Resume","resume")}${Y("Main menu","title",!0)}</div>`:a=`
        <p class="menu-kicker">${o.allTimeRecord?"New all-time best":o.trackRecord?"New course best":"Collision"}</p><h2>Run over</h2>
        <dl class="result-stats">
          <div class="result-score"><dt>Final score</dt><dd>${Te(r.score)}</dd></div>
          <div><dt>Distance</dt><dd>${wt(r.distance)}</dd></div>
          <div><dt>Top speed</dt><dd>${Math.round(r.topSpeed*3.6)} KM/H</dd></div>
          <div><dt>Close calls</dt><dd>${r.nearMisses}</dd></div>
          <div><dt>Drift boosts</dt><dd>${r.drifts}</dd></div>
          <div><dt>Pickups</dt><dd>${r.pickups}</dd></div>
          <div><dt>Time</dt><dd>${Math.floor(r.time/60)}:${String(Math.floor(r.time%60)).padStart(2,"0")}</dd></div>
        </dl>
        ${o.trackRecord?'<p class="menu-hint">Your ghost is ready to race.</p>':o.hasGhost?'<p class="menu-hint">Your best ghost is still on this course.</p>':""}
        <div class="menu-actions">${Y("Race again ↗","restart")}${Y("Main menu","title",!0)}</div>`,t.innerHTML='<div class="menu">'+a+"</div>",s!=="title"&&t.querySelector("button")?.focus({preventScroll:!0})}}const $s=119,Z=60/$s,ct=[[45,57,60,64,67],[41,53,57,60,64],[48,55,57,60,64],[43,55,59,62,67]],ut=[2,4,3,4,1,3,2,3],Ks=t=>440*2**((t-69)/12);function js(t,e){const s=t.createGain();s.gain.value=0,s.connect(e);let r=0,i=0,o=!1;function a(c,u,n,f,d,h=.018){const p=t.createOscillator(),g=t.createGain();p.type=d,p.frequency.value=Ks(u),g.gain.setValueAtTime(1e-4,c),g.gain.exponentialRampToValueAtTime(f,c+h),g.gain.exponentialRampToValueAtTime(1e-4,c+n),p.connect(g).connect(s),p.start(c),p.stop(c+n+.03)}function l(c){const u=t.createOscillator(),n=t.createGain();u.frequency.setValueAtTime(120,c),u.frequency.exponentialRampToValueAtTime(44,c+.13),n.gain.setValueAtTime(.15,c),n.gain.exponentialRampToValueAtTime(1e-4,c+.26),u.connect(n).connect(s),u.start(c),u.stop(c+.28)}return c=>{if(o!==c&&(o=c,s.gain.setTargetAtTime(c?1:0,t.currentTime,.13)),!o||t.state!=="running")return;const u=t.currentTime;for(r<u&&(r=u+.025);r<u+.115;){const n=i%8,f=ct[Math.floor(i/16)%ct.length];if(i%16===0)for(const h of f.slice(1))a(r,h,Z*7.95,.018,"triangle",.3);n%2===0&&l(r),(n===0||n===3||n===6)&&a(r,f[0]-12,Z*.92,.1,"triangle",.026);const d=n===1||n===5?24:12;a(r,f[ut[n]]+d,Z*.73,n%2?.025:.045,"triangle"),n%2===1&&a(r+Z*.25,f[ut[n]]+d,Z*.98,.011,"sine"),r+=Z/2,i++}}}function Ys(t){const e=t.createBuffer(1,t.sampleRate,t.sampleRate),s=e.getChannelData(0);for(let i=0;i<s.length;i++)s[i]=Math.random()*2-1;const r=t.createBufferSource();return r.buffer=e,r.loop=!0,r}function Zs(t){const e=t.createGain();e.gain.value=0;const s=t.createDynamicsCompressor();s.threshold.value=-13,e.connect(s).connect(t.destination);const r=t.createOscillator();r.type="sawtooth",r.frequency.value=35;const i=t.createOscillator();i.type="triangle",i.frequency.value=66;const o=t.createBiquadFilter();o.type="lowpass",o.frequency.value=180,o.Q.value=1.1;const a=t.createGain();a.gain.value=0,r.connect(o),i.connect(o),o.connect(a).connect(e),r.start(),i.start();const l=t.createGain();l.gain.value=0;const c=t.createBiquadFilter();c.type="bandpass",c.frequency.value=1850,c.Q.value=3.1;const u=Ys(t);return u.connect(c).connect(l).connect(e),u.start(),{master:e,rpm:r,harmonic:i,filter:o,engine:a,drift:l,screech:c,music:js(t,e)}}function Js(){let t,e,s=!1,r=0;function i(){if(!t||!e)return;const o=s?0:.67;r!==o&&(r=o,e.master.gain.setTargetAtTime(r,t.currentTime,.055))}return{unlock(){if(!t&&typeof AudioContext=="function")try{t=new AudioContext,e=Zs(t),i()}catch{e=void 0}t?.state==="suspended"&&t.resume().catch(()=>{})},setMuted(o){s=o,i()},update(o){if(!t||!e)return;const{car:a,mode:l,time:c}=o,u=l==="play"&&!s,n=t.currentTime,f=30+a.speed*1.18+(a.boost>0?24:0);e.rpm.frequency.setTargetAtTime(f,n,.055),e.harmonic.frequency.setTargetAtTime(f*1.982,n,.055),e.filter.frequency.setTargetAtTime(126+a.speed*8.4,n,.08),e.engine.gain.setTargetAtTime(u?.072+a.speed*85e-5:0,n,.06),e.drift.gain.setTargetAtTime(u&&a.drifting?.15+a.charge*.13:0,n,.065),e.screech.frequency.setTargetAtTime(1600+a.speed*11+Math.sin(c*21)*160,n,.06),e.music(u||l==="title"&&!s)},event(o){if(!t||!e||s||t.state!=="running")return;const a=t.currentTime,l={boost:[111,420,.46,"triangle",.23],crash:[115,35,.58,"sawtooth",.21],cell:[523,1046,.19,"sine",.18],gem:[698,1396,.18,"triangle",.15],nearMiss:[380,610,.12,"sine",.1]},[c,u,n,f,d]=l[o],h=t.createOscillator(),p=t.createGain();h.type=f,h.frequency.setValueAtTime(c,a),h.frequency.exponentialRampToValueAtTime(u,a+n*.55),p.gain.setValueAtTime(1e-4,a),p.gain.exponentialRampToValueAtTime(d,a+.018),p.gain.exponentialRampToValueAtTime(1e-4,a+n),h.connect(p).connect(e.master),h.start(a),h.stop(a+n+.02)}}}const St="neon-drift:v1:",Se=new Map;function Ke(t){if(Se.has(t))return Se.get(t);try{return localStorage.getItem(St+t)}catch{return null}}function Ve(t,e){try{localStorage.setItem(St+t,e),Se.delete(t)}catch{Se.set(t,e)}}function je(t){return typeof t=="number"&&Number.isFinite(t)&&t>=0?Math.floor(t):0}function Be(t,e){try{const s=JSON.parse(Ke("best:"+t)??"null");if(!s)return{score:0,ghost:null};const r=s.ghost&&Ss(JSON.stringify(s.ghost));return{score:je(s.score),ghost:r?.seed===e?r:null}}catch{return{score:0,ghost:null}}}function At(){return je(Number(Ke("all-time")))}function er(t,e,s,r){const i=je(s),o=i>Be(t,e).score,a=i>At();return o&&Ve("best:"+t,JSON.stringify({score:i,ghost:r()})),a&&Ve("all-time",String(i)),{trackRecord:o,allTimeRecord:a}}const tr=()=>Ke("muted")==="1",sr=t=>Ve("muted",t?"1":"0"),rr=7284,Ue=()=>{const t=vs();return{day:t,key:"daily:"+t,seed:bs(t)}},I=t=>document.getElementById(t),ir=I("game"),Ct=I("touch"),_t=I("pause"),Ae=I("sound"),de=Vs(I("road")),Et=qs(Ct),Ce=Xs(I("hud")),re=Js(),or=matchMedia("(prefers-reduced-motion: reduce)"),le=1/60;let E="title",ke="daily",R=Ue(),M=We(R.seed),_e=Be(R.key,R.seed).ghost,Ee=xt(R.seed),Ye={trackRecord:!1,allTimeRecord:!1},H=M.car,ft=performance.now(),He=-1/0,J=0,$=tr();const ar=Ws(I("screen"),t=>{(t==="daily"||t==="arcade")&&Re(t),t==="restart"&&Re(ke,!0),t==="resume"&&Rt(),t==="title"&&(R=Ue(),M=We(R.seed),K("title"))});function K(t){if(E=t,ir.dataset.state=t,I("hud").hidden=t!=="play"&&t!=="pause",Ct.hidden=t!=="play",_t.hidden=t!=="play",Et.clear(),J=0,He=-1/0,H=M.car,t!=="play"){const e=Ue();ar(t,M.stats,!!de,{day:e.day,daily:Be(e.key,e.seed).score,allTime:At(),course:ke,raceDay:R.day,hasGhost:!!_e,...Ye})}else I("screen").hidden=!0;t==="play"&&document.activeElement instanceof HTMLElement&&document.activeElement.blur()}function Re(t,e=!1){de&&(re.unlock(),e||(R=t==="daily"?Ue():{day:"",key:"arcade",seed:rr}),ke=t,M=We(R.seed),_e=Be(R.key,R.seed).ghost,Ee=xt(R.seed),Ee.record(0,M.car),Ye={trackRecord:!1,allTimeRecord:!1},Ce.reset(),Ce.draw(M.car,M.stats),K("play"))}function Rt(){re.unlock(),K("play")}function Pt(){E==="play"?K("pause"):E==="pause"&&Rt()}function Bt(){re.setMuted($),Ae.setAttribute("aria-pressed",String(!$)),Ae.textContent=$?"Sound off":"Sound on"}function Ut(){$=!$,Bt(),sr($),$||re.unlock()}Bt();Ae.hidden=!de;Ae.addEventListener("click",Ut);_t.addEventListener("click",Pt);window.addEventListener("keydown",t=>{t.repeat||((t.code==="Escape"||t.code==="KeyP")&&Pt(),t.code==="KeyM"&&Ut(),t.code==="Enter"&&!(t.target instanceof HTMLButtonElement)&&(E==="title"?Re("daily"):E==="over"&&Re(ke,!0)))});document.addEventListener("visibilitychange",()=>{document.hidden&&E==="play"&&K("pause")});function nr(t,e){return{...t,s:H.s+(t.s-H.s)*e,lateral:H.lateral+(t.lateral-H.lateral)*e,yaw:H.yaw+(t.yaw-H.yaw)*e}}function kt(t){const e=Math.min(.1,(t-ft)/1e3);if(ft=t,E==="play"){for(J+=e;J>=le;){H=M.car;for(const s of M.step(Et.read(),le))Ce.event(s,M.stats.time),re.event(s);if(Ee.record(M.stats.time,M.car),J-=le,M.ended){Ye=er(R.key,R.seed,M.stats.score,Ee.finish),K("over");break}}E==="play"&&Ce.draw(M.car,M.stats)}if(E==="play"||t-He>=32){He=t;const s=Math.max(0,E==="play"?M.stats.time-le+J:M.stats.time),r={car:E==="play"?nr(M.car,J/le):M.car,track:M.track,traffic:M.traffic,pickups:M.pickups,time:E==="title"&&!or.matches?t/1e3:s,mode:E,ghost:E!=="title"&&_e?As(_e,s):void 0};de?.draw(r),re.update(r)}requestAnimationFrame(kt)}K("title");de&&requestAnimationFrame(kt);
