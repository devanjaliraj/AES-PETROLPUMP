import React from "react";
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
import axios from "axios";
import { history } from "../../../history";

class RetailSellingPrice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      opneing_dip1: "",
      opneing_liter1: "",
      rsp1: "",
      opneing_dip2: "",
      opneing_liter2: "",
      rsp2: "",
    };
  }
  componentDidMount() {
    let { id } = this.props.match.params;
    axios
      .get(`http://3.108.185.7/nodejs/api/dealer/getonersp/${id}`)
      .then((response) => {
        console.log(response);
        this.setState({
          date: response.data.data.date,
          opneing_dip1: response.data.data.opneing_dip1,
          opneing_liter1: response.data.data.opneing_liter1,
          rsp1: response.data.data.rsp1,
          opneing_dip2: response.data.data.opneing_dip2,
          opneing_liter2: response.data.data.opneing_liter2,
          rsp2: response.data.data.rsp2,
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
      .post(`http://3.108.185.7/nodejs/api/dealer/updatersp/${id}`, this.state)
      .then((response) => {
        console.log(response);
        // swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/shiftmanagement/retailSellingPriceList");
      })
      .catch((error) => {
        console.log(error);
      });
    };
  render() {
    return (
      <Card>
        <Row className="m-1">
          <Col>
            <h1 col-sm-6 className="float-left">
              Update Retail Selling Price
            </h1>
          </Col>
          <Col>
            <Button
              className=" btn btn-danger float-right"
              onClick={() =>
                history.push("/app/shiftmanagement/retailSellingPriceList")}
            >
              Back
            </Button>
          </Col>
        </Row>
        <CardBody>
          <Form className="m-1" onSubmit={this.submitHandler}>
            <Row>
              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">Date</h5>
                <Input
                  type="text"
                  name="date"
                  value={this.state.date}
                  onChange={this.changeHandler}
                ></Input>
              </Col>
            </Row>
            <CardHeader>
              <CardTitle>MS</CardTitle>
            </CardHeader>
            <Row>
              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">Opening Dip</h5>
                <Input
                  type="number"
                  name="opneing_dip1"
                  value={this.state.opneing_dip1}
                  onChange={this.changeHandler}
                ></Input>
              </Col>
              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">Opening Litres</h5>
                <Input
                  type="number"
                  name="opneing_liter1.closing_Entry"
                  value={this.state.opneing_liter1?.closing_Entry}
                  onChange={this.changeHandler}
                ></Input>
              </Col>
              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">Rsp Entry</h5>
                <Input
                  type="number"
                  name="rsp1"
                  value={this.state.rsp1}
                  onChange={this.changeHandler}
                ></Input>
              </Col>
            </Row>
            <CardHeader>
              <CardTitle>Hsd</CardTitle>
            </CardHeader>
            <Row>
              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">Opening Dip</h5>
                <Input
                  type="number"
                  name="opneing_dip2"
                  value={this.state.opneing_dip2}
                  onChange={this.changeHandler}
                ></Input>
              </Col>
              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">Opening Litres</h5>
                <Input
                  type="number"
                  name="opneing_liter2.closing_Entry"
                  value={this.state.opneing_liter2?.closing_Entry}
                  onChange={this.changeHandler}
                ></Input>
              </Col>
              <Col md="6" sm="12" style={{ marginBottom: 15 }}>
                <h5 className="my-1 text-bold-600">Rsp Entry</h5>
                <Input
                  type="number"
                  name="rsp2"
                  value={this.state.rsp2}
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
export default RetailSellingPrice;