import { useSelector } from 'react-redux';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';

const Phonebook = () => {
  
  const filteredContacts = useSelector(getFilteredContacts);
  
  const isContacts = Boolean(filteredContacts.length);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {isContacts ? (
        <div>
          <Filter/>
          <ContactList />
        </div>
      ) : (
        <><Filter /><p>You have no contacts</p></>
      )}
    </div>
  );
};

export default Phonebook;
