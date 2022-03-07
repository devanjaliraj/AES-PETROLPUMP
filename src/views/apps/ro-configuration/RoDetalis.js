// import React, { Component } from "react";
// import {
//     // Form,
//     FormGroup,
//     Input,
//     Label,
//     CustomInput,
//     Row,
//     Col,
//     Card,
//     CardBody,
//     CardTitle,
//     CardHeader,
//     InputGroup,
//     InputGroupAddon,
//     Button,
//   } from "reactstrap";
// export class RoDetails extends Component {
//   render() {
   
//         steps: [
//           {
//             title: 1,
//             content: (
//               <Row>
//                 <Col md="6" sm="12">
//                   <FormGroup>
//                     <Label> Name of Dealership </Label>
//                     <Input type="text" />
//                   </FormGroup>
//                 </Col>
//                 <Col md="6" sm="12">
//                   <FormGroup>
//                     <Label> Mobile No </Label>
//                     <Input type="text" />
//                   </FormGroup>
//                 </Col>
//                 <Col md="6" sm="12">
//                   <FormGroup>
//                     <Label> Email Id </Label>
//                     <Input type="email" />
//                   </FormGroup>
//                 </Col>
    
//                 <Col md="6" sm="12">
//                   <FormGroup>
//                     <Label> City Name </Label>
//                     <CustomInput type="select" name="select" id="city">
//                       <option>New York</option>
//                       <option>Chicago</option>
//                       <option>San Francisco</option>
//                       <option>Boston</option>
//                     </CustomInput>
//                   </FormGroup>
//                 </Col>
//                 <Col md="6" sm="12">
//                   <FormGroup>
//                     <Label> OMC Customer Code </Label>
//                     <Input type="text" />
//                   </FormGroup>
//                   {/* <FormGroup>
//                     <Label> Job Title </Label>
//                     <Input type="text" />
//                   </FormGroup> */}
//                 </Col>
//                 <Col md="6" sm="12">
//                   <FormGroup>
//                     <Label> Master Oil Company </Label>
//                     <CustomInput type="select" name="select" id="location">
//                       <option>New York</option>
//                       <option>Chicago</option>
//                       <option>San Francisco</option>
//                       <option>Boston</option>
//                     </CustomInput>
//                   </FormGroup>
//                 </Col>
//                 <Col md="6" sm="12">
//                   <FormGroup>
//                     <Label> District </Label>
//                     <CustomInput type="select" name="select" id="location">
//                       <option>New York</option>
//                       <option>Chicago</option>
//                       <option>San Francisco</option>
//                       <option>Boston</option>
//                     </CustomInput>
//                   </FormGroup>
//                 </Col>
//                 <Col md="6" sm="12">
//                   <FormGroup>
//                     <Label> Location </Label>
//                     <CustomInput type="select" name="select" id="location">
//                       <option>New York</option>
//                       <option>Chicago</option>
//                       <option>San Francisco</option>
//                       <option>Boston</option>
//                     </CustomInput>
//                   </FormGroup>
//                 </Col>
              
