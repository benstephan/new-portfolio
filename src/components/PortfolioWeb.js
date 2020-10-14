import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import $ from 'jquery';
$( document ).ready(function() {
    $('.web-mobile').addClass('true');
    $( "#web-switch input" ).on( "click", function() {
        
        $('.web-desktop').toggleClass('true');
        $('.web-mobile').toggleClass('true');
    });
});

class PortfolioWeb extends React.Component {
    
    render() {
        return(
            <>
            <div id="web-toggle">
                <h3><strong>Web Development</strong></h3>
                <label id="web-switch" className="toggle-label">
                    <input type="checkbox" />
                    <span className="back">
                    <span className="toggle"></span>
                    <span className="tech-label label on">Desktop</span>
                    <span className="design-label label off">Mobile</span>
                    </span>
                </label>
                <div className="clearfix"></div>
            <Carousel indicators={false}>
            <Carousel.Item>
                <div className="web-desktop">
                    <div className="web-desktop-holder">
                       <img src="https://zms.benstephan.com/wp-content/uploads/2020/08/bemarketing-web-desktop-scaled.jpg" alt="beMarketing Desktop Site" class="img-fluid" width="100%" />
                   </div>
                   <img src="https://zms.benstephan.com/wp-content/uploads/2020/08/laptop.png" alt="beMarketing Desktop" className="img-fluid background" />
                   
                </div>
                <div className="web-mobile">
                <div className="web-mobile-holder">
                       <img src="https://zms.benstephan.com/wp-content/uploads/2020/08/bemarketing-web-mobile.jpg" alt="beMarketing Desktop Site" class="img-fluid" width="100%" />
                   </div>
                   <img src="https://zms.benstephan.com/wp-content/uploads/2020/08/phone.png" alt="beMarketing Desktop" className="img-fluid background" />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="web-desktop">
                    <div className="web-desktop-holder">
                       <img src="https://zms.benstephan.com/wp-content/uploads/2020/08/bemarketing-chickies-scaled.jpg" alt="beMarketing Desktop Site" class="img-fluid" width="100%" />
                   </div>
                   <img src="https://zms.benstephan.com/wp-content/uploads/2020/08/laptop.png" alt="beMarketing Desktop" className="img-fluid background" />
                   
                </div>
                <div className="web-mobile">
                <div className="web-mobile-holder">
                       <img src="https://zms.benstephan.com/wp-content/uploads/2020/08/bemarketing-chickies-mobile.jpg" alt="beMarketing Desktop Site" class="img-fluid" width="100%" />
                   </div>
                   <img src="https://zms.benstephan.com/wp-content/uploads/2020/08/phone.png" alt="beMarketing Desktop" className="img-fluid background" />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="web-desktop">
                    <div className="web-desktop-holder">
                       <img src="https://zms.benstephan.com/wp-content/uploads/2020/08/bemarketing-headstrong.jpg" alt="beMarketing Desktop Site" class="img-fluid" width="100%" />
                   </div>
                   <img src="https://zms.benstephan.com/wp-content/uploads/2020/08/laptop.png" alt="beMarketing Desktop" className="img-fluid background" />
                   
                </div>
                <div className="web-mobile">
                <div className="web-mobile-holder">
                       <img src="https://zms.benstephan.com/wp-content/uploads/2020/08/bemarketing-headstrong-mobile.jpg" alt="beMarketing Desktop Site" class="img-fluid" width="100%" />
                   </div>
                   <img src="https://zms.benstephan.com/wp-content/uploads/2020/08/phone.png" alt="beMarketing Desktop" className="img-fluid background" />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="web-desktop">
                    <div className="web-desktop-holder">
                       <img src="https://zms.benstephan.com/wp-content/uploads/2020/08/bemarketing-dreifuss.jpg" alt="beMarketing Desktop Site" class="img-fluid" width="100%" />
                   </div>
                   <img src="https://zms.benstephan.com/wp-content/uploads/2020/08/laptop.png" alt="beMarketing Desktop" className="img-fluid background" />
                   
                </div>
                <div className="web-mobile">
                <div className="web-mobile-holder">
                       <img src="https://zms.benstephan.com/wp-content/uploads/2020/08/bemarketing-dreifuss-mobile.jpg" alt="beMarketing Desktop Site" class="img-fluid" width="100%" />
                   </div>
                   <img src="https://zms.benstephan.com/wp-content/uploads/2020/08/phone.png" alt="beMarketing Desktop" className="img-fluid background" />
                </div>
            </Carousel.Item>
            </Carousel>
            </div>
        
           <div id="web-list">
               <Container>
                   <Row>
                       <Col md={12}>
                           <h3><strong>Completed Website Projects</strong></h3>
                       </Col>
                   </Row>
                    <Row>
                        <Col md={12}>
                            <ul>
                                <li><a href="https://www.accentelectricpa.com/" target="_blank">Accent Electric</a></li>
                                <li><a href="https://amscardiology.com/" target="_blank">AMS Cardiology</a></li>
                                <li><a href="https://arepggiobyob.com/" target="_blank">Arpeggio</a></li>
                                <li><a href="https://arrowpool.com/" target="_blank">Arrow Pool</a></li>
                                <li><a href="https://bachmansroofing.com/" target="_blank">Bachman&apos;s Roofing</a></li>
                                <li><a href="https://bartlettblindsandshutters.com/" target="_blank">Bartlett Blinds</a></li>
                                <li><a href="https://cciconsulting.com/" target="_blank">CCI Consulting</a></li>
                                <li><a href="https://cdmattorneys.com/" target="_blank">CDM Law</a></li>
                                <li><a href="https://cgmbuildingproducts.com/" target="_blank">CGM Building Products</a></li>
                                <li><a href="https://compassinternational.net/" target="_blank">Compass International</a></li>
                                <li><a href="http://corestrengthstrategies.com/" target="_blank">Corestrength Strategies</a></li>
                                <li><a href="http://costlesspainting.com/" target="_blank">Costless Painting</a></li>
                                <li><a href="http://fedora-media.com/" target="_blank">Fedora Media</a></li>
                                <li><a href="https://foshplumbing.com/" target="_blank">Fosh Plumbing</a></li>
                                <li><a href="https://freshsmiles.org/" target="_blank">Fresh Smiles</a></li>
                                <li><a href="https://glicksexteriors.com/" target="_blank">Glick&apos;s Exteriors</a></li>
                                <li><a href="https://thegreatamericanpub.com/" target="_blank">Great American Pub</a></li>
                                <li><a href="https://gunningco.com/" target="_blank">Gunning &amp; Company</a></li>
                                <li><a href="https://infomc.com/" target="_blank">InfoMC</a></li>
                                <li><a href="https://jdfedele.com/" target="_blank">J.D. Fedele</a></li>
                                <li><a href="https://labruscianoexteriorsllc.com/" target="_blank">LaBrusciano Exteriors</a></li>
                                <li><a href="https://lennysitaliandeli.com/" target="_blank">Lenny&apos;s Deli</a></li>
                                <li><a href="https://letsgoracingparx.com/" target="_blank">Let&apos;s Go Racing Parx</a></li>
                                <li><a href="https://med-texservices.com/" target="_blank">Med-Tex Services</a></li>
                                <li><a href="https://naturesedgecoffee.com/" target="_blank">Nature&apos;s Edge Coffee</a></li>
                                <li><a href="https://ncetest.com/" target="_blank">North Central Electric</a></li>
                                <li><a href="https://omgpretzels.com/" target="_blank">OMG! Pretzels</a></li>
                                <li><a href="https://opentiersystems.com/" target="_blank">Open Tier Systems</a></li>
                                <li><a href="https://opticalinventorysolutions.com/" target="_blank">Optical Inventory</a></li>
                                <li><a href="https://amrev.org/" target="_blank">PSSR</a></li>
                                <li><a href="https://stengerlandscaping.com/" target="_blank">Stenger Landscaping</a></li>
                                <li><a href="https://tavernatvalleyforge.com/" target="_blank">Tavern at Valley Forge</a></li>
                                <li><a href="https://triose.com/" target="_blank">Triose</a></li>
                            </ul>
                        </Col>
                    </Row>
               </Container>
           </div></>
           
        )
    }
}

export default PortfolioWeb;
