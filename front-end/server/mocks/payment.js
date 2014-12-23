module.exports = function(app) {
  var express = require('express');
  var paymentRouter = express.Router();

  paymentRouter.get('/', function(req, res) {
    res.send({
      "payment": []
    });
  });

  paymentRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  paymentRouter.get('/:id', function(req, res) {
    res.send({
      "payment": {
        "id": req.params.id
      }
    });
  });

  paymentRouter.put('/:id', function(req, res) {
    res.send({
      "payment": {
        "id": req.params.id
      }
    });
  });

  paymentRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/payment', paymentRouter);
};
