import { CommentsModule } from './classes/comments/comments.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { ClassesModule } from './classes/classes.module';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from './users/users.module';

const DB_USER = 'admin'
const DB_PASSWORD = encodeURIComponent('@123')

@Module({
  imports: [
    CommentsModule,
    ClassesModule,
    UsersModule,
    MongooseModule.forRoot(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.6etmd.mongodb.net/bancoApiAula?retryWrites=true&w=majority`),
    JwtModule.register({
      secret: 'TIN_DIN',
      signOptions: {
        expiresIn: 86400
      }
    }),
    ],
  controllers: [AppController, UsersController],
  providers: [AppService],
  
})
export class AppModule {}
