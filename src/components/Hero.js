import React from 'react';
import { Jumbotron, Button, Container } from 'react-bootstrap';

class Hero extends React.Component {
    
    render() {
        return(
            <Jumbotron id="hero">
                <Container>
            <div className="bordered"></div>
            <h1>{this.props.title}</h1>
            <p>
              {this.props.text}
            </p>
            </Container>
          </Jumbotron>
        )
    }
}

export default Hero;
