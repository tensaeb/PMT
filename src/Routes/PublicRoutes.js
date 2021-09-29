import { Route, Redirect } from "react-router-dom";

function PublicRoutes({ component: Component, isLoggedIn, ...children }) {
  return (
    <Route
      render={(props) =>
        isLoggedIn ? (
          <Redirect to="/home" />
        ) : (
          <Component {...props} {...children} />
        )
      }
    />
  );
}

export default PublicRoutes;
