(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[119],{1979:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return j}));var n=a(51),l=a(13),s=a(14),c=a(66),i=a(16),o=a(15),r=a(0),u=a.n(r),p=a(1262),m=a(1263),d=a(1260),f=a(1261),h=a(1264),b=a(177),g=a(1267),v=a(801),k=a(800),E=a(799),y=a(21),O=[],j=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).changeHandler=function(e){s.setState(Object(n.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault();var t=s.props.match.params.id;E.a.post("/dealer/updattankmap/".concat(t),s.state).then((function(e){if(console.log(e),s.props.history.push("/#/app/ro-configuration/tankMapList"),200===e.status){var t=e.data.data;t.tank.length>0&&t.tank.map((function(e){O.push({})})),s.setState({tank:t.tank})}else alert("Something went wrong in Dealer Shipform Api")})).catch((function(e){console.log(e.response)}))},s.handleChangeTank=function(e){s.setState({selectedTankOption:e},(function(){return console.log("Option selected:",s.state.selectedTankOption)}));var t=s.state.tank.filter((function(t){if(t._id===e.value)return t}));console.log("@@######filteredProTank",t)},s.handleChangeMapTank=function(e){s.setState({selectedMapTankOption:e},(function(){return console.log("Option selected:",s.state.selectedMapTankOption)}))},s.handleChangeMapTank1=function(e){s.setState({selectedMapTankOption1:e},(function(){return console.log("Option selected:",s.state.selectedMapTankOption1)}))},s.state={tank:"",Product:"",capacity:""},s.submitHandler=s.submitHandler.bind(Object(c.a)(s)),s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;E.a.get("/dealer/getonetank/".concat(t)).then((function(t){console.log(t),e.setState({tank:t.data.data.tank,Product:t.data.data.Product,capacity:t.data.data.capacity})})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(p.a,null,u.a.createElement(m.a,{sm:"12"},u.a.createElement("div",null,u.a.createElement(d.a,{listTag:"div"},u.a.createElement(f.a,{href:"/analyticsDashboard",tag:"a"},"Home"),u.a.createElement(f.a,{href:"/app/ro-configuration/tankmapList",tag:"a"}),u.a.createElement(f.a,{active:!0},"Edit Tank Map"))))),u.a.createElement(h.a,null,u.a.createElement(p.a,{className:"m-2"},u.a.createElement(m.a,null,u.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Tank Map")),u.a.createElement(m.a,null,u.a.createElement(b.a,{className:" btn btn-danger float-right",onClick:function(){return y.a.push("/#/app/ro-configuration/tankMapList")}},"Back"))),u.a.createElement(g.a,null,u.a.createElement(v.a,{className:"m-1",onSubmit:this.submitHandler},u.a.createElement(p.a,null,u.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement("h5",{className:"my-1 text-bold-600"},"Tank"),u.a.createElement(k.a,{type:"text",name:"tank",value:this.state.tank,onChange:this.changeHandler})),u.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement("h5",{className:"my-1 text-bold-600"},"Product"),u.a.createElement(k.a,{type:"select",name:"Product",value:this.state.Product,onChange:this.changeHandler},u.a.createElement("option",{value:"MS"},"MS"),u.a.createElement("option",{value:"HSD"},"Hsd"))),u.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement("h5",{className:"my-1 text-bold-600"},"Capacity"),u.a.createElement(k.a,{type:"select",name:"capacity",value:this.state.capacity,onChange:this.changeHandler},u.a.createElement("option",{value:"10kl"},"10kl"),u.a.createElement("option",{value:"15kl"},"15kl")," ",u.a.createElement("option",{value:"20kl"},"20kl"),u.a.createElement("option",{value:"40kl"},"40kl")," ",u.a.createElement("option",{value:"45kl"},"45kl"),u.a.createElement("option",{value:"80kl"},"80kl")))),u.a.createElement(p.a,null,u.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(b.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update"))))))))}}]),a}(r.Component)},799:function(e,t,a){"use strict";var n=a(40),l=a.n(n).a.create({baseURL:"http://3.108.185.7/nodejs/api"});t.a=l},800:function(e,t,a){"use strict";var n=a(5),l=a(7),s=a(11),c=a(12),i=a(0),o=a.n(i),r=a(1),u=a.n(r),p=a(4),m=a.n(p),d=a(3),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.focus=a.focus.bind(Object(s.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.type,c=e.bsSize,i=e.valid,r=e.invalid,u=e.tag,p=e.addon,h=e.plaintext,b=e.innerRef,g=Object(l.a)(e,f),v=["radio","checkbox"].indexOf(s)>-1,k=new RegExp("\\D","g"),E=u||("select"===s||"textarea"===s?s:"input"),y="form-control";h?(y+="-plaintext",E=u||"input"):"file"===s?y+="-file":"range"===s?y+="-range":v&&(y=p?null:"form-check-input"),g.size&&k.test(g.size)&&(Object(d.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),c=g.size,delete g.size);var O=Object(d.mapToCssModules)(m()(t,r&&"is-invalid",i&&"is-valid",!!c&&"form-control-"+c,y),a);return("input"===E||u&&"function"===typeof u)&&(g.type=s),g.children&&!h&&"select"!==s&&"string"===typeof E&&"select"!==E&&(Object(d.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),o.a.createElement(E,Object(n.a)({},g,{ref:b,className:O,"aria-invalid":r}))},t}(o.a.Component);b.propTypes=h,b.defaultProps={type:"text"},t.a=b},801:function(e,t,a){"use strict";var n=a(5),l=a(7),s=a(11),c=a(12),i=a(0),o=a.n(i),r=a(1),u=a.n(r),p=a(4),m=a.n(p),d=a(3),f=["className","cssModule","inline","tag","innerRef"],h={children:u.a.node,inline:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.submit=a.submit.bind(Object(s.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.inline,c=e.tag,i=e.innerRef,r=Object(l.a)(e,f),u=Object(d.mapToCssModules)(m()(t,!!s&&"form-inline"),a);return o.a.createElement(c,Object(n.a)({},r,{ref:i,className:u}))},t}(i.Component);b.propTypes=h,b.defaultProps={tag:"form"},t.a=b}}]);
//# sourceMappingURL=119.61dbca30.chunk.js.map