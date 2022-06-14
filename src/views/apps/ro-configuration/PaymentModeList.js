import React from "react";
import {
  Row, 
  Col,
  Card,
  CardBody,
  Input,
  Button,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import { AgGridReact } from "ag-grid-react";
import { ContextLayout } from "../../../utility/context/Layout";
import { ChevronDown } from "react-feather";
import axiosConfig from "../../../axiosConfig";
import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
// import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import { Trash2, Edit } from "react-feather";
// import { history } from "../../../history";
import { Route } from "react-router-dom";
class PaymentModeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      rowData: [],
      defaultColDef: {
        sortable: true,
        editable: true,
        resizable: true,
        suppressMenu: true,
      },
      columnDefs: [
        {
          headerName: "Select Bank",
          field: "select_bank.name_of_bank",
          width: 140,
          cellRendererFramework: (params) => {
            return (
              <div className="d-flex justify-content-center">
                <span>{params.data.select_bank?.name_of_bank}</span>
              </div>
            );
          },
        },
        {
          headerName: "Select Mode",
          field: "select_mode",
          width: 140,
          cellRendererFramework: (params) => {
            return (
              <div className="d-flex align-items-center cursor-pointer">
                <span>{params.data.select_mode}</span>
              </div>
            );
          },
        },

        {
          headerName: "Settlement Day",
          field: "settlement_day",
          width: 140,
          cellRendererFramework: (params) => {
            return (
              <div className="d-flex align-items-center cursor-pointer">
                <span>{params.data.settlement_day}</span>
              </div>
            );
          },
        },
        {
          headerName: "Actions",
          field: "sortorder",
          width: 140,
          cellRendererFramework: (params) => {
            return (
              <div className="actions cursor-pointer">
                {/* <Route
                  render={({ history }) => (
                    <Eye
                      className="mr-50"
                      size="25px"
                      color="green"
                      onClick={() =>
                        history.push(
                          `/app/ro-configuration/paymentModeList/${params.data.dealer_id._id}`
                        )
                      }
                    />
                  )}
                /> */}
                <Route
                  render={({ history }) => (
                    <Edit
                      className="mr-50"
                      size="25px"
                      color="blue"
                      onClick={() =>
                        history.push(
                          `/app/ro-configuration/paymentModeAvalable/${params.data._id}`
                        )
                      }
                    />
                  )}
                />
                <Trash2
                  className="mr-50"
                  size="25px"
                  color="red"
                  onClick={() => {
                    let selectedData = this.gridApi.getSelectedRows();
                    this.runthisfunction(params.data._id);
                    this.gridApi.updateRowData({ remove: selectedData });
                  }}
                />
              </div>
            );
          },
        },
      ],
    };
  }
  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/dealer/allpaymentApp/${id}`)
      .then((response) => {
        console.log(response);
        this.setState({
      
        });
        const rowData = response.data.data;
        console.log(rowData);
        this.setState({ rowData });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  render() {
    const { rowData, columnDefs, defaultColDef } = this.state;
    return (
      <React.Fragment>
        <div>
          <Card className="overflow-hidden agGrid-card">
          <Row className="m-1">
            <Col>
              <h1 col-sm-6 className="float-left">
                 Payment Mode Avalable
              </h1>
            </Col>
          </Row>
            <CardBody className="py-0">
              {this.state.rowData === null ? null : (
                <div className="ag-theme-material w-100 my-2 ag-grid-table">
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="mb-1">
                      <UncontrolledDropdown className="p-1 ag-dropdown">
                        <DropdownToggle tag="div">
                          {this.gridApi
                            ? this.state.currenPageSize
                            : "" * this.state.getPageSize -
                              (this.state.getPageSize - 1)}{" "}
                          -{" "}
                          {this.state.rowData.length -
                            this.state.currenPageSize * this.state.getPageSize >
                          0
                            ? this.state.currenPageSize * this.state.getPageSize
                            : this.state.rowData.length}{" "}
                          of {this.state.rowData.length}
                          <ChevronDown className="ml-50" size={15} />
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(20)}
                          >
                            20
                          </DropdownItem>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(50)}
                          >
                            50
                          </DropdownItem>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(100)}
                          >
                            100
                          </DropdownItem>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(134)}
                          >
                            134
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between mb-1">
                      <div className="table-input mr-1">
                        <Input
                          placeholder="search..."
                          onChange={(e) =>
                            this.updateSearchQuery(e.target.value)
                          }
                          value={this.state.value}
                        />
                      </div>
                      <div className="export-btn">
                        <Button.Ripple
                          color="primary"
                          onClick={() => this.gridApi.exportDataAsCsv()}
                        >
                          Export as CSV
                        </Button.Ripple>
                      </div>
                    </div>
                  </div>
                  <ContextLayout.Consumer>
                    {(context) => (
                      <AgGridReact
                        gridOptions={{}}
                        rowSelection="multiple"
                        defaultColDef={defaultColDef}
                        columnDefs={columnDefs}
                        rowData={rowData}
                        onGridReady={this.onGridReady}
                        colResizeDefault={"shift"}
                        animateRows={true}
                        floatingFilter={false}
                        pagination={true}
                        paginationPageSize={this.state.paginationPageSize}
                        pivotPanelShow="always"
                        enableRtl={context.state.direction === "rtl"}
                      />
                    )}
                  </ContextLayout.Consumer>
                </div>
              )}
            </CardBody>
          </Card>
        </div>
      </React.Fragment>
    );
  }
}
export default PaymentModeList;

// import React from "react";
// import {
//   Card,
//   CardBody,
//   Input,
//   Button,
//   UncontrolledDropdown,
//   DropdownMenu,
//   DropdownItem,
//   DropdownToggle,
// } from "reactstrap";
// import axiosConfig from "../../../axiosConfig";
// // import { history } from "../../../history";
// import { AgGridReact } from "ag-grid-react";
// import { ContextLayout } from "../../../utility/context/Layout";
// import { ChevronDown, Trash2, Edit } from "react-feather";
// import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
// import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
// import { Route } from "react-router-dom";
// class PaymentModeList extends React.Component {
//   state = {
//     rowData: [],
//     paginationPageSize: 20,
//     currenPageSize: "",
//     getPageSize: "",
//     defaultColDef: {
//       sortable: true,
//       editable: true,
//       resizable: true,
//       suppressMenu: true,
//     },
//     columnDefs: [
//       {
//         headerName: "Dealer Name",
//         field: "dealer_name1.dealer_name",
//         width: 150,
//         pinned: window.innerWidth > 992 ? "left" : false,
//         cellRendererFramework: (params) => {
//           return (
//             <div className="d-flex align-items-center cursor-pointer">
//               <span>{params.data.dealer_name1?.dealer_name}</span>
//             </div>
//           );
//         },
//       },
//       {
//         headerName: "Email",
//         field: "dealer_name1.email",
//         width: 150,
//         pinned: window.innerWidth > 992 ? "left" : false,
//         cellRendererFramework: (params) => {
//           return (
//             <div className="d-flex align-items-center cursor-pointer">
//               <span>{params.data.dealer_name1?.email}</span>
//             </div>
//           );
//         },
//       },
//       {
//         headerName: "Select Bank",
//         field: "select_bank.name_of_bank",
//         width: 140,
//         cellRendererFramework: (params) => {
//           return (
//             <div className="d-flex justify-content-center">
//               <span>{params.data.select_bank?.name_of_bank}</span>
//             </div>
//           );
//         },
//       },
//       {
//         headerName: "Select Mode",
//         field: "select_mode.mode",
//         width: 140,
//         cellRendererFramework: (params) => {
//           return (
//             <div className="d-flex align-items-center cursor-pointer">
//               <span>{params.data.select_mode?.mode}</span>
//             </div>
//           );
//         },
//       },
//       // {
//       //   headerName: "Document Upload",
//       //   field: "select_bank.document_upload",
//       //   width: 140,
//       //   cellRendererFramework: (params) => {
//       //     return (
//       //       <div className="d-flex justify-content-center">
//       //         <span>{params.data.select_bank?.document_upload}</span>
//       //       </div>
//       //     );
//       //   },
//       // },
//       {
//         headerName: "Settlement Day",
//         field: "settlement_day",
//         width: 140,
//         cellRendererFramework: (params) => {
//           return (
//             <div className="d-flex align-items-center cursor-pointer">
//               <span>{params.data.settlement_day}</span>
//             </div>
//           );
//         },
//       },
//       {
//         headerName: "Actions",
//         field: "sortorder",
//         width: 140,
//         cellRendererFramework: (params) => {
//           return (
//             <div className="actions cursor-pointer">
//               {/* <Eye
//                 className="mr-50"
//                 size="25px"
//                 color="green"
//                 onClick={() => history.push("/app/ro-configuration/roForm")}
//               /> */}
//               <Route
//                 render={({ history }) => (
//                   <Edit
//                     className="mr-50"
//                     size="25px"
//                     color="blue"
//                     onClick={() =>
//                       history.push(
//                         `/app/ro-configuration/paymentModeAvalable/${params.data._id}`
//                       )
//                     }
//                   />
//                 )}
//               />
//               <Trash2
//                 className="mr-50"
//                 size="25px"
//                 color="red"
//                 onClick={() => {
//                   let selectedData = this.gridApi.getSelectedRows();
//                   this.runthisfunction(params.data._id);
//                   this.gridApi.updateRowData({ remove: selectedData });
//                 }}
//               />
//             </div>
//           );
//         },
//       },
//     ],
//   };
//   async componentDidMount() {
//     await axiosConfig.get("/dealer/allpayment").then((response) => {
//       const rowData = response.data.data;
//       console.log(rowData);
//       this.setState({ rowData });
//     });
//   }
//   async runthisfunction(id) {
//     console.log(id);
//     await axiosConfig.get(`/dealer/deletepayment/${id}`).then((response) => {
//       console.log(response);
//     });
//   }

//   onGridReady = (params) => {
//     this.gridApi = params.api;
//     this.gridColumnApi = params.columnApi;
//     this.setState({
//       currenPageSize: this.gridApi.paginationGetCurrentPage() + 1,
//       getPageSize: this.gridApi.paginationGetPageSize(),
//       totalPages: this.gridApi.paginationGetTotalPages(),
//     });
//   };

//   updateSearchQuery = (val) => {
//     this.gridApi.setQuickFilter(val);
//   };

//   filterSize = (val) => {
//     if (this.gridApi) {
//       this.gridApi.paginationSetPageSize(Number(val));
//       this.setState({
//         currenPageSize: val,
//         getPageSize: val,
//       });
//     }
//   };

//   render() {
//     const { rowData, columnDefs, defaultColDef } = this.state;
//     return (
//       <React.Fragment>
//         <Breadcrumbs
//           breadCrumbTitle="Payment Mode List"
//           // breadCrumbParent="Forms & Tables"
//           // breadCrumbActive="Ro Configuration"
//         />
//         <Card className="overflow-hidden agGrid-card">
//           <CardBody className="py-0">
//             {this.state.rowData === null ? null : (
//               <div className="ag-theme-material w-100 my-2 ag-grid-table">
//                 <div className="d-flex flex-wrap justify-content-between align-items-center">
//                   <div className="mb-1">
//                     <UncontrolledDropdown className="p-1 ag-dropdown">
//                       <DropdownToggle tag="div">
//                         {this.gridApi
//                           ? this.state.currenPageSize
//                           : "" * this.state.getPageSize -
//                             (this.state.getPageSize - 1)}{" "}
//                         -{" "}
//                         {this.state.rowData.length -
//                           this.state.currenPageSize * this.state.getPageSize >
//                         0
//                           ? this.state.currenPageSize * this.state.getPageSize
//                           : this.state.rowData.length}{" "}
//                         of {this.state.rowData.length}
//                         <ChevronDown className="ml-50" size={15} />
//                       </DropdownToggle>
//                       <DropdownMenu right>
//                         <DropdownItem
//                           tag="div"
//                           onClick={() => this.filterSize(20)}
//                         >
//                           20
//                         </DropdownItem>
//                         <DropdownItem
//                           tag="div"
//                           onClick={() => this.filterSize(50)}
//                         >
//                           50
//                         </DropdownItem>
//                         <DropdownItem
//                           tag="div"
//                           onClick={() => this.filterSize(100)}
//                         >
//                           100
//                         </DropdownItem>
//                         <DropdownItem
//                           tag="div"
//                           onClick={() => this.filterSize(134)}
//                         >
//                           134
//                         </DropdownItem>
//                       </DropdownMenu>
//                     </UncontrolledDropdown>
//                   </div>
//                   <div className="d-flex flex-wrap justify-content-between mb-1">
//                     <div className="table-input mr-1">
//                       <Input
//                         placeholder="search..."
//                         onChange={(e) => this.updateSearchQuery(e.target.value)}
//                         value={this.state.value}
//                       />
//                     </div>
//                     <div className="export-btn">
//                       <Button.Ripple
//                         color="primary"
//                         onClick={() => this.gridApi.exportDataAsCsv()}
//                       >
//                         Export as CSV
//                       </Button.Ripple>
//                     </div>
//                   </div>
//                 </div>
//                 <ContextLayout.Consumer>
//                   {(context) => (
//                     <AgGridReact
//                       gridOptions={{}}
//                       rowSelection="multiple"
//                       defaultColDef={defaultColDef}
//                       columnDefs={columnDefs}
//                       rowData={rowData}
//                       onGridReady={this.onGridReady}
//                       colResizeDefault={"shift"}
//                       animateRows={true}
//                       floatingFilter={true}
//                       pagination={true}
//                       paginationPageSize={this.state.paginationPageSize}
//                       pivotPanelShow="always"
//                       enableRtl={context.state.direction === "rtl"}
//                     />
//                   )}
//                 </ContextLayout.Consumer>
//               </div>
//             )}
//           </CardBody>
//         </Card>
//       </React.Fragment>
//     );
//   }
// }
// export default PaymentModeList;
