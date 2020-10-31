import {Injectable} from '@nestjs/common';
import {PrismaService} from '../prisma/prisma.service';
import {
    User,
    UserWhereUniqueInput,
    FindManyUserArgs,
    UserCreateArgs,
    UserUpdateArgs,
    UserDeleteArgs,
} from '@prisma/client';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    /**
     * Find one user
     */
    async user(userWhereUniqueInput: UserWhereUniqueInput): Promise<User | null> {
        return this.prisma.user.findOne({
            where: userWhereUniqueInput,
        });
    }

    /**
     * Find many users
     */
    async users(args?: FindManyUserArgs): Promise<Array<User>> {
        return this.prisma.user.findMany(args);
    }

    /**
     * Create a user
     */
    async createUser(args: UserCreateArgs): Promise<User> {
        return this.prisma.user.create(args);
    }

    /**
     * Update a user
     */
    async updateUser(args: UserUpdateArgs): Promise<User> {
        return this.prisma.user.update(args);
    }

    /**
     * Delete a user
     */
    async deleteUser(args: UserDeleteArgs): Promise<User> {
        return this.prisma.user.delete(args);
    }
}
