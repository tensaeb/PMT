import React, { Component } from "react";

import { BrowserRouter as BRoute, Route, Switch } from "react-router-dom";
import { Link as SCLink, animateScroll as scroll } from "react-scroll";

import Login from "./Pages/Login";
import Landingpage from "./Pages/Landingpage";
import Register from "./Pages/Registration";
import Home from "./Pages/Home/HomePage";
import ResetPassword from "./Pages/ResetPassword";
import ResetPasswordConfirm from "./Pages/ResetPasswordConfirm";
import Activate from "./Pages/Activate";
import TasksPage from "./Pages/Home/TasksPage";

import KanbanPage from "./Pages/Home/KanbanPage";
import CalendarPage from "./Pages/Home/CalendarPage";
import ProfilePage from "./Pages/ProfilePage";
import PrivateRoutes from "./Routes/PrivateRoute";
import PublicRoutes from "./Routes/PublicRoutes";
import { connect } from "react-redux";

const Routes = ({ isLoggedIn }) => {
  return (
    <div>
      <BRoute>
        <Switch>
          <PrivateRoutes
            isLoggedIn={isLoggedIn}
            path={["/home/profile"]}
            component={ProfilePage}
          />
          <PrivateRoutes
            isLoggedIn={isLoggedIn}
            path="/home/kanban"
            component={KanbanPage}
          />
          <PrivateRoutes
            isLoggedIn={isLoggedIn}
            path="/home/kanban"
            component={KanbanPage}
          />
          <PrivateRoutes
            isLoggedIn={isLoggedIn}
            path="/home/calendar"
            component={CalendarPage}
          />
          <PrivateRoutes
            isLoggedIn={isLoggedIn}
            path={["/home", "/home/index"]}
            component={TasksPage}
          />
        </Switch>
        <Switch>
          <PrivateRoutes
            isLoggedIn={isLoggedIn}
            path="/home"
            component={Home}
          />
          <PublicRoutes
            isLoggedIn={isLoggedIn}
            s
            path="/login"
            component={Login}
          />
          <PublicRoutes
            isLoggedIn={isLoggedIn}
            path="/register"
            component={Register}
          />
          <PublicRoutes
            isLoggedIn={isLoggedIn}
            path="/reset-password"
            component={ResetPassword}
          />
          <PublicRoutes
            isLoggedIn={isLoggedIn}
            path="/password/reset/confrm/:uid/:token"
            component={ResetPasswordConfirm}
          />
          <PublicRoutes
            isLoggedIn={isLoggedIn}
            path="/activate/:uid/:token"
            component={Activate}
          />

          <PublicRoutes
            isLoggedIn={isLoggedIn}
            exact
            path="/"
            component={Landingpage}
          />
        </Switch>
      </BRoute>
      <SCLink to="about" />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.Authentication.isLoggedIn,
    currentUser: state.Authentication.currentUser,
  };
};

export default connect(mapStateToProps, {})(Routes);
