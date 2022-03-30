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
            
            console.log(user);
            new this.userModel(user).save();
            return {msg:'Usuário criado com sucesso!'};
            
        } catch (error) {

            console.log(error);
            return {msg:'Erro ao criar usuário'};
            
        }
        
    }

    async login(user: Users) {

        try {

            const userData = await this.userModel.findOne({
                email: user.email,
                password: user.senha
            }).exec();

            if(userData && userData._id) {
                const payload = {
                    email: userData.email,
                    name: userData.name
                }

                return userData;
                //     // access_token: this.jwtService.sign(payload)
                    
                // };
            }

            throw 'Erro'
            
        } catch (error) {

            return {msg:'e-mail e/ou senha inválido(s)'}
            
        }
    }

    async listAll(filter: any) {
        try {

            const limit = 50;
            const skip = limit * ((filter.page ? filter.page : 1)- 1);
            const lista = await this.userModel.find({
                name: {$regex: filter.name ? filter.name : ''},
                email: {$regex: filter.email ? filter.email : ''},
                telefone: {$regex: filter.telefone ? filter.telefone : ''},
                cpf: {$regex: filter.cpf ? filter.cpf : ''},
                name_mae: {$regex: filter.name_mae ? filter.name_mae : ''},
                // status: {$regex: filter.status ? filter.status : ''},
                data_nasc: {$regex: filter.data_nasc ? filter.data_nasc : ''},
                data_add: (filter.data_add ? filter.data_add : {$exists: true}),
                data_edit: (filter.data_edit ? filter.data_edit : {$exists: true}),
            }).skip(skip).limit(limit).exec();
            
            return lista;
                       
        } catch (error) {

            console.log(error);
            return {msg:'Falha ao consultar Lista de Usuários!'};
            
        }
    }

    async listOne(id: string) {
        try {

            const classe = await this.userModel.findById(id).exec();            
            return classe; 
            
        } catch (error) {

            console.log(error);
            return 'Não foi possivel encontrar o Usuário selecionado!';
            
        }   
    }

    async buscaEmail(user: Users) {
        try {

            const email = await this.userModel.findOne( {
                email: user.email,
            }).exec();
            return email;
        } catch (error) {

            console.log(error);
            return 'e-mail Não Cadastrado'
        }
    }

    update(id: string, users: Users) {
        try {

            this.userModel.findByIdAndUpdate(id, users).exec(); 
            return 'Dados alterados com sucesso!'
            
        } catch (error) {

            console.log(error);
            return 'Não foi possivel modificar os dados do Usuário selecionada!';
            
        }   
    }
}
