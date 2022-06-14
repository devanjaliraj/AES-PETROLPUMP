import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  CustomInput,
  Col,
  Button,
  Form,
  Input,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
import { Download } from "react-feather";
// import { history } from "../../../history";
import { Route } from 'react-router-dom'

class StampingDataForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mpds: [],
      nozzels: [],
      products: [],
      Last_Stamping_Date: "",
      Due_Date: "",
      K_Factor: "",
      Upload_Certificate: "",
      Upload_Service_Report: "",
      Last_Service_Date: "",
      Last_Service_Report: "",
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

    // MPD, nozzels
    axiosConfig
      .get("/dealer/allnozzle")
      .then((response) => {
        console.log(response.data.data);
        this.setState({
          mpds: response.data.data,
          nozzels: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    // products
    axiosConfig
      .get("/dealer/allproduct")
      .then((response) => {
        console.log(response.data.data);
        this.setState({ products: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });

    axiosConfig
      .get(`/dealer/getoneStampingdata/${id}`)
      .then((response) => {
        console.log(response);
        this.setState({
          MPD: response.data.data.MPD,
          nozzel: response.data.data.nozzel,
          Product: response.data.data.product,
          Last_Stamping_Date: response.data.data.Last_Stamping_Date.split(","),
          Due_Date: response.data.data.Due_Date.split(","),
          K_Factor: response.data.data.K_Factor,
          Upload_Certificate: response.data.data.Upload_Certificate,
          Upload_Service_Report: response.data.data.Upload_Service_Report,
          Last_Service_Date: response.data.data.Last_Service_Date.split(","),
          Last_Service_Report: response.data.data.Last_Service_Report,
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
    data.append("mpds", this.state.mpds);
    data.append("nozzels", this.state.nozzels);
    data.append("products", this.state.products);
    data.append("Last_Stamping_Date", this.state.Last_Stamping_Date);
    data.append("Due_Date", this.state.Due_Date);
    data.append("K_Factor", this.state.K_Factor);
    data.append("Last_Service_Date", this.state.Last_Service_Date);
    if (this.state.selectedFile !== null) {
      data.append(
        "Upload_Certificate",
        this.state.selectedFile,
        this.state.selectedName
      );
      data.append(
        "Upload_Service_Report",
        this.state.selectedFile,
        this.state.selectedName
      );
      data.append(
        "Last_Service_Report",
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
    axiosConfig
      .post(
        `/dealer/updateStampingdata/${id}`,
        this.state
      )
      .then((response) => {
        console.log(response);
        this.props.history.push("/app/facilityManagement/stampingDataList");
      })
      .catch((error) => {
        console.log(error.response);
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
          <CardTitle>Stamping Date</CardTitle>
          <Route render={({ history}) => (

          <Button
            className=" btn btn-danger float-right"
            onClick={() =>
              history.push("/app/facilityManagement/stampingDataList")
            }
          >
            Back
          </Button>)}/>
        </CardHeader>
        <CardBody>
          <Form className="m-1" onSubmit={this.submitHandler}>
            <Row>
              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">Choose MPD</h5>
                <CustomInput
                  required
                  type="select"
                  name="MPD"
                  value={this.state.MPD}
                  onChange={this.changeHandler}
                >
                  {this.state.mpds?.map((mocp) => (
                    <option value={mocp._id} key={mocp._id}>
                      {mocp.mpd}
                    </option>
                  ))}
                </CustomInput>
              </Col>
              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">Choose Nozzle</h5>
                <CustomInput
                  required
                  type="select"
                  name="nozzel"
                  value={this.state.nozzel}
                  onChange={this.changeHandler}
                >
                  {this.state.nozzels?.map((mocp) => (
                    <option value={mocp._id} key={mocp._id}>
                      {mocp.nozzle}
                    </option>
                  ))}
                </CustomInput>
              </Col>
              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">Product</h5>
                <CustomInput
                  required
                  className="React"
                  type="select"
                  classNamePrefix="select"
                  name="product"
                  value={this.state.product}
                  onChange={this.changeHandler}
                >
                  {this.state.products?.map((mocp) => (
                    <option value={mocp._id} key={mocp._id}>
                      {mocp.product}
                    </option>
                  ))}
                </CustomInput>
              </Col>
              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">Last Stamping Date</h5>
                <Input
                  required
                  type="text"
                  name="Last_Stamping_Date"
                  value={this.state.Last_Stamping_Date}
                  onChange={this.changeHandler}
                ></Input>
              </Col>
              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">Due Date</h5>
                <Input
                  required
                  type="text"
                  name="Due_Date"
                  value={this.state.Due_Date}
                  onChange={this.changeHandler}
                ></Input>
              </Col>

              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">K Factor</h5>
                <Input
                  required
                  type="text"
                  name="K_Factor"
                  value={this.state.K_Factor}
                  onChange={this.changeHandler}
                ></Input>
              </Col>
              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">Upload Certificate</h5>
                <button
                  href={this.state.Upload_Certificate}
                  download
                  onClick={(e) => this.download(e)}
                  className="mt-1"
                >
                  <Download className="mr-50" size="25px" color="blue" />
                  View/Download Certificate
                </button>
              </Col>

              <Col className="mb-2" md="6" sm="12">
                <h5 className="my-1 text-bold-600">Service Report</h5>
                <button
                  href={this.state.Upload_Service_Report}
                  download
                  onClick={(e) => this.download(e)}
                  className="mt-1"
                >
                  <Download className="mr-50" size="25px" color="blue" />
                  View/Download Service Report
                </button>
              </Col>
              <Col className="mb-5" lg="6" md="0" sm="6">
                <h5 className="my-1 text-bold-600">Last Service Report</h5>
                <button
                  href={this.state.Last_Service_Report}
                  download
                  onClick={(e) => this.download(e)}
                  className="mt-1"
                >
                  <Download className="mr-50" size="25px" color="blue" />
                  View/download Last Service Report
                </button>
              </Col>
              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">Last Service Date</h5>
                <Input
                  required
                  type="text"
                  name="Last_Service_Date"
                  value={this.state.Last_Service_Date}
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
export default StampingDataForm;
