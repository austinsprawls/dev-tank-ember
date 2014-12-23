module.exports = function(app) {
  var express = require('express');
  var loanRouter = express.Router();

  loanRouter.get('/', function(req, res) {
    res.send({
      "loan": []
    });
  });

  loanRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  loanRouter.get('/:id', function(req, res) {
    res.send({
      "loan": {
        "id": req.params.id
      }
    });
  });

  loanRouter.put('/:id', function(req, res) {
    res.send({
      "loan": {
        "id": req.params.id
      }
    });
  });

  loanRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/loan', loanRouter);
};
