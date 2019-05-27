import React, { Component } from 'react';


class Card extends React.Component {
    constructor(props) {
        super(props);
        this.setState = {
            spaced: "23654"
        }

    }

    Nbr = (props) => {
        if (this.props.inputs.numb.length === 16) {
            let nbr = this.props.inputs.numb
            nbr = nbr.split("").map((el, i) => { if (((i + 1) % 4 === 0) && (i !== 0)) el = el + " " }).join("")
            this.setState({ spaced: nbr })
        }
    }

    render() {
        return (<div >
            <div className="card-style">
                <h1>Credit Card</h1>
                <div className="main-body">
                    <div className="main-card">
                        <img src={require("./chip.png")} alt="chip logo" height="70" width="70" />

                        <span on className="fonts" >{this.props.inputs.numb}</span>
                        <span className="fonts"></span>
                        <span className="months">MONTH/YEAR</span>


                        <div className="date">
                            <span className="fonts">5422</span>
                            <div id="">
                                <span>valid
                                    THUR
                        </span>
                                <img src={require("./right.png")} alt="chip logo" height="20px" width="21px" padding-top="11px" />
                                <span className="fonts">{this.props.inputs.thru}</span>
                            </div>
                        </div>
                        <span className="fonts">{this.props.inputs.name}</span>

                    </div>
                    <div className="buttom-logo">
                        <img src={require("./mastercard.png")} alt="mastercard logo" height="80" width="80" />
                        <img src={require("./visa-logo.png")} alt="visa logo" height="80" width="80" />
                    </div>
                </div>
            </div>
        </div>


        )
    }
}

export default Card; 