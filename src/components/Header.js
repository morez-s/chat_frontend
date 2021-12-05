import ContactBox from './../components/ContactBox.js';
import { Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

import axiosInstance from './../axios';

const Header = () => {
  const navigate = useNavigate();

  const logout = () => {
    axiosInstance.delete('/auth/logout')
      .then((res) => {
        delete axiosInstance.defaults.headers.common['authorization'];
        localStorage.removeItem('userToken')
        navigate('/')
      })
      .catch((err) => {
        console.log(err)
      });
  };

  return (
    <div className="header">
      <ContactBox />

      <Button className="logout-button" type="primary" shape="round" size="large" icon={<LogoutOutlined />} onClick={logout}>
        خروج
      </Button>
    </div>
  );
};

export default Header;
