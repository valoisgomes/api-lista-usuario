import { Comments } from './comments/comments.schema';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";

@Schema({
    timestamps: {
        createdAt: 'date_created', 
        updatedAt: 'date_updated'
    }
})
export class Classes extends Document{
    
    @Prop()
    name: string;
    
    @Prop()
    description: string;
    
    @Prop()
    video: string;
    
    @Prop()
    data_init: Date;
    
    @Prop()
    data_end: Date;
    
    @Prop()
    total_comments: number;

    @Prop({ type: [{type: MongooseSchema.Types.ObjectId, ref: 'Comments' }]})
    comments:  Comments[]
}

export const ClassesSchema = SchemaFactory.createForClass(Classes);