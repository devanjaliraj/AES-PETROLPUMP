(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[118],{1988:function(e,a,t){"use strict";t.r(a);var n=t(73),r=t.n(n),i=t(119),l=t(13),c=t(14),o=t(16),s=t(15),d=t(0),u=t.n(d),m=t(1262),f=t(1263),p=t(1264),g=t(1267),h=t(791),v=t(795),w=t(792),E=t(790),k=t(800),S=t(177),b=t(799),z=t(171),N=t(806),_=t(302),P=t(437),C=t(260),R=(t(21),t(807),t(838),t(57)),y=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"Dealer Name",field:"dealer_name1.dealer_name",width:150,pinned:window.innerWidth>992&&"left",cellRendererFramework:function(e){var a;return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,null===(a=e.data.dealer_name1)||void 0===a?void 0:a.dealer_name))}},{headerName:"Email",field:"dealer_name1.email",width:150,pinned:window.innerWidth>992&&"left",cellRendererFramework:function(e){var a;return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,null===(a=e.data.dealer_name1)||void 0===a?void 0:a.email))}},{headerName:"Name Of Bank ",field:"name_of_bank",filter:!0,width:100,cellRendererFramework:function(e){return u.a.createElement("div",null,u.a.createElement("span",null,e.data.name_of_bank))}},{headerName:"Credit limit of bank",field:"credit_limit_of_bank",filter:!0,width:100,cellRendererFramework:function(e){return u.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},u.a.createElement("span",null,e.data.credit_limit_of_bank))}},{headerName:"Intrest Rates",field:"intrest_rates",filter:!0,width:100,cellRendererFramework:function(e){return u.a.createElement("div",null,u.a.createElement("span",null,e.data.intrest_rates))}},{headerName:"IFSC Code",field:"ifsc_code",filter:!0,width:100,cellRendererFramework:function(e){return u.a.createElement("div",null,u.a.createElement("span",null,e.data.ifsc_code))}},{headerName:"Credit Offer from Bank Valid upto ",field:"cresit_offer",filter:!0,width:100,cellRendererFramework:function(e){return u.a.createElement("div",null,u.a.createElement("span",null,e.data.cresit_offer))}},{headerName:"Documents upload",field:"document_upload",filter:!0,width:100,cellRendererFramework:function(e){return u.a.createElement("div",null,u.a.createElement("span",null,e.data.document_upload))}},{headerName:"Actions",field:"sortorder",width:150,pinned:window.innerWidth>992&&"right",cellRendererFramework:function(a){return u.a.createElement("div",{className:"actions cursor-pointer"},u.a.createElement(R.b,{render:function(e){var t=e.history;return u.a.createElement(_.a,{className:"mr-50",color:"blue",size:20,onClick:function(){return t.push("/app/ro-configuration/editBankForTransaction/".concat(a.data._id))}})}}),")",u.a.createElement(P.a,{size:20,color:"red",onClick:function(){var t=e.gridApi.getSelectedRows();e.runthisfunction(a.data._id),e.gridApi.updateRowData({remove:t})}}))}}]},e.onGridReady=function(a){e.gridApi=a.api,e.gridColumnApi=a.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(a){e.gridApi.setQuickFilter(a)},e.filterSize=function(a){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(a)),e.setState({currenPageSize:a,getPageSize:a}))},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark((function e(){var a=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/dealer/allbank").then((function(e){var t=e.data.data;console.log(t),a.setState({rowData:t})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"runthisfunction",value:function(){var e=Object(i.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.next=3,b.a.get("/dealer/deletebank/".concat(a)).then((function(e){console.log(e)}),(function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,n=a.columnDefs,r=a.defaultColDef;return console.log(t),u.a.createElement(m.a,{className:"app-user-list"},u.a.createElement(f.a,{sm:"12"}),u.a.createElement(f.a,{sm:"12"},u.a.createElement(p.a,null,u.a.createElement(m.a,{className:"m-2"},u.a.createElement(f.a,null,u.a.createElement("h1",{sm:"6",className:"float-left"},"Bank List")),u.a.createElement(f.a,null)),u.a.createElement(g.a,null,null===this.state.rowData?null:u.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},u.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},u.a.createElement("div",{className:"mb-1"},u.a.createElement(h.a,{className:"p-1 ag-dropdown"},u.a.createElement(v.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,u.a.createElement(C.a,{className:"ml-50",size:15})),u.a.createElement(w.a,{right:!0},u.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),u.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),u.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),u.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),u.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},u.a.createElement("div",{className:"table-input mr-1"},u.a.createElement(k.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),u.a.createElement("div",{className:"export-btn"},u.a.createElement(S.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),u.a.createElement(z.a.Consumer,null,(function(a){return u.a.createElement(N.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:r,columnDefs:n,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})})))))))}}]),t}(u.a.Component);a.default=y},799:function(e,a,t){"use strict";var n=t(40),r=t.n(n).a.create({baseURL:"http://3.108.185.7/nodejs/api"});a.a=r},838:function(e,a,t){}}]);
//# sourceMappingURL=118.e1a1d1d1.chunk.js.map