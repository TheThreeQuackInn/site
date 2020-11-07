import {InputType, Field} from '@nestjs/graphql';
import {UserCreateInput} from '@prisma/client';
import {IsEmail, IsNotEmpty, MinLength, IsString} from 'class-validator';

@InputType()
export class RegisterInput {
    @Field(() => String)
    @IsEmail()
    @IsNotEmpty()
    email: UserCreateInput['email'];

    @Field(() => String)
    @IsString()
    @MinLength(8)
    password: UserCreateInput['password'];

    @Field(() => String)
    @IsString()
    @MinLength(3)
    username: UserCreateInput['username'];
}
