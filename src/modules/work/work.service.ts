import { BeforeApplicationShutdown, Injectable } from '@nestjs/common';


@Injectable()
export class WorkService {

    getHello(): string {
        return 'Work Get Hello!';
    }

    postGoodbye(): string {
        return 'Work Post Hello!';
    }

    putGoodbye(): string {
        return 'Work Put Hello!';
    }

    deleteGoodbye(): string {
        return 'Work Delete Hello!';
    }

}
