import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { changeContacts } from 'redux/contactsSlice';

import AddContacts from './addContact/AddContact';
import Contacts from './contacts/Contacts';
import Filter from './filter/Filter';

export const App = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('contacts')) {
      const data = localStorage.getItem('contacts');
      dispatch(changeContacts(JSON.parse(data)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const setFilteredArr = () => {
    if (filter.length > 0) {
      const newArr = contacts.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase())
      );

      return newArr;
    }
  };

  return (
    <div style={{ marginLeft: '20px' }}>
      <h2>Phonebook</h2>
      <AddContacts />

      <h2>Contacts</h2>
      <Filter setFilteredArr={setFilteredArr} />
      <Contacts setFilteredArr={setFilteredArr} />
    </div>
  );
};
