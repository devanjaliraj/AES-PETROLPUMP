import React from "react";
import Wizard from "../../../components/@vuexy/wizard/WizardComponent";
import {
  FormGroup,
  Input,
  Label,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardHeader,
} from "reactstrap";
// import Search from "../../pages/search/Search";
class StaffForm extends React.Component {
  state = {
    steps: [
      {
        title: 1,
        content: (
          <Row>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Name of the Manager* </Label>
                <Input type="text" required />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Address of the Manager* </Label>
                <Input type="text" required />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Phone Number*</Label>
                <Input type="number" required />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Joining Date*</Label>
                <Input type="number" required />
              </FormGroup>
            </Col>
          </Row>
        ),
      },
      {
        title: 2,
        content: (
          <Row>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Aadhar Number</Label>
                <Input type="number" />
              </FormGroup>
              <FormGroup>
                <Label> PAN Card Number</Label>
                <Input type="text" />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Photograph</Label>
                <Input type="text" />
              </FormGroup>
              <FormGroup>
                <Label>Date of Birth</Label>
                <Input type="number" />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Monthly Salary</Label>
                <Input type="text" />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Approved Leaves Per Month</Label>
                <Input type="text" />
              </FormGroup>
            </Col>
           
          </Row>
        ),
      },
      {
        title: 3,
        content: (
          <Row>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Name of the DSM </Label>
                <Input type="text" />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Address of the DSM </Label>
                <Input type="text" />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Phone Number </Label>
                <Input type="number" />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Joining Date </Label>
                <Input type="number" />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Aadhar Number</Label>
                <Input type="number" />
              </FormGroup>
              <FormGroup>
                <Label> PAN Card Number</Label>
                <Input type="text" />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Photograph</Label>
                <Input type="text" />
              </FormGroup>
              <FormGroup>
                <Label>Date of Birth</Label>
                <Input type="number" />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Salary Decided</Label>
                <Input type="text" />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Approved Leaves Per Month</Label>
                <Input type="text" />
              </FormGroup>
            </Col>
          </Row>
        ),
      },
    ],
  };

  render() {
    const { steps } = this.state;
    return (
      <Card>
        <CardHeader>
          <CardTitle>Staff Enrollment Forms </CardTitle>
        </CardHeader>
        <CardBody>
          <Wizard
            enableAllSteps
            onFinish={() => alert("submitted")}
            steps={steps}
          />
        </CardBody>
      </Card>
    );
  }
}

export default StaffForm;
