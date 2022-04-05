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
import axios from "axios";
import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import { Trash2, Edit } from "react-feather";
import { history } from "../../../history";

class NozzleMapList extends React.Component {
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
      // {
      //   headerName: "S.No",
      //   valueGetter: "node.rowIndex + 1",
      //   field: "node.rowIndex + 1",
      //   width: 150,
      //   filter: false,
      //   checkboxSelection: true,
      //   headerCheckboxSelectionFilteredOnly: true,
      //   headerCheckboxSelection: true,
      // },
      {
        headerName: "Nozzle",
        field: "nozzle",
        width: 120,
        pinned: window.innerWidth > 992 ? "left" : false,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.nozzle}</span>
            </div>
          );
        },
      },
      {
        headerName: "MPD",
        field: "mpd",
        width: 120,
        // pinned: window.innerWidth > 992 ? "left" : false,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.mpd}</span>
            </div>
          );
        },
      },
      {
        headerName: "Bay",
        field: "bay",
        width: 120,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.bay}</span>
            </div>
          );
        },
      },
      {
        headerName: "Tank",
        field: "tank_map.tank",
        width: 120,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.tank_map?.tank}</span>
            </div>
          );
        },
      },
    //   {
    //     headerName: "Total No. Nozzles",
    //     field: "total_no_nozzles",
    //     width: 90,
    //     cellRendererFramework: (params) => {
    //       return (
    //         <div className="d-flex align-items-center cursor-pointer">
    //           <span>{params.data.total_no_nozzles}</span>
    //         </div>
    //       );
    //     },
    //   },
    //   {
    //     headerName: "Total No. Tanks ",
    //     field: "total_no_tanks",
    //     width: 90,
    //     cellRendererFramework: (params) => {
    //       return (
    //         <div className="d-flex align-items-center cursor-pointer">
    //           <span>{params.data.total_no_tanks}</span>
    //         </div>
    //       );
    //     },
    //   },
    //   {
    //     headerName: "Total No. Air Machine",
    //     field: "total_no_air_machine",
    //     width: 90,
    //     cellRendererFramework: (params) => {
    //       return (
    //         <div className="d-flex align-items-center cursor-pointer">
    //           <span>{params.data.total_no_air_machine}</span>
    //         </div>
    //       );
    //     },
    //   },
    //   {
    //     headerName: "PUC Machine",
    //     field: "puc_machine",
    //     width: 90,
    //     cellRendererFramework: (params) => {
    //       return (
    //         <div className="d-flex align-items-center cursor-pointer">
    //           <span>{params.data.puc_machine}</span>
    //         </div>
    //       );
    //     },
    //   },
    //   {
    //     headerName: "Any Other Facility",
    //     field: "any_other_facility",
    //     filter: false,
    //     width: 90,
    //     cellRendererFramework: (params) => {
    //       return (
    //         <div className="d-flex align-items-center cursor-pointer">
    //           <span>{params.data.any_other_facility}</span>
    //         </div>
    //       );
    //     },
    //   },
      // {
      //   headerName: "Tank ",
      //   field: "tank_map.product_map",
      //   width: 140,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="d-flex align-items-center cursor-pointer">
      //         {/* {params.data.tank_map?.map((tank) => (
      //         <span>{tank?.product_map}</span>
      //         ))} */}

      //       {
      //           params.data.tank_map.filter(parameter => parameter.tank_number.includes(params.data.total_no_tanks))
      //             .map(parameter => {
      //               const { product_map,tank_number } = parameter;
      //               return (
      //                 <span>{product_map}</span>
      //               )
      //           })
      //       }

      //       </div>
      //     );
      //   },
      // },
      // {
      //   headerName: "Tank ",
      //   field: "tank_map.capacity_litre",
      //   width: 140,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="d-flex align-items-center cursor-pointer">
      //         {/* {params.data.tank_map?.map((tank) => (
      //         <span>{tank?.capacity_litre}</span>
      //         ))} */}

      //         {
      //           params.data.tank_map.filter(parameter => parameter.tank_number.includes(params.data.total_no_tanks))
      //             .map(parameter => {
      //               const { capacity_litre,tank_number } = parameter;
      //               return (
      //                 <span>{capacity_litre}</span>
      //               )
      //           })
      //         }

      //       </div>
      //     );
      //   },
      // },
      // {
      //   headerName: "MPD ",
      //   field: "mpd_map.bay_map",
      //   width: 140,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="d-flex align-items-center cursor-pointer">
      //         {/* {params.data.mpd_map?.map((mpd) => (
      //         <span>{mpd?.bay_map}</span>
      //         ))} */}

      //         {
      //           params.data.mpd_map.filter(parameter => parameter.mpd_number.includes(params.data.total_no_mpd))
      //             .map(parameter => {
      //               const { bay_map,mpd_number } = parameter;
      //               return (
      //                 <span>{bay_map+' '}</span>
      //               )
      //           })
      //         }
      //         {/* const { capacity_litre,tank_number } = parameter;
      //               return (
      //                 <span>{capacity_litre}</span>
      //               ) */}
      //       </div>
      //     );
      //   },
      // },
      // {
      //   headerName: "BAY ",
      //   field: "bay_map.nozzle_map",
      //   width: 140,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="d-flex align-items-center cursor-pointer">
      //         {/* {params.data.bay_map?.map((bay) => (
      //         <span>{bay?.nozzle_map}</span>
      //         ))} */}

      //         {
      //           params.data.bay_map.filter(parameter => parameter.bay_number.includes(params.data.total_no_bay))
      //             .map(parameter => {
      //               const { nozzle_map,bay_number } = parameter;
      //               return (
      //                 <span>{nozzle_map+' '}</span>
      //               )
      //           })
      //         }

      //       </div>
      //     );
      //   },
      // },
      {
        headerName: "Actions",
        field: "sortorder",
        width: 120,
        pinned: window.innerWidth > 992 ? "right" : false,

        cellRendererFramework: (params) => {
          return (
            <div className="actions cursor-pointer">
              {/* <Eye
                className="mr-50"
                size="25px"
                color="green"
                onClick={() => history.push(`/app/ro-configuration/DesignYourOutlet/${params.data._id}`)}
              /> */}
              <Edit
                className="mr-50"
                size="25px"
                color="blue"
                onClick={() => history.push(`/app/ro-configuration/EditNozzleMap/${params.data._id}`)}
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
  async componentDidMount() {
    await axios
      .get("http://3.108.185.7/nodejs/api/dealer/allnozzle")
      .then((response) => {
        const rowData = response.data.data;
        console.log(rowData);
        this.setState({ rowData });
      });
  }
//   async runthisfunction(id) {
//     console.log(id);
//     await axios.get(`http://3.108.185.7/nodejs/api/dealer/deletedealershipform/${id}`).then((response) => {
//       console.log(response);
//     });
//   }

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
          breadCrumbTitle="Dealer List"
          // breadCrumbParent="Forms & Tables"
          // breadCrumbActive="Dealer List"
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
export default NozzleMapList;