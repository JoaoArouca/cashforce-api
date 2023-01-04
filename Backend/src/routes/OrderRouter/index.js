const { getAllOrders, getOrdersById } = require('../../http/controller/orderController');

const OrderRouter = require('express').Router();

OrderRouter.get('/', getAllOrders);
OrderRouter.get('/:id', getOrdersById);

module.exports = OrderRouter;
