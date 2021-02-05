import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from '../pages/HomePage/HomePage';
import ListTripsPage from '../pages/ListTripsPage/ListTripsPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import CreateTripPage from '../pages/CreateTripPage/CreateTripPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import TripDetaislPage from '../pages/TripDetailsPage/TripDetailsPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import Nav from '../Components/Navegation/Navegation';
import NavAdm from '../Components/Navegation/NavegationAdm'
import AdmPage from "../pages/AdmPage/AdmPage";


export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Nav />
                    <HomePage />
                </Route>

                <Route path={"/trips/list"}>
                    <NavAdm />
                    <ListTripsPage />
                </Route>

                <Route path="/login">
                    <Nav />
                    <LoginPage />
                </Route>

                <Route path={"/trips/details"}>
                    <NavAdm />
                    <TripDetaislPage />
                </Route>

                <Route path={"/trips/create"}>
                    <NavAdm />
                    <CreateTripPage />
                </Route>

                <Route path={"/application-form"}>
                    <Nav />
                    <RegisterPage />
                </Route>

                <Route path={"/adm"}>
                    <NavAdm />
                    <AdmPage />
                </Route>

                <Route>
                    <Nav />
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}