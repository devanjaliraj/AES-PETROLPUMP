import React from "react";
import {
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
import { ChevronDown, Trash2, Edit } from "react-feather";
import axiosConfig from "../../../axiosConfig";
import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import { Route } from "react-router-dom";

class ManagerList extends React.Component {
  state = {
    rowData: null,
    paginationPageSize: 20,
    currenPageSize: "",
    getPageSize: "",
    defaultColDef: {
      sortable: true,
      editable: true,
      resizable: true,
      suppressMenu: true,
    },
    columnDefs: [
      {
        headerName: "Maneger Name",
        field: "maneger_name",
        width: 250,
        pinned: window.innerWidth > 992 ? "left" : false,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.maneger_name}</span>
            </div>
          );
        },
      },
      {
        headerName: "Address",
        field: "addres",
        width: 250,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.addres}</span>
            </div>
          );
        },
      },
      {
        headerName: "Mobile",
        field: "mobile",
        width: 250,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.mobile}</span>
            </div>
          );
        },
      },
      {
        headerName: "Joining Date",
        field: "joining_date",
        width: 140,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.joining_date}</span>
            </div>
          );
        },
      },
      {
        headerName: "Adhar Number",
        field: "adhar_number",
        width: 125,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.adhar_number}</span>
            </div>
          );
        },
      },
      {
        headerName: "Adhar Image",
        field: "adharimg",
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.adharimg}</span>
            </div>
          );
        },
      },
      {
        headerName: "Pan Number",
        field: "pan_number",
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.pan_number}</span>
            </div>
          );
        },
      },
      {
        headerName: "Pan Image",
        field: "panImg",
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.panImg}</span>
            </div>
          );
        },
      },
      {
        headerName: "Photograph",
        field: "photograh",
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.photograh}</span>
            </div>
          );
        },
      },
      {
        headerName: "Date of Birth",
        field: "date_of_brith",
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.date_of_brith}</span>
            </div>
          );
        },
      },
      {
        headerName: "Monthly Salary",
        field: "salary_decieded",
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.salary_decieded}</span>
            </div>
          );
        },
      },
      {
        headerName: "Salary Date",
        field: "salary_date",
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.salary_date}</span>
            </div>
          );
        },
      },
      // {
      //   headerName: "Shift Managment",
      //   field: "shiftManagment",
      //   filter: true,
      //   width: 150,
      //   cellRendererFramework: (params) => {
      //     return params.value === "true" ? (
      //       <div className="badge badge-pill badge-success">
      //         {params.data.shiftManagment}
      //       </div>
      //     ) : params.value === "false" ? (
      //       <div className="badge badge-pill badge-warning">
      //         {params.data.shiftManagment}
      //       </div>
      //     ) : null;
      //   },
      // },
      // {
      //   headerName: "Status",
      //   field: "shiftManagment",
      //   filter: true,
      //   width: 150,
      //   cellRendererFramework: (params) => {
      //     return params.value === "Pending" ? (
      //       <div className="badge badge-pill badge-warning ml-2">
      //         {params.data.shiftManagment}
      //       </div>
      //     ) : params.value === "Confirm" ? (
      //       <div className="badge badge-pill badge-success ml-2">
      //         {params.data.shiftManagment}
      //       </div>
      //     ) : null;
      //   },
      // },
      // // {
      // //   headerName: "Shift Managment",
      // //   field: "shiftManagment",
      // //   filter: true,
      // //   width: 150,
      // //   cellRendererFramework: (params) => {
      // //     return (
      // //       <div className="d-flex align-items-center cursor-pointer">
      // //         <span>{params.data.shiftManagment}</span>
      // //       </div>
      // //     );
      // //   },
      // // },

      // // {
      // //   headerName: "Shift Managment",
      // //   field: "shiftManagment",
      // //   filter: true,
      // //   editable: false,
      // //   width: 120,
      // //   cellRenderer: (params) => {
      // //     return `<input type='checkbox' ${
      // //       params.data.shiftManagment ? "checked" : ""
      // //     } />`;
      // //   },
      // // },
      // {
      //   headerName: "Stock Managment",
      //   field: "stockManagment",
      //   width: 150,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="d-flex align-items-center cursor-pointer">
      //         <span>{params.data.stockManagment}</span>
      //       </div>
      //     );
      //   },
      // },
      // // {
      // //   headerName: "Stock Managment",
      // //   field: "stockManagment",
      // //   filter: true,
      // //   editable: false,
      // //   width: 120,
      // //   cellRenderer: (params) => {
      // //     return `<input type='checkbox' ${
      // //       params.data.stockManagment ? "checked" : ""
      // //     } />`;
      // //   },
      // // },

      // {
      //   headerName: "Cash Managment",
      //   field: "cashManagment",
      //   filter: true,
      //   editable: false,
      //   width: 120,
      //   cellRenderer: (params) => {
      //     return `<input type='checkbox' ${
      //       params.data.cashManagment ? "checked" : ""
      //     } />`;
      //   },
      // },
 
      // {
      //   headerName: "Facility Managment",
      //   field: "facilityManagment",
      //   filter: true,
      //   editable: false,
      //   width: 120,
      //   cellRenderer: (params) => {
      //     return `<input type='checkbox' ${
      //       params.data.facilityManagment ? "checked" : ""
      //     } />`;
      //   },
      // },
      // {
      //   headerName: "Ro-Configuration",
      //   field: "roconfiguration",
      //   filter: true,
      //   editable: false,
      //   width: 120,
      //   cellRenderer: (params) => {
      //     return `<input type='checkbox' ${
      //       params.data.roconfiguration ? "checked" : ""
      //     } />`;
      //   },
      // },
   
      
      {
        headerName: "Status",
        field: "status",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return params.value === "Active" ? (
            <div className="badge badge-pill badge-success">
              {params.data.status}
            </div>
          ) : params.value === "Inactive" ? (
            <div className="badge badge-pill badge-warning">
              {params.data.status}
            </div>
          ) : null;
        },
      },
      {
        headerName: "Actions",
        field: "sortorder",
        width: 150,
        pinned: window.innerWidth > 992 ? "right" : false,

        cellRendererFramework: (params) => {
          return (
            <div className="actions cursor-pointer">
              <Route
                render={({ history }) => (
                  <Edit
                    className="mr-50"
                    size="25px"
                    color="blue"
                    onClick={() =>
                      history.push(
                        `/app/staffEnrollment/manager/${params.data._id}`
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
  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig.get(`/dealer/allmanagerApp/${id}`).then((response) => {
      let rowData = response.data.data;
      JSON.stringify(rowData);
      this.setState({ rowData });
    });
  }
  async runthisfunction(id) {
    console.log(id);
    await axiosConfig.get(`/dealer/allmanagerApp/${id}`).then((response) => {
      console.log(response);
    });
  }

  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.setState({
      currenPageSize: this.gridApi.paginationGetCurrentPage() + 1,
      getPageSize: this.gridApi.paginationGetPageSize(),
      totalPages: this.gridApi.paginationGetTotalPages(),
    });
  };

  updateSearchQuery = (val) => {
    this.gridApi.setQuickFilter(val);
  };

  filterSize = (val) => {
    if (this.gridApi) {
      this.gridApi.paginationSetPageSize(Number(val));
      this.setState({
        currenPageSize: val,
        getPageSize: val,
      });
    }
  };

  render() {
    const { rowData, columnDefs, defaultColDef } = this.state;
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Management List"
          // breadCrumbParent="Forms & Tables"
          // breadCrumbActive="Staff Management List"
        />
        <Card className="overflow-hidden agGrid-card">
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
                        onChange={(e) => this.updateSearchQuery(e.target.value)}
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
      </React.Fragment>
    );
  }
}
export default ManagerList;
