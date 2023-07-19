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

            <h1>Add a Contact</h1>

            <form onSubmit={submit} className='add-contact-form'>

                <label for="exampleFormControlInput1" className="form-label" >Contact</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" value={name} onChange={(e) => { setName(e.target.value) }} />

                <label for="exampleFormControlInput2">Phone Number</label>
                <input type="text" className="form-control" id="exampleFormControlInput2" value={phone} onChange={(e) => { setPhone(e.target.value) }} />

                <button type="submit" className="btn btn-success" >Add Contact</button>

            </form>
        </div>
    )
}

export default AddContact
