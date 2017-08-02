/**
 * Created by pjworrall on 01/08/2017.
 */


import { Template } from 'meteor/templating';

import { Contacts } from '../api/contacts.js';
import { Followups } from '../api/followups.js';

import './contact.js';
import './followup.js';
import './home.html';

Template.home.onCreated(function() {
    console.log("home template created");
});


Template.home.helpers({

    contacts() {

        return Contacts.find({}, { sort: { createdAt: -1 } });

    },
    followups() {

        return Followups.find({}, { sort: { createdAt: -1 } });

    }

});


Template.home.events({

    'submit .new-contact'(event) {

        // Prevent default browser form submit

        event.preventDefault();

        // Get value from form element

        const target = event.target;
        const firstName = target.firstName.value;
        const lastName = target.lastName.value;
        const eMail = target.eMail.value;
        const organisation = target.organisation.value;
        const category = target.category.value;

        // Insert a task into the collection

        Contacts.insert({
            firstName: firstName,
            lastName: lastName,
            email: eMail,
            organisation: organisation,
            category: category,
            createdAt: new Date(), // current time
        });

        // Clear form

        target.firstName.value = "";
        target.lastName.value = "";
        target.eMail.value = "";
        target.organisation.value = "";
        target.category.value = "";

    },

});