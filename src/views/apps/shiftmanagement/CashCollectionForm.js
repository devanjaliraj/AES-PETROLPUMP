import React from "react";
import {
  Card,
  // CardHeader,
  // CardTitle,
  CardBody,
  Row,
  Col,
  Button,
  Input,
  Form,
} from "reactstrap";
import { history } from "../../../history";

import axios from "axios";

class CashCollectionForm extends React.Component {
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

    // // all dsm
    // axios
    //   .get("http://3.108.185.7/nodejs/api/dealer/getDsnform")
    //   .then((response) => {
    //     console.log(response.data.data);
    //     this.setState({ dsm: response.data.data });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    axios
      .get(`http://3.108.185.7/nodejs/api/dealer/getonecreditgiven/${id}`)
      .then((response) => {
        console.log(response);
        this.setState({
          dsm_name: response.data.data.dsm_name,
          nozzel: response.data.data.nozzel,
          closing_Entry: response.data.data.closing_Entry,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
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
              Cash Collection
            </h1>
          </Col>
          <Col>
            <Button
              className=" btn btn-danger float-right"
              onClick={() =>
                history.push("/app/shiftManagement/cashCollection")
              }
            >
              Back
            </Button>
          </Col>
        </Row>
        <CardBody>
          <Form type="submit">
            <Row>
              <Col>
                <Col md="6" sm="12">
                  <div className="d-flex">
                    <h5 className="my-1 text-bold-400 mr-2">2000 </h5>
                    <Input type="text" name="total_no_mpd"></Input>
                  </div>
                </Col>
                <Col md="6" sm="12">
                  <div className="d-flex">
                    <h5 className="my-1 text-bold-400 mr-2">500 </h5>
                    <Input type="text" name="total_no_mpd"></Input>
                  </div>
                </Col>

                <Col md="6" sm="12">
                  <div className="d-flex">
                    <h5 className="my-1 text-bold-400 mr-2">200 </h5>
                    <Input type="text" name="total_no_mpd"></Input>
                  </div>
                </Col>

                <Col md="6" sm="12">
                  <div className="d-flex">
                    <h5 className="my-1 text-bold-400 mr-2">100</h5>
                    <Input type="text" name="total_no_mpd"></Input>
                  </div>
                </Col>
                <Col md="6" sm="12">
                  <div className="d-flex">
                    <h5 className="my-1 text-bold-400 mr-2">50</h5>
                    <Input type="text" name="total_no_mpd"></Input>
                  </div>
                </Col>
              </Col>
              <Col>
                <Col md="6" sm="12">
                  <div className="d-flex">
                    <h5 className="my-1 text-bold-400 mr-2">20</h5>
                    <Input type="text" name="total_no_mpd"></Input>
                  </div>
                </Col>
                <Col md="6" sm="12">
                  <div className="d-flex">
                    <h5 className="my-1 text-bold-400 mr-2">10</h5>
                    <Input type="text" name="total_no_mpd"></Input>
                  </div>
                </Col>
                <Col md="6" sm="12">
                  <div className="d-flex">
                    <h5 className="my-1 text-bold-400 mr-2">5</h5>
                    <Input type="text" name="total_no_mpd"></Input>
                  </div>
                </Col>
                <Col md="6" sm="12">
                  <div className="d-flex">
                    <h5 className="my-1 text-bold-400 mr-2">2</h5>
                    <Input type="text" name="total_no_mpd"></Input>
                  </div>
                </Col>
                <Col md="6" sm="12">
                  <div className="d-flex">
                    <h5 className="my-1 text-bold-400 mr-2">1</h5>
                    <Input type="text" name="total_no_mpd"></Input>
                  </div>
                </Col>
              </Col>
            </Row>
            <Row>
              <Col>
                <h5 col-sm-6 className="my-1 text-bold-600">
                  Pament Mode
                </h5>
                <Input type="text" name="total_no_mpd"></Input>
              </Col>

              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">Credit Cash</h5>
                <Input type="text" name="total_no_mpd"></Input>
              </Col>
              <Col md="6" sm="12" style={{ marginBottom: 15 }}>
                <h5 className="my-1 text-bold-600">Debit Cash</h5>
                <Input type="text" name="total_no_mpd"></Input>
              </Col>
              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">Upi Cash</h5>
                <Input type="text" name="total_no_mpd"></Input>
              </Col>
              <Col style={{ marginBottom: 15 }}>
                <h3 col-sm-6 className="float-left">
                  Cash Hand Over To
                </h3>
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
export default CashCollectionForm;
