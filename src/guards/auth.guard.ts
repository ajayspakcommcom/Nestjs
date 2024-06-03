// auth.guard.ts

import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {

        const request = context.switchToHttp().getRequest();

        // Check if the request contains authentication logic, such as checking headers, cookies, etc.
        if (!request.headers.authorization) {
            return false; // If authentication information is not found, deny access
        }

        // Implement your authentication logic here.
        // For example, you could verify a token, check if the user exists in the database, etc.

        // For the sake of this example, let's assume a simple check for a token in the Authorization header.
        const authToken = request.headers.authorization.replace('Bearer', '');
        const isValidToken = String(authToken).trim() === 'valid_token';

        return isValidToken;
    }
}
