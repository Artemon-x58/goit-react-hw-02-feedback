import React from 'react';
// import PropTypes from 'prop-types';
import { Bad, Good, Neutral, Title, Wrapper } from './Feedback.styled';

export const Feedback = ({ add }) => {
  return (
    <Wrapper>
      <Title>Please leave feedback</Title>
      <Good onClick={() => add('good')}>Good</Good>
      <Neutral onClick={() => add('neutral')}>Neutral</Neutral>
      <Bad onClick={() => add('bad')}>Bad</Bad>
    </Wrapper>
  );
};
