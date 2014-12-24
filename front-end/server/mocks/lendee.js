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
