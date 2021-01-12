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
            <Row className="justify-content-center mt-5" data-aos="fade-up">
              <h4>
                What I am currently working with:
              </h4>
            </Row>
            <Row className="justify-content-around mt-2">
              <Col md={{ span: 4 }} xs={{ span: 6 }} className="mt-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="90px" height="90px"><polygon fill="#81c784" points="23.987,17 18.734,8 2.974,8 23.987,44 45,8 29.24,8" /><polygon fill="#455a64" points="29.24,8 23.987,17 18.734,8 11.146,8 23.987,30 36.828,8" /></svg>
              </Col>
              <Col md={{ span: 4 }} xs={{ span: 6 }} className="mt-5">
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="90px" height="90px"><path fill="#ffd600" d="M6,42V6h36v36H6z"/><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"/></svg>
              </Col>
              <Col md={{ span: 4 }} xs={{ span: 6 }} className="mt-5">
              <svg width="90px" height="90px" viewBox="0 0 256 288" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M152.576 32.963l59.146 34.15a25.819 25.819 0 0 1 5.818-4.604c12.266-7.052 27.912-2.865 35.037 9.402 7.052 12.267 2.865 27.912-9.402 35.037a25.698 25.698 0 0 1-6.831 2.72v68.325a25.7 25.7 0 0 1 6.758 2.702c12.34 7.125 16.527 22.771 9.402 35.038-7.052 12.266-22.771 16.453-35.038 9.402a25.464 25.464 0 0 1-6.34-5.147l-58.786 33.94a25.671 25.671 0 0 1 1.295 8.08c0 14.103-11.458 25.636-25.635 25.636-14.177 0-25.635-11.46-25.635-25.636 0-2.52.362-4.954 1.037-7.253l-59.13-34.14a25.824 25.824 0 0 1-5.738 4.52c-12.34 7.051-27.986 2.864-35.038-9.402-7.051-12.267-2.864-27.913 9.402-35.038a25.71 25.71 0 0 1 6.758-2.703v-68.324a25.698 25.698 0 0 1-6.831-2.72C.558 99.897-3.629 84.178 3.423 71.911c7.052-12.267 22.77-16.454 35.037-9.402a25.82 25.82 0 0 1 5.79 4.575l59.163-34.159a25.707 25.707 0 0 1-1.048-7.29C102.365 11.46 113.823 0 128 0c14.177 0 25.635 11.459 25.635 25.635 0 2.548-.37 5.007-1.059 7.328zm-6.162 10.522l59.287 34.23a25.599 25.599 0 0 0 2.437 19.831c3.609 6.278 9.488 10.44 16.013 12.062v68.41c-.333.081-.664.17-.993.264L145.725 44.17c.234-.224.464-.452.689-.684zm-36.123.7l-77.432 134.11a25.824 25.824 0 0 0-1.01-.27v-68.417c6.525-1.622 12.404-5.784 16.013-12.062a25.6 25.6 0 0 0 2.427-19.869l59.27-34.22c.239.247.483.49.732.727zm24.872 6.075l77.414 134.08a25.492 25.492 0 0 0-4.513 5.757 25.7 25.7 0 0 0-2.702 6.758H50.64a25.71 25.71 0 0 0-2.704-6.758 25.825 25.825 0 0 0-4.506-5.724l77.429-134.107A25.715 25.715 0 0 0 128 51.27c2.487 0 4.89-.352 7.163-1.01zm11.795 194.478l58.902-34.008a25.865 25.865 0 0 1-.473-1.682H50.607c-.082.333-.171.663-.266.992l59.19 34.175A25.558 25.558 0 0 1 128 236.373a25.564 25.564 0 0 1 18.958 8.365z" fill="#E535AB" fill-rule="evenodd"/></svg>
              </Col>
              <Col md={{ span: 4 }} xs={{ span: 6 }} className="mt-5 pl-md-5">
                <svg width="90px" height="90px" xmlns="http://www.w3.org/2000/svg" xmlns xlink="http://www.w3.org/1999/xlink" viewBox="0 0 66 40" fill="#fff" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round"><use xlink href="#B" x=".5" y=".5"/><defs><linearGradient x1="0.00%" y1="-88.89%" y2="188.89%" id="A" x2="100.00%"><stop stop-color="#2383ae" offset="0%"/><stop stop-color="#6dd7b9" offset="100%"/></linearGradient></defs><symbol id="B" overflow="visible"><path d="M16 12.8C18.133 4.267 23.467 0 32 0c12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8-2.133 8.533-7.467 12.8-16 12.8-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8zM0 32c2.133-8.533 7.467-12.8 16-12.8 12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8-2.133 8.533-7.467 12.8-16 12.8-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8z" stroke="none" fill="url(#A)"/></symbol></svg>
              </Col>
              <Col md={{ span: 4 }} xs={{ span: 6 }} className="mt-5 pr-md-5">
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="90px" height="90px"><path fill="#F4511E" d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z"/></svg>
              </Col>
            </Row>
            {/* <Row className="justify-content-around mt-5">
              <Col md={{ span: 3 }}>
              <svg width="90px" height="90px" xmlns="http://www.w3.org/2000/svg" xmlns xlink="http://www.w3.org/1999/xlink" viewBox="0 0 66 40" fill="#fff" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round"><use xlink href="#B" x=".5" y=".5"/><defs><linearGradient x1="0.00%" y1="-88.89%" y2="188.89%" id="A" x2="100.00%"><stop stop-color="#2383ae" offset="0%"/><stop stop-color="#6dd7b9" offset="100%"/></linearGradient></defs><symbol id="B" overflow="visible"><path d="M16 12.8C18.133 4.267 23.467 0 32 0c12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8-2.133 8.533-7.467 12.8-16 12.8-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8zM0 32c2.133-8.533 7.467-12.8 16-12.8 12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8-2.133 8.533-7.467 12.8-16 12.8-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8z" stroke="none" fill="url(#A)"/></symbol></svg>
              </Col>
            </Row> */}
          </Container>
        </section>
      </main>
    );
  }
}

export default App;
