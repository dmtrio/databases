var models = require('../models');
//speaks/responds to client
module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, results) => {
        res.json(results);
      });
    }, 
    // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('body', req.body);
      var params = [ req.body['message'], req.body['username'], req.body['roomname'] ];
      models.messages.post(params, (err, results) => {
        console.log('err', err, 'results', results);
        res.json(results);
      });
    }
    // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((err, results) => {
        res.json(results);
      });      
    },
    post: function (req, res) {
      var params = [ req.body['username'] ];
      models.users.post(params, (err, results) => {
        res.json(results);
      });
    }       
  }
};

