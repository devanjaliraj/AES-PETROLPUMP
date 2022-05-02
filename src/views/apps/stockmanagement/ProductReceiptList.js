import React from "react";
import {
  Card,
  CardBody,
  Input,
  Row,
  Col,
  Button,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import { AgGridReact } from "ag-grid-react";
import { Route } from "react-router-dom";
import { ContextLayout } from "../../../utility/context/Layout";
import { ChevronDown, Trash2, Edit } from "react-feather";
import axiosConfig from "../../../axiosConfig";
import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import { history } from "../../../history";

class ProductReceiptList extends React.Component {
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
        field: "Invoice_No",
        filter: false,
        width: 100,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.Invoice_No}</span>
            </div>
          );
        },
      },
      {
        headerName: "Tank_Lorry_No",
        field: "Tank_Lorry_No",
        filter: false,
        width: 100,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.Tank_Lorry_No}</span>
            </div>
          );
        },
      },
      {
        headerName: "Total_Invoice_Value",
        field: "Total_Invoice_Value",
        filter: false,
        width: 100,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.Total_Invoice_Value}</span>
            </div>
          );
        },
      },

      {
        headerName: "VAT_MS",
        field: "VAT_MS",
        width: 100,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.VAT_MS}</span>
            </div>
          );
        },
      },
      {
        headerName: "VAT_HSD",
        field: "VAT_HSD",
        filter: false,
        width: 100,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.VAT_HSD}</span>
            </div>
          );
        },
      },

      {
        headerName: "TCS_LFR_MS",
        field: "TCS_LFR_MS",
        filter: false,
        width: 100,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.TCS_LFR_MS}</span>
            </div>
          );
        },
      },
      {
        headerName: "TCS_LFR_HSD",
        field: "TCS_LFR_HSD",
        filter: false,
        width: 100,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.TCS_LFR_HSD}</span>
            </div>
          );
        },
      },
      {
        headerName: "Champer_details",
        field: "Champer_details",
        filter: false,
        width: 100,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.Champer_details}</span>
            </div>
          );
        },
      },
      {
        headerName: "Product",
        field: "Product",
        filter: false,
        width: 100,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.Product}</span>
            </div>
          );
        },
      },
      {
        headerName: "Capacity",
        field: "Capacity",
        filter: false,
        width: 100,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.Capacity}</span>
            </div>
          );
        },
      },
      {
        headerName: "Density_As_per_Invoice",
        field: "Density_As_per_Invoice",
        filter: false,
        width: 100,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.Density_As_per_Invoice}</span>
            </div>
          );
        },
      },
      {
        headerName: "Density_Room_temp_obs",
        field: "Density_Room_temp_obs",
        filter: false,
        width: 100,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.Density_Room_temp_obs}</span>
            </div>
          );
        },
      },
      {
        headerName: "Room_Temp",
        field: "Room_Temp",
        filter: false,
        width: 100,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.Room_Temp}</span>
            </div>
          );
        },
      },
      {
        headerName: "Density_Observed_at_15_c",
        field: "Density_Observed_at_15_c",
        filter: false,
        width: 100,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.Density_Observed_at_15_c}</span>
            </div>
          );
        },
      },
      {
        headerName: "Difference",
        field: "Difference",
        filter: false,
        width: 100,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.Difference}</span>
            </div>
          );
        },
      },
      {
        headerName: "PL_as_per_Invoice",
        field: "PL_as_per_Invoice",
        filter: false,
        width: 100,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.PL_as_per_Invoice}</span>
            </div>
          );
        },
      },
      {
        headerName: "DL_as_per_Invoice",
        field: "DL_as_per_Invoice",
        filter: false,
        width: 100,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.DL_as_per_Invoice}</span>
            </div>
          );
        },
      },
      {
        headerName: "X",
        field: "X",
        filter: false,
        width: 100,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.X}</span>
            </div>
          );
        },
      },
      {
        headerName: "Y",
        field: "Y",
        filter: false,
        width: 100,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.Y}</span>
            </div>
          );
        },
      },
      {
        headerName: "Pl_Observed",
        field: "Pl_Observed",
        filter: false,
        width: 100,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.Pl_Observed}</span>
            </div>
          );
        },
      },
      {
        headerName: "DL_Observed",
        field: "DL_Observed",
        filter: false,
        width: 100,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.DL_Observed}</span>
            </div>
          );
        },
      },
      {
        headerName: "X_obs",
        field: "X_obs",
        filter: false,
        width: 100,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.X_obs}</span>
            </div>
          );
        },
      },
      {
        headerName: "Y_obs",
        field: "Y_obs",
        filter: false,
        width: 100,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.Y_obs}</span>
            </div>
          );
        },
      },
      {
        headerName: "Loss_to_be_booked",
        field: "Loss_to_be_booked",
        filter: false,
        width: 100,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.Loss_to_be_booked}</span>
            </div>
          );
        },
      },
      {
        headerName: "Upload_of_signed_copy_of_Invoice",
        field: "Upload_of_signed_copy_of_Invoice",
        filter: false,
        width: 100,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.Upload_of_signed_copy_of_Invoice}</span>
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
              <Route
                render={({ history }) => (
                  <Edit
                    className="mr-50"
                    size="25px"
                    color="blue"
                    onClick={() =>
                      history.push(
                        `/app/stockManagement/receiptForm/${params.data._id}`
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
    axiosConfig.get(`/dealer/allReceiptApp/${id}`).then((response) => {
      let rowData = response.data.data;
      JSON.stringify(rowData);
      this.setState({ rowData });
    });
  }

  async runthisfunction(id) {
    console.log(id);
    await axiosConfig.get(`/dealer/deleteReceipt/${id}`).then((response) => {
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
        <Card className="overflow-hidden agGrid-card">
          <Row className="m-1">
            <Col>
              <h1 col-sm-6 className="float-left">
                List of Dealers for Product Receipt
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
export default ProductReceiptList;
