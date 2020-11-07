import {Module} from '@nestjs/common';
import {JwtModule} from '@nestjs/jwt';
import {PassportModule} from '@nestjs/passport';
import {PrismaService} from 'src/prisma/prisma.service';
import {GQLAuthGuard} from 'src/shared/guards/auth.guard';
import {PasswordService} from 'src/shared/services/password/password.service';
import {ConfigService} from '@nestjs/config';
import {AuthService} from './services/auth.service';
import {JwtStrategy} from './jwtStrategy';
import {AuthResolver} from './resolvers/auth.resolver';

@Module({
    imports: [
        PassportModule.register({defaultStrategy: 'jwt'}),
        JwtModule.registerAsync({
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get<string>('JWT_SECRET'),
            }),
        }),
    ],
    providers: [GQLAuthGuard, AuthService, AuthResolver, PasswordService, PrismaService, JwtStrategy],
    exports: [GQLAuthGuard],
})
export class AuthModule {}
