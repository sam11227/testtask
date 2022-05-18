import React from "react";
import './pay.css'

const pay = (props) => {
    return (

        <div>
            <p className="contnt">
                <h3>{props.para}</h3>
            </p>
            <h4 className="third">{props.des}</h4>
        </div>
    )
}
export default pay;