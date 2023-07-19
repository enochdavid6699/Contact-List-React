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

  const updateContacts = (contact)=>{


  }


  return (
    <div className="App">

      <h1>Contact Container</h1>

      <AddContact addContacts={addContacts} />

      <Contacts tempContacts={tempContacts} deleteContacts={deleteContacts} updateContacts={updateContacts} />

    </div>
  );
}

export default App;
