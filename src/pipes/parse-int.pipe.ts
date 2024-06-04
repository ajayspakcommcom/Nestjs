// parse-int.pipe.ts
import { Injectable, PipeTransform, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform<string, number> {
    transform(value: string): number {
        const parsedValue = parseInt(value, 10);
        if (isNaN(parsedValue)) {
            throw new BadRequestException('Invalid integer value');
        }
        return parsedValue;
    }
}
