import React from 'react'

function ContactItem(props) {
  return (
    <div>
      <h4>
        {props.contact.title}
      </h4>
    </div>
  )
}

export default ContactItem
