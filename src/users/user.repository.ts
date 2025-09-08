import { users as userList } from './users';
let users = [...userList];
export function userRepositoryFactory(){
    return {
        getAll:(departement?: string) => {
            if(departement){
                return users.filter(
                (user) =>
                  user.departement.toLowerCase() === (departement as string).toLowerCase()
            );
            }
            return users ;
        },

        getById:()=>{},
        delete : () =>{},
        create : ()=> {},
    };
}