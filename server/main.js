import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { ItemsCollection } from '/imports/api/ItemsCollection';

const insertItem = (itemText,user) => 
  ItemsCollection.insert({
    text: itemText,
    userId: user._id,
    createdAt: new Date(),
  });

const SEED_USERNAME = 'meteorite';
const SEED_PASSWORD = 'password';

Meteor.startup(() => {
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }

  const user = Accounts.findUserByUsername(SEED_USERNAME);

  if(ItemsCollection.find().count() === 0) {
    [
      'Moonblade',
      'Platinum Scabbard',
      'Poison Halberd',
      'Plate Mail of Necrotic Resistance',
      'Signet Ring of Blune\'stai',
      'Signet Ring of Reverie',
      'Holy Symbol',
    ].forEach(itemText => insertItem(itemText, user));
  }
});