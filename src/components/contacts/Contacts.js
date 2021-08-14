import Contact from './components/Contact';
import state from './components/Contacts'
import { useState } from 'react';

import {Switch, Route, Link} from "react-router-dom";


const ContactsComponent = () => {
  const [searchItem, setSearchItem] = useState('');

  function handleSearchChange(event) {
    setSearchItem(event.target.value);
  } 

  let filtered = state.contacts.filter(contact => {
    if (searchItem === "") {
      return contact;
    }
    else if (
            contact.firstName.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase()) 
            || contact.lastName.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase())
            || contact.phone.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase())
          ) {
      return contact;
    }
  });

  return (
    <div className="contacts-body">
      <div className="top">
        <h2>Contacts</h2>
        <input className="search" placeholder="Search..."  onChange={handleSearchChange}/>
      </div>
        {filtered.map(contact => <Contact {...contact} key={contact.id}/>)}
    </div>
  );
}

export default ContactsComponent;