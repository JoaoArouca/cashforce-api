const orderService = require('../service/orderService');

const getAllOrders = async (_req, res) => {
    try {
        const orders = await orderService.getAllOrders();
        return res.status(200).json(orders);
    } catch (error) {
        console.log(error);
    }
}

module.exports = getAllOrders;