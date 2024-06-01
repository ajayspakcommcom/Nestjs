import { Controller, Get, Post, Put, Delete, UseGuards, UsePipes } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from 'src/guards/auth.guard';
import { ValidationPipe } from 'src/pipes/validation.pipe';

@Controller('user')
@UseGuards(AuthGuard)
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    @UsePipes(new ValidationPipe())
    getHello(): string {
        return this.userService.getHello();
    }

    @Post()
    postGoodbye(): string {
        return this.userService.postGoodbye();
    }

    @Put()
    putGoodbye(): string {
        return this.userService.putGoodbye();
    }

    @Delete()
    deleteGoodbye(): string {
        return this.userService.deleteGoodbye();
    }
}
