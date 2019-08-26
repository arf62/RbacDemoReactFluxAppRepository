import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "../common/Header";
import UsersPage from "./UsersPage";
import RolesPage from "./RolesPage";
import { Route, Switch } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import LoginPage from "./LoginPage";
import GeoChartView from "../views/GeoChartView";
import LogOutPage from "../controllers/LogOutPage";
import FinChartView from "../views/FinChartView";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar />
      <Header />
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/logout" component={LogOutPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/users" component={UsersPage} />
        <Route path="/roles" component={RolesPage} />
        <Route path="/geochart" component={GeoChartView} />
        <Route path="/finchart" component={FinChartView} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
