"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepositoryFactory = userRepositoryFactory;
const users_1 = require("./users");
let users = [...users_1.users];
function userRepositoryFactory() {
    return {
        getAll: (departement) => {
            if (departement) {
                return users.filter((user) => user.departement.toLowerCase() === departement.toLowerCase());
            }
            return users;
        },
        getById: (userId) => {
            return users.find((user) => user.id === userId);
        },
        delete: (userId) => {
            users = users.filter((user) => user.id !== userId);
        },
        create: (user) => {
            users = [...users, user];
        },
    };
}
