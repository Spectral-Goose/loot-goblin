import React, { useState, Fragment } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { ItemsCollection } from '/imports/api/ItemsCollection';
import { Item } from './Item';
import { ItemForm } from './ItemForm';
import { LoginForm } from './LoginForm';

const deleteItem = ({ _id }) => ItemsCollection.remove(_id);

export const App = () => {
  const user = useTracker(() => Meteor.user());

  // this is where Meteor pulls the items from to display. If I want to change what is shown, here is where to do it.
  const items = useTracker(() => ItemsCollection.find({}, { sort: { createdAt: 0 } }).fetch());
  
  const logout = () => Meteor.logout();

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
            <div className="user">
              {user.username}
              <span>&nbsp;|&nbsp;</span>
              <span onClick={logout}>Logout</span>
            </div>
            <ul className="items">
              <table>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Location</th>
                    <th>Quantity</th>
                    <th>Weight Per Item</th>
                    <th>Total Weight</th>
                    <th>Price per Item</th>
                    <th>Total Price</th>
                    <th id="delete">Remove Item</th>
                  </tr>
                </thead>
                { items.map(item => (
                  <Item
                    key={ item._id }
                    item={ item }
                    onDeleteClick={deleteItem}
                  />
                ))}
              </table>
            </ul>
            <ItemForm/>
          </Fragment>
        ) : (
          <LoginForm />
        )}
      </div>
    </div>
  );
};