import React from "react";
import {
  Card,
  CustomInput,
  CardBody,
  Row,
  Col,
  Form,
  Button,
  Input,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
import { Route } from "react-router-dom";
class BayManagementForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dsm_name: "",
      nozzel: "",
      closing_Entry: "",
    };
  }
  componentDidMount() {
    let { id } = this.props.match.params;

    // all dsm
    axiosConfig
      .get(`/dealer/allbmApp/${id}`)
      .then((response) => {
        console.log(response.data.data);
        this.setState({
          dsm: response.data.data,
          nozzles: response.data.data,
          closing_Entry: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    // // all nozzle
    // axios
    //   .get("http://3.108.185.7/nodejs/api/dealer/allnozzle")
    //   .then((response) => {
    //     console.log(response.data.data);
    //     this.setState({ nozzles: response.data.data });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // axios
    //   .get(`http://3.108.185.7/nodejs/api/dealer/getonebm/${id}`)
    //   .then((response) => {
    //     console.log(response);
    //     this.setState({
    //       closing_Entry: response.data.data.closing_Entry,
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error.response);
    //   });
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  // submitHandler = (e) => {
  //   e.preventDefault();
  //   let { id } = this.props.match.params;
  //   axios
  //     .post(`http://3.108.185.7/nodejs/api/dealer/updatersp/${id}`, this.state)
  //     .then((response) => {
  //       console.log(response);
  //       // swal("Success!", "Submitted SuccessFull!", "success");
  //       this.props.history.push("/app/shiftmanagement/retailSellingPriceList");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  render() {
    return (
      <Card>
        <Row className="m-1">
          <Col>
            <h1 col-sm-6 className="float-left">
              Update BayManagement Form
            </h1>
          </Col>
          <Col>
            <Route
              render={({ history }) => (
                <Button
                  className=" btn btn-danger float-right"
                  onClick={() =>
                    history.push("/app/shiftmanagement/bayManagementList")
                  }
                >
                  Back
                </Button>
              )}
            />
          </Col>
        </Row>

        <CardBody>
          <Form className="m-1">
            <Row>
              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">Choose DSM Name</h5>
                <CustomInput
                  type="select"
                  name="dsm_name"
                  value={this.state.dsm_name}
                  onChange={this.changeHandler}
                >
                  {this.state.dsm?.map((mocp) => (
                    <option value={mocp._id} key={mocp._id}>
                      {mocp.dsm__Id.dsm_name}
                    </option>
                  ))}
                </CustomInput>
              </Col>
              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">Choose Nozzle</h5>
                <Input
                  type="select"
                  name="nozzel"
                  value={this.state.nozzel}
                  onChange={this.changeHandler}
                >
                  {this.state.nozzles?.map((mocp) => (
                    <option value={mocp._id} key={mocp._id}>
                      {mocp.nozzel.nozzle}
                    </option>
                  ))}
                </Input>
              </Col>
              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">Closing Entry</h5>
                <Input
                  type="number"
                  name="closing_Entry"
                  value={this.state.closing_Entry}
                  onChange={this.changeHandler}
                ></Input>
              </Col>
            </Row>

            <Col lg="12" md="12" sm="12" className="mb-5">
              <Button.Ripple color="primary" type="submit" className="mt-2">
                Submit
              </Button.Ripple>
            </Col>
          </Form>
        </CardBody>
      </Card>
    );
  }
}
export default BayManagementForm;
