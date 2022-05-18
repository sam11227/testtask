import React from "react";
import Navbar from "../../sidebar/Navber";
import Header from "../header/Header";
import Secondary from "../Secondary/Secondary";
import Pay from "../Payments/pay";
import AllButton from "../../AllButton/AllButton";
import './hardware.css';
import Ware from "./ware";

const buttonStyle = {
  border: "1px solid #e5e2e2",
  borderRadius: "5px",
  background: "white",
  padding: "5px",
  color: "black",
  marginRight: "10px",
  fontWeight: "300",
  fontSize: "smaller",
}

const btnStyle = {
  border: "1px solid #e5e2e2",
  borderRadius: "20px",
  background: "#87f787",
  padding: "8px",
  color: "#0e8d0e",
  marginRight: "10px",
  fontWeight: "300",
  fontSize: "smaller",
}

const Hardware = () => {
  return (
    <div>
      <div className="main-box">
        <Navbar />
        <div className="mainContainer">
          <Header title="Settings/"
            para="Hardware" />
          <div className="content">
            <Secondary />
            <div className="gap">
              <Pay para='Hardware'
              />
              <div className="way-css">
                <div className="sb-box">
                  <Pay para='Payment Terminal' />
                </div>
                <div className="gate-css">
                  <h4>POS Station Label</h4>
                  <div className="ui input fluid">
                    <input type="text" placeholder="Enter an label to identity this POS" />
                  </div>
                  <div>
                    <h4>Paired Device</h4>
                    <div className="pair fluid">
                      <div className="pen-css">
                        <i className="mobile alternate icon"></i>
                        <p>BBPos Device-1</p>
                        <AllButton name="Paired" style={btnStyle} />
                      </div>
                      <div className="pen-css">
                        <AllButton name="Unpair" style={buttonStyle} />
                        <AllButton icon="pencil alternate icon" style={buttonStyle} />
                        <AllButton icon="trash alternate icon" style={buttonStyle} />
                      </div>
                    </div>
                  </div>
                  <Ware />
                  <AllButton name='Add Device' />
                </div>
              </div>
              <div>
                <hr />
                <div className="way-css">
                  <div className="sb-box">
                    <Pay para='Receipt Printing' />
                  </div>
                  <div className="gate-css">
                    <h4>Receipt Printer</h4>
                    <div className="ui input fluid">
                      <input type="text" placeholder="Select a printer" />
                    </div>
                    <div>
                      <div className="ticket">
                        <div class="ui toggle checkbox ticket">
                          <input type="checkbox" checked name="public" />
                          <label>print ticket successful booking</label>
                        </div>
                        <br />
                        <div class="ui toggle checkbox ticket">
                          <input type="checkbox" checked name="public" />
                          <label>Automatically check-in guest when printing ticket</label>
                        </div>
                      </div>
                    </div>
                    <AllButton name='Advanced Settings' />
                  </div>
                </div>
              </div>
              <div>
                <hr />
                <div className="title-css">
                  <div className="sb-box">
                    <Pay para='Ticket Priting' />
                  </div>
                  <div className="gate-css">
                    <div class="ui toggle checkbox ticket">
                      <div className="bg-css">
                        <input type="checkbox" checked name="public" />
                        <label>Enabled</label>
                        <p>Ticket Printer is currently enabled</p>
                      </div>
                    </div>
                    <div>
                      <h4>Ticket Printer</h4>
                      <div className="ui input fluid">
                        <input type="text" placeholder="Select a printer" />
                      </div>
                      <div>
                        <h4>FGL Template</h4>
                        <div className="p-box">
                          <p>
                            {`<!--HTML et (x)HTML --> 
                          <script type="text"/javascrpt.js"></script>
                          <!--HTML5-->
                          <script src="javascript.js"></script>`}
                          </p>
                        </div>
                      </div>
                      <div className="temp-css">
                        <AllButton name='Print Test Ticket'/>
                        <AllButton name='Save Ticket Template'/>
                      </div>
                      <div>
                        <h4>Check-in Rules</h4>
                        <p>Add rules to be validated during guest checkin.</p>
                      </div>
                      <div className="pair fluid">
                      <div className="pen-css">
                        <h4>Rules Title</h4>
                      </div>
                      <div className="pen-css">
                        <AllButton name="Required" style={btnStyle} />
                        <AllButton name="Shown on ticket" style={buttonStyle} />
                        <AllButton icon="pencil alternate icon" style={buttonStyle} />
                        <AllButton icon="trash alternate icon" style={buttonStyle} />
                      </div>
                    </div>
                    <AllButton name='Add Rule'/>
                    </div>
                  </div>
                </div>
                <hr/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
export default Hardware;