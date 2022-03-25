import React from "react";
import axios from "axios";
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

class OtherEquipmentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Equipment: "",
      Due_Date: "",
      Uplaod_Document: "",
      Remarks: "",
      Fire_Equipment: "",
      Upload_Fire_Equipment: "",
      Due_Date2: "",
      Remarks2: "",
    };
  }
  componentDidMount() {
    let { id } = this.props.match.params;
    axios
      .get(`http://3.108.185.7/nodejs//api/dealer/getoneequipment/${id}`)
      .then((response) => {
        console.log(response);

        this.setState({
          Equipment: response.data.data.Equipment,
          Due_Date: response.data.data.Due_Date,
          Uplaod_Document: response.data.data.Uplaod_Document,
          Remarks: response.data.data.Remarks,
          Fire_Equipment: response.data.data.Fire_Equipment,
          Upload_Fire_Equipment: response.data.data.Upload_Fire_Equipment,
          Due_Date2: response.data.data.Due_Date2,
          Remarks2: response.data.data.Remarks2,
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
    axios
      .post(
        `http://3.108.185.7/nodejs/api/dealer/updateequipment/${id}`,
        this.state
      )
      .then((response) => {
        console.log(response);
        // swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/ro-configuration/otherEquipmentForm");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Other Equipment</CardTitle>
          <Button
            className=" btn btn-danger float-right"
            // onClick={() =>
            //   history.push("/app/ro-configuration/List")
            // }
          >
            Back
          </Button>
        </CardHeader>
        <CardBody>
          <Form className="m-1" onSubmit={this.submitHandler}>
            <Row>
              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">Due Date-1</h5>
                <Input
                  type="text"
                  name="Due_Date"
                  value={this.state.Due_Date}
                  onChange={this.changeHandler}
                ></Input>
              </Col>
              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">Document Upload</h5>
                <Input
                  type="url"
                  name="Uplaod_Document"
                  value={this.state.Uplaod_Document}
                  onChange={this.changeHandler}
                ></Input>
              </Col>
              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">Rewards</h5>
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
                  name="Fire_Equipment"
                  value={this.state.Fire_Equipment}
                  onChange={this.changeHandler}
                ></Input>
              </Col>
              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">Due Date</h5>
                <Input
                  type="text"
                  name="Due_Date2"
                  value={this.state.Due_Date2}
                  onChange={this.changeHandler}
                ></Input>
              </Col>
              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">Document Upload</h5>
                <Input
                  type="text"
                  name="Remarks2"
                  value={this.state.Remarks2}
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
          </Form>
        </CardBody>
      </Card>
    );
  }
}
export default OtherEquipmentForm;
