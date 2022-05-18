import React from "react";
import './form.css'

const Form = () => {
    return(
        <div>
            <hr/>
            <div className="form-css">
            
            <div>
                <h3>Social Links</h3>
                <p>This Information is displayed in email <br/>
                    communications with your customers for <br/>
                    refernce.
                </p>
            </div>
            <div  className="ui form ">
            <div id="form-w" class="field ">
                <label>Facebook</label>
                <input type="text"/>
                <label>Twitter</label>
                <input type="text"/>
                <label>Instagram</label>
                <input type="text"/>
                <label>Tiktok</label>
                <input type="text"/>
                <label>Snapchat</label>
                <input type="text"/>
                <label>Tripadvisor</label>
                <input type="text"/>
                <label>Yelp</label>
                <input type="text"/>
            </div>
            </div>
        </div>

        </div>
        
    )
}
export default Form;