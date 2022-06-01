import React from "react";
import { Link } from "react-router-dom";
import { CardBody, FormGroup, Form, Input, Button, Label } from "reactstrap";
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy";
import { Mail, Lock, Check } from "react-feather";
import { loginWithJWT } from "../../../../redux/actions/auth/loginActions";
import { connect } from "react-redux";
import { history } from "../../../../history";
import axios from "axios";
import { Route } from 'react-router-dom'
//import swal from 'sweetalert';

class LoginJWT extends React.Component {
  state = {
    email: "",
    mobile:"",
    password: "",
    remember: false
  };

  handlechange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  // validateEmailPhone = (text) => {
  //   if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(text)) {
  //     return true;
  //   }
  //   else if (/^[6789][0-9]{9}$/.test(text)) {
  //     return true;
  //   }
  //   return false;
  // };

  handleLogin = (e) => {
    e.preventDefault();
    const {email,mobile,password} = this.state;
    //var isValid = this.validateEmailPhone(email)
    var payload = {
      email : email,
      mobile : mobile,
      password : password,
    }
    axios
    .post("http://3.108.185.7/nodejs/api/user/login", payload,{
      headers: {
        "Content-Type":"application/json"
      },
    })
    .then((response) => { 
      // console.log(response.data.user);
      console.log(response.data);
      if(response.data.status === 200){
        localStorage.setItem("auth", response.data.data?._id);
        //history.push("/#/");
        window.location.replace("/#/");
      }else if(response.data.status === 401){
        alert(response.data.message)
      }
      //history.push("/");
      
    })
    .catch((error) => {

      console.log(error.response);
      //swal("error!", "Invalied! Please enter valied Phone No. or Password", "error");

    });
};

  
  render() {
    return (
      <React.Fragment>
        <CardBody className="pt-1">
          <Form  onSubmit={this.handleLogin}>
            <FormGroup className="form-label-group position-relative has-icon-left">
              <Input
                type="text"
                name="email"
                placeholder="Email/Phone number"
                value={this.state.email}
                //onChange={(e) => this.setState({ email: e.target.value })}
                onChange={this.handlechange}
                required
              />
              <div className="form-control-position">
                <Mail size={15} />
              </div>
              <Label>Email</Label>
            </FormGroup>
            <FormGroup className="form-label-group position-relative has-icon-left">
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handlechange}
                required
              />
              <div className="form-control-position">
                <Lock size={15} />
              </div>
              <Label>Password</Label>
            </FormGroup>
            <FormGroup className="d-flex justify-content-between align-items-center">
              <Checkbox
                color="primary"
                icon={<Check className="vx-icon" size={16} />}
                label="Remember me"
                defaultChecked={false}
                onChange={this.handleRemember}
                required
              />
              <div className="float-right">
                <Link to="/pages/forgot-password">Forgot Password?</Link>
              </div>
            </FormGroup>
            <div className="d-flex justify-content-between">
              {/* <Button.Ripple
                color="primary"
                outline
                onClick={() => {
                  history.push("/pages/register");
                }}
              >
                Register
              </Button.Ripple> */}
               <Route render={({ history}) => (
              <Button.Ripple color="primary" type="submit">
                Login
              </Button.Ripple>


               )}/>
            </div>
          </Form>
        </CardBody>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    values: state.auth.login,
  };
};
export default connect(mapStateToProps, { loginWithJWT })(LoginJWT);
