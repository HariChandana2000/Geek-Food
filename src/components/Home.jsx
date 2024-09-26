import React from "react";
import { Button } from "react-bootstrap";
const Home = () => {
  return (
    <div className='home-container'>
      <h1>
        Let us find your
        <strong className='block'>Forever Food.</strong>
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
        tenetur fuga ducimus numquam ea!
      </p>
      <div className='home-buttons'>
        <Button variant='danger' className='danger-btn'>
          Search Now
        </Button>
        <Button variant='light' className='light-btn'>
          Know more
        </Button>
      </div>
    </div>
  );
};

export default Home;
