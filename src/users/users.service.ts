import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from './users.schema';

@Injectable()
export class UsersService {

    constructor(
        @InjectModel(Users.name) private userModel: Model<Users>,
        private jwtService: JwtService,
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

    async login(user: Users) {

        try {

            const userData = await this.userModel.findOne({
                email: user.email,
                password: user.password
            }).exec();

            if(userData && userData._id) {
                const payload = {
                    email: userData.email,
                    name: userData.name
                }

                return {
                    access_token: this.jwtService.sign(payload)
                };
            }

            throw 'Erro'
            
        } catch (error) {

            return 'e-mail e/ou senha inválido(s)'
            
        }
    }
}
