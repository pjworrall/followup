/**
 * Created by pjworrall on 01/08/2017.
 */

import { Template } from 'meteor/templating';
import { Followups } from '../api/followups.js';

import moment from 'moment';


import './followup.html';

Template.followup.helpers({
    formatCreatedDate: function (createdAt) {
        let m = moment(createdAt);
        return m.format("ll");
    },
    formatNextDate: function (next) {
        let m = moment(next);
        return m.format("ll");
    }
});

Template.followup.events({

    'click .delete'() {

        console.log("deleting follow ups here disabled");
        //Followups.remove(this._id);

    }

});
