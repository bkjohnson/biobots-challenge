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

Meteor.methods({
    findUserData: function (serial) {
        return BiobotsData.find({"user_info.serial": serial}).fetch();
    },

    findUserEmail: function(serial) {
        let emailList = _.uniq(BiobotsData.find({"user_info.serial": serial}).fetch().map(function(data) {
            return data.user_info.email;
            }), true);

        return emailList[0];
    }
});
