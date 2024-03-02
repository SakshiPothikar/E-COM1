import { MdBarChart, MdPeople, MdShoppingBag, MdSpaceDashboard } from "react-icons/md";
// import Home from "../../public/pages/Home";
import DashBoard from "./DashBoard";
import Order from "./Order";
import Products from "./Products";
import Users from "./Users";

export const adminRoutes = [
    { icon: <MdSpaceDashboard />, show: true, path: "index", compo: <DashBoard />, label: "dashBoard" },
    { icon: <MdPeople />, show: true, path: "users", compo: <Users />, label: "users" },
    { icon: <MdBarChart />, show: true, path: "orders", compo: <Order />, label: "order" },
    { icon: <MdShoppingBag />, show: true, path: "products", compo: <Products />, label: "products" },
]
// // 
// icon: <MdSpaceDashboard />,
//     icon: <MdShoppingBag />,
//         icon: <MdBarChart />,
//             icon: <MdPeople />,
//                 icon: <MdSettingsApplications />,