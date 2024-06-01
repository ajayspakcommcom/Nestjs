import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

    getHello(): string {
        return 'User Get Hello!';
    }

    postGoodbye(): string {
        return 'User Post Hello!';
    }

    putGoodbye(): string {
        return 'User Put Hello!';
    }

    deleteGoodbye(): string {
        return 'User Delete Hello!';
    }

}


