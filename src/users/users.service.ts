import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {

    private users: any[] = [
        {
            id: 1,
            name: 'Jere',
            phone: '132562783'
        },
        {
            id: 2,
            name: 'Gero',
            phone: '635267349'
        },
        {
            id: 3, 
            name: 'Jerito',
            phone: '723287615'
        }
    ]

    getUsers() {
        return this.users;
    }

    createUser(user: CreateUserDto) {

        this.users.push(user);

        return {
            ...user,
            id: this.users.length + 1,
        };
    }

}
