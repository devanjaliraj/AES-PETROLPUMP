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
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
import axios from "axios";
// import swal from "sweetalert";
import { Route } from "react-router-dom";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";


export default class EditMembership extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dealer_name: "",
      date:'',
      expdate:'',
      transaction_id:"",
      membershipData:{}
    };
    
    this.submitHandler = this.submitHandler.bind(this);
  }
  
  componentDidMount() {
    var transaction_id = '';
    var expdate = '';
    const queryParams = new URLSearchParams(window.location.href);
     transaction_id = queryParams.get('transaction_id');
     expdate = queryParams.get('expdate');
     
     var payload = {
      transaction_id:transaction_id,
      expdate:expdate
     }
  
    let { id } = this.props.match.params;
    axios
      .post(`http://3.108.185.7/nodejs/api/dealer/updatemembership/${id}`,payload)
      .then((response) => {
        console.log(response.data.data);
        this.setState({ membershipData: response.data.data });
   
        // this.props.history.push(
        //   `/app/membership/MembershipList/${this.state.dealer_id._id}`
        // );
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
    var transaction_id = '';
    var expdate = '';
    var date = '';
    var status = '';
    const queryParams = new URLSearchParams(window.location.href);
     transaction_id = queryParams.get('transaction_id');
     expdate = queryParams.get('expdate');
     date =queryParams.get('date');
     status =queryParams.get('status');
    var payload = {
      transaction_id:transaction_id,
      expdate:expdate,
      date:date,
      status:status
     }
    let { id } = this.props.match.params;
    axiosConfig
      .post(`/dealer/updatemembership/${id}`, payload)
      .then((response) => {
        console.log(response);
        // swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push(`/app/membership/MembershipList/${this.state.dealer_id._id}`);
       
        
      })

      .catch((error) => {
        console.log(error.response);
      });
  };
  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };

  render() {
    let { membershipData } = this.state;
    return (
      <div>
        <Breadcrumbs
          breadCrumbTitle=" Edit Membership"
          breadCrumbParent="Membership"
          breadCrumbActive=" Edit Membership"
        />
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit Membership
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() =>
                      history.push("/app/membership/MembershipList")
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
                  <Label>Dealer Name</Label>
                  <Input
                    type="text"
                    name="dealer_name"
                    // value={this.state.dealer_name}

                    value={membershipData ? membershipData.dealer_id?.dealer_name : null}
                      readOnly
                  ></Input>
                
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Plan Name</Label>
                  <Input
                    type="text"
                    name="plan_name"
                    // value={this.state.plan_name}
                 
                    value={membershipData ? membershipData.planId?.associated_plan : null}
                    readOnly
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Amout</Label>
                  <Input
                    type="number"
                    name="amount"
                    value={membershipData ? membershipData.amount : null}
                    readOnly
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Transaction ID</Label>
                  <Input
                    type="text"
                    name="transaction_id"
                    value={this.state.transaction_id}
                    onChange={this.changeHandler}
                    // value={membershipData ? membershipData?.transaction_id : null}
                   
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Start Date</Label>
                  <Input
                    type="date"
                    name="date"
                    placeholder="Date"
                    value={membershipData ? membershipData?.date : null}
                    onChange={this.changeHandler}

                  ></Input>
                </Col>

                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Expire Date</Label>
                  <Input
                    type="date"
                    name="expdate"
                    placeholder="Expire Date"
                    value={this.state.expdate}
                    onChange={this.changeHandler}

                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2 mt-1">
                  <Label className="mb-1">Status</Label>
                  <div
                    className="form-label-group"
                    onChange={this.changeHandler}
                  >
                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="userverified"
                      value="Confirm"
                    />
                    <span style={{ marginRight: "20px" }}>Active</span>

                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="userverified"
                      value="Pending"
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

