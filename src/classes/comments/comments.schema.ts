import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema, Types } from "mongoose";

@Schema({
    timestamps: {
        createdAt: 'date_created'
    }
})
export class Comments extends Document{
    
    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Classes' })
    id_classe: Types.ObjectId;
    
    @Prop()
    comment: string;

    @Prop()
    date_created: Date;
    
}

export const CommentsSchema = SchemaFactory.createForClass(Comments);