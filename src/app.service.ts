import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  hello = 'É nóis mulekotiiii!'

  getHello(): string {
    return this.hello;
  }
}
