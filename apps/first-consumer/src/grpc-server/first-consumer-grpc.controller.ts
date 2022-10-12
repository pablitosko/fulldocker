import { Metadata, ServerUnaryCall, status } from 'grpc';
import {
  DeleteFirstConsumerDTO,
  PutFirstConsumerDTO,
} from './../dto/first-consumer.dto';
import { PostFirstConsumerDTO } from './../dto/first-consumer.dto';
import { FirstConsumerService } from './../services/first-consumer.service';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class FirstConsumerGrpcServerController {
  constructor(private firstConsumerService: FirstConsumerService) {}

  @GrpcMethod('FirstConsumerService')
  create(data: PostFirstConsumerDTO) {
    const { id } = data;
    console.log(`Chamada recebida com sucesso: create - Id: ${id}!`);
    return this.firstConsumerService.create(data);
  }

  @GrpcMethod('FirstConsumerService')
  update(
    data: { id: PutFirstConsumerDTO },
    metadata: Metadata,
    call: ServerUnaryCall<PutFirstConsumerDTO>,
  ) {
    const { id } = data;
    console.log(`Chamada recebida com sucesso: update - Id: ${id}!`);
    return this.firstConsumerService.update(id);
  }

  @GrpcMethod('FirstConsumerService')
  async getById(data: { id: string }) {
    const { id } = data;
    console.log(`Chamada recebida com sucesso: GetById - Id: ${id}!`);
    const result: string = await this.firstConsumerService.getById(id);
    return await { description: result };
  }

  @GrpcMethod('FirstConsumerService')
  async getAll() {
    console.log(`Chamada recebida com sucesso: getAll!`);
    const result = await this.firstConsumerService.getAll();
    return { data: result };
  }

  @GrpcMethod('FirstConsumerService')
  async remove(id: DeleteFirstConsumerDTO) {
    console.log(`Chamada recebida com sucesso: remove!`);
    return await this.firstConsumerService.remove(id);
  }
}
