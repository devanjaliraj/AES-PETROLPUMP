(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[173],{1997:function(e,a,t){"use strict";t.r(a);var r=t(73),n=t.n(r),i=t(119),l=t(13),c=t(14),o=t(16),s=t(15),u=t(0),d=t.n(u),m=t(177),p=t(1264),f=t(1267),g=t(791),h=t(795),v=t(792),w=t(790),E=t(800),S=t(798),b=t(804),z=t(171),N=t(302),y=t(437),k=t(260),x=(t(805),t(797)),D=t(57),P=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=a.call.apply(a,[this].concat(n))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"Dealer Name",field:"dealer_name",width:140,pinned:window.innerWidth>992&&"left",cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,e.data.dealer_name))}},{headerName:"Mobile",field:"mobile",width:140,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,e.data.mobile))}},{headerName:"Email",field:"email",width:140,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,e.data.email))}},{headerName:"Master Oil Company",field:"master_oil_company.name",width:140,cellRendererFramework:function(e){var a;return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,null===(a=e.data.master_oil_company)||void 0===a?void 0:a.name))}},{headerName:"State",field:"state",width:140,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,e.data.state))}},{headerName:"District",field:"district",width:140,cellRendererFramework:function(e){return d.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},d.a.createElement("span",null,e.data.district))}},{headerName:"Actions",field:"sortorder",width:300,cellRendererFramework:function(a){return d.a.createElement("div",{className:"actions cursor-pointer"},d.a.createElement(D.b,{render:function(e){var t=e.history;return d.a.createElement(m.a,{className:"mr-50",size:"25px",color:"green",onClick:function(){return t.push("/app/ro-configuration/nozzleList/".concat(a.data._id))}},"NOZZLE")}}),d.a.createElement(D.b,{render:function(e){var t=e.history;return d.a.createElement(N.a,{className:"mr-50",size:"25px",color:"blue",onClick:function(){return t.push("/app/ro-configuration/basicDetails/".concat(a.data._id))}})}}),d.a.createElement(y.a,{className:"mr-50",size:"25px",color:"red",onClick:function(){var t=e.gridApi.getSelectedRows();e.runthisfunction(a.data._id),e.gridApi.updateRowData({remove:t})}}))}}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(n.a.mark((function e(){var a=this;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("/dealer/alldealers").then((function(e){var t=e.data.data;console.log(t),a.setState({rowData:t})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"runthisfunction",value:function(){var e=Object(i.a)(n.a.mark((function e(a){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.next=3,S.a.get("/dealer/deletedealershipform/".concat(a)).then((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,r=a.columnDefs,n=a.defaultColDef;return d.a.createElement(d.a.Fragment,null,d.a.createElement(x.a,{breadCrumbTitle:"Basic Detail List"}),d.a.createElement(p.a,{className:"overflow-hidden agGrid-card"},d.a.createElement(f.a,{className:"py-0"},null===this.state.rowData?null:d.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},d.a.createElement("div",{className:"mb-1"},d.a.createElement(g.a,{className:"p-1 ag-dropdown"},d.a.createElement(h.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,d.a.createElement(k.a,{className:"ml-50",size:15})),d.a.createElement(v.a,{right:!0},d.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),d.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),d.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),d.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),d.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},d.a.createElement("div",{className:"table-input mr-1"},d.a.createElement(E.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),d.a.createElement("div",{className:"export-btn"},d.a.createElement(m.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),d.a.createElement(z.a.Consumer,null,(function(a){return d.a.createElement(b.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:n,columnDefs:r,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!0,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})}))))))}}]),t}(d.a.Component);a.default=P},798:function(e,a,t){"use strict";var r=t(41),n=t.n(r).a.create({baseURL:"http://3.108.185.7/nodejs/api"});a.a=n}}]);
//# sourceMappingURL=173.a18e09f8.chunk.js.map