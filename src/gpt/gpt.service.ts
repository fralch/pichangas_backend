import { Injectable } from '@nestjs/common';
import { CreateGptDto } from './dto/create-gpt.dto';
import { UpdateGptDto } from './dto/update-gpt.dto';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class GptService {

  async create(createGptDto: CreateGptDto) {
    return 'This action adds a new gpt';
  }

   findAll() {
    return `This action returns all gpt`;    
  }

  findOne(id: number) {
    return `This action returns a #${id} gpt`;
  }

  update(id: number, updateGptDto: UpdateGptDto) {
    return `This action updates a #${id} gpt`;
  }

  remove(id: number) {
    return `This action removes a #${id} gpt`;
  }
}
