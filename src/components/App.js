import React, { Component } from 'react';
import '../styles/App.css';
import PlayListForm from './PlayListForm.js';
import PlayList from './PlayList.js';
import NavBar from './NavBar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="main-wrapper container-fluid">
            <NavBar />
          <div classname="container-fluid" id="main-wrapper">
            <div className="row">
                <PlayListForm />
                <PlayList />
            </div>
          </div>
      </div>
    </div>
    );
  }
}

export default App;
