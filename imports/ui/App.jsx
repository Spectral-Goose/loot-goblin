import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Item } from './Item';
import { ItemsCollection } from '/imports/api/ItemsCollection';
import { ItemForm } from './ItemForm';

const toggleChecked = ({ _id, isChecked }) => {
  ItemsCollection.update(_id, {
    $set: {
      isChecked: !isChecked
    }
  })
};

const deleteItem = ({ _id }) => ItemsCollection.remove(_id);

export const App = () => {
  const items = useTracker(() => ItemsCollection.find({}, { sort: { createdAt: -1 } }).fetch());
  
  return (
    <div className="app">
      <header>
        <div className="app-bar">
          <div className="app-header">
            <h1>Welcome to Meteor!</h1>
          </div>
        </div>
      </header>

      <div className="main">
        <ItemForm/>

        <ul className="items">
          { items.map(item => (
          <Item
            key={ item._id }
            item={ item }
            onCheckboxClick={toggleChecked}
            onDeleteClick={deleteItem}
          />
          ))}
        </ul>
      </div>
    </div>
  );
};