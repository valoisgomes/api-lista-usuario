import { CommentsService } from './comments/comments.service';
import { Classes, ClassesSchema } from './classes.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ClassesController } from './classes.controller';
import { ClassesService } from './classes.service';
import { CommentsModule } from './comments/comments.module';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: Classes.name,
            schema: ClassesSchema
        }]),
        CommentsModule
    ],
    exports: [
        MongooseModule.forFeature([{
            name: Classes.name,
            schema: ClassesSchema
        }])
    ],
    controllers: [ClassesController],
    providers: [ClassesService, CommentsService]
})
export class ClassesModule {}
