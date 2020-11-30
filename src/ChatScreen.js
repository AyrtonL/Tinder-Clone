import React, { useState} from "react";
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css";


function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
    {
        name:"Elon",
        image:"",
        message:"whatsuppp",
    },
    {
        name:"Jeff",
        image:"",
        message:"whatsuppp",
    },
    {
        name:"Ester",
        image:"",
        message:"Holaaa",
    },
]);

const handleSend = e => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
};
    return (
        <div className="chatScrenn">
            <p className="chatScreen__timestamp">YOU MATCHED WITH X ON 10/08/20</p>
            {messages.map((message) =>
                message.name ? (
                    <div className="chatScreen__message">
                    <Avatar className="chatScreen__image" alt={message.name} src={message.image} />
                    <p className="chatScreen__text">{message.message}</p>
                    </div>
                ) : (
                    <div className="chatScreen__message">
                    <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )                
            )}
            <div >
            <form className="chatScreen__input">
                <input className="chatScreen__inputField"
                 placeholder="Type a message..." 
                 type="text"
                 value={input}
                 onChange={(e) => setInput(e.target.value)} />
                <button onClick={handleSend} className="chatScreen__inputButton">SEND</button>
            </form>
        </div>
        </div>
    );
}


export default ChatScreen
