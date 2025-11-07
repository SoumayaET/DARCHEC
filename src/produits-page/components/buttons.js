import React from 'react';

export default function Buttons({ onClickHandler, value, title, type }) {
  return (
    <button
      onClick={(e) => onClickHandler(e, type)}
      value={value}
      className='btns'
    >
      {title}
    </button>
  );
}