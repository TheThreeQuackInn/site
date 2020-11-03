import {join} from 'path';
import {Module} from '@nestjs/common';
import {PrismaService} from '../prisma/prisma.service';
import {AppService} from './app.service';
import {GraphQLModule} from '@nestjs/graphql';
import {UserResolver} from '../user/user.resolver';

@Module({
    imports: [
        GraphQLModule.forRoot({
            autoSchemaFile: join(process.cwd(), 'src/graphql/schema.gql'),
            playground: true,
        }),
    ],
    providers: [AppService, PrismaService, UserResolver],
})
export class AppModule {}
