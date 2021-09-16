
import React from "react";
import ReactDOM from "react-dom";
import Company from "./components/Company";
import Clients from "./components/Clients";
import "./index.css";


let companyName = "Videotron";
var clientsList = [
  { "id": 101, "firstName": "Tremblay", "secondeName": "Willam",  "balance": 200 },
  { "id": 105, "firstName": "Gagnon", "secondeName": "Sophia", "balance": 250 },
  { "id": 110, "firstName": "Roy", "secondeName": "Charlie", "balance": 180 },
  { "id": 120, "firstName": "Bouchard", "secondeName": "Trista", "balance": -220 }
];
console.log(clientsList);
ReactDOM.render(  
  <React.Fragment>
    <Company name={companyName} />
    <Clients clients={clientsList} />
  </React.Fragment>,
  document.getElementById("root")
  
);