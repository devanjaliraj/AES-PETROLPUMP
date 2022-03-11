import React, { Component } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Form,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import axios from "axios";
import { history } from "../../../history";
// import swal from "sweetalert";
export default class ViewDealer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: {},
    };
  }
  componentDidMount() {
    let { id } = this.props.match.params;
    axios
      .get(`http://3.108.185.7/nodejs/api/dealer/viewonedealershipform/${id}`)
      .then(response => {
        console.log(response);
        this.setState({ data: response.data.data   
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
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
                <BreadcrumbItem href="/app/dealer/dealerList" tag="a">
                  Dealer List
                </BreadcrumbItem>
                <BreadcrumbItem active>View Dealer</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                View Dealer
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() => history.push("/app/dealer/DealerList")}
              >
                Back
              </Button>
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row>
             
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <h4>Name Of Dealership</h4>
                  <h6 className=""> {this.state.data.dealer_name}</h6>
               
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <h4>Mobile No.</h4>
                  <h6 className=""> {this.state.data.mobile}</h6>
               
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <h4>Email</h4>
                  <h6 className=""> {this.state.data.email}</h6>
                
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <h4>Master Oil Company</h4>
                  <h6 className=""> {this.state.data.master_oil_company}</h6>
               
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <h4>Location</h4>
                  <h6 className=""> {this.state.data.location}</h6>
               
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <h4>OMC Customer Code</h4>
                  <h6 className=""> {this.state.data.omc_customer_code}</h6>
               
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <h4>State</h4>
                  <h6 className=""> {this.state.data.state}</h6>
               
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <h4>District </h4>
                  <h6 className=""> {this.state.data.district}</h6>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}