import React, { Component } from 'react';
import { getUsers } from './API/user';
import './App.css';
import CreateUser from './components/CreateUser/CreateUser';

class App extends Component {
  getUsersHandler = () => {
    getUsers()
      .then(res => {
        debugger;
      })
      .catch(err => {
        debugger;
      })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CreateUser />
        </header>
        <div>
          <button type="button" onClick={this.getUsersHandler}>
            get Users
        </button>
        </div>
      </div>
    );
  }
}

export default App;
