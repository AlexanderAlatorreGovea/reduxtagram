import React from 'react';
import Contact from './Contact';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getContacts } from '../../contactActions'; ///this is the plain function by itself and needs to be connected down in mapStateToProps


class Contacts extends React.Component {
  componentDidMount() {
    this.props.getContacts();
  }


  render(){
    const { contacts } = this.props;
    return (
      <div></div>
    )
  }
}

Contact.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
}

// this.props === { contacts: state.contact.contacts }
/// contact.contacts  when contact is the initial state and contacts is the specific prop that we want inside of the reducer
const mapStateToProps = (state) => ({
  contacts: state.contact.contacts
});


///getContacts was imported above from the action creator
export default connect(mapStateToProps, {getContacts})(Contacts);


/* From stephen Grider's course once we fetch the data from the api he wants to call it and this is how he does it
post.id is the post that we are getting from the api with the id
post.title is the title we are fetching from the api
post.body is the paragraph that we are returning from the api
This is for a list of posts not necessarily for just one
renderList() {
  return this.props.posts.map(post => {
    return (
      <div className="item" key={post.id}>
        <i className={}/>
          <div className={}></div>
            <h2>{post.title}</h2>
            <p>{post.title}</p>
      </div>
    )
  })
}


*/


/* On here he fetches only one post
this.props.fetchUser is the fetching of the data
this.props.userId was passed down as props from constacts.js in order to match the id of the user
state.users, state is just to call the function inside, users we got straight from the reducer file

//this.props.users.find, this.props.users was passed down from the mapStateToProps function as props. .find is the function that will invoke
    every element inside of the array, .find returns the user that we care about

//const user = this.props.users.find(user => user.id === this.props.userId);
    the function above will find just the user that we care about as it is matching the ids

//if(!user) { return null; }, this will return nothing if no user was found

///user.name, ifst up user is called from the function (const user = this....), user.name is fetching the name of the user we care about

///inside of mapStateToProps  you can use ownProps which is a copy of the props in componentDidMount
  so it is a copy of this.props.fetchUser(this.props.userId)

///this.props.user is the referene to the mapStateToProps user that we want to find()
///use lodash and get memoize to only call a user one time
    _.memoize only makes the requst of something once
    npm installl --save lodash
    you have to import memoize in the actions folder
/// we import fetchPostsAndUsers

import React from 'react';
import   {connect} from 'react-redux'
import {fetchUser, fetchPostAndUser } from '../actions'



class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId)
}

  render() {
    const { user } = this.props;

  if(!user) {
      return null;
  }

  return <div className="header">{user.name}</div>
}
}


///you refactor the mapStateToProps to ongly get the find() function to match the users that we care about

cont mapStateToProps = state => {
  return { posts: state.posts }
}

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);
*/

/* This is a refactor of the above logic however in this one we are calling { fetchPostsAndUsers }
  import { fetchPostAndUsers } from './/actions';
  we remove componentDidMount so that the component doesnt fetch its own data
  we remor the {fetchUser } import abd the componentDidMount
class UserHeader extends React.Component {

  render() {
    const { user } = this.props;

  if(!user) {
      return null;
  }

  return <div className="header">{user.name}</div>
}
}

//now we are calling fetchPostAndUsers so we need to connect it here

cont mapStateToProps = state => {
  return { posts: state.posts }
}

export default connect(
  mapStateToProps,
  { fetchPostsAndUsers }
)(PostList);




*/
