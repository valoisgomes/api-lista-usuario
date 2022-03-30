import { Users } from './users.schema';
import { UsersService } from './users.service';
import { Body, Controller, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/guards/jwt.guard';

@Controller('users')
export class UsersController {

    constructor(
        private usersService: UsersService,
    ){

    }

    @Post('/update')
    createUser(@Body() users: Users) {
        return this.usersService.createUser(users);
    }

    @Get()
    // @UseGuards(JwtGuard)
    listAll(@Query() query) {
        return this.usersService.listAll(query);
    }


    @Get(':id')
    // @UseGuards(JwtGuard)
    listOne(@Param('id') id: string) {
        return this.usersService.listOne(id);
    }

    @Post('/login')
    login(@Body() user: Users) {
        return this.usersService.login(user);
    }

    @Put(':id')
    // @UseGuards(JwtGuard)
    update(@Param('id') id: string, @Body() user: Users) {
        return this.usersService.update(id, user);
    }
}
