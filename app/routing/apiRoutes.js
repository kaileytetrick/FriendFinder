var friendData = require('../data/friends');

module.exports = function (app) {
  app.get('/app/data/friends.js', function (req, res, next) {
    res.json(friendData)
  })
  app.post('/app/data/friends.js', function (req, res, next) {
    console.log(req.body)
    res.json(friendData)
  })
  
};