import "./App.css";

import { BrowserRouter as BRoute, Route, Switch } from "react-router-dom";

import Login from "./Pages/Login";
import Landingpage from "./Pages/Landingpage";

function App() {
  return (
    <div className="App">
      <BRoute>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Landingpage} />
        </Switch>
      </BRoute>
    </div>
  );
}

export default App;
