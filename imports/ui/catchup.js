/**
 * Created by pjworrall on 01/08/2017.
 */

import { Template } from 'meteor/templating';
import { Followups } from '../api/followups.js';

import moment from 'moment';

import './catchup.html';

Template.catchup.onCreated(function() {
    console.log("catchup template created");
});

Template.catchup.helpers({
    formatCreatedDate: function (createdAt) {
        let m = moment(createdAt);
        return m.format("ll");
    },
    formatNextDate: function (next) {
        let m = moment(next);
        return m.format("ll");
    }
});

Template.catchup.events({

    'click .delete'(template) {

        //console.log("deleting follow ups disabled");
        Followups.remove(template._id);

    },

});