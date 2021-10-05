import React, { useState, Fragment } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { ItemsCollection } from '/imports/api/ItemsCollection';
import { Item } from './Item';
import { ItemForm } from './ItemForm';
import { LoginForm } from './LoginForm';

const deleteItem = ({ _id }) => ItemsCollection.remove(_id);

export const App = () => {
  const user = useTracker(() => Meteor.user());

  // This is where Meteor pulls the items from to display. If I want to change what is show, here is where to do it.
  const items = useTracker(() => ItemsCollection.find({}, { sort: { createdAt: -1 } }).fetch());
  
  const logout = () => Meteor.logout();

  return (
    <div className="app">
      <header>
        <div className="app-bar">
          <div className="app-header">
            <h1>RPG Inventory System</h1>
          </div>
        </div>
      </header>

      <div className="main">
        {user ? (
          <Fragment>
            <div className="user" onClick={logout}>
              {user.username} 🚪
           </div>
            
            <ul className="items">
              { items.map(item => (
                <Item
                  key={ item._id }
                  item={ item }
                  onDeleteClick={deleteItem}
                />
              ))}
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