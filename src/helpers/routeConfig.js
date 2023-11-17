
import Sample from "pages/Sample";
import Overview from "pages/Overview";
import Leads from "pages/Leads";
import Dashboard from "pages/Dashboard";
// import Leads from "pages/Leads";



const routeConfig = [
  {
    path: "/overview",
    component: Overview,
    name: "Overview",
    icon: (
      <img
        src="/assets/icons/dashboardIcon.svg"
        alt="Notification-icon"
        width="24"
        height="24"
      />
    ),
    roles: ["user", "admin"], // Roles that have access to this route
    subPath: [
      {
        name: "Stats",
        path: "stats",
        component: Sample,
      },
    ],
  },
  {
    path: "/leads",
    component: Leads,
    name: "Leads",
    icon: (
      <img
        src="/assets/icons/dashboardIcon.svg"
        alt="Notification-icon"
        width="24"
        height="24"
      />
    ),
    roles: ["user", "admin"], // Roles that have access to this route
  },
  {
    path: "/dashboard",
    component: Dashboard,
    name: "Dashboard",
    icon: (
      <img
        src="/assets/icons/dashboardIcon.svg"
        alt="Dashboard-icon"
        width="24"
        height="24"
      />
    ),
    roles: ["user", "admin"], // Roles that have access to this route
  },
];

export default routeConfig;
