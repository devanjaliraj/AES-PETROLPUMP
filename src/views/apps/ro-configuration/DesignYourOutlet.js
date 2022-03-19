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

export default class DesignYourOutlet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total_no_mpd: "",
      total_no_bay: "",
      total_no_nozzles: "",
      total_no_tanks: "",
      total_no_air_machine: "",
      puc_machine: "",
      any_other_facility: "",
      dealerId : ''
    };
  }

  componentDidMount() {
    
   
    let { id } = this.props.match.params;
    this.setState({ dealerId : id });
    axios
      .get(`http://3.108.185.7/nodejs/api/dealer/viewonedealershipform/${id}`)
      .then((response) => {
        console.log(response);
        this.setState({
          total_no_mpd: response.data.data.total_no_mpd,
          total_no_bay: response.data.data.total_no_bay,
          total_no_nozzles: response.data.data.total_no_nozzles,
          total_no_tanks: response.data.data.total_no_tanks,
          total_no_air_machine: response.data.data.total_no_air_machine,
          puc_machine: response.data.data.puc_machine,
          any_other_facility: response.data.data.any_other_facility,
        });
      })
      .catch((error) => {
        console.log(error.response);
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
        `http://3.108.185.7/nodejs/api/dealer/addeditbasicdealershipform/${id}`,
        this.state
      )
      .then((response) => {
        console.log(response);
        // swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/ro-configuration/designYourOutletList");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  render() {
    const {
      dealerId
    } = this.state
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
                <BreadcrumbItem active>Edit Design Your Outlet</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit Design Your Outlet
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                // onClick={() =>
                //   history.push("/app/ro-configuration/List")
                // }
              >
                Back
              </Button>
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Total no. of MPD </Label>
                  
                  <Input
                    type="text"
                    name="total_no_mpd"
                    value={this.state.total_no_mpd}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Total no of Bay</Label>
                  <Input
                    type="text"
                    name="total_no_bay"
                    value={this.state.total_no_bay}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Total no. of Nozzies</Label>
                  <Input
                    type="text"
                    name="total_no_nozzles"
                    value={this.state.total_no_nozzles}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label> Total no. Tanks</Label>
                  <Input
                    type="text"
                    name="total_no_tanks"
                    value={this.state.total_no_tanks}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Total no. of Air Machines </Label>
                  <Input
                    type="text"
                    name="total_no_air_machine"
                    value={this.state.total_no_air_machine}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>PUC Machine</Label>
                  <Input
                    type="text"
                    name="puc_machine"
                    value={this.state.puc_machine}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Any other facilities</Label>
                  <Input
                    type="text"
                    name="any_other_facility"
                    value={this.state.any_other_facility}
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
                  <Button.Ripple
                    color="primary"
                    className="mr-1 mb-1"
                    onClick={() => history.push(`/app/ro-configuration/outletForm/`+dealerId)} > 
                    Next
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
