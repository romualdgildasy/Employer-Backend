"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userServiceFactory = userServiceFactory;
const users_1 = require("./users");
let users = [...users_1.users];
function userServiceFactory() {
    return {
        getUsers: (departement) => {
            if (departement) {
                return users.filter((user) => user.departement.toLowerCase() ===
                    departement.toLowerCase());
            }
            return users;
        },
        getUserById: (userId) => {
            return users.find(user => user.id === userId);
        },
        deleteUser: (userId) => {
            users = users.filter((user) => user.id !== userId);
        },
        createUser: (userData) => {
            const id = crypto.randomUUID();
            const { departement, name, level } = userData;
            const user = { id, departement, name, level };
            users = [...users, user];
            return user;
        }
    };
}
