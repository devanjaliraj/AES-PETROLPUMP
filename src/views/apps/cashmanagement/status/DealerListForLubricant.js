import React from "react";
import {
  Card,
  Row,
  Col,
  CardBody,
  Input,
  Button,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import axiosConfig from "../../../../axiosConfig";
import { Route } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import { ContextLayout } from "../../../../utility/context/Layout";
import { ChevronDown, Eye } from "react-feather";
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
// import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
class DealerListForLubricant extends React.Component {
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
        headerName: "Dealer Name",
        field: "dealer_name",
        width: 250,
        pinned: window.innerWidth > 992 ? "left" : false,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.dealer_name}</span>
            </div>
          );
        },
      },
      {
        headerName: "Mobile",
        field: "mobile",
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.mobile}</span>
            </div>
          );
        },
      },
      {
        headerName: "Email",
        field: "email",
        width: 250,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.email}</span>
            </div>
          );
        },
      },
      {
        headerName: "Master Oil Company",
        field: "master_oil_company.name",
        width: 180,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.master_oil_company?.name}</span>
            </div>
          );
        },
      },
      {
        headerName: "State",
        field: "state",
        width: 125,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.state}</span>
            </div>
          );
        },
      },
      {
        headerName: "District",
        field: "district",
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.district}</span>
            </div>
          );
        },
      },
      {
        headerName: "Actions",
        field: "sortorder",
        width: 110,
        pinned: window.innerWidth > 992 ? "right" : false,
        cellRendererFramework: (params) => {
          return (
            <div className="actions cursor-pointer">
              <Route
                render={({ history }) => (
                  <Eye
                    className="mr-30"
                    size="25px"
                    color="green"
                    onClick={() =>
                      history.push(
                        `/app/cashManagement/status/lubricantList/${params.data._id}`
                      )
                    }
                   
                  />
                )}
              />
            </div>
          );
        },
      },
    ],
  };
  async componentDidMount() {
    await axiosConfig.get("/dealer/alldealers").then((response) => {
      const rowData = response.data.data;
      console.log(rowData);
      this.setState({ rowData });
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
                List of Dealers for Lubricant
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
export default DealerListForLubricant;
