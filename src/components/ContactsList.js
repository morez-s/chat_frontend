import ContactBox from './../components/ContactBox.js';

const ContactsList = () => {
  return (
    <div className="contacts-list">
      <div className="contact">
        <ContactBox />
      </div>
      <div className="contact">
        <ContactBox />
      </div>
      <div className="contact active">
        <ContactBox />
      </div>
      <div className="contact">
        <ContactBox />
      </div>
    </div>
  );
};

export default ContactsList;
