import React from "react";

const withRainbowFrame = (colors) => {
    return (Comp) => {
        return props =>{
            let border;
            colors.forEach((item, index) => {
                if (!(index)) {
                border = (
                    <div
                    style={{
                        textAlign: "center",
                        border: "5px " + item + " solid",
                        margin: "10px",
                    
                    }}
                    >
                    <Comp {...props}/>
                    </div>
                );
                } 
                else {
                border = (
                    <div style={{ border: "5px " + item + " solid", margin: "10px" }}>
                    {border}
                    </div>
                );
                }
            });
            return <div className="withRainbowFrame">{border}</div>;
        }       
    }
}   

export  {withRainbowFrame};