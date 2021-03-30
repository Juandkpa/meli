import React from 'react';
import './Chevron.scss';

const Chevron = () => {
  return (
    <div className="chevron">
      <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
        <path fill="none" stroke="#666" d="M1 0l4 4-4 4"></path>
      </svg>
    </div>
  );
};

export { Chevron as default };
