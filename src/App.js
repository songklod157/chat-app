import React, { Component } from 'react';
import { Switch , Route , Link } from 'react-router-dom';
import Chatroom from './chat/chatroom';
import Chatform from './chat/chatform';
import './App.css';

class App extends Component {
  render() {
    return (
      <div ClassName="container">
        <h1>CHATROOM</h1>
        <div>
        </div>

        <Switch>
          <Route path="/chat" component={Chatform} />
          <Route path="/" component={Chatroom} />
        </Switch>
        
      </div>
    );
  }
}
export default App;
