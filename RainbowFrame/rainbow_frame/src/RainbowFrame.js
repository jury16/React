import React from "react";
import "./RainbowFrame.css";

const RainbowFrame = (props) => {
  let border;
  props.colors.forEach((item, index) => {
    if (!(index)) {
      border = (
        <div
          style={{
            border: "5px " + item + " solid",
            margin: "10px",
            textAlign: "center",
          }}
        >
          {props.children}
        </div>
      );
    } else {
      border = (
        <div style={{ border: "5px " + item + " solid", margin: "10px" }}>
          {border}
        </div>
      );
    }
  });
  return <div className="RainbowFrame">{border}</div>;
};

export default RainbowFrame;