
import React, { Component } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Form,
  CustomInput,
  Input,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
// import { history } from "../../../history";
// import { data } from "jquery";
// import swal from "sweetalert";
import { Route } from "react-router-dom";

export default class OtherEquipment extends Component {
  constructor(props) {
        super(props);
        this.state = {
         tank:"",
          dealer_id: '',
          Product: "",
          capacity: "",
        };
        this.state = {
          tankN: []
      };
    }
  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
    .get(`/dealer/alltankmap/`)
    .then((response) => {
      console.log(response.data.data);
      this.setState({ tankN: response.data.data });
    })
    .catch((error) => {
      console.log(error.response);
    });
    
    axiosConfig
      .get(`/dealer/getonetank/${id}`)
      .then((response) => {
        console.log('urgent check',response.data.data?.dealer_id?._id);
        this.setState({dealer_id: response.data.data?.dealer_id?._id})
        this.setState({
          tank: response.data.data.tank,
          Product: response.data.Product.manufacturer,
          capacity: response.data.data.capacity,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    let { id } = this.props.match.params;
    const {dealer_id,Product,capacity} = this.state;
    let payload = {
      dealer_id : dealer_id,
      Product:Product,
      capacity:capacity
    }
    axiosConfig
      .post(`/dealer/updattankmap/${id}`, payload)
      .then((response) => {
        console.log(response);
        // swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push('/app/ro-configuration/tankList/'+dealer_id)
        
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  render() {
    const {dealer_id} = this.state;
    return (
      <div>
        <Row>
          <Col sm="12">
            <div>
              <Breadcrumb listTag="div">
                <BreadcrumbItem href="/" tag="a">
                  Home
                </BreadcrumbItem>
                {/* <BreadcrumbItem href="/app/material/materialList" tag="a">
                    Material List
                </BreadcrumbItem> */}
                <BreadcrumbItem active>Edit Tank</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit Tank
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() =>
                      history.push("/app/ro-configuration/tankList/"+dealer_id)
                    }
                  >
                    Back
                  </Button>
                )}
              />
            </Col>
          </Row>
          <CardBody>
          <Form className="m-1" onSubmit={this.submitHandler}>
            <Row>
              <Col lg="6" md="6" sm="6" className="mb-2">
                 <h5 className="my-1 text-bold-600">Tank</h5>
                  <CustomInput
                  readOnly
                    type="select"
                    name="tank"
                    value={this.state.tank}
                    onChange={this.changeHandler}
                  >
                    {this.state.tankN?.map((tankp) => (
                      <option value={tankp._id} key={tankp._id}>
                        {tankp.tank}
                      </option>
                    ))}
                  </CustomInput>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <h5 className="my-1 text-bold-600">Product</h5>

                  <Input
                    type="select"
                    name="Product"
                    value={this.state.Product}
                    onChange={this.changeHandler}
                  >
                    <option value="choose">Choose Product</option>
                    <option value="MS">MS</option>
                    <option value="HSD">Hsd</option>
                  </Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <h5 className="my-1 text-bold-600">Capacity</h5>
                  <Input
                    type="select"
                    name="capacity"
                    value={this.state.capacity}
                    onChange={this.changeHandler}
                  >
 <option value="choose option">Choose Capacity</option> 
                    <option value="10kl">10kl</option>
                    <option value="15kl">15kl</option>
                    <option value="20kl">20kl</option>
                    <option value="40kl">40kl</option>
                    <option value="45kl">45kl</option>
                    <option value="80kl">80kl</option>
                  </Input>
                </Col>
              </Row>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Update
                  </Button.Ripple>
                </Col>
              </Row>
            </Form> 
          </CardBody>
        </Card>
      </div>
    );
  }
}


















// import React, { Component } from "react";
// import {
//   Card,
//   CardBody,
//   Row,
//   Col,
//   Form,
//   // Label,
//   Input,
//   Button,
//   Breadcrumb,
//   CustomInput,
//   BreadcrumbItem,
// } from "reactstrap";
// import axiosConfig from "../../../axiosConfig";

// // import swal from "sweetalert";
// import { Route } from "react-router-dom";

// // const tankOptions = [];
// export default class EditTankMap extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       tank: "",
//       Product: "",
//       capacity: "",
//     };
//     this.state = {
//       tankN: [],
//       // nozzleN:[]
//     };

//     this.submitHandler = this.submitHandler.bind(this);
//   }
//   componentDidMount() {
//     let { id } = this.props.match.params;

//     axiosConfig
//       .get(`/dealer/alltankmapApp/${id}`)
//       .then((response) => {
//         console.log(response.data.data);
//         this.setState({ tankN: response.data.data });
//       })
//       .catch((error) => {
//         console.log(error.response);
//       });

//     axiosConfig

//       .get(`/dealer/getonetank/${id}`)

//       .then((response) => {
//         console.log(response);
//         this.setState({
//           tank: response.data.data.tank,
//           Product: response.data.data.Product,
//           capacity: response.data.data.capacity,
//         });
//       })
//       .catch((error) => {
//         console.log(error.response);
//       });
//   }
//   changeHandler = (e) => {
//     console.log('@@@@@@',e.target.value)
//     this.setState({ [e.target.name]: e.target.value });
//   };
//   submitHandler = (e) => {
//     e.preventDefault();
//     const {tank,Product,capacity} = this.state;
//     let { id } = this.props.match.params;
    
//     let payload = {
//       dealer_id : id,
//       Product:Product,
//       capacity:capacity
//     }
//     axiosConfig
//     // http://3.108.185.7/nodejs/api/dealer/updattankmap/6245490c0a53f3eb3a28fb70
//       .post(`/dealer/updattankmap/${tank}`, payload)
//       .then((response) => {
//         console.log(response);
//         if (response.status === 200) {
//           this.props.history.push(`/app/ro-configuration/tankList/`+id);
//         }
//       })
//       .catch((error) => {
//         console.log(error.response);
//       });
//   };

//   handleChangeTank = (selectedTankOption) => {
//     this.setState({ selectedTankOption }, () =>
//       console.log(`Option selected:`, this.state.selectedTankOption)
//     );
//     var filteredProTank = this.state.tank.filter(function (event) {
//       if (event._id === selectedTankOption.value) {
//         return event;
//       }
//     });

//     console.log("@@######filteredProTank", filteredProTank);
//   };
//   handleChangeMapTank = (selectedMapTankOption) => {
//     this.setState({ selectedMapTankOption }, () =>
//       console.log(`Option selected:`, this.state.selectedMapTankOption)
//     );
//   };
//   handleChangeMapTank1 = (selectedMapTankOption1) => {
//     this.setState({ selectedMapTankOption1 }, () =>
//       console.log(`Option selected:`, this.state.selectedMapTankOption1)
//     );
//   };

//   render() {
//     return (
//       <div>
//         <Row>
//           <Col sm="12">
//             <div>
//               <Breadcrumb listTag="div">
//                 <BreadcrumbItem href="/analyticsDashboard" tag="a">
//                   Home
//                 </BreadcrumbItem>
//                 <BreadcrumbItem
//                   href="/app/ro-configuration/tankmapList"
//                   tag="a"
//                 >
//                   {/* Bank For Transaction List */}
//                 </BreadcrumbItem>
//                 <BreadcrumbItem active>Edit Tank Map</BreadcrumbItem>
//               </Breadcrumb>
//             </div>
//           </Col>
//         </Row>
//         <Card>
//           <Row className="m-2">
//             <Col>
//               <h1 col-sm-6 className="float-left">
//                 Edit Tank Map
//               </h1>
//             </Col>
//             <Col>
//               <Route
//                 render={({ history }) => (
//                   <Button
//                     className=" btn btn-danger float-right"
//                     onClick={() =>
//                       history.push(`/app/ro-configuration/tankList/${this.state.data._id}`)
//                     }
//                   >
//                     Back
//                   </Button>
//                 )}
//               />
//             </Col>
//           </Row>
//           <CardBody>
//             <Form className="m-1" onSubmit={this.submitHandler}>
//               <Row>
//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <h5 className="my-1 text-bold-600">Tank</h5>
//                   <CustomInput
//                     type="select"
//                     name="tank"
//                     value={this.state.tank}
//                     onChange={this.changeHandler}
//                   >
//                     {this.state.tankN?.map((tankp) => (
//                       <option value={tankp._id} key={tankp._id}>
//                         {tankp.tank}
//                       </option>
//                     ))}
//                   </CustomInput>
//                 </Col>
//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <h5 className="my-1 text-bold-600">Product</h5>

//                   <Input
//                     type="select"
//                     name="Product"
//                     value={this.state.Product}
//                     onChange={this.changeHandler}
//                   >
//                     <option value="choose">Choose Product</option>
//                     <option value="MS">MS</option>
//                     <option value="HSD">Hsd</option>
//                   </Input>
//                 </Col>
//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <h5 className="my-1 text-bold-600">Capacity</h5>
//                   <Input
//                     type="select"
//                     name="capacity"
//                     value={this.state.capacity}
//                     onChange={this.changeHandler}
//                   >
//  <option value="choose option">Choose Capacity</option> 
//                     <option value="10kl">10kl</option>
//                     <option value="15kl">15kl</option>
//                     <option value="20kl">20kl</option>
//                     <option value="40kl">40kl</option>
//                     <option value="45kl">45kl</option>
//                     <option value="80kl">80kl</option>
//                   </Input>
//                 </Col>
//               </Row>
//               <Row>
//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <Button.Ripple
//                     color="primary"
//                     type="submit"
//                     className="mr-1 mb-1"
//                   >
//                     Update
//                   </Button.Ripple>
//                 </Col>
//               </Row>
//             </Form>
//           </CardBody>
//         </Card>
//       </div>
//     );
//   }
// }
