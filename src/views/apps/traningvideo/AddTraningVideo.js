import React, { Component } from "react";
import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  Label,
  Button,
  
} from "reactstrap";
// import { history } from "../../../history";
 import axiosConfig from "../../../axiosConfig";
// import swal from "sweetalert";
//import axios from "axios";
import { Route } from "react-router-dom";

export class AddTraningVideo extends Component {
  constructor(props) {
    super(props);

    this.state = {
        title: "",
        desc: "",
        link: "",
       };
      }

  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();

    axiosConfig
      .post("/admin/addvideo", this.state,  )
      .then((response) => {
        console.log(response);
        // swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/traningvideo/TraningVideoList");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add Traning Video
              </h1>
            </Col>
            <Col>
            <Route
              render={({ history }) => (
              <Button
                className=" btn btn-danger float-right"
                onClick={() =>
                  history.push("/app/traningvideo/TraningVideoList")
                }
                >
                Back
              </Button>
            )}
          />
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row className="mb-2">
             
                <Col lg="6" md="6" className="mb-2">
                  <Label>Title </Label>
                  <Input
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.changeHandler}
                  
                  />
                </Col>
              
                <Col lg="6" md="6" className="mb-2">
                  <Label>Descriptions </Label>
                  <Input
                    type="textarea"
                    name="desc"
                    value={this.state.desc}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Link </Label>
                  <Input
                    type="text"
                    name="link"
                    value={this.state.link}
                    onChange={this.changeHandler}
                  />
                </Col>
           
              </Row>
              <Row>
                <Button.Ripple
                  className="mr-1 mb-1"
                  type="submit"
                  color="primary"
                >
                  Add Video
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default AddTraningVideo;
