import { Get, Post, Put, Delete, Body, Param, Patch} from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { createUsuarioDto } from './dto/create-usuario.dto';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './usuario.entity';

@Controller('usuarios')
export class UsuariosController {
    constructor(private usuariosService : UsuariosService) { }

    @Get()
    findAll(): Promise<Usuario[]> {
        return this.usuariosService.findAll();
    }

    @Post()
    createUsuario(@Body() newUsuario: createUsuarioDto){
        return this.usuariosService.createUsuario(newUsuario);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.usuariosService.findOne_user(+id);
    }
 

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUsuarioDto: createUsuarioDto) {
        return this.usuariosService.update(+id, updateUsuarioDto);
    }
    

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.usuariosService.remove(+id);
    }
  
    @Post('login')
    checkUser(@Body('email') email: string, @Body('password') password: string) {
        return this.usuariosService.checkUser(email, password);
    }
    

    
}

