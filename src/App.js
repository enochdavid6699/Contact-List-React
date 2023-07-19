import './App.css';
import Contacts from './Contacts';
import AddContact from './AddContact';
import React, { useState, useEffect } from 'react';

function App() {

  const [tempContacts, setTempContacts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setTempContacts(data))
      .catch((error) => {
        console.log('Error fetching contacts:', error);
      });
  }, []);


  const addContacts = (name, phone) => {

    const myContacts = {
      name: name,
      phone: phone,
      id: tempContacts.length
    }

    // Add the new contacts to the top of the array using unshift
    const updatedContacts = [myContacts, ...tempContacts];
    setTempContacts(updatedContacts);

  }

  const deleteContacts = (contact) =>{

    setTempContacts(tempContacts.filter((e)=>{
      return e!==contact;
    }));
    
    console.log('Deleted:', contact);

  }

  const updateContacts = (contactId, name, phone) => {
    const updatedContacts = tempContacts.map((contact) => {
      if (contact.id === contactId) {
        // Update the contact's properties with the provided name and phone
        return {
          ...contact,
          name: name,
          phone: phone,
        };
      }
      return contact; // Return the original contact if it's not the one to update
    });

    setTempContacts(updatedContacts);
    console.log('Updated:', contactId, name, phone);
  };

  return (
    <div className="App">

      <AddContact addContacts={addContacts} />

      <Contacts tempContacts={tempContacts} deleteContacts={deleteContacts} updateContacts={updateContacts} />

    </div>
  );
}

export default App;
