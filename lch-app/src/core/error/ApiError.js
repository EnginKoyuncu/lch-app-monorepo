class ApiError extends Error {
    constructor(err) {
        super();
        if (err && err.message && err.statusCode) {
            this.message = `${err.statusCode} ${err.message}`;
            this.statusCode = err.statusCode;
        } else {
            this.message = 'Not like this';
            this.statusCode = 500;
        }
    }


        toString() {
            return this.message;
        }

        isUnauthorized() {
            return this.statusCode === 401;
        }
    }

    export default ApiError;
