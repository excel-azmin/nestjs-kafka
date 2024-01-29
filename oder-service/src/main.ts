import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'order-service',
          brokers: ['localhost:9092'],
        },
        producerOnlyMode: true,
        consumer: {
          groupId: 'order-service',
        },
      },
    },
  );
  await app.listen();
}
bootstrap();
