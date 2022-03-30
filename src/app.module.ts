import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { JwtStrategy } from './guards/jwt.strategy';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from './users/users.module';

const DB_USER = 'admin'
const DB_PASSWORD = encodeURIComponent('@123')

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.6etmd.mongodb.net/dbApiListUsers?retryWrites=true&w=majority`),
    JwtModule.register({
      secret: 'LIST_USERS',
      signOptions: {
        expiresIn: 86400
      }
    }),
    ],
  controllers: [AppController, UsersController],
  providers: [AppService, JwtStrategy, UsersService],
  
})
export class AppModule {}
