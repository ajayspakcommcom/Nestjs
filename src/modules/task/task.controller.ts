import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './models/task.model';

@Controller('task')
export class TaskController {

    constructor(private readonly taskService: TaskService) { }

    @Get()
    async findAll(): Promise<Task[]> {
        return this.taskService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string): Promise<Task> {
        const task = await this.taskService.findById(id);
        if (!task) {
            throw new NotFoundException(`Task with id ${id} not found`);
        }
        return task;
    }

    @Post()
    async create(@Body() task: Task): Promise<Task> {
        return this.taskService.create(task);
    }


    @Put(':id')
    async update(@Param('id') id: string, @Body() updatedTask: Task): Promise<Task> {
        try {
            return await this.taskService.update(id, updatedTask);
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw error;
            }
            throw new NotFoundException(`Task with id ${id} not found`);
        }
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<Task> {
        try {
            return await this.taskService.delete(id);
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw error;
            }
            throw new NotFoundException(`Task with id ${id} not found`);
        }
    }

}
