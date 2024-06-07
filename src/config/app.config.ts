
// app.config.ts
export default {
    port: process.env.PORT || 3000, // Default port is 3000 if not provided in environment
    database: {
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT, 10) || 27017, // Default MongoDB port is 27017
        username: process.env.DB_USERNAME || 'admin',
        password: process.env.DB_PASSWORD || 'password',
        database: process.env.DB_DATABASE || 'my_database'
    },
    // other configuration options
};


// // user.service.ts

// import { Injectable } from '@nestjs/common';
// import { MongoClient } from 'mongodb';
// import appConfig from './app.config';

// @Injectable()
// export class UserService {
//     private client: MongoClient;
//     private readonly uri: string;

//     constructor() {
//         this.uri = `mongodb://${appConfig.database.host}:${appConfig.database.port}`;
//     }

//     async connect() {
//         try {
//             this.client = new MongoClient(this.uri, {
//                 useNewUrlParser: true,
//                 useUnifiedTopology: true,
//                 auth: {
//                     user: appConfig.database.username,
//                     password: appConfig.database.password
//                 }
//             });
//             await this.client.connect();
//             console.log('Connected to the database');
//         } catch (err) {
//             console.error('Error connecting to the database:', err);
//         }
//     }

//     async addUser(user) {
//   //   Add user to the database using this.client
//     }
// //     Other methods for interacting with the database
// }