import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Label,
  FormGroup,
  CustomInput,
  Row,
  Form,
  Col,
  Button,
  Input,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import Select from "react-select";
import { history } from "../../../history";
import axios from "axios";
class LubeStockForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        // date:"",
        grade: "",
        opening_stock:"",
        rsp:"",
        purchase_price:"",
        selling_price_maintained:"",
        no_of_pieces:"",
        amount_before_tax:"",
        cgst: "",
        sgst: "",
        final_inventory:"" ,
         
      };
    }
   
    componentDidMount() {
      let { id } = this.props.match.params;
      axios
        .get(`  http://3.108.185.7/nodejs/api/dealer/getonelubestock/${id}`)
        .then(response => {
          console.log(response);
          this.setState({
              grade: response.data.data.grade,
              opening_stock: response.data.data.opening_stock,
              rsp: response.data.data.rsp,
              purchase_price: response.data.data.purchase_price,
              selling_price_maintained: response.data.data.selling_price_maintained,
              no_of_pieces: response.data.data.no_of_pieces,
              amount_before_tax: response.data.data.amount_before_tax,
              cgst: response.data.data.cgst,
              sgst: response.data.data.sgst,
              final_inventory: response.data.data.final_inventory,
             
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
    changeHandler = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
    submitHandler = e => {
      e.preventDefault();
      let { id } = this.props.match.params;
      axios
        .post(`http://3.108.185.7/nodejs/api/dealer/updatelubestock/${id}`, this.state)
        .then(response => {
          console.log(response);
          // swal("Success!", "Submitted SuccessFull!", "success");
          this.props.history.push("/app/stockManagement/lubeStockList");
        })
        .catch(error => {
          console.log(error);
        });
    };
  render() {
    return (
      <div>
      <Row>
        <Col sm="12">
          <div>
            <Breadcrumb listTag="div">
              <BreadcrumbItem href="/analyticsDashboard" tag="a">
                Home
              </BreadcrumbItem>
              {/* <BreadcrumbItem href="/app/material/materialList" tag="a">
                Material List
              </BreadcrumbItem> */}
              <BreadcrumbItem active>Edit Lube Stock </BreadcrumbItem>
            </Breadcrumb>
          </div>
        </Col>
      </Row>
      <Card>
        <CardHeader>
          <CardTitle>Lube Stock Form</CardTitle>
          <Button
            className=" btn btn-danger float-right"
            onClick={() =>
              history.push("/app/stockManagement/lubeStockList")
            }
          >
            Back
          </Button>
        </CardHeader>
        <CardBody>
        <Form className="m-1" onSubmit={this.submitHandler}>
          <Row>
            <Col md="6" sm="12">
              <Label>Grade</Label>
              <Input
                  type="number" 
                  name="grade"
                  value={this.state.grade}
                  onChange={this.changeHandler}
                  >

              </Input>
            </Col>
            <Col md="6" sm="12">
              <Label>Opening Stock</Label>
              <Input  
                  type="number" 
                  name="opening_stock"
                  value={this.state.opening_stock}
                  onChange={this.changeHandler}>

              </Input>
            </Col>
            <Col md="6" sm="12">
              <Label>Rsp</Label>
              <Input 
                  type="number" 
                  name="rsp"
                  value={this.state.rsp}
                  onChange={this.changeHandler}>

              </Input>
            </Col>
            <Col md="6" sm="12">
              <Label>Purchase Price</Label>
              <Input 
                  type="number" 
                  name="purchase_price"
                  value={this.state.purchase_price}
                  onChange={this.changeHandler}>

              </Input>
            </Col>
            <Col md="6" sm="12">
              <Label>Selling Price Maintenance</Label>
              <Input 
                  type="number"         
                  name="selling_price_maintained"
                  value={this.state.selling_price_maintained}
                  onChange={this.changeHandler}>

              </Input>
            </Col>
            <Col md="6" sm="12">
              <Label>No. of Pieces</Label>
              <Input 
                  type="number" 
                  name="no_of_pieces"
                  value={this.state.no_of_pieces}
                  onChange={this.changeHandler}>

              </Input>
            </Col>
            <Col md="6" sm="12">
              <Label>Amount Before Tax</Label>
              <Input 
                  type="number" 
                  name="amount_before_tax"
                  value={this.state.amount_before_tax}
                  onChange={this.changeHandler}>

              </Input>
            </Col>
            <Col md="6" sm="12">
              <Label>CGST</Label>
              <Input 
                  type="number" 
                  name="cgst"
                  value={this.state.cgst}
                  onChange={this.changeHandler}>

              </Input>
            </Col>
            <Col md="6" sm="12">
              <Label>SGST</Label>
              <Input 
                  type="number" 
                  name="sgst"
                  value={this.state.sgst}
                  onChange={this.changeHandler}>

              </Input>
            </Col>
            <Col md="6" sm="12" style={{ marginBottom: 15 }}>
              <Label>Final Inventory</Label>
              <Input 
                  type="number" 
                  name="final_inventory"
                  value={this.state.final_inventory}
                  onChange={this.changeHandler}>

              </Input>
            </Col>
            <Col lg="12" md="12" sm="12" className="mb-5">
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
export default LubeStockForm;
