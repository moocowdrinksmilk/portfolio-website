import logo from './logo.svg';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap'
import Front from './content/front'
import AboutMe from './content/about-me'
import NavBar from './content/nav-bar'
import React, {Component} from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

class App extends Component{

  render(){
    return (
      <div>
        <Front/>
        <NavBar/>
        <AboutMe/>
      </div>
  );
  }
}

export default App;
