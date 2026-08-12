import{p as xt}from"./chunk-JWPE2WC7-iL89fnB3.js";import{s as gt,g as $t,o as bt,n as wt,a as Ct,b as vt,_ as i,l as O,F as Dt,e as kt,p as At,A as U,y as Q,B as Tt,W as at}from"./ProtoViewerPage-BWv-d4yz.js";import{p as Bt}from"./cynefin-VYW2F7L2-Bt9tlj4x.js";import"./index-v-6frVoj.js";import"./PageUseCaseHelp-GCaJrY93.js";import"./MessageCenter-DfHDYmwS.js";import"./im-friend-store-DkUWYrTi.js";import"./im-aftersale-store-CBlHxar7.js";import"./im-group-store-BVu6IPSQ.js";import"./im-visibility-engine-C4H5Fedr.js";import"./im-conversation-store-B0whTPJz.js";import"./NotifyListPage-fLi6lJqk.js";import"./ContactsPage-DBHETkDj.js";import"./FriendRequests-D3wE-gOa.js";import"./AddFriend-BItJLdBN.js";import"./FriendProfile-NWmfKu5a.js";import"./FriendSettings-BmeNjLJh.js";import"./MyGroups-CfdLtT8j.js";import"./ChatPage-z_Sp3ZWx.js";import"./im-aftersale-service-BiCWOn8i.js";import"./ReportDialog-BT-aDbEz.js";import"./im-live-store-DcYqyzwj.js";import"./GroupSettings-j8Xxxdip.js";import"./im-group-orchestrator-Deu2NuAN.js";import"./GlobalSearch-CPaItu8y.js";import"./ImLiveRoom-Cgn38xFx.js";import"./im-mass-send-store-DvIYmgNV.js";import"./LivePromoPage-Kad5SDhp.js";import"./MassSendRecordsPage-D3GCmwaU.js";import"./JoinGroupPage-Axf4dPQ0.js";import"./StoreMgmtPage-DjrFKAqW.js";import"./StoreMemberPage-DXsgmZ_2.js";import"./PayResultPage-CYSTkI7Y.js";import"./ConsultEntryPage-CJl8xu9J.js";import"./AftersaleApplyPage-BCddtGv5.js";import"./AccountClosePage-s4ZBT38E.js";var rt=i(()=>({domains:new Map,transitions:[]}),"createDefaultData"),H=rt(),St=i(()=>H.domains,"getDomains"),Mt=i(()=>H.transitions,"getTransitions"),zt=i(t=>{if(t)for(const e of t){const n=e.domain,o=(e.items??[]).map(c=>({label:c.label}));H.domains.set(n,{name:n,items:o})}},"setDomains"),Lt=i(t=>{t&&(H.transitions=t.filter(e=>e.from===e.to?(O.warn(`Cynefin: self-loop transition on domain "${e.from}" is not meaningful and will be skipped.`),!1):!0).map(e=>({from:e.from,to:e.to,label:e.label||void 0})))},"setTransitions"),Nt=i(()=>U({...Tt.cynefin,...Q().cynefin}),"getConfig"),Pt=i(()=>{At(),H=rt()},"clear"),Y={getDomains:St,getTransitions:Mt,setDomains:zt,setTransitions:Lt,getConfig:Nt,clear:Pt,setAccTitle:vt,getAccTitle:Ct,setDiagramTitle:wt,getDiagramTitle:bt,getAccDescription:$t,setAccDescription:gt},Wt=i(t=>{xt(t,Y),Y.setDomains(t.domains),Y.setTransitions(t.transitions)},"populate"),It={parse:i(async t=>{const e=await Bt("cynefin",t);O.debug(e),Wt(e)},"parse")};function E(t){let e=t+1831565813|0;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}i(E,"seededRandom");function it(t){let e=0;for(let n=0;n<t.length;n++){const o=t.charCodeAt(n);e=(e<<5)-e+o,e|=0}return e}i(it,"hashString");function st(t,e){return typeof t=="number"&&Number.isFinite(t)&&t!==0?t:it(e)}i(st,"resolveSeed");function ct(t,e,n,o){const c=t/2,f=o??t*.015,v=7,I=e/v,d=[];for(let a=0;a<=v;a++){const p=E(n+a*17)*f*2-f;d.push({x:c+p,y:a*I})}let D=`M${d[0].x},${d[0].y}`;for(let a=0;a<d.length-1;a++){const p=d[a],s=d[a+1],m=(p.y+s.y)/2,b=a%2===0?1:-1,h=f*1.5*b*E(n+a*31+7),F=p.x+h,R=m,_=s.x-h;D+=` C${F},${R} ${_},${m} ${s.x},${s.y}`}return D}i(ct,"generateFoldPath");function lt(t,e,n,o){const c=e/2,f=o??e*.015,v=7,I=t/v,d=[];for(let a=0;a<=v;a++){const p=E(n+a*23)*f*2-f;d.push({x:a*I,y:c+p})}let D=`M${d[0].x},${d[0].y}`;for(let a=0;a<d.length-1;a++){const p=d[a],s=d[a+1],m=(p.x+s.x)/2,b=a%2===0?1:-1,h=f*1.5*b*E(n+a*37+11),F=m,R=p.y+h,_=m,z=s.y-h;D+=` C${F},${R} ${_},${z} ${s.x},${s.y}`}return D}i(lt,"generateHorizontalBoundary");function dt(t,e){const n=t/2,o=e*.5,c=e,f=t*.03;return[`M${n},${o}`,`C${n+f},${o+(c-o)*.2}`,`${n-f*1.5},${o+(c-o)*.55}`,`${n+f*.5},${o+(c-o)*.75}`,`C${n-f},${o+(c-o)*.85}`,`${n+f*.3},${o+(c-o)*.95}`,`${n},${c}`].join(" ")}i(dt,"generateCliffPath");function mt(t,e,n,o){return[`M${t-n},${e}`,`A${n},${o} 0 1,1 ${t+n},${e}`,`A${n},${o} 0 1,1 ${t-n},${e}`,"Z"].join(" ")}i(mt,"generateConfusionPath");var ot={complex:{model:"Probe → Sense → Respond",practice:"Emergent Practices"},complicated:{model:"Sense → Analyse → Respond",practice:"Good Practices"},clear:{model:"Sense → Categorise → Respond",practice:"Best Practices"},chaotic:{model:"Act → Sense → Respond",practice:"Novel Practices"},confusion:{model:"",practice:"Disorder"}},Ft=i((t,e)=>{const n=t/2,o=e/2;return{complex:{cx:n/2,cy:o/2,x:0,y:0,w:n,h:o},complicated:{cx:n+n/2,cy:o/2,x:n,y:0,w:n,h:o},chaotic:{cx:n/2,cy:o+o/2,x:0,y:o,w:n,h:o},clear:{cx:n+n/2,cy:o+o/2,x:n,y:o,w:n,h:o},confusion:{cx:n,cy:o,x:n*.7,y:o*.7,w:n*.6,h:o*.6}}},"getDomainLayouts"),Rt=i(()=>{const t=at(),e=Q();return U(t,e.themeVariables).cynefin},"getCynefinDomainColors"),q=3,_t=i((t,e,n,o)=>{const c=o.db,f=c.getDomains(),v=c.getTransitions(),I=c.getDiagramTitle(),d=c.getAccTitle(),D=c.getAccDescription(),a=c.getConfig(),p=Rt();O.debug("Rendering Cynefin diagram");const s=a.width,m=a.height,b=a.padding,h=a.showDomainDescriptions,F=a.boundaryAmplitude,R=s+b*2,_=m+b*2,z={complex:p.complexBg,complicated:p.complicatedBg,clear:p.clearBg,chaotic:p.chaoticBg,confusion:p.confusionBg},k=Dt(e);kt(k,_,R,a.useMaxWidth??!0),k.attr("viewBox",`0 0 ${R} ${_}`),d&&k.append("title").text(d),D&&k.append("desc").text(D);const A=k.append("g").attr("transform",`translate(${b}, ${b})`),V=Ft(s,m),Z=st(a.seed,e),ft=A.append("g").attr("class","cynefin-backgrounds"),X=["complex","complicated","chaotic","clear"];for(const l of X){const r=V[l];ft.append("rect").attr("class","cynefinDomain").attr("x",r.x).attr("y",r.y).attr("width",r.w).attr("height",r.h).attr("fill",z[l]).attr("fill-opacity",.4).attr("stroke","none")}const j=A.append("g").attr("class","cynefin-boundaries");j.append("path").attr("class","cynefinBoundary").attr("d",ct(s,m,Z,F)).attr("fill","none"),j.append("path").attr("class","cynefinBoundary").attr("d",lt(s,m,Z+100,F)).attr("fill","none"),j.append("path").attr("class","cynefinCliff").attr("d",dt(s,m)).attr("fill","none");const pt=s*.15,yt=m*.15;A.append("path").attr("class","cynefinConfusion").attr("d",mt(s/2,m/2,pt,yt)).attr("fill",z.confusion).attr("fill-opacity",.5);const J=A.append("g").attr("class","cynefin-labels");for(const l of X){const r=V[l];J.append("text").attr("class","cynefinDomainLabel").attr("x",r.cx).attr("y",h?r.cy-30:r.cy).attr("text-anchor","middle").attr("dominant-baseline","middle").text(l.charAt(0).toUpperCase()+l.slice(1))}if(J.append("text").attr("class","cynefinDomainLabel").attr("x",s/2).attr("y",h?m/2-10:m/2).attr("text-anchor","middle").attr("dominant-baseline","middle").text("Confusion"),h){const l=A.append("g").attr("class","cynefin-subtitles");for(const r of X){const u=V[r],y=ot[r];l.append("text").attr("class","cynefinSubtitle").attr("x",u.cx).attr("y",u.cy-10).attr("text-anchor","middle").attr("dominant-baseline","middle").text(y.model),l.append("text").attr("class","cynefinSubtitle").attr("x",u.cx).attr("y",u.cy+5).attr("text-anchor","middle").attr("dominant-baseline","middle").text(y.practice)}l.append("text").attr("class","cynefinSubtitle").attr("x",s/2).attr("y",m/2+8).attr("text-anchor","middle").attr("dominant-baseline","middle").text(ot.confusion.practice)}const K=A.append("g").attr("class","cynefin-items"),T=26,tt=10,ut=["complex","complicated","chaotic","clear","confusion"];for(const l of ut){const r=f.get(l);if(!r||r.items.length===0)continue;const u=V[l],y=l==="confusion";let L=r.items,N=0;y&&r.items.length>q&&(N=r.items.length-q,L=r.items.slice(0,q));let B;if(y){const g=h?22:14;B=u.cy+g}else B=u.cy+(h?25:15);if([...L].forEach((g,S)=>{const w=B+S*(T+4),M=K.append("g"),P=M.append("text").attr("class","cynefinItemText").attr("x",0).attr("y",T/2).attr("text-anchor","middle").attr("dominant-baseline","central").text(g.label);let $=g.label.length*7;const x=P.node();if(x&&typeof x.getBBox=="function"){const G=x.getBBox();G.width>0&&($=G.width)}const C=$+tt*2,W=u.cx-C/2;M.attr("transform",`translate(${W}, ${w})`),M.insert("rect","text").attr("class","cynefinItem").attr("x",0).attr("y",0).attr("width",C).attr("height",T).attr("rx",4).attr("ry",4).attr("fill",z[l]).attr("fill-opacity",.95),P.attr("x",C/2).attr("y",T/2)}),N>0){const g=B+L.length*(T+4),S=`+${N} more`,w=K.append("g"),M=w.append("text").attr("class","cynefinItemText").attr("x",0).attr("y",T/2).attr("text-anchor","middle").attr("dominant-baseline","central").text(S);let P=S.length*7;const $=M.node();if($&&typeof $.getBBox=="function"){const W=$.getBBox();W.width>0&&(P=W.width)}const x=P+tt*2,C=u.cx-x/2;w.attr("transform",`translate(${C}, ${g})`),w.insert("rect","text").attr("class","cynefinItemOverflow").attr("x",0).attr("y",0).attr("width",x).attr("height",T).attr("rx",4).attr("ry",4).attr("fill",z[l]).attr("fill-opacity",.6),M.attr("x",x/2).attr("y",T/2)}}if(v.length>0){const l=k.select("defs").empty()?k.append("defs"):k.select("defs"),r=`cynefin-arrow-${e}`;l.append("marker").attr("id",r).attr("viewBox","0 0 10 10").attr("refX",9).attr("refY",5).attr("markerWidth",6).attr("markerHeight",6).attr("orient","auto-start-reverse").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("class","cynefinArrowHead");const u=A.append("g").attr("class","cynefin-arrows");v.forEach(y=>{const L=V[y.from],N=V[y.to];if(!L||!N)return;if(y.from===y.to){O.warn(`Cynefin renderer: skipping self-loop on domain "${y.from}"`);return}const B=L.cx,g=L.cy,S=N.cx,w=N.cy,M=(B+S)/2,P=(g+w)/2,$=S-B,x=w-g,C=Math.sqrt($*$+x*x),W=C*.15,G=-x/C,ht=$/C,et=M+G*W,nt=P+ht*W;u.append("path").attr("class","cynefinArrowLine").attr("d",`M${B},${g} Q${et},${nt} ${S},${w}`).attr("fill","none").attr("marker-end",`url(#${r})`),y.label&&u.append("text").attr("class","cynefinArrowLabel").attr("x",et).attr("y",nt-6).attr("text-anchor","middle").attr("dominant-baseline","auto").text(y.label)})}I&&A.append("text").attr("class","cynefinTitle").attr("x",s/2).attr("y",-b/2).attr("text-anchor","middle").attr("dominant-baseline","middle").text(I)},"draw"),Vt={draw:_t},Et=i(()=>{const t=at(),e=Q();return U(t,e.themeVariables).cynefin},"getCynefinTheme"),Ht=i(()=>{const t=Et();return`
	.cynefinDomain {
		stroke: none;
	}
	.cynefinDomainLabel {
		font-size: ${t.domainFontSize}px;
		font-weight: bold;
		fill: ${t.labelColor};
	}
	.cynefinSubtitle {
		font-size: ${t.itemFontSize-1}px;
		fill: ${t.textColor};
		font-style: italic;
	}
	.cynefinItem {
		fill-opacity: 0.95;
		stroke: ${t.boundaryColor};
		stroke-width: 1;
	}
	.cynefinItemText {
		font-size: ${t.itemFontSize}px;
		fill: ${t.textColor};
	}
	.cynefinItemOverflow {
		fill-opacity: 0.6;
		stroke: ${t.boundaryColor};
		stroke-width: 1;
		stroke-dasharray: 3 2;
	}
	.cynefinBoundary {
		stroke: ${t.boundaryColor};
		stroke-width: ${t.boundaryWidth};
		stroke-dasharray: 6 3;
	}
	.cynefinCliff {
		stroke: ${t.cliffColor};
		stroke-width: ${t.cliffWidth};
	}
	.cynefinConfusion {
		stroke: ${t.boundaryColor};
		stroke-width: 1.5;
		stroke-dasharray: 4 2;
	}
	.cynefinArrowLine {
		stroke: ${t.arrowColor};
		stroke-width: ${t.arrowWidth};
		fill: none;
	}
	.cynefinArrowHead {
		fill: ${t.arrowColor};
		stroke: none;
	}
	.cynefinArrowLabel {
		font-size: ${t.itemFontSize-1}px;
		fill: ${t.textColor};
	}
	.cynefinTitle {
		font-size: ${t.domainFontSize+2}px;
		font-weight: bold;
		fill: ${t.labelColor};
	}
	`},"styles"),Gt=Ht,Ae={parser:It,db:Y,renderer:Vt,styles:Gt};export{Ae as diagram};
