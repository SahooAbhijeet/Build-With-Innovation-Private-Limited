const User = require("../models/user");
const CrudRepository = require('./crud-repository');

class UserRepository extends CrudRepository {
    constructor() {
        super(User);
    }

    async findBy(data) {
        try {
            const response = await User.findOne(data);
            return response;
        } catch (error) {
            console.log(error);
            throw {error};
        }
    }
}

module.exports = UserRepository;