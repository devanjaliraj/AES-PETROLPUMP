import React, { Suspense, lazy } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "./history";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Spinner from "./components/@vuexy/spinner/Loading-spinner";
import knowledgeBaseCategory from "./views/pages/knowledge-base/Category";
import knowledgeBaseQuestion from "./views/pages/knowledge-base/Questions";
import { ContextLayout } from "./utility/context/Layout";

// Route-based code splitting
const analyticsDashboard = lazy(() => import("./views/dashboard/analytics/AnalyticsDashboard"));
const ecommerceDashboard = lazy(() => import("./views/dashboard/ecommerce/EcommerceDashboard"));
const checkout = lazy(() => import("./views/apps/ecommerce/cart/Cart"));
const productDetail = lazy(() => import("./views/apps/ecommerce/detail/Detail"));
const shop = lazy(() => import("./views/apps/ecommerce/shop/Shop"));

// stockmanagement
const StockManagementList = lazy(() => import("./views/apps/stockmanagement/StockManagementList"));
const FuelStock = lazy(() => import("./views/apps/stockmanagement/FuelStock"));
const LubeStockList = lazy(() => import("./views/apps/stockmanagement/LubeStockList"));
const LubeStockForm = lazy(() => import("./views/apps/stockmanagement/LubeStockForm"));

// shiftmanagement 
/////////////////////////////// shiftmanagement///////////////////////////
const AddRsp = lazy(() => import("./views/apps/shiftmanagement/rsp/AddRsp"));
const AddBm = lazy(() => import("./views/apps/shiftmanagement/rsp/AddBm"));
const AddDsmClosing = lazy(() =>
  import("./views/apps/shiftmanagement/rsp/AddDsmCS")
);
const RetailSellingPriceList = lazy(() =>
  import("./views/apps/shiftmanagement/RetailSellingPriceList")
);
const RetailSellingPriceForm = lazy(() =>
  import("./views/apps/shiftmanagement/RetailSellingPricefrom")
);

const BayManagementList = lazy(() =>
  import("./views/apps/shiftmanagement/BayManagementList")
);
const BayManagementForm = lazy(() =>
  import("./views/apps/shiftmanagement/BayManagementForm")
);
const DSMClosingSheetList = lazy(() =>
  import("./views/apps/shiftmanagement/DSMClosingSheetList")
);
const DSMClosingSheetForm = lazy(() =>
  import("./views/apps/shiftmanagement/DSMClosingSheetForm")
);
const SalesFigureList = lazy(() =>
  import("./views/apps/shiftmanagement/SalesFigureList")
);
const SalesFigureForm = lazy(() =>
  import("./views/apps/shiftmanagement/SalesFigureForm")
);
const CreditGivenList = lazy(() =>
  import("./views/apps/shiftmanagement/CreditGivenList")
);
const CreditGivenForm = lazy(() =>
  import("./views/apps/shiftmanagement/CreditGivenForm")
);
const LubricantSales = lazy(() =>
  import("./views/apps/shiftmanagement/LubricantSalesList")
);

const lubricantForm = lazy(() =>
  import("./views/apps/shiftmanagement/LubricantForm")
);
const StaffAttendanceList = lazy(() =>
  import("./views/apps/shiftmanagement/StaffAttendanceList")
);
const StaffAttendanceForm = lazy(() =>
  import("./views/apps/shiftmanagement/StaffAttendenceForm")
);

//////////////////////////// facilitymanagement  /////////////////////////////

const StampingDataList = lazy(() =>
  import("./views/apps/facilitymanagement/StampingDataList")
);

const StampingDataForm = lazy(() =>
  import("./views/apps/facilitymanagement/StampingDataForm")
);

