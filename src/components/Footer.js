import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import resume from "../assets/images/William Broussard Resume.pdf"


function Footer() {

    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        William Broussard
                    </Col>
                    <Col className="p-0" md={3} sm={12}>
                    <a href={resume} target="_blank" rel="noopener noreferrer" class="btn btn-light">Check out my Resume</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;