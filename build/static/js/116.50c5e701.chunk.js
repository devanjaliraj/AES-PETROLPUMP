(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[116],{1968:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return N}));var n=t(51),l=t(13),s=t(14),o=t(16),c=t(15),r=t(0),i=t.n(r),m=t(1266),d=t(1267),u=t(1264),h=t(1265),p=t(1268),f=t(176),b=t(1271),g=t(812),_=t(805),E=t(801),y=t(40),v=t.n(y),O=t(21),N=function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(e){var s;return Object(l.a)(this,t),(s=a.call(this,e)).changeHandler=function(e){s.setState(Object(n.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault();var a=s.props.match.params.id;v.a.post("http://3.108.185.7/nodejs/api/dealer/addeditadvancedealershipform/".concat(a),s.state).then((function(e){console.log(e),s.props.history.push("/app/ro-configuration/RoConfigurationList")})).catch((function(e){console.log(e)}))},s.state={dealer_name:"",mobile:"",email:"",master_oil_company:"",location:"",omc_customer_code:"",state:"",district:"",total_no_mpd:"",total_no_bay:"",total_no_nozzles:"",total_no_tanks:"",total_no_air_machine:"",puc_machine:"",any_other_facility:""},s}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;v.a.get("http://3.108.185.7/nodejs/api/dealer/viewonedealershipform/".concat(a)).then((function(a){console.log(a),e.setState({dealer_name:a.data.data.dealer_name,mobile:a.data.data.mobile,email:a.data.data.email,master_oil_company:a.data.data.master_oil_company,location:a.data.data.location,omc_customer_code:a.data.data.omc_customer_code,state:a.data.data.state,district:a.data.data.district,total_no_mpd:a.data.data.total_no_mpd,total_no_bay:a.data.data.total_no_bay,total_no_nozzles:a.data.data.total_no_nozzles,total_no_tanks:a.data.data.total_no_tanks,total_no_air_machine:a.data.data.total_no_air_machine,puc_machine:a.data.data.puc_machine,any_other_facility:a.data.data.any_other_facility})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(m.a,null,i.a.createElement(d.a,{sm:"12"},i.a.createElement("div",null,i.a.createElement(u.a,{listTag:"div"},i.a.createElement(h.a,{href:"/analyticsDashboard",tag:"a"},"Home"),i.a.createElement(h.a,{active:!0},"Edit Basic Details"))))),i.a.createElement(p.a,null,i.a.createElement(m.a,{className:"m-2"},i.a.createElement(d.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Basic Details")),i.a.createElement(d.a,null,i.a.createElement(f.a,{className:" btn btn-danger float-right",onClick:function(){return O.a.push("/app/ro-configuration/RoConfigurationList")}},"Back"))),i.a.createElement(b.a,null,i.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(m.a,null,i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(_.a,null,"Name Of Dealership"),i.a.createElement(E.a,{type:"text",name:"dealer_name",value:this.state.dealer_name,onChange:this.changeHandler})),i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(_.a,null,"Mobile No."),i.a.createElement(E.a,{type:"text",name:"mobile",value:this.state.mobile,onChange:this.changeHandler})),i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(_.a,null,"Email"),i.a.createElement(E.a,{type:"text",name:"Email",value:this.state.email,onChange:this.changeHandler})),i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(_.a,null,"Master Oil Company"),i.a.createElement(E.a,{type:"text",name:"master_oil_company",value:this.state.master_oil_company,onChange:this.changeHandler})),i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(_.a,null,"Location"),i.a.createElement(E.a,{type:"text",name:"location",value:this.state.location,onChange:this.changeHandler})),i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(_.a,null,"OMC Customer Code"),i.a.createElement(E.a,{type:"text",name:"omc_customer_code",value:this.state.omc_customer_code,onChange:this.changeHandler})),i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(_.a,null,"State"),i.a.createElement(E.a,{type:"text",name:"state",value:this.state.state,onChange:this.changeHandler})),i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(_.a,null,"District "),i.a.createElement(E.a,{type:"text",name:"district",value:this.state.district,onChange:this.changeHandler})),i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(_.a,null,"Total no. MPD "),i.a.createElement(E.a,{type:"number",name:"total_no_mpd",value:this.state.total_no_mpd,onChange:this.changeHandler})),i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(_.a,null,"Total no. Bay "),i.a.createElement(E.a,{type:"number",name:"total_no_bay",value:this.state.total_no_bay,onChange:this.changeHandler})),i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(_.a,null,"total_no_nozzles"),i.a.createElement(E.a,{type:"number",name:"total_no_nozzles",value:this.state.total_no_nozzles,onChange:this.changeHandler})),i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(_.a,null,"Total no. Tanks "),i.a.createElement(E.a,{type:"number",name:"total_no_tanks",value:this.state.total_no_tanks,onChange:this.changeHandler})),i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(_.a,null,"Total no Air Machine "),i.a.createElement(E.a,{type:"number",name:"total_no_air_machine",value:this.state.total_no_air_machine,onChange:this.changeHandler})),i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(_.a,null,"PUC Machine "),i.a.createElement(E.a,{type:"number",name:"puc_machine",value:this.state.puc_machine,onChange:this.changeHandler})),i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(_.a,null,"Any other facility "),i.a.createElement(E.a,{type:"number",name:"any_other_facility",value:this.state.any_other_facility,onChange:this.changeHandler}))),i.a.createElement(m.a,null,i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(f.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update")))))))}}]),t}(r.Component)},801:function(e,a,t){"use strict";var n=t(5),l=t(7),s=t(11),o=t(12),c=t(0),r=t.n(c),i=t(1),m=t.n(i),d=t(4),u=t.n(d),h=t(3),p=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],f={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:h.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.focus=t.focus.bind(Object(s.a)(t)),t}Object(o.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.type,o=e.bsSize,c=e.valid,i=e.invalid,m=e.tag,d=e.addon,f=e.plaintext,b=e.innerRef,g=Object(l.a)(e,p),_=["radio","checkbox"].indexOf(s)>-1,E=new RegExp("\\D","g"),y=m||("select"===s||"textarea"===s?s:"input"),v="form-control";f?(v+="-plaintext",y=m||"input"):"file"===s?v+="-file":"range"===s?v+="-range":_&&(v=d?null:"form-check-input"),g.size&&E.test(g.size)&&(Object(h.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),o=g.size,delete g.size);var O=Object(h.mapToCssModules)(u()(a,i&&"is-invalid",c&&"is-valid",!!o&&"form-control-"+o,v),t);return("input"===y||m&&"function"===typeof m)&&(g.type=s),g.children&&!f&&"select"!==s&&"string"===typeof y&&"select"!==y&&(Object(h.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),r.a.createElement(y,Object(n.a)({},g,{ref:b,className:O,"aria-invalid":i}))},a}(r.a.Component);b.propTypes=f,b.defaultProps={type:"text"},a.a=b},805:function(e,a,t){"use strict";var n=t(5),l=t(7),s=t(0),o=t.n(s),c=t(1),r=t.n(c),i=t(4),m=t.n(i),d=t(3),u=["className","cssModule","hidden","widths","tag","check","size","for"],h=r.a.oneOfType([r.a.number,r.a.string]),p=r.a.oneOfType([r.a.bool,r.a.string,r.a.number,r.a.shape({size:h,order:h,offset:h})]),f={children:r.a.node,hidden:r.a.bool,check:r.a.bool,size:r.a.string,for:r.a.string,tag:d.tagPropType,className:r.a.string,cssModule:r.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:r.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},_=function(e){var a=e.className,t=e.cssModule,s=e.hidden,c=e.widths,r=e.tag,i=e.check,h=e.size,p=e.for,f=Object(l.a)(e,u),b=[];c.forEach((function(a,n){var l=e[a];if(delete f[a],l||""===l){var s,o=!n;if(Object(d.isObject)(l)){var c,r=o?"-":"-"+a+"-";s=g(o,a,l.size),b.push(Object(d.mapToCssModules)(m()(((c={})[s]=l.size||""===l.size,c["order"+r+l.order]=l.order||0===l.order,c["offset"+r+l.offset]=l.offset||0===l.offset,c))),t)}else s=g(o,a,l),b.push(s)}}));var _=Object(d.mapToCssModules)(m()(a,!!s&&"sr-only",!!i&&"form-check-label",!!h&&"col-form-label-"+h,b,!!b.length&&"col-form-label"),t);return o.a.createElement(r,Object(n.a)({htmlFor:p},f,{className:_}))};_.propTypes=f,_.defaultProps=b,a.a=_},812:function(e,a,t){"use strict";var n=t(5),l=t(7),s=t(11),o=t(12),c=t(0),r=t.n(c),i=t(1),m=t.n(i),d=t(4),u=t.n(d),h=t(3),p=["className","cssModule","inline","tag","innerRef"],f={children:m.a.node,inline:m.a.bool,tag:h.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.submit=t.submit.bind(Object(s.a)(t)),t}Object(o.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.inline,o=e.tag,c=e.innerRef,i=Object(l.a)(e,p),m=Object(h.mapToCssModules)(u()(a,!!s&&"form-inline"),t);return r.a.createElement(o,Object(n.a)({},i,{ref:c,className:m}))},a}(c.Component);b.propTypes=f,b.defaultProps={tag:"form"},a.a=b}}]);
//# sourceMappingURL=116.50c5e701.chunk.js.map