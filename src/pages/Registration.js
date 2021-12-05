import { Button, Input, notification } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

import axiosInstance from './../axios';

import { useState } from "react";

const Registration = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const navigate = useNavigate();

  const register = () => {
    axiosInstance.post('/auth/registration', {
      params: {
        username,
        password,
        password_confirmation: passwordConfirmation
      }
    })
      .then((res) => {
        const userToken = res.data.token;
        axiosInstance.defaults.headers.common['authorization'] = 'Bearer ' + userToken;
        localStorage.setItem('userToken', userToken)
        navigate('/chat')
      })
      .catch((err) => {
        notification.open({
          message: 'خطا',
          description: err.response.data
        });
      });
  };

  return (
    <div id="registration-page">
      <div className="form">
        <h1 className="form-title">ثبت نام در سایت</h1>
        
        <Input className="input" size="large" addonBefore="نام کاربری" value={username} onChange={(e) => setUsername(e.target.value)} />
        <Input className="input" type="password" size="large" addonBefore="رمز عبور" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Input className="input" type="password" size="large" addonBefore="تکرار رمز عبور" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />

        <Button className="button" type="primary" shape="round" size="large" icon={<UserAddOutlined />} onClick={register}>
          ثبت نام
        </Button>

        <br />

        <span className="span-link" onClick={() => navigate('/login')}>
          قبلا در سایت ثبت نام کرده‌ام!
        </span>
      </div>
    </div>
  );
};

export default Registration;
