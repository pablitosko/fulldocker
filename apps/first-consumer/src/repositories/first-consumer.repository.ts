import { IData } from './../interface/IData.interface';
import { Injectable } from '@nestjs/common';
import { IRepository } from '../interface/IRepository.interface';
/* istanbul ignore next */
@Injectable()
export class FirstConsumerRepository implements IRepository {
  async update(data: IData): Promise<string> {
    return `first-consumer: registro atualizado: ${data.id}`;
  }
  async remove(data: IData): Promise<string> {
    return `first-consumer: registro deletado: ${data.id}`;
  }

  async getAll(): Promise<string> {
    return `# TYPE db2_prometheus_adapter_info gauge`;
  }

  async getById(id: string): Promise<string> {
    return `first-consumer: Id enviado para busca: ${id}`;
  }

  async create(data: IData): Promise<string> {
    return `first-consumer: registro criado: ${data.id}`;
  }
}
