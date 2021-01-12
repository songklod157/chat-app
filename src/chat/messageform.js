import React, { Component } from 'react';
import Message from './message';

class Messageform extends Component {
    state = {
        text: ""
    };
    onSubmit = e => {
        e.preventDefault();
        // send 
        this.props.onMessageSend({
            text : this.state.text,
            member: this.props.currentMember 
        });
        this.setState({text: ""});
    };
    onChange = e => {
        this.setState({ text: e.target.value});
    };

    render() {
        return (
            <form onSubmit={this.onSubmit} className="MessageForm">
                <input className="MessageInput" type="text" value={this.state.text} onChange={this.onChange} />
                <button className="MessageButton">Send</button>
            </form>
           
        );
    }
}
export default Messageform;
