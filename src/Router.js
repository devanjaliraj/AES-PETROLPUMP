import React, { Suspense, lazy } from "react";
import { Router, Switch, Route, HashRouter } from "react-router-dom";
import { history } from "./history";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Spinner from "./components/@vuexy/spinner/Loading-spinner";
import knowledgeBaseCategory from "./views/pages/knowledge-base/Category";
import knowledgeBaseQuestion from "./views/pages/knowledge-base/Questions";
import { ContextLayout } from "./utility/context/Layout";

// Route-based code splitting
const analyticsDashboard = lazy(() =>
  import("./views/dashboard/analytics/AnalyticsDashboard")
);
const ecommerceDashboard = lazy(() =>
  import("./views/dashboard/ecommerce/EcommerceDashboard")
);
const checkout = lazy(() => import("./views/apps/ecommerce/cart/Cart"));
const aboutUs = lazy(() => import("./views/apps/about/AboutUs"));
const AllaboutUs = lazy(() => import("./views/apps/about/AllaboutUs"));
const EditAboutUs = lazy(() => import("./views/apps/about/EditAboutUs"));

const TermConditionList = lazy(() => import("./views/apps/termscondition/TermConditionList"));
const AddTermsCondition = lazy(() => import("./views/apps/termscondition/AddTermsCondition"));
const EditTermCondition = lazy(() => import("./views/apps/termscondition/EditTermCondition"));
const helpUs = lazy(() => import("./views/apps/helpUs/HelpUS"));
const EdithelpusForm = lazy(() => import("./views/apps/helpUs/EdithelpusForm"));
const ViewHelpUs = lazy(() => import("./views/apps/helpUs/ViewHelpUs"));

const membershipList = lazy(() => import("./views/apps/membership/MembershipList"));

const editMembership = lazy(() => import("./views/apps/membership/EditMembership"));
const notificationList = lazy(() => import("./views/apps/notification/NotificationList"));
const addNotification = lazy(() => import("./views/apps/notification/AddNotification"));
const productDetail = lazy(() =>
  import("./views/apps/ecommerce/detail/Detail")
);
const shop = lazy(() => import("./views/apps/ecommerce/shop/Shop"));

////////////////////////////////////  stockmanagement -- start //////////////////////////////////

const DealerListForFuelStock = lazy(() =>
  import("./views/apps/stockmanagement/DealerListForFuelStock")
);
const FuelStockList = lazy(() =>
  import("./views/apps/stockmanagement/FuelStockList")
);
const FuelStock = lazy(() => import("./views/apps/stockmanagement/FuelStock"));
const DealerListForLubeStock = lazy(() =>
  import("./views/apps/stockmanagement/DealerListForLubeStock")
);
const LubeStockList = lazy(() =>
  import("./views/apps/stockmanagement/LubeStockList")
);
const LubeStockForm = lazy(() =>
  import("./views/apps/stockmanagement/LubeStockForm")
);
const DealerListForProductReceipt = lazy(() =>
  import("./views/apps/stockmanagement/DealerListForProductReceipt")
);
const ProductReceiptList = lazy(() =>
  import("./views/apps/stockmanagement/ProductReceiptList")
);
const ReceiptForm = lazy(() =>
  import("./views/apps/stockmanagement/ReceiptForm")
);
////////////////////////////////////  stockmanagement -- start //////////////////////////////////

/////////////////////////////// shiftmanagement -- start ///////////////////////////
const AddRsp = lazy(() => import("./views/apps/shiftmanagement/rsp/AddRsp"));
// const AddCashCollection = lazy(() => import("./views/apps/shiftmanagement/AddCashCollection"));

const AddBm = lazy(() => import("./views/apps/shiftmanagement/rsp/AddBm"));
const AddDsmClosing = lazy(() =>
  import("./views/apps/shiftmanagement/rsp/AddDsmCS")
);

const DealerListInRSP = lazy(() =>
  import("./views/apps/shiftmanagement/DealerListInRSP")
);
const RetailSellingPriceList = lazy(() =>
  import("./views/apps/shiftmanagement/RetailSellingPriceList")
);
const RetailSellingPriceForm = lazy(() =>
  import("./views/apps/shiftmanagement/RetailSellingPricefrom")
);

const DealerListForBayMang = lazy(() =>
  import("./views/apps/shiftmanagement/DealerListForBayMang")
);
const BayManagementList = lazy(() =>
  import("./views/apps/shiftmanagement/BayManagementList")
);
const BayManagementForm = lazy(() =>
  import("./views/apps/shiftmanagement/BayManagementForm")
);
const DealerListForDSMClosing = lazy(() =>
  import("./views/apps/shiftmanagement/DealerListForDSMClosing")
);
const DSMClosingSheetList = lazy(() =>
  import("./views/apps/shiftmanagement/DSMClosingSheetList")
);
const DSMClosingSheetForm = lazy(() =>
  import("./views/apps/shiftmanagement/DSMClosingSheetForm")
);
const DealerListForCashCollection = lazy(() =>
  import("./views/apps/shiftmanagement/DealerListForCashCollection")
);
const CashCollectionList = lazy(() =>
  import("./views/apps/shiftmanagement/CashCollectionList")
);
const CashCollectionForm = lazy(() =>
  import("./views/apps/shiftmanagement/CashCollectionForm")
);
const DealerListForSalesFigure = lazy(() =>
  import("./views/apps/shiftmanagement/DealerListForSalesFigure")
);
const SalesFigureList = lazy(() =>
  import("./views/apps/shiftmanagement/SalesFigureList")
);
const SalesFigureForm = lazy(() =>
  import("./views/apps/shiftmanagement/SalesFigureForm")
);
const DealerListForCreditGivento = lazy(() =>
  import("./views/apps/shiftmanagement/DealerListForCreditGivento")
);
const CreditGivenList = lazy(() =>
  import("./views/apps/shiftmanagement/CreditGivenList")
);
const CreditGivenForm = lazy(() =>
  import("./views/apps/shiftmanagement/CreditGivenForm")
);
const DealerListForLubricantSales = lazy(() =>
  import("./views/apps/shiftmanagement/DealerListForLubricantSales")
);
const LubricantSalesList = lazy(() =>
  import("./views/apps/shiftmanagement/LubricantSalesList")
);

const lubricantForm = lazy(() =>
  import("./views/apps/shiftmanagement/LubricantForm")
);
const DealerListForStaffAttendence = lazy(() =>
  import("./views/apps/shiftmanagement/DealerListForStaffAttendence")
);
const StaffAttendanceList = lazy(() =>
  import("./views/apps/shiftmanagement/StaffAttendanceList")
);

const StaffAttendanceForm = lazy(() =>
  import("./views/apps/shiftmanagement/StaffAttendenceForm")
);

const staffnotificationList = lazy(() =>
  import("./views/apps/shiftmanagement/StaffNotidicationList")
);
/////////////////////////////// shiftmanagement -- start ///////////////////////////

//////////////////////////// facilitymanagement  /////////////////////////////

const StampingDataList = lazy(() =>
  import("./views/apps/facilitymanagement/StampingDataList")
);
const DealerListForStampingData = lazy(() =>
import("./views/apps/facilitymanagement/DealerListForStampingData")
);

const StampingDataForm = lazy(() =>
  import("./views/apps/facilitymanagement/StampingDataForm")
);

const otherEquipmentList = lazy(() =>
  import("./views/apps/facilitymanagement/OtherEquipmentList")
);
const dealerListForOtherEquipment = lazy(() =>
  import("./views/apps/facilitymanagement/DealerListForOtherEquipment")
);
const OtherEquipmentForm = lazy(() =>
  import("./views/apps/facilitymanagement/OtherEquipmentForm")
);
const StatutoryCertificateManagementList = lazy(() =>
  import("./views/apps/facilitymanagement/StatutoryCertificateManagementList")
);

