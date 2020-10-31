import {Field, HideField, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class User {
    @Field()
    id: string;

    @Field()
    email: string;

    @Field()
    username: string;

    @Field({nullable: true})
    name?: string;

    @HideField()
    password: string;

    @Field()
    createdAt: Date;
}
