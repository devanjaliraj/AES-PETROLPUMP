import React, { Component } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Form,
  // Label,
  Input,
  Button,
  FormGroup,
  Breadcrumb,
  BreadcrumbItem,
  CustomInput,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
import { history } from "../../../history";
// import swal from "sweetalert";
// import Select from "react-select";

const mpdOptions = [];

const bayOptions =[];
export default class EditNozzleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
        tank: "", 
        nozzle: "",
        mpd: "",
        // selectedMpdOption:null,
        // selectedBayOption:null,

        bay:"",
        dealerId : '',
       };
       
    this.state = {
        tankN: [],
        nozzleN:[]
      };
      this.submitHandler = this.submitHandler.bind(this);
  }
  componentDidMount() {
    
    axiosConfig
    .get("/dealer/alltankmap")
    .then((response) => {
      console.log(response.data.data);
      this.setState({ tankN: response.data.data });
    })
    .catch((error) => {
      console.log(error.response);
    });

    axiosConfig
    .get("/dealer/allnozzle")
    .then((response) => {
      console.log(response.data.data);
      this.setState({ nozzleN: response.data.data });
    })
    .catch((error) => {
      console.log(error.response);
    });

    let { id } = this.props.match.params;
  
    this.setState({ dealerId : id });
    axiosConfig
      .get(`/dealer/getonenozzle/${id}`)
      .then(response => {
        console.log(response);
        this.setState({
            tank: response.data.data.tank,
            nozzle: response.data.data.nozzle,
            mpd: response.data.data.mpd,
            bay: response.data.data.bay,
        });
      })
      .catch(error => {
        console.log(error.response);
    });
}
  changeHandler1 = e => {
    this.setState({ status: e.target.value });
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = e => {
    e.preventDefault();
    let { id } = this.props.match.params;
    axiosConfig
      .post(`/dealer/updatnozzle/${id}`, this.state)
      .then(response => {
        console.log(response);
        // swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/ro-configuration/nozzleMapList");
        if(response.status === 200){
          let data = response.data.data;
          if(data.mpd_map.length > 0){
            data.mpd_map.map((mpd) => {
             let mpdObj = {
               value: mpd._id, 
               label: mpd.mpd_number
             };
             mpdOptions.push(mpdObj);
            })
           }
           if(data.bay_map.length > 0){
            data.bay_map.map((bay) => {
             let bayObj = {
               value: bay._id, 
               label: bay.bay_number
             };
             bayOptions.push(bayObj);
            })
           }
           this.setState({
            bay_map: data.bay_map,
            mpd: data.mpd,
            // nozzle_map: data.nozzle_map,
            tank_map: data.tank_map,
         });
        }
      })
      .catch(error => {
        console.log(error.response);
      });
}
handleChangeMPD = (selectedMpdOption) => {
  // let bayArray = []
  this.setState({ selectedMpdOption }, () =>
    console.log(`Option selected:`, this.state.selectedMpdOption)
  );
  var filteredBay = this.state.mpd_map.filter(function(event){
    if(event._id === selectedMpdOption.value){
     return event
    } 
 });
}
handleChangeBAY = (selectedBayOption) => {
  // let bayArray = []
  this.setState({ selectedBayOption }, () =>
    console.log(`Option selected:`, this.state.selectedBayOption)
  );
  var filteredBay = this.state.mpd_map.filter(function(event){
    if(event._id === selectedBayOption.value){
     return event
    } 
 });
}
  render() {
 
    // const {
    //   // dealerId,
    //   // selectedBayOption,
    //   // selectedMpdOption,
    // } = this.state
    return (
      <div>
        <Row>
          <Col sm="12">
            <div>
              <Breadcrumb listTag="div">
                <BreadcrumbItem href="/analyticsDashboard" tag="a">
                  Home
                </BreadcrumbItem>
                <BreadcrumbItem href="/app/ro-configuration/nozzleMapList" tag="a">
                Nozzle Map List
                </BreadcrumbItem>
                <BreadcrumbItem active>Edit Nozzle Map</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit Nozzle Map
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() => history.push("/app/ro-configuration/nozzleMapList")}
              >
                Back
              </Button>
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <FormGroup>
                <h5 className="my-1 text-bold-600">Tank</h5>

                    {/* <Label>Tank</Label> */}
                    <CustomInput 
                      type="select"
                      name="tank"
                      value={this.state.tank}
                      onChange={this.changeHandler1}>
                      {this.state.tankN?.map((tankp) => (
                      <option value={tankp._id} key={tankp._id}>
                        {tankp.tank}
                      </option>
                      ))}
                    </CustomInput>
                  </FormGroup>
                </Col> 
                <Col lg="6" md="6" sm="6" className="mb-2">
                <FormGroup>
                <h5 className="my-1 text-bold-600">Nozzle</h5>
                    {/* <Label>Nozzle</Label> */}
                    <CustomInput 
                      type="select"
                      name="tank"
                      value={this.state.nozzle}
                      onChange={this.changeHandler1}>
                      {this.state.nozzleN?.map((nozzlep) => (
                      <option value={nozzlep._id} key={nozzlep._id}>
                        {nozzlep.nozzle}
                      </option>
                      ))}
                    </CustomInput>
                  </FormGroup>
                  {/* <Label>nozzle</Label>
                  <Input
                    type="text"
                    name="nozzle"
                    value={this.state.nozzle}
                    onChange={this.changeHandler}>
                  </Input> */}
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                <h5 className="my-1 text-bold-600">Select MPD</h5>
                  {/* <Label>MPD </Label> */}
                  <Input
                    type="text"
                    name="mpd"
                    value={this.state.mpd}
                    onChange={this.changeHandler}>
                  </Input>
                  {/* <Select
                className="React"
                classNamePrefix="select"
                name="mpd"
                defaultValue={mpdOptions[1]}
                options={mpdOptions}
                value={selectedMpdOption}
                onChange={this.handleChangeMPD}
                isClearable={true}
              /> */}
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                <h5 className="my-1 text-bold-600">Select BAY</h5>
                  {/* <Label>BAY</Label> */}
                  <Input
                    type="text"
                    name="bay"
                    value={this.state.bay}
                    onChange={this.changeHandler}>
                  </Input>
                         {/* <Select
                className="React"
                classNamePrefix="select"
                name="bay"
                defaultValue={bayOptions[1]}
                options={bayOptions}
                value={selectedBayOption}
                onChange={this.handleChangeBay}
                isClearable={true}
              /> */}
                </Col>
              </Row> 
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1">
                    Update
                  </Button.Ripple>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}