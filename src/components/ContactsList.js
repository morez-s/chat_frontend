import ContactBox from './../components/ContactBox.js';

const ContactsList = (props) => {
  return (
    <div className="contacts-list">
      {props.users.map((user, index) => (
        <div className={`contact ${props.selectedUser._id == user._id ? 'active' : ''}`} key={user._id} onClick={() => props.onClick(index)}>
          <ContactBox user={user} />
        </div>
      ))}
    </div>
  );
};

export default ContactsList;
