
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
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
// import { history } from "../../../history";
// import { data } from "jquery";
// import swal from "sweetalert";
import { Route } from "react-router-dom";

export default class EditTraningVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title: "",
        desc: "",
        link: "",
     
    };
  }
  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/admin/viewonevideo/${id}`)
      .then((response) => {
        console.log(response);
        this.setState({
            desc: response.data.data.desc,
            title: response.data.data.title,
            link: response.data.data.link,
           
        //   dealer: response.data.data.dealer,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
 
  render() {
    return (
      <div>
        <Row>
          <Col sm="12">
            <div>
              <Breadcrumb listTag="div">
                <BreadcrumbItem href="/" tag="a">
                  Home
                </BreadcrumbItem>
                {/* <BreadcrumbItem href="/app/material/materialList" tag="a">
                    Material List
                </BreadcrumbItem> */}
                <BreadcrumbItem active>Edit Traning Video</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit Traning Video
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() =>
                      history.push("/app/traningvideo/TraningVideoList")
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
            <Row className="m-2">
        <Col lg="6" md="6" sm="6" className="mb-2">
                <Label>Title</Label>
                <Input
                  type="text"
                  name="title"
                  value={this.state.title}
                  onChange={this.changeHandler}
                ></Input>
              </Col>
              <Col lg="6" md="6" sm="6" className="mb-2">
                <Label>Link</Label>
                <Input
                  type="text"
                  name="link"
                  value={this.state.link}
                  onChange={this.changeHandler}
                ></Input>
              </Col>
              <Col lg="6" md="6" sm="6" className="mb-2">
                <Label>Descriptions</Label>
                <Input
                  type="textarea"
                  name="desc"
                  value={this.state.desc}
                  onChange={this.changeHandler}
                ></Input>
              </Col>
          </Row>
              <Row>
                <Col
                  lg="6"
                  md="6"
                  sm="6"
                  className="mb-2"
                  style={{ marginLeft: "15px" }}
                >
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