//               </Row>
//             ),
//           },
//           {
//             title: 2,
//             content: (
//               <Row>
//                 <Col md="6" sm="12">
//                   <FormGroup>
//                     <Label>Total No. of MPD</Label>
//                     <Input type="text" />
//                   </FormGroup>
//                   <FormGroup>
//                     <Label> Total No. of Bay </Label>
//                     <Input type="text" />
//                   </FormGroup>
//                 </Col>
//                 <Col md="6" sm="12">
//                   <FormGroup>
//                     <Label>Total No. of Nozzles</Label>
//                     <Input type="text" />
//                   </FormGroup>
//                   <FormGroup>
//                     <Label>Total No. of Tanks</Label>
//                     <Input type="text" />
//                   </FormGroup>
//                 </Col>
//                 <Col md="6" sm="12">
//                   <FormGroup>
//                     <Label>Total No. of Air Machines</Label>
//                     <Input type="text" />
//                   </FormGroup>
//                 </Col>
//                 <Col md="6" sm="12">
//                   <FormGroup>
//                     <Label>PUC Machine</Label>
//                     <Input type="text" />
//                   </FormGroup>
//                 </Col>
//                 <Col md="6" sm="12">
//                   <FormGroup>
//                     <Label>Any other facilities</Label>
//                     <Input type="text" />
//                   </FormGroup>
//                 </Col>
//                 <Col md="6" sm="12">
//                   <FormGroup>
//                     <Label> Select Tank </Label>
//                     <CustomInput type="select" name="select" id="location">
//                       <option>Tank 1</option>
//                       <option>Tank 2</option>
//                       <option>Tank 3</option>
//                       <option>Tank 4</option>
//                     </CustomInput>
//                   </FormGroup>
//                 </Col>
//                 <Col md="6" sm="12">
//                   <FormGroup>
//                     <Label> Product Mapped to Tank </Label>
//                     <CustomInput type="select" name="select" id="location">
//                       <option>Tank 1</option>
//                       <option>Tank 2</option>
//                       <option>Tank 3</option>
//                       <option>Tank 4</option>
//                     </CustomInput>
//                   </FormGroup>
//                 </Col>
//                 <Col md="6" sm="12">
//                   <FormGroup>
//                     <Label>Capacity</Label>
//                     <CustomInput type="select" name="select" id="location">
//                       <option>Tank 1</option>
//                       <option>Tank 2</option>
//                       <option>Tank 3</option>
//                       <option>Tank 4</option>
//                     </CustomInput>
//                   </FormGroup>
//                 </Col>
//                 <Col md="6" sm="12">
//                   <FormGroup>
//                     <Label>Select MPD</Label>
//                     <CustomInput type="select" name="select" id="location">
//                       <option>MPD 1</option>
//                       <option>MPD 2</option>
//                       <option>MPD 3</option>
//                       <option>MPD 4</option>
//                     </CustomInput>
//                   </FormGroup>
//                 </Col>
//                 <Col md="6" sm="12">
//                   <FormGroup>
//                     <Label>Map correct Bay to MPD</Label>
//                     <CustomInput type="select" name="select" id="location">
//                       <option>MPD 1</option>
//                       <option>MPD 2</option>
//                       <option>MPD 3</option>
//                       <option>MPD 4</option>
//                     </CustomInput>
//                   </FormGroup>
//                 </Col>
//                 <Col md="6" sm="12">
//                   <FormGroup>
//                     <Label>Select BAY</Label>
//                     <CustomInput type="select" name="select" id="location">
//                       <option>BAY 1</option>
//                       <option>BAY 2</option>
//                       <option>BAY 3</option>
//                       <option>BAY 4</option>
//                     </CustomInput>
//                   </FormGroup>
//                 </Col>
//                 <Col md="6" sm="12">
//                   <FormGroup>
//                     <Label>Map Correct Nozzle to each Bay</Label>
//                     <CustomInput type="select" name="select" id="location">
//                       <option>N1 and N2</option>
//                       <option>N1 and N2</option>
//                       <option>N1 and N2</option>
//                       <option>N1 and N2</option>
//                     </CustomInput>
//                   </FormGroup>
//                 </Col>
//                 <Col md="6" sm="12">
//                   <FormGroup>
//                     <Label>Select Nozzles</Label>
//                     <CustomInput type="select" name="select" id="location">
//                       <option>N1 and N2</option>
//                       <option>N1 and N2</option>
//                       <option>N1 and N2</option>
//                       <option>N1 and N2</option>
//                     </CustomInput>
//                   </FormGroup>
//                 </Col>
//                 <Col md="6" sm="12">
//                   <FormGroup>
//                     <Label>Map Tank to Nozzles</Label>
//                     <CustomInput type="select" name="select" id="location">
//                       <option>Tank 1/Tank 2/Tank 3</option>
//                       <option>Tank 1/Tank 2/Tank 3</option>
//                       <option>Tank 1/Tank 2/Tank 3</option>
//                       <option>Tank 1/Tank 2/Tank 3</option>
//                     </CustomInput>
//                   </FormGroup>
//                 </Col>
//               </Row>
//             ),
//           },
//           {
//             title: 3,
//             content: (
//               <Row>
//                 <Col md="6" sm="12">
//                   <FormGroup>
//                     <Label> Add Payment modes </Label>
//                     <Input type="text" />
//                   </FormGroup>
//                 </Col>
//                 <Col md="6" sm="12">
//                   <FormGroup>
//                     <Label> Select from the below </Label>
//                     <Input type="text" />
//                   </FormGroup>
//                 </Col>
//                 <Col md="6" sm="12">
//                   <FormGroup>
//                     <Label> Mode </Label>
//                     <CustomInput type="select" name="select" id="location">
//                       <option>Upi</option>
//                       <option>Cesh</option>
//                       <option>Online</option>
//                       <option>Bank</option>
//                     </CustomInput>
//                   </FormGroup>
//                 </Col>
//                 <Col md="6" sm="12">
//                   <FormGroup>
//                     <Label> Bank </Label>
//                     <CustomInput type="select" name="select" id="location">
//                       <option>Punb bank</option>
//                       <option>Hdb bank</option>
//                       <option>Hdfc bank</option>
//                       <option>Punb bank</option>
//                     </CustomInput>
//                   </FormGroup>
//                 </Col>
      
