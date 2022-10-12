import { ClientsModule, Transport } from '@nestjs/microservices';
import { Module, Logger } from '@nestjs/common';
import {
  PrometheusModule,
  makeCounterProvider,
} from '@willsoto/nestjs-prometheus';
import { MainReceiverController } from '../controller/main-receiver.controller';
import { MainReceiverService } from '../services/main-receiver.service';
import { join } from 'path';
import { MainReceiverGrpcClientController } from '../grpc-client/main-receiver-grpc.controller';

@Module({
  imports: [
    PrometheusModule.register(),
    ClientsModule.register([
      {
        name: 'FIRSTCONSUMER_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'first_consumer:50051',
          package: 'firstConsumer',
          protoPath: join(__dirname, '../proto/first-consumer.proto'),
        },
      },
    ]),
  ],
  controllers: [MainReceiverController, MainReceiverGrpcClientController],
  providers: [
    MainReceiverService,
    Logger,
    makeCounterProvider({
      name: 'metric_mainreceiver',
      help: 'metrica de teste do projeto main-receiver',
      labelNames: ['domain', 'status'],
    }),
  ],
})
export class MainReceiverModule {}
