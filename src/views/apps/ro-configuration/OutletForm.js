import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  Button,
} from "reactstrap";
import Select from "react-select";

// const colourOptions = [
//   { value: "ocean", label: "Ocean" },
//   { value: "blue", label: "Blue" },
//   { value: "purple", label: "Purple" },
//   { value: "red", label: "Red" },
//   { value: "orange", label: "Orange" },
// ];

class OutletForm extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Outlet</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Select Tank</h5>
              <Select
                className="React"
                classNamePrefix="select"
                
                name="color"
                
              />
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Product Mapped to Tank</h5>
              <Select
                className="React"
                classNamePrefix="select"
                
                name="clear"
                
                isClearable={true}
              />
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Capacity</h5>
              <Select
                className="React"
                classNamePrefix="select"
                
                name="clear"
              
                isClearable={true}
              />
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Select Mpd</h5>
              <Select
                className="React"
                classNamePrefix="select"
                // defaultValue={colourOptions[1]}
                name="clear"
                // options={colourOptions}
                isClearable={true}
              />
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Map Correct Bay to Mpd</h5>
              <Select
                className="React"
                classNamePrefix="select"
                
                name="clear"
                
                isClearable={true}
              />
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Select Bay</h5>
              <Select
                className="React"
                classNamePrefix="select"
                
                name="clear"
                
                isClearable={true}
              />
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">
                Map Correct Nozzle to Each Bay
              </h5>
              <Select
                className="React"
                classNamePrefix="select"
                
                name="clear"
                
                isClearable={true}
              />
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Select Nozzle</h5>
              <Select
                className="React"
                classNamePrefix="select"
                
                name="clear"
                
                isClearable={true}
              />
            </Col>
            <Col md="6" sm="12" style={{ marginBottom: 15 }}>
              <h5 className="my-1 text-bold-600">Map Tank to Nozzles</h5>
              <Select
                className="React"
                classNamePrefix="select"
                
                name="clear"
            
                isClearable={true}
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
export default OutletForm;
