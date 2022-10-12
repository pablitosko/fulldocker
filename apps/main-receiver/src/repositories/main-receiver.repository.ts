import { IData } from './../interface/IData.interface';
import { Injectable } from '@nestjs/common';
import { IRepository } from '../interface/IRepository.interface';
/* istanbul ignore next */
@Injectable()
export class MainReceiverRepository implements IRepository {
  async update(data: IData): Promise<string> {
    return `main-receiver: registro atualizado: ${data.id}`;
  }
  async delete(data: IData): Promise<string> {
    return `main-receiver: registro deletado: ${data.id}`;
  }

  async getAll(): Promise<string> {
    return `# TYPE db2_prometheus_adapter_info gauge`;
  }

  async getById(id: string): Promise<string> {
    return `main-receiver: Id enviado para busca: ${id}`;
  }

  async create(data: IData): Promise<string> {
    return `main-receiver: registro criado: ${data.id}`;
  }
}
