import React from "react";
import {Col,
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
import { ChevronDown,  Trash2 } from "react-feather";
import axiosConfig from "../../../axiosConfig";
// import { Route } from 'react-router-dom'

import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";

// import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
// import { history } from "../../../history";

class StampingDataList extends React.Component {
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
        headerName: "MPD",
        field: "MPD.mpd",
        width: 140,
        cellRendererFramework: (params) => {
          return (
            
              <div className="d-flex align-items-center cursor-pointer">
                <span>{params.data.MPD?.mpd}</span>
              </div>
            );
          
        },
      },

  
      {
        headerName: "Last Stamping Date",
        field: "Last_Stamping_Date",
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.Last_Stamping_Date}</span>
            </div>
          );
        },
        width: 150,
      },
      {
        headerName: "Due Date",
        field: "Due_Date",
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.Due_Date}</span>
            </div>
          );
        },
        width: 150,
      },
      {
        headerName: "K Factor",
        field: "K_Factor",
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.K_Factor}</span>
            </div>
          );
        },
        width: 125,
      },
      {
        headerName: "Upload Certificate",
        field: "Upload_Certificate",
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.Upload_Certificate}</span>
            </div>
          );
        },
        width: 140,
      },
      {
        headerName: "Upload Service Report",
        field: "Upload_Service_Report",
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.Upload_Service_Report}</span>
            </div>
          );
        },
        width: 140,
      },
      {
        headerName: "Last Service Date",
        field: "Last_Service_Date",
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.Last_Service_Date}</span>
            </div>
          );
        },
        width: 140,
      },
      {
        headerName: "Last Service Report",
        field: "Last_Service_Report",
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.Last_Service_Report}</span>
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
          {/* <Route render={({ history}) => (
    <Eye
    className="mr-50"
    size="25px"
    color="green"
    onClick={() =>
      history.push(
        `/app/facilityManagement/stampingDataList/${params.data.dealer_id._id}`
      )
    }
  />
)}
/> */}
{/* <Route
                  render={({ history }) => (
              <Edit
                className="mr-50"
                size="25px"
                color="blue"
                onClick={() =>
                  history.push(
                    `/app/facilityManagement/stampingDataForm/${params.data._id}`
                  )
                }
              />)}/> */}
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
      .get(`/dealer/allStampingdataApp/${id}`)
      .then((response) => {
        let rowData = response.data.data;
        JSON.stringify(rowData);
        this.setState({ rowData });
      })
      .catch((error) => {
        console.log(error.response);
      });
    
  }
  async runthisfunction(id) {
    console.log(id);
    await axiosConfig
      .get(`/dealer/allequipmentApp/${id}`)
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
          breadCrumbTitle="Stamping Data List"
           breadCrumbParent="Forms & Tables"
           breadCrumbActive="Facility Management"
        /> */}
        <Card className="overflow-hidden agGrid-card">
        <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
              Stamping Data List
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
export default StampingDataList;
