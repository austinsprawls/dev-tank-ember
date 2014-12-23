module.exports = function(app) {
  var express = require('express');
  var investmentRouter = express.Router();



  investmentRouter.get('/', function(req, res) {
    res.send({
      "investment": []
    });
  });

  investmentRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  investmentRouter.get('/:id', function(req, res) {
    res.send({
      "investment": {
        "id": req.params.id
      }
    });
  });

  investmentRouter.put('/:id', function(req, res) {
    res.send({
      "investment": {
        "id": req.params.id
      }
    });
  });

  investmentRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/investment', investmentRouter);
};
