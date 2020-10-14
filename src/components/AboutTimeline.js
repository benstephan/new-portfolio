import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class AboutTimeline extends React.Component {
    
    render() {
        return(
            <div id="about-timeline">
                <Container>
                    <Row>
                        <Col md={{span:8, offset:2}}>
                            <h2>Experience</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{span:8, offset:2}}>
                            <ul className="timeline">
                                <li className="timeline-item">
                                    <div className="timeline-info">
                                        <span>July 2014 - Present</span>
                                    </div>
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <h3 className="timeline-title">beMarketing - Web Developer Team Lead</h3>
                                        <ul>
                                            <li>Increased customer satisfaction by resolving web design, development, and hosting issues.</li>
                                            <li>Led the web development team in delivery of all web projects, resulting in increased ROI.</li>
                                            <li>Determined coding requirements for site creation, including e-commerce capability, security and specialized scripts.</li>
                                            <li>Multi-tasked across multiple focuses to generate project results and meet deadlines and organizational expectations.</li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="timeline-item">
                                    <div className="timeline-info">
                                        <span>June 2013 - July 2014</span>
                                    </div>
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <h3 className="timeline-title">iQnection - Website Project Coordinator</h3>
                                        <ul>
                                            <li>Closely collaborated with project members to identify and quickly address problems.</li>
                                            <li>Gathered requirements, defined scopes, allocated resources and established schedules meeting or exceeding project demands.</li>
                                            <li>Analyzed projects to determine resource requirements and procured necessary equipment and software.</li>
                                            <li>Enforced alignment of project strategy with business objectives and made modifications to promote efficient project completion.</li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="timeline-item">
                                    <div className="timeline-info">
                                        <span>March 2007 - June 2013</span>
                                    </div>
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-content">
                                        <h3 className="timeline-title">DaVinci Graphics - Graphic Design / Production Artist</h3>
                                        <ul>
                                            <li>Conceptualized and developed graphics products for print, web and media projects using multiple software disciplines.</li>
                                            <li>Developed collateral such as display, marketing and packaging materials to support product branding strategies.</li>
                                            <li>Prepared proof artwork using Preps, Fiery, Creo, and hand-drawn sketches.</li>
                                            <li>Helped to develop brands with consistent design.</li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default AboutTimeline;
