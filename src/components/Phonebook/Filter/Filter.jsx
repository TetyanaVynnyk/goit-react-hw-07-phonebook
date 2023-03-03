import { useSelector, useDispatch } from 'react-redux';

import { nanoid } from 'nanoid';

import styles from './filter.module.css';

import {setFilter} from "../../../redux/filter/filter-slice";

import {getFilter} from "../../../redux/filter/filter-selectors";

const Filter = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

    const handleFilter = ({ target }) => {
    dispatch(setFilter(target.value))
 };

  return (
    <div className={styles.filterWrapper}>
      <label className={styles.filterLabel} htmlFor="inputid">
        Find contacts by name
        <input
          className={styles.filterInput}
          type="text"
          inputid={nanoid()}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          value={filter}
          onChange={handleFilter}
          placeholder="enter the contact you want to find"
        />
      </label>
    </div>
  );
};

export default Filter;
