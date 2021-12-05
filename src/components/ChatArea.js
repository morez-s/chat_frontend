import MessageBox from './MessageBox.js';
import { Button, Input } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

const ChatArea = (props) => {
  return (
    <div className="chat-area">
      <div className="messages">
        {props.messages.map((message) => <MessageBox key={message._id} side={message._source.receiver_user_id == props.selectedUser._id ? 'sent' : 'received'} message={message} />)}
      </div>

      <div className="input-container">
        <Input className="input" size="large" onKeyPress={e => e.key === 'Enter' && props.sendMessage()} value={props.text} onChange={(e) => props.setText(e.target.value)} />

        <Button className="button" type="primary" shape="round" size="large" icon={<ArrowLeftOutlined />} onClick={() => props.sendMessage()}>
          ارسال
        </Button>
      </div>
    </div>
  );
};

export default ChatArea;
