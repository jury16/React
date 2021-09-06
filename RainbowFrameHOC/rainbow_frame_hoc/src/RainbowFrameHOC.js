import React from "react";
import "./RainbowFrameHOC.css";
import DoubleButton from "./DoubleButton";
import {withRainbowFrame} from "./withRainbowFrame";

let colors=['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
let FramedDoubleButton = withRainbowFrame(colors)(DoubleButton);
class RainbowFrameHOC extends React.Component{
  static defaultProps = {
    caption1: "first",
    caption2: "second",
    text : "first text",
  };
  
  pressed = num => alert(num);
  render () {
    return(
      <>
        <div>
          <DoubleButton caption1={this.props.caption1} caption2={this.props.caption2} cbPressed={this.pressed}>{this.props.text}</DoubleButton>
        </div>          
        <div>
          <FramedDoubleButton caption1='third' caption2="forth" cbPressed={this.pressed}>next text</FramedDoubleButton>
        </div>
      </>
      )   
  }
}

export default RainbowFrameHOC;