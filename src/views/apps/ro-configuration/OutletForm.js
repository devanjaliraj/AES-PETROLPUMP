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
import axios from "axios";
import { history } from "../../../history";
import Select from "react-select";

const tankOptions = [];

const mpdOptions = [];

const bayOptions = [];

const nozzleOptions = [];

class OutletForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dealerId : '',
      bay_map:[],
      mpd_map:[],
      nozzle_map:[],
      tank_map:[],
      product_map_tank : [
      { value: "ms", label: "MS" },
      { value: "hsd", label:"HSD" }],
      selectedTankOption:null,
      selectedMapTankOption:null,
      selectedTankCapacity:null,
      tankCapacityOptions: [],
      selectedMpdOption:null,
      selectedBayOptions:null,
      selectedBayToMpdOptions:null,
      bayToMpdOptions:[],
      nozzleToEachBayOptions:[],
      selectedNozzleToEachBayOptions:null,
      selectedNozzleOptions:null,
      tankToNozzlesOptions:[],
      selectedTankToNozzlesOptions:null
      };
     
  }

  componentDidMount() {
    let { id } = this.props.match.params.id;
    this.setState({ dealerId : id });
    axios
      .post(`http://3.108.185.7/nodejs/api/dealer/addeditadvancedealershipform/${this.props.match.params.id}`)
      .then((response) => {
        if(response.status === 200){
          let data = response.data.data;
          
          // eslint-disable-next-line no-lone-blocks
          // eslint-disable-next-line no-unused-expressions
          if(data.tank_map.length > 0){
           data.tank_map.map((tank) => {
            let tankObj = {
              value: tank._id, 
              label: tank.tank_number
            };
            tankOptions.push(tankObj);
           })
          }
   
          if(data.mpd_map.length > 0){
            let mpdObj = {}
            let mpdObjNew = {}
            data.mpd_map.map((mpd) => {
              mpdObj = {
               value: mpd._id, 
               label: mpd.mpd_number
             };
             mpdOptions.push(mpdObj);
            })
           }

           if(data.bay_map.length > 0){
            data.bay_map.map((bay) => {
             let bayObj = {
               value: bay._id, 
               label: bay.bay_number
             };
             bayOptions.push(bayObj);
            })
           }

           if(data.nozzle_map.length > 0){
            data.nozzle_map.map((nozzle) => {
             let nozzleObj = {
               value: nozzle._id, 
               label: nozzle.nozzle_number
             };
             nozzleOptions.push(nozzleObj);
            })
           }
          
          this.setState({
            bay_map: data.bay_map,
            mpd_map: data.mpd_map,
            nozzle_map: data.nozzle_map,
            tank_map: data.tank_map,
         });
        }
        else{
          alert('Something went wrong in Dealer Shipform Api');
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  handleChangeTank = (selectedTankOption) => {
    let capacityArray = []
    this.setState({ selectedTankOption }, () =>
      console.log(`Option selected:`, this.state.selectedTankOption)
    );
      var filteredCapTank = this.state.tank_map.filter(function(event){
         if(event._id === selectedTankOption.value){
          return event
         } 
      });
      let obj ={}
      if(filteredCapTank.length > 0){
        this.setState({ selectedTankCapacity : filteredCapTank[0].capacity_litre})
         obj = {
          value : filteredCapTank[0].capacity_litre,
          label : filteredCapTank[0].capacity_litre
        }
        capacityArray.push(obj)
        this.setState({ tankCapacityOptions : capacityArray})
      }
  };

  handleChangeMapTank = (selectedMapTankOption) => {
    this.setState({ selectedMapTankOption }, () =>
      console.log(`Option selected:`, this.state.selectedMapTankOption)
    );
  };

  handleChangeMPD = (selectedMpdOption) => {
    let bayArray = []
    this.setState({ selectedMpdOption }, () =>
      console.log(`Option selected:`, this.state.selectedMpdOption)
    );
    var filteredBay = this.state.mpd_map.filter(function(event){
      if(event._id === selectedMpdOption.value){
       return event
      } 
   });
   let bayObj ={}
     if(filteredBay.length > 0){
      filteredBay[0].bay_map.map((bay) => {
           bayObj = {
            value: bay._id, 
            label: bay
          };
          //bayOptions.push(bayObj);
          bayArray.push(bayObj)
        })
       
       this.setState({ bayToMpdOptions : bayArray})
     }
  };

  handleChangeBayToMpd = (selectedBayToMpdOptions) => {
    this.setState({ selectedBayToMpdOptions }, () =>
      console.log(`Option selected:`, this.state.selectedBayToMpdOptions)
    );
  };

  handleChangeBay = (selectedBayOptions) => {
    let nozzleArray = []
    this.setState({ selectedBayOptions }, () =>
      console.log(`Option selected:`, this.state.selectedBayOptions)
    );
    var filteredNozzle = this.state.bay_map.filter(function(event){
      if(event._id === selectedBayOptions.value){
       return event
      } 
   });
   let nozzleObj ={}
     if(filteredNozzle.length > 0){
      filteredNozzle[0].nozzle_map.map((nozzle) => {
        nozzleObj = {
            value: nozzle._id, 
            label: nozzle
          };
          nozzleArray.push(nozzleObj)
        })
        
       this.setState({ nozzleToEachBayOptions : nozzleArray})
     }
  };

  handleChangeNozzleToEachBay = (selectedNozzleToEachBayOptions) => {
    this.setState({ selectedNozzleToEachBayOptions }, () =>
      console.log(`Option selected:`, this.state.selectedNozzleToEachBayOptions)
    );
  };

  handleChangeNozzle = (selectedNozzleOptions) => {
    let tankArray = []
    this.setState({ selectedNozzleOptions }, () =>
      console.log(`Option selected:`, this.state.selectedNozzleOptions)
    );
    var filteredTank = this.state.nozzle_map.filter(function(event){
      if(event._id === selectedNozzleOptions.value){
       return event
      } 
   });
   let tankObj ={}
     if(filteredTank.length > 0){
      filteredTank[0].tank_map.map((tank) => {
        tankObj = {
            value: tank._id, 
            label: tank
          };
          tankArray.push(tankObj)
        })
        
       this.setState({ tankToNozzlesOptions : tankArray})
     }
  };

  handleChangeTankToNozzle = (selectedTankToNozzlesOptions) => {
    this.setState({ selectedTankToNozzlesOptions }, () =>
      console.log(`Option selected:`, this.state.selectedTankToNozzlesOptions)
    );
  };

  render() {
    const {
      selectedTankOption,
      product_map_tank,
      selectedMapTankOption,
      selectedTankCapacity,
      tankCapacityOptions,
      selectedMpdOption,
      //bayOptions,
      selectedBayOptions,
      bayToMpdOptions,
      selectedBayToMpdOptions,
      nozzleToEachBayOptions,
      selectedNozzleToEachBayOptions,
      selectedNozzleOptions,
      tankToNozzlesOptions,
      selectedTankToNozzlesOptions
    } = this.state
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
                name="tank" 
                defaultValue={tankOptions[1]}
                options={tankOptions}
                value={selectedTankOption}
                onChange={this.handleChangeTank}
              />
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Product Mapped to Tank</h5>
              <Select
                className="React"
                classNamePrefix="select"
                name="product_map_tank"            
                isClearable={true}
                //defaultValue=''
                options={product_map_tank}
                value={selectedMapTankOption}
                onChange={this.handleChangeMapTank}
              />
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Capacity</h5>
              <Select
                className="React"
                classNamePrefix="select"          
                name="tank_capacity"         
                isClearable={true}
                value={tankCapacityOptions[1]}
                defaultValue={tankCapacityOptions[1]}
                options={tankCapacityOptions}
              />
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Select Mpd</h5>
              <Select
                className="React"
                classNamePrefix="select"
                name="mpd"
                defaultValue={mpdOptions[1]}
                options={mpdOptions}
                value={selectedMpdOption}
                onChange={this.handleChangeMPD}
                isClearable={true}
              />
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Map Correct Bay to Mpd</h5>
              <Select
                className="React"
                classNamePrefix="select"            
                name="bay_to_mpd"          
                isClearable={true}
                defaultValue={selectedBayToMpdOptions}
                options={bayToMpdOptions}
                onChange={this.handleChangeBayToMpd}
              />
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Select Bay</h5>
              <Select
                className="React"
                classNamePrefix="select"           
                name="bay"              
                isClearable={true}
                defaultValue={selectedBayOptions}
                options={bayOptions}
                onChange={this.handleChangeBay}
              />
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">
                Map Correct Nozzle to Each Bay
              </h5>
              <Select
                className="React"
                classNamePrefix="select"              
                name="nozzleToEachBay"             
                isClearable={true}
                defaultValue={selectedNozzleToEachBayOptions}
                options={nozzleToEachBayOptions}
                onChange={this.handleChangeNozzleToEachBay}
              />
            </Col>
            <Col md="6" sm="12">
              <h5 className="my-1 text-bold-600">Select Nozzle</h5>
              <Select
                className="React"
                classNamePrefix="select"           
                name="clear"            
                isClearable={true}
                defaultValue={selectedNozzleOptions}
                options={nozzleOptions}
                onChange={this.handleChangeNozzle}
              />
            </Col>
            <Col md="6" sm="12" style={{ marginBottom: 15 }}>
              <h5 className="my-1 text-bold-600">Map Tank to Nozzles</h5>
              <Select
                className="React"
                classNamePrefix="select"  
                name="clear"    
                isClearable={true}
                defaultValue={selectedTankToNozzlesOptions}
                options={tankToNozzlesOptions}
                onChange={this.handleChangeTankToNozzle}
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
