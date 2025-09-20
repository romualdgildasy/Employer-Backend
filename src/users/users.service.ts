import { Departement, Level } from './user.model';
import { userRepositoryFactory } from './user.repository';
import { users as userList } from './users';
let users = [...userList];

const userRepository = userRepositoryFactory();
export function userServiceFactory() {
    return {
        getUsers: (departement?: string) => {
            return userRepository.getAll(departement);
        },

        getUserById:(userId : string) => {
            return  userRepository.getById(userId);  
        },

        deleteUser :(userId : string)=> {
            userRepository.delete(userId);
        },

        createUser:(userData: {
            departement: Departement, 
            name: string, 
            level: Level,
        }) => {
            const id : string = crypto.randomUUID();
            const {departement, name, level } = userData;
            const user = { id, departement, name, level };
           // users = [...users, user];
           userRepository.create(user);
            return userRepository.getById(id);
        }

};    
}
