var db = require('../db');
var mysql = require('mysql');
//speaks to db should be labeled according to crud

var dbConnection = mysql.createConnection({
  user: 'root',
  password: 'plantlife',
  database: 'chat'
});


module.exports = {
  messages: {
    get: function (callback) {
      // dbConnection.connect();
      var queryString = 'SELECT messages.id, messages.text, users.username, messages.roomname FROM messages LEFT OUTER JOIN users ON (messages.username = users.id) ORDER BY messages.id DESC';
      dbConnection.query(queryString, (err, results) => { 
        console.log('GET message module');
        callback(err, results); 
      });
      // dbConnection.end();
    }, 
    // a function which produces all the messages
    post: function (params, callback) {
      // dbConnection.connect();
      // var userID = dbConnection.query(`SELECT id FROM users WHERE username='${req.username}';`);
      // console.log('userID: ', userID);
      var queryString = 'INSERT INTO messages (text, username, roomname) VALUES (?, (SELECT id FROM users WHERE username = ? LIMIT 1), ?)';
      dbConnection.query(queryString, params, (err, results) => { 
        callback(err, results); 
      });
      //   .then(function(userId) {
      //   console.log(userId);
      //   dbConnection.query(`INSERT INTO messages (text, username, roomname) VALUES ('${req.message}', '${userId}', '${req.roomname}')`);
      // });
        
      // dbConnection.end();
    } 
    // a function which can be used to insert a message into 
    // the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      // dbConnection.connect();
      var queryString = 'SELECT users.username FROM users';
      dbConnection.query(queryString, (err, results) => { callback(err, results); });
      // dbConnection.end(); 
    },
    
    post: function (params, callback) {
      // dbConnection.connect();
      var queryString = 'INSERT INTO users (username) VALUES (?)';
      dbConnection.query(queryString, params, (err, res) => { callback(res); });
      // dbConnection.end();
    }
  }
};

