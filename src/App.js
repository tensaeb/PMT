import "./App.css";

import { BrowserRouter as BRoute, Route, Switch } from "react-router-dom";

import Login from "./Pages/Login";
import Landingpage from "./Pages/Landingpage";
import Register from "./Pages/Registration";
import Home from "./Pages/Home/HomePage";
import ResetPassword from "./Pages/ResetPassword";
import ResetPasswordConfirm from "./Pages/ResetPasswordConfirm";
import Activate from "./Pages/Activate";

import TasksPage from "./Pages/Home/TasksPage";

import { Provider } from "react-redux";
import store from "./store";
import KanbanPage from "./Pages/Home/KanbanPage";
import CalendarPage from "./Pages/Home/CalendarPage";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BRoute>
          <Switch>
            <Route path="/home/index" component={TasksPage} />
            <Route path="/home/kanban" component={KanbanPage} />
            <Route path="/home/kanban" component={KanbanPage} />
            <Route path="/home/calendar" component={CalendarPage} />
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
    </Provider>
  );
}

export default App;
