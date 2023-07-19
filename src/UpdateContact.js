import React, { useState } from 'react';

function UpdateContact(props) {
  const [name, setName] = useState(props.contact.name);
  const [phone, setPhone] = useState(props.contact.phone);

  const submit = (e) => {
    // To stop the page from reloading
    e.preventDefault();

    if (!name || !phone) {
      alert('Name or Phone cannot be blank');
      return;
    }

    props.updateContacts(props.contact.id, name, phone);
  };

  return (
    <div>
      <form onSubmit={submit}>
        <div>
          <label htmlFor="name">
            Contact
          </label>
          <input
            type="text"
            className="htmlForm-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phone" >
            Phone Number
          </label>
          <input
            type="text"
            className="htmlForm-control"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Update Contact
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateContact;
