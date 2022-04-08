import React, { Component } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Form,
  // Label,
  Input,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
import { history } from "../../../history";
// import swal from "sweetalert";
// import Select from "react-select";
const tankOptions = [];
export default class EditTankMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
        tank : "", 
        Product: "",
         capacity: "",
        // dealerId : '',
        // tank:[],
      //   Product : [
      //       { value: "ms", label: "MS" },
      //       { value: "hsd", label:"HSD" }],
      //    selectedTankOption:null,
      // selectedMapTankOption:null,
      // capacity : [
      //   { value: "10kl", label: "10kl" },
      //   { value: "15kl", label:"15kl" } ,
      //   { value: "20kl", label: "20kl" },
      //   { value: "40kl", label:"40kl" },
      //    { value: "45kl", label: "45kl" },
      //   { value: "80kl", label:"80kl" }],
      //   selectedMapTankOption1:null,

    };
    this.submitHandler = this.submitHandler.bind(this);
  }
  componentDidMount() {
    let { id } = this.props.match.params;
    // this.setState({ dealerId : id });
    axiosConfig 
    .get(`/dealer/getonetank/${id}`)
    .then(response => {
      console.log(response);
      this.setState({
          tank: response.data.data.tank,
          Product: response.data.data.Product,
          capacity: response.data.data.capacity,
         
      });
    })
    .catch((error) => {
        console.log(error.response);
      });
    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
      submitHandler = e => {
        e.preventDefault();
        let { id } = this.props.match.params;
        axiosConfig
      .post(`/dealer/updattankmap/${id}`,this.state)
      .then(response => {
        console.log(response);

        // swal("Success!", "Submitted SuccessFull!", "success");
       this.props.history.push("/#/app/ro-configuration/tankMapList");
    // }
    // else{
    //   alert('Something went wrong in Dealer Shipform Api');
    // }
    
    if(response.status === 200){
        let data = response.data.data;
         if(data.tank.length > 0){
         data.tank.map((tank) => {
          let tankObj = {
            // value: tank._id, 
            // label: tank.tank
          };
          tankOptions.push(tankObj);
         })
        }
      
    //   if(data.mpd_map.length > 0){
    //     let mpdObj = {}
    //      data.mpd_map.map((mpd) => {
    //      mpdObj = {
    //          value: mpd._id, 
    //          label: mpd.mpd_number
    //        };
    //        mpdOptions.push(mpdObj);
    //       })
    //      }

    //   if(data.bay_map.length > 0){
    //     data.bay_map.map((bay) => {
    //       let bayObj = {
    //          value: bay._id, 
    //          label: bay.bay_number
    //        };
    //        bayOptions.push(bayObj);
    //       })
    //      }

    //   if(data.nozzle_map.length > 0){
    //     data.nozzle_map.map((nozzle) => {
    //       let nozzleObj = {
    //          value: nozzle._id, 
    //          label: nozzle.nozzle_number
    //        };
    //        nozzleOptions.push(nozzleObj);
    //       })
    //      }
        
        this.setState({
        //   bay_map: data.bay_map,
        //   mpd_map: data.mpd_map,
        //   nozzle_map: data.nozzle_map,
          tank: data.tank,
          // product_map_tank: data.product_map_tank,
       });
      }
      else{
        alert('Something went wrong in Dealer Shipform Api');
      }
      // this.props.history.push("/#/app/ro-configuration/designYourOutletList");
    })
    .catch((error) => {
      console.log(error.response);
    });
    
}

handleChangeTank = (selectedTankOption) => {
    // let capacityArray = []
    // let productArray = []

    this.setState({ selectedTankOption }, () =>
      console.log(`Option selected:`, this.state.selectedTankOption)
    );
    var filteredProTank = this.state.tank.filter(function(event){
      if(event._id === selectedTankOption.value){
       return event
      } 
   });
   
   console.log('@@######filteredProTank',filteredProTank);
  //  let obj1 ={}
  //  if(filteredProTank.length > 0){
  //    this.setState({ selectedTankCapacity : filteredProTank[0].product})
  //     obj1 = {
  //      value : filteredProTank[0].product_map?.product,
  //      label : filteredProTank[0].product_map?.product
  //    }
  //    productArray.push(obj1)
  //    this.setState({ tankProductOptions : productArray})
  //  }


    //   var filteredCapTank = this.state.tank_map.filter(function(event){
    //      if(event._id === selectedTankOption.value){
    //       return event
    //      } 
    //   });
      // let obj ={}
      // if(filteredCapTank.length > 0){
      //   this.setState({ selectedTankCapacity : filteredCapTank[0].capacity_litre?.capacity})
      //    obj = {
      //     value : filteredCapTank[0].capacity_litre?.capacity,
      //     label : filteredCapTank[0].capacity_litre?.capacity
      //   }
      //   capacityArray.push(obj)
      //   this.setState({ tankCapacityOptions : capacityArray})
      // }
  };
  handleChangeMapTank = (selectedMapTankOption) => {
    this.setState({ selectedMapTankOption }, () =>
      console.log(`Option selected:`, this.state.selectedMapTankOption)
    );
  };
  handleChangeMapTank1 = (selectedMapTankOption1) => {
    this.setState({ selectedMapTankOption1 }, () =>
      console.log(`Option selected:`, this.state.selectedMapTankOption1)
    );
  };

  render() {
   
    // const {
    //     dealerId,
    //     // Product,
    //     // capacity,
    //     // // tank,
    //     // // selectedTankOption,
    //     // selectedMapTankOption,
    //     // selectedMapTankOption1,
    // } = this.state
    return (
      <div>
        <Row>
          <Col sm="12">
            <div>
              <Breadcrumb listTag="div">
                <BreadcrumbItem href="/analyticsDashboard" tag="a">
                  Home
                </BreadcrumbItem>
                <BreadcrumbItem href="/app/ro-configuration/tankmapList" tag="a">
                {/* Bank For Transaction List */}
                </BreadcrumbItem>
                <BreadcrumbItem active>Edit Tank
                Map
                </BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit Tank Map</h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() => history.push("/#/app/ro-configuration/tankMapList")}
              >
                Back
              </Button>
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
            <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                <h5 className="my-1 text-bold-600">Tank</h5>
                  <Input
                    type="text"
                    name="tank"
                    value={this.state.tank}
                    onChange={this.changeHandler}>
                        
                  </Input>
                </Col>
                {/* <Col md="6" sm="12">
                <h5 className="my-1 text-bold-600">Select Tank</h5>
                  <Select
                    className="React"
                    classNamePrefix="select"
                    name="tank" 
                    type ="text"
                    defaultValue={tankOptions[1]}
                    options={tank}
                    value={selectedTankOption}
                    onChange={this.handleChangeTank}
                    menuPlacement="auto"
                    maxMenuHeight={220}
                  />
              </Col> */}
            
                <Col lg="6" md="6" sm="6" className="mb-2">
                <h5 className="my-1 text-bold-600">Product</h5>
                  {/* <Label>Product</Label> */}
                  <Input
                    type="select"
                    name="Product"
                    value={this.state.Product}
                    onChange={this.changeHandler}>
                        <option value="MS">MS</option>
                        <option value= "HSD">Hsd</option>
                  </Input>
                     {/* <Select
                className="React"
                classNamePrefix="select"
                name="Product"            
                isClearable={true}
                //defaultValue=''
                options={Product}
                value={selectedMapTankOption}
                onChange={this.handleChangeMapTank}
              /> */}
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                <h5 className="my-1 text-bold-600">Capacity</h5>
                  {/* <Label>Capacity</Label>
                  
                  <Select
                className="React"
                classNamePrefix="select"
                name="capacity"            
                isClearable={true}
                //defaultValue=''
                options={capacity}
                value={selectedMapTankOption1}
                onChange={this.handleChangeMapTank1}
              /> */}
              <Input
                    type="select"
                    name="capacity"
                    value={this.state.capacity}
                    onChange={this.changeHandler}>
                         <option value="10kl">10kl</option>
                        <option value= "15kl">15kl</option> <option value="20kl">20kl</option>
                        <option value= "40kl">40kl</option> <option value="45kl">45kl</option>
                        <option value= "80kl">80kl</option>
                  </Input>
                </Col>
              
              </Row>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  {/* <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                    onClick={)} > 
                  
                    Update
                  </Button.Ripple> */}
                  <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Update
                  </Button.Ripple>
                </Col>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}