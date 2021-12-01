import { Button } from 'antd';
import { useNavigate } from "react-router-dom";
import { UserAddOutlined } from '@ant-design/icons';
import { LoginOutlined } from '@ant-design/icons';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div id="home-page">
      <h1 className="site-title">نرم افزار چت آنلاین</h1>

      <Button type="primary" shape="round" size="large" icon={<UserAddOutlined />} onClick={() => navigate("/registration")}>
        ثبت نام
      </Button>
      
      <Button type="primary" shape="round" size="large" icon={<LoginOutlined />} onClick={() => navigate("/login")}>
        ورود
      </Button>
    </div>
  );
};

export default Home;
