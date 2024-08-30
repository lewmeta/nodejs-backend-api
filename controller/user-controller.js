const User = require("../models/user-model");
// const asyncHander = require("express-async-handler")


const createUser = async (req, res) => {

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
        res.json({
            msg: "User already exists",
            success: false
        });
    }
};

module.exports = {
    createUser,
}