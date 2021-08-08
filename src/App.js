import "./App.css";

import { BrowserRouter as BRoute, Route, Switch } from "react-router-dom";

import Login from "./Pages/Login";
import Landingpage from "./Pages/Landingpage";
import Register from "./Pages/Registration";
import SideBar from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <BRoute>
        <Switch>
          <Route path="/home" component={SideBar} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Landingpage} />
        </Switch>
      </BRoute>
    </div>
  );
}

export default App;
