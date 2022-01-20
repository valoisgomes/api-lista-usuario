import { Users } from './users.schema';
import { UsersService } from './users.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {

    constructor(
        private usersService: UsersService,
    ){

    }

    // @Post()
    // createUser(@Body() users: Users) {
    //     return this.usersService.createUser(users);
    // }

    @Post()
    login(@Body() user: Users) {
        return this.usersService.login(user);
    }
}
