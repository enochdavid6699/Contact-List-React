import React from 'react'
import ContactItem from './ContactItem'

function Contacts(props) {
  return (
    <div>
      <h2>Contacts</h2>

      {props.tempContacts.map((contact)=>{
        return (
            <ContactItem contact={contact}/>
        )
      })} 

      {props.contacts.length === 0 ? (
        "No Contacts to display"
      ) : (
        // Mapping over the contacts array and rendering ContactItem component for each contact
        props.contacts.map((contact) => {
          return (
            <ContactItem contact={contact} />
          );
        })
      )}

    </div>
  )
}

export default Contacts
