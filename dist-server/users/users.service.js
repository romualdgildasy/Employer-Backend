"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userServiceFactory = userServiceFactory;
function userServiceFactory(userRepository) {
    return {
        getUsers: (departement) => {
            return userRepository.getAll(departement);
        },
        getUserById: (userId) => {
            return userRepository.getById(userId);
        },
        deleteUser: (userId) => {
            userRepository.delete(userId);
        },
        createUser: (userData) => {
            const id = crypto.randomUUID();
            const { departement, name, level } = userData;
            const user = { id, departement, name, level };
            // users = [...users, user];
            userRepository.create(user);
            return userRepository.getById(id);
        }
    };
}
