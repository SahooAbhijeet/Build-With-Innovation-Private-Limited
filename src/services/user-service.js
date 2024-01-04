const UserRepository = require("../repository/user-repository");
 class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }
    async signUp(data) {
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            throw {error};
        }
    }

    async getUserByEmail(email) {
        try {
            const user = await this.userRepository.findBy({email});
            return user;
        } catch (error) {
            throw {error};
        }
    }

    async signIn(data) {
        try {
            const user = await this.getUserByEmail(data.email);
            if(!user) {
                throw {
                    message: "No User Found",
                    success: false,
                };
            }
            if(!user.comparePassword(data.password)) {
                throw {
                    message: "Incorrect Password",
                    success: false,
                }
            }
            const token = user.getJWT();
            return token;
        } catch (error) {
            throw {error};
        }
    }
 }

 module.exports = UserService;