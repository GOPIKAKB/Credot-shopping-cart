import React, { useContext, useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { newContext } from '../App';

function Cart() {
    const { cart } = useContext(newContext)
    const [total, setTotal] = useState(0)
    const [count, setCount]=useState(0)

    useEffect(() => {
        let sum = cart.reduce((total, item) => total + (item.count * item.price), 0)
        let totalCount = cart.reduce((sum, item) => sum + item.count, 0)
        setCount(totalCount)
        setTotal(sum)
    }, [cart])
    return (
        <div key="cart-item">
           { total>0 && <h2>Sub Total ({count} Items ) : ${total}</h2>}
           {total === 0 && <h2>Cart is Empty</h2>}
            {cart.map(item =>
                <Card key={item.id} style={{ marginBottom: '20px', width: '50%', margin: '20px auto' }}>
                    <Container>
                        <Row>
                            <Col xs={12} md={4} style={{ display: 'flex', alignItems: 'center' }}>
                                <Card.Img src={item.image} alt={item.title} />
                            </Col>
                            <Col xs={12} md={8}>
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>{item.descreption}</Card.Text>
                                    <Card.Text><b>${item.price}</b></Card.Text>
                                    <Card.Text>Count : {item.count}</Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Container>
                </Card>
            )}
        </div>
    )
}

export default Cart
