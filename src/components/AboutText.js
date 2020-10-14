import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class AboutText extends React.Component {
    
    render() {
        return(
            <div id="about-text">
                <Container>
                    <Row className="align-items-center">
                        <Col md={5}>
                            <img src="https://zms.benstephan.com/wp-content/uploads/2020/08/ben-stephan.png" className="img-fluid" alt="Ben Stephan" />
                        </Col>
                        <Col md={{ span: 6, offset: 1 }}>
                            <h3><strong>Always striving</strong></h3>

                            <p>My goal as a creative professional is to always be improving. Whether that's within my job or in my skillset, I always am looking for new ways to expand in my passion</p>

                            <h3><strong>Preparation Meets Opportunity</strong></h3>

                            <p>Having experience in multiple disciplines, and 10+ years of experience in these creative fields, gives me a unique advantage in the web development and graphic design industry.</p>

                        </Col>
                    </Row>
                      
                </Container>
            </div>
           
        )
    }
}

export default AboutText;
