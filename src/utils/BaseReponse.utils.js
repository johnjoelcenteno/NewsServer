class BaseResponse {
    constructor(data, message, statusCode) {
        this.data = data || [];
        this.message = message;
        this.statusCode = statusCode;
    }
}

module.exports = BaseResponse;