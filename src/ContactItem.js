import React from 'react'

function ContactItem(props) {
  return (
    <div>
      <h4>
        {props.contact.name}
      </h4>

      <span> {props.contact.phone} </span>

      <button onClick={()=>{props.updateContacts(props.contact)}} >Update</button>

      <button onClick={()=>{props.deleteContacts(props.contact)}} >Delete</button>


    </div>
  )
}

export default ContactItem