const otherEquipmentList = lazy(() =>
  import("./views/apps/facilitymanagement/OtherEquipmentList")
);
const OtherEquipmentForm = lazy(() =>
  import("./views/apps/facilitymanagement/OtherEquipmentForm")
);
const StatutoryCertificateManagementList = lazy(() =>
  import("./views/apps/facilitymanagement/StatutoryCertificateManagementList")
);
const MpdManagement = lazy(() =>
  import("./views/apps/facilitymanagement/MpdManagement")
);
const RaiseConcernToAESList = lazy(() =>
  import("./views/apps/facilitymanagement/RaiseConcernToAESList")
);

const RaiseConcernToAESForm = lazy(() =>
  import("./views/apps/facilitymanagement/RaiseConcernToAESForm")
);

// my component
const subplanvideos = lazy(() => import("./views/apps/subplan/SubPlanVideos"));
const addPlan = lazy(() => import("./views/apps/subplan/AddPlan"));
const dealerList = lazy(() => import("./views/apps/dealer/DealerList"));
const editDealer = lazy(() => import("./views/apps/dealer/EditDealer"));
const viewDealer = lazy(() => import("./views/apps/dealer/ViewDealer"));
const trainingList = lazy(() => import("./views/apps/training/TrainingList"));

// ro-configuration
const outletList = lazy (() => import("./views/apps/ro-configuration/OutletList"));
const roForm = lazy(() => import("./views/apps/ro-configuration/RoForm"));
const outletForm = lazy(() => import("./views/apps/ro-configuration/OutletForm"));
const tankMapList = lazy(() => import("./views/apps/ro-configuration/TankMapList"));
const editTankMap = lazy(() => import("./views/apps/ro-configuration/EditTankMap"));
const nozzleMapList = lazy(() => import("./views/apps/ro-configuration/NozzleMapList"));
const editNozzleMap = lazy(() => import("./views/apps/ro-configuration/EditNozzleMap"));

// const addInputBox =lazy(()=>import("./views/apps/ro-configuration/AddInputBox"));




const otherEquipment = lazy(() => import("./views/apps/ro-configuration/OtherEquipment"));
const paymentModeAvalable = lazy(() => import("./views/apps/ro-configuration/PaymentModeAvalable"));
const paymentModeList = lazy(() => import("./views/apps/ro-configuration/PaymentModeList"));
const designYourOutlet = lazy(() => import("./views/apps/ro-configuration/DesignYourOutlet"));
const designYourOutletList = lazy(() => import("./views/apps/ro-configuration/DesignYourOutletList"));
const bankForTransaction = lazy(() => import("./views/apps/ro-configuration/BankForTransaction"));
const bankForTransactionList = lazy(() => import("./views/apps/ro-configuration/BankForTransactionList"));
const viewBankForTransaction = lazy(() => import("./views/apps/ro-configuration/ViewBankForTransaction"));
const editBankForTransaction = lazy(() => import("./views/apps/ro-configuration/EditBankForTransaction"));
const CreditCustomersList = lazy(() => import("./views/apps/ro-configuration/CreditCustomersList"));
const RoConfigurationList = lazy(() => import("./views/apps/ro-configuration/RoConfigurationList"));
const BasicDetails = lazy(() => import("./views/apps/ro-configuration/BasicDetails"));
const OtherEquipmentList = lazy(() => import("./views/apps/ro-configuration/OtherEquipmentList"));
const creditCustomers = lazy(() => import("./views/apps/ro-configuration/CreditCustomers"));

// staffEnrollment
const staffManagementList = lazy(() => import("./views/apps/staffEnrollment/StaffManagementList"));
const staffManagementDealer = lazy(() => import("./views/apps/staffEnrollment/StaffManagementDealer"));
const staffForm = lazy(() => import("./views/apps/staffEnrollment/StaffForm"));
const manager = lazy(() => import("./views/apps/staffEnrollment/Manager"));
const addDMS = lazy(() => import("./views/apps/staffEnrollment/AddDMS"));
const dMSList = lazy(() => import("./views/apps/staffEnrollment/DMSList"));
const addOtherStaff = lazy(() => import("./views/apps/staffEnrollment/AddOtherStaff"));
const otherStaffList = lazy(() => import("./views/apps/staffEnrollment/OtherStaffList"));


