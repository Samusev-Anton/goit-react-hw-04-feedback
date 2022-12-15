import React from 'react';
import { StatisticList, StatItem } from './Statistic.styled';

const Statistics = ({ good, neutral, bad, summary, positive }) => {
  // console.log(summary);
  return (
    <StatisticList>
      <StatItem>Good:{good}</StatItem>
      <StatItem>Neutral:{neutral}</StatItem>
      <StatItem>Bad:{bad}</StatItem>
      <StatItem>Sumarry:{summary}</StatItem>
      {good > bad ? (
        <StatItem>Positive Feedback: 100%</StatItem>
      ) : (
        <StatItem>Positive Feedback: {positive}%</StatItem>
      )}
    </StatisticList>
  );
};

export default Statistics;
