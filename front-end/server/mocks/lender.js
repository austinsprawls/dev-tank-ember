module.exports = function(app) {
  var express = require('express');
  var lenderRouter = express.Router();

  lenderRouter.get('/', function(req, res) {
    res.send({
      "lender": []
    });
  });

  lenderRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  lenderRouter.get('/:id', function(req, res) {
    res.send({
      "lender": {
        "id": req.params.id
      }
    });
  });

  lenderRouter.put('/:id', function(req, res) {
    res.send({
      "lender": {
        "id": req.params.id
      }
    });
  });

  lenderRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/lender', lenderRouter);
};
