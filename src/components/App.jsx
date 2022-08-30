import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import { GlobalStyle } from "./GlobalStyle";
import { Box } from "./Box";


export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, bad, neutral } = feedback;

  const handleFeedbackClick = type => {
    setFeedback(state => ({
      ...state, [type]: state[type] + 1,
    }));
  };
    
  const countTotalFeedback = () => {
    return Object.values(feedback).reduce((total, el) => total + el, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();

    if (good !== 0) {
      const result = ((good / total) * 100);
      return Math.round(result);
    } else {
      return 0;
    }
  };
    
  const keys = Object.keys(feedback);

  return (
    <Box as="main" backgroundColor="bgc">
      <h1 style={{ display: "none" }}>Feedback</h1>
      <FeedbackOptions
        options={keys}
        onLeaveFeedback={handleFeedbackClick} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback}
        positivePercentage={countPositiveFeedbackPercentage} />
      <GlobalStyle />
    </Box>
  );
};