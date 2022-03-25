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
import axios from "axios";
import { history } from "../../../history";
import { AgGridReact } from "ag-grid-react";
import { ContextLayout } from "../../../utility/context/Layout";
import { ChevronDown, Trash2, Edit } from "react-feather";
import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
class BayManagementList extends React.Component {
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
        headerName: "No of Bay",
        field: "dealer_name1.dealer_name",
        filter: false,
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.dealer_name1?.dealer_name}</span>
            </div>
          );
        },
      },
      {
        headerName: "Nozzle",
        field: "dealer_name1.email",
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.dealer_name1?.email}</span>
            </div>
          );
        },
      },
      {
        headerName: "Product",
        field: "lube_grade.grade",
        width: 100,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.lube_grade?.grade}</span>
            </div>
          );
        },
      },
      {
        headerName: "Opening Totaliser",
        field: "total_pieces_available.no_of_pieces",
        width: 160,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.total_pieces_available?.no_of_pieces}</span>
            </div>
          );
        },
      },
      {
        headerName: "Dsm Name",
        field: "no_of_pieces_sold",
        width: 160,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.no_of_pieces_sold}</span>
            </div>
          );
        },
      },
      {
        headerName: "Closing Totaliser",
        field: "selling_price",
        width: 160,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.selling_price}</span>
            </div>
          );
        },
      },

      {
        headerName: "Closing 2",
        field: "dsm.dsm_name",
        filter: false,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.dsm?.dsm_name}</span>
            </div>
          );
        },
      },

      {
        headerName: "Dsm Name",
        field: "mode_of_pyament",
        filter: false,
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.mode_of_pyament}</span>
            </div>
          );
        },
      },
      {
        headerName: "Closing Totaliser",
        field: "mode_of_pyament",
        filter: false,
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.mode_of_pyament}</span>
            </div>
          );
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
              <Edit
                className="mr-50"
                size="25px"
                color="blue"
                onClick={() =>
                  history.push(
                    `/app/shiftmanagement/retailSellingPriceForm/${params.data._id}`
                  )
                }
              />
              <Trash2
                className="mr-50"
                size="25px"
                color="red"
                onClick={() =>
                  history.push(
                    `/app/shiftmanagement/bayManagementForm/${params.data._id}`
                  )
                }
              />
            </div>
          );
        },
      },
    ],
  };

  componentDidMount() {
    axios.get("http://3.108.185.7/nodejs/api/dealer/allbm").then((response) => {
      let rowData = response.data.data;
      JSON.stringify(rowData);
      this.setState({ rowData });
    });
  }
  async runthisfunction(id) {
    console.log(id);
    await axios
      .get(`http://3.108.185.7/nodejs/api/dealer/deletelubricantsales/${id}`)
      .then((response) => {
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
        <Breadcrumbs breadCrumbTitle="Lubricants Sale List" />
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
export default BayManagementList;
