import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            numb: "",
            thru: ""

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

    render() {
        return (<div>
            <form className="input-style">

                <input ref="number" type="text" placeholder="Card number" onChange={this.handelchangeNumb} />
                <input ref="name" type="text" pattern="[A-Za-z]{2,20}" placeholder="Name" onChange={this.handelchangeName} />
                <input ref="thru" type="text" pattern="^[0-9]{2,}" placeholder="Valid THRU" onChange={this.handelchangeThru} />

            </form>

        </div>);
    }
}

export default Form;
