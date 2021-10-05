import { createAction } from '@reduxjs/toolkit';


export const fetchContactRequest = createAction(
  'contacts/fetchContactRequest',
);
export const fetchContactSuccess = createAction(
  'contacts/fetchContactSuccess',
);
export const fetchContactError = createAction('contacts/fetchContactError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const deleteContactRequest = createAction(
'contacts/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
  'contacts/deleteContactSuccess',
);
export const deleteContactError = createAction('contacts/deleteContactError');


export const changeFilter = createAction('contacts/changeFilter');



// ======Redux======
//  export default {
// ADD:'contact/add',
// DELETE:'contact/delete',
// CHANGE_FILTER:'contact/changeFilter',
// }

// const addContact = (name, number) => ({
//   type: types.ADD,
//     payload:{
//       id: shortid.generate(),
//       name,
//       number,
//     } 
// })
// const deleteContact = (contactId) => ({
//   type: types.DELETE,
//   payload: contactId,
      
// });
// const changeFilter = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
      
// });
// export default { addContact, deleteContact, changeFilter }