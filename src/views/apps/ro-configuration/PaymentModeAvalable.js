import React, { Component } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Form,
  Label,
  FormGroup,
  Input,
  CustomInput,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import axios from "axios";
import { history } from "../../../history";
// import swal from "sweetalert";

export default class PaymentModeAvalable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select_mode: "",
      select_bank: "",
      settlement_day: "",
     
    };
    this.state = {
      bankC: [],
     
    };
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentDidMount() {

     //Bank
     axios
     .get("http://3.108.185.7/nodejs/api/dealer/allbank")
     .then((response) => {
       console.log(response);
       this.setState({ bankC: response.data.data });
     })
     .catch((error) => {
       console.log(error);
     });

    let { id } = this.props.match.params;
    axios
      .get(`http://3.108.185.7/nodejs/api/dealer/getonepayment/${id}`)
      .then((response) => {
        console.log(response);
        this.setState({
          select_mode: response.data.data.select_mode,
          select_bank: response.data.data.select_bank,
          settlement_day: response.data.data.settlement_day,
         
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    let { id } = this.props.match.params;
    axios
      .post(
        `http://3.108.185.7/nodejs/api/dealer/updateonepayment/${id}`,
        this.state
      )
      .then((response) => {
        console.log(response);
        // swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/ro-configuration/paymentModeList");
      })
      .catch((error) => {
        console.log(error.response);
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
                <BreadcrumbItem active>Edit Payment Mode Avalable</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit Payment Modes Available
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() =>
                history.push("/app/ro-configuration/paymentModeList")}
              >
                Back
              </Button>
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Col md="6" sm="12">
                <FormGroup>
                  <Label>Select Mode </Label>
                  <CustomInput 
                    type="select"
                    name="select_mode"
                    value={this.state.select_bank}
                    onChange={this.changeHandler}>
                    <option>Mode 1</option>
                    <option>Mode 2</option>
                    <option>Mode 3</option>
                    <option>Mode 4</option>
                    <option>Mode 5</option>
                    <option>Mode 6</option>
                  </CustomInput>
                </FormGroup>
              </Col>
              <Col lg="6" md="6" sm="6" className="mb-2">
              <Label>Select Bank</Label>
                  <CustomInput
                    type="select"
                    name="select_bank"
                    value={this.state.select_bank}
                    onChange={this.changeHandler}
                  >
                    {this.state.pBank.map((bankp) => (
                      <option value={bankp._id} key={bankp._id}>
                        {bankp.name}
                      </option>
                    ))}
                  </CustomInput>
                </Col>
              {/* <Col md="6" sm="12">
                <FormGroup>
                  <Label>Select Bank</Label>
                  <CustomInput
                    type="select" 
                    name="select_bank"
                    value={this.state.select_bank}
                    onChange={this.changeHandler}>
                    <option>Bank 1</option>
                    <option>Bank 2</option>
                    <option>Bank 3</option>
                    <option>Bank 4</option>
                    <option>Bank 5</option>
                    <option>Bank 6</option>
                    <option>Bank 7</option>
                  </CustomInput>
                </FormGroup>
              </Col> */}

              <Col lg="6" md="6" sm="6" className="mb-2">
                <Label>Settlment In Day</Label>
                <Input
                  type="text"
                  name="settlement_day"
                  value={this.state.settlement_day}
                  onChange={this.changeHandler}
                ></Input>
              </Col>
              <Row>
                <Col
                  lg="6"
                  md="6"
                  sm="6"
                  className="mb-2"
                  style={{ marginLeft: "15px" }}
                >
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