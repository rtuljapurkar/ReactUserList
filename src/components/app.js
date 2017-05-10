import React from 'react';
import UserList from './UserList';
import {connect} from 'react-redux';
import '../stylesheets/main.css';

class App extends React.Component{

    render(){
            const {users} = this.props;
            return(
                    <div className="container">
                        <UserList  users={users}  />
                    </div>
                    );
        }
}


App.propTypes = {
  users: React.PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return({
        users: state.users
  });
}

export default connect(mapStateToProps)(App);
