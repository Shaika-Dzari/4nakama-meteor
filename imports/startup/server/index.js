import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

    // Create a user only if no user exists.
    // Delete this one as soon as a regular is created.
    if (Meteor.users.find().count() === 0) {
        Accounts.createUser({
            username: 'admin@4nakama.net',
            email: 'admin@4nakama.net',
            password: 'A11o1234'
        });
    }
});
