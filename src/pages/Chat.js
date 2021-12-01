import Header from './../components/Header.js';
import ContactsList from './../components/ContactsList.js';
import ChatArea from './../components/ChatArea.js';

const Chat = () => {
  return (
    <div id="chat-page">
      <Header />
      <ContactsList />
      <ChatArea />
    </div>
  );
};

export default Chat;
