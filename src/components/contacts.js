import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import  { deleteContacts } from '../../actions/contactActions'

class Contact extends Component {
  state = {
    showContactInfo: false
  }
  onDeleteClick = id => {
    this.props.deleteContacts(id)
  }
  render() {
    const { id, name, email, phone } = this.props.contact
    return (
      <div onClick={this.onDeleteClick.bind(this, id)}></div>
    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContacts: PropTypes.func.isRequired
}

export default connect(null, { deleteContacts })(Contact);


/* On her he is importing the individual user
import UserHeader from './UserHeader'
pass down the user id
UserHeader was imported here and the the id of the people who wrote the post was imported with {post.userId}


<UserHeader userId={post.userId} />


*/
