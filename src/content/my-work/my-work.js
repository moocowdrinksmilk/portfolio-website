import React, { Component, useState } from "react"
import { Container, Row, Col, Navbar } from 'react-bootstrap'
import '../../App.css';
import './my-work.css'

class MyWork extends Component {
    constructor(props) {
        super(props)
        this.jobs = [
            {
                role: "Software Engineering Intern",
                company: "Nalagenetics",
                link: "https://www.nalagenetics.com/",
                length: "Feb 2020 - July 2020",
                description: [
                    "Created a medication management feature on the patient portal using Angular",
                    "Wrote UI testcases for the frontend web portals using Cypress",
                    "Write Unit and Integration testcases for the backend Nodejs server using Jest",
                    "Collaboration with the Business Development team to scrape target physician's information on the web using Selenium"]
            },
            {
                role: "Frontend Engineer",
                company: "SMUMods",
                link: "https://smumods.com/",
                length: "Dec 2020 - Present",
                description: ["Have not started work"]
            }
        ]
        this.state = this.jobs[0]
        this.curr_index = 0;
        this.changeActive = this.changeActive.bind(this)
    }

    componentDidUpdate() {
    }
    changeActive = (index) => {
        let item = document.getElementsByClassName('company-name')
        item[this.curr_index].classList.remove("active")
        item[index].classList.add("active")
        this.curr_index = index
        this.setState(this.jobs[index])
    }

    render() {
        return (
            <section>
                <Container className="justify-content-center description px-md-5">
                    <h2>
                        <span>2. </span>My Experiences
                    </h2>
                    <Row className="justify-content-center description experience">
                        <Col md={{ span: 2 }}>
                            <ol className="list-group flex-row flex-md-column company-parent">
                                <li className="company-li" onClick={() => { this.changeActive(0) }}>
                                    <span className="active company-name">Nalagenetics</span>
                                </li>
                                <li className="company-li" onClick={() => { this.changeActive(1) }}>
                                    <span className="company-name">SMUMods</span>
                                </li>
                            </ol>
                        </Col>
                        <Col md={{ span: 8 }}>
                            <h5>
                                {this.state.role} @ <a href={this.state.link} >{this.state.company}</a>
                            </h5>
                            <p>
                                {this.state.length}
                            </p>
                            <ul className="job-description">
                                {
                                    this.state.description.map((thing) =>
                                    <li><span>{thing}</span></li>
                                )
                                }
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default MyWork