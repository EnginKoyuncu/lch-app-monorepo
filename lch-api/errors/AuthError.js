class AuthError extends Error {
    constructor() {
        super();
        this.message = "Who are you? Unauthorized...";
        this.statusCode = 401;
        
    }
}

module.exports = AuthError;