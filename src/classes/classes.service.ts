import { Classes } from './classes.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comments } from './comments/comments.schema';

@Injectable()
export class ClassesService {

    constructor(
        @InjectModel(Classes.name) private classesModel: Model<Classes>,
        @InjectModel(Comments.name) private commentsModel: Model<Comments>
    ) {

    }

    createClasse(classe: Classes) {
        try {
            
            new this.classesModel(classe).save();
            return 'Aula Cadastrada com sucesso!';
            
        } catch (error) {

            console.log(error);
            return 'Erro ao cadastrar aula';
            
        }
        
    }

    async listAll(filter: any) {
        try {

            const limit = 50;
            const skip = limit * (filter.page - 1);
            const lista = await this.classesModel.find({
                name: {$regex: filter.name ? filter.name : ''},
                description: {$regex: filter.description ? filter.description : ''},
                data_init: (filter.data_init ? filter.data_init : {$exists: true}),
                data_end: (filter.data_end ? filter.data_end : {$exists: true}),
            }).skip(skip).limit(limit).exec();
            
            for(let classe of lista) {
                classe.comments = await this.commentsModel.find({id_classe: classe._id}).sort({date_created: -1}).limit(1).exec();
            }
            return lista;
                       
        } catch (error) {

            console.log(error);
            return 'Falha ao consultar Lista de Aulas cadastradas!';
            
        }
    }

    async listOne(id: string) {
        try {

            const classe = await this.classesModel.findById(id).exec();
            
            classe.comments = await this.commentsModel.find({id_classe: classe._id}).sort({date_created: -1}).limit(3).exec();
            return classe; 
            
        } catch (error) {

            console.log(error);
            return 'Não foi possivel encontrar a aula selecionada!';
            
        }   
    }

    delete(id: string) {
        try {

            this.classesModel.findOneAndRemove({_id: id}).exec(); 
            return 'Dados excluídos com sucesso!'
            
        } catch (error) {

            console.log(error);
            return 'Não foi possivel excluir a aula selecionada!';
            
        }   
    }

    update(id: string, classe: Classes) {
        try {

            this.classesModel.findByIdAndUpdate(id, classe).exec(); 
            return 'Dados alterados com sucesso!'
            
        } catch (error) {

            console.log(error);
            return 'Não foi possivel modificar os dados da aula selecionada!';
            
        }   
    }
}
