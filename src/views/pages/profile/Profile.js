import React from "react";
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardTitle
} from "reactstrap";
// import profileImg from "../../../assets/img/profile/user-uploads/user-13.jpg";
import "../../../assets/scss/pages/users-profile.scss";
import CheckBoxesVuexy from "../../../components/@vuexy/checkbox/CheckboxesVuexy";
import { Check } from "react-feather";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
// import axios from "axios";
import swal from 'sweetalert';
import axiosConfig from "../../../axiosConfig";
// import { history } from "../../../history";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email:"",
      mobile: "",
      resetpassword:"",
      password:"",
      profilepic:"",
      selectedName: "",
      selectedFile: null,
      data: {},
    };
  }
  //  handleClick() {
  //   history.push("/#/pages/profile");
  // }

  //Image Submit Handler
  onChangeHandler = (event) => {
     this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    console.log(event.target.files[0]);
  };

  componentDidMount() {
    //console.log(this.props.match.params);
    // let { id } = this.props.match.params;
    axiosConfig
      .get(`http://15.206.122.110:4000/api/user/viewoneadmin/629b43e4b481821324ad3006`)
      .then((response) => {
        //console.log(response.data);
        console.log(response.data.data);
        this.setState({ 
          data: response.data.data
         });
      })
      .catch((error) => {
        console.log(error.response);
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

    console.log(this.state);

    const data = new FormData();

    data.append("name", this.state.name);
    data.append("email", this.state.email);
    data.append("mobile", this.state.mobile);
    data.append("resetpassword", this.state.resetpassword);
    data.append("profilepic", this.state.selectedFile, this.state.selectedName);

    for (var value of data.values()) {
      console.log(value);
    }

    for (var key of data.keys()) {
      console.log(key);
    }
    //  let { id } = this.props.match.params;

    axiosConfig
      .post(`http://15.206.122.110:4000/api/user/updateoneadmin/629b43e4b481821324ad3006`, data)
      .then((response) => {
        console.log(response.data);
         swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push(`/pages/profile`);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };


 

  render() {
    return (

      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Profile"
         breadCrumbParent="Pages"
          breadCrumbActive="Profile"
         />
          <div id="user-profile">
          <Row className="m-0 justify-content-center">
            <Col lg="4" md="4" xl="4" sm="12">
              <Card className="bg-authentication rounded-0 mb-0 w-100">
                  <div className="profile-img text-center st-1">
                    <img
                        src={this.state.data.profilepic}
                         alt="porfileImg"
                        className="img-fluid img-border rounded-circle box-shadow-1"
                        width="150"
                      />
                  
                      <ul className="lst-1">
                         <li className="lst-2">
                             Name: <span className="lst-3">{this.state.data.name}</span>
                         </li>
                         <li className="lst-2">
                             Mobile: <span className="lst-3">{this.state.data.mobile}</span>
                         </li>
                         <li className="lst-2">
                             Email: <span className="lst-3">{this.state.data.email}</span>
                         </li>
                      
                      </ul>
                  </div>
              </Card>
            </Col>
            <Col
              sm="12"
              xl="8"
              lg="8"
              md="8"
              className="d-flex justify-content-center"
             >
              <Card className="bg-authentication rounded-0 mb-0 w-100">
               <Form className="m-1" onSubmit={this.submitHandler}>
                  <div className="st-2">
                      <CardTitle>
                        <h4 className="mb-3">Edit Profile</h4>
                        <Col>
                        
                        </Col>
                    </CardTitle>
                      <Row className="m-0">
                        <Col sm="12" className="p-0">
                          <Form action="/">
                            <FormGroup className="form-label-group">
                              <Input
                                type="text"
                                placeholder="Name"
                           
                                name="name"
                                value={this.state.name}
                                onChange={this.changeHandler}
                              />
                              <Label>Name</Label>
                            </FormGroup>
                            <FormGroup className="form-label-group">
                              <Input
                                type="email"
                                placeholder="email"
                             
                                name="email"
                                value={this.state.email}
                                onChange={this.changeHandler}
                              />
                              <Label>Email</Label>
                            </FormGroup>
                            <FormGroup className="form-label-group">
                              <Input
                                type="number"
                                placeholder="Mobile No."
                               
                                name="mobile"
                                value={this.state.mobile}
                                onChange={this.changeHandler}
                              />
                              <Label>Mobile No.</Label>
                            </FormGroup>
                            <FormGroup className="form-label-group">
                              <Input
                                type="password"
                                placeholder="Reset password"
                             
                                name="password"
                                value={this.state.password}
                                onChange={this.changeHandler}
                              />
                              <Label>Password</Label>
                            </FormGroup>


                            <FormGroup className="form-label-group">
                               <Label>User Image</Label>
                                  <Input className="form-control"  type="file" name="profilepic"
                                  onChange={this.onChangeHandler} />
                            </FormGroup>

                            <FormGroup>
                              <CheckBoxesVuexy
                                color="primary"
                                icon={<Check className="vx-icon"
                                 size={16} />}
                                label=" I accept the terms & conditions."
                                defaultChecked={true}
                              />
                            </FormGroup>

                            <div className="d-flex justify-content-between">
                             
                              <Button.Ripple color="primary" type="submit">
                                Submit
                              </Button.Ripple>
                            </div>
                          </Form>
                        </Col>
                      </Row>
                  </div>
               </Form>
              </Card>
           </Col>
          </Row>
          </div>

       </React.Fragment>
    );
  }
}

export default Profile;




