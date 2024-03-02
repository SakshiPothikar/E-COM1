import Details from "./pages/Details";
import Home from "./pages/Home";
// import Login from "./pages/Login";
import Register from "./pages/Register";
import OrderSuccess from "./pages/OrderSuccess";
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import Login from "./pages/Login";

export const publicRoutes = [
    { show: true, path: "/", compo: <Home />, label: "Home" },
    { show: true, path: "/product/:id", compo: <Details />, label: "Details" },
    { show: true, path: "/cart", compo: <Cart />, label: "cart" },
    { show: false, path: "/checkout", compo: <Checkout />, label: "checkout" },
    { show: false, path: "/success", compo: <OrderSuccess />, label: "ordersuccess" },
    { show: true, path: "/login", compo: <Login />, label: "login" },
    { show: true, path: "/register", compo: <Register />, label: "register" },
]