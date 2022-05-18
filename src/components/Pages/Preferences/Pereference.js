import React from "react";
import Navbar from "../../sidebar/Navber";
import Header from "../header/Header";
import Secondary from "../Secondary/Secondary";
import Base from "./base";

const Preference = () => {
    return (
        <div>
            <div className="main-box">
                <Navbar />
                <div className="mainContainer">
                    <Header title = "Settings/"
                            para ="Preferences"/>
                    <div className="content">
                        <Secondary />
                        <div className="gap">
                            <Base/>

                            
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
  };
  export default Preference;