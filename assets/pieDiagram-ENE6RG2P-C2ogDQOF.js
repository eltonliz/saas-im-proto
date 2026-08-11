import{p as at}from"./chunk-JWPE2WC7-Bes_jR2j.js";import{K as T,N as B,b5 as nt,g as it,s as ot,a as st,b as lt,o as ct,n as pt,_ as g,l as G,c as ut,A as gt,F as dt,a1 as mt,e as ht,p as ft,B as vt}from"./ProtoViewerPage-tQfDvbhH.js";import{p as xt}from"./cynefin-VYW2F7L2-C9WD5uO4.js";import{d as q}from"./arc-OzjPFVoi.js";import{o as St}from"./ordinal-Cboi1Yqb.js";import"./index-kXVuvHeY.js";import"./MessageCenter-Bz2z1FZR.js";import"./im-friend-store-BNxTP9kM.js";import"./im-aftersale-store-DnEPGzpL.js";import"./im-group-store-B5q4xF5I.js";import"./im-visibility-engine-C4H5Fedr.js";import"./im-conversation-store-CrqqqP3o.js";import"./NotifyListPage-DxO2KnJZ.js";import"./ContactsPage-C5FSwvPu.js";import"./FriendRequests-BHKijRqK.js";import"./AddFriend-D_7z5-pH.js";import"./FriendProfile-mn5CFkQ4.js";import"./FriendSettings-giemVE-6.js";import"./MyGroups-BYjnKaXA.js";import"./ChatPage-Bj47pYz9.js";import"./im-aftersale-service-ea243O6q.js";import"./ProfilePopup-CnJEXOp7.js";import"./im-live-store-Cmc9JI0B.js";import"./GroupSettings-CLdtqaRP.js";import"./im-group-orchestrator-C_caLFQl.js";import"./GlobalSearch-BB8mYRI_.js";import"./ImLiveRoom-DJoRpgRz.js";import"./im-mass-send-store-ADNys-7B.js";import"./LivePromoPage-P5q2DbRS.js";import"./MassSendRecordsPage-BDlsTFQc.js";import"./JoinGroupPage-CkPHAjyK.js";import"./StoreMgmtPage-AptHN6mp.js";import"./StoreMemberPage-Cg7JBPc0.js";import"./PayResultPage-svE1x42t.js";import"./ConsultEntryPage-DOpM9SLR.js";import"./AftersaleApplyPage-DCbJMmju.js";import"./useCaseCardData-CEOdwiBT.js";import"./init-Gi6I4Gst.js";function yt(t,n){return n<t?-1:n>t?1:n>=t?0:NaN}function wt(t){return t}function At(){var t=wt,n=yt,y=null,b=T(0),l=T(B),d=T(0);function i(e){var a,s=(e=nt(e)).length,m,w,$=0,h=new Array(s),o=new Array(s),D=+b.apply(this,arguments),E=Math.min(B,Math.max(-B,l.apply(this,arguments)-D)),k,F=Math.min(Math.abs(E)/s,d.apply(this,arguments)),p=F*(E<0?-1:1),A;for(a=0;a<s;++a)(A=o[h[a]=a]=+t(e[a],a,e))>0&&($+=A);for(n!=null?h.sort(function(M,f){return n(o[M],o[f])}):y!=null&&h.sort(function(M,f){return y(e[M],e[f])}),a=0,w=$?(E-s*p)/$:0;a<s;++a,D=k)m=h[a],A=o[m],k=D+(A>0?A*w:0)+p,o[m]={data:e[m],index:a,value:A,startAngle:D,endAngle:k,padAngle:F};return o}return i.value=function(e){return arguments.length?(t=typeof e=="function"?e:T(+e),i):t},i.sortValues=function(e){return arguments.length?(n=e,y=null,i):n},i.sort=function(e){return arguments.length?(y=e,n=null,i):y},i.startAngle=function(e){return arguments.length?(b=typeof e=="function"?e:T(+e),i):b},i.endAngle=function(e){return arguments.length?(l=typeof e=="function"?e:T(+e),i):l},i.padAngle=function(e){return arguments.length?(d=typeof e=="function"?e:T(+e),i):d},i}var Ct=vt.pie,I={sections:new Map,showData:!1},W=I.sections,V=I.showData,$t=structuredClone(Ct),Dt=g(()=>structuredClone($t),"getConfig"),Tt=g(()=>{W=new Map,V=I.showData,ft()},"clear"),bt=g(({label:t,value:n})=>{if(n<0)throw new Error(`"${t}" has invalid value: ${n}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);W.has(t)||(W.set(t,n),G.debug(`added new section: ${t}, with value: ${n}`))},"addSection"),kt=g(()=>W,"getSections"),zt=g(t=>{V=t},"setShowData"),Et=g(()=>V,"getShowData"),J={getConfig:Dt,clear:Tt,setDiagramTitle:pt,getDiagramTitle:ct,setAccTitle:lt,getAccTitle:st,setAccDescription:ot,getAccDescription:it,addSection:bt,getSections:kt,setShowData:zt,getShowData:Et},Mt=g((t,n)=>{at(t,n),n.setShowData(t.showData),t.sections.map(n.addSection)},"populateDb"),Rt={parse:g(async t=>{const n=await xt("pie",t);G.debug(n),Mt(n,J)},"parse")},Ft=g(t=>`
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
`,"getStyles"),Lt=Ft,Nt=g(t=>{const n=[...t.values()].reduce((l,d)=>l+d,0),y=[...t.entries()].map(([l,d])=>({label:l,value:d})).filter(l=>l.value/n*100>=1);return At().value(l=>l.value).sort(null)(y)},"createPieArcs"),Wt=g((t,n,y,b)=>{var Z;G.debug(`rendering pie chart
`+t);const l=b.db,d=ut(),i=gt(l.getConfig(),d.pie),e=40,a=18,s=4,m=450,w=m,$=dt(n),h=$.append("g");h.attr("transform","translate("+w/2+","+m/2+")");const{themeVariables:o}=d;let[D]=mt(o.pieOuterStrokeWidth);D??(D=2);const E=i.legendPosition,k=i.textPosition,F=i.donutHole>0&&i.donutHole<=.9?i.donutHole:0,p=Math.min(w,m)/2-e,A=q().innerRadius(F*p).outerRadius(p),M=q().innerRadius(p*k).outerRadius(p*k),f=h.append("g");f.append("circle").attr("cx",0).attr("cy",0).attr("r",p+D/2).attr("class","pieOuterCircle");const L=l.getSections(),Q=Nt(L),Y=[o.pie1,o.pie2,o.pie3,o.pie4,o.pie5,o.pie6,o.pie7,o.pie8,o.pie9,o.pie10,o.pie11,o.pie12];let _=0;L.forEach(r=>{_+=r});const U=Q.filter(r=>(r.data.value/_*100).toFixed(0)!=="0"),H=St(Y).domain([...L.keys()]);f.selectAll("mySlices").data(U).enter().append("path").attr("d",A).attr("fill",r=>H(r.data.label)).attr("class",r=>{let c="pieCircle";return i.highlightSlice==="hover"?c+=" highlightedOnHover":i.highlightSlice===r.data.label&&(c+=" highlighted"),c}),f.selectAll("mySlices").data(U).enter().append("text").text(r=>(r.data.value/_*100).toFixed(0)+"%").attr("transform",r=>"translate("+M.centroid(r)+")").style("text-anchor","middle").attr("class","slice");const tt=h.append("text").text(l.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText"),R=[...L.entries()].map(([r,c])=>({label:r,value:c})),C=h.selectAll(".legend").data(R).enter().append("g").attr("class","legend");C.append("rect").attr("width",a).attr("height",a).style("fill",r=>H(r.label)).style("stroke",r=>H(r.label)),C.append("text").attr("x",a+s).attr("y",a-s).text(r=>l.getShowData()?`${r.label} [${r.value}]`:r.label);const z=Math.max(...C.selectAll("text").nodes().map(r=>(r==null?void 0:r.getBoundingClientRect().width)??0));let N=m,O=w+e;const u=a+s,P=R.length*u;switch(E){case"center":C.attr("transform",(r,c)=>{const v=u*R.length/2,x=-z/2-(a+s),S=c*u-v;return"translate("+x+","+S+")"});break;case"top":N+=P,C.attr("transform",(r,c)=>{const v=p,x=-z/2-(a+s),S=c*u-v;return`translate(${x}, ${S})`}),f.attr("transform",()=>`translate(0, ${P+u})`);break;case"bottom":N+=P,C.attr("transform",(r,c)=>{const v=-p-u,x=-z/2-(a+s),S=c*u-v;return"translate("+x+","+S+")"});break;case"left":O+=a+s+z,C.attr("transform",(r,c)=>{const v=u*R.length/2,x=-p-(a+s),S=c*u-v;return"translate("+x+","+S+")"}),f.attr("transform",()=>`translate(${z+a+s}, 0)`);break;case"right":default:O+=a+s+z,C.attr("transform",(r,c)=>{const v=u*R.length/2,x=12*a,S=c*u-v;return"translate("+x+","+S+")"});break}const j=((Z=tt.node())==null?void 0:Z.getBoundingClientRect().width)??0,et=w/2-j/2,rt=w/2+j/2,K=Math.min(0,et),X=Math.max(O,rt)-K;$.attr("viewBox",`${K} 0 ${X} ${N}`),ht($,N,X,i.useMaxWidth)},"draw"),_t={draw:Wt},Ce={parser:Rt,db:J,renderer:_t,styles:Lt};export{Ce as diagram};
