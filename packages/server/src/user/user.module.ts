import {Module} from '@nestjs/common';
import {PrismaService} from 'src/prisma/prisma.service';
import {PasswordService} from 'src/shared/services/password/password.service';
import {UserResolver} from './resolvers/user.resolver';

@Module({
    providers: [UserResolver, PasswordService, PrismaService],
})
export class UserModule {}
