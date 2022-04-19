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
  // Breadcrumb,
  // BreadcrumbItem,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
// import { history } from "../../../history";
// import swal from "sweetalert";
import { Route } from "react-router-dom";

export default class EditBankForTransaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dealer_name1: "",
      name_of_bank: "",
      credit_limit_of_bank: "",
      intrest_rates: "",
      ifsc_code: "",
      cresit_offer: "",
      account_no: "",
      document_upload: "",
      selectedFile: null,
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/dealer/getonebank/${id}`)
      .then((response) => {
        console.log(response);
        this.setState({
          dealer_name1: response.data.data.dealer_name1,
          name_of_bank: response.data.data.name_of_bank,
          credit_limit_of_bank: response.data.data.credit_limit_of_bank,
          intrest_rates: response.data.data.intrest_rates,
          ifsc_code: response.data.data.ifsc_code,
          cresit_offer: response.data.data.cresit_offer,
          account_no: response.data.data.account_no,
          document_upload: response.data.data.document_upload,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  //Image Submit Handler
  // onChangeHandler = (event) => {
  //   this.setState({ selectedFile: event.target.files[0] });
  //   this.setState({ selectedName: event.target.files[0].name });
  //   console.log(event.target.files[0]);
  // };
  // changeHandler1 = (e) => {
  //   this.setState({ status: e.target.value });
  // };
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    const data = new FormData();
    data.append("name_of_bank", this.state.name_of_bank);
    data.append("credit_limit_of_bank", this.state.credit_limit_of_bank);
    data.append("intrest_rates", this.state.intrest_rates);
    data.append("ifsc_code", this.state.ifsc_code);
    data.append("cresit_offer", this.state.cresit_offer);
    data.append("account_no", this.state.account_no);
    if (this.state.selectedFile !== null) {
      data.append(
        "document_upload",
        this.state.selectedFile,
        this.state.selectedName
      );
    }
    for (var value of data.values()) {
      console.log(value);
    }
    for (var key of data.keys()) {
      console.log(key);
    }

    let { id } = this.props.match.params;
    // var user = JSON.parse(localStorage.getItem('userData'));

    axiosConfig
      .post(`/dealer/updateonebank/${id}`, data)

      .then((response) => {
        console.log(response);

        this.props.history.push(
          `/app/ro-configuration/bankForTransactionList/${this.state.dealer_name1}`
        );
      })
      .catch((error) => {
        //  swal("Error!", "You clicked the button!", "error");
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
                        `/app/ro-configuration/bankForTransactionList/${this.state.dealer_name1}`
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
                    name="document_upload"
                    value={this.state.document_upload}
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
