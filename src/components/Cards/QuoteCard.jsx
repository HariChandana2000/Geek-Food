import React from "react";
import { Card } from "react-bootstrap";

const QuoteCard = ({ quote }) => {
  return (
    <Card bg='dark' className='mt-4 mb-5 mx-2 p-4' style={{ width: "85%" }}>
      <Card.Body>
        <Card.Text
          style={{ color: "white", fontSize: "30px", fontWeight: "700" }}
        >
          {quote.quote}
        </Card.Text>
        <Card.Text
          style={{
            color: "rgba(156, 163, 175, 1)",
            fontSize: "1.125rem",
            lineHeight: "1.75rem",
          }}
        >
          {quote?.author}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default QuoteCard;
