import React from "react";
import axiosConfig from "../../../axiosConfig";
import {
  Card,
  CardHeader,
  CardTitle,
  CustomInput,
  CardBody,
  Form,
  Row,
  Col,
  Button,
  Input,
} from "reactstrap";

class LubricantForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gradeL: [],
      total_pieces_available: "",
      no_of_pieces_sold: "",
      selling_price: "",
      dsm_name: "",
      mfp: [],
      gst: "",
      discount: "",
    };
  }
  componentDidMount() {
    // lube_grade
    axiosConfig
      .get("/dealer/alllubestock")
      .then((response) => {
        console.log(response.data.data);
        this.setState({ gradeL: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });

    // Mode of Payment
    axiosConfig
      .get("/dealer/allmode")
      .then((response) => {
        console.log(response.data.data);
        this.setState({ mfp: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });

    let { id } = this.props.match.params;
    axiosConfig
      .get(`/dealer/getonelubricantsales/${id}`)
      .then((response) => {
        console.log(response);

        this.setState({
          lube_grade: response.data.data.lube_grade,
          total_pieces_available: response.data.data.total_pieces_available,
          no_of_pieces_sold: response.data.data.no_of_pieces_sold,
          selling_price: response.data.data.selling_price,
          dsm_name: response.data.data.dsm.dsm_name,
          mode_of_pyament: response.data.data.mode_of_pyament,
          gst: response.data.data.gst,
          discount: response.data.data.discount,
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
    let { id } = this.props.match.params;
    axiosConfig
      .post(
        `/dealer/updatelubricantsales/${id}`,
        this.state
      )
      .then((response) => {
        console.log(response);
        // swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/#/app/shiftManagement/lubricantSales");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Lubricant Sales</CardTitle>
        </CardHeader>
        <CardBody>
          <Form className="m-1" onSubmit={this.submitHandler}>
            <Row>
              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">Lube Grade</h5>
                <CustomInput
                  className="React"
                  classNamePrefix="select"
                  type="select"
                  name="lube_grade"
                  value={this.state.lube_grade}
                  onChange={this.changeHandler}
                  // options={colourOptions}
                >
                  {this.state.gradeL?.map((mocp) => (
                    <option value={mocp._id} key={mocp._id}>
                      {mocp.grade}
                    </option>
                  ))}
                </CustomInput>
              </Col>
              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">Total Pieces Available</h5>
                <CustomInput
                  type="select"
                  name="total_pieces_available"
                  value={this.state.total_pieces_available}
                  onChange={this.changeHandler}
                >
                  {this.state.gradeL?.map((mocp) => (
                    <option value={mocp._id} key={mocp._id}>
                      {mocp.no_of_pieces}
                    </option>
                  ))}
                </CustomInput>
              </Col>
              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">No-of Pieces Sold</h5>
                <Input
                  type="number"
                  name="no_of_pieces_sold"
                  value={this.state.no_of_pieces_sold}
                  onChange={this.changeHandler}
                ></Input>
              </Col>
              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">Selling Price</h5>
                <Input
                  type="number"
                  name="selling_price"
                  value={this.state.selling_price}
                  onChange={this.changeHandler}
                ></Input>
              </Col>

              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">
                  Dsm/Manager Who Collected Money
                </h5>
                <Input
                  type="text"
                  name="dsm_name"
                  value={this.state.dsm_name}
                  onChange={this.changeHandler}
                ></Input>
              </Col>
              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">Mode of Payment</h5>
                <CustomInput
                  className="React"
                  classNamePrefix="select"
                  type="select"
                  name="mode_of_pyament"
                  value={this.state.mode_of_pyament}
                  onChange={this.changeHandler}
                >
                  {this.state.mfp?.map((mocp) => (
                    <option value={mocp._id} key={mocp._id}>
                      {mocp.mode}
                    </option>
                  ))}
                </CustomInput>
              </Col>
              <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">Gst</h5>
                <Input
                  type="number"
                  name="gst"
                  value={this.state.gst}
                  onChange={this.changeHandler}
                ></Input>
              </Col>
              <Col md="6" sm="12" style={{ marginBottom: 15 }}>
                <h5 className="my-1 text-bold-600">Discount</h5>
                <Input
                  type="number"
                  name="discount"
                  value={this.state.discount}
                  onChange={this.changeHandler}
                ></Input>
              </Col>
              <Col lg="12" md="12" sm="12" className="mb-5">
                <Button.Ripple
                  color="primary"
                  type="submit"
                  className="mr-1 mb-1"
                >
                  Submit
                </Button.Ripple>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    );
  }
}
export default LubricantForm;
