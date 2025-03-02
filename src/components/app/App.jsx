// import { useState } from 'react'
import css from './App.module.css'
import ContactForm from '../contactForm/contactForm.jsx'
import SearchBox from '../searchBox/searchBox.jsx'
import ContactList from '../contactList/contactList'
import { useEffect, useState } from 'react';

function App() {
  const initialContacts = [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ];

  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  })

  const [filter, setFilter] = useState(() => {
    const savedFilter = localStorage.getItem('filter');
    return savedFilter || '';
  });

  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  const addContact = (contact) => {
    setContacts((prevContacts)=> [...prevContacts, contact]);
  }

  const deleteContact = (contactId) => {
    setContacts((prevContacts)=> prevContacts.filter(contact => contact.id !== contactId));
  }

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])

  useEffect(() => {
    localStorage.setItem('filter', filter);
  }, [filter])


  return (
    <>
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm onAdd={addContact} />
        <SearchBox filter={filter} onFilter={setFilter} />
        <ContactList contacts={visibleContacts} onDelete={deleteContact}/>
      </div>
    </>
  )
}

export default App
