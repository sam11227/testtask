/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import './Profile.css'
import col from "../../assets/logo/3.jpg";
const Profile = () => {
    return (
        <div className="box">
            <div>
                <div className="child-box">
                    <div>                   
                        <h3> Basic Information</h3>
                        <p> General Information about your Company.<br />
                            This Information is displayed in email <br />
                            communications with your customers for<br />
                            refernce.
                        </p>
                    </div>
                    <div>
                        <div className="btn-css">
                            <div className="pos">
                                <img className="img" src={col} />
                                <div >
                                    <div >
                                        <button class="ui basic button">
                                            <i class="icon user"></i>
                                            Delete
                                        </button>
                                        <button class="ui primary button">
                                            Upload New Picture
                                        </button>
                                    </div>
                                    <p>Check that the image is in PNG or JPG format and dose not exceed 5mb</p>
                                </div>
                            </div>
                        </div>
                        <div class="ui form dec">
                            <div class="field">
                                <label>Company Name</label>
                                <input type="text" />
                                <label>Phone</label>
                                <input type="text" />
                                <label>Website</label>
                                <input type="text" />
                                <label>Street</label>
                                <input type="text" />
                                <label>City</label>
                                <input type="text" />
                                <div class="ui form">
                                    <div class="field">
                                        <label>State/Province</label>
                                        <select multiple="" class="ui dropdown">
                                            <option value="">California</option>
                                            <option value="">pakistan</option>
                                        </select>

                                    </div>
                                </div>
                                <label>Postal Code</label>
                                <input type="text" />
                                <div class="field">
                                    <label>Country/Region</label>
                                    <select multiple="" class="ui dropdown">
                                        <option value="">United State</option>
                                        <option value="">pakistan</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;