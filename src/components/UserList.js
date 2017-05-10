import React from 'react';
import { Table } from 'react-bootstrap';
import UserListElement from './UserListElement';
import {connect} from 'react-redux';
import DeleteUser from './DeleteUser';

export default class UserList extends React.Component{
    render(){

        return(
                <div>
                    <Table bordered hover striped responsive   >
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
                            {this.props.users.map((user, index) => {
                                    return(
                                                <UserListElement key={user.id} user = {user} />
                                              );
                                        }
                                )
                            }
                        </tbody>
                    </Table>
                    <DeleteUser/>
                </div>
        );
    }
}

UserList.propTypes = {
  users: React.PropTypes.array.isRequired
};

// function mapStateToProps(state) {
//   return({
//     users:  state.users
//   });
// }
//
// export default connect(mapStateToProps)(UserList);
