(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[187],{1967:function(e,a,t){"use strict";t.r(a);var n=t(71),r=t.n(n),i=t(117),l=t(13),c=t(14),o=t(16),d=t(15),s=t(0),m=t.n(s),u=t(1261),f=t(1259),g=t(1260),p=t(1264),h=t(791),v=t(795),w=t(792),E=t(790),_=t(802),N=t(175),S=t(800),z=t(169),y=t(437),k=t(260),b=t(797),x=(t(801),function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={rowData:null,paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"Dealer Name",field:"dealer_Id.dealer_name",width:200,pinned:window.innerWidth>992&&"left",cellRendererFramework:function(e){var a;return m.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},m.a.createElement("span",null,null===(a=e.data.dealer_Id)||void 0===a?void 0:a.dealer_name))}},{headerName:"Name of Customer",field:"name_of_customer.name_of_customer",width:200,cellRendererFramework:function(e){var a;return m.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},m.a.createElement("span",null,null===(a=e.data.name_of_customer)||void 0===a?void 0:a.name_of_customer))}},{headerName:"Dsm Name",field:"dsm_name.dsm_name",cellRendererFramework:function(e){var a;return m.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},m.a.createElement("span",null,null===(a=e.data.dsm_name)||void 0===a?void 0:a.dsm_name))},width:150},{headerName:" Date",field:"date",width:175,cellRendererFramework:function(e){return m.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},m.a.createElement("span",null,e.data.date))}},{headerName:"Vehicle No",field:"vehicle_no",width:250,cellRendererFramework:function(e){return m.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},m.a.createElement("span",null,e.data.vehicle_no))}},{headerName:"Credit for",field:"credit_for",width:250,cellRendererFramework:function(e){return m.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},m.a.createElement("span",null,e.data.credit_for))}},{headerName:"Opening Balance",field:"opening_balance",width:150,cellRendererFramework:function(e){return m.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},m.a.createElement("span",null,e.data.opening_balance))}},{headerName:"Credit Limit",field:"credit_limit",cellRendererFramework:function(e){return m.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},m.a.createElement("span",null,e.data.credit_limit))},width:150},{headerName:"payment_overdue_as_on_date",field:"payment_overdue_as_on_date",cellRendererFramework:function(e){return m.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},m.a.createElement("span",null,e.data.payment_overdue_as_on_date))},width:150},{headerName:"credit_given_today_amount",field:"credit_given_today_amount",cellRendererFramework:function(e){return m.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},m.a.createElement("span",null,e.data.credit_given_today_amount))},width:150},{headerName:"Credit Setalment",field:"credit_setalment",cellRendererFramework:function(e){return m.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},m.a.createElement("span",null,e.data.credit_setalment))},width:150},{headerName:"Actions",field:"sortorder",width:150,pinned:window.innerWidth>992&&"right",cellRendererFramework:function(a){return m.a.createElement("div",{className:"actions cursor-pointer"},m.a.createElement(y.a,{className:"mr-50",size:"25px",color:"red",onClick:function(){var t=e.gridApi.getSelectedRows();e.runthisfunction(a.data._id),e.gridApi.updateRowData({remove:t})}}))}}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;b.a.get("/dealer/allcreditgivenApp/".concat(a)).then((function(a){var t=a.data.data;JSON.stringify(t),e.setState({rowData:t})}))}},{key:"runthisfunction",value:function(){var e=Object(i.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.next=3,b.a.get("/dealer/deletecreditgiven/".concat(a)).then((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,n=a.columnDefs,r=a.defaultColDef;return m.a.createElement(m.a.Fragment,null,m.a.createElement(u.a,{className:"overflow-hidden agGrid-card"},m.a.createElement(f.a,{className:"m-1"},m.a.createElement(g.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Credit Given To List"))),m.a.createElement(p.a,{className:"py-0"},null===this.state.rowData?null:m.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},m.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},m.a.createElement("div",{className:"mb-1"},m.a.createElement(h.a,{className:"p-1 ag-dropdown"},m.a.createElement(v.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,m.a.createElement(k.a,{className:"ml-50",size:15})),m.a.createElement(w.a,{right:!0},m.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),m.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),m.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),m.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),m.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},m.a.createElement("div",{className:"table-input mr-1"},m.a.createElement(_.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),m.a.createElement("div",{className:"export-btn"},m.a.createElement(N.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),m.a.createElement(z.a.Consumer,null,(function(a){return m.a.createElement(S.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:r,columnDefs:n,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})}))))))}}]),t}(m.a.Component));a.default=x},797:function(e,a,t){"use strict";var n=t(40),r=t.n(n).a.create({baseURL:"http://3.108.185.7/nodejs/api"});a.a=r}}]);
//# sourceMappingURL=187.866e4a68.chunk.js.map