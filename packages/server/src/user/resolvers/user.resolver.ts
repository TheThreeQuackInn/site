import {Resolver, Query} from '@nestjs/graphql';
import {UseGuards} from '@nestjs/common';
import {User as UserModel} from '../models/user.model';
import {GQLAuthGuard} from 'src/shared/guards/auth.guard';
import {User} from '@prisma/client';
import {UserEntity} from '../decorators/user.decorator';

@Resolver(() => UserModel)
@UseGuards(GQLAuthGuard)
export class UserResolver {
    @Query(() => UserModel)
    async profile(@UserEntity() user: User): Promise<User> {
        return user;
    }
}
