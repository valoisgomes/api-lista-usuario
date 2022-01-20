import { CommentsService } from './comments/comments.service';
import { Comments } from './comments/comments.schema';
import { Classes } from './classes.schema';
import { ClassesService } from './classes.service';
import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/guards/jwt.guard';

@Controller('classes')
export class ClassesController {

    constructor(
        private classesService: ClassesService,
        private commentesService: CommentsService
    ){

    }

    @Post('/comments')
    @UseGuards(JwtGuard)
    createComment(@Body() comment: Comments) {
        return this.commentesService.createComment(comment);
    }
    @Get('/:id/comments')
    @UseGuards(JwtGuard)
    listByClass(@Param('id') id_classe: string, @Query() query) {
        return this.commentesService.listByClass(id_classe, query);
    }

    @Delete('/comments/:id')
    @UseGuards(JwtGuard)
    deleteComment(@Param('id') id: string) {
        return this.commentesService.delete(id);
    }

    @Post()
    @UseGuards(JwtGuard)
    createClasse(@Body() classe: Classes) {
        return this.classesService.createClasse(classe);
    }

    @Get()
    @UseGuards(JwtGuard)
    listAll(@Query() query) {
        return this.classesService.listAll(query);
    }


    @Get(':id')
    @UseGuards(JwtGuard)
    listOne(@Param('id') id: string) {
        return this.classesService.listOne(id);
    }

    @Delete(':id')
    @UseGuards(JwtGuard)
    delete(@Param('id') id: string) {
        return this.classesService.delete(id);
    }

    @Put(':id')
    @UseGuards(JwtGuard)
    update(@Param('id') id: string, @Body() classe: Classes) {
        return this.classesService.update(id, classe);
    }
}
