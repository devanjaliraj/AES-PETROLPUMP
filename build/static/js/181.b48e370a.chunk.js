(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[181],{1959:function(e,a,t){"use strict";t.r(a);var r=t(71),n=t.n(r),i=t(117),l=t(13),c=t(14),s=t(16),o=t(15),d=t(0),m=t.n(d),u=t(1261),g=t(1259),p=t(1260),f=t(1264),h=t(789),v=t(793),w=t(790),E=t(788),S=t(798),N=t(174),z=t(795),b=t(56),y=t(799),P=t(168),D=t(304),k=t(259),x=(t(800),function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=a.call.apply(a,[this].concat(n))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"Dealer Name",field:"dealer_name",width:250,pinned:window.innerWidth>992&&"left",cellRendererFramework:function(e){return m.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},m.a.createElement("span",null,e.data.dealer_name))}},{headerName:"Mobile",field:"mobile",width:150,cellRendererFramework:function(e){return m.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},m.a.createElement("span",null,e.data.mobile))}},{headerName:"Email",field:"email",width:250,cellRendererFramework:function(e){return m.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},m.a.createElement("span",null,e.data.email))}},{headerName:"Master Oil Company",field:"master_oil_company.name",width:180,cellRendererFramework:function(e){var a;return m.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},m.a.createElement("span",null,null===(a=e.data.master_oil_company)||void 0===a?void 0:a.name))}},{headerName:"State",field:"state",width:125,cellRendererFramework:function(e){return m.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},m.a.createElement("span",null,e.data.state))}},{headerName:"District",field:"district",width:150,cellRendererFramework:function(e){return m.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},m.a.createElement("span",null,e.data.district))}},{headerName:"Actions",field:"sortorder",width:110,pinned:window.innerWidth>992&&"right",cellRendererFramework:function(e){return m.a.createElement("div",{className:"actions cursor-pointer"},m.a.createElement(b.b,{render:function(a){var t=a.history;return m.a.createElement(D.a,{className:"mr-30",size:"25px",color:"green",onClick:function(){return t.push("/app/shiftManagement/creditGivenList/".concat(e.data._id))}})}}))}}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(n.a.mark((function e(){var a=this;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.a.get("/dealer/alldealers").then((function(e){var t=e.data.data;console.log(t),a.setState({rowData:t})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,r=a.columnDefs,n=a.defaultColDef;return m.a.createElement(m.a.Fragment,null,m.a.createElement(u.a,{className:"overflow-hidden agGrid-card"},m.a.createElement(g.a,{className:"m-1"},m.a.createElement(p.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"List of Dealers for Sales Figure"))),m.a.createElement(f.a,{className:"py-0"},null===this.state.rowData?null:m.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},m.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},m.a.createElement("div",{className:"mb-1"},m.a.createElement(h.a,{className:"p-1 ag-dropdown"},m.a.createElement(v.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,m.a.createElement(k.a,{className:"ml-50",size:15})),m.a.createElement(w.a,{right:!0},m.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),m.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),m.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),m.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),m.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},m.a.createElement("div",{className:"table-input mr-1"},m.a.createElement(S.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),m.a.createElement("div",{className:"export-btn"},m.a.createElement(N.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),m.a.createElement(P.a.Consumer,null,(function(a){return m.a.createElement(y.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:n,columnDefs:r,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})}))))))}}]),t}(m.a.Component));a.default=x},795:function(e,a,t){"use strict";var r=t(40),n=t.n(r).a.create({baseURL:"http://3.108.185.7/nodejs/api"});a.a=n}}]);
//# sourceMappingURL=181.b48e370a.chunk.js.map