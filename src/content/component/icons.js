import React, { Component, useState } from "react"
import { Container, Row, Col, Navbar } from 'react-bootstrap'
import './icons.css'


class Icons extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isShown : false
        }
    }
    render() {
        return(
        <Col md={{ span: 4 }} xs={{ span: 6 }} className="mt-5 grow"
        onMouseEnter = {() => this.setState({isShown : true})}
        onMouseLeave = {() => this.setState({isShown : false})}
        >
            {this.props.children}
            {
                this.state.isShown && 
                <div className="position-absolute center-icon">
                    {this.props.name}
                </div>
            }
        </Col>
        )
    }
}

export default Icons