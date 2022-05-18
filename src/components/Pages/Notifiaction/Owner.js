import React from "react";
import Navbar from "../../sidebar/Navber";
import Header from "../header/Header";
import Secondary from "../Secondary/Secondary";
import Notifcation from "./Notifiaction";
import './Owner.css'

const Owner = () => {
    return (
        <div>
            <div className="main-box">
                <Navbar />
                <div className="mainContainer">
                    <Header title = "Settings/"
                            para ="Notifications"/>
                    <div className="content">
                        <Secondary />
                        <div className="gap">
                            <Notifcation/>
                            
                        </div>
                    </div>
                </div>
            </div>



        </div>

    )
}
export default Owner;