import React from "react";
import ReactDOM from "react-dom";

import PersonalKanban from "./PersonalKanban";
import reportWebVitals from "./reportWebVitals";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <PersonalKanban />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
