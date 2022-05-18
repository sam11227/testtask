import React from "react";

const AllButton = (Props) => {
    return (
      <>
       <div className="">
         <button style={Props.style} icons={Props.icons} className={Props.active ? "here active" : "here"}>
              {Props.name}
              <i className={Props.icon}></i>
         </button>        
       </div>
      </>
    )
  };
  export default AllButton;