import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
import {createUsuarioDto} from './dto/create-usuario.dto'
import { async } from 'rxjs';



@Injectable()
export class UsuariosService {
    constructor(@InjectRepository(Usuario)private usersRepository: Repository<Usuario>,) {}
    

      createUsuario(usuario: createUsuarioDto) {
        const nuevo = this.usersRepository.create(usuario);
        return this.usersRepository.save(nuevo);
      }

      async findAll(): Promise<Usuario[]> {
        return this.usersRepository.find();
      }

      async findOne_user(id: number) {
        const user = await this.usersRepository.findOne({ where: { id } });
        if (!user) {
          throw new Error(`User #${id} not found`);
        }
        return user;
      }

      async update(id: number, attrs: Partial<Usuario>) {
        const user = await this.findOne_user(id);
        Object.assign(user, attrs);
        return this.usersRepository.save(user);
      }

      async remove(id: number) {
        const user = await this.findOne_user(id);
        return this.usersRepository.remove(user);
      }
}
