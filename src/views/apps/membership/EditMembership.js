import React, { Component } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Form,
  Label,
  FormGroup,
  Input,
  CustomInput,
  Button,
} from "reactstrap";
// import swal from "sweetalert";
import axiosConfig from "../../../axiosConfig";

import { Route } from "react-router-dom";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
// import moment from "moment";


export default class EditMembership extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planId:"",
      dealer_name: "",
      // start_date:'',
      plan_name:"",
      date:'',
      expdate:'',
      transaction_id:"",
      sttaus:"",
      membershipData:{}
      
     
    };
    this.state = {
      planN :[],
    };
    this.submitHandler = this.submitHandler.bind(this);
  }
  
  componentDidMount() {
//plan
axiosConfig
.get("/admin/allplan")
.then((response) => {
  console.log(response.data.data);
  this.setState({ planN: response.data.data });
})
.catch((error) => {
  console.log(error);
});



    var transaction_id = '';
    var expdate = '';
    const queryParams = new URLSearchParams(window.location.href);
     transaction_id = queryParams.get('transaction_id');
     expdate = queryParams.get('expdate');

     this.setState({ transaction_id: transaction_id,expdate:expdate });
     var payload = {
      transaction_id:transaction_id,
      expdate:expdate
     }
  
    let { id } = this.props.match.params;
    axiosConfig
      .post(`/dealer/updatemembership/${id}`,payload)
      .then((response) => {
        console.log(response.data.data);
        this.setState({ 
          membershipData: response.data.data,
          date:response.data.data?.date,
          // start_date:response.data.data?.date,
          expdate: response.data.data?.expdate,
          amount: response.data.data?.amount
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
    const{transaction_id,expdate,date,status,amount,planId} = this.state;
    var payload = {
      transaction_id:transaction_id,
      expdate:expdate,
      amount:amount,
      planId:planId,
      date:date,
      status:status
     }
     console.log(payload)
    let { id } = this.props.match.params;
    axiosConfig
      .post(`/dealer/updatemembership/${id}`, payload)
      .then((response) => {
        console.log(response);
        // swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push(`/app/membership/MembershipList`);    
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
               
                  <Col lg="6" md="6" sm="12">
                <FormGroup>
                  <Label>Select Mode </Label>
                  <CustomInput
                    type="select"
                    name="planId"
                    value={this.state.planId}
                    onChange={this.changeHandler}
                  >
                    <option>Choose Plan</option>
                    {this.state.planN?.map((planc) => (
                      <option value={planc._id} key={planc._id}>
                        {planc.associated_plan}
                      </option>
                    ))}
                  </CustomInput>
                </FormGroup>
              </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Amount</Label>
                  <Input
                    type="number"
                    name="amount"
                    value={this.state.amount}
                    onChange={this.changeHandler}
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
                     value={this.state.date}
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
                      name="status"
                      value="Confirm"
                    />
                    <span style={{ marginRight: "20px" }}>Active</span>

                    {/* <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Pending"
                    />

                    <span style={{ marginRight: "3px" }}>Inactive</span> */}
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

