import React from "react";

const Scroll = (props:any) => {
    return (
        <div style={{overflowY:'scroll', border: '1px solid black', height:'1000px', background:'rgba(0, 0, 0, 0.0)'}}>
            {props.children}
        </div>
    )
};

export default Scroll;