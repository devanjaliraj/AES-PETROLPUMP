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
// import { data } from "jquery";
// import swal from "sweetalert";

export default class DesignYourOutlet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dealer: "",
      nature: "",
      manufacturer: "",
      purchased_on: "",
    
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    axios
      .get(
        `http://3.108.185.7/nodejs/api/admin/viewoneequipment/${id}`,
      )
      .then((response) => {
        console.log(response);
        this.setState({
          nature: response.data.data.nature,
          manufacturer: response.data.data.manufacturer,
          purchased_on: response.data.data.purchased_on,
          dealer: response.data.data.dealer,
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
          `http://3.108.185.7/nodejs/api/admin/editequipment/${id}`,
          this.state
        )
        .then((response) => {
          console.log(response);
          // swal("Success!", "Submitted SuccessFull!", "success");
          this.props.history.push("/app/ro-configuration/OtherEquipmentList");
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
                <BreadcrumbItem href="/" tag="a">
                  Home
                </BreadcrumbItem>
                {/* <BreadcrumbItem href="/app/material/materialList" tag="a">
                    Material List
                </BreadcrumbItem> */}
                <BreadcrumbItem active>Edit Other Equipment</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit Equipment
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() =>
                  history.push("/app/ro-configuration/OtherEquipmentList")
                }
              >
                Back
              </Button>
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Col lg="6" md="6" sm="6" className="mb-2">
                <Label>Nature</Label>
                <Input
                  type="text"
                  name="nature"
                  value={this.state.nature}
                  onChange={this.changeHandler}
                ></Input>
              </Col>
              <Col lg="6" md="6" sm="6" className="mb-2">
                <Label>Manufacturer</Label>
                <Input
                  type="text"
                  name="manufacturer"
                  value={this.state.manufacturer}
                  onChange={this.changeHandler}
                ></Input>
              </Col>

              <Col lg="6" md="6" sm="6" className="mb-2">
                <Label>Purchased on</Label>
                <Input
                  type="text"
                  name="purchased_on"
                  value={this.state.purchased_on}
                  onChange={this.changeHandler}
                ></Input>
              </Col>
              {/* <Col lg="6" md="6" sm="6" className="mb-2">
                <Label>Dealer</Label>
                <Input
                  type="text"
                  name="dealer_name"
                  value={this.state.dealer}
                  onChange={this.changeHandler}
                ></Input>
              </Col> */}

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
