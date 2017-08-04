/**
 * Created by pjworrall on 01/08/2017.
 */

import {Template} from 'meteor/templating';
import {Contacts} from '../api/contacts.js';
import {Followups} from '../api/followups.js';

import './catchup.js';
import './record.html';

Template.record.onRendered(function() {
   this.$('#next').datepicker({});
   this.$(".new-record").validate({
           rules: {
               discussed: {
                   required: true
               },
               followup: {
                   required: true
               },
               next: {
                   required: true,
                   date: true
               }
           }
       }
   )
});

Template.record.helpers({
    contact: function () {
        let contactId = FlowRouter.getParam('_id');
        return Contacts.findOne({_id: contactId}) || {};
    },
    followups: function () {
        let contactId = FlowRouter.getParam('_id');
        return Followups.find({contactId: contactId},{ sort: { next: 1 } });
    }
});

Template.record.events({

    'submit .new-record'(event) {

        // Prevent default browser form submit

        event.preventDefault();

        // Get value from form element

        const target = event.target;
        const followup = target.followup.value;
        const discussed = target.discussed.value;
        const next = target.next.value;

        const contact = Contacts.findOne({_id: FlowRouter.getParam('_id')}) || {};

        console.log("contact: " + contact._id);

        Followups.insert({
            contactId: contact._id,
            firstName: contact.firstName,
            lastName: contact.lastName,
            organisation: contact.organisation,
            discussion: discussed,
            followup: followup,
            next: new Date(next),
            createdAt: new Date(), // current time
        });

        // Clear form

        target.next.value = "";
        target.discussed.value = "";
        target.followup.value = "";


    },

    'click .delete'() {

        //console.log("deleting follow ups disabled");
        Followups.remove(this._id);

    }

});

