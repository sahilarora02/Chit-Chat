import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import React, { useState, useEffect, useRef } from "react";
import Message from "./Message";
import SendMessage from './SendMessage';

const Chat = () => {
  const [messages, setMessage] = useState([]);
  const scroll = useRef();
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessage(messages);
    });
    return () => unsubscribe();
  }, []);
  console.log("messages=>", messages);
  return (
    <>
      <main className="flex flex-col p-[10px] relative">
        {messages &&
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
      </main>
      <SendMessage scroll={scroll}/>
      <span ref={scroll}></span>
    </>
  );
};

export default Chat;
