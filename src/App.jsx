import React, { useState } from "react";
import Form from "./components/Form";
import MessageList from "./components/MessageList";
import './App.css'
function App(){
    const [newMessage,setNewMessage]=useState(false);
  return (
    <div className="app">
      <div className="container">
        <div className="shape-1"></div>
        <div className="shape-2"></div>
        <Form setNewMessage={setNewMessage}/>
      </div>
        <MessageList newMessage={newMessage}/>
    </div>
  )
}

export default App;