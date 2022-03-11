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

const colourOptions = [
  { value: "ocean", label: "Ocean" },
  { value: "blue", label: "Blue" },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red" },
  { value: "orange", label: "Orange" },
];

class CreditGiven extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Credit Given</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Customers Name</h5>
              <Input type="text" name="total_no_mpd"></Input>
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Vehicle No.</h5>
              <Input type="text" name="total_no_mpd"></Input>
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Credit for</h5>
              <Select
                className="React"
                classNamePrefix="select"
                defaultValue={colourOptions[0]}
                name="color"
                options={colourOptions}
              />
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Opening Balance</h5>
              <Input type="text" name="total_no_mpd"></Input>
            </Col>

            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Credit Limit</h5>
              <Input type="text" name="total_no_mpd"></Input>
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Payment Overdue as On Date</h5>
              <Input type="text" name="total_no_mpd"></Input>
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Credit Given Today Amount</h5>
              <Input type="text" name="total_no_mpd"></Input>
            </Col>
            <Col md="6" sm="12" style={{ marginBottom: 15 }}>
              <h5 className="my-1 text-bold-600">Dsm Name</h5>
              <Select
                className="React"
                classNamePrefix="select"
                defaultValue={colourOptions[0]}
                name="color"
                options={colourOptions}
              />
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
export default CreditGiven;
