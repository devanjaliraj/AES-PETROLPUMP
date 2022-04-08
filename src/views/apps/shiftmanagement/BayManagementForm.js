// import React, { useState, useEffect } from "react";
import React from "react";
import {
  Card,
  // CardHeader,
  CardBody,
  Row,
  Col,
  Form,
  Button,
  Input,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
// import { history } from "../../../history";
import { Route } from 'react-router-dom'

class BayManagementForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dsm_name: "",
      nozzel: "",
      closing_Entry: "",
    };
  }
  componentDidMount() {
    let { id } = this.props.match.params;

    // all dsm
    axiosConfig
      .get("/dealer/getDsnform")
      .then((response) => {
        console.log(response.data.data);
        this.setState({ dsm: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });

    // all nozzle
    axiosConfig
      .get("/dealer/allnozzle")
      .then((response) => {
        console.log(response.data.data);
        this.setState({ nozzles: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });

    axiosConfig
      .get(`/dealer/getonebm/${id}`)
      .then((response) => {
        console.log(response);
        this.setState({
          dsm_name: response.data.data.dsm_name,
          nozzel: response.data.data.nozzel,
          closing_Entry: response.data.data.closing_Entry,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  // submitHandler = (e) => {
  //   e.preventDefault();
  //   let { id } = this.props.match.params;
  //   axiosConfig
  //     .post(`http://3.108.185.7/nodejs/api/dealer/updatersp/${id}`, this.state)
  //     .then((response) => {
  //       console.log(response);
  //       // swal("Success!", "Submitted SuccessFull!", "success");
  //       this.props.history.push("/app/shiftmanagement/retailSellingPriceList");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  render() {
    return (
      <Card>
        <Row className="m-1">
          <Col>
            <h1 col-sm-6 className="float-left">
              Update BayManagementForm
            </h1>
          </Col>
          <Col>
               <Route render={({ history}) => (
                                                                   
            <Button
              className=" btn btn-danger float-right"
              onClick={() =>
                history.push("/app/shiftmanagement/bayManagementList")
              }
            >
              Back
            </Button>
            )} />
          </Col>
        </Row>

        <CardBody>
          <Form className="m-1">
            <Row>
              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">Choose DSM Name</h5>
                <Input
                  type="select"
                  name="dsm_name"
                  value={this.state.dsm_name}
                  onChange={this.changeHandler}
                >
                  {this.state.dsm?.map((mocp) => (
                    <option value={mocp._id} key={mocp._id}>
                      {mocp.dsm_name}
                    </option>
                  ))}
                </Input>
              </Col>
              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">Choose Nozzle</h5>
                <Input
                  type="select"
                  name="nozzel"
                  value={this.state.nozzel}
                  onChange={this.changeHandler}
                >
                  {this.state.nozzles?.map((mocp) => (
                    <option value={mocp._id} key={mocp._id}>
                      {mocp.nozzle}
                    </option>
                  ))}
                </Input>
              </Col>
              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">Closing Entry</h5>
                <Input
                  type="number"
                  name="closing_Entry"
                  value={this.state.closing_Entry}
                  onChange={this.changeHandler}
                ></Input>
              </Col>
            </Row>

            <Col lg="12" md="12" sm="12" className="mb-5">
              <Button.Ripple
                color="primary"
                type="submit"
                className="mr-1 mb-1"
              >
                Submit
              </Button.Ripple>
            </Col>
          </Form>
        </CardBody>
      </Card>
    );
  }
}
export default BayManagementForm;
