/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Secondary.css";
import { Link } from "react-router-dom";

const data = [
    {
        icons: "user outline",
        heading: "Company Profile",
        para: "Basic Information about your company",
        link: "/Dashboard"
    },
    {
        icons: "lock",
        heading: "Users &  Assess",
        para: "Manage users and access levels",
        link: "/User"
    },
    {
        icons: "bell outline",
        heading: "Notifcations",
        para: "Manage email and SMS notifcation to your customers and staff",
        link: "/Owner"
    },
    {
        icons: "toggle off",
        heading: "Button code",
        para: "Create and manage book now buttons for your website",
        link: "/Preference"
    },
    {
        icons: "tablet alternate",
        heading: "Apps",
        para: "Configure and manage your installed apps from the Xola App Store",
        link: "/xola"
    },
    {
        icons: "tablet alternate",
        heading: "Taxes",
        para: "Configure and manage your business texes and fees",
        link: "/taxes"
    },
    {
        icons: "credit card outline",
        heading: "Payments",
        para: "Configure and manage payout details for payments processors",
        link: "/Payments"
    },
    {
        icons: "tablet alternate",
        heading: "Hardware",
        para: "pair and manage PSO and Create Card devices",
        link: "/Hardware"
    },

];

const Secondary = () => {
    return (
        <div>
            <div className="bas">
                <div id="link-css" className=" ui vertical menu item " >
                    {
                        data?.map((nav, index) => {
                            return (
                                <Link to={nav.link}>
                                    <div className="item" key={index}>
                                        <a className="item">
                                            <div id="link-flex">
                                                <i id="icon-flex" className={`${nav.icons} icon`}></i>
                                                <h4 className="ui header">{nav.heading}</h4>
                                            </div>
                                            <div className="description">{nav.para}</div>                                         
                                        </a>
                                        <hr/>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>

        </div>

    )
}

export default Secondary;