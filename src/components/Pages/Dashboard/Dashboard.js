import React from "react";
import Navbar from "../../sidebar/Navber";
import Header from "../header/Header";
import Secondary from "../Secondary/Secondary";
import Profile from "../Profile/Profile";
import Form from "../Forms/Form";
import Button from "../Button/Button";
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div>
            <div className="main-box">
                <Navbar />
                <div className="mainContainer">
                    <Header title="Settings/"
                        para="Company Profile" />
                    <div className="content">
                        <Secondary />
                        <div className="gap">
                            <Profile />
                            <Form />
                            <Button shug="shagufta" />
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}
export default Dashboard;