import AppResponse from "./AppResponse.js";

export default function sendResponse(res, statusCode, data, message){
    const response = new AppResponse(statusCode, data, message);

    res.status(statusCode).json(response);
}