// cashmanagement
const cashDealerTable = lazy(() => import("./views/apps/cashmanagement/CashDealerTable"));
const cashManagementList = lazy(() => import("./views/apps/cashmanagement/CashManagementList"));


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
const tankList = lazy(() => import("./views/apps/setting/tank/TankList"));
const bayList = lazy(() => import("./views/apps/setting/bay/BayList"));
const addBay = lazy(() => import("./views/apps/setting/bay/AddBay"));
const enquiryForm = lazy(() => import("./views/apps/setting/EnquiryForm"));

const grid = lazy(() => import("./views/ui-elements/grid/Grid"));
const typography = lazy(() => import("./views/ui-elements/typography/Typography"));
const textutilities = lazy(() => import("./views/ui-elements/text-utilities/TextUtilities"));
const syntaxhighlighter = lazy(() => import("./views/ui-elements/syntax-highlighter/SyntaxHighlighter"));
const colors = lazy(() => import("./views/ui-elements/colors/Colors"));
const reactfeather = lazy(() => import("./views/ui-elements/icons/FeatherIcons"));
const basicCards = lazy(() => import("./views/ui-elements/cards/basic/Cards"));
const statisticsCards = lazy(() => import("./views/ui-elements/cards/statistics/StatisticsCards"));
const analyticsCards = lazy(() =>import("./views/ui-elements/cards/analytics/Analytics"));
const actionCards = lazy(() => import("./views/ui-elements/cards/actions/CardActions"));
const Alerts = lazy(() => import("./components/reactstrap/alerts/Alerts"));
const Buttons = lazy(() => import("./components/reactstrap/buttons/Buttons"));
const Breadcrumbs = lazy(() => import("./components/reactstrap/breadcrumbs/Breadcrumbs"));
const Carousel = lazy(() => import("./components/reactstrap/carousel/Carousel"));
const Collapse = lazy(() => import("./components/reactstrap/collapse/Collapse"));
const Dropdowns = lazy(() => import("./components/reactstrap/dropdowns/Dropdown"));
const ListGroup = lazy(() => import("./components/reactstrap/listGroup/ListGroup"));
const Modals = lazy(() => import("./components/reactstrap/modal/Modal"));
const Pagination = lazy(() => import("./components/reactstrap/pagination/Pagination"));
const NavComponent = lazy(() => import("./components/reactstrap/navComponent/NavComponent"));
const Navbar = lazy(() => import("./components/reactstrap/navbar/Navbar"));
const Tabs = lazy(() => import("./components/reactstrap/tabs/Tabs"));
const TabPills = lazy(() => import("./components/reactstrap/tabPills/TabPills"));
const Tooltips = lazy(() => import("./components/reactstrap/tooltips/Tooltips"));
const Popovers = lazy(() => import("./components/reactstrap/popovers/Popovers"));
const Badge = lazy(() => import("./components/reactstrap/badge/Badge"));
const BadgePill = lazy(() => import("./components/reactstrap/badgePills/BadgePill"));
const Progress = lazy(() => import("./components/reactstrap/progress/Progress"));
const Media = lazy(() => import("./components/reactstrap/media/MediaObject"));
const Spinners = lazy(() => import("./components/reactstrap/spinners/Spinners"));
const avatar = lazy(() => import("./components/@vuexy/avatar/Avatar"));
const AutoComplete = lazy(() => import("./components/@vuexy/autoComplete/AutoComplete"));
const chips = lazy(() => import("./components/@vuexy/chips/Chips"));
const divider = lazy(() => import("./components/@vuexy/divider/Divider"));
const vuexyWizard = lazy(() => import("./components/@vuexy/wizard/Wizard"));
const listView = lazy(() => import("./views/ui-elements/data-list/ListView"));
const thumbView = lazy(() => import("./views/ui-elements/data-list/ThumbView"));
const select = lazy(() => import("./views/forms/form-elements/select/Select"));
const switchComponent = lazy(() =>import("./views/forms/form-elements/switch/Switch"));
const checkbox = lazy(() => import("./views/forms/form-elements/checkboxes/Checkboxes"));
const radio = lazy(() => import("./views/forms/form-elements/radio/Radio"));
const input = lazy(() => import("./views/forms/form-elements/input/Input"));
const group = lazy(() => import("./views/forms/form-elements/input-groups/InputGoups"));
const numberInput = lazy(() => import("./views/forms/form-elements/number-input/NumberInput"));
const textarea = lazy(() => import("./views/forms/form-elements/textarea/Textarea"));
const pickers = lazy(() => import("./views/forms/form-elements/datepicker/Pickers"));
const inputMask = lazy(() => import("./views/forms/form-elements/input-mask/InputMask"));
const layout = lazy(() => import("./views/forms/form-layouts/FormLayouts"));
const formik = lazy(() => import("./views/forms/formik/Formik"));
const tables = lazy(() => import("./views/tables/reactstrap/Tables"));
const ReactTables = lazy(() => import("./views/tables/react-tables/ReactTables"));
const Aggrid = lazy(() => import("./views/tables/aggrid/Aggrid"));
const DataTable = lazy(() => import("./views/tables/data-tables/DataTables"));
const profile = lazy(() => import("./views/pages/profile/Profile"));
const faq = lazy(() => import("./views/pages/faq/FAQ"));
const knowledgeBase = lazy(() =>import("./views/pages/knowledge-base/KnowledgeBase"));
const search = lazy(() => import("./views/pages/search/Search"));
const accountSettings = lazy(() =>import("./views/pages/account-settings/AccountSettings"));
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
const clipboard = lazy(() => import("./extensions/copy-to-clipboard/CopyToClipboard"));
const menu = lazy(() => import("./extensions/contexify/Contexify"));
const swiper = lazy(() => import("./extensions/swiper/Swiper"));
const i18n = lazy(() => import("./extensions/i18n/I18n"));
const reactPaginate = lazy(() => import("./extensions/pagination/Pagination"));
const tree = lazy(() => import("./extensions/treeview/TreeView"));
const Import = lazy(() => import("./extensions/import-export/Import"));
const Export = lazy(() => import("./extensions/import-export/Export"));
const ExportSelected = lazy(() => import("./extensions/import-export/ExportSelected"));
const userList = lazy(() => import("./views/apps/user/list/List"));
const userEdit = lazy(() => import("./views/apps/user/edit/Edit"));
const userView = lazy(() => import("./views/apps/user/view/View"));
const Login = lazy(() => import("./views/pages/authentication/login/Login"));
const forgotPassword = lazy(() => import("./views/pages/authentication/ForgotPassword"));
const lockScreen = lazy(() => import("./views/pages/authentication/LockScreen"));
const resetPassword = lazy(() => import("./views/pages/authentication/ResetPassword"));
const register = lazy(() => import("./views/pages/authentication/register/Register"));
const accessControl = lazy(() => import("./extensions/access-control/AccessControl"));

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
  render() {
    return (
      // Set the directory path if you are deploying in sub-folder
      <Router history={history}>
        <Switch>
        {/*<AppRoute exact={true} path="/" component={home} fullLayout /> */}
          <AppRoute exact={true} path="/" component={analyticsDashboard} />
          <AppRoute path="/ecommerce-dashboard" component={ecommerceDashboard}/>
          {/* <AppRoute path="/LubricantSales" component={LubricantSales} />
          <AppRoute path="/StaffAttendance" component={StaffAttendance} /> */}

          {/* ro-configuration */}
          <AppRoute path="/app/ro-configuration/outletList" component={outletList}/>
         
          {/* <AppRoute path="/app/ro-configuration/addInputBox" component={addInputBox}/> */}
          
          <AppRoute path="/app/ro-configuration/roConfigurationList" component={RoConfigurationList}/>
          <AppRoute path="/app/ro-configuration/otherEquipmentList" component={OtherEquipmentList}/>
          <AppRoute path="/app/ro-configuration/creditCustomersList" component={CreditCustomersList}/>
          <AppRoute path="/app/ro-configuration/basicDetails/:id" component={BasicDetails}/>
          <AppRoute path="/app/ro-configuration/roForm" component={roForm} />
          <AppRoute path="/app/ro-configuration/otherEquipment/:id" component={otherEquipment} />
          <AppRoute path="/app/ro-configuration/bankForTransaction" component={ bankForTransaction} />
          <AppRoute path="/app/ro-configuration/editBankForTransaction/:id" component={ editBankForTransaction} />
          <AppRoute path="/app/ro-configuration/viewBankForTransaction/:id" component={ viewBankForTransaction} />
          <AppRoute path="/app/ro-configuration/bankForTransactionList" component={ bankForTransactionList} />
          <AppRoute path="/app/ro-configuration/paymentModeAvalable/:id" component={paymentModeAvalable} />
          <AppRoute path="/app/ro-configuration/paymentModeList" component={paymentModeList} />
          <AppRoute path="/app/ro-configuration/designYourOutlet/:id" component={designYourOutlet} />
          <AppRoute path="/app/ro-configuration/designYourOutletList" component={designYourOutletList} />
          <AppRoute path="/app/ro-configuration/creditCustomers/:id" component={creditCustomers}/>
          <AppRoute path="/app/ro-configuration/outletForm/:id"component={outletForm}/>
          <AppRoute path="/app/ro-configuration/tankMapList"component={tankMapList}/>
          <AppRoute path="/app/ro-configuration/editTankMap/:id"component={editTankMap}/>
          <AppRoute path="/app/ro-configuration/nozzleMapList"component={nozzleMapList}/>
          <AppRoute path="/app/ro-configuration/editNozzleMap/:id"component={editNozzleMap}/>
         
          
          

          {/* stockManagement */}
          <AppRoute path="/app/stockManagement/stockManagementList" component={StockManagementList} />
          <AppRoute path="/app/stockManagement/fuelStock" component={FuelStock} />
          <AppRoute path="/app/stockManagement/lubeStockList" component={LubeStockList} />
          <AppRoute path="/app/stockManagement/lubeStockForm/:id" component={LubeStockForm} />


      {/*///////////////////////////////// facilityManagement start //////////////////////////////////////////////////*/}
      <AppRoute
            path="/app/facilityManagement/statutoryCertificateManagementList"
            component={StatutoryCertificateManagementList}
          />
          <AppRoute
            path="/app/facilityManagement/stampingDataList"
            component={StampingDataList}
          />
          <AppRoute
            path="/app/facilityManagement/stampingDataForm/:id"
            component={StampingDataForm}
          />
          <AppRoute
            path="/app/facilityManagement/otherEquipmentList"
            component={otherEquipmentList}
          />
          <AppRoute
            path="/app/facilityManagement/otherEquipmentForm/:id"
            component={OtherEquipmentForm}
          />
          <AppRoute
            path="/app/facilityManagement/MpdManagement"
            component={MpdManagement}
          />
          <AppRoute
            path="/app/facilityManagement/raiseConcernToAESList"
            component={RaiseConcernToAESList}
          />
          <AppRoute
            path="/app/facilityManagement/raiseConcernToAESForm/:id"
            component={RaiseConcernToAESForm}
          />

          {/* shiftManagement */}
         
          <AppRoute path="/app/shiftmanagement/rsp/addRsp" component={AddRsp} />
          <AppRoute path="/app/shiftmanagement/rsp/addBm" component={AddBm} />
          <AppRoute
            path="/app/shiftmanagement/rsp/addDsmClosing"
            component={AddDsmClosing}
          />
          <AppRoute
            path="/app/shiftmanagement/retailSellingPriceList"
            component={RetailSellingPriceList}
          />
          <AppRoute
            path="/app/shiftmanagement/retailSellingPriceForm/:id"
            component={RetailSellingPriceForm}
          />
          <AppRoute
            path="/app/shiftmanagement/bayManagementList"
            component={BayManagementList}
          />
          <AppRoute
            path="/app/shiftmanagement/bayManagementForm/:id"
            component={BayManagementForm}
          />
          <AppRoute
            path="/app/shiftManagement/dSMClosingSheetList"
            component={DSMClosingSheetList}
          />
          <AppRoute
            path="/app/shiftManagement/dSMClosingSheetForm/:id"
            component={DSMClosingSheetForm}
          />
          <AppRoute
            path="/app/shiftManagement/salesFigureList"
            component={SalesFigureList}
          />
          <AppRoute
            path="/app/shiftManagement/salesFigureForm"
            component={SalesFigureForm}
          />
          <AppRoute
            path="/app/shiftManagement/creditGivenList"
            component={CreditGivenList}
          />
          <AppRoute
            path="/app/shiftManagement/creditGivenForm"
            component={CreditGivenForm}
          />
          <AppRoute
            path="/app/shiftManagement/lubricantForm/:id"
            component={lubricantForm}
          />
          <AppRoute
            path="/app/shiftManagement/lubricantSales"
            component={LubricantSales}
          />
          <AppRoute
            path="/app/shiftManagement/staffAttendanceList"
            component={StaffAttendanceList}
          />
          <AppRoute
            path="/app/shiftManagement/staffAttendanceForm/:id"
            component={StaffAttendanceForm}
          />
          
          {/* <AppRoute path="/app/shiftManagement/lubricantSales" component={LubricantSales}/> */}

          {/* staffEnrollment */}
          <AppRoute path="/app/staffEnrollment/staffManagementList" component={staffManagementList}/>
          <AppRoute path="/app/staffEnrollment/staffManagementDealer" component={staffManagementDealer}/>
          <AppRoute path="/app/staffEnrollment/AddDMS/:id" component={addDMS}/> 
          <AppRoute path="/app/staffEnrollment/AddOtherStaff/:id" component={addOtherStaff}/>
          <AppRoute path="/app/staffEnrollment/OtherStaffList" component={otherStaffList}/>
          <AppRoute path="/app/staffEnrollment/Manager/:id" component={manager}/>
          <AppRoute path="/app/staffEnrollment/DMSList" component={dMSList}/>
          
          <AppRoute path="/app/staffEnrollment/staffForm" component={staffForm}/>

          {/* cashManagement */}
          <AppRoute path="/app/cashManagement/cashManagementList" component={cashManagementList}/>
          <AppRoute path="/app/cashManagement/cashDealerTable" component={cashDealerTable}/>

          {/* setting */}
          <AppRoute path="/app/setting/bank/bankList" component={bankList} />
          <AppRoute path="/app/setting/bank/addBank" component={addBank} />
          <AppRoute path="/app/setting/bank/editBank/:id" component={editBank} />
          <AppRoute path="/app/setting/bank/viewBank/:id" component={viewBank} />

          <AppRoute path="/app/setting/moc/mOCList" component={mOCList} />
          <AppRoute path="/app/setting/moc/editMOC" component={editMOC} />
          <AppRoute path="/app/setting/moc/addMOC" component={addMOC} />
          <AppRoute path="/app/setting/moc/viewMOC" component={viewMOC} />
          <AppRoute path="/app/setting/enquiryForm" component={enquiryForm} />
          <AppRoute path="/app/setting/tank/addTank" component={addTank} />
          <AppRoute path="/app/setting/tank/tankList" component={tankList} />
          <AppRoute path="/app/setting/bay/bayList" component={bayList} />  
          <AppRoute path="/app/setting/bay/addBay" component={addBay} />

          <AppRoute path="/email"exact component={() => <Redirect to="/email/inbox" />}/>
          {/* my componet */}
        
        
          
          
          <AppRoute path="/app/dealer/dealerList" component={dealerList} />
          <AppRoute path="/app/dealer/editDealer/:id" component={editDealer} />
          <AppRoute path="/app/dealer/viewDealer/:id" component={viewDealer} />
          <AppRoute path="/app/training/trainingList" component={trainingList} />
        
          <AppRoute path="/app/subplan/subplanvideos" component={subplanvideos} />
          <AppRoute path="/app/subplan/addPlan" component={addPlan} />
         
        
          <AppRoute path="/todo"exact component={() => <Redirect to="/todo/all" />}/>
          {/* <AppRoute path="/todo/:filter" component={todo} />
          <AppRoute path="/calendar" component={calendar} /> */}
          <AppRoute path="/ecommerce/shop" component={shop} />
          <AppRoute path="/ecommerce/product-detail" component={productDetail}/>
          <AppRoute path="/ecommerce/checkout" component={checkout}permission="admin"/>
          <AppRoute path="/data-list/list-view" component={listView} />
          <AppRoute path="/data-list/thumb-view" component={thumbView} />
          <AppRoute path="/ui-element/grid" component={grid} />
          <AppRoute path="/ui-element/typography" component={typography} />
          <AppRoute path="/ui-element/textutilities"component={textutilities}/>
          <AppRoute path="/ui-element/syntaxhighlighter"component={syntaxhighlighter}/>
          <AppRoute path="/colors/colors" component={colors} />
          <AppRoute path="/icons/reactfeather" component={reactfeather} />
          <AppRoute path="/cards/basic" component={basicCards} />
          <AppRoute path="/cards/statistics" component={statisticsCards} />
          <AppRoute path="/cards/analytics" component={analyticsCards} />
          <AppRoute path="/cards/action" component={actionCards} />
          <AppRoute path="/components/alerts" component={Alerts} />
          <AppRoute path="/components/buttons" component={Buttons} />
          <AppRoute path="/components/breadcrumbs" component={Breadcrumbs} />
          <AppRoute path="/components/carousel" component={Carousel} />
          <AppRoute path="/components/collapse" component={Collapse} />
          <AppRoute path="/components/dropdowns" component={Dropdowns} />
          <AppRoute path="/components/list-group" component={ListGroup} />
          <AppRoute path="/components/modals" component={Modals} />
          <AppRoute path="/components/pagination" component={Pagination} />
          <AppRoute path="/components/nav-component" component={NavComponent} />
          <AppRoute path="/components/navbar" component={Navbar} />
          <AppRoute path="/components/tabs-component" component={Tabs} />
          <AppRoute path="/components/pills-component" component={TabPills} />
          <AppRoute path="/components/tooltips" component={Tooltips} />
          <AppRoute path="/components/popovers" component={Popovers} />
          <AppRoute path="/components/badges" component={Badge} />
          <AppRoute path="/components/pill-badges" component={BadgePill} />
          <AppRoute path="/components/progress" component={Progress} />
          <AppRoute path="/components/media-objects" component={Media} />
          <AppRoute path="/components/spinners" component={Spinners} />
          <AppRoute path="/extra-components/auto-complete"component={AutoComplete}/>
          <AppRoute path="/extra-components/avatar" component={avatar} />
          <AppRoute path="/extra-components/chips" component={chips} />
          <AppRoute path="/extra-components/divider" component={divider} />
          <AppRoute path="/forms/wizard" component={vuexyWizard} />
          <AppRoute path="/forms/elements/select" component={select} />
          <AppRoute path="/forms/elements/switch" component={switchComponent} />
          <AppRoute path="/forms/elements/checkbox" component={checkbox} />
          <AppRoute path="/forms/elements/radio" component={radio} />
          <AppRoute path="/forms/elements/input" component={input} />
          <AppRoute path="/forms/elements/input-group" component={group} />
          <AppRoute path="/forms/elements/number-input"component={numberInput}/>
          <AppRoute path="/forms/elements/textarea" component={textarea} />
          <AppRoute path="/forms/elements/pickers" component={pickers} />
          <AppRoute path="/forms/elements/input-mask" component={inputMask} />
          <AppRoute path="/forms/layout/form-layout" component={layout} />
          <AppRoute path="/forms/formik" component={formik} />{" "}
          <AppRoute path="/tables/reactstrap" component={tables} />
          <AppRoute path="/tables/react-tables" component={ReactTables} />
          <AppRoute path="/tables/agGrid" component={Aggrid} />
          <AppRoute path="/tables/data-tables" component={DataTable} />
          <AppRoute path="/pages/profile" component={profile} />
          <AppRoute path="/pages/faq" component={faq} />
          <AppRoute path="/pages/knowledge-base"component={knowledgeBase}exact/>
          <AppRoute path="/pages/knowledge-base/category"component={knowledgeBaseCategory}exact/>
          <AppRoute path="/pages/knowledge-base/category/questions"component={knowledgeBaseQuestion}/>
          <AppRoute path="/pages/search" component={search} />
          <AppRoute path="/pages/account-settings"component={accountSettings}/>
          <AppRoute path="/pages/invoice" component={invoice} />
          <AppRoute path="/misc/coming-soon" component={comingSoon}fullLayout/>
          <AppRoute path="/misc/error/404" component={error404} fullLayout />
          <AppRoute path="/pages/login" component={Login} fullLayout />
          <AppRoute path="/pages/register" component={register} fullLayout />
          <AppRoute path="/pages/forgot-password" component={forgotPassword}fullLayout/>
          <AppRoute path="/pages/lock-screen" component={lockScreen}fullLayout/>
          <AppRoute path="/pages/reset-password" component={resetPassword}fullLayout/>
          <AppRoute path="/misc/error/500" component={error500} fullLayout />
          <AppRoute path="/misc/not-authorized" component={authorized}fullLayout/>
          <AppRoute path="/misc/maintenance" component={maintenance}fullLayout/>
          <AppRoute path="/app/user/list" component={userList} />
          <AppRoute path="/app/user/edit" component={userEdit} />
          <AppRoute path="/app/user/view" component={userView} />
          <AppRoute path="/charts/apex" component={apex} />
          <AppRoute path="/charts/chartjs" component={chartjs} />
          <AppRoute path="/charts/recharts" component={extreme} />
          <AppRoute path="/maps/leaflet" component={leafletMaps} />
          <AppRoute path="/extensions/sweet-alert" component={sweetAlert} />
          <AppRoute path="/extensions/toastr" component={toastr} />
          <AppRoute path="/extensions/slider" component={rcSlider} />
          <AppRoute path="/extensions/file-uploader" component={uploader} />
          <AppRoute path="/extensions/wysiwyg-editor" component={editor} />
          <AppRoute path="/extensions/drag-and-drop" component={drop} />
          <AppRoute path="/extensions/tour" component={tour} />
          <AppRoute path="/extensions/clipboard" component={clipboard} />
          <AppRoute path="/extensions/context-menu" component={menu} />
          <AppRoute path="/extensions/swiper" component={swiper} />
          <AppRoute path="/extensions/access-control" component={accessControl}/>
          <AppRoute path="/extensions/i18n" component={i18n} />
          <AppRoute path="/extensions/tree" component={tree} />
          <AppRoute path="/extensions/import" component={Import} />
          <AppRoute path="/extensions/export" component={Export} />
          <AppRoute path="/extensions/export-selected" component={ExportSelected}/>
          <AppRoute path="/extensions/pagination" component={reactPaginate} />
          <AppRoute component={error404} fullLayout />
        </Switch>
      </Router>
    );
  }
}
export default AppRouter;