/**
 * Created by pjworrall on 01/08/2017.
 */

import { Template } from 'meteor/templating';
import { Followups } from '../api/followups.js';

import moment from 'moment';


import './followup.html';

Template.followup.helpers({
    dateCreated: function () {

        let createdAt = Followups.findOne({_id: FlowRouter.getParam('_id')}) || {};

        let m = moment(createdAt);

        return m.format("ll");
    }
});

Template.followup.events({

    'click .delete'() {

        //console.log("deleting follow ups disabled");
        Followups.remove(this._id);

    }

});
