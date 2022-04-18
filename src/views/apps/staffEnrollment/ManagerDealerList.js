
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
import { history } from "../../../history";
import { Route } from 'react-router-dom'
class ManagerDealerList extends React.Component {
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
          headerName: "Maneger Name",
          field: "maneger_name",
          width: 250,
          pinned: window.innerWidth > 992 ? "left" : false,
          cellRendererFramework: (params) => {
            return (
              <div className="d-flex align-items-center cursor-pointer">
                <span>{params.data.maneger_name}</span>
              </div>
            );
          },
        },
        {
          headerName: "Address",
          field: "addres",
          width: 250,
          cellRendererFramework: (params) => {
            return (
              <div className="d-flex align-items-center cursor-pointer">
                <span>{params.data.addres}</span>
              </div>
            );
          },
        },
        {
          headerName: "Mobile",
          field: "mobile",
          width: 250,
          cellRendererFramework: (params) => {
            return (
              <div className="d-flex align-items-center cursor-pointer">
                <span>{params.data.mobile}</span>
              </div>
            );
          },
        },
        {
          headerName: "Joining Date",
          field: "joining_date",
          width: 140,
          cellRendererFramework: (params) => {
            return (
              <div className="d-flex align-items-center cursor-pointer">
                <span>{params.data.joining_date}</span>
              </div>
            );
          },
        },
        {
          headerName: "Adhar Number",
          field: "adhar_number",
          width: 125,
          cellRendererFramework: (params) => {
            return (
              <div className="d-flex align-items-center cursor-pointer">
                <span>{params.data.adhar_number}</span>
              </div>
            );
          },
        },
        {
          headerName: "Adhar Image",
          field: "adharimg",
          width: 150,
          cellRendererFramework: (params) => {
            return (
              <div className="d-flex align-items-center cursor-pointer">
                <span>{params.data.adharimg}</span>
              </div>
            );
          },
        },
        {
          headerName: "Pan Number",
          field: "pan_number",
          width: 150,
          cellRendererFramework: (params) => {
            return (
              <div className="d-flex align-items-center cursor-pointer">
                <span>{params.data.pan_number}</span>
              </div>
            );
          },
        },
        {
          headerName: "Pan Image",
          field: "panImg",
          width: 150,
          cellRendererFramework: (params) => {
            return (
              <div className="d-flex align-items-center cursor-pointer">
                <span>{params.data.panImg}</span>
              </div>
            );
          },
        },
        {
          headerName: "Photograph",
          field: "photograh",
          width: 150,
          cellRendererFramework: (params) => {
            return (
              <div className="d-flex align-items-center cursor-pointer">
                <span>{params.data.photograh}</span>
              </div>
            );
          },
        },
        {
          headerName: "Date of Brith",
          field: "date_of_brith",
          width: 150,
          cellRendererFramework: (params) => {
            return (
              <div className="d-flex align-items-center cursor-pointer">
                <span>{params.data.date_of_brith}</span>
              </div>
            );
          },
        },
        {
          headerName: "Salary Decieded",
          field: "salary_decieded",
          width: 150,
          cellRendererFramework: (params) => {
            return (
              <div className="d-flex align-items-center cursor-pointer">
                <span>{params.data.salary_decieded}</span>
              </div>
            );
          },
        },
        {
          headerName: "Salary Date",
          field: "salary_date",
          width: 150,
          cellRendererFramework: (params) => {
            return (
              <div className="d-flex align-items-center cursor-pointer">
                <span>{params.data.salary_date}</span>
              </div>
            );
          },
        },
  
        //////////////////////////////////////////////
  
        {
          headerName: "Status",
          field: "status",
          filter: true,
          width: 150,
          cellRendererFramework: (params) => {
            return params.value === "Active" ? (
              <div className="badge badge-pill badge-success">
                {params.data.status}
              </div>
            ) : params.value === "Inactive" ? (
              <div className="badge badge-pill badge-warning">
                {params.data.status}
              </div>
            ) : null;
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
                 <Route render={({ history}) => (
  
                <Edit
                  className="mr-50"
                  size="25px"
                  color="blue"
                  onClick={() =>
                    history.push(`/app/staffEnrollment/manager/${params.data._id}`
                    )
                  }
                  /> )} />
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
    .get(`/dealer/allmanagerApp/${id}`)
    .then(response => {
      console.log(response);
      this.setState({
        maneger_name: response.data.data.maneger_name,
        addres: response.data.data.addres,
        mobile: response.data.data.mobile,
        joining_date: response.data.data.joining_date.split(","),
        adhar_number: response.data.data.adhar_number,
        adharimg: response.data.data.adharimg,
        pan_number: response.data.data.pan_number,
        panImg: response.data.data.panImg,
        photograh: response.data.data.photograh,
        date_of_brith: response.data.data.date_of_brith.split(","),
        salary_decieded: response.data.data.salary_decieded,
        salary_date: response.data.data.salary_date.split(","),
        status: response.data.data.status,
          
      });
      const rowData = response.data.data;
      console.log(rowData);
      this.setState({ rowData });
    })
    .catch(error => {
      console.log(error.response);
  });
}


  render() {
    const { rowData, columnDefs, defaultColDef } = this.state;
    return (
      <React.Fragment>
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

        </div>
      </React.Fragment>
    );
  }
}
export default ManagerDealerList;