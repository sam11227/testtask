import React from "react";
import Assess from "./Assess";
import Header from "../header/Header";
import Secondary from "../Secondary/Secondary";
import Navbar from "../../sidebar/Navber";

const User = () => {
    return (
        <div>
            <div className="main-box">
                <Navbar />
                <div className="mainContainer">
                    <Header title = "Settings/"
                            para ="Grant Access" />
                    <div className="content">
                        <Secondary />
                        <div className="">
                            <Assess />
                        </div>
                    </div>
                </div>
            </div>



        </div>

    )
}
export default User;