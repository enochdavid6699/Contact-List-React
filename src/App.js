import './App.css';
import Contacts from './Contacts';
import AddContact from './AddContact';
import React, { useState, useEffect } from 'react';

function App() {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => {
        console.log('Error fetching contacts:', error);
      });
  }, []);


  const addContacts = () => {

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }


  return (
    <div className="App">

      <h1>Contact Container</h1>

      <AddContact />

      <Contacts contacts={contacts} />

    </div>
  );
}

export default App;
