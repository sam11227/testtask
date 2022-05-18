import React from "react";
import './side.css'

const Side= (props) =>{
    return(
        
        <div className="side-box">
            <div className="numb">
                <h4>
                    {props.num}
                </h4>
            </div>
            <p className="contnt">
                <h3>{props.para}</h3>                
            </p>
            <h4 className="third">{props.des}</h4>

        </div>
    )
}
export default Side;