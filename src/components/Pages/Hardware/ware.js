import React from "react";
import AllButton from "../../AllButton/AllButton";

const data = [
    {
        icon: 'name',
        text: 'Xola Device-2',
        btn: 'paried',
        btnone: 'unpair',
        btntwo: 'pen',
        btnthree: 'tash'
    },
    {
        icon: 'name',
        text: 'Xola Device-3',
        btnone: 'unpair',
        btntwo: 'pen',
        btnthree: 'tash'
    },
    {
        icon: 'name',
        text: 'Xola Device-4',
        btnone: 'unpair',
        btntwo: 'pen',
        btnthree: 'tash'
    },

];

const buttonStyle = {
    border: "1px solid #e5e2e2",
    borderRadius: "5px",
    background: "white",
    padding: "5px",
    color: "black",
    marginRight: "10px",
    fontWeight: "300",
    fontSize: "smaller",
}
const btnStyle = {
    border: "1px solid #e5e2e2",
    borderRadius: "20px",
    background: "#87f787",
    padding: "8px",
    color: "#0e8d0e",
    marginRight: "10px",
    fontWeight: "300",
    fontSize: "smaller",
}

const Ware = () => {
    return (
        <div>
            <div className="">
                <h4>Available Device</h4>
                {
                    data?.map((datas) => {
                        return (
                            <div>
                                <div>
                                    <div className="pair fluid">
                                        <div className="pen-css">
                                            <i className="mobile alternate icon"></i>
                                            <p>{datas.text}</p>
                                        </div>
                                        <div className="pen-css">
                                            <AllButton name="Unpair" style={buttonStyle} />
                                            <AllButton icon="pencil alternate icon" style={buttonStyle} />
                                            <AllButton icon="trash alternate icon" style={buttonStyle} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}
export default Ware;