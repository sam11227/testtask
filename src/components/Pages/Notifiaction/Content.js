import React from "react";
import "./Content.css"
const Content = (props) => {
    return (
      <>
      <div className="email">
          <div className="content-email"> 
              <h4>{props.heading}</h4>
              <p>{props.para}</p>
          </div>
      </div>
      </>
    )
  };
  export default Content;