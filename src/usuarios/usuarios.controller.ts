import { Get, Post, Put, Delete, Body, Param} from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { createUsuarioDto } from './dto/create-usuario.dto';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
    constructor(private usuariosService : UsuariosService) { }

    @Get()
    getUsuarios(): string {
        return 'Lista de usuarios';
    }

    @Post()
    createUsuario(@Body() newUsuario: createUsuarioDto){
        return this.usuariosService.createUsuario(newUsuario);
    }

    
}

