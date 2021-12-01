import { Button, Input } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();

  return (
    <div id="registration-page">
      <div className="form">
        <h1 className="form-title">ثبت نام در سایت</h1>
        
        <Input className="input" size="large" addonBefore="نام کاربری" />
        <Input className="input" type="password" size="large" addonBefore="رمز عبور" />
        <Input className="input" type="password" size="large" addonBefore="تکرار رمز عبور" />

        <Button className="button" type="primary" shape="round" size="large" icon={<UserAddOutlined />} onClick={() => alert('registration')}>
          ثبت نام
        </Button>

        <br />

        <span className="span-link" onClick={() => navigate("/login")}>
          قبلا در سایت ثبت نام کرده‌ام!
        </span>
      </div>
    </div>
  );
};

export default Registration;
