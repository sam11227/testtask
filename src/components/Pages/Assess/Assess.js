import React, { useState } from "react";
// import { icons } from "react-icons";
import AllButton from "../../AllButton/AllButton";
import "./Assess.css"

const Assess = () => {
  const [active, setActive] = useState(true)
  const buttonStyle = {
    border: "1px solid #e5e2e2",
    borderRadius: "5px",
    background: "white",
    padding: "5px",
    color: "black",
    marginLeft: "10px",
    fontWeight: "600",
    fontSize: "smaller",
  }

  return (
    <div>
      <div className="ui top attached tabular menu">
        <div className="active item">Lorem lpsum</div>
        <div className="item">Manage Roles</div>
      </div>
      <div id="style" className=" ui bottom attached active tab segment">
        <div>
          <div className="box-heading">
            <h3>James Scott </h3>
            <span className="btn-style">Account Owner</span>
          </div>
          <div className="child-box">
            <p className="para-one">@leilaccount@gamil.com</p>
            <p className="para-two">newemail@gmail.com</p>
            <p className="para-there">Pedding Email Verification</p>
          </div>
          <div className="phone">
            <i class="phone volume icon"></i>
            <p>(451) 721 31 52</p>
          </div>
        </div>
        <div className="content-box">
          <div className="all-btn">
            <AllButton name="Resend Invite" active={active} style={buttonStyle} />
            <AllButton name="Cancel Invite" active={active} style={buttonStyle} />
            <AllButton icon="pencil alternate icon" active={active} style={buttonStyle} />
          </div>
          <div className="time">
            <p>
              Last login: Nov 21,2021 1:12pm
            </p>
          </div>
        </div>
      </div>
      <div id="style" className=" ui bottom attached active tab segment">
        <div>
          <div className="box-heading">
            <h3>Darlene Robertson </h3>
            <span className="btn-style">Admin</span>
          </div>
          <div className="child-box">
            <p className="para-one">@leilaccount@gamil.com</p>
          </div>
          <div className="phone">
            <i class="phone volume icon"></i>
            <p>(451) 721 31 52</p>
          </div>
        </div>
        <div className="content-box">
          <AllButton icon="pencil alternate icon" active={active} style={buttonStyle} />
          <div className="time">
            <p >
              Last login: Nov 21,2021 1:12pm
            </p>
          </div>
        </div>
      </div>
      <div id="style" className=" ui bottom attached active tab segment">
        <div>
          <div className="box-heading">
            <h3>Leslie Alexander </h3>
          </div>
          <div className="child-box">
            <p className="para-one">@leilaccount@gamil.com</p>
          </div>
          <div className="phone">
            <i class="phone volume icon"></i>
            <p>(451) 721 31 52</p>
          </div>
        </div>
        <div className="content-box">
          <AllButton icon="pencil alternate icon" active={active} style={buttonStyle} />
          <div className="time">
            <p>
              Last login: Nov 21,2021 1:12pm
            </p>
          </div>
        </div>
      </div>
      <div id="style" className=" ui bottom attached active tab segment">
        <div>
          <div className="box-heading">
            <h3>Barthelemy chalvet Long Name </h3>
            <p className="para-there">Pedding Email Verification</p>
          </div>
          <div className="child-box">
            <p className="para-one">@leilaccount@gamil.com</p>
          </div>
          <div className="phone">
            <i class="phone volume icon"></i>
            <p>(451) 721 31 52</p>
          </div>
          <div className="list-data">
            <p>Equipment Manager</p> <p>Marketer</p> <p>Reservationist</p><p>Guide Manager</p> <p>Accountant</p><p>Guide</p> <p>Guide</p> <br />
            <p>Reservationist</p> <p>Guide Manager</p> <p>Accountant</p> <p>Guide</p>
          </div>
        </div>
        <div className="content-box">
          <div className="all-btn">
            <AllButton name="Resend Invite" active={active} style={buttonStyle} />
            <AllButton name="Cancel Invite" active={active} style={buttonStyle} />
            <AllButton icon="pencil alternate icon" active={active} style={buttonStyle} />
          </div>
          <div className="time">
            <p>
              Last login: Nov 21,2021 1:12pm
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};
export default Assess;