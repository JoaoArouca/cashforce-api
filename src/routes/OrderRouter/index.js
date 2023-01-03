const OrderRouter = require('express').Router();

OrderRouter.get('/', () => { console.log('deu bom') });

module.exports = OrderRouter;
