import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  fetchAllContacts,
  fetchAddContact,
} from '../../../redux/contacts/contacts-operations';

import { nanoid } from 'nanoid';

import styles from './contactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({ name: '', number: '' });

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const handleChangeForm = ({ target }) => {
    const { name, value } = target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleAddContact = ({ name, number }) => {
    dispatch(fetchAddContact({ name, number }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleAddContact({ ...state });
    setState({ name: '', number: '' });
  };

  const { name, number } = state;

  return (
    <form className={styles.formWrapper} onSubmit={handleSubmit}>
      <label className={styles.inputTitle} htmlFor="nameId">
        Name
      </label>
      <input
        className={styles.formInput}
        type="text"
        name="name"
        nameid={nanoid()}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleChangeForm}
      />
      <label className={styles.inputTitle} htmlFor="phoneId">
        Number
      </label>
      <input
        className={styles.formInput}
        type="tel"
        name="number"
        phoneid={nanoid()}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleChangeForm}
      />
      <button className={styles.btn} type="submit">
        Add contacts
      </button>
    </form>
  );
};

export default ContactForm;
