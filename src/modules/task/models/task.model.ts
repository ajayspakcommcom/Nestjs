import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type TaskDocument = Task & Document;

@Schema()
export class Task {
    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop({ default: false })
    done: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);