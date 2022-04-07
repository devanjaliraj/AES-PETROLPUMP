import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  Form,
  Button,
  Input,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
import { history } from "../../../history";

const concernOption = [
  "Service Request",
  "Spare Puecahse",
  "Maintainanace of Assets",
  "Others",
];

class RaiseConcernToAESForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      concern: [],
      remark: "",
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/dealer/getoneraiseConcern/${id}`)
      .then((response) => {
        console.log(response);
        this.setState({
          concern: response.data.data.concern,
          remark: response.data.data.remark,
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
    axiosConfig
      .post(
        `/dealer/updateraiseConcern/${id}`,
        this.state
      )
      .then((response) => {
        console.log(response);
        // swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push(
          "/app/facilityManagement/raiseConcernToAESList"
        );
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Raise Form</CardTitle>
          <Button
            className=" btn btn-danger float-right"
            onClick={() =>
              history.push("/app/facilityManagement/raiseConcernToAESList")
            }
          >
            Back
          </Button>
        </CardHeader>
        <CardBody>
          <Form className="m-1" onSubmit={this.submitHandler}>
            <Row>
              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">Total Pieces Available</h5>
                <Input
                  type="select"
                  name="concern"
                  value={this.state.concern}
                  onChange={this.changeHandler}
                >
                  {concernOption.map((concern, i) => {
                    return (
                      <option key={i} value={this.concern}>
                        {concern}
                      </option>
                    );
                  })}
                </Input>
              </Col>
              <Col md="6" sm="12" style={{ marginBottom: 15 }}>
                <h5 className="my-1 text-bold-600">Remarks</h5>
                <Input
                  type="text"
                  name="remark"
                  value={this.state.remark}
                  onChange={this.changeHandler}
                ></Input>
              </Col>

              <Col lg="12" md="12" sm="12" className="mb-5">
                <Button.Ripple
                  color="primary"
                  type="submit"
                  className="mr-1 mb-1"
                >
                  Submit
                </Button.Ripple>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    );
  }
}
export default RaiseConcernToAESForm;
