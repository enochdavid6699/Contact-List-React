import './App.css';
import Contacts from './Contacts';
import AddContact from './AddContact';
import React, { useState, useEffect } from 'react';

function App() {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => {
        console.log('Error fetching contacts:', error);
      });
  }, []);

  const [tempContacts, setTempContacts] = useState([]);

  const addContacts = (name, phone)=>{

    console.log(name, phone)

    const myContacts = {
      name: name,
      phone: phone
    }

    setTempContacts([...tempContacts , myContacts]);

  }


  return (
    <div className="App">

      <h1>Contact Container</h1>

      <AddContact addContacts={addContacts} />

      <Contacts contacts={contacts} tempContacts={tempContacts} />

    </div>
  );
}

export default App;
