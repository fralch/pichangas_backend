import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
import {createUsuarioDto} from './dto/create-usuario.dto'



@Injectable()
export class UsuariosService {
    constructor(
        @InjectRepository(Usuario)
        private usersRepository: Repository<Usuario>,
      ) {}
    

      createUsuario(usuario: createUsuarioDto) {
        const nuevo = this.usersRepository.create(usuario);
        return this.usersRepository.save(nuevo);
      }
}
