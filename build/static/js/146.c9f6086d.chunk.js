(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[146],{1953:function(e,t,a){"use strict";a.r(t);var n=a(51),i=a(13),s=a(14),r=a(16),l=a(15),o=a(0),c=a.n(o),p=a(1268),m=a(1266),d=a(1267),u=a(177),h=a(1271),g=a(801),f=a(1269),b=a(799),y=a(40),E=a.n(y),v=a(21),O=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).changeHandler=function(e){s.setState(Object(n.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault();var t=s.props.match.params.id;E.a.post("http://3.108.185.7/nodejs/api/dealer/updatersp/".concat(t),s.state).then((function(e){console.log(e),s.props.history.push("/app/shiftmanagement/retailSellingPriceList")})).catch((function(e){console.log(e)}))},s.state={date:"",opneing_dip1:"",opneing_liter1:"",rsp1:"",opneing_dip2:"",opneing_liter2:"",rsp2:""},s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;E.a.get("http://3.108.185.7/nodejs/api/dealer/getonersp/".concat(t)).then((function(t){console.log(t),e.setState({date:t.data.data.date,opneing_dip1:t.data.data.opneing_dip1,opneing_liter1:t.data.data.opneing_liter1,rsp1:t.data.data.rsp1,opneing_dip2:t.data.data.opneing_dip2,opneing_liter2:t.data.data.opneing_liter2,rsp2:t.data.data.rsp2})})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){return c.a.createElement(p.a,null,c.a.createElement(m.a,{className:"m-1"},c.a.createElement(d.a,null,c.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Update Retail Selling Price")),c.a.createElement(d.a,null,c.a.createElement(u.a,{className:" btn btn-danger float-right",onClick:function(){return v.a.push("/apps/shiftmanagement/retailSellingPriceList")}},"Back"))),c.a.createElement(h.a,null,c.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},c.a.createElement(f.a,null,c.a.createElement("h3",null,"---- MS ---")),c.a.createElement(m.a,null,c.a.createElement(d.a,{md:"6",sm:"12"},c.a.createElement("h5",{className:"my-1 text-bold-600"},"Opening Dip"),c.a.createElement(b.a,{type:"number",name:"opneing_dip1",value:this.state.opneing_dip1,onChange:this.changeHandler})),c.a.createElement(d.a,{md:"6",sm:"12"},c.a.createElement("h5",{className:"my-1 text-bold-600"},"Opening Litres"),c.a.createElement(b.a,{type:"number",name:"opneing_liter1",value:this.state.opneing_liter1,onChange:this.changeHandler})),c.a.createElement(d.a,{md:"6",sm:"12"},c.a.createElement("h5",{className:"my-1 text-bold-600"},"Rsp Entry"),c.a.createElement(b.a,{type:"number",name:"rsp1",value:this.state.rsp1,onChange:this.changeHandler}))),c.a.createElement(f.a,null,c.a.createElement("h3",null,"---- Hsd ----")),c.a.createElement(m.a,null,c.a.createElement(d.a,{md:"6",sm:"12"},c.a.createElement("h5",{className:"my-1 text-bold-600"},"Opening Dip"),c.a.createElement(b.a,{type:"number",name:"opneing_dip2",value:this.state.opneing_dip2,onChange:this.changeHandler})),c.a.createElement(d.a,{md:"6",sm:"12"},c.a.createElement("h5",{className:"my-1 text-bold-600"},"Opening Litres"),c.a.createElement(b.a,{type:"number",name:"opneing_liter2",value:this.state.opneing_liter2,onChange:this.changeHandler})),c.a.createElement(d.a,{md:"6",sm:"12",style:{marginBottom:15}},c.a.createElement("h5",{className:"my-1 text-bold-600"},"Rsp Entry"),c.a.createElement(b.a,{type:"number",name:"rsp2",value:this.state.rsp2,onChange:this.changeHandler}))),c.a.createElement(d.a,{lg:"12",md:"12",sm:"12",className:"mb-5"},c.a.createElement(u.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Submit")))))}}]),a}(c.a.Component);t.default=O},799:function(e,t,a){"use strict";var n=a(5),i=a(7),s=a(11),r=a(12),l=a(0),o=a.n(l),c=a(1),p=a.n(c),m=a(4),d=a.n(m),u=a(3),h=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],g={children:p.a.node,type:p.a.string,size:p.a.oneOfType([p.a.number,p.a.string]),bsSize:p.a.string,valid:p.a.bool,invalid:p.a.bool,tag:u.tagPropType,innerRef:p.a.oneOfType([p.a.object,p.a.func,p.a.string]),plaintext:p.a.bool,addon:p.a.bool,className:p.a.string,cssModule:p.a.object},f=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.focus=a.focus.bind(Object(s.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.type,r=e.bsSize,l=e.valid,c=e.invalid,p=e.tag,m=e.addon,g=e.plaintext,f=e.innerRef,b=Object(i.a)(e,h),y=["radio","checkbox"].indexOf(s)>-1,E=new RegExp("\\D","g"),v=p||("select"===s||"textarea"===s?s:"input"),O="form-control";g?(O+="-plaintext",v=p||"input"):"file"===s?O+="-file":"range"===s?O+="-range":y&&(O=m?null:"form-check-input"),b.size&&E.test(b.size)&&(Object(u.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=b.size,delete b.size);var j=Object(u.mapToCssModules)(d()(t,c&&"is-invalid",l&&"is-valid",!!r&&"form-control-"+r,O),a);return("input"===v||p&&"function"===typeof p)&&(b.type=s),b.children&&!g&&"select"!==s&&"string"===typeof v&&"select"!==v&&(Object(u.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),o.a.createElement(v,Object(n.a)({},b,{ref:f,className:j,"aria-invalid":c}))},t}(o.a.Component);f.propTypes=g,f.defaultProps={type:"text"},t.a=f},801:function(e,t,a){"use strict";var n=a(5),i=a(7),s=a(11),r=a(12),l=a(0),o=a.n(l),c=a(1),p=a.n(c),m=a(4),d=a.n(m),u=a(3),h=["className","cssModule","inline","tag","innerRef"],g={children:p.a.node,inline:p.a.bool,tag:u.tagPropType,innerRef:p.a.oneOfType([p.a.object,p.a.func,p.a.string]),className:p.a.string,cssModule:p.a.object},f=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.submit=a.submit.bind(Object(s.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.inline,r=e.tag,l=e.innerRef,c=Object(i.a)(e,h),p=Object(u.mapToCssModules)(d()(t,!!s&&"form-inline"),a);return o.a.createElement(r,Object(n.a)({},c,{ref:l,className:p}))},t}(l.Component);f.propTypes=g,f.defaultProps={tag:"form"},t.a=f}}]);
//# sourceMappingURL=146.c9f6086d.chunk.js.map