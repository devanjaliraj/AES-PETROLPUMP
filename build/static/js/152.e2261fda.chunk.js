(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[152],{1973:function(e,a,t){"use strict";t.r(a);var n=t(13),l=t(14),o=t(16),s=t(15),c=t(0),i=t.n(c),p=t(1268),r=t(1269),m=t(1270),u=t(1271),d=t(802),h=t(1266),f=t(1267),g=t(177),b=t(40),O=t.n(b),y=t(875),z=[],_=[],v=[],N=[],k=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).handleChangeTank=function(e){l.setState({selectedTankOption:e},(function(){return console.log("Option selected:",l.state.selectedTankOption)}));var a=l.state.tank_map.filter((function(a){if(a._id===e.value)return a}));console.log("@@######filteredProTank",a);l.state.tank_map.filter((function(a){if(a._id===e.value)return a}))},l.handleChangeMPD=function(e){var a=[];l.setState({selectedMpdOption:e},(function(){return console.log("Option selected:",l.state.selectedMpdOption)}));var t=l.state.mpd_map.filter((function(a){if(a._id===e.value)return a})),n={};console.log("filteredBay",t),t.length>0&&(t[0].bay_map.map((function(e){n={value:e,label:e},a.push(n)})),l.setState({bayOptions:a}))},l.handleChangeBay=function(e){l.setState({selectedBayOptions:e},(function(){return console.log("Option selected:",l.state.selectedBayOptions)}))},l.handleChangeBay=function(e){var a=[];l.setState({selectedBayOptions:e},(function(){return console.log("Option selected:",l.state.selectedBayOptions)}));var t=l.state.bay_map.filter((function(a){if(a._id===e.value)return a})),n={};t.length>0&&(t[0].nozzle_map.map((function(e){n={value:e._id,label:e},a.push(n)})),l.setState({nozzleToEachBayOptions:a}))},l.handleChangeNozzleToEachBay=function(e){l.setState({selectedNozzleToEachBayOptions:e},(function(){return console.log("Option selected:",l.state.selectedNozzleToEachBayOptions)}))},l.handleChangeNozzle=function(e){var a=[];l.setState({selectedNozzleOptions:e},(function(){return console.log("Option selected:",l.state.selectedNozzleOptions)}));var t=l.state.nozzle_map.filter((function(a){if(a._id===e.value)return a})),n={};t.length>0&&(t[0].tank_map.map((function(e){n={value:e._id,label:e},a.push(n)})),l.setState({tankToNozzlesOptions:a}))},l.handleChangeTankToNozzle=function(e){l.setState({selectedTankToNozzlesOptions:e},(function(){return console.log("Option selected:",l.state.selectedTankToNozzlesOptions)}))},l.state={dealerId:"",bay_map:[],mpd_map:[],nozzle_map:[],tank_map:[],product_map_tank:[],tankProductOptions:[],selectedTankOption:null,selectedMapTankOption:null,selectedTankCapacity:null,tankCapacityOptions:[],selectedMpdOption:null,selectedBayOptions:null,selectedBayToMpdOptions:null,bayToMpdOptions:[],nozzleToEachBayOptions:[],selectedNozzleToEachBayOptions:null,selectedNozzleOptions:null,tankToNozzlesOptions:[],selectedTankToNozzlesOptions:null,tankProductOptionsNew:[],tankCapacityOptionsNew:[]},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id.id;this.setState({dealerId:a}),O.a.post("http://3.108.185.7/nodejs/api/dealer/addeditadvancedealershipform/".concat(this.props.match.params.id)).then((function(a){if(console.log(a),console.log("datadatadata @@@@@@@@@@@@###",a),200===a.status){var t=a.data.data;if(t.tank_map.length>0&&t.tank_map.map((function(e){var a={value:e._id,label:e.tank_number};z.push(a)})),t.mpd_map.length>0){var n={};t.mpd_map.map((function(e){n={value:e._id,label:e.mpd_number},_.push(n)}))}t.bay_map.length>0&&t.bay_map.map((function(e){var a={value:e._id,label:e.bay_number};v.push(a)})),t.nozzle_map.length>0&&t.nozzle_map.map((function(e){var a={value:e._id,label:e.nozzle_number};N.push(a)})),e.setState({bay_map:t.bay_map,mpd_map:t.mpd_map,nozzle_map:t.nozzle_map,tank_map:t.tank_map})}else alert("Something went wrong in Dealer Shipform Api")})).catch((function(e){console.log(e.response)}));var t=[];O.a.get("http://3.108.185.7/nodejs/api/dealer/allproduct").then((function(a){if(200===a.status){var n=a.data.data;console.log("datadatadata allproduct@@@@@@@@@@@@###",n.length);var l={};n.length>0&&(n.map((function(e){l={value:e._id,label:e.product},t.push(l)})),e.setState({tankProductOptionsNew:t}))}else alert("Something went wrong in tank product Api")})).catch((function(e){console.log(e.response)}));var n=[];O.a.get("http://3.108.185.7/nodejs/api/dealer/allcapacity").then((function(a){if(200===a.status){var t=a.data.data;console.log("datadatadata allcapacity@@@@@@@@@@@@###",t);var l={};t.length>0&&(t.map((function(e){l={value:e._id,label:e.capacity},n.push(l)})),e.setState({tankCapacityOptionsNew:n}))}else alert("Something went wrong in tank capacity Api")})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){var e=this.state,a=e.selectedTankOption,t=(e.tankProductOptions,e.tankCapacityOptions,e.selectedMpdOption),n=e.selectedBayOptions,l=e.selectedNozzleOptions,o=e.tankProductOptionsNew,s=e.tankCapacityOptionsNew;return i.a.createElement(p.a,null,i.a.createElement(r.a,null,i.a.createElement(m.a,null,"Outlet")),i.a.createElement(u.a,null,i.a.createElement(d.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(h.a,null,i.a.createElement(f.a,{md:"6",sm:"12"},i.a.createElement("h5",{className:"my-1 text-bold-600"},"Select Tank"),i.a.createElement(y.a,{className:"React",classNamePrefix:"select",name:"tank_number",type:"text",defaultValue:z[1],options:z,value:a,onChange:this.handleChangeTank,menuPlacement:"auto",maxMenuHeight:220})),i.a.createElement(f.a,{md:"6",sm:"12"},i.a.createElement("h5",{className:"my-1 text-bold-600"},"Product Mapped to Tank"),i.a.createElement(y.a,{className:"React",classNamePrefix:"select",name:"product_map_tank",isClearable:!0,defaultValue:o[1],options:o,value:o[1],menuPlacement:"auto",maxMenuHeight:220})),i.a.createElement(f.a,{md:"6",sm:"12"},i.a.createElement("h5",{className:"my-1 text-bold-600"},"Capacity"),i.a.createElement(y.a,{className:"React",classNamePrefix:"select",onChange:this.handleChangeCap,name:"capacity_litr",isClearable:!0,defaultValue:s[1],options:s,value:s[1],menuPlacement:"auto",maxMenuHeight:220})),i.a.createElement(f.a,{md:"6",sm:"12"},i.a.createElement("h5",{className:"my-1 text-bold-600"},"Select Mpd"),i.a.createElement(y.a,{className:"React",classNamePrefix:"select",name:"mpd",defaultValue:_[1],options:_,value:t,onChange:this.handleChangeMPD,isClearable:!0})),i.a.createElement(f.a,{md:"6",sm:"12"},i.a.createElement("h5",{className:"my-1 text-bold-600"},"Select Bay"),i.a.createElement(y.a,{className:"React",classNamePrefix:"select",name:"bay",isClearable:!0,defaultValue:n,options:v,onChange:this.handleChangeBay,menuPlacement:"auto",maxMenuHeight:220})),i.a.createElement(f.a,{md:"6",sm:"12"},i.a.createElement("h5",{className:"my-1 text-bold-600"},"Select Nozzle"),i.a.createElement(y.a,{className:"React",classNamePrefix:"select",name:"clear",isClearable:!0,defaultValue:l,options:N,onChange:this.handleChangeNozzle,menuPlacement:"auto",maxMenuHeight:220}))),i.a.createElement(h.a,null,i.a.createElement(f.a,{lg:"6",md:"6",sm:"6",className:"mb-2",style:{marginTop:"10px"}},i.a.createElement(g.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Submit"))))))}}]),t}(i.a.Component);a.default=k},802:function(e,a,t){"use strict";var n=t(5),l=t(7),o=t(11),s=t(12),c=t(0),i=t.n(c),p=t(1),r=t.n(p),m=t(4),u=t.n(m),d=t(3),h=["className","cssModule","inline","tag","innerRef"],f={children:r.a.node,inline:r.a.bool,tag:d.tagPropType,innerRef:r.a.oneOfType([r.a.object,r.a.func,r.a.string]),className:r.a.string,cssModule:r.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(o.a)(t)),t.submit=t.submit.bind(Object(o.a)(t)),t}Object(s.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,o=e.inline,s=e.tag,c=e.innerRef,p=Object(l.a)(e,h),r=Object(d.mapToCssModules)(u()(a,!!o&&"form-inline"),t);return i.a.createElement(s,Object(n.a)({},p,{ref:c,className:r}))},a}(c.Component);g.propTypes=f,g.defaultProps={tag:"form"},a.a=g}}]);
//# sourceMappingURL=152.e2261fda.chunk.js.map