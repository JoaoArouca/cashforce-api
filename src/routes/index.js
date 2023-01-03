const router = require('express').Router();
const OrderRouter = require('./OrderRouter');
const UserRouter = require('./UserRouter');

router.use('/order', OrderRouter);
router.use('/user', UserRouter);

module.exports = router;
