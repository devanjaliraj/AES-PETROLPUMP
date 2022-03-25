import React from "react"
import { Row, Col, Card, CardTitle, CardText } from "reactstrap"
import SalesCard from "./SalesCard"
import SuberscribersGained from "../../ui-elements/cards/statistics/SubscriberGained"
import OrdersReceived from "../../ui-elements/cards/statistics/OrdersReceived"
import AvgSession from "../../ui-elements/cards/analytics/AvgSessions"
import SupportTracker from "../../ui-elements/cards/analytics/SupportTracker"
import ProductOrders from "../../ui-elements/cards/analytics/ProductOrders"
import SalesStat from "../../ui-elements/cards/analytics/Sales"
import ActivityTimeline from "./ActivityTimeline"
import DispatchedOrders from "./DispatchedOrders"
import Notification from "./Notification"

import "../../../assets/scss/pages/dashboard-analytics.scss"

let $primary = "#7367F0",
  $danger = "#EA5455",
  $warning = "#FF9F43",
  $info = "#00cfe8",
  $primary_light = "#9c8cfc",
  $warning_light = "#FFC085",
  $danger_light = "#f29292",
  $info_light = "#1edec5",
  $stroke_color = "#e8e8e8",
  $label_color = "#e7eef7",
  $white = "#fff"

class AnalyticsDashboard extends React.Component {
  render() {
    return (
      <React.Fragment>
         <Col lg="12" md="12">

<SalesCard />
</Col>
        <h3>RO-Configurtion</h3>
        <Row className="match-height">
          
        
          <Col lg="3" md="12">
          <Card
              className="bg-warning"
              body
              inverse
              style={{ borderColor: "white" }}
            >
              <CardTitle className="mb-1" tag="h4" style={{ color: "white" }}>
               Total  Basic Details
              </CardTitle>

              <CardText tag="h3" style={{ color: "white" }}>
                {/* {this.state.product.data} */}
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
               Total Design your outlet
              </CardTitle>

              <CardText tag="h3" style={{ color: "white" }}>
                {/* {this.state.product.data} */}
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
               Total Payment Mode Available
              </CardTitle>

              <CardText tag="h3" style={{ color: "white" }}>
                {/* {this.state.product.data} */}
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
               Total Credit Customers
              </CardTitle>

              <CardText tag="h3" style={{ color: "white" }}>
                {/* {this.state.product.data} */}
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
               Total Other Equipments in Outlet
              </CardTitle>

              <CardText tag="h3" style={{ color: "white" }}>
                {/* {this.state.product.data} */}
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
               Total Bank for Transaction
              </CardTitle>

              <CardText tag="h3" style={{ color: "white" }}>
                {/* {this.state.product.data} */}
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
               Total --------
              </CardTitle>

              <CardText tag="h3" style={{ color: "white" }}>
                {/* {this.state.product.data} */}
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
              Total --------
              </CardTitle>

              <CardText tag="h3" style={{ color: "white" }}>
                {/* {this.state.product.data} */}
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
              Total --------
              </CardTitle>

              <CardText tag="h3" style={{ color: "white" }}>
                {/* {this.state.product.data} */}
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
                 Total --------
              </CardTitle>

              <CardText tag="h3" style={{ color: "white" }}>
                {/* {this.state.product.data} */}
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
               Total 
              </CardTitle>

              <CardText tag="h3" style={{ color: "white" }}>
                {/* {this.state.product.data} */}
              </CardText>
            </Card>
          </Col>
          {/* <Col lg="3" md="6" sm="12">
            <SuberscribersGained />
          </Col>
          <Col lg="3" md="6" sm="12">
            <OrdersReceived />
          </Col> */}
        </Row>
        {/* <Row className="match-height">
          <Col md="6" sm="12">
            <AvgSession labelColor={$label_color} primary={$primary} />
          </Col>
          <Col md="6" sm="12">
            <SupportTracker
              primary={$primary}
              danger={$danger}
              white={$white}
            />
          </Col>
        </Row> */}
        {/* <Row className="match-height">
          <Col lg="4">
            <ProductOrders
              primary={$primary}
              warning={$warning}
              danger={$danger}
              primaryLight={$primary_light}
              warningLight={$warning_light}
              dangerLight={$danger_light}
            />
          </Col>
          <Col lg="4">
            <SalesStat
              strokeColor={$stroke_color}
              infoLight={$info_light}
              primary={$primary}
              info={$info}
            />
          </Col>
          <Col lg="4">
            <ActivityTimeline />
          </Col>
        </Row> */}
        <Row>
          <Col sm="12">
            <DispatchedOrders />
          </Col>
          <Col sm="12">
            <Notification />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default AnalyticsDashboard
