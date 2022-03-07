import React from "react";
import { Row, Col } from "reactstrap";
import WizardBasic from "../../../components/@vuexy/wizard/WizardBasic";
class RoForm extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* <BreadCrumbs
          breadCrumbTitle="Wizard"
          breadCrumbParent="Extra Components"
          breadCrumbActive="Wizard"
        /> */}
        <Row>
          <Col sm="12">
            <WizardBasic />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
export default RoForm;
