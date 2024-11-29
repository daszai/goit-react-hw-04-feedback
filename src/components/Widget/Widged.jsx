import React from 'react';
import { useState } from 'react';
import Statistics from '../Statistics/Statistics ';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions ';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';
const Widged = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const clickg = e => {
    e.preventDefault();
    let temp = good;
    temp++;
    setGood(temp);
  };
  const clickn = e => {
    e.preventDefault();
    let temp = neutral;
    temp++;
    setNeutral(temp);
  };

  const clickb = e => {
    e.preventDefault();
    let temp = bad;
    temp++;
    setBad(temp);
  };
  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() === 0) {
      return 0;
    }
    return (good * 100) / countTotalFeedback();
  };

  return (
    <>
      <Section title="please leave feedback">
        <FeedbackOptions
          options={''}
          onLeaveFeedback={[clickg, clickn, clickb]}
        />
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};

export default Widged;
