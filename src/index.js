import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const initialState = {
    count: 0,
    box:[],
    currentUser: {
        firstName: 'meow',
        lastName: 'lah'
    },
    color:"blue",
};


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1,
            };
        case 'DECREMENT':
            return {
                count: state.count - 1,
            };
        case 'RESET':
            return {
                count: 0,   
            };
        case 'COLOR':
            return {
                color: "blue",
            };   
        default:
            return state;
    }
}

const store = createStore(reducer);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
