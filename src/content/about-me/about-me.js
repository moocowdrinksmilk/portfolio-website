import React, { Component, useState } from "react"
import { Container, Row, Col, Navbar } from 'react-bootstrap'
import '../../App.css';
import './about-me.css'

class AboutMe extends Component {
    constructor(props) {
        super(props)
        this.element = React.createRef()
        this.state = {
            description: "These are some places that I have been to recently"
        }
    }

    changeDescription = (str) => {
        this.setState({ description: str })
    }

    render() {
        return (
            <section>
                <Container data-aos="fade-up" data-aos-duration="1000" className="justify-content-center description px-md-5">

                    <h2 className='personal'>
                        1. <span> About Me</span>
                    </h2>

                    <Row className="description">
                        <Col md={{ span: 8 }}>
                        <p>
                            As you can tell, my name is Rui Xian, and I am a Software Engineer based in Singapore.
                        </p>
                        <p>
                            I am currently pursuing a bachelor's of
                            Computer Science in the Singapore Management University.
                        </p>
                        <p>
                            Being passionate about Software Engineering, I have not stopped 
                            learning and discovering new technologies and frameworks. 
                        </p>

                        <p className="tech">
                            These are some of the technologies I have been working on recently:
                        </p>

                        <ul>
                            <li>
                                React
                            </li>
                            <li>
                                Flutter
                            </li>
                            <li>
                                Typescript
                            </li>
                            <li>
                                Node
                            </li>
                        </ul>
                        </Col>
                        <Col md={{ span: 3 }}>
                            <img src='../../face.png' width='250rem' />
                        </Col>
                    </Row>
                    
                </Container>
            </section>
        )
    }
}

export default AboutMe