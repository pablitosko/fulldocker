import {
  DeleteFirstConsumerDTO,
  PostFirstConsumerDTO,
  PutFirstConsumerDTO,
} from './../dto/first-consumer.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { FirstConsumerService } from '../services/first-consumer.service';

@Controller()
export class FirstConsumerController {
  constructor(private readonly firstConsumerService: FirstConsumerService) {}

  @Get('/id/:id')
  async getById(@Param('id') id: string): Promise<string> {
    console.log(JSON.stringify(`{"newid":${id}}`));
    return await this.firstConsumerService.getById(id);
  }

  @Get('/all')
  async getAll(): Promise<string> {
    return await this.firstConsumerService.getAll();
  }

  @Post()
  async create(
    @Body() postFirstConsumerDTO: PostFirstConsumerDTO,
  ): Promise<string> {
    return await this.firstConsumerService.create(postFirstConsumerDTO);
  }

  @Put()
  async update(
    @Body() putFirstConsumerDTO: PutFirstConsumerDTO,
  ): Promise<string> {
    return await this.firstConsumerService.update(putFirstConsumerDTO);
  }

  @Delete()
  async remove(
    @Body() deleteFirstConsumerDTO: DeleteFirstConsumerDTO,
  ): Promise<string> {
    return await this.firstConsumerService.remove(deleteFirstConsumerDTO);
  }
}
