(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[114],{1942:function(e,a,t){"use strict";t.r(a);var n=t(13),s=t(14),r=t(16),i=t(15),c=t(0),o=t.n(c),l=t(1126),u=t(1124),f=t(1125),d=t(172),m=t(1129),p=t(803),b=t(804),h=t(802),g=(t(797),t(56)),v=t(798),y=function(e){Object(r.a)(t,e);var a=Object(i.a)(t);function t(e){var s;return Object(n.a)(this,t),(s=a.call(this,e)).state={dealer:"",desc:""},s.state={dealerN:[]},s}return Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(v.a,{breadCrumbTitle:" Privacy Policy",breadCrumbParent:"Home",breadCrumbActive:" Privacy Policy"}),o.a.createElement(l.a,null,o.a.createElement(u.a,{className:"m-2"},o.a.createElement(f.a,null,o.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Privacy Policy")),o.a.createElement(f.a,null,o.a.createElement(g.b,{render:function(e){var a=e.history;return o.a.createElement(d.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/ro-configuration/basicDetailsList")}},"Back")}}))),o.a.createElement(m.a,null,o.a.createElement(p.a,{className:"m-1",onSubmit:this.submitHandler},o.a.createElement(u.a,null,o.a.createElement(f.a,{lg:"12",md:"12",sm:"12",className:"mb-2"},o.a.createElement(b.a,null,"Descriptions"),o.a.createElement(h.a,{type:"textarea",name:"desc",value:this.state.desc,onChange:this.changeHandler,rows:"3",placeholder:"Textarea"}))),o.a.createElement(u.a,null,o.a.createElement(f.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(d.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Submit")))))))}}]),t}(o.a.Component);a.default=y},797:function(e,a,t){"use strict";var n=t(40),s=t.n(n).a.create({baseURL:"http://15.206.122.110:4000/api/"});a.a=s},802:function(e,a,t){"use strict";var n=t(5),s=t(7),r=t(11),i=t(12),c=t(0),o=t.n(c),l=t(1),u=t.n(l),f=t(4),d=t.n(f),m=t(3),p=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:m.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(i.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,i=e.bsSize,c=e.valid,l=e.invalid,u=e.tag,f=e.addon,b=e.plaintext,h=e.innerRef,g=Object(s.a)(e,p),v=["radio","checkbox"].indexOf(r)>-1,y=new RegExp("\\D","g"),O=u||("select"===r||"textarea"===r?r:"input"),j="form-control";b?(j+="-plaintext",O=u||"input"):"file"===r?j+="-file":"range"===r?j+="-range":v&&(j=f?null:"form-check-input"),g.size&&y.test(g.size)&&(Object(m.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=g.size,delete g.size);var E=Object(m.mapToCssModules)(d()(a,l&&"is-invalid",c&&"is-valid",!!i&&"form-control-"+i,j),t);return("input"===O||u&&"function"===typeof u)&&(g.type=r),g.children&&!b&&"select"!==r&&"string"===typeof O&&"select"!==O&&(Object(m.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),o.a.createElement(O,Object(n.a)({},g,{ref:h,className:E,"aria-invalid":l}))},a}(o.a.Component);h.propTypes=b,h.defaultProps={type:"text"},a.a=h},803:function(e,a,t){"use strict";var n=t(5),s=t(7),r=t(11),i=t(12),c=t(0),o=t.n(c),l=t(1),u=t.n(l),f=t(4),d=t.n(f),m=t(3),p=["className","cssModule","inline","tag","innerRef"],b={children:u.a.node,inline:u.a.bool,tag:m.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(i.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,i=e.tag,c=e.innerRef,l=Object(s.a)(e,p),u=Object(m.mapToCssModules)(d()(a,!!r&&"form-inline"),t);return o.a.createElement(i,Object(n.a)({},l,{ref:c,className:u}))},a}(c.Component);h.propTypes=b,h.defaultProps={tag:"form"},a.a=h},804:function(e,a,t){"use strict";var n=t(5),s=t(7),r=t(0),i=t.n(r),c=t(1),o=t.n(c),l=t(4),u=t.n(l),f=t(3),d=["className","cssModule","hidden","widths","tag","check","size","for"],m=o.a.oneOfType([o.a.number,o.a.string]),p=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:m,order:m,offset:m})]),b={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:f.tagPropType,className:o.a.string,cssModule:o.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:o.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,r=e.hidden,c=e.widths,o=e.tag,l=e.check,m=e.size,p=e.for,b=Object(s.a)(e,d),h=[];c.forEach((function(a,n){var s=e[a];if(delete b[a],s||""===s){var r,i=!n;if(Object(f.isObject)(s)){var c,o=i?"-":"-"+a+"-";r=g(i,a,s.size),h.push(Object(f.mapToCssModules)(u()(((c={})[r]=s.size||""===s.size,c["order"+o+s.order]=s.order||0===s.order,c["offset"+o+s.offset]=s.offset||0===s.offset,c))),t)}else r=g(i,a,s),h.push(r)}}));var v=Object(f.mapToCssModules)(u()(a,!!r&&"sr-only",!!l&&"form-check-label",!!m&&"col-form-label-"+m,h,!!h.length&&"col-form-label"),t);return i.a.createElement(o,Object(n.a)({htmlFor:p},b,{className:v}))};v.propTypes=b,v.defaultProps=h,a.a=v}}]);
//# sourceMappingURL=114.e401835d.chunk.js.map