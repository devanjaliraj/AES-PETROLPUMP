import React from "react";
import {
  Card,
  Form,
  CardBody,
  CustomInput,
  Row,
  Col,
  Button,
  Input,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
// import { history } from "../../../history";
import { Route } from 'react-router-dom'

class DSMClosingSheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dsm: [],
      // dealer_name1: "",
      // date: "",
      ms_sales: "",
      ms_testing: "",
      ms_own_use: "",
      hsd_sales: "",
      hsd_testing: "",
      hsd_own_use: "",
      lubricant_sales: "",
      net_cash: "",
    };
  }
  componentDidMount() {
    let { id } = this.props.match.params;

    // all dsm
    axiosConfig
      .get("/dealer/getDsnform")
      .then((response) => {
        console.log(response.data.data);
        this.setState({ dsm: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });

    axiosConfig
      .get(`/dealer/getonedsmclosing/${id}`)
      .then((response) => {
        console.log(response);
        this.setState({
          // date: response.data.data.date,
          dsm_name: response.data.data.dsm_name,
          ms_sales: response.data.data.ms_sales,
          ms_testing: response.data.data.ms_testing,
          ms_own_use: response.data.data.ms_own_use,
          hsd_sales: response.data.data.hsd_sales,
          hsd_testing: response.data.data.hsd_testing,
          hsd_own_use: response.data.data.hsd_own_use,
          lubricant_sales: response.data.data.lubricant_sales,
          net_cash: response.data.data.net_cash,
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
    axiosConfig
      .post(
        `/dealer/updatedsmclosing/${id}`,
        this.state
      )
      .then((response) => {
        console.log(response);
        // swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/shiftManagement/dSMClosingSheetList");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <Card>
        <Row className="m-1">
          <Col>
            <h1 col-sm-6 className="float-left">
              DSM Closing Sheet
            </h1>
          </Col>
          <Col>
          <Route render={({ history}) => (

            <Button
              className=" btn btn-danger float-right"
              onClick={() =>
                history.push("/app/shiftManagement/dSMClosingSheetList")
              }
            >
              Back
            </Button>
            )} />
          </Col>
        </Row>
        <CardBody>
          <Form className="m-1" onSubmit={this.submitHandler}>
            <Row>
              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">Choose DSM Name</h5>
                <CustomInput
                  type="select"
                  name="name_of_dsm"
                  value={this.state.name_of_dsm}
                  onChange={this.changeHandler}
                >
                  {this.state.dsm?.map((mocp) => (
                    <option value={mocp._id} key={mocp._id}>
                      {mocp.dsm_name}
                    </option>
                  ))}
                </CustomInput>
              </Col>
              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">Ms Sales</h5>
                <Input
                  type="number"
                  name="ms_sales"
                  value={this.state.ms_sales}
                  onChange={this.changeHandler}
                ></Input>
              </Col>
              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">Ms Testing</h5>
                <Input
                  type="number"
                  name="ms_testing"
                  value={this.state.ms_testing}
                  onChange={this.changeHandler}
                ></Input>
              </Col>
              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">Ms Own Use</h5>
                <Input
                  type="number"
                  name="ms_own_use"
                  value={this.state.ms_own_use}
                  onChange={this.changeHandler}
                ></Input>
              </Col>

              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">Hsd Sales</h5>
                <Input
                  type="number"
                  name="hsd_sales"
                  value={this.state.hsd_sales}
                  onChange={this.changeHandler}
                ></Input>
              </Col>
              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">Hsd Testing</h5>
                <Input
                  type="number"
                  name="hsd_testing"
                  value={this.state.hsd_testing}
                  onChange={this.changeHandler}
                ></Input>
              </Col>
              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">Hsd Own Use</h5>
                <Input
                  type="number"
                  name="hsd_own_use"
                  value={this.state.hsd_own_use}
                  onChange={this.changeHandler}
                ></Input>
              </Col>
              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">Lubricant Sales Entry</h5>
                <Input
                  type="number"
                  name="lubricant_sales"
                  value={this.state.lubricant_sales}
                  onChange={this.changeHandler}
                ></Input>
              </Col>
              <Col md="6" sm="12" style={{ marginBottom: 15 }}>
                <h5 className="my-1 text-bold-600">Net Cash</h5>
                <Input
                  type="number"
                  name="net_cash"
                  value={this.state.net_cash}
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
export default DSMClosingSheet;
