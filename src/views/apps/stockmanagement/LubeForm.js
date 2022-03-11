import React from "react";
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

class LubeForm extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Lube Form</CardTitle>
          <Button
            className=" btn btn-danger float-right"
            // onClick={() =>
            //   history.push("/app/ro-configuration/List")
            // }
          >
            Back
          </Button>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Grade</h5>
              <Input type="text" name="total_no_mpd"></Input>
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Opening Stock</h5>
              <Input type="text" name="total_no_mpd"></Input>
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Rsp</h5>
              <Input type="text" name="total_no_mpd"></Input>
            </Col>

            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Purchase Price</h5>
              <Input type="text" name="total_no_mpd"></Input>
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Selling Price Maintenance</h5>
              <Input type="text" name="total_no_mpd"></Input>
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">No. of Pieces</h5>
              <Input type="text" name="total_no_mpd"></Input>
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Amount Before Tax</h5>
              <Input type="text" name="total_no_mpd"></Input>
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">CGST</h5>
              <Input type="text" name="total_no_mpd"></Input>
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">SGST</h5>
              <Input type="text" name="total_no_mpd"></Input>
            </Col>
            <Col md="6" sm="12" style={{ marginBottom: 15 }}>
              <h5 className="my-1 text-bold-600">Final Inventory</h5>
              <Input type="text" name="total_no_mpd"></Input>
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
export default LubeForm;
