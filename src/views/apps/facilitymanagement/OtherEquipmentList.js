import React from "react";
import {
  Col,
  Row,
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
import { Route } from 'react-router-dom'

import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";

// import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
// import { history } from "../../../history";

class OtherEquipmentList extends React.Component {
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
        headerName: "Equipment",
        field: "Equipment.nature",
        width: 250,
        pinned: window.innerWidth > 992 ? "left" : false,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.Equipment?.nature}</span>
            </div>
          );
        },
      },

      {
        headerName: "Due Date",
        field: "Due_Date",
        width: 175,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.Due_Date}</span>
            </div>
          );
        },
      },
      {
        headerName: "Uplaod Document",
        field: "Uplaod_Document",
        width: 250,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.Uplaod_Document}</span>
            </div>
          );
        },
      },

      {
        headerName: "Remarks",
        field: "Remarks",
        width: 250,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.Remarks}</span>
            </div>
          );
        },
      },
      {
        headerName: "Fire Equipment",
        field: "Fire_Equipment",
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.Fire_Equipment}</span>
            </div>
          );
        },
      },
      {
        headerName: "Upload Fire Equipment",
        field: "Upload_Fire_Equipment",

        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.Upload_Fire_Equipment}</span>
            </div>
          );
        },
        width: 150,
      },
      {
        headerName: "Due Date-2",
        field: "Due_Date2",
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.Due_Date2}</span>
            </div>
          );
        },
        width: 150,
      },
      {
        headerName: "Remarks-2",
        field: "Remarks2",
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.Remarks2}</span>
            </div>
          );
        },
        width: 150,
      },

      {
        headerName: "Actions",
        field: "sortorder",
        pinned: window.innerWidth > 992 ? "right" : false,
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="actions cursor-pointer">
          <Route render={({ history}) => (

              <Edit
                className="mr-50"
                size="25px"
                color="blue"
                onClick={() =>
                  history.push(
                    `/app/facilityManagement/otherEquipmentForm/${params.data._id}`
                  )
                }
              />)}/>
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
    axiosConfig
      .get(`/dealer/allouther_documentApp/${id}`)
      .then((response) => {
        let rowData = response.data.data;
        JSON.stringify(rowData);
        this.setState({ rowData });
      });
  }
  async runthisfunction(id) {
    console.log(id);
    await axiosConfig
      .get(`/dealer/deleteouther_document/${id}`)
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
        {/* <Breadcrumbs
          breadCrumbTitle="Other Equipment List"
          breadCrumbParent="Forms & Tables"
          breadCrumbActive="Shift Management"
        /> */}
        <Card className="overflow-hidden agGrid-card">
        <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
              Other Equipment List
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
                      floatingFilter={true}
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
export default OtherEquipmentList;
