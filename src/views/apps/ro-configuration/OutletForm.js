// import React from "react";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardBody,
//   Row,
//   Col,
//   Button,
//   Form,
// } from "reactstrap";
// import axiosConfig from "../../../axiosConfig";
// // import { history } from "../../../history";
// import Select from "react-select";

// const tankOptions = [];
// const mpdOptions = [];
// const bayOptions = [];
// const nozzleOptions = [];
// class OutletForm extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       dealerId : '',
//       bay_map:[],
//       mpd_map:[],
//       nozzle_map:[],
//       tank_map:[],
//       product_map_tank : [],
//       tankProductOptions:[],
//       selectedTankOption:null,
//       selectedMapTankOption:null,
//       selectedTankCapacity:null,
//       tankCapacityOptions: [],
//       selectedMpdOption:null,
//       selectedBayOptions:null,
//       selectedBayToMpdOptions:null,
//       bayToMpdOptions:[],
//       nozzleToEachBayOptions:[],
//       selectedNozzleToEachBayOptions:null,
//       selectedNozzleOptions:null,
//       tankToNozzlesOptions:[],
//       selectedTankToNozzlesOptions:null,
//       tankProductOptionsNew:[],
//       tankCapacityOptionsNew:[],
//       tankProductOptionsValue:null,
//       tankCapacityOptionsValue:null
//       }; 
//   }
//  // submitHandler = (e) => {
//     //   e.preventDefault();

//   componentDidMount() { 
//     let { id } = this.props.match.params.id;
//     this.setState({ dealerId : id });
//     axiosConfig
//       .post(`/dealer/addeditadvancedealershipform/${this.props.match.params.id}`)
//       .then((response) => {
//         console.log(response);
//         console.log('datadatadata @@@@@@@@@@@@###',response)
       
//         if(response.status === 200){
//           let data = response.data.data;
//            if(data.tank_map.length > 0){
//            data.tank_map.map((tank) => {
//             let tankObj = {
//               value: tank._id, 
//               label: tank.tank_number
//             };
//             tankOptions.push(tankObj);
//            })
//           }
        
//         if(data.mpd_map.length > 0){
//           let mpdObj = {}
//            data.mpd_map.map((mpd) => {
//            mpdObj = {
//                value: mpd._id, 
//                label: mpd.mpd_number
//              };
//              mpdOptions.push(mpdObj);
//             })
//            }

//         if(data.bay_map.length > 0){
//           data.bay_map.map((bay) => {
//             let bayObj = {
//                value: bay._id, 
//                label: bay.bay_number
//              };
//              bayOptions.push(bayObj);
//             })
//            }

//         if(data.nozzle_map.length > 0){
//           data.nozzle_map.map((nozzle) => {
//             let nozzleObj = {
//                value: nozzle._id, 
//                label: nozzle.nozzle_number
//              };
//              nozzleOptions.push(nozzleObj);
//             })
//            }
          
//           this.setState({
//             bay_map: data.bay_map,
//             mpd_map: data.mpd_map,
//             nozzle_map: data.nozzle_map,
//             tank_map: data.tank_map,
//             // product_map_tank: data.product_map_tank,
//          });
//         }
//         else{
//           alert('Something went wrong in Dealer Shipform Api');
//         }
//         // this.props.history.push("/app/ro-configuration/designYourOutletList");
//       })
//       .catch((error) => {
//         console.log(error.response);
//       });

      
//   // product
//       let tankProductArray = []
//       axiosConfig
//       .get(`/dealer/allproduct`)
//       .then((response) => { 
//         if(response.status === 200){
//           let data = response.data.data;
//           console.log('datadatadata allproduct@@@@@@@@@@@@###',data.length)

//           let tankProductObj ={}
//           if(data.length > 0){
//             data.map((tank) => {
//             tankProductObj = {
//                  value: tank._id, 
//                  label: tank.product
//                };
//                tankProductArray.push(tankProductObj)
//              })
             
//             this.setState({ tankProductOptionsNew : tankProductArray})
//           }

//         }
//         else{
//           alert('Something went wrong in tank product Api');
//         }
//        }) 
//       .catch((error) => {
//         console.log(error.response);
//       });

     
// //capacity
//       let tankCapacityArray = []
//       axiosConfig
//       .get(`http://3.108.185.7/nodejs/api/dealer/allcapacity`)
//       .then((response) => { 
//         if(response.status === 200){
//           let data = response.data.data;
//           console.log('datadatadata allcapacity@@@@@@@@@@@@###',data)

