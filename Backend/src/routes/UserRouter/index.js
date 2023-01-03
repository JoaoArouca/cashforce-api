const UserRouter = require('express').Router();

UserRouter.get('/', (_req, res) => { res.send('deu bom')});

module.exports = UserRouter;
