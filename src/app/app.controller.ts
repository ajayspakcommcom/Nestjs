import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  postGoodbye(): string {
    return this.appService.postGoodbye();
  }

  @Put()
  putGoodbye(): string {
    return this.appService.putGoodbye();
  }

  @Delete()
  deleteGoodbye(): string {
    return this.appService.deleteGoodbye();
  }

}
