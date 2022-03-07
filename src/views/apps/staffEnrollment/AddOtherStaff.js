import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  Form,
  Label,
  Input,
  CustomInput,
  Breadcrumb,
  BreadcrumbItem,
  Button,
} from "reactstrap";
import axios from "axios";
export default class OtherStaff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staff_name: "",
      addres: "",
      mobile: "",
      joining_date: "",
      adhar_number: "",
      adharimg: "",
      pan_number: "",
      panImg: "",
      photograh: "",
      date_of_brith: "",
      salary_decieded: "",
      salary_date: "",
      selectedFile: null,
      status: "",
      imagSrc: [],
    };
    this.submitHandler = this.submitHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onChangeHandler1 = this.onChangeHandler1.bind(this);
    this.onChangeHandler2 = this.onChangeHandler2.bind(this);
  }
  // onChangeHandler = (event) => {
  //   this.setState({ selectedFile: event.target.files[0] });
  //   this.setState({ selectedName: event.target.files[0].name });
  //   console.log(event.target.files[0]);
  // };
  onChangeHandler = (event) => {
    var imgSrc = [];
    for (var i = 0; i < event.target.files.length; i++) {
      let file = event.target.files[i];
      let reader = new FileReader();
      let url = reader.readAsDataURL(file);
      reader.onloadend = function (e) {
        console.log(i);
        this.fileArrayShop.push(reader.result);
        imgSrc.push([reader.result]);

        this.setState({
          imgSrc: [reader.result],
        });
      }.bind(this);
    }
    console.log(imgSrc);
    this.setState({
      selectedFile: event.target.files,
      imgSrc,
    });
    this.setState({
      selectedName: event.target.files.name,
    });
    console.log(event.target.files);
  };

  onChangeHandler1 = (event) => {
    var imgSrc1 = [];

    for (var i = 0; i < event.target.files.length; i++) {
      let file = event.target.files[i];
      let reader = new FileReader();
      console.log(file);
      let url = reader.readAsDataURL(file);
      reader.onloadend = function (e) {
        this.fileArrayLogo.push(reader.result);
        imgSrc1.push([reader.result]);
        this.setState({
          imgSrc1: [reader.result],
        });
      }.bind(this);
    }

    console.log(imgSrc1);
    this.setState({
      selectedFile1: event.target.files,
      imgSrc1,
    });
    this.setState({
      selectedName1: event.target.files.name,
    });
    console.log(event.target.files);
  };
  onChangeHandler2 = (event) => {
    var imgSrc2 = [];
    for (var i = 0; i < event.target.files.length; i++) {
      let file = event.target.files[i];
      let reader = new FileReader();
      let url = reader.readAsDataURL(file);
      reader.onloadend = function (e) {
        console.log(i);
        this.fileArrayGST.push(reader.result);
        imgSrc2.push([reader.result]);
        this.setState({
          imgSrc2: [reader.result],
        });
      }.bind(this);
    }
    console.log(imgSrc2);
    this.setState({
      selectedFile2: event.target.files,
      imgSrc2,
    });
    this.setState({
      selectedName2: event.target.files.name,
    });
    console.log(event.target.files);
  };
  componentDidMount() {
    let { id } = this.props.match.params;
    console.log(id);
    axios
      .get(`http://3.108.185.7/nodejs/api/dealer/getonestaff/${id}`)
      .then((response) => {
        console.log(response);
        this.setState({
          staff_name: response.data.data.staff_name,
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
          selectedFile: response.data.data.selectedFile,
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
    const data = new FormData();
    data.append("staff_name", this.state.staff_name);
    data.append("addres", this.state.addres);
    data.append("mobile", this.state.mobile);
    data.append("joining_date", this.state.joining_date);
    data.append("adhar_number", this.state.adhar_number);
    // data.append("adharimg", this.state.adharimg);
    data.append("pan_number", this.state.pan_number);
    // data.append("panImg", this.state.panImg);
    // data.append("photograh", this.state.photograh);
    data.append("date_of_brith", this.state.date_of_brith);
    data.append("salary_decieded", this.state.salary_decieded);
    data.append("salary_date", this.state.salary_date);
    data.append("status", this.state.status);
    if (this.state.selectedFile !== null) {
      data.append(
        "panImg",
        "adharimg",
        "photograh",
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
    axios
      .post(
        `http://3.108.185.7/nodejs/api/dealer/updateonestaff/${id}`,
        this.state
      )
      .then((response) => {
        console.log(response);
        // swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/staffEnrollment/otherStaffList");
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
                <BreadcrumbItem active>Update Manager</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <CardHeader>
            <CardTitle>Add Other Staff</CardTitle>
          </CardHeader>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Name</Label>
                  <Input
                    required
                    type="text"
                    name="staff_name"
                    placeholder="Enter Name"
                    value={this.state.staff_name}
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
                  <Label>Mobile</Label>
                  <Input
                    required
                    type="text"
                    name="mobile"
                    placeholder="Enter Mobile no."
                    value={this.state.mobile}
                    onChange={this.changeHandler}
                  ></Input>
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
                  <Label>Aadhar Number</Label>
                  <Input
                    required
                    type="text"
                    name="adhar_number"
                    placeholder="Enter Aadhar No."
                    value={this.state.adhar_number}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>Adhar Image</Label>
                  <CustomInput
                    required
                    type="file"
                    placeholder="Enter Aadhar Image"
                    onChange={this.onChangeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Pan Number</Label>
                  <Input
                    required
                    type="text"
                    name="pan_number"
                    placeholder="Enter Pan No."
                    value={this.state.pan_number}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>PAN Image</Label>
                  <CustomInput
                    required
                    type="file"
                    placeholder="Enter Pan Image"
                    onChange={this.onChangeHandler1}
                  />
                </Col>
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>Photograph</Label>
                  <CustomInput
                    required
                    type="file"
                    placeholder="Enter Banner Image"
                    onChange={this.onChangeHandler2}
                  />
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
                    placeholder="Enter Salary Date"
                    value={this.state.salary_date}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Approved Leaves per Month</Label>
                  <Input
                    required
                    type="date"
                    name="salary_date"
                    placeholder="Enter Name"
                    value={this.state.salary_date}
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
                    Add Staff
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
