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
import { history } from "../../../history";
import { ContextLayout } from "../../../utility/context/Layout";
import { ChevronDown, Trash2,  Edit } from "react-feather";
import axiosConfig from "../../../axiosConfig";
import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";

class LubricantSales extends React.Component {
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
        headerName: "Dealer Name",
        field: "dealer_name1.dealer_name",
        filter: false,
        width: 200,
        pinned: window.innerWidth > 992 ? "left" : false,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.dealer_name1?.dealer_name}</span>
            </div>
          );
        },
      },
      {
        headerName: "Email",
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
        headerName: "Date",
        field: "date",
        width: 100,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.date}</span>
            </div>
          );
        },
      },
      {
        headerName: "Lube Grade",
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
        headerName: "Pieces Avail",
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
        headerName: "Sold prices",
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
        headerName: "Selling price",
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
        headerName: "Name of DSM ",
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
        headerName: "Payment Mode",
        field: "mode_of_pyament.mode",
        filter: false,
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.mode_of_pyament?.mode}</span>
            </div>
          );
        },
      },
      {
        headerName: "Actions",
        field: "sortorder",
        width: 120,
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
                    `/#/app/shiftManagement/lubricantForm/${params.data._id}`
                  )
                }
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
    // Mode of Payment
    axiosConfig
      .get("/dealer/allmode")
      .then((response) => {
        console.log(response.data.data);
        this.setState({ mfp: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });

    axiosConfig
      .get("/dealer/alllubricantsales")
      .then((response) => {
        let rowData = response.data.data;
        JSON.stringify(rowData);
        this.setState({ rowData });
      });
  }
  async runthisfunction(id) {
    console.log(id);
    await axiosConfig
      .get(`/dealer/deletelubricantsales/${id}`)
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
export default LubricantSales;
