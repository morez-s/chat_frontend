import { Button, Input } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  
  return (
    <div id="login-page">
      <div className="form">
        <h1 className="form-title">ورود به سایت</h1>
        
        <Input className="input" size="large" addonBefore="نام کاربری" />
        <Input className="input" type="password" size="large" addonBefore="رمز عبور" />

        <Button className="button" type="primary" shape="round" size="large" icon={<LoginOutlined />} onClick={() => alert('login')}>
          ورود
        </Button>

        <br />

        <span className="span-link" onClick={() => navigate("/registration")}>
          قبلا در سایت ثبت نام کرده‌ام
        </span>
      </div>
    </div>
  );
};

export default Login;
