const orderService = require('../service/orderService');

const getAllOrders = async (_req, res) => {
    try {
        const orders = await orderService.getAllOrders();
        return res.status(200).json(orders);
    } catch (error) {
        res.status(500).json(error);
    }
}

const getOrdersById = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await orderService.getOrdersById(id);

        res.status(200).json(order);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = { getAllOrders, getOrdersById };
