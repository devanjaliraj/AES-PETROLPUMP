import React, { Component } from "react";
import {
  Card,
  // CardHeader,
  // CardTitle,
  CardBody,
  Row,
  Col,
  Form,
  Label,
  Input,
  Button,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
import { Download } from "react-feather";
export default class AddDSM extends Component {
  constructor(props) {
    super(props);
    this.state = {
   
      shiftManagment:"",
       stockManagment:"",
       cashManagment:"",
       facilityManagment:"",
       roconfiguration:"",
      dealer_id: "",
      addres: "",
      adhar_number: "",
      adharimg: "",
      date_of_brith: "",
      joining_date: "",
      dsm_name: "",
      mobile: "",
      panImg: "",
      pan_number: "",
      photograh: "",
      salary_date: "",
      salary_decieded: "",
      status: "",
      selectedFile: null,
    };
  }
//Image Submit Handler
  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    console.log(event.target.files[0]);
  };

  componentDidMount() {
    let { id } = this.props.match.params;
    console.log(id);
    axiosConfig
      .get(`/dealer/getoneDsnform/${id}`)
      .then((response) => {
        console.log(response);
        this.setState({
          dealer_id: response.data.data.dealer_Id._id,
          dsm_name: response.data.data.dsm_name,
          addres: response.data.data.addres,
          mobile: response.data.data.mobile,
          joining_date: response.data.data.joining_date.split(","),
          adhar_number: response.data.data.adhar_number,
          adharimg: response.data.data.adharimg,
          pan_number: response.data.data.pan_number,
          panImg: response.data.data.panImg,
          photograh: response.data.data.photograh,
          date_of_brith: response.data.data.date_of_brith.split(","),
          salary_decieded: response.data.data.salary_decieded,
          salary_date: response.data.data.salary_date,
          shiftManagment: response.data.data.shiftManagment,
           stockManagment: response.data.data.stockManagment,
           cashManagment: response.data.data.cashManagment,
           facilityManagment: response.data.data.facilityManagment,
           roconfiguration: response.data.data.roconfiguration,
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
    data.append("dsm_name", this.state.dsm_name);
    data.append("addres", this.state.addres);
    data.append("mobile", this.state.mobile);
    data.append("joining_date", this.state.joining_date.toString());
    data.append("adhar_number", this.state.adhar_number);
    data.append("pan_number", this.state.pan_number);
    data.append("date_of_brith", this.state.date_of_brith.toString());
    data.append("salary_decieded", this.state.salary_decieded);
    data.append("salary_date", this.state.salary_date.toString());
    data.append("shiftManagment", this.state.shiftManagment);
    data.append("stockManagment", this.state.stockManagment);
    data.append("cashManagment", this.state.cashManagment);
    data.append("facilityManagment", this.state.facilityManagment);
    data.append("roconfiguration", this.state.roconfiguration);
    data.append("status", this.state.status);
    if (this.state.selectedFile !== null) {
      data.append("adharimg", this.state.selectedFile, this.state.selectedName);
      data.append("panImg", this.state.selectedFile, this.state.selectedName);
      data.append("photograh", this.state.selectedFile, this.state.selectedName);
    }
    // console.log(data);
    for (var value of data.values()) {
      console.log(value);
    }
    for (var key of data.keys()) {
      console.log(key);
    }

    let { id } = this.props.match.params;

    axiosConfig
      .post(`/dealer/editDsnform/${id}`, data)
      .then((response) => {
        console.log(response);
        // swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push(`/app/staffEnrollment/DMSList/${this.state.dealer_id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  download = e => {
    console.log(e.target.href);
    fetch(e.target.href, {
      method: "GET",
      headers: {}
    })
      .then(response => {
        response.arrayBuffer().then(function(buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image"); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <Card>
        <Row className="m-2">
              <Col>
            <h1 col-sm-6 className="float-left">
          Update DSM
            </h1>
          </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Name</Label>
                  <Input
                    required
                    type="text"
                    name="dsm_name"
                    placeholder="Enter Name"
                    value={this.state.dsm_name}
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
              

                <Col lg="6" md="0" sm="6">
                
                      <a
                      href={this.state.photograh}
                      download
                      target='blank'
                      onClick={e => this.download(e)}
                    >
                       <Download className="mr-50" size="25px" color="blue" />
                      download Photograph
                </a>
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
            
                <Col lg="6" md="0" sm="6">
               
                           <a
                      href={this.state.adharimg}
                      download 
                      target='blank'
                      onClick={e => this.download(e)}
                    >
                      <Download className="mr-50" size="25px" color="blue" />
                      download Adhar Image
                </a>
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

                <Col lg="6" md="0" sm="6" className="mb-2">
                
                             <a
                      href={this.state.panImg}
                      download
                      target='blank'
                      onClick={e => this.download(e)}
                    >
                      {/* <i className="fa fa-download" /> */}
                      <Download className="mr-50" size="25px" color="blue" />
                      download Pan Image
                </a>
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
                  <Label>Date of Birth</Label>
                  <Input
                    required
                    type="date"
                    name="date_of_brith"
                    placeholder="Enter DOB"
                    value={this.state.date_of_brith}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Monthly Salary</Label>
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
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <h6>Shift Managment</h6>
                  <Input
                   readOnly
                   name="shiftManagment"
                   value={this.state.shiftManagment}
                   ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <h6>Stock Managment</h6>
                  <Input
                     readOnly
                    name="stockManagment"
                    value={this.state.stockManagment}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <h6>Cash Managment</h6>
                  <Input
                   readOnly
                   name="cashManagment"
                   value={this.state.cashManagment}
                   ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <h6>Facility Managment</h6>
                  <Input
                     readOnly
                    name="facilityManagment"
                    value={this.state.facilityManagment}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <h6>Ro-Configuration Managment</h6>
                  <Input
                     readOnly
                    name="roconfiguration"
                    value={this.state.roconfiguration}
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

                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Update DSM
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
