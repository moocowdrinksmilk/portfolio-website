import React, { Component, useState } from "react"
import { Container, Row, Col } from 'react-bootstrap'
import '../App.css';
import './about-me.css'

class AboutMe extends Component {
    constructor(props){
        super(props)
        this.element = React.createRef()
        this.state = {
            description: "These are some places that I have been to recently"
        }
    }
    
    changeDescription = (str) =>{
        this.setState({description : str})
    }

    render() {
        return (
            <Container className="justify-content-center description">
                <Container className="justify-content-center" fluid>
                    <h1 className='personal'>
                        About Me
                    </h1>
                </Container>
                <Row className=" justify-content-around">
                    <Col md={{ span: 3 }}>
                        {/* <img src='../../face.png' width='250rem' /> */}
                    </Col>
                </Row>
                <Row className="personal justify-content-around">

                    <Col md={{ span: 10 }} className="personal" pt-5>
                        <p>
                            I am someone loves to discover new things, be it different technologies or places!
                        </p>
                        
                    </Col>
                </Row>
                <Container className="fill">

                </Container>
            </Container>
        )
    }
}

export default AboutMe