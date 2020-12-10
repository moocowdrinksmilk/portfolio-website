import React, {Component} from "react"
import {Container, Row, Col} from 'react-bootstrap'
import '../App.css';
import './about-me.css'

class AboutMe extends Component{
    render(){
        return(
            <Container fluid className="justify-content-center">
                
                <h1 className='personal'>
                    About Me!
                </h1>
                {/* <Row className="personal">
                    <Col md={{span:3, offset:0}}>
                        <img src='../../face.png' width='250rem'/>
                    </Col>
                    <Col md={{span:4, offset:2}} className="personal" pt-5>
                    Hello, I am a dude who has a dick, surprising? I think not
                    </Col>
                </Row>
                <Row>
                    <Col>
                    Heloo
                    </Col>
                    <Col>
                    Hello
                    </Col>
                </Row> */}
            </Container>
        )
    }
}

export default AboutMe