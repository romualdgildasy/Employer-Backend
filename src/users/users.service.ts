import { Departement, Level, User } from './user.model';
import { UserRepository} from './user.repository';

export interface UserService {
    getUsers: (departement?: string) => User[];
    getUserById: (userId: string) => User | null;
    deleteUser: (userId: string) => void;
    createUser: (userData: {
        departement: Departement;
        name: string;
        level: Level;
    }) => User | null;
}
export function userServiceFactory( userRepository: UserRepository) : UserService {
    return {
        getUsers: (departement?: string) => {
            return userRepository.getAll(departement);
        },

        getUserById:(userId : string) => {
            return  userRepository.getById(userId) || null;  
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
