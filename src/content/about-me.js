import React, { Component } from "react"
import { Container, Row, Col } from 'react-bootstrap'
import '../App.css';
import './about-me.css'

class AboutMe extends Component {
    render() {
        return (
            <Container className="justify-content-center description">
                <Container className="justify-content-center" fluid>
                    <h3 className='personal' data-aos="fade-up">
                        So, Who is Rui Xian?
                    </h3>
                </Container>
                <Row className=" justify-content-around">
                    <Col md={{ span: 3 }}>
                        <img src='../../face.png' width='250rem' />
                    </Col>
                </Row>
                <Row className="personal justify-content-around">

                    <Col md={{ span: 7 }} className="personal" pt-5>
                        <li>
                            <ul>
                                I am a Computer Science undergraduate studying in the Singapore Management University (SMU)
                                </ul>

                            <ul>
                                I am enthusiastic about tech and software engineering. I never cease to discover and try new
                                technologies and framework, and work on interesting projects in my own free time.
                                </ul>
                        </li>
                    </Col>
                </Row>
                <Container className="fill">

                </Container>
            </Container>
        )
    }
}

export default AboutMe