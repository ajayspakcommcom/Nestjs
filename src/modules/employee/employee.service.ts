import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';



@Injectable()
export class EmployeeService {

    constructor(private configService: ConfigService) { }

    getHello(): string {
        return 'Employee Get Hello!';
    }

    postGoodbye(): string {
        return 'Employee Post Hello!';
    }

    putGoodbye(): string {
        return 'Employee Put Hello!';
    }

    deleteGoodbye(): string {
        return 'Employee Delete Hello!';
    }

    getDatabaseUrl(): string {
        return this.configService.get<string>('DB_URI');
    }


}


