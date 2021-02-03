import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from '../pages/HomePage/HomePage';
import ListTripsPage from '../pages/ListTripsPage/ListTripsPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import CreateTripPage from '../pages/CreateTripPage/CreateTripPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import TripDetaislPage from '../pages/TripDetailsPage/TripDetailsPage';


export default function Router() {
  return (
    <BrowserRouter>
      
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route  path={"/trips"}>
          <ListTripsPage />
        </Route>
        <Route  path={"/login"}>
          <LoginPage />
        </Route>
        <Route  path={"/details-trip"}>
          <TripDetaislPage />
        </Route>
        <Route  path={"/create-trip"}>
          <CreateTripPage />
        </Route>
        <Route  path={"/register"}>
          <RegisterPage />
        </Route>
        {/* <Route>
          <ErrorPage />
        </Route> */}
      </Switch>
    </BrowserRouter>
  );
}