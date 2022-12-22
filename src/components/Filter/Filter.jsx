import styles from './Filter.module.css';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { handleFilter } from 'redux/contacts/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = evt => {
    dispatch(handleFilter(evt.target.value));
  };

  const debouncedChange = debounce(handleChange, 200);

  return (
    <label className={styles.label}>
      Find contacts by Name
      <input
        className={styles.input}
        type="text"
        name="filter"
        onChange={debouncedChange}
      />
    </label>
  );
};
