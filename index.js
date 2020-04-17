const functions = require('firebase-functions');
const app = require('express')();

const { getAllScreams, postOneScream, getScream, commentOnScream } = require('./handlers/screams');
const { signup, login, uploadImage, addUserDetails, getAuthenticatedUser } = require('./handlers/users');
const FBAuth = require('./util/fbAuth');

// ***** ROUTES *****

// Scream
app.get('/screams', getAllScreams);
app.post('/scream', FBAuth, postOneScream);
app.get('/scream/:screamId', getScream);
// TODO delete scream
// TODO like scream
// TODO unlike scream
app.post('/scream/:screamId/comment', FBAuth, commentOnScream);

// Users
app.post('/signup', signup);
app.post('/login', login);
app.post('/user/image', FBAuth, uploadImage);
app.post('/user', FBAuth, addUserDetails);
app.get('/user', FBAuth, getAuthenticatedUser);

exports.api = functions.https.onRequest(app);
