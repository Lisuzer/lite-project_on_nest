import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DisplaysController } from './displays.controller';
import { DisplaysService } from './displays.service';
import { Display, DisplaySchema } from './schemas/display.schema';

@Module({
  controllers: [DisplaysController],
  providers: [DisplaysService],
  imports: [
    MongooseModule.forFeature([{ name: Display.name, schema: DisplaySchema }]),
  ],
})
export class DisplaysModule {}
