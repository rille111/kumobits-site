(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();function Ue(){return{fireRate:4,bulletSpeed:420,damage:10,pierce:0,ricochet:0,moveSpeed:220,bulletCount:1,spreadDeg:0,fireTrail:!1,critChance:0}}function ne(e,t,n){return{id:e,x:t,y:n,angle:0,hp:100,maxHp:100,fireCooldown:0,stats:Ue(),alive:!0}}function qe(){return{x:0,y:0,radius:60,hp:100,maxHp:100}}function Se(e,t){const n=!!(t!=null&&t.coop),a=!!(t!=null&&t.daily),o=[ne(1,150,0)];return n&&o.push(ne(2,-150,0)),{phase:"play",tick:0,seed:e>>>0,daily:a,planet:qe(),players:o,enemies:[],bullets:[],pickups:[],wave:1,waveTimer:0,score:0,events:[],draftOptions:[],nextEntityId:o.length+1,coop:n}}function G(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function Ne(e=new Date){const t=e.getUTCFullYear(),n=String(e.getUTCMonth()+1).padStart(2,"0"),a=String(e.getUTCDate()).padStart(2,"0"),o=`${t}-${n}-${a}`;let r=0;for(let i=0;i<o.length;i++)r=Math.imul(r,31)+o.charCodeAt(i)|0;return r>>>0}function Q(e){const t=e.nextEntityId;return e.nextEntityId+=1,t}function ee(e){return e.find(t=>!t.alive)}function Ee(e,t){let n=ee(e.enemies);return n||(n={id:0,x:0,y:0,vx:0,vy:0,radius:0,alive:!1,kind:"",hp:0,maxHp:0,damage:0,speed:0,scoreValue:0},e.enemies.push(n)),n.id=Q(e),n.x=t.x,n.y=t.y,n.vx=0,n.vy=0,n.radius=t.radius,n.alive=!0,n.kind=t.kind,n.hp=t.hp,n.maxHp=t.hp,n.damage=t.damage,n.speed=t.speed,n.scoreValue=t.scoreValue,n.isBoss=void 0,n.bossPhase=void 0,n}function te(e,t){let n=ee(e.bullets);return n||(n={id:0,x:0,y:0,vx:0,vy:0,radius:0,alive:!1,ownerId:0,damage:0,pierce:0,ricochet:0,friendly:!0},e.bullets.push(n)),n.id=Q(e),n.x=t.x,n.y=t.y,n.vx=t.vx,n.vy=t.vy,n.radius=t.radius,n.alive=!0,n.ownerId=t.ownerId,n.damage=t.damage,n.pierce=t.pierce,n.ricochet=t.ricochet,n.friendly=t.friendly,n}function Fe(e,t){let n=ee(e.pickups);return n||(n={id:0,x:0,y:0,vx:0,vy:0,radius:0,alive:!1,kind:"score",value:0},e.pickups.push(n)),n.id=Q(e),n.x=t.x,n.y=t.y,n.vx=0,n.vy=0,n.radius=t.radius,n.alive=!0,n.kind=t.kind,n.value=t.value,n}const re=420,$e=14,ze=30;function be(e){return Math.max(1,Math.floor(e))%5===0}function Ke(e){const t=["chaser"];return e>=2&&t.push("scout"),e>=4&&t.push("shooter"),e>=7&&t.push("brute"),t}function Ge(e,t,n){switch(e){case"scout":return{hp:Math.round(t*.5),speed:Math.round(n*1.8),damage:6,scoreValue:8,radius:10};case"brute":return{hp:Math.round(t*2.2),speed:Math.round(n*.6),damage:16,scoreValue:18,radius:20};case"shooter":return{hp:Math.round(t*.8),speed:Math.round(n*.9),damage:8,scoreValue:14,radius:13};default:return{hp:t,speed:n,damage:10,scoreValue:10,radius:$e}}}function We(e,t){const n=Math.max(1,Math.floor(e));if(be(n))return{wave:n,enemies:[]};const a=Math.min(ze,3+(n-1)*2),o=20+(n-1)*10,r=60+(n-1)*5,i=Ke(n),d=[];for(let u=0;u<a;u++){const h=t()*Math.PI*2,f=i[Math.floor(t()*i.length)],p=Ge(f,o,r);d.push({kind:f,dx:Math.cos(h)*re,dy:Math.sin(h)*re,hp:p.hp,damage:p.damage,speed:p.speed,scoreValue:p.scoreValue,radius:p.radius})}return{wave:n,enemies:d}}const C=new Map,Ye=400,Xe=180,je=40,Je=42,Ze=25,Qe=500,oe=380,W=2.5,et=1.4,tt=.6,ae=260,ie=12,nt=6;function rt(e){let t,n=1/0;for(const a of e.players){if(!a.alive)continue;const o=Math.hypot(a.x-e.planet.x,a.y-e.planet.y);o<n&&(n=o,t=a)}return t??e.planet}function ot(e,t,n){const a=Math.max(1,Math.floor(t/5)),o=Ye+(a-1)*Xe,r=n()*Math.PI*2,i=Ee(e,{x:e.planet.x+Math.cos(r)*oe,y:e.planet.y+Math.sin(r)*oe,kind:"boss",hp:o,damage:Ze,speed:Je,scoreValue:Qe*a,radius:je});i.isBoss=!0,i.bossPhase=1,C.set(i.id,{attackTimer:W,telegraphTimer:0}),e.events.push({type:"bossSpawn",x:i.x,y:i.y,power:a})}function at(e,t,n){const a=rt(e),o=Math.atan2(a.y-t.y,a.x-t.x),r=t.bossPhase===2?5:3,i=Math.PI/6,d=(n()-.5)*.1;for(let u=0;u<r;u++){const h=r===1?0:u/(r-1)-.5,f=o+d+h*i;te(e,{x:t.x,y:t.y,vx:Math.cos(f)*ae,vy:Math.sin(f)*ae,ownerId:t.id,damage:ie,pierce:0,ricochet:0,friendly:!1,radius:nt})}e.events.push({type:"boom",x:t.x,y:t.y,power:ie})}function it(e,t,n,a){if(!t.alive){C.delete(t.id);return}let o=C.get(t.id);o||(o={attackTimer:W,telegraphTimer:0},C.set(t.id,o)),(t.bossPhase??1)===1&&t.hp<=t.maxHp*.5&&(t.bossPhase=2,e.events.push({type:"bossPhase",x:t.x,y:t.y,power:2}));const r=t.bossPhase===2,i=r?1.6:1,d=r?et:W;if(o.telegraphTimer>0){o.telegraphTimer-=n,t.vx=0,t.vy=0,o.telegraphTimer<=0&&(o.telegraphTimer=0,at(e,t,a),o.attackTimer=d);return}const u=e.planet.x-t.x,h=e.planet.y-t.y,f=Math.hypot(u,h)||1;t.vx=u/f*t.speed*i,t.vy=h/f*t.speed*i,t.x+=t.vx*n,t.y+=t.vy*n,o.attackTimer-=n,o.attackTimer<=0&&(o.telegraphTimer=tt,e.events.push({type:"boom",x:t.x,y:t.y,power:0}))}function st(e){return Math.max(0,Math.min(1,e))}const ct=[{id:"rapid_fire",name:"Rapid Fire",desc:"+20% fire rate",weight:10,apply(e){return{...e,fireRate:e.fireRate*1.2}}},{id:"piercing_rounds",name:"Piercing Rounds",desc:"Bullets pierce one additional enemy",weight:8,apply(e){return{...e,pierce:e.pierce+1}}},{id:"ricochet_shot",name:"Ricochet Shot",desc:"Bullets bounce to one additional enemy",weight:8,apply(e){return{...e,ricochet:e.ricochet+1}}},{id:"multishot",name:"Multishot",desc:"Fire one additional bullet in a tighter spread",weight:7,apply(e){return{...e,bulletCount:e.bulletCount+1,spreadDeg:e.spreadDeg+8}}},{id:"fire_trail",name:"Incendiary Trail",desc:"Bullets leave a burning trail",weight:5,apply(e){return{...e,fireTrail:!0}}},{id:"heavy_rounds",name:"Heavy Rounds",desc:"+35% damage",weight:9,apply(e){return{...e,damage:e.damage*1.35}}},{id:"swift_boots",name:"Swift Boots",desc:"+15% move speed",weight:8,apply(e){return{...e,moveSpeed:e.moveSpeed*1.15}}},{id:"deadeye",name:"Deadeye",desc:"+10% crit chance",weight:7,apply(e){return{...e,critChance:st(e.critChance+.1)}}},{id:"velocity_rounds",name:"Velocity Rounds",desc:"+20% bullet speed",weight:7,apply(e){return{...e,bulletSpeed:e.bulletSpeed*1.2}}},{id:"scatter_shot",name:"Scatter Shot",desc:"Wider spread and one additional bullet",weight:6,apply(e){return{...e,bulletCount:e.bulletCount+1,spreadDeg:e.spreadDeg+15}}},{id:"focused_lance",name:"Focused Lance",desc:"Shots pierce one more enemy; bonus damage per enemy already pierced",weight:6,apply(e){const t=e.pierce+1;return{...e,pierce:t,damage:e.damage+2+e.pierce*3}}},{id:"overcharged_core",name:"Overcharged Core",desc:"+10% fire rate, +10% damage",weight:5,apply(e){return{...e,fireRate:e.fireRate*1.1,damage:e.damage*1.1}}}];function lt(e,t=[]){const n=ct.filter(r=>!t.includes(r.id)),a=[],o=Math.min(3,n.length);for(let r=0;r<o;r++){const i=n.reduce((h,f)=>h+f.weight,0);let d=e()*i,u=0;for(;u<n.length-1&&(d-=n[u].weight,!(d<=0));u++);a.push(n[u]),n.splice(u,1)}return a}function dt(e,t){return t.apply(e)}const Y=520,ut=Y+200,Me=4,ft=.2,pt=10,ht=20,yt=220,mt=90,se=220;function X(e,t){return(e^Math.imul(t+2654435769,2246822507))>>>0}function vt(e,t){if(t===1)return e.p1;if(t===2)return e.p2}function gt(e,t,n,a){const o=e-n,r=t-a,i=Math.hypot(o,r);if(i<=Y||i===0)return{x:e,y:t};const d=Y/i;return{x:n+o*d,y:a+r*d}}function Te(e,t){const n=G(X(e.seed,t*2246822519));if(be(t)){ot(e,t,n);return}const a=We(t,n);for(const o of a.enemies)Ee(e,{x:e.planet.x+o.dx,y:e.planet.y+o.dy,kind:o.kind,hp:o.hp,damage:o.damage,speed:o.speed,scoreValue:o.scoreValue,radius:o.radius})}function xt(e){let t,n=1/0;for(const a of e.players){if(!a.alive)continue;const o=Math.hypot(a.x-e.planet.x,a.y-e.planet.y);o<n&&(n=o,t=a)}return t??e.planet}function _t(e,t,n,a){if(!t.alive)return;const o=(n==null?void 0:n.move)??{x:0,y:0},r=(n==null?void 0:n.aim)??{x:0,y:0},i=t.x+o.x*t.stats.moveSpeed*a,d=t.y+o.y*t.stats.moveSpeed*a,u=gt(i,d,e.planet.x,e.planet.y);t.x=u.x,t.y=u.y,(r.x!==0||r.y!==0)&&(t.angle=Math.atan2(r.y,r.x)),t.fireCooldown>0&&(t.fireCooldown=Math.max(0,t.fireCooldown-a));const h=t.stats.fireRate>0?t.stats.fireRate:1;if(n!=null&&n.fire&&t.fireCooldown<=0){const f=Math.max(1,Math.floor(t.stats.bulletCount)),p=t.stats.spreadDeg*Math.PI/180,y=(f-1)/2;for(let s=0;s<f;s++){const l=f>1?(s-y)*(p/Math.max(1,f-1)):0,v=t.angle+l;te(e,{x:t.x,y:t.y,vx:Math.cos(v)*t.stats.bulletSpeed,vy:Math.sin(v)*t.stats.bulletSpeed,ownerId:t.id,damage:t.stats.damage,pierce:t.stats.pierce,ricochet:t.stats.ricochet,friendly:!0,radius:Me})}t.fireCooldown=1/h}}function wt(e,t,n){if(e.tick+=1,e.phase!=="play")return;const a=G(X(e.seed,e.tick));for(const r of e.players)_t(e,r,vt(t,r.id),n);for(const r of e.bullets){if(!r.alive)continue;r.x+=r.vx*n,r.y+=r.vy*n,Math.hypot(r.x-e.planet.x,r.y-e.planet.y)>ut&&(r.alive=!1)}for(const r of e.enemies){if(!r.alive)continue;if(r.isBoss){it(e,r,n,a);continue}const i=e.planet.x-r.x,d=e.planet.y-r.y,u=Math.hypot(i,d)||1;if(r.kind==="shooter"){if(u>yt?(r.vx=i/u*r.speed,r.vy=d/u*r.speed,r.x+=r.vx*n,r.y+=r.vy*n):(r.vx=0,r.vy=0),(e.tick+r.id)%mt===0){const h=xt(e),f=Math.atan2(h.y-r.y,h.x-r.x);te(e,{x:r.x,y:r.y,vx:Math.cos(f)*se,vy:Math.sin(f)*se,ownerId:r.id,damage:r.damage,pierce:0,ricochet:0,friendly:!1,radius:Me})}continue}r.vx=i/u*r.speed,r.vy=d/u*r.speed,r.x+=r.vx*n,r.y+=r.vy*n}for(const r of e.bullets)if(!(!r.alive||!r.friendly))for(const i of e.enemies)!i.alive||!r.alive||Math.hypot(r.x-i.x,r.y-i.y)>r.radius+i.radius||(i.hp-=r.damage,e.events.push({type:"hit",x:i.x,y:i.y,power:r.damage}),r.pierce>0?r.pierce-=1:r.alive=!1,i.hp<=0&&(i.alive=!1,i.hp=0,e.events.push({type:"kill",x:i.x,y:i.y,power:i.scoreValue}),e.score+=i.scoreValue,a()<ft&&Fe(e,{x:i.x,y:i.y,kind:"score",value:i.scoreValue,radius:pt})));for(const r of e.bullets)if(!(!r.alive||r.friendly)){for(const i of e.players)if(!(!i.alive||Math.hypot(r.x-i.x,r.y-i.y)>r.radius+ht)){i.hp-=r.damage,e.events.push({type:"playerHurt",x:i.x,y:i.y,power:r.damage}),r.alive=!1,i.hp<=0&&(i.hp=0,i.alive=!1);break}}for(const r of e.enemies){if(!r.alive)continue;Math.hypot(r.x-e.planet.x,r.y-e.planet.y)<=e.planet.radius+r.radius&&(e.planet.hp-=r.damage,e.events.push({type:"planetHurt",x:e.planet.x,y:e.planet.y,power:r.damage}),r.alive=!1)}for(const r of e.pickups)if(r.alive)for(const i of e.players){if(!i.alive)continue;if(Math.hypot(r.x-i.x,r.y-i.y)<=r.radius+20){r.kind==="heal"?i.hp=Math.min(i.maxHp,i.hp+r.value):e.score+=r.value,e.events.push({type:"pickup",x:r.x,y:r.y,power:r.value}),r.alive=!1;break}}if(e.planet.hp<=0&&e.phase==="play"){e.planet.hp=0,e.phase="gameover",e.events.push({type:"gameOver",x:e.planet.x,y:e.planet.y,power:e.score});return}if(!e.enemies.some(r=>r.alive))if(e.enemies.length===0)Te(e,e.wave),e.events.push({type:"waveStart",x:e.planet.x,y:e.planet.y,power:e.wave});else{e.events.push({type:"waveClear",x:e.planet.x,y:e.planet.y,power:e.wave});const r=G(X(e.seed,e.wave*1337+7));e.draftOptions=lt(r),e.phase="draft"}}function St(e,t){if(e.phase==="draft"){for(const n of e.players)n.stats=dt(n.stats,t);e.events.push({type:"upgradePicked",x:e.planet.x,y:e.planet.y,power:e.wave}),e.draftOptions=[],e.wave+=1,e.phase="play",Te(e,e.wave),e.events.push({type:"waveStart",x:e.planet.x,y:e.planet.y,power:e.wave})}}const Et=[{count:.5,size:[.6,1.2],speed:[2,6],color:"rgba(255,255,255,0.4)"},{count:.3,size:[1,1.8],speed:[8,16],color:"rgba(255,255,255,0.65)"},{count:.2,size:[1.5,2.6],speed:[20,36],color:"rgba(255,255,255,0.9)"}];function bt(e=240){const t=[];for(const n of Et){const a=Math.round(e*n.count);for(let o=0;o<a;o++)t.push({x:Math.random(),y:Math.random(),size:n.size[0]+Math.random()*(n.size[1]-n.size[0]),speed:n.speed[0]+Math.random()*(n.speed[1]-n.speed[0]),color:n.color})}return{update(n){for(const a of t)a.y+=a.speed*n/1e3,a.y>1&&(a.y-=1),a.y<0&&(a.y+=1)},render(n,a,o){for(const r of t)n.fillStyle=r.color,n.fillRect(r.x*a,r.y*o,r.size,r.size)}}}const Mt="#05070d",Tt="#7ad7ff",At="#ffe27a",kt="#ff6b6b",It="#8affc1",Lt="#ff8ac6";function q(e){const t=Math.max(0,Math.min(1,e)),n=Math.round(255*(1-t)),a=Math.round(200*t+30*(1-t));return`rgb(${n}, ${a}, 40)`}function Rt(e){const t=e.getContext("2d");let n=e.width,a=e.height,o=0,r=0,i=0,d="#ffffff";const u=bt();let h=null;function f(){t.fillStyle=Mt,t.fillRect(0,0,n,a),u.render(t,n,a)}function p(c){const m=c.maxHp>0?c.hp/c.maxHp:0;t.beginPath(),t.arc(c.x,c.y,c.radius,0,Math.PI*2),t.fillStyle=q(m),t.fill(),t.lineWidth=2,t.strokeStyle="rgba(255,255,255,0.25)",t.stroke()}function y(c){if(!c.alive)return;const m=12;t.save(),t.translate(c.x,c.y),t.rotate(c.angle),t.beginPath(),t.moveTo(m,0),t.lineTo(-m*.7,m*.6),t.lineTo(-m*.35,0),t.lineTo(-m*.7,-m*.6),t.closePath(),t.fillStyle=Tt,t.fill(),t.restore();const E=c.maxHp>0?c.hp/c.maxHp:0,_=20;t.fillStyle="rgba(0,0,0,0.5)",t.fillRect(c.x-_/2,c.y-m-10,_,3),t.fillStyle=q(E),t.fillRect(c.x-_/2,c.y-m-10,_*E,3)}function s(c){if(!c.alive)return;const m=c.maxHp>0?c.hp/c.maxHp:0;t.beginPath(),t.arc(c.x,c.y,c.radius,0,Math.PI*2),t.fillStyle=c.isBoss?"#c060ff":q(m),t.fill(),c.isBoss&&(t.lineWidth=3,t.strokeStyle="#ffffff",t.stroke())}function l(c){c.alive&&(t.beginPath(),t.arc(c.x,c.y,Math.max(2,c.radius),0,Math.PI*2),t.fillStyle=c.friendly?At:kt,t.fill())}function v(c){if(!c.alive)return;const m=Math.max(4,c.radius);t.save(),t.translate(c.x,c.y),t.rotate(Math.PI/4),t.fillStyle=c.kind==="heal"?Lt:It,t.fillRect(-m/1.4,-m/1.4,m/1.4*2,m/1.4*2),t.restore()}function x(){i<=0||(t.save(),t.globalAlpha=Math.max(0,Math.min(1,i)),t.fillStyle=d,t.fillRect(0,0,n,a),t.restore())}return{render(c,m){const E=typeof performance<"u"?performance.now():Date.now(),_=h===null?0:Math.min(.25,(E-h)/1e3);h=E,u.update(_),t.save(),t.translate(o,r),f(),p(c.planet);for(const w of c.pickups)v(w);for(const w of c.bullets)l(w);for(const w of c.enemies)s(w);for(const w of c.players)y(w);t.restore(),x()},resize(c,m){n=c,a=m},setFlashAlpha(c,m){i=c,m&&(d=m)},setShakeOffset(c,m){o=c,r=m}}}const Ct=800,Ot=16,ce="#ffd27a",Pt=120;function Dt(e=Ct){const t=new Array(e);for(let o=0;o<e;o++)t[o]={alive:!1,x:0,y:0,vx:0,vy:0,life:0,maxLife:1,size:2,color:ce};let n=0;function a(){for(let r=0;r<e;r++){const i=(n+r)%e;if(!t[i].alive)return n=(i+1)%e,t[i]}const o=t[n];return n=(n+1)%e,o}return{spawnBurst(o,r,i){const d=(i==null?void 0:i.count)??Ot,u=(i==null?void 0:i.color)??ce,h=(i==null?void 0:i.speed)??Pt;for(let f=0;f<d;f++){const p=a(),y=Math.random()*Math.PI*2,s=h*(.4+Math.random()*.9);p.alive=!0,p.x=o,p.y=r,p.vx=Math.cos(y)*s,p.vy=Math.sin(y)*s,p.maxLife=.3+Math.random()*.4,p.life=p.maxLife,p.size=1.5+Math.random()*2.5,p.color=u}},update(o){for(let r=0;r<e;r++){const i=t[r];if(i.alive){if(i.life-=o,i.life<=0){i.alive=!1;continue}i.x+=i.vx*o,i.y+=i.vy*o,i.vx*=1-Math.min(1,o*2.5),i.vy*=1-Math.min(1,o*2.5)}}},render(o){for(let r=0;r<e;r++){const i=t[r];if(!i.alive)continue;const d=Math.max(0,i.life/i.maxLife);o.globalAlpha=d,o.fillStyle=i.color,o.beginPath(),o.arc(i.x,i.y,i.size*d,0,Math.PI*2),o.fill()}o.globalAlpha=1}}}const Ht=6,Bt=8,Vt=5;function Ut(e){switch(e.type){case"hit":return 1.5;case"kill":return 4;case"playerHurt":return 6;case"planetHurt":return 5;case"boom":return 5;case"bossPhase":return 10;case"bossSpawn":return 6;default:return 0}}function qt(e){switch(e.type){case"kill":return .35;case"bossPhase":return .6;case"gameOver":return .8;default:return 0}}function Nt(e){switch(e.type){case"kill":return .15;case"bossPhase":return .5;case"gameOver":return .7;default:return 0}}function Ft(){let e=0,t=0,n=0,a=1,o=0;const r={x:0,y:0};return{onEvent(i){const d=Math.max(.1,i.power||1),u=Ut(i)*Math.min(3,d/10+.5);u>0&&(e=Math.min(40,e+u));const h=qt(i);if(h>0){const p=1-h;p<a&&(a=p)}const f=Nt(i);f>0&&(o=Math.min(1,o+f))},update(i){e>0&&(e=Math.max(0,e-Ht*e*i-.5*i),t=(Math.random()*2-1)*e,n=(Math.random()*2-1)*e,e<=.01&&(e=0,t=0,n=0)),a<1&&(a=Math.min(1,a+Bt*i)),o>0&&(o=Math.max(0,o-Vt*i))},getShakeOffset(){return r.x=t,r.y=n,r},getTimeScale(){return a},getFlashAlpha(){return o}}}function k(e){const t=Math.hypot(e.x,e.y);return t===0?{x:0,y:0}:{x:e.x/t,y:e.y/t}}function $t(e=window){const t=new Set;let n={x:0,y:0},a=!1,o=!1;const r=s=>t.add(s.code),i=s=>t.delete(s.code),d=s=>{n={x:s.clientX,y:s.clientY}},u=()=>a=!0,h=()=>a=!1;e.addEventListener("keydown",r),e.addEventListener("keyup",i),e.addEventListener("mousemove",d),e.addEventListener("mousedown",u),e.addEventListener("mouseup",h);function f(s,l){return(t.has(l)?1:0)-(t.has(s)?1:0)}function p(s){const l=k({x:f("KeyA","KeyD"),y:f("KeyW","KeyS")}),v=k({x:n.x-s.x,y:n.y-s.y});return{move:l,aim:v,fire:a||t.has("Space")}}function y(s,l){const v=k({x:f("ArrowLeft","ArrowRight"),y:f("ArrowUp","ArrowDown")}),x=k({x:l.x-s.x,y:l.y-s.y}),c=v.x!==0||v.y!==0||t.has("Enter")||t.has("ShiftRight");return{move:v,aim:x,fire:c}}return{getInputState(s,l){const v={p1:p(l)};return o&&(v.p2=y(l,s)),v},setCoop(s){o=s},destroy(){e.removeEventListener("keydown",r),e.removeEventListener("keyup",i),e.removeEventListener("mousemove",d),e.removeEventListener("mousedown",u),e.removeEventListener("mouseup",h)}}}const zt=10,M=48;function Ae(e){const t=Math.hypot(e.x,e.y);return t===0?{x:0,y:0}:{x:e.x/t,y:e.y/t}}function le(e){if(e.pointerId===null)return{x:0,y:0};const t=e.current.x-e.anchor.x,n=e.current.y-e.anchor.y,a=Math.hypot(t,n);if(a<zt)return{x:0,y:0};const o=Math.min(a,M),r=Ae({x:t,y:n});return{x:r.x*(o/M),y:r.y*(o/M)}}function de(e){const t=document.createElement("div");t.className="touch-stick__anchor";const n=document.createElement("div");return n.className="touch-stick__thumb",e.appendChild(t),e.appendChild(n),{anchorEl:t,thumbEl:n}}function Kt(e){const t=document.createElement("style");return t.textContent=`
    .touch-stick__anchor, .touch-stick__thumb {
      position: absolute;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      display: none;
      pointer-events: none;
    }
    .touch-stick__anchor {
      width: ${M*2}px;
      height: ${M*2}px;
      background: rgba(255, 255, 255, 0.08);
      border: 2px solid rgba(255, 255, 255, 0.25);
    }
    .touch-stick__thumb {
      width: ${M}px;
      height: ${M}px;
      background: rgba(255, 255, 255, 0.35);
      border: 2px solid rgba(255, 255, 255, 0.5);
    }
    .touch-stick__anchor--active, .touch-stick__thumb--active {
      display: block;
    }
  `,e.appendChild(t),t}function Gt(e){const t={pointerId:null,anchor:{x:0,y:0},current:{x:0,y:0}},n={pointerId:null,anchor:{x:0,y:0},current:{x:0,y:0}},a=Kt(e),o=de(e),r=de(e);let i=!0;function d(s,l){const v=l.pointerId!==null;if(s.anchorEl.classList.toggle("touch-stick__anchor--active",v),s.thumbEl.classList.toggle("touch-stick__thumb--active",v),!v)return;s.anchorEl.style.left=`${l.anchor.x}px`,s.anchorEl.style.top=`${l.anchor.y}px`;const x=l.current.x-l.anchor.x,c=l.current.y-l.anchor.y,m=Math.hypot(x,c),E=Math.min(m,M),_=Ae({x,y:c}),w=l.anchor.x+(m===0?0:_.x*E),Ve=l.anchor.y+(m===0?0:_.y*E);s.thumbEl.style.left=`${w}px`,s.thumbEl.style.top=`${Ve}px`}function u(s){return s<window.innerWidth/2}function h(s){if(!i)return;const l=u(s.clientX)?t:n;l.pointerId===null&&(l.pointerId=s.pointerId,l.anchor={x:s.clientX,y:s.clientY},l.current={x:s.clientX,y:s.clientY},d(l===t?o:r,l),s.preventDefault())}function f(s){const l=t.pointerId===s.pointerId?t:n.pointerId===s.pointerId?n:null;l&&(l.current={x:s.clientX,y:s.clientY},d(l===t?o:r,l),s.preventDefault())}function p(s,l){s.pointerId=null,d(l,s)}function y(s){t.pointerId===s.pointerId&&p(t,o),n.pointerId===s.pointerId&&p(n,r)}return e.addEventListener("pointerdown",h),e.addEventListener("pointermove",f),e.addEventListener("pointerup",y),e.addEventListener("pointercancel",y),{getInputState(){const s=le(t),l=le(n),v=l.x!==0||l.y!==0;return{move:s,aim:l,fire:v}},setActive(s){i=s,e.style.pointerEvents=i?"auto":"none",i||(p(t,o),p(n,r))},destroy(){e.removeEventListener("pointerdown",h),e.removeEventListener("pointermove",f),e.removeEventListener("pointerup",y),e.removeEventListener("pointercancel",y),o.anchorEl.remove(),o.thumbEl.remove(),r.anchorEl.remove(),r.thumbEl.remove(),a.remove()}}}const ue=.15,Wt=.5;function Yt(e){const t=Math.hypot(e.x,e.y);return t===0?{x:0,y:0}:{x:e.x/t,y:e.y/t}}function fe(e,t,n){const a=Math.hypot(e,t);if(a<n)return{x:0,y:0};const o=Math.min(1,(a-n)/(1-n))/a;return{x:e*o,y:t*o}}function pe(e,t,n){var r,i;const a=(r=e.buttons[t])!=null&&r.pressed?1:0;return((i=e.buttons[n])!=null&&i.pressed?1:0)-a}function Xt(e=0){function t(){return(typeof navigator<"u"?navigator.getGamepads():[])[e]??null}return{isConnected(){return t()!==null},getInputState(){const n=t();if(!n)return;const a=n.axes??[];let o=fe(a[0]??0,a[1]??0,ue);if(o.x===0&&o.y===0){const h=pe(n,14,15),f=pe(n,12,13);(h!==0||f!==0)&&(o=Yt({x:h,y:f}))}let r=fe(a[2]??0,a[3]??0,ue);r.x===0&&r.y===0&&(r=o);const i=[0,1,2,3].some(h=>{var f;return(f=n.buttons[h])==null?void 0:f.pressed}),d=[6,7].some(h=>{var f,p;return(((f=n.buttons[h])==null?void 0:f.value)??0)>Wt||((p=n.buttons[h])==null?void 0:p.pressed)});return{move:o,aim:r,fire:i||d}}}}function jt(e){const t=document.createElement("div");t.className="hud",e.appendChild(t);const n=document.createElement("style");return n.textContent=`
    .hud {
      position: absolute;
      top: 10px;
      left: 10px;
      right: 10px;
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      letter-spacing: 0.03em;
      text-shadow: 0 1px 2px rgba(0,0,0,0.8);
      pointer-events: none;
    }
    .hud__group { display: flex; gap: 16px; }
  `,e.appendChild(n),{update(a){const o=a.planet.maxHp>0?Math.round(a.planet.hp/a.planet.maxHp*100):0;t.innerHTML=`
        <div class="hud__group">
          <span>Wave ${a.wave}</span>
          <span>Planet ${o}%</span>
          ${a.daily?"<span>Daily</span>":""}
        </div>
        <div class="hud__group">
          <span>Score ${a.score}</span>
        </div>
      `},destroy(){t.remove(),n.remove()}}}const j="orbitsiege.scores",ke="orbitsiege.dailyScores.",Jt=10;function V(e){try{const t=localStorage.getItem(e);if(!t)return[];const n=JSON.parse(t);return Array.isArray(n)?n.filter(a=>a&&typeof a.score=="number"&&typeof a.wave=="number"&&typeof a.date=="string"):[]}catch{return[]}}function Ie(e,t){const n=[...t].sort((a,o)=>o.score-a.score).slice(0,Jt);try{localStorage.setItem(e,JSON.stringify(n))}catch{}return n}function he(){return V(j)}function Zt(e){const t=V(j);return t.push(e),Ie(j,t)}function ye(e){return V(ke+e)}function Qt(e,t){const n=ke+e,a=V(n);return a.push(t),Ie(n,a)}function me(e,t){if(t.length===0){e.innerHTML='<p class="scores__empty">No scores yet.</p>';return}const n=t.map((a,o)=>`
        <tr>
          <td>${o+1}</td>
          <td>${a.score}</td>
          <td>${a.wave}</td>
          <td>${a.date}</td>
        </tr>`).join("");e.innerHTML=`
    <table class="scores__table">
      <thead>
        <tr><th>#</th><th>Score</th><th>Wave</th><th>Date</th></tr>
      </thead>
      <tbody>${n}</tbody>
    </table>
  `}function ve(){return new Date().toISOString().slice(0,10)}function en(e){const t=document.createElement("style");t.textContent=`
    .screen {
      position: absolute;
      inset: 0;
      display: none;
      align-items: center;
      justify-content: center;
      background: rgba(5, 8, 16, 0.86);
      color: #e8f0ff;
      font-family: inherit;
      text-align: center;
      padding: 16px;
      box-sizing: border-box;
    }
    .screen--visible { display: flex; }
    .screen__panel {
      max-width: 520px;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 16px;
      align-items: center;
    }
    .screen__title {
      font-size: 28px;
      letter-spacing: 0.04em;
      margin: 0;
    }
    .screen__subtitle {
      font-size: 16px;
      opacity: 0.85;
      margin: 0;
    }
    .draft__cards {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
    }
    .draft__card {
      flex: 1 1 140px;
      min-width: 140px;
      max-width: 220px;
      background: rgba(30, 40, 70, 0.9);
      border: 1px solid rgba(140, 170, 255, 0.4);
      border-radius: 10px;
      padding: 14px;
      color: inherit;
      cursor: pointer;
      font-family: inherit;
      display: flex;
      flex-direction: column;
      gap: 8px;
      touch-action: manipulation;
    }
    .draft__card:hover, .draft__card:focus {
      background: rgba(50, 65, 110, 0.95);
      border-color: rgba(170, 200, 255, 0.8);
    }
    .draft__card-name {
      font-weight: 700;
      font-size: 16px;
    }
    .draft__card-desc {
      font-size: 13px;
      opacity: 0.85;
    }
    .screen__button {
      background: #3a6df0;
      color: #fff;
      border: none;
      border-radius: 8px;
      padding: 12px 24px;
      font-size: 16px;
      cursor: pointer;
      touch-action: manipulation;
    }
    .screen__button:hover, .screen__button:focus {
      background: #4f80ff;
    }
    .screen__toggle {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      cursor: pointer;
    }
    .screen__scores {
      width: 100%;
      max-height: 220px;
      overflow-y: auto;
    }
    .scores__table {
      width: 100%;
      border-collapse: collapse;
      font-size: 13px;
    }
    .scores__table th, .scores__table td {
      padding: 4px 8px;
      text-align: center;
      border-bottom: 1px solid rgba(255,255,255,0.1);
    }
    .scores__empty {
      opacity: 0.7;
      font-size: 13px;
    }
  `,e.appendChild(t)}function tn(e){en(e);const t=document.createElement("div");t.className="screen screen--draft",t.innerHTML=`
    <div class="screen__panel">
      <h1 class="screen__title">Choose an upgrade</h1>
      <div class="draft__cards"></div>
    </div>
  `,e.appendChild(t);const n=t.querySelector(".draft__cards"),a=document.createElement("div");a.className="screen screen--gameover",a.innerHTML=`
    <div class="screen__panel">
      <h1 class="screen__title">Game Over</h1>
      <p class="screen__subtitle gameover__stats"></p>
      <button type="button" class="screen__button gameover__restart">Restart</button>
      <div class="screen__scores gameover__scores"></div>
    </div>
  `,e.appendChild(a);const o=a.querySelector(".gameover__stats"),r=a.querySelector(".gameover__restart"),i=a.querySelector(".gameover__scores"),d=document.createElement("div");d.className="screen screen--title",d.innerHTML=`
    <div class="screen__panel">
      <h1 class="screen__title">Orbit Siege</h1>
      <p class="screen__subtitle">Defend your planet. Pick upgrades. Survive.</p>
      <label class="screen__toggle">
        <input type="checkbox" class="title__daily" />
        Daily Challenge
      </label>
      <button type="button" class="screen__button title__start">Start</button>
      <div class="screen__scores title__scores"></div>
    </div>
  `,e.appendChild(d);const u=d.querySelector(".title__daily"),h=d.querySelector(".title__start"),f=d.querySelector(".title__scores");return{showDraft(p,y){n.innerHTML="";for(const s of p){const l=document.createElement("button");l.type="button",l.className="draft__card",l.innerHTML=`
          <span class="draft__card-name">${s.name}</span>
          <span class="draft__card-desc">${s.desc}</span>
        `,l.addEventListener("click",()=>y(s)),n.appendChild(l)}t.classList.add("screen--visible")},hideDraft(){t.classList.remove("screen--visible")},showGameOver(p,y){const s=p.daily?"Daily Challenge":"Score";o.textContent=`${s} ${p.score} — Wave ${p.wave}`,me(i,p.daily?ye(ve()):he());const l=()=>y();r.onclick=l,a.classList.add("screen--visible")},hideGameOver(){a.classList.remove("screen--visible")},showTitle(p){u.checked=!1;const y=()=>{me(f,u.checked?ye(ve()):he())};y(),u.onchange=y,h.onclick=()=>p(u.checked),d.classList.add("screen--visible")},hideTitle(){d.classList.remove("screen--visible")}}}let N=null;function D(){if(!N){const e=window.AudioContext||window.webkitAudioContext;N=new e}return N}function Le(){const e=D();e.state==="suspended"&&e.resume()}let F=null;function nn(e){if(F)return F;const n=Math.floor(e.sampleRate*.3),a=e.createBuffer(1,n,e.sampleRate),o=a.getChannelData(0);for(let r=0;r<n;r++)o[r]=Math.random()*2-1;return F=a,a}function b(e,t){const n=e.currentTime+(t.delay??0),a=e.createOscillator(),o=e.createGain();a.type=t.type??"sine",a.frequency.setValueAtTime(t.freqStart,n),t.freqEnd!==void 0&&a.frequency.exponentialRampToValueAtTime(Math.max(1,t.freqEnd),n+t.duration);const r=t.gain??.2;o.gain.setValueAtTime(1e-4,n),o.gain.exponentialRampToValueAtTime(r,n+Math.min(.02,t.duration*.2)),o.gain.exponentialRampToValueAtTime(1e-4,n+t.duration),a.connect(o),o.connect(e.destination),a.start(n),a.stop(n+t.duration+.02),a.onended=()=>{a.disconnect(),o.disconnect()}}function I(e,t){const n=e.currentTime+(t.delay??0),a=e.createBufferSource();a.buffer=nn(e);const o=e.createGain(),r=e.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(t.filterFreq??1200,n);const i=t.gain??.3;o.gain.setValueAtTime(i,n),o.gain.exponentialRampToValueAtTime(1e-4,n+t.duration),a.connect(r),r.connect(o),o.connect(e.destination),a.start(n),a.stop(n+t.duration+.02),a.onended=()=>{a.disconnect(),r.disconnect(),o.disconnect()}}function rn(e,t){const n=Math.max(.1,t.power||1);switch(t.type){case"hit":b(e,{freqStart:900,freqEnd:400,duration:.07,type:"square",gain:.12});break;case"kill":b(e,{freqStart:500,freqEnd:80,duration:.25,type:"sawtooth",gain:.2}),I(e,{duration:.15,gain:.15,filterFreq:2e3});break;case"playerHurt":case"planetHurt":b(e,{freqStart:140,freqEnd:60,duration:.18,type:"sine",gain:.25}),I(e,{duration:.12,gain:.1,filterFreq:400});break;case"boom":I(e,{duration:.3,gain:Math.min(.4,.15+n/50),filterFreq:600}),b(e,{freqStart:120,freqEnd:40,duration:.3,type:"sine",gain:.2});break;case"bossSpawn":case"bossPhase":b(e,{freqStart:100,freqEnd:900,duration:.6,type:"sawtooth",gain:.18});break;case"pickup":case"upgradePicked":b(e,{freqStart:660,freqEnd:990,duration:.12,type:"triangle",gain:.15}),b(e,{freqStart:990,duration:.1,type:"triangle",gain:.1,delay:.05});break;case"gameOver":b(e,{freqStart:300,freqEnd:40,duration:.8,type:"sawtooth",gain:.25}),I(e,{duration:.5,gain:.25,filterFreq:500});break}}function on(){return{resume(){Le()},onEvent(e){const t=D();t.state==="running"&&rn(t,e)}}}const an=110,O=[0,3,5,7,10,12,15,17];function $(e){const t=O[e%O.length],n=Math.floor(e/O.length)*12;return an*Math.pow(2,(t+n)/12)}const z=.25,sn=.1,cn=50;function ln(){let e=!1,t=0,n=0,a=0,o=null;function r(y){return y%4===0?0:y%4===2?2:Math.random()<.5?0:3}function i(){return Math.floor(Math.random()*O.length)}function d(y,s,l,v){const x=y.createOscillator(),c=y.createGain();x.type="triangle",x.frequency.setValueAtTime(l,s);const m=z*1.8;c.gain.setValueAtTime(1e-4,s),c.gain.exponentialRampToValueAtTime(v,s+.02),c.gain.exponentialRampToValueAtTime(1e-4,s+m),x.connect(c),c.connect(y.destination),x.start(s),x.stop(s+m+.02),x.onended=()=>{x.disconnect(),c.disconnect()}}function u(y,s,l,v){const x=y.createOscillator(),c=y.createGain();x.type="sine",x.frequency.setValueAtTime(l*2,s);const m=z*.8;c.gain.setValueAtTime(1e-4,s),c.gain.exponentialRampToValueAtTime(v,s+.01),c.gain.exponentialRampToValueAtTime(1e-4,s+m),x.connect(c),c.connect(y.destination),x.start(s),x.stop(s+m+.02),x.onended=()=>{x.disconnect(),c.disconnect()}}function h(y,s){const l=.08+t*.08;d(y,s,$(r(n)),l);const v=t;n%2===0&&Math.random()<.3+v*.7&&u(y,s,$(i()),.04+t*.06),t>.6&&n%2===1&&Math.random()<.5&&u(y,s,$(i()+2),.03+t*.05)}function f(){return 1-t*.3}function p(){const y=D();for(;a<y.currentTime+sn;)h(y,a),a+=z*f(),n++}return{resume(){Le()},start(){if(e)return;e=!0,a=D().currentTime+.05,n=0,o=setInterval(p,cn)},stop(){e=!1,o!==null&&(clearInterval(o),o=null)},setIntensity(y){t=Math.max(0,Math.min(1,y))}}}const T=document.getElementById("game-canvas"),dn=document.getElementById("hud-root"),un=document.getElementById("ui-root"),fn=document.getElementById("touch-root"),P=Rt(T),J=Dt(),A=Ft(),pn=jt(dn),S=tn(un),Re=$t(window),Ce=Gt(fn),hn=Xt(0),Oe=on(),U=ln();Re.setCoop(!0);let ge=!1;function H(){ge||(ge=!0,Oe.resume(),U.resume(),window.removeEventListener("keydown",H),window.removeEventListener("pointerdown",H))}window.addEventListener("keydown",H);window.addEventListener("pointerdown",H);function Pe(){const e=Math.min(window.devicePixelRatio||1,2);T.width=Math.floor(window.innerWidth*e),T.height=Math.floor(window.innerHeight*e),T.style.width=`${window.innerWidth}px`,T.style.height=`${window.innerHeight}px`,T.getContext("2d").setTransform(e,0,0,e,0,0),P.resize(window.innerWidth,window.innerHeight)}window.addEventListener("resize",Pe);Pe();function xe(){return new Date().toISOString().slice(0,10)}function De(e){return e?Ne():Date.now()>>>0}let g=Se(De(!1));g.phase="title";let B=!1,Z=!1;function He(e){B=e,Z=!1,g=Se(De(B),{daily:e,coop:!0}),S.hideTitle(),S.hideGameOver(),U.start()}function yn(){S.hideGameOver(),He(B)}S.showTitle(He);function _e(e,t){return{x:window.innerWidth/2+e,y:window.innerHeight/2+t}}const mn=new Set(["hit","kill","boom","bossPhase","planetHurt"]);function vn(){for(const e of g.events)if(A.onEvent(e),Oe.onEvent(e),mn.has(e.type)&&J.spawnBurst(e.x,e.y,{count:e.type==="kill"?24:10,color:e.type==="planetHurt"?"#ff6b6b":"#ffe27a"}),e.type==="gameOver"&&!Z){Z=!0;const t={score:g.score,wave:g.wave,date:xe()};Zt(t),B&&Qt(xe(),t),U.stop()}g.events.length=0}let L=null;function gn(){g.phase!==L&&(L=g.phase,g.phase==="draft"?S.showDraft(g.draftOptions,e=>{St(g,e),L=null,S.hideDraft()}):S.hideDraft(),g.phase==="gameover"?S.showGameOver(g,()=>{L=null,yn()}):S.hideGameOver(),Ce.setActive(g.phase==="play"))}function xn(e,t){const n=Re.getInputState(e,t),a=Ce.getInputState(),o={move:a.move.x!==0||a.move.y!==0?a.move:n.p1.move,aim:a.aim.x!==0||a.aim.y!==0?a.aim:n.p1.aim,fire:n.p1.fire||a.fire},r=hn.getInputState()??n.p2;return{p1:o,p2:r}}const K=1/60;let R=0,we=performance.now();function Be(e){const t=Math.min(.25,(e-we)/1e3);if(we=e,R+=t,g.phase==="play"){const a=A.getTimeScale();for(;R>=K;){const r=g.players.find(h=>h.id===1),i=_e(g.planet.x,g.planet.y),d=r?_e(r.x,r.y):i,u=xn(i,d);wt(g,u,K*a),R-=K}const o=g.enemies.some(r=>r.alive&&r.isBoss);U.setIntensity(Math.min(1,o?1:g.wave/10))}else R=0;vn(),gn(),A.update(t),J.update(t);const n=T.getContext("2d");P.setShakeOffset(A.getShakeOffset().x,A.getShakeOffset().y),P.setFlashAlpha(A.getFlashAlpha(),"#ffffff"),n.save(),n.translate(window.innerWidth/2,window.innerHeight/2),P.render(g),J.render(n),n.restore(),pn.update(g),requestAnimationFrame(Be)}requestAnimationFrame(Be);
