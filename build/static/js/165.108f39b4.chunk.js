(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[165],{1980:function(e,a,t){"use strict";t.r(a);var n=t(73),r=t.n(n),i=t(119),l=t(13),c=t(14),o=t(16),s=t(15),d=t(0),u=t.n(d),m=t(1264),p=t(1267),g=t(791),f=t(795),h=t(792),v=t(790),w=t(800),z=t(177),E=t(806),S=t(171),b=t(260),N=t(799),k=(t(807),t(797)),P=t(302),y=t(437),D=t(21),C=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"Nozzle",field:"nozzle",width:120,pinned:window.innerWidth>992&&"left",cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,e.data.nozzle))}},{headerName:"MPD",field:"mpd",width:120,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,e.data.mpd))}},{headerName:"Bay",field:"bay",width:120,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,e.data.bay))}},{headerName:"Tank",field:"tank_map.tank",width:120,cellRendererFramework:function(e){var a;return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,null===(a=e.data.tank_map)||void 0===a?void 0:a.tank))}},{headerName:"Actions",field:"sortorder",width:120,pinned:window.innerWidth>992&&"right",cellRendererFramework:function(a){return u.a.createElement("div",{className:"actions cursor-pointer"},u.a.createElement(P.a,{className:"mr-50",size:"25px",color:"blue",onClick:function(){return D.a.push("/#/app/ro-configuration/EditNozzleMap/".concat(a.data._id))}}),u.a.createElement(y.a,{className:"mr-50",size:"25px",color:"red",onClick:function(){var t=e.gridApi.getSelectedRows();e.runthisfunction(a.data._id),e.gridApi.updateRowData({remove:t})}}))}}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark((function e(){var a=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("/dealer/allnozzle").then((function(e){var t=e.data.data;console.log(t),a.setState({rowData:t})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,n=a.columnDefs,r=a.defaultColDef;return u.a.createElement(u.a.Fragment,null,u.a.createElement(k.a,{breadCrumbTitle:"Dealer List"}),u.a.createElement(m.a,{className:"overflow-hidden agGrid-card"},u.a.createElement(p.a,{className:"py-0"},null===this.state.rowData?null:u.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},u.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},u.a.createElement("div",{className:"mb-1"},u.a.createElement(g.a,{className:"p-1 ag-dropdown"},u.a.createElement(f.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,u.a.createElement(b.a,{className:"ml-50",size:15})),u.a.createElement(h.a,{right:!0},u.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),u.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),u.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),u.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),u.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},u.a.createElement("div",{className:"table-input mr-1"},u.a.createElement(w.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),u.a.createElement("div",{className:"export-btn"},u.a.createElement(z.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),u.a.createElement(S.a.Consumer,null,(function(a){return u.a.createElement(E.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:r,columnDefs:n,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!0,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})}))))))}}]),t}(u.a.Component);a.default=C},799:function(e,a,t){"use strict";var n=t(40),r=t.n(n).a.create({baseURL:"http://3.108.185.7/nodejs/api"});a.a=r}}]);
//# sourceMappingURL=165.108f39b4.chunk.js.map