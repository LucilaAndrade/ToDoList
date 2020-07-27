import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  [<h1 key="pageName">
    <img src="https://todo-list.ch/wp-content/uploads/2016/10/logo_script_brown_00-1.png"/>
    </h1>, 
  <App key="tasklist" />],
  document.getElementById("root")
);
