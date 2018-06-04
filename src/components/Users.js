import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Users extends Component {

  render() {
    // console.log(this.props)
    const users = this.props.users.map((user, idx) => {
      return <li key={idx}>{user.userName}<br/>{user.hometown}</li>
    })

    return (
      <div>
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    primaryUser: state.users[0]
  }
}

export const ConnectedUsers = connect(mapStateToProps)(Users) // aren't we supposed to be connecting something around here?
