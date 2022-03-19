import React, { Component } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Form,
  Label,
  Input,
  Breadcrumb,
  BreadcrumbItem,
  Button,
} from "reactstrap";
import axios from "axios";
export default class Manager extends Component {
  // fileArrayAdhar = [];
  // fileArrayPan = [];
  // fileArrayPhoto = [];
  constructor(props) {
    super(props);
    this.state = {
      addres: "",
      adhar_number: "",
      adharimg: "",
      date_of_brith: "",
      joining_date: "",
      maneger_name: "",
      mobile: "",
      panImg: "",
      pan_number: "",
      photograh: "",
      salary_date: "",
      salary_decieded: "",
      status: "",
      selectedFile: null,
      // selectedName: "",
    };
  }
  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    console.log(event.target.files[0]);
  };

  componentDidMount() {
    let { id } = this.props.match.params;
    console.log(id);
    axios
      .get(`http://3.108.185.7/nodejs/api/dealer/getonemanager/${id}`)
      .then((response) => {
        console.log(response);
        this.setState({
          maneger_name: response.data.data.maneger_name,
          addres: response.data.data.addres,
          mobile: response.data.data.mobile,
          joining_date: response.data.data.joining_date,
          adhar_number: response.data.data.adhar_number,
          adharimg: response.data.data.adharimg,
          pan_number: response.data.data.pan_number,
          panImg: response.data.data.panImg,
          photograh: response.data.data.photograh,
          date_of_brith: response.data.data.date_of_brith,
          salary_decieded: response.data.data.salary_decieded,
          salary_date: response.data.data.salary_date,
          status: response.data.data.status,
        });
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
    console.log(this.props.match.params, this.state);
    const data = new FormData();
    data.append("maneger_name", this.state.maneger_name);
    data.append("addres", this.state.addres);
    data.append("mobile", this.state.mobile);
    data.append("joining_date", this.state.joining_date);
    data.append("adhar_number", this.state.adhar_number);
    data.append("pan_number", this.state.pan_number);
    data.append("date_of_brith", this.state.date_of_brith);
    data.append("salary_decieded", this.state.salary_decieded);
    data.append("salary_date", this.state.salary_date);
    data.append("status", this.state.status);
    if (this.state.selectedFile !== null) {
      data.append("adharimg", this.state.selectedFile, this.state.selectedName);
    }
    for (var value of data.values()) {
      console.log(value);
    }
    for (var key of data.keys()) {
      console.log(key);
    }

    let { id } = this.props.match.params;
    axios
      .post(`http://3.108.185.7/nodejs/api/dealer/updateonemanager/${id}`, data)
      .then((response) => {
        console.log(response);
        this.props.history.push("/app/staffEnrollment/staffManagementList");
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

                <BreadcrumbItem active>Update Manager</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Name</Label>
                  <Input
                    required
                    type="text"
                    name="maneger_name"
                    value={this.state.maneger_name}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Address</Label>
                  <Input
                    required
                    type="text"
                    name="addres"
                    placeholder="Enter Address"
                    value={this.state.addres}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Photograph Url</Label>
                  <Input
                    type="url"
                    name="photograh"
                    value={this.state.photograh}
                    onChange={this.onChangeHandler}
                  />
                </Col>

                <Col lg="6" md="0" sm="6">
                  <Label>Photograph</Label>
                  <img
                    src={this.state.photograh}
                    name="photograh"
                    className="w-25 ml-5 h-50"
                  />
                </Col>

                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Mobile</Label>
                  <Input
                    required
                    type="number"
                    name="mobile"
                    placeholder="Enter Name"
                    value={this.state.mobile}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Aadhar Number</Label>
                  <Input
                    required
                    type="number"
                    name="adhar_number"
                    placeholder="Enter Aadhar No."
                    value={this.state.adhar_number}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Adhar Url</Label>
                  <Input
                    type="url"
                    name="adharimg"
                    value={this.state.adharimg}
                    onChange={this.onChangeHandler}
                  />
                </Col>
                <Col lg="6" md="0" sm="6">
                  <Label>Adhar Image</Label>
                  <img
                    src={this.state.adharimg}
                    name="photograh"
                    className="w-25 ml-5 h-50"
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Pan Number</Label>
                  <Input
                    required
                    type="number"
                    name="pan_number"
                    placeholder="Enter Pan No."
                    value={this.state.pan_number}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>

                <Col lg="6" md="0" sm="6" className="mb-2">
                  <Label>Pan Image</Label>
                  <img
                    src={this.state.panImg}
                    name="panImg"
                    className="w-25 ml-5 h-50"
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Pan Url</Label>
                  <Input
                    type="url"
                    value={this.state.panImg}
                    onChange={this.onChangeHandler}
                    name="panImg"
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Joining Date</Label>
                  <Input
                    required
                    type="text"
                    name="joining_date"
                    placeholder="Enter Joining Date"
                    value={this.state.joining_date}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>

                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Date of Brith</Label>
                  <Input
                    required
                    type="text"
                    name="date_of_brith"
                    placeholder="Enter DOB"
                    value={this.state.date_of_brith}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Salary Decieded</Label>
                  <Input
                    required
                    type="text"
                    name="salary_decieded"
                    placeholder="Enter Name"
                    value={this.state.salary_decieded}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Salary Date</Label>
                  <Input
                    required
                    type="text"
                    name="salary_date"
                    placeholder="Enter Name"
                    value={this.state.salary_date}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2 mt-1">
                  <Label className="mb-1">Status</Label>
                  <div
                    className="form-label-group"
                    onChange={(e) => this.changeHandler1(e)}
                  >
                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Active"
                    />
                    <span style={{ marginRight: "20px" }}>Active</span>
                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Inactive"
                    />

                    <span style={{ marginRight: "3px" }}>Inactive</span>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Update Manager
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
