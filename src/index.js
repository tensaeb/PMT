import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QueryClientProvider>,
  document.getElementById("root")
);
