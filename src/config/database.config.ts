// database.config.ts

export default {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT, 10) || 27017,
    username: process.env.DB_USERNAME || 'admin',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_DATABASE || 'my_database'
};


// // database.service.ts
// import { Injectable } from '@nestjs/common';
// import { MongoClient } from 'mongodb';
// import databaseConfig from './database.config';

// @Injectable()
// export class DatabaseService {
//     private client: MongoClient;
//     private readonly uri: string;

//     constructor() {
//         this.uri = `mongodb://${databaseConfig.host}:${databaseConfig.port}`;
//     }

//     async connect() {
//         try {
//             this.client = new MongoClient(this.uri, {
//                 useNewUrlParser: true,
//                 useUnifiedTopology: true,
//                 auth: {
//                     user: databaseConfig.username,
//                     password: databaseConfig.password
//                 }
//             });
//             await this.client.connect();
//             console.log('Connected to the database');
//         } catch (err) {
//             console.error('Error connecting to the database:', err);
//         }
//     }

//     async disconnect() {
//         if (this.client) {
//             await this.client.close();
//             console.log('Disconnected from the database');
//         }
//     }

//     getClient() {
//         return this.client;
//     }
// }