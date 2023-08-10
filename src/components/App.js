import React from 'react';
import { Feedback } from './FeedBack/Feedback';
import { Statistics } from './Statistics/Statistics';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    Number(((this.state.good / this.countTotalFeedback()) * 100).toFixed(0));

  handleAddScore = type => {
    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  };

  render() {
    return (
      <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '300px' }}>
        <Feedback add={this.handleAddScore} />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          percentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}
