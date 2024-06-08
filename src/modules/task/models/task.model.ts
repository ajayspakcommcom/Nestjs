import { Document, Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type TaskDocument = Task & Document;

@Schema()
export class Task extends Document {
    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop({ default: false })
    done: boolean;

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Profile' }) // Define a one-to-one relationship with Profile
    profile: MongooseSchema.Types.ObjectId; // Reference to Profile document
}

export const TaskSchema = SchemaFactory.createForClass(Task);


// import { Document } from 'mongoose';
// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

// @Schema()
// export class Profile extends Document {
//     @Prop()
//     fullName: string;

//     @Prop()
//     bio: string;

//     @Prop({ type: String, unique: true }) // Assuming username is unique
//     username: string;

//     @Prop({ type: String, unique: true }) // Assuming email is unique
//     email: string;
// }

// export const ProfileSchema = SchemaFactory.createForClass(Profile);