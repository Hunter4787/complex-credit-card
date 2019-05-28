import React, { Component } from 'react';
import Card from './card'
import './App.css';
import Form from './form'

class App extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
                  name: "***",
                  numb: "**** **** **** ****",
                  thru: "**/**"

            }
      }

      fillnumb= (keyword) => {
            while (keyword.length < 16) keyword = keyword + "*"
            let k = keyword.toString()
            this.setState({numb:k.slice(0,4)+" "+k.slice(4,8)+" "+k.slice(8,12)+" "+k.slice(12,16)})
       }
      fillname = (keyword) => {
            while (keyword.length < 5) keyword = keyword + "*"
            this.setState({ name: keyword })
      }
      fillthru = (keyword) => {
           let k=keyword.toString()
            this.setState({ thru:k.slice(0,2)+"/"+k.slice(2,4)})
      }

      
      render() {
            return (<div className="body-style">
                  
                  <Card numb={this.state.numb} name={ this.state.name.toUpperCase()} thru={this.state.thru} />
                  <Form fillnumb={(e) => this.fillnumb(e)} fillname={(x) => this.fillname(x)} fillthru={(z) => this.fillthru(z)}  />
            </div>
            )
      }
}

export default App;
