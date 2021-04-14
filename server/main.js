import { Meteor } from 'meteor/meteor';
import { ItemsCollection } from '/imports/api/ItemsCollection';

const insertItem = itemText => ItemsCollection.insert({ text: itemText });

Meteor.startup(() => {
  if(ItemsCollection.find().count() === 0) {
    [
      'Moonblade',
      'Platinum Scabbard',
      'Poison Halberd',
      'Plate Mail of Necrotic Resistance',
      'Signet Ring of Blune\'stai',
      'Signet Ring of Reverie',
      'Holy Symbol',
    ].forEach(insertItem)
  }
});