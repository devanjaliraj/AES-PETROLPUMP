(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[115],{2052:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return N}));var n=t(837),r=t(51),l=t(13),s=t(14),o=t(16),i=t(15),c=t(0),m=t.n(c),d=t(1118),u=t(1116),h=t(1117),g=t(171),p=t(1121),f=t(794),b=t(795),y=t(793),E=t(561),v=t(297),_=t(56),N=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var s;return Object(l.a)(this,t),(s=a.call(this,e)).onChangeHandler=function(e){s.setState({selectedFile:e.target.files[0]}),s.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},s.changeHandler1=function(e){s.setState({status:e.target.value})},s.changeHandler=function(e){s.setState(Object(r.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault(),console.log(s.props.match.params,s.state);var a=new FormData;a.append("maneger_name",s.state.maneger_name),a.append("addres",s.state.addres),a.append("mobile",s.state.mobile),a.append("shiftManagment",s.state.shiftManagment),a.append("stockManagment",s.state.stockManagment),a.append("cashManagment",s.state.cashManagment),a.append("facilityManagment",s.state.facilityManagment),a.append("roconfiguration",s.state.roconfiguration),a.append("joining_date",s.state.joining_date),a.append("adhar_number",s.state.adhar_number),a.append("pan_number",s.state.pan_number),a.append("date_of_brith",s.state.date_of_brith),a.append("salary_decieded",s.state.salary_decieded),a.append("salary_date",s.state.salary_date),a.append("status",s.state.status),null!==s.state.selectedFile&&(a.append("adharimg",s.state.selectedFile,s.state.selectedName),a.append("panImg",s.state.selectedFile,s.state.selectedName),a.append("photograh",s.state.selectedFile,s.state.selectedName));var t,r=Object(n.a)(a.values());try{for(r.s();!(t=r.n()).done;){var l=t.value;console.log(l)}}catch(d){r.e(d)}finally{r.f()}var o,i=Object(n.a)(a.keys());try{for(i.s();!(o=i.n()).done;){var c=o.value;console.log(c)}}catch(d){i.e(d)}finally{i.f()}var m=s.props.match.params.id;E.a.post("/dealer/updateonemanager/".concat(m),a).then((function(e){console.log(e),s.props.history.push("/app/staffEnrollment/managerList/".concat(s.state.dealer_id._id))})).catch((function(e){console.log(e)}))},s.download=function(e){console.log(e.target.href),fetch(e.target.href,{method:"GET",headers:{}}).then((function(e){e.arrayBuffer().then((function(e){var a=window.URL.createObjectURL(new Blob([e])),t=document.createElement("a");t.href=a,t.setAttribute("download","image.png"),document.body.appendChild(t),t.click()}))})).catch((function(e){console.log(e)}))},s.state={dealer_id:"",addres:"",adhar_number:"",adharimg:"",date_of_brith:"",joining_date:"",maneger_name:"",mobile:"",panImg:"",pan_number:"",photograh:"",salary_date:"",salary_decieded:"",shiftManagment:"",stockManagment:"",cashManagment:"",facilityManagment:"",roconfiguration:"",status:"",selectedFile:null,selectedName:""},s}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;console.log(a),E.a.get("/dealer/getonemanager/".concat(a)).then((function(a){console.log(a),e.setState({dealer_id:a.data.data.dealer_id,maneger_name:a.data.data.maneger_name,addres:a.data.data.addres,mobile:a.data.data.mobile,joining_date:a.data.data.joining_date,adhar_number:a.data.data.adhar_number,adharimg:a.data.data.adharimg,pan_number:a.data.data.pan_number,panImg:a.data.data.panImg,photograh:a.data.data.photograh,date_of_brith:a.data.data.date_of_brith,salary_decieded:a.data.data.salary_decieded,salary_date:a.data.data.salary_date,shiftManagment:a.data.data.shiftManagment,stockManagment:a.data.data.stockManagment,cashManagment:a.data.data.cashManagment,facilityManagment:a.data.data.facilityManagment,roconfiguration:a.data.data.roconfiguration,status:a.data.data.status})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return m.a.createElement("div",null,m.a.createElement(d.a,null,m.a.createElement(u.a,{className:"m-1"},m.a.createElement(h.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Update Retail Selling Price")),m.a.createElement(h.a,null,m.a.createElement(_.b,{render:function(a){var t=a.history;return m.a.createElement(g.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/staffEnrollment/managerList/".concat(e.state.dealer_id._id))}},"Back")}}))),m.a.createElement(p.a,null,m.a.createElement(f.a,{className:"m-1",onSubmit:this.submitHandler},m.a.createElement(u.a,null,m.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(b.a,null,"Name"),m.a.createElement(y.a,{required:!0,type:"text",name:"maneger_name",value:this.state.maneger_name,onChange:this.changeHandler})),m.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(b.a,null,"Address"),m.a.createElement(y.a,{required:!0,type:"text",name:"addres",placeholder:"Enter Address",value:this.state.addres,onChange:this.changeHandler})),m.a.createElement(h.a,{lg:"6",md:"0",sm:"6"},m.a.createElement("a",{href:this.state.photograh,download:!0,target:"blank",onClick:function(a){return e.download(a)}},m.a.createElement(v.a,{className:"mr-50",size:"25px",color:"blue"}),"download Photograph")),m.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(b.a,null,"Mobile"),m.a.createElement(y.a,{required:!0,type:"number",name:"mobile",placeholder:"Enter Name",value:this.state.mobile,onChange:this.changeHandler})),m.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(b.a,null,"Aadhar Number"),m.a.createElement(y.a,{required:!0,type:"number",name:"adhar_number",placeholder:"Enter Aadhar No.",value:this.state.adhar_number,onChange:this.changeHandler})),m.a.createElement(h.a,{lg:"6",md:"0",sm:"6"},m.a.createElement("a",{href:this.state.adharimg,download:!0,target:"blank",onClick:function(a){return e.download(a)}},m.a.createElement(v.a,{className:"mr-50",size:"25px",color:"blue"}),"download Adhar Image")),m.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(b.a,null,"Pan Number"),m.a.createElement(y.a,{required:!0,type:"text",name:"pan_number",placeholder:"Enter Pan No.",value:this.state.pan_number,onChange:this.changeHandler})),m.a.createElement(h.a,{lg:"6",md:"0",sm:"6"},m.a.createElement("a",{href:this.state.panImg,download:!0,target:"blank",onClick:function(a){return e.download(a)}},m.a.createElement(v.a,{className:"mr-50",size:"25px",color:"blue"}),"download Pan Image")),m.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(b.a,null,"Joining Date"),m.a.createElement(y.a,{required:!0,type:"text",name:"joining_date",placeholder:"Enter Joining Date",value:this.state.joining_date,onChange:this.changeHandler})),m.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(b.a,null,"Date of Birth"),m.a.createElement(y.a,{required:!0,type:"text",name:"date_of_brith",placeholder:"Enter DOB",value:this.state.date_of_brith,onChange:this.changeHandler})),m.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(b.a,null,"Monthly Salary"),m.a.createElement(y.a,{required:!0,type:"text",name:"salary_decieded",placeholder:"Enter Name",value:this.state.salary_decieded,onChange:this.changeHandler})),m.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(b.a,null,"Salary Date"),m.a.createElement(y.a,{required:!0,type:"text",name:"salary_date",placeholder:"Enter Name",value:this.state.salary_date,onChange:this.changeHandler})),m.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement("h6",null,"Shift Managment"),m.a.createElement(y.a,{readOnly:!0,name:"shiftManagment",value:this.state.shiftManagment})),m.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement("h6",null,"Stock Managment"),m.a.createElement(y.a,{readOnly:!0,name:"stockManagment",value:this.state.stockManagment})),m.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement("h6",null,"Cash Managment"),m.a.createElement(y.a,{readOnly:!0,name:"cashManagment",value:this.state.cashManagment})),m.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement("h6",null,"Facility Managment"),m.a.createElement(y.a,{readOnly:!0,name:"facilityManagment",value:this.state.facilityManagment})),m.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement("h6",null,"Ro-Configuration Managment"),m.a.createElement(y.a,{readOnly:!0,name:"roconfiguration",value:this.state.roconfiguration})),m.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},m.a.createElement(b.a,{className:"mb-1"},"Status"),m.a.createElement("div",{className:"form-label-group",onChange:function(a){return e.changeHandler1(a)}},m.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),m.a.createElement("span",{style:{marginRight:"20px"}},"Active"),m.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),m.a.createElement("span",{style:{marginRight:"3px"}},"Inactive")))),m.a.createElement(u.a,null,m.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(g.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update Manager")))))))}}]),t}(c.Component)},793:function(e,a,t){"use strict";var n=t(5),r=t(9),l=t(11),s=t(12),o=t(0),i=t.n(o),c=t(1),m=t.n(c),d=t(4),u=t.n(d),h=t(3),g=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],p={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:h.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(l.a)(t)),t.focus=t.focus.bind(Object(l.a)(t)),t}Object(s.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.type,s=e.bsSize,o=e.valid,c=e.invalid,m=e.tag,d=e.addon,p=e.plaintext,f=e.innerRef,b=Object(r.a)(e,g),y=["radio","checkbox"].indexOf(l)>-1,E=new RegExp("\\D","g"),v=m||("select"===l||"textarea"===l?l:"input"),_="form-control";p?(_+="-plaintext",v=m||"input"):"file"===l?_+="-file":"range"===l?_+="-range":y&&(_=d?null:"form-check-input"),b.size&&E.test(b.size)&&(Object(h.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=b.size,delete b.size);var N=Object(h.mapToCssModules)(u()(a,c&&"is-invalid",o&&"is-valid",!!s&&"form-control-"+s,_),t);return("input"===v||m&&"function"===typeof m)&&(b.type=l),b.children&&!p&&"select"!==l&&"string"===typeof v&&"select"!==v&&(Object(h.warnOnce)('Input with a type of "'+l+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),i.a.createElement(v,Object(n.a)({},b,{ref:f,className:N,"aria-invalid":c}))},a}(i.a.Component);f.propTypes=p,f.defaultProps={type:"text"},a.a=f},794:function(e,a,t){"use strict";var n=t(5),r=t(9),l=t(11),s=t(12),o=t(0),i=t.n(o),c=t(1),m=t.n(c),d=t(4),u=t.n(d),h=t(3),g=["className","cssModule","inline","tag","innerRef"],p={children:m.a.node,inline:m.a.bool,tag:h.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(l.a)(t)),t.submit=t.submit.bind(Object(l.a)(t)),t}Object(s.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.inline,s=e.tag,o=e.innerRef,c=Object(r.a)(e,g),m=Object(h.mapToCssModules)(u()(a,!!l&&"form-inline"),t);return i.a.createElement(s,Object(n.a)({},c,{ref:o,className:m}))},a}(o.Component);f.propTypes=p,f.defaultProps={tag:"form"},a.a=f},795:function(e,a,t){"use strict";var n=t(5),r=t(9),l=t(0),s=t.n(l),o=t(1),i=t.n(o),c=t(4),m=t.n(c),d=t(3),u=["className","cssModule","hidden","widths","tag","check","size","for"],h=i.a.oneOfType([i.a.number,i.a.string]),g=i.a.oneOfType([i.a.bool,i.a.string,i.a.number,i.a.shape({size:h,order:h,offset:h})]),p={children:i.a.node,hidden:i.a.bool,check:i.a.bool,size:i.a.string,for:i.a.string,tag:d.tagPropType,className:i.a.string,cssModule:i.a.object,xs:g,sm:g,md:g,lg:g,xl:g,widths:i.a.array},f={tag:"label",widths:["xs","sm","md","lg","xl"]},b=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},y=function(e){var a=e.className,t=e.cssModule,l=e.hidden,o=e.widths,i=e.tag,c=e.check,h=e.size,g=e.for,p=Object(r.a)(e,u),f=[];o.forEach((function(a,n){var r=e[a];if(delete p[a],r||""===r){var l,s=!n;if(Object(d.isObject)(r)){var o,i=s?"-":"-"+a+"-";l=b(s,a,r.size),f.push(Object(d.mapToCssModules)(m()(((o={})[l]=r.size||""===r.size,o["order"+i+r.order]=r.order||0===r.order,o["offset"+i+r.offset]=r.offset||0===r.offset,o))),t)}else l=b(s,a,r),f.push(l)}}));var y=Object(d.mapToCssModules)(m()(a,!!l&&"sr-only",!!c&&"form-check-label",!!h&&"col-form-label-"+h,f,!!f.length&&"col-form-label"),t);return s.a.createElement(i,Object(n.a)({htmlFor:g},p,{className:y}))};y.propTypes=p,y.defaultProps=f,a.a=y},837:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(92);function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var a=0,t=function(){};return{s:t,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l,s=!0,o=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){o=!0,l=e},f:function(){try{s||null==r.return||r.return()}finally{if(o)throw l}}}}}}]);
//# sourceMappingURL=115.c5c477d5.chunk.js.map