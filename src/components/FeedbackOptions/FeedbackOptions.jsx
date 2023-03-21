import PropTypes from 'prop-types';
import React from 'react';
import css from './FeedbackOptions.module.css';
import { ReactComponent as AddGoodIcon } from '../../icons/good.svg';
import { ReactComponent as AddNeutralIcon } from '../../icons/neutral.svg';
import { ReactComponent as AddBadIcon } from '../../icons/bad.svg';

const FeedbackOptions = ({
  options,
  onGoodClick,
  onNeutralClick,
  onBadClick,
}) => {
  const getIcon = option => {
    if (option === 'good')
      return <AddGoodIcon width={20} height={20} fill="#715d98" />;
    if (option === 'neutral')
      return <AddNeutralIcon width={20} height={20} fill="#715d98" />;
    if (option === 'bad')
      return <AddBadIcon width={20} height={20} fill="#715d98" />;
  };

  const chooseClickfunc = option => {
    if (option === 'good') return onGoodClick(option);
    if (option === 'neutral') return onNeutralClick(option);
    if (option === 'bad') return onBadClick(option);
  };

  return (
    <ul className={css.list}>
      {options.map(option => (
        <li
          key={option}
          className={css.item}
          onClick={() => chooseClickfunc(option)}
        >
          <button className={css.btn}>
            {option} {getIcon(option)}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onClick: PropTypes.func,
};

export default FeedbackOptions;
