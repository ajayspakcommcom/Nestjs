import { Controller, Get, Post, Put, Delete, Param, Body, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { WorkService } from './work.service';

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
}
