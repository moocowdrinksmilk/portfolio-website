import logo from './logo.svg';
import './App.css';
import {Container, Row, Col, Navbar} from 'react-bootstrap'
import Front from './content/front'
import AboutMe from './content/about-me/about-me'
import MyWork from './content/my-work/my-work'
import NavBar from './content/nav-bar'
import React, {Component} from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

class App extends Component{

  render(){
    return (
      <main>
        <Front/>
        <AboutMe/>
        <MyWork/>
      </main>
  );
  }
}

export default App;
