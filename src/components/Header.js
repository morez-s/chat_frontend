import ContactBox from './../components/ContactBox.js';
import { Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

const Header = () => {
  return (
    <div className="header">
      <ContactBox />

      <Button className="logout-button" type="primary" shape="round" size="large" icon={<LogoutOutlined />} onClick={() => alert('logout')}>
        خروج
      </Button>
    </div>
  );
};

export default Header;
