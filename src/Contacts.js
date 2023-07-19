import React from 'react'
import ContactItem from './ContactItem'

function Contacts(props) {
  return (
    <div>
      <h2>Contacts</h2> 

      {props.tempContacts.length === 0 ? (
        "No Contacts to display"
      ) : (
        // Mapping over the contacts array and rendering ContactItem component for each contact
        props.tempContacts.map((contact)=>{
          return (
              <ContactItem contact={contact} deleteContacts={props.deleteContacts} updateContacts={props.updateContacts} />
          )
        })
      )}

    </div>
  )
}

export default Contacts
