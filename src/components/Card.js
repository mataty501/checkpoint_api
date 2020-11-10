import React from 'react'

const Card = (props) => {
    return (

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                <li>{props.username}</li>
                <li>{props.email}</li>
                </Card.Text>
            </Card.Body>
            </Card>

    )
}

export default Card
