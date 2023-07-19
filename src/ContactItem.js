import React from 'react';
import UpdateContact from './UpdateContact';

function ContactItem(props) {
  return (
    <div>
      <h4>{props.contact.name}</h4>
      <span>{props.contact.phone}</span>
      <button onClick={() => props.deleteContacts(props.contact)}>Delete</button>
      <UpdateContact contact={props.contact} updateContacts={props.updateContacts} />
    </div>
  );
}

export default ContactItem;
