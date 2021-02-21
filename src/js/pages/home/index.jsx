import "babel-polyfill";
import "./index.scss";
import React from "react";
import ReactDom from "react-dom";
import Index from "./mod/index";
ReactDom.render(<Index />, document.getElementById("container"));

