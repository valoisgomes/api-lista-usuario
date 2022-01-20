import { JwtService } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, UsersSchema } from './users.schema';


@Module({
    imports: [
        MongooseModule.forFeature([{
            name: Users.name,
            schema: UsersSchema
        }]),
    ],
    exports: [
        MongooseModule.forFeature([{
            name: Users.name,
            schema: UsersSchema
        }])
    ],
    controllers: [],
    providers: []
})
export class UsersModule {}
