import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCanchaDto } from './dto/create-cancha.dto';
import { UpdateCanchaDto } from './dto/update-cancha.dto';
import { Cancha } from './entities/cancha.entity';

@Injectable()
export class CanchasService {
  constructor( @InjectRepository(Cancha) private canchaRepository: Repository<Cancha>) {}

  create(createCanchaDto: CreateCanchaDto) {
    const nuevoCancha =  this.canchaRepository.create(createCanchaDto);
    return this.canchaRepository.save(nuevoCancha);
  }

  async findAll() : Promise<Cancha[]> {
    return await this.canchaRepository.find();
  }

  findOne_cancha(id: number) {
    const cancha = this.canchaRepository.findOne({ where: { id } });
    if (!cancha) {
      throw new Error(`Cancha #${id} not found`);
    }
    return cancha;
  }

  async update(id: number, actualizarCanchaDto: UpdateCanchaDto) {
    const cancha = await this.findOne_cancha(id);
    Object.assign(cancha, actualizarCanchaDto);
    return  this.canchaRepository.save(cancha);
  }

 async remove(id: number) {
    const cancha = await this.findOne_cancha(id);
    return this.canchaRepository.remove(cancha);
  }
}
