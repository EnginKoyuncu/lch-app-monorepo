const LocalStrategy = require('passport-local');
const { User } = require('../../models/User');


// classic login

const localStrategy = new LocalStrategy(
    {
        usernameField: 'email',
    }, async (email, password, done) => {
        try {
            const user = await User.findOne({email});
            if(!user) {
                return done(null, null);
            }
            const check = await user.comparePassword(password);
            if (check) {
                return done(null, user);
            }
        } catch (e) {
            return done(e, null);
        }
    }
)

module.exports = localStrategy;