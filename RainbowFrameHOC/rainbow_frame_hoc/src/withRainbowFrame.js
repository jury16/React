import React from "react";

const withRainbowFrame = (colors) => {
    return (Comp) => {
        return props =>{
            let border = <Comp {...props}/>;
            colors.forEach((item, index) => {
                border = (
                    <div style={{ border: "5px " + item + " solid", margin: "10px" }}>
                    {border}
                    </div>
                );
            });
            return <div className="withRainbowFrame">{border}</div>;
        }       
    }
}   

export  {withRainbowFrame};