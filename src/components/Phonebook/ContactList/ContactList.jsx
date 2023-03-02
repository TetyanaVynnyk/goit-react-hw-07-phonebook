import { useSelector, useDispatch } from 'react-redux';

import { deleteContact } from '../../../redux/contacts/contacts-slice';

import { getFilteredContacts } from '../../../redux/contacts/contacts-selectors';

import styles from './contactList.module.css';

const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={styles.contactItem} key={id}>
          <p className={styles.contact}>
            {name}:{number}
          </p>
          <button
            className={styles.btn}
            onClick={() => handleDeleteContact(id)}
            type="button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