const DealerListForlCan = lazy(() =>
  import("./views/apps/facilitymanagement/statutorycertificatemanagement/DealerListForlCan")
);
const LCan = lazy(() =>
  import("./views/apps/facilitymanagement/statutorycertificatemanagement/LCan")
);
const DealerListForAddOtherDocument = lazy(() =>
  import("./views/apps/facilitymanagement/statutorycertificatemanagement/DealerListForAddOtherDocument")
);
const AddOtherDocument = lazy(() =>
  import("./views/apps/facilitymanagement/statutorycertificatemanagement/AddOtherDocument")
);
const DealerListForAirGaugage1 = lazy(() =>
  import("./views/apps/facilitymanagement/statutorycertificatemanagement/DealerListForAirGaugage1")
);
const AirGaugage1 = lazy(() =>
  import("./views/apps/facilitymanagement/statutorycertificatemanagement/AirGaugage1")
);
const DealerListForDPSL = lazy(() =>
  import("./views/apps/facilitymanagement/statutorycertificatemanagement/DealerListForDPSL")
);
const DPSL = lazy(() =>
  import("./views/apps/facilitymanagement/statutorycertificatemanagement/DPSL")
);
const DealerListForHydrometer = lazy(() =>
  import("./views/apps/facilitymanagement/statutorycertificatemanagement/DealerListForHydrometer")
); 
const Hydrometer = lazy(() =>
  import("./views/apps/facilitymanagement/statutorycertificatemanagement/Hydrometer")
);
const DealerListForPESOLicense = lazy(() =>
  import("./views/apps/facilitymanagement/statutorycertificatemanagement/DealerListForPESOLicense")
);
const PESOLicense = lazy(() =>
  import("./views/apps/facilitymanagement/statutorycertificatemanagement/PESOLicense")
);
const DealerListForThermometer = lazy(() =>
  import("./views/apps/facilitymanagement/statutorycertificatemanagement/DealerListForThermometer")
);
const Thermometer  = lazy(() =>
  import("./views/apps/facilitymanagement/statutorycertificatemanagement/Thermometer")
);

const DealerListForStatutoryCertificateManagementList = lazy(() =>
import("./views/apps/facilitymanagement/DealerListForStatutoryCertificateManagementList")
);


const MpdManagement = lazy(() =>
  import("./views/apps/facilitymanagement/MpdManagement")
);const DealerListForMpdManagement = lazy(() =>
import("./views/apps/facilitymanagement/DealerListForMpdManagement")
);

const RaiseConcernToAESList = lazy(() =>
  import("./views/apps/facilitymanagement/RaiseConcernToAESList")
);
const DealerListForRaiseConcernToAES = lazy(() =>
  import("./views/apps/facilitymanagement/DealerListForRaiseConcernToAES")
);

const RaiseConcernToAESForm = lazy(() =>
  import("./views/apps/facilitymanagement/RaiseConcernToAESForm")
);
const DealerListDataFromRoConfigration = lazy(() =>
  import("./views/apps/facilitymanagement/otherEquipment/DealerListDataFromRoConfigration")
);
const DealerListForFireEquipment = lazy(() =>
  import("./views/apps/facilitymanagement/otherEquipment/DealerListForFireEquipment")
);
const EditDataFromRoConfigration = lazy(() =>
  import("./views/apps/facilitymanagement/otherEquipment/EditDataFromRoConfigration")
);
const ListForDataFromRoConfigration = lazy(() =>
  import("./views/apps/facilitymanagement/otherEquipment/ListForDataFromRoConfigration")
);
const ListForFireEquipment = lazy(() =>
  import("./views/apps/facilitymanagement/otherEquipment/ListForFireEquipment")
);


// my component
const subplanvideos = lazy(() => import("./views/apps/subplan/SubPlanVideos"));
const editSubplanvideos = lazy(() => import("./views/apps/subplan/EditSubplanvideos"));

const addPlan = lazy(() => import("./views/apps/subplan/AddPlan"));
const dealerList = lazy(() => import("./views/apps/dealer/DealerList"));
const editDealer = lazy(() => import("./views/apps/dealer/EditDealer"));
const viewDealer = lazy(() => import("./views/apps/dealer/ViewDealer"));
const TraningVideoList = lazy(() => import("./views/apps/traningvideo/TraningVideoList"));
const EditTraningVideo = lazy(() => import("./views/apps/traningvideo/EditTraningVideo"));
const AddTraningVideo = lazy(() => import("./views/apps/traningvideo/AddTraningVideo"));


//////////////////////////////////////////// ro-configuration --- start //////////////////////////////////////////
const outletList = lazy(() =>
  import("./views/apps/ro-configuration/OutletList")
);
// const roForm = lazy(() => import("./views/apps/ro-configuration/RoForm"));
const outletForm = lazy(() =>
  import("./views/apps/ro-configuration/OutletForm")
);
const tankMapList = lazy(() =>
  import("./views/apps/ro-configuration/TankMapList")
);
const editTankMap = lazy(() =>
  import("./views/apps/ro-configuration/EditTankMap")
);
const nozzleMapList = lazy(() =>
  import("./views/apps/ro-configuration/NozzleMapList")
);
const editNozzleMap = lazy(() =>
  import("./views/apps/ro-configuration/EditNozzleMap")
);
const nozzleList = lazy(() =>
  import("./views/apps/ro-configuration/NozzleList")
);
const tankList = lazy(() => import("./views/apps/ro-configuration/TankList"));
///////// ro-configration (Dealer Lists)  ///////////
const DealerListForTank = lazy(() =>
  import("./views/apps/ro-configuration/DealerListForTank")
);
const DealerListForNozzle = lazy(() =>
  import("./views/apps/ro-configuration/DealerListForNozzle")
);
const DealerListForPaymentMode = lazy(() =>
  import("./views/apps/ro-configuration/DealerListForPaymentMode")
);
const DealerListForCreditCus = lazy(() =>
  import("./views/apps/ro-configuration/DealerListForCreditCus")
);
const DealerListforBankofTrans = lazy(() =>
  import("./views/apps/ro-configuration/DealerListforBankofTrans")
);
// ro-configration (Dealer Lists)   //////////
const otherEquipment = lazy(() =>
  import("./views/apps/ro-configuration/OtherEquipment")
);
const paymentModeAvalable = lazy(() =>
  import("./views/apps/ro-configuration/PaymentModeAvalable")
);
const PaymentModeList = lazy(() =>
  import("./views/apps/ro-configuration/PaymentModeList")
);
const designYourOutlet = lazy(() =>
  import("./views/apps/ro-configuration/DesignYourOutlet")
);
const designYourOutletList = lazy(() =>
  import("./views/apps/ro-configuration/DesignYourOutletList")
);
// const bankForTransaction = lazy(() =>
//   import("./views/apps/ro-configuration/BankForTransaction")
// );
const bankForTransactionList = lazy(() =>
  import("./views/apps/ro-configuration/BankForTransactionList")
);
// const viewBankForTransaction = lazy(() =>
//   import("./views/apps/ro-configuration/ViewBankForTransaction")
// );
const editBankForTransaction = lazy(() =>
  import("./views/apps/ro-configuration/EditBankForTransaction")
);
const CreditCustomersList = lazy(() =>
  import("./views/apps/ro-configuration/CreditCustomersList")
);
const BasicDetailsList = lazy(() =>
  import("./views/apps/ro-configuration/BasicDetailsList")
);
const BasicDetails = lazy(() =>
  import("./views/apps/ro-configuration/BasicDetails")
);
const OtherEquipmentList = lazy(() =>
  import("./views/apps/ro-configuration/OtherEquipmentList")
);
const DealerListForOtherEquip = lazy(() =>
  import("./views/apps/ro-configuration/DealerListForOtherEquip")
);
const creditCustomersForm = lazy(() =>
  import("./views/apps/ro-configuration/CreditCustomersForm")
);

