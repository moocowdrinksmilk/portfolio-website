import React, {Component} from "react"
import {Container, Row, Col} from 'react-bootstrap'
import '../App.css';


class Front extends Component{

    constructor(props){
        super(props)
        this.element = React.createRef()
        this.height_from_top = 0
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
        this.height_from_top = document.querySelector(".fade-out").getBoundingClientRect().top
      }
    
      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll = () => {
        const name = document.querySelector(".fade-out");
        let distance = name.getBoundingClientRect().top
        const change = document.getElementsByClassName("fade-out")
        change[0].style.opacity = distance/this.height_from_top
      }
    
    
    render(){
        return (
            <Container className="fill justify-content-center" fluid>
              <h1 className="fade-out">
                Hey, I'm <span className="name"> Rui Xian</span>,
                <br></br>
                <h1>
                    A Software Engineer
                </h1>
              </h1>
            </Container>
        )
    }
}

export default Front;

