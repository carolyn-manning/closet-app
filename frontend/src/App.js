
import './App.css';
import React, { Component } from 'react';
import ClosetContainer from  './containers/closetContainer'
import WelcomeContainer from './containers/welcomeContainer';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import PrivateClosetRoute from './components/routes/PrivateClosetRoute';
import LogInRoute from './components/routes/LogInRoute';
import CreateUserRoute from './components/routes/CreateUserRoute';


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
