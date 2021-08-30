import React from "react";
import ReactDOM from "react-dom";
import RainbowFrame from "./RainbowFrame";

const colors = ["red", "orange", "yellow", "green", "#00BFFF", "blue", "purple"];
const text = "Hello!";

ReactDOM.render(
  <RainbowFrame colors={colors}>{text}</RainbowFrame>,
  document.getElementById("root")
);
