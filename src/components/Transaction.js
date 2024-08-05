import React from "react";
import PropTypes from 'prop-types';

function Transaction({ date, description, category, amount }) {
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
}

Transaction.propTypes = {
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

Transaction.defaultProps = {
  date: '',
  description: '',
  category: '',
  amount: 0,
};

export default Transaction;
