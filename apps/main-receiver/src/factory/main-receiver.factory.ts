import { Injectable } from '@nestjs/common';
import { IRepository } from '../interface/IRepository.interface';
import { MainReceiverRepository } from '../repositories/main-receiver.repository';
import { GenericFactory } from './generic.factory';

@Injectable()
export class MainReceiverFactory extends GenericFactory<IRepository> {
  create(): IRepository {
    return new MainReceiverRepository();
  }
}
