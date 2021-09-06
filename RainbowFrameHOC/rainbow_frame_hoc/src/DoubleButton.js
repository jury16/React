import React from "react";
import "./DoubleButton.css";


const DoubleButton = (props) =>{
      let capt1 =() =>{
        props.cbPressed(1);
      }
      let capt2 =() =>{
        props.cbPressed(2);
    }
        
        return(
            <div>
                <input type="button" value={props.caption1}  onClick={capt1.bind(this)}/>
                <span>{props.children}</span>
                <input type="button" value={props.caption2}  onClick={capt2.bind(this)}/>
            </div>    
        )
}

  
  export default DoubleButton;