//           let tankCapacityObj ={}
//           if(data.length > 0){
//             data.map((tank) => {
//             tankCapacityObj = {
//                  value: tank._id, 
//                  label: tank.capacity
//                };
//                tankCapacityArray.push(tankCapacityObj)
//              })
             
//             this.setState({ tankCapacityOptionsNew : tankCapacityArray})
//           }

//         }
//         else{
//           alert('Something went wrong in tank capacity Api');
//         }
//        }) 
//       .catch((error) => {
//         console.log(error.response);
//       });

//   }

//   handleChangeTank = (selectedTankOption) => {
//     // let capacityArray = []
//     // let productArray = []

//     this.setState({ selectedTankOption }, () =>
//       console.log(`Option selected:`, this.state.selectedTankOption)
//     );
//     var filteredProTank = this.state.tank_map.filter(function(event){
//       if(event._id === selectedTankOption.value){
//        return event
//       } 
//    });
//    console.log('@@######filteredProTank',filteredProTank);
//   //  let obj1 ={}
//   //  if(filteredProTank.length > 0){
//   //    this.setState({ selectedTankCapacity : filteredProTank[0].product})
//   //     obj1 = {
//   //      value : filteredProTank[0].product_map?.product,
//   //      label : filteredProTank[0].product_map?.product
//   //    }
//   //    productArray.push(obj1)
//   //    this.setState({ tankProductOptions : productArray})
//   //  }


//       var filteredCapTank = this.state.tank_map.filter(function(event){
//          if(event._id === selectedTankOption.value){
//           return event
//          } 
//       });
//       // let obj ={}
//       // if(filteredCapTank.length > 0){
//       //   this.setState({ selectedTankCapacity : filteredCapTank[0].capacity_litre?.capacity})
//       //    obj = {
//       //     value : filteredCapTank[0].capacity_litre?.capacity,
//       //     label : filteredCapTank[0].capacity_litre?.capacity
//       //   }
//       //   capacityArray.push(obj)
//       //   this.setState({ tankCapacityOptions : capacityArray})
//       // }
//   };

//   // handleChangeMapTank = (selectedMapTankOption) => {
//   //   this.setState({ selectedMapTankOption }, () =>
//   //     console.log(`Option selected:`, this.state.selectedMapTankOption)
//   //   );
//   // };

//   // handleChangeMPD = (selectedMpdOption) => {
//   //   let bayArray = []
//   //   this.setState({ selectedMpdOption }, () =>
//   //     console.log(`Option selected:`, this.state.selectedMpdOption)
//   //   );
//   //   var filteredBay = this.state.mpd_map.filter(function(event){
//   //     if(event._id === selectedMpdOption.value){
//   //      return event
//   //     } 
//   //  });
//   //  let bayObj ={}
//   //    if(filteredBay.length > 0){
//   //     filteredBay[0].bay_map.map((bay) => {
//   //          bayObj = {
//   //           value: bay._id, 
//   //           label: bay
//   //         };
//   //         //bayOptions.push(bayObj);
//   //         bayArray.push(bayObj)
//   //       })
       
//   //      this.setState({ bayToMpdOptions : bayArray})
//   //    }
//   // };
  
//   handleChangeMPD = (selectedMpdOption) => {
//     let bayArray = []
//     this.setState({ selectedMpdOption }, () =>
//       console.log(`Option selected:`, this.state.selectedMpdOption)
//     );
//     var filteredBay = this.state.mpd_map.filter(function(event){
//       if(event._id === selectedMpdOption.value){
//        return event
//       } 
//    });
//    let bayObj ={}
//    console.log('filteredBay',filteredBay)
//      if(filteredBay.length > 0){
//       filteredBay[0].bay_map.map((bay) => {
//            bayObj = {
//             value: bay, 
//             label: bay
//           };
//           //bayOptions.push(bayObj);
//           bayArray.push(bayObj)
//         })
       
//        this.setState({ bayOptions : bayArray})
//      }
//   };
//   handleChangeBay = (selectedBayOptions) => {
//     this.setState({ selectedBayOptions }, () =>
//       console.log(`Option selected:`, this.state.selectedBayOptions)
//     );
//   };

//   handleChangeCap = (tankCapacityOptionsValue) => {
//     this.setState({ tankCapacityOptionsValue }, () =>
//       console.log(`handleChangeCap`, this.state.tankCapacityOptionsValue)
//     );
//   };
  
//   handleChangeProd = (tankProductOptionsValue) => {
//     this.setState({ tankProductOptionsValue }, () =>
//       console.log(`handleChangeProd:`, this.state.tankProductOptionsValue)
//     );
//   };


