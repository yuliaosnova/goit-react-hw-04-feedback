import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistic from './Statictic/Statistic';
import Section from './Section/Section';
import NotificationMessage from './NotificationMessage/NotificationMessage';
// import css from './App.module.css';

export default function App() {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const onGoodClick = () => {
		setGood(state => state + 1);
	}

	const onNeutralClick = () => {
		setNeutral(state => state + 1);
	}

	const onBadClick = () => {
		setBad(state => state + 1);
	}

	// const options = ['good', 'neutral', 'bad'];

//   onLeaveFeedback = option => {
//    this.setState(prevState => ({
//         [option]: prevState[option] + 1
//       }));
//   };


  //вычисляемые данные
  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
	const total = good + neutral + bad;
    const positive = good;
    const persentage = Math.round((positive / total) * 100);

    return persentage || 0;
  };

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']} onGoodClick={onGoodClick} onNeutralClick={onNeutralClick} onBadClick={onBadClick}></FeedbackOptions>

          {countTotalFeedback() > 0 ? (
            <Statistic
              state={[good, neutral, bad]}
              total={countTotalFeedback()}
              persentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <NotificationMessage message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
