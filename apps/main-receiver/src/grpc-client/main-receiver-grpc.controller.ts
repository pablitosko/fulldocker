import { Get, OnModuleInit, Param } from '@nestjs/common';
import { Body, Controller, Inject } from '@nestjs/common';
import { ClientGrpc, RpcException } from '@nestjs/microservices';
import { Observable } from 'rxjs';

interface FirstConsumerGrpcService {
  getById(data: { id: string }): Observable<any>;
}

@Controller('mainreceiver-grpc-clients')
export class MainReceiverGrpcClientController implements OnModuleInit {
  private firstConsumerGrpcService: FirstConsumerGrpcService;

  constructor(@Inject('FIRSTCONSUMER_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.firstConsumerGrpcService =
      this.client.getService<FirstConsumerGrpcService>('FirstConsumerService');
  }

  @Get(':id')
  async getBydId(@Param() id) {
    try {
      return await this.firstConsumerGrpcService.getById(id);
    } catch (e) {
      throw new RpcException({ code: e.code, message: e.message });
    }
  }
}
