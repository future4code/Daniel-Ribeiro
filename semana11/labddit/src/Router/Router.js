import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Post from "../Pages/Post/Post";
import Posts from "../Pages/Posts/Posts";
import Register from "../Pages/Register/Register";
import Error from '../Pages/Error/Error'
import CreatePost from "../Pages/CreatePost/CreatePost";
import Header from '../Components/Header/Header'

function Router () {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
  
          <Route exact path="/register">
            <Register />
          </Route>

          <Route exact path="/posts">
            <Posts />
          </Route>

          <Route exact path="/post/:id">
            <Post />
          </Route>

          <Route exact path="/create-post">
            <CreatePost />
          </Route>

          <Route>
            <Error />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  };
  
  export default Router;