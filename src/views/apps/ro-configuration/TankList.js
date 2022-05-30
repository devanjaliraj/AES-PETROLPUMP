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
import { ChevronDown } from "react-feather";
import axiosConfig from "../../../axiosConfig";
import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
 import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import { Trash2, Edit, Eye } from "react-feather";
// import { history } from "../../../history";
import { Route } from "react-router-dom";
class TankList extends React.Component {
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
          headerName: "Tank",
          field: "tank",
          width: 120,
          cellRendererFramework: (params) => {
            return (
              <div className="d-flex align-items-center cursor-pointer">
                <span>{params.data.tank}</span>
              </div>
            );
          },
        },
        {
          headerName: "Product",
          field: "Product",
          width: 120,
          pinned: window.innerWidth > 992 ? "left" : false,
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
          field: "capacity",
          width: 120,
          // pinned: window.innerWidth > 992 ? "left" : false,
          cellRendererFramework: (params) => {
            return (
              <div className="d-flex align-items-center cursor-pointer">
                <span>{params.data.capacity}</span>
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
            console.log("@@@@id@@@@@@@@@@", params);
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
                          `/app/ro-configuration/TankList/${params.data._id}`
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
                          `/app/ro-configuration/EditTankMap/${params.data.dealer_id._id}`
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
      .get(`/dealer/alltankmapApp/${id}`)
      .then((response) => {
        console.log(response);
        this.setState({
          tank: response.data.data.tank,
          Product: response.data.data.Product,
          capacity: response.data.data.capacity,
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
          <Breadcrumbs
          breadCrumbTitle="Tank List"
          // breadCrumbParent="Forms & Tables"
          // breadCrumbActive="Stock Management"
        />
        <div>
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
export default TankList;
