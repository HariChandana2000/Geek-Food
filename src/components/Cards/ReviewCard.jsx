import React from "react";
import { Card, Image } from "react-bootstrap";

const ReviewCard = ({ review }) => {
  return (
    <div className='my-3'>
      <Card
        className='p-4'
        bg='light'
        border='light'
        style={{
          boxShadow: "0 0 1px rgba(172, 172, 173, 1)",
          borderRadius: "15px",
        }}
      >
        {review.comment}
      </Card>
      <div className='review-details'>
        <Image
          src={review.image}
          alt={review.name}
          style={{ width: "3rem", height: "3rem" }}
          roundedCircle
          fluid
        />
        <div className='reviewer-details'>
          <p className='reviewer-name'>{review.name}</p>
          <p>{review.role}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
