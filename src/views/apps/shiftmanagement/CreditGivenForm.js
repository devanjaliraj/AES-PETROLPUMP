import React from "react";
import {
  Card,
  // CardHeader,
  // CardTitle,
  CardBody,
  Row,
  Col,
  Button,
  Input,
} from "reactstrap";
import axios from "axios";
import { history } from "../../../history";
// const colourOptions = [
//   { value: "ocean", label: "Ocean" },
//   { value: "blue", label: "Blue" },
//   { value: "purple", label: "Purple" },
//   { value: "red", label: "Red" },
//   { value: "orange", label: "Orange" },
// ];

class CreditGiven extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dealer_Id: "",
      date: "",
      name_of_customer: "",
      vehicle_no: "",
      credit_for: "",
      closing_Entry: "",
      opening_balance: "",
      credit_limit: "",
      payment_overdue_as_on_date: "",
      credit_given_today_amount: "",
      dsm_name: "",
      credit_setalment: "",
    };
  }
  componentDidMount() {
    let { id } = this.props.match.params;

    // // all dsm
    // axios
    //   .get("http://3.108.185.7/nodejs/api/dealer/getDsnform")
    //   .then((response) => {
    //     console.log(response.data.data);
    //     this.setState({ dsm: response.data.data });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    axios
      .get(`http://3.108.185.7/nodejs/api/dealer/getonecreditgiven/${id}`)
      .then((response) => {
        console.log(response);
        this.setState({
          date: response.data.data.date,
          dealer_Id: response.data.data.dealer_Id,
          name_of_customer: response.data.data.name_of_customer,
          vehicle_no: response.data.data.vehicle_no,
          credit_for: response.data.data.credit_for,
          opening_balance: response.data.data.opening_balance,
          credit_limit: response.data.data.credit_limit,
          payment_overdue_as_on_date:
            response.data.data.payment_overdue_as_on_date,
          credit_given_today_amount:
            response.data.data.credit_given_today_amount,
          dsm_name: response.data.data.dsm_name,
          credit_setalment: response.data.data.credit_setalment,
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
  //   axios
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
              Credit Given To
            </h1>
          </Col>
          <Col>
            <Button
              className=" btn btn-danger float-right"
              onClick={() =>
                history.push("/app/shiftManagement/creditGivenList")
              }
            >
              Back
            </Button>
          </Col>
        </Row>

        <CardBody>
          <Row>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Date</h5>
              <Input
                type="date"
                name="date"
                value={this.state.date}
                onChange={this.changeHandler}
              ></Input>
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Customers Name</h5>
              <Input
                type="number"
                name="name_of_customer"
                value={this.state.name_of_customer.name_of_customer}
                onChange={this.changeHandler}
              ></Input>
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Vehicle No.</h5>
              <Input
                type="number"
                name="vehicle_no"
                value={this.state.vehicle_no}
                onChange={this.changeHandler}
              ></Input>
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Credit for</h5>
              {/* <Select
                className="React"
                classNamePrefix="select"
                defaultValue={colourOptions[0]}
                name="color"
                options={colourOptions}
              /> */}
              <Input
                type="number"
                name="credit_for"
                value={this.state.credit_for}
                onChange={this.changeHandler}
              ></Input>
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Opening Balance</h5>
              <Input
                type="number"
                name="opening_balance"
                value={this.state.opening_balance}
                onChange={this.changeHandler}
              ></Input>
            </Col>

            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Credit Limit</h5>
              <Input
                type="number"
                name="credit_limit"
                value={this.state.credit_limit}
                onChange={this.changeHandler}
              ></Input>
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Payment Overdue as On Date</h5>
              <Input
                type="number"
                name="payment_overdue_as_on_date"
                value={this.state.payment_overdue_as_on_date}
                onChange={this.changeHandler}
              ></Input>
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Credit Given Today Amount</h5>
              <Input
                type="number"
                name="credit_given_today_amount"
                value={this.state.credit_given_today_amount}
                onChange={this.changeHandler}
              ></Input>
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Credit Setalment</h5>
              <Input
                type="number"
                name="credit_setalment"
                value={this.state.credit_setalment}
                onChange={this.changeHandler}
              ></Input>
            </Col>
            <Col md="6" sm="12" style={{ marginBottom: 15 }}>
              <h5 className="my-1 text-bold-600">Dsm Name</h5>
              {/* <Select
                className="React"
                classNamePrefix="select"
                defaultValue={colourOptions[0]}
                name="color"
                options={colourOptions}
              /> */}
              <Input
                type="number"
                name="dsm_name"
                value={this.state.dsm_name.dsm_name}
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
        </CardBody>
      </Card>
    );
  }
}
export default CreditGiven;
