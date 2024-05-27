const userModel = require('../models/userModel');


const findingUser = async (username) => {
    try {
        const user = await userModel.findOne({ username }).populate('posts');
        return user;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
};

module.exports = findingUser ;