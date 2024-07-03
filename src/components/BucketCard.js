import React from "react";

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

export default BucketCard;