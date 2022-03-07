import React, { Component } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
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

export default class DesignYourOutlet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name_of_customer: "",
      mobile: "",
      credit_limit: "",
      credit_term_lube: "",
      addres: "",
      local_id: "",
      vehicle_no: "",
      local_guarantor_name: "",
      local_guarantor_no:"",
	    document_upload	:	""


    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    axios
      .get(`http://3.108.185.7/nodejs/api/dealer/getonecreditcustomers/${id}`)
      .then((response) => {
        console.log(response);
        this.setState({
          name_of_customer: response.data.data.name_of_customer,
          mobile: response.data.data.mobile,
          credit_limit: response.data.data.credit_limit,
          credit_term_lube: response.data.data.credit_term_lube,
          addres: response.data.data.addres,
          local_id: response.data.data.local_id,
          location: response.data.data.location,
          vehicle_no: response.data.data.vehicle_no,
          local_guarantor_name: response.data.data.local_guarantor_name,
          local_guarantor_no: response.data.data.local_guarantor_no,
        });
      })
      .catch((error) => {
        console.log(error);
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
        `http://3.108.185.7/nodejs/api/dealer/addcreditcustomers/${id}`,
        this.state
      )
      .then((response) => {
        console.log(response);
        // swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/ro-configuration/CreditCustomersList");
      })
      .catch((error) => {
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
                <BreadcrumbItem href="/" tag="a">
                  Home
                </BreadcrumbItem>
                {/* <BreadcrumbItem href="/app/material/materialList" tag="a">
                    Material List
                    </BreadcrumbItem> */}
                <BreadcrumbItem active>Credit Customers</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Credit Customers
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() =>
                history.push("/app/ro-configuration/CreditCustomersList")}
              >
                Back
              </Button>
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Name of customer</Label>
                  <Input
                    type="text"
                    name="name_of_customer"
                    value={this.state.name_of_customer}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Phone no.</Label>
                  <Input
                    type="number"
                    name="mobile"
                    value={this.state.mobile}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Credit limit</Label>
                  <Input
                    type="text"
                    name="credit_limit"
                    value={this.state.credit_limit}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Credit term lube </Label>
                  <Input
                    type="text"
                    name="credit_term_lube"
                    value={this.state.credit_term_lube}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Address</Label>
                  <Input
                    type="text"
                    name="addres"
                    value={this.state.addres}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Local ID</Label>
                  <Input
                    type="text"
                    name="local_id"
                    value={this.state.local_id}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Vehicle no. </Label>
                  <Input
                    type="number"
                    name="vehicle_no"
                    value={this.state.vehicle_no}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Local guarantor name</Label>
                  <Input
                    type="text"
                    name="local_guarantor_name"
                    value={this.state.local_guarantor_name}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Local guarantor no.</Label>
                  <Input
                    type="number"
                    name="local_guarantor_no"
                    value={this.state.local_guarantor_no}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Document upload </Label>
                  <Input
                    type="file"
                    name="document_upload"
                    value={this.state.document_upload}
                    onChange={this.changeHandler}
                  ></Input>
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