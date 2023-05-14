import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { Container, Form } from 'react-bootstrap';
import './Header.css' 


function Header() {
  return (
    <div>
        <Navbar bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="\Restaurant-logo-design-free-template-1536x864.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
           <strong className='p-3 mt-5'>Find Best</strong>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header