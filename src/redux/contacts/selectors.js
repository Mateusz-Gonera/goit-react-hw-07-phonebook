import { createSelector } from '@reduxjs/toolkit';

export const selectItems = state => state.contacts.items;
export const selectFilter = state => state.contacts.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectVisibleItems = createSelector(
  [selectItems, selectFilter],
  (items, filter) => {
    if (filter === '') return items;
    const filteredArray = items.filter(item => {
      const filtered = filter.toLowerCase();
      return item.name.toLowerCase().includes(filtered);
    });
    return filteredArray;
  }
);
