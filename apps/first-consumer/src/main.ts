import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { FirstConsumerModule } from './module/first-consumer.module';

async function bootstrap() {
  const app = await NestFactory.create(FirstConsumerModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      url: '0.0.0.0:50051',
      package: 'firstConsumer',
      protoPath: join(__dirname, './proto/first-consumer.proto'),
    },
  });

  await app.startAllMicroservices();
  await app.listen(3001);
}
bootstrap();
