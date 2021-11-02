import React from "react";

const ColorDisplay = ({ currentColor }) => {
    console.log(currentColor)
    return (
        <div
            style={{
                backgroundColor: currentColor,
                height: 110,
                width: 110,
                marginTop: 30,
            }}
            ></div>
    );
};

export default ColorDisplay;