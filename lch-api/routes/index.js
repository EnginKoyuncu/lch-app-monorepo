
const NotFoundError = require('../errors/NotFoundError');
const UserController = require('../controllers/UserController');
const { authLocal, authJwt } = require('../services/auth/auth.services');
const authRoutes = require('./authRoutes');


const userController = new UserController();

const registerRoutes = (app) => {

    // user
    app.post('/register', userController.register);
    app.post('/login', authLocal, userController.login);


    app.use(authJwt, authRoutes)

        // Default 404 error code
        app.use((req, res, next) => {
        next(new NotFoundError());
        });
    
        // error 
        app.use(function (err, req, res, next) {
        res.status(err.statusCode || 500);
        res.json(err)
        })
};

module.exports = {
    registerRoutes,
}