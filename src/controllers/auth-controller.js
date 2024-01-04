const UserService = require("../services/user-service");

const userService = new UserService();

 const signUp = async(req,res) => {
    try {
        const response = await userService.signUp({
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            name: req.body.password,
            password: req.body.password,
        });
        return res.status(201).json({
            success: true,
            message: "Successfully created the new user",
            data: response,
            error: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            data: {},
            error: error
        });
    }
}


 const logIn = async (req, res) => {
    try {
        const token = await userService.signIn(req.body);
        return res.status(201).json({
            success: true,
            message: "Successfully logged in",
            data: token,
            error: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong, unable to logged in",
            data: {},
            error: error
        });
    }
}

module.exports = {
    signUp,
    logIn
}