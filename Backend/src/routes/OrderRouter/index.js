const getAllOrders = require('../../http/controller/orderController');

const OrderRouter = require('express').Router();

OrderRouter.get('/', getAllOrders);

module.exports = OrderRouter;
