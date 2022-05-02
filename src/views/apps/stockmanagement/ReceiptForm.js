import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  Button,
  Input,
} from "reactstrap";
import Select from "react-select";
import axiosConfig from "../../../axiosConfig";
const colourOptions = [
  { value: "ocean", label: "Ocean" },
  { value: "blue", label: "Blue" },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red" },
  { value: "orange", label: "Orange" },
];

class ReceiptForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      Invoice_No: "",
      Tank_Lorry_No: "",
      Total_Invoice_Value: "",
      VAT_MS: "",
      VAT_HSD: "",
      TCS_LFR_MS: "",
      TCS_LFR_HSD: "",
      Champer_details: "",
      Product: "",
      Capacity: "",
      Density_As_per_Invoice: "",
      Density_Room_temp_obs: "",
      Room_Temp: "",
      Density_Observed_at_15_c: "",
      Difference: "",
      PL_as_per_Invoice: "",
      DL_as_per_Invoice: "",
      X: "",
      Y: "",
      Pl_Observed: "",
      DL_Observed: "",
      X_obs: "",
      Y_obs: "",
      Loss_to_be_booked: "",
      Upload_of_signed_copy_of_Invoice: "",
      selectedFile: null,
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/dealer/getoneReceipt/${id}`)
      .then((response) => {
        console.log(response);
        this.setState({
          date: response.data.data.date,
          Invoice_No: response.data.data.Invoice_No,
          Tank_Lorry_No: response.data.data.Tank_Lorry_No,
          Total_Invoice_Value: response.data.data.Total_Invoice_Value,
          VAT_MS: response.data.data.VAT_MS,
          VAT_HSD: response.data.data.VAT_HSD,
          TCS_LFR_MS: response.data.data.TCS_LFR_MS,
          TCS_LFR_HSD: response.data.data.TCS_LFR_HSD,
          Champer_details: response.data.data.Champer_details,
          Product: response.data.data.Product,
          Capacity: response.data.data.Capacity,
          Density_As_per_Invoice: response.data.data.Density_As_per_Invoice,
          Density_Room_temp_obs: response.data.data.Density_Room_temp_obs,
          Room_Temp: response.data.data.Room_Temp,
          Density_Observed_at_15_c: response.data.data.Density_Observed_at_15_c,
          Difference: response.data.data.Difference,
          PL_as_per_Invoice: response.data.data.PL_as_per_Invoice,
          DL_as_per_Invoice: response.data.data.DL_as_per_Invoice,
          X: response.data.data.X,
          Y: response.data.data.Y,
          Pl_Observed: response.data.data.Pl_Observed,
          DL_Observed: response.data.data.DL_Observed,
          X_obs: response.data.data.X_obs,
          Y_obs: response.data.data.Y_obs,
          Loss_to_be_booked: response.data.data.Loss_to_be_booked,
          Upload_of_signed_copy_of_Invoice:
            response.data.data.Upload_of_signed_copy_of_Invoice,
        });
      })
      .catch((error) => {
        console.log(error);
      });
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
    data.append("name_of_customer", this.state.name_of_customer);
    data.append("mobile", this.state.mobile);
    data.append("email", this.state.email);
    data.append("credit_limit", this.state.credit_limit);
    data.append("credit_term_lube", this.state.credit_term_lube);
    data.append("addres", this.state.addres);
    data.append("local_id", this.state.local_id);
    data.append("location", this.state.location);
    data.append("vehicle_no", this.state.vehicle_no);
    data.append("local_guarantor_name", this.state.local_guarantor_no);
    data.append("local_guarantor_no", this.state.local_guarantor_no);
    // data.append("document_upload", this.state.selectedFile, this.state.selectedName);
    if (this.state.selectedFile !== null) {
      data.append(
        "document_upload",
        this.state.selectedFile,
        this.state.selectedName
      );
    }
    for (var value of data.values()) {
      console.log(value);
    }
    for (var key of data.keys()) {
      console.log(key);
    }

    let { id } = this.props.match.params;
    // var user = JSON.parse(localStorage.getItem('userData'));

    axiosConfig
      .post(`/dealer/updatecreditcustomers/${id}`, data)

      .then((response) => {
        console.log(response);

        this.props.history.push(
          `/app/ro-configuration/creditCustomersList/${this.state.dealer_name1._id}`
        );
      })
      .catch((error) => {
        //  swal("Error!", "You clicked the button!", "error");
        console.log(error);
      });
  };

  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Receipt Form</CardTitle>
          <Button
            className=" btn btn-danger float-right"
            // onClick={() =>
            //   history.push("/#/app/ro-configuration/List")
            // }
          >
            Back
          </Button>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Date</h5>
              <Input
                type="date"
                name="date"
                value={this.state.date}
                onChange={this.changeHandler}
              ></Input>
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Invoice No.</h5>
              <Input
                type="number"
                name="Invoice_No"
                value={this.state.Invoice_No}
                onChange={this.changeHandler}
              ></Input>
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Tank Lorry No.</h5>
              <Input
                type="text"
                name="Tank_Lorry_No"
                value={this.state.Tank_Lorry_No}
                onChange={this.changeHandler}
              ></Input>
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Total Invoice Value</h5>
              <Input
                type="number"
                name="Total_Invoice_Value"
                value={this.state.Total_Invoice_Value}
                onChange={this.changeHandler}
              ></Input>
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">VAT_MS</h5>
              <Input
                type="number"
                name="VAT_MS"
                value={this.state.VAT_MS}
                onChange={this.changeHandler}
              ></Input>
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">VAT HSD</h5>
              <Input
                type="number"
                name="VAT_HSD"
                value={this.state.VAT_HSD}
                onChange={this.changeHandler}
              ></Input>
            </Col>

            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">VAT HSD</h5>
              <Input
                type="number"
                name="TCS_LFR_MS"
                value={this.state.TCS_LFR_MS}
                onChange={this.changeHandler}
              ></Input>
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">TCS LFR HSD</h5>
              <Input
                type="number"
                name="TCS_LFR_HSD"
                value={this.state.TCS_LFR_HSD}
                onChange={this.changeHandler}
              ></Input>
            </Col>

            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Champer Detail</h5>
              <Input
                type="number"
                name="Champer_details"
                value={this.state.Champer_details}
                onChange={this.changeHandler}
              ></Input>
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Product</h5>
              <Input
                type="text"
                name="Product"
                value={this.state.Product}
                onChange={this.changeHandler}
              ></Input>
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Capacity</h5>
              <Input
                type="text"
                name="Capacity"
                value={this.state.Capacity}
                onChange={this.changeHandler}
              ></Input>
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Density as Per Invoice</h5>
              <Input
                type="text"
                name="Density_As_per_Invoice"
                value={this.state.Density_As_per_Invoice}
                onChange={this.changeHandler}
              ></Input>
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Density at Room Temp Obs</h5>
              <Input
                type="text"
                name="Density_Room_temp_obs"
                value={this.state.Density_Room_temp_obs}
                onChange={this.changeHandler}
              ></Input>
            </Col>

            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Room Temp</h5>
              <Input
                type="text"
                name="Room_Temp"
                value={this.state.Room_Temp}
                onChange={this.changeHandler}
              ></Input>
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Density Observed at 15.C</h5>
              <Input
                type="text"
                name="Density_Observed_at_15_c"
                value={this.state.Density_Observed_at_15_c}
                onChange={this.changeHandler}
              ></Input>
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Difference</h5>
              <Input
                type="text"
                name="Difference"
                value={this.state.Difference}
                onChange={this.changeHandler}
              ></Input>
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">
                Pl as Per Innoice-Mandatory
              </h5>
              <Input
                type="text"
                name="PL_as_per_Invoice"
                value={this.state.PL_as_per_Invoice}
                onChange={this.changeHandler}
              ></Input>
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">
                Dl as Per Innoice-Mandatory
              </h5>
              <Input
                type="text"
                name="DL_as_per_Invoice"
                value={this.state.DL_as_per_Invoice}
                onChange={this.changeHandler}
              ></Input>
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">X</h5>
              <Input
                type="text"
                name="X"
                value={this.state.X}
                onChange={this.changeHandler}
              ></Input>
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Y</h5>
              <Input
                type="text"
                name="Y"
                value={this.state.Y}
                onChange={this.changeHandler}
              ></Input>
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Pl Observed</h5>
              <Input
                type="text"
                name="Pl_Observed"
                value={this.state.Pl_Observed}
                onChange={this.changeHandler}
              ></Input>
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Dl Observed</h5>
              <Input
                type="text"
                name="DL_Observed"
                value={this.state.DL_Observed}
                onChange={this.changeHandler}
              ></Input>
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">X Obs</h5>
              <Input
                type="text"
                name="X_obs"
                value={this.state.X_obs}
                onChange={this.changeHandler}
              ></Input>
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Y Obs</h5>
              <Input
                type="text"
                name="Y_obs"
                value={this.state.Y_obs}
                onChange={this.changeHandler}
              ></Input>
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Loss to Be Booked</h5>
              <Input
                type="text"
                name="Loss_to_be_booked"
                value={this.state.Loss_to_be_booked}
                onChange={this.changeHandler}
              ></Input>
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Signed Copy Of Innoice</h5>
              <Input
                type="text"
                name="Upload_of_signed_copy_of_Invoice"
                value={this.state.Upload_of_signed_copy_of_Invoice}
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
        </CardBody>
      </Card>
    );
  }
}
export default ReceiptForm;
