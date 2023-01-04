const User = require('../../database/models/User');

const getAllUsers = async () => {
    const users = await User.findAll();

    return users;
};

const getUserById = async (id) => {
    const user = await User.findOne({
        where: { id }
    });

    return user;
};

module.exports = { getAllUsers, getUserById };
