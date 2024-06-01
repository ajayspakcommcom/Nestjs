import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from './models/task.model';

@Injectable()
export class TaskService {

    constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) { }

    async findAll(): Promise<Task[]> {
        return this.taskModel.find().exec();
    }

    async findById(id: string): Promise<Task> {
        const task = await this.taskModel.findById(id).exec();
        if (!task) {
            throw new NotFoundException(`Task with id ${id} not found`);
        }
        return task;
    }

    async create(task: Task): Promise<Task> {
        const newTask = new this.taskModel(task);
        return newTask.save();
    }

    async update(id: string, updatedTask: Task): Promise<TaskDocument> {
        const updated = await this.taskModel.findByIdAndUpdate(id, updatedTask, { new: true }).exec();

        if (!updated) {
            throw new NotFoundException(`Task with id ${id} not found`);
        }

        return updated;
    }

    async delete(id: string): Promise<Task> {
        const deletedTask = await this.findById(id);
        await this.taskModel.findOneAndDelete({ _id: id }).exec();
        return deletedTask;
    }
}
