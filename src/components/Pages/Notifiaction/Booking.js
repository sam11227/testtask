import React from "react";
import Content from "./Content";
import AllButton from "../../AllButton/AllButton";
import './Booking.css'
const nam =[
    {
        heading:'Booking confirmation',
        text:'Email',
        para:'sent when a new booking is accepted',
        btntext:'SMS'
    },
    {
        heading:'Booking confirmation',
        text:'Email',
        para:'Send when a booking is modified',
        btntext:'SMS'
    },
    {
        heading:'Booking confirmation',
        text:'Email',
        para:'Send when a booking is canceled',
        btntext:'SMS'
    },
    {
        heading:'Event Roster',
        text:'Email',
        para:'Send a day prior to start of the event ',
        btntext:'SMS'
    },
    {
        heading:'Deposit reminder',
        text:'Email',
        para:'Sent when an automated payout is made or is deferred',
        btntext:'SMS'
    },
    {
        heading:'Invoice reminder',
        text:'Email',
        para:'Sent 1Day(s) prior to the invoice due date ',
        btntext:'SMS'
    },
    {
        heading:'Invoice reminder',
        text:'Email',
        para:'Sent 1Day(s) prior to the invoice due date ',
        btntext:'SMS'
    },
    {
        heading:'Join Waitlist',
        text:'Email',
        para:'Sent when a customer',
        btntext:'SMS'
    },
    {
        heading:'No guides assingned reminder',
        text:'Email',
        para:'Sent when an no guide is assingned to an upcoming event with confirmed bookings',
        btntext:'SMS'
    },
]
const buttonStyle = {
    border: "none",
    borderRadius: "5px",
    background: "blue",
    padding: "8px 15px",
    color: "White",
    marginLeft: "10px",
    fontWeight: "400",
    fontSize: "smaller",
    backgroundColor:'none',
  }


const Booking = () => {
    return(
        <div >
            <hr/>
            <br/>
            <div className="main-box">
                <div>
                    <h4>Sent to Company</h4>
                </div>
                <div>
                    <div className="middle-box"> 
                        <Content heading='Communications Email' para='Primary@Company.com'/>
                        <AllButton name='Change' style={buttonStyle}/>
                    </div>
                    <div>
                        <br/>
                    {
                        nam?.map((num ,index) =>{
                            return(
                                <div className="item container" key={index}>
                                <div className="container" >
                                    <div className="btn-fit">
                                        <h3>{num.heading}</h3>
                                        <div className="box-one">
                                            <div className="ui left ">
                                            <p>{num.text}</p>
                                                <div className="ui fitted toggle checkbox">
                                                    <input type="checkbox" />
                                                    <label></label>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="para">
                                        <p>{num.para}</p>
                                        <div className="ui left ">
                                        <p>{num.btntext}</p>
                                            <div className="ui fitted toggle checkbox">
                                                <input type="checkbox" checked />
                                                <label></label>
                                            </div>
                                            
                                        </div>
                                        
                                        
                                    </div>
                                    <br/>
                                </div>
                            </div>
                            )
                        })
                    }
                    </div>
                </div>
                
            </div>
            
            
        </div>
    )
}
export default Booking;