(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[200],{2014:function(e,a,t){"use strict";t.r(a);var i=t(13),n=t(14),r=t(16),l=t(15),s=t(0),c=t.n(s),o=t(1262),d=t(1265),u=t(789),m=t(793),g=t(790),p=t(788),f=t(798),h=t(174),S=t(799),w=t(168),v=t(304),z=t(301),E=t(436),b=t(259),P=t(40),y=t.n(P),N=(t(800),t(795)),C=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={rowData:null,paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"Status",field:"status",filter:!1,width:250,pinned:window.innerWidth>992&&"left"},{headerName:"Expenses",field:"expenses",width:175,filter:!1,checkboxSelection:!1,headerCheckboxSelectionFilteredOnly:!1,headerCheckboxSelection:!1},{headerName:"Payment Mode",field:"payment mode",filter:!1,width:250},{headerName:"Bank Deposites",field:"bank deposites",filter:!1,width:175},{headerName:"Actions",field:"sortorder",width:150,cellRendererFramework:function(a){return c.a.createElement("div",{className:"actions cursor-pointer"},c.a.createElement(v.a,{className:"mr-50",size:"25px",color:"green"}),c.a.createElement(z.a,{className:"mr-50",size:"25px",color:"blue"}),c.a.createElement(E.a,{className:"mr-50",size:"25px",color:"red",onClick:function(){var t=e.gridApi.getSelectedRows();e.runthisfunction(a.data._id),e.gridApi.updateRowData({remove:t})}}))}}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.a.get("/api/aggrid/data").then((function(a){var t=a.data.data;JSON.stringify(t),e.setState({rowData:t})}))}},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,i=a.columnDefs,n=a.defaultColDef;return c.a.createElement(c.a.Fragment,null,c.a.createElement(N.a,{breadCrumbTitle:"Cash Management"}),c.a.createElement(o.a,{className:"overflow-hidden agGrid-card"},c.a.createElement(d.a,{className:"py-0"},null===this.state.rowData?null:c.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},c.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},c.a.createElement("div",{className:"mb-1"},c.a.createElement(u.a,{className:"p-1 ag-dropdown"},c.a.createElement(m.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,c.a.createElement(b.a,{className:"ml-50",size:15})),c.a.createElement(g.a,{right:!0},c.a.createElement(p.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),c.a.createElement(p.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),c.a.createElement(p.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),c.a.createElement(p.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),c.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},c.a.createElement("div",{className:"table-input mr-1"},c.a.createElement(f.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),c.a.createElement("div",{className:"export-btn"},c.a.createElement(h.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),c.a.createElement(w.a.Consumer,null,(function(a){return c.a.createElement(S.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:n,columnDefs:i,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!0,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})}))))))}}]),t}(c.a.Component);a.default=C}}]);
//# sourceMappingURL=200.d843cb9b.chunk.js.map