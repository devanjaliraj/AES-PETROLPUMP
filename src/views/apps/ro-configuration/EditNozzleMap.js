import React, { Component } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Form,
  Input,
  Button,
  // Breadcrumb,
  // BreadcrumbItem,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
import { Route } from "react-router-dom";
export default class EditNozzleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tank: "",
      tank_id: "",
      nozzle: "",
      mpd: "",
      bay: "",
      dealerId: "",
    };
    this.state = {
      tankN: [],
      nozzleN: [],
    };
    this.submitHandler = this.submitHandler.bind(this);
  }
  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/dealer/allnozzleApp/${id}`)
      .then((response) => {
        console.log(response.data.data);
        this.setState({ nozzleN: response.data.data });
      })
      .catch((error) => {
        console.log(error.response);
      });
  

    axiosConfig
      .get(`/dealer/getonenozzle/${id}`)
      .then((response) => {
        console.log(response);
        this.setState({
          tank: response.data.data.tank_map?.tank,
          tank_id: response.data.data.tank_map?._id,
          nozzle: response.data.data.nozzle,
          mpd: response.data.data.mpd,
          bay: response.data.data.bay,
          dealerId:response.data.data.dealer_id?._id,
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
    const {nozzle,mpd,tank_id,bay,dealerId} = this.state;

    let { id } = this.props.match.params;
      let payload ={
        tank: tank_id,
        nozzle: nozzle,
        mpd: mpd,
        bay: bay,
        dealer_id: dealerId,
      }

    axiosConfig
      //.post(`/dealer/getonenozzle/${nozzle}`, payload)
      .post(`/dealer/updatnozzle/`+id, payload)
      .then((response) => {
        console.log(response);
        // swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push(`/app/ro-configuration/NozzleList/`+dealerId);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  render() {

    return (
      <div>
        {/* <Row>
          <Col sm="12">
            <div>
              <Breadcrumb listTag="div">
                <BreadcrumbItem href="/analyticsDashboard" tag="a">
                  Home
                </BreadcrumbItem>
                <BreadcrumbItem
                  href="/app/ro-configuration/nozzleMapList/"
                  tag="a"
                >
                  Nozzle Map List
                </BreadcrumbItem>
                <BreadcrumbItem active>Edit Nozzle Map</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row> */}
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit Nozzle Map
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() =>
                      history.push(`/app/ro-configuration/NozzleList/${this.state.dealerId}`)
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
                  {/* <FormGroup> */}
                  <h5 className="my-1 text-bold-600">Nozzle</h5>
                  <Input
                  readOnly
                    type="text"
                    name="nozzle"
                    value={this.state.nozzle}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>

                <Col lg="6" md="6" sm="6" className="mb-2">
                  {/* <FormGroup> */}
                  <h5 className="my-1 text-bold-600">Tank</h5>
                  <Input
                  readOnly
                    type="text"
                    name="tank"
                    value={this.state.tank}
                    //onChange={this.changeHandler}
                  ></Input>
                </Col>

                <Col lg="6" md="6" sm="6" className="mb-2">
                  <h5 className="my-1 text-bold-600">Select MPD</h5>
                  {/* <Label>MPD </Label> */}
                  <Input
                    type="text"
                    name="mpd"
                    value={this.state.mpd}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <h5 className="my-1 text-bold-600">Select BAY</h5>
                  {/* <Label>BAY</Label> */}
                  <Input
                    type="text"
                    name="bay"
                    value={this.state.bay}
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