// // BAY //

//   handleChangeBay = (selectedBayOptions) => {
//     let nozzleArray = []
//     this.setState({ selectedBayOptions }, () =>
//       console.log(`Option selected:`, this.state.selectedBayOptions)
//     );
//     var filteredNozzle = this.state.bay_map.filter(function(event){
//       if(event._id === selectedBayOptions.value){
//        return event
//       } 
//    });
//    let nozzleObj ={}
//      if(filteredNozzle.length > 0){
//       filteredNozzle[0].nozzle_map.map((nozzle) => {
//         nozzleObj = {
//             value: nozzle._id, 
//             label: nozzle
//           };
//           nozzleArray.push(nozzleObj)
//         })
        
//        this.setState({ nozzleToEachBayOptions : nozzleArray})
//      }
//   };

//   handleChangeNozzleToEachBay = (selectedNozzleToEachBayOptions) => {
//     this.setState({ selectedNozzleToEachBayOptions }, () =>
//       console.log(`Option selected:`, this.state.selectedNozzleToEachBayOptions)
//     );
//   };


// // Nozzel
//   handleChangeNozzle = (selectedNozzleOptions) => {
//     let tankArray = []
//     this.setState({ selectedNozzleOptions }, () =>
//       console.log(`Option selected:`, this.state.selectedNozzleOptions)
//     );
//     var filteredTank = this.state.nozzle_map.filter(function(event){
//       if(event._id === selectedNozzleOptions.value){
//        return event
//       } 
//    });
//    let tankObj ={}
//      if(filteredTank.length > 0){
//       filteredTank[0].tank_map.map((tank) => {
//         tankObj = {
//             value: tank._id, 
//             label: tank
//           };
//           tankArray.push(tankObj)
//         })
        
//        this.setState({ tankToNozzlesOptions : tankArray})
//      }
//   };

//   handleChangeTankToNozzle = (selectedTankToNozzlesOptions) => {
//     this.setState({ selectedTankToNozzlesOptions }, () =>
//       console.log(`Option selected:`, this.state.selectedTankToNozzlesOptions)
//     );
//   };

