(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[195],{1995:function(e,a,t){"use strict";t.r(a);var r=t(71),n=t.n(r),i=t(117),l=t(13),c=t(14),d=t(16),o=t(15),s=t(0),u=t.n(s),m=t(1126),p=t(1129),f=t(791),g=t(795),h=t(792),E=t(790),w=t(802),S=t(172),v=t(799),_=t(169),N=t(301),D=t(437),P=t(259),b=t(797),z=t(56),k=(t(800),t(798)),x=function(e){Object(d.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=a.call.apply(a,[this].concat(n))).state={rowData:null,paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"Due Stamping",field:"Due_Date_of_Stamping",pinned:window.innerWidth>992&&"left",width:175,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,e.data.Due_Date_of_Stamping))}},{headerName:"Upload 5l",field:"Upload_5l",cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,e.data.Upload_5l))},width:250},{headerName:"Due PESO",field:"Due_Date_of_PESO",cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,e.data.Due_Date_of_PESO))},width:250},{headerName:"Upload PESO",field:"Upload_PESO",cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,e.data.Upload_PESO))},width:150},{headerName:"Scale",field:"scale",cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,e.data.scale))},width:150},{headerName:"Upload Hydrometer",field:"Upload_Hydrometer",cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,e.data.Upload_Hydrometer))},width:125},{headerName:"calibration_Due_date",field:"calibration_Due_date",cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,e.data.calibration_Due_date))},width:140},{headerName:"uplodad_thermameter",field:"uplodad_thermameter",cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,e.data.uplodad_thermameter))},width:140},{headerName:"Uplodad air Gauage",field:"uplodad_air_gauage",cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,e.data.uplodad_air_gauage))},width:140},{headerName:"DPSL Upload",field:"DPSL_upload",cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,e.data.DPSL_upload))},width:140},{headerName:"Due DPSL",field:"due_date_DPSL",cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,e.data.due_date_DPSL))},width:140},{headerName:"Due Outher",field:"due_date_outher",cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,e.data.due_date_outher))},width:140},{headerName:"Upload Outher",field:"upload_outher",cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,e.data.upload_outher))},width:140},{headerName:"Actions",field:"sortorder",width:150,pinned:window.innerWidth>992&&"right",cellRendererFramework:function(a){return u.a.createElement("div",{className:"actions cursor-pointer"},u.a.createElement(z.b,{render:function(e){e.history;return u.a.createElement(N.a,{className:"mr-50",size:"25px",color:"blue"})}}),u.a.createElement(D.a,{className:"mr-50",size:"25px",color:"red",onClick:function(){var t=e.gridApi.getSelectedRows();e.runthisfunction(a.data._id),e.gridApi.updateRowData({remove:t})}}))}}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;b.a.get("/dealer/allcan5lFMApp/".concat(a)).then((function(a){var t=a.data.data;JSON.stringify(t),e.setState({rowData:t})}))}},{key:"runthisfunction",value:function(){var e=Object(i.a)(n.a.mark((function e(a){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.next=3,b.a.get("/dealer/deletecan5lFM/".concat(a)).then((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,r=a.columnDefs,n=a.defaultColDef;return u.a.createElement(u.a.Fragment,null,u.a.createElement(k.a,{breadCrumbTitle:"Statutory Certificate Management List"}),u.a.createElement(m.a,{className:"overflow-hidden agGrid-card"},u.a.createElement(p.a,{className:"py-0"},null===this.state.rowData?null:u.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},u.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},u.a.createElement("div",{className:"mb-1"},u.a.createElement(f.a,{className:"p-1 ag-dropdown"},u.a.createElement(g.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,u.a.createElement(P.a,{className:"ml-50",size:15})),u.a.createElement(h.a,{right:!0},u.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),u.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),u.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),u.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),u.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},u.a.createElement("div",{className:"table-input mr-1"},u.a.createElement(w.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),u.a.createElement("div",{className:"export-btn"},u.a.createElement(S.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),u.a.createElement(_.a.Consumer,null,(function(a){return u.a.createElement(v.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:n,columnDefs:r,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})}))))))}}]),t}(u.a.Component);a.default=x},797:function(e,a,t){"use strict";var r=t(40),n=t.n(r).a.create({baseURL:"http://15.206.122.110:4000/api/"});a.a=n}}]);
//# sourceMappingURL=195.af3be3b5.chunk.js.map