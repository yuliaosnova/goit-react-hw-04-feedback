import PropTypes from 'prop-types';
import React from 'react';
import css from './Statistic.module.css';

const Statistic = ({ state, total, persentage }) => {
//   const { good, neutral, bad } = state;

  return (
    <>
      <h5 className={css.title}>Statistic</h5>
      <ul className={css.list}>
        <li className={css.item}>
          <span className="label">Good: </span>
          <span className="amount">{state[0]}</span>
        </li>
        <li className={css.item}>
          <span className="label">Neutral: </span>
          <span className="amount">{state[1]}</span>
        </li>
        <li className={css.item}>
          <span className="label">Bad: </span>
          <span className="amount">{state[2]}</span>
        </li>
        <li className={css.item}>
          <span className="label">Total: </span>
          <span className="amount">{total}</span>
        </li>
        <li className={css.item}>
          <span className="label">Positive feedback: </span>
          <span className="amount">{persentage}%</span>
        </li>
      </ul>
    </>
  );
};


Statistic.propTypes = {
	state: PropTypes.array.isRequired,
	total: PropTypes.number.isRequired,
	persentage: PropTypes.number.isRequired,
 };

export default Statistic;
