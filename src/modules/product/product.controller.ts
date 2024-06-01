import { Controller, Get, Post, Put, Delete, UseGuards, UsePipes, UseInterceptors } from '@nestjs/common';
import { ProductService } from './product.service';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { LoggingInterceptor } from 'src/interceptors/logging.interceptor';

@Controller('product')
@UseInterceptors(LoggingInterceptor)
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Get()
    @UsePipes(new ValidationPipe())
    getHello(): string {
        return this.productService.getHello();
    }

    @Post()
    postGoodbye(): string {
        return this.productService.postGoodbye();
    }

    @Put()
    putGoodbye(): string {
        return this.productService.putGoodbye();
    }

    @Delete()
    deleteGoodbye(): string {
        return this.productService.deleteGoodbye();
    }
}
