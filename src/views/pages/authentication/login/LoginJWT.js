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

class LoginJWT extends React.Component {
  state = {
    email: "",
    password: "",
    remember: false
  };

  handleLogin = (e) => {
    e.preventDefault();
    this.props.loginWithJWT(this.state);
    axios.post("http://3.108.185.7/nodejs/api/user/login", this.state,{
      headers: {
        "Content-Type":"application/json"
      },
    })
    .then((response) => { 
      console.log('@@@@@',response.data.data);
      localStorage.setItem("token", response.data.data._id);
      localStorage.setItem("userData", JSON.stringify(response.data.data.email));
      history.push("/#/");
      window.location.reload()
      //window.location.replace("/#/");
      
    })
    .catch((error) => {
      console.log(error.response);
    });
  };
  render() {
    return (
      <React.Fragment>
        <CardBody className="pt-1">
          <Form  onSubmit={this.handleLogin}>
            <FormGroup className="form-label-group position-relative has-icon-left">
              <Input
                type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
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
                placeholder="Password"
                value={this.state.password}
                onChange={(e) => this.setState({ password: e.target.value })}
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
