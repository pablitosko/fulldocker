import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class PostMainReceiverDTO {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  public id: string;
}

export class PutMainReceiverDTO {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  public id: string;
}

export class DeleteMainReceiverDTO {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  public id: string;
}
