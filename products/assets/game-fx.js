/* Pixel raymarch hero for games without live footage. Themes stay original. */
(function () {
  "use strict";
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var VERT = "attribute vec2 a; void main(){ gl_Position=vec4(a,0.0,1.0); }";
  var FRAG = [
    "precision mediump float;",
    "uniform vec2 r;",
    "uniform float t;",
    "uniform int theme;",
    "float hash(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }",
    "float noise(vec2 p){ vec2 i=floor(p); vec2 f=fract(p); float a=hash(i); float b=hash(i+vec2(1.0,0.0));",
    "float c=hash(i+vec2(0.0,1.0)); float d=hash(i+vec2(1.0,1.0)); vec2 u=f*f*(3.0-2.0*f);",
    "return mix(a,b,u.x)+(c-a)*u.y*(1.0-u.x)+(d-b)*u.x*u.y; }",
    "float sdBox(vec3 p, vec3 b){ vec3 q=abs(p)-b; return length(max(q,0.0))+min(max(q.x,max(q.y,q.z)),0.0); }",
    "float sdSphere(vec3 p,float s){ return length(p)-s; }",
    "mat2 rot(float a){ float c=cos(a),s=sin(a); return mat2(c,-s,s,c); }",
    "float hall(vec3 p){",
    "  float floorp=p.y+1.15;",
    "  float walls=5.0-abs(p.x);",
    "  float cols=sdBox(vec3(abs(p.x)-3.55,p.y,mod(p.z+2.0,4.0)-2.0),vec3(0.32,2.1,0.32));",
    "  float dais=sdBox(p-vec3(0.0,-1.0,12.0),vec3(2.8,0.35,2.2));",
    "  float body=sdBox(p-vec3(0.0,0.55,12.4),vec3(1.15,0.7,2.3));",
    "  float head=sdSphere(p-vec3(0.0,1.05,14.5),0.55);",
    "  float wing=sdBox(p-vec3(1.9,1.15,12.1),vec3(1.7,0.08,1.15));",
    "  float fig=sdBox(p-vec3(-1.15,0.35,2.4),vec3(0.18,0.85,0.16));",
    "  float torch=sdSphere(vec3(abs(p.x)-3.15,0.35,mod(p.z+2.0,4.0)-2.0),0.12);",
    "  float d=min(floorp,walls);",
    "  d=min(d,cols); d=min(d,dais); d=min(d,min(body,min(head,wing))); d=min(d,fig);",
    "  return min(d,torch);",
    "}",
    "float city(vec3 p){",
    "  float canal=step(abs(p.x),1.35);",
    "  vec2 id=floor(vec2((abs(p.x)-1.4)/1.7,p.z/1.8));",
    "  vec2 f=vec2(mod(abs(p.x)-1.4,1.7)-0.85, mod(p.z,1.8)-0.9);",
    "  float h=(0.8+3.2*hash(id))*(1.0-canal);",
    "  float b=sdBox(vec3(sign(p.x)*(abs(p.x)-1.4-0.85)-0.0,p.y-h*0.5,f.y),vec3(0.55,h*0.5,0.55));",
    "  float water=p.y+0.2+0.05*sin(p.z*2.0+t);",
    "  float street=p.y+0.02;",
    "  float ground=mix(street,water,canal);",
    "  float spire=sdBox(p-vec3(0.0,3.6,14.0),vec3(0.18,1.8,0.18));",
    "  return min(min(b,ground),spire);",
    "}",
    "float dungeon(vec3 p){",
    "  float tun=sdBox(p,vec3(1.6,1.5,12.0));",
    "  float wall=max(-tun, sdBox(p,vec3(2.4,2.0,12.0)));",
    "  float bolt=sdSphere(p-vec3(0.3+0.2*sin(t*6.0),0.1,2.5-mod(t*3.0,8.0)),0.18);",
    "  float fire=sdSphere(p-vec3(-0.6,-1.2,3.0),0.35+0.08*sin(t*9.0));",
    "  return min(wall,min(bolt,fire));",
    "}",
    "float map(vec3 p){",
    "  if(theme==1) return city(p);",
    "  if(theme==2) return dungeon(p);",
    "  return hall(p);",
    "}",
    "vec3 march(vec3 ro, vec3 rd){",
    "  float d=0.0;",
    "  for(int i=0;i<48;i++){",
    "    vec3 p=ro+rd*d;",
    "    float h=map(p);",
    "    if(h<0.03||d>28.0) break;",
    "    d+=max(h,0.05);",
    "  }",
    "  return vec3(d);",
    "}",
    "void main(){",
    "  float px=4.0;",
    "  vec2 uv=floor(gl_FragCoord.xy/px)*px/r.xy;",
    "  uv=uv*2.0-1.0; uv.x*=r.x/r.y;",
    "  vec3 ro,rd,col;",
    "  if(theme==1){",
    "    ro=vec3(0.15,1.5+0.1*sin(t*0.4),-6.0+mod(t*0.25,6.0));",
    "    rd=normalize(vec3(uv.x,uv.y-0.12,1.5));",
    "  } else if(theme==2){",
    "    ro=vec3(0.0,0.2,-1.4);",
    "    rd=normalize(vec3(uv.x,uv.y,1.6));",
    "  } else {",
    "    ro=vec3(0.1+0.2*sin(t*0.2),1.0,-7.0+0.3*sin(t*0.15));",
    "    rd=normalize(vec3(uv.x,uv.y-0.08,1.55));",
    "  }",
    "  float d=march(ro,rd).x;",
    "  vec3 p=ro+rd*d;",
    "  if(d>26.0){",
    "    if(theme==1) col=mix(vec3(0.08,0.12,0.2),vec3(0.85,0.45,0.22),smoothstep(-0.1,0.6,uv.y));",
    "    else if(theme==2) col=vec3(0.04,0.03,0.06);",
    "    else col=vec3(0.05,0.04,0.06);",
    "  } else {",
    "    float fog=clamp(d/22.0,0.0,1.0);",
    "    if(theme==1){",
    "      col=mix(vec3(0.35,0.18,0.12),vec3(0.15,0.22,0.28),clamp(p.y*0.2,0.0,1.0));",
    "      if(p.y<0.05) col=vec3(0.08,0.16,0.22);",
    "    } else if(theme==2){",
    "      col=vec3(0.18,0.14,0.12);",
    "      float glow=1.0/(0.4+length(p-vec3(0.3,0.1,2.5)));",
    "      col+=vec3(0.2,0.45,1.0)*glow*0.5;",
    "      col+=vec3(1.0,0.4,0.08)* (1.0/(0.5+length(p-vec3(-0.6,-1.2,3.0))));",
    "    } else {",
    "      col=vec3(0.16,0.12,0.1);",
    "      col+=vec3(1.0,0.45,0.1)*0.35*(0.5+0.5*sin(t*6.0+p.z));",
    "    }",
    "    col=mix(col, vec3(0.05,0.04,0.06), fog);",
    "  }",
    "  col+= (hash(gl_FragCoord.xy)-0.5)*0.04;",
    "  gl_FragColor=vec4(col,1.0);",
    "}",
  ].join("\n");

  function themeId(name) {
    if (name === "stockholm") return 1;
    if (name === "corp-por") return 2;
    return 0;
  }

  function boot(canvas) {
    var gl = canvas.getContext("webgl", { antialias: false, alpha: false });
    if (!gl) return;
    function sh(type, src) {
      var s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    }
    var prog = gl.createProgram();
    gl.attachShader(prog, sh(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);
    var buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 3,-1, -1,3]), gl.STATIC_DRAW);
    var loc = gl.getAttribLocation(prog, "a");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    var uR = gl.getUniformLocation(prog, "r");
    var uT = gl.getUniformLocation(prog, "t");
    var uTheme = gl.getUniformLocation(prog, "theme");
    var theme = themeId(canvas.getAttribute("data-theme") || "hall");
    var start = performance.now();
    function resize() {
      var w = canvas.clientWidth || 640;
      var h = canvas.clientHeight || 400;
      var dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.max(320, Math.floor(w * dpr));
      canvas.height = Math.max(200, Math.floor(h * dpr));
      gl.viewport(0, 0, canvas.width, canvas.height);
    }
    resize();
    window.addEventListener("resize", resize);
    var visible = true;
    if ("IntersectionObserver" in window) {
      visible = false;
      new IntersectionObserver(function (entries) {
        visible = entries[0] && entries[0].isIntersecting;
      }, { threshold: 0.05 }).observe(canvas);
    }
    function frame(now) {
      if (visible) {
        gl.uniform2f(uR, canvas.width, canvas.height);
        gl.uniform1f(uT, (now - start) / 1000);
        gl.uniform1i(uTheme, theme);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
      }
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  function lazyVideo(v) {
    if (!("IntersectionObserver" in window)) {
      v.setAttribute("preload", "metadata");
      return;
    }
    new IntersectionObserver(function (entries, obs) {
      if (entries[0] && entries[0].isIntersecting) {
        v.preload = "auto";
        v.play().catch(function () {});
        obs.disconnect();
      }
    }, { threshold: 0.2 }).observe(v);
  }

  document.querySelectorAll("canvas.gamefx").forEach(boot);
  document.querySelectorAll("video.gameplay").forEach(lazyVideo);
})();
