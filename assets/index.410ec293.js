import{_ as I,R as F}from"./vendor.5b22622a.js";import{c as V,l as j,i as J,p as K,b as Q,a as Z}from"./mat4.2a33baad.js";const $="_part_pfhqm_1",ee="_card_pfhqm_1",te="_footer_pfhqm_4";var re={part:$,card:ee,footer:te};const ae=a=>{var P=0,p=0,S=0;let q=40*Math.PI/180;async function L(f){if(!f)throw new Error("data error\uFF1A"+f);let d=f.trim()+`
`;d.indexOf(`
`,0);let o=[1],x=[1],v=[1],b=[],U=[],e=[],m=[],g=0,B=d.split(`
`);for(let w=0;w<B.length;w++){let s=B[w];s=s.trim().replace(/\s+/g," ");let t=s.split(" ");const c=t[0];if(c==="v")t.shift(),t=t.map(parseFloat),o.push(t);else if(c==="vt")t.shift(),t=t.map(parseFloat),t[2]=0,x.push(t.slice(0,2));else if(c==="vn")t.shift(),t=t.map(parseFloat),v.push(t);else if(c==="f"){t.shift();for(let h=0;h<t.length-2;h++)for(let u=0;u<3;u++){let _=t[u+h];u==2&&(u=t.length-1,_=t[u]);let r=_.split("/");for(let n=0;n<3;n++)r[0]<0&&(r[0]=o.length+1+parseInt(r[0])),r[1]<0&&(r[1]=x.length+1+parseInt(r[1])),r[2]<0&&(r[2]=v.length+1+parseInt(r[2]));for(let n=0;n<r.length;n++)switch(n){case 0:b.push(o[r[0]]);break;case 1:U.push(x[r[1]]);break;case 2:e.push(v[r[2]]);break}m.push(g),g++}}}return{vertex:b,uv:U,normals:e,faces:m}}function X(f,d){var o=new XMLHttpRequest;o.open("GET",d,!1),o.onload=function(){o.status!=200?alert("LOAD"+o.status+": "+o.statusText):f.mesh=o.responseText},o.send()}async function Y(){const f={vertex:`
          struct Uniform {
           pMatrix : mat4x4<f32>;
           vMatrix : mat4x4<f32>;
           mMatrix : mat4x4<f32>;
          };
          @binding(0) @group(0) var<uniform> uniforms : Uniform;
             
          struct Output {
              @builtin(position) Position : vec4<f32>;
              @location(0) vUV : vec2<f32>;
          };
    
          @stage(vertex)
            fn main(@location(0) pos: vec4<f32>, @location(1) uv: vec2<f32>) -> Output {
               
                var output: Output;
                output.Position = uniforms.pMatrix * uniforms.vMatrix * uniforms.mMatrix * pos;
                output.vUV = 1.0 - uv;
    
                return output;
            }
        `,fragment:`
          @binding(1) @group(0) var textureSampler : sampler;
          @binding(2) @group(0) var textureData : texture_2d<f32>;
    
          @stage(fragment)
          fn main(@location(0) vUV: vec2<f32>) -> @location(0) vec4<f32> {
          let textureColor:vec3<f32> = (textureSample(textureData, textureSampler, vUV)).rgb;
          return vec4<f32>(textureColor, 1.0);
        }
        `};let d={};await X(d,"https://hungking.cc/assets/models/webgpu_base_part11/kedi.obj");let o=await L(d.mesh);const x=new Float32Array(o.vertex.flat()),v=new Float32Array(o.uv.flat()),b=new Uint32Array(o.faces.flat());a.width=document.body.clientWidth,a.height=document.body.clientHeight;const U=await navigator.gpu.requestAdapter(),e=await U.requestDevice(),m=a.getContext("webgpu"),g=window.devicePixelRatio||1,B=[a.clientWidth*g,a.clientHeight*g],w=m.getPreferredFormat(U);m.configure({device:e,format:w,size:B,compositingAlphaMode:"opaque"});let s=V(),t=V(),c=V();j(t,[0,0,5],[0,0,0],[0,1,0]),J(c),K(c,q,a.width/a.height,1,25);const h=e.createBuffer({size:x.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST,mappedAtCreation:!0});new Float32Array(h.getMappedRange()).set(x),h.unmap();const u=e.createBuffer({size:v.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST,mappedAtCreation:!0});new Float32Array(u.getMappedRange()).set(v),u.unmap();const _=e.createBuffer({size:b.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST,mappedAtCreation:!0});new Uint32Array(_.getMappedRange()).set(b),_.unmap();const r=e.createRenderPipeline({vertex:{module:e.createShaderModule({code:f.vertex}),entryPoint:"main",buffers:[{arrayStride:4*3,attributes:[{shaderLocation:0,format:"float32x3",offset:0}]},{arrayStride:4*2,attributes:[{shaderLocation:1,format:"float32x2",offset:0}]}]},fragment:{module:e.createShaderModule({code:f.fragment}),entryPoint:"main",targets:[{format:w}]},primitive:{topology:"triangle-list",frontFace:"ccw",cullMode:"back"},depthStencil:{format:"depth24plus",depthWriteEnabled:!0,depthCompare:"less"}}),n=e.createBuffer({size:64+64+64,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});let A=new Image;A.src="https://hungking.cc/assets/models/webgpu_base_part11/kedi.png",A.crossOrigin=!0,await A.decode();const T=await createImageBitmap(A),k=e.createSampler({minFilter:"linear",magFilter:"linear",addressModeU:"repeat",addressModeV:"repeat"}),C=e.createTexture({size:[T.width,T.height,1],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});e.queue.copyExternalImageToTexture({source:T},{texture:C},[T.width,T.height]);const z=e.createBindGroup({layout:r.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:n,offset:0,size:64+64+64}},{binding:1,resource:k},{binding:2,resource:C.createView()}]});let D=m.getCurrentTexture().createView(),H=e.createTexture({size:[a.clientWidth*g,a.clientHeight*g,1],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT});const G={colorAttachments:[{view:D,clearValue:{r:.5,g:.5,b:.5,a:1},loadOp:"load",storeOp:"store"}],depthStencilAttachment:{view:H.createView(),depthLoadValue:1,depthLoadOp:"clear",depthClearValue:1,depthStoreOp:"store"}};e.queue.writeBuffer(n,0,c),e.queue.writeBuffer(n,64,t),e.queue.writeBuffer(n,64+64,s);async function O(i){Q(s,s,p),Z(s,s,P),e.queue.writeBuffer(n,64+64,s);const y=e.createCommandEncoder();D=m.getCurrentTexture().createView(),G.colorAttachments[0].view=D;const l=y.beginRenderPass(G);l.setPipeline(r),l.setVertexBuffer(0,h),l.setVertexBuffer(1,u),l.setIndexBuffer(_,"uint32"),l.setBindGroup(0,z),l.drawIndexed(b.length),l.end(),e.queue.submit([y.finish()]),requestAnimationFrame(O)}O(),a.onwheel=i=>{i.deltaY/100};var R=!1;a.onmousedown=i=>{i.button===0&&(R=!0,E=i.pageX,M=i.pageY)},a.onmouseup=i=>{R=!1};var E=-1,M=-1;a.onmousemove=i=>{if(!!R){var y=i.pageX,l=i.pageY;if(E>0&&M>0){const W=y-E;P=(l-M)/100,p=W/100,console.log(P,p,S)}E=y,M=l}},window.oncontextmenu=i=>{i.preventDefault()}}Y()};var N="/Users/indeex/Documents/program/indeex/program/webGPU/wgsl-base/src/component/part11/index.tsx";const se=()=>{I.exports.useState(),I.exports.useEffect(()=>{a()},[]);const a=async(P=1)=>{const p=document.getElementById("gfx");p.width=document.body.clientWidth,p.height=document.body.clientHeight,ae(p)};return F.createElement("div",{className:re.part,__self:globalThis,__source:{fileName:N,lineNumber:178,columnNumber:10}},F.createElement("canvas",{id:"gfx",__self:globalThis,__source:{fileName:N,lineNumber:179,columnNumber:5}}))};export{se as default};
