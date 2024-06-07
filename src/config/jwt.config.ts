// jwt.config.ts

export default {
    secretKey: process.env.JWT_SECRET || 'your_secret_key_here', // Secret key for JWT signing
    expiresIn: process.env.JWT_EXPIRES_IN || '1d' // Expiration time for JWT tokens
};





// // auth.service.ts
// import { Injectable } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
// import jwtConfig from './jwt.config';

// @Injectable()
// export class AuthService {
//     constructor(private readonly jwtService: JwtService) { }

//     generateToken(payload: any): string {
//         return this.jwtService.sign(payload, { secret: jwtConfig.secretKey, expiresIn: jwtConfig.expiresIn });
//     }

//     verifyToken(token: string): any {
//         try {
//             return this.jwtService.verify(token, { secret: jwtConfig.secretKey });
//         } catch (error) {
//             throw new Error('Invalid token');
//         }
//     }
// }