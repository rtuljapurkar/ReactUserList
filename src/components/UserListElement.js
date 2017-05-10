import React from 'react';
import {Button, Glyphicon} from 'react-bootstrap';
import {connect} from 'react-redux';
import * as userActions from '../actions/UserActions';
import {bindActionCreators} from 'redux';

class UserListElement extends React.Component{
    constructor(props, context){
        super(props, context);
        this.modalDeleteShow = this.modalDeleteShow.bind(this);
    }

    modalDeleteShow (event) {
       const userName = event.target.dataset.username;
           const userId = Number(event.target.dataset.id);
           this.props.actions.DeleteClickAction(userId, userName);
       }


    render(){
        const user = this.props.user;
        return(
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.job}</td>
                <td>
                    <a href={"/user/edit/" + user.id}>
                        <Button bsize="xsmall" >
                            Edit <Glyphicon glyph="edit"/>
                        </Button>
                    </a>
                </td>
                <td>
                    <Button
                        bsize="xsmall"
                        onClick={this.modalDeleteShow}
                        data-id={user.id}
                        data-username = {user.username} >
                        Delete <Glyphicon glyph="remove-circle"/>
                    </Button>
                </td>
            </tr>
        );
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(userActions, dispatch)
    };
}

function mapStateToProps(state, ownProps){
    return {
        users: state.users
    };
}

UserListElement.propTypes = {
    user: React.PropTypes.object.isRequired,
    actions:React.PropTypes.object.isRequired
};


export default connect(mapStateToProps, mapDispatchToProps) (UserListElement);
