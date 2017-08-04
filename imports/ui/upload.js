/**
 * Created by pjworrall on 04/08/2017.
 */

import {Template} from 'meteor/templating';

import {Contacts} from '../api/contacts.js';

import Papa from 'papaparse';

import './upload.html';

Template.upload.onCreated(() => {
    Template.instance().uploading = new ReactiveVar(false);
});

Template.upload.helpers({
    uploading() {
        return Template.instance().uploading.get();
    }
});

Template.upload.events({
    'change [name="uploadCSV"]' (event, template) {
        template.uploading.set(true);

        Papa.parse(event.target.files[0], {
            header: true,
            complete(results, file) {
                // should do an integrity check?
                let data = results.data;
                for (let i = 0; i < data.length; i++) {
                    Contacts.insert(data[i]);
                }
                template.uploading.set(false);
                Bert.alert('Upload complete!', 'success', 'growl-top-right');
            }
        });
    }
});