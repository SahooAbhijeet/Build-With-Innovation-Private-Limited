const {UserService} = require("../services/user-service");

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
        const token = await userService.signIn({
            email: req.body.email,
            password: req.body.password
        });
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


async function addRoleToUser(req, res) {
    try {
        console.log(req.body);
        const user = await userService.addRoleToUser({
            role: req.body.role,
            id: req.body.id
        });
        return res.status(201).json({
            success: true,
            message: "Successfully logged in",
            data: user,
            error: {}
        });
    } catch(error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong, unable to logged in",
            data: {},
            error: error
        });
    }
}

const updateUsers = async(req, res) => {
    const { id } = req.params;
    const { username, email } = req.body;
    try {
        const updateUser = await userService.updateUser(id, {username, email});
        res.json(updateUser);
    } catch (error) {
        res.status(500)
        .json({ message: error.message });
    }
}

const deleteUser = async(req, res) => {
    const { id } = req.params;
    try {
        const deleteUser = await userService.deleteUser(id);
        res.json(deleteUser);
    } catch (error) {
        res.status(500)
        .json({ message: error.message });
    }
}

module.exports = {
    signUp,
    logIn, 
    addRoleToUser,
    updateUsers,
    deleteUser
}