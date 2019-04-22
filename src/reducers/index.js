import { combineReducers } from 'redux'; ///this shouuld be added regardless
import contactReducer from './contactReducer';

export default combineReducers({
  contact: contactReducer
})


///this can be put at the beginning if you have no Reducers
///export default combineReducers({ replaceMe: () => 'hi there' });


/* from stephen Grider's course we are fetching one individual reducer that is passed down from
mockUserReducer.js and is being wired her to be dispatched
user is an argument created by me to be passed down the chain which needs to be wired to the Component files


import { combineReducers } from 'redux';
import contactReducer from './contactReducer';
import usersReducer from './mockUsersReducer'

export default combineReducers({
  posts: postReducer,
  users: mockUserReducer
})

*/
