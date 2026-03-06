import React, { useState } from "react";

function Form({setNewMessage}) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formName = name.trim();
    const formMessage = message.trim();

    if (!formName || !formMessage) {
      alert("please fill all requried fields");
      return;
    }

    fetch(
      "https://pager-8b926-default-rtdb.asia-southeast1.firebasedatabase.app/message.json",
      {
        method: "POST",
        body: JSON.stringify({ name: name, message: message }),
      },
    );
    setName('')
    setMessage('')
    setNewMessage((prev)=>{
        return !prev;
    })
  };

  return (
    <div className="form-container">
      <form action="">
        <div className="form-header">Send message to Udit</div>
        <div className="form-input">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          <input
            type="text"
            placeholder="John doe"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="form-input">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          <input
            type="text"
            placeholder="send your message"
            onChange={handleMessageChange}
            value={message}
          />
        </div>
        <div className="form-btn">
          <button onClick={handleSubmit}>Send</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
