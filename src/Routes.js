import React, { Component } from "react";

import { BrowserRouter as BRoute, Route, Switch } from "react-router-dom";

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

const Routes = () => {
  return (
    <div>
      <BRoute>
        <Switch>
          <Route path={["/home/profile"]} component={ProfilePage} role="ANY" />
          <Route path="/home/kanban" component={KanbanPage} />
          <Route path="/home/kanban" component={KanbanPage} />
          <Route path="/home/calendar" component={CalendarPage} />
          <Route path={["/home", "/home/index"]} component={TasksPage} />
        </Switch>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/reset-password" component={ResetPassword} />
          <Route
            path="/password/reset/confrm/:uid/:token"
            component={ResetPasswordConfirm}
          />
          <Route path="/activate/:uid/:token" component={Activate} />

          <Route path="/" component={Landingpage} />
        </Switch>
      </BRoute>
    </div>
  );
};

// const PrivateRoute = ({component: Component, ...rest }) => {
//   return (

//       // Show the component only when the user is logged in
//       // Otherwise, redirect the user to /signin page
//       <Route {...rest} render={props => (
//           isLogin() ?
//               <Component {...props} />
//           : <Redirect to="/signin" />
//       )} />
//   );
// };

// const ProtectedRoute = ({ component: Component, ...rest}) {
//   // get state from redux
//   // if user is authorized and roles match with the props in rest then render component
//   // else render 404 page
// }

export default Routes;
