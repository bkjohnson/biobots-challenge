import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { BiobotsData } from '../imports/api/biobotsdata.js';

Meteor.startup(() => {
    if (BiobotsData.find().count() === 0){

        let data = JSON.parse(Assets.getText("bioprint-data.json"));

        data.forEach(function (item, index, array) {
            BiobotsData.insert(item);
        });

        console.log("Database populated");
    }
    else {
        console.log("Database loaded");
    }
});
