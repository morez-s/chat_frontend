import MessageBox from './MessageBox.js';
import { Button, Input } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

const ChatArea = () => {
  return (
    <div className="chat-area">
      <div className="messages">
        <MessageBox side="sent" />
        <MessageBox side="sent" />
        <MessageBox side="received" />
        <MessageBox side="sent" />
      </div>

      <div className="input-container">
        <Input className="input" size="large" onKeyPress={e => e.key === 'Enter' && alert('send')} />

        <Button className="button" type="primary" shape="round" size="large" icon={<ArrowLeftOutlined />} onClick={() => alert('send')}>
          ارسال
        </Button>
      </div>
    </div>
  );
};

export default ChatArea;
