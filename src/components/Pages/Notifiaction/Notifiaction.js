import React from "react";
import Content from "./Content";
import AllButton from "../../AllButton/AllButton";
import CheckBox from "../checkBox/checkBox";
import "./Notifiaction.css";
import Booking from "./Booking";
import Customer from "./Customer";
import Button from "../Button/Button";

const buttonStyle = {
  border: "none",
  borderRadius: "5px",
  background: "blue",
  padding: "8px 15px",
  color: "White",
  marginLeft: "10px",
  fontWeight: "400",
  fontSize: "smaller",
}


const Notifcation = () => {
  return (
    <>
      <div>
        <div>
          <h2>Notifcation</h2>
        </div>
        <div className="box">
          <h4>Sent to Account Owner</h4>
          <div className="para-box">
            <Content heading='Primary Account Email' para='Primary@Company.com' />
            <br/>
            <AllButton name='Change' style={buttonStyle} />
            <br/>
            <CheckBox />
          </div>
        </div>
        <Booking />
        <Customer/>
        <Button/>

      </div>
    </>
  )
};
export default Notifcation;