import React from 'react';
import {
  ItemBad,
  ItemGood,
  ItemNeutral,
  List,
  Percentage,
  Title,
  Total,
  Wrapper,
} from './Statistics.styled';
import { NotificationMessage } from 'components/NotificationMessage/NotificationMesage';

export const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <Wrapper>
      <Title>Statistics</Title>
      {good === 0 && neutral === 0 && bad === 0 ? (
        <NotificationMessage />
      ) : (
        <>
          <List>
            <ItemGood>Good: {good}</ItemGood>
            <ItemNeutral>Neutral: {neutral}</ItemNeutral>
            <ItemBad>Bad: {bad}</ItemBad>
          </List>
          <Total>Total: {total}</Total>
          <Percentage>Positive feedback: {percentage}%</Percentage>
        </>
      )}
    </Wrapper>
  );
};
