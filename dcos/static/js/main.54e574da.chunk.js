(this.webpackJsonptsapp=this.webpackJsonptsapp||[]).push([[0],{149:function(e,t,n){},220:function(e,t,n){},221:function(e,t,n){},222:function(e,t,n){"use strict";n.r(t);var c,i=n(0),a=n.n(i),s=n(24),r=n.n(s),d=(n(149),n(17)),o=n(141),l=n(229),j=n(226),h=n(230),u=n(18);function b(e,t){for(var n=[],c=e;c<=t;c++)n.push(c);return n}!function(e){e.MOMENDAY="\u5468\u4e00",e.THUESDAY="\u5468\u4e8c",e.WEDNESDAY="\u5468\u4e09",e.THURSDAY="\u5468\u56db",e.FIRDAY="\u5468\u4e94",e.SATURDAY="\u5468\u516d",e.SUNDAY="\u5468\u65e5"}(c||(c={}));var f=n(224),m=n(114),O=n(225),x=n(57),p=n(26),v=n.n(p),y=n(6),k="HH:mm";function g(e){var t=e.activeIndex,n=e.dayIndex,c=e.timeline,a=e.timelines,s=e.handleVisibleClose,r=e.getDay,l=Object(i.useState)(v()(c.startTime,k)),j=Object(d.a)(l,2),h=j[0],b=j[1],f=Object(i.useState)(v()(c.endTime,k)),p=Object(d.a)(f,2),g=p[0],D=p[1];return Object(y.jsxs)("div",{children:[Object(y.jsxs)("div",{className:"edit-time",children:[Object(y.jsx)(O.a,{placeholder:"\u5f00\u59cb\u65f6\u95f41",value:h,format:k,allowClear:!1,showNow:!1,onChange:function(e){b(e)}}),Object(y.jsx)("span",{children:"\u81f3"}),Object(y.jsx)(O.a,{placeholder:"\u7ed3\u675f\u65f6\u95f4",value:g,format:k,allowClear:!1,showNow:!1,onChange:function(e){D(e)}})]}),Object(y.jsxs)("div",{className:"pop-footer",children:[Object(y.jsx)(x.a,{size:"small",type:"default",style:{marginRight:"10px"},onClick:s,children:"\u53d6\u6d88"}),Object(y.jsx)(x.a,{size:"small",type:"primary",onClick:function(){if(h>g&&o.b.error("\u5f00\u59cb\u65f6\u95f4\u4e0d\u80fd\u665a\u4e8e\u7ed3\u675f\u65f6\u95f4"),t>0&&h<v()(a[t-1].endTime,k)&&o.b.error("\u5f00\u59cb\u65f6\u95f4\u4e0d\u80fd\u8d85\u8fc7\u4e0a\u4e00\u65f6\u95f4\u6761\u7684\u7ed3\u675f\u65f6\u95f4"),t<a.length-1&&g>v()(a[t+1].startTime,k))return o.b.error("\u7ed3\u675f\u65f6\u95f4\u4e0d\u80fd\u5927\u4e8e\u4e0b\u4e00\u65f6\u95f4\u6761\u7684\u5f00\u59cb\u65f6\u95f4");var e=Object(u.cloneDeep)(a),c=v()(h).format(k),i=v()(g).format(k),l=function(e,t){var n=e.split(":"),c=Object(d.a)(n,2),i=c[0],a=c[1],s=t.split(":"),r=Object(d.a)(s,2),o=r[0],l=r[1],j=(60*(i=parseInt(i))+(a=parseInt(a)))/2;return{offset:j,length:(60*(o=parseInt(o))+(l=parseInt(l)))/2-j,startHour:i,startMin:a,endHour:o,endMin:l}}(c,i),j=l.offset,b=l.length,f=l.startHour,O=l.startMin,x=l.endHour,p=l.endMin;e[t]=Object(m.a)(Object(m.a)({},e[t]),{},{offset:j,length:b,startTime:c,endTime:i,startHour:f,startMin:O,endHour:x,endMin:p}),r(e,n),s()},children:"\u786e\u8ba4"})]})]})}var D=function(e){var t=e.activeIndex,n=e.dayIndex,c=e.changeTrack,a=e.timeline,s=e.offset,r=e.length,o=e.timelines,l=e.getDay,j=Object(i.useState)(!1),h=Object(d.a)(j,2),u=h[0],b=h[1],m={visibility:"visible",left:s+"px",width:r+"px"};a.border&&(m.height="14px",m.border="1px dotted rgb(34 103 0)");return Object(y.jsx)(f.a,{title:"\u4fee\u6539\u65f6\u95f4",content:Object(y.jsx)(g,{activeIndex:t,dayIndex:n,timeline:a,timelines:o,handleVisibleClose:function(){b(!1)},getDay:l}),trigger:"click",visible:u,onVisibleChange:function(e){b(e)},children:Object(y.jsx)("div",{className:"timeline-track",onClick:function(){return c(t)},style:m,children:a.showTime&&Object(y.jsxs)("div",{style:{position:"relative"},children:[Object(y.jsx)("span",{className:"rc-track-time",style:{left:0}}),Object(y.jsx)("span",{className:"rc-track-time",style:{left:r-1}})]})})})},N=n(227),C=n(228),E=function(e){var t=e.dayIndex,n=e.handleCopyVisible,a=e.handleCopySave,s=Object(i.useState)(!1),r=Object(d.a)(s,2),o=r[0],l=r[1],h=Object(i.useState)(!1),b=Object(d.a)(h,2),f=b[0],m=b[1],O=Object(i.useState)([{day:c.MOMENDAY,checked:!1},{day:c.THUESDAY,checked:!1},{day:c.WEDNESDAY,checked:!1},{day:c.THURSDAY,checked:!1},{day:c.FIRDAY,checked:!1},{day:c.SATURDAY,checked:!1},{day:c.SUNDAY,checked:!1}]),p=Object(d.a)(O,2),v=p[0],k=p[1];return Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{style:{borderBottom:"1px solid #E9E9E9"},children:Object(y.jsx)(j.a,{indeterminate:f,onChange:function(e){var t=Object(u.cloneDeep)(v);t.forEach((function(t){e.target.checked&&!t.checked&&(t.checked=!0),e.target.checked||(t.checked=!1)})),k(t),m(!1),l(e.target.checked)},checked:o,children:"\u5168\u9009"})}),Object(y.jsx)("br",{}),Object(y.jsx)(N.a,{children:v.map((function(e,n){return n===t&&(e.checked=!0),Object(y.jsx)(C.a,{span:8,children:Object(y.jsx)(j.a,{disabled:n===t,checked:e.checked,onChange:function(e){return function(e,t){var n=Object(u.cloneDeep)(v),c=!0,i=!1;n[t].checked=e.target.checked,n.find((function(e){return!e.checked}))||(c=!1,i=!0),k(n),m(c),l(i)}(e,n)},children:e.day})},n)}))}),Object(y.jsxs)("div",{className:"pop-footer",children:[Object(y.jsx)(x.a,{size:"small",type:"default",style:{marginRight:"10px"},onClick:n,children:"\u53d6\u6d88"}),Object(y.jsx)(x.a,{size:"small",type:"primary",onClick:function(){var e=Object(u.cloneDeep)(v),n=[];e.forEach((function(e,c){e.checked&&c!==t&&(n.push(c),e.checked=!1)})),k(e),a(n)},children:"\u786e\u8ba4"})]})]})};function S(e){var t=e.trackIndex,n=e.getCopyDays,c=e.day,a=e.dayIndex,s=e.handleDeleteTrack,r=Object(i.useState)(!1),o=Object(d.a)(r,2),j=o[0],h=o[1],b=function(){Object(u.isEmpty)(c.timelines)||h((function(e){return!e}))};return Object(y.jsxs)("div",{className:"action",children:[Object(y.jsx)(f.a,{content:Object(y.jsx)(E,{dayIndex:a,handleCopySave:function(e){n(c.timelines,e),h(!1)},handleCopyVisible:b}),title:"\u590d\u5236\u5230...",trigger:"click",visible:j,onVisibleChange:b,children:Object(y.jsx)("span",{className:Object(u.isEmpty)(c.timelines)?"disabled":"copy",style:{marginLeft:0},children:"\u590d\u5236"})}),Object(y.jsx)(l.a,{title:"\u786e\u5b9a\u5220\u9664\u5417",disabled:void 0===t,onConfirm:s,okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",children:Object(y.jsx)("span",{className:Object(u.isEmpty)(c.timelines)||!c.delete?"disabled":"delete",children:"\u5220\u9664"})})]})}var T=function(e){var t,n,c,a=e.day,s=e.dayIndex,r=e.getDay,o=e.onCheckSingleChange,l=e.getCopyDays,h=Object(u.cloneDeep)(a.timelines),f=Object(i.useState)(!1),m=Object(d.a)(f,2),O=m[0],x=m[1],p=Object(i.useState)(void 0),v=Object(d.a)(p,2),k=v[0],g=v[1],N=Object(i.useRef)(null),C=function(e,i){document.addEventListener("mousemove",E),document.addEventListener("mouseup",T),t=Math.floor(e-i),n=e,c=a.timelines.length;var s=!1;Object(u.isEmpty)(a.timelines)||a.timelines.forEach((function(e){e.offset<t&&e.offset+e.length>t&&(s=!0)})),x(s)},E=function(e){if(e.preventDefault(),!O){var i=e.pageX-n;t+i>=720&&(i=719.5-t),a.timelines.forEach((function(e){t<e.offset&&t+i>e.offset&&(i=e.offset-t-1)}));var d=function(e,t){var n=Math.floor(2*e/60),c=2*e%60,i=Math.floor(2*t/60),a=2*t%60;return{startTime:"".concat(n>9?n:"0".concat(n),":").concat(c>9?c:"0".concat(c)),endTime:"".concat(i>9?i:"0".concat(i),":").concat(a>9?a:"0".concat(a)),startHour:n,startMin:c,endHour:i,endMin:a}}(t,t+i),o=d.startTime,l=d.endTime,j=d.startHour,u=d.startMin,b=d.endHour,f=d.endMin;h[c]={offset:t,length:i,startTime:o,endTime:l,startHour:j,startMin:u,endHour:b,endMin:f},h=h.filter((function(e){return e.length>0})),r(h,s)}},T=function e(t){t.preventDefault(),r(h,s),document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",e)},I=function(e){h.forEach((function(e){e.border&&(e.border=!1)})),h[e].border=!0,r(h,s),g(e)};return Object(y.jsxs)("div",{className:"day",children:[Object(y.jsx)(j.a,{checked:a.checked,className:"checkbox",onChange:function(e){return o(s)}}),Object(y.jsx)("div",{className:"date",children:a.day}),Object(y.jsxs)("div",{className:"timeline",children:[Object(y.jsx)("div",{className:"time",children:b(0,24).map((function(e){return Object(y.jsxs)("div",{className:"hour",children:[Object(y.jsx)("span",{children:e}),Object(y.jsx)("i",{className:"line"})]},e)}))}),Object(y.jsx)("div",{ref:N,onMouseDown:function(e){if(0===e.button){e.stopPropagation(),e.preventDefault();var t=N.current.getBoundingClientRect().left,n=e.pageX;C(n,t)}},className:"slider",children:a.timelines.map((function(e,t){return Object(y.jsx)(D,{activeIndex:t,dayIndex:s,timeline:e,offset:e.offset,length:e.length,timelines:a.timelines,changeTrack:I,getDay:r},t)}))})]}),Object(y.jsx)(S,{trackIndex:k,getCopyDays:l,day:a,dayIndex:s,handleDeleteTrack:function(){Object(u.isEmpty)(a.timelines)||void 0===k||(h.splice(k,1),r(h,s),g(void 0))}})]})},I=(n(220),function(){var e=Object(i.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1],s=Object(i.useState)(!1),r=Object(d.a)(s,2),b=r[0],f=r[1],m=Object(i.useState)([{day:c.MOMENDAY,timelines:[],checked:!1,delete:!1},{day:c.THUESDAY,timelines:[],checked:!1,delete:!1},{day:c.WEDNESDAY,timelines:[],checked:!1,delete:!1},{day:c.THURSDAY,timelines:[],checked:!1,delete:!1},{day:c.FIRDAY,timelines:[],checked:!1,delete:!1},{day:c.SATURDAY,timelines:[],checked:!1,delete:!1},{day:c.SUNDAY,timelines:[],checked:!1,delete:!1}]),O=Object(d.a)(m,2),x=O[0],p=O[1],v=function(e){var t=Object(u.cloneDeep)(x),n=!1,c=!1;t[e].checked=!t[e].checked,t.forEach((function(e){e.checked&&(n=!0)})),t.find((function(e){return!e.checked}))||(n=!1,c=!0),p(t),a(n),f(c)},k=function(e,t){var n=Object(u.cloneDeep)(x),c=e.findIndex((function(e){return!0===e.border}));n[t].delete=c>-1,n[t].timelines=e,p(n)},g=function(e,t){var n=Object(u.cloneDeep)(x);t.forEach((function(t){n[t].timelines=e})),p(n)};return Object(y.jsxs)("div",{className:"container",children:[Object(y.jsx)("div",{className:"batch-operation",children:Object(y.jsx)(l.a,{title:"\u786e\u5b9a\u6279\u91cf\u5220\u9664\u5417",onConfirm:function(){var e=x,t=!1;e.forEach((function(e){e.checked&&(t=!0,e.timelines=[],e.checked=!1)})),t||o.b.error("\u8bf7\u5148\u9009\u62e9\u4e00\u4e2a\u6570\u636e"),p(e),a(!1),f(!1)},okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",children:Object(y.jsxs)("span",{className:"batch-delete",children:[Object(y.jsx)(h.a,{className:"icon"}),Object(y.jsx)("span",{children:"\u6279\u91cf\u5220\u9664"})]})})}),Object(y.jsxs)("div",{className:"table",children:[Object(y.jsxs)("div",{className:"theader",children:[Object(y.jsx)(j.a,{className:"checkbox",indeterminate:n,checked:b,onChange:function(e){var t=Object(u.cloneDeep)(x);t.forEach((function(t){e.target.checked&&!t.checked&&(t.checked=!0),e.target.checked||(t.checked=!1)})),p(t),a(!1),f((function(e){return!e}))}}),Object(y.jsx)("div",{className:"date",children:"\u65e5\u671f"}),Object(y.jsx)("div",{className:"period",children:"\u65f6\u95f4\u6bb5"}),Object(y.jsx)("div",{className:"action",children:"\u64cd\u4f5c"})]}),x.map((function(e,t){return Object(y.jsx)(T,{dayIndex:t,day:e,getDay:k,onCheckSingleChange:v,getCopyDays:g},e.day)}))]})]})});n(221);var A=function(){return Object(y.jsx)(I,{})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,231)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};r.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(A,{})}),document.getElementById("root")),M()}},[[222,1,2]]]);
//# sourceMappingURL=main.54e574da.chunk.js.map