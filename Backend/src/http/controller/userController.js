const userService = require('../service/userService');

const getAllUsers = async (_req, res) => {
    try {
        const users = await userService.getAllUsers();

        return res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
}

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userService.getUserById(id);

        if (user === null) throw new Error;
        else {
            res.status(200).json(user);
        }

    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = { getAllUsers, getUserById };
