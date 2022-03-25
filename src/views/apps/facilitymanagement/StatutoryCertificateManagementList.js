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
import { ChevronDown, Trash2, Eye, Edit } from "react-feather";
import axios from "axios";

import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";

import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import { history } from "../../../history";

class StatutoryCertificateManagementList extends React.Component {
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
        headerName: "Due Stamping",
        field: "Due_Date_of_Stamping",
        pinned: window.innerWidth > 992 ? "left" : false,
        width: 175,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.Due_Date_of_Stamping}</span>
            </div>
          );
        },
      },

      {
        headerName: "Upload 5l",
        field: "Upload_5l",
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.Upload_5l}</span>
            </div>
          );
        },
        width: 250,
      },
      {
        headerName: "Due PESO",
        field: "Due_Date_of_PESO",
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.Due_Date_of_PESO}</span>
            </div>
          );
        },
        width: 250,
      },
      {
        headerName: "Upload PESO",
        field: "Upload_PESO",
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.Upload_PESO}</span>
            </div>
          );
        },
        width: 150,
      },
      {
        headerName: "Scale",
        field: "scale",
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.scale}</span>
            </div>
          );
        },
        width: 150,
      },
      {
        headerName: "Upload Hydrometer",
        field: "Upload_Hydrometer",
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.Upload_Hydrometer}</span>
            </div>
          );
        },
        width: 125,
      },
      {
        headerName: "calibration_Due_date",
        field: "calibration_Due_date",
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.calibration_Due_date}</span>
            </div>
          );
        },
        width: 140,
      },
      {
        headerName: "uplodad_thermameter",
        field: "uplodad_thermameter",
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.uplodad_thermameter}</span>
            </div>
          );
        },
        width: 140,
      },
      {
        headerName: "Uplodad air Gauage",
        field: "uplodad_air_gauage",
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.uplodad_air_gauage}</span>
            </div>
          );
        },
        width: 140,
      },
      {
        headerName: "DPSL Upload",
        field: "DPSL_upload",
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.DPSL_upload}</span>
            </div>
          );
        },
        width: 140,
      },
      {
        headerName: "Due DPSL",
        field: "due_date_DPSL",
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.due_date_DPSL}</span>
            </div>
          );
        },
        width: 140,
      },
      {
        headerName: "Due Outher",
        field: "due_date_outher",
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.due_date_outher}</span>
            </div>
          );
        },
        width: 140,
      },
      {
        headerName: "Upload Outher",
        field: "upload_outher",
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.upload_outher}</span>
            </div>
          );
        },
        width: 140,
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
                // onClick={() => history.push("/app/slider/editSlider/${params.data._id}")}
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
    axios
      .get("http://3.108.185.7/nodejs/api/dealer/allstatutoryCertificate")
      .then((response) => {
        let rowData = response.data.data;
        JSON.stringify(rowData);
        this.setState({ rowData });
      });
  }
  async runthisfunction(id) {
    console.log(id);
    await axios
      .get(
        `http://3.108.185.7/nodejs/api/dealer/deletestatutoryCertificate/${id}`
      )
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
        <Breadcrumbs
          breadCrumbTitle="Facility Management"
          // breadCrumbParent="Forms & Tables"
          // breadCrumbActive="Facility Management"
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
export default StatutoryCertificateManagementList;
