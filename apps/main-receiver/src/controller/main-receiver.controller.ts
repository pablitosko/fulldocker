import {
  DeleteMainReceiverDTO,
  PostMainReceiverDTO,
  PutMainReceiverDTO,
} from './../dto/main-receiver.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MainReceiverService } from '../services/main-receiver.service';

@Controller()
export class MainReceiverController {
  constructor(private readonly mainReceiverService: MainReceiverService) {}

  @Get('/id/:id')
  async getById(@Param('id') id: string): Promise<string> {
    console.log(JSON.stringify(`{"newid":${id}}`));
    return await this.mainReceiverService.getById(id);
  }

  @Get('/all')
  async getAll(): Promise<string> {
    return await this.mainReceiverService.getAll();
  }

  @Post()
  async create(
    @Body() postmainReceiverDTO: PostMainReceiverDTO,
  ): Promise<string> {
    return await this.mainReceiverService.create(postmainReceiverDTO);
  }

  @Put()
  async update(
    @Body() putmainReceiverDTO: PutMainReceiverDTO,
  ): Promise<string> {
    return await this.mainReceiverService.update(putmainReceiverDTO);
  }

  @Delete()
  async remove(
    @Body() deletemainReceiverDTO: DeleteMainReceiverDTO,
  ): Promise<string> {
    return await this.mainReceiverService.delete(deletemainReceiverDTO);
  }
}
