(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[84],{2002:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return w}));var n=t(874),r=t(51),l=t(13),s=t(14),o=t(16),i=t(15),c=t(0),d=t.n(c),m=t(1262),u=t(1263),p=t(1260),h=t(1261),f=t(1264),g=t(1265),b=t(1266),v=t(1267),y=t(801),E=t(804),_=t(800),j=t(177),N=t(799),O=t(298),w=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var s;return Object(l.a)(this,t),(s=a.call(this,e)).onChangeHandler=function(e){s.setState({selectedFile:e.target.files[0]}),s.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},s.changeHandler1=function(e){s.setState({status:e.target.value})},s.changeHandler=function(e){s.setState(Object(r.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault();var a=new FormData;a.append("staff_name",s.state.staff_name),a.append("addres",s.state.addres),a.append("mobile",s.state.mobile),a.append("joining_date",s.state.joining_date),a.append("adhar_number",s.state.adhar_number),a.append("pan_number",s.state.pan_number),a.append("date_of_brith",s.state.date_of_brith),a.append("salary_decieded",s.state.salary_decieded),a.append("salary_date",s.state.salary_date),a.append("apprpved_leave",s.state.apprpved_leave),a.append("any_other_facility",s.state.any_other_facility),a.append("status",s.state.status),null!==s.state.selectedFile&&(a.append("adharimg",s.state.selectedFile,s.state.selectedName),a.append("panImg",s.state.selectedFile,s.state.selectedName),a.append("photograh",s.state.selectedFile,s.state.selectedName));var t,r=Object(n.a)(a.values());try{for(r.s();!(t=r.n()).done;){var l=t.value;console.log(l)}}catch(m){r.e(m)}finally{r.f()}var o,i=Object(n.a)(a.keys());try{for(i.s();!(o=i.n()).done;){var c=o.value;console.log(c)}}catch(m){i.e(m)}finally{i.f()}var d=s.props.match.params.id;N.a.post("/dealer/updateonestaff/".concat(d),a).then((function(e){console.log(e),s.props.history.push("/app/staffEnrollment/otherStaffList")})).catch((function(e){console.log(e.response)}))},s.download=function(e){console.log(e.target.href),fetch(e.target.href,{method:"GET",headers:{}}).then((function(e){e.arrayBuffer().then((function(e){var a=window.URL.createObjectURL(new Blob([e])),t=document.createElement("a");t.href=a,t.setAttribute("download","image.png"),document.body.appendChild(t),t.click()}))})).catch((function(e){console.log(e)}))},s.state={staff_name:"",mobile:"",joining_date:"",adhar_number:"",pan_number:"",date_of_brith:"",salary_decieded:"",salary_date:"",apprpved_leave:"",status:"",panImg:"",photograh:"",adharimg:"",selectedFile:null},s}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;console.log(a),N.a.get("/dealer/getonestaff/".concat(a)).then((function(a){console.log(a),e.setState({staff_name:a.data.data.staff_name,addres:a.data.data.addres,mobile:a.data.data.mobile,joining_date:a.data.data.joining_date,adhar_number:a.data.data.adhar_number,adharimg:a.data.data.adharimg,pan_number:a.data.data.pan_number,panImg:a.data.data.panImg,photograh:a.data.data.photograh,apprpved_leave:a.data.data.apprpved_leave,date_of_brith:a.data.data.date_of_brith,salary_decieded:a.data.data.salary_decieded,salary_date:a.data.data.salary_date,status:a.data.data.status})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return d.a.createElement("div",null,d.a.createElement(m.a,null,d.a.createElement(u.a,{sm:"12"},d.a.createElement("div",null,d.a.createElement(p.a,{listTag:"div"},d.a.createElement(h.a,{href:"/analyticsDashboard",tag:"a"},"Home"),d.a.createElement(h.a,{active:!0},"Update Manager"))))),d.a.createElement(f.a,null,d.a.createElement(g.a,null,d.a.createElement(b.a,null,"Add Other Staff")),d.a.createElement(v.a,null,d.a.createElement(y.a,{className:"m-1",onSubmit:this.submitHandler},d.a.createElement(m.a,null,d.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},d.a.createElement(E.a,null,"Name"),d.a.createElement(_.a,{required:!0,type:"text",name:"staff_name",value:this.state.staff_name,onChange:this.changeHandler})),d.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},d.a.createElement(E.a,null,"Address"),d.a.createElement(_.a,{required:!0,type:"text",name:"addres",value:this.state.addres,onChange:this.changeHandler})),d.a.createElement(u.a,{lg:"6",md:"0",sm:"6"},d.a.createElement("a",{href:this.state.photograh,download:!0,target:"blank",onClick:function(a){return e.download(a)}},d.a.createElement(O.a,{className:"mr-50",size:"25px",color:"blue"}),"download Photograph")),d.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},d.a.createElement(E.a,null,"Mobile"),d.a.createElement(_.a,{required:!0,type:"text",name:"mobile",placeholder:"Enter Mobile no.",value:this.state.mobile,onChange:this.changeHandler})),d.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},d.a.createElement(E.a,null,"Aadhar Number"),d.a.createElement(_.a,{required:!0,type:"text",name:"adhar_number",placeholder:"Enter Aadhar No.",value:this.state.adhar_number,onChange:this.changeHandler})),d.a.createElement(u.a,{lg:"6",md:"0",sm:"6"},d.a.createElement("a",{href:this.state.adharimg,download:!0,target:"blank",onClick:function(a){return e.download(a)}},d.a.createElement(O.a,{className:"mr-50",size:"25px",color:"blue"}),"download Adhar Image")),d.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},d.a.createElement(E.a,null,"Pan Number"),d.a.createElement(_.a,{required:!0,type:"text",name:"pan_number",placeholder:"Enter Pan No.",value:this.state.pan_number,onChange:this.changeHandler})),d.a.createElement(u.a,{lg:"6",md:"0",sm:"6",className:"mb-2"},d.a.createElement("a",{href:this.state.panImg,download:!0,target:"blank",onClick:function(a){return e.download(a)}},d.a.createElement(O.a,{className:"mr-50",size:"25px",color:"blue"}),"download Pan Image")),d.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},d.a.createElement(E.a,null,"Joining Date"),d.a.createElement(_.a,{required:!0,type:"date",name:"joining_date",placeholder:"Enter Joining Date",value:this.state.joining_date,onChange:this.changeHandler})),d.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},d.a.createElement(E.a,null,"Date of Brith"),d.a.createElement(_.a,{required:!0,type:"date",name:"date_of_brith",value:this.state.date_of_brith,onChange:this.changeHandler})),d.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},d.a.createElement(E.a,null,"Salary Decieded"),d.a.createElement(_.a,{required:!0,type:"text",name:"salary_decieded",placeholder:"Enter Name",value:this.state.salary_decieded,onChange:this.changeHandler})),d.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},d.a.createElement(E.a,null,"Salary Date"),d.a.createElement(_.a,{required:!0,type:"date",name:"salary_date",placeholder:"Enter Salary Date",value:this.state.salary_date,onChange:this.changeHandler})),d.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},d.a.createElement(E.a,null,"Apprpved Leave"),d.a.createElement(_.a,{required:!0,type:"number",name:"apprpved_leave",placeholder:"Enter Salary Date",value:this.state.apprpved_leave,onChange:this.changeHandler})),d.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},d.a.createElement(E.a,{className:"mb-1"},"Status"),d.a.createElement("div",{className:"form-label-group",onChange:function(a){return e.changeHandler1(a)}},d.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),d.a.createElement("span",{style:{marginRight:"20px"}},"Active"),d.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),d.a.createElement("span",{style:{marginRight:"3px"}},"Inactive")))),d.a.createElement(m.a,null,d.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},d.a.createElement(j.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update")))))))}}]),t}(c.Component)},799:function(e,a,t){"use strict";var n=t(40),r=t.n(n).a.create({baseURL:"http://3.108.185.7/nodejs/api"});a.a=r},800:function(e,a,t){"use strict";var n=t(5),r=t(7),l=t(11),s=t(12),o=t(0),i=t.n(o),c=t(1),d=t.n(c),m=t(4),u=t.n(m),p=t(3),h=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],f={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:p.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(l.a)(t)),t.focus=t.focus.bind(Object(l.a)(t)),t}Object(s.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.type,s=e.bsSize,o=e.valid,c=e.invalid,d=e.tag,m=e.addon,f=e.plaintext,g=e.innerRef,b=Object(r.a)(e,h),v=["radio","checkbox"].indexOf(l)>-1,y=new RegExp("\\D","g"),E=d||("select"===l||"textarea"===l?l:"input"),_="form-control";f?(_+="-plaintext",E=d||"input"):"file"===l?_+="-file":"range"===l?_+="-range":v&&(_=m?null:"form-check-input"),b.size&&y.test(b.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=b.size,delete b.size);var j=Object(p.mapToCssModules)(u()(a,c&&"is-invalid",o&&"is-valid",!!s&&"form-control-"+s,_),t);return("input"===E||d&&"function"===typeof d)&&(b.type=l),b.children&&!f&&"select"!==l&&"string"===typeof E&&"select"!==E&&(Object(p.warnOnce)('Input with a type of "'+l+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),i.a.createElement(E,Object(n.a)({},b,{ref:g,className:j,"aria-invalid":c}))},a}(i.a.Component);g.propTypes=f,g.defaultProps={type:"text"},a.a=g},801:function(e,a,t){"use strict";var n=t(5),r=t(7),l=t(11),s=t(12),o=t(0),i=t.n(o),c=t(1),d=t.n(c),m=t(4),u=t.n(m),p=t(3),h=["className","cssModule","inline","tag","innerRef"],f={children:d.a.node,inline:d.a.bool,tag:p.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),className:d.a.string,cssModule:d.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(l.a)(t)),t.submit=t.submit.bind(Object(l.a)(t)),t}Object(s.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.inline,s=e.tag,o=e.innerRef,c=Object(r.a)(e,h),d=Object(p.mapToCssModules)(u()(a,!!l&&"form-inline"),t);return i.a.createElement(s,Object(n.a)({},c,{ref:o,className:d}))},a}(o.Component);g.propTypes=f,g.defaultProps={tag:"form"},a.a=g},804:function(e,a,t){"use strict";var n=t(5),r=t(7),l=t(0),s=t.n(l),o=t(1),i=t.n(o),c=t(4),d=t.n(c),m=t(3),u=["className","cssModule","hidden","widths","tag","check","size","for"],p=i.a.oneOfType([i.a.number,i.a.string]),h=i.a.oneOfType([i.a.bool,i.a.string,i.a.number,i.a.shape({size:p,order:p,offset:p})]),f={children:i.a.node,hidden:i.a.bool,check:i.a.bool,size:i.a.string,for:i.a.string,tag:m.tagPropType,className:i.a.string,cssModule:i.a.object,xs:h,sm:h,md:h,lg:h,xl:h,widths:i.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},b=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,l=e.hidden,o=e.widths,i=e.tag,c=e.check,p=e.size,h=e.for,f=Object(r.a)(e,u),g=[];o.forEach((function(a,n){var r=e[a];if(delete f[a],r||""===r){var l,s=!n;if(Object(m.isObject)(r)){var o,i=s?"-":"-"+a+"-";l=b(s,a,r.size),g.push(Object(m.mapToCssModules)(d()(((o={})[l]=r.size||""===r.size,o["order"+i+r.order]=r.order||0===r.order,o["offset"+i+r.offset]=r.offset||0===r.offset,o))),t)}else l=b(s,a,r),g.push(l)}}));var v=Object(m.mapToCssModules)(d()(a,!!l&&"sr-only",!!c&&"form-check-label",!!p&&"col-form-label-"+p,g,!!g.length&&"col-form-label"),t);return s.a.createElement(i,Object(n.a)({htmlFor:h},f,{className:v}))};v.propTypes=f,v.defaultProps=g,a.a=v},874:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(93);function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var a=0,t=function(){};return{s:t,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l,s=!0,o=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){o=!0,l=e},f:function(){try{s||null==r.return||r.return()}finally{if(o)throw l}}}}}}]);
//# sourceMappingURL=84.1a8f2964.chunk.js.map