import React from 'react';
import contactImage from '../../../../Assets/Images/teamImage.png';
import './ContactSection.css';
import '../../HomeRightSection.css';

import { Container,Row,Col,Button,Image} from 'react-bootstrap';

function ContactSection() {
    return (
        // <section className="global-section contact-section">
        // <Container>
        //      <div className="contact-right-section ">
        //         <div className="row ">

        //             <div className="col-12">
        //                 <h1 className="right-section-heading">Contact <span style={{ color: "#b3b300" }}>Us</span></h1>
        //             </div>

        //             <div className="col-md-5 order-md-1 text-aligning">
        //                 <img className="right-section-image" src={teamImage} alt="TEAM IMAGE"></img>
        //             </div>

        //             <div className="col-md-5 offset-md-2 order-md-12 text-aligning">

        //                 <p className="right-section-description text-aligning">Feel free to reach out to us using any of the social
        //                 media networks.
        //                 </p>
                        // <div className="row contact-icons removed-padding text-align">

                        //     <div className="col-2 offset-6">
                        //         <svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        //             <path d="M7.5 12H10L11 8H7.5V6C7.5 4.97 7.5 4 9.5 4H11V0.64C10.674 0.597 9.443 0.5 8.143 0.5C5.428 0.5 3.5 2.157 3.5 5.2V8H0.5V12H3.5V20.5H7.5V12Z" fill="black" />
                        //         </svg>
                        //     </div>
                        //     <div className="col-2">
                        //         <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        //             <path d="M10 0.924316C12.717 0.924316 13.056 0.934316 14.122 0.984316C15.187 1.03432 15.912 1.20132 16.55 1.44932C17.21 1.70332 17.766 2.04732 18.322 2.60232C18.8305 3.10221 19.224 3.70691 19.475 4.37432C19.722 5.01132 19.89 5.73732 19.94 6.80232C19.987 7.86832 20 8.20732 20 10.9243C20 13.6413 19.99 13.9803 19.94 15.0463C19.89 16.1113 19.722 16.8363 19.475 17.4743C19.2247 18.1421 18.8311 18.7469 18.322 19.2463C17.822 19.7546 17.2173 20.1481 16.55 20.3993C15.913 20.6463 15.187 20.8143 14.122 20.8643C13.056 20.9113 12.717 20.9243 10 20.9243C7.283 20.9243 6.944 20.9143 5.878 20.8643C4.813 20.8143 4.088 20.6463 3.45 20.3993C2.78233 20.1488 2.17753 19.7553 1.678 19.2463C1.16941 18.7465 0.775931 18.1418 0.525 17.4743C0.277 16.8373 0.11 16.1113 0.0599999 15.0463C0.0129999 13.9803 0 13.6413 0 10.9243C0 8.20732 0.00999994 7.86832 0.0599999 6.80232C0.11 5.73632 0.277 5.01232 0.525 4.37432C0.775236 3.7065 1.1688 3.10164 1.678 2.60232C2.17767 2.09355 2.78243 1.70005 3.45 1.44932C4.088 1.20132 4.812 1.03432 5.878 0.984316C6.944 0.937316 7.283 0.924316 10 0.924316ZM10 5.92432C8.67392 5.92432 7.40215 6.4511 6.46447 7.38878C5.52678 8.32646 5 9.59823 5 10.9243C5 12.2504 5.52678 13.5222 6.46447 14.4599C7.40215 15.3975 8.67392 15.9243 10 15.9243C11.3261 15.9243 12.5979 15.3975 13.5355 14.4599C14.4732 13.5222 15 12.2504 15 10.9243C15 9.59823 14.4732 8.32646 13.5355 7.38878C12.5979 6.4511 11.3261 5.92432 10 5.92432ZM16.5 5.67432C16.5 5.3428 16.3683 5.02485 16.1339 4.79043C15.8995 4.55601 15.5815 4.42432 15.25 4.42432C14.9185 4.42432 14.6005 4.55601 14.3661 4.79043C14.1317 5.02485 14 5.3428 14 5.67432C14 6.00584 14.1317 6.32378 14.3661 6.5582C14.6005 6.79262 14.9185 6.92432 15.25 6.92432C15.5815 6.92432 15.8995 6.79262 16.1339 6.5582C16.3683 6.32378 16.5 6.00584 16.5 5.67432ZM10 7.92432C10.7956 7.92432 11.5587 8.24039 12.1213 8.803C12.6839 9.3656 13 10.1287 13 10.9243C13 11.72 12.6839 12.483 12.1213 13.0456C11.5587 13.6082 10.7956 13.9243 10 13.9243C9.20435 13.9243 8.44129 13.6082 7.87868 13.0456C7.31607 12.483 7 11.72 7 10.9243C7 10.1287 7.31607 9.3656 7.87868 8.803C8.44129 8.24039 9.20435 7.92432 10 7.92432Z" fill="black" />
                        //         </svg>
                        //     </div>
                        //     <div className="col-2 removed-padding">
                        //         <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        //             <path d="M4.94043 2.00002C4.94017 2.53046 4.7292 3.03906 4.35394 3.41394C3.97868 3.78883 3.46986 3.99929 2.93943 3.99902C2.409 3.99876 1.90039 3.78779 1.52551 3.41253C1.15062 3.03727 0.940165 2.52846 0.94043 1.99802C0.940695 1.46759 1.15166 0.958988 1.52692 0.584103C1.90218 0.209218 2.411 -0.00124153 2.94143 -0.000976312C3.47186 -0.000711096 3.98047 0.210257 4.35535 0.585517C4.73024 0.960777 4.9407 1.46959 4.94043 2.00002ZM5.00043 5.48002H1.00043V18H5.00043V5.48002ZM11.3204 5.48002H7.34043V18H11.2804V11.43C11.2804 7.77002 16.0504 7.43002 16.0504 11.43V18H20.0004V10.07C20.0004 3.90002 12.9404 4.13002 11.2804 7.16002L11.3204 5.48002Z" fill="black" />
                        //         </svg>


                        //     </div>
                        // </div>


        //             </div>




        //         </div>
        //     </div>
        // </Container>
        // </section>
        <section className="contact-section">
    



                <Container className="re-order">
                                <Row>
                                    
                                    <Col lg={6} md={12} sm={12} className="second">
                                    <h1 className="mobile-tab-header"><h1 className="Contact-header section-heading">Contact <span style={{ color: "#F9BB08" }}>Us</span></h1></h1>
                                        <Image className="img-fluid hero-image" src={contactImage}></Image>
                                    </Col>
                                    <Col lg={6} md={12} sm={12} className="first">
                                        <h1 className="desktop-header"><h1 className="Contact-header section-heading">Contact <span style={{ color: "#F9BB08" }}>Us</span></h1></h1>
                                        <p className="Contact-para">Feel free to reach out to us using any of <br></br>the social
                                        media networks.
                                        </p>

                                        <div className="social mt-4">
                                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                                            <a href="#"><i class="fab fa-instagram"></i></a>
                                            <a href="#"><i class="fab fa-linkedin"></i></a>
                                        </div>
                                        {/* <Row className="mt-5">

                                            <Col>
                                            <i class="fab fa-facebook-f"></i>
                                            </Col>
                                            <Col>
                                            <i class="fab fa-instagram"></i>
                                            </Col>
                                            <Col>
                                                <i class="fab fa-linkedin"></i>
                                            </Col>
                                        </Row> */}
                                    </Col>
                                </Row>
            </Container>
    </section>
    )
}


