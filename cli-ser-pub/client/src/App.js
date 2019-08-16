import React, { Component } from 'react';
import { subscribeToAlert } from './api';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    subscribeToAlert(
      (messageObject) => this.alertMain(messageObject)
    )
  }

  state = {
    messageObject: {
      msg: {
        type: "initial",
        mode: "mode",
        data: {
          AreaName: "area",
        },
      },
    },
  };

  alertMain(messageObject) {
    console.log(messageObject)
    this.setState({messageObject:messageObject})
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.messageObject.msg.type}</p>
        <p>{this.state.messageObject.msg.mode}</p>
        <p>{this.state.messageObject.msg.data.AreaName}</p>
      </div>
    );
  }
}

export default App;
