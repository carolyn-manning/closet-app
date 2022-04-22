import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from "redux"; 
import allReducers from "./reducers/allReducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import WelcomeContainer from './containers/welcomeContainer';
import ClosetContainer from './containers/closetContainer';
import { BrowserRouter as Router, Route, Navigate, Routes} from "react-router-dom";
import CreateUser from './components/welcome/createUser';
import manageItems from './reducers/manageItems';
import manageLogIn from './reducers/manageLogIn';
import {combineReducers} from 'redux'

//const store = createStore(manageItems, applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); 

const store = createStore(
  combineReducers({manageItems, manageLogIn}),
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ),
);

ReactDOM.render (
  <Provider store={store}>
    <Router>
      <div>
        <Routes>
          <Route 
              exact path="/" 
              element={
                localStorage.jwt ? (
                  <Navigate replace to="/my_closet" /> 
                ) : (
                  <WelcomeContainer/> )
              } />
          <Route 
            exact path="/my_closet" 
            element={
              !localStorage.jwt ? (
                <Navigate replace to="/" /> 
              ) : (
                <ClosetContainer/> )
            } />
            <Route 
            exact path="/signup" 
            element={
              localStorage.jwt ? (
                <Navigate replace to="/my_closet" /> 
              ) : (
                <CreateUser /> )
            } />
          </Routes>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//<App store={store} /> 
