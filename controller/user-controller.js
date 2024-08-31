const User = require("../models/user-model");
const asyncHander = require("express-async-handler")


const createUser = asyncHander(async (req, res) => {

    /**
     * TODO: Get the email from req.body;
     */

    const { email } = req.body;
    const findUser = await User.findOne({ email: email });

    if (!findUser) {
        // Create a new user
        const newUser = User.create(req.body);
        res.json(newUser);
    } else {
        throw new Error("User already exists");
    }
});

module.exports = {
    createUser,
}