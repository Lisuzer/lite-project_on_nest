import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';
import { MatrixType } from '../schemas/matrix-type.enum';
export class CreateDisplayDto {
  @ApiProperty({
    description: 'display mark',
    required: true,
    default: 'samsung',
  })
  @IsString()
  @IsNotEmpty()
  mark: string;

  @ApiProperty({
    description: 'display price',
    required: true,
    default: 2600,
  })
  @IsNumber()
  @IsPositive()
  price: number;

  @ApiProperty({
    description: 'display matrix type',
    required: true,
    default: MatrixType.TN,
  })
  @IsEnum(MatrixType)
  matrixType: MatrixType;

  @ApiProperty({
    description: 'display model',
    required: true,
    default: 'Curved',
  })
  @IsString()
  @IsNotEmpty()
  model: string;
}
