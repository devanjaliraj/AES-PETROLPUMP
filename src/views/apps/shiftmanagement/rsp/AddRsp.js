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
    let { id } = this.props.match.params;
    this.setState({ dealer_Id: id });
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://3.108.185.7/nodejs/api/dealer/addrsp", this.state)
      .then((response) => {
        console.log(response);

        // swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/shiftmanagement/retailSellingPriceList");
      })
      .catch((error) => {
        console.log(error.response);
        alert("asssss");
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
                  Rsp List
                </BreadcrumbItem>
                <BreadcrumbItem active>Add RSP</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add Rsp
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
                    placeholder=""
                    value={this.state.date}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>

                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Opneing Dip1</Label>
                  <Input
                    required
                    type="number"
                    name="opneing_dip1"
                    placeholder=""
                    value={this.state.opneing_dip1}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Rsp1 </Label>
                  <Input
                    required
                    type="number"
                    name="rsp1"
                    placeholder=""
                    value={this.state.rsp1}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Opneing Dip2</Label>
                  <Input
                    required
                    type="number"
                    name="opneing_dip2"
                    placeholder=""
                    value={this.state.opneing_dip2}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Rsp2 </Label>
                  <Input
                    required
                    type="number"
                    name="rsp2"
                    placeholder=""
                    value={this.state.rsp2}
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
