import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class PostFirstConsumerDTO {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  public id: string;
}

export class PutFirstConsumerDTO {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  public id: string;
}

export class DeleteFirstConsumerDTO {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  public id: string;
}
