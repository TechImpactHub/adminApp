import Dashboard from "views/Dashboard.js";

import TableList from "views/TableList.js";
import TransactionsList from "views/Transactions.js";

import AddUserProfile from "views/partner/AddUserProfile.js";
import AddVendorProfile from "views/vendor/AddVendorProfile.js";


import AddSchoolProfile from "views/school/AddSchoolProfile.js";
import SchoolList from "views/school/SchoolList.js";


import VendorList from "views/vendor/VendorList.js";

var sidebarroutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
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
    path: "/add-school-profile",
    name: "Add School",
    icon: "tim-icons icon-single-02",
    component: AddSchoolProfile,
    layout: "/admin",
  },
  {
    path: "/schools",
    name: "School List",
    icon: "tim-icons icon-puzzle-10",
    component: SchoolList,
    layout: "/admin",
  },
  {
    path: "/add-vendor-profile",
    name: "Add Vendor Profile",
    icon: "tim-icons icon-single-02",
    component: AddVendorProfile,
    layout: "/admin",
  },
  {
    path: "/vendors",
    name: "Vendors List",
    icon: "tim-icons icon-puzzle-10",
    component: VendorList,
    layout: "/admin",
  },
  {
    path: "/partners",
    name: "Partners List",
    icon: "tim-icons icon-puzzle-10",
    component: TableList,
    layout: "/admin",
  },{
    path: "/transactions",
    name: "All Transactions",
    icon: "tim-icons icon-puzzle-10",
    component: TransactionsList,
    layout: "/admin",
  },
];
export default sidebarroutes;
