import { Departement, Level, User } from './user.model';
import { UserRepository} from './user.repository';

export interface UserService {
    getUsers: (departement?: string | undefined) => User[];
    getUserById: (userId: string) => User | undefined;
    deleteUser: (userId: string) => void;
    createUser: (userData: {
        departement: Departement;
        name: string;
        level: Level;
    }) => User | undefined;
}
export function userServiceFactory( userRepository: UserRepository) : UserService {
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
