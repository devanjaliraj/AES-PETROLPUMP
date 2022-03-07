import React from "react";
import Wizard from "../../../components/@vuexy/wizard/WizardComponent";
import {
  // Form,
  FormGroup,
  Input,
  Label,
  CustomInput,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardHeader,
} from "reactstrap";
import Search from "../../pages/search/Search";
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
            {/* <Col md="6" sm="12">
              <FormGroup>
                <Label>Any other facilities</Label>
                <Input type="text" />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Select Tank </Label>
                <CustomInput type="select" name="select" id="location">
                  <option>Tank 1</option>
                  <option>Tank 2</option>
                  <option>Tank 3</option>
                  <option>Tank 4</option>
                </CustomInput>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Product Mapped to Tank </Label>
                <CustomInput type="select" name="select" id="location">
                  <option>Tank 1</option>
                  <option>Tank 2</option>
                  <option>Tank 3</option>
                  <option>Tank 4</option>
                </CustomInput>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Capacity</Label>
                <CustomInput type="select" name="select" id="location">
                  <option>Tank 1</option>
                  <option>Tank 2</option>
                  <option>Tank 3</option>
                  <option>Tank 4</option>
                </CustomInput>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Select MPD</Label>
                <CustomInput type="select" name="select" id="location">
                  <option>MPD 1</option>
                  <option>MPD 2</option>
                  <option>MPD 3</option>
                  <option>MPD 4</option>
                </CustomInput>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Map correct Bay to MPD</Label>
                <CustomInput type="select" name="select" id="location">
                  <option>MPD 1</option>
                  <option>MPD 2</option>
                  <option>MPD 3</option>
                  <option>MPD 4</option>
                </CustomInput>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Select BAY</Label>
                <CustomInput type="select" name="select" id="location">
                  <option>BAY 1</option>
                  <option>BAY 2</option>
                  <option>BAY 3</option>
                  <option>BAY 4</option>
                </CustomInput>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Map Correct Nozzle to each Bay</Label>
                <CustomInput type="select" name="select" id="location">
                  <option>N1 and N2</option>
                  <option>N1 and N2</option>
                  <option>N1 and N2</option>
                  <option>N1 and N2</option>
                </CustomInput>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Select Nozzles</Label>
                <CustomInput type="select" name="select" id="location">
                  <option>N1 and N2</option>
                  <option>N1 and N2</option>
                  <option>N1 and N2</option>
                  <option>N1 and N2</option>
                </CustomInput>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Map Tank to Nozzles</Label>
                <CustomInput type="select" name="select" id="location">
                  <option>Tank 1/Tank 2/Tank 3</option>
                  <option>Tank 1/Tank 2/Tank 3</option>
                  <option>Tank 1/Tank 2/Tank 3</option>
                  <option>Tank 1/Tank 2/Tank 3</option>
                </CustomInput>
              </FormGroup>
            </Col> */}
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
