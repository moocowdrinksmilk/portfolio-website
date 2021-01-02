import './App.css';
import { Container, Row, Col, Navbar } from 'react-bootstrap'
import Front from './content/front'
import AboutMe from './content/about-me/about-me'
import MyWork from './content/my-work/my-work'
import NavBar from './content/nav-bar'
import React, { Component } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

class App extends Component {

  render() {
    return (
      <main>
        <Front />
        <AboutMe />
        <MyWork />
        <section>
          <Container className="justify-content-center description px-md-5">
            <h2 className='personal'>
              <span>3. </span> Technologies I can use
            </h2>
            <Row>
              
            </Row>
          </Container>
        </section>
      </main>
    );
  }
}

export default App;
