import {Query, Resolver, Args, Mutation} from '@nestjs/graphql';
import {
    User,
    UserWhereUniqueInput,
    FindManyUserArgs,
    UserCreateInput,
    UserUpdateArgs,
    UserDeleteArgs,
} from '@prisma/client';
import {User as UserModel} from './user.model';
import {PrismaService} from '../prisma/prisma.service';

@Resolver(() => UserModel)
export class UserResolver {
    constructor(private prisma: PrismaService) {}

    /**
     * Find one user
     */
    @Query(() => UserModel, {nullable: true})
    async user(@Args({name: 'id', type: () => String}) id: string): Promise<User | null> {
        return this.prisma.user.findOne({where: {id}});
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
    @Mutation(() => UserModel)
    async createUser(
        @Args({name: 'email', type: () => String}) email: UserCreateInput['email'],
        @Args({name: 'password', type: () => String}) password: UserCreateInput['password'],
        @Args({name: 'username', type: () => String}) username: UserCreateInput['username'],
    ): Promise<User> {
        return this.prisma.user.create({
            data: {
                email,
                password,
                username,
            },
        });
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
