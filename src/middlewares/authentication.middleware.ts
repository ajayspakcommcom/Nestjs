import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AuthService } from 'src/services/auth.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {

    constructor(private readonly authService: AuthService) { }

    async use(req: Request, res: Response, next: NextFunction) {
        // Check if the user is authenticated
        try {
            const { username, password } = req.body;
            const isAuthenticated = this.authService.login(username, password);

            if (!isAuthenticated) {
                throw new UnauthorizedException('Unauthorized access');
            }

            // If the user is authenticated, proceed to the next middleware or route handler
            next();
        } catch (error) {
            next(error);
        }

    }
}
