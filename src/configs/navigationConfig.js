import React from "react";
import * as Icon from "react-feather";
const navigationConfig = [
  
    
  {
        id: "dashboard",
        title: "Dashboard",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/",
    
  },
  {
    type: "groupHeader",
    groupTitle: "Component",
  },
  {
    id: "ro-configuration",
    title: "RO-configuration",
    type: "collapse",
    icon: <Icon.User size={20} />,
    children: [
      {
        id: "roConfigurationList",
        title: "Basic Detail List",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/ro-configuration/basicDetailsList",
      },
      {
        id: "designYourOutletList",
        title: "Design Your Outlet",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/ro-configuration/designYourOutletList",
      },
      {
        id: "dealerListForTank",
        title: "Tank",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/ro-configuration/dealerListForTank",
      },
      {
        id: "dealerListForNozzle",
        title: "Nozzle",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/ro-configuration/dealerListForNozzle",
      },
      {
        id: "dealerListForPaymentMode",
        title: "payment Mode ",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/ro-configuration/dealerListForPaymentMode",
      },
      {
        id: "creditCustomers",
        title: "Credit Customers ",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/ro-configuration/dealerListForCreditCus",
      },
      {
        id: "dealerListforBankofTrans",
        title: "Bank For Transaction",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/ro-configuration/dealerListforBankofTrans",
      },
      {
        id: "dealerListForOtherEquip",
        title: "Other Equipment",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/ro-configuration/dealerListForOtherEquip",
      },
    ],
  },
  {
    id: "staffEnrollment",
    title: "Staff Enrollment",
    type: "collapse",
    icon: <Icon.User size={20} />,
    children: [
      {
        id: "dealerListForManager",
        title: " Managers/Cashiers",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/staffEnrollment/dealerListForManager",
      },
      {
        id: "dealerListForDSM",
        title: "DSM/DSW",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/staffEnrollment/dealerListForDSM",
      },
      {
        id: "dealerListForOtherStaff",
        title: "Other Staff",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/staffEnrollment/dealerListForOtherStaff",
      },
    ],
  },
  // shiftManagement
  {
    id: "shiftManagement",
    title: "Shift Management",
    type: "collapse",
    icon: <Icon.User size={20} />,
    children: [
      {
        id: "dealerListInRSP",
        title: "Retail Selling Price",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/shiftmanagement/dealerListInRSP",
      },
      {
        id: "dealerListForBayMang",
        title: "Bay Management",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/shiftmanagement/dealerListForBayMang",
      },
      {
        id: "dealerListForLubricantSales",
        title: "Lubricant Sales",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/shiftManagement/dealerListForLubricantSales",
      },
      {
        id: "dealerListForDSMClosing",
        title: "DSM Closing Sheet",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/shiftManagement/dealerListForDSMClosing",
      },
      {
        id: "dealerListForCashCollection",
        title: "Cash Collection",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/shiftManagement/dealerListForCashCollection",
      },
      {
        id: "dealerListForSalesFigure",
        title: "Sales Figure",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/shiftManagement/dealerListForSalesFigure",
      },
      {
        id: "dealerListForCreditGivento",
        title: "Credit Given To",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/shiftManagement/dealerListForCreditGivento",
      },
    
      {
        id: "dealerListForStaffAttendence",
        title: "Staff Attendance",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/shiftManagement/dealerListForStaffAttendence",
      },
    ],
  },
  {
    id: "cashManagement",
    title: "Cash Management",
    type: "collapse",
    icon: <Icon.User size={20} />,
    children: [
      {
        id: "status",
        title: "Status",
        type: "collapse",
        icon: <Icon.User size={20} />,
        children: [
      {
        id: "dealerListForMSStock",
        title: "MS Stock",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/cashManagement/status/dealerListForMSStock",
      },
      {
        id: "dealerListForHSDStock",
        title: "HSD Stock",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/cashManagement/status/dealerListForHSDStock",
      },
      {
        id: "dealerListForLubricant",
        title: "Lubricant",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/cashManagement/status/dealerListForLubricant",
      },
      {
        id: "dealerListForPaymentModeLists",
        title: "Payment Mode",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/cashManagement/status/dealerListForPaymentModeLists",
      },
      {
        id: "dealerListForNetProfit",
        title: "Net Profit",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/cashManagement/status/dealerListForNetProfit",
      },
    ],
  },

  
      {
        id: "dealerListForExpenses",
        title: "Expenses",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/cashManagement/dealerListForExpenses",
      },
      {
        id: "dealerListForOnlinePayment",
        title: "Online Payment",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/cashManagement/dealerListForOnlinePayment",
      },
      {
        id: "dealerListForBankDeposite",
        title: "Bank Deposite",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/cashManagement/dealerListForBankDeposite",
      },
      {
        id: "dealerListForCreditManagement",
        title: "Cash Management",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/cashManagement/dealerListForCreditManagement",
      },
    ],
  },
  {
    id: "stockManagement",
    title: "Stock Management",
    type: "collapse",
    icon: <Icon.User size={20} />,
    children: [
      {
        id: "dealerListForFuelStock",
        title: "Fuel Stock",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/stockManagement/dealerListForFuelStock",
      },
      {
        id: "dealerListForLubeStock",
        title: "Lube Stock",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/stockManagement/dealerListForLubeStock",
      },
      {
        id: "dealerListForProductReceipt",
        title: "Product Receipt",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/stockManagement/dealerListForProductReceipt",
      },
    ],
  },
  ///////////////// facilityManagement start ///////////////////
  {
    id: "facilityManagement",
    title: "Facility Management",
    type: "collapse",
    icon: <Icon.User size={20} />,
    children: [
      {
        id: "dealerListForStampingData",
        title: "Stamping Data List",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/facilityManagement/dealerListForStampingData",
      },
      {
        id: "StatutoryCertificateManagement",
        title: "Statutory Certificate Management",
        type: "collapse",
        icon: <Icon.User size={20} />,
        children: [
          {
              id: "dealerListForlCan",
              title: "5L Can",
              type: "item",
              icon: <Icon.Circle size={12} />,
              permissions: ["admin", "editor"],
              navLink: "/app/facilityManagement/statutoryCertificateManagement/dealerListForlCan",
            },
            {
              id: "dealerListForPESOLicense",
              title: "PESO License",
              type: "item",
              icon: <Icon.Circle size={12} />,
              permissions: ["admin", "editor"],
              navLink: "/app/facilityManagement/statutoryCertificateManagement/dealerListForPESOLicense",
            },
            {
              id: "dealerListForHydrometer",
              title: "Hydrometer",
              type: "item",
              icon: <Icon.Circle size={12} />,
              permissions: ["admin", "editor"],
              navLink: "/app/facilityManagement/statutoryCertificateManagement/dealerListForHydrometer",
            },
            {
              id: "dealerListForThermometer",
              title: "Thermometer",
              type: "item",
              icon: <Icon.Circle size={12} />,
              permissions: ["admin", "editor"],
              navLink: "/app/facilityManagement/statutoryCertificateManagement/dealerListForThermometer",
            },
            {
              id: "dealerListForAirGaugage1",
              title: "Air Gaugage 1",
              type: "item",
              icon: <Icon.Circle size={12} />,
              permissions: ["admin", "editor"],
              navLink: "/app/facilityManagement/statutoryCertificateManagement/dealerListForAirGaugage1",
            },
            {
              id: "dealerListForDpsl",
              title: "DPSL",
              type: "item",
              icon: <Icon.Circle size={12} />,
              permissions: ["admin", "editor"],
              navLink: "/app/facilityManagement/statutoryCertificateManagement/dealerListForDpsl",
            },
            {
              id: "dealerListForAddOtherDocument",
              title: "Add Other Document",
              type: "item",
              icon: <Icon.Circle size={12} />,
              permissions: ["admin", "editor"],
              navLink: "/app/facilityManagement/statutoryCertificateManagement/dealerListForAddOtherDocument",
            },

          
        
      ],
    },
    {
      id: "otherEquipment",
      title: "Other Equipments",
      type: "collapse",
      icon: <Icon.User size={20} />,
      children: [
        {
      
        id: "dealerListForDataFromRoConfimation",
        title: "Data From RO-Confimation",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/facilityManagement/otherEquipment/dealerListForDataFromRoConfimation",
      },
      {
      
        id: "dealerListForFireEquipment",
        title: "Fire Equipments",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/facilityManagement/otherEquipment/dealerListForFireEquipment",
      },
    ],
  },
      // {
      //   id: "dealerListForStatutoryCertificateManagementList",
      //   title: "SC Management List",
      //   type: "item",
      //   icon: <Icon.Circle size={12} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/facilityManagement/dealerListForStatutoryCertificateManagementList",
      // },
      {
        id: "dealerListForMpdManagement",
        title: "MPD Management",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/facilityManagement/dealerListForMpdManagement",
      },
      {
        id: "dealerListForRaiseConcernToAES",
        title: "Raise Concern To AES List",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/facilityManagement/dealerListForRaiseConcernToAES",
      
      },
    ],
  },
  ///////////////// facilityManagement end ///////////////////
  {
    id: "subplan",
    title: "Credit Managent ",
    type: "collapse",
    icon: <Icon.User size={20} />,
    children: [
      {
        id: "subplanvideos",
        title: "Subscription plan videos",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/subplan/subplanvideos",
      },
      {
        id: "addPlan",
        title: "Add plan videos",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/subplan/addPlan",
      },
    ],
  },
  {
    id: "notification",
    title: "Notification",
    type: "collapse",
    icon: <Icon.User size={20} />,
    children: [
      {
        id: "notificationList",
        title: "Notification List ",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/notification/notificationList",
      },
    ],
  },
  {
    id: "traningVideoList",
    title: "Traning Video List ",
    type: "item",
    icon: <Icon.User size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/traningvideo/traningVideoList",
  },

      {
        id: "membership",
        title: "Membership",
        type: "collapse",
        icon: <Icon.User size={20} />,
        children: [
      {
        id: "membershipList",
        title: "Membership List ",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/membership/membershipList",
      },
    ],
  },
  {
    id: "aboutus",
    title: "About Us ",
    type: "item",
    icon: <Icon.User size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/about/AllaboutUs",
  },
  {
    id: "helpUs",
    title: "Help Us",
    type: "item",
    icon: <Icon.User size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/app/helpUs/HelpUs",
  },
 
      {
        id: "termscondition",
        title: "Term And Condition ",
        type: "item",
        icon: <Icon.User size={20} />,
        permissions: ["admin", "editor"],
        navLink: "/app/termscondition/TermsCondition",
      },
      {
        id: "privacypolicy",
        title: "Privacy policy",
        type: "item",
        icon: <Icon.User size={20} />,
        permissions: ["admin", "editor"],
        navLink: "/app/privacypolicy/PrivacyPolicy",
      },
      // {
      //   id: "tankList",
      //   title: "TANK LIST",
      //   type: "item",
      //   icon: <Icon.Circle size={12} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/setting/tank/tankList",
      // },
      // {
      //   id: "bayList",
      //   title: "BAY LIST",
      //   type: "item",
      //   icon: <Icon.Circle size={12} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/setting/bay/bayList",
      // },

  
];
export default navigationConfig;
