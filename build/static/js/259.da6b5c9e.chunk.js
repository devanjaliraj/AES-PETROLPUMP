(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[259],{1947:function(e,a,t){"use strict";t.r(a);var n=t(13),i=t(14),r=t(16),l=t(15),c=t(0),o=t.n(c),d=t(1126),s=t(1124),m=t(1125),u=t(173),f=t(1129),g=t(791),p=t(795),h=t(792),v=t(790),w=t(802),E=t(56),N=t(800),S=t(169),b=t(261),z=t(40),P=t.n(z),D=(t(801),t(798)),y=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"Dealer Name",field:"dealer.dealer_name",filter:!0,width:250,pinned:window.innerWidth>992&&"left",cellRendererFramework:function(e){var a;return o.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},o.a.createElement("span",null,null===(a=e.data.dealer)||void 0===a?void 0:a.dealer_name))}},{headerName:"Mobile",field:"dealer.mobile",filter:!0,width:250,pinned:window.innerWidth>992&&"left",cellRendererFramework:function(e){var a;return o.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},o.a.createElement("span",null,null===(a=e.data.dealer)||void 0===a?void 0:a.mobile))}},{headerName:"Email",field:"dealer.email",filter:!0,width:250,pinned:window.innerWidth>992&&"left",cellRendererFramework:function(e){var a;return o.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},o.a.createElement("span",null,null===(a=e.data.dealer)||void 0===a?void 0:a.email))}},{headerName:"State",field:"dealer.state",filter:!0,width:250,pinned:window.innerWidth>992&&"left",cellRendererFramework:function(e){var a;return o.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},o.a.createElement("span",null,null===(a=e.data.dealer)||void 0===a?void 0:a.state))}},{headerName:"District",field:"dealer.district",filter:!0,width:250,pinned:window.innerWidth>992&&"left",cellRendererFramework:function(e){var a;return o.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},o.a.createElement("span",null,null===(a=e.data.dealer)||void 0===a?void 0:a.district))}},{headerName:"Location",field:"dealer.location",filter:!0,width:250,pinned:window.innerWidth>992&&"left",cellRendererFramework:function(e){var a;return o.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},o.a.createElement("span",null,null===(a=e.data.dealer)||void 0===a?void 0:a.location))}},{headerName:"Descripiton",field:"desc",filter:!0,width:250,pinned:window.innerWidth>992&&"left",cellRendererFramework:function(e){return o.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},o.a.createElement("span",null,e.data.desc))}}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;P.a.get("http://3.108.185.7/nodejs/api/admin/allnotification/").then((function(a){var t=a.data.data;JSON.stringify(t),e.setState({rowData:t})})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,n=a.columnDefs,i=a.defaultColDef;return o.a.createElement(o.a.Fragment,null,o.a.createElement(D.a,{breadCrumbTitle:"Notification",breadCrumbParent:"Forms & Tables",breadCrumbActive:"Notification List"}),o.a.createElement(d.a,{className:"overflow-hidden agGrid-card"},o.a.createElement(s.a,{className:"m-2"},o.a.createElement(m.a,null,o.a.createElement("h1",{sm:"6",className:"float-left"},"Notification List")),o.a.createElement(m.a,null,o.a.createElement(E.b,{render:function(e){var a=e.history;return o.a.createElement(u.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/notification/Addnotification")}},"Add Notification")}}))),o.a.createElement(f.a,{className:"py-0"},null===this.state.rowData?null:o.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},o.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},o.a.createElement("div",{className:"mb-1"},o.a.createElement(g.a,{className:"p-1 ag-dropdown"},o.a.createElement(p.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,o.a.createElement(b.a,{className:"ml-50",size:15})),o.a.createElement(h.a,{right:!0},o.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),o.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),o.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),o.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),o.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},o.a.createElement("div",{className:"table-input mr-1"},o.a.createElement(w.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),o.a.createElement("div",{className:"export-btn"},o.a.createElement(u.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),o.a.createElement(S.a.Consumer,null,(function(a){return o.a.createElement(N.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:i,columnDefs:n,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!0,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})}))))))}}]),t}(o.a.Component);a.default=y}}]);
//# sourceMappingURL=259.da6b5c9e.chunk.js.map