//               </Row>
//             ),
//           },
//           {
//             title: 4,
//             content: (
//               <Row>
//                 <Col md="3" sm="12">
//                   <FormGroup>
//                     <Label> Add Credit Customer </Label>
//                     <Input type="text" />
//                   </FormGroup>
//                 </Col>
//                 <Col md="3" sm="12">
//                   <FormGroup>
//                     <Label> Name of the Customer </Label>
//                     <Input type="text" />
//                   </FormGroup>
//                 </Col>
//                 <Col md="3" sm="12">
//                   <FormGroup>
//                     <Label>Phone Number</Label>
//                     <Input type="text" />
//                   </FormGroup>
//                 </Col>
//                 <Col md="3" sm="12">
//                   <FormGroup>
//                     <Label> Credit Limit </Label>
//                     <Input type="text" />
//                   </FormGroup>
//                 </Col>
//                 <Col md="3" sm="12">
//                   <FormGroup>
//                     <Label> Credit Term Fuel </Label>
//                     <Input type="text" />
//                   </FormGroup>
//                 </Col>
//                 <Col md="3" sm="12">
//                   <FormGroup>
//                     <Label> Credit Term Lube </Label>
//                     <Input type="text" />
//                   </FormGroup>
//                 </Col>
//                 <Col md="3" sm="12">
//                   <FormGroup>
//                     <Label> Address </Label>
//                     <Input type="text" />
//                   </FormGroup>
//                 </Col>
//                 <Col md="3" sm="12">
//                   <FormGroup>
//                     <Label> Local ID </Label>
//                     <Input type="text" />
//                   </FormGroup>
//                 </Col>
//                 <Col md="6" sm="12">
//                   <FormGroup>
//                     <Label> Document Upload </Label>
//                     <Input type="text" className="input p-5" />
//                     <input type="file" placeholder="Document Upload" />
//                   </FormGroup>
//                 </Col>
//                 <Col md="6" sm="12">
//                   <FormGroup>
//                     <Label> Any Agreement signed can be uploaded </Label>
//                     <Input type="text" className="input p-5" />
//                     <input type="file" placeholder="Upload" />
//                   </FormGroup>
//                 </Col>
//                 <Col md="6" sm="12">
//                   <FormGroup>
//                     <Label>Vehicle No.</Label>
//                     <Input type="text" />
//                   </FormGroup>
//                 </Col>
//                 <Col md="6" sm="12">
//                   <FormGroup>
//                     <Label>Multiple Entry can be done for tracking</Label>
//                     <Input type="text" />
//                   </FormGroup>
//                 </Col>
//                 <Col md="6" sm="12">
//                   <FormGroup>
//                     <Label>Local Guranter Name</Label>
//                     <Input type="text" />
//                   </FormGroup>
//                 </Col>
//                 <Col md="6" sm="12">
//                   <FormGroup>
//                     <Label></Label>
//                     <Input type="text" />
//                   </FormGroup>
//                 </Col>
//                 <Col md="6" sm="12">
//                   <FormGroup>
//                     <Label>Local Guranter Name</Label>
//                     <Input type="text" />
//                   </FormGroup>
//                 </Col>
//                 <Col md="6" sm="12">
//                   <FormGroup>
//                     <Label>Local Guranter Number</Label>
//                     <Input type="text" />
//                   </FormGroup>
//                 </Col>
//                 <Col md="6" sm="12">
//                   <FormGroup>
//                     <Label>List of Customer added with come here</Label>
//                     <Input type="text" />
//                   </FormGroup>
//                 </Col>
//                 <Col lg="6" md="12">
//                   <FormGroup>
//                     <Label>Search Option</Label>
//                     <InputGroup>
//                       <InputGroupAddon addonType="prepend">
//                         <Button.Ripple color="primary">
//                           <Search size={15} />\
//                         </Button.Ripple>
//                       </InputGroupAddon>
//                       <Input type="text" />
//                       <InputGroupAddon addonType="append">
//                         <Button.Ripple color="primary">Search !</Button.Ripple>
//                       </InputGroupAddon>
//                     </InputGroup>
//                   </FormGroup>
//                 </Col>
               
