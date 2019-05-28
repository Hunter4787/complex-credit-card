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
    this.setState({ numb: event.target.value },()=>this.props.fillnumb(this.state.numb)
 )}
    

handelchangeName = (event) => {

    this.setState({ name: event.target.value },()=> this.props.fillname(this.state.name))
  

}
handelchangeThru = (event) => {
    this.setState({ thru: event.target.value } ,() =>  this.props.fillthru(this.state.thru))
 

}

ValidateNumb = (e) => {
    let numbregex= /^[0-9]{16}$/
    return (!numbregex.test(e.target.value))?this.setState({ numbError: "the card number must be 16 numbers Only NUMBERS" }):this.setState({ numbError: "" })
//     let nbr = this.state.numb
//     nbr = nbr.split("").map((el, i) => { if (((i + 1) % 4 === 0) && (i !== 0)) el = el + " " }).join("")
//     this.setState({numb : nbr })
}

ValidateName = (e) => {
    let nameregex= /^[a-zA-Z]{3,}$/
    return (!nameregex.test(e.target.value))?this.setState({ nameError: "Enter a valid name" }):this.setState({ nameError: "" })
}

ValidateThru = (e) => {
    let thruregex=/^[0-9]{2}[/]{1}[0-9]{2}$/
    return (!thruregex.test(e.target.value))?this.setState({ thruError: "Valid thru must be like this '10/20'" }):this.setState({ thruError: "" })
}

handleChangeNumber = event => {
    let {value} = event.target;
    let v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    let matches = v.match(/\d{4,16}/g);
    let match = (matches && matches[0]) || '';
    let parts = [];
    for ( let i=0, len=match.length; i<len; i+=4) {
        parts.push(match.substring(i, i+4))
    }

    if (parts.length) {
        this.setState({numb:parts.join(' ')})
    } else {
        this.setState({ numb:value });
    }
  };
// Nbr=()=> {
//     // if (this.state.numb.length === 16) {
//         let nbr = this.state.numb
//         nbr = nbr.split("").map((el, i) => { if (((i + 1) % 4 === 0) && (i !== 0)) el = el + " " }).join("")
//         this.setState({numb : nbr })

//     // }
// }


render() {
    return (<div>
        <form className="input-style">

            <input maxLength="16" ref="number" type="text" placeholder="Card number" onChange={(e) => { this.handelchangeNumb(e); this.ValidateNumb(e)}}  />
            <div style={{ color: 'red' }}>{this.state.numbError}</div>

            <input maxLength="20" ref="name" type="text" placeholder="Name" onChange={(e) => { this.handelchangeName(e); this.ValidateName(e) }} />
            <div style={{ color: 'red' }}>{this.state.nameError}</div>

            <input maxLength="5" ref="thru" type="text" placeholder="mm/yy" onChange={(e) => { this.handelchangeThru(e); this.ValidateThru(e) }} />
            <div style={{ color: 'red' }}>{this.state.thruError}</div>
        </form>

    </div>);
}
}


export default Form;
