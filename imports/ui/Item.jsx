import React from 'react';

export const Item = ({ item, onDeleteClick }) => {
  return (
    <li>
      <span>{item.text}</span>
      <button onClick={ () => onDeleteClick(item) }>&times;</button>
    </li>
  );
};