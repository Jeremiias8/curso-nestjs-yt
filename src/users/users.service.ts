import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';
import { User, Prisma } from '@prisma/client';

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

    constructor(private prisma: PrismaService) {}

    getUsers() {
        return this.prisma.user.findMany();
    }

    createUser(user: CreateUserDto) {

        this.users.push(user);

        /* 
            return this.prisma.user.create({ data: user });
        */

        return {
            ...user,
            id: this.users.length + 1,
        };
    }

    /* Prisma area */

    async user(
        usuarioConUnicoInput: Prisma.UserWhereUniqueInput,
    ): Promise<User | null> {

        return this.prisma.user.findUnique({
            where: usuarioConUnicoInput,
        });
    }

    async usuarios(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.UserWhereUniqueInput;
        where?: Prisma.UserWhereInput;
        orderBy?: Prisma.UserOrderByWithRelationInput;

    }): Promise<User[]> {

        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.user.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    async crearUsuario(data: Prisma.UserCreateInput): Promise<User> {
        
        return this.prisma.user.create({
            data,
        });
    }

    async actualizacionDeUsuario(params: {
        where: usuarioConUnicoInput;
        data: Prisma.UserUpdateInput;
    
    }): Promise<User> {

        const { where, data } = params;

        return this.prisma.user.update({
            where,
            data,
        });
    }

    async borradoDeUsuario(where: usuarioConUnicoInput): Promise<User> {

        return this.prisma.user.delete({
            where,
        });
    }    

}
