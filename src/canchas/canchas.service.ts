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

  findAll() {
    return `This action returns all canchas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cancha`;
  }

  update(id: number, updateCanchaDto: UpdateCanchaDto) {
    return `This action updates a #${id} cancha`;
  }

  remove(id: number) {
    return `This action removes a #${id} cancha`;
  }
}
