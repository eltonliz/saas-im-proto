import{p as k}from"./chunk-JWPE2WC7-xVTmAEmR.js";import{s as R,g as I,o as _,n as D,a as E,b as F,_ as c,D as P,p as z,A as y,y as C,B as G,l as B,W,e as V}from"./ProtoViewerPage-BcI9AdJ-.js";import{p as H}from"./cynefin-VYW2F7L2-BhNki326.js";import"./index-B570Tdhg.js";import"./MessageCenter-gN9WNJzB.js";import"./im-friend-store-exa-NXQw.js";import"./im-aftersale-store-DLvqbLQ1.js";import"./im-group-store-DQkE4kPh.js";import"./im-visibility-engine-C4H5Fedr.js";import"./im-conversation-store-GyviWF0Z.js";import"./NotifyListPage-ynMOJ-Te.js";import"./ContactsPage-CGvfww-c.js";import"./FriendRequests-B8U4R_MB.js";import"./AddFriend-DXZniq3K.js";import"./FriendProfile-CIxYlJrp.js";import"./FriendSettings-DfPPlHOJ.js";import"./MyGroups-GepNIj4f.js";import"./ChatPage-Lg-tUe5Y.js";import"./im-aftersale-service-DaGdnbIw.js";import"./ProfilePopup-DKgEvwdK.js";import"./im-live-store-CXsU5OEE.js";import"./GroupSettings-4F9G00aX.js";import"./im-group-orchestrator-BhDLVM7n.js";import"./GlobalSearch-DbJFy825.js";import"./ImLiveRoom-BQk4-dMR.js";import"./im-mass-send-store-Bi5Ghj_e.js";import"./LivePromoPage-B1hDxfv8.js";import"./MassSendRecordsPage-Bz5Ribhf.js";import"./JoinGroupPage-DZq4nZBr.js";import"./StoreMgmtPage-DercEStt.js";import"./PayResultPage-D0Cll_x4.js";import"./ConsultEntryPage-Bv3NGQqk.js";import"./AftersaleApplyPage-DL_u-dhB.js";import"./useCaseCardData-u59_jKRg.js";var x={showLegend:!0,ticks:5,max:null,min:0,graticule:"circle"},w={axes:[],curves:[],options:x},g=structuredClone(w),j=G.radar,N=c(()=>y({...j,...C().radar}),"getConfig"),b=c(()=>g.axes,"getAxes"),U=c(()=>g.curves,"getCurves"),X=c(()=>g.options,"getOptions"),Y=c(a=>{g.axes=a.map(t=>({name:t.name,label:t.label??t.name}))},"setAxes"),Z=c(a=>{g.curves=a.map(t=>({name:t.name,label:t.label??t.name,entries:q(t.entries)}))},"setCurves"),q=c(a=>{if(a[0].axis==null)return a.map(e=>e.value);const t=b();if(t.length===0)throw new Error("Axes must be populated before curves for reference entries");return t.map(e=>{const r=a.find(s=>{var n;return((n=s.axis)==null?void 0:n.$refText)===e.name});if(r===void 0)throw new Error("Missing entry for axis "+e.label);return r.value})},"computeCurveEntries"),J=c(a=>{var e,r,s,n,l;const t=a.reduce((o,i)=>(o[i.name]=i,o),{});g.options={showLegend:((e=t.showLegend)==null?void 0:e.value)??x.showLegend,ticks:((r=t.ticks)==null?void 0:r.value)??x.ticks,max:((s=t.max)==null?void 0:s.value)??x.max,min:((n=t.min)==null?void 0:n.value)??x.min,graticule:((l=t.graticule)==null?void 0:l.value)??x.graticule}},"setOptions"),K=c(()=>{z(),g=structuredClone(w)},"clear"),$={getAxes:b,getCurves:U,getOptions:X,setAxes:Y,setCurves:Z,setOptions:J,getConfig:N,clear:K,setAccTitle:F,getAccTitle:E,setDiagramTitle:D,getDiagramTitle:_,getAccDescription:I,setAccDescription:R},Q=c(a=>{k(a,$);const{axes:t,curves:e,options:r}=a;$.setAxes(t),$.setCurves(e),$.setOptions(r)},"populate"),tt={parse:c(async a=>{const t=await H("radar",a);B.debug(t),Q(t)},"parse")},et=c((a,t,e,r)=>{const s=r.db,n=s.getAxes(),l=s.getCurves(),o=s.getOptions(),i=s.getConfig(),p=s.getDiagramTitle(),m=P(t),d=at(m,i),u=o.max??Math.max(...l.map(f=>Math.max(...f.entries))),h=o.min,v=Math.min(i.width,i.height)/2;rt(d,n,v,o.ticks,o.graticule),st(d,n,v,i),A(d,n,l,h,u,o.graticule,i),T(d,l,o.showLegend,i),d.append("text").attr("class","radarTitle").text(p).attr("x",0).attr("y",-i.height/2-i.marginTop)},"draw"),at=c((a,t)=>{const e=t.width+t.marginLeft+t.marginRight,r=t.height+t.marginTop+t.marginBottom,s={x:t.marginLeft+t.width/2,y:t.marginTop+t.height/2};return V(a,r,e,t.useMaxWidth??!0),a.attr("viewBox",`0 0 ${e} ${r}`).attr("overflow","visible"),a.append("g").attr("transform",`translate(${s.x}, ${s.y})`)},"drawFrame"),rt=c((a,t,e,r,s)=>{if(s==="circle")for(let n=0;n<r;n++){const l=e*(n+1)/r;a.append("circle").attr("r",l).attr("class","radarGraticule")}else if(s==="polygon"){const n=t.length;for(let l=0;l<r;l++){const o=e*(l+1)/r,i=t.map((p,m)=>{const d=2*m*Math.PI/n-Math.PI/2,u=o*Math.cos(d),h=o*Math.sin(d);return`${u},${h}`}).join(" ");a.append("polygon").attr("points",i).attr("class","radarGraticule")}}},"drawGraticule"),st=c((a,t,e,r)=>{const s=t.length;for(let n=0;n<s;n++){const l=t[n].label,o=2*n*Math.PI/s-Math.PI/2,i=Math.cos(o),p=Math.sin(o);a.append("line").attr("x1",0).attr("y1",0).attr("x2",e*r.axisScaleFactor*i).attr("y2",e*r.axisScaleFactor*p).attr("class","radarAxisLine");const m=i>.01?"start":i<-.01?"end":"middle",d=p>.01?"hanging":p<-.01?"auto":"central",u=4;a.append("text").text(l).attr("x",e*r.axisLabelFactor*i+u*i).attr("y",e*r.axisLabelFactor*p+u*p).attr("text-anchor",m).attr("dominant-baseline",d).attr("class","radarAxisLabel")}},"drawAxes");function A(a,t,e,r,s,n,l){const o=t.length,i=Math.min(l.width,l.height)/2;e.forEach((p,m)=>{if(p.entries.length!==o)return;const d=p.entries.map((u,h)=>{const v=2*Math.PI*h/o-Math.PI/2,f=M(u,r,s,i),S=f*Math.cos(v),O=f*Math.sin(v);return{x:S,y:O}});n==="circle"?a.append("path").attr("d",L(d,l.curveTension)).attr("class",`radarCurve-${m}`):n==="polygon"&&a.append("polygon").attr("points",d.map(u=>`${u.x},${u.y}`).join(" ")).attr("class",`radarCurve-${m}`)})}c(A,"drawCurves");function M(a,t,e,r){const s=Math.min(Math.max(a,t),e);return r*(s-t)/(e-t)}c(M,"relativeRadius");function L(a,t){const e=a.length;let r=`M${a[0].x},${a[0].y}`;for(let s=0;s<e;s++){const n=a[(s-1+e)%e],l=a[s],o=a[(s+1)%e],i=a[(s+2)%e],p={x:l.x+(o.x-n.x)*t,y:l.y+(o.y-n.y)*t},m={x:o.x-(i.x-l.x)*t,y:o.y-(i.y-l.y)*t};r+=` C${p.x},${p.y} ${m.x},${m.y} ${o.x},${o.y}`}return`${r} Z`}c(L,"closedRoundCurve");function T(a,t,e,r){if(!e)return;const s=(r.width/2+r.marginRight)*3/4,n=-(r.height/2+r.marginTop)*3/4,l=20;t.forEach((o,i)=>{const p=a.append("g").attr("transform",`translate(${s}, ${n+i*l})`);p.append("rect").attr("width",12).attr("height",12).attr("class",`radarLegendBox-${i}`),p.append("text").attr("x",16).attr("y",0).attr("class","radarLegendText").text(o.label)})}c(T,"drawLegend");var nt={draw:et},ot=c((a,t)=>{let e="";for(let r=0;r<a.THEME_COLOR_LIMIT;r++){const s=a[`cScale${r}`];e+=`
		.radarCurve-${r} {
			color: ${s};
			fill: ${s};
			fill-opacity: ${t.curveOpacity};
			stroke: ${s};
			stroke-width: ${t.curveStrokeWidth};
		}
		.radarLegendBox-${r} {
			fill: ${s};
			fill-opacity: ${t.curveOpacity};
			stroke: ${s};
		}
		`}return e},"genIndexStyles"),it=c(a=>{const t=W(),e=C(),r=y(t,e.themeVariables),s=y(r.radar,a);return{themeVariables:r,radarOptions:s}},"buildRadarStyleOptions"),lt=c(({radar:a}={})=>{const{themeVariables:t,radarOptions:e}=it(a);return`
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
	${ot(t,e)}
	`},"styles"),Ht={parser:tt,db:$,renderer:nt,styles:lt};export{Ht as diagram};
