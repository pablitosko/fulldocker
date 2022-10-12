import { Logger, Module } from '@nestjs/common';
import { FirstConsumerController } from '../controller/first-consumer.controller';
import { FirstConsumerService } from '../services/first-consumer.service';
import {
  PrometheusModule,
  makeCounterProvider,
} from '@willsoto/nestjs-prometheus';
import { FirstConsumerGrpcServerController } from '../grpc-server/first-consumer-grpc.controller';

@Module({
  imports: [PrometheusModule.register()],
  controllers: [FirstConsumerController, FirstConsumerGrpcServerController],
  providers: [
    FirstConsumerService,
    Logger,
    makeCounterProvider({
      name: 'metric_firstconsumer',
      help: 'metrica de teste do projeto first-consumer',
      labelNames: ['domain', 'status'],
    }),
  ],
})
export class FirstConsumerModule {}
