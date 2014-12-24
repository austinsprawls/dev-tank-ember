module.exports = function(app) {
  var express = require('express');
  var lendeeRouter = express.Router();

  var LENDEES = {
    "10": {
      id: 10,
      src: 'http://media.giphy.com/media/UdqUo8xvEcvgA/giphy.gif'
    },
    "42": {
      id: 42,
      src: 'http://media0.giphy.com/media/Ko2pyD26RdYRi/giphy.gif'
    }
  };

  var server = new Pretender(function(){
    this.get('/photos', function(request){
      var all =  JSON.stringify(Object.keys(PHOTOS).map(function(k){return PHOTOS[k]}))
      return [200, {"Content-Type": "application/json"}, all]
    });

    this.get('/photos/:id', function(request){
      return [200, {"Content-Type": "application/json"}, JSON.stringify(PHOTOS[request.params.id])]
    });
  });

  $.get('/photos/12', {success: function(){ ... }})

  lendeeRouter.get('/', function(req, res) {
    res.send({
      "lendee": []
    });
  });

  lendeeRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  lendeeRouter.get('/:id', function(req, res) {
    res.send({
      "lendee": {
        "id": req.params.id
      }
    });
  });

  lendeeRouter.put('/:id', function(req, res) {
    res.send({
      "lendee": {
        "id": req.params.id
      }
    });
  });

  lendeeRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/lendee', lendeeRouter);
};
