import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';
import { addContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFullfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const contactsInitialState = {
  items: [],
  filter: '',
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {

    deleteContact(state, action) {
      let filtered = state.items.filter(item => item.id !== action.payload);
      state.items = filtered;
      localStorage.setItem('items', JSON.stringify(state.items));
    },
    setInitialItems(state, action) {
      state.items = action.payload;
    },
    handleFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      handleFullfilled(state);
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
  },
});

export const { deleteContact, handleFilter, setInitialItems } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
