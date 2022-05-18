import React from "react";
import Side from "./Side";
import './base.css';
import AllButton from "../../AllButton/AllButton";
import Button from "../Button/Button";
import pic from "../../../img/img.jpg";
import picone from "../../../img/12.jpg";
const buttonStyle = {
    border: "none",
    borderRadius: "5px",
    background: "blue",
    padding: "8px 15px",
    color: "White",
    marginLeft: "10px",
    fontWeight: "400",
    fontSize: "smaller",
    backgroundColor: 'none',
    width: '90px',
    height: '35px'
}

const Base = () => {
    return (

        <div>
            <div>
                <h2>
                    Button
                </h2>
            </div>
            <div className="m-box">
                <Side
                    num='1'
                    para='Copy + Past this into your site common header or footer' />
                <div className="p-box">
                    <p>
                        {`<!--HTML et (x)HTML --> 
                   <script type="text"/javascrpt.js"></script>
                   <!--HTML5-->
                   <script src="javascript.js"></script>`}
                    </p>
                </div>
            </div>
            <div>
                <hr />
                <div className="pop-css">
                    <div>
                        <Side
                            num='2'
                            para='Choose your checkout type' />
                    </div>
                    <div>
                        <div className="ui form">
                            <div className="grouped fields">
                                <div className="field">
                                    <div className="ui radio checkbox">
                                        <input type="radio" name="example2" checked="checked" />
                                        <label>Pop up</label>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui radio checkbox">
                                        <input type="radio" name="example2" />
                                        <label>Embedded</label>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui radio checkbox">
                                        <input type="radio" name="example2" />
                                        <label>URL</label>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <hr />
                <div className="accent-css">
                    <div>
                        <Side
                            num='3'
                            para='Choose your design and color'
                            des='xola will choose appropriate front and button colors to contrast with your website' />
                    </div>
                    <div>
                        <div className="ui form">
                            <div className="grouped fields">
                                <label>Website Theme</label>
                                <div className="field">
                                    <div className="ui radio checkbox">
                                        <input type="radio" name="example2" checked="checked" />
                                        <label>Light theme</label>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="ui radio checkbox">
                                        <input type="radio" name="example2" />
                                        <label>Dark them</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="t-box">
                                <h4>Accent Color</h4>
                                <div className="out-box">
                                    <div className="color-box"></div>
                                    <p>#1708FF</p>
                                </div>
                            </div>
                            <div>
                                <h4>Button</h4>
                                <div className="style-box">
                                    <div className="ui form">
                                        <div className="grouped fields">
                                            <div className="field">
                                                <div className="ui radio checkbox">
                                                    <input type="radio" name="example2" checked="checked" />
                                                    <label>Default</label>
                                                </div>
                                            </div>
                                            <div className="field">
                                                <div className="ui radio checkbox">
                                                    <input type="radio" name="example2" />
                                                    <label>Custom</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h3>Preview:</h3>
                                    <AllButton name="BooK Now" style={buttonStyle} />
                                    <AllButton name="Buy Gift" style={buttonStyle} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <hr />
                <div>
                    <Side
                        num='4'
                        para='Choose your design and color' />
                </div>
            </div>
            <div>
                <hr />
                <div>
                    <Side
                        num='5'
                        para='Copy + paste button code' />
                </div>
                <div>
                <div>
                    <div className="ui top attached tabular menu">
                        <div className="active item">Single item Cheackout</div>
                        <div className="item">Multiple item Cheackout</div>
                        <div className="item">Timeline</div>
                        <div className="item">Gift</div>
                    </div>
                    <div id="style" className=" ui bottom attached active tab segment">
                        <div>
                        <div className="box-heading">
                            <h4 className="ui header">
                            <img src={pic} className=" image"/>
                            Himalaya Hike and Yoga  Time
                            </h4>
                            <span className="">
                            <p>
                                    {`<!--HTML et (x)HTML --> 
                            <script type="text"/javascrpt.js"></script>
                            <!--HTML5-->
                            <script src="javascript.js"></script> <!--HTML et (x)HTML --> `
                            }
                                </p>
                            </span>
                        </div>
                        <div className="box-heading">
                        <h4 className="ui header">
                            <img src={picone} className=" image"/>
                            San Francisco Tour and Coffee Time
                            </h4>
                            <span className="">
                            <p>
                                    {`<!--HTML et (x)HTML --> 
                            <script type="text"/javascrpt.js"></script>
                            <!--HTML5-->
                            <script src="javascript.js"></script> <!--HTML et (x)HTML --> `
                            }
                                </p>
                            </span>
                        </div>
                        </div>
                        </div>
                    </div>
                    <div/>
                </div>
            </div>
            <Button/>
        </div>
    )
}
export default Base;