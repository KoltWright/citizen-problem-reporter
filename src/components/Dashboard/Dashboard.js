import React, {Component} from 'react';
import Navbar from '../Navbar/Navbar.js';
import axios from 'axios';
class Dashboard extends Component {

  componentDidMount() {
    axios.get('http://localhost:3001/api/get_user')
      .then(user => console.log(user))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Navbar />
      </div>
    )
  }
}

export default Dashboard;
