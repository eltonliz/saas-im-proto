import{p as k}from"./chunk-JWPE2WC7-taYWpRwr.js";import{s as R,g as F,o as I,n as _,a as E,b as D,_ as c,F as P,p as z,A as y,y as C,B as G,l as B,W,e as V}from"./ProtoViewerPage-DFLMYyGT.js";import{p as H}from"./cynefin-VYW2F7L2-CqK6etC0.js";import"./index-tQuWjhRu.js";import"./MessageCenter-KGZg4tt-.js";import"./im-friend-store-DSxJZmh7.js";import"./im-aftersale-store-CU61C-lA.js";import"./im-group-store-kaENGuOp.js";import"./im-visibility-engine-C4H5Fedr.js";import"./im-conversation-store-C2KU1Q-B.js";import"./NotifyListPage-Ck2MawOq.js";import"./ContactsPage-DZA-ywM7.js";import"./FriendRequests-BStTZpcF.js";import"./AddFriend-BxxDEXer.js";import"./FriendProfile-D-hWttot.js";import"./FriendSettings-Jifa0ETi.js";import"./MyGroups-aLAI8viZ.js";import"./ChatPage-CSqaVlWY.js";import"./im-aftersale-service-DZFv8tvd.js";import"./ProfilePopup-DivNeapn.js";import"./im-live-store-Cqp8mzms.js";import"./GroupSettings-DTsTOSJy.js";import"./im-group-orchestrator-BeT35P3W.js";import"./GlobalSearch-Dp-EvOEt.js";import"./ImLiveRoom-DD0dkLJD.js";import"./im-mass-send-store-CMC80Wfr.js";import"./LivePromoPage-DfJPMs8L.js";import"./MassSendRecordsPage-2HhNs66y.js";import"./JoinGroupPage-CiuYD6un.js";import"./StoreMgmtPage-Dt-0WhOW.js";import"./StoreMemberPage-DiXTM0Qi.js";import"./PayResultPage-DOy_HPuu.js";import"./ConsultEntryPage-CYRsXTrG.js";import"./AftersaleApplyPage-crY0m2VK.js";import"./useCaseCardData-D9UbUZZu.js";var x={showLegend:!0,ticks:5,max:null,min:0,graticule:"circle"},w={axes:[],curves:[],options:x},g=structuredClone(w),j=G.radar,N=c(()=>y({...j,...C().radar}),"getConfig"),b=c(()=>g.axes,"getAxes"),U=c(()=>g.curves,"getCurves"),X=c(()=>g.options,"getOptions"),Y=c(a=>{g.axes=a.map(t=>({name:t.name,label:t.label??t.name}))},"setAxes"),Z=c(a=>{g.curves=a.map(t=>({name:t.name,label:t.label??t.name,entries:q(t.entries)}))},"setCurves"),q=c(a=>{if(a[0].axis==null)return a.map(e=>e.value);const t=b();if(t.length===0)throw new Error("Axes must be populated before curves for reference entries");return t.map(e=>{const r=a.find(o=>{var s;return((s=o.axis)==null?void 0:s.$refText)===e.name});if(r===void 0)throw new Error("Missing entry for axis "+e.label);return r.value})},"computeCurveEntries"),J=c(a=>{var e,r,o,s,l;const t=a.reduce((n,i)=>(n[i.name]=i,n),{});g.options={showLegend:((e=t.showLegend)==null?void 0:e.value)??x.showLegend,ticks:((r=t.ticks)==null?void 0:r.value)??x.ticks,max:((o=t.max)==null?void 0:o.value)??x.max,min:((s=t.min)==null?void 0:s.value)??x.min,graticule:((l=t.graticule)==null?void 0:l.value)??x.graticule}},"setOptions"),K=c(()=>{z(),g=structuredClone(w)},"clear"),$={getAxes:b,getCurves:U,getOptions:X,setAxes:Y,setCurves:Z,setOptions:J,getConfig:N,clear:K,setAccTitle:D,getAccTitle:E,setDiagramTitle:_,getDiagramTitle:I,getAccDescription:F,setAccDescription:R},Q=c(a=>{k(a,$);const{axes:t,curves:e,options:r}=a;$.setAxes(t),$.setCurves(e),$.setOptions(r)},"populate"),tt={parse:c(async a=>{const t=await H("radar",a);B.debug(t),Q(t)},"parse")},et=c((a,t,e,r)=>{const o=r.db,s=o.getAxes(),l=o.getCurves(),n=o.getOptions(),i=o.getConfig(),p=o.getDiagramTitle(),m=P(t),d=at(m,i),u=n.max??Math.max(...l.map(f=>Math.max(...f.entries))),h=n.min,v=Math.min(i.width,i.height)/2;rt(d,s,v,n.ticks,n.graticule),ot(d,s,v,i),A(d,s,l,h,u,n.graticule,i),T(d,l,n.showLegend,i),d.append("text").attr("class","radarTitle").text(p).attr("x",0).attr("y",-i.height/2-i.marginTop)},"draw"),at=c((a,t)=>{const e=t.width+t.marginLeft+t.marginRight,r=t.height+t.marginTop+t.marginBottom,o={x:t.marginLeft+t.width/2,y:t.marginTop+t.height/2};return V(a,r,e,t.useMaxWidth??!0),a.attr("viewBox",`0 0 ${e} ${r}`).attr("overflow","visible"),a.append("g").attr("transform",`translate(${o.x}, ${o.y})`)},"drawFrame"),rt=c((a,t,e,r,o)=>{if(o==="circle")for(let s=0;s<r;s++){const l=e*(s+1)/r;a.append("circle").attr("r",l).attr("class","radarGraticule")}else if(o==="polygon"){const s=t.length;for(let l=0;l<r;l++){const n=e*(l+1)/r,i=t.map((p,m)=>{const d=2*m*Math.PI/s-Math.PI/2,u=n*Math.cos(d),h=n*Math.sin(d);return`${u},${h}`}).join(" ");a.append("polygon").attr("points",i).attr("class","radarGraticule")}}},"drawGraticule"),ot=c((a,t,e,r)=>{const o=t.length;for(let s=0;s<o;s++){const l=t[s].label,n=2*s*Math.PI/o-Math.PI/2,i=Math.cos(n),p=Math.sin(n);a.append("line").attr("x1",0).attr("y1",0).attr("x2",e*r.axisScaleFactor*i).attr("y2",e*r.axisScaleFactor*p).attr("class","radarAxisLine");const m=i>.01?"start":i<-.01?"end":"middle",d=p>.01?"hanging":p<-.01?"auto":"central",u=4;a.append("text").text(l).attr("x",e*r.axisLabelFactor*i+u*i).attr("y",e*r.axisLabelFactor*p+u*p).attr("text-anchor",m).attr("dominant-baseline",d).attr("class","radarAxisLabel")}},"drawAxes");function A(a,t,e,r,o,s,l){const n=t.length,i=Math.min(l.width,l.height)/2;e.forEach((p,m)=>{if(p.entries.length!==n)return;const d=p.entries.map((u,h)=>{const v=2*Math.PI*h/n-Math.PI/2,f=M(u,r,o,i),S=f*Math.cos(v),O=f*Math.sin(v);return{x:S,y:O}});s==="circle"?a.append("path").attr("d",L(d,l.curveTension)).attr("class",`radarCurve-${m}`):s==="polygon"&&a.append("polygon").attr("points",d.map(u=>`${u.x},${u.y}`).join(" ")).attr("class",`radarCurve-${m}`)})}c(A,"drawCurves");function M(a,t,e,r){const o=Math.min(Math.max(a,t),e);return r*(o-t)/(e-t)}c(M,"relativeRadius");function L(a,t){const e=a.length;let r=`M${a[0].x},${a[0].y}`;for(let o=0;o<e;o++){const s=a[(o-1+e)%e],l=a[o],n=a[(o+1)%e],i=a[(o+2)%e],p={x:l.x+(n.x-s.x)*t,y:l.y+(n.y-s.y)*t},m={x:n.x-(i.x-l.x)*t,y:n.y-(i.y-l.y)*t};r+=` C${p.x},${p.y} ${m.x},${m.y} ${n.x},${n.y}`}return`${r} Z`}c(L,"closedRoundCurve");function T(a,t,e,r){if(!e)return;const o=(r.width/2+r.marginRight)*3/4,s=-(r.height/2+r.marginTop)*3/4,l=20;t.forEach((n,i)=>{const p=a.append("g").attr("transform",`translate(${o}, ${s+i*l})`);p.append("rect").attr("width",12).attr("height",12).attr("class",`radarLegendBox-${i}`),p.append("text").attr("x",16).attr("y",0).attr("class","radarLegendText").text(n.label)})}c(T,"drawLegend");var st={draw:et},nt=c((a,t)=>{let e="";for(let r=0;r<a.THEME_COLOR_LIMIT;r++){const o=a[`cScale${r}`];e+=`
		.radarCurve-${r} {
			color: ${o};
			fill: ${o};
			fill-opacity: ${t.curveOpacity};
			stroke: ${o};
			stroke-width: ${t.curveStrokeWidth};
		}
		.radarLegendBox-${r} {
			fill: ${o};
			fill-opacity: ${t.curveOpacity};
			stroke: ${o};
		}
		`}return e},"genIndexStyles"),it=c(a=>{const t=W(),e=C(),r=y(t,e.themeVariables),o=y(r.radar,a);return{themeVariables:r,radarOptions:o}},"buildRadarStyleOptions"),lt=c(({radar:a}={})=>{const{themeVariables:t,radarOptions:e}=it(a);return`
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
	`},"styles"),jt={parser:tt,db:$,renderer:st,styles:lt};export{jt as diagram};
