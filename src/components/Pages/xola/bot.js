import React from "react";
import AllButton from "../../AllButton/AllButton";
import './bot.css'
const data = [
    {
        heading: "Xsola Bot App",
        para: "re-engange Site Vistors",
        btn: "Go to App"
    },
    {
        heading: "Xsola Bot App",
        para: "re-engange Site Vistors",
        btn: "Go to App"
    },
    {
        heading: "Xsola Bot App",
        para: "re-engange Site Vistors",
        btn: "Go to App"
    },
    {
        heading: "Xsola Bot App",
        para: "re-engange Site Vistors",
        btn: "Go to App"
    },

]
const buttonStyle = {
    borderRadius: "5px",
    background: "white",
    padding: "7px 8px",
    color: "black",
    fontWeight: "700",
    fontSize: "smaller",
    border: 'solid 0.1px darkgrey',
  }

const Bot = () => {
    return (
        <div>
            {
                data?.map((dat , index) =>{
                    return(
            <div className="ui relaxed divided list" key={index}>
                <div className="bot-css">
                    <div className="item">
                        <i className="large github middle aligned icon"></i>
                        <div className="">
                            <a className="header">
                            <h4>{dat.heading}</h4></a>
                            <div className="description">{dat.para}</div>
                        </div>
                    </div>
                    <div></div>
                    <AllButton name={dat.btn} style={buttonStyle}/>
                    </div>               
                <hr/>
            </div>
            
            )
                })
            }
        </div>


    )
}
export default Bot;