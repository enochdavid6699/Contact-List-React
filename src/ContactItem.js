import React from 'react'

function ContactItem(props) {
  return (
    <div>
      <h4>
        {props.contact.name}
      </h4>

      <span> {props.contact.phone} </span>

    </div>
  )
}

export default ContactItem
