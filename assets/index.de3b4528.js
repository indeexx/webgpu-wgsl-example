var u=Object.defineProperty;var l=(t,e,i)=>e in t?u(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var r=(t,e,i)=>(l(t,typeof e!="symbol"?e+"":e,i),i);import{_ as m,R as c}from"./vendor.5b22622a.js";const f="_part_pfhqm_1",p="_card_pfhqm_1",v="_footer_pfhqm_4";var g={part:f,card:p,footer:v},w=`@stage(vertex)
fn main(@builtin(vertex_index) VertexIndex : u32) -> @builtin(position) vec4<f32> {
    var pos = array<vec2<f32>, 3>(
	    vec2<f32>(0.0, 0.5),
	    vec2<f32>(-0.5, -0.5),
	    vec2<f32>(0.5, -0.5)
    );
    return vec4<f32>(pos[VertexIndex], 0.0, 1.0);
}`,x=`@stage(fragment)
fn main() -> @location(0) vec4<f32> {
    return vec4<f32>(1.0, 0.0, 0.0, 1.0);
}`;class _{constructor(e){r(this,"adapter");r(this,"device");r(this,"context");r(this,"format");r(this,"pipeline");r(this,"devicePixelRatio",window.devicePixelRatio|1);r(this,"size",[0,0]);this.canvas=e,this.canvas=e;let i=e.clientWidth*this.devicePixelRatio,a=e.clientHeight*this.devicePixelRatio;this.size=[i,a]}async start(){await this.init()}async init(){var e,i;if(!this.canvas)throw new Error("\u6CA1\u6709Canvas Element");if(!navigator.gpu)throw new Error("\u4E0D\u652F\u6301GPU");if(this.adapter=await navigator.gpu.requestAdapter({powerPreference:"high-performance"})||void 0,!this.adapter)throw new Error("\u83B7\u53D6\u8BBE\u5907\u5931\u8D25");if(this.device=await this.adapter.requestDevice(),!this.device)throw new Error("\u8BBE\u5907\u672A\u627E\u5230");this.context=this.canvas.getContext("webgpu")||void 0,this.format=(e=this.context)==null?void 0:e.getPreferredFormat(this.adapter),(i=this.context)==null||i.configure({device:this.device,format:this.format,size:this.size,compositingAlphaMode:"opaque"}),await this.run()}async run(){await this.initPipeline(),this.draw()}async initPipeline(){const e={vertex:{module:this.device.createShaderModule({code:w}),entryPoint:"main"},fragment:{module:this.device.createShaderModule({code:x}),entryPoint:"main",targets:[{format:this.format}]},primitive:{topology:"triangle-list"}};this.pipeline=await this.device.createRenderPipelineAsync(e)}async draw(){var o,s;const e=(o=this.device)==null?void 0:o.createCommandEncoder(),a={colorAttachments:[{view:this.context.getCurrentTexture().createView(),clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]},n=e.beginRenderPass(a);n==null||n.setPipeline(this.pipeline),n==null||n.draw(3,1,0,0),n.end();const h=e.finish();(s=this.device)==null||s.queue.submit([h])}}var d="/Users/indeex/Documents/program/indeex/program/webGPU/wgsl-base/src/component/part4/index.tsx";const y=()=>(m.exports.useEffect(()=>{const t=document.getElementById("gfx");t.width=document.body.clientWidth,t.height=document.body.clientHeight,new _(t).start(),window.onresize=function(){t.width=document.body.clientWidth,t.height=document.body.clientHeight}}),c.createElement("div",{className:g.part,__self:globalThis,__source:{fileName:d,lineNumber:17,columnNumber:10}},c.createElement("canvas",{id:"gfx",__self:globalThis,__source:{fileName:d,lineNumber:18,columnNumber:5}})));export{y as default};
