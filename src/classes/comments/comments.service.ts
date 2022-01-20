import { Classes } from './../classes.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Comments } from './comments.schema';
import { Model } from 'mongoose';

@Injectable()
export class CommentsService {
    
    constructor(
        @InjectModel(Comments.name) private commentsModel: Model<Comments>,
        @InjectModel(Classes.name) private classesModel: Model<Classes>
    ) {

    }

    async createComment(comment: Comments) {
        try {
            
            new this.commentsModel(comment).save();

            const list = await this.commentsModel.find({id_classe: comment.id_classe});
            this.classesModel.findByIdAndUpdate(comment.id_classe, {total_comments: list.length}).exec();
            return 'Comentário adicinado com sucesso!';
            
        } catch (error) {

            console.log(error);
            return 'Erro ao adicionar comentário';
            
        }
        
    }

    listByClass(id_classe: string, filter: any) {
        try {

            const limit = 50;
            const skip = limit * (filter.page - 1);
            return this.commentsModel.find({id_classe}).skip(skip).limit(limit).exec(); 
            
        } catch (error) {

            console.log(error);
            return 'Falha ao consultar Lista de comentários!';
            
        }
    }

    delete(id: string) {
        try {

            this.commentsModel.findOneAndRemove({_id: id}).exec(); 
            return 'Comentário excluído com sucesso!'
            
        } catch (error) {

            console.log(error);
            return 'Não foi possivel excluir o comentário!';
            
        }   
    }
}
