/*if you want to import lodash
  import _ from 'lodash'
*/

import { GET_CONTACTS, DELETE_CONTACTS, ADD_CONTACTS } from './types';
import axios from 'axios';
///redux thunk allows you to dispatch also look at the first one and the second one of this
///res.data is basically what we want to get from the api request that we are making so basically this allows us to get the infromation we want

export const getContacts = () => async dispatch => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users')
  dispatch({
    type: GET_CONTACTS,
    payload: res.data
  })
}

export const deleteContacts = (id) => {
  await axios.delete
  (`https://jsonplaceholder.typicode.com/users${id}`)
  dispatch ({
    type: DELETE_CONTACTS,
    payload: id
  })
}

export const addContacts = () => {
  return {
    type: ADD_CONTACTS,
    payload: contact
  }
}

// 1. action creator

/*
*********************************************************
*********************************************************
    This video is #160 for stephen grider
    From stephen grider course you can also do it like this
    Important: he does not have two files and calls this file index.js
    He also created a apis new folder with a file called jasonPlaceholder.js

import jasonPlaceholder from '../apis/jsonplaceholder';


    export const fetchPosts = () => async dispatch => {
      const response = await jasonPlaceholder.get('/posts');

      dispatch({type: 'FETCH_POSTS', payload: response })
  };


  /// for one user only

/* Before memoize
    export const fetcUser = (id) => async dispatch => {
      const response = await jsonplaceholder.get(`./users/${id}`)

      dispatch({type: 'FETCH_USER', payload: response.data});
};

*/

/* After memoize
1.///the function bellow will be sent dowon only once ant _fetchUser is the function we will be calling which is down below this one

export const fetcUser = (id) =>  dispatch => {
  _fetchUser(id, dispatch);
};


2.///this will be an outside function that we will call in the export above

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonplaceholder.get(`./users/${id}`)

  dispatch({type: 'FETCH_USER', payload: response.data})
})
*/







/*Instead of using memoizing we want to create a fetchPostAndUser(), for a mega action creaotor
  we export fetchPostsAndUsers to the Components
  getState().posts is just to get the state of the posts, 'userId' is just the user id that we want to match
  userIds.forEach(id => dispatch(fetchUser(id))): this function: this iterates over all the ids and passes in the id of the person with the post

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  const userIds = _.uniq(_.map(getState().posts, 'userId'))

  userIds.forEach(id => dispatch(fetchUser(id)))
};



export const fetcUser = (id) => async dispatch => {
  const response = await jsonplaceholder.get(`./users/${id}`)

  dispatch({type: 'FETCH_USER', payload: response.data});
};

export const fetchPosts = () => async dispatch => {
  const response = await jasonPlaceholder.get('/posts');

  dispatch({type: 'FETCH_POSTS', payload: response })
};


*/
