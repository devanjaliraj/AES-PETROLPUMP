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
import axiosConfig from "../../../axiosConfig";
// import { history } from "../../../history";
// import swal from "sweetalert";
import { Route } from "react-router-dom";

export default class EditBankForTransaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name_of_bank: "",
      credit_limit_of_bank: "",
      intrest_rates: "",
      ifsc_code: "",
      cresit_offer: "",
      account_no: "",
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/dealer/getonebank/${id}`)
      .then((response) => {
        console.log(response);
        this.setState({
          name_of_bank: response.data.data.name_of_bank,
          credit_limit_of_bank: response.data.data.credit_limit_of_bank,
          intrest_rates: response.data.data.intrest_rates,
          ifsc_code: response.data.data.ifsc_code,
          cresit_offer: response.data.data.cresit_offer,
          account_no: response.data.data.account_no,
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
      .post(`/dealer/updateonebank/${id}`, this.state)
      .then((response) => {
        console.log(response);
        // swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/ro-configuration/BankForTransactionList");
      })
      .catch((error) => {
        console.log(error);
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
                {/* <BreadcrumbItem href="/app/material/materialList" tag="a">
                  Material List
                </BreadcrumbItem> */}
                <BreadcrumbItem active>
                  Edit Bank For Transaction
                </BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit Bank For Transaction
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() =>
                      history.push(
                        "/app/ro-configuration/BankForTransactionList"
                      )
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
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Name Of The Bank </Label>
                  <Input
                    type="text"
                    name="name_of_bank"
                    value={this.state.name_of_bank}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Credit Limit For Bank</Label>
                  <Input
                    type="text"
                    name="credit_limit_of_bank"
                    value={this.state.credit_limit_of_bank}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Interest Rates</Label>
                  <Input
                    type="text"
                    name="intrest_rates"
                    value={this.state.intrest_rates}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Account No.</Label>
                  <Input
                    type="text"
                    name="account_no"
                    value={this.state.account_no}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>IFSC code</Label>
                  <Input
                    type="text"
                    name="ifsc_code"
                    value={this.state.ifsc_code}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Credit offer from bank vaild upto</Label>
                  <Input
                    type="text"
                    name="cresit_offer"
                    value={this.state.cresit_offer}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Document upload</Label>
                  <Input
                    type="text"
                    name="omc_customer_code"
                    value={this.state.omc_customer_code}
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
