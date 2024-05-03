import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    private users = [
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

}
