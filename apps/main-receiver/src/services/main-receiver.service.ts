import { Injectable } from '@nestjs/common';
import {
  DeleteMainReceiverDTO,
  PostMainReceiverDTO,
  PutMainReceiverDTO,
} from './../dto/main-receiver.dto';
import { MainReceiverFactory } from './../factory/main-receiver.factory';
import { Counter } from 'prom-client';
import { InjectMetric } from '@willsoto/nestjs-prometheus';

@Injectable()
export class MainReceiverService {
  constructor(
    @InjectMetric('metric_mainreceiver') public counter: Counter<string>,
  ) {}

  async getById(id: string): Promise<string> {
    const factory = new MainReceiverFactory();
    const mainReceiver = factory.create();
    this.counter.labels('teste', '12345').inc();
    return await mainReceiver.getById(id);
  }

  async getAll(): Promise<string> {
    const factory = new MainReceiverFactory();
    const mainReceiver = factory.create();

    return await mainReceiver.getAll();
  }

  async update(mainReceiverData: PutMainReceiverDTO): Promise<string> {
    const factory = new MainReceiverFactory();
    const mainReceiver = factory.create();

    return await mainReceiver.update(mainReceiverData);
  }

  async create(mainReceiverData: PostMainReceiverDTO): Promise<string> {
    const factory = new MainReceiverFactory();
    const mainReceiver = factory.create();

    return await mainReceiver.create(mainReceiverData);
  }

  async delete(mainReceiverData: DeleteMainReceiverDTO): Promise<string> {
    const factory = new MainReceiverFactory();
    const mainReceiver = factory.create();

    return await mainReceiver.delete(mainReceiverData);
  }
}
