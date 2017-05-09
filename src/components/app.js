import React from 'react';
import UserList from './UserList';

export default class App extends React.Component{
    constructor(props, context){
        super(props, context);
        let users = [];
        for(let i=0; i<28; i++)
        {
            users.push({
                id: i,
                username: 'Randy' + i,
                job: 'Employee' + i
            });
        }
        this.state = {
            users: users
        };
    }
    render(){
            return(<UserList users={this.state.users}/>);
        }
}
