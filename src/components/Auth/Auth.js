import React, {Component} from 'react';
import './Auth.css';

class Auth extends Component {
  render() {
    return (
      <div id="outer-container">
      <div id="inner-container">
        <h1>CITIZEN PROBLEM <br/> REPORTER</h1>
          <a href="http://localhost:3001/api/auth/login">
            <button>Login</button>
          </a>
      </div>
      </div>
    )
  }
}

export default Auth;
