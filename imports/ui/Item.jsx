import React from 'react';

export const Item = ({ item, onDeleteClick }) => {
  return (
    <tr>
      <div style={{color: item.color}}>
        <td id="name">{item.text}</td>
        <td id="other">{item.location}</td>
        <td id="other">{item.quantity}</td>
        <td id="other">{item.weight}</td>
        <td id="other">{item.price}</td>
        <td id="delete"><button onClick={ () => onDeleteClick(item) }>&times;</button></td>
        <hr></hr>
      </div>
    </tr>
  );
};