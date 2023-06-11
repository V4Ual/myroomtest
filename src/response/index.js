

class AllResponse {

    async successResponse({ res, message, data }) {
        return await res.status(200).json({
            status: "ok",
            statusCode: 200,
            isSuccess: true,
            message: message,
            data: data,
            error: null,
        });
    }

    async internalServerErrorResponse({ res, err }) {
        await res.status(500).json({
            status: "ok",
            statusCode: 500,
            isSuccess: false,
            message: "Internal server error",
            data: null,
            error: err,
        });
    }

    async conflictErrorResponse({ res, message }) {
        await res.status(200).json({
            status: "ok",
            statusCode: 409,
            isSuccess: false,
            message: message,
            data: null,
            error: "conflict",
        });
    }

    async badRequestResponse({ res, err }) {
        await res.status(200).json({
            status: "ok",
            statusCode: 400,
            isSuccess: false,
            message: err,
            data: null,
            error: "Bad Request Error is occured",
        });
    }

    async unauthorizedResponse({ res, message }) {
        await res.status(401).json({
            status: "unauthorized",
            statusCode: 401,
            isSuccess: false,
            message: message,
            data: null,
            error: null,
        });
    }

    async success(ResponceMessage, ResponceData) {
        return {
            ResponceCode: 0,
            ResponceMessage: ResponceMessage,
            ResponceData: ResponceData
        }
    }

    async fail(ResponceMessage, ResponceData) {
        return {
            ResponceCode: 1,
            ResponceMessage: ResponceMessage,
            ResponceData: ResponceData
        }
    }

}

module.exports = AllResponse

