import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { timeStamp } from "console";
import { Document, Schema as MongooseSchema, Types } from "mongoose";

@Schema({timestamps: true})
export class Users extends Document{
    
    @Prop()
    name: string;
    
    @Prop()
    email: string;

    @Prop()
    senha: string;

    @Prop()
    telefone: String;
    
    @Prop()
    cpf: String;

    @Prop()
    nascimento: Date;

    @Prop()
    nomeMae: String;

    @Prop()
    status: boolean;

    
}

export const UsersSchema = SchemaFactory.createForClass(Users);