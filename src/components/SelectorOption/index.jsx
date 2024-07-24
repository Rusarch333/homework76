import React from 'react';
import PropTypes from 'prop-types';
import styles from './SelectorOption.module.scss';

const SelectorOption = ({nat}) => {
  return (
    <option value={nat}>
      {nat}
    </option>
  );
};

SelectorOption.propTypes = {
  nat: PropTypes.string.isRequired
};


export default SelectorOption;
