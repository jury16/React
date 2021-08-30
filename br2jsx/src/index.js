import React from "react";
import ReactDOM from "react-dom";
import BR2JSX from "./BR2JSX";

let text = "first<br/>second<br/>third<br/>last";

ReactDOM.render(<BR2JSX text={text} />, document.getElementById("root"));
