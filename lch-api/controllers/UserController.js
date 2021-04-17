const { User } = require("../models/User");

class UserController {
    userObject = (user) => {
        const {email, role, _id} = user;
        return {
            user: {
                email,
                role,
                _id,
            },
            token: user.createToken(),
        };
    }

    register = async (req, res, next) => {
        try {
            const u = new User(req.body);
            const user = await u.save();
            res.status(200).json(this.userObject(user));
        } catch (e) {
            next(e.errors ? new ValidationError(e) : e);

        }
    }

    login = async (req, res, next) => {
        const { user } = req;
        const { email, role, _id } = user;
        res.status(200).json(this.userObject(user));
    }
}

module.exports = UserController;