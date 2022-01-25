import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, version } from 'mongoose';
import { MatrixType } from './matrix-type.enum';

export type DisplayDocument = Display & Document;

@Schema()
export class Display {
  @Prop()
  mark: string;

  @Prop()
  price: number;

  @Prop({enum: MatrixType})
  matrixType: MatrixType;

  @Prop()
  model: string;
}

export const DisplaySchema = SchemaFactory.createForClass(Display);
