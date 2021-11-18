import React from "react";

export function Shapes(props){
    let color = "shape-" + props.color;
    return(
        <div className={"shape shape-style-1 " + color}>
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
    )
}