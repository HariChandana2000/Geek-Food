import React from "react";
import { reviews } from "../data/constants";
import { Col, Container, Row } from "react-bootstrap";
import ReviewCard from "./Cards/ReviewCard";

const Reviews = () => {
  return (
    <Container>
      <Row>
        {reviews.map((review) => (
          <Col sm={12} md={12} lg={4}>
            <ReviewCard review={review} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Reviews;
