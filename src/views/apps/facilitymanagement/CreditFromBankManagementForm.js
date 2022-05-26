
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
import { Download } from "react-feather";
// import { history } from "../../../history";
import axiosConfig from "../../../axiosConfig";
import { Route } from 'react-router-dom'

class CreditFromBankManagementForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Sanctioned_Amount: "",
      Uplaod_Document: "",
      Remarks: "",
      Interest_Rate: "",
      Type_of_Loan: "",
      selectedFile: null,
      selectedName: "",
      

    };
  }
  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    console.log(event.target.files[0]);
  };
  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/dealer/getoneCreditBankFM/${id}`)
      .then((response) => {
        this.setState({
          Sanctioned_Amount: response.data.data.Sanctioned_Amount,
          Uplaod_Document: response.data.data.Uplaod_Document,
          Remarks: response.data.data.Remarks,
          Interest_Rate: response.data.data.Interest_Rate,
          Type_of_Loan: response.data.data.Type_of_Loan,
        
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
    console.log(this.props.match.params, this.state);
    const data = new FormData();
    data.append("Sanctioned_Amount", this.state.Sanctioned_Amount);
    data.append("Interest_Rate", this.state.Interest_Rate);
    data.append("Remarks", this.state.Remarks);
    data.append("Type_of_Loan", this.state.Type_of_Loan);
  
    if (this.state.selectedFile !== null) {
      data.append(
        "Uplaod_Document",
        this.state.selectedFile,
        this.state.selectedName
      );
    //   data.append(
    //     "Upload_Fire_Equipment",
    //     this.state.selectedFile,
    //     this.state.selectedName
    //   );
    }
    for (var value of data.values()) {
      console.log(value);
    }
    for (var key of data.keys()) {
      console.log(key);
    }

    let { id } = this.props.match.params;
    axiosConfig
      .post(`/dealer/updateCreditBankFM/${id}`, data)
      .then((response) => {
        console.log(response);
        this.props.history.push("/app/facilityManagement/otherEquipmentList");
      })

      .catch((error) => {
        console.log(error);
      });
  };
  download = (e) => {
    console.log(e.target.href);
    fetch(e.target.href, {
      method: "GET",
      headers: {},
    })
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image.png"); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Other Equipment</CardTitle>
          <Route render={({ history}) => (
          <Button
            className=" btn btn-danger float-right"
            onClick={() =>
              history.push("/app/facilityManagement/otherEquipmentList")
            }
          >
            Back
          </Button>)}/>
        </CardHeader>
        <CardBody>
          <Form className="m-1" onSubmit={this.submitHandler}>
            <Row>
              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">Equipment</h5>
                <Input
                  type="text"
                  name="Sanctioned_Amount"
                  value={this.state.Sanctioned_Amount}
                  onChange={this.changeHandler}
                ></Input>
              </Col>
              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">Due Date-1</h5>
                <Input
                  type="date"
                  name="Interest_Rate"
                  value={this.state.Interest_Rate}
                  onChange={this.changeHandler}
                ></Input>
              </Col>
              <Col md="6" sm="12">
                <h5 className="my-2 text-bold-600">Uploaded Document</h5>
                <a
                  href={this.state.Uplaod_Document}
                  download
                  target='blank'
                  onClick={(e) => this.download(e)}
                  className="mb-3 p-1 rounded bg-light">
                  <Download className="mr-50" size="25px" color="blue" />
                  View/Download Document
                </a>
              </Col>
              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">Remarks-1</h5>
                <Input
                  type="text"
                  name="Remarks"
                  value={this.state.Remarks}
                  onChange={this.changeHandler}
                ></Input>
              </Col>
              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">Fire Equipment</h5>
                <Input
                  type="text"
                  name="Type_of_Loan"
                  value={this.state.Type_of_Loan}
                  onChange={this.changeHandler}
                ></Input>
              </Col>
              <Col lg="12" md="12" sm="12" className="mt-5">
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
export default CreditFromBankManagementForm;