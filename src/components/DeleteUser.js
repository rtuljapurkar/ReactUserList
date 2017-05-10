import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import {connect} from 'react-redux';

class DeleteUser extends React.Component{
    render(){
        // const f = this.props.modal_delete;
        // console.log(f);
        return (
                <Modal show={this.props.modal_delete.show}>
                    <Modal.Header>
                        <Modal.Title>
                            Are you sure you want to delete user <strong> {this.props.modal_delete.userName} </strong>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Footer>
                            <Button>No</Button>
                            <Button bsStyle="primary">Yes</Button>
                    </Modal.Footer>
                </Modal>
        );
    }
}
function mapStateToProps(state){
    let modal_delete;
    if(state.users.modal && state.users.modal.modal_list_delete)
        {
            // debugger;
            modal_delete = state.users.modal.modal_list_delete;
        }
        else
        {
            modal_delete = {
            show: false,
            id: 0,
            username: ''
        };
    }
    return {
        modal_delete: modal_delete
    } ;
}
DeleteUser.propTypes = {
    modal_delete: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps)(DeleteUser);
