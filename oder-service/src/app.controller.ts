import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @EventPattern('create_order')
  // handleProcessOrder(@Payload() order: any) {
  //   console.log('order', order);
  //   return order;
  // }

  @MessagePattern('create_order')
  handleProcessOrder(@Payload() createOrderDto: any) {
    console.log('Received createOrderDto:', createOrderDto);
    try {
      console.log('Order processed successfully');
      return { status: 'success', data: 'Order Created Successfully' };
    } catch (error) {
      console.error('Error processing order:', error);
      return { status: 'error', data: error.message };
    }
  }
}
