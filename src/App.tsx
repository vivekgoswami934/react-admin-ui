import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Login } from "./pages/Login/Login ";
import Product from "./pages/Products/Product";
import User from "./pages/User/User";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import "./styles/global.scss";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="sidbarContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <User />,
        },
        {
          path: "/products",
          element: <Product />,
        },
        {
          path: "/users/:id",
          element: <User />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
