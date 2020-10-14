import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';

const Box = ({ characters }) => {
    return (
    <div>
        <div className="row">
        {characters.slice(0, 3).map((character, i) => (
        <Col md={4} key={i}>
        <Card style={{ width: '100%' }}>
        <a href={character.slug}>
        <Card.Img variant="top" src={character.fimg_url} />
        <Card.Body>
            <Card.Title><div dangerouslySetInnerHTML={ { __html:character.title.rendered } }></div></Card.Title>
            <Button variant="primary">Read More</Button>
        </Card.Body>
        </a>
        </Card>    
        </Col>
        ))}
        </div>
    </div>
    )
};
export default Box