//////////////////////////////////////////// ro-configuration -- end //////////////////////////////////////////

////////////////////////// staffEnrollment --- start ////////////
const DealerListForManager = lazy(() =>
  import("./views/apps/staffEnrollment/DealerListForManager")
);
const ManagerList = lazy(() =>
  import("./views/apps/staffEnrollment/ManagerList")
);
const DealerListForDSM = lazy(() =>
  import("./views/apps/staffEnrollment/DealerListForDSM")
);

const manager = lazy(() => import("./views/apps/staffEnrollment/Manager"));
const addDMS = lazy(() => import("./views/apps/staffEnrollment/AddDMS"));
const dMSList = lazy(() => import("./views/apps/staffEnrollment/DMSList"));
const addOtherStaff = lazy(() =>
  import("./views/apps/staffEnrollment/AddOtherStaff")
);
const DealerListForOtherStaff = lazy(() =>
  import("./views/apps/staffEnrollment/DealerListForOtherStaff")
);
const OtherStaffList = lazy(() =>
  import("./views/apps/staffEnrollment/OtherStaffList")
);

// cashmanagement
const DealerListForStatus = lazy(() =>
  import("./views/apps/cashmanagement/DealerListForStatus")
);
const DealerListForHSDStock = lazy(() =>
  import("./views/apps/cashmanagement/status/DealerListForHSDStock")
);
const HSDStockList = lazy(() =>
  import("./views/apps/cashmanagement/status/HSDStockList")
);
const DealerListForLubricant = lazy(() =>
  import("./views/apps/cashmanagement/status/DealerListForLubricant")
);
const LubricantList = lazy(() =>
  import("./views/apps/cashmanagement/status/LubricantList")
);
const DealerListForMSStock = lazy(() =>
  import("./views/apps/cashmanagement/status/DealerListForMSStock")
);
const MSStockList = lazy(() =>
  import("./views/apps/cashmanagement/status/MSStockList")
);

const DealerListForNetProfit = lazy(() =>
  import("./views/apps/cashmanagement/status/DealerListForNetProfit")
);
const DealerListForPaymentModeLists = lazy(() =>
  import("./views/apps/cashmanagement/status/DealerListForPaymentModeLists")
);
const NetProfitList = lazy(() =>
  import("./views/apps/cashmanagement/status/NetProfitList")
);
const PaymentModeLists = lazy(() =>
  import("./views/apps/cashmanagement/status/PaymentModeLists")
);
const DealerListForExpenses = lazy(() =>
  import("./views/apps/cashmanagement/DealerListForExpenses")
);
const ExpensesList = lazy(() =>
  import("./views/apps/cashmanagement/ExpensesList")
);
const DealerListForOnlinePayment = lazy(() =>
  import("./views/apps/cashmanagement/DealerListForOnlinePayment")
);
const OnlinePaymentList = lazy(() =>
  import("./views/apps/cashmanagement/OnlinePaymentList")
);
const DealerListForBankDeposite = lazy(() =>
  import("./views/apps/cashmanagement/DealerListForBankDeposite")
);
const BankDepositeList = lazy(() =>
  import("./views/apps/cashmanagement/BankDepositeList")
);
const DealerListForCreditManagement = lazy(() =>
  import("./views/apps/cashmanagement/DealerListForCreditManagement")
);
const CreditManagementList = lazy(() =>
  import("./views/apps/cashmanagement/CreditManagementList")
);

// setting
const addBank = lazy(() => import("./views/apps/setting/bank/AddBank"));
const bankList = lazy(() => import("./views/apps/setting/bank/BankList"));
const editBank = lazy(() => import("./views/apps/setting/bank/EditBank"));
const viewBank = lazy(() => import("./views/apps/setting/bank/ViewBank"));

const mOCList = lazy(() => import("./views/apps/setting/moc/MOCList"));
const addMOC = lazy(() => import("./views/apps/setting/moc/AddMOC"));
const editMOC = lazy(() => import("./views/apps/setting/moc/EditMOC"));
const viewMOC = lazy(() => import("./views/apps/setting/moc/ViewMOC"));
const addTank = lazy(() => import("./views/apps/setting/tank/AddTank"));
// const tankList = lazy(() => import("./views/apps/setting/tank/TankList"));
const bayList = lazy(() => import("./views/apps/setting/bay/BayList"));
const addBay = lazy(() => import("./views/apps/setting/bay/AddBay"));
const enquiryForm = lazy(() => import("./views/apps/setting/EnquiryForm"));

const grid = lazy(() => import("./views/ui-elements/grid/Grid"));
const typography = lazy(() =>
  import("./views/ui-elements/typography/Typography")
);
const textutilities = lazy(() =>
  import("./views/ui-elements/text-utilities/TextUtilities")
);
const syntaxhighlighter = lazy(() =>
  import("./views/ui-elements/syntax-highlighter/SyntaxHighlighter")
);
const colors = lazy(() => import("./views/ui-elements/colors/Colors"));
const reactfeather = lazy(() =>
  import("./views/ui-elements/icons/FeatherIcons")
);
const basicCards = lazy(() => import("./views/ui-elements/cards/basic/Cards"));
const statisticsCards = lazy(() =>
  import("./views/ui-elements/cards/statistics/StatisticsCards")
);
const analyticsCards = lazy(() =>
  import("./views/ui-elements/cards/analytics/Analytics")
);
const actionCards = lazy(() =>
  import("./views/ui-elements/cards/actions/CardActions")
);
const Alerts = lazy(() => import("./components/reactstrap/alerts/Alerts"));
const Buttons = lazy(() => import("./components/reactstrap/buttons/Buttons"));
const Breadcrumbs = lazy(() =>
  import("./components/reactstrap/breadcrumbs/Breadcrumbs")
);
const Carousel = lazy(() =>
  import("./components/reactstrap/carousel/Carousel")
);
const Collapse = lazy(() =>
  import("./components/reactstrap/collapse/Collapse")
);
const Dropdowns = lazy(() =>
  import("./components/reactstrap/dropdowns/Dropdown")
);
const ListGroup = lazy(() =>
  import("./components/reactstrap/listGroup/ListGroup")
);
const Modals = lazy(() => import("./components/reactstrap/modal/Modal"));
const Pagination = lazy(() =>
  import("./components/reactstrap/pagination/Pagination")
);
const NavComponent = lazy(() =>
  import("./components/reactstrap/navComponent/NavComponent")
);
const Navbar = lazy(() => import("./components/reactstrap/navbar/Navbar"));
const Tabs = lazy(() => import("./components/reactstrap/tabs/Tabs"));
const TabPills = lazy(() =>
  import("./components/reactstrap/tabPills/TabPills")
);
const Tooltips = lazy(() =>
  import("./components/reactstrap/tooltips/Tooltips")
);
const Popovers = lazy(() =>
  import("./components/reactstrap/popovers/Popovers")
);
const Badge = lazy(() => import("./components/reactstrap/badge/Badge"));
const BadgePill = lazy(() =>
  import("./components/reactstrap/badgePills/BadgePill")
);
const Progress = lazy(() =>
  import("./components/reactstrap/progress/Progress")
);
const Media = lazy(() => import("./components/reactstrap/media/MediaObject"));
const Spinners = lazy(() =>
  import("./components/reactstrap/spinners/Spinners")
);
const avatar = lazy(() => import("./components/@vuexy/avatar/Avatar"));
const AutoComplete = lazy(() =>
  import("./components/@vuexy/autoComplete/AutoComplete")
);
const chips = lazy(() => import("./components/@vuexy/chips/Chips"));
const divider = lazy(() => import("./components/@vuexy/divider/Divider"));
const vuexyWizard = lazy(() => import("./components/@vuexy/wizard/Wizard"));
const listView = lazy(() => import("./views/ui-elements/data-list/ListView"));
const thumbView = lazy(() => import("./views/ui-elements/data-list/ThumbView"));
const select = lazy(() => import("./views/forms/form-elements/select/Select"));
const switchComponent = lazy(() =>
  import("./views/forms/form-elements/switch/Switch")
);
const checkbox = lazy(() =>
  import("./views/forms/form-elements/checkboxes/Checkboxes")
);
const radio = lazy(() => import("./views/forms/form-elements/radio/Radio"));
const input = lazy(() => import("./views/forms/form-elements/input/Input"));
const group = lazy(() =>
  import("./views/forms/form-elements/input-groups/InputGoups")
);
const numberInput = lazy(() =>
  import("./views/forms/form-elements/number-input/NumberInput")
);
const textarea = lazy(() =>
  import("./views/forms/form-elements/textarea/Textarea")
);
const pickers = lazy(() =>
  import("./views/forms/form-elements/datepicker/Pickers")
);
const inputMask = lazy(() =>
  import("./views/forms/form-elements/input-mask/InputMask")
);
const layout = lazy(() => import("./views/forms/form-layouts/FormLayouts"));
const formik = lazy(() => import("./views/forms/formik/Formik"));
const tables = lazy(() => import("./views/tables/reactstrap/Tables"));
const ReactTables = lazy(() =>
  import("./views/tables/react-tables/ReactTables")
);
const Aggrid = lazy(() => import("./views/tables/aggrid/Aggrid"));
const DataTable = lazy(() => import("./views/tables/data-tables/DataTables"));
const profile = lazy(() => import("./views/pages/profile/Profile"));
const faq = lazy(() => import("./views/pages/faq/FAQ"));


