import React from "react";
import {
  Row,
  Col,
  Button,
  Spinner,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardTitle,
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Edit2, Settings, Menu, X } from "react-feather";
import coverImg from "../../../assets/img/profile/user-uploads/cover.jpg";
import profileImg from "../../../assets/img/profile/user-uploads/user-13.jpg";
import "../../../assets/scss/pages/users-profile.scss";
import CheckBoxesVuexy from "../../../components/@vuexy/checkbox/CheckboxesVuexy";
import { Check } from "react-feather";
import registerImg from "../../.././assets/img/pages/register.jpg";

class Profile extends React.Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  state = {
    isLoading: false,
  };

  toggleLoading = () => {
    this.setState({
      isLoading: true,
    });

    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 2000);
  };

  // edit Profile
  // constructor(props) {
  //   super(props);
  //   const src = "../../../assets/img/logo/logo-info.png";
  //   this.state = {
  //     preview: null,
  //     src,
  //   };
  //   this.onCrop = this.onCrop.bind(this);
  //   this.onClose = this.onClose.bind(this);
  //   this.onBeforeFileLoad = this.onBeforeFileLoad.bind(this);
  // }

  // onClose() {
  //   this.setState({ preview: null });
  // }

  // onCrop(preview) {
  //   this.setState({ preview });
  // }

  // onBeforeFileLoad(elem) {
  //   if (elem.target.files[0].size > 71680) {
  //     alert("File is too big!");
  //     elem.target.value = "";
  //   }
  // }
  render() {
    return (
      <Row className="m-0 justify-content-center">
        <div className="profile-header col-sm-12">
          <div className="position-relative">
            <div className="cover-container">
              {/* <img
                src={coverImg}
                alt="CoverImg"
                className="img-fluid bg-cover w-100 rounded-0"
              /> */}
            </div>
            <div
              className="profile-img-container d-flex align-items-center justify-content-between"
              style={{ width: 100, height: "auto" }}
            >
              <img
                src={profileImg}
                alt="porfileImg"
                className="img-fluid img-border rounded-circle box-shadow-1"
              />
              <div className=" float-left">
                <Button
                  color="primary"
                  className="btn-icon rounded-circle mr-1"
                >
                  <Edit2 size={17} />
                </Button>
                {/* <Button color="primary" className="btn-icon rounded-circle">
                  <Settings size={17} />
                </Button> */}
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end align-items-center profile-header-nav">
            <Navbar expand="sm" className="w-100 pr-0">
              <NavbarToggler onClick={this.toggle}>
                {this.state.isOpen ? <X size={20} /> : <Menu />}
              </NavbarToggler>
              <Collapse isOpen={this.state.isOpen} navbar>
                {/* <Nav className="justify-content-around w-75 ml-sm-auto navbar-nav">
                  <NavItem className="px-sm-0">
                    <NavLink tag="a" href="#" className="font-small-3">
                      Timeline
                    </NavLink>
                  </NavItem>
                  <NavItem className="px-sm-0">
                    <NavLink tag="a" href="#" className="font-small-3">
                      About
                    </NavLink>
                  </NavItem>
                  <NavItem className="px-sm-0">
                    <NavLink tag="a" href="#" className="font-small-3">
                      Photos
                    </NavLink>
                  </NavItem>
                  <NavItem className="px-sm-0">
                    <NavLink tag="a" href="#" className="font-small-3">
                      Friends
                    </NavLink>
                  </NavItem>
                  <NavItem className="px-sm-0">
                    <NavLink tag="a" href="#" className="font-small-3">
                      Videos
                    </NavLink>
                  </NavItem>
                  <NavItem className="px-sm-0">
                    <NavLink tag="a" href="#" className="font-small-3">
                      Events
                    </NavLink>
                  </NavItem>
                </Nav> */}
              </Collapse>
            </Navbar>
          </div>
        </div>
        <CardTitle>
          <h4 className="mb-0">Edit Profile</h4>
        </CardTitle>
        <Col
          sm="8"
          xl="7"
          lg="10"
          md="8"
          className="d-flex justify-content-center"
        >
          <Card className="bg-authentication rounded-0 mb-0 w-100">
            <Row className="m-0">
              <Col sm="12" className="p-0">
                <Form action="/">
                  <FormGroup className="form-label-group">
                    <Input
                      type="text"
                      placeholder="Name"
                      required
                      value={this.state.name}
                      onChange={(e) => this.setState({ name: e.target.value })}
                    />
                    <Label>Name</Label>
                  </FormGroup>
                  <FormGroup className="form-label-group">
                    <Input
                      type="number"
                      placeholder="Mobile No."
                      required
                      value={this.state.email}
                      onChange={(e) => this.setState({ email: e.target.value })}
                    />
                    <Label>Mobile No.</Label>
                  </FormGroup>
                  <FormGroup className="form-label-group">
                    <Input
                      type="password"
                      placeholder="Reset password"
                      required
                      value={this.state.password}
                      onChange={(e) =>
                        this.setState({ password: e.target.value })
                      }
                    />
                    <Label>Password</Label>
                  </FormGroup>
                  <FormGroup className="form-label-group">
                    <Input
                      type="password"
                      placeholder="Confirm Password"
                      required
                      value={this.state.confirmPass}
                      onChange={(e) =>
                        this.setState({ confirmPass: e.target.value })
                      }
                    />
                    <Label>Confirm Password</Label>
                  </FormGroup>
                  <FormGroup>
                    <CheckBoxesVuexy
                      color="primary"
                      icon={<Check className="vx-icon" size={16} />}
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
          </Card>
        </Col>
      </Row>

      // <React.Fragment>
      //   <Breadcrumbs
      //     breadCrumbTitle="Profile"
      //     breadCrumbParent="Pages"
      //     breadCrumbActive="Profile"
      //   />
      //   <div id="user-profile">
      //     <Row>
      //       <Col sm="12">
      //         <ProfileHeader />
      //       </Col>
      //     </Row>
      //     <div id="profile-info">
      //       <Row>
      //         <Col lg="3" md="12">
      //           <AboutCard />
      //           <SuggestedPages />
      //           <TwitterFeed />
      //         </Col>
      //         <Col lg="6" md="12">
      //           <Posts />
      //         </Col>
      //         <Col lg="3" md="12">
      //           <LatestPhotos />
      //           <Suggestions />
      //           <Polls />
      //         </Col>
      //       </Row>
      //       <Row>
      //         <Col sm="12" className="text-center">
      //           <Button.Ripple
      //             color="primary"
      //             onClick={this.toggleLoading}
      //             className={`${
      //               this.state.isLoading ? "btn-loading" : ""
      //             } btn-load`}
      //           >
      //             <Spinner color="primary" />
      //             Load More
      //           </Button.Ripple>
      //         </Col>
      //       </Row>
      //     </div>
      //   </div>
      // </React.Fragment>
    );
  }
}

export default Profile;
