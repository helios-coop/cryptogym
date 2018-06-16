import React from 'react';
import { BNav } from '../styles/styles.js';
import { Button } from 'reactstrap';

const BottomNav = props => {
  const redirectNext = () => {
    props.next();
  };
  const redirectPrev = () => {
    props.prev();
  };

  return (
    <BNav>
      <Button onClick={redirectPrev} color="danger" active>
        Back
      </Button>
      <Button onClick={redirectNext} color="success" active>
        Next
      </Button>
    </BNav>
  );
};

export default BottomNav;
