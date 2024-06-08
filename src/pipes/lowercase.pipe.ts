// uppercase.pipe.ts
import { Injectable, PipeTransform, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class LowercasePipe implements PipeTransform<string, string> {
    transform(value: string, metadata: ArgumentMetadata): string {
        if (!value || value.length < 3) {
            throw new BadRequestException('Input must be at least 3 characters long');
        }
        return value.toLowerCase();
    }
}
