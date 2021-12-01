import default_avatar from './../assets/img/default_avatar.png';

const ContactBox = () => {
  return (
    <div className="contact-box">
      <img className="avatar" src={default_avatar} />
      <span className="username">mohammadreza</span>
      <span className="online-status"></span>
    </div>
  );
};

export default ContactBox;
