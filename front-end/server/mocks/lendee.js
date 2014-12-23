module.exports = function(app) {
  var express = require('express');
  var lendeeRouter = express.Router();

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
