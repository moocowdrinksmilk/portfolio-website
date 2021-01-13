import React, { Component } from "react"
import Icons from '../component/icons';
import  {ReactComponent as VueIcon} from './vue.svg'
import  {ReactComponent as JsIcon} from './js.svg'
import  {ReactComponent as GqlIcon} from './graphql.svg'
import  {ReactComponent as TailWindIcon} from './tailwind.svg'
import  {ReactComponent as GitIcon} from './git.svg'

import { Container, Row, Col, Navbar } from 'react-bootstrap'


class Technology extends React.Component{
    render(){
        return (
            <section>
          <Container className="justify-content-center description px-md-5">
            <h2 className='personal'>
              <span>3. </span> Technologies
            </h2>
            <Row className="justify-content-center mt-5" data-aos="fade-up">
              <h4>
                What I am currently working with:
              </h4>
            </Row>
            <Row className="justify-content-around mt-2 px-10">
              <Icons name = "Vue" children={<VueIcon/>}/>
              <Icons name = "Javascript" children={<JsIcon/>} />
              <Icons name = "Graph QL" children={<GqlIcon/>} />
              <Icons name = "Tailwind CSS" children={<TailWindIcon/>} />
              <Icons name = "Git" children={<GitIcon/>} />
              

            </Row>
            {/* <Row className="justify-content-around mt-5">
              <Col md={{ span: 3 }}>
              <svg width="90px" height="90px" xmlns="http://www.w3.org/2000/svg" xmlns xlink="http://www.w3.org/1999/xlink" viewBox="0 0 66 40" fill="#fff" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round"><use xlink href="#B" x=".5" y=".5"/><defs><linearGradient x1="0.00%" y1="-88.89%" y2="188.89%" id="A" x2="100.00%"><stop stop-color="#2383ae" offset="0%"/><stop stop-color="#6dd7b9" offset="100%"/></linearGradient></defs><symbol id="B" overflow="visible"><path d="M16 12.8C18.133 4.267 23.467 0 32 0c12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8-2.133 8.533-7.467 12.8-16 12.8-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8zM0 32c2.133-8.533 7.467-12.8 16-12.8 12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8-2.133 8.533-7.467 12.8-16 12.8-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8z" stroke="none" fill="url(#A)"/></symbol></svg>
              </Col>
            </Row> */}
          </Container>
        </section>
        )
    }
}

export default Technology