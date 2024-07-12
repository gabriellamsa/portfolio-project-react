import React from "react";
import PropTypes from 'prop-types';

const BucketCard = ({ list, removeItem}) => {
  return (
    <div className='card mb-4'>
      <div className='card-body'>
        <h4 className='card-title'>{list.name}</h4>
        <button
          className='btn btn-danger'
          onClick={() => removeItem(list.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

BucketCard.prototype = {
  list: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default BucketCard;