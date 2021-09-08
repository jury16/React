import React from "react";
import "./RainbowFrame.css";

const RainbowFrame = (props) => {
  let border = <div>{props.children}</div>;
  props.colors.forEach((item, index) => {    
      border = (
        <div style={{ border: "5px " + item + " solid", margin: "10px" }}>
          {border}
        </div>
      );

  });
  return <div className="RainbowFrame">{border}</div>;
};

export default RainbowFrame;