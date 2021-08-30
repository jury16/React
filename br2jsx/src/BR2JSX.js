import React from "react";
import "./BR2JSX.css";
const BR2JSX = (props) => {
    const arr = [];
    props.text.split(/<br\s{0,1}\/{0,1}>/).forEach((item, index) => {
      arr.push(item, (<br key={index}/>));
    });
    arr.pop();
  
    return <div className="BR2JSX">{arr}</div>;
  };
  
  export default BR2JSX;
  