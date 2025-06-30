import { users as userList } from './users';
import { Departement, Level } from './user.model';
let users = [...userList];
export function userServiceFactory() {
    return {
        getUsers:(departement? :string) => {
          if (departement) {
              return users.filter(
                (user) =>
                    user.departement.toLowerCase() === 
                (departement as string).toLowerCase()
            );
          }
          return users;
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
