// order/order.service.ts
import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  constructor(@Inject('ORDER_SERVICE') private readonly client: ClientKafka) {}

  async onModuleInit() {
    // Need to subscribe to topic
    // so that we can get the response from kafka microservice
    this.client.subscribeToResponseOf('create_order');
    await this.client.connect();
  }

  createOrder(createOrderDto: CreateOrderDto): Observable<any> {
    return this.client.emit('create_order', createOrderDto);
  }
}
