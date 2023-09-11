import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Cakes from "../Pages/Cakes/Cakes";
import GiftHamper from "../Pages/GiftHamper/GiftHamper";
import Savory from "../Pages/Savory/Savory";
import Pastory from "../Pages/Pastory/Pastory";
import Contact from "../Pages/Contact/Contact";
import Cart from "../Pages/Cart/Cart";
import CustomerDetailPage from "../Pages/CustomerDetailPage/CustomerDetailPage";

const routerApp = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cakes",
        element: <Cakes />,
      },
      {
        path: "/gift-hamper",
        element: <GiftHamper />,
      },
      {
        path: "/savory",
        element: <Savory />,
      },
      {
        path: "/pastory",
        element: <Pastory />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/customer-details",
        element: <CustomerDetailPage />,
      },
    ],
  },
]);

export default routerApp;
