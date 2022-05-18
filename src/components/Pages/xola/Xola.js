import React from "react";
import Navbar from "../../sidebar/Navber";
import Header from "../header/Header";
import Secondary from "../Secondary/Secondary";
import Bot from "./bot";

const Xola = () =>{ 
    return(
        <div>
            <div className="main-box">
                <Navbar />
                <div className="mainContainer">
                    <Header title = "Settings/"
                            para ="App"/>
                    <div className="content">
                        <Secondary />
                        <div className="gap">
                            <Bot/>

                            
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}
export default Xola;