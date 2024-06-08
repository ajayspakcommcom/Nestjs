import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getHello(): string {
    return 'Get Hello!';
  }

  postGoodbye(): string {
    return 'Post Hello!';
  }

  putGoodbye(): string {
    return 'Put Hello!';
  }

  deleteGoodbye(): string {
    return 'Delete Hello!';
  }

}
