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
import { Camera, Edit2,  Menu, X } from "react-feather";
// import coverImg from "../../../assets/img/profile/user-uploads/cover.jpg";
import profileImg from "../../../assets/img/profile/user-uploads/user-13.jpg";
import "../../../assets/scss/pages/users-profile.scss";
import CheckBoxesVuexy from "../../../components/@vuexy/checkbox/CheckboxesVuexy";
import { Check } from "react-feather";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import axios from "axios";
import axiosConfig from "../../../axiosConfig";


// import registerImg from "../../.././assets/img/pages/register.jpg";

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

  //Image Submit Handler
  onChangeHandler = (event) => {
     this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    console.log(event.target.files[0]);
  };
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

    axios
      .post(`http://3.108.185.7/nodejs/api/user/updateoneadmin/621cb6ff448e0cef89a5bf4b`, data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };


  componentDidMount() {
    //console.log(this.props.match.params);
    // let { id } = this.props.match.params;
    axiosConfig
      .get(`http://3.108.185.7/nodejs/api/user/viewoneadmin/621cb6ff448e0cef89a5bf4b`)
      .then((response) => {
        //console.log(response.data);
        console.log(response.data.data);
        this.setState({ data: response.data.data });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

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
                       {/* <div class="variants">
                         <div class='file'>
                            <label for='input-file'>
                              <Camera/>
                              Upload Image
                            </label>
                            <input id='input-file' type='file' />
                        </div>
                      </div> */}
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
                         {/* <li className="lst-2">
                             Name: <span className="lst-3">grtt</span>
                         </li> */}
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
                        <h4 className="mb-0">Edit Profile</h4>
                    </CardTitle>
                      <Row className="m-0">
                        <Col sm="12" className="p-0">
                          <Form action="/">
                            <FormGroup className="form-label-group">
                              <Input
                                type="text"
                                placeholder="Name"
                                required
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
                                required
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
                                required
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
                                required
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
                              {/* <Button.Ripple
                      color="primary"
                      outline
                      onClick={() => {
                        history.push("/pages/login");
                      }}
                    >
                      Login
                    </Button.Ripple> */}
                              {/* <Button.Ripple color="primary" type="submit">
                      Register
                    </Button.Ripple> */}
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




// import React, { Component } from "react";
// import {
//   Col,
//   Row,
//   Card,
//   CardBody,
//   Form,
//   CustomInput,
//   Label,
//   Input,
//   Button,

// } from "reactstrap";
// import axios from "axios";
// import { history } from "../../../history";

//  class EditProfile extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "",
//       mobile: "",
//       phoneno: "",
//       country: "",
//       state: "",
//       city: "",
//       image: "",
//       password: "",
//       cnfmPassword: "",
//       status: "",
//       selectedName: "",
//       selectedFile: null,

//     };
//   }

//   //Image Submit Handler
//   onChangeHandler = (event) => {
//     this.setState({ selectedFile: event.target.files[0] });
//     this.setState({ selectedName: event.target.files[0].name });
//     console.log(event.target.files[0]);
//   };
//   changeHandler1 = (e) => {
//     this.setState({ status: e.target.value });
//   };
//   changeHandler = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };
//   submitHandler = (e) => {
//     e.preventDefault();
//     console.log(this.state);

//     const data = new FormData();

//     data.append("name", this.state.name);
//     data.append("password", this.state.password);
//     data.append("pincode", this.state.pincode);
//     data.append("phone_no", this.state.phone_no);
//     data.append("mobile_no", this.state.mobile_no);
//     data.append("email", this.state.email);
//     data.append("website", this.state.website);
//     data.append("country", this.state.country);
//     data.append("state", this.state.state);
//     data.append("city", this.state.city);
//     data.append("status", this.state.status);
//     data.append("userImage", this.state.selectedFile, this.state.selectedName);

//     for (var value of data.values()) {
//       console.log(value);
//     }

//     for (var key of data.keys()) {
//       console.log(key);
//     }
//     axios
//       .post("http://35.154.86.59/api/admin/editadmin/61efdb313c8b8db3a3488d25", data)
//       .then((response) => {
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   render() {
//     return (
//       <div>
//           <Row>
//           <Col lg="12">
//         <Card>
//           <Row className="m-2">
//             <Col>
//               <h1 col-sm-6 className="float-left">
//               Edit Profile
//               </h1>
//             </Col>
//             <Col>
//               {/* <Button
//                 className=" btn btn-danger float-right"
//                 onClick={() => history.push("/app/users/user/usersList")}
//               >
//                 Back
//               </Button> */}
//             </Col>
//           </Row>
//           <CardBody>
//             <Form className="m-1" onSubmit={this.submitHandler}>
//               <Row>

//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <Label>Name:</Label>
//                   <Input
//                     required
//                     type="text"
//                     placeholder="User Name"
//                     name="username"
//                     // value={this.state.username}
//                     // onChange={this.changeHandler}
//                   />
//                 </Col>
//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <Label>Buisness Email:</Label>
//                   <Input
//                     required
//                     type="email"
//                     name="email"
//                     // value={this.state.email}
//                     // onChange={this.changeHandler}
//                     placeholder="Enter Email"
//                   />
//                 </Col>
//                 </Row>
//                 <Row>
//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <Label>Phone Number:</Label>
//                   <Input
//                     type="text"
//                     placeholder="Contact Number"
//                     name="phone_no"
//                     // value={this.state.phone_no}
//                     // onChange={this.changeHandler}
//                   />
//                 </Col>

//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <Label>Mobile Number:</Label>
//                   <Input
//                     required
//                     type="text"
//                     placeholder="Mobile Number"
//                     name="mobile_no"
//                     // value={this.state.mobile_no}
//                     // onChange={this.changeHandler}
//                   />
//                 </Col>
//                 </Row>
//                 <Row>
//                 <Col lg="4" md="2" sm="2" className="mb-2">
//                   <Label>Country:</Label>
//                   <CustomInput
//                     required
//                     type="select"
//                     placeholder="Country"
//                     name="country"
//                     // value={this.state.country}
//                     // onChange={this.changeHandler}
//                     >

//                     <option value="country">Country</option>
//                     <option value="algeria">Algeria</option>
//                     <option value="austria">Austria</option>
//                     <option value="canada">Canada</option>
//                     <option value="UK">UK</option>
//                   </CustomInput>
//                 </Col>
//                 <Col lg="4" md="2" sm="2" className="mb-2">
//                   <Label>State:</Label>
//                   <CustomInput
//                     required
//                     type="select"
//                     placeholder="State"
//                     name="state"
//                    // value={this.state.state}
//                     //onChange={this.changeHandler}
//                     >
//                     <option value="state">State</option>
//                     <option value="mp">MP</option>
//                     <option value="goa">Goa</option>
//                     <option value="maharashtra">Maharashtra</option>
//                     <option value="gujarat">Gujarat</option>
//                   </CustomInput>
//                 </Col>
//                 <Col lg="4" md="2" sm="2" className="mb-2">
//                   <Label>City :</Label>
//                   <CustomInput
//                     required
//                     type="select"
//                     placeholder="City"
//                     name="city"

//                     // value={this.state.city}
//                     // onChange={this.changeHandler}
//                     >
//                     <option value="city">City</option>
//                     <option value="indore">Indore</option>
//                     <option value="sagar">Sagar</option>
//                     <option value="jabalpur">Jabalpur</option>
//                     <option value="delhi">Delhi</option>
//                   </CustomInput>
//                 </Col>
//                 </Row>

//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <Label>User Image</Label>
//                   <Input required type="file" name="userImage"onChange={this.onChangeHandler} />
//                 </Col>
//                 <Row>
//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <Label>Password:</Label>
//                   <Input
//                     required
//                     type="text"
//                     name="password"
//                     id="show_hide_password"
//                     // value={this.state.password}
//                     // onChange={this.changeHandler}
//                     placeholder="Set Password For User"
//                   />
//                 </Col>
//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <Label>Confirm Password:</Label>
//                   <Input
//                     required
//                     type="text"
//                     name="password"
//                     // value={this.state.password}
//                     // onChange={this.changeHandler}
//                     placeholder="Set Password For User"
//                   />
//                 </Col>
//                 </Row>
//                 <Row>
//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                     <Button.Ripple
//                             color="danger"
//                             className="mr-1 mb-1 btn-danger-rgba"
//                             type="reset"
//                             value="Reset">
//                             Reset
//                     </Button.Ripple>
//                     <Button.Ripple
//                             color="primary"
//                             type="submit"
//                             className="mr-1 mb-1"
//                             >
//                             Update
//                     </Button.Ripple>
//                   </Col>
//                 </Row>
//               <Row>
//             </Row>
//           </Form>
//         </CardBody>
//       </Card>
//       </Col>

//       </Row>
//     </div>
//     );
//   }
// }

// export default EditProfile

































// import React from "react";
// import {
//   Row,
//   Col,
//   Button,
//   // Spinner,
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   Card,
//   CardTitle,
//   Navbar,
//   NavbarToggler,
//   Collapse,
//   // Nav,
//   // NavItem,
//   // NavLink,
// } from "reactstrap";
// import { Edit2,  Menu, X } from "react-feather";
// // import coverImg from "../../../assets/img/profile/user-uploads/cover.jpg";
// import profileImg from "../../../assets/img/profile/user-uploads/user-13.jpg";
// import "../../../assets/scss/pages/users-profile.scss";
// import CheckBoxesVuexy from "../../../components/@vuexy/checkbox/CheckboxesVuexy";
// import { Check } from "react-feather";
// // import registerImg from "../../.././assets/img/pages/register.jpg";

// class Profile extends React.Component {
//   state = {
//     isOpen: false,
//   };

//   toggle = () => {
//     this.setState({
//       isOpen: !this.state.isOpen,
//     });
//   };
//   state = {
//     isLoading: false,
//   };

//   toggleLoading = () => {
//     this.setState({
//       isLoading: true,
//     });

//     setTimeout(() => {
//       this.setState({
//         isLoading: false,
//       });
//     }, 2000);
//   };

//   // edit Profile
//   // constructor(props) {
//   //   super(props);
//   //   const src = "../../../assets/img/logo/logo-info.png";
//   //   this.state = {
//   //     preview: null,
//   //     src,
//   //   };
//   //   this.onCrop = this.onCrop.bind(this);
//   //   this.onClose = this.onClose.bind(this);
//   //   this.onBeforeFileLoad = this.onBeforeFileLoad.bind(this);
//   // }

//   // onClose() {
//   //   this.setState({ preview: null });
//   // }

//   // onCrop(preview) {
//   //   this.setState({ preview });
//   // }

//   // onBeforeFileLoad(elem) {
//   //   if (elem.target.files[0].size > 71680) {
//   //     alert("File is too big!");
//   //     elem.target.value = "";
//   //   }
//   // }
//   render() {
//     return (
//       <Row className="m-0 justify-content-center">
//         <div className="profile-header col-sm-12">
//           <div className="position-relative">
//             <div className="cover-container">
//               {/* <img
//                 src={coverImg}
//                 alt="CoverImg"
//                 className="img-fluid bg-cover w-100 rounded-0"
//               /> */}
//             </div>
//             <div
//               className="profile-img-container d-flex align-items-center justify-content-between"
//               style={{ width: 100, height: "auto" }}
//             >
//               <img
//                 src={profileImg}
//                 alt="porfileImg"
//                 className="img-fluid img-border rounded-circle box-shadow-1"
//               />
//               <div className=" float-left">
//                 <Button
//                   color="primary"
//                   className="btn-icon rounded-circle mr-1"
//                 >
//                   <Edit2 size={17} />
//                 </Button>
//                 {/* <Button color="primary" className="btn-icon rounded-circle">
//                   <Settings size={17} />
//                 </Button> */}
//               </div>
//             </div>
//           </div>
//           <div className="d-flex justify-content-end align-items-center profile-header-nav">
//             <Navbar expand="sm" className="w-100 pr-0">
//               <NavbarToggler onClick={this.toggle}>
//                 {this.state.isOpen ? <X size={20} /> : <Menu />}
//               </NavbarToggler>
//               <Collapse isOpen={this.state.isOpen} navbar>
//                 {/* <Nav className="justify-content-around w-75 ml-sm-auto navbar-nav">
//                   <NavItem className="px-sm-0">
//                     <NavLink tag="a" href="#" className="font-small-3">
//                       Timeline
//                     </NavLink>
//                   </NavItem>
//                   <NavItem className="px-sm-0">
//                     <NavLink tag="a" href="#" className="font-small-3">
//                       About
//                     </NavLink>
//                   </NavItem>
//                   <NavItem className="px-sm-0">
//                     <NavLink tag="a" href="#" className="font-small-3">
//                       Photos
//                     </NavLink>
//                   </NavItem>
//                   <NavItem className="px-sm-0">
//                     <NavLink tag="a" href="#" className="font-small-3">
//                       Friends
//                     </NavLink>
//                   </NavItem>
//                   <NavItem className="px-sm-0">
//                     <NavLink tag="a" href="#" className="font-small-3">
//                       Videos
//                     </NavLink>
//                   </NavItem>
//                   <NavItem className="px-sm-0">
//                     <NavLink tag="a" href="#" className="font-small-3">
//                       Events
//                     </NavLink>
//                   </NavItem>
//                 </Nav> */}
//               </Collapse>
//             </Navbar>
//           </div>
//         </div>
//         <CardTitle>
//           <h4 className="mb-0">Edit Profile</h4>
//         </CardTitle>
//         <Col
//           sm="8"
//           xl="7"
//           lg="10"
//           md="8"
//           className="d-flex justify-content-center"
//         >
//           <Card className="bg-authentication rounded-0 mb-0 w-100">
//             <Row className="m-0">
//               <Col sm="12" className="p-0">
//                 <Form action="/">
//                   <FormGroup className="form-label-group">
//                     <Input
//                       type="text"
//                       placeholder="Name"
//                       required
//                       value={this.state.name}
//                       onChange={(e) => this.setState({ name: e.target.value })}
//                     />
//                     <Label>Name</Label>
//                   </FormGroup>
//                   <FormGroup className="form-label-group">
//                     <Input
//                       type="number"
//                       placeholder="Mobile No."
//                       required
//                       value={this.state.email}
//                       onChange={(e) => this.setState({ email: e.target.value })}
//                     />
//                     <Label>Mobile No.</Label>
//                   </FormGroup>
//                   <FormGroup className="form-label-group">
//                     <Input
//                       type="password"
//                       placeholder="Reset password"
//                       required
//                       value={this.state.password}
//                       onChange={(e) =>
//                         this.setState({ password: e.target.value })
//                       }
//                     />
//                     <Label>Password</Label>
//                   </FormGroup>
//                   <FormGroup className="form-label-group">
//                     <Input
//                       type="password"
//                       placeholder="Confirm Password"
//                       required
//                       value={this.state.confirmPass}
//                       onChange={(e) =>
//                         this.setState({ confirmPass: e.target.value })
//                       }
//                     />
//                     <Label>Confirm Password</Label>
//                   </FormGroup>
//                   <FormGroup>
//                     <CheckBoxesVuexy
//                       color="primary"
//                       icon={<Check className="vx-icon" size={16} />}
//                       label=" I accept the terms & conditions."
//                       defaultChecked={true}
//                     />
//                   </FormGroup>
//                   <div className="d-flex justify-content-between">
//                     {/* <Button.Ripple
//             color="primary"
//             outline
//             onClick={() => {
//               history.push("/pages/login");
//             }}
//           >
//             Login
//           </Button.Ripple> */}
//                     {/* <Button.Ripple color="primary" type="submit">
//             Register
//           </Button.Ripple> */}
//                     <Button.Ripple color="primary" type="submit">
//                       Submit
//                     </Button.Ripple>
//                   </div>
//                 </Form>
//               </Col>
//             </Row>
//           </Card>
//         </Col>
//       </Row>

//       // <React.Fragment>
//       //   <Breadcrumbs
//       //     breadCrumbTitle="Profile"
//       //     breadCrumbParent="Pages"
//       //     breadCrumbActive="Profile"
//       //   />
//       //   <div id="user-profile">
//       //     <Row>
//       //       <Col sm="12">
//       //         <ProfileHeader />
//       //       </Col>
//       //     </Row>
//       //     <div id="profile-info">
//       //       <Row>
//       //         <Col lg="3" md="12">
//       //           <AboutCard />
//       //           <SuggestedPages />
//       //           <TwitterFeed />
//       //         </Col>
//       //         <Col lg="6" md="12">
//       //           <Posts />
//       //         </Col>
//       //         <Col lg="3" md="12">
//       //           <LatestPhotos />
//       //           <Suggestions />
//       //           <Polls />
//       //         </Col>
//       //       </Row>
//       //       <Row>
//       //         <Col sm="12" className="text-center">
//       //           <Button.Ripple
//       //             color="primary"
//       //             onClick={this.toggleLoading}
//       //             className={`${
//       //               this.state.isLoading ? "btn-loading" : ""
//       //             } btn-load`}
//       //           >
//       //             <Spinner color="primary" />
//       //             Load More
//       //           </Button.Ripple>
//       //         </Col>
//       //       </Row>
//       //     </div>
//       //   </div>
//       // </React.Fragment>
//     );
//   }
// }

// export default Profile;
