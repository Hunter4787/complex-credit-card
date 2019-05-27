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

    this.setState({ name: event.target.value },()=>  this.props.fillname(this.state.name))
  

}
handelchangeThru = (event) => {
    this.setState({ thru: event.target.value } ,() =>  this.props.fillthru(this.state.thru))
 

}

ValidateNumb = (e) => {
    let numbregex= /^[0-9]{16}$/
    return (!numbregex.test(e.target.value))?this.setState({ numbError: "the card number must be 16 numbers Only NUMBERS" }):this.setState({ numbError: "" })
}

ValidateName = (e) => {
    let nameregex= /^[a-zA-Z]{3,}$/
    return (!nameregex.test(e.target.value))?this.setState({ nameError: "Enter a valid name" }):this.setState({ nameError: "" })
}

ValidateThru = (e) => {
    let thruregex=/^[0-9]{2}[/]{1}[0-9]{2}$/
    return (!thruregex.test(e.target.value))?this.setState({ thruError: "Valid thru must be like this '10/20'" }):this.setState({ thruError: "" })
}



render() {
    return (<div>
        <form className="input-style">

            <input maxLength="16" ref="number" max-length="16" type="text" placeholder="Card number" onChange={(e) => { this.handelchangeNumb(e); this.ValidateNumb(e) }}  />
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
