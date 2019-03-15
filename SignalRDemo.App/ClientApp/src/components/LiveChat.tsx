import React, { Component } from "react";
import { HubConnectionBuilder, HubConnectionState } from "@aspnet/signalr";
import { NewMessageForm } from "./NewMessageForm";

interface LiveChatState {
    messages: string[];
    connectionState: "disconnected" | "connected" | "error";
}

export class LiveChat extends Component<{}, LiveChatState> {

    private connection = new HubConnectionBuilder().withUrl("/chat").build();

    public state: LiveChatState = {
        messages: [],
        connectionState: "disconnected"
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

    public async componentDidMount() {
        try {
            await this.connection.start();
            this.setState({ connectionState: "connected" });
        } catch (e) {
            console.error(e);
            this.setState({ connectionState: "error" });
        }

        this.connection.on("messageReceived", this.addMessage);
    }

    public componentWillUnmount() {
        this.connection.stop();
    }

    private addMessage = (message: string) => this.setState(state => ({
        messages: [...state.messages, message]
    }));

    private sendMessage = async (message: string) => {
        await this.connection.send("sendMessage", message);
        this.addMessage(message);
    }
}