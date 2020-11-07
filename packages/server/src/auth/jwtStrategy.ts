import {Strategy, ExtractJwt} from 'passport-jwt';
import {PassportStrategy} from '@nestjs/passport';
import {User} from '@prisma/client';
import {Injectable, UnauthorizedException} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import {JwtDto} from './dto/jwt.dto';
import {PrismaService} from 'src/prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly prismaService: PrismaService, readonly configService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: configService.get<string>('JWT_SECRET'),
        });
    }

    /**
     * Check if a user exists with this ID
     */
    async validate(payload: JwtDto): Promise<User> {
        const user = await this.prismaService.user.findOne({where: {id: payload.userId}});
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}
