import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import {createStore} from 'redux';
import rootReducer from './reducers/index';
import {Provider} from 'react-redux';

let users = [];
for(let i=0; i<28; i++)
{
    users.push({
        id: i,
        username: 'Randy' + i,
        job: 'Employee' + i
    });
}

const initial_state = {
  users: users
};

const store = createStore(rootReducer, initial_state);

render(<Provider store = {store}>
        <App/>
        </Provider>,
    document.getElementById("app")
);