//               </Row>
//             ),
//           },
//           {
//             title: 5,
//             content: (
//               <Row>
//                 <Col md="6" sm="12">
//                   <FormGroup>
//                     <Label>Nature </Label>
//                     <Input type="text" />
//                   </FormGroup>
//                 </Col>
//                 <Col md="6" sm="12">
//                   <FormGroup>
//                     <Label>Manufacturer </Label>
//                     <Input type="text" />
//                   </FormGroup>
//                 </Col>
//                 <Col md="6" sm="12">
//                   <FormGroup>
//                     <Label>Purchased on</Label>
//                     <Input type="text" />
//                   </FormGroup>
//                 </Col>
          
//               </Row>
//             ),
//           },
//           {
//             title: 6,
//             content: (
//               <Row>
//                 <Col md="6" sm="12">
//                   <FormGroup>
//                     <Label> Name of the Bank </Label>
//                     <Input type="text" />
//                   </FormGroup>
//                 </Col>
//                 <Col md="6" sm="12">
//                   <FormGroup>
//                     <Label>Credit Limit from Bank</Label>
//                     <Input type="text" />
//                   </FormGroup>
//                 </Col>
//                 <Col md="6" sm="12">
//                   <FormGroup>
//                     <Label>Interest Rate </Label>
//                     <Input type="text" />
//                   </FormGroup>
//                 </Col>
//                 <Col md="6" sm="12">
//                   <FormGroup>
//                     <Label>Account No</Label>
//                     <Input type="text" />
//                   </FormGroup>
//                 </Col>
//                 <Col md="6" sm="12">
//                   <FormGroup>
//                     <Label>IFSC Code </Label>
//                     <Input type="text" />
//                   </FormGroup>
//                 </Col>
//                 <Col md="6" sm="12">
//                   <FormGroup>
//                     <Label>Credit Offer from Bank Valid upto </Label>
//                     <Input type="text" />
//                   </FormGroup>
//                 </Col>
//                 <Col md="6" sm="12">
//                   <FormGroup>
//                     <Label> Document Upload </Label>
//                     <Input type="text" className="input p-5" />
//                     <input type="file" placeholder="Document Upload" />
//                   </FormGroup>
//                 </Col>
               
                
//               </Row>
//             ),
//           },
         
//         ],
//       };
//   }


// export default RoDetails;
