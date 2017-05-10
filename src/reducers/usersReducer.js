
export default function usersReducer(state = {}, action){
    let new_state = {};

    switch (action.type){
        case 'Delete_ModalShowAction':
        new_state = JSON.parse(JSON.stringify(state));
        new_state.modal = new_state.modal ? new_state.modal : {};
        new_state.modal.modal_list_delete = {
            show: true,
            userId: action.userId,
            userName: action.userName
            };
        return new_state;

        default:
        return state;
        }
}
