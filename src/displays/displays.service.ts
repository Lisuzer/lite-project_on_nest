import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateDisplayDto } from './dto/create-display.dto';
import { UpdateDisplayDto } from './dto/update-display.dto';
import { Display, DisplayDocument } from './schemas/display.schema';
import { Model, Types } from 'mongoose';

@Injectable()
export class DisplaysService {
  constructor(
    @InjectModel(Display.name) private displayModel: Model<DisplayDocument>,
  ) {}

  async getAll(): Promise<Display[]> {
    return this.displayModel.find().exec();
  }

  async getOne(id: string): Promise<Display> {
    return this.displayModel.findById(id);
  }

  async create(displayDto: CreateDisplayDto): Promise<Display> {
    const newDisplay = new this.displayModel(displayDto);
    return newDisplay.save();
  }

  async remove(id: string): Promise<Display> {
    return this.displayModel.findByIdAndRemove(id);
  }

  async update(id: string, displayDto: UpdateDisplayDto): Promise<Display> {
    const updatedDisplay = await this.displayModel.findOneAndUpdate({_id : new Types.ObjectId(id)}, displayDto, { new: true });
    if(!updatedDisplay){
        throw new NotFoundException('Display with given id not found');
    }
    return updatedDisplay;
  }
}
