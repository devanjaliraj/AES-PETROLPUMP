import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  FormGroup,
  Form,
  Input,
  Button,
  Label
} from "reactstrap"
import { history } from "../../../history"
import resetImg from "../../../assets/img/pages/reset-password.png"
import "../../../assets/scss/pages/authentication.scss"
import axios from "axios";

class OtpVerify extends React.Component {

    state = {
        otp:""
      };
    
    handlechange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
      };

      SubmitOtp = async (e) => {
        e.preventDefault();
        const {otp} = this.state;
        
        var mobileUrl = '';
        const queryParams = new URLSearchParams(window.location.href);
        mobileUrl = queryParams.get('mobile');

        // var isValid = await this.validatePhone(otp)
        // if(isValid === false){
        //   this.setState({ isError: true });
          
        //    return true;
        // }

        var payload = {
          mobile : mobileUrl,
          otp:otp
        }
        axios
        .post("http://3.108.185.7/nodejs/api/user/verifyotp", payload)
        .then((response) => { 
          console.log(response.data);
          if(response.data.status === 'success'){
            console.log(response.data.otp);
            this.props.history.push(`/pages/reset-password`);
            // localStorage.setItem("auth", response.data.data?._id);
            // window.location.replace("/#/");
          }else{
              alert(response.data.msg)
          }
          
        })
        .catch((error) => {
          console.log(error.response);
        });
    };

  render() {
    return (
      <Row className="m-0 justify-content-center">
        <Col
          sm="8"
          xl="7"
          lg="10"
          md="8"
          className="d-flex justify-content-center"
        >
          <Card className="bg-authentication rounded-0 mb-0 w-100">
            <Row className="m-0">
              <Col
                lg="6"
                className="d-lg-block d-none text-center align-self-center px-5"
              >
                <img className="px-5 mx-2" src={resetImg} alt="resetImg" />
              </Col>
              <Col lg="6" md="12" className="p-0">
                <Card className="rounded-0 mb-0 px-2 py-50">
                  <CardHeader className="pb-1 pt-1">
                    <CardTitle>
                      <h4 className="mb-0">Reset Password</h4>
                    </CardTitle>
                  </CardHeader>
                  <p className="px-2 auth-title">
                    Please enter your email address and new password to
                    continue.
                  </p>
                  <CardBody className="pt-1">
                    <Form>
                      <FormGroup className="form-label-group">
                        <Input type="number" name="otp" onChange={this.handlechange} placeholder="OTP" required />
                        <Label>OTP</Label>
                      </FormGroup>
                      <div className="d-flex justify-content-between flex-wrap flex-sm-row flex-column">
                        <Button.Ripple
                          block
                          className="btn-block"
                          color="primary"
                          outline
                          onClick={e => {
                            e.preventDefault()
                            this.props.history.push("/pages/login")
                          }}
                        >
                          Go Back to Login
                        </Button.Ripple>
                        <Button.Ripple
                          block
                          color="primary"
                          type="submit"
                          className="btn-block mt-1 mt-sm-0"
                          onClick={this.SubmitOtp}
                        >
                          Reset
                        </Button.Ripple>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    )
  }
}
export default OtpVerify
