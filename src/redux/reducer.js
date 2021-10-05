import { combineReducers } from "redux";
import {
    addContactSuccess,
    addContactRequest,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
    changeFilter 
} from './action';
import { createReducer } from "@reduxjs/toolkit";


const items = createReducer([], {
    [fetchContactSuccess]:(_, { payload }) => payload,
    [addContactSuccess]: (state, { payload }) => [...state, payload],
    [deleteContactSuccess]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
    [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(
    false, {
    [fetchContactRequest]: () => true,
    [fetchContactSuccess]: () => false,
    [fetchContactError]: () => false,
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: () => false,
});
const error = createReducer(null, {
  [fetchContactError]: (_, { payload }) => payload,
  [addContactError]: (_, { payload }) => payload,
  [deleteContactError]: (_, { payload }) => payload,
});

export default combineReducers({
    items,
    filter,
    loading,
    error,
});

// const items = (state = [], { type, payload })=>{
//     switch(type){
//        case types.ADD:
//         return [...state, payload];

//         case types.DELETE:
//         return state.filter(({id}) =>id !== payload);
        
//         default:
//         return state;
//     }
// }
// const filter = (state = '', {type,payload})=>{
//     switch(type){
//         case types.CHANGE_FILTER:
//             return payload;

//         default:
//         return state;
//     }
// }
