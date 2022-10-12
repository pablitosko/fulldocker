import {
  DeleteFirstConsumerDTO,
  PostFirstConsumerDTO,
  PutFirstConsumerDTO,
} from './../dto/first-consumer.dto';
import { FirstConsumerFactory } from './../factory/first-consumer.factory';
import { Injectable } from '@nestjs/common';
import { InjectMetric } from '@willsoto/nestjs-prometheus';
import { Counter } from 'prom-client';

@Injectable()
export class FirstConsumerService {
  constructor(
    @InjectMetric('metric_firstconsumer') public counter: Counter<string>,
  ) {}

  async getById(id: string): Promise<string> {
    const factory = new FirstConsumerFactory();
    const firstConsumer = factory.create();
    this.counter.labels('teste', '12345').inc();
    return await firstConsumer.getById(id);
  }

  async getAll(): Promise<string> {
    const factory = new FirstConsumerFactory();
    const firstConsumer = factory.create();

    return await firstConsumer.getAll();
  }

  async update(firstConsumerData: PutFirstConsumerDTO): Promise<string> {
    const factory = new FirstConsumerFactory();
    const firstConsumer = factory.create();

    return await firstConsumer.update(firstConsumerData);
  }

  async create(firstConsumerData: PostFirstConsumerDTO): Promise<string> {
    const factory = new FirstConsumerFactory();
    const firstConsumer = factory.create();

    return await firstConsumer.create(firstConsumerData);
  }

  async remove(firstConsumerData: DeleteFirstConsumerDTO): Promise<string> {
    const factory = new FirstConsumerFactory();
    const firstConsumer = factory.create();

    return await firstConsumer.remove(firstConsumerData);
  }
}
