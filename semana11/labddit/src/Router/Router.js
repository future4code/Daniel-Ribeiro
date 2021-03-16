import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Post from "../Pages/Post/Post";
import Posts from "../Pages/Posts/Posts";
import Register from "../Pages/Register/Register";
import Error from '../Pages/Error/Error'
import CreatePost from "../Pages/CreatePost/CreatePost";

function Router ({valueBtnLogin, setValueBtnLogin/* , valueBtnCreatePost, setValueBtnCreatePost */}) {
    return (
        <Switch>
          <Route exact path="/">
            <Login 
              valueBtnLogin={valueBtnLogin}
              setValueBtnLogin={setValueBtnLogin}
            />
          </Route>
  
          <Route exact path="/register">
            <Register />
          </Route>

          <Route exact path="/posts">
            <Posts 
              /* valueBtnCreatePost={valueBtnCreatePost}
              setValueBtnCreatePost={setValueBtnCreatePost} */
            />
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
    );
  };
  
  export default Router;