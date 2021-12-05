import Header from './../components/Header.js';
import ContactsList from './../components/ContactsList.js';
import ChatArea from './../components/ChatArea.js';

import axiosInstance from './../axios';

import { useState, useEffect } from "react";

const Chat = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    axiosInstance.get('/chat/users')
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClick = (index) => {
    const selectedUser = users[index];

    setSelectedUser(selectedUser);

    axiosInstance.get('/chat/users/' + selectedUser._id + '/messages')
      .then((res) => {
        setMessages(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const sendMessage = () => {
    axiosInstance.post('/chat/users/' + selectedUser._id + '/messages', {
      params: {
        text
      }
    })
      .then((res) => {
        console.log(res);
        setText('');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div id="chat-page">
      <Header />
      <ContactsList users={users} selectedUser={selectedUser} onClick={(index) => handleClick(index)} />
      <ChatArea selectedUser={selectedUser} messages={messages} sendMessage={() => sendMessage()} text={text} setText={(t) => setText(t)} />
    </div>
  );
};

export default Chat;
