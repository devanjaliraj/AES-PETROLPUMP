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
// import swal from "sweetalert";
export default class EditBankForTransaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name_of_bank: "", 
        credit_limit_of_bank: "",
        intrest_rates: "",
        ifsc_code:"",
        cresit_offer:"",
        account_no:"",
        document_upload:""
     
    };
  }
  componentDidMount() {
    let { id } = this.props.match.params;
    axios
      .get(`http://3.108.185.7/nodejs/api/dealer/getonebank/${id}`)
      .then(response => {
        console.log(response);
        this.setState({
            name_of_bank: response.data.data.name_of_bank,
            credit_limit_of_bank: response.data.data.credit_limit_of_bank,
            intrest_rates: response.data.data.intrest_rates,
            ifsc_code: response.data.data.ifsc_code,
            cresit_offer: response.data.data.cresit_offer,
            document_upload: response.data.data.document_upload,
            account_no: response.data.data.account_no
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  changeHandler1 = e => {
    this.setState({ status: e.target.value });
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = e => {
    e.preventDefault();
    let { id } = this.props.match.params;
    axios
      .post(`http://3.108.185.7/nodejs/api/dealer/updateonebank/${id}`, this.state)
      .then(response => {
        console.log(response);
        // swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/ro-configuration/bankForTransactionList");
      })
      .catch(error => {
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
                <BreadcrumbItem href="/app/ro-configuration/bankForTransactionList" tag="a">
                Bank For Transaction List
                </BreadcrumbItem>
                <BreadcrumbItem active>Edit Bank
                For
                Transaction</BreadcrumbItem>
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
              <Button
                className=" btn btn-danger float-right"
                onClick={() => history.push("/app/ro-configuration/bankForTransactionList")}
              >
                Back
              </Button>
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Name of Bank</Label>
                  <Input
                    type="text"
                    name="name_of_bank"
                    value={this.state.name_of_bank}
                    onChange={this.changeHandler}>
                  </Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Credit Limit Of Bank</Label>
                  <Input
                    type="number"
                    name="credit_limit_of_bank"
                    value={this.state.credit_limit_of_bank}
                    onChange={this.changeHandler}>
                  </Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Intrest Rates</Label>
                  <Input
                    type="number"
                    name="intrest_rates"
                    value={this.state.intrest_rates}
                    onChange={this.changeHandler}>
                  </Input>
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
                  <Label>IFSC Code</Label>
                  <Input
                    type="number"
                    name="ifsc_code"
                    value={this.state.ifsc_code}
                    onChange={this.changeHandler}>
                  </Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Credit Offer from Bank Valid upto</Label>
                  <Input
                    type="text"
                    name="cresit_offer"
                    value={this.state.cresit_offer}
                    onChange={this.changeHandler}>
                  </Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Document upload </Label>
                  <Input
                    type="file"
                    name="document_upload"
                    // value={this.state.document_upload}
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