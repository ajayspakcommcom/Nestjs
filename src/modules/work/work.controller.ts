import { Controller, Get, Post, Put, Delete, Param, Body, Req, Res, UsePipes, Query } from '@nestjs/common';
import { Request, Response } from 'express';
import { WorkService } from './work.service';
import { UppercasePipe } from 'src/pipes/uppercase.pipe';
import { ParseIntPipe } from 'src/pipes/parse-int.pipe';

@Controller('work')
export class WorkController {

    constructor(private readonly workService: WorkService) { }

    @Get()
    findAll(@Req() req: Request, @Res() res: Response): void {
        res.json({ message: 'This action returns all works', error: null, status: 'success' });
    }

    @Get(':id')
    findOne(@Req() req: Request, @Res() res: Response, @Param('id') id: string): void {
        res.json({ message: `This action returns work #${id}`, error: null, status: 'success' });
    }

    @Post()
    postGoodbye(@Req() req: Request, @Res() res: Response, @Body() work: any): void {
        res.json({ message: `This action returns work #${JSON.stringify(work)}`, error: null, status: 'success' });
    }

    @Put(':id')
    putGoodbye(@Req() req: Request, @Res() res: Response, @Param('id') id: string): void {
        res.json({ message: `This action returns work #${JSON.stringify(id)}`, error: null, status: 'success' });
    }

    @Delete(':id')
    deleteGoodbye(@Req() req: Request, @Res() res: Response, @Param('id') id: string): void {
        res.json({ message: `This action returns work #${JSON.stringify(id)}`, error: null, status: 'success' });
    }

    @Post('uppercase') //http://localhost:3000/work/uppercase
    @UsePipes(new UppercasePipe())
    transformToUppercase(@Body('text') text: string) {
        console.clear();
        console.log(text);
        return { result: text };
    }

    @Get('double')
    @UsePipes(new ParseIntPipe())
    double(@Query('value') value: number) {
        return { result: value * 2 };
    }

}
