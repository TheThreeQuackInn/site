import {BadRequestException, ConflictException, Injectable} from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
import {PrismaClientKnownRequestError} from '@prisma/client';
import {PrismaService} from 'src/prisma/prisma.service';
import {Token} from 'src/shared/models/token.model';
import {PasswordService} from 'src/shared/services/password/password.service';
import {RegisterInput} from '../dto/register.input';

@Injectable()
export class AuthService {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly passwordService: PasswordService,
        private readonly jwtService: JwtService,
    ) {}

    /**
     * Log a user in
     */
    async login(email: string, password: string): Promise<Token> {
        const user = await this.prismaService.user.findOne({where: {email}});

        if (!user) {
            throw new BadRequestException('Email or password invalid');
        }

        const passwordValid = await this.passwordService.validatePassword(password, user.password);

        if (!passwordValid) {
            throw new BadRequestException('Email or password invalid');
        }

        return this.generateToken({userId: user.id});
    }

    /**
     * Create user and generate token
     */
    async register(args: RegisterInput) {
        const {email, password, username} = args;
        const pass = await this.passwordService.hashPassword(password);

        try {
            const user = await this.prismaService.user.create({
                data: {
                    email,
                    password: pass,
                    username,
                },
            });

            return this.generateToken({userId: user.id});
        } catch (err) {
            if (err instanceof PrismaClientKnownRequestError && err.code === 'P2002') {
                throw new ConflictException('A user with this email already exists.');
            } else {
                throw new Error(err);
            }
        }
    }

    /**
     * Get user from JWT context token
     */
    async getUserFromJwtToken(token: string) {
        const id = this.jwtService.decode(token)['userId'];
        return this.prismaService.user.findOne({where: {id}});
    }

    /**
     * Generate JWT Token based on userId
     * TODO: generate refresh token
     */
    generateToken(payload: {userId: string}) {
        const accessToken = this.jwtService.sign(payload);
        return {accessToken};
    }

    /**
     * Check if userID exists
     */
    async validateUser(userId: string) {
        return this.prismaService.user.findOne({where: {id: userId}});
    }
}
