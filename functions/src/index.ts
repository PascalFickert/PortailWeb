import * as functions from 'firebase-functions';
import admin = require('firebase-admin');
admin.initializeApp();

exports.createProfile = functions.auth.user().onCreate((user) => {

  return admin.database().ref(`/Utilisate urs/${user.uid}`).set({email: user.email});

});
