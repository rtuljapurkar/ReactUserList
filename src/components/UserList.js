import React from 'react';
import UserListElement from './UserListElement';
import {connect} from 'react-redux';

class UserList extends React.Component{
    render(){
        return(
            <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Username</th>
                                <th>Job</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.users.map(
                                        (user, index) => {
                                        return(
                                                <UserListElement key={user.id} user = {user} />
                                              );
                                        }
                                )
                            }
                        </tbody>
                    </table>
        );
    }
}

UserList.propTypes = {
  users: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return({
    users:  state.users
  });
}

export default connect(mapStateToProps)(UserList);
