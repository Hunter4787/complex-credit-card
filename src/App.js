import React, { Component } from 'react';
import Card from './card'
import './App.css';
import Form from './form'

class App extends React.Component {
      constructor(props) {
            super(props);

            this.state = {
                  name: "*****",
                  numb: "**** **** **** ****",
                  thru: "**/**"

            }
      }

      fillnumb = (keyword) => {
            while (keyword.length < 16) keyword = keyword + "*"
            this.setState({ numb: keyword })
      }
      fillname = (keyword) => {
            while (keyword.length < 5) keyword = keyword + "*"
            this.setState({ name: keyword })
      }
      fillthru = (keyword) => {
            this.setState({ thru: keyword })
      }
      render() {
            return (<div className="body-style">

                  <Card inputs={{ numb: this.state.numb, name: this.state.name.toUpperCase(), thru: this.state.thru }} />
                  <Form fillnumb={(keyword) => this.fillnumb(keyword)} fillname={(keyword) => this.fillname(keyword)} fillthru={(keyword) => this.fillthru(keyword)} states={this.state} />
            </div>
            )
      }
}

export default App;
