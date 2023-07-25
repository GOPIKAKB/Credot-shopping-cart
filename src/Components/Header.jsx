import React, { useContext, useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { BsCartFill } from "react-icons/bs";
import { newContext } from '../App';
import './../Style/Header.css'

function Header() {
  const { cart } = useContext(newContext)
  const [count, setCount] = useState('')

  useEffect(() => {
    let totalCount = cart.reduce((sum, item) => sum + item.count, 0)
    setCount(totalCount)
  }, [cart])

  return (
    <div className='header-cntnr'>
      <Navbar variant="light" >
        <Container style={{ maxWidth: '1000px' }}>
          <Nav className="me-auto, justify-content-end" style={{ color: '444242' }}>
            <Nav.Link><b>Home</b> </Nav.Link>
            <Nav.Link>Shoes </Nav.Link>
            <Nav.Link>Backpacks </Nav.Link>
            <Nav.Link>Contact </Nav.Link>
          </Nav>
          <Nav className="me-auto, justify-content-end cart" >
            <Nav.Link className='icon'><BsCartFill />
             <sup style={{display:count===0?'none':'inline'}}>{count}</sup>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
