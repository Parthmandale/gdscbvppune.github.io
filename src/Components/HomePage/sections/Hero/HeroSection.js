import React from 'react';
import './HeroSection.css'; 
import '../../HomeLeftSection.css';
import teamImage from '../../../../Assets/Images/hero-img.png';
import { Container,Row,Col,Button,Image} from 'react-bootstrap';

function Home(){
    return(
        <section className="home-section">
            <Container>
                <Row>
                    <Col lg={6} md={12} sm={12} className="text-left" data-aos="fade-right" data-aos-delay="100">
                        <h1 className="home-header">Hello, <font className="there-style">There!</font></h1>
                        <h2 className="home-subheader">We are DSC BVP Pune</h2>
                        <p className="home-para">Developer Students Club BVP is a community of budding 
                        developers, programmers and designers, where the 
                        students follow and learn from fellow developers.</p>
                        
                        <Button className="cta-button">Hack BVP</Button>
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                        <Image className="img-fluid hero-image" src={teamImage} data-aos="fade-left" data-aos-delay="100"></Image>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Home;