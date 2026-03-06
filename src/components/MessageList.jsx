import React, { useEffect, useState } from "react";

function MessageList({newMessage}){
    const [messageList,setMessageList]=useState(null);

    useEffect(()=>{
        fetch('https://pager-8b926-default-rtdb.asia-southeast1.firebasedatabase.app/message.json')
        .then(response=>{
            if(!response.ok){
                throw new Error(`HTTP Error,Status: ${response.status}`)
            }
            return response.json();
        })
        .then(data=>{
            const filterMessageList=[];
            for(let key in data){
                filterMessageList.push(data[key]);
            }
            filterMessageList.reverse();
            const messageListDisplay=filterMessageList.slice(0,5);
           
            setMessageList(messageListDisplay);
        }).catch((err)=>{
            console.log(err)
        })
    },[newMessage])

    return(
        <div className="message-container">
            {messageList&&messageList.map((item,index)=>{
                return (
                    <div key={index} className="message-card">
                        <div className="user-name">{item.name}</div>
                        <div className="user-message">{item.message}</div>
                    </div>
                )
            })}
        </div>
    )

}

export default MessageList;