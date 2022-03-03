import React, { useState, Fragment } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { ItemsCollection } from '/imports/api/ItemsCollection';
import { Item } from './Item';
import { ItemForm } from './ItemForm';
import { LoginForm } from './LoginForm';

const deleteItem = ({ _id }) => ItemsCollection.remove(_id);

export const App = () => {
  const user = useTracker(() => Meteor.user());

  // this is where Meteor pulls the items from to display. If I want to change what is show, here is where to do it.
  const items = useTracker(() => ItemsCollection.find({}, { sort: { createdAt: 0 } }).fetch());
  
  const logout = () => Meteor.logout();

/* 
    ADD CHECKBOX FOR IF WEIGHT WILL BE COUNTED OR NOT
    ADD FUNCTIONALITY TO SUM WEIGHT
    ADD ABILITY TO SORT ITEMS BY VARIOUS FACTORS
    ADD DRAG AND DROP SORTING

    DEPLOY TO HEROKU
*/

  return (
    <div className="app">
      <header>
        <div className="app-bar">
          <div className="app-header">
            <h1>Loot Goblin</h1>
          </div>
        </div>
      </header>

      <div className="main">
        {user ? (
          <Fragment>
            <div className="user" onClick={logout}>
              {user.username} 🚪
            </div>
          <table>
            <ul className="items">
            <tr>
              <th id="hName">Item</th>
              <th id="hOther">Location</th>
              <th id="hOther">Quantity</th>
              <th id="hOther">Weight Per Item</th>
              <th id="hOther">Total Weight</th>
              <th id="hOther">Price per Item</th>
              <th id="hOther">Total Price</th>
              <th id="hDelete">Remove Item</th>
            </tr>
              <hr></hr>
              { items.map(item => (
                <Item
                  key={ item._id }
                  item={ item }
                  onDeleteClick={deleteItem}
                />
              ))}
            </ul>
            </table>
            <ItemForm/>
          </Fragment>
        ) : (
          <LoginForm />
        )}
      </div>
    </div>
  );
};