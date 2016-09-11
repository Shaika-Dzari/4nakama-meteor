import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';


export const BlogPosts = new Mongo.Collection('blogpost');

Meteor.methods({
    'blogpost.insert'(title, text) {
        check(text, String);
        check(title, String);
        // Make sure the user is logged in before inserting a task
        if (!this.userId) {
            throw new Meteor.Error('not-authorized');
        }
        BlogPosts.insert({
            title,
            text,
            published: 0,
            createdAt: new Date(),
            owner: this.userId,
            author: Meteor.users.findOne(this.userId).username
        });
    },
    'blogpost.remove'(taskId) {
        check(taskId, String);
        BlogPosts.remove(taskId);
    }
});
