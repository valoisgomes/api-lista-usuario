import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Comments, CommentsSchema } from './comments.schema';
import { Classes, ClassesSchema } from '../classes.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: Comments.name,
            schema: CommentsSchema
        }]),
        MongooseModule.forFeature([{
            name: Classes.name,
            schema: ClassesSchema
        }]),
    ],
    exports: [
        MongooseModule.forFeature([{
            name: Comments.name,
            schema: CommentsSchema
        }])
    ],
  providers: [CommentsService],
  controllers: []
})
export class CommentsModule {}