//   render() {
//     const {
//       selectedTankOption,
//     //   product_map_tank,
//     //   selectedMapTankOption,
//     //   selectedMapProductOption,
//     //  selectedTankCapacity,
//       tankProductOptions,
//       tankCapacityOptions,
//       selectedMpdOption,
//       //bayOptions,
//       selectedBayOptions,
//       // bayToMpdOptions,
//       // selectedBayToMpdOptions,
//       // nozzleToEachBayOptions,
//       // selectedNozzleToEachBayOptions,
//       selectedNozzleOptions,
//       tankProductOptionsNew,
//       tankCapacityOptionsNew,
//       tankProductOptionsValue,
//       tankCapacityOptionsValue
//       // tankToNozzlesOptions,
//       // selectedTankToNozzlesOptions
//     } = this.state
//     return (
//       <Card>
//         <CardHeader>
//           <CardTitle>Outlet</CardTitle>
//         </CardHeader>
//         <CardBody>
//           <Form className="m-1" onSubmit={this.submitHandler}>
//             <Row>
//               <Col md="6" sm="12">
//                 <h5 className="my-1 text-bold-600">Select Tank</h5>
//                   <Select
//                     className="React"
//                     classNamePrefix="select"
//                     name="tank_number" 
//                     type ="text"
//                     defaultValue={tankOptions[1]}
//                     options={tankOptions}
//                     value={selectedTankOption}
//                     onChange={this.handleChangeTank}
//                     menuPlacement="auto"
//                     maxMenuHeight={220}
//                   />
//               </Col>
//               <Col md="6" sm="12">
//                 <h5 className="my-1 text-bold-600">Product Mapped to Tank</h5>
//                   <Select
//                     className="React"
//                     classNamePrefix="select"
//                     name="product_map_tank"            
//                     isClearable={true}
//                     // defaultValue={tankProductOptions[1]}
//                     // options={tankProductOptions}
//                     // value={tankProductOptions[1]}
//                     onChange={this.handleChangeProd} 
//                     defaultValue={tankProductOptionsNew[1]}
//                     options={tankProductOptionsNew}
//                     value={tankProductOptionsValue}
//                     menuPlacement="auto"
//                     maxMenuHeight={220}  
//                   />
//               </Col>
//               <Col md="6" sm="12">
//                 <h5 className="my-1 text-bold-600">Capacity</h5>
//               <Select
//                 className="React"
//                 classNamePrefix="select"         
//                 onChange={this.handleChangeCap} 
//                 name="capacity_litre"         
//                 isClearable={true}
//                 // value={tankCapacityOptions[1]}
//                 // defaultValue={tankCapacityOptions[1]}
//                 // options={tankCapacityOptions}
//                 defaultValue={tankCapacityOptionsValue}
//                 options={tankCapacityOptionsNew}
//                 value={tankCapacityOptionsValue}
//                 menuPlacement="auto"
//                 maxMenuHeight={220}
//               />
//             </Col>
//             {/* <Col md="6" sm="12">
//               <h5 className="my-1 text-bold-600">Select Mpd</h5>
//               <Select
//                 className="React"
//                 classNamePrefix="select"
//                 name="mpd"
//                 defaultValue={mpdOptions[1]}
//                 options={mpdOptions}
//                 value={selectedMpdOption}
//                 onChange={this.handleChangeMPD}
//                 isClearable={true}
//                 menuPlacement="auto"
//                 maxMenuHeight={220}
//               />
//             </Col> */}
//             <Col md="6" sm="12">
//               <h5 className="my-1 text-bold-600">Select Mpd</h5>
//               <Select
//                 className="React"
//                 classNamePrefix="select"
//                 name="mpd"
//                 defaultValue={mpdOptions[1]}
//                 options={mpdOptions}
//                 value={selectedMpdOption}
//                 onChange={this.handleChangeMPD}
//                 isClearable={true}
//               />
//             </Col>
//             {/* <Col md="6" sm="12">
//               <h5 className="my-1 text-bold-600">Map Correct Bay to Mpd</h5>
//               <Select
//                 className="React"
//                 classNamePrefix="select"            
//                 name="bay_to_mpd"          
//                 isClearable={true}
//                 defaultValue={selectedBayToMpdOptions}
//                 options={bayToMpdOptions}
//                 onChange={this.handleChangeBayToMpd}
//               />
//             </Col> */}
//             <Col md="6" sm="12">
//               <h5 className="my-1 text-bold-600">Select Bay</h5>
//               <Select
//                 className="React"
//                 classNamePrefix="select"           
//                 name="bay"              
//                 isClearable={true}
//                 defaultValue={selectedBayOptions}
//                 options={bayOptions}
//                 onChange={this.handleChangeBay}
//                 menuPlacement="auto"
//                 maxMenuHeight={220}
//               />
//             </Col>
//             {/* <Col md="6" sm="12">
//               <h5 className="my-1 text-bold-600">
//                 Map Correct Nozzle to Each Bay
//               </h5>
//               <Select
//                 className="React"
//                 classNamePrefix="select"              
//                 name="nozzleToEachBay"             
//                 isClearable={true}
//                 defaultValue={selectedNozzleToEachBayOptions}
//                 options={nozzleToEachBayOptions}
//                 onChange={this.handleChangeNozzleToEachBay}
//               />
//             </Col> */}
//             <Col md="6" sm="12">
//               <h5 className="my-1 text-bold-600">Select Nozzle</h5>
//               <Select
//                 className="React"
//                 classNamePrefix="select"           
//                 name="clear"            
//                 isClearable={true}
//                 defaultValue={selectedNozzleOptions}
//                 options={nozzleOptions}
//                 onChange={this.handleChangeNozzle}
//                 menuPlacement="auto"
//                 maxMenuHeight={220}
//               />
//             </Col>
//             {/* <Col md="6" sm="12" style={{ marginBottom: 15 }}>
//               <h5 className="my-1 text-bold-600">Map Tank to Nozzles</h5>
//               <Select
//                 className="React"
//                 classNamePrefix="select"  
//                 name="clear"    
//                 isClearable={true}
//                 defaultValue={selectedTankToNozzlesOptions}
//                 options={tankToNozzlesOptions}
//                 onChange={this.handleChangeTankToNozzle}
//               />
//             </Col> */}
//             </Row>
//              <Row>
//                 <Col
//                   lg="6"
//                   md="6"
//                   sm="6"
//                   className="mb-2"
//                   style={{  marginTop:"10px" }}
//                 >
           
//               <Button.Ripple
//                 color="primary"
//                 type="submit"
//                 className="mr-1 mb-1"
//               >
//                 Submit
//               </Button.Ripple>
//             </Col>
//           </Row>
//         </Form>
//         </CardBody>
//       </Card>
      
//     );
//   }
// }
// export default OutletForm;
