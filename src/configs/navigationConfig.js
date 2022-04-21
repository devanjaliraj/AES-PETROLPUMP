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
        id: "staffManagementList",
        title: " Managers/Cashiers List",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/staffEnrollment/staffManagementList",
      },
      {
        id: "dMSList",
        title: "DSM/DSW List",
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
    id: "cashManagement",
    title: "Cash Management",
    type: "collapse",
    icon: <Icon.User size={20} />,
    children: [
      {
        id: "status",
        title: "Status",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/cashManagement/status",
      },
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
    id: "stockManagement",
    title: "Stock Management",
    type: "collapse",
    icon: <Icon.User size={20} />,
    children: [
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
      {
        id: "stockManagementList",
        title: "Product Receipt List",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/app/stockManagement/stockManagementList",
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

  // {
  //   id: "subplan",
  //   title: "Credit Managent ",
  //   type: "collapse",
  //   icon: <Icon.User size={20} />,
  //   children: [
  //     {
  //       id: "subplanvideos",
  //       title: "Subscription plan videos",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/subplan/subplanvideos",
  //     },
  //     {
  //       id: "addPlan",
  //       title: "Add plan videos",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/subplan/addPlan",
  //     },
  //   ],
  // },

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

  // {
  //   id: "setting",
  //   title: "Setting",
  //   type: "collapse",
  //   icon: <Icon.User size={20} />,
  //   children: [
  //     {
  //       id: "enquiryForm",
  //       title: "Enquiry Form",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/setting/enquiryForm",
  //     },
  //     {
  //       id: "mOCList",
  //       title: "MOC List",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/setting/moc/mOCList",
  //     },
  //     {
  //       id: "tankList",
  //       title: "TANK LIST",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/setting/tank/tankList",
  //     },
  //     {
  //       id: "bayList",
  //       title: "BAY LIST",
  //       type: "item",
  //       icon: <Icon.Circle size={12} />,
  //       permissions: ["admin", "editor"],
  //       navLink: "/app/setting/bay/bayList",
  //     },

  //   ],
  // },
];
export default navigationConfig;
