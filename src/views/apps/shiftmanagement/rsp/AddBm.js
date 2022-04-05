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
import { history } from "../../../../history";

export default class AddRsp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dealer_Id: "",
      dsm__Id: "",
      date: "",
      bay: "",
      nozzel: "",
      product: "",
      closing_Entry: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    let { id } = this.props.match.params;
    this.setState({ dealer_Id: id, dsm__Id: id, bay: id, nozzel: id });
  };
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("http://3.108.185.7/nodejs/api/dealer/addbm", this.state)
      .then((response) => {
        console.log(response);

        // swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/shiftmanagement/bayManagementList");
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
                <BreadcrumbItem
                  href="/app/shiftmanagement/retailSellingPriceList"
                  tag="a"
                >
                  BM List
                </BreadcrumbItem>
                <BreadcrumbItem active>Add BM</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add BM
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() =>
                  history.push("/app/shiftmanagement/retailSellingPriceList")
                }
              >
                Back
              </Button>
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Date</Label>
                  <Input
                    required
                    type="date"
                    name="date"
                    placeholder="Enter date"
                    value={this.state.date}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>

                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Product</Label>
                  <Input
                    required
                    type="text"
                    name="product"
                    value={this.state.product}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Closing Entry </Label>
                  <Input
                    required
                    type="number"
                    name="closing_Entry"
                    value={this.state.closing_Entry}
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
                    Add
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
