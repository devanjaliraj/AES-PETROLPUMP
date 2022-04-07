import React from "react";
import * as Icon from "react-feather";
const navigationConfig = [
  {
    id: "dashboard",
    title: "Dashboard",
    type: "collapse",
    icon: <Icon.Home size={20} />,
    badge: "warning",
    badgeText: "2",
    children: [
      {
        id: "analyticsDash",
        title: "Analytics",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/",
      },
    ],
  },
  {
    type: "groupHeader",
    groupTitle: "Component",
  },
  // {
  //   id: "dealer",
  //   title: "Dealer",
  //   type: "collapse",
  //   icon: <Icon.User size={20} />,
  //   children: [
  //     {
  //       id: "dealerList",
  //       title: "Dealer List",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/dealer/dealerList",
  //     },
  //   ],
  // },
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
        navLink: "/app/ro-configuration/roConfigurationList",
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
        id: "tankMapList",
        title: "Tank Map List",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/ro-configuration/tankMapList",
      },
      {
        id: "nozzleMapList",
        title: "Nozzle Map List",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/ro-configuration/nozzleMapList",
      },
    
      {
        id: "bankForTransactionList",
        title: "Bank For Transaction List",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/ro-configuration/bankForTransactionList",
      },
      {
        id: "paymentModeList",
        title: "payment Mode List ",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/ro-configuration/paymentModeList",
      },
      // {
      //   id: "creditCustomers",
      //   title: "Credit Customers",
      //   type: "item",
      //   icon: <Icon.Circle size={12} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/ro-configuration/creditCustomers",
      // },
      {
        id: "creditCustomersList",
        title: "Credit Customers List",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/ro-configuration/creditCustomersList",
      },
      {
        id: "otherEquipmentList",
        title: "Other Equipment List",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/ro-configuration/otherEquipmentList",
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
    id: "staffManagementList",
    title: "Staff Management List",
    type: "item",
    icon: <Icon.Circle size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/staffEnrollment/staffManagementList",
    },
    {
      id: "dMSList",
      title: "DSM List",
      type: "item",
      icon: <Icon.Circle size={12} />,
      permissions: ["admin", "editor"],
      navLink: "/app/staffEnrollment/dMSList",
    },
    {
      id: "otherStaffList",
      title: "Other Staff List",
      type: "item",
      icon: <Icon.Circle size={12} />,
      permissions: ["admin", "editor"],
      navLink: "/app/staffEnrollment/otherStaffList",
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
        id: "cashManagementList",
        title: "Cash Management List",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/cashManagement/cashManagementList",
      },
      {
        id: "cashDealerTable",
        title: "Cash Dealer Table",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/cashManagement/cashDealerTable",
      },
      {
        id: "status",
        title: "Status",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/cashManagement/status",
      },
      // {
      //   id: "cashDealerTable",
      //   title: "Status",
      //   type: "item",
      //   icon: <Icon.Circle size={12} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/cashManagement/cashDealerTable",
      // },
      // {
      //   id: "cashDealerTable",
      //   title: "Expenses",
      //   type: "item",
      //   icon: <Icon.Circle size={12} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/cashManagement/cashDealerTable",
      // },
      // {
      //   id: "cashDealerTable",
      //   title: " payment mode",
      //   type: "item",
      //   icon: <Icon.Circle size={12} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/cashManagement/cashDealerTable",
      // },
      // {
      //   id: "cashDealerTable",
      //   title: "Bank Deposites",
      //   type: "item",
      //   icon: <Icon.Circle size={12} />,
      //   permissions: ["admin", "editor"],
      //   navLink: "/app/cashManagement/cashDealerTable",
      // },
    ],
  },
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
 ///////////////// facilityManagement start ///////////////////
 {
  id: "facilityManagement",
  title: "Facility Management",
  type: "collapse",
  icon: <Icon.User size={20} />,
  children: [
    {
      id: "stampingDataList",
      title: "Stamping Data List",
      type: "item",
      icon: <Icon.Circle size={12} />,
      permissions: ["admin", "editor"],
      navLink: "/app/facilityManagement/stampingDataList",
    },
    {
      id: "otherEquipmentList",
      title: "Other Equipment List",
      type: "item",
      icon: <Icon.Circle size={12} />,
      permissions: ["admin", "editor"],
      navLink: "/app/facilityManagement/otherEquipmentList",
    },
    {
      id: "statutoryCertificateManagementList",
      title: "SC Management List",
      type: "item",
      icon: <Icon.Circle size={12} />,
      permissions: ["admin", "editor"],
      navLink: "/app/facilityManagement/statutoryCertificateManagementList",
    },
    {
      id: "mpdManagement",
      title: "MPD Management",
      type: "item",
      icon: <Icon.Circle size={12} />,
      permissions: ["admin", "editor"],
      navLink: "/app/facilityManagement/mpdManagement",
    },
    {
      id: "raiseConcernToAESList",
      title: "Raise Concern To AES List",
      type: "item",
      icon: <Icon.Circle size={12} />,
      permissions: ["admin", "editor"],
      navLink: "/app/facilityManagement/raiseConcernToAESList",
    },
  ],
},
///////////////// facilityManagement end ///////////////////
  {
    id: "stockManagement",
    title: "Stock Management",
    type: "collapse",
    icon: <Icon.User size={20} />,
    children: [
      {
        id: "stockManagementList",
        title: "Stock Management List",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/stockManagement/stockManagementList",
      },
      {
        id: "fuelStock",
        title: "Fuel Stock",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/stockManagement/fuelStock",
      },
      {
        id: "lubeStockList",
        title: "Lube Stock List",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/stockManagement/lubeStockList",
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
      id: "retailSellingPriceList",
      title: "Retail Selling Price List",
      type: "item",
      icon: <Icon.Circle size={12} />,
      permissions: ["admin", "editor"],
      navLink: "/app/shiftmanagement/retailSellingPriceList",
    },
    {
      id: "bayManagementList",
      title: "Bay Management List",
      type: "item",
      icon: <Icon.Circle size={12} />,
      permissions: ["admin", "editor"],
      navLink: "/app/shiftmanagement/bayManagementList",
    },
    {
      id: "dSMClosingSheetList",
      title: "DSM Closing Sheet List",
      type: "item",
      icon: <Icon.Circle size={12} />,
      permissions: ["admin", "editor"],
      navLink: "/app/shiftManagement/dSMClosingSheetList",
    },
    {
      id: "salesFigureList",
      title: "Sales Figure List",
      type: "item",
      icon: <Icon.Circle size={12} />,
      permissions: ["admin", "editor"],
      navLink: "/app/shiftManagement/salesFigureList",
    },
    {
      id: "creditGivenList",
      title: "Credit Given List",
      type: "item",
      icon: <Icon.Circle size={12} />,
      permissions: ["admin", "editor"],
      navLink: "/app/shiftManagement/creditGivenList",
    },

    {
      id: "lubricantSales",
      title: "Lubricant Sales",
      type: "item",
      icon: <Icon.Circle size={12} />,
      permissions: ["admin", "editor"],
      navLink: "/app/shiftManagement/lubricantSales",
    },

    {
      id: "staffAttendanceList",
      title: "Staff Attendance List",
      type: "item",
      icon: <Icon.Circle size={12} />,
      permissions: ["admin", "editor"],
      navLink: "/app/shiftManagement/staffAttendanceList",
    },
  ],
},
  {
    id: "training",
    title: "Notification",
    type: "collapse",
    icon: <Icon.User size={20} />,
    children: [
      {
        id: "trainingList",
        title: "Notification List ",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/training/trainingList",
      },
    ],
  },
 
  {
    id: "setting",
    title: "Setting",
    type: "collapse",
    icon: <Icon.User size={20} />,
    children: [
      {
        id: "enquiryForm",
        title: "Enquiry Form",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/setting/enquiryForm",
      },
      {
        id: "mOCList",
        title: "MOC List",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/setting/moc/mOCList",
      },
      {
        id: "tankList",
        title: "TANK LIST",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/setting/tank/tankList",
      },
      {
        id: "bayList",
        title: "BAY LIST",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/setting/bay/bayList",
      },
      
    ],
  },

];
export default navigationConfig;