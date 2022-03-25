var E=Object.defineProperty;var M=(a,e,r)=>e in a?E(a,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[e]=r;var i=(a,e,r)=>(M(a,typeof e!="symbol"?e+"":e,r),r);import{U as f,_ as U,R as w}from"./vendor.5b22622a.js";/* empty css              */import{c as h,p as V,t as D,f as P,r as A,m as C}from"./vec3.d4a804b7.js";const R="_part_pfhqm_1",G="_card_pfhqm_1",S="_footer_pfhqm_4";var N={part:R,card:G,footer:S},O=`struct Uniforms {
  modelViewProjectionMatrix : mat4x4<f32>;
};
@binding(0) @group(0) var<uniform> uniforms : Uniforms;

struct VertexOutput {
  @builtin(position) Position : vec4<f32>;
  @location(0) fragUV : vec2<f32>;
  @location(1) fragPosition: vec4<f32>;
};

@stage(vertex)
fn main(@location(0) position : vec4<f32>,
        @location(1) uv : vec2<f32>) -> VertexOutput {
  var output : VertexOutput;
  output.Position = uniforms.modelViewProjectionMatrix * position;
  output.fragUV = uv;
  output.fragPosition = 0.5 * (position + vec4<f32>(1.0, 1.0, 1.0, 1.0));
  return output;
}`,z=`@group(0) @binding(1) var mySampler: sampler;
@group(0) @binding(2) var myTexture: texture_2d<f32>;

@stage(fragment)
fn main(@location(0) fragUV: vec2<f32>,
        @location(1) fragPosition: vec4<f32>) -> @location(0) vec4<f32> {
  return textureSample(myTexture, mySampler, fragUV) * fragPosition;
}`;const F=4*10,q=0,j=4*8,I=36,b=new Float32Array([1,-1,1,1,1,0,1,1,1,1,-1,-1,1,1,0,0,1,1,0,1,-1,-1,-1,1,0,0,0,1,0,0,1,-1,-1,1,1,0,0,1,1,0,1,-1,1,1,1,0,1,1,1,1,-1,-1,-1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,-1,1,1,1,0,1,1,0,1,1,-1,-1,1,1,0,0,1,0,0,1,1,-1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,-1,-1,1,1,0,0,1,0,0,-1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,-1,1,1,1,0,1,0,0,-1,1,-1,1,0,1,0,1,1,0,-1,1,1,1,0,1,1,1,1,1,1,1,-1,1,1,1,0,1,0,0,-1,-1,1,1,0,0,1,1,1,1,-1,1,1,1,0,1,1,1,0,1,-1,1,-1,1,0,1,0,1,0,0,-1,-1,-1,1,0,0,0,1,1,0,-1,-1,1,1,0,0,1,1,1,1,-1,1,-1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,-1,1,1,1,0,1,1,1,0,1,-1,-1,1,1,0,0,1,1,0,0,-1,-1,1,1,0,0,1,1,0,0,1,-1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,-1,-1,1,1,0,0,1,1,1,-1,-1,-1,1,0,0,0,1,0,1,-1,1,-1,1,0,1,0,1,0,0,1,1,-1,1,1,1,0,1,1,0,1,-1,-1,1,1,0,0,1,1,1,-1,1,-1,1,0,1,0,1,0,0]);var L="assets/logo.96d41a24.png";class H{constructor(e){i(this,"adapter");i(this,"device");i(this,"context");i(this,"format");i(this,"devicePixelRatio",window.devicePixelRatio|1);i(this,"size",[0,0]);i(this,"uniformBuffer");i(this,"renderPassDescriptor");i(this,"pipeline");i(this,"uniformBindGroup");i(this,"verticesBuffer");i(this,"projectionMatrix");i(this,"viewMatrix");i(this,"render",()=>{var u,n,o,c;const e=this.getTransformationMatrix();(u=this.device)==null||u.queue.writeBuffer(this.uniformBuffer,0,e.buffer,e.byteOffset,e.byteLength),this.renderPassDescriptor.colorAttachments[0].view=(n=this.context)==null?void 0:n.getCurrentTexture().createView();const r=(o=this.device)==null?void 0:o.createCommandEncoder(),t=r==null?void 0:r.beginRenderPass(this.renderPassDescriptor);t==null||t.setPipeline(this.pipeline),t==null||t.setBindGroup(0,this.uniformBindGroup),t==null||t.setVertexBuffer(0,this.verticesBuffer),t==null||t.draw(I,1,0,0),t!=null&&t.endPass?t==null||t.endPass():t==null||t.end(),(c=this.device)==null||c.queue.submit([r.finish()]),requestAnimationFrame(this.render)});this.canvas=e,this.canvas=e;let r=e.clientWidth*this.devicePixelRatio,t=e.clientHeight*this.devicePixelRatio;this.size=[r,t]}async start(){var e,r;if(!this.canvas)throw f.error("\u6CA1\u6709Canvas Element",10),new Error("\u6CA1\u6709Canvas Element");if(!navigator.gpu)throw f.error("\u4E0D\u652F\u6301\u4F7F\u7528\u663E\u5361\u8BBE\u5907",10),new Error("\u4E0D\u652F\u6301\u663E\u5361\u8BBE\u5907");if(this.adapter=await navigator.gpu.requestAdapter({powerPreference:"high-performance"})||void 0,!this.adapter)throw f.error("\u83B7\u53D6\u663E\u5361\u8BBE\u5907\u5931\u8D25",10),new Error("\u83B7\u53D6\u663E\u5361\u8BBE\u5907\u5931\u8D25");if(this.device=await this.adapter.requestDevice(),!this.device)throw f.error("\u663E\u5361\u8BBE\u5907\u672A\u627E\u5230",10),new Error("\u663E\u5361\u8BBE\u5907\u672A\u627E\u5230");this.context=this.canvas.getContext("webgpu"),this.format=(e=this.context)==null?void 0:e.getPreferredFormat(this.adapter),(r=this.context)==null||r.configure({device:this.device,format:this.format,size:this.size,compositingAlphaMode:"opaque"}),await this.init()}async init(){var l,p,g,v,x;const e=(l=this.device)==null?void 0:l.createBuffer({size:b.byteLength,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0});new Float32Array(e.getMappedRange()).set(b),e==null||e.unmap(),this.verticesBuffer=e;const r=(p=this.device)==null?void 0:p.createRenderPipeline({vertex:{module:this.device.createShaderModule({code:O}),entryPoint:"main",buffers:[{arrayStride:F,attributes:[{shaderLocation:0,offset:q,format:"float32x4"},{shaderLocation:1,offset:j,format:"float32x2"}]}]},fragment:{module:this.device.createShaderModule({code:z}),entryPoint:"main",targets:[{format:this.format}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}});this.pipeline=r;const t=(g=this.device)==null?void 0:g.createTexture({size:this.size,format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),u=4*16,n=this.device.createBuffer({size:u,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});this.uniformBuffer=n;let o;{const d=document.createElement("img");d.src=L,await d.decode();const s=await createImageBitmap(d);o=this.device.createTexture({size:[s.width,s.height,1],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT}),(v=this.device)==null||v.queue.copyExternalImageToTexture({source:s},{texture:o},[s.width,s.height])}const c=(x=this.device)==null?void 0:x.createSampler({magFilter:"linear",minFilter:"linear"}),_=this.device.createBindGroup({layout:r.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:n}},{binding:1,resource:c},{binding:2,resource:o.createView()}]});this.uniformBindGroup=_;const T={colorAttachments:[{view:void 0,loadValue:{r:.5,g:.5,b:.5,a:1},loadOp:"clear",storeOp:"store",clearValue:{r:.5,g:.5,b:.5,a:1}}],depthStencilAttachment:{view:t.createView(),depthClearValue:1,depthLoadValue:1,depthStoreOp:"store",depthLoadOp:"clear"}};this.renderPassDescriptor=T;const m=h(),y=this.canvas.clientWidth/this.canvas.clientHeight;V(m,2*Math.PI/5,y,1,100),this.projectionMatrix=m,this.getTransformationMatrix(),this.render()}getTransformationMatrix(){const e=h();D(e,e,P(0,0,-4)),this.viewMatrix=e;const r=Date.now()/1e3;A(e,e,1,P(Math.sin(r),Math.cos(r),0));const t=h();return C(t,this.projectionMatrix,this.viewMatrix),t}}var B="/Users/indeex/Documents/program/indeex/program/webGPU/wgsl-base/src/component/part7/index.tsx";const J=()=>(U.exports.useEffect(()=>{const a=document.getElementById("gfx");a.width=document.body.clientWidth,a.height=document.body.clientHeight,new H(a).start(),window.onresize=function(){a.width=document.body.clientWidth,a.height=document.body.clientHeight}}),w.createElement("div",{className:N.part,__self:globalThis,__source:{fileName:B,lineNumber:17,columnNumber:10}},w.createElement("canvas",{id:"gfx",__self:globalThis,__source:{fileName:B,lineNumber:18,columnNumber:5}})));export{J as default};
