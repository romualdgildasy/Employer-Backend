import { User } from './user.model';
import { users as userList } from './users';
let users = [...userList];
export function userRepositoryFactory(){
    return {
        getAll: (departement?: string) => { 
            if(departement){
                return users.filter(
                (user) =>
                  user.departement.toLowerCase() === (departement as string).toLowerCase()
            );
            }
            return users ;
        },

        getById: (userId: string)=>{
            return users.find((user)=>user.id === userId);
        },

        delete : (userId:string) =>{
            users = users.filter((user) => user.id !==userId);
        },
        create : (user : User)=> {
             users = [...users, user];
        
        },
    };
}