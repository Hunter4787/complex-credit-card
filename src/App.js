import FormsyText from 'formsy-material-ui/lib/FormsyText';
import Card from './card'
import ReactDOM from 'react-dom'
import './App.css';
import Form from './form'
import React, { Component } from 'react';

class App extends React.Component {
      constructor(props) {
            super(props);

            this.state = {
                  numb: "**** **** **** ****",
                  name: "*",
                  thru: "**/**"
            }
      }

      fillnumb(keyword) {
            this.setState({ numb: keyword })
      }
      fillname(keyword) {
            this.setState({ name: keyword })
      }
      fillthru(keyword) {
            this.setState({ thru: keyword })
      }

      render() {
            return (<div className="body-style">

                  <Card inputs={[{ numb: this.state.numb }, { name: this.state.name.toUpperCase() }, { thru: this.state.thru }]} />
                  <Form fillnumb={(keyword) => this.fillnumb(keyword)} fillname={(keyword) => this.fillname(keyword)} fillthru={(keyword) => this.fillthru(keyword)} />
            </div>
            )
      }
}

export default App;
