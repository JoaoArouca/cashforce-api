const { getAllUsers, getUserById } = require('../../http/controller/userController');

const OrderRouter = require('express').Router();

OrderRouter.get('/', getAllUsers);
OrderRouter.get('/:id', getUserById);

module.exports = OrderRouter;
