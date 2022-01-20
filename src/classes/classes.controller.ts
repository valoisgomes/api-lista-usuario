import { CommentsService } from './comments/comments.service';
import { Comments } from './comments/comments.schema';
import { Classes } from './classes.schema';
import { ClassesService } from './classes.service';
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('classes')
export class ClassesController {

    constructor(
        private classesService: ClassesService,
        private commentesService: CommentsService
    ){

    }

    @Post('/comments')
    createComment(@Body() comment: Comments) {
        return this.commentesService.createComment(comment);
    }
    @Get('/:id/comments')
    listByClass(@Param('id') id_classe: string, @Query() query) {
        return this.commentesService.listByClass(id_classe, query);
    }

    @Delete('/comments/:id')
    deleteComment(@Param('id') id: string) {
        return this.commentesService.delete(id);
    }

    @Post()
    createClasse(@Body() classe: Classes) {
        return this.classesService.createClasse(classe);
    }

    @Get()
    listAll(@Query() query) {
        return this.classesService.listAll(query);
    }


    @Get(':id')
    listOne(@Param('id') id: string) {
        return this.classesService.listOne(id);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.classesService.delete(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() classe: Classes) {
        return this.classesService.update(id, classe);
    }
}
