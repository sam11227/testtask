import React from "react";
import AllButton from "../../AllButton/AllButton";
import Navbar from "../../sidebar/Navber";
import Header from "../header/Header";
import Secondary from "../Secondary/Secondary";
import './texes.css';
const icon = <i className="plus icon"/>
const buttonStyle = {
    border: "none",
    borderRadius: "5px",
    padding: "8px 15px",
    color: "black",
    marginLeft: "10px",
    fontWeight: "400",
    fontSize: "smaller",
    backgroundColor: 'none',
    width: '90px',
    height: '35px',
    fontWeight: 'bold'
}

const Preference = () => {
    return (
        <div>
            <div className="main-box">
                <Navbar />
                <div className="mainContainer">
                    <Header title="Settings/"
                        para="Taxes & Fees" />
                    <div className="content">
                        <Secondary />
                        <div className="gap">
                            <div className="fee-css">
                                <div>
                                    <h4>Taxes & Fees</h4>
                                    <p>Amet minim mollit non deserunt ullamco <br /> ests sit aliqua dolor do Amet sint</p>
                                </div>
                                <AllButton name="Add" style={buttonStyle}  ico={icon} />
                            </div>
                            <div className="table-css">
                                <table className="ui table">
                                    <thead>
                                        <tr><th className="">Title</th>
                                            <th className="">Type</th>
                                            <th className="">Term</th>
                                            <th className="">Sources</th>
                                            <th className="">Channels</th>
                                            <th className="">Products</th>
                                            <th className="">Add-ons</th>
                                            <th className="">Actions</th>
                                        </tr></thead>
                                    <tbody>
                                        <tr>
                                            <td>Heliport Fee</td>
                                            <td>Fee</td>
                                            <td>$100.00 <br/>
                                             per person /per trip</td>
                                            <td>Cheackout, Office,Kiosk, <br/>
                                                 App & Integrations</td>
                                                 <td>3 Channels <hr/></td>
                                            <td>3 Products <hr/> </td>
                                            <td>On</td>
                                            <td><i class="pencil alternate icon "></i>
                                            <i class="trash alternate outline icon"></i></td>                                           
                                            
                                        </tr>
                                        <tr>
                                            <td>Heliport Fee</td>
                                            <td>Fee</td>
                                            <td>$100.00 <br/>
                                             per person /per trip</td>
                                            <td>Cheackout, Office,Kiosk, <br/>
                                                 App & Integrations</td>
                                            <td>3 Channels <hr/></td>
                                            <td>3 Products <hr/> </td>
                                            <td>On</td>
                                            <td><i class="pencil alternate icon "></i>
                                            <i class="trash alternate outline icon"></i></td>   
                                        </tr>
                                        <tr>
                                            <td>Heliport Fee</td>
                                            <td>Fee</td>
                                            <td>$100.00 <br/>
                                             per person /per trip</td>
                                            <td>Cheackout, Office,Kiosk, <br/>
                                                 App & Integrations</td>
                                            <td>3 Channels <hr/></td>
                                            <td>3 Products <hr/> </td>
                                            <td>On</td>
                                            <td><i class="pencil alternate icon "></i>
                                            <i class="trash alternate outline icon"></i></td>   
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Preference;