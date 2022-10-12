import { NestFactory } from '@nestjs/core';
import { MainReceiverModule } from './module/main-receiver.module';

async function bootstrap() {
  const app = await NestFactory.create(MainReceiverModule);
  await app.listen(3002);
}
bootstrap();
