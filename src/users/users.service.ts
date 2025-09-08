
import { Departement, Level } from './user.model';
import { userRepositoryFactory } from './user.repository';


const userRepository = userRepositoryFactory
export function userServiceFactory() {
    return {
        getUsers:(departement? :string) => {
          return userRepository.getAll(departement);
        },

        getUserById:(userId : string) => {
            return  users.find(user => user.id === userId);
        },

        deleteUser :(userId : string)=> {
            users = users.filter((user) => user.id !== userId);
        },

        createUser:(userData: {
            departement: Departement, 
            name: string, 
            level: Level,
        }) => {
            const id : string = crypto.randomUUID();
            const {departement, name, level } = userData;
            const user = { id, departement, name, level };
            users = [...users, user];
            return user;
        }

};    
}
