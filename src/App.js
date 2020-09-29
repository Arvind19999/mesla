import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';

// added imports
import Home from './components/Home'
import Login from './components/User/Login';
import Register from './components/User/Register';


function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/user/login" exact component={Login} />
        <Route path="/user/register" exact component={Register} />
      </Router>
    </div>
  );
}

export default App;
