import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {PrismaService} from './prisma/prisma.service';
import {UserService} from './user/user.service';
import {GraphQLModule} from '@nestjs/graphql';
import {UserModule} from './user/user.module';

@Module({
    imports: [
        GraphQLModule.forRoot({
            sortSchema: true,
            autoSchemaFile: process.cwd() + 'src/schema.gql',
            playground: {
                env: process.env,
            },
        }),
        UserModule,
    ],
    controllers: [AppController],
    providers: [AppService, PrismaService, UserService],
})
export class AppModule {}