export default ContactSection



// import React from 'react';
// import contactImage from '../../../../Assets/Images/contactImage.png';
// import './ContactSection.css';
// import {Container} from 'react-bootstrap';

// function ContactSection() {
//     return (
//         <Container>
//              <div className="contact-right-section ">
//                     <div className="row ">

//                         <div className="col-12 ">
//                             <h1 className="right-section-heading">Contact <span style={{ color: "#b3b300" }}>Us</span></h1>
//                         </div>

//                         <div className="col-md-5   order-md-1 text-aligning">
//                             <img className="right-section-image" src={contactImage} alt="TEAM IMAGE"></img>
//                         </div>

//                         <div className="col-md-5 offset-md-2  order-md-12 text-aligning">

//                             <p className="right-section-description text-aligning">Feel free to reach out to us using any of the social
//                             media networks.
//                             </p>
//                             <div className="row contact-icons removed-padding text-align">

//                                 <div className="col-2 offset-6">
//                                 <i class="fab fa-facebook-f"></i>
//                                 </div>
//                                 <div className="col-2">
//                                 <i class="fab fa-instagram"></i>
//                                 </div>
//                                 <div className="col-2 removed-padding">
//                                 <i class="fab fa-linkedin"></i>


//                                 </div>
//                             </div>


//                         </div>




//                     </div>
//                 </div>
//         </Container>
       
//     )
// }


// export default ContactSection