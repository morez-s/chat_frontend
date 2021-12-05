import default_avatar from './../assets/img/default_avatar.png';

const ContactBox = (props) => {
  return (
    <div className="contact-box">
      <img className="avatar" src={default_avatar} />
      <span className="username">{props.user ? props.user._source.username : ''}</span>
      {props.user && props.user._source.online_status == 'online' &&
        <span className="online-status"></span>
      }
    </div>
  );
};

export default ContactBox;
