import {join} from 'path';
import {Module} from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {GraphQLModule} from '@nestjs/graphql';
import {AuthModule} from 'src/auth/auth.module';
import {UserModule} from 'src/user/user.module';

@Module({
    imports: [
        ConfigModule.forRoot({isGlobal: true}),
        GraphQLModule.forRootAsync({
            useFactory: async () => ({
                autoSchemaFile: join(process.cwd(), 'graphql/schema.gql'),
                playground: true,
                sortSchema: true,
                cors: {
                    credentials: true,
                    origin: true,
                },
            }),
            inject: [ConfigService],
        }),
        AuthModule,
        UserModule,
    ],
    providers: [],
})
export class AppModule {}
