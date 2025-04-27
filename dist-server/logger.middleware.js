"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const logger = (req, res, next) => {
    const infos = `[${new Date()}] ${req.url} : ${req.method} `;
    console.log(infos);
    next();
};
exports.logger = logger;
