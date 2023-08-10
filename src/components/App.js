import React from 'react';
import { Feedback } from './FeedBack/Feedback';
import { Statistics } from './Statistics/Statistics';
import { NotificationMessage } from 'components/NotificationMessage/NotificationMesage';
import { Title } from './Statistics/Statistics.styled';
export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const valuesArray = Object.values(this.state);
    const totalFeedback = valuesArray.reduce(
      (acc, currentValue) => acc + currentValue,
      0
    );
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () =>
    Number(((this.state.good / this.countTotalFeedback()) * 100).toFixed(0));

  handleAddScore = type => {
    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  };

  createOptionsArray = () => {
    const arr = Object.keys(this.state);
    return arr;
  };

  render() {
    return (
      <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '300px' }}>
        <Feedback
          onLeaveFeedback={this.handleAddScore}
          options={this.createOptionsArray()}
        />
        <Title>Statistics</Title>
        {this.countTotalFeedback() < 1 ? (
          <NotificationMessage message="There is no feedback" />
        ) : (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            percentage={this.countPositiveFeedbackPercentage()}
          />
        )}
      </div>
    );
  }
}
