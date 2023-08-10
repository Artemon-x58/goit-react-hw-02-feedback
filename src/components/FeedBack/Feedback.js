import React from 'react';
import PropTypes from 'prop-types';
import { Btn, List, Title, Wrapper } from './Feedback.styled';

export const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <Wrapper>
      <Title>Please leave feedback</Title>
      <List>
        {options.map((option, index) => (
          <Btn key={index} onClick={() => onLeaveFeedback(option)}>
            {option}
          </Btn>
        ))}
      </List>
    </Wrapper>
  );
};

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
