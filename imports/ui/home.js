/**
 * Created by pjworrall on 01/08/2017.
 */


import { Template } from 'meteor/templating';

import { Contacts } from '../api/contacts.js';
import { Followups } from '../api/followups.js';

import './contact.js';
import './followup.js';
import './home.html';


Template.home.onRendered(function() {
    this.$(".new-contact").validate({
            rules: {
                firstname: {
                    required: true
                },
                lastname: {
                    required: true
                },
                organisation: {
                    required: true
                },
                category: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                }
            }
        }
    )
});


Template.home.helpers({

    contacts() {

        return Contacts.find({}, { sort: { createdAt: -1 } });

    },
    followups() {

        // only want last followup for each contact
        // group by contact
        // sort by next date latest
        // take latest only

        return Followups.find({}, { sort: { next: 1 } });

    }

});


Template.home.events({

    'submit .new-contact'(event) {

        // Prevent default browser form submit

        event.preventDefault();

        // Get value from form element

        const target = event.target;
        const firstname = target.firstname.value;
        const lastname = target.lastname.value;
        const email = target.email.value;
        const organisation = target.organisation.value;
        const category = target.category.value;

        // Insert a task into the collection

        Contacts.insert({
            firstname: firstname,
            lastname: lastname,
            email: email,
            organisation: organisation,
            category: category,
            createdAt: new Date(), // current time
        });

        // Clear form

        target.firstname.value = "";
        target.lastname.value = "";
        target.email.value = "";
        target.organisation.value = "";
        target.category.value = "";

    },

});
