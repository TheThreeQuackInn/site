import {Query} from '@nestjs/common';
import {Resolver} from '@nestjs/graphql';
import {UserService} from './user.service';

@Resolver()
export class UserResolver {
    constructor(private userService: UserService) {}
}
