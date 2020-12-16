import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "react-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
//this replaces window.__redux_devtools

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)







import './index.css';
import App from 'components/App';
import 'components/app.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render( <
    React.StrictMode >
    <
    App / >
    <
    /React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();