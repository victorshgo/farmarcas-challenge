import React from "react";
import ReactDOM from "react-dom/client";

import Global from "styles/global";
import Routes from "services/routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <Global />
    <Routes />
  </>
);
