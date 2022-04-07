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
import axiosConfig from "../../../axiosConfig";

class StaffAttendenceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name_of_staff: "",
      designation: "",
      attendence_marking: "",
      leave_taken: "",
      leave_available: "",
    };
  }
  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/dealer/getoneatendence/${id}`)
      .then((response) => {
        console.log(response);

        this.setState({
          name_of_staff: response.data.data.name_of_staff,
          designation: response.data.data.designation,
          attendence_marking: response.data.data.attendence_marking,
          leave_taken: response.data.data.leave_taken,
          leave_available: response.data.data.leave_available,
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
      .post(
        `/dealer/updateatendence/${id}`,
        this.state
      )
      .then((response) => {
        console.log(response);
        this.props.history.push("/app/shiftManagement/staffAttendanceList");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Attendance</CardTitle>
        </CardHeader>
        <CardBody>
          <Form className="m-1" onSubmit={this.submitHandler}>
            <Row>
              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">Name of the Staff</h5>
                <Input
                  type="text"
                  name="name_of_staff"
                  value={this.state.name_of_staff}
                  onChange={this.changeHandler}
                ></Input>
              </Col>
              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">Designation</h5>
                <Input
                  type="text"
                  name="designation"
                  value={this.state.designation}
                  onChange={this.changeHandler}
                ></Input>
              </Col>
              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">Attendance Marking</h5>
                <Input
                  type="number"
                  name="attendence_marking"
                  value={this.state.attendence_marking}
                  onChange={this.changeHandler}
                ></Input>
              </Col>
              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">Leave Taken</h5>
                <Input
                  type="number"
                  name="leave_taken"
                  value={this.state.leave_taken}
                  onChange={this.changeHandler}
                ></Input>
              </Col>

              <Col md="6" sm="12" style={{ marginBottom: 15 }}>
                <h5 className="my-1 text-bold-600">Leave Available</h5>
                <Input
                  type="number"
                  name="leave_available"
                  value={this.state.leave_available}
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
export default StaffAttendenceForm;