const knowledgeBase = lazy(() =>
  import("./views/pages/knowledge-base/KnowledgeBase")
);
const search = lazy(() => import("./views/pages/search/Search"));
const accountSettings = lazy(() =>
  import("./views/pages/account-settings/AccountSettings")
);
const invoice = lazy(() => import("./views/pages/invoice/Invoice"));
const comingSoon = lazy(() => import("./views/pages/misc/ComingSoon"));
const error404 = lazy(() => import("./views/pages/misc/error/404"));
const error500 = lazy(() => import("./views/pages/misc/error/500"));
const authorized = lazy(() => import("./views/pages/misc/NotAuthorized"));
const maintenance = lazy(() => import("./views/pages/misc/Maintenance"));
const apex = lazy(() => import("./views/charts/apex/ApexCharts"));
const chartjs = lazy(() => import("./views/charts/chart-js/ChartJS"));
const extreme = lazy(() => import("./views/charts/recharts/Recharts"));
const leafletMaps = lazy(() => import("./views/maps/Maps"));
const toastr = lazy(() => import("./extensions/toastify/Toastify"));
const sweetAlert = lazy(() => import("./extensions/sweet-alert/SweetAlert"));
const rcSlider = lazy(() => import("./extensions/rc-slider/Slider"));
const uploader = lazy(() => import("./extensions/dropzone/Dropzone"));
const editor = lazy(() => import("./extensions/editor/Editor"));
const drop = lazy(() => import("./extensions/drag-and-drop/DragAndDrop"));
const tour = lazy(() => import("./extensions/tour/Tour"));
const clipboard = lazy(() =>
  import("./extensions/copy-to-clipboard/CopyToClipboard")
);
const menu = lazy(() => import("./extensions/contexify/Contexify"));
const swiper = lazy(() => import("./extensions/swiper/Swiper"));
const i18n = lazy(() => import("./extensions/i18n/I18n"));
const reactPaginate = lazy(() => import("./extensions/pagination/Pagination"));
const tree = lazy(() => import("./extensions/treeview/TreeView"));
const Import = lazy(() => import("./extensions/import-export/Import"));
const Export = lazy(() => import("./extensions/import-export/Export"));
const ExportSelected = lazy(() =>
  import("./extensions/import-export/ExportSelected")
);
const userList = lazy(() => import("./views/apps/user/list/List"));
const userEdit = lazy(() => import("./views/apps/user/edit/Edit"));
const userView = lazy(() => import("./views/apps/user/view/View"));
const Login = lazy(() => import("./views/pages/authentication/login/Login"));
const forgotPassword = lazy(() =>
  import("./views/pages/authentication/ForgotPassword")
);
const lockScreen = lazy(() =>
  import("./views/pages/authentication/LockScreen")
);
const resetPassword = lazy(() =>
  import("./views/pages/authentication/ResetPassword")
);
const register = lazy(() =>
  import("./views/pages/authentication/register/Register")
);
const accessControl = lazy(() =>
  import("./extensions/access-control/AccessControl")
);

const otpVerify = lazy(() =>
  import("./views/pages/authentication/OtpVerify")
);
const otpScreen = lazy(() =>
  import("./views/pages/authentication/OtpScreen")
);

// Set Layout and Component Using App Route
const RouteConfig = ({ component: Component, fullLayout, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      return (
        <ContextLayout.Consumer>
          {(context) => {
            let LayoutTag =
              fullLayout === true
                ? context.fullLayout
                : context.state.activeLayout === "horizontal"
                ? context.horizontalLayout
                : context.VerticalLayout;
            return (
              <LayoutTag {...props} permission={props.user}>
                <Suspense fallback={<Spinner />}>
                  <Component {...props} />
                </Suspense>
              </LayoutTag>
            );
          }}
        </ContextLayout.Consumer>
      );
    }}
  />
);
const mapStateToProps = (state) => {
  return {
    user: state.auth.login.userRole,
  };
};

const AppRoute = connect(mapStateToProps)(RouteConfig);

