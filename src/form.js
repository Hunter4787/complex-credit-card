import React, { Component } from 'react';



class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            numb: "",
            thru: "",
            nameError: "",
            numbError: "",
            thruError: ""
        }
    }



handelchangeNumb = (event) => {
    this.setState({ numb: event.target.value })
    this.props.fillnumb(event.target.value)
}

handelchangeName = (event) => {

    this.setState({ name: event.target.value })
    this.props.fillname(event.target.value)

}
handelchangeThru = (event) => {
    this.setState({ thru: event.target.value })
    this.props.fillthru(event.target.value)

}

ValidateNumb = (e) => {
    if ((e.target.value.length != 16) || isNaN(e.target.value)) this.setState({ numbError: "the card number must be 16 numbers Only NUMBERS" })
    else this.setState({ numbError: "" })
}

ValidateName = (e) => {
    if ((e.target.value.length <= 2) || (e.target.value.length > 20)) this.setState({ nameError: "Enter a valid name" })
    else this.setState({ nameError: "" })
}

ValidateThru = (e) => {
    if (e.target.value.includes("/")) this.setState({ thruError: "Valid thru must be like this '10/20'" })
    else this.setState({ thruError: "" })
}

Nbr = (event) =>{
    let nbr = this.state.numb.split("")
    console.log(nbr)
let newnbr = nbr.map((el,i) =>((i+1) % 4 === 0)?el+=" ":el)
console.log(newnbr)
event.target.value= newnbr.toString()
// console

}
render() {
    return (<div>
        <form className="input-style">

            <input ref="number" type="text" placeholder="Card number" onChange={(e) => { this.handelchangeNumb(e); this.ValidateNumb(e) }} onBlur={this.Nbr} />
            <div style={{ color: 'red' }}>{this.state.numbError}</div>

            <input ref="name" type="text" placeholder="Name" onChange={(e) => { this.handelchangeName(e); this.ValidateName(e) }} />
            <div style={{ color: 'red' }}>{this.state.nameError}</div>

            <input ref="thru" type="text" placeholder="mm/yy" onChange={(e) => { this.handelchangeThru(e); this.ValidateThru(e) }} />
            <div style={{ color: 'red' }}>{this.state.thruError}</div>
        </form>

    </div>);
}
}


export default Form;
