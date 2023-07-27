import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './../../Style/Card.css'

function Cards({ data, category,addItem }) {
    return (
        <div style={{margin:'40px 0px'}}>
            <h1 style={{ textAlign: 'left' }}>{category}</h1>
            <div className='align-card'>
                {data.map(item =>
                    <Card key={item.id} className='card-cont'>
                        <Card.Img variant="top" src={item.image} style={{height:'180px'}}/>
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text style={{height:'40px'}}>{item.descreption}</Card.Text>
                            <Card.Title>${item.price}</Card.Title>
                            <Button variant="dark" onClick={()=>addItem(item)}>Buy Now</Button>
                        </Card.Body>
                    </Card>
                )}
            </div>
        </div>
    )
}

export default Cards
