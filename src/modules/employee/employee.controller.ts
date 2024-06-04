import { Controller, Get, Post, Put, Delete, UsePipes, UseGuards } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('employee')
@UseGuards(AuthGuard)
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService) { }

    @Get()
    @UsePipes(new ValidationPipe())
    getHello(): string {
        console.log(this.employeeService.getDatabaseUrl());
        return this.employeeService.getHello();
    }

    @Post()
    postGoodbye(): string {
        return this.employeeService.postGoodbye();
    }

    @Put()
    putGoodbye(): string {
        return this.employeeService.putGoodbye();
    }

    @Delete()
    deleteGoodbye(): string {
        return this.employeeService.deleteGoodbye();
    }
}
