const Order = require('../../database/models/Order');
const Buyer = require('../../database/models/Buyer');
const Provider = require('../../database/models/Provider');
const CNPJ = require('../../database/models/CNPJ');
const User = require('../../database/models/User');

const getAllOrders = async () => {
    const orders = await Order.findAll({
        include: [
            { model: Buyer, as: 'buyer' },
            { model: Provider, as: 'provider' },
            { model: CNPJ },
            { model: User, as: 'user' }
          ]
    });
    return orders;
};

const getOrdersById = async (id) => {
    const orderById = await Order.findOne({
        where: { id },
        include: [
            { model: Buyer, as: 'buyer' },
            { model: Provider, as: 'provider' },
            { model: CNPJ },
            { model: User, as: 'user' }
          ]
    });

    return orderById;
}

module.exports = {getAllOrders, getOrdersById};
