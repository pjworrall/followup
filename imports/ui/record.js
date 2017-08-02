/**
 * Created by pjworrall on 01/08/2017.
 */

import {Template} from 'meteor/templating';
import {Contacts} from '../api/contacts.js';
import {Followups} from '../api/followups.js';

import './catchup.js';
import './record.html';

Template.record.onCreated(function () {
    let self = this;
    self.autorun(function () {
        let contactId = FlowRouter.getParam('_Id');
        self.subscribe('contact', contactId);
        self.subscribe('followups', contactId);
    });
});

Template.record.helpers({
    contact: function () {
        let contactId = FlowRouter.getParam('_id');
        return Contacts.findOne({_id: contactId}) || {};
    },
    followups: function () {
        let contactId = FlowRouter.getParam('_id');
        return Followups.find({contactId: contactId},{ sort: { createdAt: -1 } }) || {};
    }
});

Template.record.events({

    'submit .new-record'(event) {

        // Prevent default browser form submit

        event.preventDefault();

        // Get value from form element

        const target = event.target;
        const text = target.text.value;
        const next = target.next.value;

        const contact = Contacts.findOne({_id: FlowRouter.getParam('_id')}) || {};

        console.log("contact: " + contact._id);

        Followups.insert({
            contactId: contact._id,
            firstName: contact.firstName,
            lastName: contact.lastName,
            organisation: contact.organisation,
            text: text,
            next: next,
            createdAt: new Date(), // current time
        });

        // Clear form

        target.text.value = "";
        target.next.value = "";


    }

});

