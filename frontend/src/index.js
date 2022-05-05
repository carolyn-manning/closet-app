import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from "redux"; 
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import manageItems from './reducers/manageItems';
import manageLogIn from './reducers/manageLogIn';
import {combineReducers} from 'redux'
import PrivateClosetRoute from './components/routes/PrivateClosetRoute';
import LogInRoute from './components/routes/LogInRoute';
import CreateUserRoute from './components/routes/CreateUserRoute';

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
          <Route exact path="/my_closet" element={<PrivateClosetRoute />} />
          <Route exact path="/" element={<LogInRoute />} />
          <Route exact path="/sign_up" element={<CreateUserRoute />} />
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


