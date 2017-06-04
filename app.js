"use strict;"

var restify = require('restify');
var builder = require('botbuilder');
var credentials = require('./msft-bot-credentials');

// Setup Restify server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function() {
	console.log('%s listening to %s', server.name, server.url);
});

// Create chat connector for communicating with the Bot Framework service
var connector = new builder.ChatConnector({
	appId: credentials.app_id,
	// appId: null,
	appPassword: credentials.password
	// appPassword: null
});

// Listen for messages from users
server.post('/api/messages', connector.listen());

// Test server
server.get('/test', function(req, res) {
	res.send('Hey there!');
});

// Web portal
server.get('/web', function(req, res) {
	res.contentType = 'text/html';
	res.header('Content-Type','text/html');
	res.end("<html><body height=600><iframe src='https://webchat.botframework.com/embed/SnapChef?s=iC4DQVOePQ8.cwA.l6c._ffaBVptGaJwXp-Jl9FPemr8z3xAp9k4Sz3_iifkemI'></iframe></body></html>");
	// res.send(__dirname + '/webchat.html');
});

// Receive messages from the user and respond by echoing each message back
var bot = new builder.UniversalBot(connector, function(session) {
	session.send('You said: %s', session.message.text);
});
