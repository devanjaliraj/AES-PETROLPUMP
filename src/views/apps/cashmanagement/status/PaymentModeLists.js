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
import { ContextLayout } from "../../../../utility/context/Layout";
import { ChevronDown, Trash2 } from "react-feather";
import axiosConfig from "../../../../axiosConfig";
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import Breadcrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb";
// import { history } from "../../../history";

class PaymentModeLists extends React.Component {
  state = {
    rowData: [],
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
        headerName: "Date",
        field: "date",
        width: 120,
        pinned: window.innerWidth > 992 ? "left" : false,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.date}</span>
            </div>
          );
        },
      },

      {
        headerName: "Grade",
        field: "tank.tank",
        filter: false,
        width: 100,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.tank.tank}</span>
            </div>
          );
        },
      },
      {
        headerName: "Meter Sales",
        field: "meter_sales",
        filter: false,
        width: 100,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.meter_sales}</span>
            </div>
          );
        },
      },
      {
        headerName: "Testing",
        field: "testing",
        filter: false,
        width: 100,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.testing}</span>
            </div>
          );
        },
      },

      {
        headerName: "Net Sales",
        field: "net_sales",
        width: 100,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.net_sales}</span>
            </div>
          );
        },
      },
      {
        headerName: "Tank Receipt",
        field: "tank_receipt",
        filter: false,
        width: 100,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.tank_receipt}</span>
            </div>
          );
        },
      },

      {
        headerName: "Loss Booked",
        field: "loss_booked",
        filter: false,
        width: 100,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.loss_booked}</span>
            </div>
          );
        },
      },
      {
        headerName: "total_expected_stock",
        field: "total_expected_stock",
        filter: false,
        width: 100,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.total_expected_stock}</span>
            </div>
          );
        },
      },
      {
        headerName: "actual_closing_stock",
        field: "actual_closing_stock",
        filter: false,
        width: 100,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.actual_closing_stock}</span>
            </div>
          );
        },
      },
      {
        headerName: "loss_gain",
        field: "loss_gain",
        filter: false,
        width: 100,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.loss_gain}</span>
            </div>
          );
        },
      },
      {
        headerName: "ms_closing",
        field: "ms_closing",
        filter: false,
        width: 100,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.ms_closing}</span>
            </div>
          );
        },
      },
      {
        headerName: "hsd_closing",
        field: "hsd_closing",
        filter: false,
        width: 100,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.hsd_closing}</span>
            </div>
          );
        },
      },
      {
        headerName: "msactual_closing",
        field: "msactual_closing",
        filter: false,
        width: 100,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.msactual_closing}</span>
            </div>
          );
        },
      },
      {
        headerName: "hsdactual_closing",
        field: "hsdactual_closing",
        filter: false,
        width: 100,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.hsdactual_closing}</span>
            </div>
          );
        },
      },
      {
        headerName: "Actions",
        field: "sortorder",
        pinned: window.innerWidth > 992 ? "right" : false,
        width: 100,
        cellRendererFramework: (params) => {
          return (
            <div className="actions cursor-pointer">
              {/* <Eye
                className="mr-50"
                size="25px"
                color="green"
                onClick={() => history.push("/#/app/stockManagement/lubeStockForm")}
              /> */}
              {/* <Edit
                className="mr-50"
                size="25px"
                color="blue"
                onClick={() => history.push(`/#/app/stockManagement/lubeStockForm/${params.data._id}`)}
              /> */}
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
    axiosConfig.get(`/dealer/allcashincardsApp/${id}`).then((response) => {
      let rowData = response.data.data;
      JSON.stringify(rowData);
      this.setState({ rowData });
    });
  }

  async runthisfunction(id) {
    console.log(id);
    await axiosConfig.get(`/dealer/deletecashincards/${id}`).then((response) => {
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
          breadCrumbTitle="Fuel Stock List"
          // breadCrumbParent="Forms & Tables"
          // breadCrumbActive="Stock Management"
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
export default PaymentModeLists;


