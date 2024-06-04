import { Injectable } from '@nestjs/common';

@Injectable()
export class SampleService {

    getHello(): string {
        return 'Sample Get Hello!';
    }

    postGoodbye(): string {
        return 'Sample Post Hello!';
    }

    putGoodbye(): string {
        return 'Sample Put Hello!';
    }

    deleteGoodbye(): string {
        return 'Sample Delete Hello!';
    }

}



