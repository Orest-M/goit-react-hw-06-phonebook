import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

import ContactsItem from 'components/contactsItem/ContactsItem';

import css from './contacts.module.css';

const Contacts = ({ setFilteredArr }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const data = setFilteredArr() ? setFilteredArr() : contacts;

  const deleteItem = e => {
    if (e.target.dataset.id) {
      dispatch(deleteContact(e.target.dataset.id));
    }
  };

  return (
    <div>
      <ul onClick={deleteItem} className={css.contacts}>
        {data.map(({ name, number, id }) => (
          <ContactsItem key={id} name={name} number={number} id={id} />
        ))}
      </ul>
    </div>
  );
};

Contacts.propTypes = {
  setFilteredArr: PropTypes.func,
};

export default Contacts;
