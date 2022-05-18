import React from "react";
import './method.css'

const data = [
    {
        imgs: 'credit card d',
        para: 'Credit card'
    },
    {
        imgs: 'money bill alternate',
        para: 'Cash'
    },
    {
        imgs: 'edit outline',
        para: 'Check'
    },
    {
        imgs: 'book',
        para: 'others'
    },
    {
        imgs: 'stop circle outline',
        para: 'Custom 1',
        icon:'pencil alternate',
        iconone:'trash alternate'
    },
    {
        imgs: 'bullseye',
        para: 'Custom 2',
        icon:'pencil alternate',
        iconone:'trash alternate'
    },
]

const Method = () => {
    return (
        <div>
            <div>
                {
                    data?.map((datas, index) => {
                        return (
                            <div>
                                <div className="maps-css">
                                    <div className="item" key={index}>
                                        <div className="visa-css">
                                            <div class="ui toggle checkbox">
                                                <input type="checkbox" checked name="public" />
                                                <label></label>
                                            </div>
                                            <div className="cash-css">
                                                <div>
                                                <i className={`${datas.imgs} icon`}></i>
                                                <p>{datas.para}</p>
                                                </div>
                                                <div>
                                                <i className={`${datas.icon} icon`}></i>
                                                <i className={`${datas.iconone} icon`}></i>
                                                </div>
                                            </div>
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
export default Method;