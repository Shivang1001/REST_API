const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Order = require('../models/order');

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Orders were fetched'
  });
});

router.post('/', (req, res, next) => {
  const order = new Order({
    _id: new mongoose.Types.ObjectId(),
    quantity: req.body.quantity,
    product: req.body.productId
  });
  order
  .save()
  .then(result => {
    console.log(result);
    res.status(201).json(result);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });
});


router.get('/:orderId', (req, res, next) => {
    const id = req.params.OrderId;
    Order.findById(id)
    .select()
    .exec()
    .then(doc => {
      console.log("From database",doc);
      if(doc)
      {
        res.status(200).json({
          order: doc,
          request: {
            type: 'GET',
            description: 'GET_ALL_ORDERS',
            url: "http://localhost:3000/orders"
          }
        });
      }
      else{
        res.status(404).json({message: 'No valid entry found for ID'});
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({error: err});
    });
    // res.status(200).json({
    //   message: 'Order details',
    //   orderid: req.params.orderId
    // });
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
