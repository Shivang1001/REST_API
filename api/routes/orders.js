const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Orders were fetched'
  });
});

router.post('/', (req, res, next) => {
  const order = {
    productId: req.body.productId,
    quantity: req.body.quantity
  };
  res.status(201).json({
    message: 'Orders was created',
    order: order
  });
});

router.get('/:orderId', (req, res, next) => {
    res.status(200).json({
      message: 'Order details',
      orderid: req.params.orderId
    });
});

router.patch('/:productId', (req, res, next) => {
  res.status(200).json({
    message: 'updated product!'
  });
});

router.delete('/:productId', (req, res, next) => {
  res.status(200).json({
    message: 'deleted order!'
  });
});

module.exports = router;
