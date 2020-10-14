import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Box from './Box.js';

class Featured extends React.Component {
    state = {
        characters: []
      }
      componentDidMount() {
        fetch('https://zms.benstephan.com/index.php/wp-json/wp/v2/posts')
        .then(res => res.json())
        .then((data) => {
          this.setState({ characters: data })
      
        })
        .catch(console.log)
      }
      
    render() {
        return(
            <div id="featured">
                <Container>
                    <Row>
                        <Col md={12}>
                            <h3 className="section-title">Featured Work</h3>
                        </Col>
                    </Row>
                </Container>
                <Container fluid>
                    <Box characters={this.state.characters} />
                </Container>
            </div>
        )
    }
}

export default Featured;
