import React, { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { setInitialItems } from 'redux/contacts/contactsSlice';
import { useDispatch } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('items'));
    if (storage === null) {
      dispatch(
        setInitialItems([
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ])
      );
    } else {
      dispatch(setInitialItems(storage));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
        fontSize: 20,
        color: '#010101',
        padding: '20px 10px',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
