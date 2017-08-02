/**
 * Created by pjworrall on 01/08/2017.
 */

import { Template } from 'meteor/templating';
import { Contacts } from '../api/contacts.js';


import './contact.html';

Template.contact.events({

    'click .delete'() {

        Contacts.remove(this._id);

    }

});

