import styles from './Filter.module.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleFilter } from 'redux/contacts/contactsSlice';

export const Filter = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleFilter(filter));
  }, [filter, dispatch]);

  const handleChange = evt => {
    setFilter(evt.target.value);
  };

  return (
    <label className={styles.label}>
      Find contacts by Name
      <input
        className={styles.input}
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
      />
    </label>
  );
};
