(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[81],{1995:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return j}));var n=t(874),l=t(51),r=t(13),o=t(14),s=t(16),c=t(15),i=t(0),m=t.n(i),u=t(1262),d=t(1263),f=t(1260),p=t(1261),h=t(1264),g=t(177),b=t(1267),_=t(801),v=t(804),E=t(800),y=t(799),O=t(57),j=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(e){var o;return Object(r.a)(this,t),(o=a.call(this,e)).onChangeHandler=function(e){o.setState({selectedFile:e.target.files[0]}),o.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},o.changeHandler1=function(e){o.setState({status:e.target.value})},o.changeHandler=function(e){o.setState(Object(l.a)({},e.target.name,e.target.value))},o.submitHandler=function(e){e.preventDefault(),console.log(o.state);var a=new FormData;a.append("name_of_customer",o.state.name_of_customer),a.append("mobile",o.state.mobile),a.append("email",o.state.email),a.append("credit_limit",o.state.credit_limit),a.append("credit_term_lube",o.state.credit_term_lube),a.append("addres",o.state.addres),a.append("local_id",o.state.local_id),a.append("location",o.state.location),a.append("vehicle_no",o.state.vehicle_no),a.append("local_guarantor_name",o.state.local_guarantor_no),a.append("local_guarantor_no",o.state.local_guarantor_no),null!==o.state.selectedFile&&a.append("document_upload",o.state.selectedFile,o.state.selectedName);var t,l=Object(n.a)(a.values());try{for(l.s();!(t=l.n()).done;){var r=t.value;console.log(r)}}catch(u){l.e(u)}finally{l.f()}var s,c=Object(n.a)(a.keys());try{for(c.s();!(s=c.n()).done;){var i=s.value;console.log(i)}}catch(u){c.e(u)}finally{c.f()}var m=o.props.match.params.id;y.a.post("/dealer/updatecreditcustomers/".concat(m),a).then((function(e){console.log(e),o.props.history.push("/app/ro-configuration/CreditCustomersList")})).catch((function(e){console.log(e)}))},o.state={name_of_customer:"",mobile:"",credit_limit:"",credit_term_lube:"",addres:"",local_id:"",vehicle_no:"",local_guarantor_name:"",local_guarantor_no:"",document_upload:"",selectedFile:null},o}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;y.a.get("/dealer/getonecreditcustomers/".concat(a)).then((function(a){console.log(a),e.setState({name_of_customer:a.data.data.name_of_customer,mobile:a.data.data.mobile,credit_limit:a.data.data.credit_limit,credit_term_lube:a.data.data.credit_term_lube,addres:a.data.data.addres,local_id:a.data.data.local_id,location:a.data.data.location,vehicle_no:a.data.data.vehicle_no,local_guarantor_name:a.data.data.local_guarantor_name,local_guarantor_no:a.data.data.local_guarantor_no})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement(u.a,null,m.a.createElement(d.a,{sm:"12"},m.a.createElement("div",null,m.a.createElement(f.a,{listTag:"div"},m.a.createElement(p.a,{href:"/",tag:"a"},"Home"),m.a.createElement(p.a,{active:!0},"Credit Customers"))))),m.a.createElement(h.a,null,m.a.createElement(u.a,{className:"m-2"},m.a.createElement(d.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Credit Customers")),m.a.createElement(d.a,null,m.a.createElement(O.b,{render:function(e){var a=e.history;return m.a.createElement(g.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/ro-configuration/CreditCustomersList")}},"Back")}}))),m.a.createElement(b.a,null,m.a.createElement(_.a,{className:"m-1",onSubmit:this.submitHandler},m.a.createElement(u.a,null,m.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(v.a,null,"Name of customer"),m.a.createElement(E.a,{type:"text",name:"name_of_customer",value:this.state.name_of_customer,onChange:this.changeHandler})),m.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(v.a,null,"Phone no."),m.a.createElement(E.a,{type:"number",name:"mobile",value:this.state.mobile,onChange:this.changeHandler})),m.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(v.a,null,"Credit limit"),m.a.createElement(E.a,{type:"text",name:"credit_limit",value:this.state.credit_limit,onChange:this.changeHandler})),m.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(v.a,null,"Credit term lube "),m.a.createElement(E.a,{type:"text",name:"credit_term_lube",value:this.state.credit_term_lube,onChange:this.changeHandler})),m.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(v.a,null,"Address"),m.a.createElement(E.a,{type:"text",name:"addres",value:this.state.addres,onChange:this.changeHandler})),m.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(v.a,null,"Local ID"),m.a.createElement(E.a,{type:"text",name:"local_id",value:this.state.local_id,onChange:this.changeHandler})),m.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(v.a,null,"Vehicle no. "),m.a.createElement(E.a,{type:"number",name:"vehicle_no",value:this.state.vehicle_no,onChange:this.changeHandler})),m.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(v.a,null,"Local guarantor name"),m.a.createElement(E.a,{type:"text",name:"local_guarantor_name",value:this.state.local_guarantor_name,onChange:this.changeHandler})),m.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(v.a,null,"Local guarantor no."),m.a.createElement(E.a,{type:"number",name:"local_guarantor_no",value:this.state.local_guarantor_no,onChange:this.changeHandler})),m.a.createElement(d.a,{lg:"6",md:"0",sm:"6",className:"mb-2"},m.a.createElement(v.a,null,"Document Upload"),m.a.createElement("img",{src:this.state.document_upload,name:"document_upload",className:"w-25 ml-5 h-50"})),m.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(v.a,null,"Document Upload"),m.a.createElement(E.a,{type:"file",value:this.state.document_upload,onChange:this.onChangeHandler,name:"document_upload"}))),m.a.createElement(u.a,null,m.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(g.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update")))))))}}]),t}(i.Component)},799:function(e,a,t){"use strict";var n=t(40),l=t.n(n).a.create({baseURL:"http://3.108.185.7/nodejs/api"});a.a=l},800:function(e,a,t){"use strict";var n=t(5),l=t(7),r=t(11),o=t(12),s=t(0),c=t.n(s),i=t(1),m=t.n(i),u=t(4),d=t.n(u),f=t(3),p=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:f.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(o.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,o=e.bsSize,s=e.valid,i=e.invalid,m=e.tag,u=e.addon,h=e.plaintext,g=e.innerRef,b=Object(l.a)(e,p),_=["radio","checkbox"].indexOf(r)>-1,v=new RegExp("\\D","g"),E=m||("select"===r||"textarea"===r?r:"input"),y="form-control";h?(y+="-plaintext",E=m||"input"):"file"===r?y+="-file":"range"===r?y+="-range":_&&(y=u?null:"form-check-input"),b.size&&v.test(b.size)&&(Object(f.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),o=b.size,delete b.size);var O=Object(f.mapToCssModules)(d()(a,i&&"is-invalid",s&&"is-valid",!!o&&"form-control-"+o,y),t);return("input"===E||m&&"function"===typeof m)&&(b.type=r),b.children&&!h&&"select"!==r&&"string"===typeof E&&"select"!==E&&(Object(f.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),c.a.createElement(E,Object(n.a)({},b,{ref:g,className:O,"aria-invalid":i}))},a}(c.a.Component);g.propTypes=h,g.defaultProps={type:"text"},a.a=g},801:function(e,a,t){"use strict";var n=t(5),l=t(7),r=t(11),o=t(12),s=t(0),c=t.n(s),i=t(1),m=t.n(i),u=t(4),d=t.n(u),f=t(3),p=["className","cssModule","inline","tag","innerRef"],h={children:m.a.node,inline:m.a.bool,tag:f.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(o.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,o=e.tag,s=e.innerRef,i=Object(l.a)(e,p),m=Object(f.mapToCssModules)(d()(a,!!r&&"form-inline"),t);return c.a.createElement(o,Object(n.a)({},i,{ref:s,className:m}))},a}(s.Component);g.propTypes=h,g.defaultProps={tag:"form"},a.a=g},804:function(e,a,t){"use strict";var n=t(5),l=t(7),r=t(0),o=t.n(r),s=t(1),c=t.n(s),i=t(4),m=t.n(i),u=t(3),d=["className","cssModule","hidden","widths","tag","check","size","for"],f=c.a.oneOfType([c.a.number,c.a.string]),p=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:f,order:f,offset:f})]),h={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:u.tagPropType,className:c.a.string,cssModule:c.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:c.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},b=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},_=function(e){var a=e.className,t=e.cssModule,r=e.hidden,s=e.widths,c=e.tag,i=e.check,f=e.size,p=e.for,h=Object(l.a)(e,d),g=[];s.forEach((function(a,n){var l=e[a];if(delete h[a],l||""===l){var r,o=!n;if(Object(u.isObject)(l)){var s,c=o?"-":"-"+a+"-";r=b(o,a,l.size),g.push(Object(u.mapToCssModules)(m()(((s={})[r]=l.size||""===l.size,s["order"+c+l.order]=l.order||0===l.order,s["offset"+c+l.offset]=l.offset||0===l.offset,s))),t)}else r=b(o,a,l),g.push(r)}}));var _=Object(u.mapToCssModules)(m()(a,!!r&&"sr-only",!!i&&"form-check-label",!!f&&"col-form-label-"+f,g,!!g.length&&"col-form-label"),t);return o.a.createElement(c,Object(n.a)({htmlFor:p},h,{className:_}))};_.propTypes=h,_.defaultProps=g,a.a=_},874:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(93);function l(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var a=0,t=function(){};return{s:t,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,r,o=!0,s=!1;return{s:function(){l=e[Symbol.iterator]()},n:function(){var e=l.next();return o=e.done,e},e:function(e){s=!0,r=e},f:function(){try{o||null==l.return||l.return()}finally{if(s)throw r}}}}}}]);
//# sourceMappingURL=81.d3f561b9.chunk.js.map