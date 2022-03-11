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

class BayManagement extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Bay Management</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Bay 1</h5>
              <Select
                className="React"
                classNamePrefix="select"
                defaultValue={colourOptions[0]}
                name="color"
                options={colourOptions}
              />
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Nozzle</h5>
              <Select
                className="React"
                classNamePrefix="select"
                defaultValue={colourOptions[0]}
                name="color"
                options={colourOptions}
              />
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Product</h5>
              <Input type="text" name="total_no_mpd"></Input>
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Opening Totaliser</h5>
              <Input type="text" name="total_no_mpd"></Input>
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Closing 1</h5>
              <Input type="text" name="total_no_mpd"></Input>
            </Col>

            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Dsm Name</h5>
              <Input type="text" name="total_no_mpd"></Input>
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Closing Totaliser</h5>
              <Input type="text" name="total_no_mpd"></Input>
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Closing 2</h5>
              <Input type="text" name="total_no_mpd"></Input>
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Dsm Name</h5>
              <Input type="text" name="total_no_mpd"></Input>
            </Col>
            <Col md="6" sm="12" style={{ marginBottom: 15 }}>
              <h5 className="my-1 text-bold-600">Closing Totaliser</h5>
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
export default BayManagement;
