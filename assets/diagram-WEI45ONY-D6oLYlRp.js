import{p as k}from"./chunk-JWPE2WC7-BiAJ56rM.js";import{s as R,g as F,o as I,n as _,a as E,b as D,_ as c,F as P,p as z,A as y,y as C,B as G,l as B,W,e as V}from"./ProtoViewerPage-DKLLZSk7.js";import{p as H}from"./cynefin-VYW2F7L2-Dq05vxSr.js";import"./index-w33omg4_.js";import"./PageUseCaseHelp-BlelWhuz.js";import"./MessageCenter-qoL-iA39.js";import"./im-friend-store-D5meRGnj.js";import"./im-sync-DSL6I0fc.js";import"./im-aftersale-store-aLww4m9D.js";import"./im-conversation-store-ZZm-4ML4.js";import"./im-sim-adapter-CeTz415C.js";import"./im-group-store-CoVfNvTd.js";import"./im-visibility-engine-C4H5Fedr.js";import"./NotifyListPage-CT9dFz3C.js";import"./ContactsPage-1XvoBcOO.js";import"./FriendRequests-D_WGLonh.js";import"./AddFriend-B7nhCtSV.js";import"./FriendProfile-D_-ydExF.js";import"./FriendSettings-pNcsvwbM.js";import"./MyGroups-B59YWus0.js";import"./ChatPage-Cy9ov2Xy.js";import"./im-aftersale-service-C0l9zIoH.js";import"./ReportDialog-DILfdmK7.js";import"./im-live-store-D-GusNLF.js";import"./GroupSettings-2wVmOds3.js";import"./im-group-orchestrator-i__WLpqn.js";import"./GlobalSearch-DMdakim1.js";import"./ImLiveRoom-DIjQNo7r.js";import"./im-mass-send-store-FWtyRND0.js";import"./LivePromoPage-BXB7rpYK.js";import"./MassSendRecordsPage-DYpTqEGQ.js";import"./JoinGroupPage-ZkllMDiy.js";import"./StoreMgmtPage-C7lmEvUx.js";import"./StoreMemberPage-D98dOR-V.js";import"./PayResultPage-DqmPyJ-B.js";import"./ConsultEntryPage-CqSiNVam.js";import"./AftersaleApplyPage-CYaoJFiG.js";import"./AccountClosePage--swrNvX9.js";var x={showLegend:!0,ticks:5,max:null,min:0,graticule:"circle"},w={axes:[],curves:[],options:x},g=structuredClone(w),j=G.radar,N=c(()=>y({...j,...C().radar}),"getConfig"),b=c(()=>g.axes,"getAxes"),U=c(()=>g.curves,"getCurves"),X=c(()=>g.options,"getOptions"),Y=c(r=>{g.axes=r.map(t=>({name:t.name,label:t.label??t.name}))},"setAxes"),Z=c(r=>{g.curves=r.map(t=>({name:t.name,label:t.label??t.name,entries:q(t.entries)}))},"setCurves"),q=c(r=>{if(r[0].axis==null)return r.map(e=>e.value);const t=b();if(t.length===0)throw new Error("Axes must be populated before curves for reference entries");return t.map(e=>{const a=r.find(o=>{var s;return((s=o.axis)==null?void 0:s.$refText)===e.name});if(a===void 0)throw new Error("Missing entry for axis "+e.label);return a.value})},"computeCurveEntries"),J=c(r=>{var e,a,o,s,l;const t=r.reduce((n,i)=>(n[i.name]=i,n),{});g.options={showLegend:((e=t.showLegend)==null?void 0:e.value)??x.showLegend,ticks:((a=t.ticks)==null?void 0:a.value)??x.ticks,max:((o=t.max)==null?void 0:o.value)??x.max,min:((s=t.min)==null?void 0:s.value)??x.min,graticule:((l=t.graticule)==null?void 0:l.value)??x.graticule}},"setOptions"),K=c(()=>{z(),g=structuredClone(w)},"clear"),$={getAxes:b,getCurves:U,getOptions:X,setAxes:Y,setCurves:Z,setOptions:J,getConfig:N,clear:K,setAccTitle:D,getAccTitle:E,setDiagramTitle:_,getDiagramTitle:I,getAccDescription:F,setAccDescription:R},Q=c(r=>{k(r,$);const{axes:t,curves:e,options:a}=r;$.setAxes(t),$.setCurves(e),$.setOptions(a)},"populate"),tt={parse:c(async r=>{const t=await H("radar",r);B.debug(t),Q(t)},"parse")},et=c((r,t,e,a)=>{const o=a.db,s=o.getAxes(),l=o.getCurves(),n=o.getOptions(),i=o.getConfig(),p=o.getDiagramTitle(),m=P(t),d=rt(m,i),u=n.max??Math.max(...l.map(f=>Math.max(...f.entries))),h=n.min,v=Math.min(i.width,i.height)/2;at(d,s,v,n.ticks,n.graticule),ot(d,s,v,i),A(d,s,l,h,u,n.graticule,i),T(d,l,n.showLegend,i),d.append("text").attr("class","radarTitle").text(p).attr("x",0).attr("y",-i.height/2-i.marginTop)},"draw"),rt=c((r,t)=>{const e=t.width+t.marginLeft+t.marginRight,a=t.height+t.marginTop+t.marginBottom,o={x:t.marginLeft+t.width/2,y:t.marginTop+t.height/2};return V(r,a,e,t.useMaxWidth??!0),r.attr("viewBox",`0 0 ${e} ${a}`).attr("overflow","visible"),r.append("g").attr("transform",`translate(${o.x}, ${o.y})`)},"drawFrame"),at=c((r,t,e,a,o)=>{if(o==="circle")for(let s=0;s<a;s++){const l=e*(s+1)/a;r.append("circle").attr("r",l).attr("class","radarGraticule")}else if(o==="polygon"){const s=t.length;for(let l=0;l<a;l++){const n=e*(l+1)/a,i=t.map((p,m)=>{const d=2*m*Math.PI/s-Math.PI/2,u=n*Math.cos(d),h=n*Math.sin(d);return`${u},${h}`}).join(" ");r.append("polygon").attr("points",i).attr("class","radarGraticule")}}},"drawGraticule"),ot=c((r,t,e,a)=>{const o=t.length;for(let s=0;s<o;s++){const l=t[s].label,n=2*s*Math.PI/o-Math.PI/2,i=Math.cos(n),p=Math.sin(n);r.append("line").attr("x1",0).attr("y1",0).attr("x2",e*a.axisScaleFactor*i).attr("y2",e*a.axisScaleFactor*p).attr("class","radarAxisLine");const m=i>.01?"start":i<-.01?"end":"middle",d=p>.01?"hanging":p<-.01?"auto":"central",u=4;r.append("text").text(l).attr("x",e*a.axisLabelFactor*i+u*i).attr("y",e*a.axisLabelFactor*p+u*p).attr("text-anchor",m).attr("dominant-baseline",d).attr("class","radarAxisLabel")}},"drawAxes");function A(r,t,e,a,o,s,l){const n=t.length,i=Math.min(l.width,l.height)/2;e.forEach((p,m)=>{if(p.entries.length!==n)return;const d=p.entries.map((u,h)=>{const v=2*Math.PI*h/n-Math.PI/2,f=M(u,a,o,i),S=f*Math.cos(v),O=f*Math.sin(v);return{x:S,y:O}});s==="circle"?r.append("path").attr("d",L(d,l.curveTension)).attr("class",`radarCurve-${m}`):s==="polygon"&&r.append("polygon").attr("points",d.map(u=>`${u.x},${u.y}`).join(" ")).attr("class",`radarCurve-${m}`)})}c(A,"drawCurves");function M(r,t,e,a){const o=Math.min(Math.max(r,t),e);return a*(o-t)/(e-t)}c(M,"relativeRadius");function L(r,t){const e=r.length;let a=`M${r[0].x},${r[0].y}`;for(let o=0;o<e;o++){const s=r[(o-1+e)%e],l=r[o],n=r[(o+1)%e],i=r[(o+2)%e],p={x:l.x+(n.x-s.x)*t,y:l.y+(n.y-s.y)*t},m={x:n.x-(i.x-l.x)*t,y:n.y-(i.y-l.y)*t};a+=` C${p.x},${p.y} ${m.x},${m.y} ${n.x},${n.y}`}return`${a} Z`}c(L,"closedRoundCurve");function T(r,t,e,a){if(!e)return;const o=(a.width/2+a.marginRight)*3/4,s=-(a.height/2+a.marginTop)*3/4,l=20;t.forEach((n,i)=>{const p=r.append("g").attr("transform",`translate(${o}, ${s+i*l})`);p.append("rect").attr("width",12).attr("height",12).attr("class",`radarLegendBox-${i}`),p.append("text").attr("x",16).attr("y",0).attr("class","radarLegendText").text(n.label)})}c(T,"drawLegend");var st={draw:et},nt=c((r,t)=>{let e="";for(let a=0;a<r.THEME_COLOR_LIMIT;a++){const o=r[`cScale${a}`];e+=`
		.radarCurve-${a} {
			color: ${o};
			fill: ${o};
			fill-opacity: ${t.curveOpacity};
			stroke: ${o};
			stroke-width: ${t.curveStrokeWidth};
		}
		.radarLegendBox-${a} {
			fill: ${o};
			fill-opacity: ${t.curveOpacity};
			stroke: ${o};
		}
		`}return e},"genIndexStyles"),it=c(r=>{const t=W(),e=C(),a=y(t,e.themeVariables),o=y(a.radar,r);return{themeVariables:a,radarOptions:o}},"buildRadarStyleOptions"),lt=c(({radar:r}={})=>{const{themeVariables:t,radarOptions:e}=it(r);return`
	.radarTitle {
		font-size: ${t.fontSize};
		color: ${t.titleColor};
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: ${e.axisColor};
		stroke-width: ${e.axisStrokeWidth};
	}
	.radarAxisLabel {
		font-size: ${e.axisLabelFontSize}px;
		color: ${e.axisColor};
	}
	.radarGraticule {
		fill: ${e.graticuleColor};
		fill-opacity: ${e.graticuleOpacity};
		stroke: ${e.graticuleColor};
		stroke-width: ${e.graticuleStrokeWidth};
	}
	.radarLegendText {
		text-anchor: start;
		font-size: ${e.legendFontSize}px;
		dominant-baseline: hanging;
	}
	${nt(t,e)}
	`},"styles"),Xt={parser:tt,db:$,renderer:st,styles:lt};export{Xt as diagram};
