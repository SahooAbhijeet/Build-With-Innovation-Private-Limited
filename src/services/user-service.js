const {UserRepository, RoleRepository } = require("../repository");
 class UserService {
    constructor() {
        this.userRepository = new UserRepository();
        this.roleRepository = new RoleRepository();
    }

    async  createUser(data) {
        try {
            const user = await userRepository.create(data);
            const role = await roleRepository.getRoleByName("customer");
            user.addRole(role);
            return user;
        } catch (error) {
            console.log(error)
            throw {error};
        }
    }

    async addRoleToUser(data) {
        try {
            const user = await userRepository.get(data.id);
            if(!user) {
              console.log("No user found for given id");  
            }
            const role = await roleRepository.getRoleByName(data.role);
            if(!role) {
                console.log("No user found for the given role")
            }
            user.addRole(role);
            return user;
        } catch (error) {
            if(error instanceof AppError)
            throw error;
            console.log(error);
        }
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
            const user = await this.userRepository.getUserByEmail(data.email);
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

    async getAllUser() {
        try {
            const user = await this.userRepository.getAll();
            return user;
        } catch (error) {
            console.log(error);
            throw {error};
        }
    }

    async updateUser(id, data) {
        try {
            const user = await this.userRepository.update(id, data);
            return user;
        } catch (error) {
            console.log(error);
            throw {error};
        }
    }

    async deleteUser(id) {
        try {
            const user = await this.userRepository.destroy(id);
            return user;
        } catch (error) {
            console.log(error);
            throw {error};
        }
    }
 }

 module.exports = {
    UserService
 };