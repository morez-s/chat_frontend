import ContactBox from './../components/ContactBox.js';

const ContactsList = (props) => {
  return (
    <div className="contacts-list">
      {props.users.map((user) => <div className="contact"><ContactBox key={user._source.id} user={user} /></div>)}

      <div className="contact active">
        <ContactBox />
      </div>
    </div>
  );
};

export default ContactsList;
