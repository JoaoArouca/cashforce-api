const Order = require('../../database/models/Order');
const Buyer = require('../../database/models/Buyer');
const Provider = require('../../database/models/Provider');

const getAllOrders = async () => {
    const orders = await Order.findAll({
        include: [
            { model: Buyer, as: 'buyer' },
            { model: Provider, as: 'provider' }
          ]
    });
    return orders;
};

module.exports = {getAllOrders};
