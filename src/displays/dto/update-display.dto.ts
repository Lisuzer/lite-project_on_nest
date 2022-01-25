import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { MatrixType } from '../schemas/matrix-type.enum';

export class UpdateDisplayDto {
  @ApiProperty({
    description: 'display mark',
    required: false,
    default: 'samsung',
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  mark: string;

  @ApiProperty({
    description: 'display price',
    required: false,
    default: 2600,
  })
  @IsOptional()
  @IsNumber()
  @IsPositive()
  price: number;

  @ApiProperty({
    description: 'display matrix type',
    required: false,
    default: MatrixType.TN,
  })
  @IsOptional()
  @IsEnum(MatrixType)
  matrixType: MatrixType;

  @ApiProperty({
      description: 'display model',
      required: false,
      default: 'Curved'
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  model: string;
}
