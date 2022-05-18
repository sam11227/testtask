/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import "./Navber.css";
import logo from "../assets/logo/1.jpg";
import Min from "../assets/logo/2.jpg";
import { TiCancelOutline } from "react-icons/ti";
import { TiDirections } from "react-icons/ti";
import { TiGroup} from "react-icons/ti";
import { TiShoppingBag} from "react-icons/ti";
import { TiPrinter} from "react-icons/ti";
import { TiChartBar} from "react-icons/ti";
import { TiVolume} from "react-icons/ti";
import {TiMediaStopOutline} from "react-icons/ti"
import {TiPointOfInterest} from "react-icons/ti"
import {TiCogOutline} from "react-icons/ti"


const Navbar = () =>{
    return (
            <div id='com' >        
                <div class=" ui inverted vertical menu">
                        <img className='mini-icon' src={Min}/>
                        <div className='Logo'>
                                <img className="icon"  src={logo}/>
                        </div>
                        <div className='nav '>
                                <a className= "item borderless   "><TiCancelOutline/> Dashboard</a>
                                <a className="item borderless "><TiDirections/>Purchases</a>
                                <a className=" borderless item ui dropdown"><TiGroup/>Customers
                                        <i className="dropdown icon"></i></a>
                                <a className=" borderless item ui dropdown"><TiShoppingBag/>Product
                                        <i className="dropdown icon"></i></a>
                                <a className=" borderless item ui dropdown"><TiPrinter/>Resources
                                        <i className="dropdown icon"></i></a>
                                <a className=" borderless item ui dropdown"><TiChartBar/>Reports
                                        <i className="dropdown icon"></i></a>
                                <a className=" borderless item ui dropdown"><TiVolume/>Marketing
                                        <i className="dropdown icon"></i></a>
                                <a className="item borderless "><TiMediaStopOutline/>App Store</a>
                                <a className=" borderless item ui dropdown"> <TiPointOfInterest/>Xray
                                        <i className="dropdown icon"></i></a>
                                <a className="active borderless item ui dropdown"><TiCogOutline/>Settings
                                        <i className="dropdown icon"></i></a>
                        </div>
                </div>
         </div>
    )
}
export default Navbar;

