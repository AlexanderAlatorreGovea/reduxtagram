//This fetches an individual user on the list
///the state was put as an empty array because we are trying to fetch an array of users
//this reducer only cares about  FETCH_USER
///...state means that we want to destructor the array and create a new one
///the next step is to wire it to index.js in the reducers file

export default (state =[], action) => {
  switch (action.type) {
    case 'FETCH_USER'
      return[...state, action.payload]
    default:
      return state;
  }
}
