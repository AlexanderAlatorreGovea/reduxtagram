import { GET_CONTACTS, DELETE_CONTACTS, ADD_CONTACTS } from '../actions/types';

const initialState = {
  contact: []
};

///contact.contacts is the first state
///
///the first one shows you how to make a json request

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS
      return {
        ...state,
        contacts: action.payload
      }
    case DELETE_CONTACTS:
        return {
          ...state,
          contacts: state.contacts.filter(contact =>
          contact.id !== action.payload)
        }
    case ADD_CONTACTS:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      }
    default:
      return state;
  }
}

//2. Reducers creator
