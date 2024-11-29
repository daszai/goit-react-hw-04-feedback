import React from 'react';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <form>
      <button onClick={onLeaveFeedback[0]}>good</button>
      <button onClick={onLeaveFeedback[1]}>neutral</button>
      <button onClick={onLeaveFeedback[2]}>bad</button>
    </form>
  );
};

export default FeedbackOptions;
