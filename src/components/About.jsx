import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import PicOne from "../assets/about-pic-1.avif";

const About = () => {
  return (
    <Container className='p-5 my-3' fluid>
      <Row>
        <Col sm={12} md={12} lg={6} className='px-0'>
          <Image src={PicOne} className='pt-5 custom-about-img' fluid />
        </Col>
        <Col sm={12} md={12} lg={6} className='px-0'>
          <div className='about-desc'>
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
              debitis.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              molestiae! Quidem est esse numquam odio deleniti, beatae, magni
              dolores provident quaerat totam eos, aperiam architecto eius quis
              quibusdam fugiat dicta.
            </p>
            <button>Get in Touch</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
