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
                        <p>
                            {this.state.description}
                        </p>
                    </Col>
                </Row>
                    <Row>
                        <Col className="px-0">
                            <video width="480" height="240" autoplay loop muted
                                onMouseOver={event =>{
                                    event.target.play()
                                    this.changeDescription("The view on the summit of Mount Batur")
                                }}
                                onMouseOut={event =>{
                                    event.target.pause()
                                    this.changeDescription("These are some places that I have been to recently")
                                }}
                                className="vid">
                                <source src="../../batur.mp4" type="video/mp4" />
                            </video>
                        </Col>
                        <Col className="px-0 mx-0">
                            <video width="450" height="240" autoplay loop muted
                                onMouseOver={event =>{
                                    event.target.play()
                                    this.changeDescription("Boat ride")
                                }}
                                onMouseOut={event =>{
                                    event.target.pause()
                                    this.changeDescription("These are some places that I have been to recently")
                                }}
                                className="vid">
                                <source src="../../boat.mp4" type="video/mp4" />
                            </video>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="px-0">
                            <video width="465" height="240" autoplay loop muted
                                onMouseOver={event =>{
                                    event.target.play()
                                    this.changeDescription("Kayaking in Krabi")
                                }}
                                
                                onMouseOut={event =>{
                                    event.target.pause()
                                    this.changeDescription("These are some places that I have been to recently")
                                }}
                                className="vid">
                                <source src="../../kayak.mp4" type="video/mp4" />
                            </video>
                        </Col>
                        <Col className="px-0">
                            <video width="465" height="240" autoplay loop muted
                                onMouseOver={event =>{
                                    event.target.play()
                                    this.changeDescription("Random seaweed on Gegar Beach")
                                }}
                                onMouseOut={event =>{
                                    event.target.pause()
                                    this.changeDescription("These are some places that I have been to recently")
                                }}
                                className="vid">
                                <source src="../../seaweed.mp4" type="video/mp4" />
                            </video>
                        </Col>
                    </Row>
                <Container className="fill">

                </Container>
            </Container>
        )
    }
}

export default AboutMe