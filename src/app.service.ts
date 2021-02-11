import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  coucou(): string {
    return 'Hello World!';
  }
}
