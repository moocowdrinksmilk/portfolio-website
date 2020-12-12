import React, { Component } from "react"
import { Container, Row, Col, Navbar } from 'react-bootstrap'
import './nav-bar.css'

class NavBar extends Component {
    render() {
        return (
            <Navbar fixed="top">
                <ul>
                    <li>
                        Hello
                    </li>
                </ul>
            </Navbar>
        )
    }
}

export default NavBar