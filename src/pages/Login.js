import { Button, Input, notification } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

import axiosInstance from './../axios';

import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = () => {
    axiosInstance.post('/auth/login', {
      params: {
        username,
        password
      }
    })
      .then((res) => {
        const userToken = res.data.token;
        axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + userToken;
        localStorage.setItem('userToken', userToken)
        navigate("/chat")
      })
      .catch((err) => {
        notification.open({
          message: 'خطا',
          description: err.response.data
        });
      });
  };

  return (
    <div id="login-page">
      <div className="form">
        <h1 className="form-title">ورود به سایت</h1>
        
        <Input className="input" size="large" addonBefore="نام کاربری" value={username} onChange={(e) => setUsername(e.target.value)} />
        <Input className="input" type="password" size="large" addonBefore="رمز عبور" value={password} onChange={(e) => setPassword(e.target.value)} />

        <Button className="button" type="primary" shape="round" size="large" icon={<LoginOutlined />} onClick={login}>
          ورود
        </Button>

        <br />

        <span className="span-link" onClick={() => navigate("/registration")}>
          هنوز در سایت ثبت نام نکرده‌ام!
        </span>
      </div>
    </div>
  );
};

export default Login;
