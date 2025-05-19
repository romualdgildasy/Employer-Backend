"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    //    if (err instanceof Error) {
    //     // Do something 
    //    }
    return res.status(500).send("Unexpected Error");
};
exports.errorHandler = errorHandler;
