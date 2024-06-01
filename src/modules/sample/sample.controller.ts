import { Controller, Get, Post, Put, Delete, UseFilters, UseGuards } from '@nestjs/common';
import { CustomExceptionFilter } from 'src/filters/custom-exception.filter';
import { SampleService } from './sample.service';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('sample')
@UseGuards(AuthGuard)
@UseFilters(new CustomExceptionFilter())
export class SampleController {
    constructor(private readonly sampleService: SampleService) { }

    @Get()
    getHello(): string {
        return this.sampleService.getHello();
    }

    @Post()
    postGoodbye(): string {
        return this.sampleService.postGoodbye();
    }

    @Put()
    putGoodbye(): string {
        return this.sampleService.putGoodbye();
    }

    @Delete()
    deleteGoodbye(): string {
        return this.sampleService.deleteGoodbye();
    }
}
