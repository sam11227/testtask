import React from "react";
import './checkBox.css';
const data = [
    {
        heading: 'Payout Email',
        Text: 'Email',
        para: ' sent one day prior the payment due date',
        btnOne: 'SMS'
    },
    {
        heading: 'Credit Card Disputes',
        Text: 'Email',
        para: ' sent one day prior the payment due date',
        btnOne: 'SMS'
    },
]

const checkBox = () => {
    return (
        <div>
            {
                data?.map((info, index) => {
                    return (
                        <div className="item container" key={index}>
                            <div className="container" >
                                <div className="btn-fit">
                                    <div>
                                        <h3>{info.heading}</h3>
                                    </div>
                                    <div className="box-one">
                                        <div className="ui left ">
                                            <div className="ui fitted toggle checkbox">
                                                <input type="checkbox" />
                                                <label></label>
                                            </div>
                                        </div>
                                        <p>{info.Text}</p>
                                    </div>
                                </div>
                                <div className="para">
                                    <p>{info.para}</p>
                                    <div className="ui left ">
                                    {info.btnOne}
                                        <div className="ui fitted toggle checkbox">
                                            <input type="checkbox" checked/>
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
        
        
    )
}
export default checkBox;