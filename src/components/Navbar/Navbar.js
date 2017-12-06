import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <img id="logo" src="Bug-Full Color-Rev.png" alt="City Logo" />
        <a id="logout-link" href="#"><h1>Logout</h1></a>
      </nav>
    )
  }
}

export default Navbar;
