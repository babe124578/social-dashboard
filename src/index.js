import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";

import "./index.css";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter><Main /></BrowserRouter>
    ,
    document.getElementById("root")
);