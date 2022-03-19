import React, { Component } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  FormGroup,
  CustomInput,
  Form,
  Label,
  Input,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import axios from "axios";
import { history } from "../../../history";
// import swal from "sweetalert";

export default class BasicDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
        dealer_name:"",
        mobile: "",
        email:"",
        master_oil_company:"",
        location:"",
        omc_customer_code:"",
        state:"",
        district:"",
       
    };
    this.state = {
      mocN: [],
     cityS:[],
     stateC:[]
    };
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentDidMount() {
    
  //  state
  axios
  .get("http://3.108.185.7/nodejs/api/admin/allstate")
  .then((response) => {
    console.log(response.data.data);
    this.setState({ stateC: response.data.data });
  })
  .catch((error) => {
    console.log(error);
  });

  //  city
  axios
  .get("http://3.108.185.7/nodejs/api/admin/allcity")
  .then((response) => {
    console.log(response.data.data);
    this.setState({ cityS: response.data.data });
  })
  .catch((error) => {
    console.log(error);
  });


    // MOC
    axios
    .get("http://3.108.185.7/nodejs/api/dealer/allMasterOilCompany")
    .then((response) => {
      console.log(response.data.data);
      this.setState({ mocN: response.data.data });
    })
    .catch((error) => {
      console.log(error);
    });

    let { id } = this.props.match.params;
    axios
      .get(`http://3.108.185.7/nodejs/api/dealer/viewonedealershipform/${id}`)
      .then(response => {
        console.log(response);
        this.setState({
            dealer_name: response.data.data.dealer_name,
            mobile: response.data.data.mobile,
            email: response.data.data.email,
            master_oil_company: response.data.data.master_oil_company,
            location: response.data.data.location,
            omc_customer_code: response.data.data.omc_customer_code,
            state: response.data.data.state,
            district: response.data.data.district,
           
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = e => {
    e.preventDefault();
    let { id } = this.props.match.params;
    axios
      .post(`http://3.108.185.7/nodejs/api/dealer/addeditadvancedealershipform/${id}`, this.state)
      .then(response => {
        console.log(response);
        // swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/ro-configuration/RoConfigurationList");
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Row>
          <Col sm="12">
            <div>
              <Breadcrumb listTag="div">
                <BreadcrumbItem href="/analyticsDashboard" tag="a">
                  Home
                </BreadcrumbItem>
                {/* <BreadcrumbItem href="/app/material/materialList" tag="a">
                  Material List
                </BreadcrumbItem> */}
                <BreadcrumbItem active>Edit Basic Details</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
              Edit Basic Details
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() => history.push("/app/ro-configuration/RoConfigurationList")}
              >
                Back
              </Button>
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row>
              <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Name Of Dealer</Label>
                  <Input
                    type="text"
                    name="dealer_name"
                    value={this.state.dealer_name}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Mobile No.</Label>
                  <Input
                    type="number"
                    name="mobile"
                    value={this.state.mobile}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Email ID</Label>
                  <Input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
            
                <Col md="6" sm="12">
                <FormGroup>
                   <Label>Master Oil Company</Label>
                  <CustomInput 
                    type="select"
                    name="master_oil_company"
                    value={this.state.master_oil_company}
                    onChange={this.changeHandler}>
                       {this.state.mocN?.map((mocp) => (
                      <option value={mocp._id} key={mocp._id}>
                        {mocp.name}
                      </option>
                    ))}
                   
                  </CustomInput>
                </FormGroup>
              </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Location</Label>
                  <Input
                    type="text"
                    name="location"
                    value={this.state.location}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>OMC Customer Code</Label>
                  <Input
                    type="text"
                    name="omc_customer_code"
                    value={this.state.omc_customer_code}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
              
              <Col md="6" sm="12">
                <FormGroup>
                <Label>State</Label>
                  <CustomInput 
                    type="select"
                    name="state"
                    value={this.state.state}
                    onChange={this.changeHandler}>
                      {this.state.stateC?.map((statep) => (
                      <option value={statep._id} key={statep._id}>
                        {statep.name}
                      </option>
                    ))}
                  </CustomInput>
                </FormGroup>
              </Col>
              
                <Col md="6" sm="12">
                <FormGroup>
                <Label>District </Label>
                  <CustomInput 
                  type="select"
                  name="district"
                    value={this.state.district}
                    onChange={this.changeHandler}>
                        {this.state.cityS?.map((cityp) => (
                      <option value={cityp._id} key={cityp._id}>
                        {cityp.name}
                      </option>
                    ))}
                  </CustomInput>
                </FormGroup>
              </Col>
                

              </Row>

              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
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
