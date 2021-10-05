import { createSelector } from "@reduxjs/toolkit";

export const getContacts = (state) => state.contacts.items;
export const getFilter = (state) => state.contacts.filter;
export const getError = state => state.contacts.error;
export const getLoading = state => state.contacts.loading;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const getFilterContacts = contacts => {
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
      );
    };

    return getFilterContacts(contacts);
  },
);




// export const getVisibleContacts = (state) => {
//   const contacts = getContacts(state);
//   const filter = getFilter(state);

//   const getFilterContacts = () => {
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   return getFilterContacts(contacts);
// };