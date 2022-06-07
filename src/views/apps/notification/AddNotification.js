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
  FormGroup,
  CustomInput,
} from "reactstrap";
import { Route } from "react-router-dom";

import { history } from "../../../history";
// import axiosConfig from "../../../../axiosConfig";
// import swal from "sweetalert";
import axiosConfig from "../../../axiosConfig";
export class AddNotification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dealer: "",
      desc: "",
    };
    this.state = {
      dealerN: [],
    };
  }

  async componentDidMount() {
    //dealer List
    axiosConfig
      .get("/dealer/alldealers")
      .then((response) => {
        console.log(response);
        this.setState({ dealerN: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
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
      .post(
        "/admin/addnotification",
        this.state
        // {
        //   headers: {
        //     "auth-adtoken": localStorage.getItem("auth-adtoken"),
        //   },
        // }
      )
      .then((response) => {
        console.log(response);
        // swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/notification/notificationList");
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
                Add Notification
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() =>
                      history.push("/app/notification/notificationList")
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
                <Col lg="4" md="4" className="mb-2">
                  <FormGroup>
                    <Label>Dealer List</Label>
                    <CustomInput
                      type="select"
                      name="dealer"
                      value={this.state.dealer}
                      onChange={this.changeHandler}
                    >
                      {this.state.dealerN?.map((dealerp) => (
                        <option value={dealerp._id} key={dealerp._id}>
                          {dealerp.dealer_name}
                        </option>
                      ))}
                    </CustomInput>
                  </FormGroup>
                </Col>
                <Col lg="12" md="12" className="mb-2">
                  <Label>Descripiton</Label>
                  <Input
                    type="textarea"
                    name="desc"
                    value={this.state.desc}
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
                  Add Notification List
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default AddNotification;