class AppRouter extends React.Component {
  componentDidMount() {
    let data = localStorage.getItem("auth");
    sessionStorage.clear();
    if (data === undefined || data === null) {
      //history.push("/#/pages/login")

       window.location.replace("/#/pages/login");
     
    }
  }
  render() {
    return (
      // Set the directory path if you are deploying in sub-folder

      <Router history={history}>
        <HashRouter>
          <Switch>
            {/*<AppRoute exact={true} path="/" component={home} fullLayout /> */}
            <AppRoute exact={true} path="/" component={analyticsDashboard} />
            <AppRoute
              exact={true}
              path="/ecommerce-dashboard"
              component={ecommerceDashboard}
            />
            {/* //////////////////////////////////  ro-configuration -- start ///////////////*/}
            <AppRoute
              exact={true}
              path="/app/ro-configuration/outletList"
              component={outletList}
            />
            <AppRoute
              exact={true}
              path="/app/ro-configuration/basicDetailsList"
              component={BasicDetailsList}
            />
            <AppRoute
              exact={true}
              path="/app/ro-configuration/otherEquipmentList/:id"
              component={OtherEquipmentList}
            />
            <AppRoute
              exact={true}
              path="/app/ro-configuration/dealerListForOtherEquip"
              component={DealerListForOtherEquip}
            />
            <AppRoute
              exact={true}
              path="/app/ro-configuration/creditCustomersList/:id"
              component={CreditCustomersList}
            />
            <AppRoute
              exact={true}
              path="/app/ro-configuration/basicDetails/:id"
              component={BasicDetails}
            />
          
            <AppRoute
              exact={true}
              path="/app/ro-configuration/otherEquipment/:id"
              component={otherEquipment}
            />
          
            <AppRoute
              exact={true}
              path="/app/ro-configuration/editBankForTransaction/:id"
              component={editBankForTransaction}
            />
          
            <AppRoute
              exact={true}
              path="/app/ro-configuration/bankForTransactionList/:id"
              component={bankForTransactionList}
            />
            <AppRoute
              exact={true}
              path="/app/ro-configuration/paymentModeAvalable/:id"
              component={paymentModeAvalable}
            />
            <AppRoute
              exact={true}
              path="/app/ro-configuration/paymentModeList/:id"
              component={PaymentModeList}
            />
            <AppRoute
              exact={true}
              path="/app/ro-configuration/designYourOutlet/:id"
              component={designYourOutlet}
            />
            <AppRoute
              exact={true}
              path="/app/ro-configuration/designYourOutletList"
              component={designYourOutletList}
            />
            <AppRoute
              exact={true}
              path="/app/ro-configuration/creditCustomersForm/:id"
              component={creditCustomersForm}
            />
            <AppRoute
              exact={true}
              path="/app/ro-configuration/dealerListForCreditCus"
              component={DealerListForCreditCus}
            />
            <AppRoute
              exact={true}
              path="/app/ro-configuration/outletForm/:id"
              component={outletForm}
            />
            <AppRoute
              exact={true}
              path="/app/ro-configuration/tankMapList/:id"
              component={tankMapList}
            />
            <AppRoute
              exact={true}
              path="/app/ro-configuration/editTankMap/:id"
              component={editTankMap}
            />
            <AppRoute
              exact={true}
              path="/app/ro-configuration/nozzleMapList/:id"
              component={nozzleMapList}
            />
            <AppRoute
              exact={true}
              path="/app/ro-configuration/editNozzleMap/:id"
              component={editNozzleMap}
            />
            <AppRoute
              exact={true}
              path="/app/ro-configuration/nozzleList/:id"
              component={nozzleList}
            />
            <AppRoute
              exact={true}
              path="/app/ro-configuration/tankMapList/:id"
              component={tankMapList}
            />
            <AppRoute
              exact={true}
              path="/app/ro-configuration/tankList/:id"
              component={tankList}
            />
            <AppRoute
              exact={true}
              path="/app/ro-configuration/dealerListForTank"
              component={DealerListForTank}
            />
            <AppRoute
              exact={true}
              path="/app/ro-configuration/dealerListForNozzle"
              component={DealerListForNozzle}
            />
            <AppRoute
              exact={true}
              path="/app/ro-configuration/dealerListForPaymentMode"
              component={DealerListForPaymentMode}
            />
            <AppRoute
              exact={true}
              path="/app/ro-configuration/dealerListforBankofTrans"
              component={DealerListforBankofTrans}
            />
            {/*//////////////////////////////////  ro-configuration -- end /////////////////////*/}
            {/*////////////////////////////////////  stockManagement -- start   /////////////////////////////*/}
            <AppRoute
              exact={true}
              path="/app/stockManagement/dealerListForFuelStock"
              component={DealerListForFuelStock}
            />
            <AppRoute
              exact={true}
              path="/app/stockManagement/fuelStockList/:id"
              component={FuelStockList}
            />
            <AppRoute
              exact={true}
              path="/app/stockManagement/fuelStock"
              component={FuelStock}
            />
            <AppRoute
              exact={true}
              path="/app/stockManagement/dealerListForLubeStock"
              component={DealerListForLubeStock}
            />
            <AppRoute
              exact={true}
              path="/app/stockManagement/lubeStockList/:id"
              component={LubeStockList}
            />
            <AppRoute
              exact={true}
              path="/app/stockManagement/lubeStockForm/:id"
              component={LubeStockForm}
            />
            <AppRoute
              exact={true}
              path="/app/stockManagement/dealerListForProductReceipt"
              component={DealerListForProductReceipt}
            />
            <AppRoute
              exact={true}
              path="/app/stockManagement/productReceiptList/:id"
              component={ProductReceiptList}
            />
            <AppRoute
              exact={true}
              path="/app/stockManagement/receiptForm/:id"
              component={ReceiptForm}
            />
            {/*///////////////////////////////// facilityManagement start //////////////////////////////////////////////////*/}
            <AppRoute
              exact={true}
              path="/app/facilityManagement/statutoryCertificateManagementList/:id"
              component={StatutoryCertificateManagementList}
            /> 
            <AppRoute
            exact={true}
            path="/app/facilityManagement/statutoryCertificateManagement/dealerListForStatutoryCertificateManagementList"
            component={DealerListForStatutoryCertificateManagementList}
          />
   <AppRoute
            exact={true}
            path="/app/facilityManagement/statutoryCertificateManagement/dealerListForlCan"
            component={DealerListForlCan}
          />
           <AppRoute
            exact={true}
            path="/app/facilityManagement/statutoryCertificateManagement/lCan/:id"
            component={LCan}
          />
             <AppRoute
            exact={true}
            path="/app/facilityManagement/statutoryCertificateManagement/dealerListForAddOtherDocument"
            component={DealerListForAddOtherDocument}
          />
              <AppRoute
            exact={true}
            path="/app/facilityManagement/statutoryCertificateManagement/AddOtherDocument/:id"
            component={AddOtherDocument}
          />
          
             <AppRoute
            exact={true}
            path="/app/facilityManagement/statutoryCertificateManagement/dealerListForAirGaugage1"
            component={DealerListForAirGaugage1}
          />
            <AppRoute
            exact={true}
            path="/app/facilityManagement/statutoryCertificateManagement/AirGaugage1/:id"
            component={AirGaugage1}
          />
             <AppRoute
            exact={true}
            path="/app/facilityManagement/statutoryCertificateManagement/dealerListForDPSL"
            component={DealerListForDPSL}
          />
              <AppRoute
            exact={true}
            path="/app/facilityManagement/statutoryCertificateManagement/DPSL/:id"
            component={DPSL}
          />
             <AppRoute
            exact={true}
            path="/app/facilityManagement/statutoryCertificateManagement/dealerListForHydrometer"
            component={DealerListForHydrometer}
          />
            <AppRoute
            exact={true}
            path="/app/facilityManagement/statutoryCertificateManagement/Hydrometer/:id"
            component={Hydrometer}
          />
             <AppRoute
            exact={true}
            path="/app/facilityManagement/statutoryCertificateManagement/dealerListForPESOLicense"
            component={DealerListForPESOLicense}
          />
             <AppRoute
            exact={true}
            path="/app/facilityManagement/statutoryCertificateManagement/PESOLicense/:id"
            component={PESOLicense}
          />
             <AppRoute
            exact={true}
            path="/app/facilityManagement/statutoryCertificateManagement/dealerListForThermometer"
            component={DealerListForThermometer}
          />
               <AppRoute
            exact={true}
            path="/app/facilityManagement/statutoryCertificateManagement/Thermometer/:id"
            component={Thermometer}
          />
 
            <AppRoute
              exact={true}
              path="/app/facilityManagement/stampingDataList/:id"
              component={StampingDataList}
            />
               <AppRoute
              exact={true}
              path="/app/facilityManagement/dealerListForStampingData"
              component={DealerListForStampingData}
            />
           
            <AppRoute
              exact={true}
              path="/app/facilityManagement/stampingDataForm/:id"
              component={StampingDataForm}
            />
            <AppRoute
              exact={true}
              path="/app/facilityManagement/otherEquipmentList/:id"
              component={otherEquipmentList}
            />
               <AppRoute
              exact={true}
              path="/app/facilityManagement/dealerListForOtherEquipment"
              component={dealerListForOtherEquipment}
            />
            
            <AppRoute
              exact={true}
              path="/app/facilityManagement/otherEquipmentForm/:id"
              component={OtherEquipmentForm}
            />
            <AppRoute
              exact={true}
              path="/app/facilityManagement/mpdManagement/:id"
              component={MpdManagement}
            />
              <AppRoute
              exact={true}
              path="/app/facilityManagement/dealerListForMpdManagement"
              component={DealerListForMpdManagement}
            />
            <AppRoute
              exact={true}
              path="/app/facilityManagement/raiseConcernToAESList/:id"
              component={RaiseConcernToAESList}
            />
             <AppRoute
              exact={true}
              path="/app/facilityManagement/dealerListForRaiseConcernToAES"
              component={DealerListForRaiseConcernToAES}
            />
            
            <AppRoute
              exact={true}
              path="/app/facilityManagement/raiseConcernToAESForm/:id"
              component={RaiseConcernToAESForm}
            />
             <AppRoute
              exact={true}
              path="/app/facilitymanagement/otherEquipment/delaerListForDataFromRoConfigration"
              component={DealerListDataFromRoConfigration}
            />
             <AppRoute
              exact={true}
              path="/app/facilitymanagement/otherEquipment/dealerListForFireEquipment"
              component={DealerListForFireEquipment}
            />
             <AppRoute
              exact={true}
              path="/app/facilityManagement/otherEquipment/editDataFromRoConfigration/:id"
              component={EditDataFromRoConfigration}
            />
             <AppRoute
              exact={true}
              path="/app/facilityManagement/otherEquipment/listForDataFromRoConfigration/:id"
              component={ListForDataFromRoConfigration}
            />
             <AppRoute
              exact={true}
              path="/app/facilityManagement/otherEquipment/listForFireEquipment/:id"
              component={ListForFireEquipment}
            />











            {/*///////////////////////////////  shiftManagement --start  //////////////////////////*/}
            <AppRoute
              path="/app/shiftmanagement/rsp/addRsp"
              component={AddRsp}

            />
            {/* <AppRoute
              path="/app/shiftmanagement/AddCashCollection"
              component={AddCashCollection}
            /> */}
            <AppRoute path="/app/shiftmanagement/rsp/addBm" component={AddBm} />
            <AppRoute
              path="/app/shiftmanagement/rsp/addDsmClosing"
              component={AddDsmClosing}
            />
            <AppRoute
              path="/app/shiftmanagement/dealerListInRSP"
              component={DealerListInRSP}
            />
            <AppRoute
              path="/app/shiftmanagement/retailSellingPriceList/:id"
              component={RetailSellingPriceList}
            />
            <AppRoute
              path="/app/shiftmanagement/retailSellingPriceForm/:id"
              component={RetailSellingPriceForm}
            />
            <AppRoute
              path="/app/shiftmanagement/dealerListForBayMang"
              component={DealerListForBayMang}
            />
            <AppRoute
              path="/app/shiftmanagement/bayManagementList/:id"
              component={BayManagementList}
            />
            <AppRoute
              path="/app/shiftmanagement/bayManagementForm/:id"
              component={BayManagementForm}
            />
            <AppRoute
              path="/app/shiftManagement/dealerListForDSMClosing"
              component={DealerListForDSMClosing}
            />
            <AppRoute
              path="/app/shiftManagement/dSMClosingSheetList/:id"
              component={DSMClosingSheetList}
            />
            <AppRoute
              path="/app/shiftManagement/dSMClosingSheetForm/:id"
              component={DSMClosingSheetForm}
            />
            <AppRoute
              path="/app/shiftManagement/dealerListForCashCollection"
              component={DealerListForCashCollection}
            />
            <AppRoute
              path="/app/shiftManagement/cashCollectionList/:id"
              component={CashCollectionList}
            />
            <AppRoute
              path="/app/shiftManagement/cashCollectionForm/:id"
              component={CashCollectionForm}
            />
            <AppRoute
              path="/app/shiftManagement/dealerListForSalesFigure"
              component={DealerListForSalesFigure}
            />
            <AppRoute
              path="/app/shiftManagement/salesFigureList/:id"
              component={SalesFigureList}
            />
            <AppRoute
              path="/app/shiftManagement/salesFigureForm"
              component={SalesFigureForm}
            />
            <AppRoute
              path="/app/shiftManagement/dealerListForCreditGivento"
              component={DealerListForCreditGivento}
            />
            <AppRoute
              path="/app/shiftManagement/creditGivenList/:id"
              component={CreditGivenList}
            />
            <AppRoute
              path="/app/shiftManagement/creditGivenForm/:id"
              component={CreditGivenForm}
            />
            <AppRoute
              path="/app/shiftManagement/lubricantForm/:id"
              component={lubricantForm}
            />
            <AppRoute
              path="/app/shiftManagement/dealerListForLubricantSales"
              component={DealerListForLubricantSales}
            />
            <AppRoute
              path="/app/shiftManagement/lubricantSalesList/:id"
              component={LubricantSalesList}
            />
            <AppRoute
              path="/app/shiftManagement/dealerListForStaffAttendence"
              component={DealerListForStaffAttendence}
            />
            <AppRoute
              path="/app/shiftManagement/staffAttendanceList/:id"
              component={StaffAttendanceList}
            />
            <AppRoute
              path="/app/shiftManagement/staffAttendanceForm/:id"
              component={StaffAttendanceForm}
            />
            {/*///////////////////////////////  shiftManagement --end  //////////////////////////*/}
            {/*//////////////////////////////////////   staffEnrollment --start    //////////////////////////////*/}
            <AppRoute
              exact={true}
              path="/app/staffEnrollment/dealerListForManager"
              component={DealerListForManager}
            />
            <AppRoute
              exact={true}
              path="/app/staffEnrollment/managerList/:id"
              component={ManagerList}
            />
            <AppRoute
              exact={true}
              path="/app/staffEnrollment/dealerListForDSM"
              component={DealerListForDSM}
            />
            <AppRoute
              exact={true}
              path="/app/shiftmanagement/staffnotificationlist"
              component={staffnotificationList}
            />
            <AppRoute
              exact={true}
              path="/app/staffEnrollment/AddDMS/:id"
              component={addDMS}
            />
            <AppRoute
              exact={true}
              path="/app/staffEnrollment/AddOtherStaff/:id"
              component={addOtherStaff}
            />
            <AppRoute
              exact={true}
              path="/app/staffEnrollment/dealerListForOtherStaff"
              component={DealerListForOtherStaff}
            />
            <AppRoute
              exact={true}
              path="/app/staffEnrollment/otherStaffList/:id"
              component={OtherStaffList}
            />
            <AppRoute
              exact={true}
              path="/app/staffEnrollment/Manager/:id"
              component={manager}
            />
            <AppRoute
              exact={true}
              path="/app/staffEnrollment/DMSList/:id"
              component={dMSList}
            />
          
            {/*//////////////////////////////////////   staffEnrollment --end    //////////////////////////////*/}
            {/*///////////////////////  cashManagement -- start ////////////////////////////*/}
            <AppRoute
              exact={true}
              path="/app/cashManagement/dealerListForStatus"
              component={DealerListForStatus}
            />
             <AppRoute
              exact={true}
              path="/app/cashManagement/status/dealerListForHSDStock"
              component={DealerListForHSDStock}
            />
              <AppRoute
              exact={true}
              path="/app/cashManagement/status/hsdStockList/:id"
              component={HSDStockList}
            />
              <AppRoute
              exact={true}
              path="/app/cashManagement/status/dealerListForLubricant"
              component={DealerListForLubricant}
            />
              <AppRoute
              exact={true}
              path="/app/cashManagement/status/lubricantList/:id"
              component={LubricantList}
            />
            
              <AppRoute
              exact={true}
              path="/app/cashManagement/status/dealerListForMSStock"
              component={DealerListForMSStock}
            />
               <AppRoute
              exact={true}
              path="/app/cashManagement/status/msStockList/:id"
              component={MSStockList}
            />
              <AppRoute
              exact={true}
              path="/app/cashManagement/status/dealerListForNetProfit"
              component={DealerListForNetProfit}
            />
              <AppRoute
              exact={true}
              path="/app/cashManagement/status/dealerListForPaymentModeLists"
              component={DealerListForPaymentModeLists}
            />
                <AppRoute
              exact={true}
              path="/app/cashManagement/status/paymentModeLists/:id"
              component={PaymentModeLists}
            />
            
            <AppRoute
              exact={true}
              path="/app/cashManagement/dealerListForExpenses"
              component={DealerListForExpenses}
            />
            <AppRoute
              exact={true}
              path="/app/cashManagement/expensesList/:id"
              component={ExpensesList}
            />
            <AppRoute
              exact={true}
              path="/app/cashManagement/dealerListForOnlinePayment"
              component={DealerListForOnlinePayment}
            />
            <AppRoute
              exact={true}
              path="/app/cashManagement/onlinePaymentList/:id"
              component={OnlinePaymentList}
            />
            <AppRoute
              exact={true}
              path="/app/cashManagement/dealerListForBankDeposite"
              component={DealerListForBankDeposite}
            />
            <AppRoute
              exact={true}
              path="/app/cashManagement/bankDepositeList/:id"
              component={BankDepositeList}
            />
            <AppRoute
              exact={true}
              path="/app/cashManagement/dealerListForCreditManagement"
              component={DealerListForCreditManagement}
            />
            <AppRoute
              exact={true}
              path="/app/cashManagement/creditManagementList/:id"
              component={CreditManagementList}
            />
               <AppRoute
              exact={true}
              path="/app/cashManagement/status/netProfitList/:id"
              component={NetProfitList}
            />
            {/*///////////////////////  cashManagement -- end ////////////////////////////*/}
            {/* setting */}
            <AppRoute
              exact={true}
              path="/app/setting/bank/bankList"
              component={bankList}
            />
            <AppRoute
              exact={true}
              path="/app/setting/bank/addBank"
              component={addBank}
            />
            <AppRoute
              exact={true}
              path="/app/setting/bank/editBank/:id"
              component={editBank}
            />
            <AppRoute
              exact={true}
              path="/app/setting/bank/viewBank/:id"
              component={viewBank}
            />
            <AppRoute
              exact={true}
              path="/app/setting/moc/mOCList"
              component={mOCList}
            />
            <AppRoute
              exact={true}
              path="/app/setting/moc/editMOC"
              component={editMOC}
            />
            <AppRoute
              exact={true}
              path="/app/setting/moc/addMOC"
              component={addMOC}
            />
            <AppRoute
              exact={true}
              path="/app/setting/moc/viewMOC"
              component={viewMOC}
            />
            <AppRoute
              exact={true}
              path="/app/setting/enquiryForm"
              component={enquiryForm}
            />
            <AppRoute
              exact={true}
              path="/app/setting/tank/addTank"
              component={addTank}
            />
            <AppRoute
              exact={true}
              path="/app/setting/bay/bayList"
              component={bayList}
            />
            <AppRoute
              exact={true}
              path="/app/setting/bay/addBay"
              component={addBay}
            />
            <AppRoute
              exact={true}
              path="/email"
              component={() => <Redirect to="/email/inbox" />}
            />
            {/* my componet */}
            <AppRoute
              exact={true}
              path="/app/dealer/dealerList"
              component={dealerList}
            />
            <AppRoute
              exact={true}
              path="/app/dealer/editDealer/:id"
              component={editDealer}
            />
            <AppRoute
              exact={true}
              path="/app/dealer/viewDealer/:id"
              component={viewDealer}
            />
          
            <AppRoute
              exact={true}
              path="/app/subplan/subplanvideos"
              component={subplanvideos}
            />
            <AppRoute
              exact={true}
              path="/app/subplan/editSubplanvideos/:id"
              component={editSubplanvideos}
            />
            <AppRoute
              exact={true}
              path="/app/subplan/addPlan"
              component={addPlan}
            />
             <AppRoute
              exact={true}
              path="/app/traningvideo/traningVideoList"
              component={TraningVideoList}
            />
              <AppRoute
              exact={true}
              path="/app/traningvideo/editTraningVideo/:id"
              component={EditTraningVideo}
            /> 
                <AppRoute
              exact={true}
              path="/app/traningvideo/addTraningVideo"
              component={AddTraningVideo}
            /> 
               
            <AppRoute
              exact={true}
              path="/todo"
              component={() => <Redirect to="/todo/all" />}
            />
           
            <AppRoute exact={true} path="/ecommerce/shop" component={shop} />
            <AppRoute
              exact={true}
              path="/ecommerce/product-detail"
              component={productDetail}
            />
            <AppRoute
              exact={true}
              path="/app/about/aboutUs"
              component={aboutUs}
            />
            
            <AppRoute
              exact={true}
              path="/app/about/AllaboutUs"
              component={AllaboutUs}
            />
            <AppRoute
              exact={true}
              path="/app/about/EditAboutUs/:id"
              component={EditAboutUs}
            />
            
             <AppRoute
              exact={true}
              path="/app/termscondition/AddTermsCondition"
              component={AddTermsCondition}
            />
              <AppRoute
              exact={true}
              path="/app/termscondition/EditTermCondition/:id"
              component={EditTermCondition}
            />
              <AppRoute
              exact={true}
              path="/app/termscondition/TermConditionList"
              component={TermConditionList}
            />
           
            <AppRoute
              exact={true}
              path="/app/helpUs/HelpUs"
              component={helpUs}
            />
            <AppRoute
              exact={true}
              path="/app/helpUs/EdithelpusForm/:id"
              component={EdithelpusForm}
            />
             <AppRoute
              exact={true}
              path="/app/helpUs/ViewHelpUs/:id"
              component={ViewHelpUs}
            />
             <AppRoute
              exact={true}
              path="/app/membership/MembershipList"
              component={membershipList}
            />
              <AppRoute
              exact={true}
              path="/app/membership/EditMembership/:id"
              component={editMembership}
            />
           
            
              <AppRoute
              exact={true}
              path="/app/notification/NotificationList"
              component={notificationList}
            />
              
              <AppRoute
              exact={true}
              path="/app/notification/AddNotification"
              component={addNotification}
            />
            
            <AppRoute
              exact={true}
              path="/ecommerce/checkout"
              component={checkout}
              permission="admin"
            />
            <AppRoute
              exact={true}
              path="/data-list/list-view"
              component={listView}
            />
            <AppRoute
              exact={true}
              path="/data-list/thumb-view"
              component={thumbView}
            />
            <AppRoute exact={true} path="/ui-element/grid" component={grid} />
            <AppRoute
              exact={true}
              path="/ui-element/typography"
              component={typography}
            />
            <AppRoute
              exact={true}
              path="/ui-element/textutilities"
              component={textutilities}
            />
            <AppRoute
              exact={true}
              path="/ui-element/syntaxhighlighter"
              component={syntaxhighlighter}
            />
            <AppRoute exact={true} path="/colors/colors" component={colors} />
            <AppRoute
              exact={true}
              path="/icons/reactfeather"
              component={reactfeather}
            />
            <AppRoute exact={true} path="/cards/basic" component={basicCards} />
            <AppRoute
              exact={true}
              path="/cards/statistics"
              component={statisticsCards}
            />
            <AppRoute
              exact={true}
              path="/cards/analytics"
              component={analyticsCards}
            />
            <AppRoute
              exact={true}
              path="/cards/action"
              component={actionCards}
            />
            <AppRoute
              exact={true}
              path="/components/alerts"
              component={Alerts}
            />
            <AppRoute
              exact={true}
              path="/components/buttons"
              component={Buttons}
            />
            <AppRoute
              exact={true}
              path="/components/breadcrumbs"
              component={Breadcrumbs}
            />
            <AppRoute
              exact={true}
              path="/components/carousel"
              component={Carousel}
            />
            <AppRoute
              exact={true}
              path="/components/collapse"
              component={Collapse}
            />
            <AppRoute
              exact={true}
              path="/components/dropdowns"
              component={Dropdowns}
            />
            <AppRoute
              exact={true}
              path="/components/list-group"
              component={ListGroup}
            />
            <AppRoute
              exact={true}
              path="/components/modals"
              component={Modals}
            />
            <AppRoute
              exact={true}
              path="/components/pagination"
              component={Pagination}
            />
            <AppRoute
              exact={true}
              path="/components/nav-component"
              component={NavComponent}
            />
            <AppRoute
              exact={true}
              path="/components/navbar"
              component={Navbar}
            />
            <AppRoute
              exact={true}
              path="/components/tabs-component"
              component={Tabs}
            />
            <AppRoute
              exact={true}
              path="/components/pills-component"
              component={TabPills}
            />
            <AppRoute
              exact={true}
              path="/components/tooltips"
              component={Tooltips}
            />
            <AppRoute
              exact={true}
              path="/components/popovers"
              component={Popovers}
            />
            <AppRoute
              exact={true}
              path="/components/badges"
              component={Badge}
            />
            <AppRoute
              exact={true}
              path="/components/pill-badges"
              component={BadgePill}
            />
            <AppRoute
              exact={true}
              path="/components/progress"
              component={Progress}
            />
            <AppRoute
              exact={true}
              path="/components/media-objects"
              component={Media}
            />
            <AppRoute
              exact={true}
              path="/components/spinners"
              component={Spinners}
            />
            <AppRoute
              exact={true}
              path="/extra-components/auto-complete"
              component={AutoComplete}
            />
            <AppRoute
              exact={true}
              path="/extra-components/avatar"
              component={avatar}
            />
            <AppRoute
              exact={true}
              path="/extra-components/chips"
              component={chips}
            />
            <AppRoute
              exact={true}
              path="/extra-components/divider"
              component={divider}
            />
            <AppRoute
              exact={true}
              path="/forms/wizard"
              component={vuexyWizard}
            />
            <AppRoute
              exact={true}
              path="/forms/elements/select"
              component={select}
            />
            <AppRoute
              exact={true}
              path="/forms/elements/switch"
              component={switchComponent}
            />
            <AppRoute
              exact={true}
              path="/forms/elements/checkbox"
              component={checkbox}
            />
            <AppRoute
              exact={true}
              path="/forms/elements/radio"
              component={radio}
            />
            <AppRoute
              exact={true}
              path="/forms/elements/input"
              component={input}
            />
            <AppRoute
              exact={true}
              path="/forms/elements/input-group"
              component={group}
            />
            <AppRoute
              exact={true}
              path="/forms/elements/number-input"
              component={numberInput}
            />
            <AppRoute
              exact={true}
              path="/forms/elements/textarea"
              component={textarea}
            />
            <AppRoute
              exact={true}
              path="/forms/elements/pickers"
              component={pickers}
            />
            <AppRoute
              exact={true}
              path="/forms/elements/input-mask"
              component={inputMask}
            />
            <AppRoute
              exact={true}
              path="/forms/layout/form-layout"
              component={layout}
            />
            <AppRoute exact={true} path="/forms/formik" component={formik} />{" "}
            <AppRoute
              exact={true}
              path="/tables/reactstrap"
              component={tables}
            />
            <AppRoute
              exact={true}
              path="/tables/react-tables"
              component={ReactTables}
            />
            <AppRoute exact={true} path="/tables/agGrid" component={Aggrid} />
            <AppRoute
              exact={true}
              path="/tables/data-tables"
              component={DataTable}
            />
            <AppRoute exact={true} path="/pages/profile" component={profile} />
            <AppRoute exact={true} path="/pages/faq" component={faq} />
            
            <AppRoute
              exact={true}
              path="/pages/knowledge-base"
              component={knowledgeBase}
            />
            <AppRoute
              exact={true}
              path="/pages/knowledge-base/category"
              component={knowledgeBaseCategory}
            />
            <AppRoute
              exact={true}
              path="/pages/knowledge-base/category/questions"
              component={knowledgeBaseQuestion}
            />
            <AppRoute exact={true} path="/pages/search" component={search} />
            <AppRoute
              exact={true}
              path="/pages/account-settings"
              component={accountSettings}
            />
            <AppRoute exact={true} path="/pages/invoice" component={invoice} />
            <AppRoute
              exact={true}
              path="/misc/coming-soon"
              component={comingSoon}
              fullLayout
            />
            <AppRoute
              exact={true}
              path="/misc/error/404"
              component={error404}
              fullLayout
            />
            <AppRoute
              exact={true}
              path="/pages/login"
              component={Login}
              fullLayout
            />
            <AppRoute
              exact={true}
              path="/pages/register"
              component={register}
              fullLayout
            />
            <AppRoute
              exact={true}
              path="/pages/forgot-password"
              component={forgotPassword}
              fullLayout
            />
            <AppRoute
              exact={true}
              path="/pages/lock-screen"
              component={lockScreen}
              fullLayout
            />
            <AppRoute
              exact={true}
              path="/pages/reset-password/:id"
              component={resetPassword}
              fullLayout
            />
            <AppRoute
              exact={true}
              path="/pages/otp-verify"
              component={otpVerify}
              fullLayout
            />
             <AppRoute
              exact={true}
              path="/pages/otp-Screen"
              component={otpScreen}
              fullLayout
            />
            
            <AppRoute
              exact={true}
              path="/misc/error/500"
              component={error500}
              fullLayout
            />
            <AppRoute
              exact={true}
              path="/misc/not-authorized"
              component={authorized}
              fullLayout
            />
            <AppRoute
              exact={true}
              path="/misc/maintenance"
              component={maintenance}
              fullLayout
            />
            <AppRoute exact={true} path="/app/user/list" component={userList} />
            <AppRoute exact={true} path="/app/user/edit" component={userEdit} />
            <AppRoute exact={true} path="/app/user/view" component={userView} />
            <AppRoute exact={true} path="/charts/apex" component={apex} />
            <AppRoute exact={true} path="/charts/chartjs" component={chartjs} />
            <AppRoute
              exact={true}
              path="/charts/recharts"
              component={extreme}
            />
            <AppRoute
              exact={true}
              path="/maps/leaflet"
              component={leafletMaps}
            />
            <AppRoute
              exact={true}
              path="/extensions/sweet-alert"
              component={sweetAlert}
            />
            <AppRoute
              exact={true}
              path="/extensions/toastr"
              component={toastr}
            />
            <AppRoute
              exact={true}
              path="/extensions/slider"
              component={rcSlider}
            />
            <AppRoute
              exact={true}
              path="/extensions/file-uploader"
              component={uploader}
            />
            <AppRoute
              exact={true}
              path="/extensions/wysiwyg-editor"
              component={editor}
            />
            <AppRoute
              exact={true}
              path="/extensions/drag-and-drop"
              component={drop}
            />
            <AppRoute exact={true} path="/extensions/tour" component={tour} />
            <AppRoute
              exact={true}
              path="/extensions/clipboard"
              component={clipboard}
            />
            <AppRoute
              exact={true}
              path="/extensions/context-menu"
              component={menu}
            />
            <AppRoute
              exact={true}
              path="/extensions/swiper"
              component={swiper}
            />
            <AppRoute
              exact={true}
              path="/extensions/access-control"
              component={accessControl}
            />
            <AppRoute exact={true} path="/extensions/i18n" component={i18n} />
            <AppRoute exact={true} path="/extensions/tree" component={tree} />
            <AppRoute
              exact={true}
              path="/extensions/import"
              component={Import}
            />
            <AppRoute
              exact={true}
              path="/extensions/export"
              component={Export}
            />
            <AppRoute
              exact={true}
              path="/extensions/export-selected"
              component={ExportSelected}
            />
            <AppRoute
              exact={true}
              path="/extensions/pagination"
              component={reactPaginate}
            />
            <AppRoute component={error404} fullLayout />
          </Switch>
        </HashRouter>
      </Router>
    );
  }
}
export default AppRouter;
