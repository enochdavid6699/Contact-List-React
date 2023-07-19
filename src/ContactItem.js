import React from 'react';
import UpdateContact from './UpdateContact';

function ContactItem(props) {
  return (
    <div className='cart-item'>
      <div className='cart-item-info'>
        <h4>{props.contact.name}</h4>
        <span>{props.contact.phone}</span>
        <button type="button" class="btn btn-danger" onClick={() => props.deleteContacts(props.contact)}>Delete</button>
      </div>

      <UpdateContact contact={props.contact} updateContacts={props.updateContacts} />
    </div>
  );
}

export default ContactItem;
