import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import RooterCom from './components/RooterCom'
// import { Button } from 'antd';
// import SiderDemo from './components/Layout'
// import WrappedHorizontalLoginForm from './components/FormTest'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <RooterCom />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
