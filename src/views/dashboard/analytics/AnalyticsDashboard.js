import React from "react";
import { Row, Col, Card, CardTitle, CardText } from "reactstrap";
import SalesCard from "./SalesCard";
// import SuberscribersGained from "../../ui-elements/cards/statistics/SubscriberGained"
// import OrdersReceived from "../../ui-elements/cards/statistics/OrdersReceived"
// import AvgSession from "../../ui-elements/cards/analytics/AvgSessions"
// import SupportTracker from "../../ui-elements/cards/analytics/SupportTracker"
// import ProductOrders from "../../ui-elements/cards/analytics/ProductOrders"
// import SalesStat from "../../ui-elements/cards/analytics/Sales"
// import ActivityTimeline from "./ActivityTimeline"
import DispatchedOrders from "./DispatchedOrders";
import Notification from "./Notification";
import axiosConfig from "../../../axiosConfig";
import "../../../assets/scss/pages/dashboard-analytics.scss";
import axios from "axios";
// let $primary = "#7367F0",
//   $danger = "#EA5455",
//   $warning = "#FF9F43",
//   $info = "#00cfe8",
//   $primary_light = "#9c8cfc",
//   $warning_light = "#FFC085",
//   $danger_light = "#f29292",
//   $info_light = "#1edec5",
//   $stroke_color = "#e8e8e8",
//   $label_color = "#e7eef7",
//   $white = "#fff"

class AnalyticsDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total7sayplan: {},
      bsicplan: {},
      endtoend: {},
      day7planearnig: {},
      basicplanearning: {},
      endtoendearning: {},
      maneger: {},
      dsm: {},
      outherstaff: {},
      // dealerTable: [],
    };
  }

  componentDidMount() {
    // //dealer table
    // axiosConfig
    //   .get("/dealer/alldealers")
    //   .then((response) => {
    //     console.log(response.data);
    //     //console.log(response.data.data);
    //     this.setState({ dealerTable: response.data });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // //end dealer //
    axiosConfig
      .get("/dealer/total7sayplan")
      .then((response) => {
        console.log(response.data);
        //console.log(response.data.data);
        this.setState({ total7sayplan: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    axiosConfig
      .get("/dealer/totalvasicplan")
      .then((response) => {
        console.log(response.data);
        //console.log(response.data.data);
        this.setState({ bsicplan: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    axiosConfig
      .get("/dealer/totalendtoendplan")
      .then((response) => {
        console.log(response.data);
        //console.log(response.data.data);
        this.setState({ endtoend: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
    axiosConfig
      .get("/dealer/total7dayplanearnig")
      .then((response) => {
        console.log(response.data);
        console.log(response.data.Earning);
        this.setState({ day7planearnig: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
    axiosConfig
      .get("/dealer/totalbasicplanearning")
      .then((response) => {
        console.log(response.data);
        //console.log(response.data.data);
        this.setState({ basicplanearning: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
    axiosConfig
      .get("dealer/endtoendearning")
      .then((response) => {
        console.log(response.data);
        //console.log(response.data.data);
        this.setState({ endtoendearning: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    axiosConfig
      .get("/dealer/totalmaneger")
      .then((response) => {
        console.log(response.data);
        //console.log(response.data.data);
        this.setState({ maneger: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    axiosConfig
      .get("/dealer/totaldsm")
      .then((response) => {
        console.log(response.data);
        //console.log(response.data.data);
        this.setState({ dsm: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
    axiosConfig
      .get("/dealer/totaloutherstaff")
      .then((response) => {
        console.log(response.data);
        //console.log(response.data.data);
        this.setState({ outherstaff: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <React.Fragment>
        <Col lg="12" md="12">
          <SalesCard />
        </Col>
        <h3>Menbership Plans</h3>
        <Row className="match-height">
          <Col lg="3" md="12">
            <Card
              className="bg-warning"
              body
              inverse
              style={{ borderColor: "white" }}
            >
              <CardTitle className="mb-1" tag="h4" style={{ color: "white" }}>
                Total No. of 7 Days Plans
              </CardTitle>

              <CardText tag="h3" style={{ color: "white" }}>
                {this.state.total7sayplan.data}
              </CardText>
            </Card>
          </Col>
          <Col lg="3" md="12">
            <Card
              className="bg-danger"
              body
              inverse
              style={{ borderColor: "white" }}
            >
              <CardTitle className="mb-1" tag="h4" style={{ color: "white" }}>
                Total No of Basic Plans
              </CardTitle>

              <CardText tag="h3" style={{ color: "white" }}>
                {this.state.bsicplan.data}
              </CardText>
            </Card>
          </Col>
          <Col lg="3" md="12">
            <Card
              className="bg-info"
              body
              inverse
              style={{ borderColor: "white" }}
            >
              <CardTitle className="mb-1" tag="h4" style={{ color: "white" }}>
                Total No of End to End plans
              </CardTitle>

              <CardText tag="h3" style={{ color: "white" }}>
                {this.state.endtoend.data}
              </CardText>
            </Card>
          </Col>
          <Col lg="3" md="12">
            <Card
              className="bg-danger"
              body
              inverse
              style={{ borderColor: "white" }}
            >
              <CardTitle className="mb-1" tag="h4" style={{ color: "white" }}>
                Total 7 days earring
              </CardTitle>
              <CardText tag="h3" style={{ color: "white" }}>
                {this.state.day7planearnig.Earning}
              </CardText>
            </Card>
          </Col>
          <Col lg="3" md="12">
            <Card
              className="bg-secondary"
              body
              inverse
              style={{ borderColor: "white" }}
            >
              <CardTitle className="mb-1" tag="h4" style={{ color: "white" }}>
                Total Basic plan earring
              </CardTitle>

              <CardText tag="h3" style={{ color: "white" }}>
                {this.state.basicplanearning.Earning}
              </CardText>
            </Card>
          </Col>
          <Col lg="3" md="12">
            <Card
              className="bg-primary"
              body
              inverse
              style={{ borderColor: "white" }}
            >
              <CardTitle className="mb-1" tag="h4" style={{ color: "white" }}>
                Total end to end earring
              </CardTitle>

              <CardText tag="h3" style={{ color: "white" }}>
                {this.state.endtoendearning.Earning}
              </CardText>
            </Card>
          </Col>
        </Row>
        <h3>Staff Enrollment</h3>
        <Row className="match-height">
          <Col lg="3" md="12">
            <Card
              className="bg-warning"
              body
              inverse
              style={{ borderColor: "white" }}
            >
              <CardTitle className="mb-1" tag="h4" style={{ color: "white" }}>
                Total DSM
              </CardTitle>

              <CardText tag="h3" style={{ color: "white" }}>
                {this.state.dsm.data}
              </CardText>
            </Card>
          </Col>
          <Col lg="3" md="12">
            <Card
              className="bg-danger"
              body
              inverse
              style={{ borderColor: "white" }}
            >
              <CardTitle className="mb-1" tag="h4" style={{ color: "white" }}>
                Total Other Staff
              </CardTitle>

              <CardText tag="h3" style={{ color: "white" }}>
                {this.state.outherstaff.data}
              </CardText>
            </Card>
          </Col>
          <Col lg="3" md="12">
            <Card
              className="bg-info"
              body
              inverse
              style={{ borderColor: "white" }}
            >
              <CardTitle className="mb-1" tag="h4" style={{ color: "white" }}>
                Total Staff Management
              </CardTitle>

              <CardText tag="h3" style={{ color: "white" }}>
                {this.state.maneger.data}
              </CardText>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col sm="12">
            <DispatchedOrders />
          </Col>
          <Col sm="12">
            <Notification />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default AnalyticsDashboard;
