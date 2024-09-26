import React from "react";
import { quotes } from "../data/constants.js";
import QuoteCard from "./Cards/QuoteCard.jsx";

const Quote = () => {
  return (
    <div className='quote-container'>
      {quotes.map((quote) => (
        <QuoteCard quote={quote} />
      ))}
    </div>
  );
};

export default Quote;
