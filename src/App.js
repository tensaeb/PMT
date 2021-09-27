import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

import Routes from "./Routes";

function App() {
  return (
    <Provider store={store}>
      <div className="App" id = "container">
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
