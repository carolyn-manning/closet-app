
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import PrivateClosetRoute from './routes/privateClosetRoute';
import LogInRoute from './routes/logInRoute';
import CreateUserRoute from './routes/createUserRoute';


class App extends Component {

  render () {
    return(
      <Routes>
        <Route exact path="/my_closet" element={<PrivateClosetRoute />} />
        <Route exact path="/" element={<LogInRoute />} />
        <Route exact path="/sign_up" element={<CreateUserRoute />} />
      </Routes>
    )
  }
}


export default App;
