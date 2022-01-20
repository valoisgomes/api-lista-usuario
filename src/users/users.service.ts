import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from './users.schema';

@Injectable()
export class UsersService {

    constructor(
        @InjectModel(Users.name) private userModel: Model<Users>,
    ) {

    }

    createUser(user: Users) {
        try {
            
            new this.userModel(user).save();
            return 'Usuário criado com sucesso!';
            
        } catch (error) {

            console.log(error);
            return 'Erro ao criar usuário';
            
        }
        
    }
}
