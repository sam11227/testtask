import React from "react";
import './card.css'
const data = [
    {
        imgs: 'cc visa icon</i>',
        para: 'Accepting VISA'
    },
    {
        imgs: 'cc mastercard icon',
        para: 'Accepting VISA'
    },
    {
        imgs: 'address card',
        para: 'Accepting VISA'
    },
    {
        imgs: 'cc discover',
        para: 'Accepting VISA'
    },
    {
        imgs: 'credit card',
        para: 'Accepting VISA'
    },
    {
        imgs: 'cc diners club',
        para: 'Accepting VISA'
    },
    {
        imgs: 'window minimize',
        para: 'Accepting VISA'
    },
    {
        imgs: 'credit card outline',
        para: 'Accepting VISA'
    },
]

const Card = () => {
    return (
        <div>
            <div>
                <br/>
                <h4>Accepted Credits Cards</h4>
            </div>
            <br/>
            <div>
                {
                    data?.map((datas, index) => {
                        return (
                            <div >
                                <div className="maps-css">
                                    <div className="item" key={index}>
                                        <div className="visa-css">
                                            <div class="ui toggle checkbox">
                                                <input type="checkbox" checked name="public" />
                                                <label></label>
                                            </div>
                                            <i className={`${datas.imgs} icon`}></i>
                                            <p>{datas.para}</p>
                                        </div>
                                    </div>
                                </div>
                                <br />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Card;