import { Controller, Get } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('create_order')
  handleProcessOrder(@Payload() order: any) {
    console.log('order', order);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
