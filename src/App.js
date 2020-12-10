import logo from './logo.svg';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap'
import Front from './content/front'
import AboutMe from './content/about-me'
import React, {Component} from "react"

class App extends Component{

  render(){
    return (
      <div>
        <Front/>
        <AboutMe/>
      </div>
  );
  }
}

export default App;
