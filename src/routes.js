import Dashboard from "views/Dashboard.js";
import TableList from "views/TableList.js";
import TransactionsList from "views/Transactions.js";
import Login from "views/login/Login.js";

import AddUserProfile from "views/partner/AddUserProfile.js";
import EditUserProfile from "views/partner/EditUserProfile.js";

import VendorList from "views/vendor/VendorList.js";
import AddVendorSchool from "views/vendor/AddVendorSchool.js";
import AddVendorBusiness from "views/vendor/AddVendorBusiness.js";
import AddVendorProfile from "views/vendor/AddVendorProfile.js";

// st
import StudentList from "views/student/StudentList.js";
import AddStudentSchool from "views/student/AddStudentSchool.js";
import AddStudentProfile from "views/student/AddStudentProfile.js";

// st

// st
import salesPersonList from "views/salesPerson/salesPersonList.js";
import AddsalesPersonBusiness from "views/salesPerson/AddsalesPersonBusiness.js";
import AddsalesPersonProfile from "views/salesPerson/AddsalesPersonProfile.js";

// st
import SearchPartner from "views/partner/SearchPartner.js";

import SchoolList from "views/school/SchoolList.js";
import AddSchoolProfile from "views/school/AddSchoolProfile.js";
import EditSchoolProfile from "views/school/EditSchoolProfile.js";

import StoreList from "views/store/StoreList.js";
import AddStore from "views/store/AddStore.js";
import EditStoreBusiness from "views/store/EditStoreBusiness.js";
import AddStoreBusiness from "views/store/AddStoreBusiness.js";


var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "tim-icons icon-chart-pie-36",
    component: Login,
    layout: "/admin",
    dash: false,
  },
//   partners/ users routes
  {
    path: "/partners",
    name: "Partners List",
    icon: "tim-icons icon-puzzle-10",
    component: TableList,
    layout: "/admin",
    dash: true,
  }, 
  {
    path: "/search-partner",
    name: "Add Vendor Profile",
    icon: "tim-icons icon-single-02",
    component: SearchPartner,
    layout: "/admin",
  },
  {
    path: "/add-user-profile",
    name: "Add User Profile",
    icon: "tim-icons icon-single-02",
    component: AddUserProfile,
    layout: "/admin",
  },
  {
    path: "/edit-user-profile/:partner",
    name: "Edit User Profile",
    icon: "tim-icons icon-single-02",
    component: EditUserProfile,
    layout: "/admin",
  },
//   vendors routes
  {
    path: "/vendors",
    name: "Vendors List",
    icon: "tim-icons icon-puzzle-10",
    component: VendorList,
    layout: "/admin",
    dash: true,
  },
  {
    path: "/add-vendor-profile",
    name: "Add Vendor Profile",
    icon: "tim-icons icon-single-02",
    component: AddVendorProfile,
    layout: "/admin",
  },
  {
    path: "/add-vendor-school",
    name: "Add Vendor School",
    icon: "tim-icons icon-single-02",
    component: AddVendorSchool,
    layout: "/admin",
  },{
    path: "/add-vendor-business",
    name: "Add Vendor Business",
    icon: "tim-icons icon-single-02",
    component: AddVendorBusiness,
    layout: "/admin",
  },
//   students routes

  {
    path: "/students",
    name: "Students List",
    icon: "tim-icons icon-puzzle-10",
    component: StudentList,
    layout: "/admin",
    dash: true,
  },
  {
    path: "/add-student-profile",
    name: "Add Student Profile",
    icon: "tim-icons icon-single-02",
    component: AddStudentProfile,
    layout: "/admin",
  },
  {
    path: "/add-student-school",
    name: "Add Student School",
    icon: "tim-icons icon-single-02",
    component: AddStudentSchool,
    layout: "/admin",
  },

//   schools routes

  {
    path: "/add-school-profile",
    name: "Add School",
    icon: "tim-icons icon-single-02",
    component: AddSchoolProfile,
    layout: "/admin",
  }, 
  {
    path: "/edit-school-profile",
    name: "Edit School",
    icon: "tim-icons icon-single-02",
    component: EditSchoolProfile,
    layout: "/admin",
  },
  {
    path: "/schools",
    name: "School List",
    icon: "tim-icons icon-puzzle-10",
    component: SchoolList,
    layout: "/admin",
    dash: true,
  },
//   transactions routes
  
  {
    path: "/transactions",
    name: "All Transactions",
    icon: "tim-icons icon-puzzle-10",
    component: TransactionsList,
    layout: "/admin",
  },

//    business

//   sales person routes

{
    path: "/salespersons",
    name: "salesPersons List",
    icon: "tim-icons icon-puzzle-10",
    component: salesPersonList,
    layout: "/admin",
    dash: true,
  },
  {
    path: "/add-salesperson-profile",
    name: "Add Sales Person Profile",
    icon: "tim-icons icon-single-02",
    component: AddsalesPersonProfile,
    layout: "/admin",
  },
  {
    path: "/add-salesperson-business",
    name: "Add Sales Person Business",
    icon: "tim-icons icon-single-02",
    component: AddsalesPersonBusiness,
    layout: "/admin",
  },
//   store routes

{
    path: "/stores",
    name: "Stores List",
    icon: "tim-icons icon-puzzle-10",
    component: StoreList,
    layout: "/admin",
    dash: true,
  },
  {
    path: "/get-store-salesperson",
    name: "",
    icon: "tim-icons icon-single-02",
    component: AddStore,
    layout: "/admin",
  },
  {
    path: "/add-store",
    name: "Add Store",
    icon: "tim-icons icon-single-02",
    component: AddStoreBusiness,
    layout: "/admin",
  },
  {
    path: "/edit-store",
    name: "Add Store",
    icon: "tim-icons icon-single-02",
    component: EditStoreBusiness,
    layout: "/admin",
  },


];
export default routes;
