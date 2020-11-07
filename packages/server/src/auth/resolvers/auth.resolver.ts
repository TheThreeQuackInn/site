import {Args, Mutation, Resolver} from '@nestjs/graphql';
import {Token} from 'src/shared/models/token.model';
import {RegisterInput} from '../dto/register.input';
import {Auth} from '../models/auth.model';
import {AuthService} from '../services/auth.service';

@Resolver(() => Auth)
export class AuthResolver {
    constructor(private readonly authService: AuthService) {}

    /**
     * Create a user
     */
    @Mutation(() => Token)
    async register(@Args({name: 'data'}) args: RegisterInput): Promise<Token> {
        return this.authService.register(args);
    }
}
