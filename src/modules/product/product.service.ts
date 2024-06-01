import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {

    getHello(): string {
        return 'Product Get Hello!';
    }

    postGoodbye(): string {
        return 'Product Post Hello!';
    }

    putGoodbye(): string {
        return 'Product Put Hello!';
    }

    deleteGoodbye(): string {
        return 'Product Delete Hello!';
    }

}


