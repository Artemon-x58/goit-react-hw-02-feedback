import React, { useState } from 'react';
import { Feedback } from './FeedBack/Feedback';
import { Statistics } from './Statistics/Statistics';
import { NotificationMessage } from 'components/NotificationMessage/NotificationMesage';
import { Title } from './Statistics/Statistics.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Math.round((good / countTotalFeedback()) * 100);

  const handleAddScore = type => {
    const updateState = {
      good: setGood,
      neutral: setNeutral,
      bad: setBad,
    };

    if (updateState[type]) {
      updateState[type](prevValue => prevValue + 1);
    }
  };

  const createOptionsArray = () => ['good', 'neutral', 'bad'];

  return (
    <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '300px' }}>
      <Feedback
        onLeaveFeedback={handleAddScore}
        options={createOptionsArray()}
      />
      <Title>Statistics</Title>
      {countTotalFeedback() < 1 ? (
        <NotificationMessage message="There is no feedback" />
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          percentage={countPositiveFeedbackPercentage()}
        />
      )}
    </div>
  );
};
