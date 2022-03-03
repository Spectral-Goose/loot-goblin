import React from 'react';

export const Item = ({ item, onDeleteClick }) => {
  return (
    <tr style={{color: item.color}}>
      <td>{item.text}</td>
      <td>{item.location}</td>
      <td>{item.quantity}</td>
      <td>{item.weight}</td>
      <td>{item.quantity*item.weight}</td>
      <td><input id="sum" type="checkbox"></input></td>
      <td>{item.price}</td>
      <td>{item.quantity*item.price}</td>
      <td id="delete"><button onClick={ () => onDeleteClick(item) }>&times;</button></td>
    </tr>
  );
};