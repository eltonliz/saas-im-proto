import{p as at}from"./chunk-JWPE2WC7-CBydRRMo.js";import{K as T,N as B,b5 as it,g as nt,s as ot,a as st,b as lt,o as ct,n as pt,_ as g,l as G,c as ut,A as gt,F as dt,a1 as mt,e as ht,p as ft,B as vt}from"./ProtoViewerPage-CRjFyZDx.js";import{p as xt}from"./cynefin-VYW2F7L2-CRzzSxxZ.js";import{d as q}from"./arc-FxgPK4On.js";import{o as St}from"./ordinal-Cboi1Yqb.js";import"./index-BPjggxqp.js";import"./PageUseCaseHelp-DP4gPNXy.js";import"./MessageCenter-Mn3LHoxG.js";import"./im-friend-store-VOh4PbUi.js";import"./im-sync-BO0UXlPh.js";import"./im-aftersale-store-DUzvvp7J.js";import"./im-conversation-store-BeCaDnLj.js";import"./im-sim-adapter-CmttBv85.js";import"./im-group-store-BMfgmal6.js";import"./im-visibility-engine-C4H5Fedr.js";import"./NotifyListPage-CxS5sD_I.js";import"./ContactsPage-T6uGRODh.js";import"./FriendRequests-uzZuquJQ.js";import"./AddFriend-B8ioWoGT.js";import"./FriendProfile-2WPFOuuZ.js";import"./FriendSettings-johiZ-ss.js";import"./MyGroups-Be0VSkXW.js";import"./ChatPage-BFWbWuY9.js";import"./im-aftersale-service-Beu1J1Rb.js";import"./ReportDialog-Dyrbaw4V.js";import"./im-live-store-Bh9rLDf4.js";import"./GroupSettings-PwtrMLjn.js";import"./im-group-orchestrator-CLhCSAnJ.js";import"./GlobalSearch-nzJ_-F85.js";import"./ImLiveRoom-CWnDgHRe.js";import"./im-mass-send-store-CyW7bArw.js";import"./LivePromoPage-B__Qeosa.js";import"./MassSendRecordsPage-yLpmrj96.js";import"./JoinGroupPage-DDY72wn3.js";import"./StoreMgmtPage-PyCId1SL.js";import"./StoreMemberPage-CJOJ-3X8.js";import"./PayResultPage-BlA20Vtz.js";import"./ConsultEntryPage-ep5yvaVB.js";import"./AftersaleApplyPage-DBUeKSCt.js";import"./AccountClosePage-KiyhR0p9.js";import"./init-Gi6I4Gst.js";function yt(t,i){return i<t?-1:i>t?1:i>=t?0:NaN}function wt(t){return t}function At(){var t=wt,i=yt,y=null,b=T(0),l=T(B),d=T(0);function n(e){var a,s=(e=it(e)).length,m,w,$=0,h=new Array(s),o=new Array(s),D=+b.apply(this,arguments),E=Math.min(B,Math.max(-B,l.apply(this,arguments)-D)),k,F=Math.min(Math.abs(E)/s,d.apply(this,arguments)),p=F*(E<0?-1:1),A;for(a=0;a<s;++a)(A=o[h[a]=a]=+t(e[a],a,e))>0&&($+=A);for(i!=null?h.sort(function(M,f){return i(o[M],o[f])}):y!=null&&h.sort(function(M,f){return y(e[M],e[f])}),a=0,w=$?(E-s*p)/$:0;a<s;++a,D=k)m=h[a],A=o[m],k=D+(A>0?A*w:0)+p,o[m]={data:e[m],index:a,value:A,startAngle:D,endAngle:k,padAngle:F};return o}return n.value=function(e){return arguments.length?(t=typeof e=="function"?e:T(+e),n):t},n.sortValues=function(e){return arguments.length?(i=e,y=null,n):i},n.sort=function(e){return arguments.length?(y=e,i=null,n):y},n.startAngle=function(e){return arguments.length?(b=typeof e=="function"?e:T(+e),n):b},n.endAngle=function(e){return arguments.length?(l=typeof e=="function"?e:T(+e),n):l},n.padAngle=function(e){return arguments.length?(d=typeof e=="function"?e:T(+e),n):d},n}var Ct=vt.pie,I={sections:new Map,showData:!1},W=I.sections,V=I.showData,$t=structuredClone(Ct),Dt=g(()=>structuredClone($t),"getConfig"),Tt=g(()=>{W=new Map,V=I.showData,ft()},"clear"),bt=g(({label:t,value:i})=>{if(i<0)throw new Error(`"${t}" has invalid value: ${i}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);W.has(t)||(W.set(t,i),G.debug(`added new section: ${t}, with value: ${i}`))},"addSection"),kt=g(()=>W,"getSections"),zt=g(t=>{V=t},"setShowData"),Et=g(()=>V,"getShowData"),J={getConfig:Dt,clear:Tt,setDiagramTitle:pt,getDiagramTitle:ct,setAccTitle:lt,getAccTitle:st,setAccDescription:ot,getAccDescription:nt,addSection:bt,getSections:kt,setShowData:zt,getShowData:Et},Mt=g((t,i)=>{at(t,i),i.setShowData(t.showData),t.sections.map(i.addSection)},"populateDb"),Rt={parse:g(async t=>{const i=await xt("pie",t);G.debug(i),Mt(i,J)},"parse")},Ft=g(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieCircle.highlighted{
    scale: 1.05;
    opacity: 1;
  }
  .pieCircle.highlightedOnHover:hover{
    transition-duration: 250ms;
    scale: 1.05;
    opacity: 1;
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),Lt=Ft,Nt=g(t=>{const i=[...t.values()].reduce((l,d)=>l+d,0),y=[...t.entries()].map(([l,d])=>({label:l,value:d})).filter(l=>l.value/i*100>=1);return At().value(l=>l.value).sort(null)(y)},"createPieArcs"),Wt=g((t,i,y,b)=>{var Z;G.debug(`rendering pie chart
`+t);const l=b.db,d=ut(),n=gt(l.getConfig(),d.pie),e=40,a=18,s=4,m=450,w=m,$=dt(i),h=$.append("g");h.attr("transform","translate("+w/2+","+m/2+")");const{themeVariables:o}=d;let[D]=mt(o.pieOuterStrokeWidth);D??(D=2);const E=n.legendPosition,k=n.textPosition,F=n.donutHole>0&&n.donutHole<=.9?n.donutHole:0,p=Math.min(w,m)/2-e,A=q().innerRadius(F*p).outerRadius(p),M=q().innerRadius(p*k).outerRadius(p*k),f=h.append("g");f.append("circle").attr("cx",0).attr("cy",0).attr("r",p+D/2).attr("class","pieOuterCircle");const L=l.getSections(),Q=Nt(L),Y=[o.pie1,o.pie2,o.pie3,o.pie4,o.pie5,o.pie6,o.pie7,o.pie8,o.pie9,o.pie10,o.pie11,o.pie12];let _=0;L.forEach(r=>{_+=r});const U=Q.filter(r=>(r.data.value/_*100).toFixed(0)!=="0"),H=St(Y).domain([...L.keys()]);f.selectAll("mySlices").data(U).enter().append("path").attr("d",A).attr("fill",r=>H(r.data.label)).attr("class",r=>{let c="pieCircle";return n.highlightSlice==="hover"?c+=" highlightedOnHover":n.highlightSlice===r.data.label&&(c+=" highlighted"),c}),f.selectAll("mySlices").data(U).enter().append("text").text(r=>(r.data.value/_*100).toFixed(0)+"%").attr("transform",r=>"translate("+M.centroid(r)+")").style("text-anchor","middle").attr("class","slice");const tt=h.append("text").text(l.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText"),R=[...L.entries()].map(([r,c])=>({label:r,value:c})),C=h.selectAll(".legend").data(R).enter().append("g").attr("class","legend");C.append("rect").attr("width",a).attr("height",a).style("fill",r=>H(r.label)).style("stroke",r=>H(r.label)),C.append("text").attr("x",a+s).attr("y",a-s).text(r=>l.getShowData()?`${r.label} [${r.value}]`:r.label);const z=Math.max(...C.selectAll("text").nodes().map(r=>(r==null?void 0:r.getBoundingClientRect().width)??0));let N=m,O=w+e;const u=a+s,P=R.length*u;switch(E){case"center":C.attr("transform",(r,c)=>{const v=u*R.length/2,x=-z/2-(a+s),S=c*u-v;return"translate("+x+","+S+")"});break;case"top":N+=P,C.attr("transform",(r,c)=>{const v=p,x=-z/2-(a+s),S=c*u-v;return`translate(${x}, ${S})`}),f.attr("transform",()=>`translate(0, ${P+u})`);break;case"bottom":N+=P,C.attr("transform",(r,c)=>{const v=-p-u,x=-z/2-(a+s),S=c*u-v;return"translate("+x+","+S+")"});break;case"left":O+=a+s+z,C.attr("transform",(r,c)=>{const v=u*R.length/2,x=-p-(a+s),S=c*u-v;return"translate("+x+","+S+")"}),f.attr("transform",()=>`translate(${z+a+s}, 0)`);break;case"right":default:O+=a+s+z,C.attr("transform",(r,c)=>{const v=u*R.length/2,x=12*a,S=c*u-v;return"translate("+x+","+S+")"});break}const j=((Z=tt.node())==null?void 0:Z.getBoundingClientRect().width)??0,et=w/2-j/2,rt=w/2+j/2,K=Math.min(0,et),X=Math.max(O,rt)-K;$.attr("viewBox",`${K} 0 ${X} ${N}`),ht($,N,X,n.useMaxWidth)},"draw"),_t={draw:Wt},Te={parser:Rt,db:J,renderer:_t,styles:Lt};export{Te as diagram};
