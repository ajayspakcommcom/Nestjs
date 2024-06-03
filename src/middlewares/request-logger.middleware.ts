// request-logger.middleware.ts

import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class RequestLoggerMiddleware implements NestMiddleware {
    // private readonly logger = new Logger('HTTP');
    private readonly logger = new Logger(RequestLoggerMiddleware.name);

    use(req: Request, res: Response, next: NextFunction) {

        const { method, originalUrl, ip, headers } = req;
        const userAgent = headers['user-agent'] || '';

        res.on('finish', () => {
            const { statusCode } = res;
            const contentLength = res.get('content-length');
            this.logger.log(`${method} ${originalUrl} ${statusCode} ${contentLength} - ${ip} - ${userAgent}`);
        });

        next();
    }
}
