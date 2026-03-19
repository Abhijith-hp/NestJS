import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    private users = [
        { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'INTERN', age: 22 },
        { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'EMPLOYEE', age: 30 },
        { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', role: 'INTERN', age: 24 },
        { id: 4, name: 'Diana Ross', email: 'diana@example.com', role: 'EMPLOYEE', age: 28 },
        { id: 5, name: 'Evan Davis', email: 'evan@example.com', role: 'INTERN', age: 26 },
    ]

    findAll(role?: 'INTERN' | 'EMPLOYEE', age?: number) {
        if(role && age){
            return this.users.filter(user=> user.role === role && user.age === age);
        }
        else if(role){
            return this.users.filter(user=> user.role === role);
        }else if(age){
            return this.users.filter(user=> user.age === age);
        }
        return this.users;
    }

    findOne(id:number){
        return this.users.find(user=> user.id === id);
    }

    create(user:{name:string, email:string, role:'INTERN' | 'EMPLOYEE', age:number}){
        this.users.push({id:this.users.length + 1,...user});
        return this.users.at(-1);
    }

    update(id:number,updateUser:{name?:string,email?:string,role?:'INTERN' | 'EMPLOYEE'}){
        this.users = this.users.map(user=>user.id==id? {...user,...updateUser}:user);
        return this.findOne(id);
    }

    remove(id:number){
        const removedUser = this.findOne(id);
        this.users = this.users.filter(user=>user.id!==id)
        return removedUser;
    }
}
