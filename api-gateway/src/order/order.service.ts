// order/order.service.ts
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  constructor(@Inject('ORDER_SERVICE') private readonly client: ClientProxy) {}

  createOrder(createOrderDto: CreateOrderDto): Observable<any> {
    return this.client.send('create_order', createOrderDto);
  }
}
