import React from "react";
import Navbar from "../../sidebar/Navber";
import Header from "../header/Header";
import Pay from "./pay";
import Secondary from "../Secondary/Secondary";
import './Payment.css'
import AllButton from "../../AllButton/AllButton";
import Card from "./card";
import Method from "../Taxes/method";
import Button from "../Button/Button";

const buttonStyle = {
    border: "none",
    borderRadius: "5px",
    background: "blue",
    color: "White",
    fontWeight: "400",
    fontSize: "smaller",
    backgroundColor: 'blues',
    width: '90px',
    height: '35px'
}
const btnStyle = {
    border: "none",
    borderRadius: "10px",
    background: "#b4e9b4",
    color: "#18b418",
    fontWeight: "400",
    fontSize: "smaller",
    backgroundColor: '#b4e9b4',
    width: '85px',
    height: '30px'
}

const Dashboard = () => {
    return (
        <div>
            <div className="main-box">
                <Navbar />
                <div className="mainContainer">
                    <Header title="Settings/"
                        para="Payments" />
                    <div className="content">
                        <Secondary />
                        <div className="gap">
                            <Pay para='Payments'
                                des='Please provide information that is consistent with the information you provided on your recent tax fillings'
                            />
                            <div className="way-css">
                                <div className="sb-box">
                                    <Pay para='Payments Processors' />
                                </div>
                                <div className="gate-css">
                                    <h4>Gateway</h4>
                                    <div className="ui input fluid">
                                        <input type="text" placeholder="Xola" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <hr />
                                <div className="way-css">
                                    <div className="sb-box">
                                        <Pay para='KYC'
                                            des='KYC  KYC means Know Your Customer and sometimes Know Your Client. KYC or KYC check is the mandatory process of identifying and verifying the clients identity when opening an account and periodically over time.' />
                                    </div>
                                    <div className="gate-css">
                                        <h4>KYC Status</h4>
                                        <div className="kyc-css">
                                            <Pay para="Verification Required"
                                                des=" In other words, banks must make sure that their clients are genuinely who they claim to be.
                                            In other words, banks must make sure that their clients are genuinely who they claim to be."
                                            />
                                            <div className="left">
                                                <AllButton name="Update KYC" style={buttonStyle} />
                                            </div>
                                        </div>
                                        <div className="ver-css">
                                            <Pay para="KYC Status" />
                                            <AllButton name="Verified" style={btnStyle} />
                                        </div>
                                        <Pay des="your account is verified with our payment processer" />
                                    </div>
                                </div>
                                <div>
                                    <hr />
                                    <div className="way-css">
                                        <div className="sb-box">
                                            <Pay para='Bank Account' />
                                        </div>
                                        <div className="gate-css">
                                            <h4>RoutingNumber</h4>
                                            <div className="ui input fluid">
                                                <input type="text" placeholder="021000021" />
                                            </div>
                                            <h4>Account Number </h4>
                                            <div className="ui input fluid">
                                                <input type="text" placeholder="*****5132" />
                                            </div>
                                            <br />
                                            <AllButton name="edit" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <hr />
                                    <div className="way-css">
                                        <div className="sb-box">
                                            <Pay para='Credit Card Settings' />
                                        </div>
                                        <div className="gate-css">
                                            <div>
                                                <h4>Statement descriptors</h4>
                                                <div className="ui input fluid">
                                                    <input type="text" placeholder="Old South Carriage Co" />
                                                </div>
                                            </div>
                                            <br />
                                            <div>
                                                <Pay para='Additional Billing Inforamtion' />
                                                <div>
                                                    <div class="ui toggle checkbox">
                                                        <input type="checkbox" checked name="public" />
                                                        <label>Require full address to process Credit card Payments</label>
                                                    </div>
                                                </div>
                                                <Card />



                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <hr />
                                    <div className="way-css">
                                        <div className="sb-box">
                                            <Pay para='Payment Methods' />
                                        </div>
                                        <div className="gate-css">
                                            <div>
                                                <h4>Available Methods</h4>
                                                <Method/>
                                                <AllButton name='Add Custom Payment Method' />
                                                <br/> 
                                                <div>
                                                    <h4>Default Payments Method</h4>
                                                    <div className="ui input fluid">
                                                        <input type="text" placeholder="Credit Card" />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Button />
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Dashboard;