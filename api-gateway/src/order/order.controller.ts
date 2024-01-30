import { Body, Controller, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto): Observable<any> {
    return this.orderService.createOrder(createOrderDto);
  }
}
