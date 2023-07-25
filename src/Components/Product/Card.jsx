import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards({ data, category,addItem }) {
    return (
        <div style={{margin:'40px 0px'}}>
            <h1 style={{ textAlign: 'left' }}>{category}</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {data.map(item =>
                    <Card key={item.id} style={{ width: '18rem', boxShadow: '3px 6px 11px 5px #e7e7e7', border: ' 0px white' }}>
                        <Card.Img variant="top" src={item.image} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>{item.descreption}</Card.Text>
                            <Card.Title>{item.price}</Card.Title>
                            <Button variant="dark" onClick={()=>addItem(item)}>Buy Now</Button>
                        </Card.Body>
                    </Card>
                )}
            </div>
        </div>
    )
}

export default Cards
