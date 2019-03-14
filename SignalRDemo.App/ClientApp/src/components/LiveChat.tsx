import React, { Component } from "react";
import { NewMessageForm } from "./NewMessageForm";

interface LiveChatState {
    messages: string[];
}

export class LiveChat extends Component<{}, LiveChatState> {
    public state: LiveChatState = {
        messages: []
    }

    public render() {
        const { messages } = this.state;
        return (
            <div>
                <h2>Live chat</h2>
                <ul>
                    {messages.map((msg, i) => <li key={i}>{msg}</li>)}
                </ul>
                <NewMessageForm sendMessage={this.sendMessage} />
            </div>
        );
    }

    private addMessage = (message: string) => this.setState(state => ({
        messages: [...state.messages, message]
    }));

    private sendMessage = async (message: string) => {
        // TODO: send to hub!
        this.addMessage(message);
    }
}