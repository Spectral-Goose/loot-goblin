import React from 'react';

export const Item = ({ item, onCheckboxClick, onDeleteClick }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={!!item.isChecked}
        onClick={() => onCheckboxClick(item)}
        readOnly
      />
      <span>{item.text}</span>
      <button onClick={ () => onDeleteClick(item) }>&times;</button>
    </li>
  );
};