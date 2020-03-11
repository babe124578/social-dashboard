import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";

import "./index.css";
import { HashRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <Router><Main /></Router>
    ,
    document.getElementById("root")
);