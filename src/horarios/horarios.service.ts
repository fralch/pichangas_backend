import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHorarioDto } from './dto/create-horario.dto';
import { Horario } from './entities/horario.entity'; 
import { UpdateHorarioDto } from './dto/update-horario.dto';


@Injectable()
export class HorariosService {
  constructor( @InjectRepository(Horario) private horarioRepository: Repository<Horario>) {}


  create(createHorarioDto: CreateHorarioDto) {
    return 'This action adds a new horario';
  }

  findAll() {
    return `This action returns all horarios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} horario`;
  }

  update(id: number, updateHorarioDto: UpdateHorarioDto) {
    return `This action updates a #${id} horario`;
  }

  remove(id: number) {
    return `This action removes a #${id} horario`;
  }
}
