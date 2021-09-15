
import React from "react";
import ReactDOM from "react-dom";
import Company from "./components/Company";
import Clients from "./components/Clients";
import "./index.css";


let companyName = "Videotron";
var clientsList = require('./clientsList.json');
console.log(clientsList);
ReactDOM.render(  
  <React.Fragment>
    <Company name={companyName} />
    <Clients clients={clientsList} />
  </React.Fragment>,
  document.getElementById("root")
  
);