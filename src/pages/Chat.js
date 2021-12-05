import Header from './../components/Header.js';
import ContactsList from './../components/ContactsList.js';
import ChatArea from './../components/ChatArea.js';

import axiosInstance from './../axios';

import { useState, useEffect } from "react";

const Chat = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axiosInstance.get('/chat/users')
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div id="chat-page">
      <Header />
      <ContactsList users={users} />
      <ChatArea />
    </div>
  );
};

export default Chat;
