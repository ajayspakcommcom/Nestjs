
// This is older option we can define the schema

import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
    title: String,
    description: String,
    done: Boolean,
});