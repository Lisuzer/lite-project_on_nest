import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, version } from 'mongoose';
import { MatrixType } from './matrix-type.enum';

export type DisplayDocument = Display & Document;

@Schema()
export class Display {
  @Prop()
  @ApiProperty({
    example: 'samsung'
  })
  mark: string;

  @Prop()
  @ApiProperty({
    example: 2600,
  })
  price: number;

  @Prop({enum: MatrixType})
  @ApiProperty({
    example: MatrixType.TN,
  })
  matrixType: MatrixType;

  @Prop()
  @ApiProperty({
    example: 'Curved'
  })
  model: string;
}

export const DisplaySchema = SchemaFactory.createForClass(Display);
