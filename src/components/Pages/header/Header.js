import React from "react";
import './Header.css'


const Header = (props) => {
    return (
        <div className="main">
            <div className="pro">
                <span>{props.title}</span>
                <h3>{props.para}</h3>
            </div>
        </div>
    )
}
export default Header;