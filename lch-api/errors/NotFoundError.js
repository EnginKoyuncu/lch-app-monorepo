class NotFoundError extends Error {
    constructor() {
        super();
        this.message = "Not found";
        this.statusCode = 404;
        
    }
}

module.exports = NotFoundError;