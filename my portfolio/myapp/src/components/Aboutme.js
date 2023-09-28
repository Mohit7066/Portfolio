import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';



function Aboutme() {
  return (
    <section className='about' id="aboutme">
      <Container>
        <Row>
          <Col md={6}>
            <div>
              
            </div>
            <img
              src="your-image-url.jpg"
              alt="Your Image"
              className="img-fluid"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Col>
          <Col md={6}>
            <div style={{ color: 'white' }}>
              <h2>I'm Mohit Suman </h2>
              <p>A dedicated student currently working towards my bachelor's degree.
              My journey into the world of videography, video editing, and photography 
              began two years ago as a personal hobby. With consistent practice, I have developed proficiency in these
                skills and am confident in my abilities. I look forward to the opportunity
                to collaborate with you on creating exceptional visual content.
                </p>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Aboutme
