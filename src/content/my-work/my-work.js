import React, { Component, useState } from "react"
import { Container, Row, Col, Navbar } from 'react-bootstrap'
import '../../App.css';
import './my-work.css'

class MyWork extends Component {
    constructor(props) {
        super(props)
        this.state = {
            role: "Software Engineering Intern",
            company: "Nalagenetics",
            link: "https://www.nalagenetics.com/",
            length: "Feb 2020 - July 2020",
            description: [
                "Created a medication management feature on the patient portal using Angular",
                "Wrote UI testcases for the frontend web portals using Cypress",
                "Write Unit and Integration testcases for the backend Nodejs server using Jest",
                "Collaboration with the Business Development team to scrape target physician's information on the web using Selenium"]
        }
        this.items = this.state.description.map((item) =>
            <li><span>{item}</span></li>
        )
    }

    render() {
        return (
            <section>
                <Container className="justify-content-center description px-md-5">
                    <h2>
                        <span>2. </span>My Experiences
                    </h2>
                    <Row className="justify-content-center description">
                        <Col md={{ span: 2 }}>
                            <ol className="list-group flex-row flex-md-column">
                                <li className="company-name">
                                    <span className="active">Nalagenetics</span>
                                </li>
                                <li className="company-name">
                                    <span>SMUMods</span>
                                </li>
                            </ol>
                        </Col>
                        <Col md={{ span: 8 }}>
                            <h5>
                                Software Engineering Intern @ <a href={this.state.link} >{this.state.company}</a>
                            </h5>
                            <p>
                                {this.state.length}
                            </p>
                            <ul className="job-description">
                                {this.items}
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default MyWork