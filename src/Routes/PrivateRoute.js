import { Route, Redirect } from "react-router-dom";

function PrivateRoutes({ component: Component, isLoggedIn, ...children }) {
  if (isLoggedIn === true) {
    return <Route {...children} render={(props) => <Component {...props} />} />;
  }
  return <Redirect to="/login" />;
}

export default PrivateRoutes;
