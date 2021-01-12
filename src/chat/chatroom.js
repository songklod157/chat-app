import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import MessageList from './messageList';
import Messageform from './messageform';
import { Redirect } from 'react-router-dom';
class Chatroom extends Component {
    state = { 
        socket: null,
        messages:[
        ] 
    };
    componentDidMount(){
        if(this.state.socket == null) {
            const socket = socketIOClient("http://localhost:9090");
            socket.on("message", message => {
                this.addMessage(message);

        });

        this.setState({ socket: socket });
    }
}
    onMessageSend = (message) => {
        this.addMessage(message);

        this.state.socket.emit("emit", {...message});
    };
    addMessage = message => {
        this.setState({messages: [...this.state.messages, { ...message }] });
    }

    render() {
        if(this.props.location.name == null){
            return <Redirect to="/chat" />;
        }

        const { name } = this.props.location;
        return (
            <div>
                <MessageList messages={this.state.messages} />
                <Messageform onMessageSend={this.onMessageSend} currentMember={name} />
            </div>
        )
    }
}
export default Chatroom;
