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

export default class AddDsmClosing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dealer_name1: "",
      date: "",
      name_of_dsm: "",
      ms_testing: "",
      ms_own_use: "",
      hsd_testing: "",
      hsd_own_use: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    let { id } = this.props.match.params;
    this.setState({ dealer_name1: id, name_of_dsm: id });
  };
  submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://3.108.185.7/nodejs/api/dealer/adddsmclosing", this.state)
      .then((response) => {
        console.log(response);

        // swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/shiftManagement/dSMClosingSheetList");
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
                Add Dsm Closing
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() =>
                  history.push("/app/shiftManagement/dSMClosingSheetList")
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
                  <Label>MS Testing</Label>
                  <Input
                    required
                    type="number"
                    name="ms_testing"
                    value={this.state.ms_testing}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>MS own Use</Label>
                  <Input
                    required
                    type="number"
                    name="ms_own_use"
                    value={this.state.ms_own_use}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>HSD Testing</Label>
                  <Input
                    required
                    type="number"
                    name="hsd_testing"
                    value={this.state.hsd_testing}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>HSD Own Use</Label>
                  <Input
                    required
                    type="number"
                    name="hsd_own_use"
                    value={this.state.hsd_own_use}
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
