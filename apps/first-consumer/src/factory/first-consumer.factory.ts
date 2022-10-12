import { Injectable } from '@nestjs/common';
import { IRepository } from '../interface/IRepository.interface';
import { FirstConsumerRepository } from '../repositories/first-consumer.repository';
import { GenericFactory } from './generic.factory';

@Injectable()
export class FirstConsumerFactory extends GenericFactory<IRepository> {
  create(): IRepository {
    return new FirstConsumerRepository();
  }
}
