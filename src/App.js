import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useRecoilState } from "recoil";
import "./App.scss";
import Loader from "./components/global/loader/Loader";
import CustomSnackBar from "./components/global/snackBar/CustomSnackBar";
import AdminLayout from "./components/layout/AdminLayout";
import "./custom.scss";
import Brands from "./pages/Brands";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Modals from "./pages/Modals";
import Products from "./pages/Products";
import Shops from "./pages/Shops";
import UserDetail from "./pages/UserDetail";
import Users from "./pages/Users";
import Vendors from "./pages/Vendors";
import Orders from "./pages/Orders";
import { isLoaderState, snakeBarState } from "./util/RecoilStore";

function App() {

  const [isLoaderInfo, setIsLoaderInfo] = useRecoilState(isLoaderState);
  const [snackBarInfo, setSnackBarInfo] = useRecoilState(snakeBarState);
  return (
    <>
      {isLoaderInfo && <Loader />}
      <div className="App">
        <Router>
          <Routes>
            <Route exact path={``} element={<Login />} />
            <Route path={`/admin`} element={<AdminLayout />}>
              <Route exact path="dashboard" element={<Dashboard />} />
              <Route exact path="users" element={<Users />} />
              <Route exact path="vendors" element={<Vendors />} />
              <Route exact path="product" element={<Products />} />
              <Route exact path="shops" element={<Shops />} />
              <Route exact path="brands" element={<Brands />} />
              <Route exact path="modals" element={<Modals />} />
              <Route exact path="orders" element={<Orders />} />
              <Route exact path="user-detail" element={<UserDetail />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </div>

      <CustomSnackBar
        closeSnackPro={() => setSnackBarInfo({ snackStatus: false })}
        snackInfoPro={snackBarInfo}
      />
    </>
  );
}

export default App;
