import { useState } from 'react';
import Controls from './Controls/Controls';
import Statistics from './Statistic/Statistics';
import Section from './Section/Section';
import SectionStat from './Section/SectionStat';

const Counter = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = event => {
    // console.dir(event.target.id)
    const { id } = event.target;
    switch (id) {
      case '1':
        setGood(prevGood => prevGood + 1);
        break;
      case '2':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case '3':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        console.log('fignia');
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / bad) * 100);
  };

  return (
    <>
      <Section title="Please leave feedBack">
        <Controls onIncrement={handleIncrement} />
      </Section>
      <SectionStat title="Statistic" disable={countTotalFeedback()}>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          summary={countTotalFeedback()}
          positive={countPositiveFeedbackPercentage()}
        />
      </SectionStat>
    </>
  );
};

export default Counter;
