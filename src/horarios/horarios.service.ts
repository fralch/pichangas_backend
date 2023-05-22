import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHorarioDto } from './dto/create-horario.dto';
import { Horario } from './entities/horario.entity'; 
import { UpdateHorarioDto } from './dto/update-horario.dto';


@Injectable()
export class HorariosService {
  constructor( @InjectRepository(Horario) private horarioRepository: Repository<Horario>) {}


 async create(createHorarioDto: CreateHorarioDto) {
    const hora = createHorarioDto.hora;
    const cancha_id = createHorarioDto.cancha_id;
   
    const existe = await this.horarioRepository
      .createQueryBuilder('horario')
      .where('horario.cancha_id = :cancha_id', { cancha_id: cancha_id })
      .andWhere('horario.hora = :hora', { hora: hora })
      .getOne();
    if (existe) {
      console.log('Ya existe un horario con esa hora');
      return 0 ; 
    }

    const nuevo = this.horarioRepository.create(createHorarioDto);
    return this.horarioRepository.save(nuevo);

  }

  findAll() {
    return this.horarioRepository
    .createQueryBuilder('horario')
    .innerJoinAndSelect('horario.cancha_id', 'cancha')
    .innerJoinAndSelect('horario.usuario_id', 'usuario')
    .select(['horario.id', 'horario.hora', 'horario.estado', 'horario.fecha', 'cancha.id', 'usuario.id'])
    .getMany();
  }

  findOnebyCancha( cancha_id: number, usuario_id: number) { 
    return this.horarioRepository
    .createQueryBuilder('horario')
    .innerJoinAndSelect('horario.cancha_id', 'cancha')
    .innerJoinAndSelect('horario.usuario_id', 'usuario')
    .where('horario.cancha_id = :cancha_id', {cancha_id: cancha_id})
    .andWhere('horario.usuario_id = :usuario_id', {usuario_id: usuario_id})
    .select(['horario.id', 'horario.hora', 'horario.estado', 'horario.fecha', 'cancha.id', 'usuario.id'])
    .getMany();
   
  }

  update(id: number, updateHorarioDto: UpdateHorarioDto) {
    
    return this.horarioRepository.update(id, updateHorarioDto);

  }

  remove(id: number) {
    return `This action removes a #${id} horario`;
  }
}
