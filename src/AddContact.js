import React from 'react'
import { useState } from 'react';

function AddContact(props) {


    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const submit = (e) => {

        //To stop the page from reloading
        e.preventDefault();

        if (!name || !phone) {
            alert('Name or Phone cannot be blank');
            return;
        }

        props.addContacts(name, phone);

    }


    return (
        <div>
            <form className="row g-3" onSubmit={submit}>
                <div className="col-md-6">
                    <label htmlFor="name" className="htmlForm-label">Contact</label>
                    <input type="text" className="htmlForm-control" id="name" value={name} onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="phone" className="htmlForm-label">Phone Number</label>
                    <input type="text" className="htmlForm-control" id="phone" value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Add Contact</button>
                </div>
            </form>
        </div>
    )
}

export default AddContact
