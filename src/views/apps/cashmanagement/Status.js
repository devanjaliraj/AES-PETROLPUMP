import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  Button,
  Label,
  Input,
} from "reactstrap";
import Select from "react-select";

const colourOptions = [
  { value: "Opening Value", label: "Opening Value" },
  { value: "Addition", label: "Addition" },
  { value: "Sold", label: "Sold" },
  { value: "Closing Value Expected", label: "Closing Value Expected" },
  { value: "Actual Closing Valus", label: "Actual Closing Valus" },
  { value: "Difference", label: "Difference" },
];

class Status extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Status</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Date</h5>
              <Input type="text" name="total_no_mpd"></Input>
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Total Cash Available</h5>
              <Input type="text" name="total_no_mpd"></Input>
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Ms Stock</h5>
              <Select
                className="React"
                classNamePrefix="select"
                defaultValue={colourOptions[0]}
                name="color"
                options={colourOptions}
              />
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Hsd Stock</h5>
              <Select
                className="React"
                classNamePrefix="select"
                defaultValue={colourOptions[1]}
                name="clear"
                options={colourOptions}
                isClearable={true}
              />
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Lubricants</h5>
              <Select
                className="React"
                classNamePrefix="select"
                defaultValue={colourOptions[1]}
                name="clear"
                options={colourOptions}
                isClearable={true}
              />
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Cash in Bank 1</h5>
              <Select
                className="React"
                classNamePrefix="select"
                defaultValue={colourOptions[1]}
                name="clear"
                options={colourOptions}
                isClearable={true}
              />
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Cash in Bank 2</h5>
              <Select
                className="React"
                classNamePrefix="select"
                defaultValue={colourOptions[1]}
                name="clear"
                options={colourOptions}
                isClearable={true}
              />
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Cash in Bpcl</h5>
              <Select
                className="React"
                classNamePrefix="select"
                defaultValue={colourOptions[1]}
                name="clear"
                options={colourOptions}
                isClearable={true}
              />
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Cash in Pos 1</h5>
              <Select
                className="React"
                classNamePrefix="select"
                defaultValue={colourOptions[1]}
                name="clear"
                options={colourOptions}
                isClearable={true}
              />
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Cash in pos 2</h5>
              <Select
                className="React"
                classNamePrefix="select"
                defaultValue={colourOptions[1]}
                name="clear"
                options={colourOptions}
                isClearable={true}
              />
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Cash in Wallet 1</h5>
              <Select
                className="React"
                classNamePrefix="select"
                defaultValue={colourOptions[1]}
                name="clear"
                options={colourOptions}
                isClearable={true}
              />
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Cash in Wallet 2</h5>
              <Select
                className="React"
                classNamePrefix="select"
                defaultValue={colourOptions[1]}
                name="clear"
                options={colourOptions}
                isClearable={true}
              />
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Expenses</h5>
              <Select
                className="React"
                classNamePrefix="select"
                defaultValue={colourOptions[1]}
                name="clear"
                options={colourOptions}
                isClearable={true}
              />
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Net Profit</h5>
              <Input type="text" name="total_no_mpd"></Input>
            </Col>
            <Col md="6" sm="12" style={{ marginBottom: 15 }}>
              <h5 className="my-1 text-bold-600">Expected Profit</h5>
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
export default Status;
