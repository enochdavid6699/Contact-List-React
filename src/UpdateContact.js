import React, { useState, useEffect } from 'react';

function UpdateContact(props) {
  const [name, setName] = useState(props.contact.name);
  const [phone, setPhone] = useState(props.contact.phone);

  useEffect(() => {
    setName(props.contact.name);
    setPhone(props.contact.phone);
  }, [props.contact]);

  const submit = (e) => {
    e.preventDefault();

    if (!name || !phone) {
      alert('Name or Phone cannot be blank');
      return;
    }

    props.updateContacts(props.contact.id, name, phone);
  };

  return (
    <div >
      <form onSubmit={submit} >

        <div className='cart-item-update'>

          <div>
            <label htmlFor="name">Contact</label>
            <input
              type="text"
              className="htmlForm-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="phone">Phone Number</label>
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

        </div>

      </form>
    </div>
  );
}

export default UpdateContact;
