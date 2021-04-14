import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Item } from './Item';
import { ItemsCollection } from '/imports/api/ItemsCollection';
import { ItemForm } from './ItemForm';

export const App = () => {
  const items = useTracker(() => ItemsCollection.find({}).fetch());
  
  return (
    <div>
      <h1>Welcome to Meteor!</h1>

      <ItemForm/>

      <ul>
        { items.map(item => <Item key={ item._id } item={ item }/>) }
      </ul>
    </div>
  );
};